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
    // "Barcelona" : {coor: [], zoom: 12, gallery: []},
    // "BUDAPESZT" : {coor: [], zoom: 12, gallery: []},
    // "MADRYT" : {coor: [], zoom: 12, gallery: []},
    // "PRAGA" : {coor: [], zoom: 12, gallery: []},
    // "Walencja" : {coor: [], zoom: 12, gallery: []},
    // "Wenecja" : {coor: [], zoom: 12, gallery: []},
    // "WIEDEŃ" : {coor: [], zoom: 12, gallery: []},
  // },

  // @sup Dolnośląskie
  "Dolnośląskie": {
    "WROCŁAW" : 
      {abbr: "DW", coor: [51.1097396,17.0308739], zoom: 12, date: [2020]},
    "GŁOGÓW" : "DGL",
    "JELENIA GÓRA" : 
      {abbr: "DJ", coor: [50.9030531,15.7340312], zoom: 14, date: [2022]},
    
    "Karpacz" : "DJE",
    "Kłodzko" : "DKL",
    "LEGNICA" : "DL",
    "LUBIN" : "DLU",
    "ŚWIDNICA" : "DSW",
    "WAŁBRZYCH" : "DB",
    "Złotoryja" : "DZL"
  },

  // @sup Kujawskie
  "Kujawskie": {
    "BYDGOSZCZ" : "CB",
    "TORUŃ" : "CT",
    "GRUDZIĄDZ" : "CG",
    "INOWROCŁAW" : "CIN",
    "Sępólno Krajeńskie" : "CSE",
    "WŁOCŁAWEK" : "CW"
  },

  // @sup Lubelskie
  "Lubelskie": {
    "LUBLIN" : "LU",
    "BIAŁA PODLASKA" : "LB",
    "CHEŁM" : "LC",
    "Kazimierz Dolny" : "LPUK",
    "PUŁAWY" : "LPU",
    "Szczebrzeszyn" : "LZA",
    "ZAMOŚĆ" : "LZ"
  },

  // @sup Lubuskie
  "Lubuskie": {
    "ZIELONA GÓRA" : "FZ",
    "GORZÓW WIELKOPOLSKI" : "FG"
  },

  // @sup Łódzkie
  "Łódzkie": {
    "ŁÓDŹ" : "EL",
    "BEŁCHATÓW" : "EBE",
    "Kutno" : "EKU",
    "Opoczno" : "EOP",
    "PABIANICE" : "EPA",
    "PIOTRKÓW TRYBUNALSKI" : "EP",
    "RADOMSKO" : "ERA",
    "Sieradz" : "ESI",
    "SKIERNIEWICE" : "ES",
    "TOMASZÓW MAZOWIECKI" : "ETM",
    "Zduńska Wola" : "EZD",
    "ZGIERZ" : "EZG"
  },

  // @sup Małopolskie
  "Małopolskie": {
    
    // @sub KRAKÓW
    "KRAKÓW" : 
      {abbr: "KR", coor: [50.0616779, 19.9373317], zoom: 12, date: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023], gallery: [

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
      {abbr: "KCHA", coor: [50.0689712,19.5393884], zoom: 15, date: [2020], gallery: []},
    "Andrychów" : 
      {abbr: "KWAA", coor: [49.8536043,19.3442792], zoom: 15, date: [2021], gallery: []},
    "Biecz" : 
      {abbr: "KGRB", coor: [49.7300761,21.2473333], zoom: 15, date: [2021], gallery: []},
    "Bobowa" : "KGRO",
    "Bochnia" : "KBC",
    "Brzesko" : "KBR",
    "Brzeszcze" : "KOSB",
    "Bukowno" : "KOLB",
    "Chełmek" : "KOSC",
    "Chrzanów" : "KCH",
    "Ciężkowice" : "KTAC",
    "Czchów" : "KBRC",
    "Dąbrowa Tarnowska" : "KDA",
    "Dobczyce" : 
      {abbr: "KMYD", coor: [49.8802702,20.0903249], zoom: 15, date: [2014], gallery: []},
    "Gorlice" : "KGR",
    "Grybów" : "KNSG",
    "Jordanów": 
      {abbr: "KSUJ", coor: [49.6494070,19.8296517], zoom: 15, date: [2020], gallery: []},
    "Kalwaria Zebrzydowska" : "KWAK",
    "Kęty" : "KOSK",
    "Koszyce" : "KPRK",
    "Krynica-Zdrój" : "KNSK",
    "Krzeszowice" : "KRAK",
    "Libiąż" : "KCHL",
    "Limanowa" : "KLI",
    "Maków Podhalański" : "KSUM",
    "Miechów" : "KMI",
    "Mszana Dolna" : "KLIM",
    "Muszyna" : "KNSM",

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
    "Niepołomice" : "KWIN",
    "Nowe Brzesko" : "KPRN",
    "NOWY SĄCZ" : "KN",
    "Nowy Targ" : "KNT",
    "Nowy Wiśnicz" : "KBCN",
    "Olkusz" : "KOL",
    "Oświęcim" : "KOS",
    "Piwniczna-Zdrój" : "KNSP",
    "Proszowice" : "KPR",
    "Rabka-Zdrój" : 
      {abbr: "KNTR", coor: [49.6115164,19.9491763], zoom: 15, date: [2021], gallery: [
        {coor: [49.6061283,19.9635637], catg: cat.nature, name: 'Park Zdrojowy'},
      ]},
    "Radłów" : "KTAR",
    "Ryglice" : "KTAG",
    "Skała" : "KRAS",
    "Skawina" : 
      {abbr: "KRAW", coor: [49.9750513,19.8264384], zoom: 15, date: [2018, 2023], gallery: []},
    "Słomniki" : "KRAM",
    "Stary Sącz" : "KNSS",
    "Sucha Beskidzka" : "KSU",
    "Sułkowice" : "KMYS",
    "Szczawnica" : "KNTS",
    "Szczucin" : "KDAS",
    "Świątniki Górne" : "KRAT",
    "TARNÓW" : "KT",
    "Trzebinia" : "KCHT",
    "Tuchów" : "KTAT",
    "Wadowice" : "KWA",
    "Wieliczka" : 
      {abbr: "KWI", coor: [49.9837548,20.0594312], zoom: 15, date: [2019, 2023], gallery: []},
    "Wojnicz" : "KTAW",
    "Wolbrom" : "KOLW",
    "Zakliczyn" : "KTAZ",
    "Zakopane" : "KTT",
    "Zator" : "KOSZ",
    "Żabno" : "KTAZ"
  },

  // @sup Mazowieckie
  "Mazowieckie": {
    "WARSZAWA" : 
      {abbr: "WA", coor: [52.2497795,21.0121733], zoom: 12, date: [2021], gallery: []},
    "Ciechanów" : "WCI",
    "Garwolin" : "WG",
    "LEGIONOWO" : "WL",
    "Milanówek" : "WGM",
    "Mława" : "WML",
    "OSTROŁĘKA" : "WO",
    "OTWOCK" : "WOT",
    "PIASECZNO" : "WPI",
    "PŁOCK" : "WP",
    "PRUSZKÓW" : "WPR",
    "RADOM" : "WR",
    "SIEDLCE" : "WS" 
  },

  // @sup Opolskie
  "Opolskie": {
    "OPOLE" : "OP",
    "Głogówek" : "OPRG",
    "KĘDZIERZYN-KOŹLE" : "OK",
    "Nysa" : "ONY",
    "Otmuchów" : "ONYO",
    "Paczków" : "ONYP",
    "Prudnik" : "OPR"
  },

  // @sup Podkarpackie
  "Podkarpackie": {
    "RZESZÓW" : "RZ",
    "DĘBICA" : "RDE",
    "Jarosław" : "RJA",
    "Jasło" : "RJS",
    "KROSNO" : "RK",
    "Łańcut" : "RLA",
    "MIELEC" : "RMI",
    "Pilzno" : "RDEP",
    "PRZEMYŚL" : "RP",
    "Przeworsk" : "RPZ",
    "Radymno" : "RJAR",
    "Ropczyce" : "RRSR",
    "Sanok" : "RSA",
    "STALOWA WOLA" : "RST",
    "Sędziszów Małopolski" : "RRSS",
    "TARNOBRZEG" : "RT"
  },

  // @sup Podlaskie
  "Podlaskie": {
    "BIAŁYSTOK" : "BI",
    "SUWAŁKI" : "BS",
    "ŁOMŻA" : "BL"
  },

  // @sup Pomorskie
  "Pomorskie": {
    "GDAŃSK" : "GD",
    "GDYNIA" : "GA",
    "Hel" : "GPUH",
    "Krynica Morska" : "GNDK",
    "Łeba" : "GLEL",
    "Malbork" : "GMB",
    "RUMIA" : "GWER",
    "SŁUPSK" : "GS",
    "Sopot" : "GSP",
    "STAROGARD GDAŃSKI" : "GST",
    "TCZEW" : "GTC", 
    "Ustka" : "GSL", 
    "WEJHEROWO" : "GWE"
  },

  // @sup Śląskie
  "Śląskie": {
    "KATOWICE" : "SK",
    "BĘDZIN" : "SBE",
    "BIELSKO-BIAŁA" : "SB",
    "Bieruń" : "SBL",
    "BYTOM" : "SY",
    "CHORZÓW" : "SH",
    "Cieszyn" : "SCI",
    "Czechowice-Dziedzice" : "SBIC",
    "Czeladź" : "SBEC",
    "CZĘSTOCHOWA" : "SC",
    "DĄBROWA GÓRNICZA" : "SD",
    "GLIWICE" : "SG",
    "JASTRZĘBIE-ZDRÓJ" : "SJZ",
    "JAWORZNO" : "SJ",
    "Mikołów" : "SMI",
    "MYSŁOWICE" : "SM",
    "Myszków" : "SMY",
    "Ogrodzieniec" : "SZAO",
    "PIEKARY ŚLĄSKIE" : "SPI",
    "Pilica" : "SZAP",
    "Pszczyna" : "SPS",
    "RACIBÓRZ" : "SRC",
    "RUDA ŚLĄSKA" : "SL",
    "RYBNIK" : "SR",
    "SIEMIANOWICE ŚLĄSKIE" : "SI",
    "Siewierz" : "SBE",
    "Sławków" : "SBES",
    "SOSNOWIEC" : "SO",
    "Szczekociny" : "SZAS",
    "Szczyrk" : "SBIS",
    "ŚWIĘTOCHŁOWICE" : "SW",
    "TARNOWSKIE GÓRY" : "STA",
    "TYCHY" : "ST",
    "Ustroń" : "SCIU",
    "WODZISŁAW ŚLĄSKI" : "SWD",
    "ZABRZE" : "SZ",
    "ZAWIERCIE" : "SZA",
    "ŻORY" : "SZO",
    "Żywiec" : "SZY",
  },

  // @sup Świętokrzyskie
  "Świętokrzyskie": {
    "KIELCE" : "TK", 
    "Busko-Zdrój" : "TBU",
    "Chęciny" : "TKIC",
    "Jędrzejów" : "TJE",
    "Kazimierza Wielka" : "TKA",
    "OSTROWIEC ŚWIĘTOKRZYSKI" : "TOS",
    "Pacanów" : "TBUP",
    "Pińczów" : "TPI",
    "Sandomierz" : "TSA",
    "Skalbmierz" : "TKAS",
    "SKARŻYSKO-KAMIENNA" : "TSK",
    "STARACHOWICE" : "TST",
    "Stopnica" : "TBUS"
  },

  // @sup Warmińskie
  "Warmińskie": {
    "OLSZTYN" : "NO",
    "ELBLĄG" : "NE",
    "EŁK" : "NEL",
    "Frombork" : "NBRF",
    "Giżycko" : "NGI",
    "Nidzica" : "NNI",
    "Olsztynek" : "NOLO",
    "Orneta" : "NLIO"
  },

  // @sup Wielkopolskie
  "Wielkopolskie": {
    "POZNAŃ" : "PO",
    "GNIEZNO" : "PGN",
    "KALISZ" : "PK",
    "KONIN" : "PN",
    "LESZNO" : "PL",
    "OSTRÓW WIELKOPOLSKI" : "POS",
    "PIŁA" : "PP"
  },

  // @sup Zachodniopomorskie
  "Zachodniopomorskie": {
    "SZCZECIN" : "ZS",
    "Darłowo" : "ZSLD",
    "KOŁOBRZEG" : "ZKL",
    "KOSZALIN" : "ZK",
    "Mielno" : "ZKOM",
    "Międzyzdroje" : "ZKAM",
    "STARGARD" : "ZST",
    "Świnoujście" : "ZSW"
  }           
}