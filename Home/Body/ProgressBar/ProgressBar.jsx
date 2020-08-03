import React from 'react';

// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import axios from 'axios';

import './ProgressBar.css';

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0.1,
      canvasSize: {
        canvasWidth: window.innerWidth,
        canvasHeight: window.innerWidth * 0.1,
      },
      center: {
        x: window.innerWidth / 2,
        y: (window.innerWidth * 0.1) / 2,
      },
    };
    this.canvasRef = React.createRef();
    this.drawProgress = this.drawProgress.bind(this);
    this.progressReq = this.progressReq.bind(this);
    this.clearCanvas = this.clearCanvas.bind(this);
  }

  componentDidMount() {
    this.progressReq();
    console.log('state ,', this.state);
    this.clearCanvas();
    this.drawProgress();

    const { canvasWidth, canvasHeight } = this.state.canvasSize;
    this.canvasRef.width = canvasWidth;
    this.canvasRef.height = canvasHeight;

    window.addEventListener('resize', this.updateWindowDimensions.bind(this));
  }

  updateWindowDimensions() {
    const canvasSize = {
      canvasWidth: window.innerWidth,
      canvasHeight: window.innerWidth * 0.1,
    };
    const center = {
      x: window.innerWidth / 2,
      y: (window.innerWidth * 0.1) / 2,
    };
    this.setState({ canvasSize: canvasSize, center: center });
  }

  clearCanvas() {
    const context = this.canvasRef.getContext('2d');
    context.clearRect(
      0,
      0,
      this.state.canvasSize.canvasWidth,
      this.state.canvasSize.canvasHeight
    );
  }

  // Note here progress is a percent (ie 0.80)
  drawProgress(progress) {
    const progWidth = progress * this.state.canvasSize.canvasWidth;
    const height = this.state.canvasSize.canvasHeight;
    const ctx = this.canvasRef.getContext('2d');
    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'green';
    ctx.fillRect(0, 0, progWidth, height);
    console.log('ctx ,', ctx);
  }

  progressReq() {
    axios
      .post('http://localhost:3000/backend/progress')
      .then((response) => {
        // API output data
        console.log(
          'Post-Req response.data.progress =',
          response.data.progress
        );
        this.setState(() => ({ progress: response.data.progress }));
        this.clearCanvas();
        this.drawProgress(response.data.progress);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="ProgressBar">
        {/*Section is just to showcase; can add a function to update the progress if wanted*/}
        <h2 className="w3-center">Goal of the Week</h2>
        <p>
          {' '}
          FundFlow has chosen the donation goal of organization 1 to showcase
          on the homepage!
        </p>
        <p>
          {' '}
          Below is a progress bar to show how close they are to the donation goal:
        </p>
        <canvas
          className="canvas"
          ref={(canvasRef) => (this.canvasRef = canvasRef)}
        />
      </div>
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      'resize',
      this.updateWindowDimensions.bind(this)
    );
  }
}

export default ProgressBar;
