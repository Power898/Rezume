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

//===================================================
router.get('/program', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('program', {
    program: {
      excursion: {
        name: 'Cultural Tour',
        location: {
          city: 'Paris',
          country: 'France',
        },
        date: '2023-06-15',
        program: [
          {
            name: 'Museum Visit',
            type: 'Art',
            duration: 3,
            details: {
              museum: {
                name: 'The Louvre',
                location: {
                  address: 'Rue de Rivoli',
                  city: 'Paris',
                  country: 'France',
                },
                exhibits: [
                  {
                    name: 'Mona Lisa',
                    artist: 'Leonardo da Vinci',
                    description: 'Iconic portrait painting',
                    audio_guide: true,
                  },
                  {
                    name: 'Winged Victory of Samothrace',
                    artist: null,
                    description:
                      'Ancient Greek statue of Nike, the goddess of victory',
                    audio_guide: true,
                  },
                ],
              },
              guide: {
                name: 'Francois',
                language: 'French',
                rating: 4.8,
              },
            },
          },
          {
            name: 'Cultural Show',
            type: 'Music and Dance',
            duration: 2,
            details: {
              venue: {
                name: 'Moulin Rouge',
                location: {
                  address: '82 Boulevard de Clichy',
                  city: 'Paris',
                  country: 'France',
                },
              },
              performers: [
                {
                  name: 'Mireille Mathieu',
                  type: 'Chanson singer',
                },
                {
                  name: "Ballet de l'Opéra National de Paris",
                  type: 'Classical ballet company',
                },
              ],
              guide: {
                name: 'Sophie',
                language: 'English',
                rating: 4.6,
              },
            },
          },
        ],
      },
    },
  })
})
