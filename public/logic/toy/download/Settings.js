define([
    '../ToySettings.js'
],function(ToySettings){
    return ToySettings.extend({
        
        isUpload : true,
        
        getPreview: function(obj) { 
          
            obj.viewText = "<a href='"+ this.htmlEntities(obj.text) + "' ><i class='icon-file'></i> " +  this.htmlEntities(obj.title) + "</a>";
            
            return obj;
        },
        
        getLocalConfig : function(config) { 
            return _.extend(config, {
                infoList: [
                    { type : 'title', value : config.title },
                    { type : 'text', value: config.text }
                ]
            })
        }        
    })
})
