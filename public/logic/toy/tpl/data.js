define(['jadeRuntime'], function(jade) {
return function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<form onSubmit="return false;" class="form-horizontal"><fieldset style="padding-left: 20px;">');
// iterate infoList
;(function(){
  if ('number' == typeof infoList.length) {
    for (var $index = 0, $$l = infoList.length; $index < $$l; $index++) {
      var obj = infoList[$index];

buf.push('<div class="control-group">   ');
if ( obj.full)
{
 if (obj.type == 'title')
{
title_mixin(obj.value, obj.title);
}
 else if (obj.type == 'select')               
{
select_mixin(obj.name, obj.select, obj.value, obj.title);
buf.push('      ');
}
 else if (obj.type == 'text')
{
text_mixin(obj.value, obj.title, obj.rows);
}
 else if (obj.type == 'editor')
{
buf.push('<div');
buf.push(attrs({ 'style':('position:relative;height:' + obj.height + ';width:' + obj.width), "class": ('editor_container') }, {"style":true}));
buf.push('><div id="editor" style="position:absolute;top:0;bottom:0;left:0;right:0;">');
var __val__ = obj.value        
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</div></div>');
}
 else if (obj.type == 'input_text')
{
input_text_mixin(obj.value, obj.name, obj.title);
buf.push('     ');
}
 else if (obj.type == 'html')
{
buf.push('<textarea id="html_contents" name="text" rows="20" style="width:95%" class="text">');
var __val__ = obj.value
buf.push(null == __val__ ? "" : __val__);
buf.push('</textarea>');
}
 else if (obj.type == 'jade')
{
buf.push('<textarea name="text" style="width:100%;height:260px;" class="text">');
var __val__ = obj.value
buf.push(null == __val__ ? "" : __val__);
buf.push('</textarea>');
}
 else if (obj.type == 'fulltext')
{
buf.push('<textarea name="text" style="width:100%;height:260px;" class="text">');
var __val__ = obj.value                        
buf.push(null == __val__ ? "" : __val__);
buf.push('</textarea>');
}
 else if (obj.type == 'tag')
{
tag_mixin(obj.value);
}
 else if (obj.type == 'li_text')
{
li_text_mixin(obj.name, obj.value, obj.title);
buf.push('               ');
}
 else if (obj.type == 'li_checkbox')
{
li_checkbox_mixin(obj.name, obj.value, obj.title);
}
 else if (obj.type == 'checkbox')
{
checkbox_mixin(obj.name, obj.value, obj.title);
buf.push('       ');
}
}
else
{
buf.push('<label class="control-label settings-label">');
var __val__ = obj.title
buf.push(null == __val__ ? "" : __val__);
buf.push('</label><div class="controls">');
 if (obj.type == 'title')
{
title_mixin(obj.value, obj.title);
}
 else if (obj.type == 'select')               
{
select_mixin(obj.name, obj.select, obj.value, obj.title);
buf.push('      ');
}
 else if (obj.type == 'text')
{
text_mixin(obj.value, obj.title, obj.rows);
}
 else if (obj.type == 'editor')
{
buf.push('<div');
buf.push(attrs({ 'style':('position:relative;height:' + obj.height + ';width:' + obj.width), "class": ('editor_container') }, {"style":true}));
buf.push('><div id="editor" style="position:absolute;top:0;bottom:0;left:0;right:0;">');
var __val__ = obj.value        
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</div></div>');
}
 else if (obj.type == 'input_text')
{
input_text_mixin(obj.value, obj.name, obj.title);
buf.push('     ');
}
 else if (obj.type == 'html')
{
buf.push('<textarea id="html_contents" name="text" rows="20" style="width:95%" class="text">');
var __val__ = obj.value
buf.push(null == __val__ ? "" : __val__);
buf.push('</textarea>');
}
 else if (obj.type == 'jade')
{
buf.push('<textarea name="text" style="width:100%;height:260px;" class="text">');
var __val__ = obj.value
buf.push(null == __val__ ? "" : __val__);
buf.push('</textarea>');
}
 else if (obj.type == 'fulltext')
{
buf.push('<textarea name="text" style="width:100%;height:260px;" class="text">');
var __val__ = obj.value                        
buf.push(null == __val__ ? "" : __val__);
buf.push('</textarea>');
}
 else if (obj.type == 'tag')
{
tag_mixin(obj.value);
}
 else if (obj.type == 'li_text')
{
li_text_mixin(obj.name, obj.value, obj.title);
buf.push('               ');
}
 else if (obj.type == 'li_checkbox')
{
li_checkbox_mixin(obj.name, obj.value, obj.title);
}
 else if (obj.type == 'checkbox')
{
checkbox_mixin(obj.name, obj.value, obj.title);
buf.push('       ');
}
buf.push('</div>');
}
buf.push('</div>');
    }
  } else {
    for (var $index in infoList) {
      var obj = infoList[$index];

buf.push('<div class="control-group">   ');
if ( obj.full)
{
 if (obj.type == 'title')
{
title_mixin(obj.value, obj.title);
}
 else if (obj.type == 'select')               
{
select_mixin(obj.name, obj.select, obj.value, obj.title);
buf.push('      ');
}
 else if (obj.type == 'text')
{
text_mixin(obj.value, obj.title, obj.rows);
}
 else if (obj.type == 'editor')
{
buf.push('<div');
buf.push(attrs({ 'style':('position:relative;height:' + obj.height + ';width:' + obj.width), "class": ('editor_container') }, {"style":true}));
buf.push('><div id="editor" style="position:absolute;top:0;bottom:0;left:0;right:0;">');
var __val__ = obj.value        
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</div></div>');
}
 else if (obj.type == 'input_text')
{
input_text_mixin(obj.value, obj.name, obj.title);
buf.push('     ');
}
 else if (obj.type == 'html')
{
buf.push('<textarea id="html_contents" name="text" rows="20" style="width:95%" class="text">');
var __val__ = obj.value
buf.push(null == __val__ ? "" : __val__);
buf.push('</textarea>');
}
 else if (obj.type == 'jade')
{
buf.push('<textarea name="text" style="width:100%;height:260px;" class="text">');
var __val__ = obj.value
buf.push(null == __val__ ? "" : __val__);
buf.push('</textarea>');
}
 else if (obj.type == 'fulltext')
{
buf.push('<textarea name="text" style="width:100%;height:260px;" class="text">');
var __val__ = obj.value                        
buf.push(null == __val__ ? "" : __val__);
buf.push('</textarea>');
}
 else if (obj.type == 'tag')
{
tag_mixin(obj.value);
}
 else if (obj.type == 'li_text')
{
li_text_mixin(obj.name, obj.value, obj.title);
buf.push('               ');
}
 else if (obj.type == 'li_checkbox')
{
li_checkbox_mixin(obj.name, obj.value, obj.title);
}
 else if (obj.type == 'checkbox')
{
checkbox_mixin(obj.name, obj.value, obj.title);
buf.push('       ');
}
}
else
{
buf.push('<label class="control-label settings-label">');
var __val__ = obj.title
buf.push(null == __val__ ? "" : __val__);
buf.push('</label><div class="controls">');
 if (obj.type == 'title')
{
title_mixin(obj.value, obj.title);
}
 else if (obj.type == 'select')               
{
select_mixin(obj.name, obj.select, obj.value, obj.title);
buf.push('      ');
}
 else if (obj.type == 'text')
{
text_mixin(obj.value, obj.title, obj.rows);
}
 else if (obj.type == 'editor')
{
buf.push('<div');
buf.push(attrs({ 'style':('position:relative;height:' + obj.height + ';width:' + obj.width), "class": ('editor_container') }, {"style":true}));
buf.push('><div id="editor" style="position:absolute;top:0;bottom:0;left:0;right:0;">');
var __val__ = obj.value        
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</div></div>');
}
 else if (obj.type == 'input_text')
{
input_text_mixin(obj.value, obj.name, obj.title);
buf.push('     ');
}
 else if (obj.type == 'html')
{
buf.push('<textarea id="html_contents" name="text" rows="20" style="width:95%" class="text">');
var __val__ = obj.value
buf.push(null == __val__ ? "" : __val__);
buf.push('</textarea>');
}
 else if (obj.type == 'jade')
{
buf.push('<textarea name="text" style="width:100%;height:260px;" class="text">');
var __val__ = obj.value
buf.push(null == __val__ ? "" : __val__);
buf.push('</textarea>');
}
 else if (obj.type == 'fulltext')
{
buf.push('<textarea name="text" style="width:100%;height:260px;" class="text">');
var __val__ = obj.value                        
buf.push(null == __val__ ? "" : __val__);
buf.push('</textarea>');
}
 else if (obj.type == 'tag')
{
tag_mixin(obj.value);
}
 else if (obj.type == 'li_text')
{
li_text_mixin(obj.name, obj.value, obj.title);
buf.push('               ');
}
 else if (obj.type == 'li_checkbox')
{
li_checkbox_mixin(obj.name, obj.value, obj.title);
}
 else if (obj.type == 'checkbox')
{
checkbox_mixin(obj.name, obj.value, obj.title);
buf.push('       ');
}
buf.push('</div>');
}
buf.push('</div>');
   }
  }
}).call(this);

buf.push('</fieldset></form>');
}
return buf.join("");
};
});
