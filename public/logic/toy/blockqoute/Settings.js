define([
    '../ToySettings.js'
],function(ToySettings){
    return ToySettings.extend({
        getAttributeData : function(value, elem) { 
            return {
                kind        : elem.find("select.kind option:selected").val()
            };
        },        
        
        getPreview: function(obj) { 
          
            var temp = markdown.toHTML(obj.text);
            
            if (obj.title) { 
               temp += "<small>"+this.htmlEntities(obj.title) +"</small>"; 
            }

            obj.viewText = "<blockquote class='pull-" + obj.kind + "'>" + temp + "</blockquote>"; 

            return obj;
        },
        
        getLocalConfig : function(config) { 
            return _.extend(config, {
                infoList: [
                    { type : 'select', value: config.kind, select: [ 'left', 'right'], name: 'kind', title: 'Type '  },                
                    { type : 'title', value : config.title },
                    { type : 'text', value: config.text , title: 'Author' }
                ]              
            })
        } 
    })
})
