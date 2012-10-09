define([], function(){
    return Backbone.Model.extend({
        urlRoot: '/toys',
        idAttribute: "_id",
        defaults : {
            isRoot: false,
            className : '',
            title: '',
            span : 12,          // 기본 넓이
            hspan: '',          // 기본 높이  
            offset: "",
            text: '',           // raw 데이타
            viewText: '',       // 변환된 문자열
            auth : {},
            tag: [],
            skin: "",
            children : []       // toies   
        }        
    })
})
