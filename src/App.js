import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  // constructor
  constructor(){
    super();
    this.state = {
      fontColor: 'black',
      fontSize: 12,
      fontFamily: 'monospace',
      allowEdit: 'true'
    }
  }
  // updateColor
  updateColor = (val) => {
    this.setState({
      fontColor: val
    })
  }

  // updateSize
  updateSize = (val) => {
    this.setState({
      fontSize: val
    })
  }

  // updateFamily
  updateFamily = (val) => {
    this.setState({
      fontFamily: val
    })
  }

  // updateEditStatus
  updateEditStatus = (val) => {
    this.setState({
      allowEdit: val
    })
  }

  render() {
    const {allowEdit, fontFamily, fontSize, fontColor} = this.state;
    return (
      <div>
        <div className="headerBar">
          <EditToggle update={this.updateEditStatus}/>
          <ColorChanger update={this.updateColor} allowEdit={allowEdit}/>
          <SizeChanger update={this.updateSize} allowEdit={allowEdit}/>
          <FamilyChanger update={this.updateFamily} allowEdit={allowEdit}/>
        </div>
        <div className="textArea">
          <TextContainer fontFamily={fontFamily} fontColor={fontColor} fontSize={fontSize}/>
        </div>
      </div>
    );
  }
}

export default App;
