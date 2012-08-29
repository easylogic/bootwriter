define([
    './tpl/object.js',
	'./ToyModel.js'
],function(tpl, Model){
    return Backbone.View.extend({
        
        events: { 
            'dblclick .viewText'          : 'selectEdit',
            'doubletab .viewText'          : 'selectEdit'
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
            
            this.resetSpan();
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
            
            this.resetOffset();
            this.save();
        },        
        
        resetSpan: function(span) {
            span = (span == undefined) ? this.model.get('span') : span;
                        
            // if span exists
            this.$el.parent().removeClass(function(index, css){
                var matches = css.match(/span\d+/g) || [];
                return matches.join(' ');   
            });               
            
            if (span > 0) {
                this.$el.parent().addClass('span' + span, 'slow').attr('data-cid', this.cid);     
            }
               
        },
        
        resetOffset: function(offset) {
            offset = (offset == undefined) ? this.model.get('offset') : offset;            
            // if offset exists
            this.$el.parent().removeClass(function(index, css){
                var matches = css.match(/offset\d+/g) || [];
                return matches.join(' ');   
            });               
            
            if (offset > 0) {
                this.$el.parent().addClass('offset' + offset).attr('data-cid', this.cid);        
            }
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
            
            this.resetSpan(data.span);          
            this.resetOffset(data.offset);          
            this.resetHSpan(data.hspan);          
            
            if (App.mode == 'write') {
                //this.$el.css('cursor', 'pointer');
                //this.$el.addClass(App.list[this.type].view.replace("btn-", "back-"));
            }
                
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
                
                /*
                this.$el.on('contextmenu', function(e){
                    e.stopPropagation();                    
                    if (e.button == 2)  {       // context menu , right click 
                        
                        App.initConextMenu();
                        
                        $(this).popover({
                            
                            placement: 'bottom',
                            trigger: 'manual',
                            title: function() {
                                return App.list[self.type].name;  
                            },
                            content: function() { 
                                return "<a href=''>fdsafdsafds</a>";   
                             }
                        }).popover('show');
                    }
                    
                    self.setSelectedToy();
                    return false; 
                }) */
                
                var grid = App.GridWidth + App.GridGutter;
                
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
                        
                        self.$el.css({ top: "", left: "", width: "", height: "" })

                        if (e.ctrlKey) {
                            self.resetOffset(offset);    
                            self.resetSpan(span);
                        } else { 
                            self.resetOffset(offset);
                        }
                            
                        App.offset = offset;
                        App.span = span;
                        App.resizableMode = "w";                        
                    } else { 
                        var span = Math.floor((ui.size.width + App.GridGutter)/(App.GridGutter + App.GridWidth));
                        
                        if (span > 12) span = 12;
                        
                        self.$el.css({ top: "", left: "", width: "", height: "" })
                        
                        self.model.set({span: span});
                        self.resetSpan();
                        App.resizableMode = "e";
                    }
                };
                
                
                this.$el.resizable( "destroy" ).resizable({
                    minHeight: App.GridWidth,
                    minWidth: App.GridWidth,
                    containment: ".logic-comp-childpoint",
                    handles: "e,w",
                    distance: App.GridGutter,
                    grid : grid,
                    start: function(e, ui) {
                        var handle = $(this).css("cursor").split("-")[0];
                    
                        if (handle == "w"){
                            App.spanOrigin = parseInt(self.model.get('offset') || 0) + parseInt(self.model.get('span') || 0); 
                            App.offsetOrigin = parseInt(self.model.get('offset') || 0); 
                        }
                        
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
                    },                    
                }); 
            }

            
            this.getChildPoint().sortable({
                 connectWith: ".logic-comp-childpoint",
                 helper: 'clone',
                 placeholder: 'sortableHelper',
                 tolerance: 'intersect',
                 start: function(event, ui) { 
                    
                    $('.sortableHelper').addClass(ui.item.attr('class')).html(ui.item.clone().html()).css({
                        height: ui.item.height(),
                        opacity : 0.5
                    }).find('> div').removeClass('select_box');
                    
                    $('.sortableHelper').find(".ui-resizable-handle").remove();
                    $('.sortableHelper').removeClass(".ui-resizable");
                     
                 },
                 
                 beforeStop: function(event, ui) {
                    ui.item.fadeOut(50).fadeIn('slow');  
                 },
                 
                 stop: function(event, ui) {
                     
                        if (ui.item.data('name')){
                            $('.modal').remove();
                            $('.modal-backdrop').remove();                            
                            var box = App.toys[ui.item.parent().data('cid')];
                            
                            var prev = ui.item.prev();
                            if (prev) { 
                                // 이전 객체 로 넣기 
                                var toy = App.toys[prev.data('cid')]; 
                                toy.addObjectAt(ui.item.data('type'), box.model.get('span') || App.MaxSpan, 'right');
                            } else { 
                                // 처음에 넣기 
                                box.addObject(ui.item.data('type'), box.model.get('span') || App.MaxSpan, 'first');    
                            }
                            
                            ui.item.hide('slow').remove();
                            
                        } else { 
                            $(this).css('background', ''); 
                            // this is box 
                            var toy = App.toys[ui.item.data('cid')];
                            var box = App.toys[toy.$el.parent().parent().data('cid')];
                            
                            if (box.cid != toy.parent.cid) {
                                toy.remove();                                       
                                toy.parent = box;
                            }
                                
                            box.sortChildren();                            
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
        renderChildPoint: function(data) {  },
        getDefaultValue: function() { return {}; },        
        onRender: function(data) { }, 
        isContainer: false,         
        isCustomRender: false,      
        
        firstChild: function() { 
          return this.getChildPoint().children().first();            
        },
        
        lastChild: function() { 
          return this.getChildPoint().children().last();  
        },
        
        next: function() { 
            return this.$el.parent().next();
        },   
        
        prev: function() { 
            return this.$el.parent().prev();            
        },
        
        moveNext: function() { 
            var obj = this.next();
            
            if (obj.length) {
                
                App.toys[obj.data('cid')].appendRight(this);
                this.scroll();
            }
        },
        
        movePrev: function() { 
            var obj = this.prev();
            
            if (obj.length) {
                App.toys[obj.data('cid')].appendLeft(this);
                this.scroll();
            }
        },        
        
        render: function() {
            
            // load data 
            var data = this.getTplData();
            
            // apply tpl html
            this.$el.html(tpl(data));
            
            this.$el.attr('data-cid', this.cid);            
            
            // render view Point 
            //this.renderViewPoint(data);

            this.delegateEvents();
            
            // set style   
            this.setStyle(data);
            
            this.setDragEvent();
            
            // after render  
            this.onRender(data);            
            
            this.renderChildPoint(data);
            
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
