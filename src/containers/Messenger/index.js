import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'

import MessageWall from '../../components/MessageWall'
import MessageForm from '../../components/MessageForm'

import { getUserByNickname } from '../../utils/helper'

import './style.css'

class Messenger extends Component {

  goHome = () => {
    this.props.dispatch(push('/'))
  }

  /*
    After refreshing the page user cannot be found by routeParams
    cause users are always randomly generated by Fakerjs
    if server-side is implemented this code not needed
  */
  componentDidMount() {
    if (!getUserByNickname(this.props.users, this.props.params.nickname)) this.goHome()
  }

  render() {
    return (
      <div className="app-messenger">
        <MessageWall { ...this.props } />
        <MessageForm { ...this.props } />
      </div>
    );
  }
}


const mapStateToProps = state => ({
  messages: state.toJS().messages,
  users: state.toJS().users
})

export default connect(mapStateToProps)(Messenger)