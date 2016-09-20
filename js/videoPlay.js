var video_que = [] ;
var sceneMusic = document.getElementById('sceneMusic');
var videoArr1 = {
		    src: "http://zhcn.web.cdn.cootekservice.com/s/liftDesk/qing/qing ",   //图片链接的前缀
		    amount: 78,     //图片张数
		    time: 3.0        //播放时长
		};
var videoArr2 = {
		    src: "http://zhcn.web.cdn.cootekservice.com/s/liftDesk/xing/xing ",   //图片链接的前缀
		    amount: 141,     //图片张数
		    time: 5.0        //播放时长
		};
var videoArr3 = {
		    src: "http://zhcn.web.cdn.cootekservice.com/s/liftDesk/pai/pai ",   //图片链接的前缀
		    amount: 141,     //图片张数
		    time: 5.0        //播放时长
		};

var videoArr4 = {
		    src: "http://zhcn.web.cdn.cootekservice.com/s/liftDesk/fan/fan ",   //图片链接的前缀
		    amount: 179,     //图片张数
		    time: 7.0        //播放时长
		};
function LoadMe( videoinfo ){
	for( var i = 1 ; i <= videoinfo.amount ; i++){
		var j = i ;
		if( videoinfo.amount < 100 ){
			if( j < 10 )
				j = '0' + j;
		}
		else{
			if( j < 10 )
				j = '00' + j ;
			else if( j < 100 )
				j =  '0'+ j ;
		}
		var img = new Image();
		img.onload = function(tmp){
			
			return function(){
				console.log( tmp );
				video_que[tmp] = this;
			}
			
		}(i);
		img.src = videoinfo.src+j+'.jpg';

	}
}

function createVideo(videoinfo) {
		   var show =  $('#videoClip');
		   console.log(videoinfo);
		    totalTime = videoinfo.time;
		    
		   
		    var __FRAME_RATE__ = 30;    //帧数
		    var __PERIOD__ = 1000 / __FRAME_RATE__;  //每隔多少秒播放一帧。这里我将源码中的1改为1000
		   
		        videoCu = sceneMusic.currentTime
		      
		//音频现在播放到哪里了
		        var pos = Math.floor((videoinfo.amount) * videoCu / totalTime)
		//计算该播放哪一张图了
				console.log(videoCu+' '+pos);
		        if(video_que[pos+1]){
		           show.html(video_que[pos+1])
		//把该展示的图片换成刚才那张图
		        }
		        if (videoCu >= totalTime) {
		          //  clearInterval(videT)
		           setTimeout(function() {
		                console.log('finished'+videoCu);
		                show.html(video_que[videoinfo.time])
		                $('#p4').css('display', 'block');
		              //  _hmt.push(['_trackEvent', "videoPlay", "videoPlayPlayFinished"]);
		            }, 100)

		        }

		        else{
		        	requestAnimationFrame(function(){
		        		createVideo(videoinfo);
		        	});
		        } 
		//        else timeout = setTimeout(function(){createVideo(videoinfo)}, 20);
		    
		}