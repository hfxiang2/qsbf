(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["product"],{"146f":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"product"},[e("h1",[t._v("This is an product page")]),e("h2",[t._v("hello")]),t._m(0),e("van-button",{attrs:{type:"primary"},on:{click:function(n){t.show=!t.show}}},[t._v("主要按钮")]),e("van-popup",{attrs:{position:"bottom"},model:{value:t.show,callback:function(n){t.show=n},expression:"show"}},[e("van-datetime-picker",{attrs:{type:"date","min-date":t.minDate,formatter:t.formatter},on:{confirm:function(n){return t.nshow()},cancel:function(n){return t.ncancel()}},model:{value:t.currentDate,callback:function(n){t.currentDate=n},expression:"currentDate"}})],1)],1)},c=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"a"},[e("div",{staticClass:"b"})])}],o={name:"product",data:function(){return{show:!1,minDate:new Date(1990,1,1),maxDate:new Date(2019,10,1),currentDate:new Date}},methods:{formatter:function(t,n){return"year"===t?"".concat(n,"年"):"month"===t?"".concat(n,"月"):"day"===t?"".concat(n,"日"):n},nshow:function(){var t=this;this.$dialog.confirm({title:"时间",message:this.currentDate}).then(function(){t.$toast.success("成功了：".concat(t.currentDate))}).catch(function(){t.$toast("已取消")})},ncancel:function(){this.$toast("已取消")}}},r=o,s=(e("df0d"),e("6691")),i=Object(s["a"])(r,a,c,!1,null,null,null);n["default"]=i.exports},d4ef:function(t,n,e){},df0d:function(t,n,e){"use strict";var a=e("d4ef"),c=e.n(a);c.a}}]);
//# sourceMappingURL=product.bbbe7c1f.js.map