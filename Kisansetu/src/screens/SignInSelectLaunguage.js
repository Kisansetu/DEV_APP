import React, { useState } from "react";
import { Text, SafeAreaView, TouchableOpacity, Image, } from "react-native";
import logo from "../../assets/LogoName.png"
import { Picker } from "@react-native-picker/picker";
import styles from "../styles/SignInStyles";

const SignInSelectLanguage = ({ navigation }) => {
    const [country, setCountry] = useState('Unknown');
  
    return (
      <SafeAreaView style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.instructions} >Choose You Language</Text>
        <Picker
          selectedValue={country}
          onValueChange={(value, index) => setCountry(value)}
          mode="dropdown" // Android only
          style={styles.picker}
        >
          <Picker.Item label="Please select your Language" value="Unknown" />
          <Picker.Item label="English" value="EN" />
          <Picker.Item label="Kannada" value="KA" />
          <Picker.Item label="Hindi" value="HI" />
          <Picker.Item label="Telugu" value="TE" />
        </Picker>
        <TouchableOpacity onPress={() => navigation.navigate('Signin2')} style={styles.button}>
          <Text style={styles.buttonText}>PROCEED</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
};

export default SignInSelectLanguage;