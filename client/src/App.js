import React, { Component, Fragment } from 'react';
import openSocket from 'socket.io-client';
import SendBox from './components/SendBox';
import ChatList from './components/ChatList';
import LoginBox from './components/LoginBox';

// Connect to the Socket
const socket = openSocket('http://localhost:5000');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      messages: []
    }

    this.handleSend = this.handleSend.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  componentDidMount(){
    socket.on('update', messages => {
      this.setState({
        messages
      })
    })
  }

  handleSend(content) {
    const { user } = this.state;
    socket.emit('message', { user, content })
  }

  handleLogin(user) {
    console.log('handling login of ', user)
    if (user.length === 0) return false;
    this.setState({
      user,
    });
  }

  render() {
    const { messages, user } = this.state;
    return (
      <div className="App">
        {user && (
          <Fragment>
            <ChatList messages={messages} user={user} />
            <SendBox onSubmitCallback={this.handleSend} />
          </Fragment>
        )}

        {!user && (
          <LoginBox onLoginCallback={this.handleLogin} />
        )}
      </div>
    );
  }
}

export default App;
