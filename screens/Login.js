import React, {Component, useContext} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Text,
  Button,
  View,
  Image,
} from 'react-native';
import styles from '../CustomStyles.js';
import topIcon from '../assets/edupartner.png';
import {AuthContext} from '../Context.js';

const Login = ({navigation}) => {
  const {signIn} = useContext(AuthContext);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.sectionContainer}>
        <View style={styles.marginBottom20}>
          <Image
            style={styles.tinyLogo}
            source={require('../assets/edupartner.png')}
          />
        </View>

        <View style={styles.loginHeader}>
          <View style={styles.marginBottom10}>
            <Text style={styles.loginH1}>Hey,</Text>
            <Text style={styles.loginH1}>Login to Edupartner</Text>
          </View>

          <Text style={styles.loginH2}>
            If you are New /
            <Text
              style={styles.boldTextLink}
              onPress={() => {
                navigation.push('Register');
              }}>
              Create account
            </Text>
          </Text>
        </View>
        <View style={styles.loginFormBg}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="text"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            keyboardType="text"
          />
          <Text style={styles.forgotpwd}>
            Forgot password? / <Text style={styles.boldText}>Reset</Text>
          </Text>
          <View style={styles.marginTop30}>
            <TouchableOpacity style={styles.button} onPress={() => signIn()}>
              <Text style={styles.buttonWhiteCenter}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.marginTop10}>
          <Text style={(styles.forgotpwd, styles.centerText)}>Skip Now</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
