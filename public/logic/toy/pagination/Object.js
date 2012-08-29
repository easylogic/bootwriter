define([
    '../ToyObject.js',
    './Settings.js'
],function(ToyObject, Settings){
    return ToyObject.extend({
        className: 'logic-comp logic-comp-pagination',

        type : 'pagination',        
        
        getSettings: function() { 
            return new Settings({parent : this});   
        },        
        
        getDefaultValue: function() { 
            return { 
            	list : [],
            	kind: ''
            };   
        }
    })
})
