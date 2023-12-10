import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';

import AnimationOne from '../../assets/animations/AnimationOne.json';
import AnimationTwo from '../../assets/animations/AnimationTwo.json';
import AnimationThree from '../../assets/animations/AnimationThree.json';
import { useNavigation } from "@react-navigation/native"
import { setItem } from '../../../utils/asyncStorage';
import { useAuthcontexts } from '../../context/Authcontexts';

export default function OnBoardingScreen() {


    const navigation = useNavigation();
    const {user} = useAuthcontexts();
    const handleDone = () => {
        if(user){
            navigation.navigate("Hero");
            setItem('onboarded', '1')
        }
        else{
            navigation.navigate("Login")
            setItem('onboarded', '1')
        }
    }
    return (
        <SafeAreaView style={styles.flexContainer}>
            <View style={styles.flexContainer}>
                <Onboarding
                    onDone={handleDone}
                    onSkip={handleDone}
                    containerStyles={{ paddingHorizontal: 15 }}
                    bottomBarHighlight={false}
                    pages={[
                        {
                            backgroundColor: '#1D3557',
                            image: (
                                <View>
                                    <LottieView style={{ width: 300, height: 300 }} source={AnimationOne} autoPlay loop />
                                </View>
                            ),
                            title: 'Work Seemlessly',
                            subtitle: 'Get Your Work Done Seemlessly Without Interruption',
                            titleStyles: { color: 'white', fontWeight: 'bold', fontSize: 24 }, // Customize title color and style
                            subTitleStyles: { color: 'white', fontSize: 16 }, // Customize subtitle color and style
                        },
                        {
                            backgroundColor: '#fff',
                            image: <LottieView style={{ width: 300, height: 300 }} source={AnimationTwo} autoPlay loop />,
                            title: 'Onboarding',
                            subtitle: 'Done with React Native Onboarding Swiper',
                            titleStyles: { color: '#4361ee', fontWeight: 'bold', fontSize: 24 }, // Customize title color and style
                            subTitleStyles: { color: '#4cc9f0', fontSize: 16 }, // Customize subtitle color and style
                        },
                        {
                            backgroundColor: '#ffc8dd',
                            image: <LottieView style={{ width: 300, height: 300 }} source={AnimationThree} autoPlay loop />,
                            title: 'Achieve Higher Goal',
                            subtitle: 'By Boosting Your Productivity We Help You To Achieve Higher Goals',
                            titleStyles: { color: 'purple', fontWeight: 'bold', fontSize: 24 }, // Customize title color and style
                            subTitleStyles: { color: 'purple', fontSize: 16 }, // Customize subtitle color and style
                        },
                    ]}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    flexContainer: {
        flex: 1,
        backgroundColor: 'white',
    },
});
