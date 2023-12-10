import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import firestore from '@react-native-firebase/firestore';

export default function Products() {

  useEffect(()=>{
    firestore()
    .collection('todos')
    .get()
    .then(querySnapshot => {
      console.log('Total users: ', querySnapshot.size);
      querySnapshot.forEach(documentSnapshot => {
        const data = {id: documentSnapshot.id ,...documentSnapshot.data()}
        console.log(data);
      });
    });

  },[])
  return (
    <View style={styles.flexContainer}>
      <Text style={{fontSize:32, fontWeight:"bold"}}>Products</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    flexContainer:{
        flex : 1 ,
        justifyContent : "center",
        alignItems : "center"
    }
})
