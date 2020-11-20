var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri','Sat'],
        datasets: [{
            label: 'Website',
            data: [12, 19, 7, 5, 2, 1,10],
            backgroundColor: [
                'rgba(0, 0, 0, 0)'
            ],
            borderColor: [
                'rgba(239, 208, 233, 1)' // 선 색깔
               
            ],
            fill : false,
            pointRadius : 0,    // 각 지점에 포인트 주지 않음
        },
        {
            label: 'others',
            data: [1, 5, 4, 18, 21, 3,1],
            backgroundColor: [
                'rgba(0, 0, 0, 0)'
            ],
            borderColor: [
                'rgba(140, 99, 192, 1)'
               
            ],
            fill : false,
            pointRadius : 0,    // 각 지점에 포인트 주지 않음
        }]
        
    },
    options: {
        responsive: false ,
        
        scales: {
            xAxes: [{
                gridLines: {
                    display: false,
                },
                ticks: {
                    fontColor:'grey'
                   
                    
                 }
                
            }],
            yAxes: [{
                display: true,
                ticks: {
                   fontColor:'grey',
                   stepSize:10
                   
                }
            }],
            
        }
    }
});