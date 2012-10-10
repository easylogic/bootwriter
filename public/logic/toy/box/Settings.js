define([
    '../ToySettings.js'
],function(ToySettings){
    return ToySettings.extend({

        getAttributeData : function(value, elem) { 
            var data = {
                layout     : elem.find('.layout option:selected').val()
            };
            
            if (this.isRoot()) { 
                data.text =  elem.find('.text').val();   
            }
            
            return data; 
        },
        
        getLocalConfig : function(config) {
            
            var infoList = [
                { type : 'title', value : config.title, full: true },
                { type : 'text', value : config.text, full: true },
                { type : 'tag', value: config.tag, full: true }
            ];
            
            infoList.unshift({ type : 'select', value: config.layout, select: [ 'flow', 'fluid'], name: 'layout', title: 'Layout'  });
             
            return _.extend(config, {
                infoList: infoList                       
            })
        }           
    })
})
