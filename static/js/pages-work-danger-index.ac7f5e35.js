(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-work-danger-index"],{"0270":function(t,a,e){"use strict";var i,n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"page"},[e("v-uni-view",{staticClass:"pagelist"},[t._l(t.lists,(function(a,i){return e("v-uni-navigator",{key:i,staticClass:"items",attrs:{url:"/pages/work/danger/detail?id="+a.id+"&tab=info","hover-class":"none"}},[e("v-uni-view",{staticClass:"name"},[t._v(t._s(a.name)),"warn"==t.tab?e("RiskStatus",{staticStyle:{"margin-left":"20rpx","font-size":"24rpx"},attrs:{data:a.riskStatus}}):t._e()],1),e("v-uni-view",{staticClass:"tags"},[e("v-uni-text",{class:{d:"02001301"==a.grade,n:"02001302"==a.grade}},[t._v(t._s(a.gradeInfo.name))]),e("v-uni-text",[t._v(t._s(a.typeName))]),e("v-uni-text",[t._v(t._s(a.city))])],1),e("v-uni-view",{staticClass:"other"},[e("v-uni-text",[t._v(t._s(a.pwuName))]),e("v-uni-text",[t._v("时间："+t._s(t.$transferDate(a.createTime,".")))])],1),"list"==t.tab?e("v-uni-text",{staticClass:"status"},[t._v(t._s(a.collectTypeInfo.name))]):t._e(),"list"==t.tab?e("RiskStatus",{staticClass:"riskstatus",attrs:{data:a.riskStatus}}):t._e(),"warn"==t.tab?e("v-uni-view",{staticClass:"wranstatus"},[e("v-uni-text",[t._v(t._s(a.remainTime))]),e("v-uni-text",[t._v(t._s(a.registerType))])],1):t._e()],1)})),e("v-uni-view",{staticClass:"loading-more"},[e("v-uni-text",{staticClass:"loading-more-text"},[t._v(t._s(t.loadingText))])],1)],2)],1)},s=[];e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return s})),e.d(a,"a",(function(){return i}))},2959:function(t,a,e){"use strict";var i=e("65dd"),n=e.n(i);n.a},"2f73":function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-5da3af95]{width:100%;min-height:100%;display:-webkit-box;display:-webkit-flex;display:flex}.page[data-v-5da3af95]{width:100%;-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;overflow:hidden;background-color:#f5f5f5}.pagelist[data-v-5da3af95]{margin:%?20?%}.pagelist .items[data-v-5da3af95]{background:#fff;padding:%?20?%;border-radius:7px;margin-bottom:%?20?%;position:relative}.pagelist .items .name[data-v-5da3af95]{font-size:%?30?%;padding:%?10?% 0 %?20?% 0;color:#333}.pagelist .items .riskstatus[data-v-5da3af95]{position:absolute;right:%?20?%;top:%?74?%;font-size:%?24?%}.pagelist .items .wranstatus[data-v-5da3af95]{position:absolute;right:%?20?%;top:%?20?%}.pagelist .items .wranstatus uni-text[data-v-5da3af95]{display:block}.pagelist .items .wranstatus uni-text[data-v-5da3af95]:first-child{font-size:%?38?%;color:#008cd6}.pagelist .items .wranstatus uni-text[data-v-5da3af95]:last-child{font-size:%?24?%;color:#008cd6;margin-top:%?16?%;text-align:right}.pagelist .items .status[data-v-5da3af95]{position:absolute;right:%?0?%;top:%?0?%;background-color:#008cd6;color:#fff;font-size:%?20?%;border-top-right-radius:%?25?%;border-bottom-left-radius:%?25?%;padding:%?6?% %?16?%}.pagelist .items .other[data-v-5da3af95]{font-size:%?22?%;display:-webkit-box;display:-webkit-flex;display:flex;color:#666}.pagelist .items .other uni-text[data-v-5da3af95]{width:50%}.pagelist .items .other uni-text[data-v-5da3af95]:last-child{text-align:right}.pagelist .items .tags[data-v-5da3af95]{font-size:%?20?%;margin-bottom:%?20?%}.pagelist .items .tags uni-text[data-v-5da3af95]{margin-right:%?20?%;background-color:#f5f5f5;padding:%?4?% %?10?%;border-radius:%?4?%;color:#999;border-radius:%?6?%}.pagelist .items .tags .n[data-v-5da3af95]{background-color:#008cd6;color:#fff}.pagelist .items .tags .d[data-v-5da3af95]{background-color:#d10000;color:#fff}.loading-icon[data-v-5da3af95]{width:20px;height:20px;margin-right:5px;color:#999}.loading-text[data-v-5da3af95]{margin-left:2px;font-size:16px;color:#999}.loading-more[data-v-5da3af95]{-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding-top:10px;padding-bottom:10px;text-align:center}.loading-more-text[data-v-5da3af95]{font-size:%?28?%;color:#999}',""]),t.exports=a},3002:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={props:{data:{required:!0}},data:function(){return{stArr:["待评估","管控中","报备中","报备未通过","已报备","核销中","核销未通过","已核销","已解除"],colorArr:["#FF9600","#1BBC7D","#1BBC7D","#999999","#008CD6","#1BBC7D","#999999","#008CD6","#008CD6"]}}};a.default=i},"65dd":function(t,a,e){var i=e("2f73");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("c22bf97c",i,!0,{sourceMap:!1,shadowMode:!1})},"66e2":function(t,a,e){"use strict";e.r(a);var i=e("6b00"),n=e("7188");for(var s in n)"default"!==s&&function(t){e.d(a,t,(function(){return n[t]}))}(s);var r,o=e("f0c5"),d=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);a["default"]=d.exports},"6b00":function(t,a,e){"use strict";var i,n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-text",{style:{color:t.colorArr[t.data]}},[t._v(t._s(t.stArr[t.data]))])},s=[];e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return s})),e.d(a,"a",(function(){return i}))},7188:function(t,a,e){"use strict";e.r(a);var i=e("3002"),n=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(a,t,(function(){return i[t]}))}(s);a["default"]=n.a},"73d2":function(t,a,e){"use strict";e.r(a);var i=e("9096"),n=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(a,t,(function(){return i[t]}))}(s);a["default"]=n.a},9096:function(t,a,e){"use strict";var i=e("ee27");e("99af"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("96cf");var n=i(e("c964")),s=e("c537"),r=i(e("66e2")),o={list:"风险清单",warn:"风险预警"},d=10,l={components:{RiskStatus:r.default},data:function(){return{page:1,totalPage:"1",lists:[],loadingText:"加载更多...",tab:""}},onLoad:function(t){uni.setNavigationBarTitle({title:o[t.tab]}),this.tab=t.tab,this.queryList()},onReachBottom:function(){this.page<=this.totalPage?this.queryList():this.loadingText="已加载全部数据"},methods:{queryList:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function a(){var e,i,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e=t,console.log(e.page+"--"+e.totalPage+"--"+t.tab),a.next=4,(0,s.queryListOfDanger)({tab:t.tab,page:e.page,pageSize:d,searchName:""});case 4:i=a.sent,console.log(i),1==i.code?(n=t.lists,t.lists=n.concat(i.data.list),t.totalPage=i.data.totalPage,t.page++):t.$msg("查询失败："+i.msg);case 7:case"end":return a.stop()}}),a)})))()}}};a.default=l},aaa8:function(t,a,e){"use strict";e.r(a);var i=e("0270"),n=e("73d2");for(var s in n)"default"!==s&&function(t){e.d(a,t,(function(){return n[t]}))}(s);e("2959");var r,o=e("f0c5"),d=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"5da3af95",null,!1,i["a"],r);a["default"]=d.exports}}]);