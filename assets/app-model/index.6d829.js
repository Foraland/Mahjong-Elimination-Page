System.register("chunks:///_virtual/app-model",["./config.game.ts","./data.debug.ts","./data.storage.ts","./store.setting.ts","./store.user.ts"],(function(){return{setters:[null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/config.game.ts",["cc"],(function(e){var t;return{setters:[function(e){t=e.cclegacy}],execute:function(){t._RF.push({},"82e2aSCYm9APIk64F8Y7rHD","config.game",void 0);e("default",(function(){this.comboTime=[20,18,17,15,10,8,7,6.5,5,4.5,4],this.gameTime=300}));t._RF.pop()}}}));

System.register("chunks:///_virtual/data.debug.ts",["cc"],(function(t){var c;return{setters:[function(t){c=t.cclegacy}],execute:function(){c._RF.push({},"6c1f6fXknBLOI9scTlLj44s","data.debug",void 0);t("default",(function(){this.infinityProp=!1}));c._RF.pop()}}}));

System.register("chunks:///_virtual/data.storage.ts",["cc","./Const.ts"],(function(t){var e,n;return{setters:[function(t){e=t.cclegacy},function(t){n=t.maxEnergy}],execute:function(){e._RF.push({},"66c0f6vtyxCNroRPptzH48x","data.storage",void 0);t("default",(function(){this.energy=n,this.level=1,this.propNum=[0,0,0],this.dailyInfos=[]}));e._RF.pop()}}}));

System.register("chunks:///_virtual/store.setting.ts",["./rollupPluginModLoBabelHelpers.js","cc","./app.ts"],(function(t){var e,i,c;return{setters:[function(t){e=t.createClass},function(t){i=t.cclegacy},function(t){c=t.app}],execute:function(){i._RF.push({},"a8945vSbYJB5amSBEbWYQwI","store.setting",void 0);t("default",function(){function t(){this._activeMusic=!0,this._activeEffect=!0,this._activeShake=!0}var i=t.prototype;return i.setActiveMusic=function(t){this._activeMusic=t,c.manager.sound.setMusicMute(!t)},i.setActiveEffect=function(t){this._activeEffect=t,c.manager.sound.setEffectMute(!t)},i.setActiveShake=function(t){this._activeShake=t},e(t,[{key:"activeMusic",get:function(){return this._activeMusic}},{key:"activeEffect",get:function(){return this._activeEffect}},{key:"activeShake",get:function(){return this._activeShake}}]),t}());i._RF.pop()}}}));

System.register("chunks:///_virtual/store.user.ts",["./rollupPluginModLoBabelHelpers.js","cc","./app.ts"],(function(t){var i,s,e;return{setters:[function(t){i=t.asyncToGenerator},function(t){s=t.cclegacy},function(t){e=t.app}],execute:function(){s._RF.push({},"8f45e5mJlhLiY6W41arYraT","store.user",void 0);t("default",function(){function t(){this.openid="",this.sessid="",this.isStartAuth=!1,this.isAuthed=!1,this.userName=void 0,this.faceUrl="",this.friendList=[],this.userData={createtime:0,isShareFirst:0,lastLocation:"",lasttime:0,uid:0}}var s=t.prototype;return s.updateUserData=function(t){this.userData=t},s.auth=function(t,i){console.log(i),this.userName=t,this.faceUrl=i,this.isAuthed=!0},s.setFriendList=function(t){this.friendList=t},s.setUserInfo=function(t,i){this.openid=t,this.sessid=i},s.login=function(){var t=i((function*(){var t=yield e.manager.api.login();this.userData=t.user}));return function(){return t.apply(this,arguments)}}(),t}());s._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/app-model', 'chunks:///_virtual/app-model'); 
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