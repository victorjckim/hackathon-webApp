import React, { Component } from 'react';

class Landing extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  onParkClick = evt => {
    this.props.history.push("/Park")
  }
  onExtendClick = evt => {
    this.props.history.push("/Extend")
  }
  onSettingsClick = evt => {
    this.props.history.push("/Settings")
  }
  render() {
    return (
      <React.Fragment>
        <div className="form-group">
          <button
            style={{ minWidth: "20vw", maxWidth: "20vw", minHeight: "10vw", maxHeight: "10vw" }}
            type="button"
            className="btn btn-primary"
            onClick={this.onParkClick}
          ><h3><i>Park</i></h3>
          </button>
          <hr />
          <button
            style={{ minWidth: "20vw", maxWidth: "20vw", minHeight: "10vw", maxHeight: "10vw" }}
            type="button"
            className="btn btn-primary"
            onClick={this.onExtendClick}
          ><h4><i>Extend Parking</i></h4>
          </button>
          <hr />
          <button
            style={{ minWidth: "20vw", maxWidth: "20vw", minHeight: "10vw", maxHeight: "10vw" }}
            type="button"
            className="btn btn-primary"
            onClick={this.onSettingsClick}
          ><h3><i>Settings</i></h3>
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Landing;