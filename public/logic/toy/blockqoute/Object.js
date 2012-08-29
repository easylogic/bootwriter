define([
    '../ToyObject.js',    
    './Settings.js'
],function(Toy, Settings){
    return Toy.extend({
        className: 'logic-comp logic-comp-block',
        type : 'blockqoute',        

        getSettings: function() { 
        	return new Settings({parent : this});	
        },
        
        getDefaultValue: function() { 
            return { kind : 'left' };   
        },              
        
        onRender: function(data) { 
        
            if (App.mode == 'write'){
                this.$('blockquote').css('float', 'none');                
                
            }
        }
    })
})
