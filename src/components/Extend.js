import React, { Component } from 'react';
import ExtendForm from "../components/ExtendForm"

class Extend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meterNum: "",
      time: "",
      total: ""
    }
  }

  onChange = evt => {
    const key = evt.target.name;
    const val = evt.target.value;
    this.setState(
      {
        [key]: val
      }
    );
  };

  render() {
    return (
      <React.Fragment>
        <div className="background">
          <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
            <div className="authentication-wrapper authentication-2 ui-bg-cover ui-bg-overlay-container container-fluid px-4">
              <div className="row">
                <div className="authentication-inner py-5 mx-auto" >
                  <div className="card" style={{ minWidth: "25vw", maxWidth: "70vw", minHeight: "60vh", maxHeight: "85vh" }}>
                    <div className="d-flex justify-content-center align-items-center pb-2 mb-4" style={{ minWidth: "25vw", maxWidth: "70vw", minHeight: "60vh", maxHeight: "85vh" }}>
                      <div className="container">
                        <div className="card-body">
                          <div className="d-flex justify-content-center align-items-center pb-2 mb-4">
                            <img src="" alt="" />
                          </div>
                          <h3 className="text-center text-muted font-weight-normal mb-4">
                            Extend Meter
                              </h3>
                          <form className="me">
                            <ExtendForm
                              meterNum={this.state.meterNum}
                              onChange={this.onChange}
                              onClick={this.onStartParkingClick}
                            />
                          </form>
                          <div className="card-footer px-4 px-md-3 px-xs-3 px-sm-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Extend

