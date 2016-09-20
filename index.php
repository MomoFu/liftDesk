<?php
    $auth ;$unionId= '' ; $sex= '' ; $headImg= '' ;  $nickname= ''; $openid = '';
    if( $_GET['code'] ){
        $auth = 'yes' ;
        $code =  $_GET['code'];
        $AppSecret = "803e483ee8bdc87f07e14aedc0232b8f";
        $AppId = "wx4d715e6a90332dab";
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
                $url =  "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx4d715e6a90332dab&redirect_uri=http%3A%2F%2Fmkt4.chubaobeijing.cn%2FliftDeskM%2Findex.php&response_type=code&scope=snsapi_userinfo&state=me#wechat_redirect" ;
                echo '<script>location.href="'.$url.'"</script>';
                //echo '<script>alert("err1")</script>';
          }
    }
    else{
        $url =  "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx4d715e6a90332dab&redirect_uri=http%3A%2F%2Fmkt4.chubaobeijing.cn%2FliftDeskM%2Findex.php&response_type=code&scope=snsapi_userinfo&state=me#wechat_redirect" ;
        //echo '<script>alert("err2")</script>';
        echo '<script>location.href="'.$url.'"</script>';
    }
    

//解析json  
         
    }

    else{
        print_r("no authorization from user");
    }
    
?>


<!DOCTYPE html>
<html lang="zh">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="user-scalable=no">
	<meta http-equiv="Pragma" content="no-cache"> 
	<title>掀桌子</title>
	<script src="js/hotcss.js"></script>
	<script src="js/sta.js"></script>
	<link href="css/reset.css" rel="stylesheet" type="text/css"/>
	<link href="css/index.css" rel="stylesheet" type="text/css"/>
	<link href="css/common.css" rel="stylesheet" type="text/css"/>
	<script>
		
		  var nickName = '<?php echo $nickname ;?>' ;
		  var openId = '<?php echo $openid ;?>' ;
		  var headImg = '<?php echo $headImg ;?>' ;
		    var sex = '<?php echo $sex ;?>' ;
		  var mark = 0 ;

	</script>
	<!--script src="https://jsconsole.com/js/remote.js?1d728edc-59fc-4cf3-9bc1-a6db232eb02d"></script-->
