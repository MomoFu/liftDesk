function p1Controller(e,n){if(console.log(e+" "+n),n==-1)stopWordsAppearOption(p1Recorder.myContainer.find(".textContainer p"),e),_hmt.push(["_trackEvent","liftDesk","liftDeskP1Finish"]),$("#p1").fadeOut(200,function(){$("#p2").fadeIn(200),p2Recorder.renderPage(p2Recorder.index);var e=p2Recorder.figure,n=p2Recorder.currentContext;console.log("t"+n);var r=p2Recorder.myContainer.find(".wordsContainer");r.find(".textContainer p").text(""),r.find(".personContainer p").text(e),beginWordsAppearOption(r.find(".textContainer p"),n,0,function(){clicked=!0,$("#p2 .triangleContainer").css("display","block")})});else{p1Recorder.renderPage(n);var r=p1Recorder.currentContext,o=p1Recorder.figure;console.log("t"+r);var t=p1Recorder.myContainer.find(".wordsContainer");t.find(".textContainer p").text(""),t.find(".personContainer p").text(o),clicked=!1,stopWordsAppearOption(t.find(".textContainer p"),e),beginWordsAppearOption(t.find(".textContainer p"),r,n,function(){clicked=!0,$("#p1 .triangleContainer").css("display","block")})}}function p2Controller(e,n){if(console.log(e+" "+n),n==-1)console.log("finished"),$("#p3").fadeIn(200),_hmt.push(["_trackEvent","liftDesk","liftDeskP2Finish"]);else{console.log(e),p2Recorder.renderPage(n);var r=p2Recorder.currentContext,o=p2Recorder.figure;"我"==o&&(1==n?($("#colorPro").addClass("step1"),$("#anger").text("10/100")):3==n?($("#colorPro").removeClass("step1"),$("#colorPro").addClass("step2"),$("#anger").text("55/100")):5==n&&($("#colorPro").removeClass("step2"),$("#colorPro").addClass("step3"),$("#anger").text("100/100"))),console.log("t"+r);var t=p2Recorder.myContainer.find(".wordsContainer");t.find(".textContainer p").text(""),t.find(".personContainer p").text(o),clicked=!1,stopWordsAppearOption(t.find(".textContainer p"),e),beginWordsAppearOption(t.find(".textContainer p"),r,n,function(){clicked=!0,$("#p2 .triangleContainer").css("display","block")})}}