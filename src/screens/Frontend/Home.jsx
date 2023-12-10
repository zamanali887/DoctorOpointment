import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, StyleSheet, TouchableOpacity, Image, ScrollView,} from 'react-native'
import { Text, TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

import Icons from 'react-native-vector-icons/FontAwesome5';
import img from '../../assets/images/image1.png'
import img2 from '../../assets/images/image2.jpg'




// eslint-disable-next-line react/prop-types
const Badge = ({ value }) => (
  <View
    style={{
      backgroundColor: 'red', // Set the background color of the badge
      borderRadius: 10, // Adjust the border radius to get a circular badge
      paddingHorizontal: 7, // Adjust the padding as needed
      paddingVertical: 2,
      position: 'absolute',
      top: 15,
      right: 0,
    }}
  >
    <Text style={{ color: 'white', fontSize: 12 }}>{value}</Text>
  </View>
);







export default function Home() {
    
  
    const navigation = useNavigation();

    const handleChange = () =>{

    }
  return (
    <SafeAreaView style={styles.flexContainer}>
<View style={{paddingHorizontal:16,marginBottom:20}}>
  
<View style={{ justifyContent: "space-between", flexDirection: "row", paddingVertical: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Appointment App</Text>
        <Icons name="bell" color='grey' size={25} style={{ marginRight: 12 }} />
        <Badge value={3} />
      </View> 
    <View style={{paddingLeft:20,marginTop:20}}>
      <Text style={{fontSize:16, paddingVertical:10}}>
        Find Your desired
      </Text>
      <Text style={{fontSize:24,fontWeight:500}}>
        Doctor&#39;Right Now !  
      </Text>

      <TextInput
            // mode="outlined"
            // label="Title"
            placeholder="Search"
            style={styles.input}
            underlineColorAndroid="transparent"
            underlineColor="transparent"
            left={<TextInput.Icon icon="magnify" color="#dee2e6" />}
            onChangeText={value => handleChange('password', value)}
          />
    </View>
</View>
      <ScrollView>
    <View style={{backgroundColor:'white',height:1000, borderTopRightRadius:60,borderTopLeftRadius:60,paddingHorizontal:30,paddingVertical:30}}>
      <Text style={{fontSize:20,fontWeight:'bold'}}>Top Doctors</Text>
        <TouchableOpacity style={styles.listStyle}>
          <Image source={img} style={{width:50,height:50}}/>
         <View>
           <Text style={{fontWeight:'bold'}}>Dr. Ahmad</Text>
           <Text style={{fontSize:12}}>Heart Spacialist</Text>
           <Text>Fee: 1000</Text>
         </View>
         <View>
          <Text style={{backgroundColor:'green',padding:5,borderRadius:5,color:'white'}}>Appoint Me</Text>
         </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listStyle}>
          <Image source={img} style={{width:50,height:50}}/>
         <View>
           <Text style={{fontWeight:'bold'}}>Dr. Ahmad</Text>
           <Text style={{fontSize:12}}>Heart Spacialist</Text>
           <Text>Fee: 1000</Text>
         </View>
         <View>
          <Text style={{backgroundColor:'green',padding:5,borderRadius:5,color:'white'}}>Appoint Me</Text>
         </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listStyle}>
          <Image source={img} style={{width:50,height:50}}/>
         <View>
           <Text style={{fontWeight:'bold'}}>Dr. Ahmad</Text>
           <Text style={{fontSize:12}}>Heart Spacialist</Text>
           <Text>Fee: 1000</Text>
         </View>
         <View>
          <Text style={{backgroundColor:'green',padding:5,borderRadius:5,color:'white'}}>Appoint Me</Text>
         </View>

        </TouchableOpacity>
        <TouchableOpacity style={styles.listStyle}>
          <Image source={img} style={{width:50,height:50}}/>
         <View>
           <Text style={{fontWeight:'bold'}}>Dr. Ahmad</Text>
           <Text style={{fontSize:12}}>Heart Spacialist</Text>
           <Text>Fee: 1000</Text>
         </View>
         <View>
          <Text style={{backgroundColor:'green',padding:5,borderRadius:5,color:'white'}}>Appoint Me</Text>
         </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listStyle}>
          <Image source={img} style={{width:50,height:50}}/>
         <View>
           <Text style={{fontWeight:'bold'}}>Dr. Ahmad</Text>
           <Text style={{fontSize:12}}>Heart Spacialist</Text>
           <Text>Fee: 1000</Text>
         </View>
         <View>
          <Text style={{backgroundColor:'green',padding:5,borderRadius:5,color:'white'}}>Appoint Me</Text>
         </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listStyle}>
          <Image source={img} style={{width:50,height:50}}/>
         <View>
           <Text style={{fontWeight:'bold'}}>Dr. Ahmad</Text>
           <Text style={{fontSize:12}}>Heart Spacialist</Text>
           <Text>Fee: 1000</Text>
         </View>
         <View>
          <Text style={{backgroundColor:'green',padding:5,borderRadius:5,color:'white'}}>Appoint Me</Text>
         </View>
        </TouchableOpacity>
    </View>
    </ScrollView>
      {/* <View style={{ justifyContent: "space-between", flexDirection: "row", paddingVertical: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Appointment App</Text>
        <Icons name="bell" color='grey' size={25} style={{ marginRight: 12 }} />
        <Badge value={3} />
      </View>

      <View style={styles.bottomTab}>
        <TouchableOpacity>
          <Icon name="home" color='grey' size={20} style={{ paddingHorizontal: 20 }} />
          <Text style={styles.tabText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="today" color='grey' size={20} style={{ paddingHorizontal: 20 }} />
          <Text style={styles.tabText}>Today</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="plus" color='grey' size={20} style={{ marginTop: -30, marginLeft: 20, backgroundColor: 'white', paddingHorizontal: 20, paddingVertical: 20, borderRadius: 50 }} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icons name="arrow-circle-right" color='grey' size={20} style={{ paddingHorizontal: 25 }} />
          <Text style={styles.tabText}>UpCome</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
          <Icons name="user" color='grey' size={20} style={{ paddingHorizontal: 20 }} />
          <Text style={styles.tabText}>Profile</Text>
        </TouchableOpacity>
      </View> */}
      {/* <View style={styles.formControl}>
      <TextInput
      mode="outlined"
      label="Title"
      placeholder="Type Title"
      // right={<TextInput.Affix text="/100" />}
      />
    </View>
    <View style={styles.formControl}>
      <TextInput
      mode="outlined"
      label="Description"
      placeholder="Type Description"
      // right={<TextInput.Affix text="/100" />}
      />
    </View>
    <Button icon="plus" mode="contained" onPress={() => console.log('Pressed')}>
    Add
  </Button> */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    // paddingHorizontal: 16,
  },
  // bottomTab: {
  //   justifyContent: "space-between", 
  //   flexDirection: 'row', 
  //   backgroundColor: 'white', 
  //   paddingVertical: 10, 
  //   borderRadius: 10,
  //   marginBottom:10
  // },
  // tabText: {
  //   paddingHorizontal: 12,
  //   paddingVertical: 2
  // }
  // formControl: {
  //   marginBottom: 12
  // }
  input: {
    height: 45,
    paddingHorizontal: 10,
    marginVertical:10,
    backgroundColor: "white",
  },
  listStyle:{
    height:70,
    backgroundColor:"#edf6f9",
    marginVertical:10,
    borderRadius:10,
    alignItems:"center",
    paddingHorizontal:10,
    flexDirection:"row",
    justifyContent:"space-between"
  }
})
