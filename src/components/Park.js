import React, {Component} from 'react';
import MeterForm from "./MeterForm"

class Park extends Component {
    constructor (props) {
        super(props);
        this.state = {
            meterNum: "",
            time: "",
            card: "",
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
          componentDidMount(){
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

          render() {
            return (
              <React.Fragment>
               <div className="container-fluid flex-grow-1 container-p-y">
                <div className="card mb-4">
                  <h6 className="card-header"> Park, Pay, Play</h6> 
                    <div className="card-body">
                    <MeterForm
                        meterNum = {this.state.meterNum}
                        onChange={this.onChange}
                        
                    />
                     <img alt="Visa Checkout" className="v-button" role="button" src="https://sandbox.secure.checkout.visa.com/wallet-services-web/xo/button.png" />
                    <button
                    style={{ minWidth: "30vw", maxWidth: "100vw" }}
                     type="button"
                    className="btn btn-primary btn-block mt-4"
                    onClick={this.onClick}
                    >
                    Start Parking
                        </button>
                   
                    
                    </div>
                 </div>
                </div>
                    </React.Fragment>
            )
    }
}

export default Park

