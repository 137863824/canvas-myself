/*var aindex = 0;
var s = "";
var Time = 0;
//轮播函数
function imgChange() {
	//图片的轮播	
	$('.banner_imgs').find("li").eq(aindex).fadeIn(500).siblings().fadeOut(500);
	//按钮的控制	
	$('.banner-status').find("li").eq(aindex).addClass('hov').siblings().removeClass('hov');

}
//自动轮播
function imgauto() {
	var len = $('.banner-status').find("li").length;
	if (1 == len) {
		$('.banner-status').css("display", "none");
	} else {
		Time = setInterval(function () {
			(aindex < len - 1) ? (aindex++) : (aindex = 0);
			imgChange();
		}, 2000);
	}
}
*/
$(function () {
	/*//gyy图片轮播	
	var tunum = $('.banner_imgs').find("li").length;
	for (var i = 0; i < tunum; i++) {
		s = s + '<li></li>'
	}
	$('.banner-status ul').append(s);
	$('.banner-status').find("li").eq(0).addClass('hov');
	//鼠标hover  图片轮播
	$('.banner-status').find("li").mouseover(function () {
		aindex = $(this).index();
		imgChange();
	});
	$('.btnright').click(function () {
		(aindex < tunum - 1) ? (aindex++) : (aindex = 0);
		imgChange();
	});
	$('.btnleft').click(function () {
		(aindex > 0) ? (aindex--) : (aindex = tunum - 1);
		imgChange();
	});
	//鼠标悬停，停止自动轮播
	$('.banner_tu').hover(function () {
		clearInterval(Time)
	}, function () {
		imgauto();
	});
	imgauto();*/

	//gyy左侧搜索	
	$(document).click(function () {
		$('.searchlist').slideUp(100);
		$('.morelist').slideUp(100);
	});
	$(".search .inputk").click(function (e) {
		e.stopPropagation();
		$(this).next('.searchlist').slideToggle(100);
	});
	$(".search").on('click', '.searchlist li', function () {
		$('.searchlist').slideUp(100);
		$('.search .inputk').val($(this).text());
	});
	//左侧列表标题选择
	$(".leftnavbt").on('click', 'li', function () {
		$(this).addClass('on').siblings().removeClass('on');
	});
	$(".select_tab").on('click', 'a', function () {
		$(this).addClass('on').siblings().removeClass('on');
	});
	//问答列表分类标题
	$(".leftbarbt").on('click', 'li', function (e) {
		e.stopPropagation();
		$(this).addClass('on').siblings().removeClass('on');
		$(".leftbarbt li:first-child").removeClass('on');
	});
	$(".leftbarbt li:first-child").click(function () {
		$(".morelist").slideToggle(100);
	});
	//gyy左侧学校名称超出10个字悬浮
	$(".queslist .queshoner").each(function (i) {
		var namestr = $(this).find(".zbschool p").text();
		if (namestr.length > 10) {
			var newnamestr = namestr.substr(0, 10) + "...";
			$(this).find(".zbschool p").text(newnamestr);
			$(this).find(".nameall").html(namestr).css("display", "none");
		} else {
			$(this).find(".nameall").remove();
		}
	});
	$(".zbschool p").mouseenter(function () {
		$(this).closest(".zbschool").find('.nameall').stop().fadeIn();
	});
	$(".zbschool p").mouseleave(function () {
		$(this).closest(".zbschool").find('.nameall').stop().fadeOut();
	});
	//gyy左侧回答问题点赞
	$(".zan").on('click', function () {
		var zan = $(this).text();
		$(this).addClass('on');
		if (isNaN(zan)) {
			$(this).text(1);
		} else {
			$(this).text(parseInt(zan) + 1);
		}
	});
	//gyy关注
	// $(".guanzhu").toggle(
	// 	function(){
	// 		$(this).addClass('on')
	// 		$(this).text('已关注')
	// 	},
	// 	function(){
	// 		$(this).removeClass('on')
	// 		$(this).text('关注')
	// 	}
	// )
	var isActive = false
	$(".guanzhu").click(function () {
		isActive = !isActive
		$(this).toggleClass("on")
		if (isActive) {
			$(this).text('已关注')
		} else {
			$(this).text('关注')
		}
	});
	//gyy详情简介超出3行展开收起
	var line3 = parseInt($(".detail .wzjs").css("height"));
	if (line3 > 72) {
		$(".detail .wzjs").addClass("hidewz");
		$(".detail .wzjs").find(".showdown").show().text("... 显示更多");
	} else {
		$(".detail .wzjs").find(".showdown").hide();
	}
	$(".showdown").click(function () {
		var wzflag = $(this).text();
		if (wzflag == "... 显示更多") {
			$(".detail .wzjs").removeClass("hidewz");
			$(".showdown").text("向上收起");
		} else {
			$(".detail .wzjs").addClass("hidewz");
			$(".showdown").text("... 显示更多");
		}
	});

	//gyy左侧分享弹框

	$(".fenxiang").hover(function(){
		$(this).find('.share').stop().fadeIn()
	}, function () {
		$(this).find('.share').stop().fadeOut()
	})
	
	//gyy右侧固定悬浮回到顶部
	$(".call").hover(function () {
		$('.callphone', this).stop().fadeIn();
	}, function () {
		$('.callphone', this).stop().fadeOut();
	});
	$(".gotop").click(function () {
		$('html,body').animate({
			'scrollTop': 0
		}, 600);
	});
	//gyy左侧判断两行样式
	$(".queshoner").each(function (i) {
	var heightline = parseInt($(this).css('height'));
	console.log(heightline)
	if(heightline<48){
		$(this).css({'height':'48px','line-height':'48px'});
		$(this).find(".nameall").css('top','-30px');
	}
	});
	//音频播放暂停
    $('.audio').on('click', function () {
        var audio = document.getElementById('audiomusic');
        var len = $("#audiomusic").attr("data_len");
        if ($(this).hasClass('stop')) {
            $(this).removeClass('stop');
            if (!audio.paused) {
                audio.pause();
            }
        } else {
            $(this).addClass('stop');
            if (audio !== null) {
                audio.play();
                var is_playFinish = setInterval(function () {
                    if (audio.ended) {
                       $('.audio').removeClass('stop');
                        window.clearInterval(is_playFinish);
                    }
                }, 10);

            }
        }
    });
	/*gyy-end*/
	
	
	/*xh-tab切换*/
	$(".quiz-tab li").eq(0).addClass("on");
	$(".tab-list").eq(0).show();
	$(".quiz-tab").on("click", 'li', function () {
		$(this).addClass('on').siblings().removeClass('on');
		var num = $(this).index();
		$(".tab-list").eq(num).show().siblings(".tab-list").hide();
		$('.college-list li').removeClass("tc-on");
	});
	/*反馈弹窗*/
	$(".fankui").on("click", function () {
		layer.open({
			type: 1,
			area: ['800px'], //宽高
			content: '\<\div class="feedback""> <h4>意见反馈</h4>' +
				'<form><textarea class="setFocus" placeholder="欢迎提出你们的宝贵意见，抱歉我们无法逐一回复，但我们会认真阅读，你的支持使我们最大的鼓励和帮助！"></textarea><button class="Submit">提交</button></form>' + '\<\/div>'
		});
	});
	/*多文本框获取焦点*/
	$("body").on("focus", ".setFocus", function () {
		$(this).css("border", "1px #00c3f6 solid");
	});
	$("body").on("blur", ".setFocus", function () {
		$(this).css("border", "1px #f0f0f0 solid");
	});

	/*cak*/
	/*微校园在线答疑*/
	$(document).on('click', function () {
		$(".q-ewm").slideUp("fast");
	});
	$(".wxy").on('click', function (event) {
		event.stopPropagation();
		$(this).parents('.infobox').siblings('.q-ewm').slideToggle("fast");
		$(this).parents('.infobox').parent("li").siblings().find('.q-ewm').slideUp("fast");
	});
	$(".gxww").on('click', function (event) {
		event.stopPropagation();
		$(this).find('.q-ewm').slideToggle("fast");
		$(this).siblings().find('.q-ewm').slideUp("fast");
	});
	// 截字，浮动弹层
	$('.tab-list li').each(function () {
		var str = $(this).find(".infobox h4").text();
		var strArray = str.split("")
		if (strArray.length > 7) {
			var strArray1 = strArray.splice(0, 8).join("")
			var strArray2 = strArray.splice(strArray.length - 2, 2).join("")
			$(this).find(".infobox h4").text(strArray1 + '... ' + strArray2)
			$(this).find(".sch-name").html(str).css("display", "none");
		} else {
			$(this).find(".sch-name").remove();
		}
	})
	$(".tab-list .infobox h4").mouseenter(function () {
		$(this).closest(".infobox").find('.sch-name').stop().fadeIn()
	})
	$(".tab-list .infobox h4").mouseleave(function () {
		$(this).closest(".infobox").find('.sch-name').stop().fadeOut()
	})
	// 志愿工具
	$(".gj-hover").hover(function () {
		$(this).find('.QRbox').css({
			visibility: "visible"
		});
		$(this).find('.ltbox').css({
			visibility: "hidden"
		});
	}, function () {
		$(this).find('.QRbox').css({
			visibility: "hidden"
		});
		$(this).find('.ltbox').css({
			visibility: "visible"
		});
	})
	// 问题详情页
	// 截字，浮动弹层
	$('.ask-xq ul li').each(function () {
		var str = $(this).find("h4").text();
		var strArray = str.split("")
		if (strArray.length > 6) {
			var strArray1 = strArray.splice(0, 7).join("")
			var strArray2 = strArray.splice(strArray.length - 2, 2).join("")
			$(this).find("h4").text(strArray1 + '... ' + strArray2)
			$(this).find(".sch-name").html(str).css("display", "none");
		} else {
			$(this).find(".sch-name").remove();
		}
	})
	$(".ask-xq li h4").mouseenter(function () {
		$(this).closest("li").find('.sch-name').stop().fadeIn()
	})
	$(".ask-xq li h4").mouseleave(function () {
		$(this).closest("li").find('.sch-name').stop().fadeOut()
	})
	// 老师详情
	$(document).on('click', function () {
		$(".college-list").slideUp(100);
	});
	$('.college-more').on('click', function (event) {
		event.stopPropagation();
		$(".college-list").slideToggle(100);
	})
	$('.college-list').on('click', 'li', function () {
		$(this).addClass('tc-on').siblings().removeClass('tc-on')
		var num = $(this).index() + 3;
		$(".tab-list").eq(num).show().siblings(".tab-list").hide();
		$(".quiz-tab li").removeClass("on")
	})
	// 位置固定
	var divTop, scrTop
	setTimeout(function () {
		if (document.getElementById('fix-float')) {
			divTop = $('#fix-float').offset().top
			$(window).scroll(function () {
				scrTop = $(this).scrollTop()
				if (divTop < scrTop) {
					$('#fix-float').css({
						position: 'fixed',
						top: '0'
					})
				} else {
					$('#fix-float').css({
						position: 'static'
					})
				}
				// 补充
				var dH = $(this).height()
				if (dH < scrTop) {
					$('.rt_top').css({
						display: "block"
					})
				} else {
					$('.rt_top').css({
						display: "none"
					})
				}
			})
		}
	},100)


});