System.register("chunks:///_virtual/pop-relife",["./PopRelife.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/PopRelife.ts",["./rollupPluginModLoBabelHelpers.js","cc","./BasePopView.ts"],(function(t){var o,e,n,i;return{setters:[function(t){o=t.inheritsLoose},function(t){e=t.cclegacy,n=t._decorator},function(t){i=t.BasePopView}],execute:function(){var c;e._RF.push({},"653e46wk9VHS7dbYGQFiMEp","PopRelife",void 0);var r=n.ccclass;n.property,t("PopRelife",r("PopRelife")(c=function(t){function e(){for(var o,e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return(o=t.call.apply(t,[this].concat(n))||this).data=void 0,o}o(e,t);var n=e.prototype;return n.onShow=function(o){this.data=o,t.prototype.onShow.call(this,o)},n.onClickConfirm=function(){this.data.confirmFunc(),this.hide()},n.onClickCancel=function(){this.data.cancelFunc(),this.hide()},e}(i))||c);e._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/pop-relife', 'chunks:///_virtual/pop-relife'); 
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