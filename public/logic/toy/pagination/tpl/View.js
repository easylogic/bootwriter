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
 if (kind == '') className = "pagination"
 if (kind == 'pager') className = "pager"
 if (kind == 'centered') className = "pagination pagination-centered"  
buf.push('<div');
buf.push(attrs({ "class": (className) }, {"class":true}));
buf.push('><ul>');
// iterate list
;(function(){
  if ('number' == typeof list.length) {
    for (var $index = 0, $$l = list.length; $index < $$l; $index++) {
      var obj = list[$index];

buf.push('<li');
buf.push(attrs({ "class": (obj.activeType) }, {"class":true}));
buf.push('><a');
buf.push(attrs({ 'href':(obj.link) }, {"href":true}));
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
    for (var $index in list) {
      var obj = list[$index];

buf.push('<li');
buf.push(attrs({ "class": (obj.activeType) }, {"class":true}));
buf.push('><a');
buf.push(attrs({ 'href':(obj.link) }, {"href":true}));
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

buf.push('</ul></div>');
}
return buf.join("");
};
});
