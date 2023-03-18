import * as React from 'react'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, TouchableOpacity, Image } from 'react-native';
import { StyleSheet } from 'react-native';

import logo from "../../assets/LogoName.png"
import farmerIcon from "../../assets/FarmerIcon.png"
import buyerIcon from "../../assets/BuyerIcon.png"
import vendorIcon from "../../assets/VendorIcon.png"

import styles from "../styles/SignInStyles"

function HomeScreen(){
    return (
      <SafeAreaView style={styles.container}>
        <Image source={logo} style={styles.logo} />
        
        
        <TouchableOpacity onPress={() => alert('Farmer Page Coming soon!')} style={homePageStyle.button}>
        <Image source={farmerIcon} style = {homePageStyle.Icon}/>
          <Text style={homePageStyle.buttonText}>FARMER</Text>
        </TouchableOpacity>
     
        <TouchableOpacity onPress={() => alert('Consumer Page Coming soon!')} style={homePageStyle.button}>
        <Image source={buyerIcon} style = {homePageStyle.Icon} />
          <Text style={homePageStyle.buttonText}>CONSUMER</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => alert('Vendor Page Coming soon!')} style={homePageStyle.button}>
        <Image source={vendorIcon} style = {homePageStyle.Icon}/>
          <Text style={homePageStyle.buttonText}>VENDOR</Text>
        </TouchableOpacity>

        <Text style={homePageStyle.Text}>KisaSetu © Copyright 2021.All Rights Reserved.</Text>
        <Text style={homePageStyle.Text}>App Version 1.2</Text>
        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }

export default HomeScreen;


const homePageStyle = StyleSheet.create({
    
    Icon: {
        width: 110,
        height: 90,
        padding:5
      },
      
    button: {
      width: 370,
      height: 140,
      backgroundColor: "#E0E0E0",
      padding: 10,
      borderRadius: 30,
      alignItems:"center",
      margin:5
    },
    buttonText: {
      textAlign: 'center',
      fontSize: 20,
      color: '#000000',
    },
    Text:{
        textAlign: 'center',
        fontSize: 10,
        color: '#A9A9A9',
    }
  });

