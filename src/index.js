import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import "./styles.css";

class App extends Component {
  state = {
    url: ""
  };

  async componentDidMount() {
    const resp = await axios.get(
      "https://api.giphy.com/v1/gifs/search?api_key=v9E9Mk5b3fTKoaQSA8t2NwCJS97SsQuz&q=cat&limit=1&offset=0&rating=G&lang=en"
    );
    console.log(resp.data.data[0].url);
  }

  render() {
    const { url } = this.state;
    return <div>Hello from Mike</div>;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
