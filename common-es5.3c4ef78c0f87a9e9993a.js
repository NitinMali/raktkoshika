(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+Sv0":function(t,n,r){"use strict";r.d(n,"a",function(){return o});var o=function(){return function(){}}()},"3zLz":function(t,n,r){"use strict";r.d(n,"a",function(){return o});var o=function(){function t(){}return t.prototype.ngOnInit=function(){},t}()},IYfF:function(t,n,r){"use strict";r.d(n,"a",function(){return i}),r("q8iK");var o=r("6blF"),e=r("CcnG"),u=r("t/Na"),i=function(){function t(t){this.http=t,this.apiUrl="13.127.51.93"}return t.prototype.doRegister=function(t){return this.http.post("http://"+this.apiUrl+"/api/signup",t)},t.prototype.doLogin=function(t){return this.http.post("http://"+this.apiUrl+"/api/signin",t)},t.prototype.doLogout=function(){return new o.a(function(t){sessionStorage.getItem("auth0")?(sessionStorage.removeItem("auth0"),sessionStorage.removeItem("user"),t.next()):t.error("Invalid session")})},t.ngInjectableDef=e.Nb({factory:function(){return new t(e.Rb(u.c))},token:t,providedIn:"root"}),t}()},lw6u:function(t,n,r){"use strict";r.d(n,"a",function(){return i});var o=r("F/XL"),e=r("CcnG"),u=r("t/Na"),i=function(){function t(t){this.http=t,this.apiUrl="13.127.51.93"}return t.prototype.getUnits=function(){return Object(o.a)(1,2,3)},t.prototype.getResults=function(){return this.http.get("http://"+this.apiUrl+"/api/record/1/500")},t.prototype.addRecord=function(t){return this.http.post("http://"+this.apiUrl+"/api/record/new",t)},t.prototype.orderUnits=function(t){return this.http.post("http://"+this.apiUrl+"/api/order/new",t)},t.prototype.getOrders=function(){return this.http.get("http://"+this.apiUrl+"/api/order/1/500")},t.ngInjectableDef=e.Nb({factory:function(){return new t(e.Rb(u.c))},token:t,providedIn:"root"}),t}()},rMXk:function(t,n,r){"use strict";var o=r("CcnG");r("3zLz"),r.d(n,"a",function(){return e}),r.d(n,"b",function(){return u});var e=o.qb({encapsulation:0,styles:[[""]],data:{}});function u(t){return o.Lb(0,[(t()(),o.sb(0,0,null,null,3,"div",[["class","row"]],null,null,null,null,null)),(t()(),o.sb(1,0,null,null,2,"div",[["class","col-xl-12"]],null,null,null,null,null)),(t()(),o.sb(2,0,null,null,1,"h2",[["class","page-header"]],null,null,null,null,null)),(t()(),o.Jb(3,null,[" "," "]))],null,function(t,n){t(n,3,0,n.component.heading)})}}}]);