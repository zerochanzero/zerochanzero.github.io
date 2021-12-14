(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{132:function(e,t,n){},239:function(e){e.exports=JSON.parse('"[{\\"inputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"constructor\\"},{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"owner\\",\\"type\\":\\"address\\"},{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"approved\\",\\"type\\":\\"address\\"},{\\"indexed\\":true,\\"internalType\\":\\"uint256\\",\\"name\\":\\"tokenId\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"Approval\\",\\"type\\":\\"event\\"},{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"owner\\",\\"type\\":\\"address\\"},{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"operator\\",\\"type\\":\\"address\\"},{\\"indexed\\":false,\\"internalType\\":\\"bool\\",\\"name\\":\\"approved\\",\\"type\\":\\"bool\\"}],\\"name\\":\\"ApprovalForAll\\",\\"type\\":\\"event\\"},{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"previousOwner\\",\\"type\\":\\"address\\"},{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"newOwner\\",\\"type\\":\\"address\\"}],\\"name\\":\\"OwnershipTransferred\\",\\"type\\":\\"event\\"},{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"from\\",\\"type\\":\\"address\\"},{\\"indexed\\":true,\\"internalType\\":\\"address\\",\\"name\\":\\"to\\",\\"type\\":\\"address\\"},{\\"indexed\\":true,\\"internalType\\":\\"uint256\\",\\"name\\":\\"tokenId\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"Transfer\\",\\"type\\":\\"event\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"to\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"tokenId\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"approve\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"owner\\",\\"type\\":\\"address\\"}],\\"name\\":\\"balanceOf\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"baseURI\\",\\"outputs\\":[{\\"internalType\\":\\"string\\",\\"name\\":\\"\\",\\"type\\":\\"string\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"contractURI\\",\\"outputs\\":[{\\"internalType\\":\\"string\\",\\"name\\":\\"\\",\\"type\\":\\"string\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"devMintLocked\\",\\"outputs\\":[{\\"internalType\\":\\"bool\\",\\"name\\":\\"\\",\\"type\\":\\"bool\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"freezeMetadata\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"tokenId\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"getApproved\\",\\"outputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"owner\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"address\\",\\"name\\":\\"operator\\",\\"type\\":\\"address\\"}],\\"name\\":\\"isApprovedForAll\\",\\"outputs\\":[{\\"internalType\\":\\"bool\\",\\"name\\":\\"\\",\\"type\\":\\"bool\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"lockDevMint\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"maxMintsPerTx\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"maxTokens\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"metaDataFrozen\\",\\"outputs\\":[{\\"internalType\\":\\"bool\\",\\"name\\":\\"\\",\\"type\\":\\"bool\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"quantity\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"mint\\",\\"outputs\\":[],\\"stateMutability\\":\\"payable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address[]\\",\\"name\\":\\"recipients\\",\\"type\\":\\"address[]\\"},{\\"internalType\\":\\"uint256[]\\",\\"name\\":\\"legendId\\",\\"type\\":\\"uint256[]\\"}],\\"name\\":\\"mintLegendary\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"name\\",\\"outputs\\":[{\\"internalType\\":\\"string\\",\\"name\\":\\"\\",\\"type\\":\\"string\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"nextTokenId\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"owner\\",\\"outputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"tokenId\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"ownerOf\\",\\"outputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"provenance\\",\\"outputs\\":[{\\"internalType\\":\\"string\\",\\"name\\":\\"\\",\\"type\\":\\"string\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"renounceOwnership\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"from\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"address\\",\\"name\\":\\"to\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"tokenId\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"safeTransferFrom\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"from\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"address\\",\\"name\\":\\"to\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"tokenId\\",\\"type\\":\\"uint256\\"},{\\"internalType\\":\\"bytes\\",\\"name\\":\\"_data\\",\\"type\\":\\"bytes\\"}],\\"name\\":\\"safeTransferFrom\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"operator\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"bool\\",\\"name\\":\\"approved\\",\\"type\\":\\"bool\\"}],\\"name\\":\\"setApprovalForAll\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"string\\",\\"name\\":\\"_baseURI\\",\\"type\\":\\"string\\"}],\\"name\\":\\"setBaseURI\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"string\\",\\"name\\":\\"contractURI_\\",\\"type\\":\\"string\\"}],\\"name\\":\\"setContractURI\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"string\\",\\"name\\":\\"_provenance\\",\\"type\\":\\"string\\"}],\\"name\\":\\"setProvenance\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"_startingBlock\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"setStartingBlock\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"startingBlock\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"bytes4\\",\\"name\\":\\"interfaceId\\",\\"type\\":\\"bytes4\\"}],\\"name\\":\\"supportsInterface\\",\\"outputs\\":[{\\"internalType\\":\\"bool\\",\\"name\\":\\"\\",\\"type\\":\\"bool\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"symbol\\",\\"outputs\\":[{\\"internalType\\":\\"string\\",\\"name\\":\\"\\",\\"type\\":\\"string\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"teamMembers\\",\\"outputs\\":[{\\"internalType\\":\\"address payable\\",\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"toadzMultiSig\\",\\"outputs\\":[{\\"internalType\\":\\"address payable\\",\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"index\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"tokenByIndex\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"owner\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"index\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"tokenOfOwnerByIndex\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"tokenPrice\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"tokenId\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"tokenURI\\",\\"outputs\\":[{\\"internalType\\":\\"string\\",\\"name\\":\\"\\",\\"type\\":\\"string\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"totalSupply\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"from\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"address\\",\\"name\\":\\"to\\",\\"type\\":\\"address\\"},{\\"internalType\\":\\"uint256\\",\\"name\\":\\"tokenId\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"transferFrom\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"address\\",\\"name\\":\\"newOwner\\",\\"type\\":\\"address\\"}],\\"name\\":\\"transferOwnership\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[],\\"name\\":\\"withdraw\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"}]"')},250:function(e,t,n){},252:function(e,t,n){},264:function(e,t){},273:function(e,t){},291:function(e,t){},293:function(e,t){},312:function(e,t){},313:function(e,t){},375:function(e,t){},377:function(e,t){},410:function(e,t){},412:function(e,t){},413:function(e,t){},418:function(e,t){},420:function(e,t){},426:function(e,t){},428:function(e,t){},441:function(e,t){},453:function(e,t){},456:function(e,t){},461:function(e,t){},469:function(e,t){},478:function(e,t){},480:function(e,t){},559:function(e,t,n){},560:function(e,t,n){},563:function(e,t,n){"use strict";n.r(t);var i=n(3),a=n.n(i),s=n(87),r=n.n(s),p=(n(132),n(250),n(569)),o=n(242),l=n(15),u=n(35),c=n.n(u),d=n(235),y=n(131),m=(n(252),n.p+"static/media/sold_desktop.20ec5a55.png"),b=n.p+"static/media/sold_mobile.13b872f5.png",j=n(127),f=n.n(j),h=n(239),x=n(128),g=n(240),v=n(241),O=n(1),T=function(){var e=window.innerWidth>=961?m:b,t=Object(i.useState)(null),n=Object(y.a)(t,2),a=n[0],s=n[1],r=Object(i.useState)(null),p=Object(y.a)(r,2),o=p[0],l=p[1];return Object(i.useEffect)((function(){!function(){var e=new f.a(f.a.givenProvider);try{var t=JSON.parse(h);s(new e.eth.Contract(t,"0x1CB1A5e65610AEFF2551A50f76a87a7d3fB649C6"))}catch(n){}}()}),[]),Object(i.useEffect)((function(){null!=a&&function(){var e=Object(d.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.methods.nextTokenId().call();case 2:t=e.sent,l(t-1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[a]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("img",{src:e,alt:""}),Object(O.jsx)("a",{href:"https://opensea.io/collection/cryptoadz-by-gremplin",target:"_blank",rel:"noreferrer",children:Object(O.jsx)("div",{id:"mintButton"})}),Object(O.jsx)(x.Link,{smooth:!0,to:"about",children:Object(O.jsx)("div",{id:"aboutButton"})}),Object(O.jsx)(x.Link,{smooth:!0,to:"faq",children:Object(O.jsx)("div",{id:"faqButton"})}),Object(O.jsx)("a",{href:"https://discord.gg/PDVfDSDbcE",target:"_blank",rel:"noreferrer",children:Object(O.jsx)("div",{id:"discordButton"})}),Object(O.jsxs)("div",{id:"mintHeader",children:[Object(O.jsx)(g.a,{id:"ethLogo",icon:v.a,className:"mr-2"}),".069 each"]}),Object(O.jsxs)("div",{id:"mintCount",children:[o,"/6969"]})]})},w=n(567),k=n(568),M=(n(559),function(){return Object(O.jsxs)(w.a,{id:"faq",className:"mx-0 d-flex align-items-center justify-content-center py-5",children:[Object(O.jsx)(k.a,{sm:6,children:Object(O.jsxs)(w.a,{className:"d-flex align-items-center justify-content-center",children:[Object(O.jsx)("h1",{style:{fontSize:"48px"},children:"CrypToadz"}),Object(O.jsx)("div",{className:"mt-2 px-2",style:{fontSize:"20px",color:"#D8E2EF",textAlign:"center"},children:"CrypToadz are small amphibious creatures that roam the swampy basin of what was formerly known as Uniswamp. Unfortunately, approximately six weeks ago the Evil King Gremplin descended upon Uniswamp and dispatched the CrypToadz leader Colonel Floorbin, exiling him to Gooch Island. Following the fall of Colonel Floorbin, the Evil King Gremplin declared his divine right to rule over all CrypToadz in the Metaverse. The Evil King Gremplin's first order was to rename Uniswamp to GREMPLAND. The Evil King Gremplin rules over the CrypToadz along with his army of Fronkz. The Toadz have been known to refer to the Evil King Gremplin's reign as \"THE CROAKENING\". Help rid the Toadz of the rule of Evil King Gremplin by choosing how many to free during minting."})]})}),Object(O.jsxs)(k.a,{sm:4,id:"imgGrid",children:[Object(O.jsx)("div",{id:"imgBox",children:Object(O.jsx)("img",{src:"401.png",alt:"gremplin"})}),Object(O.jsx)("div",{id:"imgBox",children:Object(O.jsx)("img",{src:"76.png",alt:"gremplin"})}),Object(O.jsx)("div",{id:"imgBox",children:Object(O.jsx)("img",{src:"15232.png",alt:"gremplin"})}),Object(O.jsx)("div",{id:"imgBox",children:Object(O.jsx)("img",{src:"12221.png",alt:"gremplin"})})]})]})}),N=function(){return Object(O.jsxs)(w.a,{id:"about",className:"mx-0 d-flex align-items-center justify-content-center py-5",children:[Object(O.jsx)(k.a,{sm:4,style:{textAlign:"center"},children:Object(O.jsx)("img",{style:{borderRadius:"15px"},width:"75%",src:"temp_gremp.png",alt:"gremplin"})}),Object(O.jsxs)(k.a,{sm:6,style:{textAlign:"center"},children:[Object(O.jsx)("h1",{style:{fontSize:"48px"},children:"Gremplin"}),Object(O.jsx)("div",{className:"mt-2",style:{fontSize:"20px",color:"#D8E2EF"},children:"On a January evening in early 2021, Gremplin scurried through dark vents and damp pipes after making two wrong turns back home to the depths of his hole. When he finally surfaced, trapped in the chaotic energy of the metaverse, he scrambled to keep pace. He crafted spinning boxes to fit in with the crowd, and drew rotating residents of his homeland to help people understand where he\u2019s from. Eventually, he took to drawing residents of this new land to pass the time. Finally feeling at home, he began to seek out ways to help build in this place. He\u2019s just doing what he\u2019s always done - drawing residents of lands, be they Nouns or Toadz - just trying to find his way back to his hole."})]})]})},I=(n(560),function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(w.a,{id:"team",className:"mx-0 d-flex align-items-center justify-content-center pt-8",children:Object(O.jsx)("h1",{style:{fontSize:"48px"},children:"Made With Love,"})}),Object(O.jsx)(w.a,{className:"mx-0 d-flex align-items-center justify-content-center pb-5",children:Object(O.jsxs)("div",{className:"circle",children:[Object(O.jsxs)("div",{className:"tick",children:[Object(O.jsx)("img",{style:{borderRadius:"25px"},src:"bn.png",alt:"bn98"}),Object(O.jsx)("div",{id:"nameTag",children:"bn89"})]}),Object(O.jsxs)("div",{className:"tick",children:[Object(O.jsx)("img",{style:{borderRadius:"25px",borderStyle:"outset"},src:"west.png",alt:"west"}),Object(O.jsx)("div",{id:"nameTag",children:"cat"})]}),Object(O.jsxs)("div",{className:"tick",children:[Object(O.jsx)("img",{style:{borderRadius:"25px"},src:"chanzero.png",alt:"chanzero"}),Object(O.jsx)("div",{id:"nameTag",children:"chanzero"})]}),Object(O.jsxs)("div",{className:"tick",children:[Object(O.jsx)("img",{style:{borderRadius:"25px"},src:"dinfo.png",alt:"dinfo"}),Object(O.jsx)("div",{id:"nameTag",children:"dinfo"})]}),Object(O.jsxs)("div",{className:"tick",children:[Object(O.jsx)("img",{style:{borderRadius:"25px"},src:"emmy.png",alt:"emmy"}),Object(O.jsx)("div",{id:"nameTag",children:"emmy"})]}),Object(O.jsxs)("div",{className:"tick",children:[Object(O.jsx)("img",{style:{borderRadius:"25px"},src:"heeeee.png",alt:"heeeee"}),Object(O.jsx)("div",{id:"nameTag",children:"heeeee"})]}),Object(O.jsxs)("div",{className:"tick",children:[Object(O.jsx)("img",{style:{borderRadius:"25px"},src:"motivate.png",alt:"motivateme"}),Object(O.jsx)("div",{id:"nameTag",children:"motivateme"})]}),Object(O.jsxs)("div",{className:"tick",children:[Object(O.jsx)("img",{style:{borderRadius:"25px"},src:"sum1.png",alt:"sum1"}),Object(O.jsx)("div",{id:"nameTag",children:"sum1"})]}),Object(O.jsxs)("div",{className:"tick",children:[Object(O.jsx)("img",{style:{borderRadius:"25px"},src:"temp_gremp.png",alt:"gremplin"}),Object(O.jsx)("div",{id:"nameTag",children:"gremplin"})]})]})}),Object(O.jsx)("hr",{}),Object(O.jsxs)(w.a,{className:"d-flex align-items-center justify-content-center pb-3",children:[Object(O.jsx)("a",{className:"pr-3",rel:"noreferrer",target:"_blank",href:"http://creativecommons.org/publicdomain/zero/1.0/",children:Object(O.jsx)("img",{src:"http://i.creativecommons.org/p/zero/1.0/88x31.png",style:{borderStyle:"none"},alt:"CC0"})}),Object(O.jsxs)("div",{children:["To the extent possible under law,",Object(O.jsx)("a",{rel:"dct:publisher",href:"https://cryptoadz.io/",children:Object(O.jsx)("span",{property:"dct:title",className:"px-1",children:"Gremplin"})}),"has waived all copyright and related or neighboring rights to",Object(O.jsx)("span",{property:"dct:title",className:"pl-1",children:"CrypToadz by Gremplin"}),". This work is published from:",Object(O.jsx)("span",{property:"vcard:Country",datatype:"dct:ISO3166",about:"https://cryptoadz.io/",className:"px-1",children:"United States"}),"."]})]})]})}),z=function(){return Object(O.jsxs)(o.a,{children:[Object(O.jsx)(p.a,{fluid:!0,children:Object(O.jsx)(T,{})}),Object(O.jsx)(M,{}),Object(O.jsx)(N,{}),Object(O.jsx)(I,{}),Object(O.jsxs)(l.c,{children:[Object(O.jsx)(l.a,{path:"faq",component:M}),Object(O.jsx)(l.a,{path:"about",component:N}),Object(O.jsx)(l.a,{path:"team",component:I})]})]})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,570)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),i(e),a(e),s(e),r(e)}))};r.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(z,{})}),document.getElementById("root")),F()}},[[563,1,2]]]);
//# sourceMappingURL=main.bc9c676f.chunk.js.map