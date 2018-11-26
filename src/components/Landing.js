import React, { Component } from 'react';

class Landing extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    onParkClick = evt => {
        this.props.history.push("/Meter")
    }
    onExtendClick = evt => {
        this.props.history.push("/Extend")
    }
    onSettingsClick = evt => {
        this.props.history.push("/Meter")
    }
  render() {
    return (
        <React.Fragment>
            <div>
        <button
        style={{ minWidth: "30vw", maxWidth: "30vw", minHeight:"10vw", maxHeight: "10vw" }}
        type="button"
        className="btn btn-danger"
        onClick={this.onParkClick}
      >Park
      </button>
      </div>
      <div>
      <button
        style={{ minWidth: "30vw", maxWidth: "30vw", minHeight:"10vw", maxHeight: "10vw" }}
        type="button"
        className="btn btn-primary"
        onClick={this.onExtendClick}
      >Extend
      </button>
      </div>
      <div>
      <button
        style={{ minWidth: "30vw", maxWidth: "30vw", minHeight:"10vw", maxHeight: "10vw" }}
        type="button"
        className="btn btn-success"
        onClick={this.onSettingsClick}
      >Settings
      </button>
      </div>
      </React.Fragment>
    );
  }
}

export default Landing;
