define([ './tpl/BlogItem'], function(tpl) { 
    return Backbone.View.extend({
        events : {
          'click' : 'clickLink'   
        },
        
        clickLink: function(e) {
            location.href = '/view/' + this.model.get('_id'); 
        },
        
        initialize: function(){
            
        },
        
        render: function() {
            this.$el.html(tpl(this.model.toJSON()))
            return this; 
        }
    });    
})
