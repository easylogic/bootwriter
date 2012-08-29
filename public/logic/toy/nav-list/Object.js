define([
    '../ToyObject.js',
    './Settings.js'
],function(ToyObject, Settings){
    return ToyObject.extend({
        className: 'logic-comp logic-comp-nav-list',

        type : 'nav-list',        
        
        getSettings: function() { 
            return new Settings({parent : this});   
        },        
        
        getDefaultValue: function() { 
            return { 
            	list : []
            };   
        }
    })
})
