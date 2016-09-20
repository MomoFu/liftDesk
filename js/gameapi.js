var browser = {
    versions: function() {
        {
            var n = navigator.userAgent;
            navigator.appVersion
        }
        return {
            trident: n.indexOf("Trident") > -1,
            presto: n.indexOf("Presto") > -1,
            webKit: n.indexOf("AppleWebKit") > -1,
            gecko: n.indexOf("Gecko") > -1 && -1 == n.indexOf("KHTML"),
            mobile: !!n.match(/AppleWebKit.*Mobile.*/) || !!n.match(/AppleWebKit/),
            ios: !!n.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
            android: n.indexOf("Android") > -1 || n.indexOf("Linux") > -1,
            iPhone: n.indexOf("iPhone") > -1 || n.indexOf("Mac") > -1,
            iPad: n.indexOf("iPad") > -1,
            webApp: -1 == n.indexOf("Safari"),
            QQbrw: n.indexOf("MQQBrowser") > -1,
            ucLowEnd: n.indexOf("UCWEB7.") > -1,
            ucSpecial: n.indexOf("rv:1.2.3.4") > -1,
            ucweb: function() {
                try {
                    return parseFloat(n.match(/ucweb\d+\.\d+/gi).toString().match(/\d+\.\d+/).toString()) >= 8.2
                } catch (e) {
                    return n.indexOf("UC") > -1 ? !0 : !1
                }
            }(),
            Symbian: n.indexOf("Symbian") > -1,
            ucSB: n.indexOf("Firefox/1.") > -1
        }
    }()
};
var isloading = !1,
    frankstr = arankstr = "",
    getrankstime = 0,
    canHidePrompt=false;

function initHandle() {
    console.log("游戏加载完成"), $(".screenBtn").click(function() {
	$(".screenPanel").hide(), $($(this).data("target")).show()
       $("#rankpanel").show(), rankstoggle()
    }),  $(".closebar").click(function() {
         $("#rankpanel").hide()
         $("#infopage").hide()
         $('.ds_done-show').hide()
         $('.reward-list-container,.dsbg').show();
         $('.friendsRanks').addClass("current").siblings().removeClass("current");
    }), $(".tipsBtn").click(function() {
        $(".tipsPanel").hide(), $($(this).data("target")).show()
    }), $(".tipsPanel").click(function() {
        return $(this).find(".tclose").length ? !1 : ($(this).hide(), void 0)
    }), $(".tclose").click(function() {
        $(this).parents(".tipsPanel").hide()
    }), $(".itemOptimize label").click(function() {
        return browser.versions.ios ? !1 : ($(this).toggleClass("active"), $(this).hasClass("active") ? ($(this).html("开启"), app.graphicsDevice.maxPixelRatio = 1) : ($(this).html("关闭"), app.graphicsDevice.maxPixelRatio = window.devicePixelRatio), void 0)
    }), $(".itemMusic label").click(function() {
        var n = app.root.findByName("player");
        $(this).toggleClass("active"), $(this).hasClass("active") ? ($(this).html("开启"), n.sound.volume = 1) : ($(this).html("关闭"), n.sound.volume = 0)
    }), 0 != userinfo.id && ($(".btnRank").click(function() {
        console.log('click rank');
    }), rankstoggle(), "function" == typeof appInitHandle && appInitHandle())
    $('.btnShang').click(function(){
        $("#infopage").show()
       // getDashang()
    })

    $('.ds_done-show').click(function(){
        $(this).hide();
        $('.reward-list-container,.dsbg').show();
    })

    $('#reward').click(function(){
     //   location.href=baseUrl+"/Pay/Order/index/gameid/"+gameid;
    })

    $('.btnGame a').click(function(event){
        event.preventDefault();
         _hmt.push(['_trackEvent', "jump", "jumpToGameHall"]);
        window.location.href="http://www.chubao.cn/s/eventhall/index.html?v=jump";
    })

    getallranks();
   
   // payEvent();
    $('body>div').css('height','100%');

    if(typeof(appInitHandle) == "function") appInitHandle();

    $('.tip_img_box').click(function (){
        if(canHidePrompt){
            $('.tip_img_box').hide();
        }
        
    });
}

var gs=0;

function beginHandle() {
    console.log("进入游戏"), 
    $(".buttons").hide(), 
    $("#uistart,.logo,.buttons").hide(), 
    $(".result").show(),
    $("body").addClass("playing").removeClass("init"),
    gameStartTimestamp(),
    "function" == typeof appBeginHandle && appBeginHandle()
}

function startHandle() {
    console.log("游戏开始"), $("body").addClass("playing"), $("#score").html("0"),gameStartTimestamp(), "function" == typeof appStartHandle && appStartHandle();
}

function gameStartTimestamp(origin){
    
}

function gameover(n) {
    uploadRank(n.score);
    console.log("游戏结束"), console.log(n), $("body").removeClass("playing"), $(".buttons").addClass("ended"), $("#uiend,.buttons").show(), setGameoverShare(n);
    $('#score').show();
    
  }

