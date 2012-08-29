define([
    '../ToyObject.js',    
    './Settings.js'
],function(Toy, Settings){
    return Toy.extend({
        className: 'logic-comp logic-comp-download',
				
        type : 'download',        
				
        getSettings: function() { 
        	return new Settings({parent : this});	
        }

    })
})
