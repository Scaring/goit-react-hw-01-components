(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,function(e,a,t){e.exports={profileCard:"Profile_profileCard__2gTwv",description:"Profile_description__1GIV6",avatar:"Profile_avatar__2yNuX",name:"Profile_name__3YZau",tag:"Profile_tag__39k-N",location:"Profile_location__2GRxj",stats:"Profile_stats__X_KX5",label:"Profile_label__3u4k9",quantity:"Profile_quantity__1h33q"}},function(e,a,t){e.exports={friendList:"FriendList_friendList__QDBFE",item:"FriendList_item__2dBiA",status:"FriendList_status__A3hyu",isOffline:"FriendList_isOffline__qip8V",isOnline:"FriendList_isOnline__2UxYx",avatar:"FriendList_avatar__3M90N",personName:"FriendList_personName__1B3s3"}},function(e,a,t){e.exports={statistics:"Statistics_statistics__2c0uH",title:"Statistics_title__3cQ0N",statList:"Statistics_statList__2bIXC",item:"Statistics_item__2phzC",label:"Statistics_label__16xlL",percentage:"Statistics_percentage__3NkOb"}},function(e){e.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg","stats":{"followers":5603,"views":4827,"likes":1308}}')},,,function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},function(e){e.exports=JSON.parse('[{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/shojberg/128.jpg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/j04ntoh/128.jpg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/mugukamil/128.jpg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/sweetdelisa/128.jpg","name":"Poly","isOnline":false,"id":1284}]')},function(e,a,t){e.exports={transactionHistory:"TransactionHistory_transactionHistory__3FUKE",links:"TransactionHistory_links__2Nkw1"}},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},function(e,a,t){e.exports=t(17)},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),c=t(6),r=t.n(c),s=(t(16),t(1)),l=t.n(s),o=function(e){var a=e.name,t=e.tag,n=e.location,c=e.avatar,r=e.stats;return i.a.createElement("div",{className:l.a.profileCard},i.a.createElement("div",{className:l.a.description},i.a.createElement("img",{src:c,alt:{name:a}+" avatar",className:l.a.avatar}),i.a.createElement("p",{className:l.a.name},a),i.a.createElement("p",{className:l.a.tag},"@",t),i.a.createElement("p",{className:l.a.location},n)),i.a.createElement("ul",{className:l.a.stats},i.a.createElement("li",null,i.a.createElement("span",{className:l.a.label},"Followers"),i.a.createElement("span",{className:l.a.quantity},r.followers)),i.a.createElement("li",null,i.a.createElement("span",{className:l.a.label},"Views"),i.a.createElement("span",{className:l.a.quantity},r.views)),i.a.createElement("li",null,i.a.createElement("span",{className:l.a.label},"Likes"),i.a.createElement("span",{className:l.a.quantity},r.likes))))};o.defaultProps={avatar:"https://lh3.googleusercontent.com/proxy/dB7GMCj4TDtyzpZ8tCzqBtyHEMA1Hjfct67Conl9l99zBD2AizU4b8vYiVMJYXo-X-n7JC73TE3RcVNXONekWihnVK0vfJO4Lzut4iRH8XWaKXJBjE153ukRGtQ",stats:{followers:0,views:0,likes:0}};var m=o,u=t(4),d=t(3),p=t.n(d),f=function(e){var a=e.title,t=e.stats;return i.a.createElement("section",{className:p.a.statistics},void 0!==a&&i.a.createElement("h2",{className:p.a.title},a),i.a.createElement("ul",{className:p.a.statList},t.map((function(e){return i.a.createElement("li",{className:p.a.item,key:e.id},i.a.createElement("span",{className:p.a.label},e.label),i.a.createElement("span",{className:p.a.percentage},e.percentage,"%"))}))))};f.defaultProps={title:"Upload stats"};var y=f,b=t(7),_=t(2),E=t.n(_),v=function(e){var a=e.avatar,t=e.name,n=e.isOnline,c=[E.a.status];return n?c.push(E.a.isOnline):c.push(E.a.isOffline),i.a.createElement("li",{className:E.a.item},i.a.createElement("span",{className:c.join(" ")}),i.a.createElement("img",{className:E.a.avatar,src:a,alt:{name:t}+" avatar",width:"48"}),i.a.createElement("p",{className:E.a.personName},t))};v.defaultProps={avatar:"https://lh3.googleusercontent.com/proxy/dB7GMCj4TDtyzpZ8tCzqBtyHEMA1Hjfct67Conl9l99zBD2AizU4b8vYiVMJYXo-X-n7JC73TE3RcVNXONekWihnVK0vfJO4Lzut4iRH8XWaKXJBjE153ukRGtQ"};var N=v,w=function(e){var a=e.friends;return i.a.createElement("ul",{className:E.a.friendList},a.map((function(e){return i.a.createElement(N,{avatar:e.avatar,name:e.name,isOnline:e.isOnline,key:e.id})})))},g=t(8),h=function(e){var a=e.type,t=e.amount,n=e.currency;return i.a.createElement("tr",null,i.a.createElement("td",null,a),i.a.createElement("td",null,t),i.a.createElement("td",null,n))},O=t(9),k=t.n(O),L=function(e){var a=e.items;return i.a.createElement("table",{className:k.a.transactionHistory},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Type"),i.a.createElement("th",null,"Amount"),i.a.createElement("th",null,"Currency"))),i.a.createElement("tbody",null,a.map((function(e){return i.a.createElement(h,{type:e.type,amount:e.amount,currency:e.currency,key:e.id})}))))},j=t(10),C=function(){return i.a.createElement(n.Fragment,null,i.a.createElement(m,{name:u.name,tag:u.tag,location:u.location,avatar:u.avatar,stats:u.stats}),i.a.createElement(y,{stats:b}),i.a.createElement(w,{friends:g}),i.a.createElement(L,{items:j}))};r.a.render(i.a.createElement(C,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.2bc357ff.chunk.js.map