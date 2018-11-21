const BASE_URL = "https://zagster-service.herokuapp.com"


const G5_TC = "/rides/count/g5"
const COL_TC = "/rides/count/columbia_simpson"
const DRAKE_TC = "/rides/count/drake_park"
const GALV_TC = "/rides/count/galveston"
const GRC_TC = "/rides/count/grc"
const OLD_TC = "/rides/count/old_mill"
const OSU_TC = "/rides/count/osu_cascades"
const TEN_TC = "/rides/count/ten_barrel"



$(updateView)

function updateView() {
  
    $.getJSON(BASE_URL + G5_TC, updateRideCount)
    $.getJSON(BASE_URL + G5_TC, printData)
}

function updateRideCount(data) {
    numberOfRides = data.count 
    $("h2#rideCount").html(numberOfRides)
}

function printData(data) {
    console.log(data)
}



 




/* Visualization JS- Source:"https://www.chartjs.org/docs/latest/charts/bar.html" */



            
  

        


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
