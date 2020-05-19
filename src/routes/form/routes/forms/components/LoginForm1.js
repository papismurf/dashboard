import React, { useState } from 'react';
import APPCONFIG from 'constants/appConfig';
import DEMO from 'constants/demoData';
import { withRouter } from "react-router-dom";
import Auth from '../../../../../providers/Auth';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MaterialIcon from 'components/MaterialIcon';

export default function NormalForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {

      alert("Logged In")
      this.props.history.push(DEMO.home2);
    } catch {
      alert(e.message);
    }

  }
    return (
      <section className="form-v1-container">
        <h2>Login to Continue</h2>
        <p className="lead">Welcome back, sign in with your {APPCONFIG.brand} account</p>
        <form onSubmit={handleSubmit} className="form-v1">
          <div className="form-group">
            <div className="input-group-v1">
              <div className="input-group-icon">
                <MaterialIcon icon="account_circle" />
              </div>
              <TextField
                id="login1-name"
                label="Email"
                fullWidth
                autoComplete="off"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group-v1">
              <div className="input-group-icon">
                <MaterialIcon icon="lock" />
              </div>
              <TextField
                id="login1-password"
                label="Password"
                type="password"
                fullWidth
                autoComplete="off"
                value={password}
                onChange={e => setPassword(e.target.value)}
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
            <Button variant="contained" color="primary" disabled={!validateForm()} type="submit" className="btn-cta btn-block">
              Log in
            </Button>
          </div>
        </form>
        <p className="additional-info">Don't have an account yet? <a href={DEMO.signUp}>Sign up</a></p>
        <p className="additional-info">Forgot your username or password? <a href={DEMO.forgotPassword}>Reset password</a></p>
      </section>
    );
}

