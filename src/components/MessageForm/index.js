import React, { Component } from 'react'
import Dropzone from 'react-dropzone'

import Paper from 'material-ui/Paper'
import Avatar from 'material-ui/Avatar'
import TextField from 'material-ui/TextField'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import SendIcon from 'material-ui/svg-icons/content/send'
import AttachFileIcon from 'material-ui/svg-icons/editor/attach-file'

import { sendMessage } from '../../actions/messages'

import './style.css'

class MessageForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      file: props.messages.message && props.messages.message.file,
      body: props.messages.message && props.messages.message.body
    }
  }

  componentDidUpdate() {
    document.getElementById('app-messageform-input').focus()
  }

  onChange = (event) => {
    this.setState({ body: event.target.value })
  }

  onSubmit = (event) => {
    const { body, file } = this.state
    const author = { name: 'RT', avatar: 'images/me.jpg' }

    body && this.props.dispatch(sendMessage({ body, file, author }))

    this.setState({
      file: '',
      body: ''
    })

    event.preventDefault()
  }

  onDrop = (file) => {
    this.setState({ file })
  }

  onAttachFile = () => {
    this.refs.dropzone.open()
  }

  onEnterPress = (event) => {
    if (event.nativeEvent.keyCode === 13 && !event.nativeEvent.shiftKey) {
      this.onSubmit(event)
    }
  }

  render() {
    return (
      <form className="app-messageform" onSubmit={this.onSubmit}>
        <Dropzone className="app-messageform__dropezone" ref="dropzone" multiple={false} onDrop={this.onDrop} />
        <Paper className="app-messageform__paper" zDepth={5}>
          <div className="app-messageform__avatar app-messageform__controls">
            <Avatar
              src="images/me.jpg"
              size={60}
            />
          </div>
          <div className="app-messageform__textfield">
            <TextField
              id="app-messageform-input"
              hintText="Write a message..."
              hintStyle={{ bottom: 'initial', top: '10px' }}
              multiLine={true}
              rows={2}
              rowsMax={10}
              fullWidth={true}
              value={this.state.body}
              onChange={this.onChange}
              name="message"
              onKeyPress={this.onEnterPress}
            />
          </div>
          <div className="app-messageform__controls">
            <FloatingActionButton mini={true}
              secondary={true}
              disabled={ !!this.state.file }
              className="app-messageform__attachfile"
              onClick={this.onAttachFile}
            >
              <AttachFileIcon />
            </FloatingActionButton>
            <FloatingActionButton onClick={this.onSubmit} disabled={ this.props.messages.sending }>
              <SendIcon />
            </FloatingActionButton>
          </div>
        </Paper>
      </form>
    )
  }
}

export default MessageForm
