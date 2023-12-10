import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { ActivityIndicator, Checkbox, TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
// import firestore from '@react-native-firebase/firestore';



const initialState = { email: "", password: "", confirmPassword: "" }

export default function Register() {

  const [state, setState] = useState(initialState);
  const [checked, setChecked] = useState(false);
  const navigation = useNavigation();

  const handleChange = (name, value) => {
    setState(s => ({ ...s, [name]: value }))
  }
  const handleRegister = () => {
    let { email, password, confirmPassword } = state;
    email = email.trim();
    password = password.trim();

    if (email === "") {
      return alert("Please enter your e-mail");
    }
    if (password === "") {
      return alert("Please enter your password");
    }

    confirmPassword = confirmPassword.trim();
    if (password !== confirmPassword) {
      return alert("Confirm Password Not Matched");
    }

    const data = {
      email,
      password,
      confirmPassword,
      status: "Active",
      role: ["admin"],
      id: Math.random().toString(36).slice(2),
    };

    auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then(() => {
        navigation.navigate("Home")
        console.log('User account created & signed in!');
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
  };

  // const createUserProfile = (user) => {
  //   console.log('user', user);
  //   firestore()
  //     .collection('patient')
  //     .doc(user.id)
  //     .set({
  //       email: user.email,
  //       uid: user.id,
  //     })
  //     .then(() => {
  //       console.log('User added!');
  //     })
  //     .catch((error) => {
  //       console.error('Error adding user to Firestore:', error);
  //     });
  // };

  const handlePress = () => {
    // navigation.navigate("Home")
    handleRegister()
  }


  return (
    <SafeAreaView style={styles.flexContainer}>

      <View>

        <View style={{ marginBottom: 15 }}>
          <Text style={styles.loginTitle}>Sign up free</Text>
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
            placeholder="Create a password"
            style={styles.input}
            underlineColorAndroid="transparent"
            underlineColor="transparent"
            secureTextEntry
            left={<TextInput.Icon icon="lock" color="#dee2e6" />}
            onChangeText={value => handleChange('password', value)}
          />
        </View>
        <Text style={{ color: '#bcbcbc', fontSize: 16, marginBottom: 12 }}>Or continue with</Text>
        <View style={styles.formControl}>
          <TextInput
            // mode="outlined"
            // label="Title"
            placeholder="Repeat password"
            style={styles.input}
            underlineColorAndroid="transparent"
            underlineColor="transparent"
            secureTextEntry
            left={<TextInput.Icon icon="lock" color="#dee2e6" />}
            onChangeText={value => handleChange('confirmPassword', value)}
          />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
            color='#0373f3'
          />
          <Text>I have read the Terms of Service  </Text>
        </View>

      </View>


      <View>
        <TouchableOpacity style={styles.button} onPress={handlePress}>

              {/* <ActivityIndicator size="small" color="#fff" style={{ paddingHorizontal: 10 }} /> */}
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
    alignItems: "center",
    flexDirection: "row"
  }
})
