import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { Checkbox, TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';


const initialState = { email: "", password: "" }

export default function Login() {


  const [state, setState] = useState(initialState)

  const [checked, setChecked] = useState(false);
  const navigation = useNavigation();

  const handleChange = (name, value) => {
    setState(s => ({ ...s, [name]: value }))
  }


  const handlePress = () => {
    navigation.navigate("Register")
  }
  const handleLogin = () => {

    let { email, password } = state
    
    if (email === "") {
      return alert("Please enter you email")
    }

    if (password === "") {
      return alert("Please enter you password")
    }
    auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      navigation.navigate('Home')
      console.log('email', email)
      console.log('signed in!');
    })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  }


  return (
    <SafeAreaView style={styles.flexContainer}>

      <View>

        <View style={{ marginBottom: 15 }}>
          <Text style={styles.loginTitle}>Sign in</Text>
        </View>
        <Text style={{ color: '#bcbcbc', fontSize: 16, marginBottom: 12 }}>Or continue with</Text>
        <View style={styles.formControl}>
          <TextInput
            // mode="outlined"
            // label="Title"
            placeholder="Enter e-mail address"
            style={styles.input}
            underlineColorAndroid="transparent"
            underlineColor="transparent"
            left={<TextInput.Icon icon="email" color="#d7d7d7" />}
            onChangeText={value => handleChange('email', value)}
          />
        </View>
        <Text style={{ color: '#bcbcbc', fontSize: 16, marginBottom: 12 }}>Or continue with</Text>
        <View style={styles.formControl}>
          <TextInput
            // mode="outlined"
            // label="Title"
            placeholder="Enter a password"
            style={styles.input}
            underlineColorAndroid="transparent"
            underlineColor="transparent"
            left={<TextInput.Icon icon="lock" color="#dee2e6" />}
            onChangeText={value => handleChange('password', value)}
          />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
            color='#0373f3'
          />
          <Text>Remember me</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ flex: 1, height: 1, backgroundColor: '#bcbcbc' }} />
          <View>
            <Text style={{ width: 90, textAlign: 'center', fontSize: 16, color: '#0373f3' }} onPress={handlePress}>Or register</Text>
          </View>
          <View style={{ flex: 1, height: 1, backgroundColor: '#bcbcbc' }} />
        </View>

      </View>


      <View>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={{ color: 'white', fontSize: 16, fontWeight: 500 }}>Continue</Text>
        </TouchableOpacity>
      </View>


    </SafeAreaView>
  );
}




const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "space-between",
    paddingHorizontal: 22,
    paddingTop: 100,
    paddingBottom: 40
  },
  loginTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black"
  },
  formControl: {
    borderRadius: 30,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#bcbcbc',
    marginBottom: 16,
  },
  input: {
    height: 50,
    paddingHorizontal: 10,
    backgroundColor: "white",
  },
  button: {
    backgroundColor: "#0373f3",
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center"
  }
})
