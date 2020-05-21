import * as React from 'react';
import { Text, View } from 'react-native';
import Styles from '../../assets/css';

export default class Validate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return this.props.text ? (
            <View>
                style={[
                    {
                        ...Styles.mt_sm,
                        alignSelf: 'flex-start',
                        display: this.props.state ? 'flex' : 'none',
                        marginTop: -20
                    },
                    this.props.containerStyle,
                ]}
                <Text style={Styles.TextError}>{this.props.text}</Text>
            </View>
        ) : null;
    }
}