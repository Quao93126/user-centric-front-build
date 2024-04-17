import{j as e,m as ne,l as re,I as k,n as ae,o as ce,k as w,r as s,T as o,P as h,B as g,M as B,a as D,S as T,b as E,A as F,W as de}from"./index-faf6d3d2.js";import{_ as xe,d as he,I as ge}from"./mapdata-2a7fe646.js";import{O as fe}from"./OutlinedInput-4d845372.js";import{C as ue}from"./Container-01e4d7fb.js";import{G as l}from"./Grid-27181c0c.js";import{I as z,a as A}from"./ImageListItem-553a61ae.js";import{C as N}from"./Checkbox-c4517c2c.js";import"./react-is.production.min-a192e302.js";import"./isMuiElement-8ec8267a.js";function j({filterName:f,onFilterName:x}){return e.jsxs(ne,{sx:{height:96,display:"flex",justifyContent:"space-between",p:a=>a.spacing(0,1,0,3)},children:[e.jsx(fe,{value:f,onChange:x,placeholder:"Search...",startAdornment:e.jsx(re,{position:"start",children:e.jsx(k,{icon:"eva:search-fill",sx:{color:"text.disabled",width:20,height:20}})})}),e.jsx(ae,{title:"Filter list",children:e.jsx(ce,{children:e.jsx(k,{icon:"ic:round-filter-list"})})})]})}j.propTypes={filterName:w.string,onFilterName:w.func};const O={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:500,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function me(){const[f,x]=s.useState(0),[a,v]=s.useState([]),W=()=>E.get(`${F}getallCountry`);s.useEffect(()=>{W().then(t=>{v(t.data.data)}).catch(()=>{console.log("failed")})},[]);const[_,C]=s.useState(!1),[u,L]=s.useState(""),[R,P]=s.useState([a]),[m,M]=s.useState([]),$=Object.values(m).filter(Boolean).length,U=()=>C(!0),G=()=>C(!1),H=t=>{L(t.target.value)},V=t=>{const n=a.find(i=>i.title===t),r=n?n.score:0;console.log("Score of",t,"is",r),x(i=>i+Number(r)),M(i=>{const d={...i};return d[t]=!i[t],d})};s.useEffect(()=>{P(a.filter(t=>t.title.toLowerCase().includes(u.toLowerCase())))},[u,a]);const[c,X]=s.useState([]),q=()=>E.get(`${F}getallCity`);s.useEffect(()=>{q().then(t=>{X(t.data.data)}).catch(()=>{console.log("failed")})},[]);const[J,y]=s.useState(!1),[p,K]=s.useState(""),[Q,Y]=s.useState(c),[Z,ee]=s.useState([]),te=Object.values(Z).filter(Boolean).length,b=()=>y(!0),se=()=>y(!1),ie=t=>{K(t.target.value)},le=t=>{const n=c.find(i=>i.cityname===t),r=n?n.score:0;console.log("Score of",t,"is",r),x(i=>i+Number(r)),ee(i=>{const d={...i};return d[t]=!i[t],d})};s.useEffect(()=>{Y(c.filter(t=>t.cityname.toLowerCase().includes(p.toLowerCase())))},[p,c]);const S=["#5eb3d8","#fedb76","#40d3b7","#f97b7f","#f496f0","#ec7e7f"];let I=0;const oe=({countryName:t})=>{const n=!!m[t];let r="#93BED4";return n&&(r=S[I%S.length],I+=1),{fill:r,stroke:"black",strokeWidth:1,strokeOpacity:.2,cursor:"pointer"}};return e.jsxs(ue,{maxWidth:"xl",children:[e.jsx(l,{container:!0,spacing:3,justifyContent:"center",alignItems:"center",marginTop:6,children:e.jsxs(l,{item:!0,style:{position:"relative"},children:[e.jsx("img",{alt:"icon",src:"/assets/images/travelscore.png",style:{width:"233px",height:"200px"}}),e.jsxs(l,{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-34%, -34%)",textAlign:"center"},children:[e.jsx(o,{style:{fontSize:"15px",color:"#474A5D",fontWeight:400},children:"Travel Score"}),e.jsx(o,{style:{fontSize:"43px",color:"#FA479D",fontWeight:600},children:f})]})]})}),e.jsxs(l,{container:!0,spacing:3,marginTop:2,sx:{display:"flex",justifyContent:"right"},children:[e.jsx(l,{item:!0,xs:6,md:6,lg:6,children:e.jsx(h,{sx:{backgroundColor:"#FB8D334D"},children:e.jsx(g,{fullWidth:!0,sx:{alignItems:"left",justifyContent:"left"},startIcon:e.jsx("img",{src:"/assets/icons/glass/ic_glass_country.png",alt:"icon",style:{marginRight:8,width:46,height:46}}),onClick:U,children:e.jsxs(l,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-start"},children:[e.jsx(o,{sx:{color:"#E98A1B",fontSize:"18px"},children:a.length}),e.jsx(o,{sx:{color:"#474A5D",fontSize:"14px"},children:"Countries"})]})})})}),e.jsx(l,{item:!0,xs:6,md:6,lg:6,children:e.jsx(h,{sx:{backgroundColor:"#0071CE4D"},children:e.jsx(g,{fullWidth:!0,sx:{alignItems:"left",justifyContent:"left"},startIcon:e.jsx("img",{src:"/assets/icons/glass/ic_glass_city.png",alt:"icon",style:{marginRight:8,width:46,height:46}}),onClick:b,children:e.jsxs(l,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-start"},children:[e.jsx(o,{sx:{color:"#0B70EC",fontSize:"18px"},children:c.length}),e.jsx(o,{sx:{color:"#474A5D",fontSize:"14px"},children:"Cities"})]})})})})]}),e.jsx(B,{open:_,onClose:G,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:e.jsxs(D,{sx:O,children:[e.jsx(l,{item:!0,id:"modal-modal-title",xs:12,md:12,lg:12,children:e.jsx(h,{sx:{backgroundColor:"#FB8D334D"},children:e.jsx(g,{fullWidth:!0,sx:{alignItems:"left",justifyContent:"left"},startIcon:e.jsx("img",{src:"/assets/icons/glass/ic_glass_country.png",alt:"icon",style:{marginRight:8,width:46,height:46}}),children:e.jsxs(l,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-start"},children:[e.jsx(o,{sx:{color:"#E98A1B",fontSize:"18px"},children:$}),e.jsx(o,{sx:{color:"#474A5D",fontSize:"14px"},children:"Countries"})]})})})}),e.jsx(j,{filterName:u,onFilterName:H}),e.jsx(T,{children:e.jsx(z,{sx:{width:450,height:300},cols:4,rowHeight:82,children:R.map((t,n)=>e.jsxs(A,{sx:{marginTop:2},children:[e.jsx("img",{alt:`${t.value}`,src:`https://purecatamphetamine.github.io/country-flag-icons/3x2/${t.value}.svg`,style:{width:"100%",height:"auto",cursor:"pointer"}}),e.jsxs(o,{sx:{fontSize:10,color:"black"},children:[e.jsx(N,{checked:!!m[t.title],onChange:()=>V(t.title),sx:{padding:0},size:"small"}),t.title]})]},n))})})]})}),e.jsx(l,{container:!0,spacing:3,justifyContent:"center",alignItems:"center",marginTop:6,children:e.jsx(xe,{richInteraction:!0,backgroundColor:"white",borderColor:"white",color:"#93BED4",tooltipBgColor:"#31323f",size:"xl",data:he,styleFunction:oe})}),e.jsx(B,{open:J,onClose:se,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:e.jsxs(D,{sx:O,children:[e.jsx(l,{item:!0,id:"modal-modal-title",xs:12,md:12,lg:12,children:e.jsx(h,{sx:{backgroundColor:"#0071CE4D"},children:e.jsx(g,{fullWidth:!0,sx:{alignItems:"left",justifyContent:"left"},startIcon:e.jsx("img",{src:"/assets/icons/glass/ic_glass_city.png",alt:"icon",style:{marginRight:8,width:46,height:46}}),onClick:b,children:e.jsxs(l,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-start"},children:[e.jsx(o,{sx:{color:"#0B70EC",fontSize:"18px"},children:te}),e.jsx(o,{sx:{color:"#474A5D",fontSize:"14px"},children:"Cities"})]})})})}),e.jsx(j,{filterName:p,onFilterName:ie}),e.jsx(T,{children:e.jsx(z,{sx:{width:450,height:300,backgroundColor:"black",paddingX:2},cols:2,gap:20,rowHeight:82,children:Q.map((t,n)=>e.jsxs(A,{sx:{marginTop:2},children:[e.jsx("img",{src:"/assets/images/city.jpg",alt:"Background",style:{width:"90%",height:"100%",cursor:"pointer"}}),e.jsx(ge,{title:e.jsxs(o,{sx:{fontSize:10,color:"white"},children:[e.jsx(N,{onChange:()=>le(t.cityname),sx:{padding:0},size:"small"}),t.cityname]}),position:"below"})]},n))})})]})})]})}function Be(){return e.jsxs(e.Fragment,{children:[e.jsx(de,{children:e.jsx("title",{children:" Profile "})}),e.jsx(me,{})]})}export{Be as default};
