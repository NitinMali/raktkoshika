(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{UE8e:function(s,e,i){"use strict";i.r(e);var t=i("8Y7J");class a{}var l=i("9AJC"),n=i("pMnS"),u=i("lw6u");class r{constructor(s){this.unitsService=s,this.alerts=[],this.sliders=[],this.sliders.push({imagePath:"assets/images/slider1.jpg",label:"First slide label",text:"Nulla vitae elit libero, a pharetra augue mollis interdum."},{imagePath:"assets/images/slider2.jpg",label:"Second slide label",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{imagePath:"assets/images/slider3.jpg",label:"Third slide label",text:"Praesent commodo cursus magna, vel scelerisque nisl consectetur."}),this.alerts.push({id:1,type:"success",message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n                Voluptates est animi quibusdam praesentium quam, et perspiciatis,\n                consectetur velit culpa molestias dignissimos\n                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum"},{id:2,type:"warning",message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n                Voluptates est animi quibusdam praesentium quam, et perspiciatis,\n                consectetur velit culpa molestias dignissimos\n                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum"})}ngOnInit(){this.unitsService.getResults().subscribe(s=>{console.log(s)},s=>{console.log(s)})}closeAlert(s){const e=this.alerts.indexOf(s);this.alerts.splice(e,1)}}var o=t.ob({encapsulation:0,styles:[[""]],data:{animation:[{type:7,name:"routerTransition",definitions:[],options:{}}]}});function c(s){return t.Jb(0,[(s()(),t.qb(0,0,null,null,1,"div",[],[[24,"@routerTransition",0]],null,null,null,null)),(s()(),t.Hb(-1,null,[" This is just first dashboard\n"]))],null,function(s,e){s(e,0,0,void 0)})}function m(s){return t.Jb(0,[(s()(),t.qb(0,0,null,null,1,"app-dashboard",[],null,null,null,c,o)),t.pb(1,114688,null,0,r,[u.a],null,null)],function(s,e){s(e,1,0)},null)}var p=t.mb("app-dashboard",r,m,{},{},[]),d=i("SVse"),b=i("G0yt"),g=i("iInd");class h{}var v=i("MviD");i.d(e,"DashboardModuleNgFactory",function(){return y});var y=t.nb(a,[],function(s){return t.xb([t.yb(512,t.j,t.ab,[[8,[l.a,n.a,p]],[3,t.j],t.w]),t.yb(4608,d.n,d.m,[t.t,[2,d.B]]),t.yb(1073742336,d.b,d.b,[]),t.yb(1073742336,b.m,b.m,[]),t.yb(1073742336,b.g,b.g,[]),t.yb(1073742336,g.p,g.p,[[2,g.u],[2,g.l]]),t.yb(1073742336,h,h,[]),t.yb(1073742336,v.a,v.a,[]),t.yb(1073742336,a,a,[]),t.yb(1024,g.j,function(){return[[{path:"",component:r}]]},[])])})}}]);