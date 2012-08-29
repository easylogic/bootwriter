define([ 
    './ToySettings.js'
],function(ToySettings){
    return ToySettings.extend({

        isList: true, 
        
        getList: function() {
            var list = [] 
            this.$('.data_list').find('.alert').each(function(i, obj){
                var obj = $(obj).data('obj');
                delete obj.target; 
                list.push(obj);
            })
            
            return list;
        },
        
        setButtonAttr: function(list) { 
            for(var i in list) {
                var cls = [];
                var button = list[i];
                
                if (button.buttonType) cls.push("btn-" + button.buttonType);
                if (button.buttonSize) cls.push("btn-" + button.buttonSize);
                if (button.buttonBlock) cls.push("btn-" + button.buttonBlock);
                
                list[i].cls = cls.join(" ");
            }
            
            return list;
        },
        
        getListTpl: function(obj) { 
            var content = "<div>";
            content += "<span ><i class='icon-" + obj.icon + "'></i>&nbsp;<span>" + obj.title+ "</span></span>" ;
            content += "</div>";
            
            return content; 
        },
				
		addLine: function(obj) { 
			return $('<div />').addClass('alert alert-success').data('obj', obj);
		},
        
        addList: function(obj) { 
            var self = this; 
            var content = this.getListTpl(obj);
            var div = this.addLine(obj).html(content).css({
               'margin-left' : (obj.depth == '') ? "0px"  : (parseInt(obj.depth) * 10) + "px", 
               'margin-bottom': '2px',
               'cursor' : 'pointer'
            }).click(function(e){
                
                $(this).parent().find('.alert').removeClass('alert-danger');
                $(this).addClass('alert-danger')
                
                var obj = $(this).data('obj');
                
                self.setDataList(obj);
                self.$('.data_target').data('target', this);
            });
            
            div.prepend("<button class='close'>&times;</button>")
            
            div.find('.close').click(function(e){
                div.remove();
            })
            this.$('.data_list').append(div);              
        },
        
        modifyDataObject: function(obj) { 
            var $dom = $(obj.target);
            
            $dom.html(this.getListTpl($dom.data('obj')));
            
            $dom.css( { 
                'margin-left' : (obj.depth == '') ? "0px"  : (parseInt(obj.depth) * 20) + "px"
            });
        },
        
        modifyTab: function(obj) { 
            var $dom = $(obj.target);
            
            $dom.data('obj', obj);
            
            this.modifyDataObject(obj);
        },        
        
        getDataList: function() {
            var list = {}; 
            this.$('.data[data-name]').each(function(i, obj){
                var $dom = $(obj);
                
                list[$dom.data('name')] = $dom.val();
            })
            
            return list;
        },
        
        setDataList: function(obj) { 
            
            if (obj.empty) { 
                this.$('.data[data-name]').val('');
                return; 
            }
            
            for(var i in obj) { 
                if (typeof obj[i] == 'function') continue;
                
                this.$('.data[data-name=' + i  +']').val(obj[i]);
                this.$('.data[data-name=' + i  +']').change().trigger("liszt:updated");
            }   
            
        },
        
        onRender: function(data) {
            var self = this;  
            
            for(var i in data.list) { 
                var obj = data.list[i];
                
                if (typeof obj == 'function') continue;
                
                this.addList(obj);      
            }
            
            this.$('select[data-name=icon]').change(function(e){
                self.$('.ic-view-point').html("<i class='icon-" + $(this).val() + "'></i>");
            })
            
            
            this.$('.add_data').click(function(){
                var obj =  self.getDataList()
                
                self.addList(obj);
                
                self.setDataList({ empty : true})                  
            })
            
            this.$('.modify_data').click(function(){
                var obj =  self.getDataList()
                
                obj.target = self.$('.data_target').data('target');
                
                self.modifyTab(obj);
            })            
            
            this.$('.data_list').sortable();
        }        
      
    })
})
