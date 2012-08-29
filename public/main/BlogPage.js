define(['./tpl/BlogPage.js'], function(tpl){
    return Backbone.View.extend({
        
        className: 'pager',
        
        events: {
            'click .nextPage': 'nextPage'  
        },
        
        nextPage: function(e) { 
            if (this.list){
                this.list.nextPage();
            }  
        },
        
        render: function() {
            
            this.$el.html(tpl())
             
            return this;    
        }
        
    });
})
