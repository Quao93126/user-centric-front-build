import{E as P,r as n,K as b,F,N as z,j as s,S as q,e as u,T as o,l as p,o as x,I as f,a as I,H as T,W as k}from"./index-4e2a7d6a.js";import{u as E}from"./formik.esm-c890c994.js";import{c as $,a,b as R}from"./index.esm-6a86f958.js";import{T as t}from"./TextField-5236e66f.js";import{L as A}from"./LoadingButton-745fb652.js";import{C as D}from"./Card-443da7c4.js";import"./isMuiElement-3c3efce3.js";import"./Select-cdceecf2.js";import"./react-is.production.min-a192e302.js";import"./Menu-7eab5cd2.js";import"./OutlinedInput-9707cf46.js";const L=$({firstName:a().required("FirstName is required"),lastName:a().required("LastName is required"),email:a().email("Enter a valid email").required("Email is required"),password:a().min(8,"Password should be of minimum 8 characters length").required("Password is required"),confirmpassword:a().oneOf([R("password"),null],"Passwords must match").required("Confirm Password is required")});function M(){const i=P();n.useEffect(()=>{i(b())},[i]);const w=F(),[l,g]=n.useState(!1),[d,j]=n.useState(!1),v=()=>g(r=>!r),C=()=>j(r=>!r),m=r=>{r.preventDefault()},e=E({initialValues:{firstName:"",lastName:"",email:"",password:"",confirmpassword:""},validationSchema:L,onSubmit:r=>{const{firstName:c,lastName:h,email:S,password:B}=r,y=`${c.charAt(0).toUpperCase()}${c.slice(1)} ${h.charAt(0).toUpperCase()}${h.slice(1)}`;i(z({username:y,email:S,password:B})).unwrap().then(()=>{console.log("dispatch success"),w.push("/login")}).catch(()=>{console.log("failed")})}}),N=s.jsx(q,{children:s.jsxs("form",{onSubmit:e.handleSubmit,style:{height:"400px"},children:[s.jsxs(u,{spacing:3,children:[s.jsx(o,{sx:{fontSize:"13px"},children:"First name*"}),s.jsx(t,{id:"fn",name:"firstName",label:"first name",size:"small",value:e.values.firstName,onChange:e.handleChange,onBlur:e.handleBlur,error:e.touched.firstName&&!!e.errors.firstName,helperText:e.touched.firstName&&e.errors.firstName,InputProps:{style:{marginTop:0}}}),s.jsx(o,{sx:{fontSize:"13px"},children:"Last name*"}),s.jsx(t,{id:"ln",name:"lastName",label:"last name",size:"small",value:e.values.lastName,onChange:e.handleChange,onBlur:e.handleBlur,error:e.touched.lastName&&!!e.errors.lastName,helperText:e.touched.lastName&&e.errors.lastName}),s.jsx(o,{sx:{fontSize:"13px"},children:"Email*"}),s.jsx(t,{id:"em",name:"email",label:"email",size:"small",value:e.values.email,onChange:e.handleChange,onBlur:e.handleBlur,error:e.touched.email&&!!e.errors.email,helperText:e.touched.email&&e.errors.email}),s.jsx(o,{sx:{fontSize:"13px"},children:"Password*"}),s.jsx(t,{id:"pw",name:"password",size:"small",type:l?"text":"password",value:e.values.password,onChange:e.handleChange,onBlur:e.handleBlur,error:e.touched.password&&!!e.errors.password,helperText:e.touched.password&&e.errors.password,InputProps:{endAdornment:s.jsx(p,{position:"end",children:s.jsx(x,{onClick:v,onMouseDown:m,edge:"end",children:s.jsx(f,{icon:l?"eva:eye-fill":"eva:eye-off-fill"})})})}}),s.jsx(o,{sx:{fontSize:"13px"},children:"Confirm Password*"}),s.jsx(t,{id:"cpw",name:"confirmpassword",size:"small",type:d?"text":"password",value:e.values.confirmpassword,onChange:e.handleChange,onBlur:e.handleBlur,error:e.touched.confirmpassword&&!!e.errors.confirmpassword,helperText:e.touched.confirmpassword&&e.errors.confirmpassword,InputProps:{endAdornment:s.jsx(p,{position:"end",children:s.jsx(x,{onClick:C,onMouseDown:m,edge:"end",children:s.jsx(f,{icon:d?"eva:eye-fill":"eva:eye-off-fill"})})})}})]}),s.jsx(A,{fullWidth:!0,size:"middle",type:"submit",variant:"contained",color:"inherit",sx:{color:"#FFFFFF",backgroundColor:"#33C2B2",mt:4},children:"Sign Up"})]})});return s.jsxs(I,{sx:{position:"relative",width:"100%",height:"100vh",overflow:"hidden"},children:[s.jsxs("video",{autoPlay:!0,muted:!0,loop:!0,playsInline:!0,style:{objectFit:"cover",width:"100%",height:"100%",position:"absolute",top:0,left:0,zIndex:-1},children:[s.jsx("source",{src:"/assets/background.mp4",type:"video/mp4"}),"Your browser does not support the video tag."]}),s.jsx(T,{sx:{position:"fixed"}}),s.jsx(u,{alignItems:"center",justifyContent:"center",sx:{height:"550px",opacity:.6},children:s.jsxs(D,{sx:{p:5,width:1,maxWidth:420},children:[s.jsx(o,{sx:{fontSize:"25px",mb:2},children:"Register"}),N]})})]})}function Z(){return s.jsxs(s.Fragment,{children:[s.jsx(k,{children:s.jsx("title",{children:" Register"})}),s.jsx(M,{})]})}export{Z as default};
