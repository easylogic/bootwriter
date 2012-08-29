define([
    './tpl/View.js',
    '../ToyListSettings.js'
],function(View, ToyListSettings){
    return ToyListSettings.extend({

        getAttributeData : function(value, elem) {
            return {
                list        : this.getList()
            };
        },        
        
        getPreview: function(obj) { 
          
            var data = obj;
          
            data.title = this.htmlEntities(obj.title);
			data.text = markdown.toHTML(obj.text);
			
            data.list = this.setButtonAttr(data.list);			
			
			var toolbar = [];
			var index = 0;
			
			for(var i in data.list) { 
				if (typeof data.list[i] == 'function') continue;
				
				if (!toolbar[index]) { 
					toolbar[index] = [];
				}
				toolbar[index].push(data.list[i]);
				
				if (data.list[i].last) { 
					index++;
				}
			}
			
			data.toolbar = toolbar;
            
            obj.viewText = View(data);
            
            return obj;
        },
        
        getLocalConfig : function(config) { 
            return _.extend(config, {
                infoList: [
                    { type : 'title', value : config.title },
                    { type : 'text', value: config.text }
                ]
            })
        }        

    })
})
