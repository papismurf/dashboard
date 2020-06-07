import React from 'react';
import ReactEcharts from 'echarts-for-react';
import 'echarts/theme/macarons';
import CHARTCONFIG from 'constants/chartConfig';

let bar4 = {};

bar4.option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    data: ['Financial Markets', 'Financial Services', 'Blockchain Ecosystem', 'IT/Analytics', 'Traditional Media',
            'Social Media', 'Marketing', 'Healthcare'],
    textStyle: {
      color: CHARTCONFIG.color.text
    }
  },
  toolbox: {
    show: true,
    feature: {
      saveAsImage: {show: true, title: 'save'}
    }
  },
  calculable: true,
  xAxis: [
    {
      type: 'value',
      axisLabel: {
        textStyle: {
          color: CHARTCONFIG.color.text
        }
      },
      splitLine: {
        lineStyle: {
          color: CHARTCONFIG.color.splitLine
        }
      }
    }
  ],
  yAxis: [
    {
      type: 'category',
      data: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
      axisLabel: {
        textStyle: {
          color: CHARTCONFIG.color.text
        }
      },
      splitLine: {
        lineStyle: {
          color: CHARTCONFIG.color.splitLine
        }
      },
      splitArea: {
        show: true,
        areaStyle: {
          color: CHARTCONFIG.color.splitArea
        }
      }
    }
  ],
  series: [
    {
      name: 'Financial Markets',
      type: 'bar',
      stack: 'Sum',
      itemStyle: { normal: {label: {show: false, position: 'insideRight'}}},
      data: [0, 0, 9, 37, 36, 64, 297, 930, 434, 107]
    },
    {
      name: 'Financial Services',
      type: 'bar',
      stack: 'Sum',
      itemStyle: { normal: {label: {show: false, position: 'insideRight'}}},
      data: [0, 0, 9, 23, 50, 64, 193, 536, 197, 59]
    },
    {
      name: 'Blockchain Ecosystem',
      type: 'bar',
      stack: 'Sum',
      itemStyle: { normal: {label: {show: false, position: 'insideRight'}}},
      data: [0, 0, 0, 11, 17, 46, 132, 291, 114, 36]
    },
    {
      name: 'IT/Analytics',
      type: 'bar',
      stack: 'Sum',
      itemStyle: { normal: {label: {show: false, position: 'insideRight'}}},
      data: [0, 0, 0, 0, 9, 27, 84, 304, 127, 31]
    },
    {
      name: 'Traditional Media',
      type: 'bar',
      stack: 'Sum',
      itemStyle: { normal: {label: {show: false, position: 'insideRight'}}},
      data: [0, 0, 0, 3, 0, 15, 53, 164, 41, 8]
    },
    {
      name: 'Social Media',
      type: 'bar',
      stack: 'Sum',
      itemStyle: { normal: {label: {show: false, position: 'insideRight'}}},
      data: [0, 0, 0, 11, 5, 10, 42, 145, 32, 6]
    },
    {
      name: 'Marketing',
      type: 'bar',
      stack: 'Sum',
      itemStyle: { normal: {label: {show: false, position: 'insideRight'}}},
      data: [1, 0, 0, 0, 2, 1, 31, 125, 36, 11]
    },
    {
      name: 'Healthcare',
      type: 'bar',
      stack: 'Sum',
      itemStyle: { normal: {label: {show: false, position: 'insideRight'}}},
      data: [0, 0, 0, 0, 0, 5, 31, 120, 39, 9]
    },
  ]
};

const BarDataChart = () => (
  <div className="box box-default mb-4">
    <div className="box-header">Number of Companies Over Time</div>
    <div className="box-body">
      <ReactEcharts option={bar4.option} theme={"macarons"} />
    </div>
  </div>
)

export default BarDataChart;

