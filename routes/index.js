var Mongolian = require("mongolian");
var server = new Mongolian("180.67.207.72:27017");
var ObjectId = Mongolian.ObjectId;
var db = server.db('easylogic');

exports.index = function(app, auth){
  var everyauth = auth;
  
  function setTagList(obj, prev_tags) {
    prev_tags = prev_tags || [];
    var tags = db.collection('toys.tags');
    
    tags.remove({ _id : obj._id }, function(error, doc){
        for(var i  in obj.tag) { 
            tags.save({ tag : obj.tag[i].toLowerCase(), docId : obj._id});
        }
    });
  }
  
  var getUserObject = function(auth) { 
    var user = {};

    for(var k in auth) { 
        if (k == 'twitter') { 
            user = {
                authType : 'twitter',
                icon : 'http://twitter.com/favicons/favicon.ico',
                username : auth.twitter.user.name,
                profile : auth.twitter.user.profile_image_url,
                id : auth.twitter.user.id
            }     
        } else if (k == 'github') {
            user = {
                authType : 'github',
                icon : 'https://github.com/favicon.ico',
                username : auth.github.user.login,
                profile : auth.github.user.avatar_url,
                id : auth.github.user.id
            }                 
        } else if (k == 'tumblr') {
            
            if (auth.tumblr.user){
                user = {
                    authType : 'tumblr',
                    icon : 'http://assets.tumblr.com/images/favicon.gif?2',
                    username : auth.tumblr.user.name,
                    profile : auth.tumblr.user['avatar-url'],
                    id : auth.tumblr.verifier
                }                       
            }
     
            
        } else if (k == 'facebook') {
            user = {
                authType : 'facebook',
                icon : 'http://static.ak.fbcdn.net/rsrc.php/yi/r/q9U99v3_saj.ico',
                username : auth.facebook.user.username,
                profile : 'https://graph.facebook.com/' + auth.facebook.user.id + '/picture',
                id : auth.facebook.user.id
            }     
        } else if (k == 'google') {
            user = {
                authType : 'google',
                icon : 'https://ssl.gstatic.com/s2/oz/images/faviconr2.ico',
                username : auth.google.user.name,
                profile : auth.google.user.picture,
                id : auth.google.user.id
            }     
        }   
    }
    
    return user;     
  }
  
  var checkLogin = function (req) { 
    return req.session.auth.twitter || req.session.auth.github || req.session.auth.facebook || req.session.auth.google;
  }
  
  
  app.get('/video/:filename', function(req, res){

      var pathToMovie2 = require('path').normalize(__dirname + "/../video/" + req.params.filename);
      
      res.download(pathToMovie2);

  })
  
  app.get('/', function(req, res) { 
    var auth = getUserObject(req.session.auth);       
      
    res.render('index', { title: "EasyLogic's Blog", mode: 'view', auth : auth })    
  });
  
  app.get('/about', function(req, res) { 
      var auth = getUserObject(req.session.auth);             
      var type = req.params.type || 'text';
      var menus = [
        { title : '소개',   type : 'introduce'},
      ];
      
      res.render('about', { menus : menus, auth : auth   });      
   
  });  
  
  app.get('/write/:id?', function(req, res){
      var auth = getUserObject(req.session.auth);             
      var id = req.params.id || '';
      
      res.render('form/write', { id : id, mode: 'write', auth : auth  });
  });
  
  app.get('/view/:id', function(req, res){
    var auth = getUserObject(req.session.auth);             
      var id = req.params.id || '';
      
      res.render('form/write', { id : id, mode : 'view', auth : auth  });
  });  
  
  app.post('/toys/children/:id', function(req, res) {
      var posts = db.collection('toys');
      var id = req.params.id || '';      
      var obj = req.body;
      
      var auth = getUserObject(req.session.auth); 
      
      if (!auth) { 
        res.send('Sorry, can not access', 404);
      } else {       

          posts.findOne({ _id : new ObjectId(id)}, function(err, doc){
               if (err) { 
                   res.send('Sorry, cant find that', 404);
               } else {
    
                    if (!doc.auth || !auth || doc.auth.id != auth.id) { 
                        res.send('Sorry, cant not access', 404);
                    } else { 
                        if (!obj.children) {
                            obj.children = [];
                        }
                       
                        posts.findAndModify( { query : { _id : new ObjectId(id)}, update: { '$set' : obj }, 'new' : true}, function(error, value){
                                  if (error) {        // 성공
                                      res.send('Sorry, can not find that ', 404); 
                                      
                                  } else {              // 실패 
                                      res.send('OK', 200);
                                  }
                                  
                        });                        
                    }
    

              }
            });
       }
  });  
  
  app.post('/toys', function(req, res) {
      var posts = db.collection('toys');
      var obj = req.body; 
      
      obj.auth = getUserObject(req.session.auth); 
      
      if (!obj.auth) { 
        res.send('Sorry, can not access', 404);
      } else {       
       
          obj.createTime = new Date();
          posts.insert(obj);
          
          if (obj._id) {        // 성공
              
              setTagList(obj);              
               
              obj._id += "";        // 아이디 문자열로 만들기
              res.send(obj);
          } else {              // 실패 
              obj = { result: 'error' }
              res.send('Sorry, can not find that ', 404);              
          }
       }
  });

  app.put('/toys/:id', function(req, res) {
      var posts = db.collection('toys');
      var id = req.params.id; 
      var obj = req.body;
      
      posts.findOne({ _id : new ObjectId(req.params.id)}, function(err, value){
           if (err) { 
               res.send('Sorry, cant find that', 404);
           } else {
               
               var auth = getUserObject(req.session.auth); 
               
               if (!value.auth || !auth || value.auth.id != auth.id) { 
                res.send('Sorry, cant not access', 404);
               } else { 

                  // change object id from string 
                  obj._id = new ObjectId(obj._id);
                  obj.modifyTime = new Date();
                  posts.save(obj, function(error2, value2){
                      
                      if (error2) { 
                        res.send('Sorry, cant find that', 404);
                      } else { 
                          
                        setTagList(value2, value.tag || []);                          
                          
                        value2._id += "";
                        res.send(value2);    
                      }
                      
                  });  
                   
              }
               
    
           }
      });      
  });  
  
  app.get('/tags', function(req, res){
      var tags = db.collection('toys.tags');
      
      tags.distinct( 'tag', function(err, arr){
          if (err) {
            res.send("can't access", 404);
          } else {
            arr.sort();
            res.send(arr);  
          }
      })
  })
  
  app.get('/toys/:id', function(req, res){
      var posts = db.collection('toys');
      var _id = new ObjectId(req.params.id);
      posts.findOne({ _id : _id }, function(err, value){
           if (err) { 
               res.send({result : 'error'});
           } else {
               value._id += "";
               res.send(value);    
           }
      });
  });
  
  app.get('/toys', function(req, res){
      var posts = db.collection('toys');
      var obj = req.body;

      posts
        .find({ type : 'box', isRoot: true, title: { $exists: true, $ne : "" } }, { _id : 1, title: 1, auth : 1, tag : 1, createTime: 1, modifyTime: 1})
        .sort({ _id : -1 })
        .skip((req.query.page - 1) * 10)
        .limit(10).toArray(function(err, value){
           if (err) {  
           		res.send({ result : 'error' }) 
           } else { 
           	
           	for(var i in value) { 
           	    value[i]._id += "";
           	    if (value[i].tag) value[i].tag.sort();
           	    if (value[i].createTime) value[i].createTime = value[i].createTime.substr(0, 10)	
            }
            
            res.send(value); 
           	
           }
      });
  });  
  
  function uploadFile(req, res, next) { 
    if (req.files) { 

    }
    
    next();
  }
  
  function addFile(req, res, next) { 
      
      
/*
        var ExifImage = require('exif').ExifImage;
        
        try {
            new ExifImage({ image : req.files.fieldNameHere.path }, function (error, image) {
                if (error)
                    console.log('Error: '+error.message);
                else
                    console.log(image); // Do something with your data!
            });
        } catch (error) {
            console.log('Error: ' + error);
        }   */
      // res.send("/uploads/" + req.files.image.path.split("uploads")[1]);
      var image = req.files.image;
      var files = db.collection('toys.files');
      var obj = {
        "size" : image.size,
        "path" : "/uploads" + image.path.split("uploads")[1],
        "name" : image.name,
        "type" : image.type
      }; 
      files.insert(obj);
      
      if (obj._id) {        // 성공 
          obj._id += "";        // 아이디 문자열로 만들기
      } else {              // 실패 
          obj = {
              result: 'error'
          }
      }
      
      res.send("/uploads/" + obj._id);           
  }   
  
  app.get('/uploads/:id', function(req, res){
      var files = db.collection('toys.files');
      var _id = new ObjectId(req.params.id);
      files.findOne({ _id : _id }, function(err, value){
           if (err) { 
               res.send({result : 'error'});
           } else { 
               value._id += "";
               res.sendfile("public" + value.path);     
           }
      });
  });
  
  app.get('/download/:id', function(req, res){
      var files = db.collection('toys.files');
      var _id = new ObjectId(req.params.id);
      files.findOne({ _id : _id }, function(err, value){
           if (err) { 
               res.send({result : 'error'});
           } else { 
               value._id += "";
               res.download("public" + value.path, value.name);     
           }
      });
  });  
  
  app.post('/uploads', uploadFile, addFile);
  

  

  
};
