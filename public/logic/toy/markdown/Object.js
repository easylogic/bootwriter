define([
    '../ToyObject.js',    
    './Settings.js'
],function(Toy, Settings){
    return Toy.extend({
        className: 'logic-comp logic-comp-md',

        type : 'markdown',        
     
        getSettings: function() { 
        	return new Settings({parent : this});	
        }

    })
})
