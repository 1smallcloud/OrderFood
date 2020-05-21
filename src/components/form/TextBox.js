import * as React from 'react';
import { Input } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import Variables from '../../assets/css/variables';
import Styles from '../../assets/css';
import { Validate } from '../index';

export default class InputComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            typed: false,
        }
    }

    render() {
        return (
            <Input
            autoCorrect={false}
            autoCapitalize="none"
            { ...this.props }
            containerStyle ={[ this.styles.containerStyle, this.props.containerStyle]}
            inputStyle={[ this.styles.inputStyle, this.props.inputStyle ]}
            placeholderTextColor = { Variables.Colors.PLACEHOLDER_COLOR}
            onFocus={() => {
                this.setState({typed: true});
                this.props.onFocus && this.props.onFocus();
            }}
            errorProps={<Validate text={ this.props.errorMessage }/>}
            errorStyle={{ ...Styles.TextErrors, marginTop: 4 }}
            labelStyle={[
                this.styles.labelStyle,
                this.props.errorMessage && {
                    color: '#F40909',
                },
            ]}
            />
        );
    }

    styles = StyleSheet.create({
        containerStyle: {
            paddingHorizontal: 0,

        },
        inputStyle: {
            color: Variables.Colors.TEXT,
            ...Styles.TextDefault,
            lineHeight: 20,
        },
        labelStyle: {
            ...Styles.TextLabel,
            ...Styles.mb_xs
        }
    })
}