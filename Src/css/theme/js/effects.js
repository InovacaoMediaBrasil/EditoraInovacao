$(window).load(function() {
		
		var doughnutChartData = [
				{
					value: 30,
					color:"#F7464A"
				},
				{
					value : 50,
					color : "#46BFBD"
				},
				{
					value : 100,
					color : "#FDB45C"
				},
				{
					value : 40,
					color : "#949FB1"
				},
				{
					value : 120,
					color : "#4D5360"
				}
			
		];
				
		var globalGraphSettings = {animation : Modernizr.canvas};
		
		showDoughnutChart();
		showDoughnutChart2();
		
		function showDoughnutChart(){
			var ctx = document.getElementById("doughnutChartCanvas").getContext("2d");
			new Chart(ctx).Doughnut(doughnutChartData,globalGraphSettings);
			ctx.fillStyle = "blue";
			ctx.font = "bold 16px Arial";
			ctx.fillText("Zibri", 100, 100);
		};
		function showDoughnutChart2(){
			var ctx = document.getElementById("doughnutChartCanvas2").getContext("2d");
			new Chart(ctx).Doughnut(doughnutChartData,globalGraphSettings);
		};
		
		
		$("#doughnutChart").on("inview",function(){
			showDoughnutChart();
		});
		
	});
	
