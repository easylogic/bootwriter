define([
    '../../ToyLayout.js',
],function(ToyLayout){
    return ToyLayout.extend({
        type : 'flow',        
    
        createLayout: function(comp) {
             
            var len = this.box.children.length;
            
            var row = $("<div class='row' />");

            for(var i = 0; i < len; i++) {
                
                var child = this.box.children[i];
                
                if (typeof child.model == 'undefined') continue;
            
                var span = child.model.get('span') || this.box.model.get('span') || 12;
                var offset = child.model.get('offset') || 0;

                var div = $('<div />').addClass('span' + span).addClass('offset' + offset).html(child.render().el).css({
                    position: 'relative'
                });

                row.append(div);
            }

            return row;
        },
        
        resetLayout: function(child) { 
            
           if (child) {
               var span = child.model.get('span') || this.box.model.get('span') || 12;
               var offset = child.model.get('offset') || 0;
               child.$el.parent().removeClass(function(index, css){
                    var matches = css.match(/(span|offset)\d+/g) || [];
                    return matches.join(' ');   
                }).addClass('span' + span).addClass('offset' + offset);                   
           }
        
            
        },
        
        afterLayout: function(comp) {
            
            if (comp == 'all') return ;
            
            comp.viewSimpleInfo();            
            
            comp.hideSimpleInfo();     
        }
    })
})
