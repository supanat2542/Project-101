$(function(){
    
    var urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams.get('country'));

    var country = urlParams.get('country');
    $("#country").html(country);

    var url = "https://pomber.github.io/covid19/timeseries.json";

    $.getJSON(url, function (result) {

        var selectedCountry = result[country];
        console.log(selectedCountry);

        for(var i=0;i<selectedCountry.length;i++){
           
            var row = `<tr>
            <th scope="row">${selectedCountry[i].date}</th>
            <td>${selectedCountry[i].confirmed}</td>
            <td>${selectedCountry[i].deaths}</td>
            <td>${selectedCountry[i].recovered}</td>
          </tr>`

          $("#data").append(row);

        }
        

    });



})
window.onload = function () {

    //Better to construct options first and then pass it as a parameter
    var options = {
        title: {
            text: "Spline Chart with Export as Image"
        },
        animationEnabled: true,
        exportEnabled: true,
        data: [
            {
                type: "spline", //change it to line, area, column, pie, etc
                dataPoints: [
                    // { label: "2017-08-09", y: 85.14 },
                    // { label: "2017-08-01", y: 85.83 },
                    // { label: "2017-08-04", y: 84.42 },
                    // { label: "2017-08-05", y: 84.97 },
                    // { label: "2017-08-06", y: 84.89 },
                    // { label: "2017-08-07", y: 84.78 },
                    // { label: "2017-08-08", y: 85.09 },
                    // { label: "2017-08-09", y: 85.14 },
                ]
            }
        ]
    };
    $("#chartContainer").CanvasJSChart(options);

}