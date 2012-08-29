define([ 
	'./tpl/settings.js'
],function(tpl){
    return Backbone.View.extend({
        className : 'modal hide',
        
        events: {
          'click a.remove': 'remove',
          'click a.save': 'update',
          'change .themes': 'selectThemes',
          'click a.themes-image' : 'selectThemes',
          'swipeleft .tab-pane': 'moveLeft',
          'swiperight .tab-pane': 'moveRight'
        },     
        
        moveLeft: function (e) {
          this.moveTab(1);  
        },
        
        moveRight: function(e) { 
          this.moveTab(-1);  
        },
        
        moveTab: function(step) {
            var li = $('.modal-header-menu li.active');

            var obj = li;
            
            if (step > 0) {
                for(var i = 0; i < step ; i++) {
                    var temp = obj.next();
                    
                    if (temp) {
                        obj = temp; 
                    }
                }
            } else if (step < 0) {
                for(var i = step; i > 0; i--) {
                    var temp = obj.prev();
                    
                    if (temp) {
                        obj = temp; 
                    }
                }
            }
            
            obj.find('a').tab('show');
        },
        
        setImageAttr: function(data) { 
        
            if (data.imageType) data.cls = "img-" + data.imageType;

            return data.cls;
        },        
        
        selectThemes: function(e) { 
            var obj = $(e.currentTarget);
            
            var index = obj.data('themes');
            
            this.resetThemes(index);

        },
        
        resetThemes: function(i) { 
            $('a.themes-image').removeClass('active');
            $('a.themes-image[data-themes=' + i + ']').addClass('active');
        },
        
        isRoot: function() { 
            return this.parent.isRoot();  
        },    
        
        update : function(e) { 
            var data = _.extend({ cid : this.parent.cid}, this.getData(this.$el));
            
            var value = this.getPreview(data);
            
            $('html,body').animate({ scrollTop : this.parent.$el.offset().top - 100});
                        
            var self = this;
            
            delete value.target; 
            
            this.parent.setModel(value, function() {
                self.parent.update();    
            });
                                    
            this.$el.close();
            
            //this.parent.setSelectedToy();
        },
        
        getThemes: function() { 
            return [ 
                { name: 'SkinA', link : '/logic/themes/SkinA/index.css'}, 
                { name: 'SkinB', link : '/logic/themes/SkinB/index.css'}, 
                { name: 'SkinC', link : '/logic/themes/SkinC/index.css'}, 
                { name: 'SkinD', link : '/logic/themes/SkinD/index.css'} 
            ];
        },
        
        preview: function(e) { 
            
        },
        
        remove: function(e) { 
            if (!this.isRoot() && confirm("Delete this toy?")) { 
              this.$el.modal('hide');             
              this.parent.remove();
              this.parent.$el.remove();
              delete this.parent;                
            }
        },
        
        initialize: function(opt) { 
            if (opt.parent) this.parent = opt.parent;
        },
        
        getWindowWidth: function() { 
          return {
              width: '940px',
              left: '40%'  
          };
        },        
        
        onShow: function() { },
        onClose: function() { },
        
        setEditor: function(id, mode, theme) {
            id = id || 'editor';
            mode = mode || 'text';
            theme = theme || 'twilight';
            
            this[id] = ace.edit(id);
            this[id].setTheme("ace/theme/" + theme);
            this[id].session.setMode('ace/mode/' + mode);
            
            var self = this; 
            
            setTimeout(function(){ 
                self[id].focus();
                self[id].commands.addCommand({
                    name: 'Save Contents',
                    bindKey: { win : 'Alt-S', mac: 'Command-S'},
                    exec: function(editor){
                        self.update();
                    }
                }) 
            }, 100);             
        },
        
        setSkinEditor: function() {
            this.setEditor('skineditor', 'css');
        },
        
        open : function() {
            var self = this;
            
            this.render();
                        
            $('body').append(this.$el);

            this.$el.bPopup({
              onOpen: function() { 
                  var width = self.getWindowWidth();
                    if (width) { 
                        self.$el.css(width);    
                    }

                 self.$('select').chosen({
                        allow_single_deselect: true
                 }).trigger("liszt:updated").change(function(e){
                        
                 });
                 
                 self.setSkinEditor();
                 
                 self.onShow();
 
              },
              
              onClose: function() { 
                  self.onClose();
                  
                  self.parent.setSelectedToy();
                  self.$el.remove();
              }  
            });
        },
        getPreview: function(obj) { 
            return obj;
        },        
        
        getAttributeData : function(value, elem) { 
            return { };
        },
        
        getSkinText: function(data) { 
            
            var temp = "";
            new(less.Parser)().parse(".skinText { " + data + " } ", function(e, root) { temp = root.toCSS() })
            return temp;  
        },
        
        getDefaultAttributeData : function(value, elem) {
            
            var cnt = elem.find('.tag').length;
            var tag = "";
            if (cnt > 0) { 
                tag = _.map(elem.find('.tag').val().split(","), function(str) { return $.trim(str); } );
            }
            
            /**
             * #{cid} .viewText { 
             *          
             * }
             *  
             */
            var skin = this.skineditor.getValue();
            var skinText = this.getSkinText(skin);
             
            return { 
                title       : elem.find('.title').val(),
                text        : elem.find('.text').val(), 
                span        : elem.find('.spanarea option:selected').val(),
                hspan       : elem.find('.hspanarea option:selected').val(),
                offset      : elem.find('.offsetarea option:selected').val(),
                tag         : tag,
                skin        : skin,
                skinText    : skinText,
                kind        : elem.find(".kind option:selected").val()
            };
        },        
        
        getLocalConfig : function(config) { 
            return _.extend(config, {
                kindList: this.kindList
            })
        },        
        
        getData : function (elem) {
            var value = this.parent.model.toJSON();
            
            // 속성 확장 
            value = _.extend(value, this.getDefaultAttributeData(value, elem), this.getAttributeData(value, elem));
                        
            return value; 
        },
        
        getTplConfig: function() {
            var defaultValue = this.parent.getDefaultValue() 
            var data = this.parent.toJSON() 
            var config = _.extend(defaultValue, data, {
                max_span : this.parent.getMaxSpan(),
                themes      : this.getThemes(),
                isList   :  this.isList,
                isTable  : this.isTable,
                isUpload : this.isUpload,
                isThemes: this.isThemes,
                isForm: this.isForm,
            });
            
            config.span_list = this.parent.getSpanList(config.max_span);
						
            return this.getLocalConfig(config);
        },
        
        getTpl : function(data) { 
            return tpl(data);  
        },
        
        onRender: function(data) { 
            
        },
        
        htmlEntities : function (str) {
            return String(str).replace(/&/g, '&amp;')
                              .replace(/</g, '&lt;')
                              .replace(/>/g, '&gt;')
                              .replace(/"/g, '&quot;')
                              ;                 
        }, 
        
        render: function() {
            var data = this.getTplConfig();
						
            this.$el.html(this.getTpl(data));
            
            this.$el.css('position', 'absolute');
            this.$el.find('.modal-header').css('cursor', 'move');
            this.delegateEvents();
            
            //this.$el.draggable({ handle: ".modal-header"});
            
            this.onRender(data);
            
            return this;     
        }        
      
    })
})
