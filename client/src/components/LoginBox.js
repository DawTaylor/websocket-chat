import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class LoginBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
    };

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() {
    const { user } = this.state;
    if (user.length === 0) return false;
    this.props.onLoginCallback(user);
  }

  render() {
    return (
      <Dialog open={true}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <DialogContentText>Identifique-se para continuar</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Username"
            type="text"
            fullWidth
            onChange={(e) => this.setState({ user: e.target.value })}
            onKeyUp={(e) => e.keyCode === 13 ? this.handleLogin() : null }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleLogin} color="primary">
            Entrar
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

LoginBox.propTypes = {
  onLoginCallback: PropTypes.func.isRequired,
};

export default LoginBox;