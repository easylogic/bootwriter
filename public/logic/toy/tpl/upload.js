define(['jadeRuntime'], function(jade) {
return function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<form name="upload" action="/uploads" method="post" enctype="multipart/form-data" target="image_upload"><fieldset style="padding-left:20px"><input type="file" name="image" class="file"/><button type="submit" class="btn btn-warning upload">Upload</button><iframe name="image_upload" height="50px" frameborder="0" class="span7"></iframe></fieldset></form>');
}
return buf.join("");
};
});
