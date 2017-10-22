$(function()
{
    // Need to call the bandwidth API and get the bandwidth details
	console.log("This script be running");
    new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
        labels: [0,1,2,3,4,5,6,7,8,9,10],
        datasets: [
            { 
                data: [86,114,106,106,107,111,133,221,783,2478,3634],
                label: "Africa",
                borderColor: "#3e95cd",
                fill: false
            },
            { 
                data: [282,350,411,502,635,809,947,1402,3700,5267,5220],
                label: "Asia",
                borderColor: "#8e5ea2",
                fill: false
            },
            { 
                data: [168,170,178,190,203,276,408,547,675,734,455],
                label: "Europe",
                borderColor: "#3cba9f",
                fill: false
            },
            { 
                data: [40,20,10,16,24,38,74,167,508,784,788],
                label: "Latin America",
                borderColor: "#e8c3b9",
                fill: false
            },  
            { 
                data: [6,3,2,2,7,26,82,172,312,433,444],
                label: "North America",
                borderColor: "#c45850",
                fill: false
            }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Bandwidth'
        }
      }
    });
}); // end of the script file