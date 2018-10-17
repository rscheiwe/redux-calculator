//packages
import React from 'react'
import { connect } from 'react-redux'

//actions
import { setMode, setFirstNumber, setSecondNumber } from '../store'

const ModeButton = ({mode, stateMode, a, b, setMode, setFirstNumber, setSecondNumber}) => {

  const handleModeSelect = (mode) => {
    switch(mode){
      case "=":
        calculate()
        //Sets the mode back to null telling the application that the next number will replace 'a'
        setMode(null)
        break
      case "C":
        //If 'b' has a number, only it will clear; 'a' will be preserved
        b === "0" ? setFirstNumber("0") : setSecondNumber("0")
        setMode(null)
        break
      case "MS":
        //If a value has been placed for 'b' but the operation has not been completed, the result will be calculated and stored in 'a'
        calculate()
        setMode(mode)
        break
      case "MR":
        //Saves the last mode so that it can be restored after a user retrieves a number
        setMode(mode)
        break
      default:
        //All other signs represent operations
        setMode(mode)
        //If there's a number in 'b', this will allow for a string of operations that put each new result into 'a' ({a: 3} * {b: 4} = 12 {a: 12} * 4 {b: 4} and so on)
        b && calculate()
      }
    }

    //If 'b' has no value, the operation is carried out on the value of 'a'; the value of 'b' is set to zero
    const calculate = () => {
      switch(stateMode){
        case "+":
          b === "0" ? setFirstNumber((parseFloat(a) + parseFloat(a)).toString()) : setFirstNumber((parseFloat(a) + parseFloat(b)).toString())
           break
        case "-":
          b === "0" ? setFirstNumber((parseFloat(a) - parseFloat(a)).toString()) : setFirstNumber((parseFloat(a) - parseFloat(b).toString()))
          break
        case "*":
          b === "0" ? setFirstNumber((parseFloat(a) * parseFloat(a)).toString()) : setFirstNumber((parseFloat(a) * parseFloat(b)).toString())
          break
        case "/":
          b === "0" ? setFirstNumber((parseFloat(a) / parseFloat(a)).toString()) : setFirstNumber((parseFloat(a) / parseFloat(b)).toString())
          break
        default:
        }
        setSecondNumber("0")
      }

  return <div key={mode} id={mode} className="mode button" onClick={() => handleModeSelect(mode)}>{mode}</div>
}

const mapStateToProps = (state) => {
  //letting the component know about the state's mode versus the mode it represents will cause the color to change if there's a match
  return {
    stateMode: state.mode,
    a: state.a,
    b: state.b
  }
}

export default connect(mapStateToProps, {setMode, setFirstNumber, setSecondNumber})(ModeButton)
