

function optionSceneRecorder(sceneText, myContainer , nextSceneController){
    this.lastIndex = 0 ;
    this.index = 0 ;
	this.myContainer = myContainer ;
    this.sceneText = sceneText;

	this.currentContext ;
	this.figure ;
	this.hasOption = false ;
	this.nextSceneController = nextSceneController;
	this.renderPage = function(index){
		this.myContainer.find('.triangleContainer').css('display', 'none');
		this.hasOption = false ;
		var obj = JSON.parse(this.sceneText[index]);
		
		this.figure  = obj.f ;
		this.currentContext = obj.t;
		
		
		this.lastIndex = index ;
		if( index  == this.sceneText.length-1 )
			this.index = -1 ;
		else 
			
			this.index ++  ;
			//console.log('last Scene'+this.index);
		
		
		//console.log('next'+obj.next);
	}
	
}