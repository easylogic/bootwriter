define([
    './tpl/LogicMenuBox.js',
    './tpl/LogicToys.js'
], function(tpl, tplToys) { 
    return Backbone.View.extend({

        
        show: function() { this.$el.show(); } ,
        hide : function() { this.$el.hide(); }, 
        
        render : function() { 
            var self = this; 
            this.$el.append(tpl({
                toyList: this.toyList
            }))
            
            this.$('.plus-btn').click(function(e){
                var temp = $(tplToys());
                
                $('body').append(temp);
                temp.bPopup({
                    
                });
            
                temp.find('[data-name=toy]').draggable({
                    helper: 'clone',
                    revert: true,
                    connectToSortable: '.logic-comp-childpoint',
                    //containment: 'window',
                    containment: ".logic-comp-childpoint",
                    start: function(e, ui) { 
                        temp.close();
                    }                 
                }).click(function(e){
                	
                	if (App.toy != null) {
                    	App.toy.addObjectAt($(this).data('type'), App.toy.model.get('span'), 'right');
                	} else { 
                    	App.main.contents.rootBox.addObject($(this).data('type'), 12);
                	}

                    temp.close();
                                    	
                    return false; 
                });
                
                return false; 
            });
            
            //this.$el.css('position', 'fixed');

            
            return this;    
        }
    });
})
