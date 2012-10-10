define([
    './ToyObject.js'
],function(ToyObject){
    return ToyObject.extend({
        isContainer: true,
        
        /**
         * 움직이는 toy 를  현재 toy 앞으로  
         * 
         * parent 랜더링 다시 
         *  
         */
        beforeComp: function(src, target, isCreate) {
            //this.beforeRender(src, target, isCreate);
            this.beforeToy(src, target);
              
            this.doLayout();          
            //this.initBackground();
        },
        
        /**
         * 움직이는 toy 를  현재 toy 뒤로  
         * 
         * parent 랜더링 다시 
         *  
         */        
        afterComp: function(src, target, isCreate) {
            //this.afterRender(src, target, isCreate);    
            this.afterToy(src, target);            
             
            this.doLayout();           
           // this.initBackground();    
        },  
        
        /**
         * 움직이는 toy 를  child 맨 마지막 순서로   
         * 
         * parent 랜더링 다시 
         *  
         */
        insertComp: function(target) {
            //this.insertRender(target);          
            this.insertToy(target);
              
            this.doLayout();            
            //this.initBackground();
        },
        
        removeComp: function(cid) {
            var temp = []; 
            for (var i in this.children) {
                var child = this.children[i];
                
                if (typeof child == 'function') continue;
                if (child.cid == cid) continue;
                 
                temp.push(child);
            }
            
            this.children = temp;
            //this.saveChildren();
              
            this.doLayout();  
                        
            //this.initBackground();
        },
        
        // add element after rendering
        firstComp: function(obj) { 
            this.firstToy(obj);
            //this.firstRender(obj);       
            
            this.doLayout();            
            //this.initBackground();         
        },
        
        // add element after rendering 
        lastComp: function(obj) { 
            console.log(obj);
            this.lastToy(obj);
            //this.lastRender(obj); 
              
            this.doLayout();          
            //this.initBackground();   
        },        
        
        insertObject: function(comp) {
            this.insertComp(comp);
                        
            //this.initBackground();
        },                           
        
        /**
         * children 랜더링 규칙 
         * 
         */

        /**
         * 움직이는 toy 앞으로 추가 될 때 
         *  
         */   
        
        /*
         * @deprecated     
        beforeRender: function(src, target, isCreate) { 
            target.hide();
            if (isCreate) { 
                var wrap = this.wrap("");
                src.$el.parent().before(wrap.html(target.$el));
                target.resetSpan();                
            } else { 
                src.$el.parent().before(target.$el.parent());    
            }                       
            
            target.show();
        },
        
        afterRender: function(src, target, isCreate) { 
            target.hide(); 
            if (isCreate) { 
                var wrap = this.wrap("");
                src.$el.parent().after(wrap.html(target.$el));
                target.resetSpan();                
            } else { 
                src.$el.parent().after(target.$el.parent());    
            }           
            target.show();
        },        
        
        insertRender: function(target) { 
            target.hide();   
            var wrap = this.wrap("");         
            this.getChildPoint().append(wrap.html(target.$el));
            target.resetSpan();            
            target.show();
        },        
        
        firstRender: function(obj) { 
            this.prependElement(this.wrap(obj.$el));
            obj.resetSpan();            
        },

        lastRender: function(obj) { 
            this.appendElement(this.wrap(obj.$el));
            obj.resetSpan();
        },
        
        appendElement : function(elem) {
            this.getChildPoint().append(elem);  
        },
        
        prependElement : function(elem) { 
            this.getChildPoint().prepend(elem);  
        },        
        */
        
        /**
         * children 저장 규칙 
         *  
         */        
        
        /**
         * 움직이는 toy 앞으로 저장 
         *  
         */
        beforeToy: function(src, target) { 
            target.remove();
            
            var temp = [];
            for(var i in this.children) { 
                var child = this.children[i];
                if (child.cid == src.cid) { temp.push(target); }
                temp.push(child);
            }
            
            this.children = temp; 
            //this.saveChildren();
        },


        /**
         * 움직이는 toy 뒤로  저장 
         *  
         */
        afterToy: function(src, target) { 
            target.remove();
                        
            var temp = [];
            for(var i in this.children) { 
                var child = this.children[i]; 
                temp.push(child); 
                if (child.cid == src.cid) { temp.push(target); }
            }
            
            this.children = temp; 
            //this.saveChildren();
        },        
        
        /**
         * 전체 toy 중 마지막으로 저장 
         *  
         */
        insertToy: function(target) { 
            target.remove();
                        
            this.children.push(target); 
            target.parent = this;
            //this.saveChildren();
        },      
        
                
        sortChildren: function() { 
            var temp = [];
            this.getChildPoint().find("> [data-cid]").each(function(i, obj){
                temp[i] = App.toys[$(obj).data('cid')];
            })

            this.children = temp;
            //this.saveChildren();
          
            this.doLayout();
            //this.initBackground();
        },        
        
        /**
         * 첫번째 toy 로 추가  
         */
        firstToy: function(obj) { 
            this.children.unshift(obj);
        },
        
        setToy: function(i, obj) { 
            this.children[i] = obj;
        },

        /**
         * 마지막 toy 로 추가  
         */                
        lastToy: function(obj) { 
            this.children.push(obj);
        },        
  
        /**
         * wrapper 생성 
         *  
         */

        /**
         * @deprecated
        addWrap: function(html) {
            html = html || ""; 
            var wrap_html = this.initWrap(html);
            this.appendElement(wrap_html);
            
            return wrap_html;
        },     
        
        initWrap: function(html) { 
            return $('<div />').html(html);            
        },             
        */
        addObjectById: function(obj, isLoad, i) { 
           
            var self = this, opt = obj, isLoad = isLoad || false, i = i || 0;
            var index = i; 
            
            App.require(obj.type, function(Comp){
                var toy = new Comp({
                    parent: self, 
                    _id : obj.id, 
                    success: function() {
                        self.children[index] = this;
                        this.show(false);
                        
                        self.doLayout();        
                    }
                });
                
            })
        },
       
        initBackground: function() {
            if (this.children.length == 0) {
                if (!this.isRoot()){
                    this.getChildPoint()
                        .html("<div class='blank' style='margin-left:20px;'><div class='blank-inner'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div></div>")
                        .find('.blank-inner')
                        .css({
                            border: '1px dashed black'
                        });    
                }
            } else { 
                if (!this.isRoot()){
                    this.getChildPoint().find('.blank').remove();    
                }   
            }
            
        },
        
        addObject: function(type, span, align) {
           
              var Comp = null;
              var self = this;
              align = align || 'last';
              
              App.require(type, function(Comp) {
                    var value = _.extend({span : span, parent: self});
                    var obj = { } ;
                    
                    obj =  new Comp(value);
                    //obj.render();
                    
                    if (align == 'first') {
                        self.firstComp(obj);
                    } else if (align == 'last'){
                        self.lastComp(obj);
                    }
                    
                    obj.show(true);

                    //setTimeout(function() { self.save(); }, 1000);
                        
              });
        },        
      

        load: function(_id) {
            var self = this;  
            this.model.id = _id;
            this.model.fetch({
                success: function() {
                    self.render();
                    self.loadToys();
                }
            });  
        },        
        
        loadToys: function() {
            this.children = this.model.get('children');
            
            for(var i in this.children) { 
                var child = this.children[i];
                
                if (typeof child == 'function') continue;
                
                this.addObjectById(child, true, i);
            }             
        },
        
        getToys: function() {
            var temp = []; 
            if (this.children) { 
                for(var i in this.children) {
                    var child = this.children[i];
                    
                    if (typeof child == 'function') continue;
                     
                    temp.push({ type : child.type, id : child.model.id });
                }
            }  
            
            return temp;
        },        

        resetLayout: function(comp) { 
            comp = comp || 'all';
             
            var layout = this.model.get('layout') || 'flow';

            var layoutObject = this.getLayoutObject(layout);
            
            layoutObject.resetLayout(comp);            
            
        },
        
        doLayout: function(comp) {
            comp = comp || 'all';
             
            var layout = this.model.get('layout') || 'flow';

            var layoutObject = this.getLayoutObject(layout);

            this.getChildPoint().html(layoutObject.createLayout(comp));
            
            layoutObject.afterLayout(comp);
        },

        getLayoutObject: function(type) { 
            return {
                createLayout : function() { 
                    return $("<div />");
                }
            } 
        },
       
        preload: function(opt) { 
            this.children = [];
        }
    })
})
