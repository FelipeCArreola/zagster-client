const BASE_URL = "https://zagster-service.herokuapp.com"


const G5_TC = "/rides/count/g5"
const COL_TC = "/rides/count/columbia_simpson"
const DRAKE_TC = "/rides/count/drake_park"
const GALV_TC = "/rides/count/galveston"
const GRC_TC = "/rides/count/grc"
const OLD_TC = "/rides/count/old_mill"
const OSU_TC = "/rides/count/osu_cascades"
const TEN_TC = "/rides/count/ten_barrel"

var ChartData = [];


$(updateView)

function updateView() {

   $.when([
        ($.getJSON(BASE_URL + G5_TC, updateChartData00)), 
            
        ($.getJSON(BASE_URL + COL_TC, updateChartData01)), 
            
        ($.getJSON(BASE_URL + DRAKE_TC, updateChartData02)),
         
        ($.getJSON(BASE_URL + GALV_TC, updateChartData03)),
                    
        ($.getJSON(BASE_URL + GRC_TC, updateChartData04)),
    
        ($.getJSON(BASE_URL + OLD_TC, updateChartData05)),
               
        ($.getJSON(BASE_URL + OSU_TC, updateChartData06)),
           
        ($.getJSON(BASE_URL + TEN_TC, updateChartData07))
        
   ]).then(displayGraph);

}

function updateChartData00(data) {
    console.log(data);
ChartData.push(data.count)
}

function updateChartData01(data) {
    console.log(data);
ChartData.push(data.count)
}

function updateChartData02(data) {
    console.log(data);
ChartData.push(data.count)
}

function updateChartData03(data) {
    console.log(data);
ChartData.push(data.count)
}

function updateChartData04(data) {
    console.log(data);
ChartData.push(data.count)
}

function updateChartData05(data) {
    console.log(data);
ChartData.push(data.count)
}

function updateChartData06(data) {
    console.log(data);
ChartData.push(data.count)
}

function updateChartData07(data) {
    console.log(data);
ChartData.push(data.count)
}


/*
 Console log Strings 
function updateChartData00(data) {
	console.log(data)
}
function updateChartData01(data) {
	console.log(data)
}
function updateChartData02(data) {
	console.log(data)
}
function updateChartData03(data) {
	console.log(data)
}
function updateChartData04(data) {
	console.log(data)
}
function updateChartData05(data) {
	console.log(data)
}
function updateChartData06(data) {
	console.log(data)
}
function updateChartData07(data) {
	console.log(data)
}
function ChartData(data) {
	console.log(data)
}
*/

/* Visualization JS- Source:"https://www.chartjs.org/docs/latest/charts/bar.html" */


function displayGraph() {
var ctx = document.getElementById("myChart").getContext('2d')
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["G5", "Columbia/Simpson", "Drake Park", "Galveston", "GRC", "Old Mill", "OSU-Cascades", "Ten Barrel"],
        datasets: [{
            label: 'Total Count of Rides Per Station',
            data: ChartData,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(58,112,42,0.2)',
                'rgba(76,212,40,0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(54, 162, 217, 1)',
                'rgba(76,242,40,1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
      
      legend: {
            labels: {
                fontColor: 'white',
                fontSize: 15.5
            }
        },

      scales: {
            xAxes: [{gridLines: {
                      display: false ,
                      color: 'rgba(255,255,255, 0.8)'
                   },
                    ticks: {
                      fontColor: 'white',
                      fontSize: 14
                    }
            }]  ,

            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    fontColor: 'white',
                    fontSize: 14
                },
                gridLines: {
                      display: false ,
                      color: 'rgba(255,255,255, 0.8)'
                },  
            }]

        }
    }
  
});

}



/* Drop Down Function-Nav Bar  -----**Source**:https://www.w3schools.com/css/css_dropdowns.asp" */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it-----**Source**:https://www.w3schools.com/css/css_dropdowns.asp" //
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
  }
}
