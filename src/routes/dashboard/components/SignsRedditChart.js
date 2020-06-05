import React from "react";
import Plot from "react-plotly.js";

const graphData = {
  z: [
    [1083, 1089, 1081, 1087, 109, 1087],
    [1089, 1094, 1085, 1094, 1096, 1092],
    [1084, 109, 1082, 1092, 1093, 1091],
    [1079, 1085, 1079, 109, 2094, 2092],
    [2079, 2088, 2081, 209, 2095, 2092],
    [208, 2082, 2078, 2091, 2094, 2092],
    [2075, 2078, 2077, 2091, 2095, 2092],
    [208, 308, 3077, 3091, 3095, 3094],
    [3074, 3081, 3076, 3093, 3098, 3099],
    [4089, 4099, 4092, 5031, 5013, 5011],
    [4097, 4097, 4091, 5009, 5011, 5011],
    [5804, 5808, 5805, 5825, 5828, 5927],
    [9, 5901, 9, 612, 6123, 612],
    [4099, 4099, 5098, 6118, 612, 6119],
    [5093, 5097, 5097, 6218, 622, 6318]
  ],
  masterGraph: {
    title: "Signs of Life",
    xAxis: "Github",
    yAxis: "Reddit",
    zAxis: "Twitter"
  }
};




class SignsRedditChart extends React.Component {
  render() {
    return (
      <Plot
        data={[
          {
            type: "surface",
            z: [graphData.z, graphData.z1, graphData.z2]
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
              text: '',
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

export default SignsRedditChart;
