System.register("chunks:///_virtual/app-admin",["./executor.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/executor.ts",["cc","./app.ts","./SoundManager.ts","./UIManager.ts","./data.debug.ts","./data.storage.ts","./config.game.ts","./store.setting.ts","./store.user.ts"],(function(e){var t,n,a,s,u,i,c,f,o;return{setters:[function(e){t=e.cclegacy},function(e){n=e.app},function(e){a=e.default},function(e){s=e.default},function(e){u=e.default},function(e){i=e.default},function(e){c=e.default},function(e){f=e.default},function(e){o=e.default}],execute:function(){t._RF.push({},"f187bY5C+FCHKyW84kaJgMh","executor",void 0);e("ViewName",s.ViewName),e("MiniViewName",s.MiniViewName),e("MusicName",a.MusicName),e("EffectName",a.EffectName);Object.assign(n.data,{debug:new u,storage:new i}),Object.assign(n.config,{game:new c}),Object.assign(n.store,{setting:new f,user:new o}),t._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/app-admin', 'chunks:///_virtual/app-admin'); 
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