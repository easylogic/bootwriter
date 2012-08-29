define(['./BlogItemModel'], function(model) { 
    return Backbone.Collection.extend({
        model : model,
        url : "/toys"
    });    
})
