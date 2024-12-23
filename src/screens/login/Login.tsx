import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {styles} from './style';
import {useHeaderHeight} from '@react-navigation/elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Logo} from '../../../res/assets/images/svgs';
import {useNavigation} from '@react-navigation/native';
import {CommonActions} from '@react-navigation/native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({email: '', password: ''});

  const height = useHeaderHeight();
  const navigation = useNavigation();

  const validateFields = () => {
    let valid = true;
    let emailError = '';
    let passwordError = '';

    if (!email) {
      emailError = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      emailError = 'Invalid email address';
      valid = false;
    }

    if (!password) {
      passwordError = 'Password is required';
      valid = false;
    } else if (password.length < 6) {
      passwordError = 'Password must be at least 6 characters';
      valid = false;
    }

    setErrors({email: emailError, password: passwordError});
    return valid;
  };

  const handleLogin = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{name: 'TabNavigator'}],
      }),
    );
  };

  const handleFocus = (field: any) => {
    setErrors(prevErrors => ({...prevErrors, [field]: ''}));
  };

  return (
    <ImageBackground
      source={require('../../../res/assets/images/backgroundImage.png')}
      style={{
        height: hp(100),
        width: wp(100),
      }}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="transparent"
        translucent={true}
      />
      <Logo style={styles.logo} />
      <View style={{position: 'absolute', bottom: hp(6), width: '100%'}}>
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={[styles.buttonText]}>{'Login'}</Text>
        </TouchableOpacity>
        <Text style={styles.forgetButton}>Contact Service Desk</Text>
      </View>
      {/* <KeyboardAvoidingView
        keyboardVerticalOffset={height}
        behavior="padding"
        style={styles.container}>
       
        <View style={styles.bottomSheet}>
          <Text style={styles.loginText}>Login</Text>
          <View>
            <CustomInput
              label="Email Address"
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
              onFocus={() => handleFocus('email')}
              errorMessage={errors.email}
            />
            <CustomInput
              label="Password"
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              onFocus={() => handleFocus('password')}
              isPassword
              errorMessage={errors.password}
            />
          
          </View>
        </View>
      </KeyboardAvoidingView> */}
    </ImageBackground>
  );
};

export default LoginScreen;
