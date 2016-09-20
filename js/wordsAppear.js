  var wordMusic  = document.getElementById('wordMusic');
var pageMusic  = document.getElementById('pageMusic');
var highMusic  = document.getElementById('highMusic');
    function beginWordsAppearOption(output, text ,index, fuc){  
		wordMusic.play();
		
        var locate = 0 ;		
		//var text = '李易峰，中国内地男演员、歌手、制片人。1987年5月4日出生于四川成都。2010年毕业于四川师范大学电影电视学院。2007年参加《加油好男儿》出道，同年12月发行首张EP《四叶草》。2009年发行首张个人专辑《小先生》。2010年主演电视剧《幸福一定强》和《幸福最晴天》，获2011年国剧盛典最佳新演员奖。2012年在《真爱谎言》中挑战扮演自闭症患者。2013年凭借电视剧《千金归来》获得乐视盛典最受欢迎男演员奖。2014年7月因电视剧《古剑奇谭》中“百里屠苏”一角而获得广泛关注；同年出演 ..';
		var obj = text.split("");
        		console.log(obj.length);
		
		output.on("myOwnEvent"+index, function(event, locate){
		   // console.log(locate);
            			if( clicked == true ){
			    console.log('stop');
				$(this).text(text);
				wordMusic.pause();
				pageMusic.play() ;
				output.off('myOwnEvent'+index);
			    output.off('startAdd'+index);
				fuc();
			}
			else{

			    if( locate < obj.length-1 ){
			    	   if( locate == 0 ){
			     		//highMusic.play() ;
			     	   }
			     	   else{
			     	   	//var tmp = wordMusic.cloneNode(true);
				   	//tmp.play() ;
				   	//wordMusic.pause();
				   	//wordMusic.play();
			     	   } 
				   locate++;
				   
				   $(this).append(obj[locate]).wait(100).trigger('myOwnEvent'+index,locate);
				}
				else{
				    wordMusic.pause();
				    output.off('myOwnEvent'+index);
			        output.off('startAdd'+index);
					fuc();
				}
			}
		});
		output.on('startAdd'+index, function(event){
			
				   $(this).append(obj[locate]).wait(100).trigger('myOwnEvent'+index,locate);
				
		})
		output.trigger('startAdd'+index);
	}
	
	function stopWordsAppearOption(output, index){
		output.off('myOwnEvent'+index);
	  	  output.off('startAdd'+index);
	}
	
	