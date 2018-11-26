import React, { Component } from 'react';

class Settings extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  onAccountInfoClick = evt => {
    this.props.history.push("/Landing")
  }
  onSecurityClick = evt => {
    this.props.history.push("/Landing")
  }
  onPaymentInfoClick = evt => {
    this.props.history.push("/Landing")
  }
  onLocationClick = evt => {
    this.props.history.push("/Landing")
  }
  render() {
    return (
      <React.Fragment>
        <div className="form-group">
          <button
            style={{ minWidth: "20vw", maxWidth: "20vw", minHeight: "10vw", maxHeight: "10vw" }}
            type="button"
            className="btn btn-light"
            onClick={this.onAccountInfoClick}
          ><h4><i>Account Info</i></h4>
          </button>
          <hr />
          <button
            style={{ minWidth: "20vw", maxWidth: "20vw", minHeight: "10vw", maxHeight: "10vw" }}
            type="button"
            className="btn btn-light"
            onClick={this.onSecurityClick}
          ><h4><i>Security</i></h4>
          </button>
          <hr />
          <button
            style={{ minWidth: "20vw", maxWidth: "20vw", minHeight: "10vw", maxHeight: "10vw" }}
            type="button"
            className="btn btn-light"
            onClick={this.onPaymentInfoClick}
          ><h3><i>Payment Info</i></h3>
          </button>
          <hr />
          <button
            style={{ minWidth: "20vw", maxWidth: "20vw", minHeight: "10vw", maxHeight: "10vw" }}
            type="button"
            className="btn btn-light"
            onClick={this.onLocationClick}
          ><h3><i>Location</i></h3>
          </button>
        </div>
      </React.Fragment>
    );
  }
}
export default Settings