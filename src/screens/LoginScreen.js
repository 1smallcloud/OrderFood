import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Button, TextBox } from '../components';
import Styles from '../assets/css';
import Variables from '../assets/css/variables';

import auth from '@react-native-firebase/auth';
// export default function LoginScreen () {
//     // constructor(props) {
//     //     super(props);
//     //     this.state = {
//     //         phone: '',
//     //         validateLogin: false,
//     //         errorMessage: '',
//     //         code: '+84',
//     //     }
//     // }

//     const [phone, setPhone] = useState();
//     const [validateLogin, setValidateLogin] = useState(false);
//     const [errorMessage, setErrorMessage] = useState();
//     const [code, setCode] = useState('+84');


//     handleChange = number => {
//         setPhone(+number)
//     }

//     validatePhone = () => {
//         // const { phone, code } = this.state;
//         var newPhone = code + phone;
//         firebase.auth().signInWithPhoneNumber(newPhone)
//         .then(function(e) {
//             // if(this.state.phone == null) return;
//             e.confirm('123456').then(function(result) {
//                 console.log(result);
//             })
//             .catch(error => console.log("Code Confirm : " + error));
//             // if(this.state.phone == null) return;
//             // e.confirm(this.state.phone).then(function(result) {
//                 // console.log( "Thanh cong: " + e);
//             // })
//         })
//         .catch((error) => { console.log("Lỗi : " + error.message) })
//     }

   
//         return (
//             <View style={Styles.Container}>
//                 <Text>Chào bạn,</Text>
//                 <Text>Nhập số điện thoại để tiếp tục</Text>
//                 <TextBox 
//                 placeholder={'Số điện thoại'}
//                 onChangeText={number => this.handleChange(number)}
//                 value={phone}
//                 keyboardType={'numeric'}
//                 maxLength={10}
//                 errorMessage={errorMessage}/>
//                 <Button title="Tiếp tục"
//                 onPress={() => this.validatePhone()}
//                 containerStyle={[
//                     Styles.Container,
//                     Styles.pb_none,
//                     Styles.pt_none,
//                     Styles.mb_md,
//                 ]}/>
//                 <Text>{phone}</Text>
//             </View>
//         );
    
// }

export default function PhoneSignIn() {
    // If null, no SMS has been sent
    const [confirm, setConfirm] = useState(null);
  
    const [code, setCode] = useState('');
  
    // Handle the button press
    async function signInWithPhoneNumber(phoneNumber) {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
      // console.log("Kết quả :" + confirmation);
    }
  
    async function confirmCode() {
      try {
        await confirm.confirm(code);
        console.log("Thanh cong!")
      } catch (error) {
        console.log('Invalid code.');
      }
    }
  
    if (!confirm) {
      return (
        <Button
          title="Phone Number Sign In"
          onPress={() => signInWithPhoneNumber('+840907702034')}
        />
      );
    }
  
    return (
      <View style={styles.container}>
        <TextInput value={code} onChangeText={text => setCode(text)} />
        <Button title="Confirm Code" onPress={() => confirmCode()} />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    }
  })