"use strict";(self["webpackChunkvue"]=self["webpackChunkvue"]||[]).push([[531,281],{2892:function(t,e,a){a.d(e,{Z:function(){return p}});var s=a(3396),r=a.p+"assets/img/WWW313COKR.0b54965b.png";const l=t=>((0,s.dD)("data-v-419f1a01"),t=t(),(0,s.Cn)(),t),n={class:"content-header"},o=l((()=>(0,s._)("img",{class:"circle-logo",src:r,alt:"User Image"},null,-1))),c={class:"page-summary"},i=["innerHTML"],d=["innerHTML"];var u={__name:"ContentHeader",props:{subTitle:String,subText:String},setup(t){return(e,a)=>((0,s.wg)(),(0,s.iD)("div",n,[o,(0,s._)("div",c,[(0,s._)("h2",{class:"sub-title",innerHTML:t.subTitle},null,8,i),t.subText?((0,s.wg)(),(0,s.iD)("p",{key:0,innerHTML:t.subText},null,8,d)):(0,s.kq)("",!0)])]))}},m=a(89);const _=(0,m.Z)(u,[["__scopeId","data-v-419f1a01"]]);var p=_},58:function(t,e,a){a.r(e),a.d(e,{default:function(){return v}});var s=a(3396),r=a(2892),l=a(4728),n=a(9545);const o={class:"conainer"},c={class:"content-box"},i={class:"treebox"},d={class:"content-section tree-section",style:{"margin-bottom":"20px"}},u={class:"content-section table-section"};var m={__name:"JSTFTiv",setup(t){const e=[{data:"cell.0"},{data:"cell.1"},{data:"cell.2"},{data:"cell.3"},{data:"cell.4"},{data:"cell.5"},{data:"cell.6"},{data:"cell.7"}],a={getMonitor:"/com/ext/jstree/strutsiBatis/core/monitor/list.action",alterNodeType:"/com/ext/jstree/strutsiBatis/core/alterNodeType.action",addNode:"/com/ext/jstree/strutsiBatis/core/addNode.action",removeNode:"/com/ext/jstree/strutsiBatis/core/removeNode.action",alterNode:"/com/ext/jstree/strutsiBatis/core/alterNode.action",moveNode:"/com/ext/jstree/strutsiBatis/core/moveNode.action"},m=!1;return(t,_)=>((0,s.wg)(),(0,s.iD)("div",o,[(0,s.Wm)(r.Z,{subTitle:"jsTree Service Framework<sup>TSF</sup> Spring-Hibernate Demo"}),(0,s._)("div",c,[(0,s._)("div",i,[(0,s._)("div",d,[(0,s.Wm)(n["default"],{DataUrlList:a,isMonitor:m,columns:e,dataSrc:"rows"})])]),(0,s._)("div",u,[(0,s.Wm)(l["default"],{tableDataUrl:a.getMonitor,columns:e,dataSrc:"rows"},null,8,["tableDataUrl"])])])]))}},_=a(89);const p=(0,_.Z)(m,[["__scopeId","data-v-2eea3242"]]);var v=p},4728:function(t,e,a){a.r(e),a.d(e,{default:function(){return u}});var s=a(3396);const r={id:"jstreeTable",class:"dataTable no-footer dtr-inline collapsed display responsive nowrap",cellspacing:"0"},l=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",null,"c_id"),(0,s._)("th",null,"c_parentid"),(0,s._)("th",null,"c_position"),(0,s._)("th",null,"c_left"),(0,s._)("th",null,"c_right"),(0,s._)("th",null,"c_level"),(0,s._)("th",null,"c_title"),(0,s._)("th",null,"c_type")])],-1),n=[l];function o(t,e,a,l,o,c){return(0,s.wg)(),(0,s.iD)("table",r,n)}a(7387),a(2342),a(3022);var c={props:{tableDataUrl:String,columns:Array,dataSrc:String},mounted(){this.$store.commit("dataTabelLoad",{dataUrl:this.tableDataUrl,dataSrc:this.dataSrc,dataColumns:this.columns})}},i=a(89);const d=(0,i.Z)(c,[["render",o]]);var u=d}}]);