</head>
<body>
	<audio id="wordMusic" src="http://zhcn.web.cdn.cootekservice.com/s/liftDesk/music/word.mp3"></audio>
	<audio id="pageMusic" src="http://zhcn.web.cdn.cootekservice.com/s/liftDesk/music/page.mp3"></audio>
	<audio id="highMusic" src="http://zhcn.web.cdn.cootekservice.com/s/liftDesk/music/high.mp3"></audio>
	<audio id="sceneMusic" src="http://zhcn.web.cdn.cootekservice.com/s/liftDesk/music/1.mp3"></audio>
	<audio id="bgMusic" src="http://zhcn.web.cdn.cootekservice.com/s/liftDesk/music/bg.mp3"></audio>
	<div class="pageContainer" id="p1">
		<div class="objectContainer">
			<img src="http://zhcn.web.cdn.cootekservice.com/s/liftDesk/images/p1-bg.jpg" alt="">
			<div class="phoneContainer">
				<img src="http://zhcn.web.cdn.cootekservice.com/s/liftDesk/images/p1-bgzhezhao.png" alt="">
			</div>
			<div class="lightContainer">
				<img src="http://zhcn.web.cdn.cootekservice.com/s/liftDesk/images/p1-deng.png" alt="">
			</div>
		</div>
		<div class="boardContainer" id="board1">
			<img src="http://zhcn.web.cdn.cootekservice.com/s/liftDesk/images/bounced.png" alt="">
			<div class="wordsContainer">
				<div class="personContainer">
					<p>我</p>
				</div>
				<div class="textContainer">
					<p></p>
				</div>
				<div class="triangleContainer" id="tri">
					
				</div>
			</div>
		</div>
		<div class="skipContainer" id="skip">
			<p>跳过字幕</p>
		</div>
	</div>
	<div class="pageContainer" id="p2">
		<div class="objectContainer">
			<div id="videoClip">
				<img src="http://zhcn.web.cdn.cootekservice.com/s/liftDesk/images/p2-bg.jpg" alt="">
				<div class="smileContainer">
					<img src="http://zhcn.web.cdn.cootekservice.com/s/liftDesk/images/p2-bg-gif.gif" alt="">
				</div>
			</div>

			
			<div class="angerContainer">
				<div class="myPicContainer">
					<img id="myPic" src="http://zhcn.web.cdn.cootekservice.com/s/liftDesk/images/demo.png" alt="">
				</div>
				<div class="colorWrapper">
					<div class="tipsContainer">
						<p>愤怒值<span id="anger" style="float:right;">0/100</span></p>
					</div>
					<div class="colorContainer">
						<div class="colorPro" id="colorPro">
							
						</div>
					</div>
				</div>
				
				<div class="clear"></div>
			</div>
		</div>
		<div class="boardContainer" id="board2">
			<img src="http://zhcn.web.cdn.cootekservice.com/s/liftDesk/images/bounced.png" alt="">
			<div class="wordsContainer">
				<div class="personContainer">
					<p>我</p>
				</div>
				<div class="textContainer">
					<p></p>
				</div>
				<div class="triangleContainer" id="tri2">
					
				</div>
			</div>
		</div>
	</div>
	<div class="pageContainer" id="p3">
		<div class="tipsContainer">
			<p id="tips">长按“掀桌”<br>上下用力摇晃手机 松开看结果</p>
		</div>

		<div id="logContainer">
			<p id="log"></p>
		</div>
		<div class="gifContainer">
			<img id="shifan" src="http://zhcn.web.cdn.cootekservice.com/s/liftDesk/images/p3-shifan.gif" alt="">
			<div id="timeC" class="timeContainer">
				<h2 id="timeValue">00:00</h2>
			</div>
		</div>
		<div class="pushContainer" id="beginLift">
			
			<div  class="wordsContainer">
				<p>掀桌</p>
			</div>
		</div>
				
	</div>

	<div class="pageContainer" id="p4">
		<div class="resultContainer">
			<p><span id="desc">你［蜻蜓点水］地掀了掀桌子</span>，桌子被掀了<span id="meters">15</span>米。
