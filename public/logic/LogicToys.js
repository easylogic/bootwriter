define([
    './tpl/LogicToys.js'
], function(tplToys) { 
    return Backbone.View.extend({
        
        className: 'modal add-toys',
        
        moveSelectToy : function(code) {
            // left 37, top 38, right 39, bottom 40
            
            if (code == 37) { // <- 
                this.selectToy(-1);
            } else if (code == 38) {   
                this.selectToy(-4);
            } else if (code == 39) {
                this.selectToy(1);
            } else if (code == 40) { 
                this.selectToy(4);                
            }
            
        },
        
        selectToy: function(step) { 
            var obj = this.$('.tab-pane.active ul li.active');
            
            if (obj.length) {
                if (step > 0){
                    var next = obj;
                    
                    for (var i = 0; i < step ; i++){
                        var temp = next.next();
                        
                        if (!temp.length){
                            break;
                        }
                        
                        next = temp;                        
                    }
                    
                    obj.removeClass('active');
                    next.addClass('active');
                } else { 
                    var prev = obj;
                    var len = Math.abs(step);
                    for (var i = 0 ; i < len ; i++){
                        var temp = prev.prev();
                        
                        if (!temp.length){
                            break;
                        }
                        
                        prev = temp;                        
                    }
                    
                    obj.removeClass('active');
                    prev.addClass('active');                    
                }
            } else { 
                this.$('.tab-pane.active ul li:eq(0)').addClass('active');
            }
        },
        
        popup: function() {
            
            this.render();
            
            $('body').append(this.$el);
            
            this.$el.bPopup({
                    onClose: function(){
                        $(this).remove();
                    }
             });  
        },
        
        addToy : function() { 
            this.$('.tab-pane.active ul li.active a').click();
        },
        
        render : function() { 
            
            var self =  this; 
            
            this.$el.html(tplToys());
            
            this.$el.find('[data-name=toy]').draggable({
                helper: 'clone',
                revert: true,
                connectToSortable: '.logic-comp-childpoint',
                //containment: 'window',
                containment: ".logic-comp-childpoint",
                start: function(e, ui) { 
                    self.$el.close();
                }                 
            }).click(function(e){
                
                if (App.toy != null) {
                    App.toy.addObjectAt($(this).data('type'), App.toy.model.get('span'), 'right');
                } else { 
                    App.main.contents.rootBox.addObject($(this).data('type'), 12);
                }
    
                self.$el.close();
                                    
                return false; 
            });
            
            return this;    
        }
    });
})
