import React, { Component } from 'react'
import { push } from 'react-router-redux'
import moment from 'moment'

import AppBar from 'material-ui/AppBar'
import {Card, CardHeader} from 'material-ui/Card'

import { getUserByNickname } from '../../utils/helper'

import './style.css'

class Header extends Component {

  goHome = () => {
    this.props.dispatch(push('/'))
  }

  renderCard = () => {
    const userSelected = getUserByNickname(this.props.users, this.props.params.nickname)
    if (userSelected) {
      return (
        <Card className="app-header__card">
          <CardHeader
            style={{ padding: '10px' }}
            title={ userSelected.name }
            subtitle={ 'last seen ' + moment(userSelected.lastSeen).fromNow()}
            subtitleColor="rgb(62, 80, 82)"
            titleColor="#fff"
            avatar={ userSelected.avatar }
          />
        </Card>
      )
    }
    return <Card className="app-header__card" />
  }

  render() {
    return (
      <AppBar
        className="app-header__navbar"
        title="React Messenger"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        onTitleTouchTap={ this.goHome }
      >

        { this.renderCard() }

      </AppBar>
    );
  }
}

export default Header
