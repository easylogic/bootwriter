define(['jadeRuntime'], function(jade) {
return function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<ul');
buf.push(attrs({ "class": ('nav') + ' ' + ('nav-' + kind + 's nav-stacked') }, {"class":true}));
buf.push('>');
// iterate list
;(function(){
  if ('number' == typeof list.length) {
    for (var i = 0, $$l = list.length; i < $$l; i++) {
      var obj = list[i];

buf.push('<li');
buf.push(attrs({ 'data-index':(i), "class": (obj.activeType) }, {"class":true,"data-index":true}));
buf.push('><a');
buf.push(attrs({ 'data-toggle':(kind), 'data-index':(i), 'href':(obj.link) }, {"data-toggle":true,"data-index":true,"href":true}));
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
buf.push(attrs({ 'data-index':(i), "class": (obj.activeType) }, {"class":true,"data-index":true}));
buf.push('><a');
buf.push(attrs({ 'data-toggle':(kind), 'data-index':(i), 'href':(obj.link) }, {"data-toggle":true,"data-index":true,"href":true}));
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

buf.push('</ul>');
}
return buf.join("");
};
});
