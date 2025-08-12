System.register("chunks:///_virtual/pop-select-level",["./PopSelectLevel.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/PopSelectLevel.ts",["./rollupPluginModLoBabelHelpers.js","cc","./app.ts","./Config.ts","./BasePopView.ts"],(function(e){var t,l,i,n,o,r,a,s,c,p,u;return{setters:[function(e){t=e.applyDecoratedDescriptor,l=e.inheritsLoose,i=e.initializerDefineProperty,n=e.assertThisInitialized,o=e.createClass},function(e){r=e.cclegacy,a=e._decorator,s=e.Label},function(e){c=e.app},function(e){p=e.Config},function(e){u=e.BasePopView}],execute:function(){var g,f,v,h,L;r._RF.push({},"0e64cp6mgFDDLcB8wUPgCPQ","PopSelectLevel",void 0);var y=a.ccclass,b=a.property;e("PopSelectLevel",(g=y("PopSelectLevel"),f=b(s),g((L=t((h=function(e){function t(){for(var t,l=arguments.length,o=new Array(l),r=0;r<l;r++)o[r]=arguments[r];return t=e.call.apply(e,[this].concat(o))||this,i(t,"levelLbl",L,n(t)),t}l(t,e);var r=t.prototype;return r.onShow=function(t){e.prototype.onShow.call(this,t);var l=c.data.storage.level;this.levelLbl.string="第"+l+"关"},r.onLeft=function(){var e=(c.data.storage.level-1+this.cfgList.length-1)%this.cfgList.length+1;c.data.storage.level=e,this.levelLbl.string="第"+e+"关"},r.onRight=function(){var e=c.data.storage.level%this.cfgList.length+1;c.data.storage.level=e,this.levelLbl.string="第"+e+"关"},o(t,[{key:"cfgList",get:function(){return p.LevelConfig.list}}]),t}(u)).prototype,"levelLbl",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=h))||v));r._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/pop-select-level', 'chunks:///_virtual/pop-select-level'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});