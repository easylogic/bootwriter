define([
    './tpl/View.js',
    '../ToyListSettings.js'
],function(View, ToyListSettings){
    return ToyListSettings.extend({

        getAttributeData : function(value, elem) {
            return {
                list        : this.getList(),
                delay		: this.$('.delay').val(),
                button		: this.$('.button').attr('checked')
                
            };
        },        
        
        getPreview: function(obj) { 
          
            var data = obj;
          
            data.title = this.htmlEntities(obj.title);
            data.text = markdown.toHTML(obj.text);
            
            obj.viewText = View(data);
            
            return obj;
        },
        
        getLocalConfig : function(config) { 
            return _.extend(config, {
                infoList: [
                    { type : 'li_text', value: config.delay, name: 'delay', title: 'Interval '  },                
                    { type : 'li_checkbox', value: config.button, name: 'button', title: 'Button '  },                
                    { type : 'title', value : config.title },
                    { type : 'text', value: config.text }
                ]
            })
        }        

    })
})
