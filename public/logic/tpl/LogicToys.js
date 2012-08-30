define(['jadeRuntime'], function(jade) {
return function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<div class="modal-header"><h2 class="modal-header-title">Add Toys</h2><ul class="nav nav-pills modal-header-menu pull-right">');
// iterate App.menubox  
;(function(){
  if ('number' == typeof App.menubox  .length) {
    for (var key = 0, $$l = App.menubox  .length; key < $$l; key++) {
      var obj = App.menubox  [key];

buf.push('<li');
buf.push(attrs({ "class": (key == 'basecss' ? 'active' : '') }, {"class":true}));
buf.push('><a');
buf.push(attrs({ 'href':('#' + key), 'data-toggle':('tab') }, {"href":true,"data-toggle":true}));
buf.push('>');
var __val__ = obj.name 
buf.push(null == __val__ ? "" : __val__);
buf.push('</a></li>');
    }
  } else {
    for (var key in App.menubox  ) {
      var obj = App.menubox  [key];

buf.push('<li');
buf.push(attrs({ "class": (key == 'basecss' ? 'active' : '') }, {"class":true}));
buf.push('><a');
buf.push(attrs({ 'href':('#' + key), 'data-toggle':('tab') }, {"href":true,"data-toggle":true}));
buf.push('>');
var __val__ = obj.name 
buf.push(null == __val__ ? "" : __val__);
buf.push('</a></li>');
   }
  }
}).call(this);

buf.push('</ul></div><div class="modal-body"><div class="tab-content">');
// iterate App.menubox
;(function(){
  if ('number' == typeof App.menubox.length) {
    for (var key = 0, $$l = App.menubox.length; key < $$l; key++) {
      var obj = App.menubox[key];

buf.push('<div');
buf.push(attrs({ 'id':(key), "class": ('tab-pane') + ' ' + (key == 'basecss' ? 'active' : '') }, {"class":true,"id":true}));
buf.push('><ul style="margin-left:0px;" class="thumbnails">');
// iterate obj.list
;(function(){
  if ('number' == typeof obj.list.length) {
    for (var $index = 0, $$l = obj.list.length; $index < $$l; $index++) {
      var name = obj.list[$index];

 var toy = App.list[name]
buf.push('<li');
buf.push(attrs({ 'style':('text-align:center;width:108px;cursor:pointer;'), 'data-name':('toy'), 'data-type':(toy.type), "class": ('span2') }, {"style":true,"data-name":true,"data-type":true}));
buf.push('><div');
buf.push(attrs({ 'style':('padding: 20px 0px;'), "class": (App.list[name].view) }, {"class":true,"style":true}));
buf.push('> <a href="#" style="cursor:pointer;color:black"><i');
buf.push(attrs({ 'style':('margin-bottom:5px;'), "class": (toy.icon) }, {"class":true,"style":true}));
buf.push('></i><br/>');
var __val__ = toy.name
buf.push(null == __val__ ? "" : __val__);
buf.push('</a></div></li>');
    }
  } else {
    for (var $index in obj.list) {
      var name = obj.list[$index];

 var toy = App.list[name]
buf.push('<li');
buf.push(attrs({ 'style':('text-align:center;width:108px;cursor:pointer;'), 'data-name':('toy'), 'data-type':(toy.type), "class": ('span2') }, {"style":true,"data-name":true,"data-type":true}));
buf.push('><div');
buf.push(attrs({ 'style':('padding: 20px 0px;'), "class": (App.list[name].view) }, {"class":true,"style":true}));
buf.push('> <a href="#" style="cursor:pointer;color:black"><i');
buf.push(attrs({ 'style':('margin-bottom:5px;'), "class": (toy.icon) }, {"class":true,"style":true}));
buf.push('></i><br/>');
var __val__ = toy.name
buf.push(null == __val__ ? "" : __val__);
buf.push('</a></div></li>');
   }
  }
}).call(this);

buf.push('</ul></div>');
    }
  } else {
    for (var key in App.menubox) {
      var obj = App.menubox[key];

buf.push('<div');
buf.push(attrs({ 'id':(key), "class": ('tab-pane') + ' ' + (key == 'basecss' ? 'active' : '') }, {"class":true,"id":true}));
buf.push('><ul style="margin-left:0px;" class="thumbnails">');
// iterate obj.list
;(function(){
  if ('number' == typeof obj.list.length) {
    for (var $index = 0, $$l = obj.list.length; $index < $$l; $index++) {
      var name = obj.list[$index];

 var toy = App.list[name]
buf.push('<li');
buf.push(attrs({ 'style':('text-align:center;width:108px;cursor:pointer;'), 'data-name':('toy'), 'data-type':(toy.type), "class": ('span2') }, {"style":true,"data-name":true,"data-type":true}));
buf.push('><div');
buf.push(attrs({ 'style':('padding: 20px 0px;'), "class": (App.list[name].view) }, {"class":true,"style":true}));
buf.push('> <a href="#" style="cursor:pointer;color:black"><i');
buf.push(attrs({ 'style':('margin-bottom:5px;'), "class": (toy.icon) }, {"class":true,"style":true}));
buf.push('></i><br/>');
var __val__ = toy.name
buf.push(null == __val__ ? "" : __val__);
buf.push('</a></div></li>');
    }
  } else {
    for (var $index in obj.list) {
      var name = obj.list[$index];

 var toy = App.list[name]
buf.push('<li');
buf.push(attrs({ 'style':('text-align:center;width:108px;cursor:pointer;'), 'data-name':('toy'), 'data-type':(toy.type), "class": ('span2') }, {"style":true,"data-name":true,"data-type":true}));
buf.push('><div');
buf.push(attrs({ 'style':('padding: 20px 0px;'), "class": (App.list[name].view) }, {"class":true,"style":true}));
buf.push('> <a href="#" style="cursor:pointer;color:black"><i');
buf.push(attrs({ 'style':('margin-bottom:5px;'), "class": (toy.icon) }, {"class":true,"style":true}));
buf.push('></i><br/>');
var __val__ = toy.name
buf.push(null == __val__ ? "" : __val__);
buf.push('</a></div></li>');
   }
  }
}).call(this);

buf.push('</ul></div>');
   }
  }
}).call(this);

buf.push('</div></div>');
}
return buf.join("");
};
});
