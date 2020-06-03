import React, { Component } from 'react';
import { View, Text, Animated, FlatList, TouchableOpacity, StyleSheet, SectionList } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import Variables from '../../assets/css/variables';
import Styles from '../../assets/css';

const AnimatedSectionList = Animated.createAnimatedComponent(SectionList);

export default class ItemProduct extends Component {
  constructor(props) {
    super(props);
  }

  _renderItem = ({ item, section }) => (
    <View>
      <View style={styles.coverContent} >
        <TouchableOpacity
        onPress={() => console.log("HI!")}
        activeOpacity={0.8}
        >
          <Card
          image={{ uri : `${item.image}` }}
          imageStyle={styles.imgStyle}
          containerStyle={styles.itemStyle}
          >
            <Text style={ styles.titleStyle } numberOfLines={1}>{ item.name }</Text>
            <View style={styles.contentItem}>
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
        <AnimatedSectionList
        extraData={this.state}
        sections={this.props.sections}
        keyExtractor={(item, i) => i}
        renderItem={this._renderSectionListItem}
        renderSectionHeader={({ section: { title } }) => (
          title ? <Text style={styles.header}>{title}</Text> : null
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
      ...Styles.mb_xl,
      
  },
  priceStyle : {
      ...Styles.TextTitle,
  },
  coverContent: {
    width: (Variables.WIDTH - 30 ) / 2,
    marginTop: 10,
    marginLeft: 10
  },
  header: {
    ...Styles.TitleLabel,
    ...Styles.mt_md,
    ...Styles.ml_md,
    ...Styles.mb_sm,
  },
  imgStyle: {
    width: '100%',
    height: Variables.HEIGHT/4,
    resizeMode: 'cover',
  },
  itemStyle: {
    width: '100%',
    marginVertical: 0,
    marginHorizontal: 0,
    marginVertical: 0,
    borderRadius: 10,
    overflow: 'hidden',
    zIndex: -1
  },
  contentItem: {
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: Variables.Colors.GREY 
  }
});
