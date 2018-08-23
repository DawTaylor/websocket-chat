import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';

const styles = {
  container: {
    height: 'calc(100vh - 76px)',
    overflow: 'auto',
  },
  message: {
    padding: '5px',
    margin: '10px 5px',
    width: '80%',
  },
  self: {
    backgroundColor: '#50b753',
    color: '#ffffff',
    margin: '10px 5px 5px auto',
  }
};

class ChatList extends Component {
  componentDidUpdate() {
    const chatList = document.querySelector('#chat-list');
    chatList.scrollTo(0, chatList.scrollHeight)
  }
  renderMessage(message, selfUser) {
    const messageStyle = message.user === selfUser ? {
      ...styles.message,
      ...styles.self
    } : styles.message;

    return (
      <Card style={messageStyle}>
        <strong>{message.user}</strong>
        <br />
        {message.content}
      </Card>
    )
  }
  render() {
    const { messages, user } = this.props;
    return (
      <div id="chat-list" style={styles.container}>
        {messages.map(message => this.renderMessage(message, user))}
      </div>
    )
  }
}

ChatList.defaultProps = {
  messages: [],
};

ChatList.propTypes = {
  messages: PropTypes.array,
  user: PropTypes.string.isRequired,
};

export default ChatList;
