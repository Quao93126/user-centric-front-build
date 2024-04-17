import{$ as Ao,r as m,a0 as ro,ag as To,ah as qe,ai as Do,_ as p,V as $o,j as C,q as Io,p as yo,s as W,t as g,h as j,u as Oo,v as co,a2 as Po,R as go,w as Q,x as ko,aj as io,ak as Ce,al as bo,o as So,am as Lo,P as Ro,an as zo}from"./index-faf6d3d2.js";import{f as Le,A as No}from"./Select-7a47dc94.js";function xo(e){return typeof e.normalize<"u"?e.normalize("NFD").replace(/[\u0300-\u036f]/g,""):e}function wo(e={}){const{ignoreAccents:a=!0,ignoreCase:u=!0,limit:s,matchFrom:h="any",stringify:O,trim:v=!1}=e;return(f,{inputValue:P,getOptionLabel:T})=>{let R=v?P.trim():P;u&&(R=R.toLowerCase()),a&&(R=xo(R));const w=R?f.filter(fe=>{let D=(O||T)(fe);return u&&(D=D.toLowerCase()),a&&(D=xo(D)),h==="start"?D.indexOf(R)===0:D.indexOf(R)>-1}):f;return typeof s=="number"?w.slice(0,s):w}}function so(e,a){for(let u=0;u<e.length;u+=1)if(a(e[u]))return u;return-1}const Eo=wo(),mo=5,Mo=e=>{var a;return e.current!==null&&((a=e.current.parentElement)==null?void 0:a.contains(document.activeElement))};function Fo(e){const{unstable_isActiveElementInListbox:a=Mo,unstable_classNamePrefix:u="Mui",autoComplete:s=!1,autoHighlight:h=!1,autoSelect:O=!1,blurOnSelect:v=!1,clearOnBlur:f=!e.freeSolo,clearOnEscape:P=!1,componentName:T="useAutocomplete",defaultValue:R=e.multiple?[]:null,disableClearable:w=!1,disableCloseOnSelect:fe=!1,disabled:D,disabledItemsFocusable:B=!1,disableListWrap:ve=!1,filterOptions:Re=Eo,filterSelectedOptions:ge=!1,freeSolo:X=!1,getOptionDisabled:G,getOptionLabel:Ae=t=>{var o;return(o=t.label)!=null?o:t},groupBy:ce,handleHomeEndKeys:be=!e.freeSolo,id:te,includeInputInList:$e=!1,inputValue:Fe,isOptionEqualToValue:Y=(t,o)=>t===o,multiple:b=!1,onChange:ae,onClose:le,onHighlightChange:U,onInputChange:q,onOpen:xe,open:Ie,openOnFocus:Te=!1,options:k,readOnly:ne=!1,selectOnFocus:Je=!e.freeSolo,value:De}=e,E=Ao(te);let z=Ae;z=t=>{const o=Ae(t);return typeof o!="string"?String(o):o};const ze=m.useRef(!1),Ne=m.useRef(!0),L=m.useRef(null),M=m.useRef(null),[ye,Qe]=m.useState(null),[V,Oe]=m.useState(-1),Ve=h?0:-1,N=m.useRef(Ve),[r,He]=ro({controlled:De,default:R,name:T}),[x,pe]=ro({controlled:Fe,default:"",name:T,state:"inputValue"}),[re,je]=m.useState(!1),Pe=m.useCallback((t,o)=>{if(!(b?r.length<o.length:o!==null)&&!f)return;let n;if(b)n="";else if(o==null)n="";else{const c=z(o);n=typeof c=="string"?c:""}x!==n&&(pe(n),q&&q(t,n,"reset"))},[z,x,b,q,pe,f,r]),[ie,We]=ro({controlled:Ie,default:!1,name:T,state:"open"}),[Xe,Be]=m.useState(!0),Ue=!b&&r!=null&&x===z(r),F=ie&&!ne,$=F?Re(k.filter(t=>!(ge&&(b?r:[r]).some(o=>o!==null&&Y(t,o)))),{inputValue:Ue&&Xe?"":x,getOptionLabel:z}):[],H=To({filteredOptions:$,value:r,inputValue:x});m.useEffect(()=>{const t=r!==H.value;re&&!t||X&&!t||Pe(null,r)},[r,Pe,re,H.value,X]);const we=ie&&$.length>0&&!ne,ke=qe(t=>{t===-1?L.current.focus():ye.querySelector(`[data-tag-index="${t}"]`).focus()});m.useEffect(()=>{b&&V>r.length-1&&(Oe(-1),ke(-1))},[r,b,V,ke]);function Ye(t,o){if(!M.current||t===-1)return-1;let l=t;for(;;){if(o==="next"&&l===$.length||o==="previous"&&l===-1)return-1;const n=M.current.querySelector(`[data-option-index="${l}"]`),c=B?!1:!n||n.disabled||n.getAttribute("aria-disabled")==="true";if(n&&!n.hasAttribute("tabindex")||c)l+=o==="next"?1:-1;else return l}}const K=qe(({event:t,index:o,reason:l="auto"})=>{if(N.current=o,o===-1?L.current.removeAttribute("aria-activedescendant"):L.current.setAttribute("aria-activedescendant",`${E}-option-${o}`),U&&U(t,o===-1?null:$[o],l),!M.current)return;const n=M.current.querySelector(`[role="option"].${u}-focused`);n&&(n.classList.remove(`${u}-focused`),n.classList.remove(`${u}-focusVisible`));let c=M.current;if(M.current.getAttribute("role")!=="listbox"&&(c=M.current.parentElement.querySelector('[role="listbox"]')),!c)return;if(o===-1){c.scrollTop=0;return}const I=M.current.querySelector(`[data-option-index="${o}"]`);if(I&&(I.classList.add(`${u}-focused`),l==="keyboard"&&I.classList.add(`${u}-focusVisible`),c.scrollHeight>c.clientHeight&&l!=="mouse"&&l!=="touch")){const y=I,oe=c.clientHeight+c.scrollTop,fo=y.offsetTop+y.offsetHeight;fo>oe?c.scrollTop=fo-c.clientHeight:y.offsetTop-y.offsetHeight*(ce?1.3:0)<c.scrollTop&&(c.scrollTop=y.offsetTop-y.offsetHeight*(ce?1.3:0))}}),_=qe(({event:t,diff:o,direction:l="next",reason:n="auto"})=>{if(!F)return;const I=Ye((()=>{const y=$.length-1;if(o==="reset")return Ve;if(o==="start")return 0;if(o==="end")return y;const oe=N.current+o;return oe<0?oe===-1&&$e?-1:ve&&N.current!==-1||Math.abs(o)>1?0:y:oe>y?oe===y+1&&$e?-1:ve||Math.abs(o)>1?y:0:oe})(),l);if(K({index:I,reason:n,event:t}),s&&o!=="reset")if(I===-1)L.current.value=x;else{const y=z($[I]);L.current.value=y,y.toLowerCase().indexOf(x.toLowerCase())===0&&x.length>0&&L.current.setSelectionRange(x.length,y.length)}}),Ze=()=>{const t=(o,l)=>{const n=o?z(o):"",c=l?z(l):"";return n===c};if(N.current!==-1&&H.filteredOptions&&H.filteredOptions.length!==$.length&&H.inputValue===x&&(b?r.length===H.value.length&&H.value.every((o,l)=>z(r[l])===z(o)):t(H.value,r))){const o=H.filteredOptions[N.current];if(o&&$.some(n=>z(n)===z(o)))return!0}return!1},ue=m.useCallback(()=>{if(!F||Ze())return;const t=b?r[0]:r;if($.length===0||t==null){_({diff:"reset"});return}if(M.current){if(t!=null){const o=$[N.current];if(b&&o&&so(r,n=>Y(o,n))!==-1)return;const l=so($,n=>Y(n,t));l===-1?_({diff:"reset"}):K({index:l});return}if(N.current>=$.length-1){K({index:$.length-1});return}K({index:N.current})}},[$.length,b?!1:r,ge,_,K,F,x,b]),eo=qe(t=>{Do(M,t),t&&ue()});m.useEffect(()=>{ue()},[ue]);const se=t=>{ie||(We(!0),Be(!0),xe&&xe(t))},Z=(t,o)=>{ie&&(We(!1),le&&le(t,o))},ee=(t,o,l,n)=>{if(b){if(r.length===o.length&&r.every((c,I)=>c===o[I]))return}else if(r===o)return;ae&&ae(t,o,l,n),He(o)},de=m.useRef(!1),me=(t,o,l="selectOption",n="options")=>{let c=l,I=o;if(b){I=Array.isArray(r)?r.slice():[];const y=so(I,oe=>Y(o,oe));y===-1?I.push(o):n!=="freeSolo"&&(I.splice(y,1),c="removeOption")}Pe(t,I),ee(t,I,c,{option:o}),!fe&&(!t||!t.ctrlKey&&!t.metaKey)&&Z(t,c),(v===!0||v==="touch"&&de.current||v==="mouse"&&!de.current)&&L.current.blur()};function oo(t,o){if(t===-1)return-1;let l=t;for(;;){if(o==="next"&&l===r.length||o==="previous"&&l===-1)return-1;const n=ye.querySelector(`[data-tag-index="${l}"]`);if(!n||!n.hasAttribute("tabindex")||n.disabled||n.getAttribute("aria-disabled")==="true")l+=o==="next"?1:-1;else return l}}const Ee=(t,o)=>{if(!b)return;x===""&&Z(t,"toggleInput");let l=V;V===-1?x===""&&o==="previous"&&(l=r.length-1):(l+=o==="next"?1:-1,l<0&&(l=0),l===r.length&&(l=-1)),l=oo(l,o),Oe(l),ke(l)},Ke=t=>{ze.current=!0,pe(""),q&&q(t,"","clear"),ee(t,b?[]:null,"clear")},to=t=>o=>{if(t.onKeyDown&&t.onKeyDown(o),!o.defaultMuiPrevented&&(V!==-1&&["ArrowLeft","ArrowRight"].indexOf(o.key)===-1&&(Oe(-1),ke(-1)),o.which!==229))switch(o.key){case"Home":F&&be&&(o.preventDefault(),_({diff:"start",direction:"next",reason:"keyboard",event:o}));break;case"End":F&&be&&(o.preventDefault(),_({diff:"end",direction:"previous",reason:"keyboard",event:o}));break;case"PageUp":o.preventDefault(),_({diff:-mo,direction:"previous",reason:"keyboard",event:o}),se(o);break;case"PageDown":o.preventDefault(),_({diff:mo,direction:"next",reason:"keyboard",event:o}),se(o);break;case"ArrowDown":o.preventDefault(),_({diff:1,direction:"next",reason:"keyboard",event:o}),se(o);break;case"ArrowUp":o.preventDefault(),_({diff:-1,direction:"previous",reason:"keyboard",event:o}),se(o);break;case"ArrowLeft":Ee(o,"previous");break;case"ArrowRight":Ee(o,"next");break;case"Enter":if(N.current!==-1&&F){const l=$[N.current],n=G?G(l):!1;if(o.preventDefault(),n)return;me(o,l,"selectOption"),s&&L.current.setSelectionRange(L.current.value.length,L.current.value.length)}else X&&x!==""&&Ue===!1&&(b&&o.preventDefault(),me(o,x,"createOption","freeSolo"));break;case"Escape":F?(o.preventDefault(),o.stopPropagation(),Z(o,"escape")):P&&(x!==""||b&&r.length>0)&&(o.preventDefault(),o.stopPropagation(),Ke(o));break;case"Backspace":if(b&&!ne&&x===""&&r.length>0){const l=V===-1?r.length-1:V,n=r.slice();n.splice(l,1),ee(o,n,"removeOption",{option:r[l]})}break;case"Delete":if(b&&!ne&&x===""&&r.length>0&&V!==-1){const l=V,n=r.slice();n.splice(l,1),ee(o,n,"removeOption",{option:r[l]})}break}},ao=t=>{je(!0),Te&&!ze.current&&se(t)},lo=t=>{if(a(M)){L.current.focus();return}je(!1),Ne.current=!0,ze.current=!1,O&&N.current!==-1&&F?me(t,$[N.current],"blur"):O&&X&&x!==""?me(t,x,"blur","freeSolo"):f&&Pe(t,r),Z(t,"blur")},Me=t=>{const o=t.target.value;x!==o&&(pe(o),Be(!1),q&&q(t,o,"input")),o===""?!w&&!b&&ee(t,null,"clear"):se(t)},A=t=>{const o=Number(t.currentTarget.getAttribute("data-option-index"));N.current!==o&&K({event:t,index:o,reason:"mouse"})},S=t=>{K({event:t,index:Number(t.currentTarget.getAttribute("data-option-index")),reason:"touch"}),de.current=!0},J=t=>{const o=Number(t.currentTarget.getAttribute("data-option-index"));me(t,$[o],"selectOption"),de.current=!1},po=t=>o=>{const l=r.slice();l.splice(t,1),ee(o,l,"removeOption",{option:r[t]})},_e=t=>{ie?Z(t,"toggleInput"):se(t)},uo=t=>{t.currentTarget.contains(t.target)&&t.target.getAttribute("id")!==E&&t.preventDefault()},no=t=>{t.currentTarget.contains(t.target)&&(L.current.focus(),Je&&Ne.current&&L.current.selectionEnd-L.current.selectionStart===0&&L.current.select(),Ne.current=!1)},Ge=t=>{!D&&(x===""||!ie)&&_e(t)};let he=X&&x.length>0;he=he||(b?r.length>0:r!==null);let Se=$;return ce&&(Se=$.reduce((t,o,l)=>{const n=ce(o);return t.length>0&&t[t.length-1].group===n?t[t.length-1].options.push(o):t.push({key:l,index:l,group:n,options:[o]}),t},[])),D&&re&&lo(),{getRootProps:(t={})=>p({"aria-owns":we?`${E}-listbox`:null},t,{onKeyDown:to(t),onMouseDown:uo,onClick:no}),getInputLabelProps:()=>({id:`${E}-label`,htmlFor:E}),getInputProps:()=>({id:E,value:x,onBlur:lo,onFocus:ao,onChange:Me,onMouseDown:Ge,"aria-activedescendant":F?"":null,"aria-autocomplete":s?"both":"list","aria-controls":we?`${E}-listbox`:void 0,"aria-expanded":we,autoComplete:"off",ref:L,autoCapitalize:"none",spellCheck:"false",role:"combobox",disabled:D}),getClearProps:()=>({tabIndex:-1,onClick:Ke}),getPopupIndicatorProps:()=>({tabIndex:-1,onClick:_e}),getTagProps:({index:t})=>p({key:t,"data-tag-index":t,tabIndex:-1},!ne&&{onDelete:po(t)}),getListboxProps:()=>({role:"listbox",id:`${E}-listbox`,"aria-labelledby":`${E}-label`,ref:eo,onMouseDown:t=>{t.preventDefault()}}),getOptionProps:({index:t,option:o})=>{const l=(b?r:[r]).some(c=>c!=null&&Y(o,c)),n=G?G(o):!1;return{key:z(o),tabIndex:-1,role:"option",id:`${E}-option-${t}`,onMouseMove:A,onClick:J,onTouchStart:S,"data-option-index":t,"aria-disabled":n,"aria-selected":l}},id:E,inputValue:x,value:r,dirty:he,expanded:F&&ye,popupOpen:F,focused:re||V!==-1,anchorEl:ye,setAnchorEl:Qe,focusedTag:V,groupedOptions:Se}}const Vo=$o(C.jsx("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");function Ho(e){return yo("MuiChip",e)}const jo=Io("MuiChip",["root","sizeSmall","sizeMedium","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","filledPrimary","filledSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","deleteIconFilledColorPrimary","deleteIconFilledColorSecondary","focusVisible"]),d=jo,Wo=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant","tabIndex","skipFocusWhenDisabled"],Bo=e=>{const{classes:a,disabled:u,size:s,color:h,iconColor:O,onDelete:v,clickable:f,variant:P}=e,T={root:["root",P,u&&"disabled",`size${g(s)}`,`color${g(h)}`,f&&"clickable",f&&`clickableColor${g(h)}`,v&&"deletable",v&&`deletableColor${g(h)}`,`${P}${g(h)}`],label:["label",`label${g(s)}`],avatar:["avatar",`avatar${g(s)}`,`avatarColor${g(h)}`],icon:["icon",`icon${g(s)}`,`iconColor${g(O)}`],deleteIcon:["deleteIcon",`deleteIcon${g(s)}`,`deleteIconColor${g(h)}`,`deleteIcon${g(P)}Color${g(h)}`]};return ko(T,Ho,a)},Uo=W("div",{name:"MuiChip",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:u}=e,{color:s,iconColor:h,clickable:O,onDelete:v,size:f,variant:P}=u;return[{[`& .${d.avatar}`]:a.avatar},{[`& .${d.avatar}`]:a[`avatar${g(f)}`]},{[`& .${d.avatar}`]:a[`avatarColor${g(s)}`]},{[`& .${d.icon}`]:a.icon},{[`& .${d.icon}`]:a[`icon${g(f)}`]},{[`& .${d.icon}`]:a[`iconColor${g(h)}`]},{[`& .${d.deleteIcon}`]:a.deleteIcon},{[`& .${d.deleteIcon}`]:a[`deleteIcon${g(f)}`]},{[`& .${d.deleteIcon}`]:a[`deleteIconColor${g(s)}`]},{[`& .${d.deleteIcon}`]:a[`deleteIcon${g(P)}Color${g(s)}`]},a.root,a[`size${g(f)}`],a[`color${g(s)}`],O&&a.clickable,O&&s!=="default"&&a[`clickableColor${g(s)})`],v&&a.deletable,v&&s!=="default"&&a[`deletableColor${g(s)}`],a[P],a[`${P}${g(s)}`]]}})(({theme:e,ownerState:a})=>{const u=e.palette.mode==="light"?e.palette.grey[700]:e.palette.grey[300];return p({maxWidth:"100%",fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:(e.vars||e).palette.text.primary,backgroundColor:(e.vars||e).palette.action.selected,borderRadius:32/2,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"unset",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",[`&.${d.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity,pointerEvents:"none"},[`& .${d.avatar}`]:{marginLeft:5,marginRight:-6,width:24,height:24,color:e.vars?e.vars.palette.Chip.defaultAvatarColor:u,fontSize:e.typography.pxToRem(12)},[`& .${d.avatarColorPrimary}`]:{color:(e.vars||e).palette.primary.contrastText,backgroundColor:(e.vars||e).palette.primary.dark},[`& .${d.avatarColorSecondary}`]:{color:(e.vars||e).palette.secondary.contrastText,backgroundColor:(e.vars||e).palette.secondary.dark},[`& .${d.avatarSmall}`]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)},[`& .${d.icon}`]:p({marginLeft:5,marginRight:-6},a.size==="small"&&{fontSize:18,marginLeft:4,marginRight:-4},a.iconColor===a.color&&p({color:e.vars?e.vars.palette.Chip.defaultIconColor:u},a.color!=="default"&&{color:"inherit"})),[`& .${d.deleteIcon}`]:p({WebkitTapHighlightColor:"transparent",color:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / 0.26)`:j(e.palette.text.primary,.26),fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / 0.4)`:j(e.palette.text.primary,.4)}},a.size==="small"&&{fontSize:16,marginRight:4,marginLeft:-4},a.color!=="default"&&{color:e.vars?`rgba(${e.vars.palette[a.color].contrastTextChannel} / 0.7)`:j(e.palette[a.color].contrastText,.7),"&:hover, &:active":{color:(e.vars||e).palette[a.color].contrastText}})},a.size==="small"&&{height:24},a.color!=="default"&&{backgroundColor:(e.vars||e).palette[a.color].main,color:(e.vars||e).palette[a.color].contrastText},a.onDelete&&{[`&.${d.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:j(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},a.onDelete&&a.color!=="default"&&{[`&.${d.focusVisible}`]:{backgroundColor:(e.vars||e).palette[a.color].dark}})},({theme:e,ownerState:a})=>p({},a.clickable&&{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:j(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)},[`&.${d.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:j(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)},"&:active":{boxShadow:(e.vars||e).shadows[1]}},a.clickable&&a.color!=="default"&&{[`&:hover, &.${d.focusVisible}`]:{backgroundColor:(e.vars||e).palette[a.color].dark}}),({theme:e,ownerState:a})=>p({},a.variant==="outlined"&&{backgroundColor:"transparent",border:e.vars?`1px solid ${e.vars.palette.Chip.defaultBorder}`:`1px solid ${e.palette.mode==="light"?e.palette.grey[400]:e.palette.grey[700]}`,[`&.${d.clickable}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${d.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`& .${d.avatar}`]:{marginLeft:4},[`& .${d.avatarSmall}`]:{marginLeft:2},[`& .${d.icon}`]:{marginLeft:4},[`& .${d.iconSmall}`]:{marginLeft:2},[`& .${d.deleteIcon}`]:{marginRight:5},[`& .${d.deleteIconSmall}`]:{marginRight:3}},a.variant==="outlined"&&a.color!=="default"&&{color:(e.vars||e).palette[a.color].main,border:`1px solid ${e.vars?`rgba(${e.vars.palette[a.color].mainChannel} / 0.7)`:j(e.palette[a.color].main,.7)}`,[`&.${d.clickable}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette[a.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:j(e.palette[a.color].main,e.palette.action.hoverOpacity)},[`&.${d.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette[a.color].mainChannel} / ${e.vars.palette.action.focusOpacity})`:j(e.palette[a.color].main,e.palette.action.focusOpacity)},[`& .${d.deleteIcon}`]:{color:e.vars?`rgba(${e.vars.palette[a.color].mainChannel} / 0.7)`:j(e.palette[a.color].main,.7),"&:hover, &:active":{color:(e.vars||e).palette[a.color].main}}})),Ko=W("span",{name:"MuiChip",slot:"Label",overridesResolver:(e,a)=>{const{ownerState:u}=e,{size:s}=u;return[a.label,a[`label${g(s)}`]]}})(({ownerState:e})=>p({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},e.size==="small"&&{paddingLeft:8,paddingRight:8}));function ho(e){return e.key==="Backspace"||e.key==="Delete"}const _o=m.forwardRef(function(a,u){const s=Oo({props:a,name:"MuiChip"}),{avatar:h,className:O,clickable:v,color:f="default",component:P,deleteIcon:T,disabled:R=!1,icon:w,label:fe,onClick:D,onDelete:B,onKeyDown:ve,onKeyUp:Re,size:ge="medium",variant:X="filled",tabIndex:G,skipFocusWhenDisabled:Ae=!1}=s,ce=co(s,Wo),be=m.useRef(null),te=Po(be,u),$e=k=>{k.stopPropagation(),B&&B(k)},Fe=k=>{k.currentTarget===k.target&&ho(k)&&k.preventDefault(),ve&&ve(k)},Y=k=>{k.currentTarget===k.target&&(B&&ho(k)?B(k):k.key==="Escape"&&be.current&&be.current.blur()),Re&&Re(k)},b=v!==!1&&D?!0:v,ae=b||B?go:P||"div",le=p({},s,{component:ae,disabled:R,size:ge,color:f,iconColor:m.isValidElement(w)&&w.props.color||f,onDelete:!!B,clickable:b,variant:X}),U=Bo(le),q=ae===go?p({component:P||"div",focusVisibleClassName:U.focusVisible},B&&{disableRipple:!0}):{};let xe=null;B&&(xe=T&&m.isValidElement(T)?m.cloneElement(T,{className:Q(T.props.className,U.deleteIcon),onClick:$e}):C.jsx(Vo,{className:Q(U.deleteIcon),onClick:$e}));let Ie=null;h&&m.isValidElement(h)&&(Ie=m.cloneElement(h,{className:Q(U.avatar,h.props.className)}));let Te=null;return w&&m.isValidElement(w)&&(Te=m.cloneElement(w,{className:Q(U.icon,w.props.className)})),C.jsxs(Uo,p({as:ae,className:Q(U.root,O),disabled:b&&R?!0:void 0,onClick:D,onKeyDown:Fe,onKeyUp:Y,ref:te,tabIndex:Ae&&R?-1:G,ownerState:le},q,ce,{children:[Ie||Te,C.jsx(Ko,{className:Q(U.label),ownerState:le,children:fe}),xe]}))}),Go=_o,qo=$o(C.jsx("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");function Jo(e){return yo("MuiAutocomplete",e)}const Qo=Io("MuiAutocomplete",["root","expanded","fullWidth","focused","focusVisible","tag","tagSizeSmall","tagSizeMedium","hasPopupIcon","hasClearIcon","inputRoot","input","inputFocused","endAdornment","clearIndicator","popupIndicator","popupIndicatorOpen","popper","popperDisablePortal","paper","listbox","loading","noOptions","option","groupLabel","groupUl"]),i=Qo;var Co,vo;const Xo=["autoComplete","autoHighlight","autoSelect","blurOnSelect","ChipProps","className","clearIcon","clearOnBlur","clearOnEscape","clearText","closeText","componentsProps","defaultValue","disableClearable","disableCloseOnSelect","disabled","disabledItemsFocusable","disableListWrap","disablePortal","filterOptions","filterSelectedOptions","forcePopupIcon","freeSolo","fullWidth","getLimitTagsText","getOptionDisabled","getOptionLabel","isOptionEqualToValue","groupBy","handleHomeEndKeys","id","includeInputInList","inputValue","limitTags","ListboxComponent","ListboxProps","loading","loadingText","multiple","noOptionsText","onChange","onClose","onHighlightChange","onInputChange","onOpen","open","openOnFocus","openText","options","PaperComponent","PopperComponent","popupIcon","readOnly","renderGroup","renderInput","renderOption","renderTags","selectOnFocus","size","slotProps","value"],Yo=["ref"],Zo=e=>{const{classes:a,disablePortal:u,expanded:s,focused:h,fullWidth:O,hasClearIcon:v,hasPopupIcon:f,inputFocused:P,popupOpen:T,size:R}=e,w={root:["root",s&&"expanded",h&&"focused",O&&"fullWidth",v&&"hasClearIcon",f&&"hasPopupIcon"],inputRoot:["inputRoot"],input:["input",P&&"inputFocused"],tag:["tag",`tagSize${g(R)}`],endAdornment:["endAdornment"],clearIndicator:["clearIndicator"],popupIndicator:["popupIndicator",T&&"popupIndicatorOpen"],popper:["popper",u&&"popperDisablePortal"],paper:["paper"],listbox:["listbox"],loading:["loading"],noOptions:["noOptions"],option:["option"],groupLabel:["groupLabel"],groupUl:["groupUl"]};return ko(w,Jo,a)},et=W("div",{name:"MuiAutocomplete",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:u}=e,{fullWidth:s,hasClearIcon:h,hasPopupIcon:O,inputFocused:v,size:f}=u;return[{[`& .${i.tag}`]:a.tag},{[`& .${i.tag}`]:a[`tagSize${g(f)}`]},{[`& .${i.inputRoot}`]:a.inputRoot},{[`& .${i.input}`]:a.input},{[`& .${i.input}`]:v&&a.inputFocused},a.root,s&&a.fullWidth,O&&a.hasPopupIcon,h&&a.hasClearIcon]}})(({ownerState:e})=>p({[`&.${i.focused} .${i.clearIndicator}`]:{visibility:"visible"},"@media (pointer: fine)":{[`&:hover .${i.clearIndicator}`]:{visibility:"visible"}}},e.fullWidth&&{width:"100%"},{[`& .${i.tag}`]:p({margin:3,maxWidth:"calc(100% - 6px)"},e.size==="small"&&{margin:2,maxWidth:"calc(100% - 4px)"}),[`& .${i.inputRoot}`]:{flexWrap:"wrap",[`.${i.hasPopupIcon}&, .${i.hasClearIcon}&`]:{paddingRight:26+4},[`.${i.hasPopupIcon}.${i.hasClearIcon}&`]:{paddingRight:52+4},[`& .${i.input}`]:{width:0,minWidth:30}},[`& .${io.root}`]:{paddingBottom:1,"& .MuiInput-input":{padding:"4px 4px 4px 0px"}},[`& .${io.root}.${Ce.sizeSmall}`]:{[`& .${io.input}`]:{padding:"2px 4px 3px 0"}},[`& .${bo.root}`]:{padding:9,[`.${i.hasPopupIcon}&, .${i.hasClearIcon}&`]:{paddingRight:26+4+9},[`.${i.hasPopupIcon}.${i.hasClearIcon}&`]:{paddingRight:52+4+9},[`& .${i.input}`]:{padding:"7.5px 4px 7.5px 5px"},[`& .${i.endAdornment}`]:{right:9}},[`& .${bo.root}.${Ce.sizeSmall}`]:{paddingTop:6,paddingBottom:6,paddingLeft:6,[`& .${i.input}`]:{padding:"2.5px 4px 2.5px 8px"}},[`& .${Le.root}`]:{paddingTop:19,paddingLeft:8,[`.${i.hasPopupIcon}&, .${i.hasClearIcon}&`]:{paddingRight:26+4+9},[`.${i.hasPopupIcon}.${i.hasClearIcon}&`]:{paddingRight:52+4+9},[`& .${Le.input}`]:{padding:"7px 4px"},[`& .${i.endAdornment}`]:{right:9}},[`& .${Le.root}.${Ce.sizeSmall}`]:{paddingBottom:1,[`& .${Le.input}`]:{padding:"2.5px 4px"}},[`& .${Ce.hiddenLabel}`]:{paddingTop:8},[`& .${Le.root}.${Ce.hiddenLabel}`]:{paddingTop:0,paddingBottom:0,[`& .${i.input}`]:{paddingTop:16,paddingBottom:17}},[`& .${Le.root}.${Ce.hiddenLabel}.${Ce.sizeSmall}`]:{[`& .${i.input}`]:{paddingTop:8,paddingBottom:9}},[`& .${i.input}`]:p({flexGrow:1,textOverflow:"ellipsis",opacity:0},e.inputFocused&&{opacity:1})})),ot=W("div",{name:"MuiAutocomplete",slot:"EndAdornment",overridesResolver:(e,a)=>a.endAdornment})({position:"absolute",right:0,top:"calc(50% - 14px)"}),tt=W(So,{name:"MuiAutocomplete",slot:"ClearIndicator",overridesResolver:(e,a)=>a.clearIndicator})({marginRight:-2,padding:4,visibility:"hidden"}),at=W(So,{name:"MuiAutocomplete",slot:"PopupIndicator",overridesResolver:({ownerState:e},a)=>p({},a.popupIndicator,e.popupOpen&&a.popupIndicatorOpen)})(({ownerState:e})=>p({padding:2,marginRight:-2},e.popupOpen&&{transform:"rotate(180deg)"})),lt=W(Lo,{name:"MuiAutocomplete",slot:"Popper",overridesResolver:(e,a)=>{const{ownerState:u}=e;return[{[`& .${i.option}`]:a.option},a.popper,u.disablePortal&&a.popperDisablePortal]}})(({theme:e,ownerState:a})=>p({zIndex:(e.vars||e).zIndex.modal},a.disablePortal&&{position:"absolute"})),nt=W(Ro,{name:"MuiAutocomplete",slot:"Paper",overridesResolver:(e,a)=>a.paper})(({theme:e})=>p({},e.typography.body1,{overflow:"auto"})),rt=W("div",{name:"MuiAutocomplete",slot:"Loading",overridesResolver:(e,a)=>a.loading})(({theme:e})=>({color:(e.vars||e).palette.text.secondary,padding:"14px 16px"})),it=W("div",{name:"MuiAutocomplete",slot:"NoOptions",overridesResolver:(e,a)=>a.noOptions})(({theme:e})=>({color:(e.vars||e).palette.text.secondary,padding:"14px 16px"})),st=W("div",{name:"MuiAutocomplete",slot:"Listbox",overridesResolver:(e,a)=>a.listbox})(({theme:e})=>({listStyle:"none",margin:0,padding:"8px 0",maxHeight:"40vh",overflow:"auto",position:"relative",[`& .${i.option}`]:{minHeight:48,display:"flex",overflow:"hidden",justifyContent:"flex-start",alignItems:"center",cursor:"pointer",paddingTop:6,boxSizing:"border-box",outline:"0",WebkitTapHighlightColor:"transparent",paddingBottom:6,paddingLeft:16,paddingRight:16,[e.breakpoints.up("sm")]:{minHeight:"auto"},[`&.${i.focused}`]:{backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},'&[aria-disabled="true"]':{opacity:(e.vars||e).palette.action.disabledOpacity,pointerEvents:"none"},[`&.${i.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},'&[aria-selected="true"]':{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:j(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${i.focused}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:j(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(e.vars||e).palette.action.selected}},[`&.${i.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:j(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}}}})),ct=W(zo,{name:"MuiAutocomplete",slot:"GroupLabel",overridesResolver:(e,a)=>a.groupLabel})(({theme:e})=>({backgroundColor:(e.vars||e).palette.background.paper,top:-8})),pt=W("ul",{name:"MuiAutocomplete",slot:"GroupUl",overridesResolver:(e,a)=>a.groupUl})({padding:0,[`& .${i.option}`]:{paddingLeft:24}}),ut=m.forwardRef(function(a,u){var s,h,O,v;const f=Oo({props:a,name:"MuiAutocomplete"}),{autoComplete:P=!1,autoHighlight:T=!1,autoSelect:R=!1,blurOnSelect:w=!1,ChipProps:fe,className:D,clearIcon:B=Co||(Co=C.jsx(qo,{fontSize:"small"})),clearOnBlur:ve=!f.freeSolo,clearOnEscape:Re=!1,clearText:ge="Clear",closeText:X="Close",componentsProps:G={},defaultValue:Ae=f.multiple?[]:null,disableClearable:ce=!1,disableCloseOnSelect:be=!1,disabled:te=!1,disabledItemsFocusable:$e=!1,disableListWrap:Fe=!1,disablePortal:Y=!1,filterSelectedOptions:b=!1,forcePopupIcon:ae="auto",freeSolo:le=!1,fullWidth:U=!1,getLimitTagsText:q=l=>`+${l}`,getOptionLabel:xe,groupBy:Ie,handleHomeEndKeys:Te=!f.freeSolo,includeInputInList:k=!1,limitTags:ne=-1,ListboxComponent:Je="ul",ListboxProps:De,loading:E=!1,loadingText:z="Loading…",multiple:ze=!1,noOptionsText:Ne="No options",openOnFocus:L=!1,openText:M="Open",PaperComponent:ye=Ro,PopperComponent:Qe=Lo,popupIcon:V=vo||(vo=C.jsx(No,{})),readOnly:Oe=!1,renderGroup:Ve,renderInput:N,renderOption:r,renderTags:He,selectOnFocus:x=!f.freeSolo,size:pe="medium",slotProps:re={}}=f,je=co(f,Xo),{getRootProps:Pe,getInputProps:ie,getInputLabelProps:We,getPopupIndicatorProps:Xe,getClearProps:Be,getTagProps:Ue,getListboxProps:F,getOptionProps:$,value:H,dirty:we,expanded:ke,id:Ye,popupOpen:K,focused:_,focusedTag:Ze,anchorEl:ue,setAnchorEl:eo,inputValue:se,groupedOptions:Z}=Fo(p({},f,{componentName:"Autocomplete"})),ee=!ce&&!te&&we&&!Oe,de=(!le||ae===!0)&&ae!==!1,{onMouseDown:me}=ie(),{ref:oo}=De??{},Ee=F(),{ref:Ke}=Ee,to=co(Ee,Yo),ao=Po(Ke,oo),Me=xe||(l=>{var n;return(n=l.label)!=null?n:l}),A=p({},f,{disablePortal:Y,expanded:ke,focused:_,fullWidth:U,getOptionLabel:Me,hasClearIcon:ee,hasPopupIcon:de,inputFocused:Ze===-1,popupOpen:K,size:pe}),S=Zo(A);let J;if(ze&&H.length>0){const l=n=>p({className:S.tag,disabled:te},Ue(n));He?J=He(H,l,A):J=H.map((n,c)=>C.jsx(Go,p({label:Me(n),size:pe},l({index:c}),fe)))}if(ne>-1&&Array.isArray(J)){const l=J.length-ne;!_&&l>0&&(J=J.splice(0,ne),J.push(C.jsx("span",{className:S.tag,children:q(l)},J.length)))}const _e=Ve||(l=>C.jsxs("li",{children:[C.jsx(ct,{className:S.groupLabel,ownerState:A,component:"div",children:l.group}),C.jsx(pt,{className:S.groupUl,ownerState:A,children:l.children})]},l.key)),no=r||((l,n)=>C.jsx("li",p({},l,{children:Me(n)}))),Ge=(l,n)=>{const c=$({option:l,index:n});return no(p({},c,{className:S.option}),l,{selected:c["aria-selected"],index:n,inputValue:se},A)},he=(s=re.clearIndicator)!=null?s:G.clearIndicator,Se=(h=re.paper)!=null?h:G.paper,t=(O=re.popper)!=null?O:G.popper,o=(v=re.popupIndicator)!=null?v:G.popupIndicator;return C.jsxs(m.Fragment,{children:[C.jsx(et,p({ref:u,className:Q(S.root,D),ownerState:A},Pe(je),{children:N({id:Ye,disabled:te,fullWidth:!0,size:pe==="small"?"small":void 0,InputLabelProps:We(),InputProps:p({ref:eo,className:S.inputRoot,startAdornment:J,onClick:l=>{l.target===l.currentTarget&&me(l)}},(ee||de)&&{endAdornment:C.jsxs(ot,{className:S.endAdornment,ownerState:A,children:[ee?C.jsx(tt,p({},Be(),{"aria-label":ge,title:ge,ownerState:A},he,{className:Q(S.clearIndicator,he==null?void 0:he.className),children:B})):null,de?C.jsx(at,p({},Xe(),{disabled:te,"aria-label":K?X:M,title:K?X:M,ownerState:A},o,{className:Q(S.popupIndicator,o==null?void 0:o.className),children:V})):null]})}),inputProps:p({className:S.input,disabled:te,readOnly:Oe},ie())})})),ue?C.jsx(lt,p({as:Qe,disablePortal:Y,style:{width:ue?ue.clientWidth:null},ownerState:A,role:"presentation",anchorEl:ue,open:K},t,{className:Q(S.popper,t==null?void 0:t.className),children:C.jsxs(nt,p({ownerState:A,as:ye},Se,{className:Q(S.paper,Se==null?void 0:Se.className),children:[E&&Z.length===0?C.jsx(rt,{className:S.loading,ownerState:A,children:z}):null,Z.length===0&&!le&&!E?C.jsx(it,{className:S.noOptions,ownerState:A,role:"presentation",onMouseDown:l=>{l.preventDefault()},children:Ne}):null,Z.length>0?C.jsx(st,p({as:Je,className:S.listbox,ownerState:A},to,De,{ref:ao,children:Z.map((l,n)=>Ie?_e({key:l.key,group:l.group,children:l.options.map((c,I)=>Ge(c,l.index+I))}):Ge(l,n))})):null]}))})):null]})}),gt=ut;export{gt as A,i as a};