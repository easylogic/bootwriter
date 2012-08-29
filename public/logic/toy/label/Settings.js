define([
    '../ToySettings.js'
],function(ToySettings){
    return ToySettings.extend({

        getPreview: function(obj) { 
            
            var text = $(markdown.toHTML(obj.text));
            
            var labelType = "label label-";
            if (obj.labelType == 'badge') { 
                labelType = "badge badge-";
            } 
            
            text.prepend("<span class='"+ labelType + "" + this.htmlEntities(obj.kind) +"'>" + this.htmlEntities(obj.title) + "</span> " )
            
            var div = $('<div />');
            
            div.append(text);
            
            obj.viewText = div.html() ;
            
            return obj;
        },        
        
        getAttributeData : function(value, elem) { 
            return {
                kind        : elem.find(".kind option:selected").val(),
                labelType   : elem.find(".labelType option:selected").val()
            };
        },                

        getLocalConfig : function(config) { 
            return _.extend(config, {
                infoList: [
                    { type : 'select', value: config.labelType, select: [ 'label','badge'], name: 'labelType', title: 'Label Type '  },                
                    { type : 'select', value: config.kind, select: [ 'default', 'info', 'success', 'warning', 'important', 'inverse'], name: 'kind', title: 'Kind '  },                
                    { type : 'title', value : config.title, title : 'Label' },
                    { type : 'text', value: config.text }
                ],                
            })
        } 
    })
})
