import React, {Component} from 'react';
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

const Register = ({navigation}) => {
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
            <Text style={styles.loginH1}>Hello,</Text>
            <Text style={styles.loginH1}>Create an account</Text>
          </View>

          <Text style={styles.loginH2}>
            Already registered? /{' '}
            <Text
              style={styles.boldTextLink}
              onPress={() => navigation.navigate('Login')}>
              Sign In
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
          <TextInput
            style={styles.input}
            placeholder="Course of Study"
            keyboardType="text"
          />
          <View style={styles.marginTop30}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonWhiteCenter}>Sign Up</Text>
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

export default Register;
