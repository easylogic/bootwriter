define(['./tpl/BlogList', './BlogCollection', './BlogItem'], function(tpl, BlogCollection, BlogItem) {
    return Backbone.View.extend({
       initialize : function() { 
           
           this.page = 0; 
           
           this.collection = new BlogCollection();
           
           this.collection.bind('add', this.addItem, this);

           this.nextPage();
    	   //this.collection.fetch({ data: {  page: this.page  }, add : true });                      
       },
       
       nextPage : function() { 
           var self = this; 
            this.collection.fetch({ 
                data: {  
                    page: this.page + 1  
                }, 
                add : true,
                success: function(collection, resp) {
                    if (resp.toString() != "") { 
                        self.page++;    
                    }
                } 
            });
       },
       
       addItem: function(item) { 
            this.$('.list').append(new BlogItem({model : item}).render().el);  
       },
       
       render : function() {
           this.$el.html(tpl())
           
           return this;    
       } 
    });
})
