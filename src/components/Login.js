import React from "react";
import LoginForm from "../components/LoginForm"

class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        email: "",
        password: "",
        isLoggedIn: false
      }
    }

    componentDidMount(){
        this.setState({
            isLoggedIn: true
    })   
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
                              <h5 className="text-center text-muted font-weight-normal mb-4">
                                Login to Your Account
                              </h5>
                              <form className="me">
                                <LoginForm
                                  onToggle={this.props.LoginToggle}
                                  email={this.state.email}
                                  emailValid={this.state.emailValid || !this.state.showErrors}
                                  password={this.state.password}
                                  passwordValid={this.state.passwordValid || !this.state.showErrors}
                                  onChange={this.onChange}
                                  onClick={this.onLoginClick}
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
        );
      }
}
export default Login 