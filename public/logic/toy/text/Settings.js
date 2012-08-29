define([
    './tpl/View.js',
    '../ToySettings.js'
],function(View, ToySettings){
    return ToySettings.extend({
        htmlEntities : function (str) {
            return String(str).replace(/&/g, '&amp;')
                              .replace(/</g, '&lt;')
                              .replace(/>/g, '&gt;')
                              .replace(/"/g, '&quot;')
                              .replace(/\n/g, "<br />\n");                 
        },           
        
        getPreview: function(obj) { 
          
            obj.text = this.htmlEntities(this.editor.getValue());
            obj.viewText = View(obj);

            return obj;
        },
        
        onShow: function() {
            this.setEditor('editor');
        },        
        
        getLocalConfig : function(config) { 
            return _.extend(config, {
                infoList: [
                    { type : 'select', value: config.kind, select: [ 'div', 'p', 'pre', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'a', 'section', 'header', 'footer'], name: 'kind', title: 'Type '  },                
                    { type : 'editor', value: config.text, title: "", width: '100%', height: '300px', full : true }
                ]                
            })
        }
    })
})
