import React from 'react';
import axios from 'axios';
import * as Constants from '../../constants/Constants';

export class User extends React.Component {

}
export default class Auth extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: this.email,
      password: this.password,
      isLoading: false,
      error: null
    };
  }
  login(credentials) {
    this.setState({ isLoading: true});
    const headers = new Headers();
    headers.append('access-control-allow-origin', '*');
    let options = new Request.headers({headers: headers});
    fetch.post(Constants.API_ENDPOINT + '/users/login/', credentials, options)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw  new Error('Something went wrong...');
        }
      })
      .then(data => this.setState({email: data.email, password: data.password, isLoading: false}))
      .catch(error => this.setState({error, isLoading: false}));
  }



}
