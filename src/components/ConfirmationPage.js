import React from 'react'
import SweetAlert from 'react-bootstrap-sweetalert';


class Confirmation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      meterNum: '',
      time: '',
      total: '',
      alert: null,
      confirmAlert: null,
      exceptionAlert: null,
    }
  }

  componentDidMount() {
    if (!("data" in this.props.location) || this.props.location.data.meterNum === '') {
      alert('Something was not filled out correctly')
      this.props.history.push("/Park")
    } else {
      this.setState({
        meterNum: this.props.location.data.meterNum,
        time: this.props.location.data.time,
        total: this.props.location.data.total
      })

      window.V.init({
        apikey: "88XIS66LQV6WBYA417KW21-PekffcTrxMQFYlqkMumzwHOiio",
        paymentRequest: {
          currencyCode: "USD",
          subtotal: this.props.location.data.total
        }
      });
      window.V.on("payment.success", function (payment) { alert(JSON.stringify(payment)); });
      window.V.on("payment.cancel", function (payment) { alert(JSON.stringify(payment)); });
      window.V.on("payment.error", function (payment, error) { alert(JSON.stringify(error)); });
    }
  }

  onClick = () => {
    const showAlert = () => (
      <SweetAlert
        info
        showCancel
        cancelBtnText="No"
        confirmBtnText="Yes"
        confirmBtnBsStyle="danger"
        cancelBtnBsStyle="primary"
        title="Confirm Transaction?"
        onConfirm={() => this.pushToOldPage()}
        onCancel={() => this.setState({ alert: null })}
      >
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
                            Confirmation Page
                      </h3>
                          <p>Meter Id: {this.state.meterNum}</p>
                          <p> Expiration: {this.state.time}</p>
                          <p> Total: ${this.state.total}</p>
                          <img alt="Visa Checkout" className="v-button" role="button" src="https://sandbox.secure.checkout.visa.com/wallet-services-web/xo/button.png" />
                        </div>
                        <button
                              style={{ minWidth: "30vw", maxWidth: "100vw" }}
                              type="button"
                              className="btn btn-primary btn-block mt-4"
                              onClick={this.onClick}
                            >
                              Confirm
                        </button>
                        <button
                          style={{ minWidth: "30vw", maxWidth: "100vw" }}
                          type="button"
                          className="btn btn-danger btn-sm"
                          onClick={this.goBack}>
                          Cancel
                        </button>
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

export default Confirmation