(this["webpackJsonpapp-platform-demo-frontend"]=this["webpackJsonpapp-platform-demo-frontend"]||[]).push([[0],{32:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var o=n(1),i=n.n(o),c=n(23),l=n.n(c),s=(n(31),n(32),n(24)),r=n.n(s),d=n(0);const a={background:"white",position:"absolute",left:"15vw",top:"40%",width:"70vw",height:"25vh",border:"1px solid black",textAlign:"center",display:"flex",flexDirection:"column",justifyContent:"center"};function j(e){return Object(d.jsxs)("div",{style:a,children:[Object(d.jsx)("p",{style:{fontWeight:"bold"},children:"You need to sign in first."}),Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{onClick:e.onSignIn,style:{marginRight:"1em"},children:"Sign in"}),Object(d.jsx)("button",{onClick:e.onModalClose,children:"Close"})]})]})}const b={padding:8,backgroundColor:"transparent",width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",textAlign:"center",position:"fixed",top:50,left:0,zIndex:1e3};function x(){return Object(d.jsx)("header",{style:b,children:Object(d.jsxs)("ul",{style:{listStyleType:"none",display:"flex",justifyContent:"center",padding:0,margin:0,width:"100%"},children:[Object(d.jsx)("li",{style:{margin:"0 10px",color:"white",textShadow:"0 0 5px black"},children:Object(d.jsx)("a",{href:"#",target:"_blank",style:{color:"inherit",textDecoration:"none"},children:"Explore"})}),Object(d.jsx)("li",{style:{margin:"0 10px",color:"white",textShadow:"0 0 5px black"},children:Object(d.jsx)("a",{href:"#",target:"_blank",style:{color:"inherit",textDecoration:"none"},children:"Following"})}),Object(d.jsx)("li",{style:{margin:"0 10px",color:"white",textShadow:"0 0 5px black"},children:Object(d.jsx)("a",{href:"#",target:"_blank",style:{color:"inherit",textDecoration:"none"},children:"For You"})})]})})}const p={padding:8,backgroundColor:"rgba(113, 61, 146, 1)",color:"#fbb251",width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",position:"fixed",top:0,left:0,zIndex:1e3},h={backgroundColor:"#fbb251",color:"rgba(113, 61, 146, 1)",border:"none",padding:"8px 16px",cursor:"pointer",fontWeight:"bold",fontSize:"1em",borderRadius:"4px",boxShadow:"2px 2px 4px rgba(0, 0, 0, 0.5)"};function u(e){return Object(d.jsxs)("header",{style:p,children:[Object(d.jsx)("div",{style:{fontWeight:"bold",fontSize:"1.5em",textShadow:"2px 2px 4px rgba(0, 0, 0, 0.5)"},children:" Tube 3.0 "}),Object(d.jsx)("div",{children:null===e.user?Object(d.jsx)("button",{onClick:e.onSignIn,style:h,children:"Sign in"}):Object(d.jsxs)("div",{children:["@",e.user.username," ",Object(d.jsx)("button",{type:"button",onClick:e.onSignOut,children:"Sign out"})]})})]})}var g=n(6);const O={position:"fixed",bottom:0,width:"100%",backgroundColor:"rgba(113, 61, 146, 1)",display:"flex",justifyContent:"space-around",padding:"10px 0",zIndex:1e3},y={color:"#fbb251",fontSize:"24px",cursor:"pointer"},m={position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",backgroundColor:"white",padding:"20px",boxShadow:"0 0 10px rgba(0, 0, 0, 0.1)",zIndex:1001};function w(){const[e,t]=Object(o.useState)(!1);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("nav",{style:O,children:[Object(d.jsx)("div",{style:y,children:Object(d.jsx)(g.c,{})}),Object(d.jsx)("div",{style:y,onClick:()=>{t(!0)},children:Object(d.jsx)(g.a,{})}),Object(d.jsx)("div",{style:y,children:Object(d.jsx)(g.b,{})})]}),e&&Object(d.jsxs)("div",{style:m,children:[Object(d.jsx)("h2",{children:"Create YouTube Video View Campaign"}),Object(d.jsxs)("form",{children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{children:"Video URL:"}),Object(d.jsx)("input",{type:"text"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{children:"Budget:"}),Object(d.jsx)("input",{type:"number"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{children:"Duration:"}),Object(d.jsx)("input",{type:"text"})]}),Object(d.jsx)("button",{type:"button",onClick:()=>{t(!1)},children:"Close"}),Object(d.jsx)("button",{type:"submit",children:"Create Campaign"})]})]})]})}var f=n(25),v=n.n(f);function C(e){return Object(d.jsx)("div",{className:"grid-container",style:{margin:16,padding:16,border:"1px solid gray",borderRadius:8,boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)"},children:Object(d.jsx)("div",{style:{position:"relative",paddingTop:"56.25%"},children:Object(d.jsx)("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},children:Object(d.jsx)(v.a,{url:e.videoURL,controls:!0,width:"100%",height:"100%"})})})})}function S(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(C,{videoURL:"https://www.example.com/video1.mp4",onPlay:()=>console.log("Playing Apple Pie video")}),Object(d.jsx)(C,{videoURL:"https://www.example.com/video2.mp4",onPlay:()=>console.log("Playing Lemon Meringue Pie video")}),Object(d.jsx)(C,{videoURL:"https://www.example.com/video3.mp4",onPlay:()=>console.log("Playing Apple Pie video")}),Object(d.jsx)(C,{videoURL:"https://www.example.com/video4.mp4",onPlay:()=>console.log("Playing Lemon Meringue Pie video")}),Object(d.jsx)(C,{videoURL:"https://www.example.com/video5.mp4",onPlay:()=>console.log("Playing Apple Pie video")}),Object(d.jsx)(C,{videoURL:"https://www.example.com/video6.mp4",onPlay:()=>console.log("Playing Chocolate Cake video")})]})}const k=window,P=k.__ENV&&k.__ENV.backendURL,R=r.a.create({baseURL:"".concat(P),timeout:2e4,withCredentials:!0});function I(){const[e,t]=Object(o.useState)(null),[n,i]=Object(o.useState)(!1),c=async()=>{const e=await window.Pi.authenticate(["username","payments"],r);l(e),t(e.user)},l=e=>(R.post("/user/signin",{authResult:e}),i(!1)),s=()=>R.get("/user/signout"),r=e=>(console.log("onIncompletePaymentFound",e),R.post("/payments/incomplete",{payment:e}));return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(u,{user:e,onSignIn:c,onSignOut:()=>{t(null),s()}}),Object(d.jsx)(x,{}),Object(d.jsx)(S,{}),Object(d.jsx)(w,{}),n&&Object(d.jsx)(j,{onSignIn:c,onModalClose:()=>{i(!1)}})]})}l.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(I,{})}),document.getElementById("root"))}},[[66,15,16]]]);