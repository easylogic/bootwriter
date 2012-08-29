define(['jadeRuntime'], function(jade) {
return function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<a style="width:70px" class="btn btn-success add_row">row+</a>&nbsp;<a style="width:70px" class="btn btn-info add_column">col+    </a><table><tr class="column"><td class="ui-state-disabled"><a style="width:70px;background:white;margin:0px;" class="btn init_row ui-state-disabled">&nbsp;</a></td></tr></table><table><tbody class="list"></tbody></table>');
}
return buf.join("");
};
});
