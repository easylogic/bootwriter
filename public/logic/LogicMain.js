define([
    './tpl/LogicMain.js', 
    './LogicToolbar.js',
    './LogicMenuBox.js',
    './LogicContents.js',
    './LogicSettings.js',
], function(tpl, LogicToolbar, LogicMenuBox, LogicContents, LogicSettings) { 
    return Backbone.View.extend({
        initialize: function(opt) { 
            
            this.mode       = App.mode;
            this.toolbar    = new LogicToolbar({ _id : opt._id});
            this.menubox    = new LogicMenuBox();
            //this.menubar    = new LogicMenuBox();
            this.contents   = new LogicContents({ _id : opt._id});
            this.settings   = new LogicSettings();
            
            if (opt._id) this._id = opt._id;
        },
        
        setTitle: function(title,  tags) {
            tags = tags || []; 
            
            var untitle = 'Untitled Document';
            if (App.mode == 'view') { 
                var button = $('<a class="btn btn-success">Write</a>').on('click', function(e) { 
                    location.href = '/write/' + App.main.contents.rootBox.model.id  
                })    
            } else { 
                var button = $('<a class="btn btn-success">View</a>').on('click', function(e) { 
                    location.href = '/view/' + App.main.contents.rootBox.model.id  
                })
                
                var settings = $('<a class="btn btn-info" title="Settings"><i class="icon-cog icon-white"></a>').on('click', function(e) { 
                    App.main.contents.rootBox.selectEdit();
                    return false; 
                })                
            }
            
            var span = $('<span />');
            
            if (title)
                span.append(title).removeClass('untitled')
            else 
                span.append(untitle).addClass('untitled');
            
            if (App.mode == 'write') { 
                span.on('dblclick', function(e){
                    var title = $(this).text();
                    
                    var text = $("<input type='text' />").val(title == untitle ? '' : title).addClass('span4');
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
                        
                        App.main.contents.rootBox.setModel({ title : subtitle });                    
                           
                    }   
                    
                    text.on('blur', callback).on('keydown', function(e){
                        if (e.keyCode == 13) callback.call(this,e);
                        
                    }).focus();
                 });                
            } else { 
                window.title = title + (title ? " - " : "") + "EasyLogic";
            }
            
            var h1 = $('<h1 />').append(span)
            
            $('.boxeditor').html($("<div />").html(button));
            
            if (App.mode == 'write') $('.boxset').html($("<div />").html(settings));
            
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
                
                if (App.mode == 'view') return false; 

                if (!$('.bModal').length) {

                    if (App.toy != null){
                        App.toy.$el.popover('destroy');
                    }

                    if (e.keyCode == 46) {
                        if (App.toy != null) {
                            if (confirm("Delete a toy really?")) {
                              App.toy.remove();
                              App.toy.$el.remove();
                              delete App.toy;
                              App.initSelectToy();                
                            }
                        }
                        return false;                    
                    } else if (e.keyCode == 13) {
                        if (App.toy != null) { 
                            App.toy.selectEdit();   
                        }
                    } else if (e.shiftKey && e.keyCode == 187) {
                        $('.plus-btn').click();
                    } else if (e.ctrlKey && e.shiftKey && e.keyCode == 39) {       // -> 
                        if (App.toy != null) { 
                            App.toy.moveNext();
                        }                       
                    } else if (e.ctrlKey && e.keyCode == 39) {       // -> 
                        if (App.toy != null) { 
                            App.toy.changeSpan(1);
                        }                       
                    } else if (e.shiftKey && e.keyCode == 39) {       // -> 
                        if (App.toy != null) { 
                            App.toy.changeOffset(1);
                        }                           
                    } else if (e.keyCode == 39) {       // -> 
                        if (App.toy != null) { 
                            var cid = App.toy.next().data('cid');
                            
                            if (!cid) { 
                                cid = App.main.contents.rootBox.firstChild().data('cid');
                            }
                            
                            App.toys[cid].setSelectedToy();                           
                        } else { 
                            var cid = App.main.contents.rootBox.firstChild().data('cid');
                            App.toys[cid].setSelectedToy();
                        }   
                    } else if (e.ctrlKey  && e.shiftKey && e.keyCode == 37) {       // <- 
                        if (App.toy != null) { 
                            App.toy.movePrev();
                        }                                     
                    } else if (e.ctrlKey && e.keyCode == 37) {       // <- 
                        if (App.toy != null) { 
                            App.toy.changeSpan(-1);
                        }                                     
                    } else if (e.shiftKey && e.keyCode == 37) {       // <- 
                        if (App.toy != null) { 
                            App.toy.changeOffset(-1);
                        }                                                   
                    } else if (e.keyCode == 37) {       // -> 
                        if (App.toy != null) { 
                            var cid = App.toy.prev().data('cid');
                            
                            if (!cid) { 
                                cid = App.main.contents.rootBox.lastChild().data('cid');
                            }
                            
                            App.toys[cid].setSelectedToy();
                                                       
                        } else { 
                            var cid = App.main.contents.rootBox.lastChild().data('cid');
                            App.toys[cid].setSelectedToy();
                        }        
                    }                    
                } else {        // if bModal open   
                    if (e.altKey) {
                        var code = e.keyCode;
                        if (49 <= code && code <= 57 ) {
                            var index = code - 49;
                            $('.modal-header-menu li:eq(' + index + ') a').tab('show');    
                        } else if (code == 83){     // Alt + s , save contents 
                            if (App.toy != null) {
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
            
            if (this.mode != 'view') { 
                $("#toolbar").append(this.toolbar.render().el);    
                $("#menubox").append(this.menubox.render().el);    
                $("#settings").html(this.settings.render().el);    
                
                //$(".menubar-two").append("<div style='padding-top:10px;'/>").append(this.menubar.render().el);     
            }
            
            this.$(".logic-view .contents").append(this.contents.render().el);
            //this.$(".logic-control").append(this.control.render().el);
            
            this.setDocumentEvent();
             
            return this;    
        }
    })    
});
