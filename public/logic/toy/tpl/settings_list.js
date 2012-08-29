define(['jadeRuntime'], function(jade) {
return function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<span style="overflow:auto;height:350px;" class="span4 data_list"></span><span style="display:inline;width:550px;" class="span4"><ul class="nav nav-tabs"><li class="active"><a href="#settings_list_base" data-toggle="tab">Base</a></li><li><a href="#settings_list_ext" data-toggle="tab">Extend    </a></li><li><a href="#settings_list_form" data-toggle="tab">Form</a></li><li><a class="btn btn-success add_data"> \nAdd &nbsp;<i class="icon-plus icon-white">     </i></a></li><li><a class="btn btn-info modify_data">Modify &nbsp;<i class="icon-edit icon-white"></i></a></li></ul><div class="tab-content"><div id="settings_list_ext" style="height:400px;" class="tab-pane"><form><fieldset><div class="input-append"><select data-name="buttonSize" data-placeholder="Button Size" style="width:300px;" class="data"><option value=""></option><option value="large">large</option><option value="small">small</option><option value="mini">mini</option></select></div><div class="input-append"><select data-name="buttonType" data-placeholder="Button Type" style="width:300px;" class="data"><option value=""></option><option value="primary">primary</option><option value="danger">danger</option><option value="warning">warning              </option><option value="success">success              </option><option value="info">info              </option><option value="inverse">inverse</option></select></div><div class="input-append"><select data-name="activeType" data-placeholder="Active Type" style="width:300px;" class="data"><option value=""></option><option value="active">active</option><option value="nav-header">nav-header</option><option value="divider">divider          </option><option value="disabled">disabled          </option><option value="previous">previous          </option><option value="next">next          </option></select></div><div class="input-append"><select data-name="groupType" data-placeholder="Group Type" style="width:300px;" class="data"><option value=""></option><option value="vertical">vertical</option></select></div><div class="input-append"><select data-name="buttonBlock" data-placeholder="Button Block" style="width:300px;" class="data"><option value=""></option><option value="block">block              </option></select></div></fieldset></form></div><div id="settings_list_form" style="height:400px;" class="tab-pane"><form><fieldset> <div class="input-append">                        <select data-name="state" data-placeholder="State" style="width:140px;" class="data"><option value="">          </option><option value="uneditable">uneditable           </option><option value="disabled">disabled</option></select>&nbsp;                         <select data-name="groupState" data-placeholder="Group" style="width:140px;" class="data"><option value="">          </option><option value="warning">warning           </option><option value="success">success              </option><option value="error">error</option></select></div><div class="input-append"><select data-name="span" data-placeholder="Span" style="width:140px;" class="data"><option value="">          </option><option value="span1">span1           </option><option value="span2">span2           </option><option value="span3">span3           </option><option value="span4">span4           </option><option value="span5">span5           </option><option value="span6">span6           </option><option value="span7">span7           </option><option value="span8">span8           </option><option value="span9">span9           </option><option value="span10">span10           </option><option value="span11">span11           </option><option value="span12">span12           </option></select>&nbsp;                    <select data-name="size" data-placeholder="Size" style="width:140px;" class="data"><option value="">          </option><option value="input-xlarge">input-xlarge</option><option value="input-xxlarge">input-xxlarge</option><option value="input-large">input-large</option><option value="input-medium">input-medium</option><option value="input-small">input-small</option><option value="input-mini">input-mini</option></select></div><div class="input-append">                     <input type="text" data-name="name" placeholder="Name" style="width:300px" class="data"/></div><div class="input-append"><select data-name="helperType" data-placeholder="Helper" style="width:84px;" class="data"><option value=""></option><option value="inline">inline            </option><option value="block">block</option></select>&nbsp;<input type="text" data-name="helper" placeholder="Input Helper Text" style="width:202px" class="data"/></div><div class="input-append">                     <input type="text" data-name="placeholder" placeholder="Place Holder" style="width:300px" class="data"/></div><div class="input-append">                     <textarea rows="3" data-name="value" placeholder="Input Value" style="width:300px" class="data"></textarea></div></fieldset></form></div><div id="settings_list_base" style="height:400px;" class="tab-pane active"><form><fieldset><div class="input-append"><select data-name="depth" data-placeholder="Depth" style="width:84px;" class="span2 data"><option value="">         </option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5      </option></select>&nbsp;<select data-name="icon" data-placeholder="Icon" style="width:166px;" class="data"><option value="">       </option>');
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

buf.push('</select><span class="add-on ic-view-point"></span></div><div class="input-append"><select data-name="type" data-placeholder="Control Type" style="width:300px;" class="data"><option value=""></option><option value="text">text           </option><option value="select">select           </option><option value="checkbox">checkbox           </option><option value="radio">radio           </option><option value="textarea">textarea           </option><option value="file">file            </option></select></div><div class="input-append">                     <input type="text" data-name="title" placeholder="Insert Title" style="width:300px" class="data"/></div><div class="input-append">                     <input type="text" data-name="link" placeholder="Insert Link" style="width:300px" class="data"/></div><div class="input-append">                     <input type="text" data-name="image" placeholder="Insert Image" style="width:300px" class="data"/></div><div class="input-append">                     <textarea rows="3" data-name="content" placeholder="Input Content" style="width:300px" class="data"></textarea></div></fieldset></form></div></div><div class="data_target"></div></span>');
}
return buf.join("");
};
});
