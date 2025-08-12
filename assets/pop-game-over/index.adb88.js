System.register("chunks:///_virtual/pop-game-over",["./PopGameOver.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/PopGameOver.ts",["./rollupPluginModLoBabelHelpers.js","cc","./app.ts","./BasePopView.ts","./Const.ts","./TopLoading.ts"],(function(e){var t,o,r,i,n,a,s,c,u,l,p,f;return{setters:[function(e){t=e.applyDecoratedDescriptor,o=e.inheritsLoose,r=e.initializerDefineProperty,i=e.assertThisInitialized},function(e){n=e.cclegacy,a=e._decorator,s=e.Label,c=e.Node},function(e){u=e.app},function(e){l=e.BasePopView},function(e){p=e.maxEnergy},function(e){f=e.TopLoading}],execute:function(){var d,m,g,h,y,b,v,P,w;n._RF.push({},"4c6dcxovN5Aor6v3m3rAtx2","PopGameOver",void 0);var T=a.ccclass,L=a.property;e("PopGameOver",(d=T("PopGameOver"),m=L(s),g=L(c),h=L(s),d((v=t((b=function(e){function t(){for(var t,o=arguments.length,n=new Array(o),a=0;a<o;a++)n[a]=arguments[a];return t=e.call.apply(e,[this].concat(n))||this,r(t,"timesLabel",v,i(t)),r(t,"adNode",P,i(t)),r(t,"freeTimes",w,i(t)),t}o(t,e);var n=t.prototype;return n.onShow=function(t){e.prototype.onShow.call(this,t),this.freeTimes.string="今日免费次数"+u.data.storage.energy.toFixed()+"/"+p,this.adNode.active=u.data.storage.energy<=0},n.restart=function(){this.hide();u.manager.ui.show({name:"PageGame"})},n.backToHome=function(){this.hide(),f.loadPage("PageHome")},n.uploadRecord=function(){},n.share=function(){u.api.sdk.API.shareAppToFriends("你也来试试",{})},t}(l)).prototype,"timesLabel",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),P=t(b.prototype,"adNode",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=t(b.prototype,"freeTimes",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=b))||y));n._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/pop-game-over', 'chunks:///_virtual/pop-game-over'); 
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