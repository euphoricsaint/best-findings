import{_ as p,a as h,c as e,F as r,r as u,b as c,d as t,o as n,t as o,e as g}from"./index-B40a8Eml.js";const b={data(){return{jsonData:null}},mounted(){h.get("https://raw.githubusercontent.com/torpidsnake/json-api/master/gadgets.json").then(a=>{this.jsonData=a.data}).catch(a=>{console.error("Error fetching data:",a)})}},k={key:0,class:"about"},f=t("br",null,null,-1),m=t("br",null,null,-1),y=t("u",null,[t("b",null,[t("i",null,"Laptops under your budget:")])],-1),j=t("br",null,null,-1),x=t("br",null,null,-1),D=["href"],V={key:0};function w(_,a,B,L,l,N){return l.jsonData?(n(),e("div",k,[f,m,y,j,x,(n(!0),e(r,null,u(l.jsonData.laptops_with_prices,(i,d)=>(n(),e("div",{key:d},[c(o(i.detailed_heading)+" ",1),t("ul",null,[(n(!0),e(r,null,u(i.models,s=>(n(),e("li",{key:s.name},[t("a",{href:s.link,target:"_blank"},o(s.name)+" ["+o(s.model)+"]",9,D),s.speciality?(n(),e("span",V," - "+o(s.speciality.join(", ")),1)):g("",!0)]))),128))])]))),128))])):(n(),e(r,{key:1},[c(" loading... ")],64))}const E=p(b,[["render",w]]);export{E as default};
