define(['jadeRuntime'], function(jade) {
return function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
if ( link)
{
buf.push('<a');
buf.push(attrs({ 'href':(link) }, {"href":true}));
buf.push('><img');
buf.push(attrs({ 'src':(image) }, {"src":true}));
buf.push('/></a>');
}
else
{
buf.push('<img');
buf.push(attrs({ 'src':(image), "class": (cls) }, {"src":true,"class":true}));
buf.push('/>');
}
buf.push('<div class="caption">');
if ( title)
{
buf.push('<h2>');
var __val__ = title
buf.push(null == __val__ ? "" : __val__);
buf.push('</h2>');
}
if ( text)
{
buf.push('<p>');
var __val__ = text
buf.push(null == __val__ ? "" : __val__);
buf.push('</p>');
}
if ( list.length > 0)
{
buf.push('<p>');
// iterate list 
;(function(){
  if ('number' == typeof list .length) {
    for (var $index = 0, $$l = list .length; $index < $$l; $index++) {
      var button = list [$index];

buf.push('<a');
buf.push(attrs({ 'href':(button.link ? button.link : "#"), "class": ('btn') + ' ' + (button.cls) }, {"class":true,"href":true}));
buf.push('>');
var __val__ = button.title
buf.push(null == __val__ ? "" : __val__);
buf.push('&nbsp;</a>');
    }
  } else {
    for (var $index in list ) {
      var button = list [$index];

buf.push('<a');
buf.push(attrs({ 'href':(button.link ? button.link : "#"), "class": ('btn') + ' ' + (button.cls) }, {"class":true,"href":true}));
buf.push('>');
var __val__ = button.title
buf.push(null == __val__ ? "" : __val__);
buf.push('&nbsp;</a>');
   }
  }
}).call(this);

buf.push('</p>');
}
buf.push('</div>');
}
return buf.join("");
};
});
