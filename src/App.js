import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    // data provinsi disimpan di state.provinces
    this.state = {
      filter: "",
      provinces: [], //Set variabel array data dengan this.state yang akan di tampilkan
      kota: []
    };
  }

  componentDidMount() {
    // ajax call
    fetch("http://localhost:8000/api/all")
      .then(response => response.json())
      .then(json => {
        this.setState({
          provinces: json.data
        });
      });

    fetch("http://localhost:8000/api/allkota") //call data dri JSON
      .then(response => response.json())
      .then(json => {
        this.setState({
          kota: json.data
        });
      });
  }

  filter = () => {
    fetch("http://localhost:8000/api/get?filter=" + this.state.filter)
      .then(response => response.json())
      .then(json => {
        this.setState({
          provinces: json.data
        });
      });
  };

  onChangeText = event => {
    this.setState({
      filter: event.target.value
    });
  };

  renderProvinces(item, index) {
    return <li key={index}>{item.name}</li>;
  }

  renderKota(item, index) {
    return <li key={index}>{item.name}</li>;
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Naufal Mahfudz Ismail</h2>
        </div>
        <p className="App-intro">Filter</p>
        <input
          type="text"
          value={this.state.filter}
          onChange={this.onChangeText}
          style={{ marginBottom: 8 }}
        />
        <br />
        <button onClick={this.filter}>Saring</button>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "left"
          }}
        >
          <ol>{this.state.kota.map(this.renderKota)}</ol>
        </div>
      </div>
    );
  }
}

export default App;
