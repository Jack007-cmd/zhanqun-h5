webpackJsonp([21],{300:function(l,n,e){"use strict";function u(l){return t["ɵvid"](0,[(l()(),t["ɵted"](-1,null,["\n"])),(l()(),t["ɵeld"](1,0,null,null,11,"ion-header",[],null,null,null,null,null)),t["ɵdid"](2,16384,null,0,g.a,[D.a,t.ElementRef,t.Renderer,[2,R.a]],null,null),(l()(),t["ɵted"](-1,null,["\n  "])),(l()(),t["ɵeld"](4,0,null,null,7,"div",[["class","myHeader"]],null,null,null,null,null)),(l()(),t["ɵted"](-1,null,["\n    "])),(l()(),t["ɵeld"](6,0,null,null,1,"div",[["class","header_back"],["navPop",""]],null,[[null,"click"]],function(l,n,e){var u=!0;if("click"===n){u=!1!==t["ɵnov"](l,7).onClick()&&u}return u},null,null)),t["ɵdid"](7,16384,null,0,y.a,[[2,b.a]],null,null),(l()(),t["ɵted"](-1,null,["\n\n    "])),(l()(),t["ɵeld"](9,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t["ɵted"](-1,null,["资讯详情"])),(l()(),t["ɵted"](-1,null,["\n  "])),(l()(),t["ɵted"](-1,null,["\n"])),(l()(),t["ɵted"](-1,null,["\n\n\n"])),(l()(),t["ɵeld"](14,0,null,null,18,"ion-content",[["padding",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,C.b,C.a)),t["ɵdid"](15,4374528,null,0,w.a,[D.a,L.a,k.a,t.ElementRef,t.Renderer,I.a,N.a,t.NgZone,[2,R.a],[2,b.a]],null,null),(l()(),t["ɵted"](-1,1,["\n  "])),(l()(),t["ɵeld"](17,0,null,1,1,"h3",[],null,null,null,null,null)),(l()(),t["ɵted"](18,null,["",""])),(l()(),t["ɵted"](-1,1,["\n  "])),(l()(),t["ɵeld"](20,0,null,1,1,"div",[],null,null,null,null,null)),(l()(),t["ɵted"](21,null,["",""])),(l()(),t["ɵted"](-1,1,["\n  "])),(l()(),t["ɵeld"](23,0,null,1,0,"br",[],null,null,null,null,null)),(l()(),t["ɵted"](-1,1,["\n  "])),(l()(),t["ɵeld"](25,0,null,1,0,"hr",[],null,null,null,null,null)),(l()(),t["ɵted"](-1,1,["\n  "])),(l()(),t["ɵeld"](27,0,null,1,4,"div",[["class","news_content"]],null,null,null,null,null)),(l()(),t["ɵted"](-1,null,["\n    "])),(l()(),t["ɵeld"](29,0,null,null,1,"span",[],[[8,"innerHTML",1]],null,null,null,null)),(l()(),t["ɵted"](-1,null,["\n\n    "])),(l()(),t["ɵted"](-1,null,["\n  "])),(l()(),t["ɵted"](-1,1,["\n"])),(l()(),t["ɵted"](-1,null,["\n"])),(l()(),t["ɵeld"](34,0,null,null,2,"ion-footer",[],null,null,null,null,null)),t["ɵdid"](35,16384,null,0,P.a,[D.a,t.ElementRef,t.Renderer,[2,R.a]],null,null),(l()(),t["ɵted"](-1,null,["\n\n"])),(l()(),t["ɵted"](-1,null,["\n"]))],null,function(l,n){var e=n.component;l(n,14,0,t["ɵnov"](n,15).statusbarPadding,t["ɵnov"](n,15)._hasRefresher);l(n,18,0,null==e.infoDetail?null:e.infoDetail.title);l(n,21,0,null==e.infoDetail?null:e.infoDetail.date);l(n,29,0,null==e.infoDetail?null:e.infoDetail.content)})}Object.defineProperty(n,"__esModule",{value:!0});var t=e(0),a=(e(1),e(6),e(28)),d=function(){function l(l,n,e){this.navCtrl=l,this.navParams=n,this.gService=e,this.id=this.navParams.get("id")}return l.prototype.ionViewDidLoad=function(){console.log("ionViewDidLoad NewsDetailPage"),this.getInfoDetail(),this.readInfoDetail()},l.prototype.getInfoDetail=function(){var l=this;this.gService.getInfoDetail(this.id).then(function(n){0==n.code&&(l.infoDetail=n.data)})},l.prototype.readInfoDetail=function(){this.gService.readInfoDetail(this.id).then()},l}(),i=function(){return function(){}}(),o=e(202),r=e(203),c=e(204),s=e(205),f=e(206),p=e(207),m=e(208),v=e(209),h=e(210),g=e(42),D=e(2),R=e(5),y=e(98),b=e(16),C=e(58),w=e(21),L=e(4),k=e(9),I=e(7),N=e(22),P=e(137),M=e(15),_=t["ɵcrt"]({encapsulation:2,styles:[],data:{}}),E=t["ɵccf"]("page-news-detail",d,function(l){return t["ɵvid"](0,[(l()(),t["ɵeld"](0,0,null,null,1,"page-news-detail",[],null,null,null,u,_)),t["ɵdid"](1,49152,null,0,d,[b.a,M.a,a.a],null,null)],null,null)},{},{},[]),F=e(13),j=e(25),S=e(133),z=e(48);e.d(n,"NewsDetailPageModuleNgFactory",function(){return H});var H=t["ɵcmf"](i,[],function(l){return t["ɵmod"]([t["ɵmpd"](512,t.ComponentFactoryResolver,t["ɵCodegenComponentFactoryResolver"],[[8,[o.a,r.a,c.a,s.a,f.a,p.a,m.a,v.a,h.a,E]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["ɵmpd"](4608,F.NgLocalization,F.NgLocaleLocalization,[t.LOCALE_ID,[2,F["ɵa"]]]),t["ɵmpd"](4608,j.l,j.l,[]),t["ɵmpd"](4608,j.c,j.c,[]),t["ɵmpd"](512,F.CommonModule,F.CommonModule,[]),t["ɵmpd"](512,j.k,j.k,[]),t["ɵmpd"](512,j.d,j.d,[]),t["ɵmpd"](512,j.j,j.j,[]),t["ɵmpd"](512,S.a,S.a,[]),t["ɵmpd"](512,S.b,S.b,[]),t["ɵmpd"](512,i,i,[]),t["ɵmpd"](256,z.a,d,[])])})}});