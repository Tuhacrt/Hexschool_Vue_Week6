import{x as T,j as E,f as V,o as i,c as n,a as s,g as a,l as b,h as f,v as k,u as _,i as I,m}from"./index-a56c1b4c.js";const U={class:"container"},x={class:"about"},R={class:"modal-body"},w={class:"row"},D={class:"col-sm-6"},P=["src"],S={class:"col-sm-6"},$={class:"badge bg-primary rounded-pill"},B={key:0,class:"h5"},A={key:1},C={class:"h6"},H={class:"h5"},L={class:"input-group"},O={__name:"UserProductView",setup(M){const{VITE_URL:l,VITE_PATH:u}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"tuhacrt",VITE_TOKEN:"loginToken",VITE_TEXT:"Environment is in production build",BASE_URL:"/Hexschool_Vue_Week6/",MODE:"production",DEV:!1,PROD:!0},g=T(),t=E({loadingStatus:{loadingItem:""},product:{imagesUrl:[]}});let r=1;const h=async()=>{const{id:c}=g.params,e=`${l}/api/${u}/product/${c}`;try{const o=await m.get(e);t.product=o.data.product}catch(o){alert(o.response.data.message)}},v=async(c,e=1)=>{var p;const o=`${l}/api/${u}/cart`,y={product_id:c,qty:e};t.loadingStatus.loadingItem=c;try{const d=await m.post(o,{data:y});alert(d.data.message),t.loadingStatus.loadingItem="",r=1}catch(d){alert((p=d.response)==null?void 0:p.data.message)}};return V(()=>{h()}),(c,e)=>(i(),n("div",U,[s("div",x,[s("h1",null,a(t.product.title),1),s("div",R,[s("div",w,[s("div",D,[t.product.imagesUrl?(i(),n("img",{key:0,class:"img-fluid",src:t.product.imagesUrl,alt:""},null,8,P)):b("",!0)]),s("div",S,[s("span",$,a(t.product.category),1),s("p",null,"商品描述："+a(t.product.description),1),s("p",null,"商品內容："+a(t.product.content),1),t.product.price<t.product.origin_price?(i(),n("div",B,a(t.product.origin_price)+" 元 ",1)):(i(),n("div",A,[s("del",C,"原價 "+a(t.product.origin_price)+" 元",1),s("div",H,"現在只要 "+a(t.product.price)+" 元",1)])),s("div",null,[s("div",L,[f(s("input",{min:"1",type:"number",class:"form-control","onUpdate:modelValue":e[0]||(e[0]=o=>I(r)?r.value=o:r=o)},null,512),[[k,_(r),void 0,{number:!0}]]),s("button",{type:"button",class:"btn btn-primary",onClick:e[1]||(e[1]=o=>v(t.product.id,_(r)))}," 加入購物車 ")])])])])])])]))}};export{O as default};