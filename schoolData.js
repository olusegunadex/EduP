const schoolData = [
  {
    id: 1,
    schoolName: 'University of Hull',
    contact: 'susan@example.com',
    averageTuition: '£10,000',
    worldRanking: '700th',
    ieltsRequirement: 'Not required',
    scholarships: 'Available',
    admissions: 'January 2023',
    rating: '5/10',
    website: 'www.hull.ac.uk',
    logo: 'https://www.casita.com/images/listing/1340/orig/student-accoommodation-hull-near-university-of-hull-69119357520200413093248am.png',
    image:
      'http://intake.education/sites/default/files/a1cad4d2cc9144ac4ca6014a5163c7c93fb72460.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 2,
    schoolName: 'Northumbria University',
    contact: 'diptim@example.com',
    averageTuition: '£10,000',
    worldRanking: '700th',
    ieltsRequirement: 'Not required',
    scholarships: 'Available',
    admissions: 'January 2023',
    rating: '5/10',
    website: 'www.hull.ac.uk',
    logo: 'https://ibec.or.id/wp-content/uploads/2018/07/uni_logo_northumbria_1280_510.jpg',
    image: 'https://smapse.com/storage/2018/07/northumbria-university-4.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 3,
    schoolName: 'University of Leicester',
    contact: 'segun@example.com',
    averageTuition: '£10,000',
    worldRanking: '700th',
    ieltsRequirement: 'Not required',
    scholarships: 'Available',
    admissions: 'January 2023',
    rating: '5/10',
    website: 'www.hull.ac.uk',
    logo: 'https://universitycompare.com/content/images/UniLogo--University-of-Leicester.jpg',
    image:
      'https://ichef.bbci.co.uk/news/976/cpsprodpb/6803/production/_118372662_universityofleicestercredituniversityofleicester.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 4,
    schoolName: 'York St John',
    contact: 'lami@example.com',
    averageTuition: '£10,000',
    worldRanking: '700th',
    ieltsRequirement: 'Not required',
    scholarships: 'Available',
    admissions: 'January 2023',
    rating: '5/10',
    website: 'www.hull.ac.uk',
    logo: 'https://www.jobs.ac.uk/enhanced/employer/york-st-john-university/images/default-logo.png',
    image:
      'https://pxl-yorksjacuk.terminalfour.net/1600x1000/filters:quality(35)/prod01/yorksjacuk/media/content-assets/safe-images/1600-x-1000/CAMPUS-4.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 5,
    schoolName: 'University of Sunderland',
    contact: 'janny@example.com',
    averageTuition: '£10,000',
    worldRanking: '700th',
    ieltsRequirement: 'Not required',
    scholarships: 'Available',
    admissions: 'January 2023',
    rating: '5/10',
    website: 'www.hull.ac.uk',
    logo: 'https://studentapply.org/uploads/universities/university/186a396fd0cab5c4fb2a83f2adb860df.jpeg',
    image:
      'https://aspiresquare.com/wp-content/uploads/2022/03/University-of-Sunderland.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 6,
    schoolName: 'University of Greenwich',
    contact: 'adex@example.com',
    averageTuition: '£10,000',
    worldRanking: '700th',
    ieltsRequirement: 'Not required',
    scholarships: 'Available',
    admissions: 'January 2023',
    rating: '5/10',
    website: 'www.hull.ac.uk',
    logo: 'https://centaur-wp.s3.eu-central-1.amazonaws.com/designweek/prod/content/uploads/2016/12/01185323/University-of-Greenwich-logo.jpeg',
    image:
      'https://www.gre.ac.uk/__data/assets/image/0030/119649/varieties/v800.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];

export {schoolData};
