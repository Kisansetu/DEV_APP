import React, { useState } from "react";
import { SafeAreaView, Text, TextInput, TouchableOpacity } from "react-native";

import firebase from "../firebase";
import { getAuth, signInWithPhoneNumber } from "firebase/auth";

const auth = getAuth();
auth.languageCode = 'it'

export default App = () => {

    const [phoneNumber, setPhoneNumber] = useState('');
    const [code, setCode] = useState('');
    const [verificationId, setVerificationId] = useState(null);
    const recaptchaVerifier = useRef(null);
    // const recaptchaVerifier = React.useRef(null);

    // Function to be called when requesting for a verification code
    const sendVerification = () => { 
        try {
            const phoneProvider = new firebase.auth.PhoneAuthProvider();
            phoneProvider
            .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
            .then(setVerificationId);
        } catch (error) {
            alert(error);
        }
     };
    
    // Function to be called when confirming the verification code that we received
    // from Firebase via SMS
    const confirmCode = () => { 
        const credential = firebase.auth.PhoneAuthProvider.credential(
            verificationId,
            code
        );
        firebase
            .auth()
            .signInWithCredential(credential)
            .then((result) => {
              // Do something with the results here
              console.log(result);
              // navigate to home screen
              //navigation.navigate('Home')
            });
        
     };
    
    return (
        <SafeAreaView>
            <TextInput 
                placeholder="Phone Number"
                onChangeText={setPhoneNumber}
                keyboardType='phone-pad'
                autoCompleteType="tel"
            />
            <TouchableOpacity onPress={sendVerification}>
                <Text>Send Verification</Text>
            </TouchableOpacity>
            <TextInput 
                placeholder="Confirmation Code"
                onChangeText={setCode}
                keyboardType='number-pad'
            />
            <TouchableOpacity onPress={confirmCode}>
                <Text>Confirm</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};