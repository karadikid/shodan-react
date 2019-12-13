import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./Button";

//Sample Query from Postman
// https://api.shodan.io/shodan/host/search?key=6Ew4Z6p9kOwelROHLtOwn23ChCIoR0H1&query=port:1494,3389 org:"amazon web services"&facets=
let apiKey = "8qzxm9PWXNeoWPhhIxtDm3xMt4Uzxr1m";
let url = "https://api.shodan.io/shodan/host/search?key=";
let value = "port:3389 80";

class App extends Component {
  constructor() {
    super();
    this.state = {
      shodanArray: [],
      subsetArray: [],
    };
    this.buttonPress = this.buttonPress.bind(this);
  }

  buttonPress() {
    fetch(`${url}${apiKey}&query=${value}`)
      .then(res => res.json())
      .then(res => {
        console.log(res)
        this.setState({shodanArray: res.matches})
        console.log(this.state.shodanArray)
        this.state.createArray()
      })
  }

  createArray() {
    let i = 0;
    for (i=0; i<10; i++) {
      this.state.shodanArray.push(this.state.subsetArray)
      console.log(this.state.subsetArray)
    }
  }

  render() {
    //Most important lesson: Array of Objects [Key: value, key:value, key: value] or [ :value, :value, :value],
    //.map((arg1:item, arg2:index) => { key={index} item={item}})  ALWAYS

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="ShodanAPI">Welcome to KaradiShodan</h1>
        </header>
        <p className="App-intro"></p>
        <Button click={this.buttonPress} />
      </div>
    );
  }
}

export default App;
