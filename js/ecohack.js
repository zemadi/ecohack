$(document).ready(function(){
	init();
});


function init() {
	var canvas = null;
	var context = null;

	// window.onload = function () {
		
		invokeService();
		loadGauge();
		canvas = document.getElementById("canvas");
		var context = canvas.getContext("2d");
          // alert(context);
          var myLine = new Chart(document.getElementById("canvas").getContext("2d")).PolarArea(data, {
          	scaleOverride : true,

            //** Required if scaleOverride is true **
            //Number - The number of steps in a hard coded scale
            scaleSteps : 5,
            //Number - The value jump in the hard coded scale
            scaleStepWidth : 1,
            //Number - The centre starting value
            scaleStartValue : 0,
            
            //Boolean - Show line for each value in the scale
            scaleShowLine : true,
            
            //String - The colour of the scale line
            scaleLineColor : "rgba(0,0,0,.1)",
            
            //Number - The width of the line - in pixels
            scaleLineWidth : 1,
            
            //Boolean - whether we should show text labels
            scaleShowLabels : true,
            
            //Interpolated JS string - can access value
            scaleLabel : "<%=value%>",
            
            //String - Scale label font declaration for the scale label
            scaleFontFamily : "'Arial'",
            
            //Number - Scale label font size in pixels  
            scaleFontSize : 16,
            
            //String - Scale label font weight style  
            scaleFontStyle : "normal",
            
            //String - Scale label font colour  
            scaleFontColor : "#666",
            
            //Boolean - Show a backdrop to the scale label
            scaleShowLabelBackdrop : true,
            
            //String - The colour of the label backdrop 
            scaleBackdropColor : "rgba(255,255,255,0.75)",
            
            //Number - The backdrop padding above & below the label in pixels
            scaleBackdropPaddingY : 2,
            
            //Number - The backdrop padding to the side of the label in pixels  
            scaleBackdropPaddingX : 2,

            //Boolean - Stroke a line around each segment in the chart
            segmentShowStroke : true,
            
            //String - The colour of the stroke on each segement.
            segmentStrokeColor : "#fff",
            
            //Number - The width of the stroke value in pixels  
            segmentStrokeWidth : 2
        });
// };

}

function invokeService() {
	data = [
	{
		value : 5,
		color: "#20545B"
	},
	{
		value : 5,
		color: "#F89907"
	},
	{
		value : 4,
		color: "#5c3e7f"
	},
	{
		value : 3,
		color: "#E01400"
	},
	{
		value : 4,
		color: "#F17522"
	}
	]
}


// window.onload = 

function loadGauge() {
	var g = new JustGage({
		id: "gauge", 
		value:22, 
		min: 0,
		max: 25,
		title: "Your climate risk score is:",
		startAnimationTime : 1500,
		titleFontColor: "black",
		valueFontColor: "black",
		labelFontColor: "black",
		// relativeGaugeSize: true,
	});
}