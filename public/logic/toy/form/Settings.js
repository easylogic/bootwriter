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
            
            obj.viewText = View(data);
                        
            return obj;
        },
        
        getLocalConfig : function(config) { 
            return _.extend(config, {
                infoList: [
                    { type : 'select', value: config.kind, select: [ 'default', 'search', 'inline', 'horizontal'], name: 'kind', title: 'Type '  },                
                    { type : 'title', value : config.title, title: 'Title' },
                    { type : 'text', value: config.text, title: 'Content' }
                ]                
            })
        }
    })
})
