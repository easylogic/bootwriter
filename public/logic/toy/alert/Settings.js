define([
    './tpl/View.js',
    '../ToyListSettings.js'
],function(View, ToyListSettings){
    return ToyListSettings.extend({
        
        getAttributeData : function(value, elem) { 
            return {
                kind    : elem.find(".kind option:selected").val(),
                list    : this.getList()
                
            };
        },        
        
        getPreview: function(obj) { 
          	
            var data = obj;
            
            data.title = this.htmlEntities(obj.title);
            data.text = markdown.toHTML(obj.text);
            
            data.list = this.setButtonAttr(data.list);
            
            obj.viewText = View(data);
                        
            return obj;
        },
        
        getLocalConfig : function(config) { 
            return _.extend(config, {
                infoList: [
                    { type : 'select', value: config.kind, select: [ 'default', 'info', 'success', 'error', 'info'], name: 'kind', title: 'Type '  },                
                    { type : 'title', value : config.title },
                    { type : 'text', value: config.text }
                ]                
            })
        }
    })
})
