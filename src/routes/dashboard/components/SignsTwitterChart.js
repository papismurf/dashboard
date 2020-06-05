import React from "react";
import Plot from "react-plotly.js";

const graphData = {
  z: [[5093, 5097, 5097, 6218, 6228, 6318],
    [4089, 4099, 4092, 5031, 5013, 5011],
    [1083, 1089, 1081, 1087, 1090, 1087],
    [1089, 1094, 1085, 1094, 1096, 1092],
    [1084, 1098, 1082, 1092, 1093, 1091],
    [2079, 2088, 2081, 2090, 2095, 2092],
    [1079, 1085, 1079, 1090, 2094, 2092],
    [2080, 2082, 2078, 2091, 2094, 2092],
    [2075, 2078, 2077, 2091, 2095, 2092],
    [2380, 3080, 3077, 3091, 3095, 3094],
    [3074, 3081, 3076, 3093, 3098, 3099],
    [3174, 3181, 3176, 3193, 3018, 3199],
    [4097, 4097, 4091, 5009, 5011, 5011],
    [5804, 5808, 5805, 5825, 5828, 5927],
    [5900, 5901, 6009, 6120, 6123, 6200],
    [4099, 4099, 5098, 6118, 6120, 6119],
    [5093, 5097, 5097, 6218, 6220, 6318]
  ],
  masterGraph: {
    title: "Key Market Breakdown by Number of Companies",
    xAxis: "",
    yAxis: "",
    zAxis: "Number of Companies"
  }
};

class SignsTwitterChart extends React.Component {
  render() {
    return (
      <Plot
        data={[
          {
            type: "surface",
            z: graphData.z
          }
        ]}
        layout={{
          width: 650,
          height: 475,
          margin: {
            l: 50,
            r: 50,
            b: 60,
            t: 90,
            pad: 4
          },
          title: graphData.masterGraph.title,
          annotations: [
            {
              text: graphData.masterGraph.model,
              font: {
                size: 14,
                color: "#444444"
              },
              showarrow: false,
              align: "center",
              x: 0.5,
              y: 1.1,
              xref: "paper",
              yref: "paper"
            }
          ],
          scene: {
            xaxis: {
              title: graphData.masterGraph.xAxis,
              titlefont: {
                family: "Courier New, monospace",
                size: 12,
                color: "#444444"
              }
            },
            yaxis: {
              title: graphData.masterGraph.yAxis,
              titlefont: {
                family: "Courier New, monospace",
                size: 12,
                color: "#444444"
              }
            },
            zaxis: {
              title: graphData.masterGraph.zAxis,
              titlefont: {
                family: "Courier New, monospace",
                size: 12,
                color: "#444444"
              }
            }
          }
        }}
      />
    );
  }
}

export default SignsTwitterChart;




/*
import React from 'react';
import axios from 'axios';
import Plotly from 'plotly.js'
import APIKit from "../../../providers/APIKit";

const url = APIKit.defaults.baseURL
const headers = APIKit.defaults.headers

const getTwitterData = axios.get(url + '/companies/twitter_deltas/', {headers: headers})
  .then( function(response) {
    console.log(response);
  }, (error) => {
    console.log(error);
});

const data = [{
  z: getTwitterData,
  type: 'surface'
}];

Plotly.d3.json(url, function(error, data) {
  if (error)
    return console.warn(error);
  const layout = {
    title: 'Twitter follower deltas over time',
    autosize: true,
    margin: {
      l: 65,
      r: 50,
      b: 65,
      t: 90,
    }
  }
})

const SignsOfLifeTwitter = () => (
  <div className="box box-default mb-3">
    <div className="box-header">Signs of Life Twitter</div>
    <div className="box-body">

    </div>
  </div>
)

export default SignsOfLifeTwitter;
*/
