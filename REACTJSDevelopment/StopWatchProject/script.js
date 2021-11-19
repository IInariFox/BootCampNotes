class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timePassedInMilliseconds = 0
    }
    this.timer = null;
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);
  }
  start() {
    if (!this.timer) {
      let startTime = Date.now();
      this.timer = setInterval(() => {
        var stopTime = Date.now();
        var timePassedInMilliseconds = stopTime - startTime + this.state.timePassedInMilliseconds;
        this.setState({
          timePassedInMilliseconds,
        });
        startTime = stopTime;
      }, 250);//executed every 250 milliseconds
    }
  }
  stop() {
    window.clearTimeout(this.timer);
    this.timer = null;
  };
  reset() {
    this.stop();
    this.setState({
      timePassedInMilliseconds: 0
    });
  };



  render() {
    return(
      <div>
        <h2 className="border px-3 py-4 rounded my-3 mx-auto text-center" style={{maxWidth: '300px'}}>
          {Math.floor(this.state.timePassedInMilliseconds / 100)} s
        </h2>
        <div className="d-flex justify-content-center">
          <button className="btn btn-outline-primary mr-2" onClick={this.start}>
            Start
          </button>
          <button className="btn btn-outline-danger mr-2" onClick={this.stop}>
            Stop
          </button>
          <button className="btn btn-outline-warning" onClick={this.reset}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}
ReactDOM.render(
  <StopWatch />,
  document.getElementById('root')
);