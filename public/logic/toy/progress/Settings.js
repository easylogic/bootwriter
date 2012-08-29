define([
    '../ToySettings.js'
],function(ToySettings){
    return ToySettings.extend({
        kindList: [ 'default', 'info', 'success', 'warning', 'danger'],
        
        getAttributeData : function(value, elem) { 
            return {
                kind        : elem.find(".kind option:selected").val(),
                percent     : elem.find(".percent").val(),
            };
        },        
        
        getPreview: function(obj) { 
          
            var temp = "<div class='progress progress-" + obj.kind + "'><div class='bar' style='width: " + parseInt(obj.percent) + "%'></div></div>";
            
            obj.viewText = temp; 

            return obj;
        },
        
        getLocalConfig : function(config) { 
            return _.extend(config, {
                infoList: [
                    { type : 'select', value: config.kind, select: [ 'default', 'info', 'success', 'warning', 'danger'], name: 'kind', title: 'Type '  },                
                    { type : 'li_text', value: config.percent, name: 'percent', title: '%' }
                ]                
            })
        }
    })
})
