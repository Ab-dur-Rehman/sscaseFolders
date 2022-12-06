//doughnut
// var ctxD = document.getElementById("doughnutChart").getContext('2d');
// var ctxD2 = document.getElementById("doughnutChart2").getContext('2d');
// var myLineChart = new Chart(ctxD, {
//   type: 'doughnut',
//   data: {
//     labels: ["Red", "Green"],
//     datasets: [{
//       data: [25, 75],
//       backgroundColor: ["#F7464A", "#46BFBD"],
//       hoverBackgroundColor: ["#FF5A5E", "#5AD3D1"]
//     }]
//   },
//   options: {
//   	responsive: true
//   }
// });

// var myLineChart2 = new Chart(ctxD2, {
//     type: 'doughnut',
//     data: {
//       labels: ["Red", "Green"],
//       datasets: [{
//         data: [25, 75],
//         backgroundColor: ["#F7464A", "#46BFBD"],
//         hoverBackgroundColor: ["#FF5A5E", "#5AD3D1"]
//       }]
//     },
//     options: {
//         responsive: true
//     }
//   });

$(".option-icon-right input:checkbox").change(function(){
    $(this).closest("li").toggleClass('selected', this.checked);
    $('li.selected .option-icon-right label span').text('On');
    $('li:not(.selected) .option-icon-right label span').text('Off');
});