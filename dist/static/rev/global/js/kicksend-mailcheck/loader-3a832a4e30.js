var ebates=ebates||{};ebates.loadMailCheck=function(o){var e;ebates.js.require(ebates.src.emailCorrector.mailcheck,function(){var t=["hotmail.com","gmail.com","gmail.ru","yahoo.com","hotmail.co.uk","hotmail.ca","yahoo.co.uk","comcast.net"],i={yahoo:["hoyao","yooha","hooya","haoyo"],gmail:["migal","gimla"]},a=["mail","email","kmail","imail","ymail","ahoy"];Kicksend.mailcheck.defaultTopLevelDomains.push("ac","ad","ag","ai","am","ar","as","asia","at","az","be","bg","biz","bm","by","bz","cc","cf","ch","cl","cn","co","co.id","co.il","co.in","co.kr","co.us","com.ar","com.au","com.ar","com.bh","com.br","com.cn","com.cy","com.gr","com.hk","com.ky","com.mx","com.my","com.ph","com.pt","com.sa","com.sg","com.tr","com.tw","com.ua","com.uy","com.vn","cr","cz","de","dk","dm","ee","es","eu","fi","fm","fr","ge","go.kr","gr","gs","hk","hr","hu","id","ie","il","in","int","io","ir","it","is","kn","kr","kz","ky","la","lk","lt","lv","md","me","mobi","ms","mx","my","net.id","net.il","nl","no","nu","nz","pe","ph","pk","pl","pr","pro","pt","ro","rs","ru","se","sg","si","sk","su","tc","th","tk","to","tr","tv","tw","ua","us","uz","vg","vi","vn","ws","za","mail","email","life","onl","one","ceo","lgbt","moe","sh"),Kicksend.mailcheck.threshold=1.5,Kicksend.mailcheck.sift3Distance=e,$("body").on("blur",o,function(){var o,c=$(this),n=c.val().split("@").pop(),r=c.data("corrections")||c.data("corrections",0).data("corrections"),s=$("<span>").addClass("absolute corrected-note").html("Spelling error corrected.<br />Please check for accuracy.").hide(),l=function(o,t){var c=i[t.split(".")[0]],n=o.split(".")[0],r=e(o,t);return r=2!==r||$(t.split("")).not(o.split("")).length||$(o.split("")).not(t.split("")).length?r:r-1,r="gmail.com"===t&&0===o.search(/gmail\.[^r]+/gi)?1:r,$.isArray(c)&&-1!==$.inArray(n,c)?1:-1!==$.inArray(n,a)?9:r},m={domains:t,distanceFunction:l,suggested:function(e,t){e.val(t.full),o=t.domain},empty:$.noop},u={domains:t,distanceFunction:l,suggested:function(e,t){o=t.domain,e.val(t.full).mailcheck(m),c.data("corrections",++r).trigger("corrected"),$(document).trigger("stats",{data:["send","event","Email Correction",o,n,r]})},empty:$.noop},h=function(){c.before(s.css({left:c.position().left,top:c.position().top-47}).fadeIn(200,function(){$(this).delay(3e3).fadeOut(500)})).addClass("corrected-email")};r>=1||n&&n.length<5&&-1===n.indexOf(".")||c.on("corrected",h).mailcheck(u)})}),e=function(o,e){var t=[],i={insert:1.01,remove:.99,substitute:1,transpose:.9};return o===e?0:(o=o.split(""),o.unshift(null),e=e.split(""),e.unshift(null),$.each(o,function(a,c){t[a]||(t[a]=[]),$.each(e,function(n,r){0===a&&0===n?t[a][n]=0:0===a?t[a][n]=t[a][n-1]+i.insert:0===n?t[a][n]=t[a-1][n]+i.remove:(t[a][n]=Math.min(t[a-1][n]+i.remove,t[a][n-1]+i.insert,t[a-1][n-1]+(c===r?0:i.substitute)),a>1&&n>1&&o[a-1]===r&&c===e[n-1]&&(t[a][n]=Math.min(t[a][n],t[a-2][n-2]+(c===r?0:i.transpose))))})}),t[o.length-1][e.length-1])}};
//# sourceMappingURL=loader-3a832a4e30.js.map