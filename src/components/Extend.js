import React, { Component } from 'react';
import ExtendForm from "../components/ExtendForm"
import SweetAlert from 'react-bootstrap-sweetalert';
const moment = require("moment");
moment().format();

class Extend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meterNum: "G611592",
      time: "",
      total: "",
      alert: null,
      confirmAlert: null,
      exceptionAlert: null,
    }
  }

  onChange = evt => {
    const key = evt.target.name;
    const val = evt.target.value;
    this.setState({ [key]: val });
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
    this.setState({ total: totalAm + ".00" })
  }

  onStartParkingClick = () => {
    const showAlert = () => (
      <SweetAlert
        info
        confirmBtnText="Cool Thanks!"
        confirmBtnBsStyle="success"
        title=""
        onConfirm={() => this.pushToNewPage()}
      >
        <p>Meter Id: {this.state.meterNum}</p>
        <p>Expiration: {this.state.time}</p>
        <p>Total: ${this.state.total}</p>
      </SweetAlert>
    );
    this.setState({ alert: showAlert() })
  }

  goBack = () => {
    const showAlert = () => (
      <SweetAlert
        info
        showCancel
        cancelBtnText="No"
        confirmBtnText="Yes"
        confirmBtnBsStyle="danger"
        cancelBtnBsStyle="primary"
        title="Cancel Transaction?"
        onConfirm={() => this.pushToOldPage()}
        onCancel={() => this.setState({ alert: null })}
      >
      </SweetAlert>
    );
    this.setState({ alert: showAlert() })
  }

  hideAlert() {
    this.setState({ alert: null, confirmAlert: null, exceptionAlert: null });
  }

  pushToNewPage = () => this.props.history.push({ pathname: "/ConfirmPage", data: this.state })

  pushToOldPage = () => this.props.history.push("/Landing")


  render() {
    return (
      <React.Fragment>
        {this.state.confirmAlert}
        {this.state.alert}
        {this.state.exceptionAlert}
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
                            <button
                              style={{ minWidth: "30vw", maxWidth: "100vw" }}
                              type="button"
                              className="btn btn-primary btn-block mt-4"
                              onClick={this.onStartParkingClick}
                            >
                              Extend
                            </button>
                            <button
                              style={{ minWidth: "30vw", maxWidth: "100vw" }}
                              type="button"
                              className="btn btn-danger btn-sm"
                              onClick={this.goBack}>
                              Cancel
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
      </React.Fragment >
    )
  }
}

export default Extend

