function swapView (viewType) {
	switch(viewType){
		case 0: //1
			document.getElementById("menuBlock").style.display='none';
	        document.getElementById("single").style.display='block';
	        document.getElementById("choice").innerHTML="1";
	        break;
	    case 1: //2
	    	document.getElementById("menuBlock").style.display='none';
	        document.getElementById("single").style.display='block';
	        document.getElementById("choice").innerHTML="2";
	        break;
	    case 2: //3
	    	document.getElementById("menuBlock").style.display='none';
	        document.getElementById("single").style.display='block';
	        document.getElementById("choice").innerHTML="3";
	        break;
	    case 3: //5
	    	document.getElementById("menuBlock").style.display='none';
	        document.getElementById("single").style.display='block';
	        document.getElementById("choice").innerHTML="5";
	        break;
	    case 4: //8
	    	document.getElementById("menuBlock").style.display='none';
	        document.getElementById("single").style.display='block';
	        document.getElementById("choice").innerHTML="8";
	        break;
	    case 5: //13
	    	document.getElementById("menuBlock").style.display='none';
	        document.getElementById("single").style.display='block';
	        document.getElementById("choice").innerHTML="13";
	        break;
	    case 6: //21
	    	document.getElementById("menuBlock").style.display='none';
	        document.getElementById("single").style.display='block';
	        document.getElementById("choice").innerHTML="21";
	        break;
	    case 7: //infinite
	    	document.getElementById("menuBlock").style.display='none';
	        document.getElementById("single").style.display='block';
	        document.getElementById("choice").innerHTML='&#8734;';
	        break;
	    case 8: //?
	    	document.getElementById("menuBlock").style.display='none';
	        document.getElementById("single").style.display='block';
	        document.getElementById("choice").innerHTML="?";
	        break;
	    default: //menuBlock
	        document.getElementById("menuBlock").style.display='block';
	        document.getElementById("single").style.display='none';
	        break;
	}
	return;
}