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
if ( text  )
{
buf.push('<p>');
var __val__ = text
buf.push(null == __val__ ? "" : __val__);
buf.push('</p>');
}
buf.push('<div');
buf.push(attrs({ 'id':('carousel_' + cid), "class": ('carousel') + ' ' + ('slide') }, {"id":true}));
buf.push('><div class="carousel-inner">');
// iterate list 
;(function(){
  if ('number' == typeof list .length) {
    for (var i = 0, $$l = list .length; i < $$l; i++) {
      var obj = list [i];

buf.push('<div');
buf.push(attrs({ "class": ('item') + ' ' + ((obj.activeType == 'active' ? 'active' : '')) }, {"class":true}));
buf.push('><img');
buf.push(attrs({ 'src':(obj.image) }, {"src":true}));
buf.push('/>');
if ( obj.title || obj.text)
{
buf.push('<div class="carousel-caption"><h4>');
var __val__ = obj.title
buf.push(null == __val__ ? "" : __val__);
buf.push('</h4><p>');
var __val__ = obj.text    
buf.push(null == __val__ ? "" : __val__);
buf.push('</p></div>');
}
buf.push('</div>');
    }
  } else {
    for (var i in list ) {
      var obj = list [i];

buf.push('<div');
buf.push(attrs({ "class": ('item') + ' ' + ((obj.activeType == 'active' ? 'active' : '')) }, {"class":true}));
buf.push('><img');
buf.push(attrs({ 'src':(obj.image) }, {"src":true}));
buf.push('/>');
if ( obj.title || obj.text)
{
buf.push('<div class="carousel-caption"><h4>');
var __val__ = obj.title
buf.push(null == __val__ ? "" : __val__);
buf.push('</h4><p>');
var __val__ = obj.text    
buf.push(null == __val__ ? "" : __val__);
buf.push('</p></div>');
}
buf.push('</div>');
   }
  }
}).call(this);

buf.push('</div>');
if ( button )
{
buf.push('<a');
buf.push(attrs({ 'href':('#carousel_' + cid), 'data-slide':('prev'), 'style':('cursor:pointer'), "class": ('carousel-control') + ' ' + ('left') }, {"href":true,"data-slide":true,"style":true}));
buf.push('>&lsaquo;</a><a');
buf.push(attrs({ 'href':('#carousel_' + cid), 'data-slide':('next'), 'style':('cursor:pointer'), "class": ('carousel-control') + ' ' + ('right') }, {"href":true,"data-slide":true,"style":true}));
buf.push('>&rsaquo;</a>');
}
buf.push('</div>');
}
return buf.join("");
};
});
