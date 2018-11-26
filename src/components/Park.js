import React, { Component } from 'react';
import MeterForm from "./MeterForm"
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

  onClick = () => {
    let asdf = this.state.meterNum
    let qwer = this.state.time
    let zxcv = this.state.total
    swal({
      title: "Is this correct?",
      text: asdf, qwer, zxcv
    })
    console.log(this.state)
  }


  render() {
    const meters = [
      {
        blockface: "5900 WILSHIRE BL",
        latlng: { type: "Point", coordinates: [-118.358871, 34.062583] },
        metertype: "Single-Space",
        parkingpolicy:
          "TANS 7A-9A, 4P-7P Mon-Fri, 10A-P Daily | PKG 9A-10A, 2P-4P Mon-Sat",
        raterange: "$1.00",
        ratetype: "FLAT",
        spaceid: "MM735",
        timelimit: "2HR"
      },
      {
        blockface: "5900 WILSHIRE BL",
        latlng: { type: "Point", coordinates: [-118.358811, 34.062576] },
        metertype: "Single-Space",
        parkingpolicy:
          "TANS 7A-9A, 4P-7P Mon-Fri, 10A-P Daily | PKG 9A-10A, 2P-4P Mon-Sat",
        raterange: "$1.00",
        ratetype: "FLAT",
        spaceid: "MM735A",
        timelimit: "2HR"
      },
      {
        blockface: "5900 WILSHIRE BL",
        latlng: { type: "Point", coordinates: [-118.358199, 34.062506] },
        metertype: "Single-Space",
        parkingpolicy:
          "TANS 7A-9A, 4P-7P Mon-Fri, 10A-P Daily | PKG 9A-10A, 2P-4P Mon-Sat",
        raterange: "$1.00",
        ratetype: "FLAT",
        spaceid: "MM740",
        timelimit: "2HR"
      },
      {
        blockface: "5900 WILSHIRE BL",
        latlng: { type: "Point", coordinates: [-118.358962, 34.062593] },
        metertype: "Single-Space",
        parkingpolicy:
          "TANS 7A-9A, 4P-7P Mon-Fri, 10A-P Daily | PKG 9A-10A, 2P-4P Mon-Sat",
        raterange: "$1.00",
        ratetype: "FLAT",
        spaceid: "MM734B",
        timelimit: "2HR"
      },
      {
        blockface: "5900 WILSHIRE BL",
        latlng: { type: "Point", coordinates: [-118.35902, 34.062599] },
        metertype: "Single-Space",
        parkingpolicy:
          "TANS 7A-9A, 4P-7P Mon-Fri, 10A-P Daily | PKG 9A-10A, 2P-4P Mon-Sat",
        raterange: "$1.00",
        ratetype: "FLAT",
        spaceid: "MM734A",
        timelimit: "2HR"
      },
      {
        blockface: "5900 WILSHIRE BL",
        latlng: { type: "Point", coordinates: [-118.358658, 34.062558] },
        metertype: "Single-Space",
        parkingpolicy:
          "TANS 7A-9A, 4P-7P Mon-Fri, 10A-P Daily | PKG 9A-10A, 2P-4P Mon-Sat",
        raterange: "$1.00",
        ratetype: "FLAT",
        spaceid: "MM735B",
        timelimit: "2HR"
      },
      {
        blockface: "5900 WILSHIRE BL",
        latlng: { type: "Point", coordinates: [-118.358141, 34.062501] },
        metertype: "Single-Space",
        parkingpolicy:
          "TANS 7A-9A, 4P-7P Mon-Fri, 10A-P Daily | PKG 9A-10A, 2P-4P Mon-Sat",
        raterange: "$1.00",
        ratetype: "FLAT",
        spaceid: "MM741",
        timelimit: "2HR"
      },
      {
        blockface: "5900 WILSHIRE BL",
        latlng: { type: "Point", coordinates: [-118.358445, 34.062533] },
        metertype: "Single-Space",
        parkingpolicy:
          "TANS 7A-9A, 4P-7P Mon-Fri, 10A-P Daily | PKG 9A-10A, 2P-4P Mon-Sat",
        raterange: "$1.00",
        ratetype: "FLAT",
        spaceid: "MM737",
        timelimit: "2HR"
      },
      {
        blockface: "5900 WILSHIRE BL",
        latlng: { type: "Point", coordinates: [-118.358343, 34.062523] },
        metertype: "Single-Space",
        parkingpolicy:
          "TANS 7A-9A, 4P-7P Mon-Fri, 10A-P Daily | PKG 9A-10A, 2P-4P Mon-Sat",
        raterange: "$1.00",
        ratetype: "FLAT",
        spaceid: "MM738",
        timelimit: "2HR"
      },
      {
        blockface: "5900 WILSHIRE BL",
        latlng: { type: "Point", coordinates: [-118.35851, 34.062541] },
        metertype: "Single-Space",
        parkingpolicy:
          "TANS 7A-9A, 4P-7P Mon-Fri, 10A-P Daily | PKG 9A-10A, 2P-4P Mon-Sat",
        raterange: "$1.00",
        ratetype: "FLAT",
        spaceid: "MM736",
        timelimit: "2HR"
      },
      {
        blockface: "5900 WILSHIRE BL",
        latlng: { type: "Point", coordinates: [-118.358287, 34.062517] },
        metertype: "Single-Space",
        parkingpolicy:
          "TANS 7A-9A, 4P-7P Mon-Fri, 10A-P Daily | PKG 9A-10A, 2P-4P Mon-Sat",
        raterange: "$1.00",
        ratetype: "FLAT",
        spaceid: "MM739",
        timelimit: "2HR"
      },
      {
        blockface: "5900 WILSHIRE BL",
        latlng: { type: "Point", coordinates: [-118.358596, 34.062552] },
        metertype: "Single-Space",
        parkingpolicy:
          "TANS 7A-9A, 4P-7P Mon-Fri, 10A-P Daily | PKG 9A-10A, 2P-4P Mon-Sat",
        raterange: "$1.00",
        ratetype: "FLAT",
        spaceid: "MM735C",
        timelimit: "2HR"
      },
      {
        blockface: "5900 WILSHIRE BL",
        latlng: { type: "Point", coordinates: [-118.359115, 34.06261] },
        metertype: "Single-Space",
        parkingpolicy:
          "TANS 7A-9A, 4P-7P Mon-Fri, 10A-P Daily | PKG 9A-10A, 2P-4P Mon-Sat",
        raterange: "$1.00",
        ratetype: "FLAT",
        spaceid: "MM734",
        timelimit: "2HR"
      },
      {
        blockface: "5900 6TH ST",
        latlng: { type: "Point", coordinates: [-118.356895, 34.064787] },
        metertype: "Single-Space",
        parkingpolicy: "8A-8P Mon-Sat",
        raterange: "$1.00",
        ratetype: "FLAT",
        spaceid: "MM426",
        timelimit: "4HR"
      },
      {
        blockface: "5900 6TH ST",
        latlng: { type: "Point", coordinates: [-118.357199, 34.064786] },
        metertype: "Single-Space",
        parkingpolicy: "8A-8P Mon-Sat",
        raterange: "$1.00",
        ratetype: "FLAT",
        spaceid: "MM422",
        timelimit: "4HR"
      },
      {
        blockface: "5900 6TH ST",
        latlng: { type: "Point", coordinates: [-118.356635, 34.064787] },
        metertype: "Single-Space",
        parkingpolicy: "8A-8P Mon-Sat",
        raterange: "$1.00",
        ratetype: "FLAT",
        spaceid: "MM429",
        timelimit: "4HR"
      },
      {
        blockface: "5900 6TH ST",
        latlng: { type: "Point", coordinates: [-118.356959, 34.064787] },
        metertype: "Single-Space",
        parkingpolicy: "8A-8P Mon-Sat",
        raterange: "$1.00",
        ratetype: "FLAT",
        spaceid: "MM425",
        timelimit: "4HR"
      },
      {
        blockface: "5900 6TH ST",
        latlng: { type: "Point", coordinates: [-118.357114, 34.064786] },
        metertype: "Single-Space",
        parkingpolicy: "8A-8P Mon-Sat",
        raterange: "$1.00",
        ratetype: "FLAT",
        spaceid: "MM423",
        timelimit: "4HR"
      },
      {
        blockface: "5900 6TH ST",
        latlng: { type: "Point", coordinates: [-118.357051, 34.064786] },
        metertype: "Single-Space",
        parkingpolicy: "8A-8P Mon-Sat",
        raterange: "$1.00",
        ratetype: "FLAT",
        spaceid: "MM424",
        timelimit: "4HR"
      },
      {
        blockface: "5900 6TH ST",
        latlng: { type: "Point", coordinates: [-118.357365, 34.064786] },
        metertype: "Single-Space",
        parkingpolicy: "8A-8P Mon-Sat",
        raterange: "$1.00",
        ratetype: "FLAT",
        spaceid: "MM420",
        timelimit: "4HR"
      },
      {
        blockface: "5900 6TH ST",
        latlng: { type: "Point", coordinates: [-118.35743, 34.064786] },
        metertype: "Single-Space",
        parkingpolicy: "8A-8P Mon-Sat",
        raterange: "$1.00",
        ratetype: "FLAT",
        spaceid: "MM419",
        timelimit: "4HR"
      },
      {
        blockface: "5900 6TH ST",
        latlng: { type: "Point", coordinates: [-118.356101, 34.064789] },
        metertype: "Single-Space",
        parkingpolicy: "8A-8P Mon-Sat",
        raterange: "$1.00",
        ratetype: "FLAT",
        spaceid: "MM436",
        timelimit: "4HR"
      },
      {
        blockface: "5900 6TH ST",
        latlng: { type: "Point", coordinates: [-118.357994, 34.064784] },
        metertype: "Single-Space",
        parkingpolicy: "8A-8P Mon-Sat",
        raterange: "$1.00",
        ratetype: "FLAT",
        spaceid: "MM412",
        timelimit: "4HR"
      },
      {
        blockface: "5900 6TH ST",
        latlng: { type: "Point", coordinates: [-118.3568, 34.064787] },
        metertype: "Single-Space",
        parkingpolicy: "8A-8P Mon-Sat",
        raterange: "$1.00",
        ratetype: "FLAT",
        spaceid: "MM427",
        timelimit: "4HR"
      },
      {
        blockface: "5900 6TH ST",
        latlng: { type: "Point", coordinates: [-118.356416, 34.064787] },
        metertype: "Single-Space",
        parkingpolicy: "8A-8P Mon-Sat",
        raterange: "$1.00",
        ratetype: "FLAT",
        spaceid: "MM432",
        timelimit: "4HR"
      },
      {
        blockface: "5900 6TH ST",
        latlng: { type: "Point", coordinates: [-118.359017, 34.064788] },
        metertype: "Single-Space",
        parkingpolicy: "8A-8P Mon-Sat",
        raterange: "$1.00",
        ratetype: "FLAT",
        spaceid: "MM403",
        timelimit: "4HR"
      },
      {
        blockface: "5900 6TH ST",
        latlng: { type: "Point", coordinates: [-118.357265, 34.064786] },
        metertype: "Single-Space",
        parkingpolicy: "8A-8P Mon-Sat",
        raterange: "$1.00",
        ratetype: "FLAT",
        spaceid: "MM421",
        timelimit: "4HR"
      },
      {
        blockface: "5900 6TH ST",
        latlng: { type: "Point", coordinates: [-118.35554, 34.064789] },
        metertype: "Single-Space",
        parkingpolicy: "8A-8P Mon-Sat",
        raterange: "$1.00",
        ratetype: "FLAT",
        spaceid: "MM443",
        timelimit: "4HR"
      },
      {
        blockface: "5900 6TH ST",
        latlng: { type: "Point", coordinates: [-118.357523, 34.064785] },
        metertype: "Single-Space",
        parkingpolicy: "8A-8P Mon-Sat",
        raterange: "$1.00",
        ratetype: "FLAT",
        spaceid: "MM418",
        timelimit: "4HR"
      },
      {
        blockface: "5900 6TH ST",
        latlng: { type: "Point", coordinates: [-118.358148, 34.064784] },
        metertype: "Single-Space",
        parkingpolicy: "8A-8P Mon-Sat",
        raterange: "$1.00",
        ratetype: "FLAT",
        spaceid: "MM410",
        timelimit: "4HR"
      },
      {
        blockface: "5900 6TH ST",
        latlng: { type: "Point", coordinates: [-118.356009, 34.064789] },
        metertype: "Single-Space",
        parkingpolicy: "8A-8P Mon-Sat",
        raterange: "$1.00",
        ratetype: "FLAT",
        spaceid: "MM437",
        timelimit: "4HR"
      },
      {
        blockface: "5900 6TH ST",
        latlng: { type: "Point", coordinates: [-118.355847, 34.064789] },
        metertype: "Single-Space",
        parkingpolicy: "8A-8P Mon-Sat",
        raterange: "$1.00",
        ratetype: "FLAT",
        spaceid: "MM439",
        timelimit: "4HR"
      },
      {
        blockface: "5900 6TH ST",
        latlng: { type: "Point", coordinates: [-118.357681, 34.064785] },
        metertype: "Single-Space",
        parkingpolicy: "8A-8P Mon-Sat",
        raterange: "$1.00",
        ratetype: "FLAT",
        spaceid: "MM416",
        timelimit: "4HR"
      },
      {
        blockface: "5900 6TH ST",
        latlng: { type: "Point", coordinates: [-118.35547, 34.064789] },
        metertype: "Single-Space",
        parkingpolicy: "8A-8P Mon-Sat",
        raterange: "$1.00",
        ratetype: "FLAT",
        spaceid: "MM444",
        timelimit: "4HR"
      },
      {
        blockface: "5900 6TH ST",
        latlng: { type: "Point", coordinates: [-118.355065, 34.064792] },
        metertype: "Single-Space",
        parkingpolicy: "8A-8P Mon-Sat",
        raterange: "$1.00",
        ratetype: "FLAT",
        spaceid: "MM449",
        timelimit: "4HR"
      },
      {
        blockface: "5900 6TH ST",
        latlng: { type: "Point", coordinates: [-118.356484, 34.064787] },
        metertype: "Single-Space",
        parkingpolicy: "8A-8P Mon-Sat",
        raterange: "$1.00",
        ratetype: "FLAT",
        spaceid: "MM431",
        timelimit: "4HR"
      },
      {
        blockface: "5900 6TH ST",
        latlng: { type: "Point", coordinates: [-118.356256, 34.064788] },
        metertype: "Single-Space",
        parkingpolicy: "8A-8P Mon-Sat",
        raterange: "$1.00",
        ratetype: "FLAT",
        spaceid: "MM434",
        timelimit: "4HR"
      },
      {
        blockface: "5900 6TH ST",
        latlng: { type: "Point", coordinates: [-118.357747, 34.064785] },
        metertype: "Single-Space",
        parkingpolicy: "8A-8P Mon-Sat",
        raterange: "$1.00",
        ratetype: "FLAT",
        spaceid: "MM415",
        timelimit: "4HR"
      },
      {
        blockface: "5900 6TH ST",
        latlng: { type: "Point", coordinates: [-118.357904, 34.064784] },
        metertype: "Single-Space",
        parkingpolicy: "8A-8P Mon-Sat",
        raterange: "$1.00",
        ratetype: "FLAT",
        spaceid: "MM413",
        timelimit: "4HR"
      },
      {
        blockface: "5900 6TH ST",
        latlng: { type: "Point", coordinates: [-118.358523, 34.064788] },
        metertype: "Single-Space",
        parkingpolicy: "8A-8P Mon-Sat",
        raterange: "$1.00",
        ratetype: "FLAT",
        spaceid: "MM407",
        timelimit: "4HR"
      },
      {
        blockface: "5900 6TH ST",
        latlng: { type: "Point", coordinates: [-118.356163, 34.064788] },
        metertype: "Single-Space",
        parkingpolicy: "8A-8P Mon-Sat",
        raterange: "$1.00",
        ratetype: "FLAT",
        spaceid: "MM435",
        timelimit: "4HR"
      },
      {
        blockface: "5900 6TH ST",
        latlng: { type: "Point", coordinates: [-118.356733, 34.064787] },
        metertype: "Single-Space",
        parkingpolicy: "8A-8P Mon-Sat",
        raterange: "$1.00",
        ratetype: "FLAT",
        spaceid: "MM428",
        timelimit: "4HR"
      },
      {
        blockface: "5900 6TH ST",
        latlng: { type: "Point", coordinates: [-118.355694, 34.06479] },
        metertype: "Single-Space",
        parkingpolicy: "8A-8P Mon-Sat",
        raterange: "$1.00",
        ratetype: "FLAT",
        spaceid: "MM441",
        timelimit: "4HR"
      },
      {
        blockface: "5900 6TH ST",
        latlng: { type: "Point", coordinates: [-118.357833, 34.064784] },
        metertype: "Single-Space",
        parkingpolicy: "8A-8P Mon-Sat",
        raterange: "$1.00",
        ratetype: "FLAT",
        spaceid: "MM414",
        timelimit: "4HR"
      },
      {
        blockface: "5900 6TH ST",
        latlng: { type: "Point", coordinates: [-118.358056, 34.064784] },
        metertype: "Single-Space",
        parkingpolicy: "8A-8P Mon-Sat",
        raterange: "$1.00",
        ratetype: "FLAT",
        spaceid: "MM411",
        timelimit: "4HR"
      },
      {
        blockface: "5900 6TH ST",
        latlng: { type: "Point", coordinates: [-118.355943, 34.064789] },
        metertype: "Single-Space",
        parkingpolicy: "8A-8P Mon-Sat",
        raterange: "$1.00",
        ratetype: "FLAT",
        spaceid: "MM438",
        timelimit: "4HR"
      },
      {
        blockface: "5900 6TH ST",
        latlng: { type: "Point", coordinates: [-118.356325, 34.064788] },
        metertype: "Single-Space",
        parkingpolicy: "8A-8P Mon-Sat",
        raterange: "$1.00",
        ratetype: "FLAT",
        spaceid: "MM433",
        timelimit: "4HR"
      },
      {
        blockface: "5900 6TH ST",
        latlng: { type: "Point", coordinates: [-118.355223, 34.064791] },
        metertype: "Single-Space",
        parkingpolicy: "8A-8P Mon-Sat",
        raterange: "$1.00",
        ratetype: "FLAT",
        spaceid: "MM447",
        timelimit: "4HR"
      },
      {
        blockface: "5900 6TH ST",
        latlng: { type: "Point", coordinates: [-118.358805, 34.064792] },
        metertype: "Single-Space",
        parkingpolicy: "8A-8P Mon-Sat",
        raterange: "$1.00",
        ratetype: "FLAT",
        spaceid: "MM406",
        timelimit: "4HR"
      },
      {
        blockface: "5900 6TH ST",
        latlng: { type: "Point", coordinates: [-118.356574, 34.064787] },
        metertype: "Single-Space",
        parkingpolicy: "8A-8P Mon-Sat",
        raterange: "$1.00",
        ratetype: "FLAT",
        spaceid: "MM430",
        timelimit: "4HR"
      },
      {
        blockface: "5900 6TH ST",
        latlng: { type: "Point", coordinates: [-118.355787, 34.064789] },
        metertype: "Single-Space",
        parkingpolicy: "8A-8P Mon-Sat",
        raterange: "$1.00",
        ratetype: "FLAT",
        spaceid: "MM440",
        timelimit: "4HR"
      },
      {
        blockface: "5900 6TH ST",
        latlng: { type: "Point", coordinates: [-118.358868, 34.064789] },
        metertype: "Single-Space",
        parkingpolicy: "8A-8P Mon-Sat",
        raterange: "$1.00",
        ratetype: "FLAT",
        spaceid: "MM405",
        timelimit: "4HR"
      },
      {
        blockface: "5900 6TH ST",
        latlng: { type: "Point", coordinates: [-118.355628, 34.06479] },
        metertype: "Single-Space",
        parkingpolicy: "8A-8P Mon-Sat",
        raterange: "$1.00",
        ratetype: "FLAT",
        spaceid: "MM442",
        timelimit: "4HR"
      },
      {
        blockface: "5900 6TH ST",
        latlng: { type: "Point", coordinates: [-118.35896, 34.064791] },
        metertype: "Single-Space",
        parkingpolicy: "8A-8P Mon-Sat",
        raterange: "$1.00",
        ratetype: "FLAT",
        spaceid: "MM404",
        timelimit: "4HR"
      },
      {
        blockface: "5900 6TH ST",
        latlng: { type: "Point", coordinates: [-118.355312, 34.06479] },
        metertype: "Single-Space",
        parkingpolicy: "8A-8P Mon-Sat",
        raterange: "$1.00",
        ratetype: "FLAT",
        spaceid: "MM446",
        timelimit: "4HR"
      },
      {
        blockface: "5900 6TH ST",
        latlng: { type: "Point", coordinates: [-118.358333, 34.064789] },
        metertype: "Single-Space",
        parkingpolicy: "8A-8P Mon-Sat",
        raterange: "$1.00",
        ratetype: "FLAT",
        spaceid: "MM408",
        timelimit: "4HR"
      },
      {
        blockface: "5900 6TH ST",
        latlng: { type: "Point", coordinates: [-118.357588, 34.064785] },
        metertype: "Single-Space",
        parkingpolicy: "8A-8P Mon-Sat",
        raterange: "$1.00",
        ratetype: "FLAT",
        spaceid: "MM417",
        timelimit: "4HR"
      },
      {
        blockface: "5900 6TH ST",
        latlng: { type: "Point", coordinates: [-118.355153, 34.064792] },
        metertype: "Single-Space",
        parkingpolicy: "8A-8P Mon-Sat",
        raterange: "$1.00",
        ratetype: "FLAT",
        spaceid: "MM448",
        timelimit: "4HR"
      },
      {
        blockface: "5900 6TH ST",
        latlng: { type: "Point", coordinates: [-118.355372, 34.06479] },
        metertype: "Single-Space",
        parkingpolicy: "8A-8P Mon-Sat",
        raterange: "$1.00",
        ratetype: "FLAT",
        spaceid: "MM445",
        timelimit: "4HR"
      }
    ];
    return (
      <React.Fragment>
        <div className="container-fluid flex-grow-1 container-p-y">
          <div className="card mb-4">
            <h6 className="card-header"> Park, Pay, Play</h6>
            <div className="card-body">
              <MeterForm
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
              <img
                alt="Visa Checkout"
                className="v-button"
                role="button"
                src="https://sandbox.secure.checkout.visa.com/wallet-services-web/xo/button.png"
              />
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

