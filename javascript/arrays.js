//create an array
var colorList = ["Red", "Black", "White", "Blue", "Ocher", "Yellow", "Pink"];

//variables IN functions (function scope), can see global varibles)

var imageListA = new Array();
imageListA[0] = "images/drawing/thumbs/artwork_1.jpg";
imageListA[1] = "images/drawing/thumbs/artwork_2.jpg";
imageListA[2] = "images/drawing/thumbs/artwork_3.jpg";
imageListA[3] = "images/drawing/thumbs/artwork_4.jpg";
imageListA[4] = "images/drawing/thumbs/artwork_5.jpg";
imageListA[5] = "images/drawing/thumbs/artwork_6.jpg";
imageListA[6] = "images/drawing/thumbs/artwork_7.jpg";
imageListA[7] = "images/drawing/thumbs/artwork_8.jpg";
imageListA[8] = "images/drawing/thumbs/artwork_9.jpg";
imageListA[9] = "images/drawing/thumbs/artwork_10.jpg";
imageListA[10] = "images/drawing/thumbs/artwork_11.jpg";
imageListA[11] = "images/drawing/thumbs/artwork_12.jpg";
imageListA[12] = "images/drawing/thumbs/artwork_13.jpg";
imageListA[13] = "images/drawing/thumbs/artwork_14.jpg";
imageListA[14] = "images/drawing/thumbs/artwork_15.jpg";
imageListA[15] = "images/drawing/thumbs/artwork_16.jpg";
imageListA[16] = "images/drawing/thumbs/artwork_17.jpg";

//Oil color art
var imageListB = new Array();
imageListB[0] = "images/oil/thumbs/artwork_1.jpg";
imageListB[1] = "images/oil/thumbs/artwork_2.jpg";
imageListB[2] = "images/oil/thumbs/artwork_3.jpg";
imageListB[3] = "images/oil/thumbs/artwork_4.jpg";
imageListB[4] = "images/oil/thumbs/artwork_5.jpg";
imageListB[5] = "images/oil/thumbs/artwork_6.jpg";
imageListB[6] = "images/oil/thumbs/artwork_7.jpg";
imageListB[7] = "images/oil/thumbs/artwork_8.jpg";


//Water color art
var imageListC = new Array();
imageListC[0] = "images/watercolor/thumbs/artwork_1.jpg";
imageListC[1] = "images/watercolor/thumbs/artwork_2.jpg";
imageListC[2] = "images/watercolor/thumbs/artwork_3.jpg";
imageListC[3] = "images/watercolor/thumbs/artwork_4.jpg";
imageListC[4] = "images/watercolor/thumbs/artwork_5.jpg";
imageListC[5] = "images/watercolor/thumbs/artwork_6.jpg";
imageListC[6] = "images/watercolor/thumbs/artwork_7.jpg";
imageListC[7] = "images/watercolor/thumbs/artwork_8.jpg";
imageListC[8] = "images/watercolor/thumbs/artwork_9.jpg";
imageListC[9] = "images/watercolor/thumbs/artwork_10.jpg";

//Cupcakes
var imageListD = new Array();
imageListD[0] = "images/cupcakes/cupcake-1.jpg";
imageListD[1] = "images/cupcakes/cupcake-2.jpg";
imageListD[2] = "images/cupcakes/cupcake-3.jpg";
imageListD[3] = "images/cupcakes/cupcake-4.jpg";
imageListD[4] = "images/cupcakes/cupcake-5.jpg";
imageListD[5] = "images/cupcakes/cupcake-6.jpg";
imageListD[6] = "images/cupcakes/cupcake-7.jpg";
imageListD[7] = "images/cupcakes/cupcake-8.jpg";
imageListD[8] = "images/cupcakes/cupcake-9.jpg";
imageListD[9] = "images/cupcakes/cupcake-10.jpg";
imageListD[10] = "images/cupcakes/cupcake-11.jpg";
imageListD[11] = "images/cupcakes/cupcake-12.jpg";
imageListD[12] = "images/cupcakes/cupcake-13.jpg";
imageListD[13] = "images/cupcakes/cupcake-14.jpg";
imageListD[14] = "images/cupcakes/cupcake-15.jpg";
imageListD[15] = "images/cupcakes/cupcake-16.jpg";
imageListD[16] = "images/cupcakes/cupcake-17.jpg";
imageListD[17] = "images/cupcakes/cupcake-18.jpg";
imageListD[18] = "images/cupcakes/cupcake-19.jpg";
imageListD[19] = "images/cupcakes/cupcake-20.jpg";
imageListD[20] = "images/cupcakes/cupcake-21.jpg";
imageListD[21] = "images/cupcakes/cupcake-22.jpg";
imageListD[22] = "images/cupcakes/cupcake-23.jpg";
imageListD[23] = "images/cupcakes/cupcake-24.jpg";
imageListD[24] = "images/cupcakes/cupcake-25.jpg";
imageListD[25] = "images/cupcakes/cupcake-26.jpg";
imageListD[26] = "images/cupcakes/cupcake-27.jpg";
imageListD[27] = "images/cupcakes/cupcake-28.jpg";
imageListD[28] = "images/cupcakes/cupcake-29.jpg";
imageListD[29] = "images/cupcakes/cupcake-30.jpg";

//create the buildThumbnail function
function buildThumbnails() {
	//hook onto the thumbs div
	var thumbsDiv = document.getElementById("thumbs");
	
	//create an output variable
	var output = "";
	//first part: counter (we set up 0 to start counting the loop)
	//second part: condition, (the loop will keep looping as long as the condition is true)
	//third part: incrementor - adds one to the counter AFTER the code is executed in the brackets
	for(var i=0; i < imageListA.length; i++)
	{
		//concatenation assignment operator..
		output += '<img src="' + imageListA[i] + '" />';
	}
	
	for(var j=0; j < imageListB.length; j++)
	{
		//concatenation assignment operator..
		output += '<img src="' + imageListB[j] + '" />';
	}
// 	
	for(var k=0; k < imageListC.length; k++)
	{
		//concatenation assignment operator..
		output += '<img src="' + imageListC[k] + '" />';
	}
    for(var l=0; l < imageListD.length; l++)
    {
      output += '<img src="' +imageListD[l] + '" />';
    }
	thumbsDiv.innerHTML = output;
	// thumbsDiv.innerHTML = 
	// '<img src="' + imageList[0] + '" />' + 
	// '<img src="' + imageList[1] + '" />' +
	// '<img src="' + imageList[2] + '" />' +
	// '<img src="' + imageList[3] + '" />' +	
	// '<img src="' + imageList[4] + '" />'
	// ;
}





window.onload = function()
{
	buildThumbnails();//use or "fire off" this function
	//or invoke the function
};

