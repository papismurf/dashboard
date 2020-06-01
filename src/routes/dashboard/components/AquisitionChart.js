import React from 'react';
import Plotly from 'plotly.js'
import APIKit from "../../../providers/APIKit";

const url = APIKit

const data = axios.get()

Plotly.d3.json(url, function(error, data) {
  if (error)
    return console.warn(error);
  const layout = {
    title: ''
  }
})
