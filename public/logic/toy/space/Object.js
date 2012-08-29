define([
    '../ToyObject.js',    
    './Settings.js'
],function(Toy, Settings){
    return Toy.extend({
        className: 'logic-comp logic-comp-space',
				
        type : 'space',        

        getSettings: function() { 
        	return new Settings({parent : this});	
        }
    })
})
