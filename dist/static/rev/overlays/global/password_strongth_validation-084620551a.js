ebates.form=ebates.form||{},ebates.form.add_pwd_valid=function(e,s){var t,r,a,i,o=e.querySelector(".password"),n="signInAjax.do",d="ajax/ismember.htm";"undefined"!=typeof rkfbpw&&(n="newr/signInAjax.do",d="newr/ajax/ismember.htm"),o&&(e.passwordStrengthData={newUsers:[],checkedEmails:[],disableSignUp:!1,emailChanged:!1,needStrongPassword:!1,currentPwdScore:5},r=e.passwordStrengthData,ebates.pwdkeyEventList=[],a=function(){var s,t=e.querySelector(".email-address").value,a=e.querySelector(".password").value,i=t.indexOf("@"),o=t.substring(0,i),d=/[^\x21-\x7e]/;d.test(a);r.currentPwdScore=5,r.newUsers.indexOf(t)<0||e.getAttribute("action")===n?(r.disableSignUp=!1,r.needStrongPassword=!1):(r.needStrongPassword=!0,a==o||a==t?(r.disableSignUp=!0,r.currentPwdScore=0):a.length<8?(r.disableSignUp=!0,r.currentPwdScore=0):"function"==typeof zxcvbn?(s=zxcvbn(a.toLowerCase(),ebates.customeDictionary).score,r.currentPwdScore=s,r.disableSignUp=s<2):r.disableSignUp=!1)},o.isValid=function(){var t=ebates.form.strings.password.empty,a=e.querySelector(".email-address").value,i=e.querySelector(".password").value,o=a.indexOf("@"),n=a.substring(0,o),d=/[^\x21-\x7e]/,g=d.test(i);if(r.needStrongPassword&&t.indexOf("128")>0&&(t="Your password must be at least 8 characters long."),!this.value)return this.showMsg("",t,"empty"),s.trigger("err-msg",[t]),!1;if(r.needStrongPassword){if(this.value.length<8)return this.showMsg("",ebates.form.strings.password.short,"invalid"),s.trigger("err-msg",[ebates.form.strings.password.short]),s.trigger("short-password"),!1;if("function"==typeof zxcvbn&&zxcvbn(this.value.toLowerCase(),ebates.customeDictionary).score<2)return this.showMsg("",ebates.form.strings.password.weak,"invalid"),s.trigger("err-msg",[ebates.form.strings.password.weak]),s.trigger("weak-password"),!1;if(i==n||i==a)return this.showMsg("",ebates.form.strings.password.same,"invalid"),s.trigger("err-msg",[ebates.form.strings.password.same]),s.trigger("weak-password"),!1;if(i.length>0&&g)return this.showMsg("",ebates.form.strings.password.ascii,"invalid"),s.trigger("err-msg",[ebates.form.strings.password.ascii]),s.trigger("weak-password"),!1}else if(this.value.length<6||this.value.length>128)return this.showMsg("",ebates.form.strings.password.invalid,"invalid"),s.trigger("err-msg",[ebates.form.strings.password.invalid]),!1;return!0},t=function(e,s){var t=e.querySelector(".email-address").value;if(t)if(s.emailChanged){if(!ebates.regex.email.test(t.trim()))return;s.needStrongPassword?e.querySelector(".password").placeholder="Password (8+ characters)":e.querySelector(".password").placeholder="Password (6+ characters)"}else e.querySelector(".password").placeholder="Password (6+ characters)";else e.querySelector(".password").placeholder="Password (8+ characters)"},s.attr("action")!==n&&"function"==typeof e.pwdStrengthUIFunc.showPwdTooltip&&("function"!=typeof e.pwdStrengthUIFunc.emailUpdated&&(e.pwdStrengthUIFunc.emailUpdated=t),e.pwdStrengthUIFunc.emailUpdated(e,r),e.querySelector(".email-address").addEventListener("keyup",function(t){var o=this.value;t.keyCode&&13===t.keyCode&&r.disableLogin||t.keyCode&&13!==t.keyCode&&(s.trigger("clear-messages"),e.pwdStrengthUIFunc.removePwdTooltip(),ebates.js.require(ebates.src.form.passwordMeter),r.emailChanged=!0,ebates.regex.email.test(o)?r.checkedEmails.indexOf(o)>=0?a():(clearTimeout(i),i=setTimeout(function(){ebates.pwdkeyEventList.indexOf(t.timeStamp)>=0||(ebates.pwdkeyEventList.push(t.timeStamp),$.ajax(d,{data:{email:o},timeout:2e3}).done(function(t){if(r.checkedEmails.push(o),t&&!1===t.status)r.newUsers.push(o),s.hasClass("e-exists")&&s.removeClass("e-exists");else{!s.hasClass("e-exists")&&s.addClass("e-exists");var i=ebates.optim&&ebates.optim.get_custom_su_event&&ebates.optim.get_custom_su_event()||"tracking-error";$(document).trigger("stats",{data:[],map:{external:{ec:"Signup Form",ea:"Email Recognized",el:i}}}),window.optimizely=window.optimizely||[],window.optimizely.push({type:"event",eventName:"Signup Form",tags:{event_category:"Signup Form",event_action:"Email Recognized",event_label:i}})}a(),e.pwdStrengthUIFunc.emailUpdated(e,r)}))},700)):(r.needStrongPassword=!1,r.disableSignUp=!1,e.pwdStrengthUIFunc.emailUpdated(e,r)))}),e.querySelector(".password").addEventListener("blur",function(){ebates.stats.device&&"M"===ebates.stats.device||e.pwdStrengthUIFunc.removePwdTooltip(s)}),e.querySelector(".password").addEventListener("keyup",function(t){var i=this.value,o=e.querySelector(".email-address").value;if(s.trigger("clear-messages"),i||e.pwdStrengthUIFunc.emailUpdated(e,r),e.pwdStrengthUIFunc.removePwdTooltip(s),r.emailChanged)return(13!==t.keyCode||!r.disableSignUp)&&void(ebates.regex.email.test(o)&&(a(),r.needStrongPassword&&e.pwdStrengthUIFunc.showPwdTooltip(i.length,r.currentPwdScore)))}),e.addEventListener("click",function(s){s.target.classList.contains("password")||ebates.stats.device&&"M"===ebates.stats.device||e.pwdStrengthUIFunc.removePwdTooltip&&e.pwdStrengthUIFunc.removePwdTooltip()})))};
//# sourceMappingURL=password_strongth_validation-084620551a.js.map
