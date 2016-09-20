/**
	 * @method uploadBase64
	 * @description 64位图片上传，一般情况用于游戏记录中的事件
	 * @param  {[type]} json.openId 用户的openid
	 * @param  {[type]} json.name 用户的名字
	 * @param  {[type]} json.imgURL 用户头像的链接
	 * @param  {[type]} json.func 上传完成回调的函数
	 * @return {[type]}      [description]
	 */
	 
	 
	 //	var image= myCanvas.toDataURL("image/png");
	function uploadBase64Score(uploadUrl, json){
	   
	   var openId=json.openId||"";
	   var name=json.name||"";
	   var imgURL=json.imgURL||"";
	   var mark = json.mark||"";
	   var func = json.func;
	 
	   //开始执行上传操作
	   var httpR = new XMLHttpRequest;
	  
		httpR.onreadystatechange = function() {
			//上传完成后
			if (4 == httpR.readyState && 200 == httpR.status) {
				var a = httpR.responseText;
				console.log('back TXT: '+a);
				func(a);
			} else 4 == httpR.readyState && 200 !== httpR.status && (alert("code:" + httpR.status));
		};
		httpR.ontimeout = function() {
			console.log('timeout')
		};
		httpR.upload && (httpR.upload.onprogress = function(dataStr) {
		   //dataStr.lengthComputable && jQuery("#uploadBg64Tip").html("<p>图片上传中<span>" + Math.round(dataStr.loaded / dataStr.total * 100) + '%)</span></p>');
		}); 
		
		
		httpR.open("POST",uploadUrl,!0);
		httpR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		dataStr = "imgURL=" + (imgURL) + "&name=" + name+"&openId="+openId+ "&mark="+mark;
		//console.log(dataStr);
		httpR.send(dataStr);
	};
	
	
	function uploadBase64Fetch(uploadUrl, json){
	   
	   
	   var openId=json.openId;
	   var func = json.func;
	 
	   //开始执行上传操作
	   var httpR = new XMLHttpRequest;
	  
		httpR.onreadystatechange = function() {
			//上传完成后
			if (4 == httpR.readyState && 200 == httpR.status) {
				var a = httpR.responseText;
				console.log('back TXT: '+a);
				func(a);
			} else 4 == httpR.readyState && 200 !== httpR.status && (alert("code:" + httpR.status));
		};
		httpR.ontimeout = function() {
			console.log('timeout')
		};
		httpR.upload && (httpR.upload.onprogress = function(dataStr) {
		   //dataStr.lengthComputable && jQuery("#uploadBg64Tip").html("<p>图片上传中<span>" + Math.round(dataStr.loaded / dataStr.total * 100) + '%)</span></p>');
		}); 
		
		
		httpR.open("POST",uploadUrl,!0);
		httpR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		dataStr = "open_id=" + (openId) ;
		//console.log(dataStr);
		httpR.send(dataStr);
	};
	
	
	