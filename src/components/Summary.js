import React, { Component } from 'react';
import Total from './Total';
import './Summary.css';
import SummaryOption from './SummaryOption';
export default class Summary extends Component {
  render() {
    return (
      <section className='main__summary'>
        <h2>Your cart</h2>
        <SummaryOption
          selected={this.props.selected}
          USCurrencyFormat={this.props.USCurrencyFormat}
        />
        <Total
          total={this.props.total}
          USCurrencyFormat={this.props.USCurrencyFormat}
          selected={this.props.selected}
        />
      </section>
    );
  }
}
