import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';

const styles = {
  div: {
    display: 'flex',
    position: 'fixed',
    bottom: 0,
    padding: '10px 0',
    width: '100%',
  },
  input: {
    flexGrow: 1,
    margin: '0 5px',
  }
};

class SendBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    }

    this.submitMessage = this.submitMessage.bind(this);
  }

  submitMessage() {
    const { message } = this.state;
    if (message.length === 0) return false;
    this.props.onSubmitCallback(message);
    this.setState({
      message: ''
    });
  }

  render() {
    const { message } = this.state;
    return (
      <Paper style={styles.div}>
        <TextField
          label="Message"
          value={message}
          onChange={(e) => this.setState({ message: e.target.value })}
          onKeyUp={(e) => e.keyCode === 13 ? this.submitMessage() : null}
          style={styles.input}/>
        <Button variant="fab" color="primary" onClick={this.submitMessage}>
          <SendIcon />
        </Button>
      </Paper>
    )
  }
}

SendBox.propTypes = {
  onSubmitCallback: PropTypes.func.isRequired,
};

export default SendBox;