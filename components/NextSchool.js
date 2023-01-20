import React, {Component, useState, useEffect} from 'react';
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

const NextSchool = ({pgSchoolsData}) => {
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <View>
        <Text style={[styles.h4, styles.marginVertical20]}>
          Find your next school
        </Text>
        <View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.homeScrollView}>
            {pgSchoolsData.slice(0, 5).map((school, i) => {
              return (
                <View key={school.id}>
                  <View style={styles.homeNextSchool}>
                    <Image
                      style={styles.homeCardImage}
                      source={{uri: school.image}}
                    />
                    <Image
                      style={styles.homeScrollImage}
                      source={{uri: school.logo}}
                    />
                    <View style={styles.homeNextSchoolText}>
                      <Text style={[styles.boldText, styles.upperCase]}>
                        {school.name}
                      </Text>
                      <Text style={styles.h6}>{school.website}</Text>
                      <Text style={styles.h6}>{school.price}</Text>
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate('School', {
                            schoolId: school.id,
                          });
                        }}
                        style={[
                          styles.marginVertical10,
                          styles.buttonBackground,
                        ]}>
                        <Text style={[styles.white, styles.centerText]}>
                          View Info
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              );
            })}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NextSchool;
