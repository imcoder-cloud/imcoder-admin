webpackJsonp([18],{Go1s:function(e,t,r){"use strict";t.a={loginRules:{userName:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]},formRules:{name:[{required:!0,message:"请输入活动名称",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}],region:[{required:!0,message:"请选择活动区域",trigger:"change"}],date1:[{type:"date",required:!0,message:"请选择日期",trigger:"change"}],date2:[{type:"date",required:!0,message:"请选择时间",trigger:"change"}],type:[{type:"array",required:!0,message:"请至少选择一个活动性质",trigger:"change"}],resource:[{required:!0,message:"请选择活动资源",trigger:"change"}],desc:[{required:!0,message:"请填写活动形式",trigger:"blur"}]}}},Uial:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=r("Go1s"),o={data:function(){return{labelPosition:"right",formObj:{name:"",region:"",date1:"",date2:"",delivery:!1,type:["美食"],resource:"",desc:"",trip:"高铁",count:10,jindu:30,level:4,texts:["极低","低","中","高","极高"],color:"#409EFF",fileList:[]},horizontalForm:{user:"",region:""},formInline:{user:"",region:"",name:"",date:""},rules:l.a.formRules}},methods:{submitForm:function(e){this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;alert("submit!")})},resetForm:function(e){this.$refs[e].resetFields()},handleRemove:function(e,t){console.log(e,t)},handlePreview:function(e){console.log(e)},handleExceed:function(e,t){this.$message.warning("当前限制选择 3 个文件，本次选择了 "+e.length+" 个文件，共选择了 "+(e.length+t.length)+" 个文件")},beforeRemove:function(e,t){return this.$confirm("确定移除 "+e.name+"？")}}},a={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-row",{attrs:{gutter:20}},[r("el-col",{staticClass:"mb20",attrs:{md:10}},[r("el-card",[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[e._v("垂直表单")]),e._v(" "),r("el-radio-group",{staticStyle:{float:"right"},model:{value:e.labelPosition,callback:function(t){e.labelPosition=t},expression:"labelPosition"}},[r("el-radio",{attrs:{label:"left"}},[e._v("左对齐")]),e._v(" "),r("el-radio",{attrs:{label:"right"}},[e._v("右对齐")]),e._v(" "),r("el-radio",{attrs:{label:"top"}},[e._v("上对齐")])],1)],1),e._v(" "),r("el-form",{ref:"formObj1",staticClass:"vertical-form",attrs:{model:e.formObj,"label-position":e.labelPosition,rules:e.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"活动名称",prop:"name"}},[r("el-input",{model:{value:e.formObj.name,callback:function(t){e.$set(e.formObj,"name",t)},expression:"formObj.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"活动区域",prop:"region"}},[r("el-select",{attrs:{filterable:"",placeholder:"请选择活动区域"},model:{value:e.formObj.region,callback:function(t){e.$set(e.formObj,"region",t)},expression:"formObj.region"}},[r("el-option",{attrs:{label:"上海",value:"shanghai"}}),e._v(" "),r("el-option",{attrs:{label:"北京",value:"beijing"}}),e._v(" "),r("el-option",{attrs:{label:"合肥",value:"hefei"}})],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"活动时间",required:""}},[r("el-row",[r("el-col",{attrs:{span:11}},[r("el-form-item",{attrs:{prop:"date1"}},[r("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.formObj.date1,callback:function(t){e.$set(e.formObj,"date1",t)},expression:"formObj.date1"}})],1)],1),e._v(" "),r("el-col",{staticClass:"line",attrs:{span:2}},[e._v("-")]),e._v(" "),r("el-col",{attrs:{span:11}},[r("el-form-item",{attrs:{prop:"date2"}},[r("el-time-picker",{staticStyle:{width:"100%"},attrs:{placeholder:"选择时间"},model:{value:e.formObj.date2,callback:function(t){e.$set(e.formObj,"date2",t)},expression:"formObj.date2"}})],1)],1)],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"即时配送",prop:"delivery"}},[r("el-switch",{model:{value:e.formObj.delivery,callback:function(t){e.$set(e.formObj,"delivery",t)},expression:"formObj.delivery"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"活动性质",prop:"type"}},[r("el-checkbox-group",{model:{value:e.formObj.type,callback:function(t){e.$set(e.formObj,"type",t)},expression:"formObj.type"}},[r("el-checkbox",{attrs:{label:"美食",name:"type"}}),e._v(" "),r("el-checkbox",{attrs:{label:"地推",name:"type"}})],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"特殊资源",prop:"resource"}},[r("el-radio-group",{model:{value:e.formObj.resource,callback:function(t){e.$set(e.formObj,"resource",t)},expression:"formObj.resource"}},[r("el-radio",{attrs:{label:"赞助"}}),e._v(" "),r("el-radio",{attrs:{label:"免费"}})],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"活动人数",prop:"count"}},[r("el-input-number",{attrs:{size:"medium"},model:{value:e.formObj.count,callback:function(t){e.$set(e.formObj,"count",t)},expression:"formObj.count"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"活动形式",prop:"desc"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.formObj.desc,callback:function(t){e.$set(e.formObj,"desc",t)},expression:"formObj.desc"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("formObj1")}}},[e._v("立即创建")]),e._v(" "),r("el-button",{on:{click:function(t){return e.resetForm("formObj1")}}},[e._v("重置")])],1)],1)],1)],1),e._v(" "),r("el-col",{staticClass:"mb20",attrs:{md:14}},[r("el-card",[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[e._v("一行多列表单")])]),e._v(" "),r("el-form",{ref:"formObj2",staticClass:"vertical-form",attrs:{model:e.formObj,rules:e.rules,"label-width":"100px"}},[r("el-row",[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"活动名称",prop:"name"}},[r("el-input",{model:{value:e.formObj.name,callback:function(t){e.$set(e.formObj,"name",t)},expression:"formObj.name"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"活动区域",prop:"region"}},[r("el-select",{attrs:{filterable:"",placeholder:"请选择活动区域"},model:{value:e.formObj.region,callback:function(t){e.$set(e.formObj,"region",t)},expression:"formObj.region"}},[r("el-option",{attrs:{label:"上海",value:"shanghai"}}),e._v(" "),r("el-option",{attrs:{label:"北京",value:"beijing"}}),e._v(" "),r("el-option",{attrs:{label:"合肥",value:"hefei"}})],1)],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{prop:"date1",label:"活动时间",required:""}},[r("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.formObj.date1,callback:function(t){e.$set(e.formObj,"date1",t)},expression:"formObj.date1"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"即时配送",prop:"delivery"}},[r("el-switch",{model:{value:e.formObj.delivery,callback:function(t){e.$set(e.formObj,"delivery",t)},expression:"formObj.delivery"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"活动性质",prop:"type"}},[r("el-checkbox-group",{model:{value:e.formObj.type,callback:function(t){e.$set(e.formObj,"type",t)},expression:"formObj.type"}},[r("el-checkbox",{attrs:{label:"美食",name:"type"}}),e._v(" "),r("el-checkbox",{attrs:{label:"地推",name:"type"}})],1)],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"特殊资源",prop:"resource"}},[r("el-radio-group",{model:{value:e.formObj.resource,callback:function(t){e.$set(e.formObj,"resource",t)},expression:"formObj.resource"}},[r("el-radio",{attrs:{label:"赞助"}}),e._v(" "),r("el-radio",{attrs:{label:"免费"}})],1)],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"行程方式",prop:"trip"}},[r("el-radio-group",{model:{value:e.formObj.trip,callback:function(t){e.$set(e.formObj,"trip",t)},expression:"formObj.trip"}},[r("el-radio",{attrs:{label:"飞机"}}),e._v(" "),r("el-radio",{attrs:{label:"高铁"}})],1)],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"活动人数",prop:"count"}},[r("el-input-number",{attrs:{size:"medium"},model:{value:e.formObj.count,callback:function(t){e.$set(e.formObj,"count",t)},expression:"formObj.count"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"计划进度",prop:"jindu"}},[r("el-slider",{model:{value:e.formObj.jindu,callback:function(t){e.$set(e.formObj,"jindu",t)},expression:"formObj.jindu"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"活动等级",prop:"level"}},[r("el-rate",{staticStyle:{"margin-top":"10px"},attrs:{"show-text":"",texts:e.formObj.texts},model:{value:e.formObj.level,callback:function(t){e.$set(e.formObj,"level",t)},expression:"formObj.level"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"图片上传"}},[r("el-upload",{attrs:{action:"https://jsonplaceholder.typicode.com/posts/","on-preview":e.handlePreview,"on-remove":e.handleRemove,"before-remove":e.beforeRemove,multiple:"",limit:1,"on-exceed":e.handleExceed,"file-list":e.formObj.fileList}},[r("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")])],1)],1)],1),e._v(" "),r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"活动形式",prop:"desc"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.formObj.desc,callback:function(t){e.$set(e.formObj,"desc",t)},expression:"formObj.desc"}})],1)],1),e._v(" "),r("el-col",[r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("formObj2")}}},[e._v("立即创建")]),e._v(" "),r("el-button",{on:{click:function(t){return e.resetForm("formObj2")}}},[e._v("重置")])],1)],1)],1)],1)],1)],1)],1),e._v(" "),r("el-row",[r("el-col",[r("el-card",[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[e._v("行内表单")]),e._v(" "),r("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"}},[e._v("操作按钮")])],1),e._v(" "),r("el-form",{attrs:{inline:!0,model:e.formInline,"label-width":"100px;"}},[r("el-form-item",{attrs:{label:"审批人"}},[r("el-input",{attrs:{placeholder:"审批人"},model:{value:e.formInline.user,callback:function(t){e.$set(e.formInline,"user",t)},expression:"formInline.user"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"活动区域"}},[r("el-select",{attrs:{placeholder:"活动区域"},model:{value:e.formInline.region,callback:function(t){e.$set(e.formInline,"region",t)},expression:"formInline.region"}},[r("el-option",{attrs:{label:"区域一",value:"shanghai"}}),e._v(" "),r("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"活动名称"}},[r("el-input",{attrs:{placeholder:"审批人"},model:{value:e.formInline.name,callback:function(t){e.$set(e.formInline,"name",t)},expression:"formInline.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"活动时间"}},[r("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.formInline.date,callback:function(t){e.$set(e.formInline,"date",t)},expression:"formInline.date"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"}},[e._v("查询")])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var s=r("VU/8")(o,a,!1,function(e){r("tfrW")},"data-v-2b52d5ea",null);t.default=s.exports},tfrW:function(e,t){}});