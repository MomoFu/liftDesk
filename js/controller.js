


function p1Controller( index, nextIndex ){
	console.log( index + " " + nextIndex  );
	
	if( nextIndex == -1 ){
		 stopWordsAppearOption(p1Recorder.myContainer.find(".textContainer p"), index);
		 _hmt.push(['_trackEvent', "liftDesk", "liftDeskP1Finish"]);
		$('#p1').fadeOut( 200, function(){
						 
			 $('#p2').fadeIn(200);
			 p2Recorder.renderPage(p2Recorder.index);
			var figure  = p2Recorder.figure ;
			 var text = p2Recorder.currentContext;
			 console.log('t'+text);
			 var vv = p2Recorder.myContainer.find('.wordsContainer');
			 vv.find('.textContainer p').text('');
			  vv.find('.personContainer p').text(figure);				 
			 beginWordsAppearOption(vv.find('.textContainer p'),text, 0,function(){clicked = true ;  $('#p2 .triangleContainer').css('display', 'block');});
		} )
	}
	else{
		
		 p1Recorder.renderPage(nextIndex);
		 var text = p1Recorder.currentContext;
		 var figure  = p1Recorder.figure ;
		 console.log('t'+text);
		 var vv = p1Recorder.myContainer.find('.wordsContainer');
		 vv.find('.textContainer p').text('');
		  vv.find('.personContainer p').text(figure);
		 clicked = false ;
		 stopWordsAppearOption(vv.find('.textContainer p'), index);
		 beginWordsAppearOption(vv.find('.textContainer p'),text, nextIndex, function(){clicked = true ; $('#p1 .triangleContainer').css('display', 'block'); });
		
	}
	
}

function p2Controller( index, nextIndex ){
	console.log( index + " " + nextIndex  );
	
	if( nextIndex == -1 ){
		console.log('finished');
		$('#p3').fadeIn(200);
		_hmt.push(['_trackEvent', "liftDesk", "liftDeskP2Finish"]);
		//LoadMe(videoArr4);
	}
	else{
		console.log(index);
		 p2Recorder.renderPage(nextIndex);
		 var text = p2Recorder.currentContext;
		 var figure  = p2Recorder.figure ;
		 if(figure == "我"){
		 		if(nextIndex == 1){
		 			$('#colorPro').addClass('step1');
		 			$('#anger').text('10/100');
		 		}
			 	else if( nextIndex == 3  ){
			 		$('#colorPro').removeClass('step1');
			 		$('#colorPro').addClass('step2');
			 		$('#anger').text('55/100');
			 	}
			 	else if( nextIndex == 5 ){
			 		$('#colorPro').removeClass('step2');
			 		$('#colorPro').addClass('step3');
			 		$('#anger').text('100/100');
			 	}
		 }
		 console.log('t'+text);
		 var vv = p2Recorder.myContainer.find('.wordsContainer');
		 vv.find('.textContainer p').text('');
		  vv.find('.personContainer p').text(figure);
		 clicked = false ;
		 stopWordsAppearOption(vv.find('.textContainer p'), index);
		 beginWordsAppearOption(vv.find('.textContainer p'),text, nextIndex, function(){
		 	clicked = true ; 
		 	$('#p2 .triangleContainer').css('display', 'block');
	
		 });
		 	
		
	}
	
}
