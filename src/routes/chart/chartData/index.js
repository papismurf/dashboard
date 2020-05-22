export const doughnutChartData = {
  type: 'doughnut',
  data: {
    labels: [],
    datasets: [{
      label: '# of Votes',
      data: [],
      backgroundColor: [
        'rgba(255, 99, 132, 1.0)',
        'rgba(54, 162, 235, 1.0)',
        'rgba(255, 206, 86, 1.0)',
        'rgba(75, 192, 192, 1.0)',
        'rgba(153, 102, 255, 1.0)',
        'rgba(255, 159, 64, 1.0)',
        'rgba(35, 169, 80, 1.0)',
        'rgba(67, 1, 49, 1.0)',
        'rgba(27, 151, 190, 1.0)',
        'rgba(117, 177, 169, 1.0)',
        'rgba(189, 79, 144, 1.0)',
        'rgba(149, 163, 17, 1.0)',
        'rgba(181, 29, 156, 1.0)',
        'rgba(13, 238, 134, 1.0)',
        'rgba(71, 16, 78, 1.0)',
        'rgba(234, 166, 65, 1.0)',
        'rgba(44, 190, 40, 1.0)',
        'rgba(217, 247, 134, 1.0)',
        'rgba(174, 119, 212, 1.0)',
        'rgba(91, 60, 241, 1.0)',
        'rgba(203, 212, 162, 1.0)',
        'rgba(189, 137, 23, 1.0)',
        'rgba(74, 7, 167, 1.0)',
        'rgba(115, 206, 128, 1.0)',
        'rgba(249, 75, 88, 1.0)'
      ]
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: 'Key Market breakdown'
    },
    scales: {
      yAxes: [{
      }]
    }

  }
};

export default doughnutChartData;
