import React, {Component, useEffect, useContext, useState} from 'react';
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
import {AuthContext} from '../Context.js';
import {SchoolContext} from '../context/userContext.js';
import styles from '../CustomStyles.js';
import {schoolData} from '../schoolData.js';

const Schools = ({route, navigation}) => {
  const pgSchoolsData = useContext(SchoolContext);

  console.log('pg schools data from context', pgSchoolsData);
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <View>
        <Text>Profile</Text>
      </View>
    </SafeAreaView>
  );
};

export default Schools;
