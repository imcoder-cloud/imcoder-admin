webpackJsonp([11],{APzx:function(t,o){},GYXo:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n={props:["floorItems","height"],data:function(){return{}},created:function(){},mounted:function(){this.init()},methods:{init:function(){var t=this,o=document.getElementById("main"),e=(document.getElementById("floor"),o.getElementsByClassName("floor-item")),n=document.getElementById("floorUl").getElementsByTagName("li");n[0].className="active",this.$refs.floorScroll.wrap.onscroll=function(){for(var o=t.$refs.floorScroll.wrap,l=o.scrollTop,r=(o.clientHeight,0),s=0;s<e.length;s++)l>=e[s].offsetTop&&(r=s),n[s].className="";n[r].className="active";for(s=0;s<n.length;s++)n[s].onclick=function(){for(var l=0;l<n.length;l++)if(this==n[l]){var r=e[l].offsetTop;o.scrollTop<r?t.scrollDown(o,r):o.scrollTop>r&&t.scrollUp(o,r)}}}},scrollDown:function(t,o){var e=this;t.scrollTop<o&&setTimeout(function(){var n=50;o-t.scrollTop<n&&(n=o-t.scrollTop),t.scrollTop=t.scrollTop+n,e.scrollDown(t,o)},1)},scrollUp:function(t,o){var e=this;t.scrollTop>o&&setTimeout(function(){var n=50;t.scrollTop-o<n&&(n=t.scrollTop-o),t.scrollTop=t.scrollTop-n,e.scrollUp(t,o)},1)}}},l={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("el-scrollbar",{ref:"floorScroll",staticClass:"full-height"},[e("div",{staticClass:"floor-main",style:{height:t.height?t.height:"600px;"},attrs:{id:"main"}},[t._t("default"),t._v(" "),e("div",{staticClass:"floor-name",attrs:{id:"floor"}},[e("ul",{attrs:{id:"floorUl"}},t._l(t.floorItems,function(o){return e("li",{key:o.name},[t._v(t._s(o.name))])}),0)])],2)])],1)},staticRenderFns:[]};var r={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"floor-item"},[this._t("default")],2)},staticRenderFns:[]};var s={components:{Floor:e("VU/8")(n,l,!1,function(t){e("dBe/")},"data-v-7237f4f6",null).exports,FloorItem:e("VU/8")({},r,!1,function(t){e("Pacp")},null,null).exports},data:function(){return{items:[{name:"区域 1",background:"#409EFF"},{name:"区域 2",background:"#67C23A"},{name:"区域 3",background:"#E6A23C"},{name:"区域 4",background:"#F56C6C"},{name:"区域 5",background:"#f56cf1"},{name:"区域 6",background:"#81c23a"},{name:"区域 7",background:"#e6833c"}]}},created:function(){},mounted:function(){this.init()},methods:{init:function(){}}},c={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("div",{staticClass:"floor-demo"},[e("h3",[t._v("楼层演示")]),t._v(" "),e("floor",{attrs:{"floor-items":t.items,height:"500px"}},t._l(t.items,function(o){return e("floor-item",{key:o.name},[e("div",{staticClass:"item-demo",style:{background:o.background}},[t._v(t._s(o.name))])])}),1)],1)])},staticRenderFns:[]};var a=e("VU/8")(s,c,!1,function(t){e("APzx")},"data-v-72048cfb",null);o.default=a.exports},Pacp:function(t,o){},"dBe/":function(t,o){}});