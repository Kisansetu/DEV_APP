import React, { useState } from "react";
import { Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, TextInput  } from "react-native";
import logo from "../../assets/LogoName.png"
import styles from "../styles/SignInStyles"

const SignInMobileNumber = () => {
    const [number, setNumber] = useState();

    return (
        <SafeAreaView style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.instructions}>YOUR PHONE NUMBER</Text>
        <Text style={styles.instructions1}>Enter Your Phone Number</Text>
        <TextInput 
            keyboardType='numeric' 
            style={styles.numberText} 
            placeholder='Your Mobile Number'
            maxLength={10}
            onPressOut={(val) => setNumber(val)}/>
        <TouchableOpacity onPress={() => alert('Page comming soon!')} style={styles.button}>
          <Text style={styles.buttonText}>NEXT</Text>
        </TouchableOpacity>
        <Text 
            style={styles.instructions1} >Tap Next to verify your account. An SMS may be sent to verify your numbr. Message and data rates may apply</Text>
      </SafeAreaView>
    );
};

export default SignInMobileNumber;