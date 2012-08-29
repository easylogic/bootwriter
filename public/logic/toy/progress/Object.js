define([
    '../ToyObject.js',    
    './Settings.js'
],function(Toy, Settings){
    return Toy.extend({
        className: 'logic-comp logic-comp-progress',

        type : 'progress',        
 
        getSettings: function() { 
        	return new Settings({parent : this});	
        },
        
        getDefaultValue: function() { 
            return { 
            	kind : 'default',
            	percent : 100
            };   
        }

    })
})
