define(['jadeRuntime'], function(jade) {
return function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
if ( title )
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
buf.push('<ul class="breadcrumb">');
// iterate list 
;(function(){
  if ('number' == typeof list .length) {
    for (var i = 0, $$l = list .length; i < $$l; i++) {
      var obj = list [i];

buf.push('<li');
buf.push(attrs({ "class": ((obj.activeType == 'active') ? 'active' : '') }, {"class":true}));
buf.push('>');
if ( obj.activeType == 'active')
{
if ( obj.icon)
{
buf.push('<i');
buf.push(attrs({ "class": ('icon-' + obj.icon) }, {"class":true}));
buf.push('></i>&nbsp;			');
}
var __val__ = obj.title
buf.push(null == __val__ ? "" : __val__);
}
else
{
buf.push('<a');
buf.push(attrs({ 'href':(obj.link ? obj.link : "#") }, {"href":true}));
buf.push('>');
if ( obj.icon)
{
buf.push('<i');
buf.push(attrs({ "class": ('icon-' + obj.icon) }, {"class":true}));
buf.push('></i>&nbsp;				');
}
var __val__ = obj.title
buf.push(null == __val__ ? "" : __val__);
buf.push('</a><span class="divider">/</span>');
}
buf.push('</li>');
    }
  } else {
    for (var i in list ) {
      var obj = list [i];

buf.push('<li');
buf.push(attrs({ "class": ((obj.activeType == 'active') ? 'active' : '') }, {"class":true}));
buf.push('>');
if ( obj.activeType == 'active')
{
if ( obj.icon)
{
buf.push('<i');
buf.push(attrs({ "class": ('icon-' + obj.icon) }, {"class":true}));
buf.push('></i>&nbsp;			');
}
var __val__ = obj.title
buf.push(null == __val__ ? "" : __val__);
}
else
{
buf.push('<a');
buf.push(attrs({ 'href':(obj.link ? obj.link : "#") }, {"href":true}));
buf.push('>');
if ( obj.icon)
{
buf.push('<i');
buf.push(attrs({ "class": ('icon-' + obj.icon) }, {"class":true}));
buf.push('></i>&nbsp;				');
}
var __val__ = obj.title
buf.push(null == __val__ ? "" : __val__);
buf.push('</a><span class="divider">/</span>');
}
buf.push('</li>');
   }
  }
}).call(this);

buf.push('</ul>');
}
return buf.join("");
};
});
