define(['jadeRuntime'], function(jade) {
return function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<a');
buf.push(attrs({ 'title':(App.list[type].name), "class": ('btn') + ' ' + ('settings-btn') + ' ' + ('btn-mini') + ' ' + (App.list[type].view) }, {"class":true,"title":true}));
buf.push('><i');
buf.push(attrs({ "class": ('icon-white') + ' ' + (App.list[type].icon) }, {"class":true}));
buf.push('></i></a>');
}
return buf.join("");
};
});
