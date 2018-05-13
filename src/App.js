import React, { Component } from 'react';
import Chart from './Chart'
import BarChart from './BarChart'
import data from './data'
import './App.css';

class App extends Component {
  state = {
    data:data
  }
  render() {
    return (
      <div>
        <div id="main">
      <div id="sequence"></div>
      <div id="chart">
        <div id="explanation" style={{"visibility": "hidden"}}>
          <span id="percentage"></span><br/>
          of visits begin with this sequence of pages
        </div>
          <Chart data={this.state.data} width={960} height={600}/>
      </div>
    </div>
    <div id="sidebar">
      <input type="checkbox" id="togglelegend"/> Legend<br/>
      <div id="legend" style={{"visibility": "hidden"}}></div>
    </div>

    <BarChart />
    </div>  

       
      
    );
  }
}

export default App;
