import{r as s,T as l,j as _,a as e,L as m,F as h,i as k}from"./index.84c45644.js";import{m as g}from"./myWorks.fafa2660.js";const f="_root_kr37s_1",$="_container_kr37s_3",j="_ligth_kr37s_11",y="_dark_kr37s_14",u="_title_kr37s_17",p="_titledark_kr37s_24",x="_titlelight_kr37s_28",N="_works_kr37s_31",b="_animation_kr37s_37",I="_entrada_kr37s_1",i={root:f,container:$,ligth:j,dark:y,title:u,titledark:p,titlelight:x,works:N,animation:b,entrada:I},v="_root_jfyei_1",w="_container_jfyei_3",C="_dark_jfyei_12",E="_light_jfyei_15",L="_button_jfyei_18",W="_icon_jfyei_32",F="_icondark_jfyei_36",T="_iconlight_jfyei_39",A="_roldark_jfyei_46",M="_rollight_jfyei_49",O="_containerImage_jfyei_52",R="_image_jfyei_56",q="_title_jfyei_63",z="_titledark_jfyei_72",B="_titlelight_jfyei_75",D="_rol_jfyei_46",t={root:v,container:w,dark:C,light:E,button:L,icon:W,icondark:F,iconlight:T,roldark:A,rollight:M,containerImage:O,image:R,title:q,titledark:z,titlelight:B,rol:D},G=({work:o})=>{const{theme:n}=s.exports.useContext(l);return _("article",{className:`${t.container} ${t[n]}`,children:[e("div",{className:t.containerImage,children:e("img",{className:t.image,src:o.image,alt:o.name})}),e("h3",{className:`${t.title} ${t[`title${n}`]}`,children:o.name}),e("p",{className:`${t.rol} ${t[`rol${n}`]}`,children:o.rol}),e(m,{className:t.button,to:`/project/${o.name}`,children:e(h,{className:`${t.icon} ${t[`icon${n}`]}`,icon:k})})]})},K=()=>{const{theme:o}=s.exports.useContext(l),n=s.exports.useRef();return s.exports.useEffect(()=>{let r={root:null,threshold:"0.30"};const d=c=>{c[0].isIntersecting&&(c[0].target.classList.add(`${i.animation}`),a.disconnect())};let a=new IntersectionObserver(d,r);return a.observe(n.current),()=>a.disconnect()},[]),_("section",{className:`${i.container} ${i[o]}`,id:"work",children:[e("h2",{className:`${i.title} ${i[`title${o}`]}`,children:"Mi trabajo"}),e("section",{ref:n,className:i.works,children:g.map(r=>e(G,{work:r},r.name))})]})};export{K as default};