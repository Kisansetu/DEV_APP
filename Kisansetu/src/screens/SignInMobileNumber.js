import React, { useState } from "react";
import { Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, TextInput  } from "react-native";
import logo from "../../assets/LogoName.png"
import styles from "../styles/SignInStyles"

const SignInMobileNumber = ({ navigation }) => {
    const [number, setNumber] = useState();

    return (
        <SafeAreaView style={temstyles.container}>
            <SafeAreaView style={temstyles.container1}>
                <Image source={logo} style={styles.logo} />
                <Text style={styles.instructions}>YOUR PHONE NUMBER</Text>
                <TextInput 
                    value={number}
                    keyboardType='numeric' 
                    style={styles.numberText} 
                    placeholder='Your Mobile Number'
                    maxLength={10}
                    onPressOut={(val) => setNumber(val)}/>
                {/* { number.length<10 && number.length>0 ? <Text style={temstyles.errorstyle}>Phone Number must contain 10 charecters</Text> : null} */}
                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.button}>
                <Text style={styles.buttonText}>NEXT</Text>
                </TouchableOpacity>
            </SafeAreaView>
            <SafeAreaView style={temstyles.bottomContainer}>
            <Text 
                style={temstyles.Text} >Tap Next to verify your account. An SMS may be sent to verify your numbr. Message and data rates may apply</Text>
            </SafeAreaView>
        </SafeAreaView>
    );
};

export default SignInMobileNumber;

const temstyles = StyleSheet.create({
    
    Text:{
        bottom: 0,
        textAlign: 'center',
        fontSize: 10,
        color: '#A9A9A9',
        justifyContent: 'flex-end',
        marginTop: 20,
    },
    container: {
        flexGrow: 1,
        flexDirection: 'column',
        // justifyContent: 'space-between',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomContainer: {
        justifyContent: 'flex-end',
        bottom: 0,
    },
    container1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    errorstyle: {
        color: 'rgb(255, 0, 0)'
    }
  });