import axios from 'axios';
import * as Constants from '../../constants/Constants';

const key = '5840e9e52720764bf18c961d5f9efe3672e00332'
// Create axios client, pre-configured with baseURL
// Set JSON Web Token in Client to be included in all calls
let APIKit = axios.create({
  baseURL: Constants.API_ENDPOINT,
  timeout: 10000,
  headers: {'Authorization': 'Token ' + key }
});

export default APIKit;
