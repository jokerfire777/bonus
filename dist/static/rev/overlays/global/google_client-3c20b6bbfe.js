"use strict";!function(){ebates.google=ebates.google||{},ebates.google.auth={init:function(e){var t=$("meta[property='google:app_id']").attr("content"),a=$("input.eb-sec-token"),o=a?{name:a.attr("name"),value:a.val()}:null,i={};$.each(e,function(e,t){i[e]=t.replace(/\s/g,"_")}),o&&(i[o.name]=o.value),i.urlIdentifier=location.pathname+location.search,i.action="/googleUserSignupOrLogin.do",gapi.auth2.authorize({client_id:t,scope:"https:../https@www.googleapis.com/auth/gmail.readonly email profile",response_type:"code permission",access_type:"offline",include_granted_scopes:"true"},function(e){e.code&&(i.code=e.code,i.isAjax=!0,ebates.google.auth.handleGoogleAuth(i))})},handleGoogleAuth:function(e){$.ajax({url:e.action,type:"GET",datatype:"json",data:e,success:function(e){if(JSON.stringify(e).indexOf("Korea")>-1||"kr_member_signup_denied"==e.code){var t=$("body").attr("id"),a=$("#eb-modal-bg").is(":visible");"home"==t&&0==a?window.location.assign(window.location.href):"M"===ebates.stats.device&&window.location.reload(!0)}else JSON.stringify(e).indexOf("GDPR user")>-1&&window.location.assign("gdpr.htm");if("success"==e.status){var o=ebates.param.get("product_url");if(o&&"editUserInfos.do"===location.pathname&&e.targetUrl&&0==e.targetUrl.indexOf("/mall_ctrl.do")){var i=ebates.param.remove("product_url",e.targetUrl);e.targetUrl=ebates.param.add("product_url",o,i)}window.location.assign(e.targetUrl||window.location.href)}else"fail"==e.status&&"merge_accounts"==e.code?window.location.assign("auth/member/merge.htm"):$("form").trigger("err-msg",[ebates.form.strings.error.generic,!0])}})}}}();
//# sourceMappingURL=google_client-3c20b6bbfe.js.map
