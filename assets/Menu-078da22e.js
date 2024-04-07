import{r as u,t as K,aM as Q,aN as q,aJ as A,a1 as B,j as _,aO as X,_ as I,o as Y,p as Z,s as j,y as ee,V as te,aP as se,u as oe,N as re,aQ as H,v as ne,w as ae}from"./index-85dd0c55.js";import"./react-is.production.min-a192e302.js";const ie=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function N(t,e,o){return t===e?t.firstChild:e&&e.nextElementSibling?e.nextElementSibling:o?null:t.firstChild}function $(t,e,o){return t===e?o?t.firstChild:t.lastChild:e&&e.previousElementSibling?e.previousElementSibling:o?null:t.lastChild}function z(t,e){if(e===void 0)return!0;let o=t.innerText;return o===void 0&&(o=t.textContent),o=o.trim().toLowerCase(),o.length===0?!1:e.repeating?o[0]===e.keys[0]:o.indexOf(e.keys.join(""))===0}function C(t,e,o,P,m,g){let c=!1,i=m(t,e,e?o:!1);for(;i;){if(i===t.firstChild){if(c)return!1;c=!0}const h=P?!1:i.disabled||i.getAttribute("aria-disabled")==="true";if(!i.hasAttribute("tabindex")||!z(i,g)||h)i=m(t,i,o);else return i.focus(),!0}return!1}const le=u.forwardRef(function(e,o){const{actions:P,autoFocus:m=!1,autoFocusItem:g=!1,children:c,className:i,disabledItemsFocusable:h=!1,disableListWrap:M=!1,onKeyDown:b,variant:v="selectedMenu"}=e,R=K(e,ie),p=u.useRef(null),L=u.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});Q(()=>{m&&p.current.focus()},[m]),u.useImperativeHandle(P,()=>({adjustStyleForScrollbar:(s,r)=>{const l=!p.current.style.width;if(s.clientHeight<p.current.clientHeight&&l){const f=`${q(A(s))}px`;p.current.style[r.direction==="rtl"?"paddingLeft":"paddingRight"]=f,p.current.style.width=`calc(100% + ${f})`}return p.current}}),[]);const F=s=>{const r=p.current,l=s.key,f=A(r).activeElement;if(l==="ArrowDown")s.preventDefault(),C(r,f,M,h,N);else if(l==="ArrowUp")s.preventDefault(),C(r,f,M,h,$);else if(l==="Home")s.preventDefault(),C(r,null,M,h,N);else if(l==="End")s.preventDefault(),C(r,null,M,h,$);else if(l.length===1){const n=L.current,y=l.toLowerCase(),w=performance.now();n.keys.length>0&&(w-n.lastTime>500?(n.keys=[],n.repeating=!0,n.previousKeyMatched=!0):n.repeating&&y!==n.keys[0]&&(n.repeating=!1)),n.lastTime=w,n.keys.push(y);const T=f&&!n.repeating&&z(f,n);n.previousKeyMatched&&(T||C(r,f,!1,h,N,n))?s.preventDefault():n.previousKeyMatched=!1}b&&b(s)},x=B(p,o);let a=-1;u.Children.forEach(c,(s,r)=>{if(!u.isValidElement(s)){a===r&&(a+=1,a>=c.length&&(a=-1));return}s.props.disabled||(v==="selectedMenu"&&s.props.selected||a===-1)&&(a=r),a===r&&(s.props.disabled||s.props.muiSkipListHighlight||s.type.muiSkipListHighlight)&&(a+=1,a>=c.length&&(a=-1))});const S=u.Children.map(c,(s,r)=>{if(r===a){const l={};return g&&(l.autoFocus=!0),s.props.tabIndex===void 0&&v==="selectedMenu"&&(l.tabIndex=0),u.cloneElement(s,l)}return s});return _.jsx(X,I({role:"menu",ref:x,className:i,onKeyDown:F,tabIndex:m?0:-1},R,{children:S}))}),ue=le;function ce(t){return Y("MuiMenu",t)}Z("MuiMenu",["root","paper","list"]);const pe=["onEntering"],fe=["autoFocus","children","className","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant","slots","slotProps"],de={vertical:"top",horizontal:"right"},me={vertical:"top",horizontal:"left"},he=t=>{const{classes:e}=t;return ae({root:["root"],paper:["paper"],list:["list"]},ce,e)},ge=j(ee,{shouldForwardProp:t=>te(t)||t==="classes",name:"MuiMenu",slot:"Root",overridesResolver:(t,e)=>e.root})({}),Me=j(se,{name:"MuiMenu",slot:"Paper",overridesResolver:(t,e)=>e.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),ye=j(ue,{name:"MuiMenu",slot:"List",overridesResolver:(t,e)=>e.list})({outline:0}),Pe=u.forwardRef(function(e,o){var P,m;const g=oe({props:e,name:"MuiMenu"}),{autoFocus:c=!0,children:i,className:h,disableAutoFocusItem:M=!1,MenuListProps:b={},onClose:v,open:R,PaperProps:p={},PopoverClasses:L,transitionDuration:F="auto",TransitionProps:{onEntering:x}={},variant:a="selectedMenu",slots:S={},slotProps:s={}}=g,r=K(g.TransitionProps,pe),l=K(g,fe),f=re(),n=f.direction==="rtl",y=I({},g,{autoFocus:c,disableAutoFocusItem:M,MenuListProps:b,onEntering:x,PaperProps:p,transitionDuration:F,TransitionProps:r,variant:a}),w=he(y),T=c&&!M&&R,k=u.useRef(null),U=(d,E)=>{k.current&&k.current.adjustStyleForScrollbar(d,f),x&&x(d,E)},V=d=>{d.key==="Tab"&&(d.preventDefault(),v&&v(d,"tabKeyDown"))};let D=-1;u.Children.map(i,(d,E)=>{u.isValidElement(d)&&(d.props.disabled||(a==="selectedMenu"&&d.props.selected||D===-1)&&(D=E))});const O=(P=S.paper)!=null?P:Me,W=(m=s.paper)!=null?m:p,G=H({elementType:S.root,externalSlotProps:s.root,ownerState:y,className:[w.root,h]}),J=H({elementType:O,externalSlotProps:W,ownerState:y,className:w.paper});return _.jsx(ge,I({onClose:v,anchorOrigin:{vertical:"bottom",horizontal:n?"right":"left"},transformOrigin:n?de:me,slots:{paper:O,root:S.root},slotProps:{root:G,paper:J},open:R,ref:o,transitionDuration:F,TransitionProps:I({onEntering:U},r),ownerState:y},l,{classes:L,children:_.jsx(ye,I({onKeyDown:V,actions:k,autoFocus:c&&(D===-1||M),autoFocusItem:T,variant:a},b,{className:ne(w.list,b.className),children:i}))}))}),we=Pe;export{we as M};