import{r as a,T as h,j as t,a as n,F as s,f as _,b as m,c as p}from"./index.84c45644.js";const x="_root_1x2nh_1",N="_container_1x2nh_3",$="_dark_1x2nh_12",S="_light_1x2nh_16",f="_cardContainer_1x2nh_20",g="_titlePrincipal_1x2nh_26",k="_titleStack_1x2nh_32",u="_title_1x2nh_26",b="_card_1x2nh_20",C="_icon_1x2nh_48",T="_icondark_1x2nh_53",E="_iconlight_1x2nh_56",D="_description_1x2nh_59",P="_animation_1x2nh_63",v="_entrada_1x2nh_1",e={root:x,container:N,dark:$,light:S,cardContainer:f,titlePrincipal:g,titleStack:k,title:u,card:b,icon:C,icondark:T,iconlight:E,description:D,animation:P,entrada:v},R=()=>{const{theme:i}=a.exports.useContext(h),o=a.exports.useRef();return a.exports.useEffect(()=>{let l={root:null,threshold:"0.30"};const d=r=>{r[0].isIntersecting&&(r[0].target.classList.add(`${e.animation}`),c.disconnect())};let c=new IntersectionObserver(d,l);return c.observe(o.current),()=>{c.disconnect()}},[]),t("section",{className:`${e.container} ${e[i]}`,id:"experience",children:[n("h2",{className:e.titlePrincipal,children:"Mi experiencia"}),t("div",{ref:o,className:e.cardContainer,children:[t("section",{className:`${e.card} ${e.cardFinal}`,children:[n(s,{className:`${e.icon} ${e[`icon${i}`]}`,icon:_}),n("h3",{className:e.title,children:" FRONTEND"}),n("p",{className:e.description,children:"Tengo experiencia desarrollando en React, React & TypeScript, CSS & HTML."})]}),t("section",{className:e.card,children:[n(s,{className:`${e.icon} ${e[`icon${i}`]}`,icon:m}),n("h3",{className:e.title,children:" BACKEND"}),n("p",{className:e.description,children:"Domino NodeJS & ExpressJS tambien manejo en menor medida GraphQL."})]}),t("section",{className:e.card,children:[n(s,{className:`${e.icon} ${e[`icon${i}`]}`,icon:p}),n("h3",{className:e.title,children:" DATABASE"}),n("p",{className:e.description,children:"Tengo buenas habilidades en PostgresSQL & MySQL con el ORM Sequelize tambien manejo MongoDB."})]})]}),n("div",{children:n("p",{className:`${e.titlePrincipal} ${e.titleStack}`,children:"STACK PERN"})})]})};export{R as default};