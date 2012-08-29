define(['jadeRuntime'], function(jade) {
return function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<div');
buf.push(attrs({ "class": ('alert') + ' ' + ('alert-block') + ' ' + ('alert-' + kind) }, {"class":true}));
buf.push('>');
if ( title)
{
buf.push('<h4>');
var __val__ = title
buf.push(null == __val__ ? "" : __val__);
buf.push('</h4>');
}
if ( text)
{
var __val__ = text
buf.push(null == __val__ ? "" : __val__);
}
buf.push('<p>');
// iterate list
;(function(){
  if ('number' == typeof list.length) {
    for (var i = 0, $$l = list.length; i < $$l; i++) {
      var button = list[i];

if ( i > 0 && !button.buttonBlock)
{
buf.push('&nbsp; ');
}
buf.push('<a');
buf.push(attrs({ 'href':(button.link ? button.link : "#"), "class": ('btn') + ' ' + (button.cls) }, {"class":true,"href":true}));
buf.push('>');
if ( button.buttonType)
{
buf.push('<i');
buf.push(attrs({ "class": ('icon-' + button.icon) + ' ' + ('icon-white') }, {}));
buf.push('></i>');
}
else
{
buf.push('<i');
buf.push(attrs({ "class": ('icon-' + button.icon) }, {"class":true}));
buf.push('></i>');
}
buf.push('&nbsp;      ');
var __val__ = button.title
buf.push(null == __val__ ? "" : __val__);
buf.push('</a>');
    }
  } else {
    for (var i in list) {
      var button = list[i];

if ( i > 0 && !button.buttonBlock)
{
buf.push('&nbsp; ');
}
buf.push('<a');
buf.push(attrs({ 'href':(button.link ? button.link : "#"), "class": ('btn') + ' ' + (button.cls) }, {"class":true,"href":true}));
buf.push('>');
if ( button.buttonType)
{
buf.push('<i');
buf.push(attrs({ "class": ('icon-' + button.icon) + ' ' + ('icon-white') }, {}));
buf.push('></i>');
}
else
{
buf.push('<i');
buf.push(attrs({ "class": ('icon-' + button.icon) }, {"class":true}));
buf.push('></i>');
}
buf.push('&nbsp;      ');
var __val__ = button.title
buf.push(null == __val__ ? "" : __val__);
buf.push('</a>');
   }
  }
}).call(this);

buf.push('</p></div>');
}
return buf.join("");
};
});
