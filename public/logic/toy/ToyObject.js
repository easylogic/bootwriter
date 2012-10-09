define([
    './tpl/object.js',
	'./ToyModel.js'
],function(tpl, Model){
    return Backbone.View.extend({
        
        events: { 
            'dblclick .viewText'          : 'selectEdit',
            'doubletab .viewText'          : 'selectEdit'
        },
        
        keyMap: function(e) {
            var code = e.keyCode;
            
             if (e.shiftKey && e.keyCode == 187) { // plus(+)
                $('.plus-btn').click();
            } else if (e.keyCode == 46) {       // delete 
                if (confirm("Delete a toy really?")) {
                    this.remove();
                    this.$el.remove();
                    App.initSelectToy();
                    delete this;
                }
            } else if (e.keyCode == 13) { // enter 
                this.selectEdit(e);
            } else if (e.keyCode == 39) {       // right
                
                if (e.ctrlKey && e.shiftKey) {       // ctrl + shift + right  
                    this.moveNext();
                } else if (e.ctrlKey) {       // ctrl + right 
                    this.changeSpan(1);
                } else if (e.shiftKey) {       // shift + right  
                    this.changeOffset(1);
                } else {
                    var obj = this.next();
                    
                    if (!obj) { 
                        if (this.parent.isContainer && !this.parent.isRoot()){
                            this.parent.selectNext();
                            return false;
                        } else {
                            obj = App.main.contents.rootBox.firstChild();    
                        }
                    }
                    
                    if (obj) {
                        obj.setSelectedToy();
                    }
                }
                
            } else if (e.keyCode == 37) {       // left
                
                if (e.ctrlKey  && e.shiftKey) {       // ctrl + shift + left  
                    this.movePrev();
                } else if (e.ctrlKey) {       // ctrl + left  
                    this.changeSpan(-1);
                } else if (e.shiftKey) {       // shift + left 
                    this.changeOffset(-1);
                } else {
                    var obj = this.prev();
                    
                    if (!obj) { 
                        if (this.parent.isContainer && !this.parent.isRoot()){
                            this.parent.selectPrev();
                            return false;
                        } else {
                            obj = App.main.contents.rootBox.lastChild();    
                        }                                
                    }
                    
                    if (obj) {
                        obj.setSelectedToy();
                    }
                }

            } else if (e.keyCode == 40) {       // down
                if (this.isContainer){
                    this.selectChild();
                } 
            }             
        },
        
        
        
        appendBeforeObject: function(comp) {
           if (!this.isRoot() && this.parent.isContainer) {
                this.parent.beforeComp(this, comp);
            }            
        },
        
        appendAfterObject: function(comp) {
            if (!this.isRoot() && this.parent.isContainer) {
                this.parent.afterComp(this, comp);
            }
        },                
        
        
        getModel: function() { 
        	var model = new Model({ type : this.type });
        	model.view = this;
        	
        	return model; 
        },
        
        isRoot: function() { return false; },
        
        initialize: function(opt) {
            // assign cid
            App.toys[this.cid] = this;
                         
            this.preload();
            this.base(opt);
        },
        
        preload: function() { 
            
        },
        
        base : function(opt) {
            opt = opt || {} ;
            
            var self = this; 

            this.model = this.getModel();
            this.model.view = this;
            
            this.settings = this.getSettings();
            
            this.$el.hide();
            if (opt.isRoot) { this.model.set('isRoot', opt.isRoot); }            
            if (opt.parent) { this.parent = opt.parent; }            
                                                    
            if (opt._id) { 
                this.load(opt._id, function() { 
                    if (opt.success) opt.success.call(self);
                });    
            } else { 
                if (!this.isRoot() && opt.span) this.model.set('span', opt.span);
                this.save({
                    success: function() { 
                        if (opt.success) opt.success.call(self);    
                    }
                });            
            }            
        },      

        load: function(_id, callback) {
            var self = this;  
            this.model.id = _id;
            this.model.fetch({
                success: function() {
                    self.render();
                    callback();
                }
            });  
        },        
        
        toJSON : function() { 
            return this.model.toJSON();  
        },
    	
        setModel: function(obj, callback) { 
          this.model.set(obj);  
          this.save(null, callback);            
        },
        
        save: function(opt, callback) { 
            this.model.save(opt, {
                success: function() { 
                    callback && callback();    
                },
                error : function(model, res) { 
                    alert(res.responseText);    
                }
            });
        },       
        
        saveChildren: function() { 
                        
        }, 
        
        remove : function() { 
            
            if (this.parent) { 
                this.parent.removeComp(this.cid);   
                this.parent.initBackground(); 
            }
        },
        
        removeAll: function() { 
            if (confirm("Are you really delete toy?")) { 
              this.remove();
              this.$el.remove();
            }
        },
        
        resetHSpan: function(hspan) { 
            hspan = (hspan == undefined) ? this.model.get('hspan') : hspan;
                        
            if ($('#cal_height').length) { 
               var obj = $('#cal_height').removeClass(function(index, css){
                    var matches = css.match(/span\d+/g) || [];
                    return matches.join(' ');   
                }).addClass('span' + hspan);
            } else { 
                var obj = $('<div id="cal_height" />').addClass('span' + hspan);
                obj.hide().appendTo('body');                
            }                        
            
            var width = obj.width();
            
            // if span exists
            this.$el.parent().css('height', '');               
            
            if (hspan > 0) {
                this.$el.parent().height(width + "px").attr('data-cid', this.cid);     
            }
        },
        
        changeSpan: function(span) {
            
            var temp = parseInt(this.model.get('span')) + (parseInt(span) || 1);
             
            if (temp < 1 || temp > 12) {
                return false;
            }
             
            this.model.set('span', temp);
            
            //this.resetSpan();
            //this.parent.doLayout(this);
            this.parent.resetLayout(this);
            this.viewSimpleInfo();
            this.hideSimpleInfo();
            
            this.save();
        },
        
        changeOffset: function(offset) {
            
            var prevOffset = this.model.get('offset');
            
            if (!prevOffset) {
                prevOffset = 0;
            }
            
            var temp = parseInt(prevOffset) + (parseInt(offset) || 1);
             
            if (temp < 0 || temp > 11) {
                return false;
            }
             
            this.model.set('offset', temp);
            
            //this.resetOffset();

            this.parent.resetLayout(this);
            this.viewSimpleInfo();
            this.hideSimpleInfo();
                        
            this.save();
        },
        
        
        
        setSimpleInfo: function(left, right) {
            if (left) this.$('.menu_list .simple-view-left').html(left);
            if (right) this.$('.menu_list .simple-view-right').html(right);
        },
        
        viewSimpleInfo: function(left, right) {
            var left = left || this.model.get('offset');
            var right = right || this.model.get('span');
            
            this.setSimpleInfo(left, right);
            
            if (left) this.$('.menu_list .simple-view-left').fadeIn();
            if (right) this.$('.menu_list .simple-view-right').fadeIn();    
        },
        
        hideSimpleInfo: function(time) {
            time = time || 200;
            
            var self = this; 
            setTimeout(function(){  self.$('.menu_list .simple-view').fadeOut(); }, time);
            
        },
       
        show: function(isSettings) { 
            this.$el.fadeIn('fast');

            if (isSettings) {
                this.settings.open();
            }
        },
        
        hide: function() { 
            this.$el.fadeOut('fast');  
        },
        
		getMaxSpan: function() {
		    return 12; 
		},
				
		getSpanList: function(max) { 
            var span_list = [];
            for(var i = 1; i <= max ; i++) { 
            	span_list.push(i);	
            }
            
            return span_list;					
		},
        
        appendLeft: function(comp, isCreate) {
            if (this.parent && this.parent.isContainer) 
                this.parent.beforeComp(this, comp, isCreate); 
        },
        appendRight: function(comp, isCreate) {
            if (this.parent && this.parent.isContainer)            
                this.parent.afterComp(this, comp, isCreate); 
        },
        
        getPoint: function(type) {  return this.$('.logic-comp-' + type + '[data-cid='+ this.cid + ']'); },
        getViewPoint: function() {  return this.getPoint('viewpoint'); },         
        getChildPoint: function() {  return this.getPoint('childpoint'); },         
        getIconPoint: function() {  return this.getPoint('iconpoint'); },         
        
        getTplData: function() { 
            var data =  _.extend(this.getDefaultValue(), this.toJSON(), {
                cid : this.cid,
                isRoot: this.isRoot(),
                isContainer: this.isContainer             
            });
            
            if (!data.viewText) {
                data.viewText = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" 
            }
            
            if (data.skinText) { 
                data.skinText = data.skinText.replace(/.skinText/, "#" + this.cid);
            }
            
            return data; 
        },
        
				
        setStyle: function(data) { 
            var obj = this.getViewPoint();
            
            this.resetHSpan(data.hspan);          
                
        },
        
        /**
         * 컴포넌트별에 객체추가 방식 
         * 
         * @param {Object} type Toy 타입
         * @param {Object} span 넓이
         * @param {Object} align parent 안에서의 위치, left, right
         */
        addObjectAt: function(type, span, align) {
              var Comp = null;
              var self = this;
              span = span || 12;
              align = align || 'left';
              
              App.require(type, function(Comp) {
                    var value = _.extend({span : span, parent: self.parent });
                    var obj = { } ;
                    
                    obj =  new Comp(value);
                    obj.render();

                    // 위치 선정
                    if (align == 'left') {
                        self.appendLeft(obj, true);
                    } else if (align == 'right'){
                        self.appendRight(obj, true);                        
                    }
                    
                    obj.show(true);
                    
                    setTimeout(function() { self.parent.save(); }, 1000);    
              });
        },          
        
        setSelectedToy: function() { 
            App.setSelectToy(this);
            $('.select_box').removeClass('select_box');
            this.$el.addClass('select_box');
            
            this.scroll();
            
        },
        
        selectNext: function() {
            var obj = this.next();
            if (!obj) {
                obj = App.main.contents.rootBox.firstChild();
            }
 
            if (obj) { 
                obj.setSelectedToy();    
            }
        },
        
        selectPrev: function() {
            var obj = this.prev();
            if (!obj) {
                obj = App.main.contents.rootBox.lastChild();
            }
             
            if (obj) {
                obj.setSelectedToy();
            }
        },
        
        selectChild: function() { 
            var obj = this.firstChild();
            if (obj) { 
                obj.setSelectedToy();
            }
        },
        
        initContextMenu: function() {
           this.$el.popover('destroy'); 
        },
        
        scroll: function() {
            $('html,body').animate({ scrollTop : this.$el.offset().top - 150}, 'fast');
        },
        
        setDragEvent: function() { 

            if (App.mode == 'view') return;
             
            var self = this;
           
            if (!this.isRoot()) {
                 
                this.$el.click(function(e){
                    e.stopPropagation();  
                    App.initContextMenu();
                    self.setSelectedToy();
                    return false; 
                })              
                
                this.setResizableEvent();
            }

            if (!this.isRoot()) {
                this.setDraggableEvent();
                this.setDroppableEvent();
            } 
           
        },
        
        setResizableEvent: function() {
            var self = this; 
            var resizableReset = function(e, ui) { 
                
                var handle = $(this).css("cursor").split("-")[0];
                
                if (handle == "w"){
                    
                    var offset = Math.floor(( Math.abs(ui.position.left) + App.GridGutter)/(App.GridGutter + App.GridWidth));
                    
                    if (ui.position.left > 0) { 
                        offset = App.offsetOrigin + offset  ;
                    } else { 
                        offset = App.offsetOrigin - offset ;    
                    }

                    if (offset < 0) offset = 0;
                    
                    var span = App.spanOrigin - offset;
                    
                    //self.$el.css({ top: "", left: "", width: "", height: "", position: "" })

                    if (e.ctrlKey) {
                        self.resetOffset(offset);    
                        self.resetSpan(span);
                    } else { 
                        self.resetOffset(offset);
                    }
           
                    self.viewSimpleInfo();
                        
                    App.offset = offset;
                    App.span = span;
                    App.resizableMode = "w";                        
                } else { 
                    
                    var span = Math.floor((ui.size.width + App.GridGutter)/(App.GridGutter + App.GridWidth));
                    
                    if (span > 12) span = 12;
                    
                    //self.$el.css({ top: "", left: "", width: "", height: "", position: "" })
                    
                    self.model.set({span: span});
                    self.resetSpan(span);
                    
                    self.viewSimpleInfo();
                    
                    App.resizableMode = "e";
                }
            };
            
            
            this.$el.parent().resizable( "destroy" ).resizable({
                minHeight: App.GridWidth,
                minWidth: App.GridWidth,
                containment: ".logic-comp-childpoint",
                handles: "e,w",
                distance: App.GridWidth + App.GridGutter,
                grid : App.GridWidth + App.GridGutter,
                start: function(e, ui) {
                    var handle = $(this).css("cursor").split("-")[0];
                
                    if (handle == "w"){
                        App.spanOrigin = parseInt(self.model.get('offset') || 0) + parseInt(self.model.get('span') || 0); 
                        App.offsetOrigin = parseInt(self.model.get('offset') || 0); 
                    }
                    self.viewSimpleInfo();                        
                    
                },
                
                resize: function(e, ui) { 
                    resizableReset.call(this, e, ui);
                },
                stop: function(e, ui) {
                    if (App.resizableMode == 'w') {
                        if (e.ctrlKey){
                            self.model.set('offset', App.offset);    
                            self.model.set('span', App.span);    
                        } else {
                            self.model.set('offset', App.offset);    
                        }
                    }

                    App.resizableMode = "";
                    App.offset = "";                        
                    App.span = "";                        
                    self.save();
                    
                    self.$el.parent().css({ top: "", left: "", width: "", height: "", position: "" })
                    self.hideSimpleInfo();                         
                },                    
            });             
            
        },
        
        setDroppableEvent: function() {
            var self = this; 
            this.$el.droppable({
                drop: function(event, ui) {
                    var obj = $(this);
                    if (obj.hasClass('right')) {
                        var toy = App.toys[ui.draggable.data('cid')];
                        self.appendRight(toy);
                        toy.setSelectedToy();
                    } else if (obj.hasClass('left')){
                        var toy = App.toys[ui.draggable.data('cid')];
                        self.appendLeft(toy);
                        toy.setSelectedToy();
                    } else if (obj.hasClass('center')){
                        if (self.isContainer && !self.isRoot()) {
                            var toy = App.toys[ui.draggable.data('cid')];
                            self.insertComp(toy);
                            toy.setSelectedToy();                        
                        }

                    }
                    
                    $(this).removeClass('droppable_over');
                },
                
                activate: function(event, ui) {
                    console.log('activate');
                    
                    console.log(event,ui);  
                    
                },
                
                over: function(event, ui) {
                    
                    console.log(ui, event);
                    
                    $(this).addClass('droppable_over');
                }, 
                
                out: function(event, ui) { 
                    $(this).removeClass('droppable_over');
                }
            })                
            
        },
        
        setDraggableEvent: function() {
            var self = this; 
            this.$el.draggable({
                cursorAt: { 
                  left: 15,
                  top: 15  
                },
                scroll: true, 
                scrollSensitivity: 100,
                cursor: 'pointer',
                helper: function(){
                    return $("<div />").addClass('draggable_helper').html("<i class='icon-white " + App.list[self.type].icon + "'></i>").attr('data-cid', self.cid);
                },
                drag :function(event, ui) {

                    var cid = $('.droppable_over').data('cid');
                    
                    if (cid) {
                        var offset = App.toys[cid].$el.offset();
                        var width = $('.droppable_over').width();
                        
                        var offsetWidth = ui.offset.left - offset.left;
                        
                        var gap = (width / 4);

                        $('.droppable_over').removeClass('right left center');
                                                
                        if (gap * 3 < offsetWidth) {   // right
                            $('.droppable_over').addClass('right');    
                        }  else if (gap > offsetWidth ) {                        // left
                            $('.droppable_over').addClass('left');    
                        } else { 
                            $('.droppable_over').addClass('center');    
                        }
                    }
                    
                }
            });            
        },
        
        selectEdit: function() {
            
            if (App.mode != 'view') this.settings.open(); 
            return false;   
        },
        
        update : function() { 
            this.render();
        },

        /**
         * just override
         *  
         */        
        getTpl : function(data) { return ""; },         
        getSettings: function() { return {}; },        
         
        /**
         * enabled override
         *  
         */ 
        renderViewPoint: function(data) {  this.getPoint('viewpoint').html(this.getTpl(data)); },
        //renderChildPoint: function(data) {  },
        getDefaultValue: function() { return {}; },        
        onRender: function(data) { }, 
        isContainer: false,         
        isCustomRender: false,      
        
        firstChild: function() { 
          return this.children[0];            
        },
        
        lastChild: function() { 
          return this.children[this.children.length-1];  
        },
        
        index: function() { 
            var len = this.parent.children.length;
            
            for(var i = 0; i < len; i++) {
                if (this.parent.children[i] == this) { 
                    return i;    
                }
            }
            
            return -1;
        },
        
        next: function() { 
            
            var current = this.index() + 1;
            if (current >= this.parent.children.length ) { 
                return null;
            } else { 
                return this.parent.children[current];
            }
        },   
        
        prev: function() { 
            
            var current = this.index();
            
            if (current <= 0) { 
                return null;
            } else { 
                return this.parent.children[current-1];
            }
        },
        
        moveNext: function() { 
            var obj = this.next();
            
            if (obj) {
                obj.appendRight(this);
                this.scroll();
            }
        },
        
        movePrev: function() { 
            var obj = this.prev();
            
            if (obj) {
                obj.appendLeft(this);
                this.scroll();
            }
        },        
        
        resetEventList: function() { 
            this.delegateEvents();
            this.setDragEvent();
        },
        
        render: function() {
            
            // load data 
            var data = this.getTplData();
            
            // apply tpl html
            this.$el.html(tpl(data));
            
            this.$el.attr('data-cid', this.cid);            
            
            // render view Point 
            //this.renderViewPoint(data);

            // set style   
            this.setStyle(data);
            
            this.resetEventList();
            
            // after render  
            this.onRender(data);            
            
            //this.renderChildPoint(data);
            
            return this;    
        },
        
        exportHTML: function() { 
            
        },
        
        exportJSON: function() { 
            var data = this.model.toJSON();
   
            var temp = []; 
            if (this.children) { 
                for(var i in this.children) {
                    var child = this.children[i];
                    
                    if (typeof child == 'function') continue;
                     
                    temp.push(child.model.toJSON());
                }
            }  
            
            
            data.children = temp;
            
            return data;
        }
    })
})
