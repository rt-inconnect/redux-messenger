import React, { Component } from 'react'

import Paper from 'material-ui/Paper'

import './style.css'

class Home extends Component {
  render() {
    return (
      <div className="app-home">
        <Paper zDepth={5} className="app-home__paper">
        </Paper>
      </div>
    );
  }
}

export default Home
