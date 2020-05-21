import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Variables from '../../assets/css/variables';
import Styles from '../../assets/css';

export default class BtnComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            onFocus: false,
        }
    }

    height = this.props.height ? this.props.height : Variables.HEIGHT_CONTROL;
    
    render() {
        const {} = this.state;
        return (
            <View style={ this.props.style }>
                <TouchableWithoutFeedback
                {...this.props}
                onPressIn={() => {
                    this.setState({ onFocus: true }) 
                }}
                onPressOut={() => {
                    this.setState({ onFocus: false })
                }}
                accessibilityRole="button"
                activeOpacity={0.3}
                underlayColor="#000"
                >
                  <View
                        style={[
                        this.styles.buttonStyle,
                        this.props.buttonStyle,
                        this.state.onFocus ? this.styles.disabledStyle : {},
                        ]}>
                        {this.props.icon}
                        <Text
                        style={ this.styles.titleStyle}>
                        {this.props.title}
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }

    styles = StyleSheet.create({
        buttonStyle: {
          backgroundColor: Variables.Colors.ORANGE,
          borderRadius: Variables.BORDER_RADIUS,
          borderWidth: 1,
          borderColor: Variables.Colors.ORANGE,
          height: this.height,
          paddingHorizontal: Variables.Space.sm,
          paddingVertical: Variables.Space.xs,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: this.props.iconRight ? 'row-reverse' : 'row',
          flexWrap: 'nowrap',
          minWidth: '100%',
          marginBottom: this.props.marginBottom ? Variables.Space.sm : null,
        },
        titleStyle: {
          fontSize: Variables.FontSizes.Text,
          fontFamily: 'EB Garamond',
          color: '#fff'
        },
        disabledStyle: {
          borderColor: Variables.Colors.TRANS,
          backgroundColor: Variables.Colors.ORANGE_LIGHT,
        },
    });
}