"use strict";$.fn.expander2=function(e){var n={text:"Read",more:"more +",less:"less &#8722;",expander:'<a><span class="easein-gradient"></span><span class="white-bg">TEXT<span class="more">MORE</span><span class="less ">LESS</span></span></a>',classes:"expander2 absolute pointer toggle lh-18 min no-select",css:{bottom:0,right:0},leeway:5,height:null,fallbackLineHeight:18,lines:null},s=$.extend(!0,n,e||{}),t=s.expander.replace("TEXT",s.text).replace("MORE",s.more).replace("LESS",s.less);return this.each(function(){var e,n,a,l,i,r,c=this,p=window.getComputedStyle(c)["line-height"];c.classList.contains("expander-applied")||(e=c.clientHeight,null!==(r=null!==s.lines&&function(){if("normal"===p)console.log("Line-height is not set.",c,s.fallbackLineHeight),p=s.fallbackLineHeight;else if(!p||!/px/.test(p))return null;return+p.replace("px","")*s.lines}()||s.height)&&e>r+s.leeway&&(this.classList.add("expander-applied"),n=document.createElement("div"),n.className="rel",a=document.createElement("div"),a.className="expand-content transition",l=document.createElement("div"),l.className="relative expander2-parent min toggle",l.innerHTML=this.outerHTML,this.parentNode.replaceChild(l,this),i=$(t).addClass(s.classes).css(s.css),l.parentNode.insertBefore(a,l),a.appendChild(l),a.parentNode.insertBefore(n,a),n.appendChild(a),n.appendChild(i[0]),a.style.height=r+"px",i[0].addEventListener("click",function(){a.style.height=(l.classList.contains("min")?e:r)+"px",$(n).find(".toggle").toggleClass("min"),n.style.paddingBottom=l.classList.contains("min")?"":p},!1)))})};
//# sourceMappingURL=expander_v2-cf3d7aa5e6.js.map