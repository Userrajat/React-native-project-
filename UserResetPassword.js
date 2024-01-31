import React, {FC, ReactElement, useState} from 'react';
import {Alert, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Styles from '../Styles';


export const UserResetPassword = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');

  const doUserPasswordReset = async function (){
    const emailValue = email;
    return await Parse.User.requestPasswordReset(emailValue)
      .then(() => {
    
        Alert.alert(
          'Success!',
          `Please check ${email} to proceed with password reset.`,
        );
    
        navigation.navigate('Login');
        return true;
      })
      .catch((error) => {
    
        Alert.alert('Error!', error.message);
        return false;
      });
  };

  return (
    <View style={Styles.LoginScreen}>
      <View style={Styles.form}>

        <Text>{'Please enter your account email to reset your password:'}</Text>
        <TextInput
          style={Styles.form_input}
          value={email}
          placeholder={'Your account email or Phone'}
          onChangeText={(text) => setEmail(text)}
          autoCapitalize={'none'}
          keyboardType={'email-address'}
        />
        <TouchableOpacity onPress={() => navigation.navigate('NewPassword')}>
          <View style={Styles.button}>
            <Text style={Styles.button_label}>{'Request password reset'}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
  export default UserResetPassword;
