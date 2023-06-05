// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    coinImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    heads: 0,
    tails: 0,
  }

  onClickTossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 1) {
      this.setState({
        coinImage: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      })
      this.setState(prevState => ({tails: prevState.tails + 1}))
    } else {
      this.setState({
        coinImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      })
      this.setState(prevState => ({heads: prevState.heads + 1}))
    }
  }

  render() {
    const {coinImage, heads, tails} = this.state
    const total = heads + tails

    return (
      <div className="bg-container">
        <div className="toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="caption">Heads (or) Tails</p>
          <img className="coin-img" src={coinImage} alt="toss result" />
          <button
            onClick={this.onClickTossCoin}
            className="toss-coin-btn"
            type="button"
          >
            Toss Coin
          </button>
          <div className="count-container">
            <p>Total: {total} </p>
            <p>Heads: {heads} </p>
            <p>Tails: {tails} </p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
