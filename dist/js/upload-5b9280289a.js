function uploadBase64Score(e,t){var o=t.openId||"",a=t.name||"",n=t.imgURL||"",s=t.mark||"",u=t.func,r=new XMLHttpRequest;r.onreadystatechange=function(){if(4==r.readyState&&200==r.status){var e=r.responseText;console.log("back TXT: "+e),u(e)}else 4==r.readyState&&200!==r.status&&alert("code:"+r.status)},r.ontimeout=function(){console.log("timeout")},r.upload&&(r.upload.onprogress=function(e){}),r.open("POST",e,!0),r.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),dataStr="imgURL="+n+"&name="+a+"&openId="+o+"&mark="+s,r.send(dataStr)}function uploadBase64Fetch(e,t){var o=t.openId,a=t.func,n=new XMLHttpRequest;n.onreadystatechange=function(){if(4==n.readyState&&200==n.status){var e=n.responseText;console.log("back TXT: "+e),a(e)}else 4==n.readyState&&200!==n.status&&alert("code:"+n.status)},n.ontimeout=function(){console.log("timeout")},n.upload&&(n.upload.onprogress=function(e){}),n.open("POST",e,!0),n.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),dataStr="open_id="+o,n.send(dataStr)}