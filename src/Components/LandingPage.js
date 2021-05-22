import React, { Component } from "react";
import News from "./News";

class LandinPage extends Component {
  state = { name: "vikas", id: 2 };
  render() {
    return (
      <div>
        <News></News>
      </div>
    );
  }
}

export default LandinPage;
