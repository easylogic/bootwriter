define(['./tpl/BlogMenu.js'], function(tpl) { 
    return Backbone.View.extend({
        events: { 
          'click #writeButton' : function(e) { 
            
          }  
        },
        
        loadTagList: function() { 
            var obj = this.$('.nav-list');
            
            $.get('/tags', function(data){ 
            
                _.each(data, function(tag){
                    obj.append("<li ><a href='/tag/" + tag+ "'>" + tag +  "</a></li>")
                })
                
            })  
            
        },
        
        render: function() {
            this.$el.append(tpl());
            
           // this.loadTagList();
             
            return this;    
        }
    })
})
