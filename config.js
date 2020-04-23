var config = {
    style: 'mapbox://styles/brandondaniels1917/ck7p8e3x103m81iqhe4xbeosm',
    accessToken: 'pk.eyJ1IjoiYnJhbmRvbmRhbmllbHMxOTE3IiwiYSI6ImNrMm1tYjgwYTBqbDIzZHQ1dmdyNWZxeWcifQ.fdROqOxFdqnMmA6G_f_hgw',
    showMarkers: false,
    theme: 'dark',
    alignment: 'left',
    title: 'The Red State Revolt',
    subtitle: 'Mapping the teacher strikes from 2018',
    byline: '',
    footer: 'Data from the Department of Education and Buruea of Labor Statistics',
    chapters: [
      {
          id: 'overview',
          title: 'The Red State Revolt',
          description: 'In 2018, six different states experienced state-wide teacher strikes. These strikes ranged in terms of the number of days, the number of teachers, and the outcomes of the strikes. The goal of this digital humanities project is to visualize different characteristics of this teachers revolt. The historical event gained the name The Red State Revolt, since a majority of the states involved in the strikes were controlled by Republican legislatures. Each of the strikes represent a deep dissatisifcation by teachers with the management of public education. This first vizualization shows the (number of teachers) times (the number of strike days). This figure, described as idle days by the Burueau of Labor Statistics, gives the viewer an idea of how massive each of these events were for the state. For each red area, there are at least 20,000 teachers deciding to risk their livlihood. And the taller the red area, the more these teachers decided to risk.',
          location: {
              center: [-96.92126, 36.79253],
              zoom: 3,
              pitch: 60.00,
              bearing: 0.88
          },
          onChapterEnter: [
              {
                  layer: 'red-states',
                  opacity: .75
              },
          ],
          onChapterExit: [
            {
            }
          ]
      },
      {
          id: 'linger',
          title: '',
          description: '',
          location: {
              center: [-96.92126, 36.79253],
              zoom: 4,
              pitch: 60.00,
              bearing: 0.88
          },
          onChapterEnter: [
              {
              },
          ],
          onChapterExit: [
            {
                  layer: 'red-states',
                  opacity: 0
            }
          ]
      },
        {
            id: 'glacier-np',
            title: 'West Viginia',
            image: 'https://media.graytvinc.com/images/690*388/WV+teacher+rally+crowd.jpg',
            description: 'West Viginia was the first state wide teacher strike in 2018.	In February 2018, the state of West Virginia was without public schools for nine days. During each of those week days, the buses did not pick up children, the cafeterias did not make food, and the classrooms did not provide instruction. The people who perform those forms of labor were not present, for they were at the state capitol collectively demanding a raise for all public employees. 200,000 students were affected by the work stoppage; and while the strike is difficult to measure in terms of economic damage, the relentless disruption of chanting teachers at the state capitol could be felt to the edges of West Virginia’s border. ',
            location: {
                center: [-80.80653, 38.65278],
                zoom: 5.87,
                pitch: 45.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'west-virginia',
                    opacity: 1
                },
            ],
            onChapterExit: [
              {
                    layer: 'west-virginia',
                    opacity: 1
              }
            ]
        },
        {
            id: 'harrison1998',
            title: 'Strike Density across the state',
            image: '',
            description: 'This map visualizes the number of students in each of the 55 school districts in West Virginia. While not a measument of the number of teachers, it helps approximate the districts where the strike was most impactful.',
            location: {
                center: [-80.58153, 39.09037],
                zoom: 7,
                pitch: 60.00,
                bearing: -117.24
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'final',
            title: '',
            image: '',
            description: 'Beige - 1000 students<br>Light Orange - 5000 students<br>Dark Orange - 10,000 students<br>Red - Over 15,000 students<br>Forgive me for this less than ideal legend, but I am still learning my javascript capabilities!',
            location: {
                center: [-80.53596, 39.41009],
                zoom: 7.12,
                pitch: 60.00,
                bearing: -173.60
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
