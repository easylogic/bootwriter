define(['jadeRuntime'], function(jade) {
return function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<div style="padding: 8px 0" class="well"><ul class="nav nav-list"><li class="nav-header">Profile</li><li><img src="http://profile.ak.fbcdn.net/hprofile-ak-snc4/49219_100000616923797_5111_n.jpg"/></li><li class="nav-header">Tags</li><li><a href="/">All List</a></li></ul></div>');
}
return buf.join("");
};
});
