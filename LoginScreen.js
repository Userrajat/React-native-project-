import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({navigation}) => {
  const [userid, setUserid] = useState('');

  const [password, setPassword] = useState('');

  const [useriderror, setUseriderror] = useState(false);
  const [passworderror, setPassworderror] = useState(false);
  const [showpass, setShowpass] = useState(true);

  useEffect(() => {
    _storeData();
    _retrieveData();
  });
  const _storeData = async () => {
    try {
      await AsyncStorage.setItem('id', 'rajat');
    } catch (error) {}
  };
  const _retrieveData = async () => {
    try {
      const Value = await AsyncStorage.getItem('id');
      console.log('Value', Value);
    } catch (error) {}
  };

  const check = () => {
    if (!userid) {
      setUseriderror(true);
    }
    if (!password) {
      setPassworderror(true);
    }
  };
  const pass = () => {
    if (showpass === true) {
      setShowpass(false);
    } else {
      setShowpass(true);
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {/* <View style={{flex: 1, backgroundColor: 'white'}}></View> */}
      <View style={{flex: 8, backgroundColor: 'white'}}>
        <View style={{backgroundColor: 'white', alignItems: 'center'}}>
          <Image
            style={{height: 60, width: 150}}
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png',
            }}
          />
        </View>
        <TextInput
          value={userid}
          onChangeText={actualdata => setUserid(actualdata)}
          placeholder="Phone number, username or email"
          style={styles.input}></TextInput>
        <TextInput
          value={password}
          onChangeText={actualdata => setPassword(actualdata)}
          secureTextEntry={showpass}
          placeholder="Password"
          style={styles.input}></TextInput>
        <View style={{alignItems: 'flex-end', bottom: 23, right: 25}}>
          <TouchableOpacity onPress={pass}>
            <Image
              style={{height: 17, width: 17}}
              source={
                showpass
                  ? {uri: 'https://cdn-icons-png.flaticon.com/512/25/25186.png'}
                  : {
                      uri: 'https://toppng.com/uploads/preview/eye-closed-icon-11550225620ajweggaqlk.png',
                    }
              }
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={check}
          style={{
            backgroundColor: '#82EEFD',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 20,
            padding: 10,
          }}>
          <Text style={{fontSize: 17, color: 'white', fontWeight: 'bold'}}>
            Login
          </Text>
          
        </TouchableOpacity>
        <View
          style={{
            fontSize: 12,
            color: 'black',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
        
         <Text style={{fontSize:17,color:'black', fontWeight:'bold'}}>
            OR
          </Text>
          </View>
        
        <View style={styles.facebook}>
          <TouchableOpacity>
            <Image
              style={{height: 27, width: 27}}
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/800px-Facebook_icon_2013.svg.png',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity >
            <Text style={{left: 28 , color: '#00308F', fontWeight: 'bold'}}>Log in wih facebook </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flex: 1, backgroundColor: 'white', alignItems: 'center',}}>
        <TouchableOpacity>
      {/* <Text style={{color:'black', fontWeight:'bold',alignItems:'center',marginTop:10}}>Forget password?</Text> */}
        </TouchableOpacity>
        </View> 
      <View
        style={{
          flex: 0.9,
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Text style={{color:'black',}}>Don't have an account? </Text>
        
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('SigupScreen', {
              email: userid,
              password: password,
            })
          }>
          <Text style={{color: '#318CE7', fontWeight: 'bold'}}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  facebook: {
    flexDirection: 'row',
    justifyContent: 'center',
    top: 10,
  },
  input: {
    borderBottomWidth: 1,
    padding: 4,
    margin: 20,
    marginBottom: 0,
  },
});
