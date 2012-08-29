define(['jadeRuntime'], function(jade) {
return function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<div class="hero-unit">');
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
buf.push('<p>');
// iterate list 
;(function(){
  if ('number' == typeof list .length) {
    for (var $index = 0, $$l = list .length; $index < $$l; $index++) {
      var button = list [$index];

buf.push('&nbsp;<a');
buf.push(attrs({ 'href':(button.link ? button.link : "#"), "class": ('btn') + ' ' + ('btn-large') + ' ' + (button.cls) }, {"class":true,"href":true}));
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
    for (var $index in list ) {
      var button = list [$index];

buf.push('&nbsp;<a');
buf.push(attrs({ 'href':(button.link ? button.link : "#"), "class": ('btn') + ' ' + ('btn-large') + ' ' + (button.cls) }, {"class":true,"href":true}));
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
