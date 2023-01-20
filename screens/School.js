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

const Schools = ({route, navigation}) => {
  const {schoolId} = route.params;
  const [uniData, setUniData] = useState(schoolData);
  const [selectedSchool, setSelectedSchool] = useState('');
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    const handleInfo = () => {
      const [institution] = uniData.filter(school => school.id === schoolId);
      setSelectedSchool(institution);
    };
    handleInfo();
    setIsUpdated(true);
  }, [schoolId, uniData]);

  return (
    <SafeAreaView style={styles.sectionContainer}>
      {selectedSchool ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image
            style={styles.schoolPageImage}
            source={{uri: selectedSchool.image}}
          />
          <View style={styles.loginHeader}>
            <View>
              <Text style={styles.h4colored}>{selectedSchool.schoolName}</Text>
            </View>
          </View>
          <View style={styles.loginHeader}>
            <View style={styles.marginBottom10}>
              <Text style={styles.h6}>{selectedSchool.description}</Text>
            </View>
          </View>
          <View style={styles.loginHeader}>
            <View style={styles.schoolPageDeets}>
              <View style={styles.width50Percent}>
                <View style={styles.schoolInfoCard}>
                  <Text style={styles.boldText}>AVERAGE TUITION</Text>
                  <Text>{selectedSchool.averageTuition}</Text>
                </View>
              </View>
              <View style={styles.width50Percent}>
                <View style={styles.schoolInfoCard}>
                  <Text style={styles.boldText}>WORLD RANKING</Text>
                  <Text>{selectedSchool.worldRanking}</Text>
                </View>
              </View>
            </View>

            <View style={styles.schoolPageDeets}>
              <View style={styles.width50Percent}>
                <View style={styles.schoolInfoCard}>
                  <Text style={styles.boldText}>IELTS REQUIREMENT</Text>
                  <Text>{selectedSchool.ieltsRequirement}</Text>
                </View>
              </View>
              <View style={styles.width50Percent}>
                <View style={styles.schoolInfoCard}>
                  <Text style={styles.boldText}>RATING</Text>
                  <Text>{selectedSchool.rating}</Text>
                </View>
              </View>
            </View>

            <View style={styles.schoolPageDeets}>
              <View style={styles.width50Percent}>
                <View style={styles.schoolInfoCard}>
                  <Text style={styles.boldText}>SCHOLARSHIPS</Text>
                  <Text>{selectedSchool.scholarships}</Text>
                </View>
              </View>
              <View style={styles.width50Percent}>
                <View style={styles.schoolInfoCard}>
                  <Text style={styles.boldText}>ADMISSIONS</Text>
                  <Text>{selectedSchool.admissions}</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.justifyCenter}>
            <TextInput
              style={styles.whiteInput}
              placeholder="Leave a comment"
            />
            <TouchableOpacity
              style={[styles.marginVertical10, styles.buttonBackground]}>
              <Text style={[styles.white, styles.centerText]}>
                Submit Review
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      ) : (
        <Text>Loading...</Text>
      )}
    </SafeAreaView>
  );
};

export default Schools;
