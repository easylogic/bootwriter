
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , everyauth = require('everyauth')
  , Promise    = everyauth.Promise;
  
process.on('uncaughtException', function(err) {
  console.log('uncaughtException ===');
  console.log(err);
});  
  
var usersById = {} 
var nextUserId = 0;

function addUser(source, sourceUser) { 
    var user;
    if (arguments.length == 1) { 
        user = sourceUser = source;
        user.id = ++nextUserId;
        return userById[nextUserId] = user;
    } else { 
        user = usersById[++nextUserId] = {id: nextUserId};
        user[source] = sourceUser;
    }    
    return user;
}  
  
var usersByTwitId = {};
var usersByGhId = {};
var usersByFbId = {};
var usersByGoogleId = {};
var usersByTumblrId = {};
  
  everyauth.everymodule.logoutPath('/bye');

  everyauth.facebook 
    .appId('284050808369482')
    .appSecret('bc1b5590bb301dac9f3b85a9018b153b')
    .findOrCreateUser(function(sess, accessToken, accessTokenExtra, fbUserMetadata){
        
        fbUserMetadata.auth = {
            authType : 'facebook',
            username : fbUserMetadata.username,
            profile : ''
        }
        
        return usersByFbId[fbUserMetadata.id] || (usersByFbId[fbUserMetadata.id] = addUser('facebook', fbUserMetadata));
    }).redirectPath('/')
  
  everyauth.github 
    .appId('1f14793bb38128344f1b')
    .appSecret('da9b560a9e27aba0dd9bf53bc2a03d0641742176')
    .findOrCreateUser(function(sess, accessToken, accessTokenExtra, githubUser){
        
        githubUser.auth = {
            authType : 'github',
            username : githubUser.login,
            profile : githubUser.avatar_url
        }        
        
        return usersByGhId[githubUser.id] || (usersByGhId[githubUser.id] = addUser('github', githubUser));
    }).redirectPath('/')
    
  
  everyauth
    .twitter
        .consumerKey('1v1I8KeG15iWRXffdU8Uw')
        .consumerSecret('hK4FijUZbSKPma3e3cvPZgGCQfnd5brVfhWeQ9PbbA')
        .findOrCreateUser(function(sess, accessToken, accessSecret, twitUser){
            
            twitUser.auth = {
                authType : 'twitter',
                username : twitUser.name,
                profile : twitUser.profile_image_url
            }   
            
            return usersByTwitId[twitUser.id] || (usersByTwitId[twitUser.id] = addUser('twitter', twitUser));
        })
        .redirectPath('/');
        
  everyauth
    .tumblr
        .consumerKey('Hm7ko8Are6b3USQA7VJxXQzU6UoOJ3Y9OoHPXAc91u0yW96M0Y')
        .consumerSecret('6zn71IwGyAWqkevBbjey1utdAj0XoQu4r9EakWAzLAD5etCdp2')
        .findOrCreateUser(function(sess, accessToken, accessSecret, tumblrUser){
            
            tumblrUser.auth = {
                authType : 'tumblr',
                username : tumblrUser.name,
                profile : tumblrUser.profile_image_url
            }   
            
            return usersByTumblrId[tumblrUser.id] || (usersByTumblrId[tumblrUser.id] = addUser('tumblr', tumblrUser));
        })
        .redirectPath('/');        
        
  everyauth.google 
    .appId('538548745802.apps.googleusercontent.com')
    .appSecret('zIglQVQQgIyysU6xXKPVtKLA')
    .scope('https://www.googleapis.com/auth/userinfo.profile')
    .findOrCreateUser(function(sess, accessToken, accessTokenExtra, googleUser){
        
        googleUser.auth = {
            authType : 'google',
            username : googleUser.name,
            profile : googleUser.picture
        }   
        
        return usersByGoogleId[googleUser.id] || (usersByGoogleId[googleUser.id] = addUser('google', googleUser));
    }).redirectPath('/')   

var app = module.exports = express.createServer(
        express.bodyParser({ keepExtensions: true, uploadDir : __dirname + "/public/uploads"})
    ,   express.cookieParser()
    ,   express.static(__dirname + '/public')
    ,   express.methodOverride()
    ,   express.session({ secret: 'easylogic123' })
    ,   everyauth.middleware()
);

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(app.router);
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

everyauth.helpExpress(app);

// Routes
routes.index(app, everyauth);

app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});

