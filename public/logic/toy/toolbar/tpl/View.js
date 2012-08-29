define(['jadeRuntime'], function(jade) {
return function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<h2>');
var __val__ = title
buf.push(null == __val__ ? "" : __val__);
buf.push('</h2><p>');
var __val__ = text
buf.push(null == __val__ ? "" : __val__);
buf.push('</p><div class="btn-toolbar">');
 var start = 1;
// iterate toolbar
;(function(){
  if ('number' == typeof toolbar.length) {
    for (var i = 0, $$l = toolbar.length; i < $$l; i++) {
      var group = toolbar[i];

buf.push('<div');
buf.push(attrs({ "class": ('btn-group') + ' ' + ((group[0]) ? 'btn-group-' + (group[0].groupType) : "") }, {"class":true}));
buf.push('>');
// iterate group
;(function(){
  if ('number' == typeof group.length) {
    for (var $index = 0, $$l = group.length; $index < $$l; $index++) {
      var button = group[$index];

buf.push('<a');
buf.push(attrs({ 'href':(button.link ? button.link : '#'), "class": ('btn') + ' ' + (button.cls) }, {"class":true,"href":true}));
buf.push('>');
if ( button.icon)
{
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
buf.push('&nbsp;        ');
}
var __val__ = button.title
buf.push(null == __val__ ? "" : __val__);
buf.push('</a>');
    }
  } else {
    for (var $index in group) {
      var button = group[$index];

buf.push('<a');
buf.push(attrs({ 'href':(button.link ? button.link : '#'), "class": ('btn') + ' ' + (button.cls) }, {"class":true,"href":true}));
buf.push('>');
if ( button.icon)
{
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
buf.push('&nbsp;        ');
}
var __val__ = button.title
buf.push(null == __val__ ? "" : __val__);
buf.push('</a>');
   }
  }
}).call(this);

buf.push('</div>');
    }
  } else {
    for (var i in toolbar) {
      var group = toolbar[i];

buf.push('<div');
buf.push(attrs({ "class": ('btn-group') + ' ' + ((group[0]) ? 'btn-group-' + (group[0].groupType) : "") }, {"class":true}));
buf.push('>');
// iterate group
;(function(){
  if ('number' == typeof group.length) {
    for (var $index = 0, $$l = group.length; $index < $$l; $index++) {
      var button = group[$index];

buf.push('<a');
buf.push(attrs({ 'href':(button.link ? button.link : '#'), "class": ('btn') + ' ' + (button.cls) }, {"class":true,"href":true}));
buf.push('>');
if ( button.icon)
{
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
buf.push('&nbsp;        ');
}
var __val__ = button.title
buf.push(null == __val__ ? "" : __val__);
buf.push('</a>');
    }
  } else {
    for (var $index in group) {
      var button = group[$index];

buf.push('<a');
buf.push(attrs({ 'href':(button.link ? button.link : '#'), "class": ('btn') + ' ' + (button.cls) }, {"class":true,"href":true}));
buf.push('>');
if ( button.icon)
{
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
buf.push('&nbsp;        ');
}
var __val__ = button.title
buf.push(null == __val__ ? "" : __val__);
buf.push('</a>');
   }
  }
}).call(this);

buf.push('</div>');
   }
  }
}).call(this);

buf.push('</div>');
}
return buf.join("");
};
});
