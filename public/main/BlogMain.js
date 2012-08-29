define(['./tpl/BlogMain.js', './BlogList', './BlogPage'], function(tpl, BlogList, BlogPage) { 
    return Backbone.View.extend({
        
        className: 'main',
                
        initialize: function() { 
            this.blogList = new BlogList();
            this.blogPage = new BlogPage();
            this.blogPage.list = this.blogList;
        },
        
        render: function() {
            
            this.$el.html(tpl());    
            this.$el.append(this.blogList.render().el);
            this.$el.append(this.blogPage.render().el);
            
            return this;    
        }
        
    });
})
