import {Component} from 'react'
import {v4} from 'uuid'

import CounterItems from '../CounterItems'

import './index.css'

class Counter extends Component {
  state = {
    inputText: '',
    wordList: [],
  }

  onAddText = event => {
    event.preventDefault()
    const {inputText} = this.state

    const newWord = {
      id: v4(),
      word: inputText,
    }

    this.setState(prevState => ({
      wordList: [...prevState.wordList, newWord],
      inputText: '',
    }))
  }

  onEnterInputText = event => {
    this.setState({
      inputText: event.target.value,
    })
  }

  render() {
    const {inputText, wordList} = this.state
    return (
      <div className="main-container">
        <div className="result-container">
          <div className="text-container-title">
            <h1 className="heading-title">
              Count the characters like a boss...
            </h1>
          </div>

          {wordList.length === 0 ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png "
              alt="no user inputs"
              className="image"
            />
          ) : (
            <ul className="list-items-container">
              {wordList.map(eachItem => (
                <CounterItems key={eachItem.id} wordDetails={eachItem} />
              ))}
            </ul>
          )}
        </div>
        <div className="input-container">
          <h1 className="input-title">Character Counter</h1>
          <form onSubmit={this.onAddText}>
            <input
              className="input-box"
              type="text"
              placeholder="Enter the Characters here"
              id="word"
              value={inputText}
              onChange={this.onEnterInputText}
            />
            <button type="submit" className="add-button">
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default Counter
