define([
    './LogicMain.js',
    './toy/alert/Object.js',
    './toy/blockqoute/Object.js',
    './toy/box/Object.js',
    './toy/breadcrumb/Object.js',
    './toy/carousel/Object.js',
    './toy/code/Object.js',
    './toy/collapse/Object.js',
    './toy/download/Object.js',
    './toy/form/Object.js',
    './toy/hero-unit/Object.js',
    './toy/html/Object.js',
    './toy/image/Object.js',
    './toy/jade/Object.js',
    './toy/label/Object.js',
    './toy/markdown/Object.js',
    './toy/page-header/Object.js',
    './toy/pagination/Object.js',
    './toy/progress/Object.js',
    './toy/space/Object.js',
    './toy/stack/Object.js',
    './toy/nav-list/Object.js',
    './toy/tab/Object.js',
    './toy/table/Object.js',
    './toy/text/Object.js',
    './toy/toolbar/Object.js'
], function(LogicMain){
    return { 
        initialize: function() {
             if (!window.console) { 
                 window.console = { 
                    log: function(str) { 
                        
                    }  
                 };                  
             } 

             window.App = _.extend(window.App, {
                 GridWidth: 60,
                 GridGutter: 20,
                 MaxSpan: 12,
                 
                 collection: {},
                 
                 toys: {},
                 
                 icon_list: [
                    'adjust','align-center','align-justify','align-left','align-right','arrow-down',
                    'arrow-left','arrow-right','arrow-up','asterisk','backward','ban-circle','barcode',
                    'bell','bold','book','bookmark','briefcase','bullhorn','calendar','camera','certificate',
                    'check','chevron-down','chevron-left','chevron-right','chevron-up','circle-arrow-down',
                    'circle-arrow-left','circle-arrow-right','circle-arrow-up','cog','comment','download',
                    'download-alt','edit','eject','envelope','exclamation-sign','eye-close','eye-open',
                    'facetime-video','fast-backward','fast-forward','file','film','filter','fire','flag',
                    'folder-close','folder-open','font','forward','fullscreen','gift','glass','globe','hand-down',
                    'hand-left','hand-right','hand-up','hdd','headphones','heart','home','inbox','indent-left',
                    'indent-right','info-sign','italic','leaf','list','list-alt','lock','magnet','map-marker',
                    'minus','minus-sign','move','music','off','ok','ok-circle','ok-sign','pause','pencil',
                    'picture','plane','play','play-circle','plus','plus-sign','print','qrcode','question-sign',
                    'random','refresh','remove','remove-circle','remove-sign','repeat','resize-full','resize-horizontal',
                    'resize-small','resize-vertical','retweet','road','screenshot','search','share','share-alt',
                    'shopping-cart','signal','star','star-empty','step-backward','step-forward','stop','tag','tags',
                    'tasks','text-height','text-width','th','th-large','th-list','thumbs-down','thumbs-up','time',
                    'tint','trash','upload','user','volume-down','volume-off','volume-up','warning-sign','wrench',
                    'zoom-in','zoom-out'
                 ],        
         
                 menubox : {
                    'basecss' : { 
                        name : 'Base CSS',
                        view : 'btn-success',
                        list : [ 
                            'box', 'html', 'jade', 'markdown', 
                            'text', 'code', 'form', 'nav-list', 'pagination', 
                            'stack', 'table'
                        ]
                    },                              
                    'component' : { 
                        name : 'Components',
                        view : 'btn-warning',
                        list : [ 
                            'alert', 'breadcrumb', 'blockqoute',  
                            'download', 'hero-unit', 'image', 
                            'label', 'page-header', 'progress', 'space'
                       ]
                    },                              
                    'plugin' : { 
                        name : 'Plugins',
                        view : 'btn-info',
                        list : [ 'carousel','collapse', 'tab','toolbar' ]
                    }
                 },
                                 
                   list: {
                        'box'           : { type : 'box',            name: 'Box',           icon: 'icon-inbox',         view: 'btn-primary' },
                        'text'          : { type : 'text',           name: 'Text',          icon: 'icon-text-width',    view: 'btn-danger' }, 
                        'html'          : { type : 'html',           name: 'Html',          icon: 'icon-edit',          view: 'btn-danger'  }, 
                        'jade'          : { type : 'jade',           name: 'Jade',          icon: 'icon-refresh',       view: 'btn-danger'  }, 
                        'markdown'      : { type : 'markdown',       name: 'MarkDown',      icon: 'icon-list-alt',      view: 'btn-danger'  },
                        
                        'form'          : { type : 'form',           name: 'Form',          icon: 'icon-briefcase',     view: 'btn-success' },
                        'code'          : { type : 'code',           name: 'Code',          icon: 'icon-qrcode',        view: 'btn-success' },
                        'stack'         : { type : 'stack',          name: 'Stack',         icon: 'icon-align-justify', view: 'btn-success' },                        
                        'nav-list'      : { type : 'nav-list',       name: 'Nav Lists',     icon: 'icon-signal',        view: 'btn-success' },
                        'table'         : { type : 'table',          name: 'Table',         icon: 'icon-th',            view: 'btn-success' },
                        'pagination'    : { type : 'pagination',     name: 'Pagination',    icon: 'icon-leaf',          view: 'btn-success' },
                                                                                               
                        'breadcrumb'    : { type : 'breadcrumb',     name: 'Breadcrumbs',   icon: 'icon-forward',       view: 'btn-warning'   }, 
                        'hero-unit'     : { type : 'hero-unit',      name: 'Hero Unit',     icon: 'icon-comment',       view: 'btn-warning'   }, 
                        'alert'         : { type : 'alert',          name: 'Alert',         icon: 'icon-info-sign',     view: 'btn-warning'   }, 
                        'label'         : { type : 'label',          name: 'Label',         icon: 'icon-tag',           view: 'btn-warning' }, 
                        'page-header'   : { type : 'page-header',    name: 'Page Header',   icon: 'icon-folder-open',   view: 'btn-warning' }, 
                        'blockqoute'    : { type : 'blockqoute',     name: 'Blockqoute',    icon: 'icon-share',         view: 'btn-warning' },
                        'space'         : { type : 'space',          name: 'Space',         icon: 'icon-resize-horizontal', view: 'btn-warning' },
                        'image'         : { type : 'image',          name: 'Image',         icon: 'icon-picture',       view: 'btn-warning' },                     
                        'download'      : { type : 'download',       name: 'Download',      icon: 'icon-download',      view: 'btn-warning' },
                        'progress'      : { type : 'progress',       name: 'Progress Bar',   icon: 'icon-minus',         view: 'btn-warning' },
                        
                        'collapse'      : { type : 'collapse',       name: 'Collapse',      icon: 'icon-tasks',         view: 'btn-info'  },
                        'carousel'      : { type : 'carousel',       name: 'Carousel',      icon: 'icon-play-circle',   view: 'btn-info' },
                        'tab'           : { type : 'tab',            name: 'Tab',           icon: 'icon-th-list',       view: 'btn-info' },
                        'toolbar'       : { type : 'toolbar',        name: 'Button Groups', icon: 'icon-download-alt',  view: 'btn-info' }
                    },                           
                 
                 toy : null,
                 
                 getId: function() {
                    return App.main.contents.rootBox.model.id;    
                 },
                 
                 getToy: function(id) { 
                   if (App.collection){
                    return App.collection[id];    
                   }
                    
                   return false; 
                 },
                 
                 setToy: function(id, toy) { 
                   if (!App.collection){
                        App.collection[id] = toy; 
                   }
                 },      
                 
                 showMenuBox: function() { 
                     App.main.menubox.show();
                 },
                 
                 hideMenuBox: function() { 
                     App.main.menubox.hide();
                 },
                 
                 setSelectToy: function(toy) { 
                   App.toy = toy;
                   App.main.settings.render();
                 },
                 
                 select: function(cid) {
                   if (App.toys[cid]){
                        App.toys[cid].setSelectedToy();    
                   }
                     
                 },
                 
                 initSelectToy: function() {
                   
                   if (App.toy != null){
                        App.toy.$el.popover('destroy');    
                   } 
                   
                   App.toy = null;
                   App.main.settings.render();                   
                 },
                 
                 keyMap: function(e) {
                    if (e.shiftKey && e.keyCode == 187) { // plus(+)
                        $('.plus-btn').click();
                    } else if (e.keyCode == 39) {       // right
                        var cid = App.main.contents.rootBox.firstChild().cid;
                        App.select(cid);
                    } else if (e.keyCode == 37) {       // left
                        var cid = App.main.contents.rootBox.lastChild().cid;
                        App.select(cid);
                    }      
                 },
                 
                 initContextMenu: function() {
                    if (App.toy != null){
                        App.toy.initContextMenu();
                    }
                 },
                    
                 require: function(type, callback) {
                      require(["logic/toy/"+type+"/Object.js"], function(obj) {
                        if (obj) { 
                          callback(obj);    
                        }
                        
                      });      
                 }
             });
                         
            var main = new LogicMain();
            App.main = main;
            $('.logic-main').html(main.render().el);
        }        
    };
})
