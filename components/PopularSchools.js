import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {Dimensions, View, Text} from 'react-native';

const PopularSchools = PopularPlacesProps => {
  const [pgSchoolsData, setPGSchoolsData] = useState('');
  const [pgFiltered, setPgFiltered] = useState('');
  const apiUrl = 'https://edutechapp01.herokuapp.com/api/';
  const [schoolsUpdated, setSchoolsUpdated] = useState(false);

  const navigation = useNavigation();

  // useEffect(() => {
  //   axios.get(apiUrl + 'PGSchools').then(response => {
  //     setPGSchoolsData(response.data);
  //     setSchoolsUpdated(true);
  //     setPgFiltered(response.data.filter(obj => obj.id === 0));
  //   });
  // }, []);

  // const filtered = pgSchoolsData
  //   .Array(3)
  //   .fill(0)
  //   .map(_ => {
  //     const image = require('@src/assets/place-details/main-photo.jpg');
  //     return {
  //       id: chance.string({
  //         length: 8,
  //         casing: 'upper',
  //         alpha: true,
  //         numeric: true,
  //       }),
  //       title: chance.company(),
  //       image,
  //       subTitle: chance.paragraph({
  //         sentences: 2,
  //       }),
  //       distance: 75,
  //       time: 90,
  //       rating: 4,
  //     };
  //   });

  // console.log('filtered', filtered);

  return (
    <View title="Popular Near You" actionButtonText="View more">
      <View>
        <Text>JUST SOME TESST</Text>
      </View>
    </View>
  );
};

export default PopularSchools;
