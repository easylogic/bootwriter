define(['jadeRuntime'], function(jade) {
return function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<form class="form-horizontal"><fieldset style="padding-left: 20px;"><div class="control-group"><label class="control-label settings-label">Themes</label><div class="controls"> <select data-placeholder="Select Themes" class="themes"><option value=""></option>');
// iterate themes
;(function(){
  if ('number' == typeof themes.length) {
    for (var $index = 0, $$l = themes.length; $index < $$l; $index++) {
      var obj = themes[$index];

buf.push('<option');
buf.push(attrs({ 'value':(obj.link) }, {"value":true}));
buf.push('>');
var __val__ = obj.name
buf.push(null == __val__ ? "" : __val__);
buf.push('</option>');
    }
  } else {
    for (var $index in themes) {
      var obj = themes[$index];

buf.push('<option');
buf.push(attrs({ 'value':(obj.link) }, {"value":true}));
buf.push('>');
var __val__ = obj.name
buf.push(null == __val__ ? "" : __val__);
buf.push('</option>');
   }
  }
}).call(this);

buf.push('</select></div></div><div class="control-group">           <div style="position:relative;height:300px;width:100%" class="skineditor_container"><div id="skineditor" style="position:absolute;top:0;bottom:0;left:0;right:0;">');
var __val__ = skin
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</div></div></div></fieldset></form>');
}
return buf.join("");
};
});
