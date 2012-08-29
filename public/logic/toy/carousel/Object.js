define([
    '../ToyObject.js',
    './Settings.js'
],function(ToyObject, Settings){
    return ToyObject.extend({
        className: 'logic-comp logic-comp-carousel',
        type : 'carousel',        

        getSettings: function() { 
            return new Settings({parent : this});   
        },        
        
        getDefaultValue: function() { 
            return { 
            	list : [],
            	delay : 5,
            	button : false 
            };   
        },              
        
        onRender: function(data) { 
        
            this.$('.carousel').carousel({
                interval : data.delay * 1000
            });    
            
        }

    })
})
