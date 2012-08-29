define(['jadeRuntime'], function(jade) {
return function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
 if (typeof skinText != 'undefined' && skinText) 
{
buf.push('<style type="text/css">');
var __val__ = skinText
buf.push(null == __val__ ? "" : __val__);
buf.push('</style>');
}
buf.push('<div');
buf.push(attrs({ 'id':(cid) }, {"id":true}));
buf.push('>');
 if (!isContainer)  
{
buf.push('<div');
buf.push(attrs({ 'data-cid':(cid), 'id':(cid), "class": ('logic-comp-viewpoint') }, {"data-cid":true,"id":true}));
buf.push('><div class="viewText">');
var __val__ = viewText
buf.push(null == __val__ ? "" : __val__);
buf.push('</div></div>');
}
 if (isContainer)
{
buf.push('<div');
buf.push(attrs({ 'data-cid':(cid), "class": ('logic-comp-childpoint') + ' ' + ((rowType == 'fluid') ? 'row-fluid' : 'row') }, {"class":true,"data-cid":true}));
buf.push('></div>');
}
buf.push('</div>');
}
return buf.join("");
};
});
