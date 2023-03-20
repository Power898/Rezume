// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================
var header = {
    name: {
      firstname: 'Ivan',
      lastname: 'Ivanov',
    },
    position: 'Junior Fullstack JS Developer',
    salary:'600$ в місяц',
    address: 'м.Вінниця вул. Київська 136-Г',
  }


  var footer = {
    social: {
      email: {
      text:'dmytro@mail.com',
      href: 'mailto:dmytro@mail.com',
      },
       phone: {
      text: '+380670000123',
      href: 'tel:+380670000123'
      },
       linkedin: {
      href: 'https://www.linkedin.com/in/dmytro-test',
      text: 'LinkedIn'
      },
    }
  }
//==================================================================
// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume/Summary',
    },

    header,

   main1: {
    summary:{
      title: 'Summary',
      text: `Open-minded for new technologies, with 1 years of
      experience in development. Whenever I start to
      work on a new project I learn the domain and try
      to understand the idea of the project. Good team
      player, every colleague is a friend to me.`,
    },
    other:{
      title: 'Other experience',
      text: `Pet project for parsing sport betting data from
      different platforms ( odds ) and sport statistics
      ( tournament position, goals etc), analyzing by
      simple mathematics models and preparing
      probability for such events like: money line -
      first win / draw / second win, totals etc.`
     },
   },

    footer,
  })
})



// ================================================================

// Підключаємо роутер до бек-енду// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume/Skills',
    },

    header,
     
    main2: {
      skills1: {
        title: 'All skills'
      },
      skills2: {
         title: 'My hobbies'
      },
      skills:[
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: 9,
          isTop: true,
        },
        {
          name: 'VS Code',
          point: 9,
          isTop: false,
        },
        {
          name: 'Git & Terminal',
          point: 10,
        },
        {
          name: 'NPM',
          point: 9,
        },
        {
          name: 'react.js',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
     ],
     hobbies: [
      {
        name: "read books",
        isMain: false,
      },
      {
        name: "walk with dog",
        isMain: true,
      },
      {
        name: "drawin",
        isMain: false,
      },
     ]
    },

    footer,  
  })
})


module.exports = router
//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //  
  res.render('education', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume/Education',
    },

    header,
    
    main:{
      education1: {
        title: 'My education'
      },
      education2: {
        title: 'My certificates'
      },
      educations: [
        {
          name:"Політехнічний університет",
          IsEnd: false,
        },
        {
          name:"курси IT Brains",
          isEnd: true,
        },
        {
          name:"курси англійської мови",
          isEnd: false,
        },
      ],
      certification: [  
        {
          name: "certificate1",
          id: 12345,
          isEnd2: true,
        },
        {
          name: "certificate2",
          id: 13345,
          isEnd2: false,
        },
        {
          name: "certificate3",
          id: 12345,
          isEnd2: false,
        },
      ],
    },

    footer,     
  })
})

//================================================
//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume/Skills',
    },

    header,
     
    main2: {
      skills1: {
        title: 'All skills'
      },
      skills2: {
         title: 'My hobbies'
      },
      skills:[
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: 9,
          isTop: true,
        },
        {
          name: 'VS Code',
          point: 9,
          isTop: false,
        },
        {
          name: 'Git & Terminal',
          point: 10,
        },
        {
          name: 'NPM',
          point: 9,
        },
        {
          name: 'react.js',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
     ],
     hobbies: [
      {
        name: "read books",
        isMain: false,
      },
      {
        name: "walk with dog",
        isMain: true,
      },
      {
        name: "drawin",
        isMain: false,
      },
     ]
    },

    footer,  
  })
})

//====================================================
//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані

    layout: 'big',

    page: {
      title: 'Resume/Work',
    },

    header,
     
    main2: {
       works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name:'IT Brains',
            url: 'https://it-brains.com.ua/',
          },
          duration: {
            from: '10.10.2022',
            to: null,
          },
          projectAmount: 3,

          projects: {
            name: 'Resume',
            url: 'https://resume.com.ua/',
            about: 'layout of pages according to specified templates',
            stacks:[
            {
              name: 'React.js',
            },
            {
              name: 'HTML / CSS',  
            },
            {
              name: 'Node.js',
            },
           ],
           stackAmount: 5,
           awards: [
            {
              name: 'passed, you can go to another level'
            },
            {
              name: 'integration of knowledge and skills took place'
            },
           ],
           awardAmount: 4,
          },
        },
      ],
    },
     
    footer, 
  })
})


// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/person', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('person', {

    layout: 'person',

    page: {
      title: 'Resume/Person',
    },

    person: {
      name: 'Emma Johnson',
      age: 32,
      gender: 'Female',
      address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001',
        country: 'USA',
      },
      education: [
        {
          degree: 'Bachelor of Science',
          major: 'Computer Science',
          university:
            'Massachusetts Institute of Technology',
          graduationYear: 2012,
        },
      ],
      workExperience: [
        {
          company: 'Google',
          title: 'Software Engineer',
          startDate: '2012-06-01',
          endDate: '2016-12-31',
          responsibilities: [
            {
            h1:'Developed new features for Google Maps',
            h2:'Worked on improving search algorithms',
          }
          ],
          year_founded: 1990,
          industry: 'Technology',
          employees: [
            {
              name: 'John Smith',
              position: 'CEO',
              department: 'Executive',
              projects: [
                {
                  name: 'Project Alpha',
                  description:
                    'Developing new software platform',
                  status: 'In Progress',
                  teams: [
                    {
                      team_name: 'Awesome Team',
                      team_leader: {
                        name: 'John Smith',
                        title: 'Team Leader',
                        email: 'john.smith@example.com',
                      },
                      team_members: [
                        {
                          name: 'Alice Johnson',
                          title: 'Software Engineer',
                          email:
                            'alice.johnson@example.com',
                          skills: ['Java', 'Python', 'SQL'],
                          projects: [
                            {
                              name: 'Project A',
                              description:
                                'Lorem ipsum dolor sit amet',
                              technologies: [
                                'Java',
                                'Spring Framework',
                              ],
                              team_members: [
                                {
                                  name1: 'Bob Lee',
                                  title1: 'Software Engineer',
                                },
                                {
                                  name2: 'Cindy Chen',
                                  title2: 'UI Designer',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  })
})


//==========================================
//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/bio', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('bio', {

    layout: 'bio',

    page: {
      title: 'Resume/Bio',
    },

    name: 'Albert Einstein',
    birthdate: 'March 14, 1879',
    birthplace:
      'Ulm, Kingdom of Württemberg, German Empire',
    deathdate: 'April 18, 1955',
    deathplace: 'Princeton, New Jersey, United States',
    nationality: 'Swiss, German, American',
    occupation: 'Theoretical Physicist',
    known_for: [
      'Theory of Relativity',
      'E=mc²',
      'Photoelectric Effect',
      'Brownian Motion',
    ],
    education: [
      {
        degree: 'Doctor of Philosophy',
        field: 'Physics',
        institution: 'University of Zurich',
        year: 1905,
      },
    ],
    notable_publications: [
      {
        title1: 'On the Electrodynamics of Moving Bodies',
        year1: 1905,
        publisher1: 'Annalen der Physik',
      },
      {
        title2:
          'Does the Inertia of a Body Depend Upon Its Energy Content?',
        year2: 1905,
        publisher2: 'Annalen der Physik',
      },
    ],
    partners: [
      {
        name1: 'Mileva Marić',
        relationship1: 'First wife',
        years1: '1903-1919',
      },
      {
        name2: 'Elsa Einstein',
        relationship2:
          "Second wife, also Einstein's first cousin",
        years2: '1919-1936',
      },
    ],
    awards: [
      {
        title: 'Nobel Prize in Physics',
        year: 1921,
        description:
          'Awarded for his explanation of the photoelectric effect',
      },
    ],
    influences: [
      'Isaac Newton',
      'James Clerk Maxwell',
      'Hermann Minkowski',
    ],
    influenced: [
      'Niels Bohr',
      'Erwin Schrödinger',
      'Werner Heisenberg',
      'Richard Feynman',
    ],
    quotes: [
      'Imagination is more important than knowledge.',
      'I have no special talent. I am only passionately curious.',
      'The important thing is not to stop questioning.',
      'The most beautiful thing we can experience is the mysterious. It is the source of all true art and all science.',
    ],
    major_discoveries: [
      {
        title: 'Photoelectric Effect',
        year: 1905,
        description:
          'Einstein explained the photoelectric effect, where electrons are emitted from a metal surface when it is illuminated by light.',
      },
    ],
    contributions: {
      title: 'Inventions',
      description:
        'Leonardo designed and invented a wide variety of machines and devices, including a helicopter, a diving suit, and a self-propelled cart. Many of his inventions were centuries ahead of their time.',
      year: 'Late 15th to early 16th century',
      field: 'Invention',
    },
  })
})
