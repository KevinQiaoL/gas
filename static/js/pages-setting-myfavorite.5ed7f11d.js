(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-setting-myfavorite"],{"032c":function(t,e,a){"use strict";a.r(e);var i=a("71ad"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},1374:function(t,e,a){"use strict";a.r(e);var i=a("c420"),n=a("032c");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("6f32");var s,r=a("f0c5"),l=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"07e7a4bb",null,!1,i["a"],s);e["default"]=l.exports},"6f32":function(t,e,a){"use strict";var i=a("7e72"),n=a.n(i);n.a},"71ad":function(t,e,a){"use strict";var i=a("ee27");a("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("96cf");var n=i(a("c964")),o=a("c537"),s=10,r={data:function(){return{page:1,totalPage:"1",lists:[],loadingText:"加载更多..."}},onLoad:function(t){this.queryList()},onReachBottom:function(){this.page<=this.totalPage?this.queryList():this.loadingText="已加载全部数据"},methods:{queryList:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function e(){var a,i,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t,console.log(a.page+"--"+a.totalPage),e.next=4,(0,o.MyFavorite)({page:a.page,pageSize:s});case 4:i=e.sent,console.log(i),1==i.code?(n=t.lists,t.lists=n.concat(i.data.list),t.totalPage=i.data.totalPage,t.page++):t.$msg("查询失败："+i.msg);case 7:case"end":return e.stop()}}),e)})))()}}};e.default=r},"7e72":function(t,e,a){var i=a("e1f2");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("57a8f2d2",i,!0,{sourceMap:!1,shadowMode:!1})},c420:function(t,e,a){"use strict";var i={uniIcons:a("6f9d").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"page"},[t._l(t.lists,(function(e,i){return a("v-uni-navigator",{key:i,staticClass:"items",attrs:{url:"'/pages/work/danger/detail","hover-class":"none"}},[a("v-uni-view",{staticClass:"name"},[t._v(t._s(e.title))]),a("v-uni-view",{staticClass:"other"},[a("v-uni-view",{staticClass:"lft"},[a("v-uni-text",[t._v(t._s(e.publisher))]),a("v-uni-text",[t._v("|")]),a("v-uni-text",[t._v(t._s(e.publishTime))])],1),a("v-uni-view",{staticClass:"rit"},[a("uni-icons",{staticClass:"icons",staticStyle:{color:"#666"},attrs:{type:"star",size:"20"}}),a("v-uni-text",[t._v(t._s(e.collectNum))]),a("uni-icons",{staticClass:"icons",staticStyle:{color:"#666"},attrs:{type:"eye",size:"20"}}),a("v-uni-text",[t._v(t._s(e.readNum))])],1)],1)],1)})),a("v-uni-view",{staticClass:"loading-more"},[a("v-uni-text",{staticClass:"loading-more-text"},[t._v(t._s(t.loadingText))])],1)],2)},o=[];a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}))},e1f2:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-07e7a4bb]{width:100%;min-height:100%;display:-webkit-box;display:-webkit-flex;display:flex}.page[data-v-07e7a4bb]{width:100%;-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;overflow:hidden;background-color:#f5f5f5;margin:%?20?%}.page .items[data-v-07e7a4bb]{background:#fff;padding:%?20?%;border-radius:7px;margin-bottom:%?20?%;position:relative}.page .items .name[data-v-07e7a4bb]{font-size:%?30?%;padding:%?10?% 0 %?20?% 0;color:#333}.page .items .other[data-v-07e7a4bb]{font-size:%?22?%;display:-webkit-box;display:-webkit-flex;display:flex;color:#666}.page .items .other .lft[data-v-07e7a4bb]{width:50%}.page .items .other .lft uni-text[data-v-07e7a4bb]{margin-right:%?20?%}.page .items .other .rit[data-v-07e7a4bb]{width:50%;text-align:right}.page .items .other .rit uni-text[data-v-07e7a4bb]{margin-right:%?20?%}.loading-icon[data-v-07e7a4bb]{width:20px;height:20px;margin-right:5px;color:#999}.loading-text[data-v-07e7a4bb]{margin-left:2px;font-size:16px;color:#999}.loading-more[data-v-07e7a4bb]{-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding-top:10px;padding-bottom:10px;text-align:center}.loading-more-text[data-v-07e7a4bb]{font-size:%?28?%;color:#999}.hd-search__bar[data-v-07e7a4bb]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?14?% %?20?% %?14?%;background-color:#fff;position:fixed;width:100%;z-index:10;box-sizing:border-box}.hd-search__wrap[data-v-07e7a4bb]{-webkit-box-flex:1;-webkit-flex:1;flex:1;border-radius:%?64?%;height:%?64?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#f5f5f5}.hd-search__wrap .iconfont[data-v-07e7a4bb]{line-height:%?64?%;width:%?64?%;text-align:center;margin:0 %?10?% 0 %?20?%;font-size:%?52?%;color:#aaa}.hd-search__wrap .placeholder[data-v-07e7a4bb]{font-size:%?28?%;color:#aaa}.hd-search__btns[data-v-07e7a4bb]{margin-left:%?10?%}',""]),t.exports=e}}]);