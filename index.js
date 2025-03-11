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
  // @sup GÓRY
  [ranges.mountains]: {

    // @sub Beskid Mały
    "Beskid Mały" : {
      coor: [49.7797122,19.3057251], 
      zoom: 12, 
      "Czupel" : 
        {coor: [49.7678918,19.1609716], zoom: 15, date: [2021], gallery: []},
      "Leskowiec" : 
        {coor: [49.7955468,19.4458866], zoom: 15, date: [2010], gallery: []},
    },

    // @sub Beskid Makowski
    "Beskid Makowski" : {
      coor: [49.7212609,19.7503281], 
      zoom: 12, 
      "Barnasiówka" : 
        {coor: [49.8371244,19.8836660], zoom: 15, date: [2018], gallery: []},
    },

    // @sub Beskid Niski
    "Beskid Niski" : {
      coor: [49.4264395,21.1024618], 
      zoom: 12, 
      "Lackowa" : 
        {coor: [49.4264395,21.1024618], zoom: 15, date: [2021], gallery: []},
    },

    // @sub Beskid Sądecki
    "Beskid Sądecki" : {
      coor: [49.4716938,20.6913757], 
      zoom: 12, 
      "Hala Łabowska" : 
        {coor: [49.4728790,20.8101439], zoom: 15, date: [2022], gallery: []},
      "Jaworzyna Krynicka" : 
        {coor: [49.4177857,20.8958673], zoom: 15, date: [2010], gallery: []},
      "Koziarz" : 
        {coor: [49.5009807,20.4465008], zoom: 15, date: [2022], gallery: []},
      "Przehyba" : 
        {coor: [49.4655582,20.5601621], zoom: 15, date: [2017], gallery: []},
      "Radziejowa" : 
        {coor: [49.4491556,20.6042576], zoom: 15, date: [2021], gallery: []},
    },

    // @sub Beskid Śląski
    "Beskid Śląski" : {
      coor: [49.6520709,18.9239502], 
      zoom: 12, 
      "Barania Góra" : 
        {coor: [49.6114468,19.0105534], zoom: 15, date: [2024], gallery: []},
    },

    // @sub Beskid Wyspowy
    "Beskid Wyspowy" : {
      coor: [49.6882885,20.1914978], 
      zoom: 12, 
      "Ciecień" : 
        {coor: [49.7735737,20.1426816], zoom: 15, date: [2020], gallery: []},
    },

    // @sub Beskid Żywiecki
    "Beskid Żywiecki" : {
      coor: [49.5087143,19.2868423], 
      zoom: 12, 
      "Babia Góra" : 
        {coor: [49.5730083,19.5293140], zoom: 15, date: [2009,2012,2014], gallery: []},
    },

    // @sub Bieszczady
    "Bieszczady" : {
      coor: [49.1092759,22.6560402], 
      zoom: 13, 
      "Połonina Caryńska" : 
      {coor: [49.1353957,22.6078892], zoom: 15, date: [2011], gallery: []},
      "Połonina Wetlińska" : 
      {coor: [49.1583094,22.5512570], zoom: 15, date: [2011,2017], gallery: []},
      "Tarnica" : 
        {coor: [49.0746531,22.7264214], zoom: 15, date: [2017], gallery: []},
    },

    // @sub Gorce
    "Gorce" : {
      coor: [49.5301109,20.1926994], 
      zoom: 13, 
      "Gorc" : 
        {coor: [49.5649719,20.2530384], zoom: 15, date: [2019], gallery: []},
      "Lubań" : 
        {coor: [49.4892318,20.3389120], zoom: 15, date: [2020], gallery: []},
      "Magurki" : 
        {coor: [49.5306750,20.1826787], zoom: 15, date: [2021], gallery: []},
      "Turbacz" : 
        {coor: [49.5428247,20.1113749], zoom: 15, date: [2009,2014], gallery: []},
    },

    // @sub Pieniny
    "Pieniny" : {
      coor: [49.4116433,20.4675293], 
      zoom: 13, 
      "Sokolica" : 
      {coor: [49.4176042,20.4403853], zoom: 15, date: [2009,2012,2016], gallery: []},
      "Trzy Korony" : 
      {coor: [49.4138194,20.4141855], zoom: 15, date: [2012,2023], gallery: []},
      "Wysoka" : 
        {coor: [49.3802285,20.5554950], zoom: 15, date: [2014], gallery: []},
    },

    // @sub Sudety
    "Sudety" : {
      coor: [50.6133103,16.0297394], 
      zoom: 11, 
      "Szczeliniec Wielki" : 
        {coor: [50.4848045,16.3410258], zoom: 16, date: [2023], gallery: [
          {coor: [50.4809883,16.3398081], catg: cat.nature, name: 'Wejście', date: [2023]}
        ]},
    },

    // @sub Świętokrzyskie
    "Świętokrzyskie" : {
      coor: [50.8915834,20.8966398], 
      zoom: 13, 
      "Łysica" : 
        {coor: [50.8915834,20.8966398], zoom: 15, date: [2013], gallery: []},
    },

    // @sub Tatry Zachodnie
    "Tatry Zachodnie" : {
      coor: [49.2377759,19.8749542], 
      zoom: 13, 
      "Wołowiec" : 
        {coor: [49.2075327,19.7630739], zoom: 15, date: [2023], gallery: []},
    },

    // @sub Tatry Wysokie
    "Tatry Wysokie" : {
      coor: [49.2121026,20.0493622], 
      zoom: 13, 
      "Gęsia Szyja" : 
        {coor: [49.2590247,20.0765276], zoom: 15, date: [2024], gallery: [
          {coor: [49.2611673,20.0922453], catg: cat.nature, name: 'Rusinowa Polana 1 S', date: [2024]},
          {coor: [49.2624556,20.0912690], catg: cat.nature, name: 'Rusinowa Polana 2 SE', date: [2024]},
          {coor: [49.2612373,20.0884044], catg: cat.nature, name: 'Rusinowa Polana 3 N', date: [2024]}
        ]},
    },
  
    // "Tatry Wysokie" : 
    // {coor: [49.2121026,20.0493622], zoom: 13, gallery: [
    //   {coor: [49.2288156,20.0117040], catg: cat.profil, name: 'Karb 2016', date: [2016]},
    //   {coor: [49.2288156,20.0117040], catg: cat.profil, name: 'Karb 2021', date: [2021]},
    //   {coor: [49.2251791,20.0145686], catg: cat.profil, name: 'Kościelec 2021', date: [2021]},
    //   {coor: [49.2183189,20.0286984], catg: cat.profil, name: 'Kozi Wierch 2022', date: [2022]},
    //   {coor: [49.2195488,20.0253189], catg: cat.profil, name: 'Kozia Przełęcz 2012', date: [2012]},
    //   {coor: [49.2286509,20.0472862], catg: cat.profil, name: 'Krzyżne 2011', date: [2011]},
    //   {coor: [49.2255435,19.9913299], catg: cat.profil, name: 'Liliowe', date: [2012]},
    //   {coor: [49.2256941,20.0327325], catg: cat.profil, name: 'Pośredni Granat 2022', date: [2022]},
    //   {coor: [49.2628337,20.0902605], catg: cat.nature, name: 'Rusinowa Polana', date: [2024]},
    //   {coor: [49.1792488,20.0884581], catg: cat.profil, name: 'Rysy 2013', date: [2013]},
    //   {coor: [49.2269343,20.0333118], catg: cat.profil, name: 'Skrajny Granat 2022', date: [2022]},
    //   {coor: [49.1972734,20.0401139], catg: cat.profil, name: 'Szpiglasowy Wierch 2012', date: [2012]},
    //   {coor: [49.1972734,20.0401139], catg: cat.profil, name: 'Szpiglasowy Wierch 2013', date: [2013]},
    //   {coor: [49.2194191,20.0093061], catg: cat.profil, name: 'Świnica 2011', date: [2011]},
    //   {coor: [49.2164513,20.0575215], catg: cat.profil, name: 'Świstowa Czuba 2020', date: [2020]},
    //   {coor: [49.2247692,20.0325716], catg: cat.profil, name: 'Zadni Granat 2022', date: [2022]},
    //   {coor: [49.2190863,20.0163925], catg: cat.profil, name: 'Zawrat 2011', date: [2011]},
    // ]},

    // "Tatry Zachodnie" : 
    // {coor: [49.2377759,19.8749542], zoom: 13, gallery: [
    //   {coor: [49.2282200,19.9879289], catg: cat.profil, name: 'Beskid', date: [2012]},
    //   {coor: [49.2309805,19.9034286], catg: cat.profil, name: 'Ciemniak 2010', date: [2010]},
    //   {coor: [49.2309805,19.9034286], catg: cat.profil, name: 'Ciemniak 2015', date: [2015]},
    //   {coor: [49.2509367,19.9341023], catg: cat.profil, name: 'Giewont 2009', date: [2009]},
    //   {coor: [49.2509367,19.9341023], catg: cat.profil, name: 'Giewont 2013', date: [2013]},
    //   {coor: [49.2322556,19.9576306], catg: cat.profil, name: 'Goryczkowa Czuba 2012', date: [2012]},
    //   {coor: [49.2365710,19.7667217], catg: cat.profil, name: 'Grześ 2016', date: [2016]},
    //   {coor: [49.2290608,19.8587537], catg: cat.profil, name: 'Hala Ornak 2020', date: [2020]},
    //   {coor: [49.2321715,19.8363304], catg: cat.profil, name: 'Iwaniacka Przełęcz 2020', date: [2020]},
    //   {coor: [49.1974662,19.7950888], catg: cat.profil, name: 'Jarząbczy Wierch 2023', date: [2023]},
    //   {coor: [49.2317651,19.9815774], catg: cat.profil, name: 'Kasprowy Wierch 2012', date: [2012]},
    //   {coor: [49.2317651,19.9815774], catg: cat.profil, name: 'Kasprowy Wierch 2017', date: [2017]},
    //   {coor: [49.2056822,19.8076200], catg: cat.profil, name: 'Kończysty Wierch 2017', date: [2017]},
    //   {coor: [49.2363188,19.9322891], catg: cat.profil, name: 'Kopa Kondracka 2010', date: [2010]},
    //   {coor: [49.2716479,20.0162905], catg: cat.profil, name: 'Kopieniec Wielki 2024', date: [2024]},
    //   {coor: [49.2316390,19.9095011], catg: cat.profil, name: 'Krzesanica 2010', date: [2010]},
    //   {coor: [49.2316390,19.9095011], catg: cat.profil, name: 'Krzesanica 2015', date: [2015]},
    //   {coor: [49.2049532,19.7786307], catg: cat.profil, name: 'Łopata 2023', date: [2023]},
    //   {coor: [49.2357023,19.9192429], catg: cat.profil, name: 'Małołączniak 2010', date: [2010]},
    //   {coor: [49.2357023,19.9192429], catg: cat.profil, name: 'Małołączniak 2015', date: [2015]},
    //   {coor: [49.2764253,19.9894577], catg: cat.profil, name: 'Nosal 2024', date: [2024]},
    //   {coor: [49.2188305,19.8329401], catg: cat.profil, name: 'Ornak 2024', date: [2024]},
    //   {coor: [49.2486396,19.8866647], catg: cat.profil, name: 'Piec 2014', date: [2014]},
    //   {coor: [49.2159432,19.7584391], catg: cat.profil, name: 'Rakoń 2016', date: [2016]},
    //   {coor: [49.2646436,19.9421060], catg: cat.profil, name: 'Sarnia Skała 2023', date: [2023]},
    //   {coor: [49.1993450,19.8198938], catg: cat.profil, name: 'Starorobociański 2017', date: [2017]},
    //   {coor: [49.2190688,19.8037362], catg: cat.profil, name: 'Trzydniowiański Wierch', date: [2023]},
    //   {coor: [49.2075327,19.7630739], catg: cat.profil, name: 'Wołowiec 2023', date: [2023]},
    //   {coor: [49.2129716,19.8358154], catg: cat.profil, name: 'Zadni Ornak 2024', date: [2024]},
    // ]},

    // "Beskid Makowski" : 
    //   {coor: [49.7212609,19.7503281], zoom: 12, gallery: [
    //     {coor: [49.8371244,19.8836660], catg: cat.profil, name: 'Barnasiówka 2018', date: [2018]},
    //     {coor: [49.7994147,19.9494714], catg: cat.profil, name: 'Chełm 2007', date: [2007]},
    //     {coor: [49.7994147,19.9494714], catg: cat.profil, name: 'Chełm 2013', date: [2013]},
    //     {coor: [49.8430750,19.9083424], catg: cat.profil, name: 'Dalin 2018', date: [2018]},
    //     {coor: [49.7895073,20.0567651], catg: cat.profil, name: 'Kamiennik 2008', date: [2008]},
    //     {coor: [49.7895073,20.0567651], catg: cat.profil, name: 'Kamiennik 2016', date: [2016]},
    //     {coor: [49.7507241,19.7829866], catg: cat.profil, name: 'Koskowa Góra 2010', date: [2010]},
    //     {coor: [49.7691529,19.8961544], catg: cat.profil, name: 'Kotoń 2018', date: [2018]},
    //     {coor: [49.7668523,20.0596189], catg: cat.profil, name: 'Lubomir 2016', date: [2016]},
    //     {coor: [49.7758324,20.0483322], catg: cat.profil, name: 'Łysina 2008', date: [2008]},
    //     {coor: [49.7758324,20.0483322], catg: cat.profil, name: 'Łysina 2016', date: [2016]},
    //     {coor: [49.6132057,19.4624734], catg: cat.profil, name: 'Mędralowa 2021', date: [2021]},
    //     {coor: [49.8226878,19.9162388], catg: cat.profil, name: 'Plebańska Góra 2013', date: [2013]},
    //     {coor: [49.8226878,19.9162388], catg: cat.profil, name: 'Plebańska Góra 2018', date: [2018]},
    //     {coor: [49.7830375,20.0510144], catg: cat.profil, name: 'Sucha Polana 2008', date: [2008]},
    //     {coor: [49.7830375,20.0510144], catg: cat.profil, name: 'Sucha Polana 2016', date: [2016]},
    //     {coor: [49.8103793,19.9761593], catg: cat.profil, name: 'Uklejna 2007', date: [2007]},
    //     {coor: [49.8103793,19.9761593], catg: cat.profil, name: 'Uklejna 2013', date: [2013]},
    //     {coor: [49.8103793,19.9761593], catg: cat.profil, name: 'Uklejna 2020', date: [2020]},
    //     {coor: [49.8103793,19.9761593], catg: cat.profil, name: 'Uklejna 2021', date: [2021]},
    //   ]},

    // "Beskid Sądecki" : 
    //   {coor: [49.4716938,20.6913757], zoom: 12, gallery: [
    //     {coor: [49.4728790,20.8101439], catg: cat.profil, name: 'Hala Łabowska 2022', date: [2022]},
    //     {coor: [49.4177857,20.8958673], catg: cat.profil, name: 'Jaworzyna Krynicka 2010', date: [2010]},
    //     {coor: [49.4492393,20.6500268], catg: cat.profil, name: 'Niemcowa 2021', date: [2021]},
    //     {coor: [49.4655582,20.5601621], catg: cat.profil, name: 'Przehyba 2017', date: [2017]},

    //   ]},

    // "Beskid Śląski" : 
    //   {coor: [49.6520709,18.9239502], zoom: 12, gallery: [
    //     {coor: [49.6114468,19.0105534], catg: cat.profil, name: 'Barania Góra 2024', date: [2024]},
    //     {coor: [49.6787924,18.8045597], catg: cat.profil, name: 'Czantoria Wielka 2010', date: [2010]},
    //     {coor: [49.6845403,19.0302944], catg: cat.profil, name: 'Skrzyczne 2021', date: [2021]},
    //     {coor: [49.6342717,18.8131857], catg: cat.profil, name: 'Soszów Wielki 2010', date: [2010]},
    //     {coor: [49.6055095,18.8231206], catg: cat.profil, name: 'Stożek Wielki 2010', date: [2010]},
    //   ]},

    // "Beskid Wyspowy" :  
      // gallery: [
      //   {coor: [49.7735737,20.1426816], catg: cat.profil, name: 'Ciecień 2020', date: [2020]},
      //   {coor: [49.6887536,20.1914388], catg: cat.profil, name: 'Ćwilin 2024', date: [2024]},
      //   {coor: [49.7878865,20.1458037], catg: cat.profil, name: 'Księża Góra 2020', date: [2020]},
      //   {coor: [49.7125481,20.0988007], catg: cat.profil, name: 'Lubogoszcz 2014', date: [2014]},
      //   {coor: [49.6534602,19.9918556], catg: cat.profil, name: 'Luboń 2008', date: [2008]},
      //   {coor: [49.6212064,20.3760552], catg: cat.profil, name: 'Modyń 2023', date: [20]},
      //   {coor: [49.6552452,20.2767169], catg: cat.profil, name: 'Mogielica 2017', date: [2017]},
      //   {coor: [49.6884274,20.0104594], catg: cat.profil, name: 'Szczebel 2008', date: [2008]},
      //   {coor: [49.7159613,20.1781511], catg: cat.profil, name: 'Śnieżnica 2020', date: [2020]},
      // ]},

    // "Beskid Żywiecki" : 
    //   {coor: [49.5087143,19.2868423], zoom: 12, gallery: [
    //     {coor: [49.6281703,19.6456146], catg: cat.profil, name: 'Hala Krupowa 2020', date: [2020]},
    //     {coor: [49.5319771,19.2261386], catg: cat.profil, name: 'Hala Lipowska 2018', date: [2018]},
    //     {coor: [49.5405551,19.3187714], catg: cat.profil, name: 'Hala Miziowa 2016', date: [2016]},
    //     {coor: [49.5363359,19.2345500], catg: cat.profil, name: 'Hala Rysianka 2018', date: [2018]},
    //     {coor: [49.4760998,19.2185640], catg: cat.profil, name: 'Krawców Wierch 2018', date: [2018]},
    //     {coor: [49.5876515,19.5167613], catg: cat.nature, name: 'Markowe Szczawiny', date: [2009,2012,2014,2018]},
    //     {coor: [49.5279452,19.3167758], catg: cat.profil, name: 'Pilsko 2016', date: [2016]},
    //     {coor: [49.6232776,19.6197796], catg: cat.profil, name: 'Polica 2020', date: [2020]},
    //     {coor: [49.5606295,19.2419100], catg: cat.profil, name: 'Romanka 2018', date: [2018]},
    //     {coor: [49.4127323,18.9696336], catg: cat.profil, name: 'Wielka Racza 2011', date: [2011]},
    //     {coor: [49.4127323,18.9696336], catg: cat.profil, name: 'Wielka Racza 2018', date: [2018]},
    //     {coor: [49.4158453,19.0917599], catg: cat.profil, name: 'Wielka Rycerzowa 2011', date: [2011]},
    //     {coor: [49.4158453,19.0917599], catg: cat.profil, name: 'Wielka Rycerzowa 2018', date: [2018]},
    //   ]},
  },

  // @sup POLSKA
  [ranges.poland]: {

    // @sub Dolnośląskie
    "Dolnośląskie": {
      coor: [50.6790568,16.3600159], 
      zoom: 10,
      "WROCŁAW" : 
        {coor: [51.1097396,17.0308739], zoom: 13, date: [2020], abbr: "DW", gallery: []},
      "Boguszów-Gorce" : 
        {coor: [50.7565667,16.2048125], zoom: 15, date: [2023], abbr: "DBA", gallery: []},
      "Bystrzyca Kłodzka" :
        {coor: [50.2967487,16.6517651], zoom: 15, date: [2023], abbr: "DKLB", gallery: []},
      "GŁOGÓW" : 
        {coor: [51.6666198,16.0905290], zoom: 14, date: [2022], abbr: "DGL", gallery: []},
      "JELENIA GÓRA" : 
        {coor: [50.9030531,15.7340312], zoom: 14, date: [2022], abbr: "DJ", gallery: []},   
      "Kamienna Góra" :
        {coor: [50.7823816,16.0309142], zoom: 15, date: [2023], abbr: "DKA", gallery: []}, 
      "Karpacz" :
        {coor: [50.7773819,15.7237262], zoom: 15, date: [2023], abbr: "DJEK", gallery: []},
      "Kłodzko" :
        {coor: [50.4379715,16.6556650], zoom: 14, date: [2023], abbr: "DKL", gallery: []},
      "Kowary" :
        {coor: [50.7932678,15.8354831], zoom: 15, date: [2023], abbr: "DJEW", gallery: []},
      "Międzylesie" :
        {coor: [50.1477083,16.6668820], zoom: 15, date: [2023], abbr: "DKLM", gallery: []},
      "Nowa Ruda" :
        {coor: [50.5791592,16.5013146], zoom: 15, date: [2023], abbr: "DKLN", gallery: []},
      "LEGNICA" :
        {coor: [51.2073136,16.1621386], zoom: 14, date: [2021], abbr: "DL", gallery: []},
      "LUBIN" :
        {coor: [51.3967992,16.2055743], zoom: 14, date: [2022], abbr: "DLU", gallery: []},
      "Polanica-Zdrój" :
        {coor: [50.4088526,16.5095383], zoom: 15, date: [2023], abbr: "DKLP", gallery: []},
      "ŚWIDNICA" :
        {coor: [50.8461368,16.4916909], zoom: 14, date: [2022], abbr: "DSW", gallery: []},
      "WAŁBRZYCH" :
        {coor: [50.7674894,16.2820655], zoom: 14, date: [2022], abbr: "DB", gallery: []},
      "Złoty Stok" :
        {coor: [50.4397516,16.8746245], zoom: 15, date: [2023], abbr: "DZAZ", gallery: []},
    },

    // @sub Kujawskie
    "Kujawskie": {
      coor: [53.0577234,18.3073425], 
      zoom: 10,    
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

    // @sub Lubelskie
    "Lubelskie": {
      coor: [51.0862725,22.6112366], 
      zoom: 10,
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

    // @sub Lubuskie
    "Lubuskie": {
      coor: [52.3126766,15.3506470], 
      zoom: 10,
      "ZIELONA GÓRA" :
        {coor: [51.9380279,15.5050135], zoom: 14, date: [2021], abbr: "FZ", gallery: []},
      "GORZÓW WIELKOPOLSKI" :
        {coor: [52.7311074,15.2403492], zoom: 14, date: [2021], abbr: "FG", gallery: []},
    },

    // @sub Łódzkie
    "Łódzkie": {
      coor: [51.7438847,19.4623232], 
      zoom: 10,
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

    // @sub Małopolskie
    "Małopolskie": {
      coor: [49.8990575,20.2409363], 
      zoom: 10,     
      // @func KRAKÓW
      "KRAKÓW" : 
        {abbr: "KR", coor: [50.0616779, 19.9373317], zoom: 13, date: [2022], gallery: [

        // Gastro
        {coor: [50.0641711, 19.9420658], catg: cat.gastro, name: 'Babcia Malina', date: [2015, 2016, 2017, 2018, 2021, 2023]},
        {coor: [50.0629977, 19.9390986], catg: cat.gastro, name: 'Camelot', date: [2024]},
        {coor: [50.0680329, 19.9375489], catg: cat.gastro, name: 'Chata', date: [2019, 2020, 2022, 2023]},
        {coor: [50.0615022, 19.9416608], catg: cat.gastro, name: 'Cyklop', date: [2022]},
        {coor: [50.0574492, 19.9384166], catg: cat.gastro, name: 'Dziórawy Kocioł', date: [2018, 2019, 2022, 2024]},
        {coor: [50.0600244, 19.9375925], catg: cat.gastro, name: 'Gruzińskie Chaczapuri', date: [2015]},
        {coor: [50.0531340, 19.9294835], catg: cat.gastro, name: 'Hoang Hai', date: [2022]},
        {coor: [50.0567048, 19.9374296], catg: cat.gastro, name: 'Ministerstwo', date: [2021, 2023]},
        {coor: [50.0545978, 19.9393380], catg: cat.gastro, name: 'Pod Wawelem', date: [2014]},
        {coor: [50.0582280, 19.9389457], catg: cat.gastro, name: 'Taco Mexicano', date: [2013, 2014, 2023]},
        {coor: [50.0669835, 19.9713555], catg: cat.gastro, name: 'Tratoria Da Marco', date: [2013, 2016, 2019]},
        {coor: [50.0603882, 19.9374135], catg: cat.gastro, name: 'Wierzynek', date: [2024]},

        // History
        {coor: [50.0655020, 19.9416393], catg: cat.history, name: 'Barbakan', date: [2016]},
        {coor: [50.0442493, 19.9172446], catg: cat.history, name: 'Kopiec Jana Pawła II'},
        {coor: [50.0549104, 19.8933542], catg: cat.history, name: 'Kopiec Kościuszki', date: [2013]},
        {coor: [50.0380789, 19.9584353], catg: cat.history, name: 'Kopiec Krakusa', date: [2012, 2013, 2015, 2020]},
        {coor: [50.0600489, 19.8471665], catg: cat.history, name: 'Kopiec Piłsudskiego', date: [2012, 2016, 2020, 2023]},
        {coor: [50.0702176, 20.0680733], catg: cat.history, name: 'Kopiec Wandy', date: [2015]},
        {coor: [50.0531383, 19.9336463], catg: cat.history, name: 'Smocza Jama', date: [2021]},
        
        // Kultura
        {coor: [50.0479388, 19.9313933], catg: cat.culture, name: 'Centrum Kongresowe', date: [2014, 2018, 2021, 2023]},
        {coor: [50.0588177, 19.9327424], catg: cat.culture, name: 'Filharmonia Krakowska', date: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]},
        {coor: [50.0583287, 19.9249023], catg: cat.culture, name: 'Kino Kijów', date: [2019]},
        {coor: [50.0615969, 19.9352033], catg: cat.culture, name: 'Kino pod Baranami', date: [2024]},
        {coor: [50.0632249, 19.9403264], catg: cat.culture, name: 'Muzeum Farmacji', date: [2022]},
        {coor: [50.0770862, 19.9898386], catg: cat.culture, name: 'Muzeum Lotnictwa', date: [2020]},
        {coor: [50.0604312, 19.9236229], catg: cat.culture, name: 'Muzeum Narodowe', date: [2023]},
        {coor: [50.0659255, 19.9561957], catg: cat.culture, name: 'Opera Krakowska', date: [2012, 2013, 2015, 2016, 2021, 2023]},
        {coor: [50.0579722, 19.9204123], catg: cat.culture, name: 'Stadion Cracovia', date: [2014]},
        {coor: [50.0616951, 19.9373585], catg: cat.culture, name: 'Sukiennice'},
        {coor: [50.0677041, 19.9915552], catg: cat.culture, name: 'Tauron Arena', date: [2015, 2016, 2019, 2021, 2023]},
        {coor: [50.0636528, 19.9322623], catg: cat.culture, name: 'Teatr Bagatela', date: [2012, 2014, 2015]},
        {coor: [50.0639404, 19.9430662], catg: cat.culture, name: 'Teatr Słowackiego', date: [2017, 2018, 2022]},
        {coor: [50.0631621, 19.9353603], catg: cat.culture, name: 'Teatr Stary', date: [2023]},
        {coor: [50.0563845, 19.9264419], catg: cat.culture, name: 'Teatr Stu', date: [2011, 2024]},
        {coor: [50.0568383, 19.9639110], catg: cat.culture, name: 'Teatr Variete', date: [2022]},   

        // Natura
        {coor: [50.0592327, 19.9206054], catg: cat.nature, name: 'Błonia', date: [2016, 2017]},
        {coor: [50.0511733, 19.9346495], catg: cat.nature, name: 'Bulwar Czerwieński', date: [2021]},
        {coor: [50.0478940, 19.9368703], catg: cat.nature, name: 'Bulwar Inflandzki', date: [2021]},
        {coor: [50.0556785, 19.9778706], catg: cat.nature, name: 'Bulwar Kurlandzki', date: [2019]},
        {coor: [50.0475426, 19.9347460], catg: cat.nature, name: 'Bulwar Wołyński', date: [2021]},
        {coor: [50.0993033, 19.9383402], catg: cat.nature, name: 'Dolina Prądnika', date: [2023]},
        {coor: [50.0366077, 19.9565578], catg: cat.nature, name: 'Kamieniołom Liban', date: [2015]},
        {coor: [50.0549345, 19.8431110], catg: cat.nature, name: 'Las Wolski', date: [2012, 2016, 2020, 2021, 2023]},
        {coor: [50.0553960, 20.0580633], catg: cat.nature, name: 'Lasek Mogilski', date: [2023]},
        {coor: [50.0737019, 19.9268711], catg: cat.nature, name: 'Młynówka Królewska', date: [2016, 2017, 2018, 2019, 2021, 2022, 2023]},
        {coor: [50.0622908, 19.9581242], catg: cat.nature, name: 'Ogród Botaniczny', date: [2016, 2018, 2019, 2021, 2023]},
        {coor: [50.0120277, 20.0139785], catg: cat.nature, name: 'Park Aleksandry', date: [2021]},
        {coor: [50.0651904, 19.8730016], catg: cat.nature, name: 'Park Decjusza', date: [2018, 2021]},
        {coor: [50.0493132, 19.9167645], catg: cat.nature, name: 'Park Dębnicki', date: [2022]},
        {coor: [50.0692983, 19.9414515], catg: cat.nature, name: 'Park Jalu Kurka', date: [2023]},
        {coor: [50.0173638, 19.9944413], catg: cat.nature, name: 'Park Jerzmanowskich', date: [2021]},
        {coor: [50.0627454, 19.9174833], catg: cat.nature, name: 'Park Jordana', date: [2016, 2017, 2018, 2020, 2023]},
        {coor: [50.0761601, 19.9382973], catg: cat.nature, name: 'Park Kleparski', date: [2023]},
        {coor: [50.0931848, 19.9415052], catg: cat.nature, name: 'Park Kościuszki', date: [2023]},
        {coor: [50.0685821, 19.9248540], catg: cat.nature, name: 'Park Krakowski', date: [2018, 2019, 2023]},
        {coor: [50.0880704, 19.9222684], catg: cat.nature, name: 'Park Krowoderski', date: [2020]},
        {coor: [50.1072653, 19.9451101], catg: cat.nature, name: 'Park Leśny Witkowice', date: [2023]},
        {coor: [50.0205763, 20.0026917], catg: cat.nature, name: 'Park Lilli Wenedy', date: [2021]},
        {coor: [50.0734609, 19.9951816], catg: cat.nature, name: 'Park Lotników Polskich', date: [2020]},
        {coor: [50.0653109, 19.9290866], catg: cat.nature, name: 'Park Szymborskiej', date: [2023]},
        {coor: [50.0892544, 19.9982178], catg: cat.nature, name: 'Park Tysiąclecia', date: [2020]},
        {coor: [50.0859640, 19.9207020], catg: cat.nature, name: 'Park Wyspiańskiego', date: [2020]},
        {coor: [50.0867384, 19.9663854], catg: cat.nature, name: 'Park Zaczarowanej Dorożki', date: [2020]},
        {coor: [50.0942516, 20.0585675], catg: cat.nature, name: 'Park Zielony Jar Wandy', date: [2022]},
        {coor: [50.0595737, 19.9411619], catg: cat.nature, name: 'Planty', date: [2013, 2015, 2022, 2023]},
        {coor: [50.0859777, 20.0252008], catg: cat.nature, name: 'Planty Bieńczyckie', date: [2019]},
        {coor: [50.0992896, 20.0046873], catg: cat.nature, name: 'Planty Mistrzejowickie', date: [2019]},
        {coor: [50.0435878, 19.9428785], catg: cat.nature, name: 'Planty Nowackiego', date: [2024]},
        {coor: [50.0372692, 19.9104452], catg: cat.nature, name: 'Zakrzówek', date: [2006, 2017, 2020, 2023]},
        {coor: [50.0312047, 19.9972844], catg: cat.nature, name: 'Zalew Bagry', date: [2019]},
        {coor: [50.0790657, 20.0526667], catg: cat.nature, name: 'Zalew Nowohucki', date: [2019, 2023]},

        // Religia
        {coor: [50.0497610, 19.9448419], catg: cat.religion, 
          name: 'Bazylika Bożego Ciała [Kazimierz]/Zewnętrze', 
          date: [2016, 2017, 2018, 2019, 2020, 2022], top},
        {coor: [50.0497610, 19.9448419], catg: cat.religion, 
          name: 'Bazylika Bożego Ciała [Kazimierz]/Wnętrze', 
          date: [2016, 2017, 2018, 2019, 2020, 2022]},
        {coor: [50.0497610, 19.9448419], catg: cat.religion, 
          name: 'Bazylika Bożego Ciała [Kazimierz]/Organy', 
          date: [2016, 2017, 2018, 2019, 2020, 2022]},

        {coor: [50.0647909, 20.0533479], catg: cat.religion, 
          name: 'Bazylika MB Wniebowziętej (Cystersów) [Mogiła]/Zewnętrze', date: [2023], top}, 
        {coor: [50.0647909, 20.0533479], catg: cat.religion, 
          name: 'Bazylika MB Wniebowziętej (Cystersów) [Mogiła]/Wnętrze', date: [2023]}, 
        {coor: [50.0647909, 20.0533479], catg: cat.religion, 
          name: 'Bazylika MB Wniebowziętej (Cystersów) [Mogiła]/Ołtarz', date: [2023]}, 

        {coor: [50.0199731, 19.9376053], catg: cat.religion, 
          name: 'Bazylika Miłosierdzia Bożego [Łagiewniki]/Zewnętrze', 
          date: [2015, 2018, 2019, 2020, 2021], top},
        {coor: [50.0199731, 19.9376053], catg: cat.religion, 
          name: 'Bazylika Miłosierdzia Bożego [Łagiewniki]/Wnętrze', 
          date: [2015, 2018, 2019, 2020, 2021]},
        {coor: [50.0199731, 19.9376053], catg: cat.religion, 
          name: 'Bazylika Miłosierdzia Bożego [Łagiewniki]/Organy', 
          date: [2015, 2018, 2019, 2020, 2021]},

        {coor: [50.0621049, 19.9488384], catg: cat.religion, 
          name: 'Bazylika Najświętszego Serca Pana Jezusa (Jezuitów) [Wesoła]/Zewnętrze', 
          date: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024], top},
        {coor: [50.0621049, 19.9488384], catg: cat.religion, 
          name: 'Bazylika Najświętszego Serca Pana Jezusa (Jezuitów) [Wesoła]/Wnętrze', 
          date: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]},
        {coor: [50.0621049, 19.9488384], catg: cat.religion, 
          name: 'Bazylika Najświętszego Serca Pana Jezusa (Jezuitów) [Wesoła]/Organy', 
          date: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]},

        {coor: [50.0651482, 19.9319217], catg: cat.religion, 
          name: 'Bazylika Nawiedzenia NMP (Karmelitów) na Piasku [Piasek]/Zewnętrze', 
          date: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025], top},
        {coor: [50.0651482, 19.9319217], catg: cat.religion, 
          name: 'Bazylika Nawiedzenia NMP (Karmelitów) na Piasku [Piasek]/Wnętrze', 
          date: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025]},
        {coor: [50.0651482, 19.9319217], catg: cat.religion, 
          name: 'Bazylika Nawiedzenia NMP (Karmelitów) na Piasku [Piasek]/Organy', 
          date: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025]},

        {coor: [50.0675457, 19.9432674], catg: cat.religion, 
          name: 'Bazylika św. Floriana [Kleparz]/Zewnętrze', 
          date: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025], top},
        {coor: [50.0675457, 19.9432674], catg: cat.religion, 
          name: 'Bazylika św. Floriana [Kleparz]/Wnętrze', 
          date: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025]},
        {coor: [50.0675457, 19.9432674], catg: cat.religion,
           name: 'Bazylika św. Floriana [Kleparz]/Organy', 
           date: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025]},

        {coor: [50.0592224, 19.9360898], catg: cat.religion, 
          name: 'Bazylika św. Franciszka z Asyżu (Franciszkanów) [Stare Miasto]/Zewnętrze', 
          date: [2018, 2022, 2023, 2024, 2025], top},
        {coor: [50.0592224, 19.9360898], catg: cat.religion, 
          name: 'Bazylika św. Franciszka z Asyżu (Franciszkanów) [Stare Miasto]/Wnętrze', 
          date: [2018, 2022, 2023, 2024, 2025]},
        {coor: [50.0592224, 19.9360898], catg: cat.religion, 
          name: 'Bazylika św. Franciszka z Asyżu (Franciszkanów) [Stare Miasto]/Organy', 
          date: [2018, 2022, 2023, 2024, 2025]},      

        {coor: [50.0546555, 19.9354514], catg: cat.religion, 
          name: 'Bazylika św. Stanisława i św. Wacława (Wawel) [Stare Miasto]/Zewnętrze', 
          date: [2018, 2020, 2021, 2023], top},

        {coor: [50.0592982, 19.9394265], catg: cat.religion, 
          name: 'Bazylika Świętej Trójcy (Dominikanów) [Stare Miasto]/Zewnętrze', 
          date: [2017, 2018, 2021, 2023], top},
        {coor: [50.0592982, 19.9394265], catg: cat.religion, 
          name: 'Bazylika Świętej Trójcy (Dominikanów) [Stare Miasto]/Wnętrze', 
          date: [2017, 2018, 2021, 2023]},
        {coor: [50.0592982, 19.9394265], catg: cat.religion, 
          name: 'Bazylika Świętej Trójcy (Dominikanów) [Stare Miasto]/Organy', 
          date: [2017, 2018, 2021, 2023]},

        {coor: [50.0616606, 19.9394506], catg: cat.religion, 
          name: 'Bazylika Wniebowzięcia NMP (Mariacka) [Stare Miasto]/Zewnętrze', 
          date: [2014, 2015, 2016, 2017, 2020, 2021, 2022, 2023, 2024, 2025], top},
        {coor: [50.0616606, 19.9394506], catg: cat.religion, 
          name: 'Bazylika Wniebowzięcia NMP (Mariacka) [Stare Miasto]/Wnętrze', 
          date: [2014, 2015, 2016, 2017, 2020, 2021, 2022, 2023, 2024, 2025]},
        {coor: [50.0616606, 19.9394506], catg: cat.religion, 
          name: 'Bazylika Wniebowzięcia NMP (Mariacka) [Stare Miasto]/Organy', 
          date: [2014, 2015, 2016, 2017, 2020, 2021, 2022, 2023, 2024, 2025]},

        {coor: [50.0949545, 19.9042198], catg: cat.religion, 
          name: 'Kościół Chrystusa Odkupiciela (Redemptorystów) [Tonie]/Zewnętrze', date: [2020], top},
        {coor: [50.0949545, 19.9042198], catg: cat.religion, 
          name: 'Kościół Chrystusa Odkupiciela (Redemptorystów) [Tonie]/Wnętrze', date: [2020]},
        {coor: [50.0949545, 19.9042198], catg: cat.religion, 
          name: 'Kościół Chrystusa Odkupiciela (Redemptorystów) [Tonie]/Organy', date: [2020]},

        {coor: [50.0755594, 20.0454086], catg: cat.religion, 
          name: 'Kościół MB Częstochowskiej (Cystersów) [Szklane Domy]/Zewnętrze', date: [2015], top},
        {coor: [50.0755594, 20.0454086], catg: cat.religion, 
          name: 'Kościół MB Częstochowskiej (Cystersów) [Szklane Domy]/Wnętrze', date: [2015]},
        {coor: [50.0755594, 20.0454086], catg: cat.religion, 
          name: 'Kościół MB Częstochowskiej (Cystersów) [Szklane Domy]/Organy', date: [2015]},

        {coor: [50.0849916, 20.0293207], catg: cat.religion, 
          name: 'Kościół MB Królowej Polski (Arka Pana) [Bieńczyce]/Zewnętrze', date: [2017, 2018, 2020], top},
        {coor: [50.0849916, 20.0293207], catg: cat.religion, 
          name: 'Kościół MB Królowej Polski (Arka Pana) [Bieńczyce]/Wnętrze', date: [2017, 2018, 2020]},
        {coor: [50.0849916, 20.0293207], catg: cat.religion, 
          name: 'Kościół MB Królowej Polski (Arka Pana) [Bieńczyce]/Organy', date: [2017, 2018, 2020]},

        {coor: [50.0637940, 19.8621279], catg: cat.religion, 
          name: 'Kościół MB Królowej Polski [Wola Justowska]/Zewnętrze', date: [2021], top},

        {coor: [50.0835992, 19.8451817], catg: cat.religion, 
          name: 'Kościół MB Nieustającej Pomocy [Mydlniki]/Zewnętrze', date: [2021], top},
        {coor: [50.0835992, 19.8451817], catg: cat.religion, 
          name: 'Kościół MB Nieustającej Pomocy [Mydlniki]/Wnętrze', date: [2021]},
        {coor: [50.0835992, 19.8451817], catg: cat.religion, 
          name: 'Kościół MB Nieustającej Pomocy [Mydlniki]/Organy', date: [2021]},

        {coor: [50.0748174, 19.9787986], catg: cat.religion, 
          name: 'Kościół MB Ostrobramskiej (Pijarów) [Wieczysta]/Zewnętrze', date: [2019], top},
        {coor: [50.0748174, 19.9787986], catg: cat.religion, 
          name: 'Kościół MB Ostrobramskiej (Pijarów) [Wieczysta]/Wnętrze', date: [2019]},
        {coor: [50.0748174, 19.9787986], catg: cat.religion, 
          name: 'Kościół MB Ostrobramskiej (Pijarów) [Wieczysta]/Organy', date: [2019]},

        {coor: [50.0693362, 19.9611443], catg: cat.religion, 
          name: 'Kościół Miłosierdzia Bożego [Osiedle Oficerskie]/Zewnętrze', date: [2020], top},
        {coor: [50.0693362, 19.9611443], catg: cat.religion, 
          name: 'Kościół Miłosierdzia Bożego [Osiedle Oficerskie]/Wnętrze', date: [2020]},
        {coor: [50.0693362, 19.9611443], catg: cat.religion, 
          name: 'Kościół Miłosierdzia Bożego [Osiedle Oficerskie]/Organy', date: [2020]},

        {coor: [50.0836440, 19.9756122], catg: cat.religion, 
          name: 'Kościół Najświętszego Imienia Maryji (Pijarów) [Rakowice]/Zewnętrze', date: [2023], top},
        {coor: [50.0836440, 19.9756122], catg: cat.religion, 
          name: 'Kościół Najświętszego Imienia Maryji (Pijarów) [Rakowice]/Wnętrze', date: [2023]},
        {coor: [50.0836440, 19.9756122], catg: cat.religion, 
          name: 'Kościół Najświętszego Imienia Maryji (Pijarów) [Rakowice]/Organy', date: [2023]},

        {coor: [50.0154852, 20.0184953], catg: cat.religion, 
          name: 'Kościół Najświętszej Rodziny [Bieżanów]/Zewnętrze', date: [2021], top},

        {coor: [50.0869880, 19.9104989], catg: cat.religion, 
          name: 'Kościół Niepokalanego Poczęcia NMP (Franciszkanów) [Azory]/Zewnętrze', date: [2020], top},
        {coor: [50.0869880, 19.9104989], catg: cat.religion, 
          name: 'Kościół Niepokalanego Poczęcia NMP (Franciszkanów) [Azory]/Wnętrze', date: [2020]},
        {coor: [50.0869880, 19.9104989], catg: cat.religion, 
          name: 'Kościół Niepokalanego Poczęcia NMP (Franciszkanów) [Azory]/Organy', date: [2020]},

        {coor: [50.0685545, 19.9523467], catg: cat.religion, 
          name: 'Kościół Niepokalanego Poczęcia NMP (Karmelitów Bosych) [Warszawskie]/Zewnętrze', date: [2019], top},
        {coor: [50.0685545, 19.9523467], catg: cat.religion, 
          name: 'Kościół Niepokalanego Poczęcia NMP (Karmelitów Bosych) [Warszawskie]/Wnętrze', date: [2019]},
        {coor: [50.0685545, 19.9523467], catg: cat.religion, 
          name: 'Kościół Niepokalanego Poczęcia NMP (Karmelitów Bosych) [Warszawskie]/Organy', date: [2019]},

        {coor: [50.0968773, 19.9323052], catg: cat.religion, 
          name: 'Kościół NMP Matki Kościoła [Prądnik Biały]/Zewnętrze', date: [2020], top},
        {coor: [50.0968773, 19.9323052], catg: cat.religion, 
          name: 'Kościół NMP Matki Kościoła [Prądnik Biały]/Wnętrze', date: [2020]},
        {coor: [50.0968773, 19.9323052], catg: cat.religion, 
          name: 'Kościół NMP Matki Kościoła [Prądnik Biały]/Organy', date: [2020]},

        {coor: [50.0114313, 19.9611390], catg: cat.religion, 
          name: 'Kościół Podwyższenia Krzyża Świętego [Kurdwanów]/Zewnętrze', date: [2020], top},
        {coor: [50.0114313, 19.9611390], catg: cat.religion, 
          name: 'Kościół Podwyższenia Krzyża Świętego [Kurdwanów]/Wnętrze', date: [2020]},
        {coor: [50.0114313, 19.9611390], catg: cat.religion, 
          name: 'Kościół Podwyższenia Krzyża Świętego [Kurdwanów]/Organy', date: [2020]},

        {coor: [50.0649433, 19.9398878], catg: cat.religion, 
          name: 'Kościół Przemienienia Pańskiego (Pijarów) [Stare Miasto]/Zewnętrze', date: [2016, 2021], top},
        {coor: [50.0649433, 19.9398878], catg: cat.religion, 
          name: 'Kościół Przemienienia Pańskiego (Pijarów) [Stare Miasto]/Wnętrze', date: [2016, 2021]},
        {coor: [50.0649433, 19.9398878], catg: cat.religion, 
          name: 'Kościół Przemienienia Pańskiego (Pijarów) [Stare Miasto]/Organy', date: [2016, 2021]},

        {coor: [50.0512697, 19.9397135], catg: cat.religion, 
          name: 'Kościół św. Agnieszki [Stradom]/Zewnętrze', date: [2018], top},
        {coor: [50.0512697, 19.9397135], catg: cat.religion, 
          name: 'Kościół św. Agnieszki [Stradom]/Wnętrze', date: [2018]},
        {coor: [50.0512697, 19.9397135], catg: cat.religion, 
          name: 'Kościół św. Agnieszki [Stradom]/Organy', date: [2018]},

        {coor: [50.0623993, 19.9335618], catg: cat.religion, 
          name: 'Kościół św. Anny [Stare Miasto]/Zewnętrze', 
          date: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024], top},
        {coor: [50.0623993, 19.9335618], catg: cat.religion, 
          name: 'Kościół św. Anny [Stare Miasto]/Wnętrze', 
          date: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]},
        {coor: [50.0623993, 19.9335618], catg: cat.religion, 
          name: 'Kościół św. Anny [Stare Miasto]/Organy', 
          date: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]},

        {coor: [50.0871953, 19.8744030], catg: cat.religion, 
          name: 'Kościół św. Antoniego Padewskiego [Bronowice]/Zewnętrze', date: [2022], top},
        {coor: [50.0871953, 19.8744030], catg: cat.religion, 
          name: 'Kościół św. Antoniego Padewskiego [Bronowice]/Wnętrze', date: [2022]},
        {coor: [50.0871953, 19.8744030], catg: cat.religion, 
          name: 'Kościół św. Antoniego Padewskiego [Bronowice]/Organy', date: [2022]},

        {coor: [50.0656707, 20.0517601], catg: cat.religion, 
          name: 'Kościół św. Bartłomieja (Cystersów) [Mogiła]/Zewnętrze', date: [2023], top},

        {coor: [50.0916705, 19.8809355], catg: cat.religion, 
          name: 'Kościół św. Franciszka z Asyżu (Reformatów) [Bronowice]/Zewnętrze', date: [2021], top},
        {coor: [50.0916705, 19.8809355], catg: cat.religion, 
          name: 'Kościół św. Franciszka z Asyżu (Reformatów) [Bronowice]/Wnętrze', date: [2021]},
        {coor: [50.0916705, 19.8809355], catg: cat.religion, 
          name: 'Kościół św. Franciszka z Asyżu (Reformatów) [Bronowice]/Organy', date: [2021]},

        {coor: [50.0551859, 19.9381498], catg: cat.religion, 
          name: 'Kościół św. Idziego (Dominikanów) [Stare Miasto]/Zewnętrze', date: [2021], top},
        {coor: [50.0551859, 19.9381498], catg: cat.religion, 
          name: 'Kościół św. Idziego (Dominikanów) [Stare Miasto]/Wnętrze', date: [2021]},
        {coor: [50.0551859, 19.9381498], catg: cat.religion, 
          name: 'Kościół św. Idziego (Dominikanów) [Stare Miasto]/Organy', date: [2021]},

        {coor: [50.0840261, 19.9227378], catg: cat.religion, 
          name: 'Kościół św. Jadwigi Królowej [Krowodrza]/Zewnętrze', date: [2020, 2021], top},
        {coor: [50.0840261, 19.9227378], catg: cat.religion, 
          name: 'Kościół św. Jadwigi Królowej [Krowodrza]/Wnętrze', date: [2020, 2021]},
        {coor: [50.0840261, 19.9227378], catg: cat.religion, 
          name: 'Kościół św. Jadwigi Królowej [Krowodrza]/Organy', date: [2020, 2021]},

        {coor: [50.0809470, 20.0560302], catg: cat.religion, 
          name: 'Kościół św. Jana Chrzciciela [Krzesławice]/Zewnętrze', date: [2023], top},

        {coor: [50.0631406, 19.9389464], catg: cat.religion, 
          name: 'Kościół św. Jana Ewangelisty (Prezentek) [Stare Miasto]/Zewnętrze', date: [2021], top},
        {coor: [50.0631406, 19.9389464], catg: cat.religion, 
          name: 'Kościół św. Jana Ewangelisty (Prezentek) [Stare Miasto]/Wnętrze', date: [2021]},
        {coor: [50.0631406, 19.9389464], catg: cat.religion, 
          name: 'Kościół św. Jana Ewangelisty (Prezentek) [Stare Miasto]/Organy', date: [2021]},

        {coor: [50.0801053, 19.8887005], catg: cat.religion, 
          name: 'Kościół św. Jana Kantego [Bronowice]/Zewnętrze', 
          date: [2015, 2017, 2018, 2019, 2020, 2021, 2022], top},
        {coor: [50.0801053, 19.8887005], catg: cat.religion, 
          name: 'Kościół św. Jana Kantego [Bronowice]/Wnętrze', 
          date: [2015, 2017, 2018, 2019, 2020, 2021, 2022]},
        {coor: [50.0801053, 19.8887005], catg: cat.religion, 
          name: 'Kościół św. Jana Kantego [Bronowice]/Organy', 
          date: [2015, 2017, 2018, 2019, 2020, 2021, 2022]},

        {coor: [50.0131360, 19.9364009], catg: cat.religion, 
          name: 'Kościół św. Jana Pawła II [Łagiewniki]/Zewnętrze', date: [2017, 2021, 2022], top},
        {coor: [50.0131360, 19.9364009], catg: cat.religion, 
          name: 'Kościół św. Jana Pawła II [Łagiewniki]/Wnętrze', date: [2017, 2021, 2022]},
        {coor: [50.0131360, 19.9364009], catg: cat.religion, 
          name: 'Kościół św. Jana Pawła II [Łagiewniki]/Organy', date: [2017, 2021, 2022]},

        {coor: [50.0892923, 20.0132006], catg: cat.religion, 
          name: 'Kościół św. Józefa [Bieńczyce]/Zewnętrze', date: [2019], top},
        {coor: [50.0892923, 20.0132006], catg: cat.religion, 
          name: 'Kościół św. Józefa [Bieńczyce]/Wnętrze', date: [2019]},
        {coor: [50.0892923, 20.0132006], catg: cat.religion, 
          name: 'Kościół św. Józefa [Bieńczyce]/Organy', date: [2019]},

        {coor: [50.0873631, 19.9459201], catg: cat.religion, 
          name: 'Kościół św. Karola Boromeusza [Żabiniec]/Zewnętrze', date: [2021], top},
        {coor: [50.0873631, 19.9459201], catg: cat.religion, 
          name: 'Kościół św. Karola Boromeusza [Żabiniec]/Wnętrze', date: [2021]},
        {coor: [50.0873631, 19.9459201], catg: cat.religion, 
          name: 'Kościół św. Karola Boromeusza [Żabiniec]/Organy', date: [2021]},

        {coor: [50.0648736, 19.9362320], catg: cat.religion, 
          name: 'Kościół św. Kazimierza Królewicza (Reformatów) [Stare Miasto]/Zewnętrze', date: [2020], top},
        {coor: [50.0648736, 19.9362320], catg: cat.religion, 
          name: 'Kościół św. Kazimierza Królewicza (Reformatów) [Stare Miasto]/Wnętrze', date: [2020]},

        {coor: [50.0185392, 19.9941355], catg: cat.religion, 
          name: 'Kościół św. Mikołaja z Tolentino (Augustianów) [Bieżanów]/Zewnętrze', date: [2021], top},
        {coor: [50.0185392, 19.9941355], catg: cat.religion, 
          name: 'Kościół św. Mikołaja z Tolentino (Augustianów) [Bieżanów]/Wnętrze', date: [2021]},

        {coor: [50.0569304, 19.9390644], catg: cat.religion, 
          name: 'Kościół św. Piotra i Pawła [Stare Miasto]/Zewnętrze', date: [2019, 2020, 2021], top},
        {coor: [50.0569304, 19.9390644], catg: cat.religion, 
          name: 'Kościół św. Piotra i Pawła [Stare Miasto]/Wnętrze', date: [2019, 2020, 2021]},
        {coor: [50.0569304, 19.9390644], catg: cat.religion, 
          name: 'Kościół św. Piotra i Pawła [Stare Miasto]/Organy', date: [2019, 2020, 2021]},

        {coor: [50.0191200, 19.8023710], catg: cat.religion, 
          name: 'Kościół św. Piotra i Pawła (Benedyktynów) [Tyniec]/Zewnętrze', date: [2014], top},
        {coor: [50.0191200, 19.8023710], catg: cat.religion, 
          name: 'Kościół św. Piotra i Pawła (Benedyktynów) [Tyniec]/Wnętrze', date: [2014]},
        {coor: [50.0191200, 19.8023710], catg: cat.religion, 
          name: 'Kościół św. Piotra i Pawła (Benedyktynów) [Tyniec]/Organy', date: [2014]},

        {coor: [50.0606292, 19.9834925], catg: cat.religion, 
          name: 'Kościół św. Stanisława Biskupa [Dąbie]/Zewnętrze', date: [2016, 2019], top},
        {coor: [50.0606292, 19.9834925], catg: cat.religion, 
          name: 'Kościół św. Stanisława Biskupa [Dąbie]/Wnętrze', date: [2016, 2019]},
        {coor: [50.0606292, 19.9834925], catg: cat.religion, 
          name: 'Kościół św. Stanisława Biskupa [Dąbie]/Organy', date: [2016, 2019]},

        {coor: [50.0716327, 19.9271339], catg: cat.religion, 
          name: 'Kościół św. Szczepana [Nowa Wieś]/Zewnętrze', 
          date: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024], top},
        {coor: [50.0716327, 19.9271339], catg: cat.religion, 
          name: 'Kościół św. Szczepana [Nowa Wieś]/Wnętrze', 
          date: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]},
        {coor: [50.0716327, 19.9271339], catg: cat.religion, 
          name: 'Kościół św. Szczepana [Nowa Wieś]/Organy', 
          date: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]},

        {coor: [50.0681947, 19.9414301], catg: cat.religion, 
          name: 'Kościół św. Wincentego a Paulo (Misjonarzy) [Kleparz]/Zewnętrze', 
          date: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025], top},
        {coor: [50.0681947, 19.9414301], catg: cat.religion, 
          name: 'Kościół św. Wincentego a Paulo (Misjonarzy) [Kleparz]/Wnętrze', 
          date: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025]},
        {coor: [50.0681947, 19.9414301], catg: cat.religion, 
          name: 'Kościół św. Wincentego a Paulo (Misjonarzy) [Kleparz]/Ołtarz', 
          date: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025]},

        {coor: [50.0608927, 19.9377394], catg: cat.religion, 
          name: 'Kościół św. Wojciecha [Stare Miasto]/Zewnętrze', date: [2022], top},
        {coor: [50.0608927, 19.9377394], catg: cat.religion, 
          name: 'Kościół św. Wojciecha [Stare Miasto]/Wnętrze', date: [2022]},
        {coor: [50.0608927, 19.9377394], catg: cat.religion, 
          name: 'Kościół św. Wojciecha [Stare Miasto]/Organy', date: [2022]},

        {coor: [50.0278530, 19.9164500], catg: cat.religion, 
          name: 'Kościół Zesłania Ducha Świętego [Ruczaj]/Zewnętrze', date: [2021], top},
        {coor: [50.0278530, 19.9164500], catg: cat.religion, 
          name: 'Kościół Zesłania Ducha Świętego [Ruczaj]/Wnętrze', date: [2021]},
        {coor: [50.0278530, 19.9164500], catg: cat.religion, 
          name: 'Kościół Zesłania Ducha Świętego [Ruczaj]/Organy', date: [2021]},

        {coor: [50.0665815, 19.9339575], catg: cat.religion, 
          name: 'Kościół Zmartwychwstania Pańskiego (Zmartwychwstańców) [Piasek]/Zewnętrze', date: [2021, 2022, 2023, 2024, 2025], top},
        {coor: [50.0665815, 19.9339575], catg: cat.religion, 
          name: 'Kościół Zmartwychwstania Pańskiego (Zmartwychwstańców) [Piasek]/Wnętrze', date: [2021, 2022, 2023, 2024, 2025]},
        {coor: [50.0665815, 19.9339575], catg: cat.religion, 
          name: 'Kościół Zmartwychwstania Pańskiego (Zmartwychwstańców) [Piasek]/Organy', date: [2021, 2022, 2023, 2024, 2025]},

        {coor: [50.0619697, 19.9299502], catg: cat.religion, 
          name: 'Kościół Zwiastowania NMP (Kapucynów) [Piasek]/Zewnętrze', date: [2023], top},
        {coor: [50.0619697, 19.9299502], catg: cat.religion, 
          name: 'Kościół Zwiastowania NMP (Kapucynów) [Piasek]/Wnętrze', date: [2023]},
        {coor: [50.0619697, 19.9299502], catg: cat.religion, 
          name: 'Kościół Zwiastowania NMP (Kapucynów) [Piasek]/Organy', date: [2023]},

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
        {coor: [49.4400872,19.8529923], zoom: 15, date: [2023], abbr: "KNTC", gallery: []},
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
      // @func Myślenice
      "Myślenice" :
        {abbr: "KMY", coor: [49.8347232,19.9387157], zoom: 15, date: [2022], gallery: [
          {coor: [49.8346100,19.9381900], catg: cat.history, name: 'Rynek'},
          {coor: [49.8348547,19.9368703], catg: cat.history, name: 'Gimnazjum'},
          {coor: [49.8341869,19.9365056], catg: cat.religion, name: 'Kościół Narodzenia NMP 1', top},
          {coor: [49.8341869,19.9365056], catg: cat.religion, name: 'Kościół Narodzenia NMP 2'},
          {coor: [49.8341869,19.9365056], catg: cat.religion, name: 'Kościół Narodzenia NMP 3'},
          {coor: [49.8287336,19.9405289], catg: cat.religion, name: 'Kościółek św. Jakuba 1', top},
          {coor: [49.8287336,19.9405289], catg: cat.religion, name: 'Kościółek św. Jakuba 2'},
          {coor: [49.8287336,19.9405289], catg: cat.religion, name: 'Kościółek św. Jakuba 3'},
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
        {coor: [49.9750513,19.8264384], zoom: 15, date: [2023], abbr: "KRAW", gallery: []},
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
        {coor: [49.9837548,20.0594312], zoom: 15, date: [2019], abbr: "KWI", gallery: []},
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
        {coor: [50.1328316,20.8854389], zoom: 15, date: [2021], abbr: "KTAB", gallery: []},
    },

    // @sub Mazowieckie
    "Mazowieckie": {
      coor: [52.2497795,21.0121733], 
      zoom: 9,
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

    // @sub Opolskie
    "Opolskie": {
      coor: [50.4880948,17.6213837], 
      zoom: 11,
      "OPOLE" :
        {coor: [50.6660257,17.9242533], zoom: 13, date: [2020], abbr: "OP", gallery: []},
      "KĘDZIERZYN-KOŹLE" :
        {coor: [50.3450017,18.2110673], zoom: 14, date: [2022], abbr: "OK", gallery: []},
      "Nysa" :
        {coor: [50.4724537,17.3326707], zoom: 14, date: [2023], abbr: "ONY", gallery: []},
      "Otmuchów" :
        {coor: [50.4649180,17.1730363], zoom: 15, date: [2023], abbr: "ONYO", gallery: []},
      "Paczków" :
        {coor: [50.4640233,17.0053071], zoom: 15, date: [2023], abbr: "ONYP", gallery: []},
      "Prudnik" :
        {coor: [50.3216656,17.5810486], zoom: 14, date: [2023], abbr: "OPR", gallery: []},
    },

    // @sub Podkarpackie
    "Podkarpackie": {
      coor: [50.0375793,22.0040649], 
      zoom: 10,
      "RZESZÓW" :
        {coor: [50.0375793,22.0040649], zoom: 13, date: [2022], abbr: "RZ", gallery: []},
      "DĘBICA" :
        {coor: [50.0582719,21.4080673], zoom: 14, date: [2022], abbr: "RDE", gallery: []},
      "Jasło" :
        {coor: [49.7520239,21.4828205], zoom: 14, date: [2022], abbr: "RJS", gallery: []},
      "KROSNO" :
        {coor: [49.6939069,21.7648119], zoom: 14, date: [2017], abbr: "RK", gallery: []},
      "MIELEC" :
        {coor: [50.2859803,21.4200246], zoom: 14, date: [2021], abbr: "RMI", gallery: []},
      "PRZEMYŚL" :
        {coor: [49.7821889,22.7688861], zoom: 14, date: [2022], abbr: "RP", gallery: []},
      "Sanok" :
        {coor: [49.5610088,22.2064054], zoom: 14, date: [2017], abbr: "RSA", gallery: []},
      "STALOWA WOLA" :
        {coor: [50.5688536,22.0662063], zoom: 14, date: [2022], abbr: "RST", gallery: []},
      "TARNOBRZEG" :
        {coor: [50.5741038,21.6720182], zoom: 14, date: [2021], abbr: "RT", gallery: []},
    },

    // @sub Podlaskie
    "Podlaskie": {
      coor: [53.6047293,22.7691650], 
      zoom: 10,
      "BIAŁYSTOK" : 
        {coor: [53.1300623,23.1638896], zoom: 13, date: [2022], abbr: "BI", gallery: []},
      "SUWAŁKI" : 
        {coor: [54.1014008,22.9269058], zoom: 14, date: [2022], abbr: "BS", gallery: []},
      "ŁOMŻA" : 
        {coor: [53.1687460,22.0727456], zoom: 14, date: [2021], abbr: "BL", gallery: []},
    },

    // @sub Pomorskie
    "Pomorskie": {
      coor: [54.3829567,17.9585266], 
      zoom: 10,
      "GDAŃSK" :
        {coor: [54.3485434,18.6532134], zoom: 13, date: [2022], abbr: "GD", gallery: []},
      "GDYNIA" :
        {coor: [54.5194002,18.5522604], zoom: 13, date: [2022], abbr: "GA", gallery: []},
      "Hel" :
        {coor: [54.6000139,18.8129067], zoom: 15, date: [2013], abbr: "GPUH", gallery: []},
      "Krynica Morska" :
        {coor: [54.3862181,19.4354796], zoom: 15, date: [2020], abbr: "GNDK", gallery: []},
      "Łeba" :
        {coor: [54.7672013,17.5578475], zoom: 15, date: [2013], abbr: "GLEL", gallery: []},
      "Malbork" :
        {coor: [54.0387152,19.0280414], zoom: 14, date: [2020], abbr: "GMB", gallery: []},
      "RUMIA" :
        {coor: [54.5736880,18.3955497], zoom: 14, date: [2022], abbr: "GWER", gallery: []},
      "SŁUPSK" :
        {coor: [54.4658258,17.0289427], zoom: 14, date: [2017], abbr: "GS", gallery: []},
      "Sopot" :
        {coor: [54.4479354,18.5703492], zoom: 14, date: [2008], abbr: "GSP", gallery: []},
      "STAROGARD GDAŃSKI" :
        {coor: [53.9675450,18.5322189], zoom: 14, date: [2022], abbr: "GST", gallery: []},
      "TCZEW" :
        {coor: [54.0869922,18.7999839], zoom: 14, date: [2022], abbr: "GTC", gallery: []},
      "Ustka" :
        {coor: [54.5889746,16.8595505], zoom: 15, date: [2017], abbr: "GSL", gallery: []},
      "WEJHEROWO" :
        {coor: [54.6017448,18.2392681], zoom: 14, date: [2022], abbr: "GWE", gallery: []},
    },

    // @sub Śląskie
    "Śląskie": {
      coor: [50.2129433,18.9074707], 
      zoom: 10,
      "KATOWICE" :
        {coor: [50.2652318,19.0249407], zoom: 14, date: [2021], abbr: "SK", gallery: []},
      "BĘDZIN" :
        {coor: [50.3270016,19.1287315], zoom: 14, date: [2021], abbr: "SBE", gallery: []},
      "BIELSKO-BIAŁA" :
        {coor: [49.8225182,19.0443277], zoom: 14, date: [2016], abbr: "SB", gallery: []},
      "Bieruń" :
        {coor: [50.0931194,19.0918082], zoom: 14, date: [2021], abbr: "SBL", gallery: []},
      "BYTOM" :
        {coor: [50.3444368,18.9203399], zoom: 14, date: [2021], abbr: "SY", gallery: []},
      "CHORZÓW" :
        {coor: [50.2978795,18.9536744], zoom: 14, date: [2021], abbr: "SH", gallery: []},
      "Cieszyn" :
        {coor: [49.7432300,18.6289233], zoom: 14, date: [2015], abbr: "SCI", gallery: []},
      "Czechowice-Dziedzice" :
        {coor: [49.9111500,19.0076727], zoom: 14, date: [2021], abbr: "SBIC", gallery: []},
      "Czeladź" :
        {coor: [50.3080114,19.0693688], zoom: 14, date: [2021], abbr: "SBEC", gallery: []},
      "CZĘSTOCHOWA" :
        {coor: [50.8123821,19.1296005], zoom: 14, date: [2022], abbr: "SC", gallery: []},
      "DĄBROWA GÓRNICZA" :
        {coor: [50.3256454,19.1873270], zoom: 14, date: [2021], abbr: "SD", gallery: []},
      "GLIWICE" :
        {coor: [50.2940414,18.6660987], zoom: 14, date: [2021], abbr: "SG", gallery: []},
      "Imielin" :
        {coor: [50.1468764,19.1857231], zoom: 15, date: [2024], abbr: "SBLI", gallery: []},
      "JASTRZĘBIE-ZDRÓJ" :
        {coor: [49.9505020,18.5687077], zoom: 14, date: [2022], abbr: "SJZ", gallery: []},
      "JAWORZNO" :
        {coor: [50.2032444,19.2759043], zoom: 14, date: [2021], abbr: "SJ", gallery: []},
      "Koziegłowy" :
        {coor: [50.5977685,19.1615134], zoom: 15, date: [2024], abbr: "SMYK", gallery: []},
      "Lędziny" :
        {coor: [50.1292724,19.1061044], zoom: 15, date: [2024], abbr: "SBLL", gallery: []},
      "Łazy" :
        {coor: [50.4280075,19.3912715], zoom: 15, date: [2024], abbr: "SZAL", gallery: []},
      "Mikołów" :
        {coor: [50.1692639,18.9045310], zoom: 14, date: [2024], abbr: "SMI", gallery: []},
      "MYSŁOWICE" :
        {coor: [50.2411087,19.1411072], zoom: 14, date: [2021], abbr: "SM", gallery: []},
      "Myszków" :
        {coor: [50.5763591,19.3300420], zoom: 14, date: [2024], abbr: "SMY", gallery: []},
      "Ogrodzieniec" :
        {coor: [50.4530093,19.5521021], zoom: 15, date: [2019], abbr: "SZAO", gallery: []},
      "PIEKARY ŚLĄSKIE" :
        {coor: [50.3824455,18.9471138], zoom: 14, date: [2021], abbr: "SPI", gallery: []},
      "Pilica" :
        {coor: [50.4680355,19.6568424], zoom: 15, date: [2019], abbr: "SZAP", gallery: []},
      "Poręba" :
        {coor: [50.4863985,19.3329763], zoom: 15, date: [2024], abbr: "SZAR", gallery: []},
      "Pszczyna" :
        {coor: [49.9785218,18.9404082], zoom: 14, date: [2021], abbr: "SPS", gallery: []},
      "RACIBÓRZ" :
        {coor: [50.0919768,18.2197416], zoom: 14, date: [2022], abbr: "SRC", gallery: []},
      "RUDA ŚLĄSKA" :
        {coor: [50.2855827,18.8746405], zoom: 14, date: [2021], abbr: "SL", gallery: []},
      "RYBNIK" :
        {coor: [50.0978374,18.5485858], zoom: 14, date: [2022], abbr: "SR", gallery: []},
      "SIEMIANOWICE ŚLĄSKIE" :
        {coor: [50.3050581,19.0279341], zoom: 14, date: [2021], abbr: "SI", gallery: []},
      "Siewierz" :
        {coor: [50.4685443,19.2368245], zoom: 15, date: [2024], abbr: "SBEZ", gallery: []},
      "Sławków" :
        {coor: [50.2984724,19.3885839], zoom: 15, date: [2019], abbr: "SBES", gallery: []},
      "SOSNOWIEC" :
        {coor: [50.2779521,19.1272241], zoom: 14, date: [2021], abbr: "SO", gallery: []},
      "Szczekociny" :
        {coor: [50.6262199,19.8176998], zoom: 15, date: [2023], abbr: "SZAS", gallery: []},
      "Szczyrk" :
        {coor: [49.7187048,19.0348703], zoom: 15, date: [2021], abbr: "SBIS", gallery: []},
      "ŚWIĘTOCHŁOWICE" :
        {coor: [50.2882425,18.9249480], zoom: 15, date: [2021], abbr: "SW", gallery: []},
      "TARNOWSKIE GÓRY" :
        {coor: [50.4446677,18.8555592], zoom: 14, date: [2021], abbr: "STA", gallery: []},
      "TYCHY" :
        {coor: [50.1294822,18.9815158], zoom: 14, date: [2021], abbr: "ST", gallery: []},
      "Wisła" :
        {coor: [49.6553216,18.8625705], zoom: 15, date: [2024], abbr: "SCIW", gallery: []},
      "WODZISŁAW ŚLĄSKI" :
        {coor: [50.0027500,18.4629321], zoom: 14, date: [2022], abbr: "SWD", gallery: []},
      "ZABRZE" :
        {coor: [50.3113928,18.7851995], zoom: 14, date: [2021], abbr: "SZ", gallery: []},
      "ZAWIERCIE" :
        {coor: [50.4839205,19.4312739], zoom: 14, date: [2021], abbr: "SZA", gallery: []},
      "Żarki" :
        {coor: [50.6260089,19.3640310], zoom: 15, date: [2024], abbr: "SMYZ", gallery: []},
      "ŻORY" :
        {coor: [50.0439255,18.6991382], zoom: 14, date: [2022], abbr: "SZO", gallery: []},
      "Żywiec" :
        {coor: [49.6888994,19.2032003], zoom: 14, date: [2021], abbr: "SZY", gallery: []},
    },

    // @sub Świętokrzyskie
    "Świętokrzyskie": {
      coor: [50.7025464,20.7435608], 
      zoom: 10,
      "KIELCE" :
        {coor: [50.8725658,20.6235319], zoom: 13, date: [2013], abbr: "TK", gallery: []},
      "Busko-Zdrój" :
        {coor: [50.4577055,20.7202095], zoom: 14, date: [2021], abbr: "TBU", gallery: []},
      "Chęciny" :
        {coor: [50.7990965,20.4620200], zoom: 15, date: [2013], abbr: "TKIC", gallery: []},
      "Chmielnik" :
        {coor: [50.6143281,20.7510281], zoom: 15, date: [2024], abbr: "TKIH", gallery: []},
      "Działoszyce" :
        {coor: [50.3670534,20.3505045], zoom: 15, date: [2023], abbr: "TPID", gallery: []},
      "Jędrzejów" :
        {coor: [50.6538413,20.2850211], zoom: 14, date: [2021], abbr: "TJE", gallery: []},
      "Kazimierza Wielka" :
        {coor: [50.2644225,20.4952526], zoom: 15, date: [2019], abbr: "TKA", gallery: []},
      "Nowy Korczyn" :
        {coor: [50.2978110,20.8111632], zoom: 15, date: [2023], abbr: "TBUK", gallery: []},
      "Oleśnica" :
        {coor: [50.4502358,21.0637361], zoom: 16, date: [2024], abbr: "TSZO", gallery: []},
      "Opatowiec" :
        {coor: [50.2405769,20.7242864], zoom: 15, date: [2023], abbr: "TKAO", gallery: []},
      "OSTROWIEC ŚWIĘTOKRZYSKI" :
        {coor: [50.9400551,21.3875967], zoom: 14, date: [2022], abbr: "TOS", gallery: []},
      "Pacanów" :
        {coor: [50.3997851,21.0405028], zoom: 15, date: [2021], abbr: "TBUP", gallery: []},
      "Pińczów" :
        {coor: [50.5229156,20.5288017], zoom: 15, date: [2021], abbr: "TPI", gallery: []},
      "Sandomierz" :
        {coor: [50.6766976,21.7464280], zoom: 14, date: [2021], abbr: "TSA", gallery: []},
      "Sędziszów" :
        {coor: [50.5732827,20.0699884], zoom: 15, date: [2023], abbr: "TJES", gallery: []},
      "Skalbmierz" :
        {coor: [50.3170176,20.3994656], zoom: 16, date: [2019], abbr: "TKAS", gallery: []},
      "SKARŻYSKO-KAMIENNA" :
        {coor: [51.1144679,20.8667922], zoom: 14, date: [2020], abbr: "TSK", gallery: []},
      "STARACHOWICE" :
        {coor: [51.0410937,21.0843784], zoom: 14, date: [2022], abbr: "TST", gallery: []},
      "Staszów" :
        {coor: [50.5652622,21.1682242], zoom: 15, date: [2024], abbr: "TSZ", gallery: []},
      "Stopnica" :
        {coor: [50.4401240,20.9389865], zoom: 15, date: [2021], abbr: "TBUS", gallery: []},
      "Szydłów" :
        {coor: [50.5898952,21.0014069], zoom: 16, date: [2024], abbr: "TSZS", gallery: []},
      "Wiślica" :
        {coor: [50.3485755,20.6745636], zoom: 15, date: [2023], abbr: "TBUW", gallery: []},
      "Wodzisław" :
        {coor: [50.5211080,20.1902479], zoom: 15, date: [2023], abbr: "TJEW", gallery: []},
    },

    // @sub Warmińskie
    "Warmińskie": {
      coor: [53.7762929,20.4754418], 
      zoom: 10,
      "OLSZTYN" :
        {coor: [53.7762929,20.4754418], zoom: 13, date: [2020], abbr: "NO", gallery: []},
      "ELBLĄG" :
        {coor: [54.1584669,19.3960619], zoom: 14, date: [2020], abbr: "NE", gallery: []},
      "EŁK" :
        {coor: [53.8201719,22.3546243], zoom: 14, date: [2022], abbr: "NEL", gallery: []},
      "Frombork" :
        {coor: [54.3570002,19.6821463], zoom: 15, date: [2020], abbr: "NBRF", gallery: []},
      "Nidzica" :
        {coor: [53.3600669,20.4290289], zoom: 15, date: [2020], abbr: "NNI", gallery: []},
      "Olsztynek" :
        {coor: [53.5825985,20.2825052], zoom: 15, date: [2020], abbr: "NOLO", gallery: []},
      "Orneta" :
        {coor: [54.1157604,20.1300699], zoom: 15, date: [2020], abbr: "NLIO", gallery: []},
    },

    // @sub Wielkopolskie
    "Wielkopolskie": {
      coor: [52.1115657,17.3323059], 
      zoom: 10,
      "POZNAŃ" :
        {coor: [52.4077697,16.9342929], zoom: 13, date: [2020], abbr: "PO", gallery: []},
      "GNIEZNO" :
        {coor: [52.5371181,17.5909299], zoom: 14, date: [2020], abbr: "PGN", gallery: []},
      "KALISZ" :
        {coor: [51.7622192,18.0895740], zoom: 14, date: [2020], abbr: "PK", gallery: []},
      "KONIN" :
        {coor: [52.2104074,18.2545459], zoom: 14, date: [2020], abbr: "PN", gallery: []},
      "LESZNO" : 
        {coor: [51.8429600,16.5749574], zoom: 14, date: [2020], abbr: "PL", gallery: []},
      "OSTRÓW WIELKOPOLSKI" :
        {coor: [51.6493117,17.8166431], zoom: 14, date: [2022], abbr: "POS", gallery: []},
      "PIŁA" :
        {coor: [53.1465290,16.7427456], zoom: 14, date: [2021], abbr: "PP", gallery: []},
    },

    // @sub Zachodniopomorskie
    "Zachodniopomorskie": {
      coor: [53.8079497,15.3080750], 
      zoom: 10,
      "SZCZECIN" :
        {coor: [53.4254310,14.5471483], zoom: 13, date: [2016], abbr: "ZS", gallery: []},
      "KOŁOBRZEG" :
        {coor: [54.1783674,15.5731523], zoom: 14, date: [2014], abbr: "ZKL", gallery: []},
      "KOSZALIN" :
        {coor: [54.1909019,16.1866808], zoom: 14, date: [2018], abbr: "ZK", gallery: []},
      "Mielno" :
        {coor: [54.2662360,16.0700101], zoom: 15, date: [2018], abbr: "ZKOM", gallery: []},
      "Międzyzdroje" :
        {coor: [53.9404013,14.4639194], zoom: 15, date: [2016], abbr: "ZKAM", gallery: []},
      "STARGARD" :
        {coor: [53.3371836,15.0471604], zoom: 14, date: [2022], abbr: "ZST", gallery: []},
      "Świnoujście" :
        {coor: [53.9190092,14.2469180], zoom: 14, date: [2016], abbr: "ZSW", gallery: []},
    }           
  },
  // @sup EUROPA
  [ranges.world]: {

    // @sub Austria
    "Austria" : {
      coor: [47.6912769,13.2000732], 
      zoom: 8, 
      "Wiedeń" : 
        {coor: [48.1991634,16.3716245], zoom: 13, date: [2019], gallery: [
          // {coor: [0,0], catg: cat.nature, name: 'Nazwa', date: [2025]}
        ]},
    },
    
    // @sub Hiszpania
    "Hiszpania": {
      coor: [40.4134960,-3.7133789], 
      zoom: 7, 
      "Barcelona" : 
      {coor: [41.3707783,2.1699607], zoom: 13, date: [2019], gallery: [
        {coor: [41.3796303, 2.1796837], catg: cat.religion, name: 'Bazylika La Merce', date: [2019]},
        {coor: [41.3837841, 2.1820065], catg: cat.religion, name: 'Bazylika NMP Morza', date: [2019]},
        {coor: [41.3916745, 2.1649490], catg: cat.history, name: 'Casa Batllo', date: [2019]},
        {coor: [41.3951927, 2.1617840], catg: cat.history, name: 'Casa Mila', date: [2019]},
        {coor: [41.3811035, 2.1709612], catg: cat.culture, name: 'Escuela Massana', date: [2019]},
        {coor: [41.3842671, 2.1761566], catg: cat.religion, name: 'Katedra św. Eulalii 1', date: [2019]},
        {coor: [41.3838385, 2.1770149], catg: cat.religion, name: 'Katedra św. Eulalii 2', date: [2019]},
        {coor: [41.3836754, 2.1767923], catg: cat.religion, name: 'Katedra św. Eulalii 3', date: [2019]},
        {coor: [41.3820252, 2.1722916], catg: cat.history, name: 'La Boqueria', date: [2019]},
        {coor: [41.3844442, 2.1707815], catg: cat.history, name: 'La Rambla 1', date: [2019]},
        {coor: [41.3770662, 2.1765482], catg: cat.history, name: 'La Rambla 2', date: [2019]},
        {coor: [41.3832765, 2.1764436], catg: cat.history, name: 'Most Biskupi', date: [2019]},
        {coor: [41.3712695, 2.1513033], catg: cat.culture, name: 'Muzeum MNAC', date: [2019]},
        {coor: [41.3708790, 2.1704650], catg: cat.general, name: 'Panorama 1', date: [2019]},
        {coor: [41.3708729, 2.1703362], catg: cat.general, name: 'Panorama 2', date: [2019]},
        {coor: [41.3708548, 2.1702102], catg: cat.general, name: 'Panorama 3', date: [2019]},
        {coor: [41.3708367, 2.1700788], catg: cat.general, name: 'Panorama 4', date: [2019]},
        {coor: [41.3740310, 2.1497905], catg: cat.general, name: 'Plac Hiszpański', date: [2019]},
        {coor: [41.3754480, 2.1802014], catg: cat.general, name: 'Port Vell', date: [2019]},
        {coor: [41.4040464, 2.1747029], catg: cat.religion, name: 'Sagrada Familia 1', date: [2019]},
        {coor: [41.4029520, 2.1741557], catg: cat.religion, name: 'Sagrada Familia 2', date: [2019]},
        {coor: [41.4034630, 2.1750569], catg: cat.religion, name: 'Sagrada Familia 3', date: [2019]},
        {coor: [41.4035957, 2.1743488], catg: cat.religion, name: 'Sagrada Familia 4', date: [2019]},
        {coor: [41.3657862, 2.1556699], catg: cat.general, name: 'Stadion Olimpijski', date: [2019]},
      ]},
      "Walencja" : 
      {coor: [39.4589143,-0.3568089], zoom: 13, date: [2019], gallery: []},
    },
    // // @sub Nazwa
    // "Nazwa" : {
    //   coor: [0,0], 
    //   zoom: 10, 
    //   "Nazwa" : 
    //     {coor: [0,0], zoom: 15, date: [2025], gallery: []},
    // },
  },
}