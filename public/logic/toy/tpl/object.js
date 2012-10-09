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
buf.push(attrs({ 'id':(cid), "class": (className) }, {"id":true,"class":true}));
buf.push('>');
 if (App.mode == 'write' && !isRoot)
{
buf.push('<div class="menu_list"><div class="menu_left"></div><div class="menu_right"></div><div class="menu_center"></div><span class="simple-view simple-view-left badge"></span><span class="simple-view simple-view-right badge"></span></div>');
}
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
buf.push(attrs({ 'data-cid':(cid), "class": ('logic-comp-childpoint') }, {"data-cid":true}));
buf.push('></div>');
}
buf.push('</div>');
}
return buf.join("");
};
});
