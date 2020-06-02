import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Icon } from 'react-native-elements';

import Variables from '../../assets/css/variables';
import Styles from '../../assets/css';


export default function ItemProduct ({ id, name, type, price, category, image }) {
    return (
        <View style={{ width: (Variables.WIDTH - 30 ) / 2,  marginTop: 10, marginLeft: 10 }} >
            <TouchableOpacity
            onPress={() => console.log("HI!")}
            activeOpacity={0.8}
            >
                <Card
                image={{ uri : `${image}` }}
                imageStyle={{ width: '100%', height: Variables.HEIGHT/4, resizeMode: 'cover'}}
                containerStyle={{ width: '100%', marginVertical: 0, marginHorizontal: 0, marginVertical: 0, borderRadius: 10, overflow: 'hidden', zIndex: -1 }}
                >
                    <Text style={ styles.titleStyle } numberOfLines={1}>{ name }</Text>
                    <View style={{ paddingTop: 20, flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 1, borderTopColor: Variables.Colors.GREY }}>
                        <Text style={ styles.priceStyle } >{ price } đ</Text>
                        <Icon name="ios-add-circle-outline" type='ionicon' size={35} color={ Variables.Colors.ORANGE }/>
                    </View>
                </Card>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    titleStyle : {
        ...Styles.TextTitle,
        ...Styles.mt_xs,
        ...Styles.mb_xl
    },

    priceStyle : {
        ...Styles.TextTitle,
    }
});