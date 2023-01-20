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
import topIcon from '../assets/edupartner.png';
import {schoolData} from '../schoolData.js';
import {Searchbar} from 'react-native-paper';
import PopularSchools from '../components/PopularSchools.js';
import NextSchool from '../components/NextSchool.js';
import axios from 'axios';

const Homepage = ({navigation}) => {
  const [uniData, setUniData] = useState(schoolData);
  const [selectedSchool, setSelectedSchool] = useState('');
  const [isUpdated, setIsUpdated] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [pgSchoolsData, setPGSchoolsData] = useState('');
  const [pgFiltered, setPgFiltered] = useState('');
  const apiUrl = 'https://edutechapp01.herokuapp.com/api/';
  const [schoolsUpdated, setSchoolsUpdated] = useState(false);

  const onChangeSearch = query => setSearchQuery(query);

  const handleInfo = id => {
    const [institution] = uniData.filter(school => school.id === id);

    setSelectedSchool(institution);
    setIsUpdated(true);
  };

  // if (isUpdated === true) {
  //   console.log('selected school', selectedSchool);
  //   navigation.navigate('School');
  // }

  useEffect(() => {
    if (isUpdated === true) {
      navigation.navigate('School', {selectedSchool: selectedSchool});
    }
  }, [isUpdated, selectedSchool, navigation]);

  useEffect(() => {
    axios.get(apiUrl + 'PGSchools').then(response => {
      setPGSchoolsData(response.data);
      setSchoolsUpdated(true);
      setPgFiltered(response.data.filter(obj => obj.id === 0));
    });
  }, []);

  console.log('pg schools data', pgSchoolsData);
  console.log('pg filtereddd', pgFiltered);

  return (
    <SafeAreaView style={styles.sectionContainer}>
      {schoolsUpdated === true ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <PopularSchools />
          <View style={styles.loginHeader}>
            <View style={styles.marginBottom10}>
              <Text style={styles.h3bold}>Segun</Text>
              <Text style={styles.h5}>Welcome back!</Text>
            </View>

            <View style={styles.marginTop10}>
              <View style={styles.homeSliderCard}>
                <Text style={styles.h5}>Best picks</Text>
                <Text style={[styles.h4]}>Top schools this Fall</Text>
                <TouchableOpacity
                  style={styles.homeSliderButton}
                  onPress={() => navigation.navigate('School')}>
                  <Text style={[styles.white, styles.h6, styles.centerText]}>
                    View Picks
                  </Text>
                </TouchableOpacity>
              </View>

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

              <View>
                <View style={[styles.marginVertical20, styles.topTitles]}>
                  <Text style={styles.h4}>Top Choice</Text>
                  <Text>View All</Text>
                </View>

                <View>
                  <View>
                    {pgSchoolsData.slice(0, 5).map((school, i) => {
                      return (
                        <View key={school.id}>
                          <View
                            style={[
                              styles.recentAdditions,
                              styles.homeRecentCard,
                            ]}>
                            <View style={styles.width15}>
                              <Image
                                style={styles.recentImage}
                                source={{uri: school.logo}}
                              />
                            </View>
                            <View style={styles.width70}>
                              <Text style={[styles.boldText, styles.upperCase]}>
                                {school.name}
                              </Text>
                              <Text style={styles.h6}>{school.price}</Text>
                            </View>
                            <TouchableOpacity
                              onPress={() => {
                                navigation.navigate('School', {
                                  schoolId: school.id,
                                });
                              }}
                              style={[
                                styles.buttonView,
                                styles.buttonBackground,
                                styles.width15,
                              ]}>
                              <Text style={[styles.white, styles.centerText]}>
                                View
                              </Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                      );
                    })}
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      ) : (
        <View>
          <Text>Loading...</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Homepage;
