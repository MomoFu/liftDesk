<?php
    header('Content-type:text/html;charset=utf-8');
	
	$open_id = $_POST['open_id'];
	
	$mysql_server_name='10.45.23.153'; 
 
	$mysql_username='liftDesk'; 
	 
	$mysql_password='liftDesk'; 
	 
	$mysql_database='liftDesk';  
	
	if( isset($open_id) ){
		//echo $imgURL;
		$conn=mysql_connect($mysql_server_name,$mysql_username,$mysql_password) or die("error connecting") ; //连接数据库
		mysql_query("set names 'utf8'"); 
		mysql_query("set character set 'utf8'");
		mysql_select_db($mysql_database); 
	 
	    $sql = "select * from (SELECT
    obj.Open_id , obj.Name, obj.Img_url,  obj.Mark,@rownum := @rownum + 1 AS rownum
FROM
    (
        SELECT
            Score.Open_id,
            Score.Mark,
            User_list.Name,
            User_list.Img_url 
        FROM
            Score LEFT JOIN User_list on Score.Open_id = User_list.Open_id 
        ORDER BY
            Mark DESC
    ) AS obj,
    (SELECT @rownum := 0) r ) as qq where qq.rownum <= 10 or qq.Open_id = '$open_id'";
	 
		$result = mysql_query($sql);
		/*
		while($row = mysql_fetch_array($result))
		{
		  echo $row['Name'] . " " . $row['Img_url']." ". $row['money'];
		  echo "<br />";
	    }
		*/
		$users=array(); 
        $i=0; 
        while($row=mysql_fetch_array($result,MYSQL_ASSOC)){ 
 
           
            $users[$i]=$row; 
            $i++; 
 
        }

        echo json_encode(array('dataList'=>$users )); 
		//echo $result."ID of last inserted record is: " . mysql_insert_id($conn);

		mysql_close(); //关闭MySQL连接
		
	}

	else echo 'fail';
	
?>