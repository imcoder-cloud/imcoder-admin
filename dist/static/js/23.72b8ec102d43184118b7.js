webpackJsonp([23],{H0Nb:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("Dd8w"),l=n.n(s),a=n("NYxO"),o=n("SQ6o"),r={data:function(){return{items:[],show:!1,langs:[{value:"zh-CN",label:"简体中文"},{value:"en",label:"English"}],lang:"",fullscreen:!1}},watch:{$route:function(){this.getBreadcrumb()}},created:function(){this.lang=localStorage.getItem("lang")||"zh-CN"},mounted:function(){this.getBreadcrumb()},computed:l()({},Object(a.b)(["settings"]),{showBreadCrumb:function(){return this.settings.showBreadCrumb},collapseMenu:function(){return this.settings.collapseMenu}}),methods:{getBreadcrumb:function(){this.show=!1;var e=this.$route.matched.filter(function(e){if(e.name)return!0}),t=e[0];t&&"Home"===t.name&&(e.splice(0,1),t=e[0]),t&&"首页"!==t.name&&(e=[{path:"/",name:"首页",fixed:!0,meta:{fixed:!0}}].concat(e)),e.length>=4&&e.splice(1,1),this.items=e,this.show=!0},toggleMenu:function(){this.$store.dispatch("updateSettings",{key:"collapseMenu",type:"toggle"})},switchLang:function(e){localStorage.setItem("lang",e),this.$store.dispatch("updateSettings",{key:"lang",value:e}),this.$i18n.locale=e},handleFullScreen:function(){var e=document.documentElement;this.fullscreen?document.exitFullscreen?document.exitFullscreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen():e.requestFullscreen?e.requestFullscreen():e.webkitRequestFullScreen?e.webkitRequestFullScreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.msRequestFullscreen&&e.msRequestFullscreen(),this.fullscreen=!this.fullscreen},openSettings:function(){this.$store.dispatch("updateSettings",{key:"openSetting",value:!0})},logout:function(){var e=this;this.$confirm("确定要注销登录么?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){o.a.delToken(),e.$router.push("/login")})},handleCommand:function(e){switch(e){case"settings":this.openSettings();break;case"logout":this.logout()}}}},i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nav-bar"},[n("div",{staticClass:"nav-bar-left"},[n("button",{staticClass:"toggle-btn",on:{click:e.toggleMenu}},[n("i",{class:e.collapseMenu?"el-icon-s-unfold":"el-icon-s-fold"})]),e._v(" "),n("transition",{attrs:{name:"el-fade-in-linear"}},[e.showBreadCrumb?n("el-breadcrumb",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],attrs:{separator:"/"}},e._l(e.items,function(t,s){return n("el-breadcrumb-item",{key:t.name},[0==s&&1!=e.items.length?n("a",{attrs:{href:t.path}},[e._v(e._s(t.name))]):n("span",[e._v(e._s(t.name))])])}),1):e._e()],1)],1),e._v(" "),n("div",{staticClass:"nav-bar-right"},[n("el-select",{attrs:{size:"small"},on:{change:e.switchLang},model:{value:e.lang,callback:function(t){e.lang=t},expression:"lang"}},e._l(e.langs,function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1),e._v(" "),n("ul",[n("li",[n("el-popover",{attrs:{title:e.$t("message.navBar.MESSAGE_TEXT"),width:"200",trigger:"hover",content:"下班记得打卡，下班记得打卡，下班记得打卡，重要的事情说三遍。不然会扣工资！！！"}},[n("el-badge",{attrs:{slot:"reference",value:5},slot:"reference"},[n("i",{staticClass:"el-icon-message-solid"})])],1)],1),e._v(" "),n("li",[n("el-popover",{attrs:{title:e.$t("message.navBar.NOTE_TEXT"),width:"200",trigger:"hover",content:"下班记得打卡，下班记得打卡，下班记得打卡，重要的事情说三遍。不然会扣工资！！！"}},[n("i",{staticClass:"el-icon-s-order",attrs:{slot:"reference"},slot:"reference"})])],1),e._v(" "),n("li",[n("el-popover",{attrs:{title:e.$t("message.navBar.SHARE_TEXT"),width:"330",trigger:"hover"}},[n("div",[e._v("\n            Github 地址:\n            "),n("br"),e._v(" "),n("el-link",{attrs:{type:"primary",underline:!1,href:"https://github.com/dongdong-cloud/dd-admin",target:"_blank"}},[e._v("https://github.com/dongdong-cloud/dd-admin")])],1),e._v(" "),n("br"),e._v(" "),n("div",[e._v("\n            码云地址:\n            "),n("br"),e._v(" "),n("el-link",{attrs:{type:"primary",underline:!1,href:"https://gitee.com/dongdong-cloud/dd-admin",target:"_blank"}},[e._v("https://gitee.com/dongdong-cloud/dd-admin")])],1),e._v(" "),n("i",{staticClass:"el-icon-share",attrs:{slot:"reference"},slot:"reference"})])],1),e._v(" "),n("li",{on:{click:e.handleFullScreen}},[n("el-tooltip",{attrs:{effect:"dark",content:e.fullscreen?e.$t("message.navBar.CANCEL_FULL_SCREEN_TEXT"):e.$t("message.navBar.FULL_SCREEN_TEXT"),placement:"bottom"}},[n("i",{staticClass:"dd full-screen",class:e.fullscreen?"cancel-full-screen":"full-screen"})])],1),e._v(" "),n("li",{on:{click:e.openSettings}},[n("el-tooltip",{attrs:{effect:"dark",content:e.$t("message.navBar.SETTINGS_TEXT"),placement:"bottom"}},[n("i",{staticClass:"el-icon-s-tools"})])],1)]),e._v(" "),n("div",{staticStyle:{display:"flex","align-items":"center"}},[n("div",{staticClass:"avatar"},[n("el-avatar",{attrs:{size:"small",src:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"}})],1),e._v(" "),n("el-dropdown",{on:{command:e.handleCommand}},[n("span",{staticClass:"dropdown-menu"},[e._v("\n          admin\n          "),n("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{attrs:{icon:"el-icon-user-solid"}},[e._v(e._s(e.$t("message.navBar.BASIC_INFO_TEXT")))]),e._v(" "),n("el-dropdown-item",{attrs:{icon:"el-icon-info"}},[e._v(e._s(e.$t("message.navBar.ABOUT_TEXT")))]),e._v(" "),n("el-dropdown-item",{attrs:{command:"settings",icon:"el-icon-s-tools"}},[e._v(e._s(e.$t("message.navBar.SETTINGS_TEXT")))]),e._v(" "),n("el-dropdown-item",{attrs:{divided:"",command:"logout",icon:"el-icon-error"}},[e._v(e._s(e.$t("message.navBar.LOGOUT_TEXT")))])],1)],1)],1)],1)])},staticRenderFns:[]};var c=n("VU/8")(r,i,!1,function(e){n("Ulqg")},"data-v-3db7b738",null);t.default=c.exports},Ulqg:function(e,t){}});