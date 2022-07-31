import React, {useState} from 'react';
import {View, StyleSheet, Text, Button, TouchableOpacity,TextInput,Image} from 'react-native';
import PasswordInput from '../components/PassInput';
import Textinp from '../components/Textinp';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import LottieView from 'lottie-react-native';


function Login1({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
    {/* <LottieView
        source={require('../assets/contractor.json')}
        autoPlay={true}
        loop={false}

        style={styles.animation}
      /> */}
     
      <Textinp
        marginTop={10}
        iconShape="mail"
        placeholder="Email"
        autoComplete="email"
        value={email}
        onChangeText={text => {
          setEmail(text);
        }}
        placeholderTextColor="grey"/>
      <PasswordInput
        placeholder="Password"
        autoComplete="password"
        value={password}
        onChangeText={text => {
          setPassword(text);
        }}
        placeholderTextColor="grey"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
        navigation.navigate('Tabs');
        console.log("Logged In");
        }}><Text style={styles.textStyle}>Login</Text>
      </TouchableOpacity>
      <Text style={{fontSize:20}}>OR</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
            navigation.navigate('auth')
            console.log("Logged In");
        }}><Text style={styles.textStyle}>Use Your Fingerprint</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={()=>navigation.navigate('SignUp1')}>
            <Text style={{fontSize:15,margin:30}}>Don't have an account? Signup</Text>
        </TouchableOpacity>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#FFFFFF'
  },
  textStyle: {
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center',
    fontSize:18,
  },
  animation: {
    width: 200,
    height: 200,
    margin: 25,
    marginLeft: 20
  },
  text:{
    fontSize:24,
    fontWeight:'bold',
    alignSelf:'flex-start',
    
    marginVertical:10,
    marginLeft:wp('10%'),
},
    button:{
        backgroundColor:'#0065ff',
        margin:15,
        padding:10,
        borderRadius:10,
        width:wp('85%')
    }
});

export default Login1;