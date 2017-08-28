$(function(){
	/*gyy——start*/
	loadheigh();
	loadHeigh();
	if($('.main').hasClass('scroolheight')){
		loadheigh2();
	}
	$(window).resize(function() {
		loadheigh();
		loadHeigh();
		if($('.main').hasClass('scroolheight')){
			loadheigh2();
		}
	});
	$(window).scroll(function() {
		if($('.main').hasClass('scroolheight')){
			loadheigh2();
		}
	});
	/*资料完善百分比*/
	$('.percent span').text(parseInt($('.percent').css("width"))/920*100+'%');
	/*左侧导航*/
	$(".left_menu").on('click','li', function () {
		$(this).addClass('on').siblings().removeClass('on');
	});
	/*选择下拉框*/
	$(document).on('click',function (event) {
		$(".setlist").slideUp(100);
		$(".setchoose").removeClass('on');
	});
	$(".setchoose").on('click', function (event) {
		event.stopPropagation();
		$(this).find(".setlist").slideToggle(100);
		$(this).toggleClass('on')
	});
	$(".setlist").on('click','li', function () {
		$(this).addClass('on').siblings().removeClass('on');
		var choose_val = $(this).text();
		$(this).parents(".setchoose").find("span").html(choose_val);
	});
	$(".setlist").mCustomScrollbar({
		theme: "light-3",
		advanced: {autoExpandHorizontalScroll: true}
	});
	
	/*积分规则说明*/
	$(".guize").hover(
		function () {
			$(".shuoming").slideDown("fast");
		},
		function () {
			$(".shuoming").slideUp("fast");
		}
	);
	/*个人中心我的右侧选项卡*/
	$(".right_con").css("display","none");
	$(".right_con").eq(0).show();
	$(".right_menu").on('click','li', function () {
		$(this).addClass('on').siblings().removeClass('on');
		var tabnum = $(this).index();
		$(".right_con").eq(tabnum).show().siblings().hide();
		//$(".right_con").eq(tabnum).append("");
		$('.mright2').css("height","auto");
		loadheigh2();
	});	
	/*gyy————end*/

	/*** xh-ster */
	/*整屏高度*/
	function loadHeigh(){
		var wHeight =$(window).height();
		var Hight=wHeight-277;
		var h = $(".hightbox").height();
		var allheight = 277+h;
		if(allheight<= wHeight){
			$('.leftbox, .rightbox').css("height",Hight+'px');
		}
	}
	/*蓝色导航*/
	$(".nav li").eq(0).addClass("act");
	$(".nav").on("click",'li',function(){
		$(this).addClass('act').siblings().removeClass('act');
	});

	/*问题分类*/
	var nub = 0;
	$(".classify").on("click",'li',function(){
		nub+=1;
		if($(this).hasClass('on')){
			nub-=2;
		}
		if(nub > 3){
			nub-=1;
			$(".wtfl").show().delay(1500).fadeOut(150);
			$(".wtfl").text("最多可选择三个分类");
			return false;
		}else{
			$(".wtfl").hide();
			$(".wtfl").text("请选择问题分类，至少添加一个问题分类")
		}
		$(this).toggleClass('on');
	});
	/*匿名提问*/
	$(".nm").on("click",function(){
		$(this).toggleClass('on');
	});
	/*匿名提示*/
	$(".tip").hover(function(){
		$(".explain").slideDown("fast");
	},function(){
		$(".explain").slideUp("fast");
	});
	/*多文本框*/
	$(".problem").focus(function(){
		$(".wtms").hide();
	});
	$(".problem").blur(function(){
		var wt = $(".problem").val();
		if(wt == ""){
			$(".wtms").show();
		}else {
			$(".wtms").hide();
		}
	});
	/*提问*/
	$(".quiz").on("click", function(){
		var hd = $(".teacher").text();
		var wt = $(".problem").val();
		var num = $(".classify li").hasClass('on');
		if(hd =="点击邀请老师或专家"){
			$(".wytw").show();
		}else{
			$(".wytw").hide();
		}if(wt == ""){
			$(".wtms").show();
		}else {
			$(".wtms").hide();
		}if(num == false){
			$(".wtfl").show();
		}else{
			$(".wtfl").hide();
		}
		if(hd =="点击邀请老师或专家" || wt == "" || num == false){
			return false;
		}
		$(".box_overlay,.twcg").fadeIn(100);
	});
	/*提问页弹窗*/
	$(".Tabbox li").eq(0).addClass("on");
	$(".Tab-list").eq(0).show();
	$(".Tabbox").on("click", 'li', function(){
		$(this).addClass('on').siblings().removeClass('on');
		var num = $(this).index();
		$(".Tab-list").eq(num).show().siblings(".Tab-list").hide();
	});
	/*完善信息*/
	/*分数判断*/
	$(".score").focus(function(){
		$(".fs").hide();
	});
	$(".score").blur(function(){
		var score = $(".score").val();
		var number =  /^[1-9]\d*$/;
		if(score == ""){
			$(".fs").show();
		}else if(!number.test(score)){
			$(".fs").show();
			$(".fs").text("请输入正确的分数")
		}else {
			$(".fs").hide();
		}
	});
	/*手机号判断*/
	$(".phone").focus(function(){
		$(".hm").hide();
	});
	$(".phone").blur(function(){
		var phone = $(".phone").val();
		var tm =  /^1[34578][0-9]{9}$/;
		if(phone == ""){
			$(".hm").show();
		}else if(!tm.test(phone)){
			$(".hm").show();
			$(".hm").text("请输入正确的手机号")
		}else {
			$(".hm").hide();
		}
	});
	/*验证码判断*/
	$(".yzm").focus(function(){
		$(".cd").hide();
	});
	$(".yzm").blur(function(){
		var yzm = $(".yzm").val();
		if(yzm == ""){
			$(".cd").show();
		}else {
			$(".cd").hide();
		}
	});
	/*提交*/
	$(".Submit").on("click", function(){
		var score = $(".score").val();
		var phone = $(".phone").val();
		var yzm = $(".yzm").val();
		if((score == "") || (phone == "") || (yzm == "")){
			$(".fs").show();
			$(".hm").show();
			$(".cd").show();
		}else{
			$(".box_overlay,.Info").fadeOut(100);
		}
	});
	/*邀请回答*/
	$("#teacher").on("click",function(){
		/*判断是否已经完善信息*/
		/*如果没有完善*/
		//$(".box_overlay,.Info").fadeIn(100);
		/*如果已经完善*/
		$(".box_overlay,.Invitation").fadeIn(100);
	});
	/*邀请老师*/
	$("#xxlistcon").on("click",".answer",function(){
		$(".answer").removeClass('on');
		$(this).addClass('on');
		var h4 = $(this).prev().find("h4").text();
		var ategory = $(this).prev().find(".category").text();
		var name = $(this).prev().find(".name").text();
		var n = h4+ategory+name;
		$("#teacher").text("已邀请" + n +　"回答");
		var curLength = $("#teacher").text().length;
		if(curLength>=20){
			$("#teacher").css({
				"background":"#dbf2ff",
				"color":"#25a9f3",
				"border":"1px #dbf2ff solid"
			})
		}
		$(".box_overlay,.Invitation").fadeOut(100);
		var hd = $(".teacher").text();
		if(hd !="点击邀请老师或专家"){
			$(".wytw").hide();
		}

	});
	/*邀请专家*/
	$(".code").hover(function(){
		// cak修改
		var i = $(this).parent().index()
		if(i<6){
			$(".yqzj .codebox").css({top : i*90 -65})
		}else{
			$(".yqzj .codebox").css({top : 408})
		}
		$(".yqzj .codebox").show();
	},function(){
		if(!$(this).hasClass('on')){
			$(".yqzj .codebox").hide();
		}
	});
	$(".code").on("click", function(){
		$(".code").removeClass('on');
		$(this).addClass('on');
		$(".yqzj .codebox").show();
	});
	/*邀请老师搜索为空推荐专家是二维码显示*/
	//$(".code").on("click", function(){
	//	$(".code").removeClass('on');
	//	$(this).addClass('on');
	//	$(".yqls .codebox").show();
	//});

	/*关闭窗口，清空内容*/
	$(".twcg").on("click", ".close_lay", function(){
		$(".teacher").text("点击邀请老师或专家");
		var txt = $(".teacher").text();
		if(txt == "点击邀请老师或专家"){
			$("#teacher").css({
				"color":"#26a9f5",
				"border":"1px #26a9f5 solid",
				"background":"none"
			})
		}else{
			$("#teacher").css({
				"background":"#dbf2ff",
				"color":"#25a9f3",
				"border":"1px #dbf2ff solid"
			})
		}
		$(".answer").removeClass('on');
		$(".problem").val("");
		$(".classify li").removeClass('on');
		nub = 0;
	});

	/*关闭弹窗*/
	$(document).on("click", ".close_lay",function () {
		$(".box_overlay,.box_main").fadeOut(100);
	});

	/*上传头像*/
	$('.addpho').on("click",function(){
		$("#xiuxiuEditor").show();
		$(".shadow").css({'display':'block'});
		/*第1个参数是加载编辑器div容器，第2个参数是编辑器类型，第3个参数是div容器宽，第4个参数是div容器高*/
		xiuxiu.embedSWF("altContent",5,"100%","100%");
		//修改为您自己的图片上传接口
		xiuxiu.setUploadURL("http://web.upload.meitu.com/image_upload.php");
		xiuxiu.setUploadType(2);
		xiuxiu.setUploadDataFieldName("upload_file");
		xiuxiu.onInit = function ()
		{
			xiuxiu.loadPhoto("http://open.web.meitu.com/sources/images/1.jpg");
		}
		xiuxiu.onUploadResponse = function (data)
		{
			//alert("上传响应" + data);  可以开启调试
		}
	});
	/*点击关闭弹窗*/
	$('.shadow').click(function() {
		$("#xiuxiuEditor").hide();
		$(".shadow").css({'display':'none'});
	})
	/***xh-end*/





	/*cak*/
	// 公共导航
	$(document).on('click',function(){
		$(".link-1").slideUp(100);
		$(".link-2").slideUp(100);
		$(".chg-city").slideUp(50);
		$(".link-0").slideUp(100);
	})
	// ------------------
	$('.header-city').hover(function(){
		$('.chg-city').slideDown(50)
		$('.cak-down-img').attr('src','images/cak-down1.png')
	},function(){
		$('.chg-city').slideUp(50)
		$('.cak-down-img').attr('src','images/cak-down.png')
	})
	$('.header-icon').hover(function(){
		$('.link-0').slideDown(50)
	},function(){
		$('.link-0').slideUp(50)
	})
	$('.right-top').hover(function(){
		$('.link-1').slideDown(50)
		$('.hehehe').attr('src','images/warn1.png')
	},function(){
		$('.link-1').slideUp(50)
		$('.hehehe').attr('src','images/warn.png')
	})
	$('.user-head').hover(function(){
		$('.link-2').slideDown(50)
		$('.cak-bc-img').attr('src','images/cak-down1.png')
	},function(){
		$('.link-2').slideUp(50)
		$('.cak-bc-img').attr('src','images/cak-down.png')
	})
	// ------------------
	$('.link-1').on('click','a',function(){
		$(this).addClass('login-checked').parent().siblings().children().removeClass('login-checked')
	})
	$('.link-2').on('click','a',function(){
		$(this).addClass('login-checked').parent().siblings().children().removeClass('login-checked')
	})
	$(".header-nav").on("click","a",function(){
		$(this).addClass('header-checked').siblings().removeClass('header-checked');
	});
	$(".chg-city a").on("click",function(){
		$(".chg-city a").removeClass('blue-text')
		$(this).addClass('blue-text')
		$('.header-city>span:nth-child(1)').text($(this).text())
	});
	// 表单验证
	$(function () {
		$('#userId').on('blur', textId)
		$('#money').on('blur', textMoney)
		$('#binding').on('click',textBind)
		$('.input-5').on('click',textIsSuccess)
	})

	// 验证身份证格式
	function textId() {
		var patten = new RegExp(/(^\d{15}$)|(^\d{17}(\d|X)$)/);
		var a =  $('#userId').val()
		if (patten.test(a)) {
			$('.hidden-id').css({
				visibility: "hidden"
			})
		} else {
			$('.hidden-id').css({
				visibility: "visible"
			})
		}
	}
	// 验证提现金额
	function textMoney() {
		var patten = new RegExp(/^400$|^(\d|[1-9]\d)(\.\d+)*$/);
		var a = $('#money').val()
		if (patten.test(a)) {
			$('.hidden-money').css({
				visibility: "hidden"
			})
		} else {
			$('.hidden-money').css({
				visibility: "visible"
			})
		}
	}
	// 验证是否绑定微信
	function textBind(){
		var isBind = false;
		// 接收一个ajax状态修改isBind的值
		if(isBind){
			$('.hidden-submit').css({
				visibility: "hidden"
			})
		}else{
			$('.hidden-submit').css({
				visibility: "visible"
			})
		}
	}
	// 验证提现是成功还是失败
	function textIsSuccess(event){
		event.preventDefault()
		var isSuccess = false
		// 接收一个ajax状态修改isSuccess的值
		if (isSuccess) {
			$('.black-bg').eq(1).css({
				display: "none"
			})
			$('.black-bg').eq(0).css({
				display: "block"
			})
		} else {
			$('.black-bg').eq(0).css({
				display: "none"
			})
			$('.black-bg').eq(1).css({
				display: "block"
			})
		}
	}
	// 关闭弹窗
	$('.error').on('click', function () {
		$('.black-bg').css({
			display: 'none'
		})
	})

	// 白屏全高
	window.onload = function () {
		changeHeight();
	}
	//当浏览器窗口大小改变时，设置显示内容的高度
	window.onresize = function () {
		changeHeight();
	}
	// 四种消息公用同一个高，如需要不同高可复制四份。
	function changeHeight() {
		var sh = document.documentElement.scrollHeight
		var ch = document.documentElement.clientHeight
		var h = $('.white-full').height()
		var ch = document.documentElement.offsetHeight
		h = (sh < ch) ? ch - 380 : sh - 280
		$('.white-full').css({height: h+"px"})
	}
	/*cak——over*/
	// 补充
	$('.searchbox input').on('focus',function(){
		$(this).parent().removeClass('cak-bg-search').addClass('cak-bg-search1')
		$(this).parent().find('div').removeClass('bc-icon-bg').addClass('bc-icon-bg1')
	})
	$('.searchbox input').on('blur',function(){
		$(this).parent().addClass('cak-bg-search').removeClass('cak-bg-search1')
		$(this).parent().find('div').removeClass('bc-icon-bg1').addClass('bc-icon-bg')
	})
	$('.header-icon').hover(function(){
		$(this).find('.cak-hover-img').attr('src','images/shouji.png')
	},function(){
		$(this).find('.cak-hover-img').attr('src','images/shouji1.png')
	})



});

