import{e as E,f as P,M as I,t as A,o as r,c as u,a as t,g as v,u as s,F as U,k as L,h,v as f,C as D,m as M,d as C,j as H,l as O,b as $,y as B}from"./index-a56c1b4c.js";import{_ as S}from"./PaginationComponent-a5b05979.js";const X={class:"modal-dialog modal-xl"},K={class:"modal-content"},W={class:"modal-header bg-dark text-white"},j={id:"productModalLabel",class:"modal-title"},z={class:"modal-body"},F={class:"row"},q={key:0,class:"col-sm-4"},G={class:"mb-3"},J=t("label",{for:"imageUrl",class:"form-label"},"輸入圖片網址",-1),Q=["onUpdate:modelValue"],Y=["src"],Z={key:0},tt={key:1},et={key:1},ot={class:"col-sm-8"},st={class:"mb-3"},lt=t("label",{for:"title",class:"form-label"},"標題",-1),nt={class:"row"},at={class:"mb-3 col-md-6"},it=t("label",{for:"category",class:"form-label"},"分類",-1),dt={class:"mb-3 col-md-6"},ct=t("label",{for:"price",class:"form-label"},"單位",-1),rt={class:"row"},ut={class:"mb-3 col-md-6"},pt=t("label",{for:"origin_price",class:"form-label"},"原價",-1),_t={class:"mb-3 col-md-6"},mt=t("label",{for:"price",class:"form-label"},"售價",-1),bt=t("hr",null,null,-1),ht={class:"mb-3"},ft=t("label",{for:"description",class:"form-label"},"產品描述",-1),vt={class:"mb-3"},gt=t("label",{for:"content",class:"form-label"},"說明內容",-1),yt={class:"mb-3"},kt={class:"form-check"},Tt=t("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),wt={__name:"ProductModal",props:["tempProduct","isNew"],emits:["update"],setup(k,{expose:T,emit:w}){const g=k,n=E();let a=null;P(()=>{a=new I(n.value,{keyboard:!1,backdrop:!1})});const e=A(g,"tempProduct"),_=()=>a==null?void 0:a.show(),m=()=>a==null?void 0:a.hide(),p=()=>{const{VITE_URL:l,VITE_PATH:o}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"tuhacrt",VITE_TOKEN:"loginToken",VITE_TEXT:"Environment is in production build",BASE_URL:"/Hexschool_Vue_Week6/",MODE:"production",DEV:!1,PROD:!0},y=`${l}/api/${o}/admin/product`,V=g.isNew?y:`${y}/${e.value.id}`;return{method:g.isNew?"post":"put",url:V}},c=async()=>{try{const{method:l,url:o}=p(),y=await M[l](o,{data:e==null?void 0:e.value});alert(y.data.message),m(),w("update")}catch(l){alert(l.response.data.message)}},d=()=>{e.value.imagesUrl=[""]};return T({showModal:_}),(l,o)=>{var y,V,x,R;return r(),u("div",{id:"productModal",ref_key:"productModalRef",ref:n,class:"modal fade border-0",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},[t("div",X,[t("div",K,[t("div",W,[t("h5",j,[t("span",null,v(k.isNew?"新增產品":"編輯產品"),1)]),t("button",{type:"button",class:"btn-close",onClick:m,"aria-label":"Close"})]),t("div",z,[t("div",F,[Array.isArray((y=s(e))==null?void 0:y.imagesUrl)?(r(),u("div",q,[(r(!0),u(U,null,L((V=s(e))==null?void 0:V.imagesUrl,(i,b)=>(r(),u("div",{key:b},[t("div",G,[J,h(t("input",{type:"text",class:"form-control",placeholder:"請輸入圖片連結","onUpdate:modelValue":N=>s(e).imagesUrl[b]=N},null,8,Q),[[f,s(e).imagesUrl[b]]])]),t("img",{class:"img-fluid mb-2",src:i},null,8,Y)]))),128)),((R=s(e))==null?void 0:R.imagesUrl[((x=s(e))==null?void 0:x.imagesUrl.length)-1])!==""?(r(),u("div",Z,[t("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:o[0]||(o[0]=i=>{var b;return(b=s(e))==null?void 0:b.imagesUrl.push("")})}," 新增圖片 ")])):(r(),u("div",tt,[t("button",{class:"btn btn-outline-danger btn-sm d-block w-100",onClick:o[1]||(o[1]=i=>{var b;return(b=s(e))==null?void 0:b.imagesUrl.pop()})}," 刪除圖片 ")]))])):(r(),u("div",et,[t("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:d}," 新增圖片 ")])),t("div",ot,[t("div",st,[lt,h(t("input",{id:"title",type:"text",class:"form-control",placeholder:"請輸入標題","onUpdate:modelValue":o[2]||(o[2]=i=>s(e).title=i)},null,512),[[f,s(e).title]])]),t("div",nt,[t("div",at,[it,h(t("input",{id:"category",type:"text",class:"form-control",placeholder:"請輸入分類","onUpdate:modelValue":o[3]||(o[3]=i=>s(e).category=i)},null,512),[[f,s(e).category]])]),t("div",dt,[ct,h(t("input",{id:"unit",type:"text",class:"form-control",placeholder:"請輸入單位","onUpdate:modelValue":o[4]||(o[4]=i=>s(e).unit=i)},null,512),[[f,s(e).unit]])])]),t("div",rt,[t("div",ut,[pt,h(t("input",{id:"origin_price",type:"number",min:"0",class:"form-control",placeholder:"請輸入原價","onUpdate:modelValue":o[5]||(o[5]=i=>s(e).origin_price=i)},null,512),[[f,s(e).origin_price,void 0,{number:!0}]])]),t("div",_t,[mt,h(t("input",{id:"price",type:"number",min:"0",class:"form-control",placeholder:"請輸入售價","onUpdate:modelValue":o[6]||(o[6]=i=>s(e).price=i)},null,512),[[f,s(e).price,void 0,{number:!0}]])])]),bt,t("div",ht,[ft,h(t("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸入產品描述","onUpdate:modelValue":o[7]||(o[7]=i=>s(e).description=i)},`
                `,512),[[f,s(e).description]])]),t("div",vt,[gt,h(t("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸入說明內容","onUpdate:modelValue":o[8]||(o[8]=i=>s(e).content=i)},`
                `,512),[[f,s(e).content]])]),t("div",yt,[t("div",kt,[h(t("input",{id:"is_enabled",class:"form-check-input",type:"checkbox","onUpdate:modelValue":o[9]||(o[9]=i=>s(e).is_enabled=i),"true-value":1,"false-value":0},null,512),[[D,s(e).is_enabled]]),Tt])])])])]),t("div",{class:"modal-footer"},[t("button",{type:"button",class:"btn btn-outline-secondary",onClick:m}," 取消 "),t("button",{type:"button",class:"btn btn-primary",onClick:c}," 確認 ")])])])],512)}}},Vt={class:"modal-dialog"},Et={class:"modal-content border-0"},xt=t("h5",{id:"delProductModalLabel",class:"modal-title"},[t("span",null,"刪除產品")],-1),$t={class:"modal-body"},Ut={class:"text-danger"},Pt={__name:"DeleteProductModal",props:["tempProduct"],emits:["update"],setup(k,{expose:T,emit:w}){const g=k,n=E();let a=null;P(()=>{a=new I(n.value,{keyboard:!1,backdrop:!1})});const e=()=>a==null?void 0:a.show(),_=()=>a==null?void 0:a.hide(),m=async()=>{try{const{VITE_URL:p,VITE_PATH:c}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"tuhacrt",VITE_TOKEN:"loginToken",VITE_TEXT:"Environment is in production build",BASE_URL:"/Hexschool_Vue_Week6/",MODE:"production",DEV:!1,PROD:!0},d=`${p}/api/${c}/admin/product/${g.tempProduct.id}`,l=await M.delete(d);alert(l.data.message),_(),w("update")}catch(p){alert(p.response.data.message)}};return T({showModal:e}),(p,c)=>{var d;return r(),u("div",{id:"deleteProductModal",ref_key:"deleteProductModalRef",ref:n,class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},[t("div",Vt,[t("div",Et,[t("div",{class:"modal-header bg-danger text-white"},[xt,t("button",{type:"button",class:"btn-close","aria-label":"Close",onClick:_})]),t("div",$t,[C(" 是否刪除 "),t("strong",Ut,v((d=k.tempProduct)==null?void 0:d.title),1),C(" 商品(刪除後將無法恢復)。 ")]),t("div",{class:"modal-footer"},[t("button",{type:"button",class:"btn btn-outline-secondary",onClick:_},"取消"),t("button",{type:"button",class:"btn btn-danger",onClick:m},"確認刪除")])])])],512)}}},Mt={class:"container"},Rt={class:"text-end mt-4"},Ct={class:"table mt-4"},It=t("thead",null,[t("tr",null,[t("th",{width:"120"},"分類"),t("th",null,"產品名稱"),t("th",{width:"120"},"原價"),t("th",{width:"120"},"售價"),t("th",{width:"100"},"是否啟用"),t("th",{width:"120"},"編輯")])],-1),Lt={key:0},Nt={class:"text-end"},At={class:"text-end"},Dt={class:"btn-group"},Ht=["onClick"],Ot=["onClick"],Bt={class:"d-flex justify-content-center"},St={class:"text-center"},Wt={__name:"AdminProductsView",setup(k){const{VITE_URL:T,VITE_PATH:w,VITE_TEXT:g}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"tuhacrt",VITE_TOKEN:"loginToken",VITE_TEXT:"Environment is in production build",BASE_URL:"/Hexschool_Vue_Week6/",MODE:"production",DEV:!1,PROD:!0},n=H({products:[],pagination:{},tempProduct:{imagesUrl:[]},isNew:!1}),a=E(),e=E(),_=async(p=n.pagination.current_page||1)=>{const c=`${T}/api/${w}/admin/products/?page=${p}`;try{const d=await M.get(c);n.products=d.data.products,n.pagination=d.data.pagination}catch(d){alert(d.response.data.message)}};P(()=>{_()});const m=(p,c)=>{var d,l,o;switch(p){case"new":n.tempProduct={imagesUrl:[]},n.isNew=!0,(d=a.value)==null||d.showModal();break;case"edit":n.tempProduct={...c},n.isNew=!1,(l=a.value)==null||l.showModal();break;case"delete":n.tempProduct={...c},(o=e.value)==null||o.showModal();break}};return(p,c)=>{var d;return r(),u(U,null,[t("div",Mt,[t("div",Rt,[t("button",{class:"btn btn-primary",onClick:c[0]||(c[0]=l=>m("new"))},"建立新的產品")]),t("table",Ct,[It,(d=n.products)!=null&&d.length?(r(),u("tbody",Lt,[(r(!0),u(U,null,L(n.products,l=>(r(),u("tr",{key:l.id},[t("td",null,v(l.category),1),t("td",null,v(l.title),1),t("td",Nt,v(l.origin_price),1),t("td",At,v(l.price),1),t("td",null,[t("span",{class:B({"text-success":l.is_enabled})},v(l.is_enabled?"啟用":"未啟用"),3)]),t("td",null,[t("div",Dt,[t("button",{class:"btn btn-outline-primary btn-sm",onClick:o=>m("edit",l)}," 編輯 ",8,Ht),t("button",{class:"btn btn-outline-danger btn-sm",onClick:o=>m("delete",l)}," 刪除 ",8,Ot)])])]))),128))])):O("",!0)]),t("div",Bt,[$(S,{pagination:n.pagination,onChangePage:_,ref:"paginationComponentRef"},null,8,["pagination"])]),t("div",St,[t("p",null,v(s(g)),1)])]),$(wt,{"temp-product":n.tempProduct,"is-new":n.isNew,onUpdate:_,ref_key:"productModalRef",ref:a},null,8,["temp-product","is-new"]),$(Pt,{"temp-product":n.tempProduct,onUpdate:_,ref_key:"deleteProductModalRef",ref:e},null,8,["temp-product"])],64)}}};export{Wt as default};
