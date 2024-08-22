import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {
    bananasCount: 0,
    mangoesCount: 0,
  }

  onCountMangoes = () => {
    this.setState(prevState => {
      console.log(`previous mangoes count ${prevState.mangoesCount}`)
      return {mangoesCount: prevState.mangoesCount + 1}
    })
  }

  onCountBananas = () => {
    this.setState(prevState => {
      console.log(`previous bananas count ${prevState.bananasCount}`)
      return {bananasCount: prevState.bananasCount + 1}
    })
  }

  render() {
    const {bananasCount, mangoesCount} = this.state

    return (
      <div className="bg-container">
        <div className="detailed-container">
          <h1 className="counter">
            Bob ate <span>{mangoesCount}</span> mangoes{' '}
            <span>{bananasCount}</span> bananas
          </h1>

          <div className="cards-container">
            <div className="card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="img"
                alt="mango"
              />
              <button className="button" onClick={this.onCountMangoes}>
                Eat Mango
              </button>
            </div>
            <div className="card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="img"
                alt="banana"
              />
              <button className="button" onClick={this.onCountBananas}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
