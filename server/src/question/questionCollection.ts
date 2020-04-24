export interface IQuestion {
  Id: number;
  question: string;
  optionList: string[];
  answer: number
};

export class QuestionCollection {

    get (): IQuestion[] {
        let questionList  = [
           {
            Id: 1,
            question: 'Largest continent. ',
            optionList: [ 'Asia', 'Africa', 'America', 'Australia' ],
            answer: 1
          },
           {
            Id: 2,
            question: 'Largest ocean. ',
            optionList: [ 'Pacific', 'Atlantic', 'Arctic', 'Indian' ],
            answer: 1
          },
           {
            Id: 3,
            question: 'Largest river.',
            optionList: [ 'Amazon', 'Nile', 'Ganga', 'Saraswathi' ],
            answer: 1
          },
           {
            Id: 4,
            question: 'Largest river basin.',
            optionList: [ 'Amazon', 'Gulf of Mexico', 'Hudson Bay', 'Congo river' ],
            answer: 1
          },
           {
            Id: 5,
            question: 'Largest lake (salt water).',
            optionList: [ 'Caspian sea', 'Superior', 'Victoria', 'Huron' ],
            answer: 1
          },
           {
            Id: 6,
            question: 'Largest lake (fresh water).',
            optionList: [
              'Lake Superior (North America)',
              'Lake Victoria',
              'Lake huron',
              'Lake Michigan'
            ],
            answer: 1
          },
           {
            Id: 7,
            question: 'Largest artificial Lake.',
            optionList: [
              'Lake Kariba',
              'Bratsk Reservoir',
              'Lake Volta',
              'Manicouagan Reservoir'
            ],
            answer: 1
          },
           {
            Id: 8,
            question: 'Largest bay.',
            optionList: [
              'Hudson Bay (North Canada)',
              'Bay of Bengal',
              'Lituya Bay',
              'Tampa Bay'
            ],
            answer: 1
          },
           {
            Id: 9,
            question: 'Largest gulf.',
            optionList: [
              'Gulf of Mexico',
              'Gulf of Guinea',
              'Gulf of Alaska',
              'Persian Gulf'
            ],
            answer: 1
          },
           {
            Id: 10,
            question: 'Largest gorge.',
            optionList: [
              'Grand Canyon (USA)',
              'Capertee valley',
              'KaliGandaki Gorge',
              'Fish river Canyon'
            ],
            answer: 1
          },
           {
            Id: 11,
            question: 'Largest delta.',
            optionList: [
              'Ganges Brahmaputra (India & Bangladesh)',
              'Mekong',
              'Lena',
              'Huang He',
              'Largest peninsula',
              'Arabian',
              'Deccan',
              'Indochina',
              'Horn of Africa'
            ],
            answer: 1
          },
           {
            Id: 12,
            question: 'Largest island.',
            optionList: [ 'Greenland', 'New Guinea', 'Borneo', 'Madagascar' ],
            answer: 1
          },
           {
            Id: 13,
            question: 'Largest country (in area).',
            optionList: [ 'Russia', 'Canada', 'United States', 'China' ],
            answer: 1
          },
           {
            Id: 14,
            question: 'Largest country (in population).',
            optionList: [ 'China', 'India', 'United States', 'Indonesia' ],
            answer: 1
          },
           {
            Id: 15,
            question: 'Largest temple.',
            optionList: [
              'Angkorwat (Cambodia)',
              'Sri Ranganathasvamy Temple',
              'Akshardham',
              'Ramakrishna Temple'
            ],
            answer: 1
          },
           {
            Id: 16,
            question: 'Largest airport.',
            optionList: [
              'Hartsfield Jackson Atlanta International Airport',
              'Beijing Capital International Airport',
              'Los Angeles International Airport',
              'Tokyo Haneda Airport'
            ],
            answer: 1
          },
           {
            Id: 17,
            question: 'Largest church.',
            optionList: [
              "St.Peter's Basilica, (Rome)",
              'Basilica of the National Shrine of Our Lady of Aparecida',
              'Basilica of the National Shrine of the Immaculate Conception',
              'Seville Cathedral'
            ],
            answer: 1
          },
           {
            Id: 18,
            question: 'Largest mosque.',
            optionList: [
              'Great Mosque of Mecca',
              'Al-Masjid an-Nabawi',
              'Imam Ali Mosque',
              'Grand Jamiya Mosque'
            ],
            answer: 1
          },
           {
            Id: 19,
            question: 'Largest embassy.',
            optionList: [ 'China', 'United States', 'France', 'Japan' ],
            answer: 1
          },
           {
            Id: 20,
            question: 'Largest war plane.',
            optionList: [ 'United States', 'Russia', 'China', 'India' ],
            answer: 1
          },
           {
            Id: 21,
            question: 'Largest hotel.',
            optionList: [
              'First World Hotel',
              'The Venetian and the Palazzo',
              'MGM Grand Hotel and Casino,Las Vegas (USA)',
              'Citycenter'
            ],
            answer: 1
          },
           {
            Id: 22,
            question: 'Largest desert.',
            optionList: [ 'Antarctica', 'Arctic', 'Sahara (Africa)', 'Arabian Desert' ],
            answer: 1
          },
           {
            Id: 23,
            question: 'Largest forest.',
            optionList: [ 'Russia', 'Brazil', 'Canada', 'United States' ],
            answer: 1
          },
           {
            Id: 24,
            question: 'Largest stadium.',
            optionList: [
              'The Rose Bowl',
              'FNB stadium',
              'Azadi stadium',
              'Estadio Azteca'
            ],
            answer: 1
          },
           {
            Id: 25,
            question: 'Largest library.',
            optionList: [
              'Library of Congress',
              'British Library',
              'NewYork Public library',
              'Library and Archives Canada'
            ],
            answer: 1
          },
           {
            Id: 26,
            question: 'Largest museum.',
            optionList: [
              'Louvre',
              'State Hermitage Museum',
              'National museum of China',
              'Metropolitan Museum of Art'
            ],
            answer: 1
          },
           {
            Id: 27,
            question: 'Largest animal.',
            optionList: [ 'Blue whale', 'Giraffe', 'Salt Water Crocodile', 'Shark' ],
            answer: 1
          },
           {
            Id: 28,
            question: 'Largest land animal.',
            optionList: [
              'The African Bush Elephant',
              'Asian Elephant',
              'White Rhinoceros',
              'Giraffe'
            ],
            answer: 1
          },
           {
            Id: 29,
            question: 'Largest democracy.',
            optionList: [ 'India', 'Philippines', 'United States', 'Mexico' ],
            answer: 1
          },
           {
            Id: 30,
            question: 'Largest electorate.(By area)',
            optionList: [ 'Australia', 'India', 'Argentina', 'Alaska' ],
            answer: 1
          },
           {
            Id: 31,
            question: 'Largest town.',
            optionList: [ 'Sydney', 'Melbourne', 'Brisbane', 'Perth' ],
            answer: 1
          },
           {
            Id: 32,
            question: 'Largest palace.',
            optionList: [
              'The Forbidden City, Beijing',
              'The Palace of the Parliament',
              'Royal Palace if Caserta',
              'Holfburg Palace'
            ],
            answer: 1
          },
           {
            Id: 33,
            question: 'Largest dam.  ',
            optionList: [
              'Three Gorges Dam',
              'Tarbela Dam',
              'Hirakud Dam',
              'Fort Peck Dam'
            ],
            answer: 1
          },
           {
            Id: 34,
            question: 'Largest park.',
            optionList: [
              'Chugach State Park',
              'Table Mountain National Park',
              'Pedra Branca State Park',
              'McDowell Sonoran Preserve'
            ],
            answer: 1
          },
           {
            Id: 35,
            question: 'Largest zoo. ',
            optionList: [
              'Columbus Zoo and Aquarium.',
              'Moscow Zoo.',
              'San Diego Zoo.',
              'Toronto Zoo.'
            ],
            answer: 1
          },
           {
            Id: 36,
            question: 'Largest Lakes. ',
            optionList: [ 'Caspian Sea', 'Superior', 'Victoria', 'Huron' ],
            answer: 1
          },
           {
            Id: 37,
            question: 'Largest canal.',
            optionList: [ 'Grand Canal', 'Qaraqum Canal', 'Saimaa Canal', 'Eurasia Canal' ],
            answer: 1
          },
           {
            Id: 38,
            question: 'Largest reef. ',
            optionList: [
              'Great Barrier Reef\tCoral Sea, Queensland, Australia',
              'Isla Pérez\tGulf of Mexico',
              'Kingman Reef North Pacific Ocean',
              'Lansdowne Bank Coral Sea'
            ],
            answer: 1
          },
           {
            Id: 39,
            question: 'Largest city',
            optionList: [
              'Tokyo\tJapan',
              'Delhi\tIndia',
              'Shanghai\tChina',
              'Sao Paulo\tBrazil'
            ],
            answer: 1
          },
           {
            Id: 40,
            question: 'Largest cave.',
            optionList: [
              'Son Doong Cave, Vietnam.',
              'Mammoth Cave, Kentucky.',
              'Sistema Dos Ojos, Mexico.',
              'Jewel Cave, South Dakota'
            ],
            answer: 1
          },
           {
            Id: 41,
            question: 'Largest wall ',
            optionList: [
              'The Great Wall of China, China.',
              'The Berlin Wall, Germany.',
              'Western Wall, Jerusalem.',
              "Hadrian's Wall, England."
            ],
            answer: 1
          },
           {
            Id: 42,
            question: 'Largest cemetery ',
            optionList: [
              'Wadi-us-Salaam. Wadi Al-Salaam, Najaf, Iraq.',
              'Calverton National Cemetery. ...',
              'Abraham Lincoln National Cemetery. ...',
              'Ohlsdorf Cemetery.'
            ],
            answer: 1
          },
           {
            Id: 43,
            question: 'Largest railway station ',
            optionList: [
              'GRAND CENTRAL TERMINAL, NEW YORK',
              'BLACKFRIARS STATION, LONDON',
              'CHHATRAPATI SHIVAJI TERMINUS, MUMBAI',
              'GARE DE LYON, PARIS'
            ],
            answer: 1
          },
           {
            Id: 44,
            question: 'Largest university ',
            optionList: [
              'Main Building\tLomonosov Moscow State University',
              'Mode Gakuen Cocoon Tower\tMultiple',
              'Mode Gakuen Spiral Towers\tMultiple',
              'Cathedral of Learning\tUniversity of Pittsburgh'
            ],
            answer: 1
          },
           {
            Id: 45,
            question: 'Largest active volcano',
            optionList: [
              'Ojos del Salado\tArgentina/Chile – Highest active volcano on Earth',
              'Monte Pissis\tArgentina',
              'Nevado Tres Cruces\tArgentina/Chile',
              'Llullaillaco\tArgentina/Chile – Second highest active volcano on Earth'
            ],
            answer: 1
          },
           {
            Id: 46,
            question: 'Largest planet',
            optionList: [ 'Jupiter', 'Saturn', 'Uranus', 'Neptune' ],
            answer: 1
          },
           {
            Id: 47,
            question: 'Largest bird',
            optionList: [ 'Ostrich', 'Southern Cassowary', 'Emu', 'Emperor Penguin' ],
            answer: 1
          },
           {
            Id: 48,
            question: 'Largest parliament Building',
            optionList: [ 'Hungary.', 'Romania.', 'Trinidad', 'Armenia' ],
            answer: 1
          },
           {
            Id: 49,
            question: 'Largest cold desert',
            optionList: [ 'Antarctic', 'Arctic', 'Sahara', 'Arabian' ],
            answer: 1
          },
           {
            Id: 50,
            question: 'Largest plateau',
            optionList: [
              'Tibetan Plateau (Tibet)',
              'Laurentian Plateau (Canada)',
              'Yukon-Kushok Un Plateau (USA)',
              'Columbia-Snake Plateau (USA)'
            ],
            answer: 1
          },
           {
            Id: 51,
            question: 'Largest mountain range',
            optionList: [
              'Andes - \tSouth America',
              'Southern Great Escarpment - Africa',
              'Rocky Mountains - North America',
              'Himalayas - Asia'
            ],
            answer: 1
          },
           {
            Id: 52,
            question: 'Largest statue ',
            optionList: [
              'Statue of Unity\tSardar Vallabhbhai Patel',
              'Spring Temple Buddha\tBuddha (Vairocana)',
              'Laykyun Sekkya\tBuddha (Gautama)',
              'Ushiku Daibutsu'
            ],
            answer: 1
          },
           {
            Id: 53,
            question: 'Largest army',
            optionList: [
              'China',
              'India',
              'United States of America',
              "Democratic People's Republic of Korea"
            ],
            answer: 1
          },
           {
            Id: 54,
            question: 'Largest cricket stadium',
            optionList: [
              'Melbourne Cricket Ground\tMelbourne, Australia',
              'Eden Gardens\tKolkata, India',
              'Shaheed Vir Narayan Singh International Cricket Stadium\tNaya Raipur, India',
              'Jawaharlal Nehru International Stadium\tKochi, India'
            ],
            answer: 1
          },
           {
            Id: 55,
            question: 'Largest navy',
            optionList: [ 'North Korea', 'China', 'United States', 'Iran' ],
            answer: 1
          },
           {
            Id: 56,
            question: 'Largest airforce',
            optionList: [ 'United States', 'Russia', 'China', 'India' ],
            answer: 1
          },
           {
            Id: 57,
            question: 'Largest port',
            optionList: [
              'Shanghai, China',
              'Singapore',
              'Shenzhen, China',
              'Ningbo-Zhoushan, China'
            ],
            answer: 1
          },
           {
            Id: 58,
            question: 'Largest Dome in the World',
            optionList: [
              'Taj Mahal, India.',
              'Dome of the Rock, Jerusalem.',
              "Saint Basil's Cathedral, Russia.",
              'United States Capitol, Washington.'
            ],
            answer: 1
          },
           {
            Id: 59,
            question: 'Largest Epic ',
            optionList: [
              'Mahabharata, India',
              'Ramayana, India.',
              'La Galigo,Indonesia',
              'Alpamysh, Turkic epic of Middle Asia'
            ],
            answer: 1
          }
        ];
       
       return questionList;
       
    }
}