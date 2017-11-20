import React, { Component } from 'react'
import './App.css'

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const colors = ['aqua', 'coral', 'deepPink', 'orangeRed', 'yellow', 'indigo', 'mediumSpringGreen', 'deepSkyBlue', 'magenta']
export default class App extends Component {
  state = {
    clicked: [],
    bgColor: ''
  }

  handleClick = (index) => {
    let clicked = this.state.clicked
    clicked[index] = !clicked[index]
    this.setState({ clicked })
  }

  render () {
    return (
      <div className='App'>
        <Container
          numbers={numbers}
          handleClick={this.handleClick}
          colors={colors}
          bgColor={this.state.bgColor}
          clicked={this.state.clicked}
        />
      </div>
    )
  }
}

const Container = ({ numbers, colors, handleClick, bgColor, clicked }) => (
  <div className='container'>

    {numbers.map((number, index) =>
      <div
        className={'box' + ' ' + index}
        key={number}
        style={{backgroundColor:colors[index]}}
        onClick={handleClick.bind(this, index)}>
        {clicked[index] && <span>{number}</span>}

      </div>
    )}

  </div>
)
