import{f as n,j as e,d as L,e as c,I as h,T as d,g as W,a as p,h as F,L as G,i as O,k as l,c as E,l as z,B as R,W as H}from"./index-891d7d6f.js";import{f as M,G as x}from"./format-number-fa94ab2a.js";import{C as N}from"./Card-08efea24.js";import{T as v}from"./TextField-b64d74e1.js";import{A as V,a as _}from"./Autocomplete-012e78db.js";import{C as q}from"./Container-f672367d.js";import"./isMuiElement-c24e6694.js";import"./Select-025a4ea6.js";import"./react-is.production.min-a192e302.js";import"./Menu-d608f608.js";import"./OutlinedInput-f433f1fa.js";const U=["Whiteboard Templates By Industry Leaders","Tesla Cybertruck-inspired camper trailer for Tesla fans who can’t just wait for the truck!","Designify Agency Landing Page Design","✨What is Done is Done ✨","Fresh Prince","Six Socks Studio","vincenzo de cotiis’ crossing over showcases a research on contamination","Simple, Great Looking Animations in Your Project | Video Tutorial","40 Free Serif Fonts for Digital Designers","Examining the Evolution of the Typical Web Design Client","Katie Griffin loves making that homey art","The American Dream retold through mid-century railroad graphics","Illustration System Design","CarZio-Delivery Driver App SignIn/SignUp","How to create a client-serverless Jamstack app using Netlify, Gatsby and Fauna","Tylko Organise effortlessly -3D & Motion Design","RAYO ?? A expanded visual arts festival identity","Anthony Burrill and Wired mag’s Andrew Diprose discuss how they made January’s Change Everything cover","Inside the Mind of Samuel Day","Portfolio Review: Is This Portfolio Too Creative?","Akkers van Margraten","Gradient Ticket icon","Here’s a Dyson motorcycle concept that doesn’t ‘suck’!","How to Animate a SVG with border-image"],g=[...Array(23)].map((i,t)=>({id:n.string.uuid(),cover:`/assets/images/covers/cover_${t+1}.jpg`,title:U[t+1],createdAt:n.date.past(),view:n.number.int(99999),comment:n.number.int(99999),share:n.number.int(99999),favorite:n.number.int(99999),author:{name:n.person.fullName(),avatarUrl:`/assets/images/avatars/avatar_${t+1}.jpg`}}));function f({post:i,index:t}){const{cover:s,title:m,view:j,comment:w,share:T,author:u,createdAt:I}=i,o=t===0,a=t===1||t===2,S=e.jsx(L,{alt:u.name,src:u.avatarUrl,sx:{zIndex:9,width:32,height:32,position:"absolute",left:r=>r.spacing(3),bottom:r=>r.spacing(-2),...(o||a)&&{zIndex:9,top:24,left:24,width:40,height:40}}}),A=e.jsx(G,{color:"inherit",variant:"subtitle2",underline:"hover",sx:{height:44,overflow:"hidden",WebkitLineClamp:2,display:"-webkit-box",WebkitBoxOrient:"vertical",...o&&{typography:"h5",height:60},...(o||a)&&{color:"common.white"}},children:m}),k=e.jsx(c,{direction:"row",flexWrap:"wrap",spacing:1.5,justifyContent:"flex-end",sx:{mt:3,color:"text.disabled"},children:[{number:w,icon:"eva:message-circle-fill"},{number:j,icon:"eva:eye-fill"},{number:T,icon:"eva:share-fill"}].map((r,B)=>e.jsxs(c,{direction:"row",sx:{...(o||a)&&{opacity:.48,color:"common.white"}},children:[e.jsx(h,{width:16,icon:r.icon,sx:{mr:.5}}),e.jsx(d,{variant:"caption",children:M(r.number)})]},B))}),C=e.jsx(p,{component:"img",alt:m,src:s,sx:{top:0,width:1,height:1,objectFit:"cover",position:"absolute"}}),D=e.jsx(d,{variant:"caption",component:"div",sx:{mb:2,color:"text.disabled",...(o||a)&&{opacity:.48,color:"common.white"}},children:W(I)}),P=e.jsx(O,{color:"paper",src:"/assets/icons/shape-avatar.svg",sx:{width:80,height:36,zIndex:9,bottom:-15,position:"absolute",color:"background.paper",...(o||a)&&{display:"none"}}});return e.jsx(x,{xs:12,sm:o?12:6,md:o?6:3,children:e.jsxs(N,{children:[e.jsxs(p,{sx:{position:"relative",pt:"calc(100% * 3 / 4)",...(o||a)&&{pt:"calc(100% * 4 / 3)","&:after":{top:0,content:"''",width:"100%",height:"100%",position:"absolute",bgcolor:r=>F(r.palette.grey[900],.72)}},...o&&{pt:{xs:"calc(100% * 4 / 3)",sm:"calc(100% * 3 / 4.66)"}}},children:[P,S,C]}),e.jsxs(p,{sx:{p:r=>r.spacing(4,3,3,3),...(o||a)&&{width:1,bottom:0,position:"absolute"}},children:[D,A,k]})]})})}f.propTypes={post:l.object.isRequired,index:l.number};b.propTypes={options:l.array,onSort:l.func};function b({options:i,onSort:t}){return e.jsx(v,{select:!0,size:"small",value:"latest",onChange:t,children:i.map(s=>e.jsx(E,{value:s.value,children:s.label},s.value))})}y.propTypes={posts:l.array.isRequired};function y({posts:i}){return e.jsx(V,{sx:{width:280},autoHighlight:!0,popupIcon:null,slotProps:{paper:{sx:{width:320,[`& .${_.option}`]:{typography:"body2"}}}},options:i,getOptionLabel:t=>t.title,isOptionEqualToValue:(t,s)=>t.id===s.id,renderInput:t=>e.jsx(v,{...t,placeholder:"Search post...",InputProps:{...t.InputProps,startAdornment:e.jsx(z,{position:"start",children:e.jsx(h,{icon:"eva:search-fill",sx:{ml:1,width:20,height:20,color:"text.disabled"}})})}})})}function $(){return e.jsxs(q,{children:[e.jsxs(c,{direction:"row",alignItems:"center",justifyContent:"space-between",mb:5,children:[e.jsx(d,{variant:"h4",children:"Blog"}),e.jsx(R,{variant:"contained",color:"inherit",startIcon:e.jsx(h,{icon:"eva:plus-fill"}),children:"New Post"})]}),e.jsxs(c,{mb:5,direction:"row",alignItems:"center",justifyContent:"space-between",children:[e.jsx(y,{posts:g}),e.jsx(b,{options:[{value:"latest",label:"Latest"},{value:"popular",label:"Popular"},{value:"oldest",label:"Oldest"}]})]}),e.jsx(x,{container:!0,spacing:3,children:g.map((i,t)=>e.jsx(f,{post:i,index:t},i.id))})]})}function se(){return e.jsxs(e.Fragment,{children:[e.jsx(H,{children:e.jsx("title",{children:" Blog | Travel Bio "})}),e.jsx($,{})]})}export{se as default};