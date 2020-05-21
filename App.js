import * as React from 'react';
import Login from './src/screens/Login';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Login />
    );
  }
}