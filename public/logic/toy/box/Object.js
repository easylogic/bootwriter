define([
    '../ToyContainer.js',
    './Settings.js',
    './layout/Flow.js'
],function(ToyContainer, Settings, FlowLayout){
    return ToyContainer.extend({
        className: 'logic-comp logic-comp-box logic-container',
        type : 'box',        
        
        getDefaultValue: function() { 
            return { 
                rowType : 'default',
                themes: 0 
            };   
        },           
        
        getSettings: function() { 
            return new Settings({parent : this});   
        },        
        
        isRoot: function() { 
            return this.model.get('isRoot');            
        },
        
        setStyle: function(data) {
            // span 설정  
            if (!this.isRoot()) {
                this.resetSpan(data.span);
                this.resetOffset(data.offset);
                
                if (App.mode == 'write') 
                    this.$el.css('cursor', 'pointer');
                this.$el.addClass('notRootBox')                                        
            } else { 
                this.$el.addClass('rootBox')    
            }            
        }, 
       
        getLayoutObject: function(type) { 
            if (type == 'flow') { 
                return new FlowLayout({ box : this });
            }
        },
        
        onRender: function(data) { 
            this.doLayout();

            if (this.isRoot()) { 
                
                App.main.setTitle(data.title, data.tag);                    
                
                if (data.themes > 0){
                    $('#userThemes').attr('href', "/logic/themes/theme" + data.themes + "/" + data.themes +  ".css" );  
                }
                    
            }

        }
    })
})
