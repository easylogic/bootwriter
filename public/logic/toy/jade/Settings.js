define([
    '../ToySettings.js'
],function(ToySettings){
    return ToySettings.extend({
         
        getPreview: function(obj) { 
            obj.text = this.editor.getValue();
            
            var jadeTpl = require("jade").get().compile(obj.text); 
            obj.viewText = jadeTpl();   

            return obj;
        },
        
        onShow: function() {
            this.setEditor('editor', 'textile');
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
