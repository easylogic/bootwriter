define([
    './toy/box/Object.js'
], function(Box) { 
    return Backbone.View.extend({
        className: 'logic-contents',
        
        initialize: function(opt) {
            var value = {isRoot : true };
            
            this.rootBox = new Box(value);
        },
        
        showMenu : function(isView) {
            this.rootBox.showMenu(isView); 
        },        
        
        toData: function() {
            return this.rootBox.toData();
        },        
        
        toJSON: function() {
            return this.rootBox.toJSON();
        },
        
        render : function() { 
            this.$el.append(this.rootBox.render().el);
            this.rootBox.show();
            return this;    
        }
    });
})
