define([
    './tpl/LogicMenuBox.js',
    './LogicToys.js'
], function(tpl, LogicToys) { 
    return Backbone.View.extend({

        initialize: function() { 
            this.toys = new LogicToys();  
        },

        show: function() { this.$el.show(); } ,
        hide : function() { this.$el.hide(); }, 
        
        render : function() { 
            var self = this; 
            this.$el.append(tpl({
                toyList: this.toyList
            }))
            
            this.$('.plus-btn').click(function(e){
                self.toys.popup();
            
                return false; 
            });
            
            //this.$el.css('position', 'fixed');

            
            return this;    
        }
    });
})
