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
buf.push(attrs({ 'id':('accordion_' + cid), "class": ('accordion') }, {"id":true}));
buf.push('>');
// iterate list
;(function(){
  if ('number' == typeof list.length) {
    for (var i = 0, $$l = list.length; i < $$l; i++) {
      var obj = list[i];

buf.push('<div');
buf.push(attrs({ "class": ('accordion-group') + ' ' + ('accordion_list_' + i) }, {"class":true}));
buf.push('><div class="accordion-heading"><a');
buf.push(attrs({ 'data-toggle':('collapse'), 'data-parent':(' #accordion_' + cid), 'href':("#collapse_" + cid +  "_" + i), "class": ('accordion-toggle') }, {"data-toggle":true,"data-parent":true,"href":true}));
buf.push('>');
if ( obj.icon )
{
buf.push('<i');
buf.push(attrs({ "class": ('icon-' + obj.icon) }, {"class":true}));
buf.push('> </i>');
}
buf.push('&nbsp;');
var __val__ = obj.title
buf.push(null == __val__ ? "" : __val__);
buf.push('</a></div><div');
buf.push(attrs({ 'id':("collapse_" + cid +  "_" + i), "class": ('accordion-body') + ' ' + ('collapse') + ' ' + (i == 0 ? 'in' : '') }, {"class":true,"id":true}));
buf.push('><div class="accordion-inner">');
var __val__ = obj.text
buf.push(null == __val__ ? "" : __val__);
buf.push('</div></div></div>');
    }
  } else {
    for (var i in list) {
      var obj = list[i];

buf.push('<div');
buf.push(attrs({ "class": ('accordion-group') + ' ' + ('accordion_list_' + i) }, {"class":true}));
buf.push('><div class="accordion-heading"><a');
buf.push(attrs({ 'data-toggle':('collapse'), 'data-parent':(' #accordion_' + cid), 'href':("#collapse_" + cid +  "_" + i), "class": ('accordion-toggle') }, {"data-toggle":true,"data-parent":true,"href":true}));
buf.push('>');
if ( obj.icon )
{
buf.push('<i');
buf.push(attrs({ "class": ('icon-' + obj.icon) }, {"class":true}));
buf.push('> </i>');
}
buf.push('&nbsp;');
var __val__ = obj.title
buf.push(null == __val__ ? "" : __val__);
buf.push('</a></div><div');
buf.push(attrs({ 'id':("collapse_" + cid +  "_" + i), "class": ('accordion-body') + ' ' + ('collapse') + ' ' + (i == 0 ? 'in' : '') }, {"class":true,"id":true}));
buf.push('><div class="accordion-inner">');
var __val__ = obj.text
buf.push(null == __val__ ? "" : __val__);
buf.push('</div></div></div>');
   }
  }
}).call(this);

buf.push('</div>');
}
return buf.join("");
};
});