function resetHandle() {
    console.log("游戏重新加载"), $(".buttons").removeClass("ended"),$("body").addClass("playing"),gameStartTimestamp(3), $("#uistart,#uiend,.logo,.buttons").hide(), "function" == typeof appResetHandle && appResetHandle()
}
var haoyouIndex=0;
var quanguoIndex=0;



function showmsg(n) {
    $("#msgbox").length ? ($("#msgbox").show().append("<div class='item'>" + n + "</div>"), setTimeout(function() {
        $("#msgbox .item:first").remove(), $("#msgbox .item").length < 1 && $("#msgbox").hide()
    }, 3e3)) : alert(n)
}

function fillRanks(n) {
    for (var e = n.length, i = "", s = 0; e > s; s++)
        if (i += '<li class="rank' + (s + 1) + '">', i += '<span class="rank">' + (s + 1) + "</span>", i += '<div class="pic">', i += '<img src="' + n[s].userinfo.headimgurl + '"  alt="">', i += "</div>", i += '<span class="name">' + n[s].userinfo.nickname + "</span>", i += '<span class="score">' + n[s].topscore + "</span>", i += "</li>", n[s].wxuser_id == userinfo.id) {
            var a = "";
            if(!haoyouIndex){
                haoyouIndex=(s + 1);
            }
            a += '<span class="rank">' + (s + 1) + "</span>", a += '<div class="pic">', a += '<img src="' + n[s].userinfo.headimgurl + '"  alt="">', a += "</div>", a += '<span class="name">' + n[s].userinfo.nickname + "</span>", a += '<span class="score">' + n[s].topscore + "</span>", $("#rankpanel").find(".myrank").html(a)
        }
    return $("#rankpanel").find("ol").html(i), i
}

function uploadRank(mark){
    console.log('ready');
    var uploadUrl="base64.php";
        var uu = Base64.encodeURI(userinfo.name);
        if( userinfo.id && mark > userinfo.topscore ){
            uploadBase64Score(uploadUrl,{openId:userinfo.id,name:uu,imgURL:userinfo.imgurl, mark:mark,  func:function(a){ 
                                   console.log(a);
                                }       
            }); 
        }
}


function getallranks() {
     var uploadUrl1="fetch.php";
            uploadBase64Fetch(uploadUrl1,{openId:userinfo.id,func:function(a){   
                var obj = JSON.parse(a);
                console.log(obj);
                var i = "" ;
                 $.each( obj.dataList, function (index, item) {
                    console.log('my openid is '+item.Open_id);
                    console.log('my Mark is '+item.Mark);
                    console.log('my rank is '+item.rownum);
                     if (i += '<li class="rank' + (index + 1) + '">', i += '<span class="rank">' + (item.rownum) + "</span>", i += '<div class="pic">', i += '<img src="' + item.Img_url + '"  alt="">', i += "</div>", i += '<span class="name">' + Base64.decode(item.Name) + "</span>", i += '<span class="score">' + item.Mark + "</span>", i += "</li>", item.Open_id == userinfo.id) {
                        var a = "";
                       
                        a += '<span class="rank">' + (item.rownum) + "</span>", a += '<div class="pic">', a += '<img src="' + item.Img_url + '"  alt="">', a += "</div>", a += '<span class="name">' + Base64.decode(item.Name) + "</span>", a += '<span class="score">' + item.Mark + "</span>", $("#rankpanel").find(".myrank").html(a)
                    }
                    if(item.Open_id == userinfo.id){
                        userinfo.topscore = parseInt(item.Mark)  ;
                    }
                 });
                console.log(i);
                $("#rankpanel").find("ol").html(i)

                
               
                
                
            }       
            });
    
   
}

function rankstoggle() {
    console.log('wee');
    getallranks();
     _hmt.push(['_trackEvent', "jump", "jumpCheckBoard"]);
    //here we should use the ajax to fetch the result ;
}


function hideMask() {
    $('.share_mask').hide();
}

function getHaoyouNum(num){
    $('#myf_num').text(num);
}

function hideHaoyou(){
    $('.sort_letter').hide();
}
function showHaoyou(){
    $('.sort_letter').show();
}
function showMask() {
    $('.share_mask').show();
}

function showLoadding() {
    $('.loadding_box').show();
}

function hideLoadding() {
    $('.loadding_box').hide();
}

var payCount=0;
var isPaying=false;




// function callpay()
// {
//     if (typeof WeixinJSBridge == "undefined"){
//         alert('nul');
//         if( document.addEventListener ){
//             document.addEventListener('WeixinJSBridgeReady', jsApiCall, false);
//         }else if (document.attachEvent){
//             document.attachEvent('WeixinJSBridgeReady', jsApiCall);
//             document.attachEvent('onWeixinJSBridgeReady', jsApiCall);
//         }
//     }else{
//         jsApiCall();
//     }
// }


var hasRequestDashang=false;

 window.onresize = function() {
    if( window.innerHeight < window.innerWidth ) {  
        if(window.isPrompt){
            $('.tip_img_box,.show_hengping').show();
        }else{
             $('.tip_img_box,.show_shuping').show();
        }
        canHidePrompt=false;
    }else{
        canHidePrompt=true;
    }
};
