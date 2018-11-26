import React, {Component} from 'react';
import RegisterForm from "../components/RegisterForm"

class Register extends Component {
    constructor (props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            vin: "",
            cardNum: "",
            cvc: "",
            expirationDate: ""
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

          onRegisterClick = evt => {
              this.props.history.push("/Login")
          }

          render() {
            return (
              <React.Fragment>
               <div className="container-fluid flex-grow-1 container-p-y">
                <div className="card mb-4">
                  <h6 className="card-header"> Register</h6>
                    <div className="card-body">
                    <RegisterForm
                        firstName = {this.state.firstName}
                        lastName = {this.state.lastName}
                        vin = {this.state.vin}
                        cardNum = {this.state.cardNum}
                        cvc = {this.state.cvc}
                        expirationDate = {this.state.expirationDate}
                        onChange={this.onChange}
                        onClick={this.onRegisterClick}
                    />
                    </div>
                 </div>
                </div>
                    </React.Fragment>
            )
    }
}

export default Register

