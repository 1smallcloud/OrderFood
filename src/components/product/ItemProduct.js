import React, { Component } from 'react';
import { View, Text, Animated, FlatList, TouchableOpacity, StyleSheet, SectionList } from 'react-native';

import { Card, Icon } from 'react-native-elements';

import Variables from '../../assets/css/variables';
import Styles from '../../assets/css';

const AnimatedFlatList = Animated.createAnimatedComponent(SectionList);

export default class Contacts extends Component {
  constructor(props) {
    super(props);
  }


  _renderItem = ({ item, section }) => (
    <View>
      <Text>{ item.title }</Text>
      <View style={{ width: (Variables.WIDTH - 30 ) / 2,  marginTop: 10, marginLeft: 10 }} >
        <TouchableOpacity
        onPress={() => console.log("HI!")}
        activeOpacity={0.8}
        >
            <Card
            image={{ uri : `${item.image}` }}
            imageStyle={{ width: '100%', height: Variables.HEIGHT/4, resizeMode: 'cover'}}
            containerStyle={{ width: '100%', marginVertical: 0, marginHorizontal: 0, marginVertical: 0, borderRadius: 10, overflow: 'hidden', zIndex: -1 }}
            >
                <Text style={ styles.titleStyle } numberOfLines={1}>{ item.name }</Text>
                <View style={{ paddingTop: 20, flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 1, borderTopColor: Variables.Colors.GREY }}>
                    <Text style={ styles.priceStyle } >{ item.price } đ</Text>
                    <Icon name="ios-add-circle-outline" type='ionicon' size={35} color={ Variables.Colors.ORANGE }/>
                </View>
            </Card>
        </TouchableOpacity>
      </View>
    </View>
  );

  _renderSectionListItem = ({ item, section }) => {
    return (
        <FlatList
          data={section.data}
          numColumns={2}
          renderItem={this._renderItem}
          keyExtractor={(item) => item.name}
        />
      )
  }

  render() {
    return (
        <AnimatedFlatList
        extraData={this.state}
        sections={this.props.sections}
        keyExtractor={(item, i) => i}
        renderItem={this._renderSectionListItem}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
        {...this.props}
      />
    );
  }
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
