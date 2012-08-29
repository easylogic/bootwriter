define(['jadeRuntime'], function(jade) {
return function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<ul style="width:700px;margin-left:20px;" class="thumbnails">');
 for(var i = 1; i <= 20; i++ )
{
buf.push('<li style="width:105px;" class="span2"><a');
buf.push(attrs({ 'href':('#'), 'data-themes':(i), "class": ('thumbnail') + ' ' + ('themes-image') }, {"href":true,"data-themes":true}));
buf.push('><img');
buf.push(attrs({ 'src':("https://twitter.com/images/themes/theme"+i+"/swatch.gif") }, {"src":true}));
buf.push('/></a></li>');
}
buf.push('</ul>');
}
return buf.join("");
};
});
