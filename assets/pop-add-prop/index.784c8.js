System.register("chunks:///_virtual/pop-add-prop",["./PopAddProp.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/PopAddProp.ts",["./rollupPluginModLoBabelHelpers.js","cc","./app.ts","./BasePopView.ts","./StateCtrl.ts","./Const.ts"],(function(t){var e,r,o,i,n,p,s,a,c,l;return{setters:[function(t){e=t.applyDecoratedDescriptor,r=t.inheritsLoose,o=t.initializerDefineProperty,i=t.assertThisInitialized},function(t){n=t.cclegacy,p=t._decorator},function(t){s=t.app},function(t){a=t.BasePopView},function(t){c=t.StateCtrl},function(t){l=t.EventConst}],execute:function(){var u,d,h,f,P,y,b,g,w;n._RF.push({},"48b050eswRF0ZlktNmLEuUE","PopAddProp",void 0);var m=p.ccclass,v=p.property;t("PopAddProp",(u=m("PopAddProp"),d=v(c),h=v(c),f=v(c),u((b=e((y=function(t){function e(){for(var e,r=arguments.length,n=new Array(r),p=0;p<r;p++)n[p]=arguments[p];return(e=t.call.apply(t,[this].concat(n))||this).propId=0,o(e,"title",b,i(e)),o(e,"icon",g,i(e)),o(e,"desc",w,i(e)),e}r(e,t);var n=e.prototype;return n.onShow=function(e){t.prototype.onShow.call(this,e),this.propId=e,this.refresh()},n.refresh=function(){this.title.state=this.propId,this.icon.state=this.propId,this.desc.state=this.propId},n.onAddProp=function(){s.data.storage.propNum[this.propId]++,s.manager.event.emit(l.RefreshProp),s.manager.ui.showToast("领取成功"),this.hide()},e}(a)).prototype,"title",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),g=e(y.prototype,"icon",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=e(y.prototype,"desc",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),P=y))||P));n._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/pop-add-prop', 'chunks:///_virtual/pop-add-prop'); 
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