import React, { Component } from 'react';
import './Rule.css'

class Rule extends Component {
  render() {
    if (this.props.score === undefined)
      return (
        <tr className="Rule Rule-active" onClick={this.props.doScore}>
          <td className="Rule-name">{this.props.name}</td>
          <td className="Rule-score"></td>
        </tr>
      )
    else return (
      <tr className="Rule">
        <td className="Rule-name">{this.props.name}</td>
        <td className="Rule-score">{this.props.score}</td>
      </tr>
    )
  }
}

export default Rule;