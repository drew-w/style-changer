import React, { Component } from 'react';

export default class EditToggle extends Component {
  render() {
    return (
      <select
        disabled={this.props.allowEdit === 'false'}
        onChange={e => this.props.update(e.target.value)}
        className="dropDownContainer m10">
        <option value="true"> Allow Edit </option>
        <option value="false"> Disable Edit </option>
      </select>
    );
  }
}
