(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-work-inspection-detail"],{"0439":function(i,t,e){var a=e("24fb");t=a(!1),t.push([i.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-grid-wrap[data-v-63e2101f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;width:100%}.uni-grid[data-v-63e2101f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap}.uni-grid--border[data-v-63e2101f]{border-left-color:#eee;border-left-style:solid;border-left-width:1px}',""]),i.exports=t},"075b":function(i,t,e){"use strict";e.r(t);var a=e("9a2b"),n=e.n(a);for(var s in a)"default"!==s&&function(i){e.d(t,i,(function(){return a[i]}))}(s);t["default"]=n.a},1448:function(i,t,e){"use strict";var a=e("ee27");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e("96cf");var n,s=a(e("c964")),r=a(e("6517")),o=a(e("dc69")),d=e("c537"),l={components:{uniGrid:r.default,uniGridItem:o.default},data:function(){return{statusColor:["a0","a1","a2"],isUploadReportName:["未上传报告","已上传报告"],id:"",info:{},checkObject:[],checkRecord:[],joinDepart:{},planInfo:{},projects:{},report:[]}},onLoad:function(i){var t=i.id;n=t,this.id=t,this.queryDetailOfIssued()},methods:{queryDetailOfIssued:function(){var i=this;return(0,s.default)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,d.queryDetailOfIssued)({id:n});case 2:e=t.sent,1===+e.code?(i.info=e.data.base,i.checkObject=e.data.checkObject,i.checkRecord=e.data.checkRecord,i.joinDepart=e.data.joinDepart,i.planInfo=e.data.planInfo,i.projects=e.data.projects,i.report=e.data.report):i.$msg("查询失败："+e.msg);case 4:case"end":return t.stop()}}),t)})))()}}};t.default=l},"14dd":function(i,t,e){var a=e("e77a");"string"===typeof a&&(a=[[i.i,a,""]]),a.locals&&(i.exports=a.locals);var n=e("4f06").default;n("7c29803d",a,!0,{sourceMap:!1,shadowMode:!1})},"2c50":function(i,t,e){var a=e("0439");"string"===typeof a&&(a=[[i.i,a,""]]),a.locals&&(i.exports=a.locals);var n=e("4f06").default;n("7ec43a1f",a,!0,{sourceMap:!1,shadowMode:!1})},"2eb5":function(i,t,e){"use strict";e.r(t);var a=e("1448"),n=e.n(a);for(var s in a)"default"!==s&&function(i){e.d(t,i,(function(){return a[i]}))}(s);t["default"]=n.a},"41c1":function(i,t,e){var a=e("24fb");t=a(!1),t.push([i.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.no-date[data-v-4b1eb6f2]{padding:%?20?%}.page[data-v-4b1eb6f2]{width:100%;height:calc(100vh - %?88?%);display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;overflow:hidden;background-color:#fff}.ins-detail-page[data-v-4b1eb6f2]{margin:%?20?% %?20?% 0;padding-bottom:%?10?%}.ins-detail-page .main-iwrap[data-v-4b1eb6f2],\n.ins-detail-page .plan-info-iwrap[data-v-4b1eb6f2]{background:#fff;border-radius:%?14?%;width:100%;padding:%?20?%;box-sizing:border-box;margin-bottom:%?20?%;font-size:%?26?%}.ins-detail-page .main-iwrap .has-btm-border[data-v-4b1eb6f2],\n.ins-detail-page .plan-info-iwrap .has-btm-border[data-v-4b1eb6f2]{border-bottom:%?1?% solid #eee}.ins-detail-page .main-iwrap.has-margin[data-v-4b1eb6f2],\n.ins-detail-page .plan-info-iwrap.has-margin[data-v-4b1eb6f2]{border-radius:%?14?%;margin:%?20?%}.ins-detail-page .main-iwrap .title[data-v-4b1eb6f2]{font-size:%?32?%;color:#333;line-height:%?46?%;margin-bottom:%?40?%}.ins-detail-page .main-iwrap .title .status-txt[data-v-4b1eb6f2]{font-size:%?24?%;margin-left:%?20?%}.ins-detail-page .main-iwrap .title .status-txt.a0[data-v-4b1eb6f2]{color:#008cd6}.ins-detail-page .main-iwrap .title .status-txt.a1[data-v-4b1eb6f2]{color:#1bbc7d}.ins-detail-page .main-iwrap .title .status-txt.a2[data-v-4b1eb6f2]{color:#999}.ins-detail-page .main-iwrap__tags[data-v-4b1eb6f2]{-webkit-box-flex:1;-webkit-flex:1;flex:1;margin-bottom:%?30?%}.ins-detail-page .main-iwrap__tags uni-text[data-v-4b1eb6f2]{margin-right:%?10?%;background-color:#f5f5f5;padding:%?5?% %?10?%;border-radius:%?4?%;font-size:%?20?%;color:#999}.ins-detail-page .main-iwrap .mian-inside-iwrap[data-v-4b1eb6f2]{padding-top:%?30?%}.ins-detail-page .main-iwrap .mian-inside-iwrap .inside-title[data-v-4b1eb6f2]{padding:%?40?% %?15?% 0;font-size:%?30?%}.ins-detail-page .main-iwrap .mian-inside-iwrap .inside-content[data-v-4b1eb6f2]{padding:%?45?% %?15?%}.ins-detail-page .main-iwrap .mian-inside-iwrap .dname[data-v-4b1eb6f2]{color:#333;padding:%?10?% 0 %?0?% %?20?%;font-weight:700;position:relative;font-size:%?28?%}.ins-detail-page .main-iwrap .mian-inside-iwrap .dname[data-v-4b1eb6f2]::after{content:"";position:absolute;left:0;top:%?14?%;width:%?4?%;height:%?28?%;background:#008cd6}.ins-detail-page .main-iwrap .mian-inside-iwrap .join-company[data-v-4b1eb6f2]{padding:%?10?% 0}.ins-detail-page .main-iwrap .mian-inside-iwrap .join-company uni-view[data-v-4b1eb6f2]{display:-webkit-box;display:-webkit-flex;display:flex;padding:%?15?% %?20?%}.ins-detail-page .main-iwrap .mian-inside-iwrap .join-company uni-view uni-text[data-v-4b1eb6f2]:first-child{font-size:%?26?%;color:#333}.ins-detail-page .main-iwrap .mian-inside-iwrap .join-company uni-view uni-text[data-v-4b1eb6f2]:last-child{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:right;color:#1bbc7d}.ins-detail-page .main-iwrap .mian-inside-iwrap .join-company uni-view uni-text:last-child.no-update[data-v-4b1eb6f2]{color:#ff5b5b}.ins-detail-page .plan-info-iwrap[data-v-4b1eb6f2]{position:relative}.ins-detail-page .plan-info-iwrap .dname[data-v-4b1eb6f2]{color:#333;padding:%?10?% 0 %?0?% %?20?%;font-weight:700;font-size:%?28?%;position:relative}.ins-detail-page .plan-info-iwrap .dname[data-v-4b1eb6f2]::after{content:"";position:absolute;left:0;top:%?14?%;width:%?4?%;height:%?28?%;background:#008cd6}.ins-detail-page .plan-info-iwrap .title[data-v-4b1eb6f2]{padding:%?40?% %?15?% %?20?%;font-size:%?30?%}.ins-detail-page .plan-info-iwrap__tags[data-v-4b1eb6f2]{-webkit-box-flex:1;-webkit-flex:1;flex:1;padding-right:%?30?%}.ins-detail-page .plan-info-iwrap__tags uni-text[data-v-4b1eb6f2]{margin-right:%?10?%;background-color:#f5f5f5;padding:%?5?% %?10?%;border-radius:%?4?%;font-size:%?20?%;color:#999}.ins-detail-page .plan-info-iwrap__appeal[data-v-4b1eb6f2]{margin:0 %?15?% 0;padding-bottom:%?30?%;font-size:%?22?%;color:#666}.ins-detail-page .plan-info-iwrap .flex-box[data-v-4b1eb6f2]{display:-webkit-box;display:-webkit-flex;display:flex;webkit-box-pack:justify;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.ins-detail-page .plan-info-iwrap .more[data-v-4b1eb6f2]{position:absolute;top:%?34?%;right:%?20?%;color:#008cd6;font-size:%?22?%}.ins-detail-page .plan-info-iwrap .check-record-iwrap .check-record-header[data-v-4b1eb6f2]{padding:%?30?% %?15?%;display:-webkit-box;display:-webkit-flex;display:flex}.ins-detail-page .plan-info-iwrap .check-record-iwrap .check-record-header uni-text[data-v-4b1eb6f2]:first-child{font-size:%?30?%}.ins-detail-page .plan-info-iwrap .check-record-iwrap .check-record-header uni-text[data-v-4b1eb6f2]:last-child{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:right;color:#ff5b5b}.ins-detail-page .box-items.box-pd[data-v-4b1eb6f2]{padding:0 %?15?%}.ins-detail-page .box-items.has-border-line uni-view[data-v-4b1eb6f2]{border-bottom:%?1?% solid red;border-bottom:%?1?% solid #eee}.ins-detail-page .box-items.has-border-line uni-view uni-text[data-v-4b1eb6f2]:first-child{padding-left:20px;width:%?120?%}.ins-detail-page .box-items.has-border-line uni-view uni-text[data-v-4b1eb6f2]:last-child{padding-right:20px}.ins-detail-page .box-items uni-view[data-v-4b1eb6f2]{display:-webkit-box;display:-webkit-flex;display:flex;padding-bottom:%?28?%;font-size:%?26?%;color:#999}.ins-detail-page .box-items uni-view uni-text[data-v-4b1eb6f2]:first-child{width:%?180?%;padding-right:%?30?%}.ins-detail-page .box-items uni-view uni-text[data-v-4b1eb6f2]:first-child::after{content:":";position:relative;top:%?-0.5?%;margin:0 %?8?% 0 %?2?%}.ins-detail-page .box-items uni-view uni-text[data-v-4b1eb6f2]:last-child{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:right}.ins-detail-page .box-items_left uni-view uni-text[data-v-4b1eb6f2]:first-child{width:%?180?%}.ins-detail-page .box-items_left uni-view uni-text[data-v-4b1eb6f2]:last-child{text-align:left}.ins-detail-page .annex[data-v-4b1eb6f2]{color:#008cd6;margin:%?10?% 0 %?20?% 0;width:%?180?%}.ins-detail-page__numbox[data-v-4b1eb6f2]{padding:%?20?% 0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.ins-detail-page__numbox .grid-column[data-v-4b1eb6f2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.ins-detail-page__numbox .grid-column .grid-item-box[data-v-4b1eb6f2]{-webkit-box-flex:1;-webkit-flex:1;flex:1;position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:%?20?% 0;cursor:pointer}.ins-detail-page__numbox .grid-column .grid-item-box .txt[data-v-4b1eb6f2]{font-size:%?24?%;color:#999}.ins-detail-page__numbox .grid-column .grid-item-box .num[data-v-4b1eb6f2]{font-size:%?48?%;color:#008cd6}.ins-detail-page__numbox .grid-column .grid-item-box .num.n0[data-v-4b1eb6f2]{color:#d10000}.ins-detail-page__numbox .grid-column .grid-item-box .num.n1[data-v-4b1eb6f2]{color:#ff5b5b}.ins-detail-page__numbox .grid-column .grid-item-box .num.n2[data-v-4b1eb6f2]{color:#1bbc7d}',""]),i.exports=t},4486:function(i,t,e){"use strict";var a=e("14dd"),n=e.n(a);n.a},"5fe1":function(i,t,e){var a=e("41c1");"string"===typeof a&&(a=[[i.i,a,""]]),a.locals&&(i.exports=a.locals);var n=e("4f06").default;n("30abcc4f",a,!0,{sourceMap:!1,shadowMode:!1})},6517:function(i,t,e){"use strict";e.r(t);var a=e("f793"),n=e("c152");for(var s in n)"default"!==s&&function(i){e.d(t,i,(function(){return n[i]}))}(s);e("8a92");var r,o=e("f0c5"),d=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"63e2101f",null,!1,a["a"],r);t["default"]=d.exports},6809:function(i,t,e){"use strict";var a=e("5fe1"),n=e.n(a);n.a},"6e50":function(i,t,e){"use strict";e("4160"),e("a9e3"),e("d3b7"),e("e25e"),e("ac1f"),e("25f0"),e("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={name:"UniGrid",props:{column:{type:Number,default:3},showBorder:{type:Boolean,default:!0},borderColor:{type:String,default:"#e5e5e5"},square:{type:Boolean,default:!0},highlight:{type:Boolean,default:!0}},provide:function(){return{grid:this}},data:function(){var i="Uni_".concat(Math.ceil(1e6*Math.random()).toString(36));return{elId:i,width:0}},created:function(){this.children=[]},mounted:function(){this.init()},methods:{init:function(){var i=this;setTimeout((function(){i._getSize((function(t){i.children.forEach((function(i,e){i.width=t}))}))}),50)},change:function(i){this.$emit("change",i)},_getSize:function(i){var t=this;uni.createSelectorQuery().in(this).select("#".concat(this.elId)).boundingClientRect().exec((function(e){t.width=parseInt((e[0].width-1)/t.column)+"px",i(t.width)}))}}};t.default=a},"77ba":function(i,t,e){"use strict";var a,n=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("v-uni-view",{staticClass:"ins-detail-page"},[e("v-uni-view",{staticClass:"main-iwrap"},[e("v-uni-view",{staticClass:"main-iwrap_box has-margin has-btm-border"},[e("v-uni-view",{staticClass:"title"},[i._v(i._s(i.projects.name)),e("v-uni-text",{staticClass:"status-txt",class:i.statusColor[i.projects.status]},[i._v(i._s(i.projects.statusName))])],1),e("v-uni-view",{staticClass:"main-iwrap__tags"},[e("v-uni-text",[i._v(i._s(i.projects.checkTypeName))])],1),e("v-uni-view",{staticClass:"box-items"},[e("v-uni-view",[e("v-uni-text",[i._v("检查对象类型")]),e("v-uni-text",[i._v("??")])],1),e("v-uni-view",[e("v-uni-text",[i._v("检查时间")]),e("v-uni-text",[i._v(i._s(i.$transferDate(i.projects.checkStartTime,".",!1,"on"))+"-"+i._s(i.$transferDate(i.projects.checkEndTime,".",!1,"on")))])],1)],1)],1),e("v-uni-view",{staticClass:"ins-detail-page__numbox has-btm-border"},[e("v-uni-view",{staticClass:"grid-column"},[e("v-uni-view",{staticClass:"grid-item-box"},[e("v-uni-text",{staticClass:"num"},[i._v(i._s(i.info.latentNum))]),e("v-uni-text",{staticClass:"txt"},[i._v("隐患总数")])],1),e("v-uni-view",{staticClass:"grid-item-box"},[e("v-uni-text",{staticClass:"num n0"},[i._v(i._s(i.info.importantLatentNum))]),e("v-uni-text",{staticClass:"txt"},[i._v("重大隐患")])],1),e("v-uni-view",{staticClass:"grid-item-box"},[e("v-uni-text",{staticClass:"num n1"},[i._v(i._s(i.info.normalLatentNum))]),e("v-uni-text",{staticClass:"txt"},[i._v("一般隐患")])],1)],1),e("v-uni-view",{staticClass:"grid-column"},[e("v-uni-view",{staticClass:"grid-item-box"},[e("v-uni-text",{staticClass:"num n2"},[i._v(i._s(i.info.destroyNum))]),e("v-uni-text",{staticClass:"txt"},[i._v("核销数量")])],1),e("v-uni-view",{staticClass:"grid-item-box"},[e("v-uni-text",{staticClass:"num"},[i._v(i._s(i.info.issueNum))]),e("v-uni-text",{staticClass:"txt"},[i._v("问题总数")])],1),e("v-uni-view",{staticClass:"grid-item-box"},[e("v-uni-text",{staticClass:"num n2"},[i._v(i._s(i.info.acceptanceNum))]),e("v-uni-text",{staticClass:"txt"},[i._v("已验收问题")])],1)],1)],1),e("v-uni-view",{staticClass:"mian-inside-iwrap has-btm-border"},[e("v-uni-view",{staticClass:"dname"},[i._v("监督检查重点内容")]),e("v-uni-view",{staticClass:"inside-title"},[i._v(i._s(i.planInfo.name))]),e("v-uni-view",{staticClass:"inside-content"},[i._v(i._s(i.projects.importantContent))])],1),e("v-uni-view",{staticClass:"mian-inside-iwrap"},[e("v-uni-view",{staticClass:"dname"},[i._v("参与单位")]),e("v-uni-view",{staticClass:"join-company"},[i._l(i.joinDepart,(function(t,a){return[e("v-uni-view",[e("v-uni-text",[i._v(i._s(t.departName))]),e("v-uni-text",{class:{"no-update":0==t.isUploadReport}},[i._v(i._s(i.isUploadReportName[t.isUploadReport]))])],1)]}))],2)],1)],1),e("v-uni-view",{staticClass:"plan-info-iwrap"},[e("v-uni-view",{staticClass:"dname"},[i._v("所属计划信息")]),e("v-uni-view",{staticClass:"title"},[i._v(i._s(i.planInfo.name))]),e("v-uni-view",{staticClass:"plan-info-iwrap__appeal flex-box"},[e("v-uni-view",{staticClass:"plan-info-iwrap__tags"},[e("v-uni-text",[i._v(i._s(i.planInfo.paramName))]),e("v-uni-text",[i._v(i._s(i.planInfo.typeName))])],1),e("v-uni-view",{staticClass:"status-txt"},[i._v(i._s(i.planInfo.departName))])],1)],1),e("v-uni-view",{staticClass:"plan-info-iwrap"},[e("v-uni-view",{staticClass:"dname"},[i._v("项目总结报告(共"+i._s(i.info.reportNum)+"条)")]),e("v-uni-navigator",{attrs:{url:"/pages/work/inspection/index?titleType=2&id="+i.id}},[e("v-uni-view",{staticClass:"more"},[i._v("查看更多")])],1),i.report.length>0?[e("v-uni-view",{staticClass:"title"},[i._v(i._s(i.report[0].departName))]),e("v-uni-view",{staticClass:"ins-detail-page__numbox"},[e("v-uni-view",{staticClass:"grid-column"},[e("v-uni-view",{staticClass:"grid-item-box"},[e("v-uni-text",{staticClass:"num"},[i._v(i._s(i.report[0].latentNum))]),e("v-uni-text",{staticClass:"txt"},[i._v("隐患总数")])],1),e("v-uni-view",{staticClass:"grid-item-box"},[e("v-uni-text",{staticClass:"num n0"},[i._v(i._s(i.report[0].importantLatentNum))]),e("v-uni-text",{staticClass:"txt"},[i._v("重大隐患")])],1),e("v-uni-view",{staticClass:"grid-item-box"},[e("v-uni-text",{staticClass:"num n1"},[i._v(i._s(i.report[0].normalLatentNum))]),e("v-uni-text",{staticClass:"txt"},[i._v("一般隐患")])],1)],1),e("v-uni-view",{staticClass:"grid-column"},[e("v-uni-view",{staticClass:"grid-item-box"},[e("v-uni-text",{staticClass:"num n2"},[i._v(i._s(i.report[0].destroyNum))]),e("v-uni-text",{staticClass:"txt"},[i._v("核销数量")])],1),e("v-uni-view",{staticClass:"grid-item-box"},[e("v-uni-text",{staticClass:"num"},[i._v(i._s(i.report[0].issueNum))]),e("v-uni-text",{staticClass:"txt"},[i._v("问题总数")])],1),e("v-uni-view",{staticClass:"grid-item-box"},[e("v-uni-text",{staticClass:"num n2"},[i._v(i._s(i.report[0].acceptanceNum))]),e("v-uni-text",{staticClass:"txt"},[i._v("已验收问题")])],1)],1)],1),e("v-uni-view",{staticClass:"box-items box-pd"},[e("v-uni-view",[e("v-uni-text",[i._v("实际检查时间")]),e("v-uni-text",[i._v("???")])],1),e("v-uni-view",[e("v-uni-text",[i._v("提交报告时间")]),e("v-uni-text",[i._v(i._s(i.$transferDate(i.report[0].createTime,".",!0,"on")))])],1),i._l(i.report[0].applyRes,(function(t,a){return e("plain-button",{key:a,staticClass:"annex",attrs:{name:"iconannex"}},[i._v("查看附件")])}))],2)]:[e("v-uni-view",{staticClass:"no-date"},[i._v("暂无数据")])]],2),e("v-uni-view",{staticClass:"plan-info-iwrap"},[e("v-uni-view",{staticClass:"dname"},[i._v("项目检查记录(共"+i._s(i.info.checkRecordNum)+"条)")]),e("v-uni-navigator",{attrs:{url:"/pages/work/inspection/index?titleType=3&id="+i.id}},[e("v-uni-view",{staticClass:"more"},[i._v("查看更多")])],1),i.checkRecord.length>0?[e("v-uni-view",{staticClass:"check-record-iwrap"},[e("v-uni-view",{staticClass:"check-record-header"},[e("v-uni-text",[i._v(i._s(i.checkRecord[0].name))]),e("v-uni-text",[i._v("已记录 问题"+i._s(i.checkRecord[0].reportNum)+"个")])],1),e("v-uni-view",{staticClass:"box-items box-pd has-btm-border"},[e("v-uni-view",[e("v-uni-text",[i._v("检查对象类型")]),e("v-uni-text",[i._v(i._s(i.checkRecord[0].checkType))])],1),e("v-uni-view",[e("v-uni-text",[i._v("检查对象")]),e("v-uni-text",[i._v(i._s(i.checkRecord[0].departName))])],1),e("v-uni-view",[e("v-uni-text",[i._v("实际检查时间")]),e("v-uni-text",[i._v(i._s(i.$transferDate(i.checkRecord[0].createTime,".",!0,"on")))])],1)],1)],1),e("v-uni-view",{staticClass:"check-record-iwrap"},[e("v-uni-view",{staticClass:"check-record-header"},[e("v-uni-text",[i._v(i._s(i.checkRecord[1].name))]),e("v-uni-text",[i._v("已记录 问题"+i._s(i.checkRecord[1].reportNum)+"个")])],1),e("v-uni-view",{staticClass:"box-items box-pd"},[e("v-uni-view",[e("v-uni-text",[i._v("检查对象类型")]),e("v-uni-text",[i._v(i._s(i.checkRecord[1].checkType))])],1),e("v-uni-view",[e("v-uni-text",[i._v("检查对象")]),e("v-uni-text",[i._v(i._s(i.checkRecord[1].departName))])],1),e("v-uni-view",[e("v-uni-text",[i._v("实际检查时间")]),e("v-uni-text",[i._v(i._s(i.$transferDate(i.checkRecord[1].createTime,".",!0,"on")))])],1)],1)],1)]:[e("v-uni-view",{staticClass:"no-date"},[i._v("暂无数据")])]],2)],1)},s=[];e.d(t,"b",(function(){return n})),e.d(t,"c",(function(){return s})),e.d(t,"a",(function(){return a}))},"8a92":function(i,t,e){"use strict";var a=e("2c50"),n=e.n(a);n.a},"8d8f":function(i,t,e){"use strict";e.r(t);var a=e("77ba"),n=e("2eb5");for(var s in n)"default"!==s&&function(i){e.d(t,i,(function(){return n[i]}))}(s);e("6809");var r,o=e("f0c5"),d=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"4b1eb6f2",null,!1,a["a"],r);t["default"]=d.exports},"9a2b":function(i,t,e){"use strict";e("4160"),e("a434"),e("a9e3"),e("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={name:"UniGridItem",inject:["grid"],props:{index:{type:Number,default:0}},data:function(){return{column:0,showBorder:!0,square:!0,highlight:!0,left:0,top:0,openNum:2,width:0,borderColor:"#e5e5e5"}},created:function(){this.column=this.grid.column,this.showBorder=this.grid.showBorder,this.square=this.grid.square,this.highlight=this.grid.highlight,this.top=0===this.hor?this.grid.hor:this.hor,this.left=0===this.ver?this.grid.ver:this.ver,this.borderColor=this.grid.borderColor,this.grid.children.push(this),this.width=this.grid.width},beforeDestroy:function(){var i=this;this.grid.children.forEach((function(t,e){t===i&&i.grid.children.splice(e,1)}))},methods:{_onClick:function(){this.grid.change({detail:{index:this.index}})}}};t.default=a},c152:function(i,t,e){"use strict";e.r(t);var a=e("6e50"),n=e.n(a);for(var s in a)"default"!==s&&function(i){e.d(t,i,(function(){return a[i]}))}(s);t["default"]=n.a},d603:function(i,t,e){"use strict";var a,n=function(){var i=this,t=i.$createElement,e=i._self._c||t;return i.width?e("v-uni-view",{staticClass:"uni-grid-item",style:"width:"+i.width+";"+(i.square?"height:"+i.width:"")},[e("v-uni-view",{staticClass:"uni-grid-item__box",class:{"uni-grid-item--border":i.showBorder,"uni-grid-item--border-top":i.showBorder&&i.index<i.column,"uni-highlight":i.highlight},style:{"border-right-color":i.borderColor,"border-bottom-color":i.borderColor,"border-top-color":i.borderColor},on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i._onClick.apply(void 0,arguments)}}},[i._t("default")],2)],1):i._e()},s=[];e.d(t,"b",(function(){return n})),e.d(t,"c",(function(){return s})),e.d(t,"a",(function(){return a}))},dc69:function(i,t,e){"use strict";e.r(t);var a=e("d603"),n=e("075b");for(var s in n)"default"!==s&&function(i){e.d(t,i,(function(){return n[i]}))}(s);e("4486");var r,o=e("f0c5"),d=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"e4b14a34",null,!1,a["a"],r);t["default"]=d.exports},e77a:function(i,t,e){var a=e("24fb");t=a(!1),t.push([i.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-grid-item[data-v-e4b14a34]{height:100%;display:-webkit-box;display:-webkit-flex;display:flex}.uni-grid-item__box[data-v-e4b14a34]{display:-webkit-box;display:-webkit-flex;display:flex;width:100%;position:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.uni-grid-item--border[data-v-e4b14a34]{position:relative;border-bottom-color:#eee;border-bottom-style:solid;border-bottom-width:1px;border-right-color:#eee;border-right-style:solid;border-right-width:1px}.uni-grid-item--border-top[data-v-e4b14a34]{border-top-color:#eee;border-top-style:solid;border-top-width:1px;height:100%;box-sizing:border-box}.uni-highlight[data-v-e4b14a34]:active{background-color:#f1f1f1}',""]),i.exports=t},f793:function(i,t,e){"use strict";var a,n=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("v-uni-view",{staticClass:"uni-grid-wrap"},[e("v-uni-view",{ref:"uni-grid",staticClass:"uni-grid",class:{"uni-grid--border":i.showBorder},style:{"border-left-style":"solid","border-left-color":i.borderColor,"border-left-width":i.showBorder?"1px":0},attrs:{id:i.elId}},[i._t("default")],2)],1)},s=[];e.d(t,"b",(function(){return n})),e.d(t,"c",(function(){return s})),e.d(t,"a",(function(){return a}))}}]);