define(['jadeRuntime'], function(jade) {
return function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
window.input_text_mixin = function(value, name, title){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
buf.push('<label>');
var __val__ = title
buf.push(null == __val__ ? "" : __val__);
buf.push('</label><input');
buf.push(attrs({ 'type':('text'), 'value':(value), "class": ('span8') + ' ' + (name) }, {"class":true,"type":true,"value":true}));
buf.push('/>'); 
};
window.title_mixin = function(value, name){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
buf.push('<label>');
var __val__ = name ? name : 'Title' 
buf.push(null == __val__ ? "" : __val__);
buf.push('</label><input');
buf.push(attrs({ 'type':('text'), 'value':(value), "class": ('span8') + ' ' + ('title') }, {"type":true,"value":true}));
buf.push('/>');
};
window.text_mixin = function(value, name, rows){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
 rows = rows ? rows : 5;
buf.push('<label>');
var __val__ = name ? name :'Content' 
buf.push(null == __val__ ? "" : __val__);
buf.push('</label><textarea');
buf.push(attrs({ 'rows':(rows), "class": ('span8') + ' ' + ('text') }, {"rows":true}));
buf.push('>');
var __val__ = value
buf.push(null == __val__ ? "" : __val__);
buf.push('</textarea>');
};
window.tag_mixin = function(value){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
buf.push('<label>Tag </label><input');
buf.push(attrs({ 'type':('text'), 'value':(value.join(",")), "class": ('span8') + ' ' + ('tag') }, {"type":true,"value":true}));
buf.push('/>');
};
window.li_select_mixin = function(name, list, value, title){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
buf.push('<li><div class="thumbnail"><form class="form-horizontal"><div class="control-group"><label class="control-label">');
var __val__ = title
buf.push(null == __val__ ? "" : __val__);
buf.push('</label><div class="controls">                             <select');
buf.push(attrs({ "class": ('input-small') + ' ' + (name) }, {"class":true}));
buf.push('><option value="">none</option>');
// iterate list
;(function(){
  if ('number' == typeof list.length) {
    for (var $index = 0, $$l = list.length; $index < $$l; $index++) {
      var list_value = list[$index];

 if (list_value == value)
{
buf.push('<option');
buf.push(attrs({ 'value':(list_value), 'selected':('selected') }, {"value":true,"selected":true}));
buf.push('>');
var __val__ = list_value
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</option>');
}
 else 
{
buf.push('<option');
buf.push(attrs({ 'value':(list_value) }, {"value":true}));
buf.push('>');
var __val__ = list_value
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</option>');
}
    }
  } else {
    for (var $index in list) {
      var list_value = list[$index];

 if (list_value == value)
{
buf.push('<option');
buf.push(attrs({ 'value':(list_value), 'selected':('selected') }, {"value":true,"selected":true}));
buf.push('>');
var __val__ = list_value
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</option>');
}
 else 
{
buf.push('<option');
buf.push(attrs({ 'value':(list_value) }, {"value":true}));
buf.push('>');
var __val__ = list_value
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</option>');
}
   }
  }
}).call(this);

buf.push('</select></div></div></form></div></li>');
};
window.li_text_mixin = function(name, value, title){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
buf.push('<li><div class="thumbnail"><form class="form-horizontal"><div class="control-group"><label class="control-label">');
var __val__ = title
buf.push(null == __val__ ? "" : __val__);
buf.push('</label><div class="controls">                             <input');
buf.push(attrs({ 'type':('text'), 'value':(value), "class": (name) + ' ' + ('input-small') }, {"type":true,"value":true}));
buf.push('/></div></div></form></div></li>');
};
window.li_checkbox_mixin = function(name, value, title){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
buf.push('<li><div class="thumbnail"><form class="form-horizontal"><div class="control-group"><label class="control-label">');
var __val__ = title
buf.push(null == __val__ ? "" : __val__);
buf.push('</label><div class="controls"><label class="checkbox">');
if ( value )
{
buf.push('<input');
buf.push(attrs({ 'type':('checkbox'), 'checked':('checked'), "class": (name) }, {"class":true,"type":true,"checked":true}));
buf.push('/>');
}
else
{
buf.push('<input');
buf.push(attrs({ 'type':('checkbox'), "class": (name) }, {"class":true,"type":true}));
buf.push('/>');
}
buf.push('</label></div></div></form></div></li>');
};
}
return buf.join("");
};
});
