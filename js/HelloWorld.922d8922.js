(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["HelloWorld"],{"04cf":function(t,e,n){},"067f":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search"},[n("van-search",{attrs:{placeholder:"请输入搜索关键词","show-action":""},on:{search:t.onSearch,cancel:t.onCancel},model:{value:t.searchvalue,callback:function(e){t.searchvalue=e},expression:"searchvalue"}}),n("br"),n("div",{staticClass:"textcenter"},[n("van-tag",{directives:[{name:"show",rawName:"v-show",value:0!=t.searchhistory.length,expression:"searchhistory.length!=0"}],attrs:{type:"danger"}},[t._v("历史记录")]),t._l(t.searchhistory,function(e){return n("van-cell",{key:e.index,attrs:{title:e.name}},[n("van-icon",{staticClass:"van-icon",attrs:{slot:"right-icon",name:"cross"},on:{click:function(n){return t.close(e.name)}},slot:"right-icon"})],1)})],2),n("div",{staticClass:"textcenter"},[n("van-tag",{directives:[{name:"show",rawName:"v-show",value:""===t.searchvalue,expression:"searchvalue===''"}],attrs:{type:"danger"}},[t._v("热门推荐")])],1),n("van-list",{directives:[{name:"show",rawName:"v-show",value:""===t.searchvalue,expression:"searchvalue===''"}],attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,function(e){return n("van-cell",{key:e},[n("router-link",{attrs:{to:"/goods"}},[n("van-card",{attrs:{num:"1",tag:"热卖",price:"4.00",desc:"时尚女衣，范冰冰同款",title:"时尚女衣",thumb:t.imageURL,"origin-price":"10.00"}},[n("div",{attrs:{slot:"footer"},slot:"footer"},[n("van-button",{attrs:{size:"mini"}},[t._v("收藏")]),n("van-button",{attrs:{size:"mini"}},[t._v("购买")])],1)])],1)],1)}),1)],1)},s=[],i=(n("cde0"),n("7364"),{name:"search",data:function(){return{searchvalue:"",searchhistory:this.$store.state.searchhistory,list:[],loading:!1,finished:!1,imageURL:this.$store.state.books.imageURL}},methods:{onSearch:function(){var t=this;this.$toast(this.searchvalue);var e=this.searchhistory.some(function(e){if(e.name===t.searchvalue)return!0});if(e)return e;this.searchhistory.push({name:this.searchvalue})},onCancel:function(){this.$router.go(-1)},close:function(t){var e=this.searchhistory.findIndex(function(e){if(e.name===t)return!0});this.searchhistory.splice(e,1)},onLoad:function(){var t=this;setTimeout(function(){for(var e=0;e<5;e++)t.list.push(t.list.length+1);t.loading=!1,t.list.length>=20&&(t.finished=!0)},500)}}}),a=i,r=(n("e96a"),n("6691")),c=Object(r["a"])(a,o,s,!1,null,"431acae0",null);e["default"]=c.exports},"084e":function(t,e,n){},"0bbc":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"shopcar"},[n("van-checkbox-group",{staticClass:"card-goods",model:{value:t.checkedGoods,callback:function(e){t.checkedGoods=e},expression:"checkedGoods"}},t._l(t.goods,function(e){return n("van-checkbox",{key:e.id,staticClass:"card-goods__item",attrs:{name:e.id}},[n("van-card",{attrs:{title:e.title,desc:e.desc,num:e.num,price:t.formatPrice(e.price),thumb:e.thumb}})],1)}),1),n("van-submit-bar",{attrs:{price:t.totalPrice,disabled:!t.checkedGoods.length,"button-text":t.submitBarText},on:{submit:t.onSubmit}})],1)},s=[],i={name:"shopcar",data:function(){return{checkedGoods:["1","2","3"],goods:[{id:"1",title:"进口女朋友",desc:"身高168cm,体重50kg",price:200,num:1,thumb:"https://img.bosszhipin.com/beijin/mcs/useravatar/20181123/5346d99ca60b27c9d34d4d9cb62a54d53b598e7db16c619f5bcca59cd21400c5_s.jpg"},{id:"2",title:"陕西妹子",desc:"身高163cm,体重45kg",price:690,num:1,thumb:"https://img.bosszhipin.com/beijin/mcs/useravatar/20181123/5346d99ca60b27c9d34d4d9cb62a54d53b598e7db16c619f5bcca59cd21400c5_s.jpg"},{id:"3",title:"美国妹子",desc:"身高175cm,体重52kg",price:2680,num:1,thumb:"https://img.bosszhipin.com/beijin/mcs/useravatar/20181123/5346d99ca60b27c9d34d4d9cb62a54d53b598e7db16c619f5bcca59cd21400c5_s.jpg"}]}},computed:{submitBarText:function(){var t=this.checkedGoods.length;return"结算"+(t?"(".concat(t,")"):"")},totalPrice:function(){var t=this;return this.goods.reduce(function(e,n){return e+(-1!==t.checkedGoods.indexOf(n.id)?n.price:0)},0)}},methods:{formatPrice:function(t){return(t/100).toFixed(2)},onSubmit:function(){this.$toast("点击结算")}}},a=i,r=(n("1a2b"),n("6691")),c=Object(r["a"])(a,o,s,!1,null,"8af0a9b0",null);e["default"]=c.exports},"1a2b":function(t,e,n){"use strict";var o=n("f5ec"),s=n.n(o);s.a},"1f98":function(t,e,n){"use strict";var o=n("f425"),s=RegExp.prototype.exec,i=String.prototype.replace,a=s,r="lastIndex",c=function(){var t=/a/,e=/b*/g;return s.call(t,"a"),s.call(e,"a"),0!==t[r]||0!==e[r]}(),u=void 0!==/()??/.exec("")[1],l=c||u;l&&(a=function(t){var e,n,a,l,h=this;return u&&(n=new RegExp("^"+h.source+"$(?!\\s)",o.call(h))),c&&(e=h[r]),a=s.call(h,t),c&&a&&(h[r]=h.global?a.index+a[0].length:e),u&&a&&a.length>1&&i.call(a[0],n,function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(a[l]=void 0)}),a}),t.exports=a},2338:function(t,e,n){var o=n("b2f5"),s=n("2e9a"),i=n("3a68"),a=n("acb9"),r=n("f59b");o(o.S,"Object",{getOwnPropertyDescriptors:function(t){var e,n,o=i(t),c=a.f,u=s(o),l={},h=0;while(u.length>h)n=c(o,e=u[h++]),void 0!==n&&r(l,e,n);return l}})},"2d43":function(t,e,n){var o=n("01f5"),s=n("6462"),i=n("db4b"),a=n("b146"),r=n("5824");t.exports=function(t,e){var n=1==t,c=2==t,u=3==t,l=4==t,h=6==t,d=5==t||h,f=e||r;return function(e,r,v){for(var p,b,m=i(e),g=s(m),x=o(r,v,3),y=a(g.length),w=0,k=n?f(e,y):c?f(e,0):void 0;y>w;w++)if((d||w in g)&&(p=g[w],b=x(p,w,m),t))if(n)k[w]=b;else if(b)switch(t){case 3:return!0;case 5:return p;case 6:return w;case 2:k.push(p)}else if(l)return!1;return h?-1:u||l?l:k}}},"2e9a":function(t,e,n){var o=n("a891"),s=n("f7c1"),i=n("a013"),a=n("3754").Reflect;t.exports=a&&a.ownKeys||function(t){var e=o.f(i(t)),n=s.f;return n?e.concat(n(t)):e}},"2f03":function(t,e,n){var o=n("c481"),s=n("f01a");t.exports=function(t){return function(e,n){var i,a,r=String(s(e)),c=o(n),u=r.length;return c<0||c>=u?t?"":void 0:(i=r.charCodeAt(c),i<55296||i>56319||c+1===u||(a=r.charCodeAt(c+1))<56320||a>57343?t?r.charAt(c):i:t?r.slice(c,c+2):a-56320+(i-55296<<10)+65536)}}},"329b":function(t,e,n){},"34a3":function(t,e,n){"use strict";var o=n("a013"),s=n("db4b"),i=n("b146"),a=n("c481"),r=n("b0f4"),c=n("35dd"),u=Math.max,l=Math.min,h=Math.floor,d=/\$([$&`']|\d\d?|<[^>]*>)/g,f=/\$([$&`']|\d\d?)/g,v=function(t){return void 0===t?t:String(t)};n("629c")("replace",2,function(t,e,n,p){return[function(o,s){var i=t(this),a=void 0==o?void 0:o[e];return void 0!==a?a.call(o,i,s):n.call(String(i),o,s)},function(t,e){var s=p(n,t,this,e);if(s.done)return s.value;var h=o(t),d=String(this),f="function"===typeof e;f||(e=String(e));var m=h.global;if(m){var g=h.unicode;h.lastIndex=0}var x=[];while(1){var y=c(h,d);if(null===y)break;if(x.push(y),!m)break;var w=String(y[0]);""===w&&(h.lastIndex=r(d,i(h.lastIndex),g))}for(var k="",C=0,$=0;$<x.length;$++){y=x[$];for(var _=String(y[0]),S=u(l(a(y.index),d.length),0),D=[],O=1;O<y.length;O++)D.push(v(y[O]));var L=y.groups;if(f){var A=[_].concat(D,S,d);void 0!==L&&A.push(L);var j=String(e.apply(void 0,A))}else j=b(_,d,S,D,L,e);S>=C&&(k+=d.slice(C,S)+j,C=S+_.length)}return k+d.slice(C)}];function b(t,e,o,i,a,r){var c=o+t.length,u=i.length,l=f;return void 0!==a&&(a=s(a),l=d),n.call(r,l,function(n,s){var r;switch(s.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,o);case"'":return e.slice(c);case"<":r=a[s.slice(1,-1)];break;default:var l=+s;if(0===l)return n;if(l>u){var d=h(l/10);return 0===d?n:d<=u?void 0===i[d-1]?s.charAt(1):i[d-1]+s.charAt(1):n}r=i[l-1]}return void 0===r?"":r})}})},"34be":function(t,e,n){"use strict";var o=n("905c"),s=n.n(o);s.a},"35dd":function(t,e,n){"use strict";var o=n("4819"),s=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var i=n.call(t,e);if("object"!==typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==o(t))throw new TypeError("RegExp#exec called on incompatible receiver");return s.call(t,e)}},"3a59":function(t,e,n){"use strict";var o=n("1f98");n("b2f5")({target:"RegExp",proto:!0,forced:o!==/./.exec},{exec:o})},"44c3":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"changemobile"},[n("div",{staticClass:"title"},[t._v("修改号码")]),n("br"),n("van-cell-group",[n("van-field",{attrs:{label:"手机号","left-icon":"envelop-o",placeholder:"请输入手机号",clearable:""},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}}),n("van-field",{attrs:{center:"",clearable:"","left-icon":"envelop-o",label:"短信验证码",placeholder:"请输入短信验证码"},model:{value:t.sms,callback:function(e){t.sms=e},expression:"sms"}},[n("van-button",{attrs:{slot:"button",size:"small",type:"warning",disabled:t.isabled},on:{click:function(e){return t.smst()}},slot:"button"},[t._v(t._s(t.sendtext))])],1)],1),n("br"),n("br"),n("van-button",{attrs:{type:"warning",size:"large"},on:{click:function(e){return t.change()}}},[t._v("保存修改")])],1)},s=[],i=(n("34a3"),{name:"changemobile",data:function(){return{sms:"",sendtext:"获取验证码",isabled:!1,phone:this.$store.state.phone}},methods:{smst:function(){var t=this;this.$toast.success("发送成功"),this.sendtext="重新发送(60)",this.timeOutFunc(60),setTimeout(function(){t.$notify("验证码：123622")},3e3)},timeOutFunc:function(t){var e=this;this.isabled=!0,0!==t?setTimeout(function(){t--,e.sendtext="重新发送("+t+")",e.timeOutFunc(t)},1e3):(this.isabled=!1,this.sendtext="获取验证码")},change:function(){var t=this;this.$dialog.confirm({title:"提示",message:"是否确认修改号码"}).then(function(){t.$toast.success("修改成功"),t.$router.replace("/profile")}).catch(function(){})}}}),a=i,r=(n("b012"),n("6691")),c=Object(r["a"])(a,o,s,!1,null,"3e64aa5c",null);e["default"]=c.exports},5824:function(t,e,n){var o=n("f691");t.exports=function(t,e){return new(o(t))(e)}},"629c":function(t,e,n){"use strict";n("3a59");var o=n("e5ef"),s=n("743d"),i=n("b6f1"),a=n("f01a"),r=n("8b37"),c=n("1f98"),u=r("species"),l=!i(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),h=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var d=r(t),f=!i(function(){var e={};return e[d]=function(){return 7},7!=""[t](e)}),v=f?!i(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[u]=function(){return n}),n[d](""),!e}):void 0;if(!f||!v||"replace"===t&&!l||"split"===t&&!h){var p=/./[d],b=n(a,d,""[t],function(t,e,n,o,s){return e.exec===c?f&&!s?{done:!0,value:p.call(e,n,o)}:{done:!0,value:t.call(n,e,o)}:{done:!1}}),m=b[0],g=b[1];o(String.prototype,t,m),s(RegExp.prototype,d,2==e?function(t,e){return g.call(t,this,e)}:function(t){return g.call(t,this)})}}},"905c":function(t,e,n){},"953e":function(t,e,n){"use strict";var o=n("329b"),s=n.n(o);s.a},a891:function(t,e,n){var o=n("fb6d"),s=n("b4e0").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return o(t,s)}},acb9:function(t,e,n){var o=n("d217"),s=n("7dea"),i=n("3a68"),a=n("5325"),r=n("03b3"),c=n("568a"),u=Object.getOwnPropertyDescriptor;e.f=n("dad2")?u:function(t,e){if(t=i(t),e=a(e,!0),c)try{return u(t,e)}catch(n){}if(r(t,e))return s(!o.f.call(t,e),t[e])}},b012:function(t,e,n){"use strict";var o=n("04cf"),s=n.n(o);s.a},b0f4:function(t,e,n){"use strict";var o=n("2f03")(!0);t.exports=function(t,e,n){return e+(n?o(t,e).length:1)}},b5b8:function(t,e,n){var o=n("94ac");t.exports=Array.isArray||function(t){return"Array"==o(t)}},cde0:function(t,e,n){"use strict";var o=n("b2f5"),s=n("2d43")(6),i="findIndex",a=!0;i in[]&&Array(1)[i](function(){a=!1}),o(o.P+o.F*a,"Array",{findIndex:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),n("644a")(i)},d256:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"profile"},[n("div",{staticClass:"title"},[t._v("个人信息")]),n("br"),n("van-cell-group",[n("van-cell-group",[n("van-field",{attrs:{clearable:"",label:"用户名","left-icon":"contact","right-icon":"question-o",placeholder:"请输入用户名"},on:{"click-right-icon":function(e){return t.$toast("修改用户名称")}},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),n("van-field",{attrs:{"left-icon":"closed-eye",type:"password",label:"密码",clearable:"",placeholder:"请输入密码"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),n("van-field",{attrs:{label:"手机号","left-icon":"phone-o",placeholder:"请输入手机号",disabled:"",center:""},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}},[n("van-button",{attrs:{slot:"button",size:"small",type:"warning"},on:{click:function(e){return t.changemobile()}},slot:"button"},[t._v("修改手机号")])],1),n("van-field",{attrs:{label:"邮箱",clearable:"","left-icon":"envelop-o",placeholder:"请输入邮箱"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1),n("van-popup",{attrs:{position:"bottom"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("van-picker",{attrs:{"show-toolbar":"",title:"性别",columns:t.columns},on:{cancel:t.onCancel,confirm:t.onConfirm}})],1),n("van-popup",{attrs:{position:"bottom"},model:{value:t.showsr,callback:function(e){t.showsr=e},expression:"showsr"}},[n("van-datetime-picker",{attrs:{type:"date","min-date":t.minDate,"max-date":t.maxDate},on:{cancel:t.onCancels,confirm:t.onConfirms},model:{value:t.currentDate,callback:function(e){t.currentDate=e},expression:"currentDate"}})],1),n("van-cell",{attrs:{value:t.sex,icon:"friends-o","is-link":""},on:{click:function(e){return t.change()}}},[n("template",{slot:"title"},[n("div",{staticClass:"van-field__label"},[n("span",[t._v("性别")])])])],2),n("van-cell",{attrs:{value:t.birthday,icon:"clock-o","is-link":""},on:{click:function(e){return t.changes()}}},[n("template",{slot:"title"},[n("div",{staticClass:"van-field__label"},[n("span",[t._v("生日")])])])],2),n("br"),n("br"),n("van-button",{attrs:{type:"warning",size:"large"},on:{click:function(e){return t.save()}}},[t._v("保存信息")])],1)},s=[],i={name:"profile",data:function(){return{minDate:new Date("1900-01-01"),maxDate:new Date,currentDate:new Date(this.$store.state.birthday),username:this.$store.state.username,password:this.$store.state.password,phone:this.$store.state.phone,email:this.$store.state.email,birthday:this.$store.state.birthday,sex:this.$store.state.sex,columns:["男","女"],show:!1,showsr:!1}},methods:{changemobile:function(){this.$router.push({name:"changemobile",params:{phone:this.phone}})},onConfirm:function(t){this.sex=t,this.show=!this.show},onCancel:function(){this.show=!this.show},onConfirms:function(t){this.showsr=!this.showsr;var e=new Date(t),n=e.getFullYear()+"-",o=(e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1)+"-",s=e.getDate()<10?"0"+e.getDate():e.getDate();this.birthday=n+o+s},onCancels:function(){this.$toast("取消"),this.showsr=!this.showsr},change:function(){this.show=!this.show},changes:function(){this.showsr=!this.showsr},save:function(){var t=this;this.$dialog.confirm({title:"提示",message:"是否确认修改信息"}).then(function(){t.$store.state.username=t.username,t.$store.state.password=t.password,t.$store.state.phone=t.phone,t.$store.state.email=t.email,t.$store.state.birthday=t.birthday,t.$store.state.sex=t.sex,t.$toast.success("修改成功"),t.$router.push("/mains")}).catch(function(){})}},beforeRouteLeave:function(t,e,n){this.$store.state.username!=this.username||this.$store.state.password!=this.password||this.$store.state.phone!=this.phone||this.$store.state.email!=this.email||this.$store.state.birthday!=this.birthday||this.$store.state.sex!=this.sex?this.$dialog.confirm({title:"提示",message:"当前修改未保存，是否离开当前页面？"}).then(function(){n()}).catch(function(){n(!1)}):n()}},a=i,r=(n("ef1e"),n("6691")),c=Object(r["a"])(a,o,s,!1,null,"f6dca168",null);e["default"]=c.exports},d9c4:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"coupon"},[n("van-coupon-cell",{attrs:{coupons:t.coupons,"chosen-coupon":t.chosenCoupon},on:{click:function(e){t.showList=!0}}}),n("van-popup",{attrs:{position:"bottom"},model:{value:t.showList,callback:function(e){t.showList=e},expression:"showList"}},[n("van-coupon-list",{attrs:{coupons:t.coupons,"chosen-coupon":t.chosenCoupon,"disabled-coupons":t.disabledCoupons},on:{change:t.onChange,exchange:t.onExchange}})],1)],1)},s=[];n("2338"),n("f763"),n("fb37");function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function r(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function u(t){return a(t)||r(t)||c()}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)}return n}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(n,!0).forEach(function(e){i(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var d={available:1,condition:"无使用门槛\n最多优惠12元",reason:"",value:150,name:"优惠券名称",startAt:1489104e3,endAt:1514592e3,valueDesc:"1.5",unitDesc:"元"},f={name:"coupon",data:function(){return{showList:!1,chosenCoupon:-1,exchangedCoupons:[]}},computed:{coupons:function(){return[this.coupon,this.discountCoupon].concat(u(this.exchangedCoupons))},disabledCoupons:function(){return[this.disabledCoupon,this.disabledDiscountCoupon]},coupon:function(){return{id:1,condition:"无使用门槛\n最多优惠12元",reason:"",value:150,name:d.name,description:d.description,startAt:1489104e3,endAt:1514592e3,valueDesc:"1.5",unitDesc:"元"}},discountCoupon:function(){return h({},this.coupon,{id:2,value:12,valueDesc:"8.8",unitDesc:"折"})},disabledCoupon:function(){return h({},this.coupon,{id:3,reason:d.reason})},disabledDiscountCoupon:function(){return h({},this.discountCoupon,{valueDesc:"1",unitDesc:"折",id:4,reason:d.reason})}},methods:{onChange:function(t){this.showList=!1,this.chosenCoupon=t},onExchange:function(){this.$toast("1111"),this.exchangedCoupons.push(h({},this.coupon,{id:this.randomId()}))},randomId:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:999999;return Math.floor(Math.random()*t)+1}}},v=f,p=n("6691"),b=Object(p["a"])(v,o,s,!1,null,"0c989216",null);e["default"]=b.exports},e96a:function(t,e,n){"use strict";var o=n("084e"),s=n.n(o);s.a},ea22:function(t,e,n){},ece9:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"goods",scopedSlots:t._u([{key:"sku-actions",fn:function(e){return[n("div",{staticClass:"van-sku-actions"},[n("van-button",{attrs:{"bottom-action":""},on:{click:t.onPointClicked}},[t._v("积分兑换")]),n("van-button",{attrs:{type:"primary","bottom-action":""},on:{click:function(t){return e.skuEventBus.$emit("sku:buy")}}},[t._v("买买买")])],1)]}}])},[n("van-swipe",{attrs:{autoplay:3e3},on:{change:t.onChange}},t._l(t.goods.images,function(e,o){return n("van-swipe-item",{key:o},[n("img",{staticClass:"imgs",attrs:{src:e},on:{click:function(e){return t.showDetail()}}})])}),1),n("van-panel",{attrs:{title:t.goods.goodsName,desc:t.goods.description,status:t.goods.price}},[n("div",[n("van-cell-group",[n("van-cell",{attrs:{value:t.goods.num}},[n("template",{slot:"title"},[n("span",{staticClass:"custom-text"},[t._v("剩余数量")]),n("van-tag",{attrs:{type:"danger"}},[t._v(t._s(t.goods.tag))])],1)],2),n("van-cell",{attrs:{title:"运费:",value:t.goods.yunfei}})],1)],1)]),n("van-cell",{attrs:{value:"查看更多商品",icon:"shop-o","is-link":""}},[n("template",{slot:"title"},[n("span",{staticClass:"custom-text"},[t._v("进入店铺")]),n("van-tag",{attrs:{type:"danger"}},[t._v("推荐")])],1)],2),n("van-cell",{attrs:{title:"线下门店",icon:"location-o","is-link":""}}),n("van-goods-action",[n("van-goods-action-mini-btn",{attrs:{icon:"chat-o",text:"客服"}}),n("van-goods-action-mini-btn",{attrs:{info:"5",icon:"cart-o",text:"购物车"}}),n("van-goods-action-mini-btn",{attrs:{icon:"shop-o",text:"店铺"}}),n("van-goods-action-big-btn",{attrs:{text:"加入购物车"}}),n("van-goods-action-big-btn",{attrs:{primary:"",text:"立即购买"},on:{click:function(e){t.showCustomAction=!t.showCustomAction}}})],1),n("van-sku",{attrs:{"stepper-title":"我要买",sku:t.sku,goods:t.goods,"goods-id":t.goods.goodsId,"hide-stock":t.sku.hide_stock,quota:t.quota,"quota-used":t.quotaUsed,"show-add-cart-btn":"","reset-stepper-on-hide":"","initial-sku":t.initialSku},on:{"buy-clicked":t.onBuyClicked,"add-cart":t.onAddCartClicked},model:{value:t.showCustomAction,callback:function(e){t.showCustomAction=e},expression:"showCustomAction"}})],1)},s=[],i=n("6d89"),a={name:"goods",data:function(){return{showCustomAction:!1,goods:this.$store.state.books,index:"",quota:0,quotaUsed:0,initialSku:this.$store.state.initialSku,sku:this.$store.state.sku,skuData:this.$store.state.skuData}},methods:{onChange:function(t){this.index=t},showDetail:function(){Object(i["a"])({images:this.goods.images,startPosition:this.index,onClose:function(){}})},onBuyClicked:function(){this.$toast.success("买买买")},onAddCartClicked:function(){this.$toast.success("已加入购物车")},onPointClicked:function(){this.$toast("积分购买")}}},r=a,c=(n("953e"),n("6691")),u=Object(c["a"])(r,o,s,!1,null,"50e13e44",null);e["default"]=u.exports},ef1e:function(t,e,n){"use strict";var o=n("ea22"),s=n.n(o);s.a},f425:function(t,e,n){"use strict";var o=n("a013");t.exports=function(){var t=o(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},f59b:function(t,e,n){"use strict";var o=n("ddf7"),s=n("7dea");t.exports=function(t,e,n){e in t?o.f(t,e,s(0,n)):t[e]=n}},f5ec:function(t,e,n){},f691:function(t,e,n){var o=n("88dd"),s=n("b5b8"),i=n("8b37")("species");t.exports=function(t){var e;return s(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!s(e.prototype)||(e=void 0),o(e)&&(e=e[i],null===e&&(e=void 0))),void 0===e?Array:e}},f763:function(t,e,n){for(var o=n("dac5"),s=n("cfc7"),i=n("e5ef"),a=n("3754"),r=n("743d"),c=n("14fc"),u=n("8b37"),l=u("iterator"),h=u("toStringTag"),d=c.Array,f={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},v=s(f),p=0;p<v.length;p++){var b,m=v[p],g=f[m],x=a[m],y=x&&x.prototype;if(y&&(y[l]||r(y,l,d),y[h]||r(y,h,m),c[m]=d,g))for(b in o)y[b]||i(y,b,o[b],!0)}},f9f2:function(t,e,n){var o=n("b2f5"),s=n("a4cc"),i=n("b6f1");t.exports=function(t,e){var n=(s.Object||{})[t]||Object[t],a={};a[t]=e(n),o(o.S+o.F*i(function(){n(1)}),"Object",a)}},fb37:function(t,e,n){var o=n("db4b"),s=n("cfc7");n("f9f2")("keys",function(){return function(t){return s(o(t))}})},fdab:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v("VueX")]),n("h3",{staticClass:"title"},[t._v("父子组件传值：父->子")]),n("h3",[t._v(t._s(t.msg))]),n("h3",{staticClass:"title"},[t._v("vuex-getter获取数据this.$store.getter.方法名")]),n("h3",[t._v(t._s(this.$store.state.say+this.$store.getters.NAME))]),n("h3",{staticClass:"title"},[t._v("计数器-mutayion-同步刷新this.$store.commit('方法名')")]),n("button",{on:{click:function(e){return e.preventDefault(),t.add(e)}}},[t._v("+")]),t._v(t._s(" "+this.$store.state.count+" ")),n("button",{on:{click:function(e){return e.preventDefault(),t.del(e)}}},[t._v("-")]),t._v("    \n  "),n("button",{on:{click:function(e){return e.preventDefault(),t.reset(e)}}},[t._v("reset")]),n("h3",{staticClass:"title"},[t._v("action-异步刷新this.$store.dispatch('方法名')")]),n("button",{on:{click:function(e){return e.preventDefault(),t.changes(e)}}},[t._v("action1")]),t._v("     "),n("button",{on:{click:function(e){return e.preventDefault(),t.change(e)}}},[t._v("action2")])])},s=[],i={name:"HelloWorld",props:{msg:String},data:function(){return{}},mounted:function(){},methods:{add:function(){this.$store.commit("ADD")},del:function(){this.$store.commit("DEL")},change:function(){this.$store.dispatch("SUBMIT")},changes:function(){this.$store.dispatch("SUBMITS")},reset:function(){this.$store.commit("RESET")}}},a=i,r=(n("34be"),n("6691")),c=Object(r["a"])(a,o,s,!1,null,"2ce28170",null);e["default"]=c.exports}}]);
//# sourceMappingURL=HelloWorld.922d8922.js.map