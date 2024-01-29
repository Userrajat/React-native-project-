import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'

const SigupScreen = ({navigation,route}) => {
    console.log('route', route)
    const [email,setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [username,setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showpass,setShowpass] = useState(true);

    const [emailerror,setEmailerror] = useState(false);
    const [fullnameerror,setFullNameerror] = useState(false);
    const [userNameerror,setUserNameerror] = useState(false);
    const [passworderror,setPassworderror] = useState(false);

    const check = () =>
    {
        if(!email)
        {
            setEmailerror(true)
        }
        if(!fullName)
        {
            setFullNameerror(true)
        }
        if(!username)
        {
            setUserNameerror(true)
        }
        if(!password)
        {
            setPassworderror(true)
        }
    }

    const pass = () =>
    {
        if(showpass === true)
        {
            setShowpass(false);
        }
        else
        {
            setShowpass(true);
        }
    }
    return (
      <View style={{ flex: 1 }}>
     <View style={{ flex: 0, backgroundColor: 'white' }}>
       </View>
       <View style={{ flex: 4.5, backgroundColor: 'white', alignItems: 'center' }}>
       <View style={{ backgroundColor: 'white', alignItems: 'center' }}>
       <Image style={{ height: 60, width: 150 }}
        source={{ uri: 'https://1000logos.net/wp-content/uploads/2017/02/Instagram-Logo-2010-2013.png' }} />
        </View>
        <Text style={{ fontSize: 13, fontWeight: '600' }}>Sign up to see photos and videos from your</Text>
         <Text style={{ fontSize: 13, fontWeight: '600' }}>friends</Text>
         <View style={styles.facebook}>
         <TouchableOpacity>
         <Image style={{ height: 22, width: 22 }}
          source={{ uri: 'https://static-00.iconduck.com/assets.00/facebook-icon-2048x2048-pth4zu2i.png'}} />
         </TouchableOpacity>
         <TouchableOpacity>
         <Text style={{ left: 15, color: '#00BFFF', fontWeight: 'bold' }}>Log in with facebook</Text></TouchableOpacity>      
          </View>
         <Text style={{ top: 23, fontSize: 13, fontWeight: '600',marginBottom:0 }}>OR</Text>
          </View>
           <View style={{ flex: 11, backgroundColor: 'white' }}>
           <View style={{}}>
         
          <TextInput
          value={email}
         onChangeText={(text)=>setEmail(text)}
        placeholder='Mobile Number or Email'
        placeholderTextColor={'black'}
        style={styles.input}>
        </TextInput>
         </View>
         <View style={{}}>
         <TextInput
         value={fullName}
         onChangeText={(text)=>setFullName(text)}
         placeholder='Full Name'
         placeholderTextColor={'black'}
         style={styles.input}>
        </TextInput>
         </View>
         <View style={{}}>
         <TextInput
         value={username}
         onChangeText={(text)=>setUsername(text)}
         placeholder='Username'
         placeholderTextColor={'black'}
         style={ styles.input }>
         </TextInput>
    
         </View>
         <View style={{}}>
         <TextInput
         value={password}
         onChangeText={(text)=>setPassword(text)}
         secureTextEntry = {showpass}
         placeholder='Password'
         placeholderTextColor={'black'}
        style={styles.input}>
       </TextInput>
         </View>
         <View style={{}}>
      <View style={{ alignItems: 'flex-end', bottom: 23, right: 25 }}>
      <TouchableOpacity onPress={pass} >
      <Image style={{ height: 17, width: 17 }} source={showpass ?  { uri: 'https://cdn-icons-png.flaticon.com/512/25/25186.png',} : { uri:'https://toppng.com/uploads/preview/eye-closed-icon-11550225620ajweggaqlk.png',} } /></TouchableOpacity>
      </View>
      </View>
      <TouchableOpacity
       onPress={check}
       style={{ backgroundColor: '#82EEFD',alignItems: 'center', justifyContent: 'center',margin: 20,padding: 8,marginBottom:0 }}>
       <Text style={{ fontSize: 15, color: 'white', fontWeight: 'bold'}}>Sign up</Text>
       </TouchableOpacity>
       <View style={{ alignItems: 'center',marginBottom:0 }}>
      <Text style={{fontSize: 15, fontWeight: '600'}}>By signing up, you agree to our Terms, Data</Text>
      <Text style={{ fontSize: 15, fontWeight: '600' }}>Policy and Cookies Policy.</Text></View>
      
       <View></View>
      </View>
      
       <View style={{flex:1,backgroundColor: 'white', flexDirection: 'row',justifyContent: 'center',}}>
       <Text style={{ fontWeight: 'bold', color: 'black' }}>Have an account?</Text>
       <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
       <Text style={{ color: '#318CE7', fontWeight: 'bold' }}>Log in</Text>
       </TouchableOpacity>
            </View>
     
        </View>
      
    );
};

export default SigupScreen;

const styles = StyleSheet.create({
    facebook: {
        flexDirection: 'row',
        justifyContent: 'center', top: 12,
        marginBottom:0
    },
    input :{
    borderBottomWidth: 1,
    padding: 1,
    margin: 20,
    marginBottom:0
},
error:{
    marginLeft:20,
    marginBottom:0
}
})