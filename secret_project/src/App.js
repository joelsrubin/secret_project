import React, { Component } from "react";
import p5 from 'p5'

class App extends Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
  }

  Sketch = (p) => {

    p.setup = () => {
      p.createCanvas(710, 400);
      p.background(102);
    }

    p.draw = () => {
      p.stroke(800);
      if (p.mouseIsPressed === true) {
        p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
      }
    }
  }

  componentDidMount() {
    this.myP5 = new p5(this.Sketch, this.myRef.current)
  }

  render() {
    return (
      <div ref={this.myRef}>

      </div>
    )
  }
}

export default App;
