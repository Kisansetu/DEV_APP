import React, { useState } from "react";
import { SafeAreaView, Text, TextInput, TouchableOpacity } from "react-native";

import firebase from "../firebase";

export default App = () => {

    const [phoneNumber, setPhoneNumber] = useState('');
    const [code, setCode] = useState('');
    const [verificationId, setVerificationId] = useState(null);
    const recaptchaVerifier = useRef(null);

    // Function to be called when requesting for a verification code
    const sendVerification = () => { 
        const phoneProvider = new firebase.auth.PhoneAuthProvider();
        phoneProvider
            .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
            .then(setVerificationId);
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