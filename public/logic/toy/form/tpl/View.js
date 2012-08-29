define(['jadeRuntime'], function(jade) {
return function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<form');
buf.push(attrs({ "class": ((kind ? 'form-' + kind : "")) }, {"class":true}));
buf.push('><fieldset>');
if ( title)
{
buf.push('<legend>');
var __val__ = title
buf.push(null == __val__ ? "" : __val__);
buf.push('</legend>');
}
// iterate list
;(function(){
  if ('number' == typeof list.length) {
    for (var i = 0, $$l = list.length; i < $$l; i++) {
      var obj = list[i];

 var el_id = "element_" + cid + "_" + i
buf.push('<div');
buf.push(attrs({ "class": ('control-group') + ' ' + ((obj.groupState ? obj.groupState : "")) }, {"class":true}));
buf.push('><label');
buf.push(attrs({ 'for':(el_id), "class": ('control-label') }, {"for":true}));
buf.push('>');
var __val__ = obj.title
buf.push(null == __val__ ? "" : __val__);
buf.push('</label><div class="controls">');
 if (obj.type == 'select' || obj.type == 'multi-select')
{
buf.push('<select');
buf.push(attrs({ 'id':(el_id), 'name':(obj.name) }, {"id":true,"name":true}));
buf.push('><option value=""></option>');
// iterate obj.value.split(/\n/)
;(function(){
  if ('number' == typeof obj.value.split(/\n/).length) {
    for (var i = 0, $$l = obj.value.split(/\n/).length; i < $$l; i++) {
      var val = obj.value.split(/\n/)[i];

buf.push('<option');
buf.push(attrs({ 'value':(i) }, {"value":true}));
buf.push('>');
var __val__ = val
buf.push(null == __val__ ? "" : __val__);
buf.push('</option>');
    }
  } else {
    for (var i in obj.value.split(/\n/)) {
      var val = obj.value.split(/\n/)[i];

buf.push('<option');
buf.push(attrs({ 'value':(i) }, {"value":true}));
buf.push('>');
var __val__ = val
buf.push(null == __val__ ? "" : __val__);
buf.push('</option>');
   }
  }
}).call(this);

buf.push('</select>');
}
 else if (obj.type == 'checkbox' || obj.type == 'radio')
{
// iterate obj.value.split(/\n/)
;(function(){
  if ('number' == typeof obj.value.split(/\n/).length) {
    for (var i = 0, $$l = obj.value.split(/\n/).length; i < $$l; i++) {
      var val = obj.value.split(/\n/)[i];

buf.push('<label');
buf.push(attrs({ "class": (obj.type) }, {"class":true}));
buf.push('><input');
buf.push(attrs({ 'type':(obj.type), 'id':(obj.name + "_" + i), 'name':(obj.name + (obj.type == 'checkbox' ? '[]' : '')), 'value':(val) }, {"type":true,"id":true,"name":true,"value":true}));
buf.push('/>');
var __val__ = val                
buf.push(null == __val__ ? "" : __val__);
buf.push('</label>');
    }
  } else {
    for (var i in obj.value.split(/\n/)) {
      var val = obj.value.split(/\n/)[i];

buf.push('<label');
buf.push(attrs({ "class": (obj.type) }, {"class":true}));
buf.push('><input');
buf.push(attrs({ 'type':(obj.type), 'id':(obj.name + "_" + i), 'name':(obj.name + (obj.type == 'checkbox' ? '[]' : '')), 'value':(val) }, {"type":true,"id":true,"name":true,"value":true}));
buf.push('/>');
var __val__ = val                
buf.push(null == __val__ ? "" : __val__);
buf.push('</label>');
   }
  }
}).call(this);

}
 else
{
 var state = (obj.state == 'disabled' ? obj.state : "");
 state += " " + (obj.state == 'uneditable' ? "uneditable-input" : "");
buf.push('<input');
buf.push(attrs({ 'type':(obj.type), 'id':(el_id), 'name':(obj.name), "class": (state) }, {"type":true,"id":true,"class":true,"name":true}));
buf.push('/>');
}
if ( obj.helper)
{
if ( obj.helperType == 'inline')
{
buf.push('<span class="help-inline">');
var __val__ = obj.helper
buf.push(null == __val__ ? "" : __val__);
buf.push('</span>');
}
else
{
buf.push('<p class="help-block">');
var __val__ = obj.helper              
buf.push(null == __val__ ? "" : __val__);
buf.push('</p>');
}
}
buf.push('</div></div>');
    }
  } else {
    for (var i in list) {
      var obj = list[i];

 var el_id = "element_" + cid + "_" + i
buf.push('<div');
buf.push(attrs({ "class": ('control-group') + ' ' + ((obj.groupState ? obj.groupState : "")) }, {"class":true}));
buf.push('><label');
buf.push(attrs({ 'for':(el_id), "class": ('control-label') }, {"for":true}));
buf.push('>');
var __val__ = obj.title
buf.push(null == __val__ ? "" : __val__);
buf.push('</label><div class="controls">');
 if (obj.type == 'select' || obj.type == 'multi-select')
{
buf.push('<select');
buf.push(attrs({ 'id':(el_id), 'name':(obj.name) }, {"id":true,"name":true}));
buf.push('><option value=""></option>');
// iterate obj.value.split(/\n/)
;(function(){
  if ('number' == typeof obj.value.split(/\n/).length) {
    for (var i = 0, $$l = obj.value.split(/\n/).length; i < $$l; i++) {
      var val = obj.value.split(/\n/)[i];

buf.push('<option');
buf.push(attrs({ 'value':(i) }, {"value":true}));
buf.push('>');
var __val__ = val
buf.push(null == __val__ ? "" : __val__);
buf.push('</option>');
    }
  } else {
    for (var i in obj.value.split(/\n/)) {
      var val = obj.value.split(/\n/)[i];

buf.push('<option');
buf.push(attrs({ 'value':(i) }, {"value":true}));
buf.push('>');
var __val__ = val
buf.push(null == __val__ ? "" : __val__);
buf.push('</option>');
   }
  }
}).call(this);

buf.push('</select>');
}
 else if (obj.type == 'checkbox' || obj.type == 'radio')
{
// iterate obj.value.split(/\n/)
;(function(){
  if ('number' == typeof obj.value.split(/\n/).length) {
    for (var i = 0, $$l = obj.value.split(/\n/).length; i < $$l; i++) {
      var val = obj.value.split(/\n/)[i];

buf.push('<label');
buf.push(attrs({ "class": (obj.type) }, {"class":true}));
buf.push('><input');
buf.push(attrs({ 'type':(obj.type), 'id':(obj.name + "_" + i), 'name':(obj.name + (obj.type == 'checkbox' ? '[]' : '')), 'value':(val) }, {"type":true,"id":true,"name":true,"value":true}));
buf.push('/>');
var __val__ = val                
buf.push(null == __val__ ? "" : __val__);
buf.push('</label>');
    }
  } else {
    for (var i in obj.value.split(/\n/)) {
      var val = obj.value.split(/\n/)[i];

buf.push('<label');
buf.push(attrs({ "class": (obj.type) }, {"class":true}));
buf.push('><input');
buf.push(attrs({ 'type':(obj.type), 'id':(obj.name + "_" + i), 'name':(obj.name + (obj.type == 'checkbox' ? '[]' : '')), 'value':(val) }, {"type":true,"id":true,"name":true,"value":true}));
buf.push('/>');
var __val__ = val                
buf.push(null == __val__ ? "" : __val__);
buf.push('</label>');
   }
  }
}).call(this);

}
 else
{
 var state = (obj.state == 'disabled' ? obj.state : "");
 state += " " + (obj.state == 'uneditable' ? "uneditable-input" : "");
buf.push('<input');
buf.push(attrs({ 'type':(obj.type), 'id':(el_id), 'name':(obj.name), "class": (state) }, {"type":true,"id":true,"class":true,"name":true}));
buf.push('/>');
}
if ( obj.helper)
{
if ( obj.helperType == 'inline')
{
buf.push('<span class="help-inline">');
var __val__ = obj.helper
buf.push(null == __val__ ? "" : __val__);
buf.push('</span>');
}
else
{
buf.push('<p class="help-block">');
var __val__ = obj.helper              
buf.push(null == __val__ ? "" : __val__);
buf.push('</p>');
}
}
buf.push('</div></div>');
   }
  }
}).call(this);

buf.push('</fieldset></form>');
}
return buf.join("");
};
});
