import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import img from '../../assets/images/Navy.png';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { Divider } from 'react-native-paper';
import { removeItem } from '../../../utils/asyncStorage';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';





export default function Profile() {

  const navigation = useNavigation()

  const handleRest = async () => {
    await removeItem('onboarded')
    navigation.push('OnBoardingScreen')
  }
  const handleLogout = () => {
    auth()
      .signOut()
      .then(() => {
        navigation.navigate("Login")
        console.log('User signed out!')
      }
      );
  }
  return (
    <>
      <View style={styles.flexContainer}>

        <View style={styles.imageSection}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={styles.imageView}>
              <Image source={img} style={{ width: 80, height: 80 }} />
            </View>
            <View>
              <Text style={styles.title} >Zaman Ali</Text>
              <Text style={styles.subTitle} >Web Application Developer</Text>

            </View>
          </View>
          <View style={{ marginTop: 40 }}>
            <TouchableOpacity style={styles.contactDetails}>
              <MaterialIcons name="mail" color='grey' size={20} style={{ paddingHorizontal: 20 }} />
              <Text>sweetzamanali@gmail.com</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.contactDetails}>
              <MaterialIcons name="phone" color='grey' size={20} style={{ paddingHorizontal: 20 }} />
              <Text>+92 306 6525299</Text>
            </TouchableOpacity>
          </View>
          <Divider style={{ marginTop: 15, height: 2 }}></Divider>
        </View>
        <View style={{ marginBottom: 20 }}>
          <TouchableOpacity style={styles.buttons} onPress={handleRest}>
            <FontAwesome6 name="arrows-rotate" color='green' size={24} style={{ paddingHorizontal: 20 }} />
            <Text style={{ color: 'green', fontSize: 17, fontWeight: 'bold' }}>Rest App</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttons} onPress={handleLogout}>
            <MaterialIcons name="logout" color='red' size={24} style={{ paddingHorizontal: 20 }} />
            <Text style={{ color: '#E63946', fontSize: 17, fontWeight: 'bold' }}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#f1eff2"

  },
  imageSection: {
    height: 400,
    paddingHorizontal: 20,
    paddingVertical: 40
  },
  imageView: {
    backgroundColor: 'white',
    width: 110,
    height: 110,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 16
  },
  title: {
    fontSize: 18,
    fontWeight: "bold"
  },
  subTitle: {
    fontSize: 16,
  },
  contactDetails: {
    flexDirection: "row",
    marginVertical: 5
  },
  buttons: {
    flexDirection: 'row',
    marginVertical: 10
  }
})