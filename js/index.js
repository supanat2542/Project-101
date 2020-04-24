$(function () {

    var url = "https://pomber.github.io/covid19/timeseries.json";

    $.getJSON(url, function (result) {

        var no = 1;
        var con = 0;
        var death = 0;
        var reco =0;
        var con1 = 0;
        var death1 = 0;
        var reco1 =0;
        for (var country in result) {
          var selectedCountry = result[country];
          console.log(selectedCountry);

            var row = `<tr>
                        <th scope="row">${no}</th>
                        <td>
                        <a href="country.html?country=${country}">${country}</a>
                        </td>
                    </tr>`;

            $("#data").append(row);
            con=con+selectedCountry[selectedCountry.length-1].confirmed;
            death=death+selectedCountry[selectedCountry.length-1].deaths;
            reco=reco+selectedCountry[selectedCountry.length-1].recovered;
            con1=con1+(selectedCountry[selectedCountry.length-1].confirmed-selectedCountry[selectedCountry.length-2].confirmed);
            death1=death1+(selectedCountry[selectedCountry.length-1].deaths-selectedCountry[selectedCountry.length-2].deaths);
            reco1=reco1+(selectedCountry[selectedCountry.length-1].recovered-selectedCountry[selectedCountry.length-2].recovered);
            
            no++;
          if(no==selectedCountry.length+1){

            

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

        

    });

    $(document).ready(function () {
        $('#dt-vertical-scroll').dataTable({
          "paging": false,
          "fnInitComplete": function () {
            var myCustomScrollbar = document.querySelector('#dt-vertical-scroll_wrapper .dataTables_scrollBody');
            var ps = new PerfectScrollbar(myCustomScrollbar);
          },
          "scrollY": 450,
        });
      });

      



})