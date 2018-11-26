import React, {Component} from 'react';
import ExtendForm from "../components/ExtendForm"

class Extend extends Component {
    constructor (props) {
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
               <div className="container-fluid flex-grow-1 container-p-y">
                <div className="card mb-4">
                  <h6 className="card-header"> Park, Pay, Play</h6>
                    <div className="card-body">
                    <ExtendForm
                        meterNum = {this.state.meterNum}
                        onChange={this.onChange}
                        onClick={this.onStartParkingClick}
                    />
                    
                    </div>
                 </div>
                </div>
                    </React.Fragment>
            )
    }
}

export default Extend

