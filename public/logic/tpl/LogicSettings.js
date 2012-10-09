define(['jadeRuntime'], function(jade) {
return function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
if ( App.mode == 'write' && App.toy != null)
{
buf.push('<span> <a class="btn btn-info settings-btn btn-small"> <i');
buf.push(attrs({ "class": ('icon-white') + ' ' + (App.list[App.toy.type].icon) }, {"class":true}));
buf.push('></i>&nbsp; ');
var __val__ = App.list[App.toy.type].name
buf.push(null == __val__ ? "" : __val__);
buf.push('</a></span>');
}
}
return buf.join("");
};
});
