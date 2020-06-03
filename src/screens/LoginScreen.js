import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, Alert } from 'react-native';
import { Button, TextBox, ButtonNoColor } from '../components';
import Styles from '../assets/css';
import Variables from '../assets/css/variables';
import auth from '@react-native-firebase/auth';

export default function PhoneSignIn({ navigation }) {

    const [phone, setPhone] = useState('+84');
    const [confirm, setConfirm] = useState(null);
    const [code, setCode] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    async function signInWithPhoneNumber(phoneNumber) {
      if(phone.length == 0) {
        setErrorMessage('Vui lòng nhập số điện thoại')
      }
      else {
        if(phone.toString().split('').slice(0, 3).join('') != '+84' || phone.length < 10) {
          setErrorMessage("Vui lòng nhập theo định dạng số điện thoại hợp lệ")
        }
        else {
          setErrorMessage('');
          const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
          setConfirm(confirmation);
        }
      }
    }
  
    async function confirmCode() {
      if(code.length == 0) {
        setErrorMessage('Vui lòng nhập mã xác thực')
      }
      else {
        try {
          await confirm.confirm(code);
          navigation.navigate('MainProduct')
        } catch (error) {
          Alert.alert(
            "Thông báo",
            "Bạn nhập sai mã code vui lòng nhập lại!",
            [
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
          );
        }
      }
    }

    function signOut() {
      auth().signOut();
    };

    function changePhone(number) {
      setErrorMessage('');
      setPhone(number)
    }

    function changeCode(number) {
      setErrorMessage('');
      setCode(number)
    }

    if (!confirm) {
      return (
        <View style={styles.container}>
          <Image
            source={require('../assets/images/Login.jpg')}
            style={styles.styleImage}
            >
          </Image>
          <View style={styles.content}>
            <Text style={ styles.styleTitle }>Chào bạn,</Text>
            <Text style={ styles.styleText }>Nhập số điện thoại để tiếp tục</Text>
            <TextBox 
              placeholder={'Số điện thoại'}
              onChangeText={ phone => changePhone(phone) }
              value={phone}
              keyboardType={'numeric'}
              maxLength={12}
              errorMessage={errorMessage}
            />

            <Button title="Tiếp tục"
              onPress={() =>signInWithPhoneNumber(phone)}
              containerStyle={[
                  Styles.Container,
                  Styles.pb_none,
                  Styles.pt_none,
                  Styles.mb_md,
              ]}/>

            <ButtonNoColor
              title="Bỏ qua"
              onPress={() => {
                navigation.navigate('MainProduct');
                setErrorMessage('');
                }}
              />
          </View>
      </View>
    );
  }
  
    return (
      <View style={styles.styleConfirm}>
        <Text style={styles.styleText}>Nhập mã xác thực bao gồm 6 số đã được gửi đến số điện thoại {phone} để tiếp tục</Text>
        <TextBox 
          placeholder={'Mã xác thực'}
          onChangeText={text => changeCode(text)}
          value={code}
          keyboardType={'numeric'}
          maxLength={6}
          errorMessage={errorMessage}
        />
        <Button title="Xác nhận mã code" onPress={() => confirmCode()} />
        <ButtonNoColor title="Bỏ qua" onPress={() => {
          setConfirm(null);
          setErrorMessage('');
          }}
        />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    content: {
      ...Styles.ml_md,
      ...Styles.mr_md,
    },
    styleConfirm: {
      flex: 1,
      justifyContent: 'center',
      ...Styles.ml_md,
      ...Styles.mr_md,
    },
    styleImage: {
      width: '100%',
      height: Variables.HEIGHT / 3,
      resizeMode: 'cover',
    },
    styleTitle: {
      ...Styles.TextTitle,
      ...Styles.mt_lg,
      ...Styles.mb_sm,
    },
    styleText: {
      ...Styles.TextDefault,
    }
  })