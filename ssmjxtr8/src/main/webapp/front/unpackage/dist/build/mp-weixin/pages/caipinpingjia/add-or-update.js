(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/caipinpingjia/add-or-update"],{1327:function(n,e,i){"use strict";i.r(e);var t=i("c3ff"),a=i.n(t);for(var r in t)"default"!==r&&function(n){i.d(e,n,(function(){return t[n]}))}(r);e["default"]=a.a},"27ef":function(n,e,i){"use strict";i.r(e);var t=i("a134"),a=i("1327");for(var r in a)"default"!==r&&function(n){i.d(e,n,(function(){return a[n]}))}(r);i("ce50");var u,o=i("f0c5"),c=Object(o["a"])(a["default"],t["b"],t["c"],!1,null,"6e179a16",null,!1,t["a"],u);e["default"]=c.exports},7701:function(n,e,i){},8830:function(n,e,i){"use strict";(function(n){i("d8ec");t(i("66fd"));var e=t(i("27ef"));function t(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,i("543d")["createPage"])},a134:function(n,e,i){"use strict";var t;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return t}));var a=function(){var n=this,e=n.$createElement;n._self._c},r=[]},c3ff:function(n,e,i){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=a(i("a34a"));function a(n){return n&&n.__esModule?n:{default:n}}function r(n,e,i,t,a,r,u){try{var o=n[r](u),c=o.value}catch(f){return void i(f)}o.done?e(c):Promise.resolve(c).then(t,a)}function u(n){return function(){var e=this,i=arguments;return new Promise((function(t,a){var u=n.apply(e,i);function o(n){r(u,t,a,o,c,"next",n)}function c(n){r(u,t,a,o,c,"throw",n)}o(void 0)}))}}var o=function(){Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(function(){return resolve(i("148f"))}.bind(null,i)).catch(i.oe)},c={data:function(){return{ruleForm:{dingdanbianhao:"",caipinmingcheng:"",caipinfenlei:"",pingfen:"",tianjiatupian:"",pingjianeirong:"",pingjiariqi:"",yonghuming:"",lianxidianhua:"",sfsh:"",shhf:"",userid:""},pingfenOptions:[],pingfenIndex:0,user:{},ro:{dingdanbianhao:!1,caipinmingcheng:!1,caipinfenlei:!1,pingfen:!1,tianjiatupian:!1,pingjianeirong:!1,pingjiariqi:!1,yonghuming:!1,lianxidianhua:!1,sfsh:!1,shhf:!1,userid:!1}}},components:{wPicker:o},computed:{},onLoad:function(e){var i=this;return u(t.default.mark((function a(){var r,u,o,c;return t.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=n.getStorageSync("nowTable"),a.next=3,i.$api.session(r);case 3:if(u=a.sent,i.user=u.data,i.pingfenOptions="1,2,3,4,5".split(","),i.ruleForm.userid=n.getStorageSync("userid"),e.refid&&(i.ruleForm.refid=e.refid),!e.id){a.next=14;break}return i.ruleForm.id=e.id,a.next=12,i.$api.info("caipinpingjia",i.ruleForm.id);case 12:u=a.sent,i.ruleForm=u.data;case 14:if(!e.cross){a.next=61;break}o=n.getStorageSync("crossObj"),a.t0=t.default.keys(o);case 17:if((a.t1=a.t0()).done){a.next=61;break}if(c=a.t1.value,"dingdanbianhao"!=c){a.next=23;break}return i.ruleForm.dingdanbianhao=o[c],i.ro.dingdanbianhao=!0,a.abrupt("continue",17);case 23:if("caipinmingcheng"!=c){a.next=27;break}return i.ruleForm.caipinmingcheng=o[c],i.ro.caipinmingcheng=!0,a.abrupt("continue",17);case 27:if("caipinfenlei"!=c){a.next=31;break}return i.ruleForm.caipinfenlei=o[c],i.ro.caipinfenlei=!0,a.abrupt("continue",17);case 31:if("pingfen"!=c){a.next=35;break}return i.ruleForm.pingfen=o[c],i.ro.pingfen=!0,a.abrupt("continue",17);case 35:if("tianjiatupian"!=c){a.next=39;break}return i.ruleForm.tianjiatupian=o[c],i.ro.tianjiatupian=!0,a.abrupt("continue",17);case 39:if("pingjianeirong"!=c){a.next=43;break}return i.ruleForm.pingjianeirong=o[c],i.ro.pingjianeirong=!0,a.abrupt("continue",17);case 43:if("pingjiariqi"!=c){a.next=47;break}return i.ruleForm.pingjiariqi=o[c],i.ro.pingjiariqi=!0,a.abrupt("continue",17);case 47:if("yonghuming"!=c){a.next=51;break}return i.ruleForm.yonghuming=o[c],i.ro.yonghuming=!0,a.abrupt("continue",17);case 51:if("lianxidianhua"!=c){a.next=55;break}return i.ruleForm.lianxidianhua=o[c],i.ro.lianxidianhua=!0,a.abrupt("continue",17);case 55:if("userid"!=c){a.next=59;break}return i.ruleForm.userid=o[c],i.ro.userid=!0,a.abrupt("continue",17);case 59:a.next=17;break;case 61:i.styleChange();case 62:case"end":return a.stop()}}),a)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},pingjiariqiChange:function(n){this.ruleForm.pingjiariqi=n.target.value,this.$forceUpdate()},pingfenChange:function(n){this.pingfenIndex=n.target.value,this.ruleForm.pingfen=this.pingfenOptions[this.pingfenIndex]},tianjiatupianTap:function(){var n=this;this.$api.upload((function(e){n.ruleForm.tianjiatupian=n.$base.url+"upload/"+e.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return u(t.default.mark((function e(){return t.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n.ruleForm.userid){e.next=3;break}return n.$utils.msg("用户id不能为空"),e.abrupt("return");case 3:if(!n.ruleForm.id){e.next=8;break}return e.next=6,n.$api.update("caipinpingjia",n.ruleForm);case 6:e.next=10;break;case 8:return e.next=10,n.$api.add("caipinpingjia",n.ruleForm);case 10:n.$utils.msgBack("提交成功");case 11:case"end":return e.stop()}}),e)})))()},optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var e=new Date,i=e.getFullYear(),t=e.getMonth()+1,a=e.getDate();return"start"===n?i-=60:"end"===n&&(i+=2),t=t>9?t:"0"+t,a=a>9?a:"0"+a,"".concat(i,"-").concat(t,"-").concat(a)},toggleTab:function(n){this.$refs[n].show()}}};e.default=c}).call(this,i("543d")["default"])},ce50:function(n,e,i){"use strict";var t=i("7701"),a=i.n(t);a.a}},[["8830","common/runtime","common/vendor"]]]);