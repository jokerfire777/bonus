$(function(){var e={counter:!1,nav:{prev:$('<span class="ht-semi-circle-right ht-left hp-hot-l-shadow mar-1-l"><i class=" fa fa-angle-left f-30 ht-icon-left"></i></span>'),next:$('<span class="ht-semi-circle-left ht-right hp-hot-r-shadow mar-1-r"><i class=" fa fa-angle-right f-30 ht-icon-right"></i></span>'),keyboard:!0}};ebates.js.require("global_files/js/eba/carousel/carousel.1.1.0.min.js",function(){$(".hp-hot-carousel").carousel(e)});var t=$(window),a=$(".ga-category").data("ga-category")||"Luxe",n={times:{next:4e3},animation:{type:"slide"},nav:{next:$('<span class="fa-angle-right f-55 pad-20-l"></span>'),prev:$('<span class="fa-angle-left f-55 pad-20-r"></span>'),keyboard:!0},navigator:{use:!0,cont:"<div>",item:"<span>",classes:{cont:"pad-10-r center absolute h-v-centered indicator ht-0",item:"bg-gry-c round-20 mar-10-l iblk cursor nav-item",active:"bg-gry-dk-8"}}},o={times:{next:4e3},animation:{type:"fade"},nav:{next:$('<span class="fa-angle-right f-55 pad-20-l"></span>'),prev:$('<span class="fa-angle-left f-55 pad-20-r"></span>'),keyboard:!0}},i=function(e,t,a){return $(document).trigger("stats",{data:["send","event",e,t,void 0!==a?a:""]}),!0},s=function(){var e={storeIds:r.data("store-ids"),navId:r.data("nav-id"),sourceName:r.data("source"),t:(new Date).getTime()};$.get("ajax/luxe/bonuses.htm",e).done(function(e){var n;void 0!==e&&""!==$.trim(e)&&(r.html(e).find("h2").text(r.data("title")),$.each(r.data("store-images"),function(e,t){r.find(".bonus-store-"+e).find("img").attr("data-href",t)}),r.find("li").each(function(){i(a,"Bonus loaded",$(this).attr("data-bonus-code"))}),ebates.js.require("global_files/js/eba/carousel/carousel.1.1.0.min.js",d),n=function(){l(r)&&i(a,"Section view","5")&&t.off("scroll-throttle",n)},t.on("scroll-throttle",n).trigger("scroll-throttle"))}).fail(function(){i(a,"Error","Bonus loading")})},r=$(".bonus-section").one("load-bonus",s),l=function(e,a){var n=t.scrollTop(),o=e.offset().top,i=a||0;return o+e.height()<n+t.height()+i&&o>n-i},c=function(){$(".bonus-trigger").each(function(){l($(this),500)&&r.trigger("load-bonus")&&t.off("scroll-throttle",c)})},d=function(){var e=$(".carousel-2"),t=e.find("ul > li").length;e.carousel(o),t>1&&($(".carousel-2-cont>.prev, .carousel-2-cont>.next").on("click",function(){e.find($(this).hasClass("next")&&".next"||".prev").trigger("click")}).one("click",$.proxy(e.trigger,e,"perm-stop")),e.on("next-slide",function(t,n,o){setTimeout(function(){var t=$('li[data-count="'+n+'"]',e),s=t.attr("data-merch"),r=t.find("img").attr("src");i(a,"Bonus Carousel - "+o,s+"|"+r)},0)}))},u=function(){var e=$(".carousel-1"),t=e.find("ul > li").length;t>10&&(n.navigator.use=!1),e.carousel(n),t>1&&e.on("next-slide",function(t,n,o){setTimeout(function(){var t=$('li[data-count="'+n+'"]',e),s=t.attr("data-merch"),r=t.find("img").attr("src");i(a,"Main Carousel - "+o,s+"|"+r)},0)})};$(".flyout").addClass("hide"),$(".new-user").length?function(){var e,t={scroll:300},n=function(){var n=function(){return Date.now&&Date.now()||(new Date).getTime()},o=n(),s=$('<iframe width="100%" height="100%" src="../https@www.youtube.com/embed/Dk9s3SlM2Rs@rel=0&showinfo=0&autoplay=1&wmode=transparent&iv_load_policy=3" frameborder="0" allowfullscreen></iframe>').on("load",function(){o=n()}),r={classes:"h-v-centered video-overlay",css:{position:"fixed"},overlay:{use:!0,opacity:.5},scrollTo:!0},l=function(){var t=Math.floor((n()-o)/1e3),s=t>300?"300+":10*Math.floor(t/10)+"-"+10*(Math.floor(t/10)+1);e&&e.close(),i("Video",a,"playtime "+s)},c=$('<span class="fa-times pointer absolute pad-10 f-white close-video f-18"></span>').on("click",l);return ebates.js.require("account/global_files/js/notifications.1.0.1.min.js",function(){e=$.msg(c.add(s),r),setTimeout(function(){$("html, body").animate({scrollTop:0},t.scroll)},t.scroll),i("Video",a,"CBMS")}),!1};$(".show-video-overlay").on("click",n)}():(ebates.js.require("global_files/js/eba/carousel/carousel.1.1.0.min.js",u),r.length>0&&(!ebates.cookie.get("nm_api")&&-1!==$.inArray("8052",r.attr("data-store-ids").split(","))&&$.get("ajax/nm.htm",{storeType:"NM",t:(new Date).getTime()}).done(function(){t.on("scroll-throttle",c),ebates.cookie.set("nm_api",1,1)})||t.on("scroll-throttle",c))),i("Pages",a,"Landing"),$(".scroll-section").each(function(){var e=$(this),n=function(){l(e)&&i(a,"Section view",e.attr("data-section"))&&t.off("scroll-throttle",n)};t.on("scroll-throttle",n)}),ebates.js.require("global_files/js/eba/expander/expander.1.0.3.min.js",function(){var e,t=function(e){var t=$(window).scrollTop(),a=e.offset().top;return a+e.height()<t+$(window).height()+1500&&a>t-1500},a=function(){var e=$(this).addClass("expander-tried").find(".title-part").height()+48;$(this).expander({height:e})},n=function(){$(".coupon-desc > span").not(".expander-applied, .expander-tried, .expander-parent").filter(function(){return $(this).height()>42&&t($(this))}).each(a)},o=function(){e&&clearTimeout(e),e=setTimeout(n,50)};$(window).on("load resize scroll",o)}),$("#expander").click(function(){var e=$("#expander-sign");$("#expanded").slideToggle(),"+"===e.text()?e.html("−"):e.text("+")}),$(".store-info").one("click",".expander",function(){$(document).trigger("stats",{data:["send","event","UI","Merchant Read More",location.pathname]})});!function(){ebates.js.require("global_files/js/eba/expander/expander.1.0.3.min.js",function(){if($(".coupon-restrictions").is(":visible")){var e=$(".hp-hotdeals").find(".coupon-restrictions"),t=+e.css("line-height").replace("px",""),a={text:" ",more:"Read more +",less:"Read less -",height:t-1,classes:"prox-b expander absolute pointer toggle min"};e.length&&e.expander(a)}$(".one-line").expander({height:38})})}()});
//# sourceMappingURL=luxury-ecf5a4816d.js.map