(function(t){function a(a){for(var r,i,o=a[0],l=a[1],c=a[2],u=0,m=[];u<o.length;u++)i=o[u],s[i]&&m.push(s[i][0]),s[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);p&&p(a);while(m.length)m.shift()();return n.push.apply(n,c||[]),e()}function e(){for(var t,a=0;a<n.length;a++){for(var e=n[a],r=!0,o=1;o<e.length;o++){var l=e[o];0!==s[l]&&(r=!1)}r&&(n.splice(a--,1),t=i(i.s=e[0]))}return t}var r={},s={app:0},n=[];function i(a){if(r[a])return r[a].exports;var e=r[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=r,i.d=function(t,a,e){i.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,a){if(1&a&&(t=i(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var r in t)i.d(e,r,function(a){return t[a]}.bind(null,r));return e},i.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(a,"a",a),a},i.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},i.p="/SmokeDetectorWeb/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=a,o=o.slice();for(var c=0;c<o.length;c++)a(o[c]);var p=l;n.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},1:function(t,a){},"10cd":function(t,a,e){"use strict";var r=e("1814"),s=e.n(r);s.a},1814:function(t,a,e){},3708:function(t,a,e){"use strict";var r=e("6e43"),s=e.n(r);s.a},"56d7":function(t,a,e){"use strict";e.r(a);e("cadf"),e("551c"),e("f751"),e("097d");var r=e("2b0e"),s=e("bb71");e("da64");r["a"].use(s["a"],{iconfont:"md",theme:{primary:"#3F51B5",secondary:"#CE93D8",success:"#3cd1c2",info:"#ffaa2c",error:"#f83e70",gray:"#a0a0a0",black:"#000000",perple:"#9a59aa"}});var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",{staticStyle:{"background-color":"#f2f2f2"}},[e("Navbar"),e("v-content",[e("router-view")],1)],1)},i=[],o=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("nav",[r("v-toolbar",{staticClass:"perple",attrs:{flat:"",app:""}},[r("v-toolbar-side-icon",{staticClass:"red--text hidden-md-and-up",on:{click:function(a){t.drawer=!t.drawer}}}),r("v-toolbar-title",{staticClass:"text-uppercase white--text"},[r("v-avatar",{staticClass:"white-boarder",attrs:{size:"50"}},[r("img",{attrs:{src:e("57cb")}})]),r("router-link",{staticClass:"font-weight-bold mx-2 white--text white--text hidden-xs-only",staticStyle:{"font-family":"'Sarabun', sans-serif",cursor:"pointer"},attrs:{to:"/",tag:"span"}},[t._v("Fire Elephant CMU - ช้างไฟ")])],1),t._l(t.links,function(a){return r("v-btn",{key:a.text,staticClass:"hidden-sm-and-down",staticStyle:{"font-family":"'Sarabun', sans-serif"},attrs:{fluid:"",flat:"",router:"",to:a.route}},[r("v-list-tile-action",[r("v-icon",{staticClass:"white--text",attrs:{right:""}},[t._v(t._s(a.icon))])],1),r("v-list-tile-contant",[r("v-list-tile-title",{staticClass:"white--text",attrs:{left:""}},[t._v("\r\n                    "+t._s(a.text)+"\r\n                ")])],1)],1)}),r("v-spacer"),r("v-btn",{attrs:{small:"",flat:"",color:"gray",href:"https://www.facebook.com/Fire-Elephant-CMU-%E0%B8%8A%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B9%84%E0%B8%9F-406828930104568/"}},[r("span",[r("h3",{staticClass:"white--text hidden-xs-only",staticStyle:{"font-family":"'Sarabun', sans-serif"}},[t._v("ติดต่อเรา")])]),r("img",{attrs:{src:e("5e4f")}})])],2),r("v-navigation-drawer",{staticClass:"gray-lighten",attrs:{app:"",temporary:""},model:{value:t.drawer,callback:function(a){t.drawer=a},expression:"drawer"}},[r("v-layout",{attrs:{column:"","align-center":""}}),r("v-list",t._l(t.links,function(a){return r("v-list-tile",{key:a.text,attrs:{router:"",to:a.route}},[r("v-list-tile-action",[r("v-icon",{staticClass:"grey--text"},[t._v(t._s(a.icon))])],1),r("v-list-tile-contant",[r("v-list-tile-title",{staticClass:"grey--text"},[t._v("\r\n                        "+t._s(a.text)+"\r\n                    ")])],1)],1)}),1)],1)],1)},l=[],c={data:function(){return{drawer:!1,links:[{icon:"place",text:"แผนที่",route:"/"},{icon:"people",text:"ผู้จัดทำ",route:"/team"}]}}},p=c,u=(e("5dfc"),e("0c7c")),m=e("6544"),f=e.n(m),d=e("8212"),v=e("8336"),b=e("132d"),g=e("a722"),h=e("8860"),_=e("ba95"),A=e("40fe"),y=e("5d23"),x=e("f774"),w=e("9910"),C=e("71d9"),k=e("706c"),O=e("2a7f"),S=Object(u["a"])(p,o,l,!1,null,null,null),E=S.exports;f()(S,{VAvatar:d["a"],VBtn:v["a"],VIcon:b["a"],VLayout:g["a"],VList:h["a"],VListTile:_["a"],VListTileAction:A["a"],VListTileTitle:y["a"],VNavigationDrawer:x["a"],VSpacer:w["a"],VToolbar:C["a"],VToolbarSideIcon:k["a"],VToolbarTitle:O["a"]});var V={name:"App",components:{Navbar:E},data:function(){return{}},created:function(){var t=document.createElement("script");t.setAttribute("src","http://api.longdo.com/map/?key=f2bddf86de431afd35f6f7db32664ea1"),document.head.appendChild(t)},mounted:function(){},methods:{}},M=V,j=e("7496"),T=e("549c"),F=Object(u["a"])(M,n,i,!1,null,null,null),I=F.exports;f()(F,{VApp:j["a"],VContent:T["a"]});var L=e("8c4f"),B=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("v-flex",[r("div",{staticStyle:{position:"absolute",width:"100%",height:"100%",top:"0",bottom:"0"},attrs:{id:"map"}}),r("v-flex",[r("v-card",{staticClass:"ma-3 bottom-left perple",attrs:{xs2:"",sm2:"",lg2:""}},[r("h4",{staticClass:"heading white--text"},[t._v("\n                คำอธิบายความหมายของหมุด\n            ")]),r("img",{staticStyle:{"font-family":"'Sarabun', sans-serif"},attrs:{src:e("bca2")}})])],1)],1)},U=[],D=e("bc3a"),P=e.n(D),R=P.a,N={install:function(t,a){t.prototype.$axios=P.a}},W=e("6c39"),X=e.n(W),Z=e("28dd"),G=e("5118");r["a"].component("vue-friendly-iframe",X.a);var H={data:function(){return{data_get:{},test:"text",map:{},markers:new Array,long:new Array,lati:new Array,fire_stat:new Array,lati_trans:new Array,long_trans:new Array,trans:new Array,enable:new Array,status_v:new Array,detectors_id:new Array,smoke_v:new Array,Leng:{},temp:{}}},methods:{axiosTest:function(){return R.get("http://202.28.247.52/api/v1/details/devices").then(function(t){return t.data})},myFunctionOnLoad:function(){console.log("call on load...")},getMap:function(){var t=document.createElement("script");t.setAttribute("src","http://api.longdo.com/map/?key=3024cbe278e024cf2503cd2e87002a2d"),document.head.appendChild(t)},createMarker:function(t,a,e,r){this.temp=this.lati_trans[t],this.tooltips_msg="last lat : "+this.temp+" <br>",this.temp=this.long_trans[t],this.tooltips_msg=this.tooltips_msg+"last long : "+this.temp+" <br>",this.temp=this.status_v[t],this.tooltips_msg=this.tooltips_msg+"last status trans : "+this.temp+" <br>",this.temp=this.detectors_id[t],this.tooltips_msg=this.tooltips_msg+" Detector id : "+this.temp+" <br>",this.temp=0!=this.fire_stat[t],this.tooltips_msg=this.tooltips_msg+" fire status : "+this.temp+" <br>",this.temp=0!=this.enable[t],this.tooltips_msg=this.tooltips_msg+" Detector available : "+this.temp+" <br>",this.temp=this.smoke_v[t],this.tooltips_msg=this.tooltips_msg+" Smoke value : "+this.temp+" <br>";var s=new longdo.Marker({lon:a,lat:e},{icon:{url:r},popup:{html:"<div id='tooltips-div' >"+this.tooltips_msg+"</div>"}});this.map.Overlays.add(s)},init:function(){this.map=new longdo.Map({placeholder:document.getElementById("map")}),this.myTimer()},myTimer:function(){var t=this;new Array,new Array,new Array,new Array,new Array,new Array,new Array,new Array,new Array,new Array,new Array,this.data_get.then(function(a){console.log(a),t.map.Overlays.clear();for(var e=0;e<a.data.length;e++)t.status_v.push(a.data[e].status),t.enable.push(a.data[e].available_status),t.long.push(a.data[e].longitude),t.lati.push(a.data[e].latitude),t.fire_stat.push(a.data[e].fire_status),t.lati_trans.push(a.data[e].latitude_trans),t.long_trans.push(a.data[e].longitude_trans),t.detectors_id.push(a.data[e].detector_id),t.smoke_v.push(a.data[e].smoke_v);for(var r=0;r<a.data.length;r++)9==t.status_v[r]?t.createMarker(r,t.long[r],t.lati[r],"http://maps.google.com/mapfiles/ms/micons/green-dot.png"):null!=t.status_v[r]&&(t.fire_stat[r]>0?1==t.fire_stat[r]?t.createMarker(r,t.long[r],t.lati[r],"http://maps.google.com/mapfiles/ms/micons/yellow-dot.png"):2==t.fire_stat[r]?t.createMarker(r,t.long[r],t.lati[r],"http://maps.google.com/mapfiles/ms/micons/red-dot.png"):t.createMarker(r,t.long[r],t.lati[r],"http://maps.google.com/mapfiles/ms/micons/pink-dot.png"):0==t.enable[r]?t.createMarker(r,t.long_trans[r],t.lati_trans[r],"http://maps.google.com/mapfiles/kml/pal3/icon51.png","Test5"):parseFloat(parseInt(1e3*t.lati[r])/1e3,10)!=parseFloat(parseInt(1e3*t.lati_trans[r])/1e3,10)?t.createMarker(r,t.long[r],t.lati[r],"http://maps.google.com/mapfiles/ms/micons/bus.png"):t.createMarker(r,t.long[r],t.lati[r],"http://maps.google.com/mapfiles/ms/micons/green-dot.png"))})}},created:function(){var t=this;setTimeout(function(){t.data_get=Promise.resolve(t.axiosTest()),t.init()},2e3),Object(G["setInterval"])(function(){t.data_get=Promise.resolve(t.axiosTest()),t.map.Overlays.clear(),t.myTimer()},1e4)},mounted:function(){}},K=H,Y=(e("10cd"),e("b0af")),q=e("0e8f"),z=Object(u["a"])(K,B,U,!1,null,null,null),J=z.exports;f()(z,{VCard:Y["a"],VFlex:q["a"]});var Q=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("v-container",{staticStyle:{"font-family":"'Sarabun', sans-serif"}},[r("v-layout",{staticClass:"mt-1 mb-5 text-xs-left",attrs:{wrap:"",xs12:"",sm6:"",md3:""}},[r("v-flex",{attrs:{xs12:"",sm6:"",md3:"",wrap:""}},[r("h3",{staticClass:"black--text"},[t._v("ที่ปรึกษาโครงการ")]),r("span",{staticClass:"black--text"},[t._v("1. อาจารย์ รศ.ดร.ศันสนีย์ เอื้อพันธ์วิริยะกุล\r\n          "),r("br"),t._v("2. อาจารย์ รศ.ดร.นิพนธ์ ธีรอำพน\r\n        ")]),r("h3",{staticClass:"black--text"},[t._v("ฝ่ายประสานงานและประชาสัมพันธ์")]),r("span",{staticClass:"black--text"},[t._v("1. พนาสนฑ์ มโนรส\r\n          "),r("br"),t._v("2. พรวิชชา​ สมทรัพย์\r\n          "),r("br"),t._v("3. รวีวรรณ ชัยสุพัฒนากุล\r\n          "),r("br"),t._v("4. สุภชาญา ประธาน\r\n          "),r("br"),t._v("5. กานต์ชนา ปัญญา\r\n          "),r("br"),t._v("6. ว่าที่ ร.ต.หญิงพรสวรรค์ อัศววุฒิไกร\r\n        ")])]),r("v-flex",{attrs:{xs12:"",sm6:"",md3:"",wrap:""}},[r("h3",{staticClass:"black--text"},[t._v("อาสาสมัครติดตั้งเครื่องตรวจจับควันไฟ")]),r("span",{staticClass:"black--text"},[t._v("1. ปกรณ์ แสงงาม\r\n          "),r("br"),t._v("2. ณัฐพงษ์ ปัญญา\r\n          "),r("br"),t._v("3. ปิยะณัฐ บุหรัน\r\n          "),r("br"),t._v("4. สุภชาญา ประธาน\r\n          "),r("br"),t._v("5. ธนาคม หัสแดง\r\n          "),r("br"),t._v("6. วิธวินท์ อัจฉริยวิริยะ\r\n          "),r("br"),t._v("7. พนาสนฑ์ มโนรส\r\n          "),r("br"),t._v("8. ณัฐภัทร การะเกษ"),r("br"),t._v("9. Wassim TENACHI"),r("br"),t._v("10. Méline KIEFFER\r\n          "),r("br"),t._v("11. Lucas LO GIUDICE\r\n          "),r("br"),t._v("12. Nathn MANISCALCO\r\n          "),r("br"),t._v("13. Zegui FOKY\r\n          "),r("br"),t._v("14. Mourad EL OUALKADI\r\n          "),r("br"),t._v("15. ภาณุวิทย์ ผลเกิด\r\n          "),r("br"),t._v("16. พรวิชชา​ สมทรัพย์\r\n          "),r("br")])]),r("v-flex",{attrs:{xs12:"",sm6:"",md3:"",wrap:""}},[r("h3",{staticClass:"black--text"},[t._v("ผู้พัฒนาอุปกรณ์ Smoke Detectors")]),r("span",{staticClass:"black--text"},[t._v("1. สมนึก สุระธง\r\n          "),r("br"),t._v("2. จักรภพ ใหม่เสน\r\n          "),r("br"),t._v("3. ฤทธิพงศ์ วงค์เขื่อนแก้ว\r\n          "),r("br"),t._v("4. กิตติยา ทุ่นศิริ\r\n          "),r("br"),t._v("5. สุรักษ์ อุดมสม\r\n          "),r("br"),t._v("6. พนาสนฑ์ มโนรส\r\n          "),r("br"),t._v("7. ณัฐภัทร การะเกษ\r\n          "),r("br"),t._v("8. พรวิชชา​ สมทรัพย์\r\n          "),r("br"),t._v("9. สุภชาญา ประธาน\r\n          "),r("br"),t._v("10. ธนาคม หัสแดง\r\n          "),r("br"),t._v("11. ปกรณ์ แสงงาม\r\n          "),r("br"),t._v("12. อภิวัฒน์ บุตรวงค์\r\n        ")])]),r("v-flex",{attrs:{xs12:"",sm6:"",md3:"",wrap:""}},[r("h3",{staticClass:"black--text"},[t._v("ผู้พัฒนาซอฟต์แวร์เว็บไซต์และอัลกอริทึมเบื้องหลัง")]),r("span",{staticClass:"black--text"},[t._v("1. ภาณุวิทย์ ผลเกิด\r\n          "),r("br"),t._v("2. ณัฐภัทร การะเกษ\r\n          "),r("br"),t._v("3. พรวิชชา​ สมทรัพย์\r\n          "),r("br"),t._v("4. รัชชานนท์ สมทา\r\n          "),r("br"),t._v("5. นันทวัฒน์ วิเศษทรัพย์\r\n        ")])])],1),r("v-flex",{staticClass:"text-xs-left",attrs:{xs12:"","mb-3":""}},[r("h3",{staticClass:"black--text"},[t._v("ออกแบบโลโก้โดย")]),r("span",{staticClass:"black--text"},[t._v("สุชาดา ยอดอยู่ดี และ ปัณณวิชญ์ พันธ์วงศ์")]),r("h3",{staticClass:" black--text"},[t._v("ขอขอบคุณพิเศษ")]),r("span",{staticClass:"black--text"},[t._v("พี่น้อง ผู้ใหญ่บ้านดงช้างแก้ว, พี่แอน  รองผู้ใหญ่บ้านดงช้างแก้ว, พี่แนน  ผู้ประสานงาน และเจ้าหน้าที่ที่ไม่ได้เอ่ยนาม ที่คอยช่วยเหลือและประสานงานในการติดตั้งเครื่องตรวจจับไฟป่าที่เสมิงใต้")])]),r("v-divider"),r("h2",{staticClass:"black--text text-xs-left font-weight-bold"},[t._v("Sponsored by")]),r("v-layout",{attrs:{row:"","justify-center":""}},[r("v-img",{staticClass:"ma-3 team",attrs:{contain:"","aspect-ratio":"1",src:e("d274")}}),r("v-img",{staticClass:"ma-3 team",attrs:{contain:"","aspect-ratio":"1",src:e("73a7")}}),r("v-img",{staticClass:"ma-3 team",attrs:{contain:"","aspect-ratio":"1",src:e("6391")}}),r("v-img",{staticClass:"ma-3 team",attrs:{contain:"","aspect-ratio":"1",src:e("f24a")}})],1)],1)},$=[],tt={data:function(){return{}}},at=tt,et=(e("3708"),e("a523")),rt=e("ce7e"),st=e("adda"),nt=Object(u["a"])(at,Q,$,!1,null,null,null),it=nt.exports;f()(nt,{VContainer:et["a"],VDivider:rt["a"],VFlex:q["a"],VImg:st["a"],VLayout:g["a"]}),r["a"].use(L["a"]);var ot=new L["a"]({mode:"history",base:"/SmokeDetectorWeb/",routes:[{path:"/",name:"project",component:J},{path:"/team",name:"team",component:it}]});r["a"].config.productionTip=!1,r["a"].use(Z["a"]),r["a"].use(N),new r["a"]({router:ot,render:function(t){return t(I)}}).$mount("#app")},"57cb":function(t,a,e){t.exports=e.p+"img/logo.46fc0842.jpg"},"5dfc":function(t,a,e){"use strict";var r=e("5eeb"),s=e.n(r);s.a},"5e4f":function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAL2AAAC9gH/U2/cAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAIFQTFRF////M2aZOl2XOlqaOliZPFmYOliZPFqXO1mYO1mYO1mYO1mYO1mYPVuZQF2aRWGdS2egUGujUm2kVG6laH+waoGxbYOycYe0coi1eI24fpK7f5K8f5O8hZe/jJ7Djp/El6fIp7XRvsjd5+vy7fD27vH28PL38/X5+fr8/f7+////Jc+68wAAAAx0Uk5TAAUWMEtqf4Cy0Ob69Vq7RgAAAL9JREFUKM91klkWgyAMRVExItDBDlZrBzu32f8CazEg9Oj7glzICwmM9Yo5CCkF8Jj5ijKlSQqiIZ7k2lOe2HiqdCCV0nkbX5RNUxhi7kQ2z+GNiHWf7eeTUXz2RAc0dHXaRFvEz2lfkE3MuLU8It6GAjgDWpUXxEdVLbXNJWh1R6MNbQWTIVjTVjpwviK+2nbugBg3F878D8B0ue6BAege6FoSAPCa6APTRNt2D6jEH9SqrnfhoKZHO/0Zxr7PF9/hHMce6zj3AAAAAElFTkSuQmCC"},"5eeb":function(t,a,e){},6391:function(t,a,e){t.exports=e.p+"img/Chiang_Mai_University_Logo.3ef65079.png"},"6e43":function(t,a,e){},"73a7":function(t,a,e){t.exports=e.p+"img/AIS-logo-1.1a709e1a.png"},bca2:function(t,a,e){t.exports=e.p+"img/pin.d2c6a180.png"},d274:function(t,a,e){t.exports=e.p+"img/CILab_logo.9e2501ff.png"},f24a:function(t,a,e){t.exports=e.p+"img/logo-th.ae61ceff.png"}});
//# sourceMappingURL=app.954b9a9f.js.map