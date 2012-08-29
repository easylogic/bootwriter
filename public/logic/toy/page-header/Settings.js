define([
    '../ToySettings.js'
],function(ToySettings){
    return ToySettings.extend({
        
        getAttributeData : function(value, elem) { 
            return {
                kind        : elem.find(".kind option:selected").val(),
                divider   : elem.find(".divider option:selected").val()
            };
        }, 

        getPreview: function(obj) { 
          
            var $div = $("<div class='page-header' />");
            var header = $("<" + obj.kind + " />");

            $div.append(header);
            header.append(this.htmlEntities(obj.title));

            if (obj.divider == 'divider') { 
                header.after("<small>" + this.htmlEntities(obj.text) + "</small>");
            } else { 
                header.append("<small>" + this.htmlEntities(obj.text) + "</small>");
            }

            obj.viewText = $("<div />").append($div).html();
            
            return obj;
        },

        
        getLocalConfig : function(config) { 
            return _.extend(config, {
                infoList: [
                    { type : 'select', value: config.kind, select: [ 'h1', 'h2', 'h3', 'h4'], name: 'kind', title: 'Size '  },
                    { type : 'select', value: config.divider, select: [ 'divider'], name: 'divider', title: 'Divider '  },
                    { type : 'title', value : config.title, title: 'Big Title' },
                    { type : 'text', value: config.text, title: 'Small Title'  }
                ]                
            })
        }
    })
})
