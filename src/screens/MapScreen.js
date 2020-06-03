import React, { useState } from 'react';
import { View, Button, Text } from 'react-native'
import database from '@react-native-firebase/database';

  export default function MapScreen() {
      const [ stores, setStory ] = useState([]);

      function getUser () {
        var recentPostsRef = database().ref('/users/');
        recentPostsRef.once('value').then(snapshot => {
            setStory(snapshot.val());
        })
        console.log(stores)
      }

      function setDataOnFirebase () {
        var id_user = database().ref('/users/').push().key;
        database()
        .ref('/users/' + id_user)
        .set({
            name: 'Ada Lovelace',
            age: 31,
        })
        .then(() => console.log('Data set.'))
        .catch((error) => console.log(error))
      }

        return(
            <View>
                <View style={{ marginBottom: 30 }}>
                    <Button title="Confirm Code" onPress={() => setDataOnFirebase()} />
                </View>
                <Button title="Get Data" onPress={() => getUser()}/>
            </View>
        );
  }
