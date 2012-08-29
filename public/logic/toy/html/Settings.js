define([
    '../ToySettings.js'
],function(ToySettings){
    return ToySettings.extend({
        
        getAttributeData : function(value, elem) {
            var text = this.$('#html_contents').html();
            
            return {
                text       : text
            };
        },
        
        onClose: function() {
           //$('#html_contents').tinymce().remove();
        },
        
        onShow: function() { 
            var self = this; 
            
            setTimeout(function(){
                $('#html_contents').tinymce({
                    script_url : '/lib/tiny_mce/tiny_mce.js',
                    mode: 'none',
                    theme : 'advanced',
                    plugins : "autolink,lists,pagebreak,style,layer,table,save,advhr,advimage,advlink,emotions,iespell,inlinepopups,insertdatetime,preview,media,searchreplace,print,contextmenu,paste,directionality,fullscreen,noneditable,visualchars,nonbreaking,xhtmlxtras,template,advlist",
        
                    // Theme options
                    theme_advanced_buttons1 : "save,newdocument,|,bold,italic,underline,strikethrough,|,justifyleft,justifycenter,justifyright,justifyfull,styleselect,formatselect,fontselect,fontsizeselect",
                    theme_advanced_buttons2 : "bullist,numlist,|,outdent,indent,blockquote,|,undo,redo,|,link,unlink,anchor,image,cleanup,help,|,insertdate,inserttime,preview,|,forecolor,backcolor,|,tablecontrols",
                    theme_advanced_buttons3 : "hr,removeformat,visualaid,|,sub,sup,|,media,advhr,|,print,|,fullscreen,code",
                    theme_advanced_toolbar_location : "top",
                    theme_advanced_toolbar_align : "left",
                    theme_advanced_statusbar_location : "bottom",
                    theme_advanced_resizing : false,
        
                    // Example content CSS (should be your site CSS)
                    content_css : "/lib/bootstrap/css/bootstrap.css",
        
                    // Drop lists for link/image/media/template dialogs
                    //template_external_list_url : "/javascript/tinymce/jscripts/tiny_mce/plugins/lists/template_list.js",
                    //external_link_list_url : "lists/link_list.js",
                    //external_image_list_url : "lists/image_list.js",
                    //media_external_list_url : "lists/media_list.js",
        
                    // Replace values for the template plugin
                    template_replace_values : {
                        //username : "Some User",
                        //staffid : "991234"
                    },
                    
                    oninit: function() { 
                        self.$('#html_contents').tinymce().focus();
                    },
                    
                    init_instance_callback: function(ed) { 
                        ed.selection.getSel().collapseToEnd();
                    },
                    
                    setup: function(ed){
                        ed.onKeyDown.add(function(ed, evt){
                            if (evt.altKey) {  // if press Alt + s  key, save contents
                                if (evt.keyCode == 83){
                                    self.update(evt);    
                                }
                            } else if (evt.keyCode == 27){
                                self.$el.close();
                            }
                        }) 
                    }
                                        
                })
            },10);

        },
        
        getPreview: function(obj) { 
          
            obj.viewText = obj.text;

            return obj;
        },
        
        getLocalConfig : function(config) { 
            return _.extend(config, {
                infoList: [
                    { type : 'html', value: config.text, full: true }
                ]                
            })
        }        
        
    })
})
