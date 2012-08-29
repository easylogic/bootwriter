define([
    '../ToyObject.js',    
    './Settings.js'
],function(ToyObject, Settings){
    return ToyObject.extend({
        className: 'logic-comp logic-comp-accordion',
        type : 'collapse',
				
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
