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
