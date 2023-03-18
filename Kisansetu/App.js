import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


// import * as firebase from "firebase";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyC0C-8pt6NlSsdTMqM7ypsYNLmMfa2w8Mg",
//   authDomain: "kisansetuproject.firebaseapp.com",
//   projectId: "kisansetuproject",
//   storageBucket: "kisansetuproject.appspot.com",
//   messagingSenderId: "571200743429",
//   appId: "1:571200743429:web:a751746761fb4851e9546c"
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

import SignInSelectLanguage from './src/screens/SignInSelectLaunguage';
import SignInMobileNumber from './src/screens/SignInMobileNumber';
import HomeScreen from './src/screens/HomeScreen';
import App from './src/screens/MobileSignin'

const navigator = createStackNavigator(
  {
    // Home: HomeScreen,
    Signin1: SignInSelectLanguage,
    Signin2: SignInMobileNumber,
    Home: HomeScreen,
    App: App,

  },
  {
    initialRouteName: 'Signin1',
    defaultNavigationOptions: {
      title: 'KisanSetu',
    },
  },
);

export default createAppContainer(navigator)