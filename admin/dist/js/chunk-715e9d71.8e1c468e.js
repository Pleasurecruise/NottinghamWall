(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-715e9d71"],{2235:function(t,e,a){t.exports=a.p+"img/search_table_empty.e769fc3e.png"},"2e08":function(t,e,a){var r=a("9def"),s=a("9744"),n=a("be13");t.exports=function(t,e,a,i){var o=String(n(t)),c=o.length,l=void 0===a?" ":String(a),u=r(e);if(u<=c||""==l)return o;var d=u-c,v=s.call(l,Math.ceil(d/l.length));return v.length>d&&(v=v.slice(0,d)),i?v+o:o+v}},"38b8":function(t,e,a){t.exports=a.p+"img/table_empty.885371bc.png"},"3b2b":function(t,e,a){var r=a("7726"),s=a("5dbc"),n=a("86cc").f,i=a("9093").f,o=a("aae3"),c=a("0bfb"),l=r.RegExp,u=l,d=l.prototype,v=/a/g,p=/a/g,b=new l(v)!==v;if(a("9e1e")&&(!b||a("79e5")((function(){return p[a("2b4c")("match")]=!1,l(v)!=v||l(p)==p||"/a/i"!=l(v,"i")})))){l=function(t,e){var a=this instanceof l,r=o(t),n=void 0===e;return!a&&r&&t.constructor===l&&n?t:s(b?new u(r&&!n?t.source:t,e):u((r=t instanceof l)?t.source:t,r&&n?c.call(t):e),a?this:d,l)};for(var m=function(t){t in l||n(l,t,{configurable:!0,get:function(){return u[t]},set:function(e){u[t]=e}})},f=i(u),g=0;f.length>g;)m(f[g++]);d.constructor=l,l.prototype=d,a("2aba")(r,"RegExp",l)}a("7a56")("RegExp")},"560a":function(t,e,a){"use strict";a.d(e,"c",(function(){return o})),a.d(e,"h",(function(){return c})),a.d(e,"b",(function(){return l})),a.d(e,"a",(function(){return u})),a.d(e,"f",(function(){return d})),a.d(e,"e",(function(){return v})),a.d(e,"g",(function(){return p})),a.d(e,"d",(function(){return b}));a("8e6e"),a("ac6a"),a("456d");var r=a("bd86"),s=a("b32d");function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){Object(r["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var o=function(t){return Object(s["a"])({url:"/order/conditionSearch",method:"get",params:t})},c=function(t){return Object(s["a"])({url:"/order/details/".concat(t.orderId),method:"get"})},l=function(t){return Object(s["a"])({url:"/order/delivery/".concat(t.id),method:"put"})},u=function(t){return Object(s["a"])({url:"/order/complete/".concat(t.id),method:"put"})},d=function(t){return Object(s["a"])({url:"/order/cancel",method:"put",data:i({},t)})},v=function(t){return Object(s["a"])({url:"/order/confirm",method:"put",data:i({},t)})},p=function(t){return Object(s["a"])({url:"/order/rejection",method:"put",data:i({},t)})},b=function(t){return Object(s["a"])({url:"/order/statistics",method:"get"})}},"5dbc":function(t,e,a){var r=a("d3f4"),s=a("8b97").set;t.exports=function(t,e,a){var n,i=e.constructor;return i!==a&&"function"==typeof i&&(n=i.prototype)!==a.prototype&&r(n)&&s&&s(t,n),t}},"697d":function(t,e,a){"use strict";var r=a("cb03"),s=a.n(r);s.a},"79f6":function(t,e,a){"use strict";a.d(e,"c",(function(){return s})),a.d(e,"b",(function(){return n})),a.d(e,"e",(function(){return i})),a.d(e,"f",(function(){return o})),a.d(e,"d",(function(){return c})),a.d(e,"a",(function(){return l}));var r=a("b32d"),s=function(){return Object(r["a"])({url:"/workspace/overviewOrders",method:"get"})},n=function(){return Object(r["a"])({url:"/workspace/businessData",method:"get"})},i=function(t){return Object(r["a"])({url:"/report/turnoverStatistics",method:"get",params:t})},o=function(t){return Object(r["a"])({url:"/report/userStatistics",method:"get",params:t})},c=function(t){return Object(r["a"])({url:"/report/ordersStatistics",method:"get",params:t})};function l(){return Object(r["a"])({url:"/report/export",method:"get",responseType:"blob"})}},8830:function(t,e,a){},"8b97":function(t,e,a){var r=a("d3f4"),s=a("cb7c"),n=function(t,e){if(s(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=a("9b43")(Function.call,a("11e9").f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(s){e=!0}return function(t,a){return n(t,a),e?t.__proto__=a:r(t,a),t}}({},!1):void 0),check:n}},"8bf2":function(t,e,a){},9744:function(t,e,a){"use strict";var r=a("4588"),s=a("be13");t.exports=function(t){var e=String(s(this)),a="",n=r(t);if(n<0||n==1/0)throw RangeError("Count can't be negative");for(;n>0;(n>>>=1)&&(e+=e))1&n&&(a+=e);return a}},be14:function(t,e,a){"use strict";var r=a("8830"),s=a.n(r);s.a},c937:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-container home"},[a("Overview",{attrs:{overviewData:t.overviewData}}),a("Orderview",{attrs:{orderviewData:t.orderviewData}}),a("OrderList",{attrs:{"order-statics":t.orderStatics},on:{getOrderListBy3Status:t.getOrderListBy3Status}})],1)},s=[],n=(a("96cf"),a("3b8d")),i=a("d225"),o=a("b0b4"),c=a("308d"),l=a("6bb5"),u=a("4e2b"),d=a("9ab4"),v=a("60a3"),p=a("79f6"),b=a("560a"),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("h2",{staticClass:"homeTitle"},[t._v("\n    今日数据"),a("i",[t._v(t._s(t.days[1]))]),a("span",[a("router-link",{attrs:{to:"statistics"}},[t._v("详细数据")])],1)]),a("div",{staticClass:"overviewBox"},[a("ul",[a("li",[a("p",{staticClass:"tit"},[t._v("营业额")]),a("p",{staticClass:"num"},[t._v("¥ "+t._s(t.overviewData.turnover))])]),a("li",[a("p",{staticClass:"tit"},[t._v("有效订单")]),a("p",{staticClass:"num"},[t._v(t._s(t.overviewData.validOrderCount))])]),a("li",[a("p",{staticClass:"tit"},[t._v("订单完成率")]),a("p",{staticClass:"num"},[t._v("\n          "+t._s((100*t.overviewData.orderCompletionRate).toFixed(0))+"%\n        ")])]),a("li",[a("p",{staticClass:"tit"},[t._v("平均客单价")]),a("p",{staticClass:"num"},[t._v("¥ "+t._s(t.overviewData.unitPrice))])]),a("li",[a("p",{staticClass:"tit"},[t._v("新增用户")]),a("p",{staticClass:"num"},[t._v(t._s(t.overviewData.newUsers))])])])])])},f=[],g=a("d9cf"),h=function(t){function e(){return Object(i["a"])(this,e),Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),Object(o["a"])(e,[{key:"days",get:function(){return Object(g["b"])()}}]),e}(v["c"]);Object(d["a"])([Object(v["b"])()],h.prototype,"overviewData",void 0),h=Object(d["a"])([Object(v["a"])({name:"Overview"})],h);var O=h,_=O,y=a("2877"),C=Object(y["a"])(_,m,f,!1,null,null,null),D=C.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container homecon"},[a("h2",{staticClass:"homeTitle homeTitleBtn"},[t._v("\n      订单信息\n      "),a("ul",{staticClass:"conTab"},t._l(t.tabList,(function(e,r){return a("li",{key:r,class:t.activeIndex===r?"active":"",on:{click:function(e){return t.handleClass(r)}}},[a("el-badge",{staticClass:"item",class:e.num>=10?"badgeW":"",attrs:{value:e.num>99?"99+":e.num,hidden:!([2,3].includes(e.value)&&e.num)}},[t._v(t._s(e.label))])],1)})),0)]),a("div",{},[t.orderData.length>0?a("div",[a("el-table",{staticClass:"tableBox",staticStyle:{width:"100%"},attrs:{data:t.orderData,stripe:""},on:{"row-click":t.handleTable}},[a("el-table-column",{attrs:{prop:"number",label:"订单号"}}),a("el-table-column",{attrs:{label:"订单菜品"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"ellipsisHidden"},[a("el-popover",{attrs:{placement:"top-start",title:"",width:"200",trigger:"hover",content:e.row.orderDishes}},[a("span",{attrs:{slot:"reference"},slot:"reference"},[t._v(t._s(e.row.orderDishes))])])],1)]}}],null,!1,2845630214)}),a("el-table-column",{attrs:{label:"地址","class-name":2===t.dialogOrderStatus?"address":""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"ellipsisHidden"},[a("el-popover",{attrs:{placement:"top-start",title:"",width:"200",trigger:"hover",content:e.row.address}},[a("span",{attrs:{slot:"reference"},slot:"reference"},[t._v(t._s(e.row.address))])])],1)]}}],null,!1,3554143750)}),a("el-table-column",{attrs:{prop:"estimatedDeliveryTime",label:"预计送达时间",sortable:"","class-name":"orderTime","min-width":"130"}}),a("el-table-column",{attrs:{prop:"amount",label:"实收金额"}}),a("el-table-column",{attrs:{label:"备注"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"ellipsisHidden"},[a("el-popover",{attrs:{placement:"top-start",title:"",width:"200",trigger:"hover",content:e.row.remark}},[a("span",{attrs:{slot:"reference"},slot:"reference"},[t._v(t._s(e.row.remark))])])],1)]}}],null,!1,3505279526)}),3===t.status?a("el-table-column",{attrs:{prop:"tablewareNumber",label:"餐具数量","min-width":"80",align:"center"}}):t._e(),a("el-table-column",{attrs:{label:"操作",align:"center","class-name":0===t.dialogOrderStatus?"operate":"otherOperate","min-width":[2,3].includes(t.dialogOrderStatus)?130:[0].includes(t.dialogOrderStatus)?140:"auto"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.row;return[a("div",{staticClass:"before"},[2===r.status?a("el-button",{staticClass:"blueBug",attrs:{type:"text"},on:{click:function(e){t.orderAccept(r,e),t.isTableOperateBtn=!0}}},[t._v("\n                  接单\n                ")]):t._e(),3===r.status?a("el-button",{staticClass:"blueBug",attrs:{type:"text"},on:{click:function(e){return t.cancelOrDeliveryOrComplete(3,r.id,e)}}},[t._v("\n                  派送\n                ")]):t._e()],1),a("div",{staticClass:"middle"},[2===r.status?a("el-button",{staticClass:"delBut",attrs:{type:"text"},on:{click:function(e){t.orderReject(r,e),t.isTableOperateBtn=!0}}},[t._v("\n                  拒单\n                ")]):t._e(),[1,3,4,5].includes(r.status)?a("el-button",{staticClass:"delBut",attrs:{type:"text"},on:{click:function(e){return t.cancelOrder(r,e)}}},[t._v("\n                  取消\n                ")]):t._e()],1),a("div",{staticClass:"after"},[a("el-button",{staticClass:"blueBug non",attrs:{type:"text"},on:{click:function(e){return t.goDetail(r.id,r.status,r,e)}}},[t._v("\n                  查看\n                ")])],1)]}}],null,!1,3413524294)})],1)],1):a("Empty",{attrs:{"is-search":t.isSearch}}),t.counts>10?a("el-pagination",{staticClass:"pageList",attrs:{"page-sizes":[10,20,30,40],"page-size":t.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.counts},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}}):t._e()],1)]),a("el-dialog",{staticClass:"order-dialog",attrs:{title:"订单信息",visible:t.dialogVisible,width:"53%","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("el-scrollbar",{staticStyle:{height:"100%"}},[a("div",{staticClass:"order-top"},[a("div",[a("div",{staticStyle:{display:"inline-block"}},[a("label",{staticStyle:{"font-size":"16px"}},[t._v("订单号：")]),a("div",{staticClass:"order-num"},[t._v("\n              "+t._s(t.diaForm.number)+"\n            ")])]),a("div",{staticClass:"order-status",class:{status3:[3,4].includes(t.dialogOrderStatus)},staticStyle:{display:"inline-block"}},[t._v("\n            "+t._s(t.orderList.filter((function(e){return e.value===t.dialogOrderStatus}))[0].label)+"\n          ")])]),a("p",[a("label",[t._v("下单时间：")]),t._v(t._s(t.diaForm.orderTime))])]),a("div",{staticClass:"order-middle"},[a("div",{staticClass:"user-info"},[a("div",{staticClass:"user-info-box"},[a("div",{staticClass:"user-name"},[a("label",[t._v("用户名：")]),a("span",[t._v(t._s(t.diaForm.consignee))])]),a("div",{staticClass:"user-phone"},[a("label",[t._v("手机号：")]),a("span",[t._v(t._s(t.diaForm.phone))])]),[2,3,4,5].includes(t.dialogOrderStatus)?a("div",{staticClass:"user-getTime"},[a("label",[t._v(t._s(5===t.dialogOrderStatus?"送达时间：":"预计送达时间："))]),a("span",[t._v(t._s(5===t.dialogOrderStatus?t.diaForm.deliveryTime:t.diaForm.estimatedDeliveryTime))])]):t._e(),a("div",{staticClass:"user-address"},[a("label",[t._v("地址：")]),a("span",[t._v(t._s(t.diaForm.address))])])]),a("div",{staticClass:"user-remark",class:{orderCancel:6===t.dialogOrderStatus}},[a("div",[t._v(t._s(6===t.dialogOrderStatus?"取消原因":"备注"))]),a("span",[t._v(t._s(6===t.dialogOrderStatus?t.diaForm.cancelReason||t.diaForm.rejectionReason:t.diaForm.remark))])])]),a("div",{staticClass:"dish-info"},[a("div",{staticClass:"dish-label"},[t._v("菜品")]),a("div",{staticClass:"dish-list"},t._l(t.diaForm.orderDetailList,(function(e,r){return a("div",{key:r,staticClass:"dish-item"},[a("span",{staticClass:"dish-name"},[t._v(t._s(e.name))]),a("span",{staticClass:"dish-num"},[t._v("x"+t._s(e.number))]),a("span",{staticClass:"dish-price"},[t._v("￥"+t._s(e.amount?e.amount.toFixed(2):""))])])})),0),a("div",{staticClass:"dish-all-amount"},[a("label",[t._v("菜品小计")]),a("span",[t._v("￥"+t._s((t.diaForm.amount-6-t.diaForm.packAmount).toFixed(2)))])])])]),a("div",{staticClass:"order-bottom"},[a("div",{staticClass:"amount-info"},[a("div",{staticClass:"amount-label"},[t._v("费用")]),a("div",{staticClass:"amount-list"},[a("div",{staticClass:"dish-amount"},[a("span",{staticClass:"amount-name"},[t._v("菜品小计：")]),a("span",{staticClass:"amount-price"},[t._v("￥"+t._s(100*(t.diaForm.amount-6-t.diaForm.packAmount).toFixed(2)/100))])]),a("div",{staticClass:"send-amount"},[a("span",{staticClass:"amount-name"},[t._v("派送费：")]),a("span",{staticClass:"amount-price"},[t._v("￥"+t._s(6))])]),a("div",{staticClass:"package-amount"},[a("span",{staticClass:"amount-name"},[t._v("打包费：")]),a("span",{staticClass:"amount-price"},[t._v("￥"+t._s(t.diaForm.packAmount?100*t.diaForm.packAmount.toFixed(2)/100:""))])]),a("div",{staticClass:"all-amount"},[a("span",{staticClass:"amount-name"},[t._v("合计：")]),a("span",{staticClass:"amount-price"},[t._v("￥"+t._s(t.diaForm.amount?100*t.diaForm.amount.toFixed(2)/100:""))])]),a("div",{staticClass:"pay-type"},[a("span",{staticClass:"pay-name"},[t._v("支付渠道：")]),a("span",{staticClass:"pay-value"},[t._v(t._s(1===t.diaForm.payMethod?"微信支付":"支付宝支付"))])]),a("div",{staticClass:"pay-time"},[a("span",{staticClass:"pay-name"},[t._v("支付时间：")]),a("span",{staticClass:"pay-value"},[t._v(t._s(t.diaForm.checkoutTime))])])])])])]),6!==t.dialogOrderStatus?a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[2===t.dialogOrderStatus&&2===t.status?a("el-checkbox",{model:{value:t.isAutoNext,callback:function(e){t.isAutoNext=e},expression:"isAutoNext"}},[t._v("处理完自动跳转下一条")]):t._e(),2===t.dialogOrderStatus?a("el-button",{on:{click:function(e){t.orderReject(t.row,e),t.isTableOperateBtn=!1}}},[t._v("拒 单")]):t._e(),2===t.dialogOrderStatus?a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.orderAccept(t.row,e),t.isTableOperateBtn=!1}}},[t._v("接 单")]):t._e(),[1,3,4,5].includes(t.dialogOrderStatus)?a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("返 回")]):t._e(),3===t.dialogOrderStatus?a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.cancelOrDeliveryOrComplete(3,t.row.id,e)}}},[t._v("派 送")]):t._e(),4===t.dialogOrderStatus?a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.cancelOrDeliveryOrComplete(4,t.row.id,e)}}},[t._v("完 成")]):t._e(),[1].includes(t.dialogOrderStatus)?a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.cancelOrder(t.row,e)}}},[t._v("取消订单")]):t._e()],1):t._e()],1),a("el-dialog",{staticClass:"cancelDialog",attrs:{title:t.cancelDialogTitle+"原因",visible:t.cancelDialogVisible,width:"42%","before-close":function(){return t.cancelDialogVisible=!1,t.cancelReason=""}},on:{"update:visible":function(e){t.cancelDialogVisible=e}}},[a("el-form",{attrs:{"label-width":"90px"}},[a("el-form-item",{attrs:{label:t.cancelDialogTitle+"原因："}},[a("el-select",{attrs:{placeholder:"请选择"+t.cancelDialogTitle+"原因"},model:{value:t.cancelReason,callback:function(e){t.cancelReason=e},expression:"cancelReason"}},t._l("取消"===t.cancelDialogTitle?t.cancelrReasonList:t.cancelOrderReasonList,(function(t,e){return a("el-option",{key:e,attrs:{label:t.label,value:t.label}})})),1)],1),"自定义原因"===t.cancelReason?a("el-form-item",{attrs:{label:"原因："}},[a("el-input",{attrs:{type:"textarea",placeholder:"请填写您"+t.cancelDialogTitle+"的原因（限20字内）",maxlength:"20"},model:{value:t.remark,callback:function(e){t.remark="string"===typeof e?e.trim():e},expression:"remark"}})],1):t._e()],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.cancelDialogVisible=!1,t.cancelReason=""}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.confirmCancel}},[t._v("确 定")])],1)],1)],1)},j=[],S=a("bd86"),k=a("fab1"),x=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.orderId="",t.dialogOrderStatus=0,t.activeIndex=0,t.dialogVisible=!1,t.cancelDialogVisible=!1,t.cancelDialogTitle="",t.cancelReason="",t.remark="",t.diaForm=[],t.row={},t.isAutoNext=!0,t.isSearch=!1,t.counts=0,t.page=1,t.pageSize=10,t.status=2,t.orderData=[],t.isTableOperateBtn=!0,t.cancelOrderReasonList=[{value:1,label:"订单量较多，暂时无法接单"},{value:2,label:"菜品已销售完，暂时无法接单"},{value:3,label:"餐厅已打烊，暂时无法接单"},{value:0,label:"自定义原因"}],t.cancelrReasonList=[{value:1,label:"订单量较多，暂时无法接单"},{value:2,label:"菜品已销售完，暂时无法接单"},{value:3,label:"骑手不足无法配送"},{value:4,label:"客户电话取消"},{value:0,label:"自定义原因"}],t.orderList=[{label:"全部订单",value:0},{label:"待付款",value:1},{label:"待接单",value:2},{label:"待派送",value:3},{label:"派送中",value:4},{label:"已完成",value:5},{label:"已取消",value:6}],t}return Object(u["a"])(e,t),Object(o["a"])(e,[{key:"created",value:function(){this.getOrderListData(this.status)}},{key:"getOrderListData",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var a,r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={page:this.page,pageSize:this.pageSize,status:e},t.next=3,Object(b["c"])(a);case 3:if(r=t.sent,this.orderData=r.data.data.records,this.counts=r.data.data.total,this.$emit("getOrderListBy3Status"),!(2===this.dialogOrderStatus&&2===this.status&&this.isAutoNext&&!this.isTableOperateBtn&&r.data.records.length>1)){t.next=12;break}s=r.data.records[0],this.goDetail(s.id,s.status,s,s),t.next=13;break;case 12:return t.abrupt("return",null);case 13:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"orderAccept",value:function(t,e){var a=this;e.stopPropagation(),this.orderId=t.id,this.dialogOrderStatus=t.status,Object(b["e"])({id:this.orderId}).then((function(t){1===t.data.code?(a.$message.success("操作成功"),a.orderId="",a.dialogVisible=!1,a.getOrderListData(a.status)):a.$message.error(t.data.msg)})).catch((function(t){a.$message.error("请求出错了："+t.message)}))}},{key:"cancelOrder",value:function(t,e){e.stopPropagation(),this.cancelDialogVisible=!0,this.orderId=t.id,this.dialogOrderStatus=t.status,this.cancelDialogTitle="取消",this.dialogVisible=!1,this.cancelReason=""}},{key:"orderReject",value:function(t,e){e.stopPropagation(),this.cancelDialogVisible=!0,this.orderId=t.id,this.dialogOrderStatus=t.status,this.cancelDialogTitle="拒绝",this.dialogVisible=!1,this.cancelReason=""}},{key:"confirmCancel",value:function(t){var e=this;return this.cancelReason?"自定义原因"!==this.cancelReason||this.remark?void("取消"===this.cancelDialogTitle?b["f"]:b["g"])(Object(S["a"])({id:this.orderId},"取消"===this.cancelDialogTitle?"cancelReason":"rejectionReason","自定义原因"===this.cancelReason?this.remark:this.cancelReason)).then((function(t){1===t.data.code?(e.$message.success("操作成功"),e.cancelDialogVisible=!1,e.orderId="",e.getOrderListData(e.status)):e.$message.error(t.data.msg)})).catch((function(t){e.$message.error("请求出错了："+t.message)})):this.$message.error("请输入".concat(this.cancelDialogTitle,"原因")):this.$message.error("请选择".concat(this.cancelDialogTitle,"原因"))}},{key:"cancelOrDeliveryOrComplete",value:function(t,e,a){var r=this;a.stopPropagation();var s={status:t,id:e};(3===t?b["b"]:b["a"])(s).then((function(t){1===t.data.code?(r.$message.success("操作成功"),r.orderId="",r.dialogVisible=!1,r.getOrderListData(r.status)):r.$message.error(t.data.msg)})).catch((function(t){r.$message.error("请求出错了："+t.message)}))}},{key:"goDetail",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e,a,r,s){var n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s.stopPropagation(),this.diaForm=[],this.dialogVisible=!0,this.dialogOrderStatus=a,t.next=6,Object(b["h"])({orderId:e});case 6:n=t.sent,i=n.data,this.diaForm=i.data,this.row=r;case 10:case"end":return t.stop()}}),t,this)})));function e(e,a,r,s){return t.apply(this,arguments)}return e}()},{key:"handleClose",value:function(){this.dialogVisible=!1}},{key:"handleClass",value:function(t){this.activeIndex=t,0===t?(this.status=2,this.getOrderListData(2)):(this.status=3,this.getOrderListData(3))}},{key:"handleTable",value:function(t,e,a){a.stopPropagation(),this.goDetail(t.id,t.status,t,a)}},{key:"handleSizeChange",value:function(t){this.pageSize=t,this.getOrderListData(this.status)}},{key:"handleCurrentChange",value:function(t){this.page=t,this.getOrderListData(this.status)}},{key:"tabList",get:function(){return[{label:"待接单",value:2,num:this.orderStatics.toBeConfirmed},{label:"待派送",value:3,num:this.orderStatics.confirmed}]}}]),e}(v["c"]);Object(d["a"])([Object(v["b"])({default:""})],x.prototype,"orderStatics",void 0),x=Object(d["a"])([Object(v["a"])({name:"Orderview",components:{Empty:k["a"]}})],x);var Y=x,T=Y,R=(a("fd66"),a("697d"),Object(y["a"])(T,w,j,!1,null,"1f6a6e91",null)),F=R.exports,L=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.todayData={},t.overviewData={},t.orderviewData={},t.flag=2,t.tateData=[],t.orderListData=[],t.counts=0,t.page=1,t.pageSize=10,t.status=2,t.orderStatics={},t}return Object(u["a"])(e,t),Object(o["a"])(e,[{key:"created",value:function(){this.init()}},{key:"init",value:function(){var t=this;this.$nextTick((function(){t.getBusinessData(),t.getOrderStatisticsData()}))}},{key:"getBusinessData",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(p["b"])();case 2:e=t.sent,this.overviewData=e.data.data;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"getOrderStatisticsData",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(p["c"])();case 2:e=t.sent,this.orderviewData=e.data.data;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"getOrderListBy3Status",value:function(){var t=this;Object(b["d"])({}).then((function(e){1===e.data.code?t.orderStatics=e.data.data:t.$message.error(e.data.msg)})).catch((function(e){t.$message.error("请求出错了："+e.message)}))}}]),e}(v["c"]);L=Object(d["a"])([Object(v["a"])({name:"Dashboard",components:{Overview:D,OrderList:F}})],L);var B=L,V=B,$=Object(y["a"])(V,r,s,!1,null,null,null);e["default"]=$.exports},cb03:function(t,e,a){t.exports={menuBg:"#343744",menuText:"#bfcbd9",menuActiveText:"#ffc200"}},d9cf:function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return n})),a.d(e,"d",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"f",(function(){return c})),a.d(e,"e",(function(){return l}));a("f576"),a("a481"),a("3b2b"),a("6b54");function r(t,e){var a,r=new Date(e),s={"Y+":r.getFullYear().toString(),"m+":(r.getMonth()+1).toString(),"d+":r.getDate().toString()};for(var n in s)a=new RegExp("("+n+")").exec(t),a&&(t=t.replace(a[1],1==a[1].length?s[n]:s[n].padStart(a[1].length,"0")));return t}var s=function(){var t=new Date((new Date).toLocaleDateString()).getTime(),e=t-864e5,a=e+864e5-1,s=r("YYYY-mm-dd",e),n=r("YYYY-mm-dd",a);return[s,n]},n=function(){var t=new Date((new Date).toLocaleDateString()).getTime(),e=t-864e5,a=r("YYYY.mm.dd",e),s=r("YYYY.mm.dd",t);return[a,s]},i=function(){var t=new Date((new Date).toLocaleDateString()).getTime(),e=t-6048e5,a=t-1,s=r("YYYY-mm-dd",e),n=r("YYYY-mm-dd",a);return[s,n]},o=function(){var t=new Date((new Date).toLocaleDateString()).getTime(),e=t-2592e6,a=t-1,s=r("YYYY-mm-dd",e),n=r("YYYY-mm-dd",a);return[s,n]},c=function(){var t=new Date((new Date).toLocaleDateString()).getTime(),e=(new Date).getDay(),a=t-24*(e-1)*60*60*1e3,s=t+24*(7-e)*60*60*1e3,n=r("YYYY-mm-dd",a),i=r("YYYY-mm-dd",s);return[n,i]},l=function(){var t=(new Date).getFullYear(),e=(new Date).getMonth(),a=new Date(t,e,1).getTime(),s=new Date(t,e+1,0).getTime()+864e5-1,n=r("YYYY-mm-dd",a),i=r("YYYY-mm-dd",s);return[n,i]}},f576:function(t,e,a){"use strict";var r=a("5ca1"),s=a("2e08"),n=a("a25f"),i=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(n);r(r.P+r.F*i,"String",{padStart:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},fab1:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"empty-box"},[r("div",{staticClass:"img-box"},[t.isSearch?r("img",{attrs:{src:a("2235")}}):r("img",{attrs:{src:a("38b8"),alt:""}}),r("p",[t._v(t._s(t.isSearch?"Sorry，木有找到您搜索的内容哦~":"这里空空如也~"))])])])},s=[],n=a("d225"),i=a("308d"),o=a("6bb5"),c=a("4e2b"),l=a("9ab4"),u=a("60a3"),d=function(t){function e(){return Object(n["a"])(this,e),Object(i["a"])(this,Object(o["a"])(e).apply(this,arguments))}return Object(c["a"])(e,t),e}(u["c"]);Object(l["a"])([Object(u["b"])({default:!1})],d.prototype,"isSearch",void 0),d=Object(l["a"])([Object(u["a"])({name:"Empty"})],d);var v=d,p=v,b=(a("be14"),a("2877")),m=Object(b["a"])(p,r,s,!1,null,"399b6bbf",null);e["a"]=m.exports},fd66:function(t,e,a){"use strict";var r=a("8bf2"),s=a.n(r);s.a}}]);
//# sourceMappingURL=chunk-715e9d71.8e1c468e.js.map