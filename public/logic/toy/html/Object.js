define([
    '../ToyObject.js',    
    './Settings.js'
],function(Toy, Settings){
    return Toy.extend({
        className: 'logic-comp logic-comp-html',
				
        type : 'html',        
				
        getSettings: function() { 
        	return new Settings({parent : this});	
        }
    })
})
