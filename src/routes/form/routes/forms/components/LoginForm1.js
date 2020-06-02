import React  from 'react';
import APPCONFIG from 'constants/appConfig';
import DEMO from 'constants/demoData';
import { withRouter } from "react-router-dom";
import Auth from '../../../../../providers/Auth';
import APIKit from "../../../../../providers/APIKit";

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MaterialIcon from 'components/MaterialIcon';
import CircularProgress from '@material-ui/core/CircularProgress'

const initialState = {
  username: '',
  password: '',
  errors: {},
  isAuthorized: false,
  isLoading: false,
  market: '',
};

export default class NormalForm extends React.Component {
  state = initialState;

  componentWillUnmount() {}

  onUsernameChange = username => {
    this.setState({username});
  };

  onPasswordChange = password => {
    this.setState({password});
  };

  onPressLogin() {
    const {username, password} = this.state;
    const payload = {username, password};
    console.log(payload);

    const onSuccess = ({data}) => {
      // Set JSON Web Token on success
      // setClientToken(data.token);
      this.setState({isLoading: false, isAuthorized: true});
    };

    const onFailure = error => {
      console.log(error && error.response);
      this.setState({errors: error.response.data, isLoading: false});
    };

    // Show spinner when call is made
    this.setState({isLoading: true});

    APIKit.post('/users/login/', payload)
      .then(onSuccess)
      .catch(onFailure);
  }

  render() {
    const {isLoading} = this.state;
    return (

      <section className="form-v1-container">
        <CircularProgress visible={isLoading} />
        <h2>Login to Continue</h2>
        <p className="lead">Welcome back, sign in with your {APPCONFIG.brand} account</p>
        <form onSubmit={this.onPressLogin.bind(this)} className="form-v1">
          <div className="form-group">
            <div className="input-group-v1">
              <div className="input-group-icon">
                <MaterialIcon icon="account_circle"/>
              </div>
              <TextField
                id="login1-name"
                placeholder={"Enter username..."}
                returnKeyType="next"
                fullWidth
                maxLength={256}
                autoComplete="off"
                type="email"
                value={this.state.username}
                onSubmitEditing={event =>
                  this.passwordInput.wrappedInstance.focus()
                }
                onChangeText={this.onUsernameChange(this.username)}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group-v1">
              <div className="input-group-icon">
                <MaterialIcon icon="lock"/>
              </div>
              <TextField
                id="login1-password"
                label="Password"
                type="password"
                fullWidth
                autoComplete="off"
                value={this.state.password}
                onChangeText={this.onPasswordChange(this.password)}
              />
            </div>
          </div>
          <div>
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked
                  value="login1-remember"
                  color="primary"
                />
              }
              label="Remember Me"
            />
          </div>
          <div className="form-group">
            <Button variant="contained" color="primary" onClick={this.onPressLogin.bind(this)} type="submit"
                    className="btn-cta btn-block">
              Log in
            </Button>
          </div>
        </form>
        <p className="additional-info">Don't have an account yet? <a href={DEMO.signUp}>Sign up</a></p>
        <p className="additional-info">Forgot your username or password? <a href={DEMO.forgotPassword}>Reset
          password</a></p>
      </section>
    );
  }

};
