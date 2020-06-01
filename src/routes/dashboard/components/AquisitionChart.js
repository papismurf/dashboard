import React from 'react';
import axios from 'axios';
import Plotly from 'plotly.js'
import APIKit from "../../../providers/APIKit";
import ReactEcharts from "echarts-for-react";

const url = APIKit.defaults.baseURL
const headers = APIKit.defaults.headers

const getTwitterData = axios.get(url + '/companies/twitter_deltas/', {headers: headers})
  .then(function(response) {
    resolve
  })


Plotly.d3.json(url, function(error, getTwitterData) {
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
    <div className="box-header">Polar Heatmap</div>
    <div className="box-body">

    </div>
  </div>
)

export default SignsOfLifeTwitter;
