define([
    './tpl/LogicSettings.js'
], function(tpl) { 
    return Backbone.View.extend({
       
        className: 'logic-settings btn-toolbar',
        
        events: { 
            'click a.delete-btn': 'deleteToy',
            'click a.settings-btn': 'settingsToy'
        },
        
        deleteToy: function(e) {
            if (App.toy != null) {
                App.toy.removeAll();
            }
        },
        
        
        
        settingsToy: function(e) {
          if (App.toy != null) {
              App.toy.selectEdit(e);
          }
          
          return false;   
        },
        
        render : function() { 
	   		this.$el.html(tpl())
	   		
            return this;    
        }
    });
})
