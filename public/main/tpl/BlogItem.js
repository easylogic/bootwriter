define(['jadeRuntime'], function(jade) {
return function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<div class="item"><div class="text">       <a');
buf.push(attrs({ 'href':('/view/' + _id) }, {"href":true}));
buf.push('>');
var __val__ = title
buf.push(null == __val__ ? "" : __val__);
buf.push('</a></div><div class="item-header">');
 if (typeof auth !== 'undefined' && auth.authType)          
{
buf.push('<a>');
var __val__ = auth.username
buf.push(null == __val__ ? "" : __val__);
buf.push('&nbsp;<img');
buf.push(attrs({ 'src':(auth.icon), 'width':(16) }, {"src":true,"width":true}));
buf.push('/></a>');
}
buf.push('</div>');
 if (typeof tag == 'undefined') tag = []
if ( tag)
{
buf.push('<code>');
var __val__ = tag
buf.push(null == __val__ ? "" : __val__);
buf.push('</code>');
}
buf.push('</div>');
}
return buf.join("");
};
});
