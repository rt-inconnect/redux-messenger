import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchUsers } from '../../actions/users'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Header from '../../components/Header'
import UserList from '../../components/UserList'

import './style.css'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(fetchUsers())
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="app">
          <Header  { ...this.props } />
          <div className="app-container">
            <div className="app-userlist">
              <UserList { ...this.props } />
            </div>
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = state => ({
  users: state.toJS().users,
  messages: state.toJS().messages
})

export default connect(mapStateToProps)(App)
