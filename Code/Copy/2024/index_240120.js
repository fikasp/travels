const cat = {
  profil: "Profilówka",
  all: "Wszystkie",
  general: "Ogólne",
  history: "Historia", 
  religion: "Religia",
  culture: "Kultura", 
  nature: "Natura", 
  gastro: "Gastro",
}

const cities = {
  // @sup GÓRY
  "GÓRY": {
    "Tatry" : 
      {coor: [49.1792488,20.0884581], zoom: 12, gallery: [
        {coor: [49.1792488,20.0884581], catg: cat.profil, name: 'Rysy 2013', date: [2013]},
        {coor: [49.2251791,20.0145686], catg: cat.profil, name: 'Kościelec 2021', date: [2021]},
      ]},
    "Pieniny" : 
      {coor: [49.4138194, 20.4141855], zoom: 12, gallery: [
        {coor: [49.4138194, 20.4141855], catg: cat.profil, name: 'Trzy Korony 2023', date: [2023]},
      ]}
  },
  // "EUROPA": {
    // "Barcelona" : 
    // {coor: [], zoom: 12, gallery: []},
    // "BUDAPESZT" : 
    // {coor: [], zoom: 12, gallery: []},
    // "MADRYT" : 
    // {coor: [], zoom: 12, gallery: []},
    // "PRAGA" : 
    // {coor: [], zoom: 12, gallery: []},
    // "Walencja" : 
    // {coor: [], zoom: 12, gallery: []},
    // "Wenecja" : 
    // {coor: [], zoom: 12, gallery: []},
    // "WIEDEŃ" : 
    // {coor: [], zoom: 12, gallery: []},
  // },

  // @sup Dolnośląskie
  "Dolnośląskie": {
    "WROCŁAW" : 
      {coor: [51.1097396,17.0308739], zoom: 13, date: [2020], abbr: "DW", gallery: []},
    "GŁOGÓW" : 
      {coor: [51.6666198,16.0905290], zoom: 14, date: [2022], abbr: "DGL", gallery: []},
    "JELENIA GÓRA" : 
      {coor: [50.9030531,15.7340312], zoom: 14, date: [2022], abbr: "DJ", gallery: []},    
    "Karpacz" :
      {coor: [50.7773819,15.7237262], zoom: 15, date: [2023], abbr: "DJE", gallery: []},
    "Kłodzko" :
      {coor: [50.4379715,16.6556650], zoom: 14, date: [2023], abbr: "DKL", gallery: []},
    "LEGNICA" :
      {coor: [51.2073136,16.1621386], zoom: 14, date: [2021], abbr: "DL", gallery: []},
    "LUBIN" :
      {coor: [51.3967992,16.2055743], zoom: 14, date: [2022], abbr: "DLU", gallery: []},
    "ŚWIDNICA" :
      {coor: [50.8461368,16.4916909], zoom: 14, date: [2022], abbr: "DSW", gallery: []},
    "WAŁBRZYCH" :
      {coor: [50.7674894,16.2820655], zoom: 14, date: [2022], abbr: "DB", gallery: []},
  },

  // @sup Kujawskie
  "Kujawskie": {
    "BYDGOSZCZ" :
      {coor: [53.1233574,18.0013615], zoom: 14, date: [2020], abbr: "CB", gallery: []},
    "TORUŃ" :
      {coor: [53.0095483,18.6104429], zoom: 14, date: [2013], abbr: "CT", gallery: []},
    "GRUDZIĄDZ" :
      {coor: [53.4935701,18.7478310], zoom: 14, date: [2013], abbr: "CG", gallery: []},
    "INOWROCŁAW" :
      {coor: [52.7951946,18.2595992], zoom: 14, date: [2021], abbr: "CIN", gallery: []},
    "Sępólno Krajeńskie" :
      {coor: [53.4554066,17.5347108], zoom: 15, date: [2021], abbr: "CSE", gallery: []},
    "WŁOCŁAWEK" :
      {coor: [52.6606435,19.0681672], zoom: 14, date: [2021], abbr: "CW", gallery: []},
  },

  // @sup Lubelskie
  "Lubelskie": {
    "LUBLIN" :
      {coor: [51.2475789,22.5657356], zoom: 13, date: [2021], abbr: "LU", gallery: []},
    "BIAŁA PODLASKA" :
      {coor: [52.0309013,23.1142151], zoom: 14, date: [2022], abbr: "LB", gallery: []},
    "CHEŁM" :
      {coor: [51.1315385,23.4799933], zoom: 14, date: [2022], abbr: "LC", gallery: []},
    "Kazimierz Dolny" :
      {coor: [51.3218894,21.9503617], zoom: 16, date: [2021], abbr: "LPUK", gallery: []},
    "PUŁAWY" :
      {coor: [51.4127750,21.9602054], zoom: 14, date: [2021], abbr: "LPU", gallery: []},
    "Szczebrzeszyn" :
      {coor: [50.6948266,22.9788119], zoom: 16, date: [2022], abbr: "LZA", gallery: []},
    "ZAMOŚĆ" :
      {coor: [50.7172928,23.2524347], zoom: 14, date: [2022], abbr: "LZ", gallery: []},
  },

  // @sup Lubuskie
  "Lubuskie": {
    "ZIELONA GÓRA" :
      {coor: [51.9380279,15.5050135], zoom: 14, date: [2021], abbr: "FZ", gallery: []},
    "GORZÓW WIELKOPOLSKI" :
      {coor: [52.7311074,15.2403492], zoom: 14, date: [2021], abbr: "FG", gallery: []},
  },

  // @sup Łódzkie
  "Łódzkie": {
    "ŁÓDŹ" :
      {coor: [51.7438847,19.4623232], zoom: 12, date: [2020], abbr: "EL", gallery: []},
    "BEŁCHATÓW" :
      {coor: [51.3668774,19.3714821], zoom: 14, date: [2022], abbr: "EBE", gallery: []},
    "Kutno" :
      {coor: [52.2314367,19.3613917], zoom: 14, date: [2013], abbr: "EKU", gallery: []},
    "Opoczno" :
      {coor: [51.3754472,20.2890015], zoom: 15, date: [2022], abbr: "EOP", gallery: []},
    "PABIANICE" :
      {coor: [51.6649495,19.3476748], zoom: 14, date: [2022], abbr: "EPA", gallery: []},
    "PIOTRKÓW TRYBUNALSKI" :
      {coor: [51.4082713,19.6959597], zoom: 14, date: [2022], abbr: "EP", gallery: []},
    "RADOMSKO" :
      {coor: [51.0673851,19.4442880], zoom: 14, date: [2022], abbr: "ERA", gallery: []},
    "Sieradz" :
      {coor: [51.5945219,18.7380946], zoom: 14, date: [2022], abbr: "ESI", gallery: []},
    "SKIERNIEWICE" :
      {coor: [51.9614667,20.1421183], zoom: 14, date: [2021], abbr: "ES", gallery: []},
    "TOMASZÓW MAZOWIECKI" :
      {coor: [51.5307598,20.0126803], zoom: 14, date: [2022], abbr: "ETM", gallery: []},
    "ZGIERZ" :
      {coor: [51.8563376,19.4051760], zoom: 14, date: [2022], abbr: "EZG", gallery: []},
  },

  // @sup Małopolskie
  "Małopolskie": {
    
    // @sub KRAKÓW
    "KRAKÓW" : 
      {abbr: "KR", coor: [50.0616779, 19.9373317], zoom: 12, date: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024], gallery: [

      // History
      {coor: [50.0655020, 19.9416393], catg: cat.history, name: 'Barbakan'},
      {coor: [50.0442493, 19.9172446], catg: cat.history, name: 'Kopiec Jana Pawła II'},
      {coor: [50.0549104, 19.8933542], catg: cat.history, name: 'Kopiec Kościuszki', date: [2013]},
      {coor: [50.0380789, 19.9584353], catg: cat.history, name: 'Kopiec Krakusa', date: [2011, 2013, 2015, 2020]},
      {coor: [50.0600489, 19.8471665], catg: cat.history, name: 'Kopiec Piłsudskiego', date: [2012, 2016, 2020]},
      {coor: [50.0702176, 20.0680733], catg: cat.history, name: 'Kopiec Wandy', date: [2015]},
      {coor: [50.0531383, 19.9336463], catg: cat.history, name: 'Smocza Jama', date: [2021]},

      // Religia
      {coor: [50.0497610, 19.9448419], catg: cat.religion, name: 'Bazylika Bożego Ciała [Kazimierz]/Zewnętrze', date: [2020]},
      {coor: [50.0497610, 19.9448419], catg: cat.religion, name: 'Bazylika Bożego Ciała [Kazimierz]/Wnętrze', date: [2020]},
      {coor: [50.0497610, 19.9448419], catg: cat.religion, name: 'Bazylika Bożego Ciała [Kazimierz]/Organy', date: [2020]},      
      {coor: [50.0199731, 19.9376053], catg: cat.religion, name: 'Bazylika Miłosierdzia Bożego [Łagiewniki]/Zewnętrze', date: [2020, 2021]},
      {coor: [50.0199731, 19.9376053], catg: cat.religion, name: 'Bazylika Miłosierdzia Bożego [Łagiewniki]/Wnętrze', date: [2020, 2021]},
      {coor: [50.0199731, 19.9376053], catg: cat.religion, name: 'Bazylika Miłosierdzia Bożego [Łagiewniki]/Organy', date: [2020, 2021]},
      {coor: [50.0621049, 19.9488384], catg: cat.religion, name: 'Bazylika Najświętszego Serca Pana Jezusa (Jezuitów) [Wesoła]/Zewnętrze', date: [2020, 2021, 2022, 2023]},
      {coor: [50.0621049, 19.9488384], catg: cat.religion, name: 'Bazylika Najświętszego Serca Pana Jezusa (Jezuitów) [Wesoła]/Wnętrze', date: [2020, 2021, 2022, 2023]},
      {coor: [50.0621049, 19.9488384], catg: cat.religion, name: 'Bazylika Najświętszego Serca Pana Jezusa (Jezuitów) [Wesoła]/Organy', date: [2020, 2021, 2022, 2023]},
      {coor: [50.0651482, 19.9319217], catg: cat.religion, name: 'Bazylika Nawiedzenia NMP (Karmelitów) na Piasku [Piasek]/Zewnętrze', date: [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023]},
      {coor: [50.0651482, 19.9319217], catg: cat.religion, name: 'Bazylika Nawiedzenia NMP (Karmelitów) na Piasku [Piasek]/Wnętrze', date: [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023]},
      {coor: [50.0651482, 19.9319217], catg: cat.religion, name: 'Bazylika Nawiedzenia NMP (Karmelitów) na Piasku [Piasek]/Organy', date: [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023]},
      {coor: [50.0675457, 19.9432674], catg: cat.religion, name: 'Bazylika św. Floriana [Kleparz]/Zewnętrze', date: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023]},
      {coor: [50.0675457, 19.9432674], catg: cat.religion, name: 'Bazylika św. Floriana [Kleparz]/Wnętrze', date: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023]},
      {coor: [50.0675457, 19.9432674], catg: cat.religion, name: 'Bazylika św. Floriana [Kleparz]/Organy', date: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023]},
      {coor: [50.0592224, 19.9360898], catg: cat.religion, name: 'Bazylika św. Franciszka z Asyżu (Franciszkanów) [Stare Miasto]/Zewnętrze', date: [2022]},
      {coor: [50.0592224, 19.9360898], catg: cat.religion, name: 'Bazylika św. Franciszka z Asyżu (Franciszkanów) [Stare Miasto]/Wnętrze', date: [2022]},
      {coor: [50.0592224, 19.9360898], catg: cat.religion, name: 'Bazylika św. Franciszka z Asyżu (Franciszkanów) [Stare Miasto]/Organy', date: [2022]},      
      {coor: [50.0546555, 19.9354514], catg: cat.religion, name: 'Bazylika św. Stanisława i św. Wacława (Wawel) [Stare Miasto]/Zewnętrze', date: [2020]},
      {coor: [50.0592982, 19.9394265], catg: cat.religion, name: 'Bazylika Świętej Trójcy (Dominikanów) [Stare Miasto]/Zewnętrze', date: [2019]},
      {coor: [50.0592982, 19.9394265], catg: cat.religion, name: 'Bazylika Świętej Trójcy (Dominikanów) [Stare Miasto]/Wnętrze', date: [2019]},
      {coor: [50.0592982, 19.9394265], catg: cat.religion, name: 'Bazylika Świętej Trójcy (Dominikanów) [Stare Miasto]/Organy', date: [2019]},
      {coor: [50.0616606, 19.9394506], catg: cat.religion, name: 'Bazylika Wniebowzięcia NMP (Mariacka) [Stare Miasto]/Zewnętrze', date: [2020, 2021, 2022, 2023]},
      {coor: [50.0616606, 19.9394506], catg: cat.religion, name: 'Bazylika Wniebowzięcia NMP (Mariacka) [Stare Miasto]/Wnętrze', date: [2020, 2021, 2022, 2023]},
      {coor: [50.0616606, 19.9394506], catg: cat.religion, name: 'Bazylika Wniebowzięcia NMP (Mariacka) [Stare Miasto]/Organy', date: [2020, 2021, 2022, 2023]},
      {coor: [50.0949545, 19.9042198], catg: cat.religion, name: 'Kościół Chrystusa Odkupiciela (Redemptorystów) [Tonie]/Zewnętrze', date: [2020]},
      {coor: [50.0949545, 19.9042198], catg: cat.religion, name: 'Kościół Chrystusa Odkupiciela (Redemptorystów) [Tonie]/Wnętrze', date: [2020]},
      {coor: [50.0949545, 19.9042198], catg: cat.religion, name: 'Kościół Chrystusa Odkupiciela (Redemptorystów) [Tonie]/Organy', date: [2020]},
      {coor: [50.0755594, 20.0454086], catg: cat.religion, name: 'Kościół MB Częstochowskiej (Cystersów) [Szklane Domy]/Zewnętrze', date: [2015]},
      {coor: [50.0755594, 20.0454086], catg: cat.religion, name: 'Kościół MB Częstochowskiej (Cystersów) [Szklane Domy]/Wnętrze', date: [2015]},
      {coor: [50.0755594, 20.0454086], catg: cat.religion, name: 'Kościół MB Częstochowskiej (Cystersów) [Szklane Domy]/Organy', date: [2015]},
      {coor: [50.0849916, 20.0293207], catg: cat.religion, name: 'Kościół MB Królowej Polski (Arka Pana) [Bieńczyce]/Zewnętrze', date: [2017, 2018, 2020]},
      {coor: [50.0849916, 20.0293207], catg: cat.religion, name: 'Kościół MB Królowej Polski (Arka Pana) [Bieńczyce]/Wnętrze', date: [2017, 2018, 2020]},
      {coor: [50.0849916, 20.0293207], catg: cat.religion, name: 'Kościół MB Królowej Polski (Arka Pana) [Bieńczyce]/Organy', date: [2017, 2018, 2020]},
      {coor: [50.0637940, 19.8621279], catg: cat.religion, name: 'Kościół MB Królowej Polski [Wola Justowska]/Zewnętrze', date: [2021]},
      {coor: [50.0835992, 19.8451817], catg: cat.religion, name: 'Kościół MB Nieustającej Pomocy [Mydlniki]/Zewnętrze', date: [2021]},
      {coor: [50.0835992, 19.8451817], catg: cat.religion, name: 'Kościół MB Nieustającej Pomocy [Mydlniki]/Wnętrze', date: [2021]},
      {coor: [50.0835992, 19.8451817], catg: cat.religion, name: 'Kościół MB Nieustającej Pomocy [Mydlniki]/Organy', date: [2021]},
      {coor: [50.0748174, 19.9787986], catg: cat.religion, name: 'Kościół MB Ostrobramskiej (Pijarów) [Wieczysta]/Zewnętrze', date: [2019]},
      {coor: [50.0748174, 19.9787986], catg: cat.religion, name: 'Kościół MB Ostrobramskiej (Pijarów) [Wieczysta]/Wnętrze', date: [2019]},
      {coor: [50.0748174, 19.9787986], catg: cat.religion, name: 'Kościół MB Ostrobramskiej (Pijarów) [Wieczysta]/Organy', date: [2019]},
      {coor: [50.0693362, 19.9611443], catg: cat.religion, name: 'Kościół Miłosierdzia Bożego [Osiedle Oficerskie]/Zewnętrze', date: [2020]},
      {coor: [50.0693362, 19.9611443], catg: cat.religion, name: 'Kościół Miłosierdzia Bożego [Osiedle Oficerskie]/Wnętrze', date: [2020]},
      {coor: [50.0693362, 19.9611443], catg: cat.religion, name: 'Kościół Miłosierdzia Bożego [Osiedle Oficerskie]/Organy', date: [2020]},
      {coor: [50.0836440, 19.9756122], catg: cat.religion, name: 'Kościół Najświętszego Imienia Maryji (Pijarów) [Rakowice]/Zewnętrze', date: [2023]},
      {coor: [50.0836440, 19.9756122], catg: cat.religion, name: 'Kościół Najświętszego Imienia Maryji (Pijarów) [Rakowice]/Wnętrze', date: [2023]},
      {coor: [50.0836440, 19.9756122], catg: cat.religion, name: 'Kościół Najświętszego Imienia Maryji (Pijarów) [Rakowice]/Organy', date: [2023]},
      {coor: [50.0154852, 20.0184953], catg: cat.religion, name: 'Kościół Najświętszej Rodziny [Bieżanów]/Zewnętrze', date: [2021]},
      {coor: [50.0869880, 19.9104989], catg: cat.religion, name: 'Kościół Niepokalanego Poczęcia NMP (Franciszkanów) [Azory]/Zewnętrze', date: [2020]},
      {coor: [50.0869880, 19.9104989], catg: cat.religion, name: 'Kościół Niepokalanego Poczęcia NMP (Franciszkanów) [Azory]/Wnętrze', date: [2020]},
      {coor: [50.0869880, 19.9104989], catg: cat.religion, name: 'Kościół Niepokalanego Poczęcia NMP (Franciszkanów) [Azory]/Organy', date: [2020]},
      {coor: [50.0685545, 19.9523467], catg: cat.religion, name: 'Kościół Niepokalanego Poczęcia NMP (Karmelitów Bosych) [Warszawskie]/Zewnętrze', date: [2019]},
      {coor: [50.0685545, 19.9523467], catg: cat.religion, name: 'Kościół Niepokalanego Poczęcia NMP (Karmelitów Bosych) [Warszawskie]/Wnętrze', date: [2019]},
      {coor: [50.0685545, 19.9523467], catg: cat.religion, name: 'Kościół Niepokalanego Poczęcia NMP (Karmelitów Bosych) [Warszawskie]/Organy', date: [2019]},
      {coor: [50.0968773, 19.9323052], catg: cat.religion, name: 'Kościół NMP Matki Kościoła [Prądnik Biały]/Zewnętrze', date: [2020]},
      {coor: [50.0968773, 19.9323052], catg: cat.religion, name: 'Kościół NMP Matki Kościoła [Prądnik Biały]/Wnętrze', date: [2020]},
      {coor: [50.0968773, 19.9323052], catg: cat.religion, name: 'Kościół NMP Matki Kościoła [Prądnik Biały]/Organy', date: [2020]},
      {coor: [50.0114313, 19.9611390], catg: cat.religion, name: 'Kościół Podwyższenia Krzyża Świętego [Kurdwanów]/Zewnętrze', date: [2020]},
      {coor: [50.0114313, 19.9611390], catg: cat.religion, name: 'Kościół Podwyższenia Krzyża Świętego [Kurdwanów]/Wnętrze', date: [2020]},
      {coor: [50.0114313, 19.9611390], catg: cat.religion, name: 'Kościół Podwyższenia Krzyża Świętego [Kurdwanów]/Organy', date: [2020]},
      {coor: [50.0649433, 19.9398878], catg: cat.religion, name: 'Kościół Przemienienia Pańskiego (Pijarów) [Stare Miasto]/Zewnętrze', date: [2016, 2021]},
      {coor: [50.0649433, 19.9398878], catg: cat.religion, name: 'Kościół Przemienienia Pańskiego (Pijarów) [Stare Miasto]/Wnętrze', date: [2016, 2021]},
      {coor: [50.0649433, 19.9398878], catg: cat.religion, name: 'Kościół Przemienienia Pańskiego (Pijarów) [Stare Miasto]/Organy', date: [2016, 2021]},
      {coor: [50.0512697, 19.9397135], catg: cat.religion, name: 'Kościół św. Agnieszki [Stradom]/Zewnętrze', date: [2018]},
      {coor: [50.0512697, 19.9397135], catg: cat.religion, name: 'Kościół św. Agnieszki [Stradom]/Wnętrze', date: [2018]},
      {coor: [50.0512697, 19.9397135], catg: cat.religion, name: 'Kościół św. Agnieszki [Stradom]/Organy', date: [2018]},
      {coor: [50.0623993, 19.9335618], catg: cat.religion, name: 'Kościół św. Anny [Stare Miasto]/Zewnętrze', date: [2021]},
      {coor: [50.0623993, 19.9335618], catg: cat.religion, name: 'Kościół św. Anny [Stare Miasto]/Wnętrze', date: [2021]},
      {coor: [50.0623993, 19.9335618], catg: cat.religion, name: 'Kościół św. Anny [Stare Miasto]/Organy', date: [2021]},
      {coor: [50.0871953, 19.8744030], catg: cat.religion, name: 'Kościół św. Antoniego Padewskiego [Bronowice]/Zewnętrze', date: [2022]},
      {coor: [50.0871953, 19.8744030], catg: cat.religion, name: 'Kościół św. Antoniego Padewskiego [Bronowice]/Wnętrze', date: [2022]},
      {coor: [50.0871953, 19.8744030], catg: cat.religion, name: 'Kościół św. Antoniego Padewskiego [Bronowice]/Organy', date: [2022]},
      {coor: [50.0916705, 19.8809355], catg: cat.religion, name: 'Kościół św. Franciszka z Asyżu (Reformatów) [Bronowice]/Zewnętrze', date: [2021]},
      {coor: [50.0916705, 19.8809355], catg: cat.religion, name: 'Kościół św. Franciszka z Asyżu (Reformatów) [Bronowice]/Wnętrze', date: [2021]},
      {coor: [50.0916705, 19.8809355], catg: cat.religion, name: 'Kościół św. Franciszka z Asyżu (Reformatów) [Bronowice]/Organy', date: [2021]},
      {coor: [50.0551859, 19.9381498], catg: cat.religion, name: 'Kościół św. Idziego (Dominikanów) [Stare Miasto]/Zewnętrze', date: [2021]},
      {coor: [50.0551859, 19.9381498], catg: cat.religion, name: 'Kościół św. Idziego (Dominikanów) [Stare Miasto]/Wnętrze', date: [2021]},
      {coor: [50.0551859, 19.9381498], catg: cat.religion, name: 'Kościół św. Idziego (Dominikanów) [Stare Miasto]/Organy', date: [2021]},
      {coor: [50.0840261, 19.9227378], catg: cat.religion, name: 'Kościół św. Jadwigi Królowej [Krowodrza]/Zewnętrze', date: [2020]},
      {coor: [50.0840261, 19.9227378], catg: cat.religion, name: 'Kościół św. Jadwigi Królowej [Krowodrza]/Wnętrze', date: [2020]},
      {coor: [50.0840261, 19.9227378], catg: cat.religion, name: 'Kościół św. Jadwigi Królowej [Krowodrza]/Organy', date: [2020]},
      {coor: [50.0631406, 19.9389464], catg: cat.religion, name: 'Kościół św. Jana Ewangelisty (Prezentek) [Stare Miasto]/Zewnętrze', date: [2021]},
      {coor: [50.0631406, 19.9389464], catg: cat.religion, name: 'Kościół św. Jana Ewangelisty (Prezentek) [Stare Miasto]/Wnętrze', date: [2021]},
      {coor: [50.0631406, 19.9389464], catg: cat.religion, name: 'Kościół św. Jana Ewangelisty (Prezentek) [Stare Miasto]/Organy', date: [2021]},
      {coor: [50.0801053, 19.8887005], catg: cat.religion, name: 'Kościół św. Jana Kantego [Bronowice]/Zewnętrze', date: [2015, 2017, 2018, 2019, 2020, 2021, 2022]},
      {coor: [50.0801053, 19.8887005], catg: cat.religion, name: 'Kościół św. Jana Kantego [Bronowice]/Wnętrze', date: [2015, 2017, 2018, 2019, 2020, 2021, 2022]},
      {coor: [50.0801053, 19.8887005], catg: cat.religion, name: 'Kościół św. Jana Kantego [Bronowice]/Organy', date: [2015, 2017, 2018, 2019, 2020, 2021, 2022]},
      {coor: [50.0131360, 19.9364009], catg: cat.religion, name: 'Kościół św. Jana Pawła II [Łagiewniki]/Zewnętrze', date: [2017, 2018, 2021, 2022]},
      {coor: [50.0131360, 19.9364009], catg: cat.religion, name: 'Kościół św. Jana Pawła II [Łagiewniki]/Wnętrze', date: [2017, 2018, 2021, 2022]},
      {coor: [50.0131360, 19.9364009], catg: cat.religion, name: 'Kościół św. Jana Pawła II [Łagiewniki]/Organy', date: [2017, 2018, 2021, 2022]},
      {coor: [50.0892923, 20.0132006], catg: cat.religion, name: 'Kościół św. Józefa [Bieńczyce]/Zewnętrze', date: [2019]},
      {coor: [50.0892923, 20.0132006], catg: cat.religion, name: 'Kościół św. Józefa [Bieńczyce]/Wnętrze', date: [2019]},
      {coor: [50.0892923, 20.0132006], catg: cat.religion, name: 'Kościół św. Józefa [Bieńczyce]/Organy', date: [2019]},
      {coor: [50.0873631, 19.9459201], catg: cat.religion, name: 'Kościół św. Karola Boromeusza [Żabiniec]/Zewnętrze', date: [2021]},
      {coor: [50.0873631, 19.9459201], catg: cat.religion, name: 'Kościół św. Karola Boromeusza [Żabiniec]/Wnętrze', date: [2021]},
      {coor: [50.0873631, 19.9459201], catg: cat.religion, name: 'Kościół św. Karola Boromeusza [Żabiniec]/Organy', date: [2021]},
      {coor: [50.0648736, 19.9362320], catg: cat.religion, name: 'Kościół św. Kazimierza Królewicza (Reformatów) [Stare Miasto]/Wnętrze', date: [2020]},
      {coor: [50.0185392, 19.9941355], catg: cat.religion, name: 'Kościół św. Mikołaja z Tolentino (Augustianów) [Bieżanów]/Zewnętrze', date: [2021]},
      {coor: [50.0185392, 19.9941355], catg: cat.religion, name: 'Kościół św. Mikołaja z Tolentino (Augustianów) [Bieżanów]/Wnętrze', date: [2021]},
      {coor: [50.0569304, 19.9390644], catg: cat.religion, name: 'Kościół św. Piotra i Pawła [Stare Miasto]/Zewnętrze', date: [2021]},
      {coor: [50.0569304, 19.9390644], catg: cat.religion, name: 'Kościół św. Piotra i Pawła [Stare Miasto]/Wnętrze', date: [2021]},
      {coor: [50.0569304, 19.9390644], catg: cat.religion, name: 'Kościół św. Piotra i Pawła [Stare Miasto]/Organy', date: [2021]},
      {coor: [50.0191200, 19.8023710], catg: cat.religion, name: 'Kościół św. Piotra i Pawła (Benedyktynów) [Tyniec]/Zewnętrze', date: [2014]},
      {coor: [50.0191200, 19.8023710], catg: cat.religion, name: 'Kościół św. Piotra i Pawła (Benedyktynów) [Tyniec]/Wnętrze', date: [2014]},
      {coor: [50.0191200, 19.8023710], catg: cat.religion, name: 'Kościół św. Piotra i Pawła (Benedyktynów) [Tyniec]/Organy', date: [2014]},
      {coor: [50.0606292, 19.9834925], catg: cat.religion, name: 'Kościół św. Stanisława Biskupa [Dąbie]/Zewnętrze', date: [2019]},
      {coor: [50.0606292, 19.9834925], catg: cat.religion, name: 'Kościół św. Stanisława Biskupa [Dąbie]/Wnętrze', date: [2019]},
      {coor: [50.0606292, 19.9834925], catg: cat.religion, name: 'Kościół św. Stanisława Biskupa [Dąbie]/Organy', date: [2019]},
      {coor: [50.0716327, 19.9271339], catg: cat.religion, name: 'Kościół św. Szczepana [Nowa Wieś]/Zewnętrze', date: [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023]},
      {coor: [50.0716327, 19.9271339], catg: cat.religion, name: 'Kościół św. Szczepana [Nowa Wieś]/Wnętrze', date: [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023]},
      {coor: [50.0716327, 19.9271339], catg: cat.religion, name: 'Kościół św. Szczepana [Nowa Wieś]/Organy', date: [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023]},
      {coor: [50.0278530, 19.9164500], catg: cat.religion, name: 'Kościół Zesłania Ducha Świętego [Ruczaj]/Zewnętrze', date: [2021]},
      {coor: [50.0278530, 19.9164500], catg: cat.religion, name: 'Kościół Zesłania Ducha Świętego [Ruczaj]/Wnętrze', date: [2021]},
      {coor: [50.0278530, 19.9164500], catg: cat.religion, name: 'Kościół Zesłania Ducha Świętego [Ruczaj]/Organy', date: [2021]},
      {coor: [50.0665815, 19.9339575], catg: cat.religion, name: 'Kościół Zmartwychwstania Pańskiego (Zmartwychwstańców) [Piasek]/Zewnętrze', date: [2021, 2022, 2023]},
      {coor: [50.0665815, 19.9339575], catg: cat.religion, name: 'Kościół Zmartwychwstania Pańskiego (Zmartwychwstańców) [Piasek]/Wnętrze', date: [2021, 2022, 2023]},
      {coor: [50.0665815, 19.9339575], catg: cat.religion, name: 'Kościół Zmartwychwstania Pańskiego (Zmartwychwstańców) [Piasek]/Organy', date: [2021, 2022, 2023]},
      {coor: [50.0619697, 19.9299502], catg: cat.religion, name: 'Kościół Zwiastowania NMP (Kapucynów) [Piasek]/Zewnętrze', date: [2023]},
      {coor: [50.0619697, 19.9299502], catg: cat.religion, name: 'Kościół Zwiastowania NMP (Kapucynów) [Piasek]/Wnętrze', date: [2023]},
      {coor: [50.0619697, 19.9299502], catg: cat.religion, name: 'Kościół Zwiastowania NMP (Kapucynów) [Piasek]/Organy', date: [2023]},

      // Kultura
      {coor: [50.0479388, 19.9313933], catg: cat.culture, name: 'Centrum Kongresowe', date: [2018, 2022]},
      {coor: [50.0588177, 19.9327424], catg: cat.culture, name: 'Filharmonia Krakowska', date: [2020, 2021, 2022, 2023]},
      {coor: [50.0632249, 19.9403264], catg: cat.culture, name: 'Muzeum Farmacji', date: [2022]},
      {coor: [50.0770862, 19.9898386], catg: cat.culture, name: 'Muzeum Lotnictwa', date: [2020]},
      {coor: [50.0659255, 19.9561957], catg: cat.culture, name: 'Opera Krakowska', date: [2013, 2021]},
      {coor: [50.0616951, 19.9373585], catg: cat.culture, name: 'Sukiennice'},
      {coor: [50.0677041, 19.9915552], catg: cat.culture, name: 'Tauron Arena', date: [2016, 2019, 2021]},
      {coor: [50.0636528, 19.9322623], catg: cat.culture, name: 'Teatr Bagatela', date: [2014, 2015]},
      {coor: [50.0639404, 19.9430662], catg: cat.culture, name: 'Teatr Słowackiego', date: [2022]},
      {coor: [50.0568383, 19.9639110], catg: cat.culture, name: 'Teatr Variete', date: [2022]},   

      // Natura
      // {coor: [], catg: cat.nature, name: 'Błonia', date: [2018, 2023]},
      {coor: [50.0511733, 19.9346495], catg: cat.nature, name: 'Bulwar Czerwieński', date: [2021]},
      {coor: [50.0478940, 19.9368703], catg: cat.nature, name: 'Bulwar Inflandzki', date: [2021]},
      {coor: [50.0556785, 19.9778706], catg: cat.nature, name: 'Bulwar Kurlandzki', date: [2019]},
      {coor: [50.0475426, 19.9347460], catg: cat.nature, name: 'Bulwar Wołyński', date: [2021]},
      {coor: [50.0993033, 19.9383402], catg: cat.nature, name: 'Dolina Prądnika', date: [2023]},
      {coor: [50.0366077, 19.9565578], catg: cat.nature, name: 'Kamieniołom Liban', date: [2015]},
      // {coor: [], catg: cat.nature, name: 'Krzemionki', date: [2018, 2023]},
      {coor: [50.0549345, 19.8431110], catg: cat.nature, name: 'Las Wolski', date: [2012, 2016, 2020, 2021]},
      {coor: [50.0737019, 19.9268711], catg: cat.nature, name: 'Młynówka Królewska', date: [2019, 2022, 2023]},
      {coor: [50.0622908, 19.9581242], catg: cat.nature, name: 'Ogród Botaniczny', date: [2020, 2023]},
      {coor: [50.0120277, 20.0139785], catg: cat.nature, name: 'Park Aleksandry', date: [2021]},
      // {coor: [], catg: cat.nature, name: 'Park Bednarskiego', date: [2018, 2023]},
      {coor: [50.0651904, 19.8730016], catg: cat.nature, name: 'Park Decjusza', date: [2018, 2021]},
      {coor: [50.0493132, 19.9167645], catg: cat.nature, name: 'Park Dębnicki', date: [2022]},
      {coor: [50.0692983, 19.9414515], catg: cat.nature, name: 'Park Jalu Kurka', date: [2023]},
      {coor: [50.0173638, 19.9944413], catg: cat.nature, name: 'Park Jerzmanowskich', date: [2021]},
      {coor: [50.0627454, 19.9174833], catg: cat.nature, name: 'Park Jordana', date: [2018, 2023]},
      {coor: [50.0685821, 19.9248540], catg: cat.nature, name: 'Park Krakowski', date: [2023]},
      {coor: [50.0761601, 19.9382973], catg: cat.nature, name: 'Park Kleparski', date: [2023]},
      {coor: [50.0931848, 19.9415052], catg: cat.nature, name: 'Park Kościuszki', date: [2023]},
      {coor: [50.0880704, 19.9222684], catg: cat.nature, name: 'Park Krowoderski', date: [2020]},
      {coor: [50.1072653, 19.9451101], catg: cat.nature, name: 'Park Leśny Witkowice', date: [2023]},
      {coor: [50.0205763, 20.0026917], catg: cat.nature, name: 'Park Lilli Wenedy', date: [2021]},
      {coor: [50.0734609, 19.9951816], catg: cat.nature, name: 'Park Lotników Polskich', date: [2020]},
      // {coor: [], catg: cat.nature, name: 'Park Strzelecki', date: [2019, 2023]},
      {coor: [50.0892544, 19.9982178], catg: cat.nature, name: 'Park Tysiąclecia', date: [2020]},
      // {coor: [], catg: cat.nature, name: 'Park Wincentego', date: [2018, 2023]},
      {coor: [50.0859640, 19.9207020], catg: cat.nature, name: 'Park Wyspiańskiego', date: [2020]},
      {coor: [50.0867384, 19.9663854], catg: cat.nature, name: 'Park Zaczarowanej Dorożki', date: [2020]},
      {coor: [50.0942516, 20.0585675], catg: cat.nature, name: 'Park Zielony Jar Wandy', date: [2022]},
      {coor: [50.0859777, 20.0252008], catg: cat.nature, name: 'Planty Bieńczyckie', date: [2019]},
      {coor: [50.0992896, 20.0046873], catg: cat.nature, name: 'Planty Mistrzejowickie', date: [2019]},
      {coor: [50.0372692, 19.9104452], catg: cat.nature, name: 'Zakrzówek', date: [2017, 2020, 2023]},
      {coor: [50.0312047, 19.9972844], catg: cat.nature, name: 'Zalew Bagry', date: [2019]},
      {coor: [50.0790657, 20.0526667], catg: cat.nature, name: 'Zalew Nowohucki', date: [2019, 2023]},

      // Gastro
      {coor: [50.0641711, 19.9420658], catg: cat.gastro, name: 'Babcia Malina', date: [2017, 2018]},
      {coor: [50.0615022, 19.9416608], catg: cat.gastro, name: 'Cyklop', date: [2022]},
      {coor: [50.0574492, 19.9384166], catg: cat.gastro, name: 'Dziórawy Kocioł', date: [2019]},
      {coor: [50.0600244, 19.9375925], catg: cat.gastro, name: 'Gruzińskie Chaczapuri', date: [2015]},
      {coor: [50.0545978, 19.9393380], catg: cat.gastro, name: 'Pod Wawelem', date: [2014]},
      {coor: [50.0582280, 19.9389457], catg: cat.gastro, name: 'Taco Mexicano', date: [2013, 2015, 2023]},
      {coor: [50.0669835, 19.9713555], catg: cat.gastro, name: 'Tratoria Da Marco', date: [2019]},
    ]},
    "Alwernia" :
      {coor: [50.0689712,19.5393884], zoom: 15, date: [2020], abbr: "KCHA", gallery: []},
    "Andrychów" :
      {coor: [49.8536043,19.3442792], zoom: 15, date: [2021], abbr: "KWAA", gallery: []},
    "Biecz" :
      {coor: [49.7300761,21.2473333], zoom: 15, date: [2021], abbr: "KGRB", gallery: []},
    "Bobowa" :
      {coor: [49.7081045,20.9421676], zoom: 15, date: [2021], abbr: "KGRO", gallery: []},
    "Bochnia" :
      {coor: [49.9693102,20.4276717], zoom: 15, date: [2016], abbr: "KBC", gallery: []},
    "Brzesko" :
      {coor: [49.9677196,20.6068325], zoom: 15, date: [2016], abbr: "KBR", gallery: []},
    "Brzeszcze" :
      {coor: [49.9847551,19.1554356], zoom: 15, date: [2021], abbr: "KOSB", gallery: []},
    "Bukowno" :
      {coor: [50.2669806,19.4631708], zoom: 15, date: [2019], abbr: "KOLB", gallery: []},
    "Chełmek" :
      {coor: [50.1047055,19.2642313], zoom: 15, date: [2021], abbr: "KOSC", gallery: []},
    "Chrzanów" :
      {coor: [50.1426376,19.4050956], zoom: 15, date: [2020], abbr: "KCH", gallery: []},
    "Ciężkowice" :
      {coor: [49.7858188,20.9740162], zoom: 15, date: [2021], abbr: "KTAC", gallery: []},
    "Czarny Dunajec" :
      {coor: [49.4400872,19.8529923], zoom: 15, date: [2023], abbr: "KTTC", gallery: []},
    "Czchów" :
      {coor: [49.8337890,20.6729650], zoom: 15, date: [2021], abbr: "KBRC", gallery: []},
    "Dąbrowa Tarnowska" :
      {coor: [50.1750120,20.9862202], zoom: 15, date: [2021], abbr: "KDA", gallery: []},
    "Dobczyce" :
      {coor: [49.8802702,20.0903249], zoom: 15, date: [2014], abbr: "KMYD", gallery: []},
    "Gorlice" :
      {coor: [49.6576380,21.1565888], zoom: 15, date: [2021], abbr: "KGR", gallery: []},
    "Grybów" :
      {coor: [49.6248066,20.9447104], zoom: 15, date: [2021], abbr: "KNSG", gallery: []},
    "Jordanów":
      {coor: [49.6494070,19.8296517], zoom: 15, date: [2020], abbr: "KSUJ", gallery: []},
    "Kalwaria Zebrzydowska" : 
      {coor: [49.8601477,19.6728766], zoom: 15, date: [2016], abbr: "KWAK", gallery: []},
    "Kęty" :
      {coor: [49.8833467,19.2214608], zoom: 15, date: [2021], abbr: "KOSK", gallery: []},
    "Koszyce" :
      {coor: [50.1665631,20.5755901], zoom: 16, date: [2021], abbr: "KPRK", gallery: []},
    "Krynica-Zdrój" :
      {coor: [49.4183650,20.9564370], zoom: 15, date: [2021], abbr: "KNSK", gallery: []},
    "Krzeszowice" :
      {coor: [50.1360535,19.6321929], zoom: 15, date: [2013], abbr: "KRAK", gallery: []},
    "Książ Wielki" :
      {coor: [50.4404212,20.1488668], zoom: 16, date: [2023], abbr: "KMIK", gallery: []},
    "Libiąż" :
      {coor: [50.0993790,19.3063098], zoom: 15, date: [2020], abbr: "KCHL", gallery: []},
    "Limanowa" :
      {coor: [49.7061409,20.4217279], zoom: 15, date: [2021], abbr: "KLI", gallery: []},
    "Maków Podhalański" : 
      {coor: [49.7300240,19.6770608], zoom: 15, date: [2020], abbr: "KSUM", gallery: []},
    "Miechów" :
      {coor: [50.3563385,20.0278723], zoom: 15, date: [2019], abbr: "KMI", gallery: []},
    "Mszana Dolna" : 
      {coor: [49.6779385,20.0819296], zoom: 15, date: [2021], abbr: "KLIM", gallery: []},
    "Muszyna" :
      {coor: [49.3564393,20.8972675], zoom: 15, date: [2021], abbr: "KNSM", gallery: []},

    // @sub Myślenice
    "Myślenice" :
      {abbr: "KMY", coor: [49.8347232,19.9387157], zoom: 15, date: [2022], gallery: [
        {coor: [49.8346100,19.9381900], catg: cat.general, name: 'Rynek'},
        {coor: [49.8348547,19.9368703], catg: cat.general, name: 'Gimnazjum'},
        {coor: [49.8341869,19.9365056], catg: cat.religion, name: 'Kościół Narodzenia NMP - zewnętrze', top: true},
        {coor: [49.8341869,19.9365056], catg: cat.religion, name: 'Kościół Narodzenia NMP - ołtarz'},
        {coor: [49.8341869,19.9365056], catg: cat.religion, name: 'Kościół Narodzenia NMP - organy'},
        {coor: [49.8287336,19.9405289], catg: cat.religion, name: 'Kościółek św. Jakuba - zewnętrze', top: true},
        {coor: [49.8287336,19.9405289], catg: cat.religion, name: 'Kościółek św. Jakuba - wnętrze'},
        {coor: [49.8287336,19.9405289], catg: cat.religion, name: 'Kościółek św. Jakuba - organy'},
      ]},
    "Niepołomice" :
      {coor: [50.0342922,20.2178478], zoom: 15, date: [2015], abbr: "KWIN", gallery: []},
    "Nowe Brzesko" :
      {coor: [50.1288082,20.3750736], zoom: 15, date: [2021], abbr: "KPRN", gallery: []},
    "NOWY SĄCZ" :
      {coor: [49.6248970,20.6914937], zoom: 15, date: [2013], abbr: "KN", gallery: []},
    "Nowy Targ" :
      {coor: [49.4818995,20.0311017], zoom: 15, date: [2021], abbr: "KNT", gallery: []},
    "Nowy Wiśnicz" :
      {coor: [49.9178824,20.4699165], zoom: 15, date: [2021], abbr: "KBCN", gallery: []},
    "Olkusz" :
      {coor: [50.2790388,19.5602989], zoom: 15, date: [2019], abbr: "KOL", gallery: []},
    "Oświęcim" :
      {coor: [50.0380617,19.2209351], zoom: 15, date: [2021], abbr: "KOS", gallery: []},
    "Piwniczna-Zdrój" :
      {coor: [49.4397872,20.7164866], zoom: 15, date: [2021], abbr: "KNSP", gallery: []},
    "Proszowice" :
      {coor: [50.1929357,20.2886957], zoom: 15, date: [2019], abbr: "KPR", gallery: []},
    "Rabka-Zdrój" :
      {coor: [49.6115164,19.9491763], zoom: 15, date: [2021], abbr: "KNTR", gallery: [
        {coor: [49.6061283,19.9635637], catg: cat.nature, name: 'Park Zdrojowy'},
      ]},
    "Radłów" :
      {coor: [50.0838574,20.8495563], zoom: 15, date: [2021], abbr: "KTAR", gallery: []},
    "Ryglice" :
      {coor: [49.8785487,21.1377865], zoom: 15, date: [2021], abbr: "KTAG", gallery: []},
    "Skała" :
      {coor: [50.2305096,19.8536682], zoom: 15, date: [2019], abbr: "KRAS", gallery: []},
    "Skawina" :
      {coor: [49.9750513,19.8264384], zoom: 15, date: [2018, 2023], abbr: "KRAW", gallery: []},
    "Słomniki" :
      {coor: [50.2405872,20.0802934], zoom: 15, date: [2019], abbr: "KRAM", gallery: []},
    "Stary Sącz" :
      {coor: [49.5594743,20.6485033], zoom: 15, date: [2013], abbr: "KNSS", gallery: []},
    "Sucha Beskidzka" :
      {coor: [49.7422351,19.6011114], zoom: 15, date: [2020], abbr: "KSU", gallery: []},
    "Sułkowice" :
      {coor: [49.8409924,19.8008287], zoom: 15, date: [2018], abbr: "KMYS", gallery: []},
    "Szczawnica" :
      {coor: [49.4288854,20.4878175], zoom: 15, date: [2016], abbr: "KNTS", gallery: []},
    "Szczucin" :
      {coor: [50.3087240,21.0756129], zoom: 15, date: [2021], abbr: "KDAS", gallery: []},
    "Świątniki Górne" :
      {coor: [49.9344487,19.9444342], zoom: 15, date: [2013], abbr: "KRAT", gallery: []},
    "TARNÓW" :
      {coor: [50.0126654,20.9884357], zoom: 15, date: [2021], abbr: "KT", gallery: []},
    "Trzebinia" :
      {coor: [50.1594943,19.4715714], zoom: 15, date: [2020], abbr: "KCHT", gallery: []},
    "Tuchów" :
      {coor: [49.9010582,21.0593480], zoom: 15, date: [2021], abbr: "KTAT", gallery: []},
    "Wadowice" :
      {coor: [49.8833812,19.4928306], zoom: 15, date: [2016], abbr: "KWA", gallery: []},
    "Wieliczka" : 
      {coor: [49.9837548,20.0594312], zoom: 15, date: [2019, 2023], abbr: "KWI", gallery: []},
    "Wojnicz" :
      {coor: [49.9556793,20.8362848], zoom: 15, date: [2021], abbr: "KTAW", gallery: []},
    "Wolbrom" :
      {coor: [50.3854693,19.7593993], zoom: 15, date: [2019], abbr: "KOLW", gallery: []},
    "Zakliczyn" :
      {coor: [49.8564888,20.8086634], zoom: 15, date: [2021], abbr: "KTAZ", gallery: []},
    "Zakopane" :
      {coor: [49.2923818,19.9579901], zoom: 15, date: [2021], abbr: "KTT", gallery: []},
    "Zator" :
      {coor: [49.9961536,19.4375557], zoom: 15, date: [2021], abbr: "KOSZ", gallery: []},
    "Żabno" :
      {coor: [50.1328316,20.8854389], zoom: 15, date: [2021], abbr: "KTAZ", gallery: []},
  },

  // @sup Mazowieckie
  "Mazowieckie": {
    "WARSZAWA" : 
      {coor: [52.2497795,21.0121733], zoom: 12, date: [2021], abbr: "WA", gallery: []},
    "Ciechanów" :
      {coor: [52.8823977,20.6185055], zoom: 14, date: [2020], abbr: "WCI", gallery: []},
    "Garwolin" :
      {coor: [51.8974496,21.6168559], zoom: 15, date: [2021], abbr: "WG", gallery: []},
    "LEGIONOWO" :
      {coor: [52.3951754,20.9310365], zoom: 14, date: [2021], abbr: "WL", gallery: []},
    "Milanówek" :
      {coor: [52.1261774,20.6636631], zoom: 15, date: [2021], abbr: "WGM", gallery: []},
    "Mława" :
      {coor: [53.1115189,20.3820205], zoom: 14, date: [2020], abbr: "WML", gallery: []},
    "OSTROŁĘKA" :
      {coor: [53.1015163,21.6196132], zoom: 14, date: [2021], abbr: "WO", gallery: []},
    "OTWOCK" :
      {coor: [52.1040900,21.2684691], zoom: 14, date: [2021], abbr: "WOT", gallery: []},
    "PIASECZNO" :
      {coor: [52.0748573,21.0271078], zoom: 14, date: [2021], abbr: "WPI", gallery: []},
    "PŁOCK" :
      {coor: [52.5451082,19.6849895], zoom: 14, date: [2021], abbr: "WP", gallery: []},
    "PRUSZKÓW" :
      {coor: [52.1622612,20.8123916], zoom: 14, date: [2021], abbr: "WPR", gallery: []},
    "RADOM" :
      {coor: [51.4006916,21.1581820], zoom: 13, date: [2020], abbr: "WR", gallery: []},
    "SIEDLCE" :
      {coor: [52.1696284,22.2839320], zoom: 14, date: [2021], abbr: "WS", gallery: []},
  },

  // @sup Opolskie
  "Opolskie": {
    // "OPOLE" :
      // {coor: [---], zoom: 15, date: [2020], abbr: "OP", gallery: []},
    // "KĘDZIERZYN-KOŹLE" :
      // {coor: [---], zoom: 15, date: [2022], abbr: "OK", gallery: []},
    // "Nysa" :
      // {coor: [---], zoom: 15, date: [2023], abbr: "ONY", gallery: []},
    // "Otmuchów" :
      // {coor: [---], zoom: 15, date: [2023], abbr: "ONYO", gallery: []},
    // "Paczków" :
      // {coor: [---], zoom: 15, date: [2023], abbr: "ONYP", gallery: []},
    // "Prudnik" :
      // {coor: [---], zoom: 15, date: [2023], abbr: "OPR", gallery: []},
  },

  // @sup Podkarpackie
  "Podkarpackie": {
    // "RZESZÓW" :
      // {coor: [---], zoom: 15, date: [2022], abbr: "RZ", gallery: []},
    // "DĘBICA" :
      // {coor: [---], zoom: 15, date: [2022], abbr: "RDE", gallery: []},
    // "Jarosław" :
      // {coor: [---], zoom: 15, date: [2024], abbr: "RJA", gallery: []},
    // "Jasło" :
      // {coor: [---], zoom: 15, date: [2022], abbr: "RJS", gallery: []},
    // "KROSNO" :
      // {coor: [---], zoom: 15, date: [2017], abbr: "RK", gallery: []},
    // "Łańcut" :
      // {coor: [---], zoom: 15, date: [2024], abbr: "RLA", gallery: []},
    // "MIELEC" :
      // {coor: [---], zoom: 15, date: [2021], abbr: "RMI", gallery: []},
    // "PRZEMYŚL" :
      // {coor: [---], zoom: 15, date: [2022], abbr: "RP", gallery: []},
    // "Sanok" :
      // {coor: [---], zoom: 15, date: [2017], abbr: "RSA", gallery: []},
    // "STALOWA WOLA" :
      // {coor: [---], zoom: 15, date: [2022], abbr: "RST", gallery: []},
    // "TARNOBRZEG" :
      // {coor: [---], zoom: 15, date: [2021], abbr: "RT", gallery: []},
  },

  // @sup Podlaskie
  "Podlaskie": {
    "BIAŁYSTOK" : "BI",
      // {coor: [---], zoom: 15, date: [2022], abbr: "BI", gallery: []},
    "SUWAŁKI" : "BS",
      // {coor: [---], zoom: 15, date: [2022], abbr: "BS", gallery: []},
    "ŁOMŻA" : "BL"
      // {coor: [---], zoom: 15, date: [2021], abbr: "BL", gallery: []},
  },

  // @sup Pomorskie
  "Pomorskie": {
    "GDAŃSK" : "GD",
      // {coor: [---], zoom: 15, date: [2022, 2013, 2012, 2008, 2007], abbr: "GD", gallery: []},
    "GDYNIA" : "GA",
      // {coor: [---], zoom: 15, date: [2022, 2012, 2008], abbr: "GA", gallery: []},
    "Hel" : "GPUH",
      // {coor: [---], zoom: 15, date: [2013], abbr: "GPUH", gallery: []},
    "Krynica Morska" : "GNDK",
      // {coor: [---], zoom: 15, date: [2020], abbr: "GNDK", gallery: []},
    "Łeba" : "GLEL",
      // {coor: [---], zoom: 15, date: [2013, 2012, 2009], abbr: "GLEL", gallery: []},
    "Malbork" : "GMB",
      // {coor: [---], zoom: 15, date: [2020], abbr: "GMB", gallery: []},
    "RUMIA" : "GWER",
      // {coor: [---], zoom: 15, date: [2022], abbr: "GWER", gallery: []},
    "SŁUPSK" : "GS",
      // {coor: [---], zoom: 15, date: [2017], abbr: "GS", gallery: []},
    "Sopot" : "GSP",
      // {coor: [---], zoom: 15, date: [2012, 2008, 2007], abbr: "GSP", gallery: []},
    "STAROGARD GDAŃSKI" : "GST",
      // {coor: [---], zoom: 15, date: [2022], abbr: "GST", gallery: []},
    "TCZEW" : "GTC", 
      // {coor: [---], zoom: 15, date: [2022], abbr: "GTC", gallery: []},
    "Ustka" : "GSL", 
      // {coor: [---], zoom: 15, date: [2017], abbr: "GSL", gallery: []},
    "WEJHEROWO" : "GWE"
      // {coor: [---], zoom: 15, date: [2022], abbr: "GWE", gallery: []},
  },

  // @sup Śląskie
  "Śląskie": {
    "KATOWICE" : "SK",
      // {coor: [---], zoom: 15, date: [2021], abbr: "SK", gallery: []},
    "BĘDZIN" : "SBE",
      // {coor: [---], zoom: 15, date: [2021], abbr: "SBE", gallery: []},
    "BIELSKO-BIAŁA" : "SB",
      // {coor: [---], zoom: 15, date: [2016], abbr: "SB", gallery: []},
    "Bieruń" : "SBL",
      // {coor: [---], zoom: 15, date: [2021], abbr: "SBL", gallery: []},
    "BYTOM" : "SY",
      // {coor: [---], zoom: 15, date: [2021], abbr: "SY", gallery: []},
    "CHORZÓW" : "SH",
      // {coor: [---], zoom: 15, date: [2021], abbr: "SH", gallery: []},
    "Cieszyn" : "SCI",
      // {coor: [---], zoom: 15, date: [2015], abbr: "SCI", gallery: []},
    "Czechowice-Dziedzice" : "SBIC",
      // {coor: [---], zoom: 15, date: [2021], abbr: "SBIC", gallery: []},
    "Czeladź" : "SBEC",
      // {coor: [---], zoom: 15, date: [2021], abbr: "SBEC", gallery: []},
    "CZĘSTOCHOWA" : "SC",
      // {coor: [---], zoom: 15, date: [2022], abbr: "SC", gallery: []},
    "DĄBROWA GÓRNICZA" : "SD",
      // {coor: [---], zoom: 15, date: [2021], abbr: "SD", gallery: []},
    "GLIWICE" : "SG",
      // {coor: [---], zoom: 15, date: [2021], abbr: "SG", gallery: []},
    "JASTRZĘBIE-ZDRÓJ" : "SJZ",
      // {coor: [---], zoom: 15, date: [2022], abbr: "SJZ", gallery: []},
    "JAWORZNO" : "SJ",
      // {coor: [---], zoom: 15, date: [2021], abbr: "SJ", gallery: []},
    "Mikołów" : "SMI",
      // {coor: [---], zoom: 15, date: [2024], abbr: "SMI", gallery: []},
    "MYSŁOWICE" : "SM",
      // {coor: [---], zoom: 15, date: [2021], abbr: "SM", gallery: []},
    "Myszków" : "SMY",
      // {coor: [---], zoom: 15, date: [2024], abbr: "SMY", gallery: []},
    "Ogrodzieniec" : "SZAO",
      // {coor: [---], zoom: 15, date: [2019], abbr: "SZAO", gallery: []},
    "PIEKARY ŚLĄSKIE" : "SPI",
      // {coor: [---], zoom: 15, date: [2021], abbr: "SPI", gallery: []},
    "Pilica" : "SZAP",
      // {coor: [---], zoom: 15, date: [2019], abbr: "SZAP", gallery: []},
    "Pszczyna" : "SPS",
      // {coor: [---], zoom: 15, date: [2021], abbr: "SPS", gallery: []},
    "RACIBÓRZ" : "SRC",
      // {coor: [---], zoom: 15, date: [2022], abbr: "SRC", gallery: []},
    "RUDA ŚLĄSKA" : "SL",
      // {coor: [---], zoom: 15, date: [2021], abbr: "SL", gallery: []},
    "RYBNIK" : "SR",
      // {coor: [---], zoom: 15, date: [2022], abbr: "SR", gallery: []},
    "SIEMIANOWICE ŚLĄSKIE" : "SI",
      // {coor: [---], zoom: 15, date: [2021], abbr: "SI", gallery: []},
    "Siewierz" : "SBE",
      // {coor: [---], zoom: 15, date: [2024], abbr: "SBE", gallery: []},
    "Sławków" : "SBES",
      // {coor: [---], zoom: 15, date: [2019], abbr: "SBES", gallery: []},
    "SOSNOWIEC" : "SO",
      // {coor: [---], zoom: 15, date: [2021], abbr: "SO", gallery: []},
    "Szczekociny" : "SZAS",
      // {coor: [---], zoom: 15, date: [2023], abbr: "SZAS", gallery: []},
    "Szczyrk" : "SBIS",
      // {coor: [---], zoom: 15, date: [2021], abbr: "SBIS", gallery: []},
    "ŚWIĘTOCHŁOWICE" : "SW",
      // {coor: [---], zoom: 15, date: [2021], abbr: "SW", gallery: []},
    "TARNOWSKIE GÓRY" : "STA",
      // {coor: [---], zoom: 15, date: [2021], abbr: "STA", gallery: []},
    "TYCHY" : "ST",
      // {coor: [---], zoom: 15, date: [2021], abbr: "ST", gallery: []},
    "Ustroń" : "SCIU",
      // {coor: [---], zoom: 15, date: [2024], abbr: "SCIU", gallery: []},
    "WODZISŁAW ŚLĄSKI" : "SWD",
      // {coor: [---], zoom: 15, date: [2022], abbr: "SWD", gallery: []},
    "ZABRZE" : "SZ",
      // {coor: [---], zoom: 15, date: [2021], abbr: "SZ", gallery: []},
    "ZAWIERCIE" : "SZA",
      // {coor: [---], zoom: 15, date: [2021], abbr: "SZA", gallery: []},
    "ŻORY" : "SZO",
      // {coor: [---], zoom: 15, date: [2022], abbr: "SZO", gallery: []},
    "Żywiec" : "SZY",
      // {coor: [---], zoom: 15, date: [2021], abbr: "SZY", gallery: []},
  },

  // @sup Świętokrzyskie
  "Świętokrzyskie": {
    "KIELCE" : "TK", 
      // {coor: [---], zoom: 15, date: [2013], abbr: "TK", gallery: []},
    "Busko-Zdrój" : "TBU",
      // {coor: [---], zoom: 15, date: [2021], abbr: "TBU", gallery: []},
    "Chęciny" : "TKIC",
      // {coor: [---], zoom: 15, date: [2013], abbr: "TKIC", gallery: []},
    "Jędrzejów" : "TJE",
      // {coor: [---], zoom: 15, date: [2021], abbr: "TJE", gallery: []},
    "Kazimierza Wielka" : "TKA",
      // {coor: [---], zoom: 15, date: [2019], abbr: "TKA", gallery: []},
    "OSTROWIEC ŚWIĘTOKRZYSKI" : "TOS",
      // {coor: [---], zoom: 15, date: [2022], abbr: "TOS", gallery: []},
    "Pacanów" : "TBUP",
      // {coor: [---], zoom: 15, date: [2021], abbr: "TBUP", gallery: []},
    "Pińczów" : "TPI",
      // {coor: [---], zoom: 15, date: [2021], abbr: "TPI", gallery: []},
    "Sandomierz" : "TSA",
      // {coor: [---], zoom: 15, date: [2021], abbr: "TSA", gallery: []},
    "Skalbmierz" : "TKAS",
      // {coor: [---], zoom: 15, date: [2019], abbr: "TKAS", gallery: []},
    "SKARŻYSKO-KAMIENNA" : "TSK",
      // {coor: [---], zoom: 15, date: [2020], abbr: "TSK", gallery: []},
    "STARACHOWICE" : "TST",
      // {coor: [---], zoom: 15, date: [2022], abbr: "TST", gallery: []},
    "Stopnica" : "TBUS"
      // {coor: [---], zoom: 15, date: [2021], abbr: "TBUS", gallery: []},
  },

  // @sup Warmińskie
  "Warmińskie": {
    "OLSZTYN" : "NO",
      // {coor: [---], zoom: 15, date: [2020], abbr: "NO", gallery: []},
    "ELBLĄG" : "NE",
      // {coor: [---], zoom: 15, date: [2020], abbr: "NE", gallery: []},
    "EŁK" : "NEL",
      // {coor: [---], zoom: 15, date: [2022], abbr: "NEL", gallery: []},
    "Frombork" : "NBRF",
      // {coor: [---], zoom: 15, date: [2020], abbr: "NBRF", gallery: []},
    "Nidzica" : "NNI",
      // {coor: [---], zoom: 15, date: [2020], abbr: "NNI", gallery: []},
    "Olsztynek" : "NOLO",
      // {coor: [---], zoom: 15, date: [2020], abbr: "NOLO", gallery: []},
    "Orneta" : "NLIO"
      // {coor: [---], zoom: 15, date: [2020], abbr: "NLIO", gallery: []},
  },

  // @sup Wielkopolskie
  "Wielkopolskie": {
    "POZNAŃ" : "PO",
      // {coor: [---], zoom: 15, date: [2020], abbr: "PO", gallery: []},
    "GNIEZNO" : "PGN",
      // {coor: [---], zoom: 15, date: [2020], abbr: "PGN", gallery: []},
    "KALISZ" : "PK",
      // {coor: [---], zoom: 15, date: [2020], abbr: "PK", gallery: []},
    "KONIN" : "PN",
      // {coor: [---], zoom: 15, date: [2020], abbr: "PN", gallery: []},
    "LESZNO" : "PL",  
      // {coor: [---], zoom: 15, date: [2020], abbr: "PL", gallery: []},
    "OSTRÓW WIELKOPOLSKI" : "POS",
      // {coor: [---], zoom: 15, date: [2022], abbr: "POS", gallery: []},
    "PIŁA" : "PP"
      // {coor: [---], zoom: 15, date: [2021], abbr: "PP", gallery: []},
  },

  // @sup Zachodniopomorskie
  "Zachodniopomorskie": {
    "SZCZECIN" : "ZS",
      // {coor: [---], zoom: 15, date: [2016], abbr: "ZS", gallery: []},
    "KOŁOBRZEG" : "ZKL",
      // {coor: [---], zoom: 15, date: [2014, 2007], abbr: "ZKL", gallery: []},
    "KOSZALIN" : "ZK",
      // {coor: [---], zoom: 15, date: [2018], abbr: "ZK", gallery: []},
    "Mielno" : "ZKOM",
      // {coor: [---], zoom: 15, date: [2018], abbr: "ZKOM", gallery: []},
    "Międzyzdroje" : "ZKAM",
      // {coor: [---], zoom: 15, date: [2016], abbr: "ZKAM", gallery: []},
    "STARGARD" : "ZST",
      // {coor: [---], zoom: 15, date: [2022], abbr: "ZST", gallery: []},
    "Świnoujście" : "ZSW"
      // {coor: [---], zoom: 15, date: [2016], abbr: "ZSW", gallery: []},
  }           
}