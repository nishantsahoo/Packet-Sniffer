$(function()
{
    function updateIPtable() // definition of the function updatetable
    {
        $.get('/sniff/ippack', function (IPData) {
            tbody = $('#iptable');
            console.log(IPData.length);
            console.log("IP data: ", IPData);
            for (var i = 0; i < IPData.length; i++)
            {
                var tString = "<tr><td>" + IPData[i].version + "</td>";
                tString += "<td>" + IPData[i].ip_hlen + "</td>";
                tString += "<td>" + IPData[i].ttl + "</td>";
                tString += "<td>" + IPData[i].protocol + "</td>";
                tString += "<td>" + IPData[i].source_address + "</td>";
                tString += "<td>" + IPData[i].destination_address + "</td></tr>";
                tbody.append(tString);
            }
        });                  
    } // end of the function updatetable
    
	function main() // main function 
    {
        console.log("This script be running");

        setTimeout(function () {
            var bandwidth = [];

            function setBandwidth(bandwidthVal)
            {
                bandwidth = bandwidthVal;
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

    updateIPtable() // call of the function updateIPtable
    main() // call of the main function

}); // end of the script file