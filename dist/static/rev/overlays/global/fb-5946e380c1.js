"use strict";!function(e){var t=!e.getElementById("fb-root")&&e.createElement("div").setAttribute("id","fb-root"),o=e.querySelector("meta[property='fb:app_id']").getAttribute("content"),n=e.querySelector("meta[property='fb.app.redirect.url']").getAttribute("content");ebates.FB=ebates.FB||{},t&&e.body.insertBefore(t,e.body.firstChild),$.ajaxSetup({cache:!0}),ebates.js.require("../https@connect.facebook.net/en_US/sdk.js",function(){FB.init({appId:o,cookie:!0,xfbml:!0,oauth:!0,version:"v2.12"}),$(e).trigger("fb-ready")}),ebates.FB.link=function(t,i){var a={},r={client_id:o},c=e.querySelector("input.eb-sec-token"),s=c?{name:c.getAttribute("name"),value:c.value}:null;$.each(i,function(e,t){a[e]=t.replace(/\s/g,"_")}),s&&(a[s.name]=s.value),a.urlIdentifier=location.pathname+location.search,void 0!==i.fconnect&&"fconnect"===i.fconnect?a.action="fblink.do":"undefined"!=typeof rkfb?a.action="newr/FBUserSignupOrLogin.do@rhome=true":a.action="FBUserSignupOrLogin.do",r.state=encodeURIComponent(jQuery.param(a)),r.redirect_uri=n,r.display="popup",FB.login(function(e){var t,o;if(e.authResponse&&"connected"===e.status){o={accessToken:e.authResponse.accessToken,_csrf:a[s.name]};for(t in a)o[t]=a[t];$.ajax({url:a.action,type:"GET",data:o,datatype:"json",success:function(e){JSON.stringify(e).indexOf("GDPR user")>-1&&window.location.assign("gdpr.htm"),"success"===e.status?"undefined"!=typeof rkfb?-1!=window.location.href.indexOf("qa-www.ebates.com")||-1!=window.location.href.indexOf("qa2-www.ebates.com")?window.location.assign("https://qa2-www.ebates.com?ebtoken="+e.jwttoken):window.location.assign("https://www.ebates.com?ebtoken="+e.jwttoken):window.location.assign(e.targetUrl||window.location.href):window.location="https://www.facebook.com/v2.12/dialog/oauth?"+$.param(r).replace("FBUserSignupOrLogin.do","FBUserSignupOrLogin.htm")},error:function(){window.location="https://www.facebook.com/v2.12/dialog/oauth?"+$.param(r).replace("FBUserSignupOrLogin.do","FBUserSignupOrLogin.htm")}})}},{scope:"email"})}}(document);
//# sourceMappingURL=fb-5946e380c1.js.map