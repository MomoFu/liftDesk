 
 var userinfo={
                id : openId,
                name: nickName,
                topscore: 0,
                imgurl : headImg ,
            };


function uploadRank(){
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
                     if (i += '<li class="rank' + (index + 1) + '">', i += '<span class="rank">' + (item.rownum) + "</span>", i += '<div class="pic">', i += '<img src="' + item.Img_url + '"  alt="">', i += "</div>", i += '<span class="name">' + Base64.decode(item.Name) + "</span>", i += '<span class="score">' + item.Mark + "m</span>", i += "</li>", item.Open_id == userinfo.id) {
                        userinfo.topscore = parseFloat(item.Mark) ;
                        var a = ''; 
                        a+= '<span class="rank">' + (item.rownum) + "</span>", a += '<div class="pic">', a += '<img src="' + item.Img_url + '"  alt="">', a += "</div>", a += '<span class="name">' + Base64.decode(item.Name) + "</span>", a += '<span class="score">' + item.Mark + "m</span>";
                        $("#rankpanel").find(".myrank").html(a) ;
                    }
                   
                 });
                console.log(i);
                $("#ranklist").find("ol").html(i)

                
               
                
                
            }       
            });
    
   
}

