import{j as e,P as ve,T as g,k as t,r as j,e as E,d as oe,c as A,o as ee,I as R,z as Ce,M as ae,a as N,b as B,A as D,m as we,l as Te,n as ie,F as ke,af as Ae,B as Pe,K as Re,S as V,ag as Fe,W as Oe}from"./index-c781f788.js";import{T as P,a as u,b as ce,c as de,d as X,e as J,f as Q,g as le}from"./TableSortLabel-770943f4.js";import{u as Ie}from"./formik.esm-bfe9e877.js";import{C as se}from"./Checkbox-e989daac.js";import{F as xe,T as Y}from"./TextField-d9da6097.js";import{S as he}from"./Select-720d8024.js";import{O as te}from"./OutlinedInput-6d2e0e44.js";import{L as We}from"./LoadingButton-f2d4e42c.js";import{C as ze}from"./Container-4a20173b.js";import{G as v}from"./Grid-61978ab5.js";import{C as Le}from"./Card-277ec1cb.js";import"./isMuiElement-67e28b05.js";import"./react-is.production.min-a192e302.js";import"./Menu-d5f6c5f1.js";function M({query:n}){return e.jsx(P,{children:e.jsx(u,{align:"center",colSpan:6,sx:{py:3},children:e.jsxs(ve,{sx:{textAlign:"center"},children:[e.jsx(g,{variant:"h6",paragraph:!0,children:"Not found"}),e.jsxs(g,{variant:"body2",children:["No results found for  ",e.jsxs("strong",{children:['"',n,'"']}),".",e.jsx("br",{})," Try checking for typos or using complete words."]})]})})})}M.propTypes={query:t.string};const Be={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:520,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function me({selected:n,name:s,avatarUrl:i,email:c,score:a,role:r,handleClick:x}){const[C,d]=j.useState(!1),[w,f]=j.useState(null),[F,S]=j.useState(!1),O=y=>{f(y.currentTarget)},k=y=>B.delete(`${D}deleteUser`,{params:{email:y}}),q=()=>{k(c).then(y=>{console.log(y.data.data)}).catch(()=>{console.log("failed")}),d(!C),f(null)},T=()=>{f(null)},H=()=>{S(!1)},[b,$]=j.useState(r),I=y=>{B.patch(`${D}update`,{name:s,email:c,score:a,userrole:b}).then(W=>{console.log(W.data.data)}).catch(()=>{console.log("failed")}),$(y.target.value)},o=Ie({initialValues:{name:s,email:c,score:a},onSubmit:y=>{S(!1);const{name:W,email:_,score:z}=y;console.log(y),B.patch(`${D}update`,{name:W,email:_,score:z}).then(L=>{console.log(L.data.data)}).catch(()=>{console.log("failed")})}});return e.jsx(e.Fragment,{children:!C&&e.jsxs(e.Fragment,{children:[e.jsxs(P,{hover:!0,tabIndex:-1,role:"checkbox",selected:n,children:[e.jsx(u,{padding:"checkbox",children:e.jsx(se,{disableRipple:!0,checked:n,onChange:x})}),e.jsx(u,{component:"th",scope:"row",padding:"none",children:e.jsxs(E,{direction:"row",alignItems:"center",spacing:2,children:[e.jsx(oe,{alt:s,src:i}),e.jsx(g,{variant:"subtitle2",noWrap:!0,children:s})]})}),e.jsx(u,{children:c}),e.jsx(u,{children:a}),e.jsx(u,{children:e.jsx(xe,{variant:"standard",sx:{m:0,minWidth:"100%",width:"100%"},children:e.jsxs(he,{displayEmpty:!0,value:b,onChange:I,sx:{color:"#29AAE7",fontSize:"14px",fontWeight:"400","& .MuiOutlinedInput-root .MuiSelect-notchedOutline":{display:"none"}},inputProps:{notched:!1},input:e.jsx(te,{notched:!1,label:"States and Cities"}),children:[e.jsx(A,{value:"user",children:"user"}),e.jsx(A,{value:"admin",children:"admin"})]})})}),e.jsx(u,{align:"right",children:e.jsx(ee,{onClick:O,children:e.jsx(R,{icon:"eva:more-vertical-fill"})})})]}),e.jsx(Ce,{open:!!w,anchorEl:w,onClose:T,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"right"},PaperProps:{sx:{width:140}},children:e.jsxs(A,{onClick:q,sx:{color:"error.main"},children:[e.jsx(R,{icon:"eva:trash-2-outline",sx:{mr:2}}),"Delete"]})}),e.jsx(ae,{open:F,onClose:H,children:e.jsx(N,{sx:Be,children:e.jsxs("form",{onSubmit:o.handleSubmit,style:{height:"400px"},children:[e.jsxs(E,{spacing:3,children:[e.jsx(g,{sx:{fontSize:"13px"},children:"Name "}),e.jsx(Y,{id:"na",name:"name",label:"User Name",size:"small",value:o.values.name,onChange:o.handleChange,onBlur:o.handleBlur,error:o.touched.name&&!!o.errors.name,helperText:o.touched.name&&o.errors.name,InputProps:{style:{marginTop:0}}}),e.jsx(g,{sx:{fontSize:"13px"},children:"Email"}),e.jsx(Y,{id:"em",name:"email",label:"Email",size:"small",value:o.values.email,onChange:o.handleChange,onBlur:o.handleBlur,error:o.touched.email&&!!o.errors.email,helperText:o.touched.email&&o.errors.email}),e.jsx(g,{sx:{fontSize:"13px"},children:"Score"}),e.jsx(Y,{id:"sc",name:"score",label:"Score",size:"small",value:o.values.score,onChange:o.handleChange,onBlur:o.handleBlur,error:o.touched.score&&!!o.errors.score,helperText:o.touched.score&&o.errors.score})]}),e.jsx(We,{fullWidth:!0,size:"middle",type:"submit",variant:"contained",color:"inherit",sx:{color:"#FFFFFF",backgroundColor:"#33C2B2",mt:4},children:"Update"})]})})})]})})}me.propTypes={avatarUrl:t.any,email:t.any,handleClick:t.func,name:t.any,role:t.string,selected:t.any,score:t.string};function ue({selected:n,name:s,avatarUrl:i,email:c,role:a,handleClick:r}){const[x,C]=j.useState(""),d=w=>{C(w.target.value)};return e.jsxs(P,{hover:!0,tabIndex:-1,role:"checkbox",selected:n,children:[e.jsx(u,{padding:"checkbox",children:e.jsx(se,{disableRipple:!0,checked:n,onChange:r})}),e.jsx(u,{component:"th",scope:"row",padding:"none",children:e.jsxs(E,{direction:"row",alignItems:"center",spacing:2,children:[e.jsx(oe,{alt:s,src:i}),e.jsx(g,{variant:"subtitle2",noWrap:!0,children:s})]})}),e.jsx(u,{children:c}),e.jsx(u,{children:e.jsx(xe,{variant:"standard",sx:{m:0,minWidth:"100%",width:"100%"},children:e.jsxs(he,{displayEmpty:!0,value:x,onChange:d,sx:{color:"#29AAE7",fontSize:"14px",fontWeight:"400","& .MuiOutlinedInput-root .MuiSelect-notchedOutline":{display:"none"}},inputProps:{notched:!1},input:e.jsx(te,{notched:!1,label:"States and Cities"}),children:[e.jsx(A,{value:"",children:a}),e.jsx(A,{value:"Admin",children:"Admin"})]})})})]})}ue.propTypes={avatarUrl:t.any,email:t.any,name:t.any,role:t.string,selected:t.any,handleClick:t.func};const pe={border:0,margin:-1,padding:0,width:"1px",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",clip:"rect(0 0 0 0)"};function Z(n,s,i){return n?Math.max(0,(1+n)*s-i):0}function re(n,s,i){return n[i]===null?1:s[i]===null||s[i]<n[i]?-1:s[i]>n[i]?1:0}function De(n,s){return n==="desc"?(i,c)=>re(i,c,s):(i,c)=>-re(i,c,s)}function Me({inputData:n,comparator:s,filterName:i}){const c=n.map((a,r)=>[a,r]);return c.sort((a,r)=>{const x=s(a[0],r[0]);return x!==0?x:a[1]-r[1]}),n=c.map(a=>a[0]),i&&(n=n.filter(a=>a.name.toLowerCase().indexOf(i.toLowerCase())!==-1)),n}function ne({order:n,orderBy:s,rowCount:i,headLabel:c,numSelected:a,onRequestSort:r,onSelectAllClick:x}){const C=d=>w=>{r(w,d)};return e.jsx(ce,{children:e.jsxs(P,{children:[e.jsx(u,{padding:"checkbox",children:e.jsx(se,{indeterminate:a>0&&a<i,checked:i>0&&a===i,onChange:x})}),c.map(d=>e.jsx(u,{align:d.align||"left",sortDirection:s===d.id?n:!1,sx:{width:d.width,minWidth:d.minWidth},children:e.jsxs(de,{hideSortIcon:!0,active:s===d.id,direction:s===d.id?n:"asc",onClick:C(d.id),children:[d.label,s===d.id?e.jsx(N,{sx:{...pe},children:n==="desc"?"sorted descending":"sorted ascending"}):null]})},d.id))]})})}ne.propTypes={order:t.oneOf(["asc","desc"]),orderBy:t.string,rowCount:t.number,headLabel:t.array,numSelected:t.number,onRequestSort:t.func,onSelectAllClick:t.func};function U({emptyRows:n,height:s}){return n?e.jsx(P,{sx:{...s&&{height:s*n}},children:e.jsx(u,{colSpan:9})}):null}U.propTypes={emptyRows:t.number,height:t.number};function ge({numSelected:n,filterName:s,onFilterName:i}){return e.jsxs(we,{sx:{height:96,display:"flex",justifyContent:"space-between",p:c=>c.spacing(0,1,0,3),...n>0&&{color:"primary.main",bgcolor:"primary.lighter"}},children:[n>0?e.jsxs(g,{component:"div",variant:"subtitle1",children:[n," selected"]}):e.jsx(te,{value:s,onChange:i,placeholder:"Search user...",startAdornment:e.jsx(Te,{position:"start",children:e.jsx(R,{icon:"eva:search-fill",sx:{color:"text.disabled",width:20,height:20}})})}),n>0?e.jsx(ie,{title:"Delete",children:e.jsx(ee,{children:e.jsx(R,{icon:"eva:trash-2-fill"})})}):e.jsx(ie,{title:"Filter list",children:e.jsx(ee,{children:e.jsx(R,{icon:"ic:round-filter-list"})})})]})}ge.propTypes={numSelected:t.number,filterName:t.string,onFilterName:t.func};function fe({max:n,min:s,scorename:i,formula:c}){const a=()=>{alert("Let's check for formular edit later")};return e.jsx(e.Fragment,{children:e.jsxs(P,{hover:!0,tabIndex:-1,children:[e.jsx(u,{component:"th",scope:"row",children:e.jsx(E,{direction:"row",alignItems:"center",spacing:2,children:e.jsx(g,{variant:"subtitle2",noWrap:!0,children:i})})}),e.jsx(u,{children:n}),e.jsx(u,{children:s}),e.jsxs(u,{sx:{display:"flex",flexDirection:"row",justifyContent:"flex-start",color:"#29AAE7"},children:[e.jsx(A,{sx:{paddingX:"0"},onClick:a,children:c}),e.jsx(A,{children:e.jsx(R,{icon:"eva:edit-fill",sx:{mr:2}})})]})]})})}fe.propTypes={formula:t.any,max:t.string,min:t.string,scorename:t.string};function je({order:n,orderBy:s,headLabel:i,onRequestSort:c}){const a=r=>x=>{c(x,r)};return e.jsx(ce,{children:e.jsx(P,{children:i.map(r=>e.jsx(u,{align:r.align||"left",sortDirection:s===r.id?n:!1,sx:{width:r.width,minWidth:r.minWidth},children:e.jsxs(de,{hideSortIcon:!0,active:s===r.id,direction:s===r.id?n:"asc",onClick:a(r.id),children:[r.label,s===r.id?e.jsx(N,{sx:{...pe},children:n==="desc"?"sorted descending":"sorted ascending"}):null]})},r.id))})})}je.propTypes={order:t.oneOf(["asc","desc"]),orderBy:t.string,headLabel:t.array,onRequestSort:t.func};const Ue={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:800,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function Ee(){const[n,s]=j.useState([]);j.useEffect(()=>{B.get(`${D}getall`).then(l=>{s(l.data.data)}).catch(()=>{console.log("failed")})},[]);const i=ke(),c=Ae(),[a,r]=j.useState(!1),[x,C]=j.useState(0),[d,w]=j.useState("asc"),[f,F]=j.useState([]),[S,O]=j.useState([]),[k,q]=j.useState("name"),[T,H]=j.useState(""),[b,$]=j.useState(5),I=(l,h)=>{h!==""&&(w(k===h&&d==="asc"?"desc":"asc"),q(h))},o=l=>{if(l.target.checked){const h=n.map(p=>p.name);F(h);return}F([])},y=(l,h)=>{const p=f.indexOf(h);let m=[];p===-1?m=m.concat(f,h):p===0?m=m.concat(f.slice(1)):p===f.length-1?m=m.concat(f.slice(0,-1)):p>0&&(m=m.concat(f.slice(0,p),f.slice(p+1))),F(m)},W=l=>{if(l.target.checked){const h=n.map(p=>p.name);O(h);return}O([])},_=(l,h)=>{const p=S.indexOf(h);let m=[];p===-1?m=m.concat(S,h):p===0?m=m.concat(S.slice(1)):p===S.length-1?m=m.concat(S.slice(0,-1)):p>0&&(m=m.concat(S.slice(0,p),S.slice(p+1))),O(m)},z=(l,h)=>{C(h)},L=l=>{C(0),$(parseInt(l.target.value,10))},be=l=>{C(0),H(l.target.value)},G=Me({inputData:n,comparator:De(d,k),filterName:T}),K=!G.length&&!!T,Se=()=>{i(Fe()).unwrap(),c("/login")},ye=()=>r(!1);return e.jsxs(ze,{maxWidth:"xl",children:[e.jsx(v,{marginTop:2,sx:{display:"flex",justifyContent:"right",alignContent:"right"},item:!0,xs:12,md:12,lg:12,children:e.jsx(Pe,{startIcon:e.jsx("img",{src:"/assets/icons/navbar/logout.svg",alt:"icon",style:{marginRight:3,width:24,height:24}}),onClick:Se,children:e.jsx(g,{sx:{color:"#000000",fontSize:"15px"},children:"Logout"})})}),e.jsxs(v,{sx:{display:"flex",flexDirection:"column",paddingLeft:"20px",ml:"80px"},item:!0,xs:12,md:12,lg:12,children:[e.jsx(g,{sx:{color:"#0D0C0C",fontSize:"28px",fontWeight:"700",mb:"10px"},children:"Setting"}),e.jsx(g,{sx:{color:"#000000",fontSize:"16px",fontWeight:"400"},children:"Users and Data Updates"})]}),e.jsx(Re,{sx:{backgroundColor:"#B5B5B5",width:"100%",mt:4}}),e.jsxs(Le,{sx:{mt:"100px",padding:"50px",border:"1px solid #CBC0C0"},children:[e.jsxs(v,{marginTop:2,px:8,pt:4,sx:{display:"flex",flexDirection:"row"},children:[e.jsxs(v,{item:!0,xs:6,lg:4,sx:{width:"226px",display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[e.jsxs(v,{sx:{display:"flex",flexDirection:"column"},children:[e.jsx(g,{mb:1,sx:{color:"#000000",fontSize:"14px"},children:"1 Accounts"}),e.jsx(g,{sx:{color:"#000000",fontSize:"16x",fontWeight:"bold"},children:"Super Admin"})]}),e.jsx(v,{sx:{display:"flex",flexDirection:"column"},children:e.jsx("img",{src:"/assets/icons/glass/mdi_user-supervisor-circle.png",alt:"icon",style:{marginLeft:30,marginBottom:20,width:28,height:28}})})]}),e.jsxs(v,{item:!0,xs:6,lg:8,ml:12,sx:{width:"226px",display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[e.jsxs(v,{sx:{display:"flex",flexDirection:"column"},children:[e.jsx(g,{mb:1,sx:{color:"#000000",fontSize:"14px"},children:"Account"}),e.jsx(g,{sx:{color:"#000000",fontSize:"16x",fontWeight:"bold"},children:"Admin"})]}),e.jsx(v,{sx:{display:"flex",flexDirection:"column"},children:e.jsx("img",{src:"/assets/icons/glass/mdi_user-supervisor-circle.png",alt:"icon",style:{marginLeft:30,marginBottom:20,width:28,height:28}})})]})]}),e.jsx(ae,{open:a,onClose:ye,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:e.jsxs(N,{sx:Ue,children:[e.jsx(V,{children:e.jsx(X,{sx:{overflow:"unset"},children:e.jsxs(J,{sx:{minWidth:800},children:[e.jsx(ne,{order:d,orderBy:k,rowCount:n.length,numSelected:S.length,onRequestSort:I,onSelectAllClick:W,headLabel:[{id:"name",label:"Name"},{id:"email",label:"Email"},{id:"role",label:"Admin Role"},{id:""}]}),e.jsxs(Q,{children:[G.slice(x*b,x*b+b).map(l=>e.jsx(ue,{name:l.name,role:l.userrole,email:l.email,avatarUrl:l.image,selected:S.indexOf(l.name)!==-1,handleClick:h=>_(h,l.name)},l.id)),e.jsx(U,{height:77,emptyRows:Z(x,b,n.length)}),K&&e.jsx(M,{query:T})]})]})})}),e.jsx(le,{page:x,component:"div",count:n.length,rowsPerPage:b,onPageChange:z,rowsPerPageOptions:[5,10,25],onRowsPerPageChange:L})]})}),e.jsx(v,{marginTop:7,children:e.jsx(ge,{numSelected:f.length,filterName:T,onFilterName:be})}),e.jsx(V,{children:e.jsx(X,{sx:{overflow:"unset"},children:e.jsxs(J,{sx:{minWidth:800},children:[e.jsx(ne,{order:d,orderBy:k,rowCount:n.length,numSelected:f.length,onRequestSort:I,onSelectAllClick:o,headLabel:[{id:"name",label:"Name"},{id:"email",label:"Email"},{id:"score",label:"Score"},{id:"role",label:"Admin Role"},{id:""}]}),e.jsxs(Q,{children:[G.slice(x*b,x*b+b).map(l=>e.jsx(me,{name:l.name,role:l.userrole,email:l.email,avatarUrl:l.image,score:l.score,selected:f.indexOf(l.name)!==-1,handleClick:h=>y(h,l.name)},l.id)),e.jsx(U,{height:77,emptyRows:Z(x,b,n.length)}),K&&e.jsx(M,{query:T})]})]})})}),e.jsx(le,{page:x,component:"div",count:n.length,rowsPerPage:b,onPageChange:z,rowsPerPageOptions:[5,10,25],onRowsPerPageChange:L}),e.jsx(v,{marginTop:10,children:e.jsx(V,{children:e.jsx(X,{sx:{overflow:"unset"},children:e.jsxs(J,{sx:{minWidth:800},children:[e.jsx(je,{order:d,orderBy:k,rowCount:n.length,numSelected:f.length,onRequestSort:I,onSelectAllClick:o,headLabel:[{id:"scorename",label:"Score Name"},{id:"max",label:"Max"},{id:"min",label:"Min"},{id:"formula",label:"Formula"}]}),e.jsxs(Q,{sx:{marginLeft:"20px"},children:[e.jsx(fe,{scorename:"Travel Score",max:"5000",min:"0",formula:"Country Score + City Score"},1),e.jsx(U,{height:77,emptyRows:Z(x,b,n.length)}),K&&e.jsx(M,{query:T})]})]})})})})]})]})}function nn(){return e.jsxs(e.Fragment,{children:[e.jsx(Oe,{children:e.jsx("title",{children:" Setting "})}),e.jsx(Ee,{})]})}export{nn as default};
