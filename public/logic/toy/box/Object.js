define([
    '../ToyContainer.js',
    './Settings.js'
],function(ToyContainer, Settings){
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
            } else { 
                this.$el.addClass('rootBox')    
            }            
        }, 
        
        onRender: function(data) { 
            if (this.isRoot()) { 
                App.main.setTitle(data.title, data.tag);
                
                if (data.themes > 0){
                    $('#userThemes').attr('href', "/logic/themes/theme" + data.themes + "/" + data.themes +  ".css" );  
                }
                    
            }

        }
    })
})
