define([
    '../ToySettings.js'
],function(ToySettings){
    return ToySettings.extend({
        
        getPreview: function(obj) { 
          
            obj.text = this.editor.getValue();
            obj.viewText = markdown.toHTML(obj.text);

            return obj;
        },
        
        onShow: function() {
            this.setEditor('editor', 'markdown');
        },
        
        getLocalConfig : function(config) { 
            return _.extend(config, {
                infoList: [
                    { type : 'editor', value: config.text, title: "", width: '100%', height: '300px', full: true }
                ]
            })
        }
    })
})
