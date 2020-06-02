
import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Animated,
  Text,
  StatusBar
} from 'react-native';
import { Icon } from 'react-native-elements';
import { TabBar, TabView } from 'react-native-tab-view';
import ContactsList from '../components/product/ItemProduct';

const DATA_FIRST = [
    {
        title: 'Món được yêu thích',
        data: [
            {
                id: 1,
                name: '7 ngày Cà phê sữa đá',
                id_category: 'C001',
                category: 'Phổ biến',
                type: 'Món được yêu thích',
                price: 175000,
                image: 'https://tchmobileapp.s3.ap-southeast-1.amazonaws.com/menufrontend/5e819a19458e7100112c56fa_hinh%20app%203%20-%202.%20.jpg'
            },
            {
                id: 2,
                name: '5 ngày Cà phê sữa đá ',
                id_category: 'C001',
                category: 'Phổ biến',
                type: 'Món được yêu thích',
                price: 135000,
                image: 'https://tchmobileapp.s3.ap-southeast-1.amazonaws.com/menufrontend/5e819a19458e7100112c56fa_hinh%20app%203%20-%202.%20.jpg'
            },
            {
                id: 3,
                name: '3 ngày Cà phê sữa đá ',
                id_category: 'C001',
                category: 'Phổ biến',
                type: 'Món được yêu thích',
                price: 90000,
                image: 'https://tchmobileapp.s3.ap-southeast-1.amazonaws.com/menufrontend/5e819a19458e7100112c56fa_hinh%20app%203%20-%202.%20.jpg'
            },
            {
                id: 4,
                name: 'Trà Gần Nhau Hơn',
                id_category: 'C002',
                category: 'Phổ biến',
                type: 'Món được yêu thích',
                price: 90000,
                image: 'https://product.hstatic.net/1000075078/product/tra_gan_nhau_hon_48d1acc909f847eaab12f760ef3892ba_large.jpg'
            }
        ]
    }
];

const DATA_SECOND = [
  {
      title: 'Cà phê',
      data: [
          {
              id: 1,
              name: 'Cà Phê Sữa Đá',
              id_category: 'C002',
              category: 'Thức uống',
              type: 'Cà phê',
              price: 29000,
              image: 'https://product.hstatic.net/1000075078/product/cfsd_615a3cb2b1e342d2b1986bfeb6572070_large.jpg'
          },
          {
              id: 2,
              name: 'Caramel Macciato Đá ',
              id_category: 'C002',
              category: 'Thức uống',
              type: 'Cà phê',
              price: 50000,
              image: 'https://product.hstatic.net/1000075078/product/caramel_macchiato_24ff98b746e84b7aba702c01a60b1a52_large.jpg'
          },
          {
              id: 3,
              name: '3 ngày Cà phê sữa đá ',
              id_category: 'C001',
              category: 'Phổ biến',
              type: 'Món được yêu thích',
              price: 90000,
              image: 'https://tchmobileapp.s3.ap-southeast-1.amazonaws.com/menufrontend/5e819a19458e7100112c56fa_hinh%20app%203%20-%202.%20.jpg'
          },
          {
              id: 4,
              name: 'Trà Gần Nhau Hơn',
              id_category: 'C002',
              category: 'Phổ biến',
              type: 'Món được yêu thích',
              price: 90000,
              image: 'https://product.hstatic.net/1000075078/product/tra_gan_nhau_hon_48d1acc909f847eaab12f760ef3892ba_large.jpg'
          }
      ]
  }
];

const DATA_THIRD = [
  {
      title: 'Món được yêu thích',
      data: [
          {
              id: 1,
              name: '7 ngày Cà phê sữa đá',
              id_category: 'C001',
              category: 'Phổ biến',
              type: 'Món được yêu thích',
              price: 175000,
              image: 'https://tchmobileapp.s3.ap-southeast-1.amazonaws.com/menufrontend/5e819a19458e7100112c56fa_hinh%20app%203%20-%202.%20.jpg'
          },
          {
              id: 2,
              name: '5 ngày Cà phê sữa đá ',
              id_category: 'C001',
              category: 'Phổ biến',
              type: 'Món được yêu thích',
              price: 135000,
              image: 'https://tchmobileapp.s3.ap-southeast-1.amazonaws.com/menufrontend/5e819a19458e7100112c56fa_hinh%20app%203%20-%202.%20.jpg'
          },
          {
              id: 3,
              name: '3 ngày Cà phê sữa đá ',
              id_category: 'C001',
              category: 'Phổ biến',
              type: 'Món được yêu thích',
              price: 90000,
              image: 'https://tchmobileapp.s3.ap-southeast-1.amazonaws.com/menufrontend/5e819a19458e7100112c56fa_hinh%20app%203%20-%202.%20.jpg'
          },
          {
              id: 4,
              name: 'Trà Gần Nhau Hơn',
              id_category: 'C002',
              category: 'Phổ biến',
              type: 'Món được yêu thích',
              price: 90000,
              image: 'https://product.hstatic.net/1000075078/product/tra_gan_nhau_hon_48d1acc909f847eaab12f760ef3892ba_large.jpg'
          }
      ]
  }
];

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

const HEADER_HEIGHT = 20;
const COLLAPSED_HEIGHT =  StatusBar.currentHeight;
const SCROLLABLE_HEIGHT = HEADER_HEIGHT - COLLAPSED_HEIGHT;
export default class TabViewNew extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      routes: [
        { key: 'C001', title: 'Phổ biến' },
        { key: 'C002', title: 'Thức uống' },
        { key: 'C003', title: 'Đồ ăn' },
      ],
      scroll: new Animated.Value(0),
    };
  }

  _handleIndexChange = (index) => {
    this.setState({ index });
  };

  _renderTabBar  = (props) => {
    return (
      <View style={{ position: 'relative' }}>
       <TabBar
       {...props}
       style={styles.tabbar}
       tabStyle={{ width: initialLayout.width/4 }}
       indicatorStyle={{ backgroundColor: "orange", width: initialLayout.width/4, justifyContent: 'center' }}
       renderLabel={({ route, focused, color }) => (
              <Text style={{ color, margin: 8 }}>
                  {route.title}
              </Text>
          )}
          activeColor={'#000000'}
          inactiveColor={'#333333'}
       />
       <View style={{ position: 'absolute', top: 15, right: initialLayout.width/8, zIndex: 1, color: '#333333' }}>
         <Icon name="ios-search" type='ionicon'/>
        </View>
       </View>
    );
  };

  _renderScene = ({ route }) => {    
    return (
        <ContactsList
        sections={route.key == 'C001' ? DATA_FIRST : route.key == 'C002' ? DATA_SECOND : DATA_THIRD}
        scrollEventThrottle={1}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: this.state.scroll } } }],
          { useNativeDriver: true }
        )}
        contentContainerStyle={{ paddingTop: HEADER_HEIGHT }}
      />
      
    );
  };

  render() {
    return (
      <TabView
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={this._renderTabBar }
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabbar: {
    backgroundColor: '#fff',
    elevation: 0,
    shadowOpacity: 0
  },
});