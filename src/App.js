import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { d: new Date() };
  }

  componentDidMount() {
    this.interval = setInterval(
      () => this.setState({ time: Date.now() }),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let nowD = new Date().getTime();
    let gotD = new Date(2019, 3, 28, 0, 0, 0);
    let t = gotD - nowD;
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    let secs = Math.floor((t % (1000 * 60)) / 1000);
    return (
      <div className="App">
        <br style={{ lineHeight: "5" }} />

        <a href="https://www.vox.com/culture/2019/3/27/18282960/avengers-endgame-ant-man-vs-thanos-meme-butt-thanus">
          <img
            src="https://fontmeme.com/permalink/190416/9dac04c77ffbb31d3cbbadd4149d77cc.png"
            alt="avengers-font"
            border="0"
            height="120"
          />
        </a>
        <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://fontmeme.com/avengers-font/">
        <img src="https://fontmeme.com/permalink/190416/8e12b50c8fabfc7a96dece64592dbb05.png" height="60" alt="avengers-font" border="0"/>
        </a>
        <br style={{lineHeight: "1.5"}}/>
        <a href="https://www.vox.com/culture/2019/3/27/18282960/avengers-endgame-ant-man-vs-thanos-meme-butt-thanus">
          <img
            src="https://fontmeme.com/permalink/190416/189503b5919a6584d7c586d4e797a328.png"
            alt="avengers-font"
            border="0"
            height="30"
          />
        </a>
        <br style={{ lineHeight: "5" }} />
        <div className="title">we're gonna be in the theater seeing this shit in:</div>
        <br/>
        <div className="white">
          <span style={{ fontWeight: "bold" }}>{days}</span> days &nbsp;
          <span style={{ fontWeight: "bold" }}>{hours}</span> hours &nbsp;
          <span style={{ fontWeight: "bold" }}>{mins}</span> minutes and &nbsp;
          <span style={{ fontWeight: "bold" }}>{secs}</span> seconds
        </div>
        <br style={{ lineHeight: "5" }} />
        <div className="yosemite">&copy; Yosemite Productions</div>
      </div>
    );
  }
}
