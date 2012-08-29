define(['jadeRuntime'], function(jade) {
return function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<div class="btn-group"><a data-toggle="dropdown" class="btn dropdown-toggle">Tool\n&nbsp;<span class="caret"></span></a><ul class="dropdown-menu"><li><a href="#copy" class="copy">Copy</a></li><li><a href="#export_html" class="export_html">Export HTML</a></li><li><a href="#export_json" class="export_json">Export JSON</a></li></ul></div>');
}
return buf.join("");
};
});
