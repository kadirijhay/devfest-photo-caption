(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(19)},16:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),s=a.n(o);a(16),a(17),a(18);var l=function(){return r.a.createElement("header",null,r.a.createElement("p",null,"Devfest Ogbomoso Photo Caption"))},i=a(8),c=a(1),d=a(2),h=a(4),u=a(3),m=a(5),f=a(9),p=a.n(f),v=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleUploadAlt=function(){a.refs.imgUpload.click()},a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"steps-container"},r.a.createElement("label",null,r.a.createElement("span",{className:"label"},"Step 1:"),r.a.createElement("input",{ref:"imgUpload",style:{display:"none"},type:"file",accept:"image/*",onChange:this.props.eventHandler.handleImage})),r.a.createElement("button",{onClick:this.handleUploadAlt},"Upload your Picture"),r.a.createElement("p",{style:{color:"#003E73",fontWeight:"bold"}},"[PS: for best result, upload a square-sized Image]"))}}]),t}(r.a.Component);var g=function(e){return r.a.createElement("form",{onSubmit:e.eventHandler.handleText},r.a.createElement("label",{className:"steps-container"},r.a.createElement("span",{className:"label"},"Step 2:"),r.a.createElement("input",{type:"text",value:e.fullName,name:"fullName",placeholder:"Enter your Name",onChange:e.eventHandler.handleInput})),r.a.createElement("div",{className:"flexbox steps-container"},r.a.createElement("span",{className:"label"},"Step 3:"),r.a.createElement("button",null,"Generate Photo Caption")))},w=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={fullName:"",userUpload:null},a.drawUserImage=function(){var e=a.refs.canvas.getContext("2d"),t=a.refs.userImg;t.onload=function(){if(t.width===t.height)e.clearRect(62,282,370,370),e.drawImage(t,62,282,370,370);else{var a=t.width,n=t.height,r=0;if(t.width<t.height)n=t.width;else if(t.height<t.width){a=t.height,r+=(t.width-a)/2}e.clearRect(62,282,370,370),e.drawImage(t,r,0,a,n,62,282,370,370)}}},a.handleInput=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(i.a)({},n,r))},a.handleImage=function(e){e.preventDefault(),a.setState({userUpload:URL.createObjectURL(e.target.files[0])}),a.drawUserImage()},a.handleText=function(e){e.preventDefault();var t=a.refs.canvas,n=t.getContext("2d"),r=a.state.fullName,o=a.refs.canvasImg,s=a.refs.userImg;if(r){if(n.clearRect(375,0,t.width,t.height),n.drawImage(o,0,0,t.width,t.height),a.state.userUpload)if(s.width===s.height)n.clearRect(62,282,370,370),n.drawImage(s,62,282,370,370);else{var l=s.width,i=s.height,c=0;if(s.width<s.height)i=s.width;else if(s.height<s.width){l=s.height,c+=(s.width-l)/2}n.clearRect(62,282,370,370),n.drawImage(s,c,0,l,i,62,282,370,370)}n.fillText(r.toUpperCase(),484,350,580),a.refs.download.style.display="block"}},a.handleDownload=function(e){var t=a.refs.canvas.toDataURL("image/jpeg"),n=document.createElement("a");n.download="Devfest Ogbomoso.jpg",n.href=t,document.body.appendChild(n),n.click(),document.body.removeChild(n)},a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this.refs.canvas,t=e.getContext("2d"),a=this.refs.canvasImg;t.font="45px arial",t.fillStyle="white",a.onload=function(){t.drawImage(a,0,0,e.width,e.height),t.fillText("[YOUR NAME HERE]",484,350,580)}}},{key:"render",value:function(){return r.a.createElement("div",{className:"row justify-content-md-center"},r.a.createElement("div",{className:"col-md-auto"},r.a.createElement(v,{eventHandler:this}),r.a.createElement(g,{eventHandler:this}),r.a.createElement("div",{ref:"download",className:"flexbox steps-container",style:{display:"none"}},r.a.createElement("span",{className:"label"},"Step 4:"),r.a.createElement("button",{onClick:this.handleDownload},"Download"))),r.a.createElement("div",{className:"col-md-auto"},r.a.createElement("canvas",{ref:"canvas",width:1080,height:1080}),r.a.createElement("img",{style:{display:"none"},ref:"canvasImg",src:p.a,alt:""}),r.a.createElement("img",{style:{display:"none"},ref:"userImg",src:this.state.userUpload,alt:""})))}}]),t}(r.a.Component);var E=function(){return r.a.createElement("footer",null,r.a.createElement("hr",null),r.a.createElement("span",null,"Photo Caption for ",r.a.createElement("a",{href:"https://twitter.com/gdgogbomoso"},"GDG Ogbomoso"),"'s Dvfest 2019"))},y=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={eventDate:new Date("November 16, 2019, 09:00"),currentDate:new Date,daysLeft:"",hoursLeft:"",minutesLeft:"",secondsLeft:""},a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;setInterval(function(){var t=new Date("November 16, 2019, 09:00").getTime()-(new Date).getTime(),a=Math.floor(t/864e5),n=Math.floor(t%864e5/36e5),r=Math.floor(t%36e5/6e4),o=Math.floor(t%6e4/1e3);e.setState({daysLeft:a,hoursLeft:n,minutesLeft:r,secondsLeft:o})},1e3)}},{key:"render",value:function(){var e;return this.state.currentDate>=this.state.eventDate&&(this.state.currentDate>=this.state.eventDate&&this.state.currentDate<=new Date("November 16, 2019, 17:00")?e="Event in Progress...":this.state.currentDate>new Date("November 16, 2019, 17:00")&&(e="Event has ended")),r.a.createElement("div",{className:"col-md-auto countdown"},r.a.createElement("h2",{style:{display:this.state.currentDate>=this.state.eventDate&&"none"}},r.a.createElement("span",{style:{display:0===this.state.daysLeft&&"none"}},r.a.createElement("span",{className:"red"},this.state.daysLeft),"D :"),r.a.createElement("span",{style:{display:0===this.state.daysLeft&&0===this.state.hoursLeft&&"none"}},r.a.createElement("span",{className:"red"}," ",this.state.hoursLeft),"H :"),r.a.createElement("span",{style:{display:0===this.state.daysLeft&&0===this.state.hoursLeft&&0===this.state.minutesLeft&&"none"}},r.a.createElement("span",{className:"red"}," ",this.state.minutesLeft),"M :"),r.a.createElement("span",{style:{display:0===this.state.daysLeft&&0===this.state.minutesLeft&&0===this.state.secondsLeft&&"none"}},r.a.createElement("span",{className:"red"}," ",this.state.secondsLeft),"S"),r.a.createElement("span",null," to go")),r.a.createElement("h2",null,e))}}]),t}(r.a.Component);var b=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(l,null),r.a.createElement(y,null),r.a.createElement(w,null),r.a.createElement(E,null))},D=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function N(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}s.a.render(r.a.createElement(b,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat(".","/service-worker.js");D?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):N(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):N(t,e)})}}()},9:function(e,t,a){e.exports=a.p+"static/media/devfest-photo-caption.3c89e442.jpg"}},[[10,1,2]]]);
//# sourceMappingURL=main.5b4d4740.chunk.js.map