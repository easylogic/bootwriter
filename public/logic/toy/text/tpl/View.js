define(['jadeRuntime'], function(jade) {
return function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
 if (!text) text = '&nbsp;&nbsp;&nbsp;&nbsp;';
 if( kind == 'pre')
{
buf.push('<pre>');
var __val__ = text
buf.push(null == __val__ ? "" : __val__);
buf.push('</pre>');
}
 else if( kind == 'h1')
{
buf.push('<h1>');
var __val__ = text
buf.push(null == __val__ ? "" : __val__);
buf.push('</h1>');
}
 else if( kind == 'h2')
{
buf.push('<h2>');
var __val__ = text
buf.push(null == __val__ ? "" : __val__);
buf.push('</h2>');
}
 else if( kind == 'h3')
{
buf.push('<h3>');
var __val__ = text
buf.push(null == __val__ ? "" : __val__);
buf.push('</h3>');
}
 else if( kind == 'h4')
{
buf.push('<h4>');
var __val__ = text
buf.push(null == __val__ ? "" : __val__);
buf.push('</h4>');
}
 else if( kind == 'h5')
{
buf.push('<h5>');
var __val__ = text
buf.push(null == __val__ ? "" : __val__);
buf.push('</h5>');
}
 else if( kind == 'h6')
{
buf.push('<h6>');
var __val__ = text
buf.push(null == __val__ ? "" : __val__);
buf.push('</h6>');
}
 else 
{
buf.push('<p>');
var __val__ = text    
buf.push(null == __val__ ? "" : __val__);
buf.push('</p>');
}
}
return buf.join("");
};
});
