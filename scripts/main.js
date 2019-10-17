Highcharts.chart('container1', {

    title: {
        text: 'Number of Violent Crimes in the U.S., 2006-2016'
    },

    subtitle: {
        text: 'Source: Federal Bureau of Investigation'
    },

    yAxis: {
        title: {
            text: 'Number of Violent Crimes'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2006
        }
    },

    series: [{
        name: 'Number of Violent Crimes',
        data: [299398484, 301621157, 304059724, 307006550, 309330219, 311587816, 313873685, 316497531, 318907401, 320896618, 323405935]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});

Highcharts.chart('container2', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Number and Types of Violent Crimes in Southern States, 2016'
    },
    xAxis: {
        categories: ['Alabama', 'Arkansas', 'Florida', 'Georgia', 'Louisiana']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Total number of crimes'
        }
    },
    legend: {
        reversed: true
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    series: [{
        name: 'Homicide',
        data: [407, 52, 1111, 682, 555]
    }, {
        name: 'Rape',
        data: [1916, 1053, 7598, 3509, 1816]
    }, {
        name: 'Aggravated Assault',
        data: [4687, 850, 20175, 12114, 5575]
    }, {
        name: 'Property Crimes',
        data: [18869, 4011, 59816, 24091, 18528]
    }]
});
