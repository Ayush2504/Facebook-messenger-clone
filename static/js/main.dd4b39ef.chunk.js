(this["webpackJsonpfacebook-messenger-clone"]=this["webpackJsonpfacebook-messenger-clone"]||[]).push([[0],{42:function(e,a,t){e.exports=t(66)},47:function(e,a,t){},48:function(e,a,t){},49:function(e,a,t){},66:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),s=t(13),r=t.n(s),c=(t(47),t(28)),m=t(87),l=t(86),i=(t(48),t(88)),u=t(83),p=t(84),d=(t(49),Object(n.forwardRef)((function(e,a){var t=e.user===e.username;return console.log(e.user),console.log(e.username),o.a.createElement("div",{ref:a,className:"message ".concat(t&&"message__user")},o.a.createElement(i.a,{className:t?"message__userCard":"message__guestCard"},o.a.createElement(u.a,null,o.a.createElement(p.a,{color:"white",variant:"h5",component:"h2"},!t&&"".concat(e.username||"Unknown User",": ")," ",e.text))))}))),f=t(27),g=t.n(f),b=g.a.initializeApp({apiKey:"AIzaSyAQC4XPdM664mQWwqEqQ_QiQOoKPMhCdTY",authDomain:"facebook-messenger-clone-9a839.firebaseapp.com",databaseURL:"https://facebook-messenger-clone-9a839.firebaseio.com",projectId:"facebook-messenger-clone-9a839",storageBucket:"facebook-messenger-clone-9a839.appspot.com",messagingSenderId:"167294017746",appId:"1:167294017746:web:5502145c8b7a51c387cd0b",measurementId:"G-HMB7QYH89X"}).firestore(),h=t(39),E=t(38),v=t.n(E),k=t(85);var w=function(){var e=Object(n.useState)(""),a=Object(c.a)(e,2),t=a[0],s=a[1],r=Object(n.useState)([]),i=Object(c.a)(r,2),u=i[0],p=i[1],f=Object(n.useState)(""),E=Object(c.a)(f,2),w=E[0],_=E[1];return Object(n.useEffect)((function(){b.collection("messages").orderBy("timestamp","desc").onSnapshot((function(e){p(e.docs.map((function(e){return{id:e.id,message:e.data()}})))}))}),[]),Object(n.useEffect)((function(){_(prompt("Please enter your name"))}),[]),o.a.createElement("div",{className:"App"},o.a.createElement("img",{src:"https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100"}),o.a.createElement("h1",null,"Hello Everybody \ud83d\ude80 "),o.a.createElement("h2",null,"Welcome ",w),o.a.createElement("form",{className:"app__form"},o.a.createElement(m.a,{className:"app__formControl"},o.a.createElement(l.a,{className:"app__input",placeholder:"Enter a message...",value:t,onChange:function(e){return s(e.target.value)}}),o.a.createElement(k.a,{className:"app__iconButton",disabled:!t,variant:"contained",color:"primary",type:"submit",onClick:function(e){e.preventDefault(),b.collection("messages").add({message:t,username:w,timestamp:g.a.firestore.FieldValue.serverTimestamp()}),s("")}},o.a.createElement(v.a,null)))),o.a.createElement(h.a,null,u.map((function(e){var a=e.id,t=e.message;return o.a.createElement(d,{key:a,user:w,username:t.username,text:t.message})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.dd4b39ef.chunk.js.map