//packages
import React from 'react';
import { connect } from 'react-redux'

//components
import ModeButton from './ModeButton'
import NumberButton from './NumberButton'

const App = ({a, b}) => {

    //Symbols for add, subtract, multiply, divide, memory save, memory retrieve, clear, and equals
    const modes = ["+", "-", "*", "/", "C", "MS", "MR", "="]
    //Each symbol gets its own clickable div that triggers a mode select which can tell the application what to do on the next button press
    const formattedModeButtons = modes.map(mode => <ModeButton key={mode} mode={mode}/>)

    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0", "+/-"]
    //Each number has its own div that will respond according to the mode set in state
    const formattedNumberButtons = numbers.map(number => <NumberButton key={number} number={number}/>)


    return (
      <div id="wrapper">
        <div className="screen">
          {b !== "0" ? b : a}
        </div>
        <div className="modes-container">
          {formattedModeButtons}
        </div>
        <div className="numbers-container">
          {formattedNumberButtons}
        </div>
      </div>
    );
  }

const mapStateToProps = (state) => {
  return {a: state.a, b: state.b }
}

export default connect(mapStateToProps)(App);
