define(['jadeRuntime'], function(jade) {
return function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
if ( title)
{
buf.push('<h2>');
var __val__ = title
buf.push(null == __val__ ? "" : __val__);
buf.push('</h2>');
}
if ( text )
{
buf.push('<p>');
var __val__ = text
buf.push(null == __val__ ? "" : __val__);
buf.push('</p>');
}
buf.push('<div');
buf.push(attrs({ "class": ('tabbable') + ' ' + ('tabs-' + directionType) }, {"class":true}));
buf.push('><ul');
buf.push(attrs({ 'id':('myTab_' + cid), "class": ('nav') + ' ' + ('nav-' + kind + 's') }, {"class":true,"id":true}));
buf.push('>');
// iterate list
;(function(){
  if ('number' == typeof list.length) {
    for (var i = 0, $$l = list.length; i < $$l; i++) {
      var obj = list[i];

buf.push('<li');
buf.push(attrs({ "class": (obj.activeType == 'active' ? 'active' : '') }, {"class":true}));
buf.push('><a');
buf.push(attrs({ 'data-toggle':(kind), 'href':('#tab-content-' + cid + '-' + i) }, {"data-toggle":true,"href":true}));
buf.push('>');
if ( obj.icon)
{
buf.push('<i');
buf.push(attrs({ "class": ('icon-' + obj.icon) }, {"class":true}));
buf.push('> </i>&nbsp;				');
}
var __val__ = obj.title
buf.push(null == __val__ ? "" : __val__);
buf.push('</a></li>');
    }
  } else {
    for (var i in list) {
      var obj = list[i];

buf.push('<li');
buf.push(attrs({ "class": (obj.activeType == 'active' ? 'active' : '') }, {"class":true}));
buf.push('><a');
buf.push(attrs({ 'data-toggle':(kind), 'href':('#tab-content-' + cid + '-' + i) }, {"data-toggle":true,"href":true}));
buf.push('>');
if ( obj.icon)
{
buf.push('<i');
buf.push(attrs({ "class": ('icon-' + obj.icon) }, {"class":true}));
buf.push('> </i>&nbsp;				');
}
var __val__ = obj.title
buf.push(null == __val__ ? "" : __val__);
buf.push('</a></li>');
   }
  }
}).call(this);

buf.push('</ul><div');
buf.push(attrs({ 'id':('myTabContent_' + cid), "class": ('tab-content') }, {"id":true}));
buf.push('>     ');
// iterate list
;(function(){
  if ('number' == typeof list.length) {
    for (var i = 0, $$l = list.length; i < $$l; i++) {
      var obj = list[i];

buf.push('<div');
buf.push(attrs({ 'id':('tab-content-' + cid + '-' + i), "class": ('tab-pane') + ' ' + (obj.activeType == 'active' ? 'active' : '') }, {"class":true,"id":true}));
buf.push('>');
var __val__ = obj.text
buf.push(null == __val__ ? "" : __val__);
buf.push('</div>');
    }
  } else {
    for (var i in list) {
      var obj = list[i];

buf.push('<div');
buf.push(attrs({ 'id':('tab-content-' + cid + '-' + i), "class": ('tab-pane') + ' ' + (obj.activeType == 'active' ? 'active' : '') }, {"class":true,"id":true}));
buf.push('>');
var __val__ = obj.text
buf.push(null == __val__ ? "" : __val__);
buf.push('</div>');
   }
  }
}).call(this);

buf.push('</div></div>');
}
return buf.join("");
};
});
