define([
    './tpl/LogicToolbar.js'
], function(tpl) { 
    return Backbone.View.extend({
       
        className: 'logic-toolbar btn-toolbar',
        
        events: { 
          'click .copy': 'copy',
          'click .export_html': 'exportHTML',
          'click .export_json': 'exportJSON',
          
        },
        
        exportHTML: function(e) {
            
            
        },
        
        exportJSON: function(e) {
            
            
        },        
        
        htmlEntities : function (str) {
            return String(str).replace(/&/g, '&amp;')
                              .replace(/</g, '&lt;')
                              .replace(/>/g, '&gt;')
                              .replace(/"/g, '&quot;')
                              ;                 
        },         
        
        setTextIndent: function($dom) { 
            var inden = "\t";  
        },
        
        getHtmlText: function() { 
            var obj = $('.logic-contents').clone();
            
            obj.find('.logic-comp-menu,.logic-comp-iconpoint,.logic-comp-childpoint:empty,logic-comp-viewpoint:empty').remove();
            obj.find('[data-cid]').removeAttr('data-cid');
            
            var temp = $('<div />');
            temp.append(obj);
            
            var text = style_html(temp.html(), { 
              'indent_size': 2,
              'indent_char': ' ',
              'max_char': 78,
              'brace_style': 'expand',
              'unformatted': ['a', 'sub', 'sup', 'b', 'i', 'u']
            });
            
            return text; 
        },
        
        copy : function(e) { 
            
            var prev = $('<pre />');
            var popup = $('<div class="alert" />');
            
            popup.append('<a class="close" data-dismiss="alert" href="#">&times;</a>');

            prev.text(this.getHtmlText()).appendTo(popup);
            
            popup.appendTo('body').css({
                top: 100,
                left: '30%',
                position: 'absolute',
                width: 700,
                overflow: 'auto'
            }).show();
        },
        
        render : function() { 
	   		this.$el.append(tpl())
            return this;    
        }
    });
})
