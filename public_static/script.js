$(function()
{

    k=0;
    while (k<10)
    {
        setTimeout(function (){
            main() // call of the function main
            updatetable() // call of the function updatetable
        }, 1000);
        k++;
    }

    function updatetable() // definition of the function updatetable
    {
        $.get('/sniff/ippack', function (IPData) {
            console.log(IPData);
            for (IP in IPData)
            {
                tbody = $('#iptable');
                var tString = "<tr><td>" + IPData.version + "</td>";
                tString += "<td>" + IPData.ip_hlen + "</td>";
                tString += "<td>" + IPData.ttl + "</td>";
                tString += "<td>" + IPData.protocol + "</td>";
                tString += "<td>" + IPData.source_address + "</td>";
                tString += "<td>" + IPData.destination_address + "</td></tr>";
                tbody.append(cartString);
            }
        });                  
    } // end of the function updatetable
    
	function main() // main function 
    {
        console.log("This script be running");

        setTimeout(function () {
            var bandwidth = [];

            function setBandwidth(bandwidthL)
            {
                bandwidth = bandwidthL;
            }
            $.get('/sniff/bandwidth', function (bandwidth)
            {
                setBandwidth(bandwidth); // call of the function datasets
                var bandwidthArray = [];
                var labelsArray = [0];

                for (var i = 0; i < bandwidth.length; i++) {
                    bandwidthArray.push(bandwidth[i].bandwidth);
                }

                for (var i = 0; i < bandwidth.length - 1; i++) {
                    labelsArray.push(i+1);
                }
                console.log("B Array", bandwidthArray);
                console.log("Labels", labelsArray);

                chartObj = new Chart(document.getElementById("line-chart"), {
                type: 'line',
                data: {
                    labels: labelsArray,
                    datasets: [
                        { 
                            data: bandwidthArray,
                            label: "Bandwidth (Mbps)",
                            borderColor: "#3e95cd",
                            fill: false
                        }
                    ]
                  }
                });
            });
        }, 1000);
    } // end of the main function
}); // end of the script file