/*gyy——start*/
//个人信息完善整屏高
function loadheigh(){
	var wheight =$(window).height();// 当前可见页面高度
	var high1=wheight-206;
	$('.heig1').css("height",high1+'px');
}
//我的中心滚动整屏高
function loadheigh2(){
	var wheight =$(window).height();// 当前可见页面高度
	var high2=wheight-356;
	var high3=wheight-84;
	var high4=wheight-20;
	var oldhigh = parseInt($(".scroolheight").css("height"));//需要判断的元素高度
	var bodyheight =$(document).height();// 当前可见页面
	if(bodyheight<=wheight){
		$('.mleft2').css("height",high2+'px');
		$('.mright2').css("height",high2+'px');
	}else{
		var newright = $('.mright2').css("height");
		$('.mleft2').css("height",newright);
		var scltop= $(document).scrollTop();// 滚动条距顶部高度
		var eltop=$(".scroolheight").offset().top;
		if(scltop>eltop){
			$(".scroolheight").addClass("fixedtop");
			$('.mleft2').css("height",high4+'px');
			$('.heig3').css({"max-height":high3+"px"});
			$(".heig3").mCustomScrollbar({
				theme: "light-3",
				advanced: {autoExpandHorizontalScroll: true}
			});
		}
		if(parseInt(newright)<high2){
			$('.mleft2').css("height",high2+'px');
			$('.mright2').css("height",high2+'px');
		}
	}
}
//倒计时
var currTime = 5;
var downTime;
function sendMessage(obj){
	downTime = currTime;
	$(obj).prop("disabled",true)
		.addClass('count-down')
		.val(currTime+"秒后重试");
	var timer = setInterval(function (){
			if(downTime==1){
				clearInterval(timer);
				$(obj).prop("disabled",false)
					.removeClass('count-down')
					.val("获取验证码");
			}else{
				downTime--;
				$(obj).val(downTime+"秒后重试");
			}
		}
		,1000);
}
/*gyy————end*/

