define(['./BlogMain', './BlogMenu'], function(BlogMain, BlogMenu){
    return { 
        initialize: function() { 
             var main = new BlogMain();
             $('#contents').append(main.render().el);
        }        
    };
})
