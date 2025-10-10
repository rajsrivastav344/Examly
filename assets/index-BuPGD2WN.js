import{r as o,j as e}from"./react-DuErVCKP.js";import{c as O}from"./react-dom-CWBMq-c3.js";import{L as S,O as I,u as _,a as P,B as H,R as F,b as w}from"./react-router-l4mpwDNJ.js";import{a as v}from"./axios-ngrFHoWO.js";import{m as A}from"./framer-motion-BelF-Rsv.js";import"./bootstrap-BU2K4wdh.js";import"./scheduler-CoSDG3-6.js";import"./motion-dom-DMoQULKC.js";import"./motion-utils-CjIqCkNq.js";(function(){const h=document.createElement("link").relList;if(h&&h.supports&&h.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))u(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&u(d)}).observe(document,{childList:!0,subtree:!0});function m(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerPolicy&&(l.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?l.credentials="include":n.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function u(n){if(n.ep)return;n.ep=!0;const l=m(n);fetch(n.href,l)}})();const B=()=>{const[s,h]=o.useState({email:"",password:""}),m=l=>{h({...s,[l.target.name]:l.target.value})},u=async l=>{l.preventDefault();const d=await v.post("http://localhost:5000/api/admin/login",s);d.data.message=="Login Successfully"&&(alert("Login Successfully"),localStorage.setItem("adminEmail",d.data.admin.email),localStorage.setItem("id",d.data.admin.id),localStorage.setItem("role",d.data.admin.role),window.location.href="/adminDashboard")},n={page:{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",background:"linear-gradient(135deg, #4a3365ff, #ac66e9ff, #3c2e58ff)",fontFamily:"Segoe UI, sans-serif"},card:{width:"900px",height:"520px",display:"flex",borderRadius:"18px",overflow:"hidden",boxShadow:"0 25px 60px rgba(0,0,0,0.35)",backgroundColor:"#fff"},leftPanel:{flex:1,background:"linear-gradient(135deg, #570c78ff, #593a78, #8b44d2ff)",color:"#fff",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",position:"relative",padding:"30px"},abstractCircles:{position:"absolute",borderRadius:"50%",background:"rgba(239, 104, 248, 0.15)",zIndex:0},bigCircle:{width:"140px",height:"140px",top:"18%",left:"10%"},smallCircle:{width:"90px",height:"90px",bottom:"12%",right:"10%"},welcomeText:{fontSize:"23px",fontWeight:"600",marginBottom:"5px",zIndex:1,color:"#9582bcff"},subText:{fontSize:"15px",opacity:.9,zIndex:1,textAlign:"center"},rightPanel:{flex:1,backgroundColor:"#fff",display:"flex",justifyContent:"center",alignItems:"center",padding:"30px"},formBox:{width:"100%",maxWidth:"300px"},heading:{fontSize:"40px",marginBottom:"2px",fontWeight:"600",display:"inline-block",borderBottom:"4px solid",color:"#4a0b65ff"},subheading:{color:"#d4a3ffff",fontSize:"37px",marginBottom:"1px"},label:{fontSize:"15px",fontWeight:"500",marginBottom:"1px"},input:{width:"100%",padding:"10px 8px",border:"1px solid #ccc",borderRadius:"6px",fontSize:"14px",marginBottom:"10px",outline:"none"},submitBtn:{width:"100%",padding:"11px",border:"none",borderRadius:"6px",background:"linear-gradient(to right, #3a0451ff, #7827c0ff)",color:"#fff",fontSize:"15px",fontWeight:"600",cursor:"pointer",marginBottom:"10px",transition:"background 0.3s ease",marginTop:"5px"},orDivider:{textAlign:"center",color:"#999",fontSize:"13px",marginBottom:"10px"},googleButton:{width:"100%",padding:"10px",border:"1px solid #ccc",borderRadius:"8px",backgroundColor:"#fff",cursor:"pointer",fontSize:"14px",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",marginBottom:"12px"},createAccount:{textAlign:"center",fontSize:"13px",marginTop:"6px",color:"#444"},link:{marginLeft:"6px",color:"#ed268dff",textDecoration:"none",fontWeight:"500"}};return e.jsx("div",{style:n.page,children:e.jsxs("div",{style:n.card,children:[e.jsxs("div",{style:n.leftPanel,children:[e.jsx("div",{style:{...n.abstractCircles,...n.bigCircle}}),e.jsx("div",{style:{...n.abstractCircles,...n.smallCircle}}),e.jsx("div",{style:n.subheading,children:"Welcome Back Admin!!"}),e.jsx("div",{style:n.welcomeText,children:"Your command center awaits."}),e.jsx("div",{style:n.subText,children:"Manage users, monitor exams, and track performance — all in one place."})]}),e.jsx("div",{style:n.rightPanel,children:e.jsxs("form",{style:n.formBox,method:"POST",onSubmit:u,children:[e.jsx("div",{style:{textAlign:"center"},children:e.jsx("div",{className:"border-b-2",style:n.heading,children:"Admin Login"})}),e.jsx("br",{}),e.jsx("label",{htmlFor:"email",style:n.label,children:"Email"}),e.jsx("input",{type:"email",name:"email",onChange:m,placeholder:"Enter Email",style:n.input}),e.jsx("label",{htmlFor:"password",style:n.label,children:"Password"}),e.jsx("input",{type:"password",name:"password",onChange:m,placeholder:"••••",required:!0,style:n.input}),e.jsx("button",{type:"submit",style:n.submitBtn,children:"Log In"}),e.jsx("div",{style:n.orDivider,children:"or"}),e.jsxs("div",{style:n.googleButton,children:[e.jsx("img",{src:"https://www.svgrepo.com/show/475656/google-color.svg",alt:"Google",style:{width:"16px",verticalAlign:"middle"}}),"Sign in with Google"]}),e.jsxs("div",{style:n.createAccount,children:["Don't have an account?",e.jsx("a",{href:"/signup",style:n.link,children:"Sign up"})]})]})})]})})},J=()=>{const[s,h]=o.useState(!1),m=()=>{const u=new Date().getHours();return u<12?"Good Morning":u<18?"Good Afternoon":"Good Evening"};return e.jsxs("div",{className:`dashboard-container ${s?"collapsed":""}`,children:[e.jsxs("div",{className:"sidebar",children:[e.jsx("div",{className:"sidebar-header p-2 border-b-2 ",style:{borderBottom:"2px solid #bf9debff"},children:e.jsx("h4",{children:"Examly"})}),e.jsxs("ul",{className:"nav-links p-2",children:[e.jsxs("li",{children:[e.jsx("i",{className:"fa-solid fa-chart-bar"}),e.jsx(S,{to:"/adminDashboard/session",className:"text-white text-decoration-none",children:"Session"})]}),e.jsxs("li",{children:[" ",e.jsx("i",{className:"fa-solid fa-book-open"})," ",e.jsx(S,{to:"/adminDashboard/subject",className:"text-white text-decoration-none",children:"Subject"})]}),e.jsxs("li",{children:[" ",e.jsx("i",{className:"fa-solid fa-user"}),e.jsx(S,{to:"examinee",className:"text-white text-decoration-none",children:" Examinee"})]}),e.jsxs("li",{children:[" ",e.jsx("i",{className:"fa-solid fa-question"}),e.jsx(S,{to:"/adminDashboard/question",className:"text-white text-decoration-none",children:" Question Bank"})]}),e.jsxs("li",{children:[e.jsx("i",{className:"fa-solid fa-pen"}),e.jsx(S,{to:"/adminDashboard/examination",className:"text-white text-decoration-none",children:" Examination"})]}),e.jsxs("li",{children:[" ",e.jsx("i",{className:"fa-solid fa-trophy"}),e.jsx(S,{to:"reportGeneration",className:"text-white text-decoration-none",children:" Report Generation"})]}),e.jsxs("li",{children:[" ",e.jsx("i",{className:"fa-solid fa-calculator"})," ",e.jsx(S,{to:"changepassword",className:"text-white text-decoration-none",children:" Change Password"})]}),e.jsxs("li",{children:[e.jsx("i",{className:"fa-solid fa-message"})," ",e.jsx(S,{to:"messageReply",className:"text-white text-decoration-none",children:"Message"})]}),e.jsxs("li",{children:[e.jsx("i",{className:"fa-solid fa-arrow-right-from-bracket"})," ",e.jsx(S,{className:"text-decoration-none text-white",onClick:()=>{localStorage.removeItem("role"),localStorage.removeItem("email"),window.location.href="/adlogin"},children:"Log Out"})]})]})]}),e.jsxs("div",{className:"main",children:[e.jsxs("div",{className:"topbar d-flex justify-content-between align-items-center p-3 border-bottom border-success bg-dark",children:[e.jsxs("h4",{className:"text-white mb-0",children:[m()," ",e.jsx("i",{className:"fa-solid fa-user-tie ms-2"})]}),e.jsx("h2",{children:"Admin Dashboard"})]}),e.jsx("div",{className:"content",children:e.jsx(I,{})})]})]})},z=()=>{const[s,h]=o.useState({name:"",description:""}),m=t=>{h({...s,[t.target.name]:t.target.value})},[u,n]=o.useState({id:""}),[l,d]=o.useState(null),x=async t=>{t.preventDefault();try{if(l){const r=await v.put(`http://localhost:5000/api/session/${u.id}`,s);alert("Updated Successfully")}else{const r=await v.post("http://localhost:5000/api/session",s);alert("Added Successfully")}}catch(r){alert("Session not Added"),console.log(r)}},[p,g]=o.useState([]),f=async()=>{const t=await v.get("http://localhost:5000/api/session");g(t.data)};o.useEffect(()=>{f()},[]);const c=async t=>{try{const r=await v.delete(`http://localhost:5000/api/session/${t}`);alert("Session Deleted Successfully"),f()}catch(r){alert("Sorry Try Again Later"),console.log(r)}},a=t=>{h({name:t.name,description:t.description}),d(!0),n({id:t._id})};return e.jsx("div",{children:e.jsxs("div",{className:"container-fluid p-0",children:[e.jsx("div",{className:"row ",children:e.jsx("div",{className:"col-sm-12 ",children:e.jsx("div",{className:"card",style:{border:"1px solid #6f42c1",minHeight:"320px",width:"100%"},children:e.jsx("div",{className:"",children:e.jsxs("form",{method:"post",onSubmit:x,className:"border p-2 rounded",children:[e.jsx("div",{className:"row ",children:e.jsx("div",{className:"col-sm-12 ",children:e.jsxs("h5",{className:"fw-bold",style:{color:"#6f42c1"},children:[e.jsx("i",{className:"fa-solid fa-plus",style:{marginRight:"8px"}}),"Add New Session"]})})}),e.jsxs("div",{className:"row mt-1",children:[e.jsx("div",{className:"col-sm-12",children:e.jsx("h6",{children:"Session Name:"})}),e.jsx("div",{className:"col-sm-12 ",children:e.jsx("input",{type:"text",name:"name",value:s.name,onChange:m,placeholder:"Eg:25-26",className:"form-control"})})]}),e.jsxs("div",{className:"row mt-1",children:[e.jsx("div",{className:"col-sm-12",children:e.jsx("h6",{children:"Description"})}),e.jsx("div",{className:"col-sm-12 ",children:e.jsx("textarea",{name:"description",onChange:m,value:s.description,className:"form-control",placeholder:"",rows:"2",children:s.description})})]}),e.jsx("button",{type:"submit",className:"btn btn-light text-white  mt-1",style:{background:"#39064fff "},children:"Add Session"})]})})})})}),e.jsx("div",{className:"row mt-2",children:e.jsx("div",{className:"col-sm-12",children:e.jsx("div",{className:"card mx-auto mt-2",style:{border:"1px solid #6f42c1",width:"100%"},children:e.jsx("div",{className:"card-body",children:e.jsxs("div",{className:"container p-0",children:[e.jsx("h3",{className:"fw-bold",style:{color:"#6f42c1"},children:"Session List"}),e.jsxs("table",{className:"table table-bordered text-center",children:[e.jsx("thead",{className:"thead-light-purple",children:e.jsxs("tr",{children:[e.jsx("th",{children:" S.No."}),e.jsx("th",{children:" Session Name"}),e.jsx("th",{children:" Description"}),e.jsx("th",{children:"Action"})]})}),e.jsx("tbody",{children:p.map((t,r)=>e.jsxs("tr",{children:[e.jsx("td",{children:r+1}),e.jsx("td",{children:t.name}),e.jsx("td",{children:t.description}),e.jsxs("td",{children:[e.jsx("button",{className:"btn-danger btn",onClick:()=>{c(t._id)},children:"Delete"}),e.jsx("button",{className:`btn\r
                            btn-success`,onClick:()=>{a(t)},children:"Edit"})]})]},t._id))})]})]})})})})})]})})},U=()=>{const[s,h]=o.useState({name:"",description:""}),m=t=>{h({...s,[t.target.name]:t.target.value})},[u,n]=o.useState({id:""}),[l,d]=o.useState(null),x=async t=>{t.preventDefault();try{if(l){const r=await v.put("http://localhost:5000/api/subject",s);alert("Updated Successfully")}else{const r=await v.post("http://localhost:5000/api/subject",s);alert("Added Successfully")}}catch(r){alert("subject not Added"),console.log(r)}},[p,g]=o.useState([]),f=async()=>{const t=await v.get("http://localhost:5000/api/subject");g(t.data)};o.useEffect(()=>{f()},[]);const c=async t=>{try{const r=await v.delete(`http://localhost:5000/api/subject/${t}`);alert("subject Deleted Successfully"),f()}catch(r){alert("Sorry Try Again Later"),console.log(r)}},a=t=>{h({name:t.name,description:t.description}),d(!0),n({id:t._id})};return e.jsx("div",{children:e.jsxs("div",{className:"container-fluid p-0",children:[e.jsx("div",{className:"row ",children:e.jsx("div",{className:"col-sm-12 ",children:e.jsx("div",{className:"card",style:{border:"1px solid #6f42c1",minHeight:"320px",width:"100%"},children:e.jsx("div",{className:"",children:e.jsxs("form",{method:"post",onSubmit:x,className:"border p-2 rounded",children:[e.jsx("div",{className:"row ",children:e.jsx("div",{className:"col-sm-12 ",children:e.jsxs("h5",{className:"fw-bold",style:{color:"#6f42c1"},children:[e.jsx("i",{className:"fa-solid fa-plus",style:{marginRight:"8px"}}),"Add New subject"]})})}),e.jsxs("div",{className:"row mt-1",children:[e.jsx("div",{className:"col-sm-12",children:e.jsx("h6",{children:"subject Name:"})}),e.jsx("div",{className:"col-sm-12 ",children:e.jsx("input",{type:"text",name:"name",onChange:m,placeholder:"Eg:25-26",className:"form-control"})})]}),e.jsxs("div",{className:"row mt-1",children:[e.jsx("div",{className:"col-sm-12",children:e.jsx("h6",{children:"Description"})}),e.jsx("div",{className:"col-sm-12 ",children:e.jsx("textarea",{name:"description",onChange:m,className:"form-control",placeholder:"",rows:"2"})})]}),e.jsx("button",{type:"submit",className:"btn btn-light text-white  mt-1",style:{background:"#39064fff "},children:"Add subject"})]})})})})}),e.jsx("div",{className:"row mt-2",children:e.jsx("div",{className:"col-sm-12",children:e.jsx("div",{className:"card mx-auto mt-2",style:{border:"1px solid #6f42c1",width:"100%"},children:e.jsx("div",{className:"card-body",children:e.jsxs("div",{className:"container p-0",children:[e.jsx("h3",{className:"fw-bold",style:{color:"#6f42c1"},children:"subject List"}),e.jsxs("table",{className:"table table-bordered text-center",children:[e.jsx("thead",{className:"thead-light-purple",children:e.jsxs("tr",{children:[e.jsx("th",{children:" S.No."}),e.jsx("th",{children:" subject Name"}),e.jsx("th",{children:" Description"}),e.jsx("th",{children:"Action"})]})}),e.jsx("tbody",{children:p.map((t,r)=>e.jsxs("tr",{children:[e.jsx("td",{children:r+1}),e.jsx("td",{children:t.name}),e.jsx("td",{children:t.description}),e.jsxs("td",{children:[e.jsx("button",{className:"btn-danger btn",onClick:()=>{c(t._id)},children:"Delete"}),e.jsx("button",{className:`btn\r
                            btn-success`,onClick:()=>{a(t)},children:"Edit"})]})]},t._id))})]})]})})})})})]})})},W=()=>{const[s,h]=o.useState({examName:"",date:"",time:"",duration:"",totalMarks:"",passingMarks:"",sessionId:"",status:"Scheduled",questionDistribution:[{subject:"",numberOfQuestions:""}]}),[m,u]=o.useState([]),[n,l]=o.useState([]),[d,x]=o.useState(""),[p,g]=o.useState([]),[f,c]=o.useState(!1),[a,t]=o.useState(null);o.useEffect(()=>{r()},[]);const r=async()=>{try{const[j,N,C]=await Promise.all([v.get("http://localhost:5000/api/subject"),v.get("http://localhost:5000/api/session"),v.get("http://localhost:5000/api/exams/exams")]);u(j.data||[]),l(N.data||[]),g(C.data||[])}catch(j){console.error("Error fetching data:",j),x("Failed to load subjects or sessions")}},i=j=>{h({...s,[j.target.name]:j.target.value}),x("")},k=(j,N)=>{const C=[...s.questionDistribution];C[j][N.target.name]=N.target.value,h({...s,questionDistribution:C}),x("")},y=()=>{h({...s,questionDistribution:[...s.questionDistribution,{subject:"",numberOfQuestions:""}]})},M=j=>{if(s.questionDistribution.length===1){x("At least one subject is required");return}const N=[...s.questionDistribution];N.splice(j,1),h({...s,questionDistribution:N})},T=()=>!s.examName||!s.date||!s.time||!s.duration||!s.totalMarks||!s.passingMarks||!s.sessionId?"All fields are required":parseInt(s.passingMarks)>parseInt(s.totalMarks)?"Passing marks cannot exceed total marks":s.questionDistribution.some(j=>!j.subject||!j.numberOfQuestions||parseInt(j.numberOfQuestions)<=0)?"All question distributions must have a valid subject and number of questions":"",E=async j=>{j.preventDefault(),x("");const N=T();if(N){x(N);return}try{f&&a?(await v.put(`http://localhost:5000/api/exams/${a}`,s),alert("Exam Updated Successfully")):(await v.post("http://localhost:5000/api/exams",s),alert("Exam Created Successfully")),h({examName:"",date:"",time:"",duration:"",totalMarks:"",passingMarks:"",sessionId:"",status:"Scheduled",questionDistribution:[{subject:"",numberOfQuestions:""}]}),c(!1),t(null),r()}catch(C){console.error("Error submitting form:",C),x(C.response?.data?.error||"Error submitting form")}},D=async j=>{await v.delete(`http://localhost:5000/api/exams/${j}`)?(alert("Deleted Successfully"),r()):alert("Try Again Later")},b=j=>{h({examName:j.title,totalMarks:j.totalMarks,passingMarks:j.passingMarks,date:j.date,time:j.time,duration:j.duration,sessionId:j.sessionId._id,status:j.status,questionDistribution:j.questionDistribution||[{subject:"",numberOfQuestions:""}]}),t(j._id),c(!0),window.scrollTo({top:0,behavior:"smooth"})};return e.jsxs("div",{className:"container-fluid p-0",children:[e.jsx("div",{className:"row ",children:e.jsx("div",{className:"col-sm-12 ",children:e.jsxs("div",{className:"card p-2",style:{border:"1px solid #6f42c1",minHeight:"220px",width:"100%"},children:[e.jsx("h3",{className:"fw-bold",style:{color:"#6f42c1"},children:f?"Edit Examination":"Create Examination"}),d&&e.jsx("div",{className:"alert alert-danger",children:d}),e.jsxs("form",{onSubmit:E,children:[e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-sm-4",children:e.jsx("input",{type:"text",className:"form-control",name:"examName",placeholder:"Exam Name",value:s.examName,onChange:i,required:!0})}),e.jsx("div",{className:"col-sm-4",children:e.jsx("input",{type:"number",className:"form-control",name:"totalMarks",placeholder:"Total Marks",value:s.totalMarks,onChange:i,min:"1",required:!0})}),e.jsx("div",{className:"col-sm-4",children:e.jsx("input",{type:"number",className:"form-control",name:"passingMarks",placeholder:"Passing Marks",value:s.passingMarks,onChange:i,min:"1",required:!0})})]}),e.jsxs("div",{className:"row mt-1",children:[e.jsx("div",{className:"col-sm-4",children:e.jsx("input",{type:"date",className:"form-control",name:"date",placeholder:"Date",value:s.date,onChange:i,required:!0})}),e.jsx("div",{className:"col-sm-4",children:e.jsx("input",{type:"time",className:"form-control",name:"time",placeholder:"Time",value:s.time,onChange:i,required:!0})}),e.jsx("div",{className:"col-sm-4",children:e.jsx("input",{type:"number",className:"form-control",name:"duration",placeholder:"Duration(minutes)",value:s.duration,onChange:i,min:"1",required:!0})})]}),e.jsxs("div",{className:"row mt-1",children:[e.jsx("div",{className:"col-sm-6",children:e.jsxs("select",{className:"form-select",name:"sessionId",value:s.sessionId,onChange:i,required:!0,children:[e.jsx("option",{value:"",children:"Select Session"}),n.map(j=>e.jsx("option",{value:j._id,children:j.name},j._id))]})}),e.jsx("div",{className:"col-sm-6",children:e.jsxs("select",{className:"form-select",name:"status",value:s.status,onChange:i,required:!0,children:[e.jsx("option",{value:"Scheduled",children:"Scheduled"}),e.jsx("option",{value:"Draft",children:"Draft"}),e.jsx("option",{value:"Closed",children:"Closed"})]})})]}),e.jsx("hr",{}),e.jsx("h5",{className:"fw-bold",style:{color:"#6f42c1"},children:"Question Distribution"}),s.questionDistribution.map((j,N)=>e.jsxs("div",{className:"row mb-1",children:[e.jsx("div",{className:"col-md-6",children:e.jsxs("select",{className:"form-select",name:"subject",value:j.subject,onChange:C=>k(N,C),required:!0,children:[e.jsx("option",{value:"",children:"Select Subject"}),m.map(C=>e.jsx("option",{value:C._id,children:C.name},C._id))]})}),e.jsx("div",{className:"col-md-4",children:e.jsx("input",{type:"number",className:"form-control",name:"numberOfQuestions",placeholder:"No. of Questions",value:j.numberOfQuestions,onChange:C=>k(N,C),min:"1",required:!0})}),e.jsx("div",{className:"col-md-2",children:e.jsx("button",{type:"button",className:"btn-delete",onClick:()=>M(N),children:"Remove"})})]},N)),e.jsx("div",{className:"mb-1",children:e.jsx("button",{type:"button",className:"btn btn-secondary",style:{background:"#795899ff"},onClick:y,children:"+ Add Subject"})}),e.jsx("button",{type:"submit",className:"btn btn-light text-white  mt-1",style:{background:"#39064fff "},children:f?"Update Exam":"Create Exam"})]})]})})}),e.jsx("div",{className:"card mx-auto mt-2",style:{border:"1px solid #6f42c1",width:"100%"},children:e.jsxs("div",{className:"card-body",children:[e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-sm-12",children:e.jsx("h3",{className:"fw-bold",style:{color:"#6f42c1"},children:"Examination Details"})})}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-sm-12",children:e.jsxs("table",{className:"table table-bordered text-center",children:[e.jsx("thead",{className:"thead-light-purple",children:e.jsxs("tr",{children:[e.jsx("th",{children:"S.No."}),e.jsx("th",{children:"Exam Name"}),e.jsx("th",{children:"Total Marks"}),e.jsx("th",{children:"Passing Marks"}),e.jsx("th",{children:"Date"}),e.jsx("th",{children:"Time"}),e.jsx("th",{children:"Duration"}),e.jsx("th",{children:"Session"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Action"})]})}),e.jsx("tbody",{children:p.map((j,N)=>e.jsxs("tr",{children:[e.jsx("td",{children:N+1}),e.jsx("td",{children:j.title}),e.jsx("td",{children:j.totalMarks}),e.jsx("td",{children:j.passingMarks}),e.jsx("td",{children:j.date}),e.jsx("td",{children:j.time}),e.jsx("td",{children:j.duration}),e.jsx("td",{children:j.sessionId?.name||"N/A"}),e.jsx("td",{children:j.status}),e.jsxs("td",{children:[e.jsx("button",{className:"btn-edit me-2",onClick:()=>b(j),children:"Edit"}),e.jsx("button",{className:"btn-delete",onClick:()=>D(j._id),children:"Delete"})]})]},j._id))})]})})})]})})]})},q=()=>{const[s,h]=o.useState({question:"",optionA:"",optionB:"",optionC:"",optionD:"",correctAnswer:"",subject:""}),[m,u]=o.useState([]),[n,l]=o.useState([]),[d,x]=o.useState({id:""}),[p,g]=o.useState(!1),[f,c]=o.useState([]),a=y=>{h({...s,[y.target.name]:y.target.value})},t=async y=>{y.preventDefault();try{p?await v.put(`http://localhost:5000/api/question/${d.id}`,s)&&alert("Question updated successfully"):await v.post("http://localhost:5000/api/question",s)&&alert("Question added successfully"),h({question:"",optionA:"",optionB:"",optionC:"",optionD:"",correctAnswer:"",subject:""}),g(!1),x({id:""}),r()}catch(M){console.log(M),alert("Sorry, try again later")}},r=async()=>{const y=await v.get("http://localhost:5000/api/question");c(y.data.data);const M=await v.get("http://localhost:5000/api/subject");l(M.data)};o.useEffect(()=>{r()},[]);const i=async y=>{try{await v.delete(`http://localhost:5000/api/question/${y}`)&&(alert("Deleted Successfully"),r())}catch{alert("Try Again Later")}},k=y=>{h({question:y.question,optionA:y.optionA,optionB:y.optionB,optionC:y.optionC,optionD:y.optionD,correctAnswer:y.correctAnswer}),x({id:y._id}),g(!0)};return e.jsxs("div",{className:"container-fluid p-0",children:[e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-sm-12",children:e.jsx("div",{className:"card",style:{border:"1px solid #6f42c1",minHeight:"220px",width:"100%"},children:e.jsxs("form",{onSubmit:t,className:"border p-2 rounded",children:[e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-sm-12 ",children:e.jsxs("h5",{className:"fw-bold",style:{color:"#6f42c1"},children:[e.jsx("i",{className:"fa-solid fa-plus",style:{marginRight:"8px"}})," ",p?"Edit Question":"Add Question"]})})}),e.jsx("div",{className:"row",children:e.jsxs("div",{className:"col-sm-12",children:[e.jsx("h5",{className:"mt-1",children:"Question"}),e.jsx("textarea",{name:"question",value:s.question,onChange:a,required:!0,className:"form-control",placeholder:"Enter Question Here"})]})}),e.jsxs("div",{className:"row mt-1",children:[e.jsx("div",{className:"col-sm-6",children:e.jsx("input",{type:"text",name:"optionA",placeholder:"a.) Option 1",className:"form-control",value:s.optionA,onChange:a,required:!0})}),e.jsx("div",{className:"col-sm-6",children:e.jsx("input",{type:"text",name:"optionB",placeholder:"b.) Option 2",className:"form-control",value:s.optionB,onChange:a,required:!0})})]}),e.jsxs("div",{className:"row mt-1",children:[e.jsx("div",{className:"col-sm-6",children:e.jsx("input",{type:"text",name:"optionC",placeholder:"c.) Option 3",className:"form-control",value:s.optionC,onChange:a,required:!0})}),e.jsx("div",{className:"col-sm-6",children:e.jsx("input",{type:"text",name:"optionD",placeholder:"d.) Option 4",className:"form-control",value:s.optionD,onChange:a,required:!0})})]}),e.jsxs("div",{className:"row mt-1",children:[e.jsx("div",{className:"col-sm-6",children:e.jsx("input",{name:"correctAnswer",className:"form-control",placeholder:"Correct Option",value:s.correctAnswer,onChange:a,required:!0})}),e.jsx("div",{className:"col-sm-6",children:e.jsxs("select",{name:"subject",value:s.subject,onChange:a,className:"form-select",required:!0,children:[e.jsx("option",{value:"",children:" Select Subject"}),n.map(y=>e.jsx("option",{value:y._id,children:y.name},y._id))]})})]}),e.jsx("button",{type:"submit",className:"btn btn-light text-white  mt-1",style:{background:"#39064fff "},children:p?"Update Question":"Add Question"})]})})})}),e.jsx("div",{className:"card mx-auto mt-2 ",style:{border:"1px solid #6f42c1",width:"100%"},children:e.jsxs("div",{className:"card-body",children:[e.jsx("h3",{className:"fw-bold",style:{color:"#6f42c1"},children:"Question List"}),e.jsxs("table",{className:"table table-bordered text-center",children:[e.jsx("thead",{className:"thead-light-purple",children:e.jsxs("tr",{children:[e.jsx("th",{children:"S.No."}),e.jsx("th",{children:"Question"}),e.jsx("th",{children:"Subject"}),e.jsx("th",{children:"Option 1"}),e.jsx("th",{children:"Option 2"}),e.jsx("th",{children:"Option 3"}),e.jsx("th",{children:"Option 4"}),e.jsx("th",{children:"Correct Option"}),e.jsx("th",{children:"Action"})]})}),e.jsxs("tbody",{children:[f.map((y,M)=>e.jsxs("tr",{children:[e.jsx("td",{children:M+1}),e.jsx("td",{children:y.question}),e.jsx("td",{children:y.subject?.name}),e.jsx("td",{children:y.optionA}),e.jsx("td",{children:y.optionB}),e.jsx("td",{children:y.optionC}),e.jsx("td",{children:y.optionD}),e.jsx("td",{children:y.correctAnswer}),e.jsxs("td",{children:[e.jsx("button",{className:"btn-edit me-2",onClick:()=>k(y),children:"Edit"}),e.jsx("button",{className:"btn-delete",onClick:()=>i(y._id),children:"Delete"})]})]},y._id)),f.length===0&&e.jsx("tr",{children:e.jsx("td",{colSpan:"8",children:"No questions found"})})]})]})]})})]})},G=()=>{const[s,h]=o.useState({name:"",email:"",password:"",college:"",course:"",branch:"",session:"",phone:""}),m=x=>{h({...s,[x.target.name]:x.target.value})},u=async x=>{x.preventDefault();try{await v.post("http://localhost:5000/api/examinee",s),alert("Registered successfully"),window.location.href="/"}catch(p){console.log(p),alert("Sorry, try again later")}},[n,l]=o.useState([]),d=async()=>{try{const x=await v.get("http://localhost:5000/api/session");l(x.data)}catch(x){console.log(x)}};return o.useEffect(()=>{d()},[]),e.jsxs("div",{children:[e.jsx("style",{children:`
          .register-container {
            min-height: 100vh;
        background: linear-gradient(to right, #fcb322ff, #f65920ff);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 40px 20px;
          }
          .register-card {
            background: #f6d6d6ff;
            border-radius: 15px;
            box-shadow: 0px 8px 30px rgba(0,0,0,0.15);
            padding: 40px;
            max-width: 600px;
            width: 100%;
            animation: fadeIn 1s ease-in-out;
          }
          .register-card h2 {
            text-align: center;
            margin-bottom: 30px;
            font-weight: bold;
            color: #333;
          }
          .form-control, .form-select {
            border-radius: 10px;
            padding: 12px;
            font-size: 16px;
            border: 1px solid #ddd;
            transition: all 0.3s;
          }
          .form-control:focus, .form-select:focus {
            border-color: #4f46e5;
            box-shadow: 0 0 8px rgba(79,70,229,0.3);
          }
          .btn-primary {
            background:  #ed268dff;
            border: none;
            padding: 12px;
            font-size: 18px;
            border-radius: 10px;
            transition: all 0.3s;
            width: 100%;
          }
          .btn-primary:hover {
            background: #3730a3;
            transform: scale(1.05);
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}),e.jsx("div",{className:"register-container",children:e.jsxs("div",{className:"register-card",children:[e.jsx("h2",{children:"Student Registration"}),e.jsxs("form",{method:"POST",onSubmit:u,children:[e.jsx("div",{className:"mb-3",children:e.jsx("input",{type:"text",placeholder:"Enter Name",name:"name",className:"form-control",onChange:m,required:!0})}),e.jsx("div",{className:"mb-3",children:e.jsx("input",{type:"email",placeholder:"Enter Email",name:"email",className:"form-control",onChange:m,required:!0})}),e.jsx("div",{className:"mb-3",children:e.jsx("input",{type:"password",placeholder:"Enter Password",name:"password",className:"form-control",onChange:m,required:!0})}),e.jsx("div",{className:"mb-3",children:e.jsx("input",{type:"text",placeholder:"Enter College Name",name:"college",className:"form-control",onChange:m,required:!0})}),e.jsx("div",{className:"mb-3",children:e.jsx("input",{type:"text",placeholder:"Enter Course Name",name:"course",className:"form-control",onChange:m,required:!0})}),e.jsx("div",{className:"mb-3",children:e.jsx("input",{type:"text",placeholder:"Enter Branch Name",name:"branch",className:"form-control",onChange:m,required:!0})}),e.jsx("div",{className:"mb-3",children:e.jsxs("select",{name:"session",onChange:m,className:"form-select",required:!0,children:[e.jsx("option",{value:"",children:"Select Session"}),n.map(x=>e.jsx("option",{value:x._id,children:x.name},x._id))]})}),e.jsx("div",{className:"mb-3",children:e.jsx("input",{type:"text",placeholder:"Enter Phone Number",name:"phone",className:"form-control",onChange:m,required:!0})}),e.jsx("div",{children:e.jsx("button",{type:"submit",className:"btn btn-primary",children:"Register"})})]})]})})]})},Q=()=>{const[s,h]=o.useState(!1);localStorage.getItem("userRole")=="user"?localStorage.getItem("userEmail"):window.location.href="/";const u=()=>{const l=new Date().getHours();return l<12?"Good Morning":l<18?"Good Afternoon":"Good Evening"},n=()=>{localStorage.removeItem("userEmail"),localStorage.removeItem("userRole"),localStorage.removeItem("userId"),window.location.href="/"};return e.jsxs("div",{className:`dashboard-container ${s?"collapsed":""}`,children:[e.jsxs("div",{className:"sidebar",children:[e.jsx("div",{className:"sidebar-header p-2 border-b-2 ",style:{borderBottom:"2px solid #bf9debff"},children:e.jsx("h4",{children:"Examly"})}),e.jsxs("ul",{className:"nav-links p-2",children:[e.jsxs("li",{children:[e.jsx("i",{className:"fa-solid fa-chart-bar"}),e.jsx(S,{to:"myexams",className:"text-white text-decoration-none",children:"My Exams"})]}),e.jsxs("li",{children:[" ",e.jsx("i",{className:"fa-solid fa-book-open"})," ",e.jsx(S,{to:"myresult",className:"text-white text-decoration-none",children:"My Results"})]}),e.jsxs("li",{children:[" ",e.jsx("i",{className:"fa-solid fa-user"}),e.jsx(S,{to:"changepassword",className:"text-white text-decoration-none",children:" Change Password"})]}),e.jsxs("li",{children:[e.jsx("i",{className:"fa-solid fa-message"})," ",e.jsx(S,{to:"message",className:"text-white text-decoration-none",children:"Message"})]}),e.jsxs("li",{children:[e.jsx("i",{className:"fa-solid fa-arrow-right-from-bracket"})," ",e.jsx(S,{className:"text-decoration-none text-white",onClick:()=>{n()},children:"Log Out"})]})]})]}),e.jsxs("div",{className:"main",children:[e.jsxs("div",{className:"topbar d-flex justify-content-between align-items-center p-3 border-bottom border-success bg-dark",children:[e.jsxs("h4",{className:"text-white mb-0",children:[u()," ",e.jsx("i",{className:"fa-solid fa-user-tie ms-2"})]}),e.jsx("h2",{children:"User Dashboard"})]}),e.jsx("div",{className:"content",children:e.jsx(I,{})})]})]})},V=()=>{const[s,h]=o.useState([]),m=async()=>{const u=await v.get("http://localhost:5000/api/exams/exams");h(u.data)};return o.useEffect(()=>{m()},[]),e.jsx("div",{children:e.jsx("div",{className:"container-fluid",children:e.jsx("div",{className:"r",children:e.jsx("div",{className:"col-sm-10 mx-auto",children:e.jsx("div",{className:"card",children:e.jsx("div",{className:"row",children:e.jsxs("table",{className:"table-hover ta table-bordered",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"S.N"}),e.jsx("th",{children:"Exam Name"}),e.jsx("th",{children:"Date"}),e.jsx("th",{children:"Duration"}),e.jsx("th",{children:"Action"})]})}),e.jsx("tbody",{children:s.map((u,n)=>e.jsxs("tr",{children:[e.jsx("td",{children:n+1}),e.jsx("td",{children:u.title}),e.jsx("td",{children:u.date}),e.jsx("td",{children:u.duration}),e.jsx("td",{children:e.jsx(S,{className:"btn btn-primary",to:"/userDashboard/getexam/"+u._id,children:"Start"})})]},u._id))})]})})})})})})})},$=()=>{const[s,h]=o.useState([]),m=localStorage.getItem("userId"),u=async()=>{const n=await v.get(`http://localhost:5000/api/exams/examinee-result/${m}`);console.log(n),h(Array.isArray(n.data.message)?n.data.message:[n.data.message])};return o.useEffect(()=>{u()},[]),e.jsx("div",{children:e.jsx("div",{className:"row mt-1",children:e.jsx("div",{className:"col-sm-12",children:e.jsx("div",{className:"card mx-auto mt-2 ",style:{border:"1px solid #6f42c1",width:"a100%"},children:e.jsx("div",{className:"card-body",children:e.jsxs("div",{className:"container p-0",children:[e.jsx("h3",{className:"fw-bold",style:{color:"#6f42c1"},children:"Examinee Result"}),e.jsxs("table",{className:"table table-bordered text-center",children:[e.jsx("thead",{className:"table-secondary",children:e.jsxs("tr",{children:[e.jsx("td",{children:"S.N"}),e.jsx("td",{children:"Exam name"}),e.jsx("td",{children:"Your Name"}),e.jsx("td",{children:"Total Marks"}),e.jsx("td",{children:"Score"}),e.jsx("td",{children:"Passing Marks"}),e.jsx("td",{children:"Status"}),e.jsx("td",{children:"Date"})]})}),e.jsx("tbody",{children:s.map((n,l)=>e.jsxs("tr",{children:[e.jsx("td",{children:l+1}),e.jsx("td",{children:n.examId?.title}),e.jsx("td",{children:n.examineeId?.name||n.examineeId}),e.jsx("td",{children:n.totalMarks}),e.jsx("td",{children:n.score}),e.jsx("td",{children:n.passingMarks}),e.jsx("td",{children:n.status}),e.jsx("td",{children:new Date(n.createdAt).toLocaleString()})]},n._id))})]})]})})})})})})},Y=()=>{const{id:s}=_(),h=P(),[m,u]=o.useState(null),[n,l]=o.useState([]),[d,x]=o.useState({}),[p,g]=o.useState(null),[f,c]=o.useState(""),[a,t]=o.useState(!1),[r,i]=o.useState(null),[k,y]=o.useState(!1),M=localStorage.getItem("userEmail");o.useEffect(()=>{(async()=>{try{const j=await v.get(`http://localhost:5000/api/exams/exam/${s}`),{exam:N,questions:C}=j.data;u(N),l(C),g(parseInt(N.duration)*60)}catch(j){console.error("Error fetching exam:",j),c(j.response?.data?.error||"Failed to load exam")}})()},[s]),o.useEffect(()=>{if(!m||k)return;const b=setTimeout(()=>{k||(c("Test expired: You did not start the test within the allowed time."),t(!0),h("/userdash/profile"))},1e3*p);return()=>clearTimeout(b)},[m,k,h]),o.useEffect(()=>{if(p===null||p<=0||a||!k)return;const b=setInterval(()=>{g(j=>j<=1?(D(),clearInterval(b),0):j-1)},1e3);return()=>clearInterval(b)},[p,a,k]),o.useEffect(()=>{const b=()=>{document.hidden&&k&&!a&&(c("Violation: Tab switching detected. Exam will be submitted."),D())};return document.addEventListener("visibilitychange",b),()=>document.removeEventListener("visibilitychange",b)},[k,a]),o.useEffect(()=>{const b=j=>{k&&!a&&(j.preventDefault(),c("Violation: Cut/Copy/Paste detected. Exam will be submitted."),D())};return document.addEventListener("cut",b),document.addEventListener("copy",b),document.addEventListener("paste",b),()=>{document.removeEventListener("cut",b),document.removeEventListener("copy",b),document.removeEventListener("paste",b)}},[k,a]);const T=b=>{const j=Math.floor(b/60),N=b%60;return`${j}:${N<10?"0":""}${N}`},E=(b,j)=>{k||y(!0),x(N=>({...N,[b]:j}))},D=async()=>{if(!a)try{const b=await v.post("http://localhost:5000/api/exams/submit-exam",{examId:s,answers:d,email:M});i(b.data),t(!0),alert("Your Exam was submitted successfully. Result will be declared soon."),h("/userdash/profile")}catch(b){console.error("Error submitting exam:",b),c(b.response?.data?.error||"Failed to submit exam")}};return f?e.jsx("div",{className:"alert alert-danger m-4",children:f}):!m||!n.length?e.jsx("div",{className:"text-center m-4",children:"Loading..."}):e.jsxs("div",{className:"container mt-4",children:[e.jsx("h2",{children:m.title}),e.jsxs("div",{className:"mb-3",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Duration:"})," ",m.duration," minutes"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Total Marks:"})," ",m.totalMarks]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Passing Marks:"})," ",m.passingMarks]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Time Left:"})," ",T(p)]})]}),a&&r?e.jsxs("div",{className:"alert alert-info",children:[e.jsx("h4",{children:"Exam Results"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Score:"})," ",r.score," / ",r.totalMarks]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Status:"})," ",r.passed?"Passed":"Failed"]}),e.jsx("h5",{children:"Answer Details:"}),e.jsx("ul",{children:r.results.map((b,j)=>e.jsxs("li",{children:[e.jsxs("strong",{children:["Question ",j+1,":"]})," ",b.question,e.jsx("br",{}),e.jsx("strong",{children:"Your Answer:"})," ",b.selectedAnswer||"Not answered",e.jsx("br",{}),e.jsx("strong",{children:"Correct Answer:"})," ",b.correctAnswer,e.jsx("br",{}),e.jsx("strong",{children:"Result:"})," ",b.isCorrect?"Correct":"Incorrect"]},j))})]}):e.jsxs(e.Fragment,{children:[!k&&e.jsx("div",{className:"alert alert-warning",children:"Please start the test by selecting an answer. The test will expire in 30 seconds if not started."}),e.jsxs("form",{onSubmit:b=>{b.preventDefault(),D()},children:[n.map((b,j)=>e.jsx("div",{className:"card mb-3",children:e.jsxs("div",{className:"card-body",children:[e.jsxs("h5",{children:["Question ",j+1,": ",b.question]}),e.jsxs("div",{className:"form-check",children:[e.jsx("input",{type:"radio",name:`question-${b._id}`,value:b.optionA,checked:d[b._id]===b.optionA,onChange:()=>E(b._id,b.optionA),className:"form-check-input",id:`optionA-${b._id}`,disabled:a}),e.jsx("label",{className:"form-check-label",htmlFor:`optionA-${b._id}`,children:b.optionA})]}),e.jsxs("div",{className:"form-check",children:[e.jsx("input",{type:"radio",name:`question-${b._id}`,value:b.optionB,checked:d[b._id]===b.optionB,onChange:()=>E(b._id,b.optionB),className:"form-check-input",id:`optionB-${b._id}`,disabled:a}),e.jsx("label",{className:"form-check-label",htmlFor:`optionB-${b._id}`,children:b.optionB})]}),e.jsxs("div",{className:"form-check",children:[e.jsx("input",{type:"radio",name:`question-${b._id}`,value:b.optionC,checked:d[b._id]===b.optionC,onChange:()=>E(b._id,b.optionC),className:"form-check-input",id:`optionC-${b._id}`,disabled:a}),e.jsx("label",{className:"form-check-label",htmlFor:`optionC-${b._id}`,children:b.optionC})]}),e.jsxs("div",{className:"form-check",children:[e.jsx("input",{type:"radio",name:`question-${b._id}`,value:b.optionD,checked:d[b._id]===b.optionD,onChange:()=>E(b._id,b.optionD),className:"form-check-input",id:`optionD-${b._id}`,disabled:a}),e.jsx("label",{className:"form-check-label",htmlFor:`optionD-${b._id}`,children:b.optionD})]})]})},b._id)),e.jsx("button",{type:"submit",className:"btn btn-primary",disabled:a,children:"Submit Exam"})]})]})]})};function X(){const s=["📖 Stay consistent – study at least 2 hours every day.","📝 Take handwritten notes to boost memory retention.","⏰ Follow the Pomodoro technique – 25 min study, 5 min break.","💡 Revise concepts weekly for long-term retention.","🚀 Solve at least 3 DSA problems daily to sharpen coding skills.","🌐 Explore documentation & official guides when stuck.","🤝 Join group discussions to strengthen understanding.","📊 Track your progress and celebrate small wins."];return e.jsxs("div",{children:[e.jsx("style",{children:`
          .dashboard {
            padding: 40px;
            font-family: 'Segoe UI', sans-serif;
            background: linear-gradient(to right, #f9f9f9, #e0e0e0);
            min-height: 100vh;
          }
          .welcome {
            font-size: 28px;
            font-weight: bold;
            margin-bottom: 10px;
            color: #2c3e50;
          }
          .subtitle {
            font-size: 18px;
            margin-bottom: 30px;
            color: #555;
          }
          .tips-box {
            background: #fff;
            padding: 25px;
            border-radius: 12px;
            box-shadow: 0 6px 15px rgba(0,0,0,0.1);
            max-width: 700px;
            margin: auto;
          }
          .tips-box h2 {
            margin-bottom: 15px;
            color: #6a11cb;
          }
          .tips-box ul {
            list-style: none;
            padding: 0;
          }
          .tips-box li {
            padding: 10px 0;
            font-size: 16px;
            border-bottom: 1px solid #eee;
          }
          .tips-box li:last-child {
            border-bottom: none;
          }
        `}),e.jsxs("div",{className:"dashboard",children:[e.jsx("div",{className:"welcome",children:"👋 Welcome back, Student!"}),e.jsx("div",{className:"subtitle",children:"Here are some study tips & tasks to keep you motivated:"}),e.jsxs("div",{className:"tips-box",children:[e.jsx("h2",{children:"📌 Study Tips"}),e.jsx("ul",{children:s.map((h,m)=>e.jsx("li",{children:h},m))})]})]})]})}const K=()=>{const[s,h]=o.useState(""),[m,u]=o.useState([]),n=localStorage.getItem("userId");localStorage.getItem("userName"),localStorage.getItem("userEmail");const l=async()=>{if(n)try{const g=await v.get(`http://localhost:5000/api/message/user/${n}`);u(g.data.message||[])}catch(g){console.error("Error fetching user messages:",g)}};o.useEffect(()=>{l()},[]);const d=async g=>{if(g.preventDefault(),!s.trim())return alert("Enter a message");try{await v.post("http://localhost:5000/api/message",{question:s,examineeId:n}),h(""),l()}catch(f){console.error("Error sending message:",f)}},x=async(g,f)=>{const c=prompt("Edit your message:",f);if(c!==null)try{await v.put(`http://localhost:5000/api/message/edit/${g}`,{question:c,role:"user",userId:n}),l()}catch(a){console.error("Error editing message:",a)}},p=async g=>{if(window.confirm("Delete this message?"))try{await v.put(`http://localhost:5000/api/message/delete/${g}`,{role:"user",userId:n}),l()}catch(f){console.error("Error deleting message:",f)}};return e.jsxs("div",{className:"container p-3",children:[e.jsx("h2",{children:"Send Feedback to Admin"}),e.jsxs("form",{onSubmit:d,children:[e.jsx("textarea",{value:s,onChange:g=>h(g.target.value),className:"form-control mb-2",placeholder:"Type your feedback...",rows:"3"}),e.jsx("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]}),e.jsx("hr",{}),e.jsx("h3",{children:"Your Messages"}),e.jsxs("table",{className:"table table-bordered text-center",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"S.No."}),e.jsx("th",{children:"Feedback"}),e.jsx("th",{children:"Admin Reply"}),e.jsx("th",{children:"Actions"})]})}),e.jsx("tbody",{children:m.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:"4",children:"No feedback submitted"})}):m.map((g,f)=>e.jsxs("tr",{children:[e.jsx("td",{children:f+1}),e.jsx("td",{children:g.question}),e.jsx("td",{children:g.answer||"No reply yet"}),e.jsxs("td",{children:[e.jsx("button",{className:"btn btn-sm btn-warning me-1",onClick:()=>x(g._id,g.question),children:"Edit"}),e.jsx("button",{className:"btn btn-sm btn-danger",onClick:()=>p(g._id),children:"Delete"})]})]},g._id))})]})]})},Z=()=>{const s=localStorage.getItem("userId"),[h,m]=o.useState({op:"",np:"",cnp:""}),u=l=>{m({...h,[l.target.name]:l.target.value})},n=async l=>{l.preventDefault();try{const d=await v.put(`http://localhost:5000/api/examinee/change/${s}`,h);alert(d.data.message)}catch(d){console.log(d)}};return e.jsx("div",{children:e.jsx("div",{className:"container-fluid",children:e.jsx("div",{className:"row py-3 px-3 mt-3",children:e.jsx("div",{className:"col-sm-8 mx-auto",children:e.jsx("div",{className:"card",children:e.jsx("div",{className:"card-body",children:e.jsxs("form",{method:"post",onSubmit:n,children:[e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-sm-9 my-2 mx-auto",children:e.jsx("input",{type:"text",name:"op",onChange:u,placeholder:"Enter Old password",className:"form-control"})}),e.jsx("div",{className:"col-sm-9 my-2 mx-auto",children:e.jsx("input",{type:"text",name:"np",onChange:u,placeholder:"Enter New password",className:"form-control"})}),e.jsx("div",{className:"col-sm-9 my-2 mx-auto",children:e.jsx("input",{type:"text",name:"cnp",onChange:u,className:"form-control",placeholder:"Enter Confirm password"})})]}),e.jsx("div",{className:"col-sm-6 mx-auto",children:e.jsx("input",{type:"submit",value:"Update",className:"btn btn-primary"})})]})})})})})})})},ee=()=>{const[s,h]=o.useState([]),[m,u]=o.useState({name:"",email:"",number:"",address:"",college:"",qualification:""}),[n,l]=o.useState(null),[d,x]=o.useState(!1);o.useEffect(()=>{p()},[]);const p=async()=>{const t=await v.get("http://localhost:5000/api/examinee");h(t.data)},g=async t=>{const r=await v.delete(`http://localhost:5000/api/examinee/${t}`);alert(r?"Deleted Successfully":"Try Again Later"),p()},f=t=>{u({name:t.name,email:t.email,number:t.number,address:t.address,college:t.college,qualification:t.qualification}),l(t._id),x(!0),window.scrollTo({top:0,behavior:"smooth"})},c=t=>{const{name:r,value:i}=t.target;u(k=>({...k,[r]:i}))},a=async t=>{if(t.preventDefault(),!!n)try{await v.put(`http://localhost:5000/api/examinee/${n}`,m),alert("Examinee Updated Successfully"),u({name:"",email:"",number:"",address:"",college:"",qualification:""}),l(null),x(!1),p()}catch(r){console.error("Error updating examinee:",r),alert("Error updating examinee")}};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"container-fluid p-0",children:[d&&e.jsx("div",{className:"card",style:{border:"1px solid #6f42c1",width:"100%"},children:e.jsxs("div",{className:"card-body",children:[e.jsx("h3",{className:"fw-bold",style:{color:"#6f42c1"},children:"Edit Examinee"}),e.jsxs("form",{className:"border p-2 rounded",onSubmit:a,children:[e.jsxs("div",{className:"row mb-2",children:[e.jsx("div",{className:"col-sm-4",children:e.jsx("input",{className:"form-control",name:"name",value:m.name,onChange:c,placeholder:"Name",required:!0})}),e.jsx("div",{className:"col-sm-4",children:e.jsx("input",{className:"form-control",name:"email",value:m.email,onChange:c,placeholder:"Email",required:!0})}),e.jsx("div",{className:"col-sm-4",children:e.jsx("input",{className:"form-control",name:"number",value:m.number,onChange:c,placeholder:"Number",required:!0})})]}),e.jsxs("div",{className:"row mb-2",children:[e.jsx("div",{className:"col-sm-4",children:e.jsx("input",{className:"form-control",name:"address",value:m.address,onChange:c,placeholder:"Address"})}),e.jsx("div",{className:"col-sm-4",children:e.jsx("input",{className:"form-control",name:"college",value:m.college,onChange:c,placeholder:"College"})}),e.jsx("div",{className:"col-sm-4",children:e.jsx("input",{className:"form-control",name:"qualification",value:m.qualification,onChange:c,placeholder:"Qualification"})})]}),e.jsx("button",{type:"submit",className:"btn btn-light text-white mb-1 me-2",style:{background:"#39064fff "},children:"Update"}),e.jsx("button",{type:"button",className:"btn-edit",onClick:()=>x(!1),children:"Cancel"})]})]})}),e.jsx("div",{className:"card mx-auto mt-2",style:{border:"1px solid #6f42c1",width:"100%"},children:e.jsxs("div",{className:"card-body",children:[e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-sm-12",children:e.jsx("h3",{className:"fw-bold",style:{color:"#6f42c1"},children:"Examinee Details"})})}),e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-sm-12",children:e.jsxs("table",{className:"table table-bordered text-center",children:[e.jsx("thead",{className:"thead-light-purple",children:e.jsxs("tr",{children:[e.jsx("th",{children:"S.No."}),e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Email"}),e.jsx("th",{children:"College"}),e.jsx("th",{children:"Course"}),e.jsx("th",{children:"Branch"}),e.jsx("th",{children:"phone"}),e.jsx("th",{children:"Action"})]})}),e.jsx("tbody",{children:s.map((t,r)=>e.jsxs("tr",{children:[e.jsx("td",{children:r+1}),e.jsx("td",{children:t.name}),e.jsx("td",{children:t.email}),e.jsx("td",{children:t.college}),e.jsx("td",{children:t.course}),e.jsx("td",{children:t.branch}),e.jsx("td",{children:t.phone}),e.jsxs("td",{children:[e.jsx("button",{className:"btn-edit me-2",onClick:()=>f(t),children:"Edit"}),e.jsx("button",{className:"btn-delete",onClick:()=>g(t._id),children:"Delete"})]})]},t._id))})]})})})]})})]})})},te=()=>{const[s,h]=o.useState([]),m=async()=>{const n=await v.get("http://localhost:5000/api/exams/report");console.log(n.data),h(Array.isArray(n.data)?n.data:[n.data])};o.useEffect(()=>{m()},[]);const u=n=>{const l=window.open("","","width=900,height=650");l.document.write(`
      <html>
        <head>
          <title>Exam Report</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; }
            h2 { color: #6f42c1; }
            table { border-collapse: collapse; width: 100%; margin-top: 20px; }
            td, th { border: 1px solid #6f42c1; padding: 8px; text-align: left; }
            th { background-color: #f3e8ff; }
          </style>
        </head>
        <body>
          <h2>Exam Report - ${n.examTitle}</h2>
          <table>
            <tr><th>Examinee Name</th><td>${n.examineeName}</td></tr>
            <tr><th>Email</th><td>${n.examineeEmail}</td></tr>
            <tr><th>Total Marks</th><td>${n.totalMarks}</td></tr>
            <tr><th>Passing Marks</th><td>${n.passingMarks}</td></tr>
            <tr><th>Score</th><td>${n.score}</td></tr>
            <tr><th>Status</th><td>${n.status}</td></tr>
            <tr><th>Date of Exam</th><td>${n.attemptedAt}</td></tr>
          </table>
        </body>
      </html>
    `),l.document.close(),l.print()};return e.jsx("div",{children:e.jsx("div",{className:"container-fluid",children:e.jsx("div",{className:"row py-3 px-3 mt-3",children:e.jsx("div",{className:"col-sm-12 mx-auto",children:e.jsx("div",{className:"card",children:e.jsxs("div",{className:"card-body",children:[e.jsx("h3",{className:"fw-bold",style:{color:"#6f42c1"},children:"Report Generation"}),e.jsxs("table",{className:"table table-hover table-bordered",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"S.N"}),e.jsx("th",{children:"Exam Name"}),e.jsx("th",{children:"Examinee Name"}),e.jsx("th",{children:"Total Marks"}),e.jsx("th",{children:"Score"}),e.jsx("th",{children:"Passing Marks"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Date"}),e.jsx("th",{children:"Action"})]})}),e.jsx("tbody",{children:s.map((n,l)=>e.jsxs("tr",{children:[e.jsx("td",{children:l+1}),e.jsx("td",{children:n.examTitle}),e.jsx("td",{children:n.examineeName}),e.jsx("td",{children:n.totalMarks}),e.jsx("td",{children:n.score}),e.jsx("td",{children:n.passingMarks}),e.jsx("td",{children:n.status}),e.jsx("td",{children:new Date(n.attemptedAt).toLocaleString()}),e.jsx("td",{children:e.jsx("button",{className:"btn btn-sm btn-primary",onClick:()=>{u(n)},children:"Generate Report"})})]},n._id))})]})]})})})})})})},ae=()=>{const s=localStorage.getItem("id"),[h,m]=o.useState({op:"",np:"",cnp:""}),u=l=>{m({...h,[l.target.name]:l.target.value})},n=async l=>{l.preventDefault();try{const d=await v.put(`http://localhost:5000/api/admin/change/${s}`,h);alert(d.data.message)}catch(d){console.log(d)}};return e.jsx("div",{children:e.jsx("div",{className:"container-fluid",children:e.jsx("div",{className:"row py-3 px-3 mt-3",children:e.jsx("div",{className:"col-sm-8 mx-auto",children:e.jsx("div",{className:"card",children:e.jsx("div",{className:"card-body",children:e.jsxs("form",{method:"post",onSubmit:n,children:[e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-sm-9 my-2 mx-auto",children:e.jsx("input",{type:"text",name:"op",onChange:u,placeholder:"Enter Old password",className:"form-control"})}),e.jsx("div",{className:"col-sm-9 my-2 mx-auto",children:e.jsx("input",{type:"text",name:"np",onChange:u,placeholder:"Enter New password",className:"form-control"})}),e.jsx("div",{className:"col-sm-9 my-2 mx-auto",children:e.jsx("input",{type:"text",name:"cnp",onChange:u,className:"form-control",placeholder:"Enter Confirm password"})})]}),e.jsx("div",{className:"col-sm-6 mx-auto",children:e.jsx("input",{type:"submit",value:"Update",className:"btn btn-primary"})})]})})})})})})})},se=()=>{const[s,h]=o.useState([]),[m,u]=o.useState({}),n=async()=>{try{const g=await v.get("http://localhost:5000/api/message/all");h(g.data.message||[])}catch(g){console.error("Error fetching messages for admin:",g)}};o.useEffect(()=>{n()},[]);const l=(g,f)=>{u(c=>({...c,[g]:f}))},d=async g=>{const f=(m[g]||"").trim();if(!f)return alert("Please type a reply.");try{await v.put(`http://localhost:5000/api/message/reply/${g}`,{answer:f,role:"admin"}),u(c=>({...c,[g]:""})),n()}catch(c){console.error("Error sending reply:",c)}},x=async(g,f)=>{const c=prompt("Edit reply:",f||"");if(c!==null)try{await v.put(`http://localhost:5000/api/message/reply/${g}`,{answer:c,role:"admin"}),n()}catch(a){console.error("Error editing reply:",a)}},p=async g=>{if(window.confirm("Delete this reply?"))try{await v.put(`http://localhost:5000/api/message/delete/${g}`,{role:"admin"}),n()}catch(f){console.error("Error deleting reply:",f)}};return e.jsxs("div",{className:"container p-3",children:[e.jsx("h2",{children:"Admin - User Messages"}),e.jsxs("table",{className:"table table-bordered text-center",children:[e.jsx("thead",{className:"thead-light-purple",children:e.jsxs("tr",{children:[e.jsx("th",{children:"S.No."}),e.jsx("th",{children:"Examinee"}),e.jsx("th",{children:"Feedback"}),e.jsx("th",{children:"Admin Reply"}),e.jsx("th",{children:"Actions"})]})}),e.jsx("tbody",{children:s.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:"5",children:"No messages found"})}):s.map((g,f)=>e.jsxs("tr",{children:[e.jsx("td",{children:f+1}),e.jsxs("td",{children:[g.examineeId?.name||"N/A",e.jsx("div",{style:{fontSize:"0.85em",color:"#555"},children:g.examineeId?.email||""})]}),e.jsx("td",{children:g.question}),e.jsx("td",{children:g.answer||"No reply yet"}),e.jsxs("td",{style:{minWidth:250},children:[e.jsx("input",{type:"text",placeholder:"Type reply...",value:m[g._id]||"",onChange:c=>l(g._id,c.target.value),className:"form-control mb-1"}),e.jsxs("div",{className:"d-flex gap-1",children:[e.jsx("button",{className:"btn btn-sm btn-secondary",onClick:()=>d(g._id),children:"Send Reply"}),e.jsx("button",{className:" btn-sm btn-edit",onClick:()=>x(g._id,g.answer),children:"Edit Reply"}),e.jsx("button",{className:" btn-sm btn-delete",onClick:()=>p(g._id),children:"Delete"})]})]})]},g._id))})]})]})};function R(){const[s,h]=o.useState(""),[m,u]=o.useState([]),[n,l]=o.useState(JSON.parse(localStorage.getItem("history"))||[]),[d,x]=o.useState(!1),p={contents:[{parts:[{text:s}]}]},g=async()=>{if(!s.trim())return;const c=[s,...n];localStorage.setItem("history",JSON.stringify(c)),l(c);let a=await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyDNclMUdKoG7dUiee2-3bdyUIdDfH59AOU",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(p)});a=await a.json();let t=a.candidates[0].content.parts[0].text;t=t.split("* ").map(r=>r.trim()),u([...m,{type:"q",text:s},{type:"a",text:t}]),h("")},f=c=>{const a=[...m];a.splice(c,1),u(a)};return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{position:"fixed",bottom:"20px",right:"20px",zIndex:1e3},children:e.jsx("button",{onClick:()=>x(!d),style:{backgroundColor:"#3f3f46",color:"#fff",border:"none",borderRadius:"50%",width:"60px",height:"60px",fontSize:"24px",cursor:"pointer"},children:"💬"})}),d&&e.jsxs("div",{style:{position:"fixed",bottom:"100px",right:"20px",width:"350px",height:"500px",backgroundColor:"#18181b",border:"1px solid #3f3f46",borderRadius:"15px",display:"flex",flexDirection:"column",zIndex:1e3,overflow:"hidden",boxShadow:"0 8px 20px rgba(0,0,0,0.3)"},children:[e.jsxs("div",{style:{padding:"10px",backgroundColor:"#27272a",color:"white",fontWeight:"bold",display:"flex",justifyContent:"space-between",alignItems:"center"},children:["chacha",e.jsx("button",{onClick:()=>x(!1),style:{background:"transparent",border:"none",color:"#fa0f0f",fontWeight:"bold",cursor:"pointer"},children:"✖"})]}),e.jsx("div",{style:{flex:1,padding:"10px",overflowY:"auto",display:"flex",flexDirection:"column",gap:"10px"},children:m.map((c,a)=>e.jsx("div",{style:{display:"flex",justifyContent:c.type==="q"?"flex-end":"flex-start",alignItems:"center",gap:"5px"},children:e.jsxs("div",{style:{backgroundColor:c.type==="q"?"#3f3f46":"#27272a",color:"white",padding:"8px 12px",borderRadius:"12px",maxWidth:"80%",display:"flex",justifyContent:"space-between",alignItems:"center",gap:"8px"},children:[e.jsx("span",{style:{flex:1,wordBreak:"break-word"},children:c.type==="a"?c.text.map((t,r)=>e.jsx("div",{children:t},r)):c.text}),e.jsx("button",{onClick:()=>f(a),style:{background:"transparent",border:"none",color:"#fa0f0f",cursor:"pointer",flexShrink:0},children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",height:"20px",viewBox:"0 -960 960 960",width:"20px",fill:"#fa0f0fff",children:e.jsx("path",{d:"m400-325 80-80 80 80 51-51-80-80 80-80-51-51-80 80-80-80-51 51 80 80-80 80 51 51Zm-88 181q-29.7 0-50.85-21.15Q240-186.3 240-216v-480h-48v-72h192v-48h192v48h192v72h-48v479.57Q720-186 698.85-165T648-144H312Zm336-552H312v480h336v-480Zm-336 0v480-480Z"})})})]})}))}),e.jsxs("div",{style:{display:"flex",padding:"10px",gap:"5px",backgroundColor:"#27272a"},children:[e.jsx("input",{type:"text",value:s,onChange:c=>h(c.target.value),placeholder:"Ask me anything...",style:{flex:1,borderRadius:"20px",padding:"8px 12px",border:"none",outline:"none",backgroundColor:"#18181b",color:"#fff"},onKeyDown:c=>{c.key==="Enter"&&g()}}),e.jsx("button",{onClick:g,style:{borderRadius:"20px",padding:"8px 12px",border:"none",backgroundColor:"#3f3f46",color:"#fff",cursor:"pointer"},children:"Send"})]})]})]})}function ne(){const s=["https://www.thoughtco.com/thmb/PCVPjqDcfiY4az_kycvn-EJA-e8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/swarthmore-college-Eric-Behrens-flickr-5706ffe35f9b581408d48cb3.jpg","https://images.unsplash.com/photo-1503676260728-1c00da094a0b","https://images.unsplash.com/photo-1523580846011-d3a5bc25702b"],[h,m]=o.useState(0);return o.useEffect(()=>{const u=setInterval(()=>{m(n=>(n+1)%s.length)},4e3);return()=>clearInterval(u)},[s.length]),e.jsxs("div",{children:[e.jsx("style",{children:`
          body {
            margin: 0;
            font-family: Arial, sans-serif;
            background: linear-gradient(to right, #fcb322ff, #f65920ff);
            color: #fff;
          }
          nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 40px;
            background: #fff;
            color: #333;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1000;
          }
          nav a {
            margin: 0 15px;
            text-decoration: none;
            color: #333;
            font-weight: bold;
            transition: color 0.3s;
          }
          nav a:hover {
            color: #ed268dff;
          }
          nav .brand {
            font-size: 28px;
            font-weight: 800;
            color: #f65a06ff;
          }
          .hero {
            text-align: center;
            padding: 180px 20px 60px;
            
          }
          .hero h1 {
            font-size: 56px;
            margin-bottom: 20px;
            text-shadow: 2px 2px 8px rgba(0,0,0,0.2);
          }
          .hero p {
            font-size: 20px;
            margin-bottom: 30px;
            color: #f0f0f0;
          }
          .btn {
            background: #fff;
            color: #ed268dff;
            padding: 14px 30px;
            border: none;
            border-radius: 50px;
            font-size: 18px;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
          }
          .btn:hover {
            background: #f3f3f3;
            transform: scale(1.05);
          }

          /* Slider */
          .slider {
            position: relative;
            width: 100%;
            max-width: 1000px;
            margin: 50px auto;
            overflow: hidden;
            border-radius: 15px;
            box-shadow: 0 8px 20px rgba(0,0,0,0.3);
          }
          .slide {
            width: 100%;
            height: 450px;
            object-fit: cover;
            display: none;
          }
          .slide.active {
            display: block;
            animation: fade 1s ease-in-out;
          }
          @keyframes fade {
            from { opacity: 0.4; }
            to { opacity: 1; }
          }
          .dots {
            text-align: center;
            margin-top: 12px;
          }
          .dot {
            height: 14px;
            width: 14px;
            margin: 0 5px;
            background-color: #bbb;
            border-radius: 50%;
            display: inline-block;
            transition: background-color 0.3s;
            cursor: pointer;
          }
          .dot.active {
            background-color: #4f46e5;
          }

          /* Achievements */
          .section {
            padding: 80px 20px;
            text-align: center;
          }
          .section h2 {
            font-size: 40px;
            margin-bottom: 20px;
            text-shadow: 1px 1px 5px rgba(0,0,0,0.3);
          }
          .cards {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 25px;
            margin-top: 40px;
          }
          .card {
            background: #fff;
            color: #333;
            padding: 30px;
            border-radius: 15px;
            width: 300px;
            box-shadow: 0 6px 15px rgba(0,0,0,0.2);
            transition: transform 0.3s;
          }
          .card:hover {
            transform: translateY(-10px);
          }
          .card h3 {
            font-size: 22px;
            margin-bottom: 10px;
            color: #ed268dff;
          }
          .card p {
            font-size: 15px;
            color: #555;
          }

          /* Footer Styling */
          footer {
            background: #1e1e2f;
            padding: 50px 20px 20px;
            text-align: center;
            margin-top: 100px;
          }
          footer h3 {
            font-size: 22px;
            margin-bottom: 15px;
            color: #fff;
          }
          footer p {
            font-size: 14px;
            color: #bbb;
            margin-bottom: 20px;
          }
          .footer-links {
            margin: 15px 0;
          }
          .footer-links a {
            margin: 0 12px;
            text-decoration: none;
            color: #ddd;
            font-size: 15px;
            transition: color 0.3s;
          }
          .footer-links a:hover {
            color: #ffd700;
          }
          .social-icons a {
            margin: 0 8px;
            font-size: 20px;
            color: #ddd;
            transition: color 0.3s, transform 0.3s;
          }
          .social-icons a:hover {
            color: #ffd700;
            transform: scale(1.2);
          }
          .footer-bottom {
            margin-top: 25px;
            font-size: 13px;
            color: #777;
          }
            .logo {
  height: 40px;   /* adjust size */
  margin-right: 10px;
  vertical-align: middle;
}
.brand {
  display: flex;
  align-items: center;
  font-size: 28px;
  font-weight: 800;
  color: #f65a06ff;
}

        `}),e.jsxs("nav",{children:[e.jsxs("div",{className:"brand",children:[e.jsx("img",{src:"logo.png",className:"logo"}),"Examly"]}),e.jsxs("div",{children:[e.jsx(S,{to:"/",children:"Home"}),e.jsx(S,{to:"/about",children:"About"}),e.jsx(S,{to:"/features",children:"Features"}),e.jsx(S,{to:"/course",children:"Course"}),e.jsx(S,{to:"/login",className:"btn",children:"Login"})]})]}),e.jsxs("section",{className:"hero",children:[e.jsx("h1",{children:"Welcome to Examly"}),e.jsx("p",{children:"Your smart platform to prepare, manage, and excel in exams with ease."}),e.jsx(S,{to:"/register",children:e.jsx("button",{className:"btn",children:"🚀 Get Started"})})]}),e.jsx("div",{children:e.jsx(R,{})}),e.jsxs("div",{className:"slider",children:[s.map((u,n)=>e.jsx("img",{src:u,alt:`slide-${n}`,className:`slide ${n===h?"active":""}`},n)),e.jsx("div",{className:"dots",children:s.map((u,n)=>e.jsx("span",{className:`dot ${n===h?"active":""}`,onClick:()=>m(n)},n))})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"🏆 Achievements"}),e.jsxs("div",{className:"cards",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"10,000+ Students"}),e.jsx("p",{children:"Trusted by learners across universities and colleges."})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"50+ Institutions"}),e.jsx("p",{children:"Adopted by top educational institutes for exam management."})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"95% Satisfaction"}),e.jsx("p",{children:"High student and faculty satisfaction rate."})]})]})]}),e.jsxs("section",{className:"section",style:{background:"#f9f9f9",color:"#333"},children:[e.jsx("h2",{children:"📜 Certifications"}),e.jsxs("div",{className:"cards",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"ISO Certified"}),e.jsx("p",{children:"International standards for secure and reliable exams."})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"AI Proctoring"}),e.jsx("p",{children:"Smart AI-based cheating prevention certified system."})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Data Security"}),e.jsx("p",{children:"End-to-end encryption for all sensitive student data."})]})]})]}),e.jsxs("section",{className:"section",children:[e.jsx("h2",{children:"💡 Innovation"}),e.jsxs("div",{className:"cards",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Smart Analytics"}),e.jsx("p",{children:"Track performance with real-time analytics dashboards."})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Adaptive Exams"}),e.jsx("p",{children:"AI-powered exams that adapt to student skill levels."})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Cloud-Based"}),e.jsx("p",{children:"Seamless exam management anytime, anywhere."})]})]})]}),e.jsxs("footer",{children:[e.jsx("h3",{children:"Examly"}),e.jsx("p",{children:"Smart platform to prepare, manage, and excel in exams with ease."}),e.jsxs("div",{className:"footer-links",children:[e.jsx(S,{to:"/",children:"Home"}),e.jsx(S,{to:"/features",children:"Features"}),e.jsx(S,{to:"/login",children:"Student Login"}),e.jsx(S,{to:"/adlogin",children:"Admin Login"}),e.jsx(S,{to:"/contact",children:"Contact"})]}),e.jsxs("div",{className:"social-icons",children:[e.jsx("a",{href:"https://facebook.com",target:"_blank",rel:"noreferrer",children:e.jsx("i",{className:"fab fa-facebook-f"})}),e.jsx("a",{href:"https://twitter.com",target:"_blank",rel:"noreferrer",children:e.jsx("i",{className:"fab fa-twitter"})}),e.jsx("a",{href:"https://instagram.com",target:"_blank",rel:"noreferrer",children:e.jsx("i",{className:"fab fa-instagram"})}),e.jsx("a",{href:"https://linkedin.com",target:"_blank",rel:"noreferrer",children:e.jsx("i",{className:"fab fa-linkedin-in"})})]}),e.jsxs("div",{className:"footer-bottom",children:["© ",new Date().getFullYear()," Examly. All Rights Reserved."]})]})]})}const ie=()=>{const s=P(),[h,m]=o.useState({email:"",password:""}),u=l=>{m({...h,[l.target.name]:l.target.value})},n=async l=>{l.preventDefault();try{const d=await v.post("http://localhost:5000/api/examinee/login",h);d.data.message==="Login Successfully"?(localStorage.setItem("userEmail",d.data.user.email),localStorage.setItem("userId",d.data.user.id),localStorage.setItem("userRole",d.data.user.role),s("/userDashboard")):alert(d.data.message)}catch(d){console.error(d),alert("Server error, please try again")}};return e.jsx("div",{className:"login-container",children:e.jsxs("div",{className:"login-card animate-fade-in",children:[e.jsx("h1",{className:"login-title",children:"Student Login"}),e.jsxs("form",{method:"POST",onSubmit:n,className:"login-form",children:[e.jsx("input",{type:"email",placeholder:"Enter Email",name:"email",onChange:u,className:"login-input",required:!0}),e.jsx("input",{type:"password",placeholder:"Enter Password",name:"password",onChange:u,className:"login-input",required:!0}),e.jsxs("div",{className:"login-actions",children:[e.jsx("button",{type:"submit",className:"login-btn",children:"Login"}),e.jsx(S,{to:"/register",className:"login-link",children:"Register"})]})]})]})})};function oe(){return e.jsxs("div",{children:[e.jsx("style",{children:`
          .features-section {
            padding: 100px 20px;
            background: linear-gradient(to right, #fcb322ff, #f65920ff);
            text-align: center;
          }
          .features-section h2 {
            font-size: 48px;
            font-weight: 700;
            margin-bottom: 60px;
            color: #111;
          }
          .features-container {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
          .feature-card {
            background: #fff;
            padding: 50px 30px;
            border-radius: 20px;
            box-shadow: 0 8px 20px rgba(0,0,0,0.1);
            transition: transform 0.3s ease;
          }
          .feature-card:hover {
            transform: scale(1.05);
          }
          .feature-card h3 {
            font-size: 28px;
            margin-bottom: 15px;
            color: #333;
          }
          .feature-card p {
            font-size: 18px;
            color: #666;
            margin-bottom: 30px;
            line-height: 1.6;
          }
          .feature-card a {
            display: inline-block;
            background: #ed268dff;
            color: #fff;
            padding: 12px 25px;
            border-radius: 30px;
            text-decoration: none;
            font-weight: bold;
            transition: background 0.3s ease, transform 0.2s;
          }
          .feature-card a:hover {
            background: #3730a3;
            transform: scale(1.05);
          }
          @media (max-width: 768px) {
            .features-container {
              grid-template-columns: 1fr;
            }
          }
                /* Footer Styling */
          footer {
            background: #1e1e2f;
            padding: 100px 20px 20px;
            text-align: center;
            margin-top: 100px;
          }
          footer h3 {
            font-size: 22px;
            margin-bottom: 15px;
            color: #fff;
          }
          footer p {
            font-size: 14px;
            color: #bbb;
            margin-bottom: 20px;
          }
          .footer-links {
            margin: 15px 0;
          }
          .footer-links a {
            margin: 0 12px;
            text-decoration: none;
            color: #ddd;
            font-size: 15px;
            transition: color 0.3s;
          }
          .footer-links a:hover {
            color: #ffd700;
          }
          .social-icons a {
            margin: 0 8px;
            font-size: 20px;
            color: #ddd;
            transition: color 0.3s, transform 0.3s;
          }
          .social-icons a:hover {
            color: #ffd700;
            transform: scale(1.2);
          }
          .footer-bottom {
            margin-top: 25px;
            font-size: 13px;
            color: #777;
          }
        `}),e.jsxs("div",{className:"features-section",children:[e.jsx("h2",{children:"Features"}),e.jsxs("div",{className:"features-container",children:[e.jsxs(A.div,{whileHover:{scale:1.05},className:"feature-card",children:[e.jsx("h3",{children:"🎓 User Dashboard"}),e.jsx("p",{children:"Students can view exams, attempt questions, check results, and track performance."}),e.jsx(S,{to:"/login",children:"Login as Student"})]}),e.jsxs(A.div,{whileHover:{scale:1.05},className:"feature-card",children:[e.jsx("h3",{children:"🛠️ Admin Dashboard"}),e.jsx("p",{children:"Admins can manage exams, subjects, users, and view analytics."}),e.jsx(S,{to:"/adlogin",children:"Login as Admin"})]})]})]}),e.jsxs("footer",{children:[e.jsx("h3",{children:"Examly"}),e.jsx("p",{children:"Smart platform to prepare, manage, and excel in exams with ease."}),e.jsxs("div",{className:"footer-links",children:[e.jsx(S,{to:"/",children:"Home"}),e.jsx(S,{to:"/features",children:"Features"}),e.jsx(S,{to:"/login",children:"Student Login"}),e.jsx(S,{to:"/adlogin",children:"Admin Login"}),e.jsx(S,{to:"/contact",children:"Contact"})]}),e.jsxs("div",{className:"social-icons",children:[e.jsx("a",{href:"https://facebook.com",target:"_blank",rel:"noreferrer",children:e.jsx("i",{className:"fab fa-facebook-f"})}),e.jsx("a",{href:"https://twitter.com",target:"_blank",rel:"noreferrer",children:e.jsx("i",{className:"fab fa-twitter"})}),e.jsx("a",{href:"https://instagram.com",target:"_blank",rel:"noreferrer",children:e.jsx("i",{className:"fab fa-instagram"})}),e.jsx("a",{href:"https://linkedin.com",target:"_blank",rel:"noreferrer",children:e.jsx("i",{className:"fab fa-linkedin-in"})})]}),e.jsxs("div",{className:"footer-bottom",children:["© ",new Date().getFullYear()," Examly. All Rights Reserved."]})]})]})}function re(){return e.jsxs("div",{children:[e.jsx("style",{children:`
          body {
            margin: 0;
            font-family: Arial, sans-serif;
            background: linear-gradient(to right, #fcb322ff, #f65920ff);
            color: #fff;
          }
          .about-container {
            max-width: 1000px;
            margin: 120px auto 60px;
            padding: 40px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 16px;
            box-shadow: 0 8px 20px rgba(0,0,0,0.3);
            text-align: center;
          }
          .about-title {
            font-size: 46px;
            font-weight: bold;
            margin-bottom: 20px;
            text-shadow: 2px 2px 8px rgba(0,0,0,0.3);
          }
          .about-text {
            font-size: 18px;
            line-height: 1.7;
            color: #f0f0f0;
            margin-bottom: 20px;
          }
          .highlight {
            color: #a9f52eff;
            font-weight: bold;
          }
          .about-btn {
            display: inline-block;
            margin-top: 25px;
            padding: 12px 30px;
            background: #fff;
            color:  #ed268dff;
            border-radius: 50px;
            text-decoration: none;
            font-weight: bold;
            font-size: 16px;
            transition: all 0.3s ease;
          }
          .about-btn:hover {
            background: #f3f3f3;
            transform: scale(1.05);
          }
        `}),e.jsxs("div",{className:"about-container",children:[e.jsx("h1",{className:"about-title",children:"About Examly"}),e.jsxs("p",{className:"about-text",children:["Created ",e.jsx("span",{className:"highlight",children:"Examly"}),", a comprehensive"," ",e.jsx("span",{className:"highlight",children:"MERN stack-based"})," web application designed for conducting exams in universities and colleges."]}),e.jsxs("p",{className:"about-text",children:["The platform features an ",e.jsx("span",{className:"highlight",children:"Admin Dashboard"}),", user login, registration, and modules for"," ",e.jsx("span",{className:"highlight",children:"examinees, examinations, question banks, and sessions"}),"."]}),e.jsxs("p",{className:"about-text",children:["This project demonstrates my expertise in developing"," ",e.jsx("span",{className:"highlight",children:"scalable web applications"}),", integrating ",e.jsx("span",{className:"highlight",children:"user authentication"}),", and managing ",e.jsx("span",{className:"highlight",children:"complex data workflows"}),"for exam management systems."]}),e.jsx("a",{href:"/features",className:"about-btn",children:"Explore Features 🚀"})]})]})}function le(){const s=[{title:"🌐 Web Development",desc:"Learn HTML, CSS, JavaScript, and modern frameworks to build websites.",link:"/courses/webdev"},{title:"⚡ MERN Stack",desc:"Master MongoDB, Express.js, React.js, and Node.js for full-stack apps.",link:"/courses/mern"},{title:"☕ Java Full Stack",desc:"Develop enterprise-grade apps using Java, Spring Boot, and React.",link:"/courses/javafullstack"},{title:"🤖 Artificial Intelligence",desc:"Explore AI fundamentals, NLP, and computer vision applications.",link:"/courses/ai"},{title:"📊 Machine Learning",desc:"Hands-on ML algorithms, model training, and real-world projects.",link:"/courses/ml"},{title:"📚 Data Structures & Algorithms",desc:"Crack coding interviews with strong DSA and problem-solving skills.",link:"/courses/dsa"},{title:"☁️ Cloud Computing",desc:"Master AWS, Azure, and GCP to design and deploy cloud apps.",link:"/courses/cloud"},{title:"🛡️ Cyber Security",desc:"Practical knowledge of protecting devices from unauthorized access.",link:"/courses/cyber"},{title:"🐘 PHP Development",desc:"Build dynamic web applications with PHP and MySQL.",link:"/courses/php"},{title:"🐍 Python Programming",desc:"Learn Python basics, OOP, and frameworks like Django/Flask.",link:"/courses/python"},{title:"📈 Data Analyst",desc:"Master data visualization, SQL, and business intelligence tools.",link:"/courses/dataanalytics"},{title:"💻 Operating System",desc:"Understand OS concepts: processes, memory, and file systems.",link:"/courses/os"},{title:"🗄️ DBMS",desc:"Database design, normalization, and transaction management.",link:"/courses/dbms"},{title:"💾 MySQL",desc:"Master SQL queries, joins, triggers, and stored procedures.",link:"/courses/mysql"},{title:"🐘 Devops",desc:"Big data concepts with HDFS, MapReduce, and Hive.",link:"/courses/Devops"},{title:"🔤 C Programming",desc:"Learn low-level programming with pointers and memory management.",link:"/courses/c"},{title:"➕➕ C++ Programming",desc:"Object-oriented programming, STL, and advanced DSA in C++.",link:"/courses/cpp"},{title:"☕ Core Java",desc:"Java fundamentals, OOP, collections, and multithreading.",link:"/courses/java"},{title:"📜 JavaScript",desc:"Master JS fundamentals, ES6+, DOM, and async programming.",link:"/courses/javascript"},{title:"🧠 Deep Learning",desc:"Neural networks, TensorFlow, and PyTorch projects.",link:"/courses/dl"},{title:"⛓️ Blockchain",desc:"Learn blockchain fundamentals, Ethereum, and smart contracts.",link:"/courses/blockchain"},{title:"⚙️ Compiler Design",desc:"Lexical analysis, parsing, code generation, and optimization.",link:"/courses/compiler"},{title:"🖥️ Computer Architecture & Networks",desc:"Study CPU design, memory hierarchy, and networking protocols.",link:"/courses/computer"},{title:"🐙 Git & GitHub",desc:"Version control, branching, and collaboration with GitHub.",link:"/courses/github"}];return e.jsxs("div",{children:[e.jsx("style",{children:`
          body {
            margin: 0;
            font-family: 'Segoe UI', sans-serif;
            background: linear-gradient(to right, #fcb322ff, #f65920ff);
            color: #fff;
          }
          .course-page {
            padding: 100px 20px 60px;
            text-align: center;
          }
          .course-page h1 {
            font-size: 48px;
            margin-bottom: 20px;
            text-shadow: 2px 2px 6px rgba(0,0,0,0.3);
          }
          .course-page p {
            font-size: 18px;
            margin-bottom: 40px;
            color: #f0f0f0;
          }
          .courses-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 25px;
            max-width: 1200px;
            margin: auto;
          }
          .course-card {
            background: #fff;
            color: #333;
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 6px 15px rgba(0,0,0,0.2);
            transition: transform 0.3s, box-shadow 0.3s;
          }
          .course-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 12px 25px rgba(0,0,0,0.3);
          }
          .course-card h3 {
            font-size: 22px;
            margin-bottom: 12px;
            color: #ed268dff;
          }
          .course-card p {
            font-size: 15px;
            color: #555;
            margin-bottom: 20px;
          }
          .btn {
            background: linear-gradient(45deg, #2575fc, #6a11cb);
            color: #fff;
            padding: 10px 20px;
            border: none;
            border-radius: 50px;
            font-size: 16px;
            cursor: pointer;
            text-decoration: none;
            transition: all 0.3s ease;
          }
          .btn:hover {
            background: linear-gradient(45deg, #6a11cb, #2575fc);
            transform: scale(1.05);
          }
        `}),e.jsxs("div",{className:"course-page",children:[e.jsx("h1",{children:"📚 Our Courses"}),e.jsx("p",{children:"Boost your career with our industry-ready programs."}),e.jsx("div",{className:"courses-grid",children:s.map((h,m)=>e.jsxs("div",{className:"course-card",children:[e.jsx("h3",{children:h.title}),e.jsx("p",{children:h.desc}),e.jsx(S,{to:h.link,className:"btn",children:"Explore →"})]},m))}),e.jsx("div",{children:e.jsx(R,{})})]})]})}function ce(){const s=[{title:"👨‍🎓 Total Students",value:"1,250"},{title:"📚 Courses Available",value:"24"},{title:"📝 Active Enrollments",value:"3,480"},{title:"⭐ Feedback Received",value:"420"}],h=["➕ Add New Course","👥 Manage Students","📊 View Reports","⚙️ Settings"];return e.jsxs("div",{children:[e.jsx("style",{children:`
          .admin-dashboard {
            padding: 40px;
            font-family: 'Segoe UI', sans-serif;
            background: linear-gradient(to right, #e0eafc, #cfdef3);
            min-height: 100vh;
          }
          .header {
            font-size: 32px;
            font-weight: bold;
            margin-bottom: 20px;
            color: #2c3e50;
            text-align: center;
          }
          .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-bottom: 40px;
          }
          .stat-card {
            background: #fff;
            padding: 25px;
            border-radius: 15px;
            box-shadow: 0 6px 15px rgba(0,0,0,0.1);
            text-align: center;
            transition: transform 0.3s ease;
          }
          .stat-card:hover {
            transform: translateY(-5px);
          }
          .stat-card h3 {
            font-size: 20px;
            margin-bottom: 10px;
            color: #6a11cb;
          }
          .stat-card p {
            font-size: 24px;
            font-weight: bold;
            color: #333;
          }
          .actions {
            background: #fff;
            padding: 25px;
            border-radius: 15px;
            box-shadow: 0 6px 15px rgba(0,0,0,0.1);
            max-width: 600px;
            margin: auto;
          }
          .actions h2 {
            margin-bottom: 15px;
            color: #2575fc;
          }
          .actions ul {
            list-style: none;
            padding: 0;
          }
          .actions li {
            padding: 12px 0;
            border-bottom: 1px solid #eee;
            font-size: 16px;
            cursor: pointer;
            transition: color 0.3s;
          }
          .actions li:hover {
            color: #2575fc;
          }
        `}),e.jsxs("div",{className:"admin-dashboard",children:[e.jsx("div",{className:"header",children:"📊 Admin Dashboard"}),e.jsx("div",{className:"stats-grid",children:s.map((m,u)=>e.jsxs("div",{className:"stat-card",children:[e.jsx("h3",{children:m.title}),e.jsx("p",{children:m.value})]},u))}),e.jsxs("div",{className:"actions",children:[e.jsx("h2",{children:"⚡ Quick Actions"}),e.jsx("ul",{children:h.map((m,u)=>e.jsx("li",{children:m},u))})]})]})]})}function de(){const[s,h]=o.useState("HTML Home"),[m,u]=o.useState(250),[n,l]=o.useState(!1),[d,x]=o.useState(""),p={"🟠 HTML Tutorial":{"HTML Home":"Welcome to the HTML tutorial! Learn step by step.","HTML Introduction":{title:"HTML Introduction",content:"Placeholder",example:"<h1>Hello</h1>",image:"https://www.w3schools.com/images/w3schools_logo_436_2.png"},"HTML Editors":{title:"HTML Editors",content:"Placeholder",example:"<p>Use VSCode or Sublime Text</p>",image:"https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg"},"HTML Basic":{title:"HTML Basic",content:"Placeholder",example:"<h1>Basic HTML</h1>",image:"https://www.tutorialrepublic.com/lib/images/html-elements.png"},"HTML Elements":{title:"HTML Elements",content:"Placeholder",example:"<p>Paragraph</p>",image:"https://www.tutorialrepublic.com/lib/images/html-elements.png"},"HTML Attributes":{title:"HTML Attributes",content:"Placeholder",example:"<img src='#' alt=''>",image:"https://www.w3schools.com/html/img_html.png"},"HTML Headings":{title:"HTML Headings",content:"Placeholder",example:"<h1>Heading</h1>",image:"https://www.tutorialrepublic.com/lib/images/html-headings.png"},"HTML Paragraphs":{title:"HTML Paragraphs",content:"Placeholder",example:"<p>Paragraph</p>",image:"https://www.tutorialrepublic.com/lib/images/html-paragraphs.png"},"HTML Styles":{title:"HTML Styles",content:"Placeholder",example:"<p style='color:red'>Red text</p>",image:"https://www.w3schools.com/images/w3schools_logo_436_2.png"},"HTML Formatting":{title:"HTML Formatting",content:"Placeholder",example:"<b>Bold</b> <i>Italic</i>",image:"https://www.w3schools.com/images/w3schools_logo_436_2.png"},"HTML Quotations":{title:"HTML Quotations",content:"Placeholder",example:"<blockquote>Quote</blockquote>",image:"https://www.w3schools.com/images/w3schools_logo_436_2.png"},"HTML Comments":{title:"HTML Comments",content:"Placeholder",example:"<!-- Comment -->",image:"https://www.w3schools.com/images/w3schools_logo_436_2.png"},"HTML Colors":{title:"HTML Colors",content:"Placeholder",example:"<p style='color:blue'>Blue</p>",image:"https://www.w3schools.com/images/w3schools_logo_436_2.png"},"HTML CSS":{title:"HTML CSS",content:"Placeholder",example:"<link rel='stylesheet' href='style.css'>",image:"https://www.w3schools.com/images/w3schools_logo_436_2.png"},"HTML Links":{title:"HTML Links",content:"Placeholder",example:"<a href='https://google.com'>Google</a>",image:"https://www.tutorialrepublic.com/lib/images/html-links.png"},"HTML Images":{title:"HTML Images",content:"Placeholder",example:"<img src='img.jpg' alt=''>",image:"https://www.tutorialrepublic.com/lib/images/html-images.png"},"HTML Favicon":{title:"HTML Favicon",content:"Placeholder",example:"<link rel='icon' href='favicon.ico'>",image:"https://www.w3schools.com/images/w3schools_logo_436_2.png"},"HTML Page Title":{title:"HTML Page Title",content:"Placeholder",example:"<title>Page Title</title>",image:"https://www.w3schools.com/images/w3schools_logo_436_2.png"},"HTML Tables":{title:"HTML Tables",content:"Placeholder",example:"<table><tr><td>Cell</td></tr></table>",image:"https://www.tutorialrepublic.com/lib/images/html-tables.png"},"HTML Lists":{title:"HTML Lists",content:"Placeholder",example:"<ul><li>Item</li></ul>",image:"https://www.tutorialrepublic.com/lib/images/html-lists.png"},"HTML Block & Inline":{title:"HTML Block & Inline",content:"Placeholder",example:"<div>Block</div> <span>Inline</span>",image:"https://www.w3schools.com/images/w3schools_logo_436_2.png"},"HTML Div":{title:"HTML Div",content:"Placeholder",example:"<div>Content</div>",image:"https://www.w3schools.com/images/w3schools_logo_436_2.png"},"HTML Classes":{title:"HTML Classes",content:"Placeholder",example:"<p class='className'>Text</p>",image:"https://www.w3schools.com/images/w3schools_logo_436_2.png"},"HTML Id":{title:"HTML Id",content:"Placeholder",example:"<p id='idName'>Text</p>",image:"https://www.w3schools.com/images/w3schools_logo_436_2.png"},"HTML Iframes":{title:"HTML Iframes",content:"Placeholder",example:"<iframe src='page.html'></iframe>",image:"https://www.w3schools.com/images/w3schools_logo_436_2.png"},"HTML JavaScript":{title:"HTML JavaScript",content:"Placeholder",example:"<script>alert('Hi');<\/script>",image:"https://www.w3schools.com/images/w3schools_logo_436_2.png"},"HTML File Paths":{title:"HTML File Paths",content:"Placeholder",example:"<img src='images/pic.jpg'>",image:"https://www.w3schools.com/images/w3schools_logo_436_2.png"},"HTML Head":{title:"HTML Head",content:"Placeholder",example:"<head>...</head>",image:"https://www.w3schools.com/images/w3schools_logo_436_2.png"},"HTML Layout":{title:"HTML Layout",content:"Placeholder",example:"<header>Header</header>",image:"https://www.w3schools.com/images/w3schools_logo_436_2.png"},"HTML Responsive":{title:"HTML Responsive",content:"Placeholder",example:"<meta name='viewport'>",image:"https://www.w3schools.com/images/w3schools_logo_436_2.png"},"HTML Computercode":{title:"HTML Computercode",content:"Placeholder",example:"<code>Code Example</code>",image:"https://www.w3schools.com/images/w3schools_logo_436_2.png"},"HTML Semantics":{title:"HTML Semantics",content:"Placeholder",example:"<article>Content</article>",image:"https://www.w3schools.com/images/w3schools_logo_436_2.png"},"HTML Style Guide":{title:"HTML Style Guide",content:"Placeholder",example:"<p>Follow style guide</p>",image:"https://www.w3schools.com/images/w3schools_logo_436_2.png"},"HTML Entities":{title:"HTML Entities",content:"Placeholder",example:"&lt; &gt; &amp;",image:"https://www.w3schools.com/images/w3schools_logo_436_2.png"},"HTML Symbols":{title:"HTML Symbols",content:"Placeholder",example:"&copy; &reg;",image:"https://www.w3schools.com/images/w3schools_logo_436_2.png"},"HTML Emojis":{title:"HTML Emojis",content:"Placeholder",example:"😀 😎",image:"https://www.w3schools.com/images/w3schools_logo_436_2.png"},"HTML Charsets":{title:"HTML Charsets",content:"Placeholder",example:"<meta charset='UTF-8'>",image:"https://www.w3schools.com/images/w3schools_logo_436_2.png"},"HTML URL Encode":{title:"HTML URL Encode",content:"Placeholder",example:"https://example.com?q=Hello%20World",image:"https://www.w3schools.com/images/w3schools_logo_436_2.png"},"HTML vs. XHTML":{title:"HTML vs. XHTML",content:"Placeholder",example:"<p>XHTML strict</p>",image:"https://www.w3schools.com/images/w3schools_logo_436_2.png"},"HTML Forms":{title:"HTML Forms",content:"Placeholder",example:"<form><input type='text'></form>",image:"https://www.tutorialrepublic.com/lib/images/html-forms.png"},"HTML Form Attributes":{title:"HTML Form Attributes",content:"Placeholder",example:"<form action='#'>...</form>",image:"https://www.tutorialrepublic.com/lib/images/html-forms.png"},"HTML Form Elements":{title:"HTML Form Elements",content:"Placeholder",example:"<input> <textarea> <select>",image:"https://www.tutorialrepublic.com/lib/images/html-forms.png"},"HTML Input Types":{title:"HTML Input Types",content:"Placeholder",example:"<input type='email'>",image:"https://www.tutorialrepublic.com/lib/images/html-forms.png"},"HTML Input Attributes":{title:"HTML Input Attributes",content:"Placeholder",example:"<input placeholder='Name'>",image:"https://www.tutorialrepublic.com/lib/images/html-forms.png"},"Input Form Attributes":{title:"Input Form Attributes",content:"Placeholder",example:"<input required>",image:"https://www.tutorialrepublic.com/lib/images/html-forms.png"},"HTML Graphics":{title:"HTML Graphics",content:"Placeholder",example:"<canvas></canvas>",image:"https://www.tutorialrepublic.com/lib/images/html-canvas.png"},"HTML Canvas":{title:"HTML Canvas",content:"Placeholder",example:"<canvas id='myCanvas'></canvas>",image:"https://www.tutorialrepublic.com/lib/images/html-canvas.png"},"HTML SVG":{title:"HTML SVG",content:"Placeholder",example:"<svg><circle cx='50' cy='50' r='40'></circle></svg>",image:"https://upload.wikimedia.org/wikipedia/commons/6/6b/Bitmap_VS_SVG.svg"},"HTML Media":{title:"HTML Media",content:"Placeholder",example:"<video src='video.mp4'></video>",image:"https://www.tutorialrepublic.com/lib/images/html-video.png"},"HTML Video":{title:"HTML Video",content:"Placeholder",example:"<video controls></video>",image:"https://www.tutorialrepublic.com/lib/images/html-video.png"},"HTML Audio":{title:"HTML Audio",content:"Placeholder",example:"<audio controls></audio>",image:"https://www.tutorialrepublic.com/lib/images/html-audio.png"},"HTML Plug-ins":{title:"HTML Plug-ins",content:"Placeholder",example:"<embed src='file.swf'>",image:"https://www.w3schools.com/images/w3schools_logo_436_2.png"},"HTML YouTube":{title:"HTML YouTube",content:"Placeholder",example:"<iframe src='https://www.youtube.com/embed/videoid'></iframe>",image:"https://www.w3schools.com/images/w3schools_logo_436_2.png"},"HTML APIs":{title:"HTML APIs",content:"Placeholder",example:"navigator.geolocation.getCurrentPosition(...)",image:"https://www.w3schools.com/images/w3schools_logo_436_2.png"},"HTML Geolocation":{title:"HTML Geolocation",content:"Placeholder",example:"navigator.geolocation.getCurrentPosition(...)",image:"https://www.w3schools.com/images/w3schools_logo_436_2.png"},"HTML Drag and Drop":{title:"HTML Drag and Drop",content:"Placeholder",example:"<div draggable='true'></div>",image:"https://www.w3schools.com/images/w3schools_logo_436_2.png"},"HTML Web Storage":{title:"HTML Web Storage",content:"Placeholder",example:"localStorage.setItem('key','value')",image:"https://www.w3schools.com/images/w3schools_logo_436_2.png"},"HTML Web Workers":{title:"HTML Web Workers",content:"Placeholder",example:"var worker = new Worker('worker.JavaScript')",image:"https://www.w3schools.com/images/w3schools_logo_436_2.png"},"HTML SSE":{title:"HTML SSE",content:"Placeholder",example:"new EventSource('server.php')",image:"https://www.w3schools.com/images/w3schools_logo_436_2.png"}},"🔵 CSS Tutorial":{"CSS Introduction":{title:"CSS Introduction",content:"Placeholder",example:"<style>p{color:red;}</style>",image:"https://www.w3schools.com/css/img_syntax.gif"},"CSS Syntax":{title:"CSS Syntax",content:"Placeholder",example:"p { color: red; }",image:"https://www.w3schools.com/css/img_syntax.gif"},"CSS Selectors":{title:"CSS Selectors",content:"Placeholder",example:"p { color: blue; }",image:"https://www.tutorialrepublic.com/lib/images/css-selectors.png"},"CSS How To":{title:"CSS How To",content:"Placeholder",example:"<link rel='stylesheet' href='style.css'>",image:"https://www.w3schools.com/css/img_syntax.gif"},"CSS Colors":{title:"CSS Colors",content:"Placeholder",example:"p { color: green; }",image:"https://www.w3schools.com/css/img_colors.gif"},"CSS Box Model":{title:"CSS Box Model",content:"Placeholder",example:"div { margin:10px; padding:5px; }",image:"https://www.tutorialrepublic.com/lib/images/css-boxmodel.png"},"CSS Layouts":{title:"CSS Layouts",content:"Placeholder",example:".container{display:flex;}",image:"https://www.tutorialrepublic.com/lib/images/css-flexbox.png"},"CSS Position":{title:"CSS Position",content:"Placeholder",example:"position:absolute;",image:"https://www.tutorialrepublic.com/lib/images/css-position.png"},"CSS Float":{title:"CSS Float",content:"Placeholder",example:"float:left;",image:"https://www.tutorialrepublic.com/lib/images/css-float.png"},"CSS Display":{title:"CSS Display",content:"Placeholder",example:"display:inline-block;",image:"https://www.tutorialrepublic.com/lib/images/css-display.png"},"CSS Z-index":{title:"CSS Z-index",content:"Placeholder",example:"z-index:10;",image:"https://www.tutorialrepublic.com/lib/images/css-z-index.png"},"CSS Pseudo-classes":{title:"CSS Pseudo-classes",content:"Placeholder",example:"a:hover { color:red; }",image:"https://www.tutorialrepublic.com/lib/images/css-pseudo-class.png"},"CSS Pseudo-elements":{title:"CSS Pseudo-elements",content:"Placeholder",example:"p::first-letter { font-size:2em; }",image:"https://www.tutorialrepublic.com/lib/images/css-pseudo-element.png"},"CSS Transitions":{title:"CSS Transitions",content:"Placeholder",example:"transition:all 0.5s;",image:"https://www.tutorialrepublic.com/lib/images/css-transition.png"},"CSS Animations":{title:"CSS Animations",content:"Placeholder",example:"@keyframes example {...}",image:"https://www.tutorialrepublic.com/lib/images/css-animation.png"},"CSS Media Queries":{title:"CSS Media Queries",content:"Placeholder",example:"@media screen and (max-width:600px){...}",image:"https://www.tutorialrepublic.com/lib/images/css-mediaquery.png"},"CSS Flexbox":{title:"CSS Flexbox",content:"Placeholder",example:"display:flex;",image:"https://www.tutorialrepublic.com/lib/images/css-flexbox.png"},"CSS Grid":{title:"CSS Grid",content:"Placeholder",example:"display:grid;",image:"https://www.tutorialrepublic.com/lib/images/css-grid.png"},"CSS Variables":{title:"CSS Variables",content:"Placeholder",example:"--main-color:red;",image:"https://www.tutorialrepublic.com/lib/images/css-variables.png"},"CSS Functions":{title:"CSS Functions",content:"Placeholder",example:"calc(100% - 50px);",image:"https://www.tutorialrepublic.com/lib/images/css-functions.png"},"CSS Units":{title:"CSS Units",content:"Placeholder",example:"px, %, em, rem, vw",image:"https://www.tutorialrepublic.com/lib/images/css-units.png"},"CSS Specificity":{title:"CSS Specificity",content:"Placeholder",example:".class > p { }",image:"https://www.tutorialrepublic.com/lib/images/css-specificity.png"}},"🟢 JavaScript Tutorial":{"JavaScript Introduction":{title:"JavaScript Introduction",content:"Placeholder",example:"<script>alert('Hi');<\/script>",image:"https://www.w3schools.com/JavaScript/img_JavaScript.png"},"JavaScript Variables":{title:"JavaScript Variables",content:"Placeholder",example:"let x=5;",image:"https://www.tutorialrepublic.com/lib/images/JavaScript-variables.png"},"JavaScript Data Types":{title:"JavaScript Data Types",content:"Placeholder",example:"let x = 'Hello';",image:"https://www.tutorialrepublic.com/lib/images/JavaScript-datatypes.png"},"JavaScript Operators":{title:"JavaScript Operators",content:"Placeholder",example:"x + y;",image:"https://www.tutorialrepublic.com/lib/images/JavaScript-operators.png"},"JavaScript Functions":{title:"JavaScript Functions",content:"Placeholder",example:"function f(){return 1;}",image:"https://www.tutorialrepublic.com/lib/images/JavaScript-functions.png"},"JavaScript Objects":{title:"JavaScript Objects",content:"Placeholder",example:"let obj={a:1};",image:"https://www.tutorialrepublic.com/lib/images/JavaScript-objects.png"},"JavaScript Arrays":{title:"JavaScript Arrays",content:"Placeholder",example:"let arr=[1,2,3];",image:"https://www.tutorialrepublic.com/lib/images/JavaScript-arrays.png"},"JavaScript Loops":{title:"JavaScript Loops",content:"Placeholder",example:"for(let i=0;i<5;i++){}",image:"https://www.tutorialrepublic.com/lib/images/JavaScript-loops.png"},"JavaScript Conditionals":{title:"JavaScript Conditionals",content:"Placeholder",example:"if(x>5){ }",image:"https://www.tutorialrepublic.com/lib/images/JavaScript-conditionals.png"},"JavaScript Events":{title:"JavaScript Events",content:"Placeholder",example:"element.addEventListener('click', fn)",image:"https://www.tutorialrepublic.com/lib/images/JavaScript-events.png"},"JavaScript DOM":{title:"JavaScript DOM",content:"Placeholder",example:"document.getElementById('id')",image:"https://www.tutorialrepublic.com/lib/images/JavaScript-dom.png"},"JavaScript BOM":{title:"JavaScript BOM",content:"Placeholder",example:"window.alert('Hi')",image:"https://www.tutorialrepublic.com/lib/images/JavaScript-bom.png"},"JavaScript ES6":{title:"JavaScript ES6",content:"Placeholder",example:"let x = () => {}",image:"https://www.tutorialrepublic.com/lib/images/JavaScript-es6.png"},"JavaScript Async":{title:"JavaScript Async",content:"Placeholder",example:"async function f(){}",image:"https://www.tutorialrepublic.com/lib/images/JavaScript-async.png"},"JavaScript Fetch":{title:"JavaScript Fetch",content:"Placeholder",example:"fetch('url').then(res=>res.JavaScripton())",image:"https://www.tutorialrepublic.com/lib/images/JavaScript-fetch.png"},"JavaScript JavaScriptON":{title:"JavaScript JavaScriptON",content:"Placeholder",example:"JavaScriptON.parse('{}')",image:"https://www.tutorialrepublic.com/lib/images/JavaScript-JavaScripton.png"},"JavaScript LocalStorage":{title:"JavaScript LocalStorage",content:"Placeholder",example:"localStorage.setItem('key','value')",image:"https://www.tutorialrepublic.com/lib/images/JavaScript-localstorage.png"},"JavaScript SessionStorage":{title:"JavaScript SessionStorage",content:"Placeholder",example:"sessionStorage.setItem('key','value')",image:"https://www.tutorialrepublic.com/lib/images/JavaScript-sessionstorage.png"},"JavaScript Debugging":{title:"JavaScript Debugging",content:"Placeholder",example:"console.log('debug')",image:"https://www.tutorialrepublic.com/lib/images/JavaScript-debugging.png"},"JavaScript Error Handling":{title:"JavaScript Error Handling",content:"Placeholder",example:"try{ }catch(e){ }",image:"https://www.tutorialrepublic.com/lib/images/JavaScript-error.png"},"JavaScript Classes":{title:"JavaScript Classes",content:"Placeholder",example:"class Person {}",image:"https://www.tutorialrepublic.com/lib/images/JavaScript-classes.png"},"JavaScript Modules":{title:"JavaScript Modules",content:"Placeholder",example:"export default x;",image:"https://www.tutorialrepublic.com/lib/images/JavaScript-modules.png"},"JavaScript Template Literals":{title:"JavaScript Template Literals",content:"Placeholder",example:"`Hello ${name}`",image:"https://www.tutorialrepublic.com/lib/images/JavaScript-template.png"}}},g=()=>l(!0),f=r=>{if(n){const i=Math.min(Math.max(r.clientX,150),400);u(i)}},c=()=>l(!1),a=r=>{for(let i in p)if(Object.keys(p[i]).includes(r))return i;return null},t=Object.values(p).map(r=>r[s]).filter(Boolean)[0]||"";return a(s),e.jsxs("div",{className:"dashboard",onMouseMove:f,onMouseUp:c,onMouseLeave:c,children:[e.jsxs("header",{className:"header",children:[e.jsx("h1",{children:"📘 Web Development Dashboard"}),e.jsx("input",{type:"text",placeholder:"Search...",className:"search",value:d,onChange:r=>x(r.target.value)})]}),e.jsx("aside",{className:"sidebar",style:{width:m},children:Object.keys(p).map(r=>{const i=Object.keys(p[r]).filter(k=>k.toLowerCase().includes(d.toLowerCase()));return i.length===0?null:e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"section-title",children:r}),e.jsx("ul",{children:i.map(k=>e.jsx("li",{onClick:()=>h(k),className:s===k?"active":"",children:k},k))}),e.jsx("hr",{})]},r)})}),e.jsx("div",{className:"resizer",onMouseDown:g}),e.jsxs("main",{className:"content",children:[e.jsx("h2",{children:s}),typeof t=="object"?e.jsxs("div",{children:[e.jsx("p",{children:t.content}),t.example&&e.jsxs("div",{className:"example-container",children:[e.jsx("pre",{className:"code-block",children:e.jsx("code",{children:t.example})}),e.jsx("iframe",{title:"example-output",className:"output-frame",srcDoc:t.example})]}),t.image&&e.jsx("img",{src:t.image,alt:"Example",className:"topic-img"})]}):e.jsx("p",{children:t})]})]})}function me(){const[s,h]=o.useState("MERN Home"),[m,u]=o.useState(250),[n,l]=o.useState(!1),d={"🟠 Node.js":{"MERN Home":"Welcome to the MERN stack tutorial! Here, you'll learn step-by-step how to set up Node.js, Express.js, MongoDB, and React to build full-stack web applications. Each section provides installation instructions, examples, output, and images for clarity. Start by learning Node.js, the runtime environment for server-side JavaScript. Node.js allows developers to use JavaScript outside the browser and is essential for creating the backend of MERN apps. This tutorial is designed for beginners to advanced users who want hands-on examples and comprehensive explanations. Continue through Express.js for backend frameworks, MongoDB for database management, and React for frontend development.","Node.js Installation":{title:"Node.js Installation",content:"Node.js is a JavaScript runtime built on Chrome's V8 engine, enabling developers to run JS code outside a browser environment. It's widely used for building backend applications, server-side scripting, and REST APIs. To install Node.js, first go to the official website (https://nodejs.org). Choose the LTS (Long Term Support) version for stability. Download the installer and run it. On Windows, follow the prompts and select default options. On macOS, use the .pkg file. On Linux, you can use a package manager like 'apt' or 'yum'. After installation, verify by opening a terminal and running 'node -v' to check Node.js version and 'npm -v' for the Node Package Manager (npm). Node.js comes bundled with npm, allowing you to install libraries and frameworks. Understanding Node.js fundamentals, including modules, asynchronous programming, and the event loop, is crucial before starting MERN projects. This installation guide ensures your environment is ready for backend development. Node.js enables you to run scripts, create web servers, and manage project dependencies easily.",example:'console.log("Node.js is running!");',image:"https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg"},"Node.js Example":{title:"Node.js Example",content:"After installing Node.js, you can create a simple server using the built-in 'http' module. This server listens for incoming HTTP requests and responds with plain text. The server code demonstrates how Node.js can serve content without a browser and handle multiple connections asynchronously. Understanding server setup, routing, and response handling is critical before moving on to Express.js. Node.js allows you to manage packages with npm, so you can extend functionality easily. This example highlights the simplicity and power of Node.js as the backend foundation for MERN applications.",example:`
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello from Node.js server!');
});
server.listen(3000, () => console.log('Server running on port 3000'));`,image:"https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"}},"🔵 Express.js":{"Express Installation":{title:"Express Installation",content:"Express.js is a minimal and flexible Node.js web application framework providing robust features for web and mobile apps. It simplifies routing, middleware integration, and handling HTTP requests. To install Express, first ensure Node.js and npm are installed. Open your terminal and run 'npm init' to create a new project. Then install Express with 'npm install express'. Express enables rapid API development and provides middleware support for logging, authentication, and error handling. Understanding Express is key for building scalable backend services in the MERN stack. The framework supports templating engines, RESTful API creation, and integration with MongoDB for database operations.",example:`
const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello Express!'));
app.listen(3000, () => console.log('Server running'));`,image:"https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"},"Express Example":{title:"Express Example",content:"In this example, Express routes handle HTTP requests efficiently. You can define multiple routes, each responding differently. Middleware can be added to intercept requests for logging, authentication, or validation. Express simplifies backend development by abstracting repetitive Node.js boilerplate. The framework integrates seamlessly with MongoDB, allowing data persistence and API creation for your frontend React app. Understanding routing and middleware in Express is essential for developing full-stack MERN applications.",example:`
app.get('/about', (req, res) => res.send('About Page'));`,image:"https://expressjs.com/images/express-facebook-share.png"}},"🟢 MongoDB":{"MongoDB Installation":{title:"MongoDB Installation",content:"MongoDB is a NoSQL database storing data in flexible, JSON-like documents. Unlike relational databases, MongoDB allows dynamic schema design, making it ideal for MERN applications. You can install MongoDB locally from the official website or use MongoDB Atlas for cloud deployment. For local setup, download the installer and follow instructions for your operating system. Use 'mongo --version' to confirm installation. Once installed, start the MongoDB server using 'mongod'. MongoDB databases consist of collections, which hold documents similar to JSON objects. CRUD operations can be performed directly in the Mongo shell or programmatically through Mongoose, a Node.js ODM. MongoDB Atlas offers free-tier cloud hosting, which is convenient for development and deployment.",example:`
use mydatabase
db.createCollection("users")`,image:"https://webassets.mongodb.com/_com_assets/cms/mongodb-logo-rgb-j6w271g1xn.jpg"},"MongoDB Example":{title:"MongoDB Example",content:"MongoDB collections store multiple documents with dynamic schemas. You can insert, query, update, and delete documents easily. Connecting Node.js to MongoDB using Mongoose simplifies these operations and ensures data consistency. This example demonstrates how to insert a user document and query the database. Understanding MongoDB is crucial for persisting backend data for MERN applications. This database flexibility, combined with Express and Node.js, forms the backend of the MERN stack, while React manages the frontend UI.",example:`
db.users.insertOne({name: "Alice", age: 25})
db.users.find()`,image:"https://www.mongodb.com/assets/images/global/leaf.png"}},"🟣 React.js":{"React Installation":{title:"React Installation",content:"React.js is a frontend library for building interactive user interfaces with reusable components. To install, use 'npx create-react-app my-app', which sets up the environment automatically. React uses JSX syntax combining HTML with JavaScript. Components have state and props, allowing dynamic rendering and data flow. The virtual DOM optimizes updates and improves performance. React integrates with APIs and backend services, making it ideal for MERN applications. Learning React basics, component lifecycle, and state management is crucial for developing responsive and dynamic frontend applications.",example:`
npx create-react-app my-app
cd my-app
npm start`,image:"https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"},"React Example":{title:"React Example",content:'In this example, a simple React component renders "Hello React". Components can be nested, reused, and manage state independently. React’s virtual DOM ensures only necessary elements are updated, enhancing performance. React Router enables navigation between pages without full reloads. Understanding React is essential for building dynamic user interfaces that consume Express APIs and MongoDB data in MERN applications.',example:`
function App() {
  return <h1>Hello React!</h1>;
}
export default App;`,image:"https://reactjs.org/logo-og.png"}}},x=()=>l(!0),p=a=>{n&&u(a.clientX<150?150:a.clientX>400?400:a.clientX)},g=()=>l(!1),f=a=>{for(let t in d)if(Object.keys(d[t]).includes(a))return t;return null},c=Object.values(d).map(a=>a[s]).filter(Boolean)[0]||"";return f(s),e.jsxs("div",{className:"mern-dashboard",onMouseMove:p,onMouseUp:g,onMouseLeave:g,children:[e.jsxs("header",{className:"mern-header",children:[e.jsx("h1",{children:"📘 MERN Stack Dashboard"}),e.jsx("input",{type:"text",placeholder:"Search...",className:"mern-search"})]}),e.jsx("aside",{className:"mern-sidebar",style:{width:m},children:Object.keys(d).map(a=>e.jsxs("div",{className:"mern-section",children:[e.jsx("h3",{className:"mern-section-title",children:a}),e.jsx("ul",{children:Object.keys(d[a]).map(t=>e.jsx("li",{onClick:()=>h(t),className:s===t?"mern-active":"",children:t},t))}),e.jsx("hr",{})]},a))}),e.jsx("div",{className:"mern-resizer",onMouseDown:x}),e.jsxs("main",{className:"mern-content",children:[e.jsx("h2",{children:s}),typeof c=="object"?e.jsxs("div",{children:[e.jsx("p",{children:c.content}),c.example&&e.jsxs("div",{className:"mern-example-container",children:[e.jsx("pre",{className:"mern-code-block",children:e.jsx("code",{children:c.example})}),e.jsx("iframe",{title:"example-output",className:"mern-output-frame",srcDoc:c.example})]}),c.image&&e.jsx("img",{src:c.image,alt:"Example",className:"mern-topic-img"})]}):e.jsx("p",{children:c})]})]})}function pe(){return e.jsx("div",{className:"contact-page",children:e.jsxs("div",{className:"contact-container",children:[e.jsxs("div",{className:"contact-info",children:[e.jsx("h2",{children:"Get in Touch"}),e.jsx("p",{children:"We’d love to hear from you! Fill out the form and we’ll get back to you as soon as possible."}),e.jsxs("div",{className:"info-list",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"📍 Address:"})," 123 React Street, Web City"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"📧 Email:"})," examlysupport@example.com"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"📞 Phone:"})," +91 8765978762"]})]})]}),e.jsxs("form",{className:"contact-form",children:[e.jsx("h2",{children:"Contact Us"}),e.jsx("input",{type:"text",placeholder:"Your Name"}),e.jsx("input",{type:"email",placeholder:"Your Email"}),e.jsx("input",{type:"text",placeholder:"Subject"}),e.jsx("textarea",{placeholder:"Your Message",rows:"5"}),e.jsx("button",{type:"submit",children:"Send Message"})]})]})})}function he(){const[s,h]=o.useState("Introduction to DSA"),[m,u]=o.useState(250),[n,l]=o.useState(!1),[d,x]=o.useState(""),p={"📚 Data Structures & Algorithms":{"Introduction to DSA":{title:"Introduction to DSA",content:"Data Structures and Algorithms (DSA) are used to store, organize, and process data efficiently. They form the foundation for problem-solving in programming.",example:"<p>Example: Using arrays, stacks, queues to organize data.</p>",image:"https://upload.wikimedia.org/wikipedia/commons/5/5a/Data_structure.svg"},"Complexity Analysis":{title:"Complexity Analysis",content:"Analyze algorithms based on Time and Space complexity using Big O, Big Theta, and Big Omega notations.",example:"<p>Example: Linear Search - O(n), Binary Search - O(log n)</p>",image:"https://upload.wikimedia.org/wikipedia/commons/2/22/Complexity_classes.svg"},Arrays:{title:"Arrays",content:"Arrays are a collection of elements stored at contiguous memory locations.",example:`<pre><code>let arr = [1, 2, 3, 4];
console.log(arr[0]); // 1</code></pre>`,image:"https://upload.wikimedia.org/wikipedia/commons/0/0d/Array_Representation.svg"},"Linked Lists":{title:"Linked Lists",content:"Linked List is a linear data structure where elements are stored in nodes connected using pointers.",example:`<pre><code>class Node {
 constructor(data){ this.data = data; this.next = null; }
}</code></pre>`,image:"https://upload.wikimedia.org/wikipedia/commons/6/6d/Singly-linked-list.svg"},Stacks:{title:"Stacks",content:"Stack is a linear data structure that follows LIFO (Last In First Out) principle.",example:`<pre><code>let stack = [];
stack.push(1);
stack.pop();</code></pre>`,image:"https://upload.wikimedia.org/wikipedia/commons/6/6a/Stack_Example.svg"},Queues:{title:"Queues",content:"Queue is a linear data structure that follows FIFO (First In First Out) principle.",example:`<pre><code>let queue = [];
queue.push(1);
queue.shift();</code></pre>`,image:"https://upload.wikimedia.org/wikipedia/commons/1/11/Queue.svg"},"Linear Search":{title:"Linear Search",content:"Sequentially checks each element until a match is found.",example:`<pre><code>function linearSearch(arr, x){
 for(let i=0;i<arr.length;i++){
  if(arr[i]===x) return i;
 }
 return -1;
}</code></pre>`,image:"https://upload.wikimedia.org/wikipedia/commons/c/c2/Linear-search-animation.gif"},"Binary Search":{title:"Binary Search",content:"Search in a sorted array by repeatedly dividing the search interval in half.",example:`<pre><code>function binarySearch(arr,x){
 let low=0, high=arr.length-1;
 while(low<=high){
  let mid=Math.floor((low+high)/2);
  if(arr[mid]===x) return mid;
  else if(arr[mid]<x) low=mid+1;
  else high=mid-1;
 }
 return -1;
}</code></pre>`,image:"https://upload.wikimedia.org/wikipedia/commons/d/d5/Binary_search_tree.svg"},"Bubble Sort":{title:"Bubble Sort",content:"Repeatedly swap adjacent elements if they are in the wrong order.",example:`<pre><code>function bubbleSort(arr){
 let n=arr.length;
 for(let i=0;i<n-1;i++){
  for(let j=0;j<n-i-1;j++){
   if(arr[j]>arr[j+1]) [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
  }
 }
 return arr;
}</code></pre>`,image:"https://upload.wikimedia.org/wikipedia/commons/c/c8/Bubble-sort-example-300px.gif"},"Dynamic Programming":{title:"Dynamic Programming",content:"Optimization technique used to solve problems by breaking them down into subproblems and storing results.",example:`<pre><code>function fib(n,memo={}){
 if(n<=1) return n;
 if(n in memo) return memo[n];
 memo[n]=fib(n-1,memo)+fib(n-2,memo);
 return memo[n];
}</code></pre>`,image:"https://upload.wikimedia.org/wikipedia/commons/5/5e/Fibonacci_memoization.svg"},Graphs:{title:"Graphs",content:"A graph is a collection of nodes (vertices) connected by edges. Can be directed or undirected.",example:"<pre><code>let graph = { A:['B','C'], B:['A','D'], C:['A'], D:['B'] };</code></pre>",image:"https://upload.wikimedia.org/wikipedia/commons/5/5b/Simple_graph.svg"},"BFS & DFS":{title:"BFS & DFS",content:"BFS explores neighbors level by level, DFS explores by going deep first.",example:`<pre><code>// BFS
function bfs(graph,start){
 let queue=[start],visited=new Set();
 visited.add(start);
 while(queue.length){
  let node=queue.shift();
  console.log(node);
  for(let neighbor of graph[node]){
   if(!visited.has(neighbor)){
    visited.add(neighbor);
    queue.push(neighbor);
   }
  }
 }
}</code></pre>`,image:"https://upload.wikimedia.org/wikipedia/commons/4/46/Breadth-first-tree.svg"}}},g=()=>l(!0),f=t=>{if(n){const r=Math.min(Math.max(t.clientX,150),400);u(r)}},c=()=>l(!1),a=Object.values(p).map(t=>t[s]).filter(Boolean)[0]||"";return e.jsxs("div",{className:"dashboard",onMouseMove:f,onMouseUp:c,onMouseLeave:c,children:[e.jsxs("header",{className:"header",children:[e.jsx("h1",{children:"📚 Data Structures & Algorithms Dashboard"}),e.jsx("input",{type:"text",placeholder:"Search topics...",className:"search",value:d,onChange:t=>x(t.target.value)})]}),e.jsx("aside",{className:"sidebar",style:{width:m},children:Object.keys(p).map(t=>{const r=Object.keys(p[t]).filter(i=>i.toLowerCase().includes(d.toLowerCase()));return r.length===0?null:e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"section-title",children:t}),e.jsx("ul",{children:r.map(i=>e.jsx("li",{onClick:()=>h(i),className:s===i?"active":"",children:i},i))}),e.jsx("hr",{})]},t)})}),e.jsx("div",{className:"resizer",onMouseDown:g}),e.jsxs("main",{className:"content",children:[e.jsx("h2",{children:s}),typeof a=="object"?e.jsxs("div",{children:[e.jsx("p",{children:a.content}),a.example&&e.jsxs("div",{className:"example-container",children:[e.jsx("pre",{className:"code-block",children:e.jsx("code",{children:a.example})}),e.jsx("iframe",{title:"example-output",className:"output-frame",srcDoc:a.example})]}),a.image&&e.jsx("img",{src:a.image,alt:"Example",className:"topic-img"})]}):e.jsx("p",{children:a})]})]})}function L(){const[s,h]=o.useState("AI Introduction"),[m,u]=o.useState(250),[n,l]=o.useState(!1),[d,x]=o.useState(""),p={"🤖 Artificial Intelligence":{"AI Introduction":{title:"AI Introduction",content:"Artificial Intelligence (AI) is the simulation of human intelligence processes by machines. It enables systems to think, learn, and make decisions like humans.",example:"<p>Example: ChatGPT responding intelligently to user input.</p>",image:"https://miro.medium.com/v2/resize:fit:1400/1*ot9M0LxoXgF3gMGr-Qi5Lg.jpeg"},"AI History":{title:"AI History",content:"AI research began in the 1950s. The term ‘Artificial Intelligence’ was coined at the Dartmouth Conference in 1956 by John McCarthy.",example:"<p>1956: Dartmouth Workshop — the birth of AI as a scientific field.</p>",image:"https://upload.wikimedia.org/wikipedia/commons/e/e4/John_McCarthy_Stanford.jpg"},"AI Applications":{title:"AI Applications",content:"AI is transforming industries such as healthcare, finance, education, and entertainment. It powers applications like chatbots, virtual assistants, and recommendation systems.",example:"<ul><li>Healthcare diagnosis</li><li>Fraud detection</li><li>Self-driving cars</li></ul>",image:"https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/artificial-intelligence-examples.jpg"},"AI vs Human Intelligence":{title:"AI vs Human Intelligence",content:"AI can process large amounts of data faster than humans but lacks creativity, emotions, and consciousness.",example:"<p><b>AI:</b> Logical and data-driven<br/><b>Humans:</b> Emotional and creative</p>",image:"https://miro.medium.com/v2/resize:fit:1400/1*qLTgK4kQ4VfVGZejdsm2Rg.jpeg"},"Future of AI":{title:"Future of AI",content:"The future of AI involves developing general intelligence capable of reasoning and problem-solving across diverse tasks. Ethics and regulation will play key roles in its advancement.",example:"<p>AI in 2030: Personalized learning, smart cities, ethical robots.</p>",image:"https://miro.medium.com/v2/resize:fit:1400/1*D_2OeEqj1RXu6pfxWqZ-rA.jpeg"}}},g=()=>l(!0),f=t=>{if(n){const r=Math.min(Math.max(t.clientX,150),400);u(r)}},c=()=>l(!1),a=Object.values(p).map(t=>t[s]).filter(Boolean)[0]||"";return e.jsxs("div",{className:"dashboard",onMouseMove:f,onMouseUp:c,onMouseLeave:c,children:[e.jsxs("header",{className:"header",children:[e.jsx("h1",{children:"🤖 Artificial Intelligence Dashboard"}),e.jsx("input",{type:"text",placeholder:"Search topics...",className:"search",value:d,onChange:t=>x(t.target.value)})]}),e.jsx("aside",{className:"sidebar",style:{width:m},children:Object.keys(p).map(t=>{const r=Object.keys(p[t]).filter(i=>i.toLowerCase().includes(d.toLowerCase()));return r.length===0?null:e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"section-title",children:t}),e.jsx("ul",{children:r.map(i=>e.jsx("li",{onClick:()=>h(i),className:s===i?"active":"",children:i},i))}),e.jsx("hr",{})]},t)})}),e.jsx("div",{className:"resizer",onMouseDown:g}),e.jsxs("main",{className:"content",children:[e.jsx("h2",{children:s}),typeof a=="object"?e.jsxs("div",{children:[e.jsx("p",{children:a.content}),a.example&&e.jsxs("div",{className:"example-container",children:[e.jsx("pre",{className:"code-block",children:e.jsx("code",{children:a.example})}),e.jsx("iframe",{title:"example-output",className:"output-frame",srcDoc:a.example})]}),a.image&&e.jsx("img",{src:a.image,alt:"Example",className:"topic-img"})]}):e.jsx("p",{children:a})]})]})}function ue(){const[s,h]=o.useState("ML Introduction"),[m,u]=o.useState(250),[n,l]=o.useState(!1),[d,x]=o.useState(""),p={"📊 Machine Learning":{"ML Introduction":{title:"ML Introduction",content:"Machine Learning (ML) is a subset of AI that focuses on enabling computers to learn patterns from data and make predictions or decisions without being explicitly programmed.",example:"<p>Example: Predicting house prices based on features like size, location, and age.</p>",image:"https://miro.medium.com/v2/resize:fit:1400/1*sWbS6Oq9zqLxL-4iV8nRRA.jpeg"},"Types of Machine Learning":{title:"Types of Machine Learning",content:"ML is generally divided into three main types: Supervised Learning, Unsupervised Learning, and Reinforcement Learning.",example:"<ul><li><b>Supervised:</b> Predict outcomes using labeled data.</li><li><b>Unsupervised:</b> Find hidden patterns in unlabeled data.</li><li><b>Reinforcement:</b> Learn by trial and error with feedback.</li></ul>",image:"https://miro.medium.com/v2/resize:fit:1400/1*rDN4A7fBrX1g6Xv1F-Z5GA.png"},"Common ML Algorithms":{title:"Common ML Algorithms",content:"Some popular algorithms include Linear Regression, Decision Trees, K-Nearest Neighbors (KNN), Support Vector Machines (SVM), and Random Forest.",example:"<ul><li>Linear Regression – predicts continuous values</li><li>Decision Trees – classify data based on feature rules</li><li>KNN – classifies based on nearest neighbors</li></ul>",image:"https://miro.medium.com/v2/resize:fit:1400/1*-xZ2vSwWvJ7htvwKqXFTjw.png"},"Applications of ML":{title:"Applications of ML",content:"Machine Learning is used in various domains such as healthcare, e-commerce, marketing, and autonomous systems.",example:"<ul><li>Spam email filtering</li><li>Product recommendation systems</li><li>Credit risk prediction</li></ul>",image:"https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/machine-learning-applications-examples.png"},"ML vs AI":{title:"ML vs AI",content:"AI is the broader concept of creating intelligent machines, while ML is a subset of AI focused on learning from data.",example:"<p><b>AI:</b> Imitates human intelligence.<br/><b>ML:</b> Learns from data to make predictions.</p>",image:"https://miro.medium.com/v2/resize:fit:1400/1*ZJj5btMwh8_3L0PnZbPgbg.jpeg"},"Future of ML":{title:"Future of ML",content:"The future of ML involves automated machine learning (AutoML), edge computing, and integration with AI for smarter, adaptive systems.",example:"<p>Example: AutoML tools like Google Cloud AutoML simplify model creation for non-experts.</p>",image:"https://miro.medium.com/v2/resize:fit:1400/1*jD3xAQ35p3cQdT31BGuYQg.jpeg"}}},g=()=>l(!0),f=t=>{if(n){const r=Math.min(Math.max(t.clientX,150),400);u(r)}},c=()=>l(!1),a=Object.values(p).map(t=>t[s]).filter(Boolean)[0]||"";return e.jsxs("div",{className:"dashboard",onMouseMove:f,onMouseUp:c,onMouseLeave:c,children:[e.jsxs("header",{className:"header",children:[e.jsx("h1",{children:"📊 Machine Learning Dashboard"}),e.jsx("input",{type:"text",placeholder:"Search topics...",className:"search",value:d,onChange:t=>x(t.target.value)})]}),e.jsx("aside",{className:"sidebar",style:{width:m},children:Object.keys(p).map(t=>{const r=Object.keys(p[t]).filter(i=>i.toLowerCase().includes(d.toLowerCase()));return r.length===0?null:e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"section-title",children:t}),e.jsx("ul",{children:r.map(i=>e.jsx("li",{onClick:()=>h(i),className:s===i?"active":"",children:i},i))}),e.jsx("hr",{})]},t)})}),e.jsx("div",{className:"resizer",onMouseDown:g}),e.jsxs("main",{className:"content",children:[e.jsx("h2",{children:s}),typeof a=="object"?e.jsxs("div",{children:[e.jsx("p",{children:a.content}),a.example&&e.jsxs("div",{className:"example-container",children:[e.jsx("pre",{className:"code-block",children:e.jsx("code",{children:a.example})}),e.jsx("iframe",{title:"example-output",className:"output-frame",srcDoc:a.example})]}),a.image&&e.jsx("img",{src:a.image,alt:"Example",className:"topic-img"})]}):e.jsx("p",{children:a})]})]})}function ge(){const[s,h]=o.useState("Deep Learning Introduction"),[m,u]=o.useState(250),[n,l]=o.useState(!1),[d,x]=o.useState(""),p={"🧠 Deep Learning":{"Deep Learning Introduction":{title:"Deep Learning Introduction",content:"Deep Learning (DL) is a specialized branch of Machine Learning that uses neural networks with many layers (deep architectures) to model complex patterns in data.",example:"<p>Example: A deep neural network recognizing objects in an image.</p>",image:"https://miro.medium.com/v2/resize:fit:1400/1*V3KZzjDqZVG7jOXJtHecTw.jpeg"},"Neural Networks Basics":{title:"Neural Networks Basics",content:"A neural network is made up of interconnected nodes (neurons) organized into layers — input, hidden, and output layers. Each connection has a weight that adjusts during training.",example:"<ul><li>Input Layer: Receives data</li><li>Hidden Layers: Extract features</li><li>Output Layer: Produces final prediction</li></ul>",image:"https://miro.medium.com/v2/resize:fit:1400/1*2oAw8Rp1t6Mf4VJDR4g1EA.png"},"Convolutional Neural Networks (CNN)":{title:"Convolutional Neural Networks (CNN)",content:"CNNs are designed for image-related tasks. They use convolutional layers to extract features like edges, shapes, and textures from images.",example:"<p>Example: CNN used in facial recognition or medical image analysis.</p>",image:"https://miro.medium.com/v2/resize:fit:1400/1*m0MZ6F6mA8zKkCZ-FINR1A.png"},"Recurrent Neural Networks (RNN)":{title:"Recurrent Neural Networks (RNN)",content:"RNNs are specialized for sequential data like text or time series. They have loops that allow information to persist, enabling memory of previous steps.",example:"<p>Example: Predicting the next word in a sentence using an RNN.</p>",image:"https://miro.medium.com/v2/resize:fit:1400/1*3k3SgA3NfJ6nB4xWuj0ZKw.png"},"Applications of Deep Learning":{title:"Applications of Deep Learning",content:"Deep Learning powers cutting-edge technologies in vision, speech, and natural language processing.",example:"<ul><li>Image classification (e.g., Google Photos)</li><li>Speech recognition (e.g., Siri, Alexa)</li><li>Text generation (e.g., ChatGPT)</li></ul>",image:"https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/deep-learning-applications.png"},"Future of Deep Learning":{title:"Future of Deep Learning",content:"Future advancements in Deep Learning include energy-efficient models, explainable AI, and integration with quantum computing and neuroscience.",example:"<p>Example: Hybrid AI systems that combine symbolic reasoning with deep networks.</p>",image:"https://miro.medium.com/v2/resize:fit:1400/1*D_2OeEqj1RXu6pfxWqZ-rA.jpeg"}}},g=()=>l(!0),f=t=>{if(n){const r=Math.min(Math.max(t.clientX,150),400);u(r)}},c=()=>l(!1),a=Object.values(p).map(t=>t[s]).filter(Boolean)[0]||"";return e.jsxs("div",{className:"dashboard",onMouseMove:f,onMouseUp:c,onMouseLeave:c,children:[e.jsxs("header",{className:"header",children:[e.jsx("h1",{children:"🧠 Deep Learning Dashboard"}),e.jsx("input",{type:"text",placeholder:"Search topics...",className:"search",value:d,onChange:t=>x(t.target.value)})]}),e.jsx("aside",{className:"sidebar",style:{width:m},children:Object.keys(p).map(t=>{const r=Object.keys(p[t]).filter(i=>i.toLowerCase().includes(d.toLowerCase()));return r.length===0?null:e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"section-title",children:t}),e.jsx("ul",{children:r.map(i=>e.jsx("li",{onClick:()=>h(i),className:s===i?"active":"",children:i},i))}),e.jsx("hr",{})]},t)})}),e.jsx("div",{className:"resizer",onMouseDown:g}),e.jsxs("main",{className:"content",children:[e.jsx("h2",{children:s}),typeof a=="object"?e.jsxs("div",{children:[e.jsx("p",{children:a.content}),a.example&&e.jsxs("div",{className:"example-container",children:[e.jsx("pre",{className:"code-block",children:e.jsx("code",{children:a.example})}),e.jsx("iframe",{title:"example-output",className:"output-frame",srcDoc:a.example})]}),a.image&&e.jsx("img",{src:a.image,alt:"Example",className:"topic-img"})]}):e.jsx("p",{children:a})]})]})}function xe(){const[s,h]=o.useState("Cloud Introduction"),[m,u]=o.useState(250),[n,l]=o.useState(!1),[d,x]=o.useState(""),p={"☁️ Cloud Computing":{"Cloud Introduction":{title:"Cloud Introduction",content:`
Cloud computing is the delivery of computing services over the internet (the cloud), including servers, storage, databases, networking, software, and analytics.
Key benefits:
- Cost efficiency
- Scalability
- Flexibility
- On-demand services`,example:"<p>Example: Storing files on Google Drive or Dropbox instead of local storage.</p>",image:"https://miro.medium.com/v2/resize:fit:1400/1*0V0t7Uo9sVd6XPJj6-1Ygg.png"},"SaaS (Software as a Service)":{title:"SaaS (Software as a Service)",content:`
SaaS delivers software applications over the internet on a subscription basis.
- Users access via browser
- No need for installation or maintenance
- Updates handled by provider`,example:"<ul><li>Google Workspace (Docs, Sheets, Gmail)</li><li>Salesforce</li><li>Zoom</li></ul>",image:"https://www.simplilearn.com/ice9/free_resources_article_thumb/SaaS.png"},"PaaS (Platform as a Service)":{title:"PaaS (Platform as a Service)",content:`
PaaS provides a platform for developers to build, test, and deploy applications without managing underlying infrastructure.
- Provides runtime, OS, and databases
- Focus on development rather than hardware`,example:"<ul><li>Heroku</li><li>Google App Engine</li><li>Microsoft Azure App Service</li></ul>",image:"https://www.simplilearn.com/ice9/free_resources_article_thumb/PaaS.png"},"IaaS (Infrastructure as a Service)":{title:"IaaS (Infrastructure as a Service)",content:`
IaaS provides virtualized computing resources over the internet.
- Users manage OS, applications, and storage
- Providers manage hardware, networking, and virtualization
- Ideal for flexible, scalable infrastructure`,example:"<ul><li>Amazon Web Services (AWS EC2)</li><li>Microsoft Azure Virtual Machines</li><li>Google Compute Engine</li></ul>",image:"https://www.simplilearn.com/ice9/free_resources_article_thumb/IaaS.png"},"Cloud Real-World Example":{title:"Real-World Example",content:`
Example: Netflix
- Uses AWS to stream videos to millions of users
- Auto-scales servers based on demand
- Stores vast amounts of data in cloud storage
- SaaS apps for internal operations and analytics`,example:"<p>Netflix leverages cloud for scalability, reliability, and cost efficiency.</p>",image:"https://miro.medium.com/v2/resize:fit:1400/1*V0u7bXr2H98R87R2v6WzPQ.png"}}},g=()=>l(!0),f=t=>{if(n){const r=Math.min(Math.max(t.clientX,180),400);u(r)}},c=()=>l(!1),a=Object.values(p).map(t=>t[s]).filter(Boolean)[0]||"";return e.jsxs("div",{className:"dashboard",onMouseMove:f,onMouseUp:c,onMouseLeave:c,children:[e.jsxs("header",{className:"header",children:[e.jsx("h1",{children:"☁️ Cloud Computing Dashboard"}),e.jsx("input",{type:"text",placeholder:"Search topics...",className:"search",value:d,onChange:t=>x(t.target.value)})]}),e.jsx("aside",{className:"sidebar",style:{width:m},children:Object.keys(p).map(t=>{const r=Object.keys(p[t]).filter(i=>i.toLowerCase().includes(d.toLowerCase()));return r.length===0?null:e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"section-title",children:t}),e.jsx("ul",{children:r.map(i=>e.jsx("li",{onClick:()=>h(i),className:s===i?"active":"",children:i},i))}),e.jsx("hr",{})]},t)})}),e.jsx("div",{className:"resizer",onMouseDown:g}),e.jsxs("main",{className:"content",children:[e.jsx("h2",{children:s}),typeof a=="object"?e.jsxs("div",{children:[e.jsx("p",{children:a.content}),a.example&&e.jsx("pre",{className:"code-block",children:e.jsx("code",{children:a.example})}),a.image&&e.jsx("img",{src:a.image,alt:"Example",className:"topic-img"})]}):e.jsx("p",{children:a})]})]})}function fe(){const[s,h]=o.useState("C++ Introduction"),[m,u]=o.useState(250),[n,l]=o.useState(!1),[d,x]=o.useState(""),p={"🖥️ C++ Programming":{"C++ Introduction":{title:"C++ Introduction",content:`
C++ is an extension of C, developed by Bjarne Stroustrup in 1983.
It supports object-oriented programming, generic programming, and low-level memory manipulation.
Key Features:
- Object-Oriented
- Faster execution
- Standard Template Library (STL)
        `,example:`#include <iostream>
using namespace std;

int main() {
    cout << "Hello, C++!" << endl;
    return 0;
}`},"C++ Data Types":{title:"C++ Data Types",content:`
C++ data types include:
- Basic: int, float, double, char, bool
- Derived: array, pointer, reference
- User-defined: class, struct, enum
- Void type
        `,example:`int age = 25;
float salary = 45000.50;
char grade = 'A';
bool isActive = true;`},"C++ Operators":{title:"C++ Operators",content:`
Operators in C++:
- Arithmetic: +, -, *, /, %
- Relational: ==, !=, >, <, >=, <=
- Logical: &&, ||, !
- Assignment: =, +=, -=, *=, /=
- Bitwise: &, |, ^, ~, <<, >>
- Increment/Decrement: ++, --
        `,example:`int a = 5, b = 3;
int sum = a + b;
if(a > b && b > 0) {
    cout << "a is greater than b" << endl;
}`},"C++ Functions":{title:"C++ Functions",content:`
Functions are reusable blocks of code. 
Structure:
- Declaration: function prototype
- Definition: function body
- Call: invoking the function
Supports default arguments, function overloading, recursion.
        `,example:`#include <iostream>
using namespace std;

int add(int a, int b); // Declaration

int main() {
    int result = add(5,3); // Call
    cout << "Sum = " << result;
    return 0;
}

int add(int a, int b) { // Definition
    return a + b;
}`},"C++ Loops":{title:"C++ Loops",content:`
Loops in C++:
- for loop
- while loop
- do-while loop
Used for repeating tasks
        `,example:`for(int i=0;i<5;i++) {
    cout << i << endl;
}

int j = 0;
while(j < 5) {
    cout << j << endl;
    j++;
}`},"C++ Arrays & Vectors":{title:"C++ Arrays & Vectors",content:`
Arrays store multiple elements of the same type.
Vectors are dynamic arrays provided by STL.
        `,example:`int arr[5] = {1,2,3,4,5};
cout << arr[2]; // prints 3

#include <vector>
vector<int> v = {1,2,3};
v.push_back(4);`},"C++ Pointers & References":{title:"C++ Pointers & References",content:`
Pointers store memory addresses.
References are aliases for variables.
        `,example:`int x = 10;
int *ptr = &x;
int &ref = x;
cout << *ptr << ", " << ref; // 10, 10`},"C++ Classes & OOP":{title:"C++ Classes & OOP",content:`
C++ supports Object-Oriented Programming:
- Encapsulation: class
- Inheritance
- Polymorphism
- Abstraction
        `,example:`#include <iostream>
using namespace std;

class Person {
public:
    string name;
    void greet() { cout << "Hello " << name; }
};

int main() {
    Person p;
    p.name = "Raj";
    p.greet();
    return 0;
}`},"C++ STL":{title:"C++ STL",content:`
Standard Template Library (STL) provides ready-to-use data structures:
- Vectors, Lists, Sets, Maps
- Algorithms: sort, find, etc.
- Iterators for traversing
        `,example:`#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> v = {3,1,4,2};
    sort(v.begin(), v.end());
    for(int n : v) cout << n << " ";
}`},"C++ Real-World Example":{title:"Real-World Example",content:`
Example: Employee Management System
- Uses classes, vectors, and functions
- Add, display, and calculate salaries
- Demonstrates OOP and STL
        `,example:`#include <iostream>
#include <vector>
using namespace std;

class Employee {
public:
    string name;
    double salary;
    void display() { cout << name << ": $" << salary << endl; }
};

int main() {
    vector<Employee> emps = {{"Raj",5000},{"Anita",6000}};
    for(auto e : emps) e.display();
    return 0;
}`}}},g=()=>l(!0),f=t=>{if(n){const r=Math.min(Math.max(t.clientX,180),400);u(r)}},c=()=>l(!1),a=Object.values(p).map(t=>t[s]).filter(Boolean)[0]||"";return e.jsxs("div",{className:"dashboard",onMouseMove:f,onMouseUp:c,onMouseLeave:c,children:[e.jsxs("header",{className:"header",children:[e.jsx("h1",{children:"🖥️ C++ Programming Dashboard"}),e.jsx("input",{type:"text",placeholder:"Search topics...",className:"search",value:d,onChange:t=>x(t.target.value)})]}),e.jsx("aside",{className:"sidebar",style:{width:m},children:Object.keys(p).map(t=>{const r=Object.keys(p[t]).filter(i=>i.toLowerCase().includes(d.toLowerCase()));return r.length===0?null:e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"section-title",children:t}),e.jsx("ul",{children:r.map(i=>e.jsx("li",{onClick:()=>h(i),className:s===i?"active":"",children:i},i))}),e.jsx("hr",{})]},t)})}),e.jsx("div",{className:"resizer",onMouseDown:g}),e.jsxs("main",{className:"content",children:[e.jsx("h2",{children:s}),typeof a=="object"?e.jsxs("div",{children:[e.jsx("pre",{className:"code-block",children:e.jsx("code",{children:a.content})}),e.jsx("pre",{className:"code-block cpp",children:e.jsx("code",{children:a.example})})]}):e.jsx("p",{children:a})]})]})}function be(){const[s,h]=o.useState("C Introduction"),[m,u]=o.useState(250),[n,l]=o.useState(!1),[d,x]=o.useState(""),p={"🖥️ C Programming":{"C Introduction":{title:"C Introduction",content:`
C is a high-level, general-purpose programming language developed in 1972 by Dennis Ritchie.
It is widely used for system programming, embedded systems, and performance-critical applications.
Key Features:
- Structured programming
- Low-level memory access
- Portable and fast
        `,example:`#include <stdio.h>

int main() {
    printf("Hello, C Programming!\\n");
    return 0;
}`},"C Data Types":{title:"C Data Types",content:`
C has several data types:
- Basic: int, float, double, char
- Derived: array, pointer, struct, union
- Enumeration: enum
- Void type
        `,example:`int age = 25;
float salary = 45000.50;
char grade = 'A';`},"C Operators":{title:"C Operators",content:`
Operators in C:
- Arithmetic: +, -, *, /, %
- Relational: ==, !=, >, <, >=, <=
- Logical: &&, ||, !
- Assignment: =, +=, -=, *=, /=
- Bitwise: &, |, ^, ~, <<, >>
        `,example:`int a = 5, b = 3;
int sum = a + b;
if(a > b && b > 0) {
    printf("a is greater than b\\n");
}`},"C Functions":{title:"C Functions",content:`
Functions are reusable blocks of code. Structure:
- Declaration: function prototype
- Definition: function body
- Call: invoke function
        `,example:`#include <stdio.h>

int add(int a, int b); // Declaration

int main() {
    int result = add(5,3); // Call
    printf("Sum = %d", result);
    return 0;
}

int add(int a, int b) { // Definition
    return a + b;
}`},"C Loops":{title:"C Loops",content:`
Loops in C:
- for loop
- while loop
- do-while loop
Used for repetitive tasks
        `,example:`for(int i=0;i<5;i++) {
    printf("%d\\n", i);
}

int j = 0;
while(j < 5) {
    printf("%d\\n", j);
    j++;
}`},"C Arrays":{title:"C Arrays",content:`
Arrays store multiple values of the same type:
- One-dimensional arrays
- Multi-dimensional arrays
        `,example:`int arr[5] = {1,2,3,4,5};
printf("%d", arr[2]); // prints 3

int matrix[2][2] = {{1,2},{3,4}};`},"C Pointers":{title:"C Pointers",content:`
Pointers store memory addresses.
- Declaration: int *ptr;
- Referencing: &variable
- Dereferencing: *ptr
        `,example:`int x = 10;
int *ptr = &x;
printf("Value: %d", *ptr); // prints 10`},"C Structs":{title:"C Structs",content:`
Structs group variables of different types into a single unit:
        `,example:`struct Person {
    char name[50];
    int age;
};

struct Person p1;
strcpy(p1.name, "Raj");
p1.age = 25;`},"C File Handling":{title:"C File Handling",content:`
C allows reading/writing files:
- fopen, fclose
- fprintf, fscanf
- fread, fwrite
        `,example:`FILE *fp = fopen("data.txt","w");
if(fp != NULL) {
    fprintf(fp, "Hello File!");
    fclose(fp);
}`},"C Real-World Example":{title:"Real-World Example",content:`
Example: Simple Student Management System
- Stores student data using structs
- Performs add, display operations
- Demonstrates arrays, functions, and file handling
        `,example:`#include <stdio.h>
#include <string.h>

struct Student {
    char name[50];
    int roll;
};

int main() {
    struct Student s1;
    strcpy(s1.name,"Raj");
    s1.roll = 101;
    printf("Name: %s, Roll: %d\\n", s1.name, s1.roll);
    return 0;
}`}}},g=()=>l(!0),f=t=>{if(n){const r=Math.min(Math.max(t.clientX,180),400);u(r)}},c=()=>l(!1),a=Object.values(p).map(t=>t[s]).filter(Boolean)[0]||"";return e.jsxs("div",{className:"dashboard",onMouseMove:f,onMouseUp:c,onMouseLeave:c,children:[e.jsxs("header",{className:"header",children:[e.jsx("h1",{children:"🖥️ C Programming Dashboard"}),e.jsx("input",{type:"text",placeholder:"Search topics...",className:"search",value:d,onChange:t=>x(t.target.value)})]}),e.jsx("aside",{className:"sidebar",style:{width:m},children:Object.keys(p).map(t=>{const r=Object.keys(p[t]).filter(i=>i.toLowerCase().includes(d.toLowerCase()));return r.length===0?null:e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"section-title",children:t}),e.jsx("ul",{children:r.map(i=>e.jsx("li",{onClick:()=>h(i),className:s===i?"active":"",children:i},i))}),e.jsx("hr",{})]},t)})}),e.jsx("div",{className:"resizer",onMouseDown:g}),e.jsxs("main",{className:"content",children:[e.jsx("h2",{children:s}),typeof a=="object"?e.jsxs("div",{children:[e.jsx("pre",{className:"code-block",children:e.jsx("code",{children:a.content})}),e.jsx("pre",{className:"code-block c",children:e.jsx("code",{children:a.example})})]}):e.jsx("p",{children:a})]})]})}function je(){const[s,h]=o.useState("Introduction to GitHub"),[m,u]=o.useState(250),[n,l]=o.useState(!1),[d,x]=o.useState(""),p={"🐙 GitHub":{"Introduction to GitHub":{title:"Introduction to GitHub",content:"GitHub is a cloud-based platform for version control and collaboration using Git. It allows multiple developers to work on projects simultaneously.",example:"<p>Example: Hosting and collaborating on open-source projects.</p>",image:"https://about.gitlab.com/images/press/git-logo.png"},"Git vs GitHub":{title:"Git vs GitHub",content:"Git is a version control system that tracks changes in code. GitHub is a platform to host Git repositories online.",example:"<ul><li>Git: Local version control</li><li>GitHub: Remote repository hosting</li></ul>",image:"https://miro.medium.com/v2/resize:fit:1400/format:webp/1*dUQeb-2PCbtZP5FzHVJRFg.png"},"GitHub Features":{title:"GitHub Features",content:"GitHub provides features like repository hosting, pull requests, branches, issues, actions, project management boards, and collaboration tools.",example:"<ul><li>Branches & Pull Requests</li><li>Issues & Project Boards</li><li>GitHub Actions (CI/CD)</li></ul>",image:"https://www.tutorialspoint.com/github/images/github_dashboard.png"},Repositories:{title:"Repositories",content:"A repository (repo) is a storage space for your project. Can be public (open-source) or private.",example:"<p>Example: Creating a repo to store your React project.</p>",image:"https://www.freecodecamp.org/news/content/images/2020/11/github-repo.png"},Branches:{title:"Branches",content:"Branches allow you to work on different features independently without affecting the main codebase (usually 'main' or 'master').",example:"<p>Example: Feature branch for adding login functionality.</p>",image:"https://www.atlassian.com/dam/jcr:e82e5480-ff64-4ee3-9da0-2bce73ed17b2/branching-hero.png"},Commits:{title:"Commits",content:"A commit records changes made to the code with a message describing the update. Commits are tracked in Git history.",example:"<p>Example: Commit message: 'Added user authentication'.</p>",image:"https://wac-cdn.atlassian.com/dam/jcr:e2a2e2d6-567b-4e07-851f-2dc7b6d3a6e7/commits.png"},"Pull Requests":{title:"Pull Requests (PR)",content:"PR allows developers to notify team members about changes pushed to a branch. The team can review, discuss, and merge the code.",example:"<p>Example: Submit a PR from 'feature/login' branch to 'main' branch.</p>",image:"https://blog.gitguardian.com/content/images/2021/06/pull-request.png"},Issues:{title:"Issues",content:"GitHub Issues are used for bug tracking, feature requests, or project discussions.",example:"<p>Example: Create an issue to fix a login bug.</p>",image:"https://miro.medium.com/max/1400/1*oMDbxBoeQCh0Cm0Qh5UewQ.png"},"GitHub Actions":{title:"GitHub Actions (CI/CD)",content:"GitHub Actions automate workflows like testing, building, and deploying projects when changes occur.",example:"<p>Example: Auto-deploy website to Netlify on code push.</p>",image:"https://miro.medium.com/max/1400/1*2KZoqJQZguGrG3fUuwOaJQ.png"},"Forking Repositories":{title:"Forking Repositories",content:"Forking creates a personal copy of someone else's repository to freely experiment without affecting the original project.",example:"<p>Example: Fork an open-source library to modify for your project.</p>",image:"https://cdn.educba.com/academy/wp-content/uploads/2021/03/Forking-a-repository-on-GitHub.png"},"Cloning Repositories":{title:"Cloning Repositories",content:"Cloning copies a repository from GitHub to your local machine for development.",example:"<p>Example: `git clone https://github.com/user/repo.git`</p>",image:"https://wac-cdn.atlassian.com/dam/jcr:1ee0c593-7b1f-4dbd-9b91-bd6369b8b6cb/clone-repo.png"},"Real-World Examples":{title:"Real-World GitHub Usage",content:"GitHub is widely used by open-source communities, startups, and enterprises to manage code and collaborate globally.",example:"<ul><li>Open-Source: Linux Kernel</li><li>Startups: Airbnb, Netflix</li><li>Enterprise: Microsoft, Google internal projects</li></ul>",image:"https://education.github.com/git-cheat-sheet/assets/images/gh-logo.png"}}},g=()=>l(!0),f=t=>{if(n){const r=Math.min(Math.max(t.clientX,150),400);u(r)}},c=()=>l(!1),a=Object.values(p).map(t=>t[s]).filter(Boolean)[0]||"";return e.jsxs("div",{className:"dashboard",onMouseMove:f,onMouseUp:c,onMouseLeave:c,children:[e.jsxs("header",{className:"header",children:[e.jsx("h1",{children:"🐙 GitHub Dashboard"}),e.jsx("input",{type:"text",placeholder:"Search topics...",className:"search",value:d,onChange:t=>x(t.target.value)})]}),e.jsx("aside",{className:"sidebar",style:{width:m},children:Object.keys(p).map(t=>{const r=Object.keys(p[t]).filter(i=>i.toLowerCase().includes(d.toLowerCase()));return r.length===0?null:e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"section-title",children:t}),e.jsx("ul",{children:r.map(i=>e.jsx("li",{onClick:()=>h(i),className:s===i?"active":"",children:i},i))}),e.jsx("hr",{})]},t)})}),e.jsx("div",{className:"resizer",onMouseDown:g}),e.jsxs("main",{className:"content",children:[e.jsx("h2",{children:s}),typeof a=="object"?e.jsxs("div",{children:[e.jsx("p",{children:a.content}),a.example&&e.jsxs("div",{className:"example-container",children:[e.jsx("pre",{className:"code-block",children:e.jsx("code",{children:a.example})}),e.jsx("iframe",{title:"example-output",className:"output-frame",srcDoc:a.example})]}),a.image&&e.jsx("img",{src:a.image,alt:"Example",className:"topic-img"})]}):e.jsx("p",{children:a})]})]})}function we(){const[s,h]=o.useState("PHP Introduction"),[m,u]=o.useState(250),[n,l]=o.useState(!1),[d,x]=o.useState(""),p={"🐘 PHP Programming":{"PHP Introduction":{title:"PHP Introduction",content:`
PHP is a popular server-side scripting language used for web development.
It is embedded in HTML and works with databases like MySQL.
Key features:
- Open-source
- Server-side scripting
- Cross-platform
        `,example:`<?php
echo "Hello, PHP!";
?>`},"PHP Data Types":{title:"PHP Data Types",content:`
PHP supports:
- String
- Integer
- Float
- Boolean
- Array
- Object
- NULL
        `,example:`<?php
$name = "Raj";
$age = 25;
$isActive = true;
$numbers = array(1,2,3);
?>`},"PHP Operators":{title:"PHP Operators",content:`
PHP Operators:
- Arithmetic: +, -, *, /, %
- Assignment: =, +=, -=, *=
- Comparison: ==, ===, !=, >, <
- Logical: &&, ||, !
        `,example:`<?php
$a = 10;
$b = 5;
if($a > $b && $b > 0){
    echo "a is greater than b";
}
?>`},"PHP Functions":{title:"PHP Functions",content:`
Functions are reusable code blocks in PHP.
- Built-in: strlen(), array_push(), date()
- User-defined: function myFunction() { ... }
        `,example:`<?php
function greet($name){
    return "Hello, $name!";
}
echo greet("Raj");
?>`},"PHP CRUD Example":{title:"CRUD Example",content:`
CRUD in PHP with MySQL:
- Create, Read, Update, Delete records
- Uses mysqli or PDO
        `,example:`<?php
$mysqli = new mysqli("localhost","root","","testdb");
// Create
$mysqli->query("INSERT INTO users(name,email) VALUES('Raj','raj@test.com')");
// Read
$result = $mysqli->query("SELECT * FROM users");
while($row = $result->fetch_assoc()){
    echo $row['name']." - ".$row['email']."<br>";
}
// Update
$mysqli->query("UPDATE users SET email='raj123@test.com' WHERE name='Raj'");
// Delete
$mysqli->query("DELETE FROM users WHERE name='Raj'");
?>`}},"🌐 Laravel Framework":{"Laravel Introduction":{title:"Laravel Introduction",content:`
Laravel is a PHP framework for building modern web applications.
- Follows MVC pattern
- Provides routing, authentication, and templating
- Simplifies database operations with Eloquent ORM
        `,example:`// Route example in routes/web.php
Route::get('/', function () {
    return view('welcome');
});`},"Laravel MVC":{title:"Laravel MVC",content:`
- Model: Interacts with database
- View: Templates for UI (Blade)
- Controller: Handles logic between model and view
        `,example:`// Controller Example
php artisan make:controller UserController

// UserController.php
public function index(){
    $users = User::all();
    return view('users.index', compact('users'));
}`},"Laravel Routing":{title:"Laravel Routing",content:`
Laravel allows routing URLs to controllers or closures.
- GET, POST, PUT, DELETE supported
        `,example:`Route::get('/users', [UserController::class, 'index']);
Route::post('/users', [UserController::class, 'store']);`},"Laravel Blade Templating":{title:"Blade Templating",content:`
Blade is Laravel's templating engine.
- Supports loops, conditions, template inheritance
        `,example:`<!-- resources/views/users.blade.php -->
<h1>Users List</h1>
@foreach($users as $user)
    <p>{{ $user->name }} - {{ $user->email }}</p>
@endforeach`},"Laravel Eloquent ORM":{title:"Eloquent ORM",content:`
Eloquent ORM simplifies database interactions.
- Define models
- Perform CRUD operations easily
        `,example:`// User.php Model
class User extends Model {
    protected $fillable = ['name', 'email'];
}

// Usage
$users = User::where('active', 1)->get();`},"Laravel Authentication":{title:"Authentication",content:`
Laravel provides ready-made authentication.
- User registration, login, password reset
- Use artisan commands: php artisan make:auth (Laravel 6 and below)
        `,example:`php artisan make:auth
php artisan migrate`},"Laravel Real-World Example":{title:"Real-World Example",content:`
Example: Blog Management System
- Users can create, edit, delete blog posts
- Admin panel with authentication
- Eloquent ORM for database operations
        `,example:`// Controller
public function store(Request $request){
    Blog::create($request->all());
    return redirect()->route('blogs.index');
}

// Blade
@foreach($blogs as $blog)
    <h2>{{ $blog->title }}</h2>
    <p>{{ $blog->content }}</p>
@endforeach`}}},g=()=>l(!0),f=t=>{if(n){const r=Math.min(Math.max(t.clientX,180),400);u(r)}},c=()=>l(!1),a=Object.values(p).map(t=>t[s]).filter(Boolean)[0]||"";return e.jsxs("div",{className:"dashboard",onMouseMove:f,onMouseUp:c,onMouseLeave:c,children:[e.jsxs("header",{className:"header",children:[e.jsx("h1",{children:"🐘 PHP & Laravel Dashboard"}),e.jsx("input",{type:"text",placeholder:"Search topics...",className:"search",value:d,onChange:t=>x(t.target.value)})]}),e.jsx("aside",{className:"sidebar",style:{width:m},children:Object.keys(p).map(t=>{const r=Object.keys(p[t]).filter(i=>i.toLowerCase().includes(d.toLowerCase()));return r.length===0?null:e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"section-title",children:t}),e.jsx("ul",{children:r.map(i=>e.jsx("li",{onClick:()=>h(i),className:s===i?"active":"",children:i},i))}),e.jsx("hr",{})]},t)})}),e.jsx("div",{className:"resizer",onMouseDown:g}),e.jsxs("main",{className:"content",children:[e.jsx("h2",{children:s}),typeof a=="object"?e.jsxs("div",{children:[e.jsx("pre",{className:"code-block",children:e.jsx("code",{children:a.content})}),e.jsx("pre",{className:"code-block php",children:e.jsx("code",{children:a.example})})]}):e.jsx("p",{children:a})]})]})}function ve(){const[s,h]=o.useState("Compiler Introduction"),[m,u]=o.useState(250),[n,l]=o.useState(!1),[d,x]=o.useState(""),p={"🖥️ Compiler Design":{"Compiler Introduction":{title:"Compiler Introduction",content:"A compiler is a program that translates high-level programming language code into machine code or intermediate code that a computer can execute.",example:"<p>Example: C code converted to machine code by GCC compiler.</p>",image:"https://upload.wikimedia.org/wikipedia/commons/3/3c/Compiler.svg"},"Importance of Compilers":{title:"Importance of Compilers",content:"Compilers provide portability, optimization, error checking, and efficiency by converting human-readable code into executable form.",example:"<p>Java programs can run on any system using the JVM compiler.</p>",image:"https://cdn.educba.com/academy/wp-content/uploads/2021/03/Importance-of-Compiler.jpg"},"Lexical Analysis":{title:"Lexical Analysis",content:"The phase where source code is broken into tokens. Removes comments and whitespace and detects lexical errors.",example:"<p>int a = 5; → Tokens: int, a, =, 5, ;</p>",image:"https://www.tutorialspoint.com/lexical-analysis/images/lexical-analysis.jpg"},"Syntax Analysis":{title:"Syntax Analysis",content:"Also called parsing. Checks grammar rules and generates a Parse Tree or Abstract Syntax Tree (AST). Detects syntax errors.",example:"<p>Expression: a + b → Parse tree showing addition operation.</p>",image:"https://www.tutorialspoint.com/compile_theory/images/syntax-analysis.jpg"},"Semantic Analysis":{title:"Semantic Analysis",content:"Ensures meaningful statements. Checks data types, variable declarations, scope, and function usage.",example:"<p>int a; a = 'Hello'; → Type mismatch error.</p>",image:"https://www.tutorialspoint.com/compile_theory/images/semantic-analysis.jpg"},"Intermediate Code Generation":{title:"Intermediate Code Generation",content:"Generates an intermediate representation (IR) of the source code to facilitate optimization and machine independence.",example:"<p>Three-address code: t1 = b + c; a = t1;</p>",image:"https://www.researchgate.net/profile/Amruth-Kumar/publication/342935318/figure/fig2/AS:911149455916544@1594871099862/Intermediate-Code-Generation.png"},"Code Optimization":{title:"Code Optimization",content:"Improves performance without changing functionality. Removes redundant code, loop unrolling, common subexpression elimination.",example:"<p>Optimized: Reuse previously computed value instead of recalculating.</p>",image:"https://miro.medium.com/v2/resize:fit:1200/format:webp/1*zjaT1S_1SPpWbYfXU0sU0g.png"},"Code Generation":{title:"Code Generation",content:"Converts optimized intermediate code into target machine code, allocating registers and memory.",example:"<p>C code compiled to x86 assembly instructions.</p>",image:"https://www.tutorialspoint.com/compile_theory/images/code-generation.jpg"},"Symbol Table":{title:"Symbol Table",content:"Stores information about identifiers: name, type, scope, memory location. Used throughout compilation.",example:"<p>Example: variable a, type int, memory 0x01A3</p>",image:"https://www.tutorialspoint.com/compile_theory/images/symbol-table.jpg"},"Error Handling":{title:"Error Handling",content:"Detects lexical, syntax, and semantic errors and may provide suggestions to fix them.",example:"<p>Example: Undefined variable usage triggers a compile-time error.</p>",image:"https://www.tutorialspoint.com/compile_theory/images/error-handling.jpg"},"Types of Compilers":{title:"Types of Compilers",content:"Single-pass, Multi-pass, Cross Compiler, Just-in-Time (JIT) compiler. Each serves a specific purpose based on optimization and target platform.",example:"<p>Java JIT compiler executes bytecode at runtime.</p>",image:"https://upload.wikimedia.org/wikipedia/commons/0/00/Compiler_types.png"},"Real-world Example":{title:"Real-world Example",content:"Java Compiler converts .java files to bytecode (.class). GCC converts .c files to machine code. Python uses bytecode compilation (.pyc).",example:"<p>Example: int a = 10; → Executable machine code or JVM bytecode.</p>",image:"https://miro.medium.com/v2/resize:fit:1400/1*3mX5Vhzf1iMMSbSlYr2kAA.png"}}},g=()=>l(!0),f=t=>{if(n){const r=Math.min(Math.max(t.clientX,150),400);u(r)}},c=()=>l(!1),a=Object.values(p).map(t=>t[s]).filter(Boolean)[0]||"";return e.jsxs("div",{className:"dashboard",onMouseMove:f,onMouseUp:c,onMouseLeave:c,children:[e.jsxs("header",{className:"header",children:[e.jsx("h1",{children:"🖥️ Compiler Design Dashboard"}),e.jsx("input",{type:"text",placeholder:"Search topics...",className:"search",value:d,onChange:t=>x(t.target.value)})]}),e.jsx("aside",{className:"sidebar",style:{width:m},children:Object.keys(p).map(t=>{const r=Object.keys(p[t]).filter(i=>i.toLowerCase().includes(d.toLowerCase()));return r.length===0?null:e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"section-title",children:t}),e.jsx("ul",{children:r.map(i=>e.jsx("li",{onClick:()=>h(i),className:s===i?"active":"",children:i},i))}),e.jsx("hr",{})]},t)})}),e.jsx("div",{className:"resizer",onMouseDown:g}),e.jsxs("main",{className:"content",children:[e.jsx("h2",{children:s}),typeof a=="object"?e.jsxs("div",{children:[e.jsx("p",{children:a.content}),a.example&&e.jsxs("div",{className:"example-container",children:[e.jsx("pre",{className:"code-block",children:e.jsx("code",{children:a.example})}),e.jsx("iframe",{title:"example-output",className:"output-frame",srcDoc:a.example})]}),a.image&&e.jsx("img",{src:a.image,alt:"Example",className:"topic-img"})]}):e.jsx("p",{children:a})]})]})}function ye(){const[s,h]=o.useState("Computer Networks Introduction"),[m,u]=o.useState(250),[n,l]=o.useState(!1),[d,x]=o.useState(""),p={"🌐 Computer Networks":{"Computer Networks Introduction":{title:"Computer Networks Introduction",content:"A computer network is a collection of interconnected devices that share data and resources. It enables communication between computers and other devices.",example:"<p>Example: Internet, office networks.</p>",image:"https://upload.wikimedia.org/wikipedia/commons/6/63/Network_topology.png"},"OSI Model":{title:"OSI Model",content:"The OSI (Open Systems Interconnection) model is a conceptual framework used to understand network interactions in 7 layers: Physical, Data Link, Network, Transport, Session, Presentation, Application.",example:"<ul><li>Physical: Cables, switches</li><li>Data Link: MAC addresses</li><li>Network: IP addressing</li><li>Transport: TCP/UDP</li><li>Session: Connection management</li><li>Presentation: Encryption, compression</li><li>Application: Email, HTTP</li></ul>",image:"https://www.tutorialspoint.com/data_communication_computer_network/images/osi_model.jpg"},"TCP/IP Model":{title:"TCP/IP Model",content:"The TCP/IP model is a 4-layer framework used for practical internet communication: Link, Internet, Transport, Application.",example:"<p>Example: HTTP over TCP/IP.</p>",image:"https://www.tutorialspoint.com/data_communication_computer_network/images/tcp_ip_model.jpg"},"LAN (Local Area Network)":{title:"LAN (Local Area Network)",content:"LAN is a network that connects computers in a small area like an office or building. It allows resource sharing like printers and files.",example:"<p>Example: Office network with 10 computers connected via switch.</p>",image:"https://www.tutorialspoint.com/data_communication_computer_network/images/lan_network.jpg"},"WAN (Wide Area Network)":{title:"WAN (Wide Area Network)",content:"WAN connects devices across large geographical areas, often using routers and leased lines or the internet.",example:"<p>Example: Internet, corporate networks connecting cities.</p>",image:"https://www.tutorialspoint.com/data_communication_computer_network/images/wan_network.jpg"},"PAN (Personal Area Network)":{title:"PAN (Personal Area Network)",content:"PAN is a network for personal devices within a range of a few meters, usually using Bluetooth or Wi-Fi.",example:"<p>Example: Smartphone connected to wireless headphones or smartwatch.</p>",image:"https://www.tutorialspoint.com/data_communication_computer_network/images/pan_network.jpg"},"Network Topologies":{title:"Network Topologies",content:"Topology defines the layout of devices in a network. Common topologies include Star, Ring, Bus, Mesh, and Hybrid.",example:"<p>Example: Star topology is common in LANs with a central switch.</p>",image:"https://www.tutorialspoint.com/data_communication_computer_network/images/network_topology.jpg"},"Network Devices":{title:"Network Devices",content:"Devices that connect, manage, and control network traffic: Router, Switch, Hub, Access Point, Modem.",example:"<p>Example: Router connects LAN to Internet.</p>",image:"https://www.tutorialspoint.com/data_communication_computer_network/images/network_devices.jpg"},"IP Addressing":{title:"IP Addressing",content:"IP addresses uniquely identify devices on a network. IPv4 uses 32 bits, IPv6 uses 128 bits.",example:"<p>Example: IPv4: 192.168.1.1, IPv6: 2001:0db8::1</p>",image:"https://www.tutorialspoint.com/data_communication_computer_network/images/ip_addressing.jpg"},Subnetting:{title:"Subnetting",content:"Subnetting divides a network into smaller sub-networks to improve efficiency and security.",example:"<p>Example: 192.168.1.0/24 can be split into two /25 subnets.</p>",image:"https://www.tutorialspoint.com/data_communication_computer_network/images/subnetting.jpg"},Routing:{title:"Routing",content:"Routing determines the path packets take from source to destination. Routers use routing tables and protocols like OSPF, BGP.",example:"<p>Example: Packet traveling from New York to London over the internet.</p>",image:"https://www.tutorialspoint.com/data_communication_computer_network/images/routing.jpg"},Switching:{title:"Switching",content:"Switching forwards packets between devices on the same network. Types: Circuit switching, Packet switching, Message switching.",example:"<p>Example: Ethernet switch in LAN.</p>",image:"https://www.tutorialspoint.com/data_communication_computer_network/images/switching.jpg"},"Network Protocols":{title:"Network Protocols",content:"Rules for communication between network devices. Common protocols: HTTP, FTP, SMTP, TCP, UDP, IP.",example:"<p>Example: Browser uses HTTP to request web pages.</p>",image:"https://www.tutorialspoint.com/data_communication_computer_network/images/network_protocols.jpg"},"Wi-Fi & Bluetooth":{title:"Wi-Fi & Bluetooth",content:"Wireless communication standards for local networks and personal devices. Wi-Fi for LAN, Bluetooth for PAN.",example:"<p>Example: Connecting smartphone to Wi-Fi router or Bluetooth headphones.</p>",image:"https://www.tutorialspoint.com/data_communication_computer_network/images/wireless_networks.jpg"}}},g=()=>l(!0),f=t=>{if(n){const r=Math.min(Math.max(t.clientX,150),400);u(r)}},c=()=>l(!1),a=Object.values(p).map(t=>t[s]).filter(Boolean)[0]||"";return e.jsxs("div",{className:"dashboard",onMouseMove:f,onMouseUp:c,onMouseLeave:c,children:[e.jsxs("header",{className:"header",children:[e.jsx("h1",{children:"🌐 Computer Networks Dashboard"}),e.jsx("input",{type:"text",placeholder:"Search topics...",className:"search",value:d,onChange:t=>x(t.target.value)})]}),e.jsx("aside",{className:"sidebar",style:{width:m},children:Object.keys(p).map(t=>{const r=Object.keys(p[t]).filter(i=>i.toLowerCase().includes(d.toLowerCase()));return r.length===0?null:e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"section-title",children:t}),e.jsx("ul",{children:r.map(i=>e.jsx("li",{onClick:()=>h(i),className:s===i?"active":"",children:i},i))}),e.jsx("hr",{})]},t)})}),e.jsx("div",{className:"resizer",onMouseDown:g}),e.jsxs("main",{className:"content",children:[e.jsx("h2",{children:s}),typeof a=="object"?e.jsxs("div",{children:[e.jsx("p",{children:a.content}),a.example&&e.jsxs("div",{className:"example-container",children:[e.jsx("pre",{className:"code-block",children:e.jsx("code",{children:a.example})}),e.jsx("iframe",{title:"example-output",className:"output-frame",srcDoc:a.example})]}),a.image&&e.jsx("img",{src:a.image,alt:"Example",className:"topic-img"})]}):e.jsx("p",{children:a})]})]})}function Se(){const[s,h]=o.useState("DevOps Introduction"),[m,u]=o.useState(250),[n,l]=o.useState(!1),[d,x]=o.useState(""),p={"⚙️ DevOps":{"DevOps Introduction":{title:"DevOps Introduction",content:"DevOps is a set of practices that combines software development (Dev) and IT operations (Ops). It aims to shorten the system development life cycle and deliver high-quality software continuously. DevOps emphasizes automation, collaboration, and continuous feedback between development and operations teams.",example:"<p>Example: A company using CI/CD pipelines to deploy code automatically after passing all tests, reducing manual work and deployment errors.</p>",image:"https://miro.medium.com/v2/resize:fit:1400/1*0gYXVR8RkZfXvPdzfDMOlg.jpeg"},"DevOps Lifecycle":{title:"DevOps Lifecycle",content:"The DevOps lifecycle consists of multiple stages — Continuous Development, Continuous Integration, Continuous Testing, Continuous Deployment, Continuous Monitoring, and Continuous Feedback. Each stage ensures rapid and reliable delivery of applications.",example:"<ul><li><b>Plan & Code:</b> Developers plan and write code using tools like Git.</li><li><b>Build:</b> Jenkins or GitHub Actions automate builds.</li><li><b>Test:</b> Tools like Selenium, JUnit ensure quality.</li><li><b>Deploy:</b> Kubernetes or Docker used for containerized deployment.</li><li><b>Monitor:</b> Tools like Prometheus, Grafana monitor performance.</li></ul>",image:"https://miro.medium.com/v2/resize:fit:1400/1*nWMpWe6FMMzK5wo-4D1p4w.png"},"DevOps Tools":{title:"DevOps Tools",content:"DevOps relies on a combination of tools that automate various stages of the pipeline, often referred to as the 'DevOps Toolchain'.",example:"<ul><li><b>Git:</b> Version control system for code management.</li><li><b>Jenkins:</b> Automates building, testing, and deployment.</li><li><b>Docker:</b> Containerizes applications for consistent environments.</li><li><b>Kubernetes:</b> Orchestrates container deployment at scale.</li><li><b>Ansible:</b> Automates server configuration.</li><li><b>Prometheus + Grafana:</b> Monitor and visualize metrics.</li></ul>",image:"https://miro.medium.com/v2/resize:fit:1400/1*qwof-JhFf5MbAo2dRZV0iQ.jpeg"},"DevOps Real-World Example":{title:"DevOps Real-World Example",content:"Netflix is one of the best examples of successful DevOps implementation. With thousands of daily deployments, Netflix relies on automation, continuous delivery, and real-time monitoring to ensure uninterrupted streaming service worldwide.",example:"<p>Example: Netflix uses Spinnaker (open-source CD platform) and Chaos Monkey (for resilience testing) to ensure system reliability even when failures occur.</p>",image:"https://miro.medium.com/v2/resize:fit:1400/1*2Q8CXzHCA_MO_UYb6bzLKw.jpeg"},"DevOps Benefits":{title:"DevOps Benefits",content:"Implementing DevOps offers numerous benefits such as faster software delivery, improved collaboration, higher deployment success rates, and early problem detection.",example:"<ul><li>50% faster time-to-market</li><li>Improved communication between Dev & Ops</li><li>Continuous monitoring for early bug detection</li><li>Automation reduces manual workload</li></ul>",image:"https://miro.medium.com/v2/resize:fit:1400/1*V_d9x6eOE1nYDFYbU8VErA.jpeg"},"DevOps vs Traditional IT":{title:"DevOps vs Traditional IT",content:"In traditional IT, development and operations work in silos — leading to slow delivery and conflicts. DevOps unites both through automation, CI/CD, and shared responsibility.",example:"<p><b>Traditional IT:</b> Manual testing and deployment.<br/><b>DevOps:</b> Automated pipelines, faster feedback loops.</p>",image:"https://miro.medium.com/v2/resize:fit:1400/1*h6HGEHcwc0W3qV3FThQuuw.png"},"Future of DevOps":{title:"Future of DevOps",content:"The future of DevOps will see tighter integration with AI and Cloud. Concepts like AIOps (AI for Operations), GitOps, and DevSecOps are gaining traction to automate decision-making, strengthen security, and enhance scalability.",example:"<p>Example: Using AI-based monitoring tools to predict failures before they happen, or automating security checks within the CI/CD pipeline.</p>",image:"https://miro.medium.com/v2/resize:fit:1400/1*IO6M4-0cZTzBQod7iVCU6g.jpeg"}}},g=()=>l(!0),f=t=>{if(n){const r=Math.min(Math.max(t.clientX,150),400);u(r)}},c=()=>l(!1),a=Object.values(p).map(t=>t[s]).filter(Boolean)[0]||"";return e.jsxs("div",{className:"dashboard",onMouseMove:f,onMouseUp:c,onMouseLeave:c,children:[e.jsxs("header",{className:"header",children:[e.jsx("h1",{children:"⚙️ DevOps Dashboard"}),e.jsx("input",{type:"text",placeholder:"Search topics...",className:"search",value:d,onChange:t=>x(t.target.value)})]}),e.jsx("aside",{className:"sidebar",style:{width:m},children:Object.keys(p).map(t=>{const r=Object.keys(p[t]).filter(i=>i.toLowerCase().includes(d.toLowerCase()));return r.length===0?null:e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"section-title",children:t}),e.jsx("ul",{children:r.map(i=>e.jsx("li",{onClick:()=>h(i),className:s===i?"active":"",children:i},i))}),e.jsx("hr",{})]},t)})}),e.jsx("div",{className:"resizer",onMouseDown:g}),e.jsxs("main",{className:"content",children:[e.jsx("h2",{children:s}),typeof a=="object"?e.jsxs("div",{children:[e.jsx("p",{children:a.content}),a.example&&e.jsxs("div",{className:"example-container",children:[e.jsx("pre",{className:"code-block",children:e.jsx("code",{children:a.example})}),e.jsx("iframe",{title:"example-output",className:"output-frame",srcDoc:a.example})]}),a.image&&e.jsx("img",{src:a.image,alt:"Example",className:"topic-img"})]}):e.jsx("p",{children:a})]})]})}function Ne(){const[s,h]=o.useState("Introduction to Java"),[m,u]=o.useState(260),[n,l]=o.useState(!1),[d,x]=o.useState(""),p={"☕ Core Java":{"Introduction to Java":{title:"Introduction to Java",content:`
Java is a high-level, object-oriented, platform-independent programming language.
It follows the principle "Write Once, Run Anywhere (WORA)" because Java programs are compiled into bytecode that runs on the Java Virtual Machine (JVM).

Features:
- Simple and secure
- Object-Oriented
- Platform Independent
- Robust and portable
- Multi-threaded and distributed
        `,example:`
public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}
        `},"Java Data Types":{title:"Java Data Types",content:`
Java supports two main categories of data types: 
1. **Primitive Types** (int, float, double, char, boolean, etc.)
2. **Non-Primitive Types** (String, Arrays, Classes, Interfaces)
        `,example:`
int num = 10;
double price = 99.99;
char grade = 'A';
boolean isActive = true;
String name = "Raj";
System.out.println("Name: " + name + " | Price: " + price);
        `},"Java Operators":{title:"Java Operators",content:`
Operators are used to perform operations on variables and values.

Types:
1. Arithmetic (+, -, *, /, %)
2. Relational (==, !=, >, <, >=, <=)
3. Logical (&&, ||, !)
4. Assignment (=, +=, -=)
5. Increment/Decrement (++, --)
6. Ternary (? :)
        `,example:`
int a = 10, b = 5;
System.out.println(a + b); // 15
System.out.println(a > b); // true
System.out.println((a > b) ? "A is greater" : "B is greater");
        `},"Control Statements":{title:"Control Statements",content:`
Control statements control the flow of execution.
1. if-else
2. switch
3. for, while, do-while
4. break & continue
        `,example:`
int n = 3;
if (n > 0)
    System.out.println("Positive");
else
    System.out.println("Negative");

for (int i = 1; i <= 5; i++)
    System.out.println("Count: " + i);
        `},"Object-Oriented Programming":{title:"Object-Oriented Programming",content:`
OOP is the heart of Java. It uses objects and classes to structure code.

Key Concepts:
- **Class & Object**
- **Inheritance**
- **Polymorphism**
- **Encapsulation**
- **Abstraction**
        `,example:`
class Animal {
    void sound() {
        System.out.println("Animal makes sound");
    }
}
class Dog extends Animal {
    void sound() {
        System.out.println("Dog barks");
    }
}
public class Main {
    public static void main(String[] args) {
        Animal a = new Dog();
        a.sound();
    }
}
        `},"Exception Handling":{title:"Exception Handling",content:`
Exceptions handle runtime errors gracefully using:
- try
- catch
- finally
- throw
- throws
        `,example:`
try {
    int result = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Error: " + e.getMessage());
} finally {
    System.out.println("End of program");
}
        `},"Java Collections Framework":{title:"Java Collections Framework",content:`
Collections are used to store and manipulate groups of data efficiently.

Important Interfaces:
- List (ArrayList, LinkedList)
- Set (HashSet, TreeSet)
- Map (HashMap, TreeMap)
        `,example:`
import java.util.*;

public class CollectionExample {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<>();
        list.add("Java");
        list.add("Python");
        list.add("C++");

        for (String lang : list)
            System.out.println(lang);
    }
}
        `},"JDBC (Java Database Connectivity)":{title:"JDBC (Java Database Connectivity)",content:`
JDBC connects Java applications with databases like MySQL.
Steps:
1. Load the driver
2. Establish connection
3. Create statement
4. Execute query
5. Close connection
        `,example:`
import java.sql.*;
class ConnectDB {
    public static void main(String[] args) {
        try {
            Connection con = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/school", "root", "password");
            Statement stmt = con.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT * FROM students");

            while (rs.next())
                System.out.println(rs.getString("name"));
            
            con.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
        `}},"🌐 Advanced Java":{"JSP (Java Server Pages)":{title:"JSP (Java Server Pages)",content:`
JSP is a server-side technology used to create dynamic web content by embedding Java code in HTML.

JSP Life Cycle:
1. Translation → Servlet
2. Compilation
3. Initialization
4. Execution
5. Destruction

Used for: Login pages, forms, and web dashboards.
        `,example:`
<%@ page language="java" %>
<html>
<body>
<%
    String name = request.getParameter("user");
    out.println("Welcome, " + name + "!");
%>
</body>
</html>
        `},Servlets:{title:"Servlets",content:`
A Servlet is a Java class that handles HTTP requests and responses on a web server.
It acts as the controller between the user and the backend.

Servlet Lifecycle:
1. init()
2. service()
3. destroy()
        `,example:`
import java.io.*;
import jakarta.servlet.*;
import jakarta.servlet.http.*;

public class HelloServlet extends HttpServlet {
    public void doGet(HttpServletRequest req, HttpServletResponse res)
    throws ServletException, IOException {
        res.setContentType("text/html");
        PrintWriter out = res.getWriter();
        out.println("<h2>Hello from Servlet!</h2>");
    }
}
        `},"Spring Framework":{title:"Spring Framework",content:`
Spring is a powerful Java framework used for building enterprise-level applications.

Key Features:
- **Dependency Injection (IoC)**
- **Spring MVC** for web apps
- **Spring Boot** for rapid development
- **Spring Data JPA** for databases
- **Spring Security** for authentication

Advantages:
- Reduces boilerplate code
- Simplifies configuration
- Provides modular, testable architecture
        `,example:`
// Example: Spring Boot REST API
import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
import org.springframework.web.bind.annotation.*;

@SpringBootApplication
@RestController
public class App {
    public static void main(String[] args) {
        SpringApplication.run(App.class, args);
    }

    @GetMapping("/hello")
    public String hello() {
        return "Hello from Spring Boot!";
    }
}
        `},"Real-World Java Example":{title:"Real-World Java Example",content:`
Example: Building a Student Management System
- **Frontend:** JSP + HTML + CSS
- **Backend:** Servlet + JDBC
- **Database:** MySQL
- **Framework:** Spring Boot (optional upgrade)

Data Flow:
1. User submits form via JSP.
2. Servlet processes data.
3. JDBC saves or retrieves data from MySQL.
4. JSP displays the result dynamically.
        `,example:`
<!-- student.jsp -->
<form action="StudentServlet" method="post">
  Name: <input type="text" name="name" />
  Age: <input type="number" name="age" />
  <input type="submit" value="Save" />
</form>
        `}}},g=()=>l(!0),f=t=>{if(n){const r=Math.min(Math.max(t.clientX,180),400);u(r)}},c=()=>l(!1),a=Object.values(p).map(t=>t[s]).filter(Boolean)[0]||"";return e.jsxs("div",{className:"dashboard",onMouseMove:f,onMouseUp:c,onMouseLeave:c,children:[e.jsxs("header",{className:"header",children:[e.jsx("h1",{children:"☕ Java Dashboard"}),e.jsx("input",{type:"text",placeholder:"Search topics...",className:"search",value:d,onChange:t=>x(t.target.value)})]}),e.jsx("aside",{className:"sidebar",style:{width:m},children:Object.keys(p).map(t=>{const r=Object.keys(p[t]).filter(i=>i.toLowerCase().includes(d.toLowerCase()));return r.length===0?null:e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"section-title",children:t}),e.jsx("ul",{children:r.map(i=>e.jsx("li",{onClick:()=>h(i),className:s===i?"active":"",children:i},i))}),e.jsx("hr",{})]},t)})}),e.jsx("div",{className:"resizer",onMouseDown:g}),e.jsxs("main",{className:"content",children:[e.jsx("h2",{children:s}),typeof a=="object"?e.jsxs("div",{children:[e.jsx("pre",{className:"code-block",children:e.jsx("code",{children:a.content})}),e.jsx("pre",{className:"code-block java",children:e.jsx("code",{children:a.example})})]}):e.jsx("p",{children:a})]})]})}function ke(){const[s,h]=o.useState("Introduction to Java Fullstack"),[m,u]=o.useState(250),[n,l]=o.useState(!1),[d,x]=o.useState(""),p={"☕ Java Fullstack Development":{"Introduction to Java Fullstack":{title:"Introduction to Java Fullstack",content:"Java Fullstack development involves backend development using Java (Spring, JSP, Servlets) and frontend using HTML, CSS, JavaScript frameworks. It enables end-to-end application development.",example:"<p>Example: A web application where backend APIs are created in Spring Boot and frontend in React.</p>",image:"https://miro.medium.com/v2/resize:fit:1400/format:webp/1*2rB2zK3Uy2l6U_hyO9E9bw.png"},"Core Java Basics":{title:"Core Java Basics",content:"Covers OOP concepts, data types, operators, loops, exception handling, collections, and multithreading in Java.",example:`<pre><code>class HelloWorld{
 public static void main(String[] args){
   System.out.println('Hello, World');
 }
}</code></pre>`,image:"https://www.javatpoint.com/images/java/java_image.png"},"JSP (Java Server Pages)":{title:"JSP (Java Server Pages)",content:"JSP is used to create dynamic web pages using Java code embedded in HTML. It simplifies building web-based applications.",example:`<pre><code>&lt;%@ page language='java' %&gt;
&lt;html&gt;
&lt;body&gt;
&lt;h1&gt;Hello JSP&lt;/h1&gt;
&lt;% String name='Raj'; %&gt;
&lt;p&gt;Welcome, &lt;%= name %&gt;&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>`,image:"https://www.javatpoint.com/images/jsp/jsp_image.png"},Servlets:{title:"Servlets",content:"Servlets are Java programs that handle client requests and generate dynamic responses. They are the backbone of Java backend.",example:`<pre><code>import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
public class HelloServlet extends HttpServlet {
  protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
    res.setContentType('text/html');
    PrintWriter out = res.getWriter();
    out.println('&lt;h1&gt;Hello Servlet&lt;/h1&gt;');
  }
}</code></pre>`,image:"https://www.javatpoint.com/images/servlets/servlets_image.png"},"Spring Framework":{title:"Spring Framework",content:"Spring simplifies Java development with features like dependency injection, MVC architecture, REST API creation, and transaction management.",example:`<pre><code>@RestController
public class HelloController {
 @GetMapping('/hello')
 public String sayHello(){
  return 'Hello Spring';
 }
}</code></pre>`,image:"https://www.javatpoint.com/images/spring/spring_image.png"},"Spring Boot":{title:"Spring Boot",content:"Spring Boot is a microservice-based framework for building production-ready applications with minimal configuration.",example:`<pre><code>@SpringBootApplication
public class Application {
 public static void main(String[] args){
  SpringApplication.run(Application.class,args);
 }
}</code></pre>`,image:"https://miro.medium.com/v2/resize:fit:1400/1*3iDTVxXHDFn2k1Rg4n4nRA.png"},"JDBC (Database Connectivity)":{title:"JDBC (Database Connectivity)",content:"Java Database Connectivity allows Java applications to interact with databases for CRUD operations.",example:`<pre><code>Connection con = DriverManager.getConnection(url,user,pass);
Statement stmt = con.createStatement();
ResultSet rs = stmt.executeQuery('SELECT * FROM users');</code></pre>`,image:"https://www.javatpoint.com/images/jdbc/jdbc_image.png"},"REST APIs with Java":{title:"REST APIs with Java",content:"Develop backend services using Spring Boot to handle HTTP requests and provide JSON/XML responses.",example:`<pre><code>@RestController
@RequestMapping('/api/users')
public class UserController {
 @GetMapping
 public List&lt;User&gt; getUsers(){ return userService.getAllUsers(); }
}</code></pre>`,image:"https://spring.io/images/spring-rest.png"},"Frontend Integration":{title:"Frontend Integration",content:"Frontend (HTML, CSS, JS, React/Angular) consumes backend APIs for dynamic web applications.",example:`<pre><code>fetch('/api/users')
.then(res => res.json())
.then(data => console.log(data));</code></pre>`,image:"https://upload.wikimedia.org/wikipedia/commons/3/3b/React_Logo.svg"},"Authentication & Security":{title:"Authentication & Security",content:"Use Spring Security for authentication, authorization, and protecting APIs from unauthorized access.",example:`<pre><code>@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter { ... }</code></pre>`,image:"https://www.javatpoint.com/images/spring-security/spring-security.png"},Deployment:{title:"Deployment",content:"Deploy Java Fullstack apps on servers like Tomcat, AWS, or Docker containers for production use.",example:"<p>Example: Deploy Spring Boot backend on AWS EC2 and React frontend on S3.</p>",image:"https://miro.medium.com/v2/resize:fit:1400/format:webp/1*8xQoRohpTKp7rQ4tT3W7Jg.png"}}},g=()=>l(!0),f=t=>{if(n){const r=Math.min(Math.max(t.clientX,150),400);u(r)}},c=()=>l(!1),a=Object.values(p).map(t=>t[s]).filter(Boolean)[0]||"";return e.jsxs("div",{className:"dashboard",onMouseMove:f,onMouseUp:c,onMouseLeave:c,children:[e.jsxs("header",{className:"header",children:[e.jsx("h1",{children:"☕ Java Fullstack Dashboard"}),e.jsx("input",{type:"text",placeholder:"Search topics...",className:"search",value:d,onChange:t=>x(t.target.value)})]}),e.jsx("aside",{className:"sidebar",style:{width:m},children:Object.keys(p).map(t=>{const r=Object.keys(p[t]).filter(i=>i.toLowerCase().includes(d.toLowerCase()));return r.length===0?null:e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"section-title",children:t}),e.jsx("ul",{children:r.map(i=>e.jsx("li",{onClick:()=>h(i),className:s===i?"active":"",children:i},i))}),e.jsx("hr",{})]},t)})}),e.jsx("div",{className:"resizer",onMouseDown:g}),e.jsxs("main",{className:"content",children:[e.jsx("h2",{children:s}),typeof a=="object"?e.jsxs("div",{children:[e.jsx("p",{children:a.content}),a.example&&e.jsxs("div",{className:"example-container",children:[e.jsx("pre",{className:"code-block",children:e.jsx("code",{children:a.example})}),e.jsx("iframe",{title:"example-output",className:"output-frame",srcDoc:a.example})]}),a.image&&e.jsx("img",{src:a.image,alt:"Example",className:"topic-img"})]}):e.jsx("p",{children:a})]})]})}function Ce(){const[s,h]=o.useState("DBMS Introduction"),[m,u]=o.useState(250),[n,l]=o.useState(!1),[d,x]=o.useState(""),p={"🗃️ Database Management System (DBMS)":{"DBMS Introduction":{title:"DBMS Introduction",content:"A Database Management System (DBMS) is software that stores, organizes, and manages data efficiently. It allows multiple users to access and manipulate data simultaneously while maintaining consistency, security, and integrity.",example:"<p>Example: MySQL, Oracle, PostgreSQL, and MongoDB are popular DBMSs used by companies worldwide to manage customer, financial, or operational data.</p>",image:"https://miro.medium.com/v2/resize:fit:1400/1*JMLv8vVhjsVfwgA2eZqYxg.jpeg"},"DBMS Architecture":{title:"DBMS Architecture",content:"DBMS architecture defines how data is stored, processed, and accessed. The common architectures are 1-tier, 2-tier, and 3-tier. A 3-tier architecture separates the user interface, application logic, and database layers for better scalability.",example:"<ul><li><b>1-Tier:</b> DBMS runs on the same machine as the user.</li><li><b>2-Tier:</b> Application communicates directly with the database (e.g., client-server model).</li><li><b>3-Tier:</b> Web applications — frontend → backend → database.</li></ul>",image:"https://miro.medium.com/v2/resize:fit:1400/1*MBh7LxgPRTURzIMTE6R9Ng.png"},"ER Model (Entity Relationship Model)":{title:"ER Model (Entity Relationship Model)",content:"The Entity-Relationship (ER) model represents the logical structure of a database. It shows how entities (tables) relate to each other through relationships. Each entity has attributes describing its characteristics.",example:"<p><b>Real-World Example:</b> A university database with entities like <b>Student</b>, <b>Course</b>, and <b>Instructor</b>. Students <i>enroll</i> in courses, and instructors <i>teach</i> courses.</p>",image:"https://www.researchgate.net/profile/Rakshit-Agarwal/publication/341992734/figure/fig1/AS:904347593228292@1592111531890/Entity-Relationship-Diagram-ER-Diagram.png"},"ER Diagram Explanation":{title:"ER Diagram Explanation",content:`An ER Diagram (ERD) uses shapes and connectors to illustrate relationships. Common components include: 

• Entities — Represented by rectangles (e.g., STUDENT).
• Attributes — Represented by ovals (e.g., Name, Roll_No).
• Relationships — Represented by diamonds (e.g., ENROLLS).
• Cardinality — Defines how many instances of one entity relate to another (1:1, 1:N, N:M).`,example:"<p><b>Example:</b> One <i>Instructor</i> teaches many <i>Courses</i> — 1:N relationship.</p>",image:"https://miro.medium.com/v2/resize:fit:1400/1*j6o7M2tY_qyQudR9VdStgA.png"},"Data Flow Diagram (DFD)":{title:"Data Flow Diagram (DFD)",content:"A DFD shows how data moves through a system — where it originates, how it flows, and where it is stored. It focuses on the process rather than the data structure.",example:"<ul><li><b>Level 0 (Context Diagram):</b> Shows the system as a single process with external entities (e.g., Student, Admin).</li><li><b>Level 1:</b> Breaks the system into sub-processes like Registration, Course Management, and Grades.</li></ul><p>Each process transforms data (input → output).</p>",image:"https://creately.com/diagram/example/hm5z1yyl/dfd-level-0-university-management-system"},"DFD Explanation":{title:"DFD Explanation",content:`A DFD uses standardized symbols to represent data flow:

• Process — Circle or rounded rectangle (e.g., Register Student)
• Data Flow — Arrows showing data movement (e.g., Student Info)
• Data Store — Open-ended rectangle (e.g., Database Table)
• External Entity — Square (e.g., Admin, User)

It helps visualize how input data transforms into output through processes.`,example:"<p><b>Example:</b> In a Library Management System, the process <i>Issue Book</i> takes <i>User ID</i> and <i>Book ID</i> as input and updates the <i>Book Record</i> store.</p>",image:"https://creately.com/diagram/example/jx9h2e2a/library-management-system-dfd-level-1"},Normalization:{title:"Normalization",content:"Normalization is the process of organizing data in a database to reduce redundancy and improve integrity. It breaks large tables into smaller, related ones. The main normal forms are 1NF, 2NF, 3NF, and BCNF.",example:"<ul><li><b>1NF:</b> Remove repeating groups.</li><li><b>2NF:</b> Remove partial dependency.</li><li><b>3NF:</b> Remove transitive dependency.</li></ul><p>Example: Storing student address in a separate table instead of duplicating it in every record.</p>",image:"https://miro.medium.com/v2/resize:fit:1400/1*7aOrJY_FOZkVC-axSh1ayw.png"},"Real-World Example (Banking System)":{title:"Real-World Example (Banking System)",content:`In a banking DBMS, entities like <b>Customer</b>, <b>Account</b>, and <b>Transaction</b> are interrelated. Customers can own multiple accounts, and each account can have many transactions.

A DFD would show processes like <i>Deposit Money</i> and <i>Withdraw Cash</i> interacting with these data stores.`,example:"<p><b>ER Example:</b> Customer (1:N) Account — A customer can hold multiple accounts.<br/><b>DFD Example:</b> A transaction process updates both Account and Transaction tables simultaneously.</p>",image:"https://creately.com/diagram/example/hb7fh8d63/er-diagram-for-banking-system"},"Future of DBMS":{title:"Future of DBMS",content:"Modern DBMSs are evolving with cloud, AI, and distributed systems. Cloud databases like AWS RDS, Azure SQL, and Google BigQuery offer scalability and automation. NoSQL and NewSQL systems are bridging structured and unstructured data for large-scale analytics.",example:"<p>Example: MongoDB for unstructured data, Snowflake for data warehousing, and Firebase for real-time mobile data sync.</p>",image:"https://miro.medium.com/v2/resize:fit:1400/1*n-SHPOK6n2SMLqXDTElpDw.png"}}},g=()=>l(!0),f=t=>{if(n){const r=Math.min(Math.max(t.clientX,150),400);u(r)}},c=()=>l(!1),a=Object.values(p).map(t=>t[s]).filter(Boolean)[0]||"";return e.jsxs("div",{className:"dashboard",onMouseMove:f,onMouseUp:c,onMouseLeave:c,children:[e.jsxs("header",{className:"header",children:[e.jsx("h1",{children:"🗃️ DBMS Dashboard"}),e.jsx("input",{type:"text",placeholder:"Search topics...",className:"search",value:d,onChange:t=>x(t.target.value)})]}),e.jsx("aside",{className:"sidebar",style:{width:m},children:Object.keys(p).map(t=>{const r=Object.keys(p[t]).filter(i=>i.toLowerCase().includes(d.toLowerCase()));return r.length===0?null:e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"section-title",children:t}),e.jsx("ul",{children:r.map(i=>e.jsx("li",{onClick:()=>h(i),className:s===i?"active":"",children:i},i))}),e.jsx("hr",{})]},t)})}),e.jsx("div",{className:"resizer",onMouseDown:g}),e.jsxs("main",{className:"content",children:[e.jsx("h2",{children:s}),typeof a=="object"?e.jsxs("div",{children:[e.jsx("p",{children:a.content}),a.example&&e.jsxs("div",{className:"example-container",children:[e.jsx("pre",{className:"code-block",children:e.jsx("code",{children:a.example})}),e.jsx("iframe",{title:"example-output",className:"output-frame",srcDoc:a.example})]}),a.image&&e.jsx("img",{src:a.image,alt:"Example",className:"topic-img"})]}):e.jsx("p",{children:a})]})]})}function Me(){const[s,h]=o.useState("Introduction to OS"),[m,u]=o.useState(250),[n,l]=o.useState(!1),[d,x]=o.useState(""),p={"🖥️ Operating Systems":{"Introduction to OS":{title:"Introduction to Operating System",content:"An Operating System (OS) is system software that acts as an intermediary between computer hardware and users. It manages resources, provides services, and ensures smooth execution of programs.",example:"<p>Example: Windows, Linux, macOS</p>",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Operating_System_Concepts.svg/1200px-Operating_System_Concepts.svg.png"},"Functions of OS":{title:"Functions of Operating System",content:"OS functions include Process Management, Memory Management, File Management, Device Management, Security, and providing a User Interface.",example:"<ul><li>Process Management</li><li>Memory Management</li><li>File Management</li></ul>",image:"https://www.geeksforgeeks.org/wp-content/uploads/20210303190301/Functions-of-OS.png"},"Types of OS":{title:"Types of Operating Systems",content:"Operating systems are categorized into Batch, Time-Sharing, Distributed, Network, Real-Time, Mobile, Multiprocessing, and Multithreading OS.",example:"<ul><li>Batch OS: IBM Mainframe</li><li>Time-Sharing OS: UNIX</li><li>RTOS: FreeRTOS</li></ul>",image:"https://www.tutorialride.com/img/operating-system-types.png"},"Process Management":{title:"Process Management",content:"Handles creation, scheduling, and termination of processes. Ensures CPU utilization is efficient.",example:"<p>Example: Running multiple applications simultaneously.</p>",image:"https://www.tutorialspoint.com/operating_system/images/process_scheduling.jpg"},"Memory Management":{title:"Memory Management",content:"Allocates memory to processes efficiently. Uses techniques like paging, segmentation, and virtual memory.",example:"<p>Example: Virtual memory in Windows or Linux.</p>",image:"https://www.tutorialspoint.com/operating_system/images/memory_management.jpg"},"File Management":{title:"File Management",content:"Maintains file systems, directories, and controls access to files and directories.",example:"<p>Example: NTFS in Windows, EXT4 in Linux.</p>",image:"https://www.tutorialspoint.com/operating_system/images/file_system.jpg"},"Device Management":{title:"Device Management",content:"Controls input/output devices via drivers. Manages data transfer using polling, interrupts, or DMA.",example:"<p>Example: Keyboard, Mouse, Printer.</p>",image:"https://www.tutorialspoint.com/operating_system/images/device_management.jpg"},"Security & Protection":{title:"Security and Protection",content:"Ensures authorized access only. Implements user authentication, encryption, and access control.",example:"<p>Example: Linux file permissions, User login passwords.</p>",image:"https://www.tutorialspoint.com/operating_system/images/security.jpg"},"User Interface":{title:"User Interface",content:"Provides CLI or GUI to interact with the system.",example:"<p>Example: Command Prompt (CLI), Windows Explorer (GUI)</p>",image:"https://www.tutorialspoint.com/operating_system/images/user_interface.jpg"},"Real-World Examples":{title:"Real-World Examples",content:"Different OS types are used in various scenarios.",example:"<ul><li>Batch OS: IBM Mainframe</li><li>Time-Sharing OS: UNIX</li><li>RTOS: FreeRTOS</li><li>Mobile OS: Android</li></ul>",image:"https://cdn.educba.com/academy/wp-content/uploads/2019/12/Types-of-Operating-Systems.jpg"},"Process Scheduling":{title:"Process Scheduling",content:"Techniques used to decide the order of process execution: FCFS, Round Robin, Priority Scheduling.",example:"<p>Example: Round Robin scheduling in time-sharing OS.</p>",image:"https://www.tutorialspoint.com/operating_system/images/process_scheduling.jpg"},"Memory Concepts":{title:"Memory Concepts",content:"Includes concepts like paging, segmentation, virtual memory, and memory hierarchy to optimize performance.",example:"<p>Example: RAM, Cache, Secondary storage.</p>",image:"https://www.tutorialspoint.com/operating_system/images/memory_management.jpg"},Deadlocks:{title:"Deadlocks",content:"Occurs when processes wait indefinitely due to circular dependencies. Avoided using algorithms like Banker's Algorithm.",example:"<p>Example: Two processes waiting for each other to release resources.</p>",image:"https://www.tutorialspoint.com/operating_system/images/deadlock.jpg"},"Interrupt Handling":{title:"Interrupt Handling",content:"Mechanism to give immediate attention to important events. Interrupts can be hardware or software-based.",example:"<p>Example: Keyboard interrupt triggers CPU to read input.</p>",image:"https://www.tutorialspoint.com/operating_system/images/interrupt_handling.jpg"}}},g=()=>l(!0),f=t=>{if(n){const r=Math.min(Math.max(t.clientX,150),400);u(r)}},c=()=>l(!1),a=Object.values(p).map(t=>t[s]).filter(Boolean)[0]||"";return e.jsxs("div",{className:"dashboard",onMouseMove:f,onMouseUp:c,onMouseLeave:c,children:[e.jsxs("header",{className:"header",children:[e.jsx("h1",{children:"🖥️ Operating System Dashboard"}),e.jsx("input",{type:"text",placeholder:"Search topics...",className:"search",value:d,onChange:t=>x(t.target.value)})]}),e.jsx("aside",{className:"sidebar",style:{width:m},children:Object.keys(p).map(t=>{const r=Object.keys(p[t]).filter(i=>i.toLowerCase().includes(d.toLowerCase()));return r.length===0?null:e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"section-title",children:t}),e.jsx("ul",{children:r.map(i=>e.jsx("li",{onClick:()=>h(i),className:s===i?"active":"",children:i},i))}),e.jsx("hr",{})]},t)})}),e.jsx("div",{className:"resizer",onMouseDown:g}),e.jsxs("main",{className:"content",children:[e.jsx("h2",{children:s}),typeof a=="object"?e.jsxs("div",{children:[e.jsx("p",{children:a.content}),a.example&&e.jsxs("div",{className:"example-container",children:[e.jsx("pre",{className:"code-block",children:e.jsx("code",{children:a.example})}),e.jsx("iframe",{title:"example-output",className:"output-frame",srcDoc:a.example})]}),a.image&&e.jsx("img",{src:a.image,alt:"Example",className:"topic-img"})]}):e.jsx("p",{children:a})]})]})}function Ee(){const[s,h]=o.useState("Introduction to Data Analytics"),[m,u]=o.useState(250),[n,l]=o.useState(!1),[d,x]=o.useState(""),p={"📊 Data Analytics":{"Introduction to Data Analytics":{title:"Introduction to Data Analytics",content:"Data Analytics is the process of examining raw data to uncover trends, patterns, and insights that help in decision-making.",example:"<p>Example: Analyzing sales data to optimize product inventory.</p>",image:"https://miro.medium.com/max/1400/1*YpWaqHedzj7qjHo0V9C7LQ.png"},"Types of Data Analytics":{title:"Types of Data Analytics",content:"1. Descriptive Analytics: What happened?<br/>2. Diagnostic Analytics: Why did it happen?<br/>3. Predictive Analytics: What will happen?<br/>4. Prescriptive Analytics: What should we do?",example:"<p>Example: E-commerce uses descriptive analytics for sales reports, predictive analytics for customer behavior.</p>",image:"https://cdn.analyticsvidhya.com/wp-content/uploads/2020/09/Analytics-Types.png"},"Data Collection":{title:"Data Collection",content:"Gathering data from various sources such as databases, web logs, surveys, IoT devices, or APIs.",example:"<p>Example: Collecting customer purchase history from a retail database.</p>",image:"https://www.analyticssteps.com/sites/default/files/2020-07/Data-Collection-Methods.png"},"Data Cleaning":{title:"Data Cleaning",content:"Removing errors, duplicates, missing values, and inconsistencies to improve data quality.",example:"<p>Example: Removing records with missing customer email addresses before analysis.</p>",image:"https://data-flair.training/blogs/wp-content/uploads/sites/2/2020/12/Data-Cleaning.jpg"},"Data Visualization":{title:"Data Visualization",content:"Representing data graphically using charts, graphs, dashboards, or interactive visualizations.",example:"<p>Example: Using bar charts to compare monthly sales.</p>",image:"https://miro.medium.com/max/1400/1*9pF7t8Gk8nN4rZZcVYFybg.png"},"Statistical Analysis":{title:"Statistical Analysis",content:"Using statistics to summarize, interpret, and infer conclusions from data.",example:"<p>Example: Calculating mean, median, standard deviation of customer ratings.</p>",image:"https://www.simplilearn.com/ice9/free_resources_article_thumb/Statistics_for_Data_Analysis.jpg"},"Data Mining":{title:"Data Mining",content:"Extracting useful patterns from large datasets using algorithms and machine learning.",example:"<p>Example: Identifying buying patterns of customers using clustering.</p>",image:"https://miro.medium.com/max/1400/1*Kqz8fQz1HlpG6Z6QvR3Pog.png"},"Predictive Analytics":{title:"Predictive Analytics",content:"Using historical data to forecast future trends using regression, time series, or ML models.",example:"<p>Example: Predicting next month’s sales using historical data.</p>",image:"https://www.datapine.com/blog/wp-content/uploads/2019/07/Predictive-Analytics-Example.png"},"Tools for Data Analytics":{title:"Tools for Data Analytics",content:"Popular tools include Excel, Python (Pandas, NumPy, Matplotlib), R, SQL, Tableau, Power BI, and Google Data Studio.",example:"<p>Example: Using Tableau to create an interactive sales dashboard.</p>",image:"https://dataconomy.com/wp-content/uploads/2019/11/Data-analytics-tools.jpg"},"Real-World Applications":{title:"Real-World Applications",content:"Data analytics is used in healthcare, finance, marketing, retail, sports, and more to make data-driven decisions.",example:"<ul><li>Healthcare: Predict patient readmissions</li><li>Retail: Personalized recommendations</li><li>Finance: Fraud detection</li></ul>",image:"https://www.analyticsinsight.net/wp-content/uploads/2020/05/data-analytics-in-real-world.jpg"}}},g=()=>l(!0),f=t=>{if(n){const r=Math.min(Math.max(t.clientX,150),400);u(r)}},c=()=>l(!1),a=Object.values(p).map(t=>t[s]).filter(Boolean)[0]||"";return e.jsxs("div",{className:"dashboard",onMouseMove:f,onMouseUp:c,onMouseLeave:c,children:[e.jsxs("header",{className:"header",children:[e.jsx("h1",{children:"📊 Data Analytics Dashboard"}),e.jsx("input",{type:"text",placeholder:"Search topics...",className:"search",value:d,onChange:t=>x(t.target.value)})]}),e.jsx("aside",{className:"sidebar",style:{width:m},children:Object.keys(p).map(t=>{const r=Object.keys(p[t]).filter(i=>i.toLowerCase().includes(d.toLowerCase()));return r.length===0?null:e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"section-title",children:t}),e.jsx("ul",{children:r.map(i=>e.jsx("li",{onClick:()=>h(i),className:s===i?"active":"",children:i},i))}),e.jsx("hr",{})]},t)})}),e.jsx("div",{className:"resizer",onMouseDown:g}),e.jsxs("main",{className:"content",children:[e.jsx("h2",{children:s}),typeof a=="object"?e.jsxs("div",{children:[e.jsx("p",{children:a.content}),a.example&&e.jsxs("div",{className:"example-container",children:[e.jsx("pre",{className:"code-block",children:e.jsx("code",{children:a.example})}),e.jsx("iframe",{title:"example-output",className:"output-frame",srcDoc:a.example})]}),a.image&&e.jsx("img",{src:a.image,alt:"Example",className:"topic-img"})]}):e.jsx("p",{children:a})]})]})}function De(){const[s,h]=o.useState("Introduction to MySQL"),[m,u]=o.useState(260),[n,l]=o.useState(!1),[d,x]=o.useState(""),p={"🐬 MySQL Database":{"Introduction to MySQL":{title:"Introduction to MySQL",content:`
MySQL is an open-source relational database management system (RDBMS) that stores data in tables and allows users to perform operations using SQL (Structured Query Language).

It supports transactions, joins, triggers, and indexing for fast, reliable performance.
        `,example:`
# Connect to MySQL Server
mysql -u root -p

# Create a new database
CREATE DATABASE company_db;

# Use the database
USE company_db;
        `},"MySQL CRUD Operations":{title:"MySQL CRUD Operations",content:`
CRUD stands for Create, Read, Update, and Delete — the four essential operations to manage data in a database table.
        `,example:`
-- 1️⃣ CREATE (Insert data)
CREATE TABLE employees (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  department VARCHAR(50),
  salary DECIMAL(10,2)
);

INSERT INTO employees (name, department, salary)
VALUES ('Raj', 'IT', 60000);

-- 2️⃣ READ (Retrieve data)
SELECT * FROM employees;

-- 3️⃣ UPDATE (Modify data)
UPDATE employees
SET salary = 70000
WHERE name = 'Raj';

-- 4️⃣ DELETE (Remove data)
DELETE FROM employees
WHERE name = 'Raj';
        `},"DDL (Data Definition Language)":{title:"DDL (Data Definition Language)",content:`
DDL commands define and modify database structures — they affect schema-level changes.
        `,example:`
-- Create a table
CREATE TABLE departments (
  dept_id INT PRIMARY KEY,
  dept_name VARCHAR(100)
);

-- Alter a table
ALTER TABLE employees ADD COLUMN joining_date DATE;

-- Rename a table
RENAME TABLE employees TO staff;

-- Drop a table
DROP TABLE departments;

-- Truncate a table (remove all data but keep structure)
TRUNCATE TABLE staff;
        `},"DML (Data Manipulation Language)":{title:"DML (Data Manipulation Language)",content:`
DML commands manage data within existing tables — they include inserting, updating, deleting, and selecting records.
        `,example:`
-- Insert a record
INSERT INTO staff (name, department, salary) VALUES ('Aarav', 'HR', 50000);

-- Update existing data
UPDATE staff SET salary = 55000 WHERE name = 'Aarav';

-- Delete a record
DELETE FROM staff WHERE name = 'Aarav';

-- Select records
SELECT name, department, salary FROM staff WHERE department = 'IT';
        `},"DCL (Data Control Language)":{title:"DCL (Data Control Language)",content:`
DCL commands control database access and permissions for users.
        `,example:`
-- Create a new user
CREATE USER 'developer'@'localhost' IDENTIFIED BY 'password123';

-- Grant permissions
GRANT SELECT, INSERT, UPDATE ON company_db.* TO 'developer'@'localhost';

-- Revoke permissions
REVOKE UPDATE ON company_db.* FROM 'developer'@'localhost';

-- Show privileges
SHOW GRANTS FOR 'developer'@'localhost';
        `},"TCL (Transaction Control Language)":{title:"TCL (Transaction Control Language)",content:`
TCL manages database transactions — ensuring data integrity during multiple operations.
        `,example:`
-- Start a transaction
START TRANSACTION;

-- Perform operations
UPDATE accounts SET balance = balance - 500 WHERE acc_no = 101;
UPDATE accounts SET balance = balance + 500 WHERE acc_no = 202;

-- Commit if all OK
COMMIT;

-- Rollback if error
ROLLBACK;
        `},"Joins in MySQL":{title:"Joins in MySQL",content:`
Joins are used to combine rows from two or more tables based on related columns.
        `,example:`
-- INNER JOIN
SELECT e.name, d.dept_name
FROM employees e
INNER JOIN departments d ON e.department = d.dept_id;

-- LEFT JOIN
SELECT e.name, d.dept_name
FROM employees e
LEFT JOIN departments d ON e.department = d.dept_id;

-- RIGHT JOIN
SELECT e.name, d.dept_name
FROM employees e
RIGHT JOIN departments d ON e.department = d.dept_id;
        `},"Constraints in MySQL":{title:"Constraints in MySQL",content:`
Constraints enforce data integrity in a database.
        `,example:`
CREATE TABLE students (
  roll_no INT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  age INT CHECK (age >= 18),
  email VARCHAR(100) UNIQUE,
  course_id INT,
  FOREIGN KEY (course_id) REFERENCES courses(course_id)
);
        `},"Functions and Stored Procedures":{title:"Functions and Stored Procedures",content:`
Functions and procedures are reusable blocks of SQL code.

- A *Function* returns a value.
- A *Procedure* performs actions and may not return a value.
        `,example:`
-- Function Example
DELIMITER //
CREATE FUNCTION getBonus(salary DECIMAL(10,2))
RETURNS DECIMAL(10,2)
BEGIN
  RETURN salary * 0.10;
END //
DELIMITER ;

SELECT name, salary, getBonus(salary) AS bonus FROM employees;

-- Stored Procedure Example
DELIMITER //
CREATE PROCEDURE increaseSalary(IN emp_id INT, IN percent DECIMAL(3,2))
BEGIN
  UPDATE employees
  SET salary = salary + (salary * percent / 100)
  WHERE id = emp_id;
END //
DELIMITER ;

CALL increaseSalary(1, 5);
        `},"Views, Indexes, and Triggers":{title:"Views, Indexes, and Triggers",content:`
These advanced features improve performance and maintain data automatically.
        `,example:`
-- View
CREATE VIEW high_salary AS
SELECT name, salary FROM employees WHERE salary > 70000;

-- Index
CREATE INDEX idx_name ON employees(name);

-- Trigger
DELIMITER //
CREATE TRIGGER before_employee_insert
BEFORE INSERT ON employees
FOR EACH ROW
BEGIN
  SET NEW.salary = IF(NEW.salary < 20000, 20000, NEW.salary);
END //
DELIMITER ;
        `},"Real-World Example: E-Commerce System":{title:"Real-World Example: E-Commerce System",content:`
A sample MySQL structure for an e-commerce website with tables for users, products, orders, and payments.
        `,example:`
-- Create tables
CREATE TABLE users (
  user_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE
);

CREATE TABLE products (
  product_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100),
  price DECIMAL(10,2)
);

CREATE TABLE orders (
  order_id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,
  order_date DATE,
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE order_items (
  item_id INT PRIMARY KEY AUTO_INCREMENT,
  order_id INT,
  product_id INT,
  quantity INT,
  FOREIGN KEY (order_id) REFERENCES orders(order_id),
  FOREIGN KEY (product_id) REFERENCES products(product_id)
);
        `}}},g=()=>l(!0),f=t=>{if(n){const r=Math.min(Math.max(t.clientX,180),400);u(r)}},c=()=>l(!1),a=Object.values(p).map(t=>t[s]).filter(Boolean)[0]||"";return e.jsxs("div",{className:"dashboard",onMouseMove:f,onMouseUp:c,onMouseLeave:c,children:[e.jsxs("header",{className:"header",children:[e.jsx("h1",{children:"🐬 MySQL Dashboard"}),e.jsx("input",{type:"text",placeholder:"Search topics...",className:"search",value:d,onChange:t=>x(t.target.value)})]}),e.jsx("aside",{className:"sidebar",style:{width:m},children:Object.keys(p).map(t=>{const r=Object.keys(p[t]).filter(i=>i.toLowerCase().includes(d.toLowerCase()));return r.length===0?null:e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"section-title",children:t}),e.jsx("ul",{children:r.map(i=>e.jsx("li",{onClick:()=>h(i),className:s===i?"active":"",children:i},i))}),e.jsx("hr",{})]},t)})}),e.jsx("div",{className:"resizer",onMouseDown:g}),e.jsxs("main",{className:"content",children:[e.jsx("h2",{children:s}),typeof a=="object"?e.jsxs("div",{children:[e.jsx("pre",{className:"code-block",children:e.jsx("code",{children:a.content})}),e.jsx("pre",{className:"code-block sql",children:e.jsx("code",{children:a.example})})]}):e.jsx("p",{children:a})]})]})}function Te(){const[s,h]=o.useState("Introduction to Python"),[m,u]=o.useState(260),[n,l]=o.useState(!1),[d,x]=o.useState(""),p={"🐍 Python Programming":{"Introduction to Python":{title:"Introduction to Python",content:`
Python is a high-level, interpreted programming language known for its simplicity and readability. 
It is widely used in web development, data analysis, automation, AI, and scientific computing.

Python supports multiple programming paradigms — procedural, object-oriented, and functional.
        `,example:`
# Print Hello World
print("Hello, World!")

# Simple addition
a = 10
b = 5
print("Sum:", a + b)
        `},"Python Data Types":{title:"Python Data Types",content:`
Python provides several built-in data types that help organize and manage data efficiently.
        `,example:`
# Basic Data Types
integer = 10             # int
decimal = 3.14           # float
text = "Python"          # str
is_active = True         # bool
fruits = ["apple", "mango", "banana"]  # list
person = ("John", 25)    # tuple
student = {"name": "Aarav", "age": 20} # dict
unique = {1, 2, 3, 3}    # set

print(type(person))  # Output: <class 'tuple'>
        `},"Python Operators":{title:"Python Operators",content:`
Operators are special symbols that perform operations on variables and values. Python supports several types of operators:
        `,example:`
# Arithmetic Operators
a, b = 10, 3
print(a + b)  # Addition
print(a - b)  # Subtraction
print(a * b)  # Multiplication
print(a / b)  # Division
print(a % b)  # Modulus

# Comparison Operators
print(a > b)   # True
print(a == b)  # False

# Logical Operators
x, y = True, False
print(x and y) # False
print(x or y)  # True
print(not x)   # False

# Assignment Operators
a += 5  # a = a + 5

# Membership Operators
print("Py" in "Python")  # True
        `},"Python Functions":{title:"Python Functions",content:`
Functions are reusable blocks of code that perform a specific task. 
They can take inputs (parameters) and return outputs (values).
        `,example:`
# Function with parameters and return value
def greet(name):
    return f"Hello, {name}!"

print(greet("Raj"))

# Function with default argument
def power(base, exp=2):
    return base ** exp

print(power(3))   # 9
print(power(2, 3)) # 8

# Lambda Function
square = lambda x: x * x
print(square(5))
        `},"Important Python Libraries":{title:"Important Python Libraries",content:`
Python’s ecosystem provides thousands of libraries that make development faster and more powerful.
Here are the most important ones:
        `,example:`
# 📊 Data Handling
import numpy as np     # Numerical computations
import pandas as pd    # Data analysis & manipulation

# 📈 Visualization
import matplotlib.pyplot as plt
import seaborn as sns

# 🤖 Machine Learning
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split

# 🧠 Deep Learning
import tensorflow as tf
import torch

# 🌐 Web Development
from flask import Flask
        `},"File Handling in Python":{title:"File Handling in Python",content:`
Python allows reading, writing, and appending to files easily.
        `,example:`
# Writing to a file
with open("data.txt", "w") as f:
    f.write("Hello Python!")

# Reading from a file
with open("data.txt", "r") as f:
    print(f.read())
        `},"Object-Oriented Programming":{title:"Object-Oriented Programming",content:`
OOP allows structuring code using classes and objects, improving code reusability and organization.
        `,example:`
# Class Example
class Car:
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model

    def drive(self):
        print(f"{self.brand} {self.model} is driving.")

car1 = Car("Tesla", "Model S")
car1.drive()
        `},"Python in AI and Machine Learning":{title:"Python in AI and Machine Learning",content:`
Python is the backbone of modern AI due to its simplicity, vast libraries, and strong community support.

Key reasons Python is dominant in AI:
- Easy syntax for quick prototyping.
- Rich ecosystem of ML/DL libraries (TensorFlow, PyTorch, scikit-learn).
- Integration with data tools like Pandas, NumPy, Matplotlib.
- Community support for AI frameworks.

AI developers use Python for:
1. **Data Collection & Preprocessing**
2. **Model Building**
3. **Model Evaluation**
4. **Deployment (via Flask, FastAPI, Streamlit)**
        `,example:`
# Example: Simple AI Model (Linear Regression)
from sklearn.linear_model import LinearRegression
import numpy as np

# Training Data
X = np.array([[1], [2], [3], [4]])
y = np.array([2, 4, 6, 8])

# Model
model = LinearRegression()
model.fit(X, y)

# Prediction
print(model.predict([[5]]))  # Output: [10.]
        `},"Real-World Example: AI Chatbot":{title:"Real-World Example: AI Chatbot",content:`
Python powers chatbots like ChatGPT using natural language processing and deep learning models.
Below is a simple rule-based chatbot example.
        `,example:`
def chatbot(user_input):
    user_input = user_input.lower()
    if "hello" in user_input:
        return "Hi there! How can I help you?"
    elif "bye" in user_input:
        return "Goodbye! Have a great day!"
    else:
        return "I'm learning to understand better!"

print(chatbot("Hello"))
print(chatbot("Tell me something"))
print(chatbot("Bye"))
        `}}},g=()=>l(!0),f=t=>{if(n){const r=Math.min(Math.max(t.clientX,180),400);u(r)}},c=()=>l(!1),a=Object.values(p).map(t=>t[s]).filter(Boolean)[0]||"";return e.jsxs("div",{className:"dashboard",onMouseMove:f,onMouseUp:c,onMouseLeave:c,children:[e.jsxs("header",{className:"header",children:[e.jsx("h1",{children:"🐍 Python Dashboard"}),e.jsx("input",{type:"text",placeholder:"Search topics...",className:"search",value:d,onChange:t=>x(t.target.value)})]}),e.jsx("aside",{className:"sidebar",style:{width:m},children:Object.keys(p).map(t=>{const r=Object.keys(p[t]).filter(i=>i.toLowerCase().includes(d.toLowerCase()));return r.length===0?null:e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"section-title",children:t}),e.jsx("ul",{children:r.map(i=>e.jsx("li",{onClick:()=>h(i),className:s===i?"active":"",children:i},i))}),e.jsx("hr",{})]},t)})}),e.jsx("div",{className:"resizer",onMouseDown:g}),e.jsxs("main",{className:"content",children:[e.jsx("h2",{children:s}),typeof a=="object"?e.jsxs("div",{children:[e.jsx("pre",{className:"code-block",children:e.jsx("code",{children:a.content})}),e.jsx("pre",{className:"code-block python",children:e.jsx("code",{children:a.example})})]}):e.jsx("p",{children:a})]})]})}function Ae(){const[s,h]=o.useState("JS Introduction"),[m,u]=o.useState(250),[n,l]=o.useState(!1),[d,x]=o.useState(""),p={"🟢 JavaScript Basics":{"JS Introduction":{title:"JS Introduction",content:`
JavaScript is a versatile, high-level programming language primarily used for web development.
It enables interactive behavior, dynamic content, and asynchronous requests on websites.
Key features:
- Client-side and server-side (Node.js)
- Event-driven and functional programming
- DOM manipulation and AJAX support
        `,example:`
console.log("Hello, JavaScript!");
alert("Welcome to JS Dashboard!");
        `},"JS Data Types":{title:"JS Data Types",content:`
JavaScript has two main categories of data types:
1. Primitive Types: string, number, boolean, null, undefined, symbol, bigint
2. Non-Primitive Types: Object (arrays, functions, objects)
        `,example:`
let name = "Raj"; // string
let age = 25; // number
let isActive = true; // boolean
let items = [1,2,3]; // array
let user = {name:"Raj", age:25}; // object
        `},"JS Operators":{title:"JS Operators",content:`
JS operators include:
- Arithmetic: +, -, *, /, %
- Assignment: =, +=, -=
- Comparison: ==, ===, !=, !==, >, <
- Logical: &&, ||, !
- Ternary: condition ? true : false
        `,example:`
let a = 10, b = 5;
console.log(a + b); // 15
console.log(a > b ? "A>B" : "B>A"); // "A>B"
        `},"JS Functions":{title:"JS Functions",content:`
Functions are reusable blocks of code. Types:
- Function Declaration
- Function Expression
- Arrow Functions
- Anonymous Functions
        `,example:`
// Function Declaration
function greet(name) {
    return "Hello " + name;
}

// Function Expression
const add = function(a,b) {
    return a+b;
}

// Arrow Function
const square = x => x*x;

console.log(greet("Raj"));
console.log(add(5,3));
console.log(square(4));
        `},"JS Events":{title:"JS Events",content:`
Events are actions performed by users or the browser.
Types:
- Mouse Events: click, dblclick, mouseover, mouseout
- Keyboard Events: keydown, keyup
- Form Events: submit, change, input
- Window Events: load, resize, scroll
        `,example:`
// HTML: <button id="btn">Click Me</button>
document.getElementById("btn").addEventListener("click", function() {
    alert("Button clicked!");
});

// Keyboard example
document.addEventListener("keydown", function(event) {
    console.log("Key pressed: " + event.key);
});
        `},"JS DOM Manipulation":{title:"JS DOM Manipulation",content:`
The DOM represents the HTML structure of a page. JS can manipulate elements dynamically.
- getElementById / querySelector
- createElement, appendChild
- innerHTML, textContent
- classList.add/remove/toggle
        `,example:`
// HTML: <div id="container"></div>
const div = document.createElement("div");
div.textContent = "Hello from JS!";
div.style.color = "blue";
document.getElementById("container").appendChild(div);
        `},"JS Loops & Conditionals":{title:"JS Loops & Conditionals",content:`
Loops: for, while, do-while, for...in, for...of
Conditionals: if-else, switch
        `,example:`
for(let i=0;i<5;i++) {
    console.log("Count: " + i);
}

let color = "red";
switch(color) {
    case "red": console.log("Stop"); break;
    case "green": console.log("Go"); break;
    default: console.log("Unknown");
}
        `},"JS Arrays & Objects":{title:"JS Arrays & Objects",content:`
Arrays store ordered data, Objects store key-value pairs.
Array methods: push, pop, shift, unshift, map, filter, reduce
Object methods: Object.keys(), Object.values(), Object.entries()
        `,example:`
let arr = [1,2,3];
arr.push(4); // [1,2,3,4]

let user = {name:"Raj", age:25};
console.log(Object.keys(user)); // ["name","age"]
        `},"JS Async & Fetch":{title:"JS Async & Fetch",content:`
JavaScript supports asynchronous operations using:
- Callbacks
- Promises
- async/await
- fetch API for server requests
        `,example:`
async function getData() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        let data = await response.json();
        console.log(data);
    } catch(err) {
        console.error(err);
    }
}
getData();
        `},"JS Real-World Example":{title:"Real-World Example",content:`
Example: Todo List App
- HTML buttons and input fields
- JS to add, remove, and mark tasks as complete
- DOM events like click, input
        `,example:`
// HTML: <input id="task"><button id="addBtn">Add</button><ul id="list"></ul>
document.getElementById("addBtn").addEventListener("click", function() {
    const task = document.getElementById("task").value;
    if(task) {
        const li = document.createElement("li");
        li.textContent = task;
        document.getElementById("list").appendChild(li);
        document.getElementById("task").value = "";
    }
});
        `}}},g=()=>l(!0),f=t=>{if(n){const r=Math.min(Math.max(t.clientX,180),400);u(r)}},c=()=>l(!1),a=Object.values(p).map(t=>t[s]).filter(Boolean)[0]||"";return e.jsxs("div",{className:"dashboard",onMouseMove:f,onMouseUp:c,onMouseLeave:c,children:[e.jsxs("header",{className:"header",children:[e.jsx("h1",{children:"🟢 JavaScript Dashboard"}),e.jsx("input",{type:"text",placeholder:"Search topics...",className:"search",value:d,onChange:t=>x(t.target.value)})]}),e.jsx("aside",{className:"sidebar",style:{width:m},children:Object.keys(p).map(t=>{const r=Object.keys(p[t]).filter(i=>i.toLowerCase().includes(d.toLowerCase()));return r.length===0?null:e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"section-title",children:t}),e.jsx("ul",{children:r.map(i=>e.jsx("li",{onClick:()=>h(i),className:s===i?"active":"",children:i},i))}),e.jsx("hr",{})]},t)})}),e.jsx("div",{className:"resizer",onMouseDown:g}),e.jsxs("main",{className:"content",children:[e.jsx("h2",{children:s}),typeof a=="object"?e.jsxs("div",{children:[e.jsx("pre",{className:"code-block",children:e.jsx("code",{children:a.content})}),e.jsx("pre",{className:"code-block js",children:e.jsx("code",{children:a.example})})]}):e.jsx("p",{children:a})]})]})}function Le(){const[s,h]=o.useState("Cybersecurity Introduction"),[m,u]=o.useState(250),[n,l]=o.useState(!1),[d,x]=o.useState(""),p={"🛡️ Cybersecurity Topics":{"Cybersecurity Introduction":{title:"Cybersecurity Introduction",content:"Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. It ensures confidentiality, integrity, and availability of data.",example:"<p>Example: Using antivirus software to protect your computer.</p>",image:"https://miro.medium.com/v2/resize:fit:1400/1*ntkg9GQ-j1hJf7uNnY9BQQ.png"},Hacker:{title:"Hacker",content:"A hacker is someone who gains unauthorized access to systems or data. Hackers can be ethical (white hat) or malicious (black hat).",example:"<p>Example: Ethical hackers test systems to improve security.</p>",image:"https://upload.wikimedia.org/wikipedia/commons/6/6c/Hacker.jpg"},Phishing:{title:"Phishing",content:"Phishing is a cyberattack where attackers impersonate legitimate entities to steal sensitive information like passwords or credit card numbers.",example:"<p>Example: Fake emails asking to reset your password.</p>",image:"https://www.csoonline.com/wp-content/uploads/2019/06/phishing-100799699-large.jpg"},Malware:{title:"Malware",content:"Malware (malicious software) is designed to damage, disrupt, or gain unauthorized access to systems.",example:"<p>Example: Viruses, trojans, and ransomware.</p>",image:"https://miro.medium.com/v2/resize:fit:1400/1*V8rQhIj3oQq6gzCuhcz_8g.png"},Ransomware:{title:"Ransomware",content:"Ransomware encrypts files and demands payment to restore access. It targets individuals and organizations.",example:"<p>Example: WannaCry attack.</p>",image:"https://www.kaspersky.com/content/en-global/images/repository/isc/2020-images/ransomware-lock-screen.png"},Spyware:{title:"Spyware",content:"Spyware secretly monitors user activity and collects data without consent.",example:"<p>Example: Keyloggers recording typed passwords.</p>",image:"https://upload.wikimedia.org/wikipedia/commons/3/3b/Spyware_icon.png"},"Trojan Horse":{title:"Trojan Horse",content:"A trojan disguises itself as legitimate software but carries malicious payloads.",example:"<p>Example: Fake game installer stealing data.</p>",image:"https://miro.medium.com/v2/resize:fit:1400/1*6ZtUVsX7EYQkzGZKkPkbRQ.png"},Virus:{title:"Virus",content:"A virus is a type of malware that attaches to files and spreads when files are executed or shared.",example:"<p>Example: File-infecting viruses like CIH (Chernobyl virus).</p>",image:"https://www.techrepublic.com/a/hub/i/r/2018/07/24/5f9c147c-fad3-4398-9f28-0eb23f6a7ee3/resize/1200x/3f212a3c6d2d03e5c73f621a87322a28/virus.jpg"},Worm:{title:"Worm",content:"A worm is self-replicating malware that spreads across networks without user interaction.",example:"<p>Example: SQL Slammer worm.</p>",image:"https://cdn.sonicwall.com/2019-wp-media/2019/09/worm.jpg"},Botnet:{title:"Botnet",content:"A botnet is a network of infected computers controlled remotely by attackers to perform attacks or send spam.",example:"<p>Example: DDoS attacks using zombie computers.</p>",image:"https://www.cloudflare.com/img/learning/ddos/glossary/botnet/diagram-botnet-attack.svg"},"DDoS Attack":{title:"DDoS Attack",content:"Distributed Denial of Service attacks overwhelm servers with traffic, causing service outages.",example:"<p>Example: Mirai botnet attack.</p>",image:"https://www.cloudflare.com/img/learning/ddos/what-is-a-ddos-attack/ddos-diagram.svg"},"SQL Injection":{title:"SQL Injection",content:"Attackers exploit vulnerabilities in web applications to manipulate databases through malicious SQL queries.",example:"<p>Example: Using ' OR '1'='1' to bypass login forms.</p>",image:"https://cdn.educba.com/academy/wp-content/uploads/2019/12/sql-injection.png"},"Cross-Site Scripting (XSS)":{title:"XSS",content:"XSS attacks inject malicious scripts into webpages viewed by other users, stealing cookies or session data.",example:"<p>Example: Script stealing session tokens.</p>",image:"https://www.acunetix.com/blog/wp-content/uploads/2015/11/xss.png"},"Man-in-the-Middle":{title:"Man-in-the-Middle Attack",content:"Attackers intercept and manipulate communications between two parties.",example:"<p>Example: Sniffing unencrypted Wi-Fi traffic.</p>",image:"https://www.imperva.com/learn/wp-content/uploads/sites/14/2019/06/Man-in-the-Middle-Attack.png"},"Social Engineering":{title:"Social Engineering",content:"Manipulating people into divulging confidential information.",example:"<p>Example: Phishing emails or phone scams.</p>",image:"https://www.techtarget.com/searchsecurity/definition/Social-engineering.jpg"},"Password Attack":{title:"Password Attack",content:"Attempts to gain unauthorized access by cracking passwords.",example:"<p>Example: Brute-force attacks or dictionary attacks.</p>",image:"https://cdn.comparitech.com/wp-content/uploads/2020/01/password-hacking.jpg"},"Rogue Software":{title:"Rogue Software",content:"Fake software claiming to be useful but installs malware or scams users.",example:"<p>Example: Fake antivirus software.</p>",image:"https://upload.wikimedia.org/wikipedia/commons/7/7a/Fake_antivirus.png"},"Cyber Fraud":{title:"Cyber Fraud",content:"Fraudulent activities online to steal money, data, or identity.",example:"<p>Example: Credit card fraud, fake shopping sites.</p>",image:"https://www.fbi.gov/investigate/white-collar-crime/cyber-fraud/_jcr_content/par/sysimage.adapt.768.high.jpg"},"Identity Theft":{title:"Identity Theft",content:"Stealing personal information to impersonate someone.",example:"<p>Example: Using stolen SSN to open bank accounts.</p>",image:"https://www.identityforce.com/wp-content/uploads/2022/01/identity-theft-banner.png"},"Zero-Day Attack":{title:"Zero-Day Attack",content:"Exploiting a vulnerability before the developer patches it.",example:"<p>Example: Exploiting a new browser vulnerability.</p>",image:"https://cdn.solarwinds.com/-/media/solarwinds/swdcv2/security/zero-day-attacks.svg"},Firewall:{title:"Firewall",content:"A network security device or software that monitors and filters traffic.",example:"<p>Example: Blocking unauthorized access to a server.</p>",image:"https://www.cisco.com/c/en/us/products/security/firewalls/what-is-a-firewall/_jcr_content/image.img.png/1608947403161.png"},Antivirus:{title:"Antivirus",content:"Software that detects, prevents, and removes malware.",example:"<p>Example: Avast, Norton, Windows Defender.</p>",image:"https://upload.wikimedia.org/wikipedia/commons/3/3f/Antivirus_software_icon.png"},Encryption:{title:"Encryption",content:"Process of converting data into unreadable code to protect it from unauthorized access.",example:"<p>Example: HTTPS encrypting web traffic.</p>",image:"https://www.imperva.com/learn/wp-content/uploads/sites/14/2019/06/What-is-Encryption.png"},VPN:{title:"VPN (Virtual Private Network)",content:"Encrypts your internet connection and hides your IP address for secure communication.",example:"<p>Example: NordVPN, ExpressVPN.</p>",image:"https://www.cloudflare.com/img/learning/ddos/glossary/vpn.svg"},"Two-Factor Authentication":{title:"2FA",content:"Adds an extra layer of security requiring a second verification step.",example:"<p>Example: OTP sent to your mobile for login.</p>",image:"https://www.csoonline.com/wp-content/uploads/2019/09/2fa.png"},"Security Patch":{title:"Security Patch",content:"Updates that fix vulnerabilities in software or systems.",example:"<p>Example: Windows or Linux security updates.</p>",image:"https://www.comparitech.com/wp-content/uploads/2022/07/security-patch.png"},"Cyber Ethics":{title:"Cyber Ethics",content:"Responsible behavior in the use of computers and internet.",example:"<p>Example: Not engaging in hacking, respecting privacy.</p>",image:"https://www.techtarget.com/searchsecurity/definition/Cyber-ethics.jpg"},"Incident Response":{title:"Incident Response",content:"Process of identifying, managing, and mitigating security breaches.",example:"<p>Example: Detecting a malware attack and isolating affected systems.</p>",image:"https://www.csoonline.com/wp-content/uploads/2019/06/incident-response.png"},"Cybersecurity Career":{title:"Cybersecurity Career",content:"Various roles: Ethical hacker, security analyst, SOC engineer, penetration tester.",example:"<p>Example: Ethical hackers test system vulnerabilities for companies.</p>",image:"https://www.cybrary.it/wp-content/uploads/2019/07/cybersecurity-career.jpg"}}},g=()=>l(!0),f=t=>{if(n){const r=Math.min(Math.max(t.clientX,180),400);u(r)}},c=()=>l(!1),a=Object.values(p).map(t=>t[s]).filter(Boolean)[0]||"";return e.jsxs("div",{className:"dashboard",onMouseMove:f,onMouseUp:c,onMouseLeave:c,children:[e.jsxs("header",{className:"header",children:[e.jsx("h1",{children:"🛡️ Cybersecurity Dashboard"}),e.jsx("input",{type:"text",placeholder:"Search topics...",className:"search",value:d,onChange:t=>x(t.target.value)})]}),e.jsx("aside",{className:"sidebar",style:{width:m},children:Object.keys(p).map(t=>{const r=Object.keys(p[t]).filter(i=>i.toLowerCase().includes(d.toLowerCase()));return r.length===0?null:e.jsxs("div",{className:"section",children:[e.jsx("h3",{className:"section-title",children:t}),e.jsx("ul",{children:r.map(i=>e.jsx("li",{onClick:()=>h(i),className:s===i?"active":"",children:i},i))}),e.jsx("hr",{})]},t)})}),e.jsx("div",{className:"resizer",onMouseDown:g}),e.jsxs("main",{className:"content",children:[e.jsx("h2",{children:s}),typeof a=="object"?e.jsxs("div",{children:[e.jsx("p",{children:a.content}),a.example&&e.jsx("pre",{className:"code-block",children:e.jsx("code",{children:a.example})}),a.image&&e.jsx("img",{src:a.image,alt:"Example",className:"topic-img"})]}):e.jsx("p",{children:a})]})]})}function Ie(){return e.jsx(e.Fragment,{children:e.jsx(H,{basename:"/Examly",children:e.jsxs(F,{children:[e.jsx(w,{path:"/",element:e.jsx(ne,{})}),e.jsx(w,{path:"/login",element:e.jsx(ie,{})}),e.jsx(w,{path:"/features",element:e.jsx(oe,{})}),e.jsx(w,{path:"/about",element:e.jsx(re,{})}),e.jsx(w,{path:"/course",element:e.jsx(le,{})}),e.jsx(w,{path:"/register",element:e.jsx(G,{})}),e.jsx(w,{path:"/adlogin",element:e.jsx(B,{})}),e.jsx(w,{path:"/contact",element:e.jsx(pe,{})}),e.jsxs(w,{path:"/adminDashboard",element:e.jsx(J,{}),children:[e.jsx(w,{index:!0,element:e.jsx(ce,{})}),e.jsx(w,{path:"session",element:e.jsx(z,{})}),e.jsx(w,{path:"subject",element:e.jsx(U,{})}),e.jsx(w,{path:"examination",element:e.jsx(W,{})}),e.jsx(w,{path:"question",element:e.jsx(q,{})}),e.jsx(w,{path:"examinee",element:e.jsx(ee,{})}),e.jsx(w,{path:"reportGeneration",element:e.jsx(te,{})}),e.jsx(w,{path:"changepassword",element:e.jsx(ae,{})}),e.jsx(w,{path:"messageReply",element:e.jsx(se,{})})]}),e.jsxs(w,{path:"/userDashboard",element:e.jsx(Q,{}),children:[e.jsx(w,{index:!0,element:e.jsx(X,{})}),e.jsx(w,{path:"myexams",element:e.jsx(V,{})}),e.jsx(w,{path:"myresult",element:e.jsx($,{})}),e.jsx(w,{path:"getexam/:id",element:e.jsx(Y,{})}),e.jsx(w,{path:"message",element:e.jsx(K,{})}),e.jsx(w,{path:"changepassword",element:e.jsx(Z,{})})]}),e.jsx(w,{path:"/courses/webdev",element:e.jsx(de,{}),children:" "}),e.jsx(w,{path:"/courses/mern",element:e.jsx(me,{}),children:" "}),e.jsx(w,{path:"/courses/dsa",element:e.jsx(he,{}),children:" "}),e.jsx(w,{path:"/courses/ai",element:e.jsx(L,{}),children:" "}),e.jsx(w,{path:"/courses/ml",element:e.jsx(ue,{}),children:" "}),e.jsx(w,{path:"/courses/dl",element:e.jsx(ge,{}),children:" "}),e.jsx(w,{path:"/courses/cloud",element:e.jsx(xe,{}),children:" "}),e.jsx(w,{path:"/courses/cyber",element:e.jsx(Le,{}),children:" "}),e.jsx(w,{path:"/courses/blockchain",element:e.jsx(L,{}),children:" "}),e.jsx(w,{path:"/courses/cpp",element:e.jsx(fe,{}),children:" "}),e.jsx(w,{path:"/courses/c",element:e.jsx(be,{}),children:" "}),e.jsx(w,{path:"/courses/github",element:e.jsx(je,{}),children:" "}),e.jsx(w,{path:"/courses/php",element:e.jsx(we,{}),children:" "}),e.jsx(w,{path:"/courses/compiler",element:e.jsx(ve,{}),children:" "}),e.jsx(w,{path:"/courses/computer",element:e.jsx(ye,{}),children:" "}),e.jsx(w,{path:"/courses/devops",element:e.jsx(Se,{}),children:" "}),e.jsx(w,{path:"/courses/java",element:e.jsx(Ne,{}),children:" "}),e.jsx(w,{path:"/courses/javascript",element:e.jsx(Ae,{}),children:" "}),e.jsx(w,{path:"/courses/javafullstack",element:e.jsx(ke,{}),children:" "}),e.jsx(w,{path:"/courses/dbms",element:e.jsx(Ce,{}),children:" "}),e.jsx(w,{path:"/courses/os",element:e.jsx(Me,{}),children:" "}),e.jsx(w,{path:"/courses/dataanalytics",element:e.jsx(Ee,{}),children:" "}),e.jsx(w,{path:"/courses/mysql",element:e.jsx(De,{}),children:" "}),e.jsx(w,{path:"/courses/python",element:e.jsx(Te,{}),children:" "})]})})})}O.createRoot(document.getElementById("root")).render(e.jsx(o.StrictMode,{children:e.jsx(Ie,{})}));
