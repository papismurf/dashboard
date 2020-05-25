import React, { Component } from "react";
import { Doughnut } from 'react-chartjs-2'
import { defaults } from 'react-chartjs-2';
import CHARTCONFIG from 'constants/chartConfig';

const backgroundColors = [
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
];

const data = {
  labels: ['Financial Markets', 'Financial Services', 'Blockchain Ecosystem', 'IT/Analytics',
            'Social Media', 'Marketing', 'Traditional Media ', 'Unknown'],
  datasets: [
    {
      label: 'Key Market Breakdown by Number Of Companies',
      backgroundColor: backgroundColors,
      borderColor: 'rgba(203, 212, 162, 1.0)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(203, 212, 162, 1.0)',
      data: [1820, 1072, 569, 539, 193, 271, 234, 204]
    }
  ]
};

export default class CompanyBreakdownChart extends React.Component {

  render() {
    return (
      <div>
        <Doughnut
          data={data}
          width={100}
          height={45}
          options={{
            maintainAspectRatio: true
          }}
        />
      </div>
    );
  }
};
