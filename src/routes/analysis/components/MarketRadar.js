import React from 'react';
import ReactEcharts from 'echarts-for-react';
import 'echarts/theme/macarons';
import CHARTCONFIG from 'constants/chartConfig';

let radar3 = {};

radar3.option = {
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    x: 'center',
    data: ['BTC', 'ETH', 'USDT', 'XRP', 'LTC'],
    textStyle: {
      color: CHARTCONFIG.color.text
    }
  },
  radar: [
    {
      axisLine: {
        show: true,
        lineStyle: {
          // for both indicator and axisLine, bad, better seperate them
          color: '#b1b1b1'
        }
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(0,0,0,.1)'
        }
      },
      splitArea: {
        show: true,
        areaStyle: {
          color: CHARTCONFIG.color.splitArea
        }
      },
      indicator: [
        {text: 'Market Cap', max: 100},
        {text: 'Volume 24h', max: 100},
        {text: 'Supply', max: 100},
        {text: 'Price', max: 100}
      ],
      center: ['25%', '40%'],
      radius: 80
    },
    {
      axisLine: {
        show: true,
        lineStyle: {
          // for both indicator and axisLine, bad, better seperate them
          color: '#b1b1b1'
        }
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(0,0,0,.1)'
        }
      },
      splitArea: {
        show: true,
        areaStyle: {
          color: CHARTCONFIG.color.splitArea
        }
      },
      indicator: (function () {
        const res = [];
        for (let i = 1; i <= 100; i+=10) {
          res.push({text: `${i} %`, max: 100});
        }
        return res;
      }()),
      center: ['75%', '40%'],
      radius: 80
    }
  ],
  series: [
    {
      type: 'radar',
      tooltip: {
        trigger: 'item'
      },
      itemStyle: {normal: {areaStyle: {type: 'default'}}},
      data: [
        {
          value: [60, 73, 85, 40],
          name: 'BTC'
        },
        {
          value: [59, 68, 77, 35],
          name: 'ETH'
        },
        {
          value: [20, 50, 47, 43],
          name: 'LTC'
        },
        {
          value: [40, 40, 73, 85],
          name: 'XRP'
        }
      ]
    },
    {
      type: 'radar',
      radarIndex: 1,
      data: [
        {
          value: [60, 73, 85, 40],
          name: 'BTC'
        },
        {
          value: [85, 90, 90, 95, 95],
          name: 'ETH'
        },
        {
          value: [95, 80, 95, 90, 93],
          name: 'USDT'
        },
        {
          value: [20, 50, 47, 43],
          name: 'LTC'
        },
        {
          value: [40, 40, 73, 85],
          name: 'XRP'
        }
      ]
    },
    {
      type: 'radar',
      radarIndex: 2,
      itemStyle: {normal: {areaStyle: {type: 'default'}}},
      data: [
        {
          name: 'XRP',
          value: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3],
        },
        {
          name: 'LTC',
          value: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 35.6, 62.2, 32.6, 20.0, 6.4, 3.3]
        }
      ]
    }
  ]
};

const MarketRadar = () => (
  <div className="box box-default mb-4">
    <div className="box-header">Multiple Market Radar</div>
    <div className="box-body">
      <ReactEcharts option={radar3.option} theme={"macarons"} style={{height: '490px'}} />
    </div>
  </div>
)

export default MarketRadar;
