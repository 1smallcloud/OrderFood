
import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Animated,
  Text,
  StatusBar,
  TextInput
} from 'react-native';
import { Icon } from 'react-native-elements';
import { TabBar, TabView } from 'react-native-tab-view';
import ContactsList from '../components/product/ItemProduct';
import unorm from 'unorm';

const DATA = [
    {
        "data": [
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

export default class TabViewNew extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dataSource: DATA,
            text: ''
        };
        this.arrayholder = DATA;
    }

    nonAccentVietnamese(str) {
      str = str.toUpperCase();
      str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
      str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
      str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
      str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
      str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
      str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
      str = str.replace(/đ/g, "d");
      str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323|\u0302/g, "");
      str = str.replace(/\u02C6|\u0306|\u031B/g, "");
      return str;
    }
    

    SearchFilterFunction(text) {
        const searchText =this.nonAccentVietnamese(text);
        const newData = this.arrayholder.reduce((result, sectionData) => {
            const { title, data } = sectionData;
            const filteredData = data.filter(
              element => this.nonAccentVietnamese(unorm.nfkd(element.name)).indexOf(searchText) > -1
            );
          
            if (filteredData.length !== 0) {
              result.push({
                data: filteredData
              });
            }
          
            return result;
        }, [])
        this.setState({
            dataSource: newData,
            text: text
        })
    }

  render() {
    return (
        <View>
             <TextInput
                style={styles.textInputStyle}
                onChangeText={(text) => this.SearchFilterFunction(text)}
                value={this.state.text}
                underlineColorAndroid="transparent"
                placeholder="Search Here"
            />

            <ContactsList
                sections={ this.state.dataSource }
                scrollEventThrottle={1}
                onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { y: this.state.scroll } } }],
                { useNativeDriver: true }
                )}
                contentContainerStyle={{ paddingTop: HEADER_HEIGHT }}
            />
        </View>
    );
  }
}

const styles = StyleSheet.create({
    viewStyle: {
      justifyContent: 'center',
      flex: 1,
      marginTop: 40,
      padding: 16,
    },
    textStyle: {
      padding: 10,
    },
    textInputStyle: {
      height: 40,
      borderWidth: 1,
      paddingLeft: 10,
      borderColor: '#009688',
      backgroundColor: '#FFFFFF',
    },
  });