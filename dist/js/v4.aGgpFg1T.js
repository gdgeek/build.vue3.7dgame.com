for(var r,o=[],t=0;t<256;++t)o.push((t+256).toString(16).slice(1));var n=new Uint8Array(16);function e(){if(!r&&!(r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(n)}const u={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};function a(r,t,n){if(u.randomUUID&&!t&&!r)return u.randomUUID();var a=(r=r||{}).random||(r.rng||e)();return a[6]=15&a[6]|64,a[8]=63&a[8]|128,function(r,t=0){return(o[r[t+0]]+o[r[t+1]]+o[r[t+2]]+o[r[t+3]]+"-"+o[r[t+4]]+o[r[t+5]]+"-"+o[r[t+6]]+o[r[t+7]]+"-"+o[r[t+8]]+o[r[t+9]]+"-"+o[r[t+10]]+o[r[t+11]]+o[r[t+12]]+o[r[t+13]]+o[r[t+14]]+o[r[t+15]]).toLowerCase()}(a)}export{a as v};
