System.register("chunks:///_virtual/top-page-loading",["./TopPageLoading.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/TopPageLoading.ts",["./rollupPluginModLoBabelHelpers.js","cc","./BaseView.ts","./app.ts"],(function(t){var e,n,o,i,r,a,c,u,l,s,p,g,h,f,d;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.inheritsLoose,o=t.initializerDefineProperty,i=t.assertThisInitialized,r=t.asyncToGenerator},function(t){a=t.cclegacy,c=t._decorator,u=t.Node,l=t.BlockInputEventsComponent,s=t.UITransform,p=t.tween,g=t.UIOpacity,h=t.easing},function(t){f=t.default},function(t){d=t.app}],execute:function(){var m,v,y,b,w,k,P,T,L;a._RF.push({},"70c0b1fEg9MU4h7OivX/ek5","TopPageLoading",void 0);var z=c.ccclass,C=c.property,I=.7;t("TopPageLoading",(m=z("TopPageLoading"),v=C(u),y=C(u),b=C(l),m((P=e((k=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return e=t.call.apply(t,[this].concat(r))||this,o(e,"mask",P,i(e)),o(e,"logo",T,i(e)),o(e,"block",L,i(e)),e}n(e,t);var a=e.prototype;return a.onShow=function(){var t=r((function*(t){var e=this;yield this.enter(),d.manager.ui.show({name:t.targetUI,data:t.targetData,onShow:function(){return e.exit()}})}));return function(e){return t.apply(this,arguments)}}(),a.enter=function(){var t=this;this.block.node.active=!0;var e=this.mask.getComponent(s);return e.width=2e3,e.height=2e3,new Promise((function(n){p(t.logo.getComponent(g)).to(I,{opacity:255}).start(),p(e).to(I,{width:0,height:0},{easing:h.quadOut}).call((function(){n()})).start()}))},a.exit=function(){var t=this;this.block.node.active=!1;var e=this.mask.getComponent(s);return e.width=0,e.height=0,new Promise((function(n){p(t.logo.getComponent(g)).to(I,{opacity:0}).start(),p(e).to(I,{width:2e3,height:2e3},{easing:h.quadOut}).call((function(){n(),t.hide()})).start()}))},e}(f)).prototype,"mask",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=e(k.prototype,"logo",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),L=e(k.prototype,"block",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=k))||w));a._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/top-page-loading', 'chunks:///_virtual/top-page-loading'); 
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