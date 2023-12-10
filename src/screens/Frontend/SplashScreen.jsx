import { View, Image, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import img from '../../assets/images/Navy.png';
import { useNavigation } from "@react-navigation/native"
import { getItem } from '../../../utils/asyncStorage';

export default function SplashScreen() {

    const navigation = useNavigation();
    const [showBoarding, setShowBoarding] = useState(null)

    useEffect(() => {
        checkOnBoarding()
        const timeoutId = setTimeout(() => {
            if(showBoarding){
                navigation.navigate('OnBoardingScreen')

            }
            else{
                navigation.navigate('Login')
            }
        }, 1500);

        // Clear the timeout to avoid any memory leaks
        return () => clearTimeout(timeoutId);
    }, [navigation]);


    const checkOnBoarding = async () => {
        let onboarded = await getItem('onboarded');
        if (onboarded == 1) {
          setShowBoarding(false)
        }
        else {
          setShowBoarding(true)
        }
      }
      if (showBoarding == null) {
        return null;
      }
    


    return (
        <View style={styles.flexContainer}>
            <Image source={img} style={{ width: 120, height: 120 }} />
        </View>
    );
}

const styles = StyleSheet.create({
    flexContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
