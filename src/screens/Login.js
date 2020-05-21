import React, { Component, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button, TextBox } from '../components';
import Styles from '../assets/css';
import Variables from '../assets/css/variables';

import firebase from 'react-native-firebase';

export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: '',
            validateLogin: false,
            errorMessage: '',
            code: '+84',
        }
    }

    handleChange = number => {
        this.setState({
            phone: number
        });
    }

    validatePhone = () => {
        const { phone, code } = this.state;
        var newPhone = code + phone;
        firebase.auth().signInWithPhoneNumber(newPhone)
        .then(function(e) {
            // if(this.state.phone == null) return;
            e.confirm('123457').then(function(result) {
                console.log(result);
            })
            .catch(error => console.log("Code Confirm : " + error));
            // if(this.state.phone == null) return;
            // e.confirm(this.state.phone).then(function(result) {
                // console.log( "Thanh cong: " + e);
            // })
        })
        .catch((error) => { console.log("Lỗi : " + error.message) })
    }

    render() {
        return (
            <View style={Styles.Container}>
                <Text>Chào bạn,</Text>
                <Text>Nhập số điện thoại để tiếp tục</Text>
                <TextBox 
                placeholder={'Số điện thoại'}
                onChangeText={number => this.handleChange(number)}
                value={this.state.phone}
                keyboardType={'numeric'}
                maxLength={10}
                errorMessage={this.state.errorMessage}/>
                <Button title="Tiếp tục"
                onPress={() => this.validatePhone()}
                containerStyle={[
                    Styles.Container,
                    Styles.pb_none,
                    Styles.pt_none,
                    Styles.mb_md,
                ]}/>
                <Text>{this.state.phone}</Text>
            </View>
        );
    }
}