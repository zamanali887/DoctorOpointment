import React, { useEffect, useState } from 'react';

import Home from '../screens/Frontend/Home';


import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Products from '../screens/Frontend/Products';
// import SplashScreen from '../screens/Frontend/SplashScreen';
import OnBoardingScreen from '../screens/Frontend/OnBoardingScreen';
import { getItem } from '../../utils/asyncStorage';
import Login from '../screens/Auth/Login';
import Register from '../screens/Auth/Register';
import Profile from '../screens/Frontend/Profile';
import { useAuthcontexts } from '../context/Authcontexts';

import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

import Doctor from '../screens/Frontend/Doctor';
import Patient from '../screens/Frontend/Patient';
// const Stack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName='Home'
    >
      <Tab.Screen name="Home" component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="Doctor" component={Doctor}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="user-doctor" color={color} size={size} />
            ),
          }}
      />
      <Tab.Screen name="Patient" component={Patient}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icons name="user-injured" color={color} size={size} />
            ),
          }}
      />
          <Tab.Screen name="Profile" component={Profile}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icons name="user" color={color} size={size} style={{ paddingHorizontal: 20 }} />
              ),

            }}
          />
    </Tab.Navigator>
  )
}


export default function AppNavigator() {

  const [showBoarding, setShowBoarding] = useState(null)
  const { user } = useAuthcontexts()


  useEffect(() => {
    checkOnBoarding();
    console.log('showBoarding', showBoarding)
  }, [checkOnBoarding])

  const checkOnBoarding = async () => {
    let onboarded = await getItem('onboarded');
    if (onboarded == 1) {
      setShowBoarding(false)
      console.log('onboarded', onboarded)
    }
    else {
      setShowBoarding(true)
    }
  }
  if (showBoarding == null) {
    return null;
  }


  return (
    showBoarding ?
      <>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="OnBoardingScreen"
            screenOptions={{
              headerShown: false
            }}
          >
            <Stack.Screen name='OnBoardingScreen' component={OnBoardingScreen} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Hero' component={TabNavigation} />
            <Stack.Screen name='Profile' component={Profile} />
          </Stack.Navigator>
        </NavigationContainer>
      </>
      : !user ?
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login"
            screenOptions={{
              headerShown: false
            }}
          >
            <Stack.Screen name='Hero' component={TabNavigation} />
            <Stack.Screen name='Login' component={Login}
              options={{
                headerShown: false
                // headerTitle: 'abc',
                // headerTransparent: true, // Set this to true to remove the header background
              }}
            />
            <Stack.Screen name='Register' component={Register}
              options={{
                headerTitle: "",
                headerTransparent: true,
              }}
            />
            <Stack.Screen name='Profile' component={Profile} />
          </Stack.Navigator>
        </NavigationContainer>
        : <NavigationContainer>
          <Stack.Navigator initialRouteName="Home"
            screenOptions={{
              headerShown: false
            }}
          >
            <Stack.Screen name='Herp' component={TabNavigation} />
            <Stack.Screen name='Profile' component={Profile} />
          </Stack.Navigator>
        </NavigationContainer>

  );
}




