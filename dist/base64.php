<?php
    header('Content-type:text/html;charset=utf-8');
	
    $openId = $_POST['openId'];
	$imgURL = ($_POST['imgURL']);
	$name = $_POST['name'];
	$mark = $_POST['mark'];
	$mysql_server_name='10.45.23.153'; 
 
	$mysql_username='liftDesk'; 
	 
	$mysql_password='liftDesk'; 
	 
	$mysql_database='liftDesk';  
	
	if( isset($openId) && isset($imgURL)  ){
		//echo $imgURL;
		$conn=mysql_connect($mysql_server_name,$mysql_username,$mysql_password) or die("error connecting") ; //连接数据库
		mysql_query("set names 'utf8'"); 
		mysql_select_db($mysql_database); 
	 
	    $sql = "insert into User_list  (Open_id, Name, Img_url) values ('$openId','$name', '$imgURL')";
	 
		$result = mysql_query($sql);

		//echo $result."ID of last inserted record is: " . mysql_insert_id($conn);
		$sql = "insert into Score( Open_id , Mark ) values ('$openId' , '$mark')";
		$result = mysql_query($sql);
		$me = mysql_insert_id($conn);
		if( $me == 0 ){
			$sql = "update  Score Set Mark = '$mark' where Open_id = '$openId'";
			$result = mysql_query($sql);
			echo 'succeed update';
		}
		else{
			echo 'succeed insert';
		}
		//echo $me ;
		
		mysql_close(); //关闭MySQL连接
		
	}

	else echo 'fail';
	
?>