(this["webpackJsonpnos-vamos"]=this["webpackJsonpnos-vamos"]||[]).push([[0],{44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},73:function(e,t,c){},75:function(e,t,c){},78:function(e,t,c){},79:function(e,t,c){},80:function(e,t,c){},81:function(e,t,c){},82:function(e,t,c){},83:function(e,t,c){},84:function(e,t,c){},85:function(e,t,c){},86:function(e,t,c){},88:function(e,t,c){"use strict";c.r(t);var a=c(5),n=c.n(a),s=c(38),r=c.n(s),i=(c(44),c(45),c(46),c(47),c(48),c(70),c(9)),o=(c(71),{productsImgUrl:"https://raw.githubusercontent.com/santiagopintus/nosVamos-pintus/master/public/images/products/",iconsImgUrl:"https://raw.githubusercontent.com/santiagopintus/nosVamos-pintus/master/public/images/icons/"}),l=c(16),j=c(0),d=Object(a.createContext)(),b=function(e){var t=e.children,c=Object(a.useState)([]),n=Object(i.a)(c,2),s=n[0],r=n[1],o=function(e){return s.find((function(t){return t.id===e}))};return Object(j.jsx)(d.Provider,{value:{cartList:s,addToCart:function(e,t){o(e.id)?(o(e.id).qty+=t,r(Object(l.a)(s))):r([].concat(Object(l.a)(s),[{id:e.id,title:e.title,price:e.price,imgSrc:e.imgSrc,stock:e.stock,qty:t}]))},clear:function(){r([])},removeItem:function(e){r(s.filter((function(t){return t.id!==e})))},isInCart:o,getItemsQty:function(){return s.length>0?s.map((function(e){return e.qty})).reduce((function(e,t){return e+t})):0},getTotal:function(){return s.length>0?s.map((function(e){return e.price*e.qty})).reduce((function(e,t){return e+t})):0}},children:t})},m=function(){var e=Object(a.useContext)(d),t=Object(a.useState)(0),c=Object(i.a)(t,2),n=c[0],s=c[1];return Object(a.useEffect)((function(){s(e.getItemsQty())}),[e]),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("button",{type:"button",className:"carrito btn d-flex",children:n>0&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("img",{src:o.iconsImgUrl+"cartWidget_full.svg",alt:"El icono de un carrito de compras lleno"}),Object(j.jsx)("span",{className:"badge bg-secondary badge-carrito",children:n})]})})})},u=c(13),O=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(j.jsxs)("div",{className:"container-fluid",children:[Object(j.jsx)(u.b,{className:"navbar-brand",to:"/",children:Object(j.jsx)("h2",{className:"site-name",children:"Rajanding"})}),Object(j.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{className:"navbar-toggler-icon"})}),Object(j.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(j.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(u.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Inicio"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(u.b,{className:"nav-link",to:"/category/decorativo",children:"Decorativos"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(u.b,{className:"nav-link",to:"/category/vajilla",children:"Vajillas"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(u.b,{className:"nav-link",to:"/category/varios",children:"Varios"})})]}),Object(j.jsx)("div",{className:"d-flex align-center gap-3",children:Object(j.jsx)(u.b,{className:"no-text-dec",to:"/cart",children:Object(j.jsx)(m,{carritoCount:"2"})})})]})]})})})},h=(c(73),c(34)),x=(c(74),function(e){var t=e.images,c=e.imgAlt,a=e.isItemDetail,n=void 0!==a&&a,s=e.itemId;return"undefined"===typeof t&&(t=[]),Object(j.jsxs)(h.a,{options:{type:"loop",gap:"1rem"},children:[t.map((function(e,t){return Object(j.jsx)(h.b,{children:n?Object(j.jsx)("img",{className:"slide__image",src:o.productsImgUrl+e,alt:c},t):Object(j.jsx)(u.b,{className:"no-text-dec",to:"/item/".concat(s),children:Object(j.jsx)("img",{className:"slide__image",src:o.productsImgUrl+e,alt:c},t)})},t)})),";"]})}),p=function(e){var t=e.id,c=e.title,a=e.src,n=e.price;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"item",children:[Object(j.jsx)("div",{className:"item__image-container",children:Object(j.jsx)(x,{images:a,imgAlt:c,itemId:t})}),Object(j.jsxs)("div",{className:"item__info",children:[Object(j.jsx)("h2",{className:"item__title",children:c}),Object(j.jsxs)("p",{className:"item__price",children:["$",n]}),Object(j.jsx)("div",{className:"item__options",children:Object(j.jsx)(u.b,{className:"btn btn-primary",to:"/item/".concat(t),children:"Detalles"})})]})]})})},g=(c(75),function(e){var t=e.items;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"items-container",children:t.length>0?t.map((function(e){return Object(j.jsx)(p,{id:e.id,src:e.imgSrc,price:e.price,stock:e.stock,title:e.title},e.id)})):Object(j.jsx)("p",{children:"Cargando los productos..."})})})}),f=c(10),v=c(1),N=c.n(v),y=c(25),k=c(4),I=c(21),C=c(39),_=c(20),S=Object(C.a)({apiKey:"AIzaSyAEEI6vU_x3y_G8iwIJulejnrPnq7Nw3ck",authDomain:"rajanding-reactjs.firebaseapp.com",projectId:"rajanding-reactjs",storageBucket:"rajanding-reactjs.appspot.com",messagingSenderId:"1026965930799",appId:"1:1026965930799:web:c7801132bb660248f8d7da",measurementId:"G-J9KZNYW2JT"}),F=Object(_.d)(S),w=function(){var e=Object(k.a)(N.a.mark((function e(t){var c,a,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t?Object(I.g)(Object(I.a)(F,"products"),Object(I.j)("category","==",t)):Object(I.g)(Object(I.a)(F,"products"),Object(I.f)("title")),e.next=3,Object(I.d)(c);case 3:return a=e.sent,n=a.docs.map((function(e){return Object(y.a)({id:e.id},e.data())})),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=w,E=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1],s=Object(f.g)().idCategory;return Object(a.useEffect)((function(){T(s).then((function(e){n(e)})).catch((function(e){return console.log(e)}))}),[s]),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(g,{items:c})})},q=(c(78),function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("footer",{className:"footer",children:Object(j.jsxs)("p",{className:"copyright",children:["Dise\xf1ado y desarrollado por",Object(j.jsx)("a",{href:"https://github.com/santiagopintus",target:"_blank",rel:"noreferrer",children:" Santiago Pintus"})," | Vamonos \xa9"]})})})}),A=(c(79),c(80),c(81),function(e){var t=e.stock,c=e.initial,n=e.onAdd,s=Object(a.useState)(c),r=Object(i.a)(s,2),l=r[0],d=r[1],b=function(){return d(0)};return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"item-counter-container",children:[Object(j.jsxs)("div",{className:"item-counter btn-group",children:[Object(j.jsx)("button",{className:"btn btn-primary",onClick:function(){l>1&&t>0&&d(l-1)},children:"-"}),Object(j.jsx)("p",{children:l}),Object(j.jsx)("button",{className:"btn btn-primary",onClick:function(){t>l&&t>0&&d(l+1)},children:"+"})]}),Object(j.jsx)("button",{className:"delete-icon",onClick:b,title:"Resetear item",children:Object(j.jsx)("img",{src:o.iconsImgUrl+"delete_icon.svg",alt:"Icono de resetear la cantidad del item seleccionado"})}),Object(j.jsx)("button",{className:"add-icon",title:"Agregar al carrito",onClick:function(){return n(l),void b()},disabled:0===l||0===t,children:Object(j.jsx)("img",{src:o.iconsImgUrl+"addToCart.svg",alt:"Icono de agregar al carrito"})}),t<=0&&Object(j.jsx)("p",{className:"stock-error",children:"Sin stock"})]})})}),P=(c(82),function(e){var t=e.title,c=e.content,n=e.button;return Object(a.useEffect)((function(){document.querySelector("#modalTrigger").click()}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("button",{type:"button",id:"modalTrigger",className:"btn modal-button","data-bs-toggle":"modal","data-bs-target":"#exampleModal",children:"Mostrar modal"}),Object(j.jsx)("div",{className:"modal fade",id:"exampleModal",tabIndex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(j.jsx)("div",{className:"modal-dialog",children:Object(j.jsxs)("div",{className:"modal-content",children:[Object(j.jsxs)("div",{className:"modal-header",children:[Object(j.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:t}),Object(j.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Ok"})]}),Object(j.jsx)("div",{className:"modal-body",children:Object(j.jsx)("p",{children:c})}),Object(j.jsx)("div",{className:"modal-footer",children:n||Object(j.jsx)("button",{type:"button",className:"btn btn-primary","data-bs-dismiss":"modal",children:"Ok"})})]})})})]})}),D=function(e){var t=e.item,c=Object(a.useContext)(d),n=t.imgSrc,s=Object(a.useState)(!1),r=Object(i.a)(s,2),o=r[0],l=r[1];return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"item-detail",children:t.title?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"item-detail__carousel",children:Object(j.jsx)(x,{images:n,imgAlt:t.title,isItemDetail:!0})}),Object(j.jsxs)("div",{className:"item-detail__info",children:[Object(j.jsx)("h2",{className:"item-detail__title",children:t.title}),Object(j.jsx)("p",{className:"item-detail__description",children:t.description}),Object(j.jsxs)("p",{className:"item-detail__stock",children:["Stock: ",t.stock]}),Object(j.jsxs)("p",{className:"item-detail__price",children:["$",t.price]}),o?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(u.b,{className:"btn btn-primary",to:"/cart",children:"Terminar mi compra"}),Object(j.jsx)(P,{title:"Agregado!",content:"Producto agregado al carrito",button:Object(j.jsx)(u.b,{className:"no-text-dec",to:"/cart",children:Object(j.jsx)("button",{"data-bs-dismiss":"modal",className:"btn btn-primary",children:"Ir al carrito"})})})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(A,{stock:t.stock,initial:0,onAdd:function(e){l(!0),c.addToCart(t,e)}}),c.isInCart(t.id)&&Object(j.jsx)("p",{className:"item-detail__added",children:"Este producto ya est\xe1 en el carrito"})]})]})]}):Object(j.jsx)("p",{className:"cargando-msg",children:"Cargando item..."})})})},L=function(){var e=Object(k.a)(N.a.mark((function e(t){var c,a,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=Object(_.b)(F,"products",t),e.next=3,Object(_.c)(c);case 3:if(!(a=e.sent).exists()){e.next=9;break}return n=Object(y.a)({id:a.id},a.data()),e.abrupt("return",n);case 9:console.log("No se encuentra el documento!");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=L,M=function(){var e=Object(a.useState)({}),t=Object(i.a)(e,2),c=t[0],n=t[1],s=Object(f.g)().idItem;return Object(a.useEffect)((function(){U(s).then((function(e){return n(e)})).catch((function(e){return console.log(e)}))}),[s]),Object(j.jsx)(D,{item:c})},V=(c(83),function(){var e=Object(a.useContext)(d),t=Object(a.useState)(0),c=Object(i.a)(t,2),n=c[0],s=c[1];return Object(a.useEffect)((function(){s(e.getTotal())}),[e]),Object(j.jsxs)("div",{className:"cart",children:[Object(j.jsxs)("h1",{children:["Bienvenido al carrito! ",Object(j.jsx)("img",{src:o.iconsImgUrl+"cartWidget_empty.png",alt:"Icono de un carrito"})]}),Object(j.jsx)("div",{className:"cart-list",children:e.cartList.length>0?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"cart-opciones",children:[Object(j.jsx)("button",{onClick:e.clear,className:"btn btn-secondary",children:"Vaciar carrito"}),Object(j.jsx)(u.b,{className:"btn btn-primary",to:"/",children:"Agregar Productos"})]}),Object(j.jsx)("div",{className:"cart-list-items",children:e.cartList.map((function(t,c){return Object(j.jsxs)("div",{className:"cart-item",children:[Object(j.jsxs)("div",{className:"cart-item-content",children:[Object(j.jsx)("div",{className:"cart-item-img",children:Object(j.jsx)(x,{images:t.imgSrc,imgAlt:t.title,itemId:t.id})}),Object(j.jsxs)("div",{className:"cart-item-info",children:[Object(j.jsxs)("p",{className:"cart-item-name",children:["Producto: ",t.title]}),Object(j.jsxs)("p",{className:"cart-item-price",children:["$",t.price]}),Object(j.jsxs)("p",{className:"cart-item-quantity",children:["Cantidad: ",t.qty]}),Object(j.jsxs)("p",{className:"cart-item-total",children:["Total: $",t.price*t.qty]})]})]}),Object(j.jsx)("button",{onClick:function(){return e.removeItem(t.id)},className:"btn",children:Object(j.jsx)("img",{src:o.iconsImgUrl+"delete_icon.svg",alt:"Icono de borrar un producto del carrito"})})]},c)}))})]}):Object(j.jsxs)("div",{className:"cart-empty",children:[Object(j.jsx)("p",{children:"Tu carrito est\xe1 vac\xedo"}),Object(j.jsx)(u.b,{className:"btn btn-primary",to:"/",children:"Agregar productos"})]})}),n>0&&Object(j.jsxs)("div",{className:"cart-total",children:[Object(j.jsxs)("p",{children:["Total del carrito: $",n]}),Object(j.jsx)(u.b,{className:"btn btn-primary checkout-btn",to:"/checkout",children:"Comprar carrito"})]})]})}),$=Object(a.createContext)(),J=function(e){var t=e.children,c=Object(a.useState)(null),n=Object(i.a)(c,2),s=n[0],r=n[1],o=Object(a.useState)(!1),l=Object(i.a)(o,2),d=l[0],b=l[1];return Object(j.jsx)($.Provider,{value:{user:s,isLoggedIn:d,login:function(e){r(e),b(!0)},logout:function(){r(null),b(!1)}},children:t})},Q=(c(84),function(){var e=Object(a.useContext)($),t=Object(a.useContext)($).user;return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{children:"Identifiquemos tus datos antes de continuar"}),e.isLoggedIn?Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"checkout-container",children:[Object(j.jsxs)("h2",{className:"checkout-title",children:["Hola! ",t.name,"! Gracias por comprar con nosotros!"]}),Object(j.jsxs)("div",{className:"checkout-options",children:[Object(j.jsxs)("button",{className:"btn btn-secondary",onClick:function(){e.logout()},children:["No soy ",t.name]}),Object(j.jsx)(u.b,{className:"btn btn-primary",to:"final-step",children:"Proceder a la compra"})]})]})}):Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("form",{onSubmit:function(t){var c={};t.preventDefault(),c.name=t.target.name.value,c.phone=t.target.phone.value,c.email=t.target.email.value,e.login(c)},className:"checkout-container",children:[Object(j.jsx)("h2",{className:"checkout-title",children:"Completa tus datos para concretar tu compra"}),Object(j.jsxs)("fieldset",{children:[Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("label",{htmlFor:"name",children:"Nombre y Apellido"}),Object(j.jsx)("input",{id:"name",type:"text",name:"name",required:!0})]}),Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("label",{htmlFor:"phone",children:"Tel\xe9fono"}),Object(j.jsx)("input",{id:"phone",type:"tel",name:"phone",required:!0})]}),Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("label",{htmlFor:"email",children:"Email"}),Object(j.jsx)("input",{id:"email",type:"email",name:"email",required:!0})]})]}),Object(j.jsx)("button",{className:"btn btn-primary checkout-btn",children:"Cargar mis datos"})]})})]})}),B=(c(85),function(){var e=Object(a.useContext)(d),t=Object(a.useContext)($).user,c=Object(a.useState)(null),n=Object(i.a)(c,2),s=n[0],r=n[1],o=function(){return{buyer:t,items:e.cartList.map((function(e){return{id:e.id,title:e.title,price:e.price}})),date:new Date,total:e.getTotal()}},l=function(){var e=Object(k.a)(N.a.mark((function e(t){var c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=Object(_.b)(Object(_.a)(F,"orders")),e.next=3,Object(_.e)(c,t);case 3:return e.abrupt("return",c);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var t;e.cartList.forEach(function(){var e=Object(k.a)(N.a.mark((function e(c){var a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(_.b)(F,"products",c.id),t=c.stock-c.qty<0?0:c.stock-c.qty,e.next=4,Object(_.f)(a,{stock:t});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())};return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"checkout-container checkout-final-step",children:[Object(j.jsx)("h1",{children:"Finalizar Compra"}),e.getItemsQty()>0?Object(j.jsxs)("div",{className:"checkout",children:[Object(j.jsxs)("div",{className:"datos-flex",children:[Object(j.jsxs)("div",{className:"datos-usuario",children:[Object(j.jsx)("h2",{children:"Datos de usuario"}),Object(j.jsxs)("h3",{children:["Nombre: ",t.name]}),Object(j.jsxs)("h3",{children:["Tel\xe9fono: ",t.phone]}),Object(j.jsxs)("h3",{children:["Email: ",t.email]})]}),Object(j.jsxs)("div",{className:"datos-compra",children:[Object(j.jsx)("h2",{children:"Datos de compra"}),Object(j.jsxs)("h3",{children:["Est\xe1s llevando: ",e.getItemsQty()," ",e.getItemsQty()>1?"items":"item"]})]})]}),Object(j.jsxs)("h2",{className:"checkout-total",children:["Total a pagar: $",e.getTotal()]}),Object(j.jsx)("button",{className:"btn btn-primary",onClick:function(){var t=o();l(t).then((function(e){return r(e.id)})).then(b()),e.clear()},children:"Pagar"})]}):s?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(P,{title:"Compra realizada",content:"Gracias por tu compra! Tu n\xfamero de compra es: ".concat(s),button:Object(j.jsx)("button",{className:"btn btn-primary","data-bs-dismiss":"modal",onClick:function(){return e=s,void navigator.clipboard.writeText(e);var e},children:"Copiar"})}),Object(j.jsxs)("div",{className:"center-content",children:[Object(j.jsxs)("h3",{children:["Muchas gracias por tu compra",t.name&&", ".concat(t.name),"!"]}),Object(j.jsx)(u.b,{className:"btn btn-primary",to:"/",children:"Volver al inicio"})]})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(P,{title:"No hay productos en el carrito",content:"Por favor agregue productos al carrito",button:Object(j.jsx)(u.b,{className:"no-text-dec",to:"/",children:Object(j.jsx)("button",{className:"btn btn-primary","data-bs-dismiss":"modal",children:"Agregar Productos"})})}),Object(j.jsxs)("div",{className:"center-content",children:[Object(j.jsx)("h3",{children:"No hay productos para comprar"}),Object(j.jsx)(u.b,{className:"btn btn-primary",to:"/",children:"Agregar productos :D"})]})]})]})})}),G=(c(86),function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),c=t[0],n=t[1],s=function(){var e=window.pageYOffset,t=window.innerHeight;document.body.clientHeight;n(e>t)};return Object(a.useEffect)((function(){document.addEventListener("scroll",s)}),[]),Object(j.jsx)(j.Fragment,{children:c&&Object(j.jsx)("div",{className:"to-top-arrow",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:Object(j.jsx)("img",{className:"arrow-icon",src:"images/icons/top-arrow.svg",alt:"Ir a la cima de la p\xe1gina"})})})});var z=function(){return Object(j.jsx)(b,{children:Object(j.jsx)(J,{children:Object(j.jsxs)(u.a,{children:[Object(j.jsx)(O,{logoSrc:"images/logo/logo192.png"}),Object(j.jsx)("main",{className:"container",children:Object(j.jsxs)(f.c,{children:[Object(j.jsx)(f.a,{path:"/",element:Object(j.jsx)(E,{})}),Object(j.jsx)(f.a,{path:"/category/:idCategory",element:Object(j.jsx)(E,{})}),Object(j.jsx)(f.a,{path:"/item/:idItem",element:Object(j.jsx)(M,{})}),Object(j.jsx)(f.a,{path:"/cart",element:Object(j.jsx)(V,{})}),Object(j.jsx)(f.a,{path:"/checkout",element:Object(j.jsx)(Q,{})}),Object(j.jsx)(f.a,{path:"/checkout/final-step",element:Object(j.jsx)(B,{})})]})}),Object(j.jsx)(G,{}),Object(j.jsx)(q,{})]})})})},H=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,91)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};r.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(z,{})}),document.getElementById("root")),H()}},[[88,1,2]]]);
//# sourceMappingURL=main.962eb956.chunk.js.map