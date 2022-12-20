import React, { Component } from "react";
import converterService from "../services/converter-service";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { Link } from "react-router-dom";
import Moment from "moment";

export default class ConverterComponent extends Component {
  constructor(props) {
    super(props);
    this.onChangebtcRate = this.onChangebtcRate.bind(this);
    this.onChangeAmountOfBtc = this.onChangeAmountOfBtc.bind(this);

    this.state = {
      btcRate: "",
      amountOfBtc: "",
    };
  }

  componentDidMount() {
    this.retrieveBtcRate();
  }

  onChangebtcRate(e) {
    this.setState({
      btcRate: e.target.value,
    });
  }

  onChangeAmountOfBtc(e) {
    this.setState({
      amountOfBtc: e.target.value,
    });
  }
  retrieveBtcRate() {
    converterService
      .getBtcRate()
      .then((response) => {
        console.log(response.DKK);
        this.setState({
          btcRate: response.DKK,
          amountOfBtc: 1,
        });
        //console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { btcRate, amountOfBtc } = this.state;
    return (
      <div className="btc-container">
        <div className="submit-form">
          <div className="form-group-review">
            <label htmlFor="title">BTC</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={amountOfBtc}
              onChange={this.onChangeAmountOfBtc}
              name="title"
            ></input>
          </div>

          <div className="form-group-review">
            <label htmlFor="title">DKK</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={btcRate.sell * amountOfBtc}
              name="title"
            ></input>
          </div>
        </div>
      </div>
    );
  }
}
