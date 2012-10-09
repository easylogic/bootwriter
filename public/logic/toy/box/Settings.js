define([
    '../ToySettings.js'
],function(ToySettings){
    return ToySettings.extend({

        isThemes: true,

        onShow: function() { 
            var index = this.parent.model.get('themes');
            
            this.resetThemes(index);
        },

        getAttributeData : function(value, elem) { 
            var data = {
                layout     : elem.find('.layout option:selected').val()
            };
            
            if (this.isRoot()) { 
                data.text =  elem.find('.text').val();   
            }
            
            data.themes =  elem.find('a.themes-image.active').data('themes');
            
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
