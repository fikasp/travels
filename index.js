
const cat = {
  all: "Wszystkie",
  profil: "Profilówki",
  general: "Ogólne",
  gastro: "Gastronomia",
  history: "Historia", 
  religion: "Religia",
  culture: "Kultura", 
  nature: "Natura", 
}
const ranges = {
  mountains: "GÓRY",
  poland: "POLSKA",
  world: "EUROPA"
}
const startCity = "KRAKÓW"
const mapActive = true

const data = {
  [ranges.mountains]: {
    "Beskid Mały": {
      coor: [
        49.7797122,
        19.3057251
      ],
      zoom: 12,
      "Czupel": {
        coor: [
          49.7678918,
          19.1609716
        ],
        date: [
          2021
        ],
        zoom: 15,
        gallery: []
      },
      "Leskowiec": {
        coor: [
          49.7955468,
          19.4458866
        ],
        date: [
          2010
        ],
        zoom: 12,
        gallery: []
      }
    },
    "Beskid Sądecki": {
      coor: [
        49.4716938,
        20.6913757
      ],
      zoom: 12,
      "Hala Łabowska": {
        coor: [
          49.4723456,
          20.8101922
        ],
        date: [
          2022
        ],
        zoom: 15,
        gallery: [
          {
            catg: cat.culture,
            name: "Schronisko Cyrla",
            coor: [
              49.4919324,
              20.7159394
            ],
            date: [
              2022
            ]
          }
        ]
      }
    },
    "Tatry Wysokie": {
      coor: [
        49.2121026,
        20.0493622
      ],
      zoom: 13,
      "Gęsia Szyja": {
        coor: [
          49.2590247,
          20.0765276
        ],
        date: [
          2024
        ],
        zoom: 15,
        gallery: [
          {
            catg: cat.nature,
            name: "Rusinowa Polana 1 S",
            coor: [
              49.2611673,
              20.0922453
            ],
            date: [
              2024
            ]
          },
          {
            catg: cat.nature,
            name: "Rusinowa Polana 2 SE",
            coor: [
              49.2624556,
              20.091269
            ],
            date: [
              2024
            ]
          },
          {
            catg: cat.nature,
            name: "Rusinowa Polana 3 N",
            coor: [
              49.2612373,
              20.0884044
            ],
            date: [
              2024
            ]
          }
        ]
      }
    }
  },
  [ranges.poland]: {
    "Małopolskie": {
      coor: [
        49.8990575,
        20.2409363
      ],
      zoom: 10,
      "KRAKÓW": {
        coor: [
          50.0616779,
          19.9373317
        ],
        date: [
          2022
        ],
        zoom: 13,
        gallery: []
      },
      "Myślenice": {
        coor: [
          49.8347232,
          19.9387157
        ],
        date: [
          2022
        ],
        zoom: 15,
        gallery: []
      }
    }
  },
  [ranges.world]: {
    "Hiszpania": {
      coor: [
        40.413496,
        -3.7133789
      ],
      zoom: 7,
      "Barcelona": {
        coor: [
          41.3707783,
          2.1699607
        ],
        date: [
          2019
        ],
        zoom: 13,
        gallery: [
          {
            catg: cat.history,
            name: "Casa Batllo",
            coor: [
              41.3916745,
              2.164949
            ],
            date: [
              2019
            ]
          },
          {
            catg: cat.history,
            name: "Casa Mila",
            coor: [
              41.3951927,
              2.161784
            ],
            date: [
              2019
            ]
          },
          {
            catg: cat.history,
            name: "La Boqueria",
            coor: [
              41.3820252,
              2.1722916
            ],
            date: [
              2019
            ]
          },
          {
            catg: cat.history,
            name: "La Rambla 1",
            coor: [
              41.3844442,
              2.1707815
            ],
            date: [
              2019
            ]
          },
          {
            catg: cat.history,
            name: "La Rambla 2",
            coor: [
              41.3770662,
              2.1765482
            ],
            date: [
              2019
            ]
          },
          {
            catg: cat.history,
            name: "Most Biskupi",
            coor: [
              41.3832765,
              2.1764436
            ],
            date: [
              2019
            ]
          },
          {
            catg: cat.culture,
            name: "Escuela Massana",
            coor: [
              41.3811035,
              2.1709612
            ],
            date: [
              2019
            ]
          },
          {
            catg: cat.culture,
            name: "Muzeum MNAC",
            coor: [
              41.3712695,
              2.1513033
            ],
            date: [
              2019
            ]
          },
          {
            catg: cat.general,
            name: "Panorama 1",
            coor: [
              41.370879,
              2.170465
            ],
            date: [
              2019
            ]
          },
          {
            catg: cat.general,
            name: "Panorama 2",
            coor: [
              41.3708729,
              2.1703362
            ],
            date: [
              2019
            ]
          },
          {
            catg: cat.general,
            name: "Panorama 3",
            coor: [
              41.3708548,
              2.1702102
            ],
            date: [
              2019
            ]
          },
          {
            catg: cat.general,
            name: "Panorama 4",
            coor: [
              41.3708367,
              2.1700788
            ],
            date: [
              2019
            ]
          },
          {
            catg: cat.general,
            name: "Plac Hiszpański",
            coor: [
              41.374031,
              2.1497905
            ],
            date: [
              2019
            ]
          },
          {
            catg: cat.general,
            name: "Port Vell",
            coor: [
              41.375448,
              2.1802014
            ],
            date: [
              2019
            ]
          },
          {
            catg: cat.general,
            name: "Stadion Olimpijski",
            coor: [
              41.3657862,
              2.1556699
            ],
            date: [
              2019
            ]
          },
          {
            catg: cat.religion,
            name: "Bazylika La Merce",
            coor: [
              41.3796303,
              2.1796837
            ],
            date: [
              2019
            ]
          },
          {
            catg: cat.religion,
            name: "Bazylika NMP Morza",
            coor: [
              41.3837841,
              2.1820065
            ],
            date: [
              2019
            ]
          },
          {
            catg: cat.religion,
            name: "Katedra św. Eulalii 1",
            coor: [
              41.3842671,
              2.1761566
            ],
            date: [
              2019
            ]
          },
          {
            catg: cat.religion,
            name: "Katedra św. Eulalii 2",
            coor: [
              41.3838385,
              2.1770149
            ],
            date: [
              2019
            ]
          },
          {
            catg: cat.religion,
            name: "Katedra św. Eulalii 3",
            coor: [
              41.3836754,
              2.1767923
            ],
            date: [
              2019
            ]
          },
          {
            catg: cat.religion,
            name: "Sagrada Familia 1",
            coor: [
              41.4040464,
              2.1747029
            ],
            date: [
              2019
            ]
          },
          {
            catg: cat.religion,
            name: "Sagrada Familia 2",
            coor: [
              41.402952,
              2.1741557
            ],
            date: [
              2019
            ]
          },
          {
            catg: cat.religion,
            name: "Sagrada Familia 3",
            coor: [
              41.403463,
              2.1750569
            ],
            date: [
              2019
            ]
          },
          {
            catg: cat.religion,
            name: "Sagrada Familia 4",
            coor: [
              41.4035957,
              2.1743488
            ],
            date: [
              2019
            ]
          }
        ]
      },
      "Cuenca": {
        coor: [
          40.0782931,
          -2.1274102
        ],
        date: [
          2019
        ],
        zoom: 15,
        gallery: []
      },
      "Madryt": {
        coor: [
          40.4153095,
          -3.7137866
        ],
        date: [
          2019
        ],
        zoom: 13,
        gallery: []
      },
      "Requena": {
        coor: [
          39.4853337,
          -1.1007035
        ],
        date: [
          2019
        ],
        zoom: 15,
        gallery: []
      },
      "Saragossa": {
        coor: [
          41.6570062,
          -0.8804995
        ],
        date: [
          2019
        ],
        zoom: 13,
        gallery: []
      },
      "Walencja": {
        coor: [
          39.4589143,
          -0.3568089
        ],
        date: [
          2019
        ],
        zoom: 13,
        gallery: []
      }
    },
    "Austria": {
      coor: [
        47.6912769,
        13.2000732
      ],
      zoom: 8,
      "Wiedeń": {
        coor: [
          48.1991634,
          16.3716245
        ],
        date: [
          2019
        ],
        zoom: 13,
        gallery: []
      }
    }
  }
}