import React, { Component } from 'react';
import ParkForm from "./ParkForm"
import swal from 'sweetalert'
const moment = require("moment");
moment().format();

class Park extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meterNum: "",
      time: "",
      total: "",
    }
  }

  componentDidMount() {
    window.V.init({
      apikey: "88XIS66LQV6WBYA417KW21-PekffcTrxMQFYlqkMumzwHOiio",
      paymentRequest: {
        currencyCode: "USD",
        subtotal: "11.00"
      }
    });
    window.V.on("payment.success", function (payment) { alert(JSON.stringify(payment)); });
    window.V.on("payment.cancel", function (payment) { alert(JSON.stringify(payment)); });
    window.V.on("payment.error", function (payment, error) { alert(JSON.stringify(error)); });
  }

  onChange = evt => {
    const key = evt.target.name;
    const val = evt.target.value;
    this.setState({ [key]: val });
    console.log(key, val)
  }

  onTimeChange = evt => {
    const key = evt.target.name;
    const val = evt.target.value;
    let newTime = moment().add(val, 'minutes').format("MM/DD/YYYY h:mm A")
    this.setState({ [key]: newTime })
    this.onMoneyChange(val)
  }

  onMoneyChange = test => {
    let totalAm = test / 30
    this.setState({ total: totalAm })
  }

  onClick = () => console.log(this.state)

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
                            Park
                              </h3>
                          <form className="me">
                            <ParkForm
                              meterNum={this.state.meterNum}
                              onChange={this.onChange}

                            />
                            <div className="form-group">
                              <label className="form-label">Time Length</label>
                              <br />
                              <select name="time" onChange={this.onTimeChange}>
                                <option value="null">Please select length</option>
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
                              Start Parking
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

export default Park

