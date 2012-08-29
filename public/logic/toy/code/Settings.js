define([
    '../ToySettings.js'
],function(ToySettings){
    return ToySettings.extend({
        
        syntaxList : [ 
            'text', 'html', 'css', 'javascript', 'cpp', 'java', 'c_cpp', 'ruby', 'python', 
            'clj', 'css', 'go', 'hs', 'lisp', 'lua', 'ml', 'csharp',
            'n', 'proto', 'scala', 'sql', 'tex', 'vb', 'vhdl', 
            'wiki', 'xq', 'yaml'
        ],

        getAttributeData : function(value, elem) { 
            return {
                syntax      : elem.find(".syntax option:selected").val()
            };
        },        
        
        onShow: function() {
            
            this.setEditor('editor', this.parent.model.get('syntax'));

            this.$('select.syntax').change(function(e){
                self.editor.session.setMode("ace/mode/" + $(this).val());
            })
             
        },          
        
        getPreview: function(obj) { 
          
            obj.text = this.editor.getValue();
            obj.viewText =  "<pre class='prettyprint linenums'>" + prettyPrintOne(this.htmlEntities(obj.text), obj.syntax, 1) + "</pre>";

            return obj;
        },
        
        getLocalConfig : function(config) { 
            return _.extend(config, {
                infoList: [
                    { type : 'select', value: config.syntax, select: this.syntaxList, name: 'syntax', title: 'Syntax '  },                
                    { type : 'title', value : config.title, title: 'Title' },
                    { type : 'editor', value: config.text, width: '100%', height: '300px', full: true }
                ]              
                 
            })
        }
    })
})
