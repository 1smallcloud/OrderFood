import * as React from 'react';
import Login from './src/screens/LoginScreen';
import ItemProduct from './src/components/product/ItemProductComponent';
import ListProduct from './src/screens/ListProductScreen';
import TabView from './src/screens/TestScreen';
import MainProduct from './src/screens/MainProductScreen';
import Search from './src/screens/SearchScreen';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Search />
    );
  }
}