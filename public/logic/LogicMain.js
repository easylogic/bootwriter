define([
    './tpl/LogicMain.js', 
    './LogicToolbar.js',
    './LogicMenuBox.js',
    './LogicContents.js',
    './LogicSettings.js',
], function(tpl, LogicToolbar, LogicMenuBox, LogicContents, LogicSettings) { 
    return Backbone.View.extend({
        initialize: function(opt) { 
            
            App.main       = this;
            this.toolbar    = new LogicToolbar();
            this.menubox    = new LogicMenuBox();
            //this.menubar    = new LogicMenuBox();
            this.contents   = new LogicContents();
            this.settings   = new LogicSettings();
        },
        
        setTitle: function(title,  tags) {
            tags = tags || []; 
            
            var untitle = 'Untitled Document';
            
            var settings = $('<a class="btn btn-small btn-info" title="Settings"><i class="icon-cog icon-white"></a>').on('click', function(e) { 
                App.main.contents.rootBox.selectEdit();
                return false; 
            })                
            
            var span = $('<span />');
            
            if (title)
                span.append(title).removeClass('untitled')
            else 
                span.append(untitle).addClass('untitled');
            
            span.on('dblclick', function(e){
                var title = $(this).text();
                
                var text = $("<input type='text' />").val(title == untitle ? '' : title).addClass('title_text').css('width', '100%');
                span.after(text).hide();
                
                var callback = function(e){
                    var subtitle = $(this).val();
                    
                    if (subtitle == '') { 
                      span.addClass('untitled')  
                    }  else { 
                      span.removeClass('untitled')
                    }
                    
                    span.text(subtitle == '' ? untitle : subtitle).show();
                    
                    if (subtitle) {
                        span.removeClass('untitled')
                    } else { 
                        span.addClass('untitled')
                    }
                    
                    $(this).remove();
                    
                    self.title = subtitle;                    
                       
                }   
                
                text.on('blur', callback).on('keydown', function(e){
                    if (e.keyCode == 13) callback.call(this,e);
                    
                }).focus();
             });                
            
            var h1 = $('<h1 />').append(span)
            
            $('.boxset').html($("<div />").html(settings));
            
            this.$(".logic-view .titlebar").html(h1)
            
            if (tags.length > 0) { 
                tags.sort();
                for (var i in tags) {
                    if (typeof tags[i] == 'function') continue;
                    var code = $('<code />').append(tags[i]);
                    this.$(".logic-view .titlebar").append(code).append("&nbsp;");                    
                }
             }
        },
        
        setDocumentEvent: function() {
            // binding click event 
            $(document).click(function(e){
                App.initSelectToy();
                $('.select_box').removeClass('select_box'); 
                e.stopPropagation();
            })
            
            var self = this;
                            
            // binding key event 
            $(document).keydown(function(e){

                if (!$('.bModal').length) {

                    if (App.toy) {
                        App.toy.keyMap(e);
                    } else {
                        App.keyMap(e);
                    }
           
                } else {        // if bModal open
                    if (e.altKey) {
                        var code = e.keyCode;
                        if (49 <= code && code <= 57 ) {
                            var index = code - 49;
                            $('.modal-header-menu li:eq(' + index + ') a').tab('show');    
                        } else if (code == 83){     // Alt + s , save contents 
                            if (App.toy) {
                                App.toy.settings.update();
                            }
                        }
                        
                    } else if (!e.altKey && !e.ctrlKey && !e.shiftKey) {
                         if ( 37 <= e.keyCode && e.keyCode <= 40 ) {
                            if ($('.add-toys').length) {
                                self.menubox.toys.moveSelectToy(e.keyCode);
                            }
                         }  else { 
                            if ($('.add-toys').length) {
                                self.menubox.toys.addToy();
                            }
                         }
                    }
                } 
 
            })            
        },
        
        render: function() {
            
            this.$el.html(tpl())

            $("#toolbar").append(this.toolbar.render().el);            
            $("#menubox").append(this.menubox.render().el);    
            $("#settings").html(this.settings.render().el);
                
            this.$(".logic-view .contents").append(this.contents.render().el);
            this.setDocumentEvent();    
            
            this.setTitle();
             
            return this;    
        }
    })    
});
