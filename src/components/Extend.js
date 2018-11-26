import React, { Component } from 'react';
import ExtendForm from "../components/ExtendForm"

class Extend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meterNum: "G611592",
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
                          
                          <div className="form-group">
                              <label className="form-label">Time Length</label>
                              <br />
                              <select name="time" onChange={this.onTimeChange}>
                                <option value="null">Add Additional...</option>
                                <option value="30">30 Mins</option>
                                <option value="60">60 Mins</option>
                                <option value="90">90 Mins</option>
                                <option value="120">120 Mins</option>
                                <option value="150">150 Mins</option>
                                <option value="180">180 Mins</option>
                                <option value="210">210 Mins</option>
                                <option value="240">240 Mins</option>
                              </select>
                            </div>
                            <img alt="Visa Checkout" className="v-button" role="button" src="https://sandbox.secure.checkout.visa.com/wallet-services-web/xo/button.png" />
                            <button
                              style={{ minWidth: "30vw", maxWidth: "100vw" }}
                              type="button"
                              className="btn btn-primary btn-block mt-4"
                              onClick={this.onClick}
                            >
                              Extend Parking
                        </button>
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

