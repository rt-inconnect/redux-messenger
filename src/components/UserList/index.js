import React, { Component } from 'react'
import { push } from 'react-router-redux'
import classNames from 'classnames/dedupe'

import Paper from 'material-ui/Paper'
import {List, ListItem} from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import Avatar from 'material-ui/Avatar'
import CircularProgress from 'material-ui/CircularProgress';

import { fetchMessages, typingMessage } from '../../actions/messages'
import { getUserByNickname } from '../../utils/helper'

import './style.css'

class UserList extends Component {

  goTo = (user) => {
    this.props.dispatch(fetchMessages(user))
    this.props.dispatch(push('/' + user.nickname))

    clearInterval(this._interval)

    this._interval = setInterval(() => {
      if (!this.props.messages.typing) this.props.dispatch(typingMessage(user))
    }, 1000)
  }

  renderUser = (user) => {
    const { typing, userTyping } = this.props.messages
    const userSelected = getUserByNickname(this.props.users, this.props.params.nickname)

    const selectedClass = classNames(
      {
        'app-userlist__selected': userSelected && userSelected.nickname === user.nickname
      }
    )

    return (
      <ListItem key={user.id}
        onClick={() => { this.goTo(user) }}
        className={selectedClass}
        primaryText={user.name}
        secondaryText={(typing && userTyping === user.nickname) ? 'typing...' : ''}
        leftAvatar={<Avatar src={user.avatar} />}
      />
    )
  }

  renderList = (users) => {
    return (
      <List>
        <Subheader>Recent chats</Subheader>
        { users.data && users.data.map(this.renderUser) }
      </List>
    )
  }

  renderLoading = () => {
    return (
      <CircularProgress className="app-userlist__loading" size={80} thickness={5} />
    )
  }

  render() {
    const { users } = this.props

    return (
      <Paper zDepth={5} className="app-userlist__paper">
        { users.loading ? this.renderLoading() : this.renderList(users) }
      </Paper>
    )

  }
}

export default UserList
