function initWX(e,n,t,i,o){var c=encodeURIComponent(location.href.split("#")[0]);console.log(c);var a=2==o?"她":"他",s=n+"使用了【"+t+"】把老板拍飞了"+i+"米，你能超过"+a+"吗？",r="",l="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx4d715e6a90332dab&redirect_uri=http%3A%2F%2Fmkt4.chubaobeijing.cn%2FliftDeskM%2Findex.php&response_type=code&scope=snsapi_base&state=me#wechat_redirect";console.log(l),$.getJSON("//wx.chubao.cn/getwxconf?url="+c+"&callback=?",function(n){console.log("wx init over"),wx.config({debug:!1,appId:n.appId,timestamp:n.timestamp,nonceStr:n.nonceStr,signature:n.signature,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage"]}),wx.ready(function(){wx.onMenuShareTimeline({title:s,link:l,imgUrl:e,success:function(){_hmt.push(["_trackEvent","liftDesk","liftDeskShareToTimeline"])},cancel:function(){}}),wx.onMenuShareAppMessage({title:s,desc:r,link:l,imgUrl:e,type:"",dataUrl:"",success:function(){_hmt.push(["_trackEvent","liftDesk","liftDeskShareToFriends"])},cancel:function(){}})}),wx.error(function(e){})})}