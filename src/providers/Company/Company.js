import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import * as Constants from '../../constants/Constants';
import {string} from "prop-types";

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      key: string,
      options: {},
    }

  }
}
