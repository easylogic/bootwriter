define([
    '../ToySettings.js'
],function(ToySettings){
    return ToySettings.extend({
        getPreview: function(obj) { 
          
            obj.viewText = '&nbsp;'; 

            return obj;
        }  
    })
})
