System.register("chunks:///_virtual/page-home",["./PageHome.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/PageHome.ts",["./rollupPluginModLoBabelHelpers.js","cc","./BaseView.ts","./HomeController.ts","./app.ts","./Const.ts","./TopLoading.ts"],(function(e){var n,t,a,o,r,i,l,u,c,s,g,f,p,y;return{setters:[function(e){n=e.inheritsLoose,t=e.applyDecoratedDescriptor,a=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){r=e.cclegacy,i=e._decorator,l=e.Label,u=e.Node},function(e){c=e.default},function(e){s=e.HomeController},function(e){g=e.app},function(e){f=e.DailyKey,p=e.maxEnergy},function(e){y=e.TopLoading}],execute:function(){var d,m,h,b,v,L,P,H,w;r._RF.push({},"ae0789px3JBA54gP+KHCsvj","PageHome",void 0);var S=i.ccclass,x=i.property;e("PageHome",(d=S("PageHome"),m=x(l),h=x(u),b=x(l),d((L=function(e){function t(){for(var n,t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return n=e.call.apply(e,[this].concat(r))||this,a(n,"levelLbl",P,o(n)),a(n,"adNode",H,o(n)),a(n,"energyLbl",w,o(n)),n}n(t,e);var r=t.prototype;return r.onShow=function(e){var n=this;this.refresh(),g.manager.daily.onLine(f.EnergyDailyKey,(function(){g.data.storage.energy=p,n.refresh()})),g.manager.sound.playMusic({name:"music/bgm"})},r.onHide=function(e){g.manager.daily.offLine(f.EnergyDailyKey)},r.refresh=function(){this.levelLbl.forEach((function(e,n){e.string=Math.max(0,n-2+g.data.storage.level).toFixed()})),this.energyLbl.string=g.data.storage.energy.toFixed(),this.adNode.active=g.data.storage.energy<=0},r.OnStart=function(){y.loadPage("PageGame")},r.openSetting=function(){g.manager.ui.show({name:"PopSettingPanel",data:0})},r.openSelectLevel=function(){g.manager.ui.show({name:"PopSelectLevel"})},t}(c.BindController(s)),P=t(L.prototype,"levelLbl",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),H=t(L.prototype,"adNode",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=t(L.prototype,"energyLbl",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=L))||v));r._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/page-home', 'chunks:///_virtual/page-home'); 
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