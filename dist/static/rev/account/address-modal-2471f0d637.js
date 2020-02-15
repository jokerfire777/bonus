"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(){function e(e){ebates.js.require(ebates.src.modal,function(){n=ebates.UI.modal("",{url:"/ajax/address-update.htm?type="+e,classes:{toAdd:["iblk","bg-w","hp-takeover","address-modal","js-address-modal"],toRemove:["border","border-grn-t-5"]}},{ajax:{done:function(){$(".js-addressModal-closeModal").on("click",s),$(".js-addressModal-submit").on("click",d),$(".js-addressModal-deleteNow").on("click",a),$("#js-addressModal-usercountry").on("change",r),$(".js-addressModal-useEnteredAddress").on("click",k),$(".js-addressModal-button").on("click",x),"captcha"===window.ebates.addressModal.captchaType?b():l()}}})})}function a(){$(document).trigger("deleteNowRequested"),s()}function s(){n.close()}function d(){var e=void 0,a=void 0;$("#js-addressModal-paymentType").val("1"),o()&&(e=g(),a=C(e),w(a))}function r(){var e=$(this).val(),a=$("#js-addressModal-userstateprovince");void 0!==window.ebates.addressModal.defaultStates[e]?(a.html(window.ebates.addressModal.defaultStates[e]),a.removeAttr("disabled")):(a.html(""),a.attr("disabled","disabled"))}function t(){var e="";$.each($("#js-addressModal-userAddressForm").serializeArray(),function(a,s){e+=s.name+"="+s.value+"&"}),(e=e.slice(0,-1))&&$.ajax({url:j,type:"post",data:e}).done(function(e){if(e){var a=JSON.parse(e);if("object"===(void 0===a?"undefined":_typeof(a)))if(null!==a.successTextKey&&"fail"!==a.successTextKey)"success"===a.successTextKey?$(document).trigger("addressSuccessfullyAdded"):"profile_validation_required"===a.successTextKey&&(window.location.href="/account/token-verification.htm?verify=addressForDelete&scope="+i);else{var s=$(".js-address-modal .err-list"),d=document.createDocumentFragment(),r="<li>{{ERRTEXT}}</li>";s.length||(s=$(".js-address-modal .js-addressModal-errorContainer").prepend('<div class="errorBox permanent mar-20-b">\n            <span class="iblk f-26 f-white fa-warning mar-10-r"></span>\n            <div class="iblk err-list-cont">\n                <strong class="bblk prox-b f-white pad-10-b">Please correct the following fields:</strong>\n                <ul class="err-list"></ul>\n            </div>\n        </div>'),s=$(".js-address-modal .err-list")),jQuery.each(a.errors,function(e,a){jQuery.each(a,function(e,a){switch(e){case"fieldNames":jQuery.each(a,function(e,a){$("#js-addressModal-"+a).addClass("border-red")});break;case"messageKey":var s=$(r.replace(/\{\{ERRTEXT\}\}/,M[a]));d.appendChild(s[0])}})}),s.find("li:gt(0)").remove().end().show(),s[0].appendChild(d)}}})}function o(){var e=[],a=void 0;$(".js-address-modal .js-addressModal-errorContainer").html(""),$(".err-list").empty();for(var s=0;s<p.length;s++){var d=$(p[s]),r=d.attr("id"),t=jQuery.trim(d.val());""==t||"null"==t||t===jQuery.trim(d.attr("placeholder"))?(d.addClass("border-red"),e.push(y[r].blankValue)):d.removeClass("border-red")}if("1"!=$("#js-addressModal-usercountry").val()&&"2"!=$("#js-addressModal-usercountry").val()){var o=y["js-addressModal-userstateprovince"].blankValue;$("#js-addressModal-userstateprovince").removeClass("border-red"),e=$.grep(e,function(e){return e!==o})}"captcha"===window.ebates.addressModal.captchaType?""===$("#js-addressModal-personalCaptcha").val()?(e.push(y["js-addressModal-personalCaptcha"].empty),$("#js-addressModal-personalCaptcha").addClass("border-red")):""!==$("#js-addressModal-personalCaptcha").val()&&$("#js-addressModal-personalCaptcha").val().length<7?(e.push(y["js-addressModal-personalCaptcha"].short),$("#js-addressModal-personalCaptcha").addClass("border-red")):$("#js-addressModal-personalCaptcha").removeClass("border-red"):(a=$("#js-addressModal-userAddressForm .g-recaptcha-response").val().trim(),0===a.length&&e.push(y["js-addressModal-captcha"].empty));for(var s=0;s<m.length;s++){var l=$(m[s]),n=l.attr("id"),i=l.val();i&&-1!==i.search(f)&&(e.push(y[n].hasEmail),l.addClass("border-red"))}for(var s=0;s<v.length;s++){var c=$(v[s]),u=c.attr("id"),j=c.val();(j.toLowerCase().indexOf("http://")>=0||j.toLowerCase().indexOf("../https@")>=0||j.toLowerCase().indexOf("www.")>=0||j.toLowerCase().indexOf(".com")>=0)&&(e.push(y[u].hasDomain),c.addClass("border-red"))}for(var s=0;s<h.length;s++){var M=$(h[s]),b=M.attr("id"),g=M.val();g&&g.indexOf("|")>=0&&(e.push(y[b].hasPipe),M.addClass("border-red"))}var C=$(".js-address-modal .err-list"),P=document.createDocumentFragment();return C.length||(C=$(".js-address-modal .js-addressModal-errorContainer").prepend('<div class="errorBox permanent mar-20-b">\n            <span class="iblk f-26 f-white fa-warning mar-10-r"></span>\n            <div class="iblk err-list-cont">\n                <strong class="bblk prox-b f-white pad-10-b">Please correct the following fields:</strong>\n                <ul class="err-list"></ul>\n            </div>\n        </div>'),C=$(".js-address-modal .err-list")),jQuery.each(e,function(){var e=$("<li>{{ERRTEXT}}</li>".replace(/\{\{ERRTEXT\}\}/,this));P.appendChild(e[0])}),C.find("li:gt(0)").remove().end().show(),C[0].appendChild(P),0===e.length&&($(".js-address-modal .js-addressModal-errorContainer").html(""),$(".err-list").empty(),!0)}function l(){var e=document.querySelector("#js-addressModal-captcha");if(e){var a=e.getAttribute("data-captcha-key");ebates.js.require(ebates.src.form.recaptcha,function(){ebates.form.grecaptcha(a,e)})}}var n={},i=void 0,c=void 0,u=void 0,p=["#js-addressModal-userfirstname","#js-addressModal-userlastname","#js-addressModal-useraddress1","#js-addressModal-usercity","#js-addressModal-userpostalcode","#js-addressModal-userstateprovince"],m=["#js-addressModal-userfirstname","#js-addressModal-userlastname","#js-addressModal-useraddress1","#js-addressModal-useraddress2","#js-addressModal-usercity","#js-addressModal-userpostalcode"],h=["#js-addressModal-userfirstname, #js-addressModal-userlastname, #js-addressModal-useraddress1, #js-addressModal-useraddress2, #js-addressModal-usercity, #js-addressModal-userpostalcode"],v=["#js-addressModal-userfirstname, #js-addressModal-userlastname"],f=ebates.regex.email,j="myaccount/updateBFPSInfo.do",y={"js-addressModal-userfirstname":{blankValue:"Please enter a first name",hasEmail:"Please enter a first name – you entered an email address",hasPipe:"First Name should not contain pipe character",hasDomain:"Please provide valid first name"},"js-addressModal-userlastname":{blankValue:"Please enter a last name",hasEmail:"Please enter a last name – you entered an email address",hasPipe:"Last Name should not contain pipe character",hasDomain:"Please provide valid Last Name"},"js-addressModal-useraddress1":{blankValue:"Please enter a valid street address",hasEmail:"Please enter a valid street address – you entered an email address",hasPipe:"Street address1 should not contain pipe character"},"js-addressModal-useraddress2":{hasEmail:"Please enter a valid street address 2 – you entered an email address",hasPipe:"Street address2 should not contain pipe character"},"js-addressModal-usercity":{blankValue:"Please enter a valid city",hasEmail:"Please enter a valid city – you entered an email address",hasPipe:"City should not contain pipe character"},"js-addressModal-userpostalcode":{blankValue:"Please enter a valid Postal Code",hasEmail:"Please enter a valid Postal Code – you entered an email address",hasPipe:"Postal Code should not contain pipe character"},"js-addressModal-userstateprovince":{blankValue:"Please select a state"},"js-addressModal-personalCaptcha":{empty:"Please enter the verification code",short:"Please enter the valid verification code"},"js-addressModal-captcha":{empty:"Captcha is required."}},M={first_empty:"Please enter a first name",last_empty:"Please enter a last name",first_invalid:"Please enter a valid first name",last_invalid:"Please enter a valid last name",add_empty:"Please enter a valid street address",city_empty:"Please enter a valid city",address1_invalid:"Please enter a valid street address",address2_invalid:"Please enter a valid street address2",state_empty:"Please select a state",personal_info_empty:"Please update your information before adjusting your payment preferences.",recaptcha_invalid:"Captcha is required",session_expired:"Session expired...",empty:"The following fields can not be blank: ",generic:"An error has occurred. Please try again or reload the page.",postal_invalid:"Please enter a valid postal code",captcha_invalid:"The verification code you entered was incorrect. Please try again.",email_already_exists:"The email address you have provided is already in use."};$("body").on("click",".apofpo,.apotip",function(e){e.stopPropagation(),$(".apotip").toggle()});var b=function(){var e=new Date;$("#js-addressModal-personalCaptcha").val(""),$("#js-addressModal-captchaPersonalImg").length>0?$("#js-addressModal-captchaPersonalImg").attr("src","ebatesCaptcha.do@key=paymentOptionForm&"+e.getTime()):setTimeout(function(){$("#js-addressModal-captchaPersonalImg").attr("src","ebatesCaptcha.do@key=paymentOptionForm&"+e.getTime())},500)};$("body").on("click","#js-addressModal-refreshPersonalCap",function(){b()}),$(document).on("loadAddressModalForDeletion",function(a,s){i=s,e("delete")});var g=function(){return{address1:$("#js-addressModal-useraddress1"),address2:$("#js-addressModal-useraddress2"),city:$("#js-addressModal-usercity"),state:$("#js-addressModal-userstateprovince"),country:$("#js-addressModal-usercountry"),zip:$("#js-addressModal-userpostalcode")}},C=function(e){var a="",s=e.state.find("option:checked").text(),d=["","USA","CAN"],r=d[e.country.val()];"State/Province"===s&&(s=""),a+=e.address1.val()+"|",a+=e.address2.val()+"|",a+=e.city.val()+"|",a+=s+"|",a+=e.zip.val();var t={};return t.country=r,t.searchstring=a,t},P=function(e){var a=e.find("lineone").text(),s=e.find("linetwo").text(),d=e.find("city").text(),r=e.find("zip").text(),t=e.find("state").text(),o=!!t&&$('#js-addressModal-userstateprovince option:contains("'+t+'")').val(),l=e.find("barcode").text(),n=e.find("recordType").text();$("#js-addressModal-useraddress1").val(a),$("#js-addressModal-useraddress2").val(s),$("#js-addressModal-usercity").val(d),!!o&&$("#js-addressModal-userstateprovince").val(o),$("#js-addressModal-userpostalcode").val(r),$("#js-addressModal-usershippingBarcode").val(l),$("#js-addressModal-userrecordType").val(n)},w=function(e){"object"===(void 0===e?"undefined":_typeof(e))&&(e.action="search",e.promptset="Default",e.addlayout="DatabaseBarCode Layout",$.ajax({url:"qas/prowebproxy.jsp",type:"post",data:"country="+e.country+"&searchstring="+e.searchstring+"&action="+e.action+"&promptset="+e.promptset+"&addlayout="+e.addlayout}).done(function(e){u=$(e),c=u.find("verifylevel").text().toLowerCase(),"verified"===c?(P(u),t()):"interactionrequired"===c?($(".js-addressModal-subHeading").html("Use Our Suggested Address:"),$(".js-addressModal-message").html(""),$(".js-addressModal-button").html("Use suggested address"),E(u),_()):c.indexOf("partial")>-1?($(".js-addressModal-subHeading").html("Correct Partial Address:"),$(".js-addressModal-message").html("It looks like we detected a partial address. Please make sure to enter your street number, apartment number, etc."),$(".js-addressModal-button").html("Go back and correct"),$(".js-addressModal-suggestedAddress").html(""),_()):($(".js-addressModal-subHeading").html("Invalid Address:"),$(".js-addressModal-message").html("We weren't able to verify your address."),$(".js-addressModal-button").html("Go back and correct"),$(".js-addressModal-suggestedAddress").html(""),_())}).fail(function(e){console.log(e)}))},x=function(){"interactionrequired"===c&&P(u),T(),"interactionrequired"===c&&t()},k=function(){T(),t()},T=function(){$(".js-addressModal-addressEntry").removeClass("hide"),$(".js-addressModal-addressConfirm").addClass("hide")},_=function(){A(),$(".js-addressModal-addressConfirm").removeClass("hide"),$(".js-addressModal-addressEntry").addClass("hide")},A=function(){var e=g(),a=e.address1.val()+"<br/>";e.address2&&""!==e.address2.val()&&(a+=e.address2.val()+"<br/>"),a+=e.city.val()+" "+e.state.find("option:selected").text()+" "+e.zip.val(),$(".js-addressModal-userEnteredAddress").html(a)},E=function(e){var a=e.find("lineone").text(),s=e.find("linetwo").text(),d=e.find("city").text(),r=e.find("zip").text(),t=e.find("state").text(),o=a+"<br/>";s&&""!==s&&(o+=s+"<br/>"),o+=d+", "+t+" "+r,$(".js-addressModal-suggestedAddress").html(o)}}();
//# sourceMappingURL=address-modal-2471f0d637.js.map
