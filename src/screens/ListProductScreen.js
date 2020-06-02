import * as React from 'react';
import { View, Text, FlatList, TouchableHighlight } from 'react-native';
import ItemProduct from '../components/product/ItemProductComponent';

const DATA = [
    {
        id: 1,
        name: '7 ngày Cà phê sữa đá',
        type: '001',
        price: 175000,
        category_pro: 'Món được yêu thích',
        image: 'https://product.hstatic.net/1000075078/product/tra_buoi_5c4c5ce2d4e44042a069ec9011ef1a9f_large.jpg'
    },
    {
        id: 2,
        name: '7 ngày Cà phê sữa đá ',
        type: '001',
        price: 175000,
        category_pro: 'Món được yêu thích',
        image: 'https://product.hstatic.net/1000075078/product/tra_dao_5f3925d9bfca4d0abc17f95b05fff5f7_large.jpg'
    },
    {
        id: 3,
        name: '7 ngày Cà phê sữa đá',
        type: '001',
        price: 175000,
        category_pro: 'Món được yêu thích',
        image: 'https://product.hstatic.net/1000075078/product/latte_dd6427d058294df5aa4745e5a6035a93_large.jpg'
    },
    {
        id: 4,
        name: '7 ngày Cà phê sữa đá',
        type: '001',
        price: 175000,
        category_pro: 'Món được yêu thích',
        image: 'https://product.hstatic.net/1000075078/product/tra_buoi_5c4c5ce2d4e44042a069ec9011ef1a9f_large.jpg'
    },
];
  

export default function ListProductScreen () {
    return (
        <View>
            <FlatList 
            data={DATA}
            renderItem={({ item }) => (
                <ItemProduct
                name={ item.name }
                image={ item.image }
                price={ item.price }
                />
            )}
            keyExtractor={item => item.id}
            numColumns={ 2 }
            />
        </View>
    );
}
