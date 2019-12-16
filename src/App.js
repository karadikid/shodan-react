import React, { Component } from "react";
import styled from 'styled-components';
import logo from "./logo.svg";
import "./App.css";
import Button from "./Button";
import View from './View'
import jsonResponse  from './data.json';

//Sample Query from Postman
// https://api.shodan.io/shodan/host/search?key=6Ew4Z6p9kOwelROHLtOwn23ChCIoR0H1&query=port:1494,3389 org:"amazon web services"&facets=
let apiKey = "QUZknBxrUl1MpiXDoR3OLOCEI1eX5hSv";
let url = "https://api.shodan.io/shodan/host/search?key=";
let value = "port:3389 80";

class App extends Component {
  constructor() {
    super();
    this.state = {
      shodanArray: [],
      subsetArray: [],
      count: 0
    };
    this.fetchResults = this.fetchResults.bind(this);
    this.previousMap = this.previousMap.bind(this);
    this.nextMap = this.nextMap.bind(this);
  }

  fetchResults() {
        this.setState(this.state.shodanArray = jsonResponse)
        // console.log(res)
        // this.setState({shodanArray : res})
        // console.log(this.state.shodanArray)
        this.createArray()
  }

  // fetchResults() {
  //   fetch(`${url}${apiKey}&query=${value}`)
  //     .then(res => res.json())
  //     .then(res => {
  //       console.log(res)
  //       this.setState({shodanArray: res.matches})
  //       console.log(this.state.shodanArray)
  //       this.setState({shodanArray: res.matches})
  //       this.createArray();
  //     })
  // }

  createArray() {
    let i = 0;
    for (i=0; i<10; i++) {
      this.state.subsetArray.push(this.state.shodanArray[i])
    }
  }

  previousMap(){
    //This rotates backwards through the 0-9 data elements already rendered
    if (this.state.count > 0) {
      this.setState(preState => {return {count: preState.count-1}})
    } else {
      console.log("Beginning of Maps")
    }
  }

  nextMap(){
    //This advances forward through the 0-9 data elements then callsback for more
    if (this.state.count < 9) {
      this.setState(preState => ({count: preState.count+1}))
    } else {
      console.log("End of Maps - Reiterate")
    }
  }

  render() {
    // console.log(jsonResponse)
    let count = this.state.count;
    let items = this.state.subsetArray[count];

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="ShodanAPI">Welcome to KaradiShodan</h1>
        </header>
        <p className="App-intro"></p>
        <Button click={this.fetchResults} />
        <View click={this.previousMap} 
        otherClick={this.nextMap} 
        subsetKey={this.state.subsetArray}
        count={this.state.count}/>
      </div>
    );
  }
}

export default App;
