define([
    '../ToySettings.js'
],function(ToySettings){
    return ToySettings.extend({

        isThemes: true,

        rowTypeList : [
            'default',
            'fluid'
        ],
        
        onShow: function() { 
            var index = this.parent.model.get('themes');
            
            this.resetThemes(index);
        },

        getAttributeData : function(value, elem) { 
            var data = {
                rowType     : elem.find('.rowType option:selected').val()
            };
            
            if (this.isRoot()) { 
                data.text =  elem.find('.text').val();   
            }
            
            data.themes =  elem.find('a.themes-image.active').data('themes');
            
            return data; 
        },
        
        getLocalConfig : function(config) {
            
            var infoList = [
                { type : 'title', value : config.title },
                { type : 'text', value : config.text },
                { type : 'tag', value: config.tag }
            ];
            
            if (this.isRoot()){
                infoList.unshift({ type : 'select', value: config.rowType, select: [ 'default', 'fluid'], name: 'rowType', title: 'Row Type'  });
            }
             
            return _.extend(config, {
                infoList: infoList                       
            })
        }           
    })
})
