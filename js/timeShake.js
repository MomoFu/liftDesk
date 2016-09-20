var seed=0; 
var timeStarter ;
var timeValue = document.getElementById('timeValue');

function tip(){ 
	seed++; 
	var cur = (seed/100).toFixed(2) ;
	if( cur <= 10 ){
	 	timeValue.innerHTML = ('0'+cur).replace('.', ':');
	}
		 
	else{
		timeValue.innerHTML = (cur).replace('.', ':');
	} 
} 

var SHAKE_THRESHOLD = 5;
	//var last_update = 0;
	var x, y, z, last_x, last_y, last_z, fastest = -1 ;
	last_x = -10000 ;       
	function deviceMotionHandler(eventData) {
	  if( last_x == -10000 ){
	      var acceleration =eventData.accelerationIncludingGravity;
	       last_x = acceleration.x;
	      last_y =  acceleration.y;
	      last_z = acceleration.z;
	  }        
	  var acceleration =eventData.accelerationIncludingGravity;
	  var curTime = new Date().getTime();       
	  if ((curTime - last_update)> 300) {                
	      var diffTime = curTime -last_update;
	      last_update = curTime;       
	      x = acceleration.x;
	      y = acceleration.y;
	      z = acceleration.z;       
	      var speed = Math.sqrt( Math.pow(  Math.abs( y - last_y ) * diffTime /1000 , 2 ) +  Math.pow(  Math.abs( z - last_z ) * diffTime /1000 , 2 )  );   
	             console.log(speed) ;  //document.getElementById("current").innerHTML = speed;
	           if (speed > SHAKE_THRESHOLD) {
	                if( speed > fastest ){
	                	fastest = speed ;
	                	console.log(speed);
	                	//document.getElementById("dmEvent").innerHTML = speed;
	                }
	           }
	      last_x = x;
	      last_y = y;
	      last_z = z;
	    }
	}
