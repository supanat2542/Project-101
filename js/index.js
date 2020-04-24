$(function () {

    var url = "https://pomber.github.io/covid19/timeseries.json";

    $.getJSON(url, function (result) {

        var no = 1;
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
            no++;
          if(no==selectedCountry.length){
           var row1 = `<div >${selectedCountry[selectedCountry.length-1].confirmed}</div>`

           $("#confirmed").append(row1);

            var row2 = `<div >${selectedCountry[selectedCountry.length-1].deaths}</div>`

            $("#death").append(row2);

            var row3 = `<div >${selectedCountry[selectedCountry.length-1].recovered}</div>`

           $("#recovered").append(row3);
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