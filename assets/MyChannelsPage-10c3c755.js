import{r as e,e as d,u as p,g as m,f as x,j as a,C,d as y}from"./index-664758b6.js";import{C as L}from"./ChanelList-2a624ec7.js";import{H as j}from"./Header-3b18fe14.js";import"./iconBase-a5f9828d.js";import"./index.esm-8a708275.js";const N=()=>{const[t,i]=e.useState(1),[f,l]=e.useState(!1),[g,o]=e.useState(!1),{сhannellistByUser:n,count:c}=d(r=>r.channels),s=p(),u=e.useCallback(async()=>{t===1?l(!0):o(!0),await s(m(t)),l(!1),o(!1)},[s,t]);e.useEffect(()=>()=>s(x()),[s]),e.useEffect(()=>{u()},[u]);const h=e.useCallback(()=>{n.length!==c&&i(r=>r+1)},[n.length,c]);return a.jsxs(C,{children:[a.jsx(j,{title:"My Channels",goBack:!0,profileLink:!0,addChannelLink:!0}),f?a.jsx(y,{}):a.jsx(L,{from:"my-channels-page",channels:n,isLoading:g,ForwardPage:h})]})};export{N as default};