define(['jadeRuntime'], function(jade) {
return function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
var input_text_mixin = function(value, name, title){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
buf.push('<input');
buf.push(attrs({ 'type':('text'), 'value':(value), 'placeholder':("Insert " + title), "class": ('span8') + ' ' + (name) }, {"class":true,"type":true,"value":true,"placeholder":true}));
buf.push('/>');
};
var title_mixin = function(value, name){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
buf.push('<input');
buf.push(attrs({ 'type':('text'), 'value':(value), 'placeholder':("Insert " + (name ? name : 'Title')), "class": ('span8') + ' ' + ('title') }, {"type":true,"value":true,"placeholder":true}));
buf.push('/>');
};
var text_mixin = function(value, name, rows){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
 rows = rows ? rows : 10;
buf.push('<textarea');
buf.push(attrs({ 'rows':(rows), 'placeholder':("Insert " + (name ? name :'Content')), "class": ('span8') + ' ' + ('text') }, {"rows":true,"placeholder":true}));
buf.push('>');
var __val__ = value
buf.push(null == __val__ ? "" : __val__);
buf.push('</textarea>');
};
var select_mixin = function(name, list, value, title){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
buf.push('<select');
buf.push(attrs({ 'data-placeholder':(title), 'style':('margin-bottom:10px;'), "class": (name) }, {"class":true,"data-placeholder":true,"style":true}));
buf.push('><option value=""></option>');
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

buf.push('</select>');
};
var tag_mixin = function(value){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
buf.push('<input');
buf.push(attrs({ 'type':('text'), 'value':(value.join(",")), 'placeholder':("Insert Tag"), "class": ('span8') + ' ' + ('tag') }, {"type":true,"value":true,"placeholder":true}));
buf.push('/>');
};
var checkbox_mixin = function(name, value, title){
var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {};
buf.push('<label class="checkbox">');
if ( value )
{
buf.push('<input');
buf.push(attrs({ 'type':('checkbox'), 'checked':('checked'), 'style':('display:inline-block'), "class": (name) }, {"class":true,"type":true,"checked":true,"style":true}));
buf.push('/>');
}
else
{
buf.push('<input');
buf.push(attrs({ 'type':('checkbox'), 'style':('display:inline-block'), "class": (name) }, {"class":true,"type":true,"style":true}));
buf.push('/>');
}
var __val__ = title
buf.push(null == __val__ ? "" : __val__);
buf.push('</label>');
};
}
return buf.join("");
};
});
