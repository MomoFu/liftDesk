    
  function initWX(imgLink ,name ,  title , score , sex){
	var myUrl = encodeURIComponent(location.href.split('#')[0]);    //自动获得本网页的url
    console.log(myUrl);
    	var ta = (sex == 2)? '她':'他';
	var me = name+'使用了【'+title+'】把老板拍飞了'+score+'米，你能超过'+ta+'吗？';
	var desc = '';
	
    
	var link = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx46ec49d8e7a04a16&redirect_uri=http%3A%2F%2Fmkt4.chule.cc%2FliftDesk%2Findex.php&response_type=code&scope=snsapi_base&state=me#wechat_redirect';
	console.log(link);
	//if(ua.weixin){	
    $.getJSON('//wx.chubao.cn/getwxconf?url='+myUrl+'&callback=?', function(remoteData){
	   //向服务器发送请求，获得signature
	   console.log('wx init over');
	 wx.config({
	    debug: false, // 开启或关闭调试模式,调用的所有api的返回值会在客户端alert出来
	    appId: remoteData.appId, // 必填，公众号的唯一标识
	    timestamp: remoteData.timestamp, // 必填，生成签名的时间戳
	    nonceStr: remoteData.nonceStr, // 必填，生成签名的随机串
	    signature: remoteData.signature,// 必填，签名，见附录1
	    jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'] // 必填，需要使用的JS接口列表
     });
	 wx.ready(function(){
	  wx.onMenuShareTimeline({
		title: me, // 分享标题
		link: link,
		imgUrl: imgLink, // 分享图标，需替换为图片地址
		success: function () {
			_hmt.push(['_trackEvent', "liftDesk", "liftDeskShareToTimeline"]);
			//_hmt.push(['_trackEvent', "knowMe", "knowMeOtherShareToTimeLineSuccess"]);
		  //  window.location.href = 'http://www.chubao.cn/s/20160229xrhb/index.html';
		  //window.location.href = 'http://chubaocn.cootek.com/s/eventhall/index.html?v=knowMeSucceed';
		},
		cancel: function () {
		//	_hmt.push(['_trackEvent', "knowMe", "knowMeOtherShareToTimeLineCancel"]);
		//	window.location.href = 'http://chubaocn.cootek.com/s/eventhall/index.html?v=knowMeFail';
		}
	   });
	  wx.onMenuShareAppMessage({
		title: me, // 分享标题
		desc: desc, // 分享描述
		link: link,
		imgUrl: imgLink, // 分享图标，需替换为图片地址
		type: '', // 分享类型,music、video或link，不填默认为link
		dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
		success: function () {
			_hmt.push(['_trackEvent', "liftDesk", "liftDeskShareToFriends"]);
			//_hmt.push(['_trackEvent', "knowMe", "knowMeOtherShareToFriendSuccess"]);
			//window.location.href = 'http://www.chubao.cn/s/20160229xrhb/index.html';
			//window.location.href = 'http://chubaocn.cootek.com/s/eventhall/index.html?v=knowMeSucceed';
		},
		cancel: function () {
			// 用户取消分享后执行的回调函数，需要时选填
			//_hmt.push(['_trackEvent', "knowMe", "knowMeOtherShareToFriendCancel"]);
			//window.location.href = 'http://chubaocn.cootek.com/s/eventhall/index.html?v=knowMeFail';
		}
	  });
   });
   wx.error(function(res){
      
	// config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。

   });
	 
   });
	//}
  }
  