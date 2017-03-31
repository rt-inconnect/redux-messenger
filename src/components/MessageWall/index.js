import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import moment from 'moment'

import Paper from 'material-ui/Paper'
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import CircularProgress from 'material-ui/CircularProgress';
import CloudDownloadIcon from 'material-ui/svg-icons/file/cloud-download'

import { getUserByNickname } from '../../utils/helper'

import './style.css'

class MessageWall extends Component {

  componentDidUpdate() {
    let paperEl = ReactDOM.findDOMNode(this.refs._paperEl)
    let listEl = ReactDOM.findDOMNode(this.refs._listEl)

    if (paperEl && listEl) paperEl.scrollTop = listEl.scrollHeight
  }

  renderFile = (file) => {
    if (file && file[0]) {
      const type = file[0].type.split('/')
      if (type && type[0] && type[0] === 'image'){
        return (
          <div className="app-messagewall__file"><img src={file[0].preview} alt="preview" /></div>
        )
      }
      return (
        <div className="app-messagewall__filedownload">
          <CloudDownloadIcon />
          <span>{ file[0].name }</span>
        </div>
      )
    }
  }

  renderMessage = (message) => {
    return (
      <ListItem
        key={ message.id }
        hoverColor="#fff"
        innerDivStyle={{ cursor: 'default' }}
        leftAvatar={<Avatar src={ message.author.avatar } />}
        primaryText={ message.author.name }
        secondaryText={
          <div className="app-messagewall__body">
            <span className="app-messagewall__createdAt">{ moment(message.createdAt).fromNow() }</span>
            { message.body }
            { this.renderFile(message.file) }
          </div>
        }
        secondaryTextLines={2}
      />
    )
  }

  renderList = (messages) => {
    return (
      <List className="app-messagewall__list" ref="_listEl">
        { messages.data && messages.data.map(this.renderMessage) }
      </List>
    )
  }

  renderLoading = () => {
    return (
      <CircularProgress className="app-messagewall__loading" size={80} thickness={5} />
    )
  }

  renderTyping = (messages) => {
    const user = getUserByNickname(this.props.users, messages.userTyping)
    if (messages.typing && messages.userTyping === this.props.params.nickname) {
      return (
        <div className="app-messagewall__typing">{ user.name } typing message...</div>
      )
    }
  }

  render() {
    const { messages } = this.props
    return (
      <div className="app-messagewall">
        <Paper className="app-messagewall__paper" ref="_paperEl">
           { messages.loading ? this.renderLoading() : this.renderList(messages) }
           { this.renderTyping(messages) }
        </Paper>
      </div>
    )
  }

}

export default MessageWall
