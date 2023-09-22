import{n as i,t as f,r as x,j as r,x as z,P as A,u as O,e as H,h as N,G as P,C as q,a as G}from"./index-acbfb6d2.js";import{H as J}from"./Header-e2ef3be9.js";import{b as U}from"./index.esm-a3089d17.js";import{G as W}from"./iconBase-ba99b2ff.js";import"./index.esm-2307de67.js";function Y(e){return W({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M1 1.91L1.78 1.5L15 7.44899V8.3999L1.78 14.33L1 13.91L2.58311 8L1 1.91ZM3.6118 8.5L2.33037 13.1295L13.5 7.8999L2.33037 2.83859L3.6118 7.43874L9 7.5V8.5H3.6118Z"}}]})(e)}const Z=i.div`
width: ${f.breakpoints.mobile}px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
height:665px;
      overflow: auto;
      -ms-overflow-style: none;
      scrollbar-width: none;
&::-webkit-scrollbar {
      width: 0;
      height: 0;
}
`,K=i.ul`
width:100%;
align-items:flex-start;

`,Q=i.li`
list-style: none;
display:flex;
flex-direction:${e=>e.owner?"row-reverse":"row"};
margin-top:12px;
`,X=i.div`
position:relative;
width: 32px;
height: 32px;
margin-right:${e=>e.owner?"0":"12px"};
margin-left:${e=>e.owner?"12px":"0"};
`,_=i.div`
opacity:${e=>e.repeatMsg?"1":"0"};
border-radius:50%;
overflow:hidden;

`,ee=i.img`
display:block;
width:100%;
height:auto;
`,te=i.div`
width: 10px;
height: 10px;
background-color:#34C759;
position:absolute;
bottom:0;
right:0;
border: 1px solid white;
border-radius:50%;

`,re=i.div`
width:60%;
height:auto;
 word-wrap: break-word;
padding:4px 8px;
background-color:${e=>e.owner?"#007AFF":"#F2F2F7"};
/* border-radius:${e=>{if(e.owner)return"6px 0px 6px 6px";if(e.repeatMsg&&e.owner||e.repeatMsg&&!e.owner)return"6px 6px 6px 6px";if(!e.owner)return"0px 6px 6px 6px"}}; */
border-radius:${e=>e.owner?"6px 0px 6px 6px":"0px 6px 6px 6px"};
`,ne=i.p`
margin-bottom:8px;
font-family:'Segoe-Regular';
font-size:${f.fontSizes.s};
font-weight:600;
color:${f.colors.main};
`,oe=i.p`

font-family:'Segoe-Regular';
font-size:${f.fontSizes.s};
font-weight:400;
color:${e=>e.owner?"white":f.colors.main};
`,se=i.p`
margin-top:4px;
font-family:'Segoe-Regular';
font-size:${f.fontSizes.xs};
font-weight:400;
color:${e=>e.owner?"white":"#666668"};
text-align: right;
`,ae=i.span`
/* margin-top:4px; */
position:absolute;
font-family:'Segoe-Regular';
font-size:${f.fontSizes.xs};
font-weight:400;
color:"#666668";
border:1px solid #D3D3D3;
border-radius:20px;
padding:4px 8px;
top: 50%;
left: 50%; 
transform: translate(-50%, -50%); 
background-color:#FAFAFA;
`,ie=i.div`
position:relative;
margin-top:26px;
margin-bottom:26px;
`,ce=({messages:e})=>{const t=x.useRef(),n=()=>{t.current.scrollIntoView({behavior:"smooth",block:"end"})};x.useEffect(()=>{n()},[e]);function o(s){const u=String(s.getDate()).padStart(2,"0"),p=String(s.getMonth()+1).padStart(2,"0"),S=s.getFullYear();return`${u}-${p}-${S}`}const a=new Date,c=new Date(a);c.setDate(a.getDate()-1);const l=o(a),h=o(c),g=s=>s===l?"today":s===h?"yesterday":s,d=e.reduce((s,u)=>{const p=o(u.date);return s[p]||(s[p]=[]),s[p].push(u),s},{});return r.jsx(Z,{children:r.jsx(K,{ref:t,children:Object.keys(d).map(s=>r.jsxs("div",{children:[r.jsxs(ie,{children:[r.jsx(ae,{children:g(s)}),r.jsx("hr",{})]}),r.jsx("ul",{children:d[s].map((u,p,S)=>p>0&&u.name===S[p-1].name?r.jsx(L,{repeatMsg:!1,el:u},u.id):r.jsx(L,{repeatMsg:!0,el:u},u.id))})]},s))})})},L=({el:e,repeatMsg:t})=>{function n(o){const a=o.getHours(),c=o.getMinutes(),l=a>=12?"PM":"AM";return`${a%12===0?12:a%12}:${c<10?"0":""}${c} ${l}`}return r.jsxs(Q,{owner:e.owner,children:[r.jsxs(X,{owner:e.owner,children:[r.jsx(_,{repeatMsg:t,children:r.jsx(ee,{src:e.image,alt:e.name})}),e.isOnline&&t&&r.jsx(te,{})]}),r.jsxs(re,{repeatMsg:t,owner:e.owner,children:[!e.owner&&r.jsx(ne,{children:e.name}),r.jsx(oe,{owner:e.owner,children:e.text}),r.jsx(se,{owner:e.owner,children:n(e.date)})]})]})},le=i.div`
  width: ${f.breakpoints.mobile}px;
position:relative;
padding-bottom:20px;
background-color:${f.colors.white};
`,ue=i.div`
display:flex;
align-items:center;
justify-content:center;
position:absolute;
top:8px;
right:12px
`,de=i.input`
width:100%;
/* padding:6px 6px 0 32px  ; */
padding-top:6px;
padding-bottom:6px;
padding-right:72px;
font-family:'Segoe-Regular';
font-size:${f.fontSizes.s};
font-weight:400;
color:${f.colors.main};
border:none;
&:focus{
border:none;
outline:none
}
`,E=i.button`
&:first-of-type{
    margin-right:16px;
}
`;var R={exports:{}},j=1;function fe(){return j=(j*9301+49297)%233280,j/233280}function pe(e){j=e}var he={nextValue:fe,seed:pe},M=he,w="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-",m,I,v;function k(){v=!1}function T(e){if(!e){m!==w&&(m=w,k());return}if(e!==m){if(e.length!==w.length)throw new Error("Custom alphabet for shortid must be "+w.length+" unique characters. You submitted "+e.length+" characters: "+e);var t=e.split("").filter(function(n,o,a){return o!==a.lastIndexOf(n)});if(t.length)throw new Error("Custom alphabet for shortid must be "+w.length+" unique characters. These characters were not unique: "+t.join(", "));m=e,k()}}function ge(e){return T(e),m}function xe(e){M.seed(e),I!==e&&(k(),I=e)}function me(){m||T(w);for(var e=m.split(""),t=[],n=M.nextValue(),o;e.length>0;)n=M.nextValue(),o=Math.floor(n*e.length),t.push(e.splice(o,1)[0]);return t.join("")}function V(){return v||(v=me(),v)}function we(e){var t=V();return t[e]}function ve(){return m||w}var D={get:ve,characters:ge,seed:xe,lookup:we,shuffled:V},$=typeof window=="object"&&(window.crypto||window.msCrypto),C;!$||!$.getRandomValues?C=function(e){for(var t=[],n=0;n<e;n++)t.push(Math.floor(Math.random()*256));return t}:C=function(e){return $.getRandomValues(new Uint8Array(e))};var be=C,ye=function(e,t,n){for(var o=(2<<Math.log(t.length-1)/Math.LN2)-1,a=-~(1.6*o*n/t.length),c="";;)for(var l=e(a),h=a;h--;)if(c+=t[l[h]&o]||"",c.length===+n)return c},je=D,Se=be,$e=ye;function Me(e){for(var t=0,n,o="";!n;)o=o+$e(Se,je.get(),1),n=e<Math.pow(16,t+1),t++;return o}var ke=Me,b=ke,Ce=1567752802062,De=7,y,F;function Le(e){var t="",n=Math.floor((Date.now()-Ce)*.001);return n===F?y++:(y=0,F=n),t=t+b(De),t=t+b(e),y>0&&(t=t+b(y)),t=t+b(n),t}var Ee=Le,Ie=D;function Fe(e){if(!e||typeof e!="string"||e.length<6)return!1;var t=new RegExp("[^"+Ie.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]");return!t.test(e)}var Re=Fe;(function(e){var t=D,n=Ee,o=Re,a=0;function c(d){return t.seed(d),e.exports}function l(d){return a=d,e.exports}function h(d){return d!==void 0&&t.characters(d),t.shuffled()}function g(){return n(a)}e.exports=g,e.exports.generate=g,e.exports.seed=c,e.exports.worker=l,e.exports.characters=h,e.exports.isValid=o})(R);var Te=R.exports,Ve=Te;const Be=z(Ve),B=({handleSubmit:e})=>{const[t,n]=x.useState("");return r.jsxs(le,{children:[r.jsx(de,{type:"text",placeholder:"Start typing...",maxLength:200,value:t,onChange:o=>n(o.target.value)}),r.jsxs(ue,{ButtonsContainer:!0,children:[r.jsx(E,{type:"button",onClick:()=>console.log("click"),children:r.jsx(U,{size:16,color:"#8E8E93"})}),r.jsx(E,{type:"button",onClick:()=>{e(t),n("")},children:r.jsx(Y,{size:16,color:"#3D3D3D"})})]})]})};B.propTypes={setMessages:A.func};const ze=new WebSocket("wss://talk-chat6.onrender.com/ws/socket-server/"),qe=()=>{const e=O(),[t,n]=x.useState([]),[o,a]=x.useState(null),c=localStorage.getItem("accessToken"),{currentChannel:l,isLoading:h}=H(s=>s.channels),{channelId:g}=N();x.useEffect(()=>{e(P(g))},[g,e]),x.useEffect(()=>{a(ze)},[]),x.useEffect(()=>{o&&(o.onmessage=function({data:s}){console.log("data",s);const u=JSON.parse(s);n(p=>[...p,{id:Be.generate(),text:u.message,date:new Date,owner:!0,name:"John",image:"https://via.placeholder.com/150",isOnline:!0}])})},[g,c,o]);const d=s=>{console.log("message",s),o.send(JSON.stringify({message:s}))};return console.log(t),l?r.jsx(q,{children:h?r.jsx(G,{}):r.jsxs(r.Fragment,{children:[r.jsx(J,{goBack:!0,imageUrl:l.image,channelName:l.title,id:l.id}),r.jsx(ce,{messages:t}),r.jsx(B,{setMessages:n,handleSubmit:d})]})}):null};export{qe as default};
