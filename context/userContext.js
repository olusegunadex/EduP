import React from 'react';
import {createContext, useEffect, useState} from 'react';
import axios from 'axios';

export const SchoolContext = createContext({
  pgSchoolsData: 'not set',
});

export function SchoolContextProvider({children}) {
  const [pgSchoolsData, setPGSchoolsData] = useState('');
  const [authIsReady, setAuthIsReady] = useState(false);
  const [error, setError] = useState(null /** no error by default */);

  const [schoolsUpdated, setSchoolsUpdated] = useState(false);
  const apiUrl = 'https://edutechapp01.herokuapp.com/api/';

  useEffect(() => {
    axios.get(apiUrl + 'PGSchools').then(response => {
      setPGSchoolsData(response.data);
      setSchoolsUpdated(true);
    });
  }, []);

  return (
    <SchoolContext.Provider
      value={{
        pgSchoolsData,
      }}>
      {children}
    </SchoolContext.Provider>
  );
}
