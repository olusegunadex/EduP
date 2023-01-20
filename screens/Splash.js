import React, {Component, useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Text,
  ScrollView,
  View,
  Image,
} from 'react-native';
import styles from '../CustomStyles.js';
import {schoolData} from '../schoolData.js';

const Splash = ({navigation}) => {
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <View>
        <Text>Loading...</Text>
      </View>
    </SafeAreaView>
  );
};

export default Splash;
