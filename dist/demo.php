<?php
    $auth ;$unionId= '' ; $sex= '' ; $headImg= '' ;  $nickname= ''; $openid = '';
    if( $_GET['code'] ){
        $auth = 'yes' ;
        $code =  $_GET['code'];
        $AppSecret = "35334f24654b12659279a252cd0969e2";
        $AppId = "wx46ec49d8e7a04a16";
        $state = $_GET['state'] ;
        //$tmp = explode("0%231%23", $state) ;
        //$real_url = $tmp[1];
        $ch = curl_init();

// 设置URL和相应的选项
curl_setopt($ch, CURLOPT_URL, "https://api.weixin.qq.com/sns/oauth2/access_token?appid=".$AppId."&secret=".$AppSecret."&code=".$code."&grant_type=authorization_code");
curl_setopt($ch, CURLOPT_HEADER, false);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
//curl_setopt($ch, CURLOPT_COOKIEFILE, $cookie_jar);


// 抓取URL并把它传递给浏览器
     $result = curl_exec($ch);
     $json_obj = json_decode($result,true);  
     //echo $result ;
     
    // echo strip_tags($result);
// 关闭cURL资源，并且释放系统资源
     curl_close($ch);
     if(array_key_exists('access_token', $json_obj)){
         $access_token = $json_obj['access_token'];  
          $openid = $json_obj['openid'];  

        //  $unionId = $user_obj['unionid'];
          //$scope = $user_obj['scope'];
          $get_user_info_url = 'https://api.weixin.qq.com/sns/userinfo?access_token='.$access_token.'&openid='.$openid.'&lang=zh_CN';  
                 $ch = curl_init();  
                 curl_setopt($ch,CURLOPT_URL,$get_user_info_url);  
                 curl_setopt($ch,CURLOPT_HEADER,0);  
                 curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1 );  
                 curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 10);  
                 $res = curl_exec($ch);  
                 curl_close($ch);  
                 $user_obj = json_decode($res,true); 
                 //print_r($user_obj);
                  if( $user_obj  and  array_key_exists('headimgurl', $user_obj) ){  

                    // $unionId = $user_obj['unionid'];
                     $sex = $user_obj['sex'];
                     $headImg = $user_obj['headimgurl'];
                     $nickname = $user_obj['nickname'];
                  }
          if( !isset($headImg) || $headImg =='' ){
                $url =  "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx46ec49d8e7a04a16&redirect_uri=http%3A%2F%2Fmkt4.chule.cc%2Fexperiment%2Findex.php&response_type=code&scope=snsapi_userinfo&state=me#wechat_redirect" ;
                echo '<script>location.href="'.$url.'"</script>';
                //echo '<script>alert("err1")</script>';
          }
    }
    else{
        $url =  "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx46ec49d8e7a04a16&redirect_uri=http%3A%2F%2Fmkt4.chule.cc%2Fexperiment%2Findex.php&response_type=code&scope=snsapi_userinfo&state=me#wechat_redirect" ;
        //echo '<script>alert("err2")</script>';
        echo '<script>location.href="'.$url.'"</script>';
    }
    

//解析json  
         
    }

    else{
        print_r("no authorization from user");
    }
    
?> <!DOCTYPE html><html lang="en" style="font-size:8.53px"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Touchpal Jump ----Thx to Ello</title><script>document.documentElement.style.fontSize=window.innerWidth/37.5+"px"</script><link rel="stylesheet" href="./files/common.css"><script src="./files/playcanvas-stable.min.js"></script><script src="./files/jquery.min.js"></script><script src="./files/code.js"></script><script src="./files/upload.js"></script><script src="./files/sta.js"></script><script>var CONFIG_FILENAME="config.json",CANVAS_ID="application-canvas",canvas,devices,app;SCENE_PATH="422768.json",CONTEXT_OPTIONS={alpha:!1,preserveDrawingBuffer:!1},pc.script.legacy=!0</script><style>body{background-color:#283538}#application-splash-wrapper{position:absolute;top:0;left:0;height:100%;width:100%;background-color:#283538}#application-splash{position:absolute;top:calc(50% - 28px);width:264px;left:calc(50% - 132px)}#application-splash img{width:100%}#progress-bar-container{margin:20px auto 0 auto;height:2px;width:100%;background-color:#1d292c}#progress-bar{width:0;height:100%;background-color:#fdd118}@media (max-width:480px){#application-splash{width:170px;left:calc(50% - 85px)}}@media screen and (min-aspect-ratio:1280/720){#application-canvas.fill-mode-KEEP_ASPECT{width:auto;height:100%;margin:0 auto}}</style><script src="./files/CameraFollow.js"></script><script src="./files/PlayerControl.js"></script><script src="./files/GameStateManager.js"></script><script src="./files/UIManager.js"></script><script src="./files/PathManager.js"></script><script src="./files/BoxControl.js"></script><script src="./files/ScaleAnim.js"></script></head><body ondblclick="return!1"><canvas id="application-canvas" tabindex="0" width="640" height="960" class="fill-mode-FILL_WINDOW"></canvas><div id="gamebox" style="height:100%"><div class="logo"><img src="./files/logo.png" alt="Logo"></div><div id="uistart"><i id="start" class="icon icon-play"></i></div><div id="uiend"><i id="loadscene" class="icon circle icon-restart"></i></div><ul class="buttons"><li class="btnGame"><a href="http://demo.ileou.com/Game"><i class="icon circle icon-game"></i><span>玩更多</span></a></li><li class="btnRank screenBtn" data-target=".screenRanks"><i class="icon circle icon-rank"></i><span>排行榜</span></li></ul><div class="result"><p id="rank1">您跳跃的层数</p><p id="score">0</p><p id="rank2"></p><p id="rank3"></p></div><div id="msgbox" class="tipsPanel tipsMsg"></div><div class="screenPanel screenRanks" id="rankpanel"><div class="shd"><div class="item active allRanks">全国排行</div></div><div class="sbd" id="ranklist"><ol></ol></div><div class="sclose"><i class="icon icon-close closebar"></i></div></div></div><script src="./files/__start__.js"></script><script src="./files/__loading__.js"></script><script src="./files/jweixin-1.0.0.js"></script><script src="./files/wxPost.js"></script><script>var nickName="<?php echo $nickname ;?>",openId="<?php echo $openid ;?>",headImg="<?php echo $headImg ;?>";_hmt.push(["_trackEvent","jump","jumpIn"])</script><script>function setGameoverShare(e){var o=parseInt($("#score").html());shareobj.title="JUMP！手残党慎入，我蹦跶了"+o+"下，你能超过我吗？",o>userinfo.topscore?(userinfo.topscore=o,shareobj.desc="我的天呐！我一不小心打破了自己的记录！",$("#rank2").html("我的天呐！<br>一不小心打破了自己的记录！")):$("#rank2").html("BEST: "+userinfo.topscore),console.log(shareobj),initWX(shareobj.title,shareobj.desc,userinfo.imgurl)}function appStartHandle(){console.log("star")}var userinfo={id:openId,name:nickName,topscore:0,imgurl:headImg},shareobj={title:"I jump, u jump! ",desc:"秒杀手残党的蹦蹦跳游戏，看看懵逼的你能蹦跶多少下。"},posturl=gameinfo.posturl</script><script src="./files/gameapi.js?v=2"></script></body></html>