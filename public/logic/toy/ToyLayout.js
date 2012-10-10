define([
],function(){
    return Backbone.View.extend({

        type: '',

        box : null,

        initialize: function(opt) { 
            this.box = opt.box;
        },

        createLayout : function() { 
            return $("<div />");
        },
        
        afterLayout: function(comp) {
            
        },
        
        resetLayout: function(comp) { 
            
        }
        
   })
})
