$(function(){
    
    var urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams.get('country'));

    var country = urlParams.get('country');
    $("#country").html(country);

    var url = "https://pomber.github.io/covid19/timeseries.json";

    $.getJSON(url, function (result) {

        var selectedCountry = result[country];
        console.log(selectedCountry);
        var dataa = [];
        var con = 0;
        var death = 0;
        var reco =0;
        var con1 = 0;
        var death1 = 0;
        var reco1 =0;
        for(var i=0;i<selectedCountry.length;i++){
           
            var row = `<tr>
            <th class="text-white">${selectedCountry[i].date}</th>
            <td>${selectedCountry[i].confirmed}</td>
            <td>${selectedCountry[i].deaths}</td>
            <td>${selectedCountry[i].recovered}</td>
          </tr>`
        
          dataa.push({date:`${selectedCountry[i].date}`,value:`${selectedCountry[i].confirmed}`});
          $("#data").append(row);
          

          if(i==selectedCountry.length-1){

            con=selectedCountry[selectedCountry.length-1].confirmed;
            death=selectedCountry[selectedCountry.length-1].deaths;
            reco=selectedCountry[selectedCountry.length-1].recovered;
            con1=(selectedCountry[selectedCountry.length-1].confirmed-selectedCountry[selectedCountry.length-2].confirmed);
            death1=(selectedCountry[selectedCountry.length-1].deaths-selectedCountry[selectedCountry.length-2].deaths);
            reco1=(selectedCountry[selectedCountry.length-1].recovered-selectedCountry[selectedCountry.length-2].recovered);


            var row1 = `<div >${con}</div>`
 
            $("#confirmed").append(row1);
 
             var row2 = `<div >${death}</div>`
 
             $("#death").append(row2);
 
             var row3 = `<div >${reco}</div>`
 
            $("#recovered").append(row3);
 
            var row11 = `<div >${con1}</div>`
 
            $("#confirmed1").append(row11);
 
             var row22 = `<div >${death1}</div>`
 
             $("#death1").append(row22);
 
             var row33 = `<div >${reco1}</div>`
 
            $("#recovered1").append(row33);
 
 
           }
        }
        console.log(dataa)
        
         // Themes begin
      am4core.useTheme(am4themes_animated);
      // Themes end
      
      var chart = am4core.create("chartdiv", am4charts.XYChart);
      
      chart.data = dataa;
      
      // Create axes
      var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.minGridDistance = 60;
      
      var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      
      // Create series
      var series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.valueY = "value";
      series.dataFields.dateX = "date";
      series.tooltipText = "{value}"
      
      series.tooltip.pointerOrientation = "vertical";
      
      chart.cursor = new am4charts.XYCursor();
      chart.cursor.snapToSeries = series;
      chart.cursor.xAxis = dateAxis;
      
      //chart.scrollbarY = new am4core.Scrollbar();
      chart.scrollbarX = new am4core.Scrollbar();
      
    });

     
   
    



})
