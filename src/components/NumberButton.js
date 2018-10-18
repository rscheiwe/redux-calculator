//packages
import React from 'react'
import { connect } from 'react-redux'

//actions
import { setMode, setFirstNumber, setSecondNumber, saveNumber } from '../actions/actions'

const NumberButton = ({number, stateMode, prevMode, a, b, saved, setMode, setFirstNumber, setSecondNumber, saveNumber}) => {

  const handleNumberSelect = (n) => {
    //Changes the number's sign
    if(n === "+/-"){
      if(b === "0"){
        setFirstNumber(-parseFloat(a).toString())
        return
      } else {
        setSecondNumber(-parseFloat(b).toString())
        return
      }
    }

    switch(stateMode){
      case "MS":
        //Saves the number in state.store object for retrieval by MR
        saveNumber(n, a)
        setMode(null)
        break
      case "MR":
        //Allows user to call in saved number for 'b'
        a === '0' ? setFirstNumber(saved[n] || "0") : setSecondNumber(saved[n] || "0")
        //Restores previous mode for operation to be carried out between 'a' and 'b'
        setMode(prevMode)
        break
      case null:
        //Prevents numbers from starting with 0 i.e. 01234
        setFirstNumber(a === "0" ? n : a + n)
        break
      default:
        //Numbers are only placed in position 'a' if the mode is null, so any other case it would be in b
        setSecondNumber(b === "0" ? n : b + n)
    }
  }

  return <div key={number} id={number} className="numbers button" onClick={() => handleNumberSelect(number)}>{number}</div>
}

const mapStateToProps = (state) => {
  //letting the component know about the state's mode versus the mode it represents will cause the color to change if there's a match
  return {
    stateMode: state.mode,
    prevMode: state.prevMode,
    a: state.a,
    b: state.b,
    saved: state.saved
  }
}

export default connect(mapStateToProps, {setMode, setFirstNumber, setSecondNumber, saveNumber})(NumberButton)
