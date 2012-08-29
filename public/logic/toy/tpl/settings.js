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
buf.push('<div class="modal-header"><h3 class="modal-header-title">');
var __val__ = App.list[type].name
buf.push(null == __val__ ? "" : __val__);
buf.push('</h3><ul class="nav nav-pills modal-header-menu pull-right">');
 var i = 1;
buf.push('<li class="active"><a');
buf.push(attrs({ 'href':('#data'), 'data-toggle':('tab'), 'rel':('tooltip'), 'title':('Alt + ' + (i++)) }, {"href":true,"data-toggle":true,"rel":true,"title":true}));
buf.push('>Data</a></li>');
if ( isThemes)
{
buf.push('<li><a');
buf.push(attrs({ 'href':('#themes'), 'data-toggle':('tab'), 'rel':('tooltip'), 'title':('Alt + ' + (i++)) }, {"href":true,"data-toggle":true,"rel":true,"title":true}));
buf.push('>Themes</a></li>');
}
buf.push('<li><a');
buf.push(attrs({ 'href':('#skin'), 'data-toggle':('tab'), 'rel':('tooltip'), 'title':('Alt + ' + (i++)) }, {"href":true,"data-toggle":true,"rel":true,"title":true}));
buf.push('>Skin</a></li>');
if ( isList  )
{
buf.push('<li><a');
buf.push(attrs({ 'href':('#list'), 'data-toggle':('tab'), 'rel':('tooltip'), 'title':('Alt + ' + (i++)) }, {"href":true,"data-toggle":true,"rel":true,"title":true}));
buf.push('> \nList &nbsp;<span class="badge badge-info">');
var __val__ = list.length  
buf.push(null == __val__ ? "" : __val__);
buf.push('</span></a></li>');
}
if ( isUpload  )
{
buf.push('<li><a');
buf.push(attrs({ 'href':('#upload'), 'data-toggle':('tab'), 'rel':('tooltip'), 'title':('Alt + ' + (i++)) }, {"href":true,"data-toggle":true,"rel":true,"title":true}));
buf.push('> \nUpload &nbsp;</a></li>');
}
buf.push('</ul><form style="display:inline;margin-left:10px;margin-right:10px;margin-top:4px;" class="form-inline"><select data-placeholder="Span" style="width:70px;" class="span1 spanarea"><option value=""></option>');
// iterate span_list
;(function(){
  if ('number' == typeof span_list.length) {
    for (var $index = 0, $$l = span_list.length; $index < $$l; $index++) {
      var list_value = span_list[$index];

 if (list_value == span)
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
    for (var $index in span_list) {
      var list_value = span_list[$index];

 if (list_value == span)
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

buf.push('</select>&nbsp;              <select data-placeholder="Offset" style="width:70px;" class="span1 offsetarea"><option value=""></option>');
// iterate span_list
;(function(){
  if ('number' == typeof span_list.length) {
    for (var $index = 0, $$l = span_list.length; $index < $$l; $index++) {
      var list_value = span_list[$index];

 if (list_value == offset)
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
    for (var $index in span_list) {
      var list_value = span_list[$index];

 if (list_value == offset)
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

buf.push('</select>&nbsp;            <select data-placeholder="Height" style="width:70px;" class="span1 hspanarea"><option value=""></option>');
// iterate span_list
;(function(){
  if ('number' == typeof span_list.length) {
    for (var $index = 0, $$l = span_list.length; $index < $$l; $index++) {
      var list_value = span_list[$index];

 if (list_value == hspan)
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
    for (var $index in span_list) {
      var list_value = span_list[$index];

 if (list_value == hspan)
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

buf.push('</select></form></div><div class="modal-body"><div class="tab-content">');
if ( isList)
{
if ( isTable)
{
buf.push('<div id="list" class="tab-pane fade"><a style="width:70px" class="btn btn-success add_row">row+</a>&nbsp;<a style="width:70px" class="btn btn-info add_column">col+    </a><table><tr class="column"><td class="ui-state-disabled"><a style="width:70px;background:white;margin:0px;" class="btn init_row ui-state-disabled">&nbsp;</a></td></tr></table><table><tbody class="list"></tbody></table></div>');
}
else
{
buf.push('<div id="list" class="tab-pane fade"><span style="overflow:auto;height:350px;" class="span4 data_list"></span><span style="display:inline;width:550px;" class="span4"><ul class="nav nav-tabs"><li class="active"><a href="#settings_list_base" data-toggle="tab">Base</a></li><li><a href="#settings_list_ext" data-toggle="tab">Extend    </a></li><li><a href="#settings_list_form" data-toggle="tab">Form</a></li><li><a class="btn btn-success add_data"> \nAdd &nbsp;<i class="icon-plus icon-white">     </i></a></li><li><a class="btn btn-info modify_data">Modify &nbsp;<i class="icon-edit icon-white"></i></a></li></ul><div class="tab-content"><div id="settings_list_ext" style="height:400px;" class="tab-pane"><form><fieldset><div class="input-append"><select data-name="buttonSize" data-placeholder="Button Size" style="width:300px;" class="data"><option value=""></option><option value="large">large</option><option value="small">small</option><option value="mini">mini</option></select></div><div class="input-append"><select data-name="buttonType" data-placeholder="Button Type" style="width:300px;" class="data"><option value=""></option><option value="primary">primary</option><option value="danger">danger</option><option value="warning">warning              </option><option value="success">success              </option><option value="info">info              </option><option value="inverse">inverse</option></select></div><div class="input-append"><select data-name="activeType" data-placeholder="Active Type" style="width:300px;" class="data"><option value=""></option><option value="active">active</option><option value="nav-header">nav-header</option><option value="divider">divider          </option><option value="disabled">disabled          </option><option value="previous">previous          </option><option value="next">next          </option></select></div><div class="input-append"><select data-name="groupType" data-placeholder="Group Type" style="width:300px;" class="data"><option value=""></option><option value="vertical">vertical</option></select></div><div class="input-append"><select data-name="buttonBlock" data-placeholder="Button Block" style="width:300px;" class="data"><option value=""></option><option value="block">block              </option></select></div></fieldset></form></div><div id="settings_list_form" style="height:400px;" class="tab-pane"><form><fieldset> <div class="input-append">                        <select data-name="state" data-placeholder="State" style="width:140px;" class="data"><option value="">          </option><option value="uneditable">uneditable           </option><option value="disabled">disabled</option></select>&nbsp;                         <select data-name="groupState" data-placeholder="Group" style="width:140px;" class="data"><option value="">          </option><option value="warning">warning           </option><option value="success">success              </option><option value="error">error</option></select></div><div class="input-append"><select data-name="span" data-placeholder="Span" style="width:140px;" class="data"><option value="">          </option><option value="span1">span1           </option><option value="span2">span2           </option><option value="span3">span3           </option><option value="span4">span4           </option><option value="span5">span5           </option><option value="span6">span6           </option><option value="span7">span7           </option><option value="span8">span8           </option><option value="span9">span9           </option><option value="span10">span10           </option><option value="span11">span11           </option><option value="span12">span12           </option></select>&nbsp;                    <select data-name="size" data-placeholder="Size" style="width:140px;" class="data"><option value="">          </option><option value="input-xlarge">input-xlarge</option><option value="input-xxlarge">input-xxlarge</option><option value="input-large">input-large</option><option value="input-medium">input-medium</option><option value="input-small">input-small</option><option value="input-mini">input-mini</option></select></div><div class="input-append">                     <input type="text" data-name="name" placeholder="Name" style="width:300px" class="data"/></div><div class="input-append"><select data-name="helperType" data-placeholder="Helper" style="width:84px;" class="data"><option value=""></option><option value="inline">inline            </option><option value="block">block</option></select>&nbsp;<input type="text" data-name="helper" placeholder="Input Helper Text" style="width:202px" class="data"/></div><div class="input-append">                     <input type="text" data-name="placeholder" placeholder="Place Holder" style="width:300px" class="data"/></div><div class="input-append">                     <textarea rows="3" data-name="value" placeholder="Input Value" style="width:300px" class="data"></textarea></div></fieldset></form></div><div id="settings_list_base" style="height:400px;" class="tab-pane active"><form><fieldset><div class="input-append"><select data-name="depth" data-placeholder="Depth" style="width:84px;" class="span2 data"><option value="">         </option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5      </option></select>&nbsp;<select data-name="icon" data-placeholder="Icon" style="width:166px;" class="data"><option value="">       </option>');
// iterate App.icon_list
;(function(){
  if ('number' == typeof App.icon_list.length) {
    for (var $index = 0, $$l = App.icon_list.length; $index < $$l; $index++) {
      var ic = App.icon_list[$index];

buf.push('<option');
buf.push(attrs({ 'value':(ic) }, {"value":true}));
buf.push('>');
var __val__ = ic
buf.push(null == __val__ ? "" : __val__);
buf.push('</option>');
    }
  } else {
    for (var $index in App.icon_list) {
      var ic = App.icon_list[$index];

buf.push('<option');
buf.push(attrs({ 'value':(ic) }, {"value":true}));
buf.push('>');
var __val__ = ic
buf.push(null == __val__ ? "" : __val__);
buf.push('</option>');
   }
  }
}).call(this);

buf.push('</select><span class="add-on ic-view-point"></span></div><div class="input-append"><select data-name="type" data-placeholder="Control Type" style="width:300px;" class="data"><option value=""></option><option value="text">text           </option><option value="select">select           </option><option value="checkbox">checkbox           </option><option value="radio">radio           </option><option value="textarea">textarea           </option><option value="file">file            </option></select></div><div class="input-append">                     <input type="text" data-name="title" placeholder="Insert Title" style="width:300px" class="data"/></div><div class="input-append">                     <input type="text" data-name="link" placeholder="Insert Link" style="width:300px" class="data"/></div><div class="input-append">                     <input type="text" data-name="image" placeholder="Insert Image" style="width:300px" class="data"/></div><div class="input-append">                     <textarea rows="3" data-name="content" placeholder="Input Content" style="width:300px" class="data"></textarea></div></fieldset></form></div></div><div class="data_target"></div></span></div>');
}
}
if ( isUpload)
{
buf.push('<div id="upload" class="tab-pane fade"><form name="upload" action="/uploads" method="post" enctype="multipart/form-data" target="image_upload"><fieldset style="padding-left:20px"><input type="file" name="image" class="file"/><button type="submit" class="btn btn-warning upload">Upload</button><iframe name="image_upload" height="50px" frameborder="0" class="span7"></iframe></fieldset></form></div>');
}
if ( isThemes)
{
buf.push('<div id="themes" class="tab-pane fade"><ul style="width:700px;margin-left:20px;" class="thumbnails">');
 for(var i = 1; i <= 20; i++ )
{
buf.push('<li style="width:105px;" class="span2"><a');
buf.push(attrs({ 'href':('#'), 'data-themes':(i), "class": ('thumbnail') + ' ' + ('themes-image') }, {"href":true,"data-themes":true}));
buf.push('><img');
buf.push(attrs({ 'src':("https://twitter.com/images/themes/theme"+i+"/swatch.gif") }, {"src":true}));
buf.push('/></a></li>');
}
buf.push('</ul></div>');
}
buf.push('<div id="skin" class="tab-pane fade"><form class="form-horizontal"><fieldset style="padding-left: 20px;"><div class="control-group"><label class="control-label settings-label">Themes</label><div class="controls"> <select data-placeholder="Select Themes" class="themes"><option value=""></option>');
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
buf.push('</div></div></div></fieldset></form></div><div id="data" class="tab-pane fade in active"><form onSubmit="return false;" class="form-horizontal"><fieldset style="padding-left: 20px;">');
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

buf.push('</fieldset></form></div></div></div><div class="modal-footer">');
if ( !isRoot)
{
buf.push('<a class="btn btn-danger remove pull-left"><i class="icon-trash icon-white"></i>&nbsp;Delete</a>');
}
buf.push('<a title="Alt + s" class="btn btn-primary save"><i class="icon-share icon-white">  </i>&nbsp;<u>S</u>ave</a><a data-dismiss="modal" class="btn btn-inverse bClose"><i class="icon-stop icon-white">  </i>&nbsp;Close</a></div>');
}
return buf.join("");
};
});