全国排名多少位？<span id="checkRes">点击查看</span></p>
		</div>
		<div class="buttonGroupContainer">
			<div id="notEnough" class="buttonContainer">
				<p>不够，来点别的</p>
			</div>
			<div id="continue" class="buttonContainer">
				<p>继续掀桌子</p>
			</div>
		</div>
		<div class="rankContainer" id="rankAll">
			<img src="http://zhcn.web.cdn.cootekservice.com/s/liftDesk/images/paihang.png" alt="">
		</div>
	</div>

	<div class="pageContainer" id="p5">
		<div class="objectContainer">
			<img src="http://zhcn.web.cdn.cootekservice.com/s/liftDesk/images/p5-bg.jpg" alt="">
			<div class="contentContainer">
				<div class="titleContainer">
					<img src="http://zhcn.web.cdn.cootekservice.com/s/liftDesk/images/biaoti.png" alt="">
				</div>
				<div class="redContainer">
					<!--img src="http://zhcn.web.cdn.cootekservice.com/s/liftDesk/images/cai.gif" alt=""-->
				</div>
				<div class="buttonContainer" id="fetch">
					<p>领取红包</p>
				</div>
				<div class="buttonContainer" id="beat">
					<p>群殴老板</p>
				</div>
			</div>
			<div class="codeContainer">
				<div class="redContainer">
					<img src="http://zhcn.web.cdn.cootekservice.com/s/liftDesk/images/hongbao2.png" alt="">
				</div>
				<div id="returnGame" class="buttonContainer">
					<p>返回游戏</p>
				</div>
			</div>
			
			
		</div>
		<div class="bottomContainer">
			<div class="bannerContainer">
				<img src="http://zhcn.web.cdn.cootekservice.com/s/liftDesk/images/banner.jpg" alt="">
			</div>
		</div>

		<div class="maskContainer" id="mask">
			<div class="guideContainer">
				<img src="http://zhcn.web.cdn.cootekservice.com/s/liftDesk/images/chui.png" alt="">
			</div>
		</div>
		
	</div>

	<div class="pageContainer screenPanel screenRanks" id="rankpanel">
		
		    <div class="shd">
		       	<div class="btnBack" id="btnBack">
		       		<img src="http://zhcn.web.cdn.cootekservice.com/s/liftDesk/images/btn4.png" alt="">
		       	</div>
		        	<div class="item active allRanks">掀桌子英雄榜</div>
		    </div>
		    <div id="sbdContainer" class="sbdContainer">
		    	 <div class="sbd" id="meC">
				    <ol>
				   	 <li class="myrank"></li> 	
				    </ol>
			    </div>
			   
			    <div class="sbd" id="ranklist">
			        	<ol></ol>
			    </div>
		    </div>
		    
		<div class="bottomContainer">
			<div class="bannerContainer">
				<img src="http://zhcn.web.cdn.cootekservice.com/s/liftDesk/images/banner.jpg" alt="">
			</div>
		</div>
		
	</div>
	<script src="https://cdn.bootcss.com/jquery/3.1.0/jquery.min.js"></script>
	<script src="http://cdn.bootcss.com/fastclick/1.0.6/fastclick.min.js"></script>
	 <script type="text/javascript" src="js/jquery.wait.js"></script>
	 <script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js" type="text/javascript"></script>

	 <script  src="js/code.js"></script>
	 <script src="js/animateFrame.js"></script>
	<script src="js/wordsAppear.js"></script>
	<script src="js/text.js"></script>
	<script src="js/recorder.js"></script>
	<script src="js/controller.js"></script>
	<script src="js/timeShake.js"></script>
	<script src="js/upload.js"></script>
	<script src="js/rankapi.js"></script>
	<script src="js/videoPlay.js"></script>
	<script src="js/wx.js"></script>
	<script>
		$('#myPic').attr('src', headImg );
		initWX(headImg ,nickName , '排山倒海'  , fastest.toFixed(2) , sex);
	  	$(function() {
		    FastClick.attach(document.body);
		});

	   	document.body.addEventListener('touchmove', function (event) {
		    event.preventDefault();
		}, false);
	   	//window.ontouchstart = function(e) { e.preventDefault(); };
	   	_hmt.push(['_trackEvent', "liftDesk", "liftDeskIn"]);

		 var clicked = false ; var toNext = true ;
		function p1Click(e){
			e.stopPropagation();
			if( clicked == false ){   
				clicked = true ;
				console.log('click');
				    return ;
			}
			else{
			    if( toNext == true ){
			        	clicked = false ;
				console.log( p1Recorder.lastIndex + " "+p1Recorder.index);
				p1Controller(p1Recorder.lastIndex, p1Recorder.index );
					
				}
			 }
		}

		function p2Click(e){
			e.stopPropagation();
			if( clicked == false ){   
				clicked = true ;
				console.log('click');
				    return ;
			}
			else{
			    if( toNext == true ){
			        	clicked = false ;
				console.log( p2Recorder.lastIndex + " "+p2Recorder.index);
				p2Controller(p2Recorder.lastIndex, p2Recorder.index );
					
				}
			 }
		}


		var p1Recorder = new optionSceneRecorder(p1Text , $('#p1'), p1Controller  );
		var p2Recorder = new optionSceneRecorder(p2Text , $('#p2'), p2Controller  );
		$('#p1 .wordsContainer').on('click', p1Click);
		$('#p2 .wordsContainer').on('click', p2Click);
		console.log(p1Recorder.sceneText[p1Recorder.index]);
		 
		 var bgM = document.getElementById('bgMusic') ;
		 bgM.loop="loop";
		 bgM.play();
		 p1Controller(0,0 );

		
	</script>
	<script>
		
		
		document.getElementById('beginLift').ontouchstart=function(e){ 
			bgM.pause();
			document.getElementById('shifan').style.opacity = 0 ;
			document.getElementById('timeC').style.opacity = 1 ;
			
		    	timeStarter=window.setInterval(tip,10); 
		    	e.preventDefault();
			e.stopPropagation();
			console.log('start')
			//log('start')
			last_update =  new Date().getTime() ;
			if (window.DeviceMotionEvent) {
				window.addEventListener('devicemotion', deviceMotionHandler, false);
			} else {
		 		console.log('no support');
		 		_hmt.push(['_trackEvent', "liftDesk", "liftDeskNoSupport"]);
			}

		    	
		 
		   
		} 
		var texts = ['太轻了，再猛烈点！', '速度再快点！', '用力甩，大力出奇迹！','开重力传感器了么大哥'] ;
		document.getElementById('beginLift').ontouchend = function(e){

			e.preventDefault();
			e.stopPropagation();
			_hmt.push(['_trackEvent', "liftDesk", "liftDeskPressEnd"]);
				
			if (window.DeviceMotionEvent){
				window.removeEventListener('devicemotion', deviceMotionHandler);
		    		last_x == -10000 ;
		    		if( fastest < SHAKE_THRESHOLD ){
		    			var j = parseInt(Math.random()*3);
		    			log(texts[j]);
		    			_hmt.push(['_trackEvent', "liftDesk", "liftDeskPressLevel0"]);

		    		}
				else{
					if( fastest >= 5 && fastest < 10 ){
						$('#desc').text('你［蜻蜓点水］地掀了掀桌子');
						LoadMe(videoArr1);
						_hmt.push(['_trackEvent', "liftDesk", "liftDeskPressLevel1"]);
						sceneMusic.src = 'http://zhcn.web.cdn.cootekservice.com/s/liftDesk/music/1.mp3';
						setTimeout( 
							function(){
								sceneMusic.play();
								createVideo(videoArr1);
						},  300 );
						//$('#meters').text(fastest.toFixed(2) );
						initWX(headImg ,nickName , '蜻蜓点水'  , fastest.toFixed(2) , sex);
					}
					else if( fastest >= 10 && fastest < 15 ){
						//sceneMusic.src = 'music/2.mp3';
						$('#desc').text('你掀出了［兴风作浪］的气势');
						LoadMe(videoArr2);
						_hmt.push(['_trackEvent', "liftDesk", "liftDeskPressLevel2"]);
						//createVideo(videoArr4);
						sceneMusic.src = 'http://zhcn.web.cdn.cootekservice.com/s/liftDesk/music/2.mp3';
						setTimeout( 
							function(){
								sceneMusic.play();
								createVideo(videoArr2);
						},  300 );
						initWX(headImg ,nickName , '兴风作浪'  , fastest.toFixed(2) , sex);
						//$('#meters').text(fastest.toFixed(2) );
					}
					else if(  fastest >= 15 && fastest < 20 ){
						$('#desc').text('你［排山倒海］般掀起了桌子');
						//sceneMusic.src = 'music/3.mp3';
						LoadMe(videoArr3);
						_hmt.push(['_trackEvent', "liftDesk", "liftDeskPressLevel3"]);
						//createVideo(videoArr4);
						sceneMusic.src = 'http://zhcn.web.cdn.cootekservice.com/s/liftDesk/music/3.mp3';
						setTimeout( 
							function(){
								sceneMusic.play();
								createVideo(videoArr3);
						},  200 );
						initWX(headImg ,nickName , '排山倒海'  , fastest.toFixed(2) , sex);
					}
					else{
						$('#desc').text('你达成了【翻天覆地】掀桌，掀桌一技，再也无人可及你的洪荒之力');
						LoadMe(videoArr4);
						_hmt.push(['_trackEvent', "liftDesk", "liftDeskPressLevel4"]);
						//createVideo(videoArr4);
						sceneMusic.src = 'http://zhcn.web.cdn.cootekservice.com/s/liftDesk/music/4.mp3';
						setTimeout( 
							function(){
								sceneMusic.play();
								createVideo(videoArr4);
						},  300 );
						initWX(headImg ,nickName , '翻天覆地'  , fastest.toFixed(2) , sex);

					}
					$('#meters').text(fastest.toFixed(2) );
					mark = fastest.toFixed(2) ;
					uploadRank();

					$('#p3').css('display', 'none');
					$('#p2 .angerContainer').css('display', 'none');
					$('#p2 .boardContainer').css('display', 'none');
					//$('#p4').css('display', 'block');
					//log(fastest);
				}


			}
			else{
				$('#desc').text('你掀出了［兴风作浪］的气势');
				$('#meters').text('11.23' );
				$('#p3').css('display', 'none');
				$('#p4').css('display', 'block');
				initWX(headImg ,nickName , '兴风作浪'  , 11.23 , sex);
				_hmt.push(['_trackEvent', "liftDesk", "liftDeskPressLevelNoSupport"]);
			} 
		    		

		    	window.clearInterval(timeStarter); 
		    	seed = 0 ;
		    	document.getElementById('shifan').style.opacity = 1 ;
			document.getElementById('timeC').style.opacity = 0 ;

		}

		var myLog = document.getElementById('log');
		function log(msg){
			myLog.innerHTML = msg ; 
		}

		document.getElementById('continue').onclick = function(){
			fastest = -1 ;
			$('#p4').css('display', 'none');
			$('#p3').css('display', 'block');
			_hmt.push(['_trackEvent', "liftDesk", "liftDeskContinue"]);
		}

		document.getElementById('btnBack').onclick = function(){
			$('#rankpanel').removeClass('show');
			_hmt.push(['_trackEvent', "liftDesk", "liftDeskRankDown"]);
		}

		document.getElementById('fetch').onclick = function(){
			$('#p5 .contentContainer').addClass('moveOut');
			$('#p5 .codeContainer').addClass('moveUp');
			_hmt.push(['_trackEvent', "liftDesk", "liftDeskFetch"]);
		}

		document.getElementById('notEnough').onclick = function(){
			$('#p4').css('display', 'none');
			$('#p5').css('display', 'block');
			_hmt.push(['_trackEvent', "liftDesk", "liftDeskNotEnough"]);
		}

		document.getElementById('returnGame').onclick = function(){
			$('#p5').css('display', 'none');
			$('#p4').css('display', 'block');
			$('#p5 .contentContainer').removeClass('moveOut');
			$('#p5 .codeContainer').removeClass('moveUp');
			_hmt.push(['_trackEvent', "liftDesk", "liftDeskReturnGame"]);
		}

		document.getElementById('rankAll').onclick = function(){
			getallranks();
			//$('#rankpanel').css('display', 'block');
			$('#rankpanel').addClass('show');
			document.getElementById('sbdContainer').addEventListener('touchstart', function(e){
				//e.preventDefault();
				e.stopPropagation();
			})
			document.getElementById('sbdContainer').addEventListener('touchmove', function(e){
				e.stopPropagation();
			})
			_hmt.push(['_trackEvent', "liftDesk", "liftDeskRankShow"]);
		
		}
		document.getElementById('checkRes').onclick = function(){
			getallranks();
			//$('#rankpanel').css('display', 'block');
			$('#rankpanel').addClass('show');
			document.getElementById('sbdContainer').addEventListener('touchstart', function(e){
				//e.preventDefault();
				e.stopPropagation();
			})
			document.getElementById('sbdContainer').addEventListener('touchmove', function(e){
				e.stopPropagation();
			})
			_hmt.push(['_trackEvent', "liftDesk", "liftDeskCheckResult"]);
		}

		$('.bannerContainer').click(function(){
			_hmt.push(['_trackEvent', "liftDesk", "liftDeskBanner"]);
			window.location.href = 'http://www.chubao.cn/s/eventhall/index.html?v=liftDesk';
		})

		document.getElementById('skip').onclick = function(){
			$('#p3').css('display', 'block');
			$('#p2').css('display', 'block');
			$('.angerContainer').css('display', 'none');
			$('#board2').css('display', 'none');
			$('#p1').fadeOut(200);
			_hmt.push(['_trackEvent', "liftDesk", "liftDeskSkip"]);
		}

		document.getElementById('beat').onclick = function(){
			$('#mask').css('display', 'block');
			_hmt.push(['_trackEvent', "liftDesk", "liftDeskClickBeat"]);
		}

		document.getElementById('mask').onclick = function(){
			$('#mask').css('display', 'none');
			_hmt.push(['_trackEvent', "liftDesk", "liftDeskRemoveMask"]);
		}


		//uploadRank();
		getallranks();
	</script>



</body>
</html>