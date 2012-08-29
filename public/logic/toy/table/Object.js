define([
    '../ToyObject.js',    
    './Settings.js'
],function(Toy, Settings){
    return Toy.extend({
        className: 'logic-comp logic-comp-table',

        type : 'table',

        getSettings: function() { 
        	return new Settings({parent : this});	
        },
        
        getDefaultValue: function() { 
            return { 
                kind : 'default',
                list: [],
                table: false,
                striped: false,
                bordered: false,
                condensed: false,
                writeMode: 'markdown'
            };   
        }
    })
})
