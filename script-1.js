google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawStuff);

function drawStuff() {
  var data = new google.visualization.arrayToDataTable([
    ['Borough', '2000 Rent', '2015 Rent'],
    ['Queens', '$762', '$1282'],
    ['Brooklyn', '$672', '$1283'],
    ['Manhattan', '$796', '$1611'],
    ['Staten Island', '$742', '$1208'],
    ['Bronx', '$620', '$1107']
  ]);

  var options = {
    width: 900,
    chart: {
      title: 'Median Gross NYC Rent by Room ',
      subtitle: 'Source: United States Census Bureau'
    },
    series: {
      0: { axis: 'distance' }, // Bind series 0 to an axis named 'distance'.
      1: { axis: 'brightness' } // Bind series 1 to an axis named 'brightness'.
    },
    axes: {
      y: {
        distance: {label: '2000 Rent by Dollars'}, // Left y-axis.
        brightness: {side: 'right', label: '2015 Rent by Dollars'} // Right y-axis.
      }
    }
  };

  var chart = new google.charts.Bar(document.getElementById('dual_y_div'));
  chart.draw(data, options);
};