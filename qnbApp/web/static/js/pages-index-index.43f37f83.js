(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0015":function(t,e,n){t.exports=n.p+"static/images/xiaxue.png"},"10eb":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},n("d9e2"),n("d401")},"31df":function(t,e,n){"use strict";n("7a82");var a=n("ee27").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("d0ff"));n("e9c4"),n("99af");var r={data:function(){return{title:"Hello",navIndex:0,navArr:[],newsArr:[],currentPage:1,loading:0}},onLoad:function(){this.getNavData(),this.getNewsData()},onReachBottom:function(){2!=this.loading&&(this.currentPage++,this.loading=1,this.getNewsData())},methods:{clickNav:function(t,e){this.navIndex=t,this.currentPage=1,this.newsArr=[],this.loading=0,this.getNewsData(e)},goDetail:function(t){var e=JSON.stringify(t);uni.navigateTo({url:"/pages/detail/detail?cid=".concat(t.classid,"&id=").concat(t.id,"&item=").concat(e)})},getNavData:function(){var t=this;uni.request({url:"https://ku.qingnian8.com/dataApi/news/navlist.php",success:function(e){t.navArr=e.data}})},getNewsData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:50;uni.request({url:"https://ku.qingnian8.com/dataApi/news/newslist.php",data:{cid:e,page:this.currentPage},success:function(e){0==e.data.length&&(t.loading=2),t.newsArr=[].concat((0,i.default)(t.newsArr),(0,i.default)(e.data))}})}}};e.default=r},4053:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){if(Array.isArray(t))return(0,a.default)(t)};var a=function(t){return t&&t.__esModule?t:{default:t}}(n("b680"))},"4ac4":function(t,e,n){"use strict";n.r(e);var a=n("f73f"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},5171:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var a={newsbox:n("f2e4").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"home"},[a("v-uni-scroll-view",{staticClass:"navscroll",attrs:{"scroll-x":"true"}},t._l(t.navArr,(function(e,n){return a("v-uni-view",{key:e.id,staticClass:"item",class:n==t.navIndex?"active":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.clickNav(n,e.id)}}},[t._v(t._s(e.classname))])})),1),a("v-uni-view",{staticClass:"content"},t._l(t.newsArr,(function(e){return a("div",{key:e.id,staticClass:"row"},[a("newsbox",{attrs:{item:e},nativeOn:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goDetail(e)}}})],1)})),0),t.newsArr.length?t._e():a("v-uni-view",{staticClass:"nodata"},[a("v-uni-image",{attrs:{src:n("0015"),mode:"widthFix"}})],1),t.newsArr.length?a("v-uni-view",{staticClass:"loading"},[a("v-uni-view",{}),1==t.loading?a("v-uni-view",{},[t._v("数据加载中....")]):t._e(),2==t.loading?a("v-uni-view",{},[t._v("没有更多了")]):t._e()],1):t._e()],1)},r=[]},"5cde":function(t,e,n){"use strict";var a=n("7d30"),i=n.n(a);i.a},"72cf":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.navscroll[data-v-3cafc05d]{height:%?100?%;background-color:#f7f8fa;white-space:nowrap;position:fixed;top:var(--window-top);z-index:10}.navscroll[data-v-3cafc05d] ::-webkit-scrollbar{width:4px!important;height:1px!important;overflow:auto!important;background:transparent!important;-webkit-appearance:auto!important;display:block}.navscroll .item[data-v-3cafc05d]{font-size:%?40?%;display:inline-block;line-height:%?100?%;padding:0 %?30?%;color:#333}.navscroll .item.active[data-v-3cafc05d]{color:"red"}.content[data-v-3cafc05d]{padding:%?30?%;padding-top:%?130?%}.content .row[data-v-3cafc05d]{border-bottom:1px dotted #efefef;padding:%?20?% 0}.nodata[data-v-3cafc05d]{display:flex;justify-content:center}.nodata uni-image[data-v-3cafc05d]{width:%?360?%}.loading[data-v-3cafc05d]{text-align:center;font-size:%?26?%;color:#888;line-height:2em}',""]),t.exports=e},"75b8":function(t,e,n){"use strict";var a=n("7b76"),i=n.n(a);i.a},"7b76":function(t,e,n){var a=n("72cf");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("530103f7",a,!0,{sourceMap:!1,shadowMode:!1})},"7d30":function(t,e,n){var a=n("8274");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("92a3c7c2",a,!0,{sourceMap:!1,shadowMode:!1})},8274:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.newsbox[data-v-41dc564b]{display:flex}.newsbox .pic[data-v-41dc564b]{width:%?230?%;height:%?160?%}.newsbox .pic uni-image[data-v-41dc564b]{width:100%;height:100%}.newsbox .text[data-v-41dc564b]{flex:1;padding-left:%?20?%;display:flex;flex-direction:column;justify-content:space-between}.newsbox .text .title[data-v-41dc564b]{font-size:%?38?%;color:#333}.newsbox .text .title .t[data-v-41dc564b]{text-overflow:-o ellipsis-lastline;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical}.newsbox .text .info[data-v-41dc564b]{font-size:%?26?%;color:#999}.newsbox .text .info uni-text[data-v-41dc564b]{padding-right:%?30?%}',""]),t.exports=e},"885c":function(t,e,n){"use strict";n.r(e);var a=n("5171"),i=n("a342");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("75b8");var o=n("f0c5"),s=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"3cafc05d",null,!1,a["a"],void 0);e["default"]=s.exports},a342:function(t,e,n){"use strict";n.r(e);var a=n("31df"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},a9e0:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("a630")},d0ff:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return(0,a.default)(t)||(0,i.default)(t)||(0,r.default)(t)||(0,o.default)()};var a=s(n("4053")),i=s(n("a9e0")),r=s(n("dde1")),o=s(n("10eb"));function s(t){return t&&t.__esModule?t:{default:t}}},e50e:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"newsbox"},[n("v-uni-view",{staticClass:"pic"},[n("v-uni-image",{attrs:{src:t.item.picurl,mode:"aspectFill"}})],1),n("v-uni-view",{staticClass:"text"},[n("v-uni-view",{staticClass:"title"},[n("v-uni-view",{staticClass:"t"},[t._v(t._s(t.item.title))])],1),t.item.looktime?n("v-uni-view",{staticClass:"info"},[n("v-uni-text",[t._v("浏览时间："+t._s(t.item.looktime))])],1):n("v-uni-view",{staticClass:"info"},[n("v-uni-text",[t._v(t._s(t.item.author))]),n("v-uni-text",[t._v(t._s(t.item.hits)+"浏览")])],1)],1)],1)},i=[]},f2e4:function(t,e,n){"use strict";n.r(e);var a=n("e50e"),i=n("4ac4");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("5cde");var o=n("f0c5"),s=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"41dc564b",null,!1,a["a"],void 0);e["default"]=s.exports},f73f:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"newsbox",props:{item:{type:Object,default:function(){return{title:"组件内默认标题",author:"zsang",hits:778,picurl:"../../static/images/shengdanreyin.png"}}}},data:function(){return{}},onLoad:function(){}};e.default=a}}]);