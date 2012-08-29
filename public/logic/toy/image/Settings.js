define([
    './tpl/View.js',
    '../ToyListSettings.js'
],function(View, ToyListSettings){
    return ToyListSettings.extend({
        
        isUpload : true,
        
        getAttributeData : function(value, elem) { 
            return {
                imageType       : elem.find('.imageType').val(),
                image       : elem.find('.image').val(),
                link       : elem.find('.link').val(),
				list			 : this.getList()
            };
        },        
        
        getPreview: function(obj) { 
          
            var data = obj;
          
            if (data.title) data.title = this.htmlEntities(obj.title);
			if (data.text) data.text = markdown.toHTML(obj.text);
			
            data.cls = this.setImageAttr(data);
            			
            data.list = this.setButtonAttr(data.list);			
            
            obj.viewText = View(data);
            
            return obj;
        },				
        
        getLocalConfig : function(config) { 
            return _.extend(config, {
                infoList: [
                    { type : 'select', value: config.imageType, select: [ 'rounded', 'circle', 'polaroid'], name: 'imageType', title: 'Image Type '  },                
                    { type : 'input_text', value: config.image, name: 'image', title: 'Image '  },                
                    { type : 'input_text', value: config.link, name: 'link', title: 'Link '  },                
                    { type : 'title', value : config.title },
                    { type : 'text', value: config.text }
                ]
            })
        }   				
    })
})
