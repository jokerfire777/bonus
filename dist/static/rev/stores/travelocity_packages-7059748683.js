$("body").on("click",".vac-btn",function(){$(".errorMsg").hide();var r=$("#pack-from"),e=$("#pack-to"),o=$("#check_in"),a=($("#carspickUpTime"),$("#check_out")),i=($("#carsdropOffTime"),$("#expfly-from")),s=$("#expfly-to"),t=/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/,l=new Date;$(".vac-from,.vac-return,.vac-depart,.vac-to,.vac-depart").removeClass("broder-red"),""!=r.val()&&r.val()||!r.is(":visible")?""!=i.val()&&i.val()||!i.is(":visible")?""!=s.val()&&s.val()||!s.is(":visible")?i.val()===s.val()&&s.is(":visible")?($(".errorMsg").show().html("Your departure or arrival city is same."),$(".fly-to").addClass("broder-red"),$(".errorMsg").is(":visible")&&s.on("click",function(){$(".fly-to").removeClass("broder-red"),$(".errorMsg").hide()})):""!=e.val()&&e.val()||!e.is(":visible")?""!=o.val()&&o.val()?""!=a.val()&&a.val()?t.test(o.val())?t.test(a.val())?Date.parse(a.val())<=Date.parse(o.val())?($(".errorMsg").show().html("Your check-out date must be after your check-in date. Please verify your dates."),$(".errorMsg").is(":visible")&&$("#check_in").on("click",function(){$(".vac-to").removeClass("broder-red"),$(".errorMsg").hide()})):o.val()&&o.val()<l?($(".errorMsg").show().html("Your check-in date must be after your current date. Please verify your dates."),$(".errorMsg").is(":visible")&&$("#check_in").on("click",function(){$(".vac-depart").removeClass("broder-red"),$(".errorMsg").hide()})):($(document).trigger("set-nav-id",[ebates.stats.parentNavId+"|"+this.getAttribute("data-navigation-id")]),$("#package-form").submit()):($(".errorMsg").show().html("Invalid check-our date.  It needs to be (MM/DD/YYYY)"),$(".errorMsg").is(":visible")&&$("#check_in").on("click",function(){$(".vac-to").removeClass("broder-red"),$(".errorMsg").hide()})):($(".errorMsg").show().html("Invalid check-in date.  It needs to be (MM/DD/YYYY)"),$(".errorMsg").is(":visible")&&$("#check_in").on("click",function(){$(".vac-depart").removeClass("broder-red"),$(".errorMsg").hide()})):($(".errorMsg").show().html("Please enter the Check Out date"),$(".vac-return").addClass("broder-red"),$(".errorMsg").is(":visible")&&$("#check_out").on("click",function(){$(".vac-return").removeClass("broder-red"),$(".errorMsg").hide()})):($(".errorMsg").show().html("Please enter the check-in date"),$(".vac-depart").addClass("broder-red"),$(".errorMsg").is(":visible")&&$("#check_in").on("click",function(){$(".vac-depart").removeClass("broder-red"),$(".errorMsg").hide()})):($(".errorMsg").show().html("Destination is required"),$(".vac-to").addClass("broder-red"),$(".errorMsg").is(":visible")&&$("#pack-to").on("click",function(){$(".vac-to").removeClass("broder-red"),$(".errorMsg").hide()})):($(".errorMsg").show().html("Going To is required"),$(".fly-to").addClass("broder-red"),$(".errorMsg").is(":visible")&&s.on("click",function(){$(".fly-to").removeClass("broder-red"),$(".errorMsg").hide()})):($(".errorMsg").show().html("Leaving From is required"),$(".fly-from").addClass("broder-red"),$(".errorMsg").is(":visible")&&i.on("click",function(){$(".fly-from").removeClass("broder-red"),$(".errorMsg").hide()})):($(".errorMsg").show().html("From Location is required"),$(".vac-from").addClass("broder-red"),$(".errorMsg").is(":visible")&&$("#pack-from").on("click",function(){$(".vac-from").removeClass("broder-red"),$(".errorMsg").hide()}))}),$("body").on("click","#package-form #room",function(){$("#package-form").find(".background-pop").fadeIn("slow"),$("#package-form").find(".rooms-info-pop").show()}),$("body").on("click","#p-room-plus",function(){var r=$(".tabnav-target"),e=$("#p-room-data"),o=r.find("#room-data-temp").clone(),a=r.find("#p-room-val");r.find(".rm1").removeClass("hide"),a.val()<8&&(a.val(parseInt(a.val(),10)+1),o.find(".data-box").attr("id","p-room"+a.val()),o.find(".r-val2").val(a.val()),o.find(".r-val2").attr("name","p-room"+a.val()),o.removeAttr("id"),o.show(),e.append(o))}),$("body").on("click","#p-room-minus",function(){var r=$(".tabnav-target"),e=r.find("#p-room-val");e.val()>1&&(e.val(parseInt(e.val(),10)-1),r.find("#p-room-data .sel-room").last().remove())}),$("body").on("click",".p-adu-plus",function(){var r=$(this).prev();r.val()<8&&r.val(parseInt(r.val(),10)+1)}),$("body").on("click",".p-adu-minus",function(){var r=$(this).next();r.val()>1&&r.val(parseInt(r.val(),10)-1)}),$("body").on("click",".p-child-plus",function(){var r=($(".tabnav-target"),$(this).prev());r.val()<3&&r.val(parseInt(r.val(),10)+1)}),$("body").on("click",".p-child-minus",function(){var r=$(this).next();r.val()>0&&r.val(parseInt(r.val(),10)-1)}),$("body").on("click",".background-pop",function(){var r,e,o,a,i,s=0,t=0,l=" room",d=" adult";i=$(".tabnav-target"),r=$("#package-form .data-box").length,$(this).fadeOut("slow"),i.find(".rooms-info-pop").hide(),i.find(".data-box").each(function(o,a){var i=$(this).attr("id"),l=parseInt(o)+1;if(o<r){var d=i+"adults";d=$("#"+i).find(".p-adu-val").val(),e=$("#"+i).find(".p-child-val").val(),l<r&&"|",s=parseInt(s)+parseInt(d),t=parseInt(t)+parseInt(e)}}),r>1&&(l=" rooms"),s>1&&(d=" adults"),s>=1&&(o=", "),t>=1&&(a=", ",childTxt=" children"),0==t&&(a="",childTxt="",t=""),$("#package-form input#room").val(r+l+o+s+d+a+t+childTxt),$("#package-form #rooms").val(r),$("#package-form #adults").val(s),$("#package-form #children").val(t)});
//# sourceMappingURL=travelocity_packages-7059748683.js.map
