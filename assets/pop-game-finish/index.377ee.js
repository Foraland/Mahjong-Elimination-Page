System.register("chunks:///_virtual/pop-game-finish",["./PopGameFinish.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/PopGameFinish.ts",["./rollupPluginModLoBabelHelpers.js","cc","./app.ts","./Config.ts","./TopLoading.ts","./BasePopView.ts"],(function(e){var t,o,i,n,a,r,s,l,c,p,u,h;return{setters:[function(e){t=e.applyDecoratedDescriptor,o=e.inheritsLoose,i=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){a=e.cclegacy,r=e._decorator,s=e.Label,l=e.AnimationComponent},function(e){c=e.app},function(e){p=e.Config},function(e){u=e.TopLoading},function(e){h=e.BasePopView}],execute:function(){var f,g,m,d,v;a._RF.push({},"918a65M69dFwaF8AcUEMMyP","PopGameFinish",void 0);var y=r.ccclass,P=r.property;e("PopGameFinish",(f=y("PopGameFinish"),g=P(s),f((v=t((d=function(e){function t(){for(var t,o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return t=e.call.apply(e,[this].concat(a))||this,i(t,"timeLbl",v,n(t)),t}o(t,e);var a=t.prototype;return a.nextLevel=function(){c.data.storage.level++,c.data.storage.level>=p.LevelConfig.list.length&&c.manager.ui.showToast("您已完成所有关卡"),this.hide(),c.manager.ui.show({name:"PageGame"})},a.backToHome=function(){this.hide(),u.loadPage("PageHome")},a.share=function(){c.manager.ui.showToast("点击右上角分享")},a.onShow=function(t){e.prototype.onShow.call(this,t);var o,i=Math.floor(t/60);o=Math.floor(t%60),this.timeLbl.string="用时："+i+"分"+o+"秒",this.getComponent(l).play("enter")},t}(h)).prototype,"timeLbl",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=d))||m));a._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/pop-game-finish', 'chunks:///_virtual/pop-game-finish'); 
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