const countriesData = [
  {
    name: 'Afghanistan',
    slug: 'afghanistan',
    alpha2Code: 'AF',
    capital: 'Kabul',
    population: 27657145,
  },
  {
    name: 'Åland Islands',
    slug: 'ala-aland-islands',
    alpha2Code: 'AX',
    capital: 'Mariehamn',
    population: 28875,
  },
  {
    name: 'Albania',
    slug: 'albania',
    alpha2Code: 'AL',
    capital: 'Tirana',
    population: 2886026,
  },
  {
    name: 'Algeria',
    slug: 'algeria',
    alpha2Code: 'DZ',
    capital: 'Algiers',
    population: 40400000,
  },
  {
    name: 'American Samoa',
    slug: 'american-samoa',
    alpha2Code: 'AS',
    capital: 'Pago Pago',
    population: 57100,
  },
  {
    name: 'Andorra',
    slug: 'andorra',
    alpha2Code: 'AD',
    capital: 'Andorra la Vella',
    population: 78014,
  },
  {
    name: 'Angola',
    slug: 'angola',
    alpha2Code: 'AO',
    capital: 'Luanda',
    population: 25868000,
  },
  {
    name: 'Anguilla',
    slug: 'anguilla',
    alpha2Code: 'AI',
    capital: 'The Valley',
    population: 13452,
  },
  {
    name: 'Antarctica',
    slug: 'antarctica',
    alpha2Code: 'AQ',
    capital: '',
    population: 1000,
  },
  {
    name: 'Antigua and Barbuda',
    slug: 'antigua-and-barbuda',
    alpha2Code: 'AG',
    capital: "Saint John's",
    population: 86295,
  },
  {
    name: 'Argentina',
    slug: 'argentina',
    alpha2Code: 'AR',
    capital: 'Buenos Aires',
    population: 43590400,
  },
  {
    name: 'Armenia',
    slug: 'armenia',
    alpha2Code: 'AM',
    capital: 'Yerevan',
    population: 2994400,
  },
  {
    name: 'Aruba',
    slug: 'aruba',
    alpha2Code: 'AW',
    capital: 'Oranjestad',
    population: 107394,
  },
  {
    name: 'Australia',
    slug: 'australia',
    alpha2Code: 'AU',
    capital: 'Canberra',
    population: 24117360,
  },
  {
    name: 'Austria',
    slug: 'austria',
    alpha2Code: 'AT',
    capital: 'Vienna',
    population: 8725931,
  },
  {
    name: 'Azerbaijan',
    slug: 'azerbaijan',
    alpha2Code: 'AZ',
    capital: 'Baku',
    population: 9730500,
  },
  {
    name: 'Bahamas',
    slug: 'bahamas',
    alpha2Code: 'BS',
    capital: 'Nassau',
    population: 378040,
  },
  {
    name: 'Bahrain',
    slug: 'bahrain',
    alpha2Code: 'BH',
    capital: 'Manama',
    population: 1404900,
  },
  {
    name: 'Bangladesh',
    slug: 'bangladesh',
    alpha2Code: 'BD',
    capital: 'Dhaka',
    population: 161006790,
  },
  {
    name: 'Barbados',
    slug: 'barbados',
    alpha2Code: 'BB',
    capital: 'Bridgetown',
    population: 285000,
  },
  {
    name: 'Belarus',
    slug: 'belarus',
    alpha2Code: 'BY',
    capital: 'Minsk',
    population: 9498700,
  },
  {
    name: 'Belgium',
    slug: 'belgium',
    alpha2Code: 'BE',
    capital: 'Brussels',
    population: 11319511,
  },
  {
    name: 'Belize',
    slug: 'belize',
    alpha2Code: 'BZ',
    capital: 'Belmopan',
    population: 370300,
  },
  {
    name: 'Benin',
    slug: 'benin',
    alpha2Code: 'BJ',
    capital: 'Porto-Novo',
    population: 10653654,
  },
  {
    name: 'Bermuda',
    slug: 'bermuda',
    alpha2Code: 'BM',
    capital: 'Hamilton',
    population: 61954,
  },
  {
    name: 'Bhutan',
    slug: 'bhutan',
    alpha2Code: 'BT',
    capital: 'Thimphu',
    population: 775620,
  },
  {
    name: 'Bolivia (Plurinational State of)',
    slug: 'bolivia',
    alpha2Code: 'BO',
    capital: 'Sucre',
    population: 10985059,
  },
  {
    name: 'Bonaire, Sint Eustatius and Saba',
    slug: '',
    alpha2Code: 'BQ',
    capital: 'Kralendijk',
    population: 17408,
  },
  {
    name: 'Bosnia and Herzegovina',
    slug: 'bosnia-and-herzegovina',
    alpha2Code: 'BA',
    capital: 'Sarajevo',
    population: 3531159,
  },
  {
    name: 'Botswana',
    slug: 'botswana',
    alpha2Code: 'BW',
    capital: 'Gaborone',
    population: 2141206,
  },
  {
    name: 'Bouvet Island',
    slug: 'bouvet-island',
    alpha2Code: 'BV',
    capital: '',
    population: 0,
  },
  {
    name: 'Brazil',
    slug: 'brazil',
    alpha2Code: 'BR',
    capital: 'Brasília',
    population: 206135893,
  },
  {
    name: 'British Indian Ocean Territory',
    slug: 'british-indian-ocean-territory',
    alpha2Code: 'IO',
    capital: 'Diego Garcia',
    population: 3000,
  },
  {
    name: 'United States Minor Outlying Islands',
    slug: '',
    alpha2Code: 'UM',
    capital: '',
    population: 300,
  },
  {
    name: 'Virgin Islands (British)',
    slug: 'british-virgin-islands',
    alpha2Code: 'VG',
    capital: 'Road Town',
    population: 28514,
  },
  {
    name: 'Virgin Islands (U.S.)',
    slug: '',
    alpha2Code: 'VI',
    capital: 'Charlotte Amalie',
    population: 114743,
  },
  {
    name: 'Brunei Darussalam',
    slug: 'brunei',
    alpha2Code: 'BN',
    capital: 'Bandar Seri Begawan',
    population: 411900,
  },
  {
    name: 'Bulgaria',
    slug: 'bulgaria',
    alpha2Code: 'BG',
    capital: 'Sofia',
    population: 7153784,
  },
  {
    name: 'Burkina Faso',
    slug: 'burkina-faso',
    alpha2Code: 'BF',
    capital: 'Ouagadougou',
    population: 19034397,
  },
  {
    name: 'Burundi',
    slug: 'burundi',
    alpha2Code: 'BI',
    capital: 'Bujumbura',
    population: 10114505,
  },
  {
    name: 'Cambodia',
    slug: 'cambodia',
    alpha2Code: 'KH',
    capital: 'Phnom Penh',
    population: 15626444,
  },
  {
    name: 'Cameroon',
    slug: 'cameroon',
    alpha2Code: 'CM',
    capital: 'Yaoundé',
    population: 22709892,
  },
  {
    name: 'Canada',
    slug: 'canada',
    alpha2Code: 'CA',
    capital: 'Ottawa',
    population: 36155487,
  },
  {
    name: 'Cabo Verde',
    slug: 'cape-verde',
    alpha2Code: 'CV',
    capital: 'Praia',
    population: 531239,
  },
  {
    name: 'Cayman Islands',
    slug: 'cayman-islands',
    alpha2Code: 'KY',
    capital: 'George Town',
    population: 58238,
  },
  {
    name: 'Central African Republic',
    slug: 'central-african-republic',
    alpha2Code: 'CF',
    capital: 'Bangui',
    population: 4998000,
  },
  {
    name: 'Chad',
    slug: 'chad',
    alpha2Code: 'TD',
    capital: "N'Djamena",
    population: 14497000,
  },
  {
    name: 'Chile',
    slug: 'chile',
    alpha2Code: 'CL',
    capital: 'Santiago',
    population: 18191900,
  },
  {
    name: 'China',
    slug: 'china',
    alpha2Code: 'CN',
    capital: 'Beijing',
    population: 1377422166,
  },
  {
    name: 'Christmas Island',
    slug: 'christmas-island',
    alpha2Code: 'CX',
    capital: 'Flying Fish Cove',
    population: 2072,
  },
  {
    name: 'Cocos (Keeling) Islands',
    slug: 'cocos-keeling-islands',
    alpha2Code: 'CC',
    capital: 'West Island',
    population: 550,
  },
  {
    name: 'Colombia',
    slug: 'colombia',
    alpha2Code: 'CO',
    capital: 'Bogotá',
    population: 48759958,
  },
  {
    name: 'Comoros',
    slug: 'comoros',
    alpha2Code: 'KM',
    capital: 'Moroni',
    population: 806153,
  },
  {
    name: 'Congo',
    slug: 'congo-brazzaville',
    alpha2Code: 'CG',
    capital: 'Brazzaville',
    population: 4741000,
  },
  {
    name: 'Congo (Democratic Republic of the)',
    slug: 'congo-kinshasa',
    alpha2Code: 'CD',
    capital: 'Kinshasa',
    population: 85026000,
  },
  {
    name: 'Cook Islands',
    slug: 'cook-islands',
    alpha2Code: 'CK',
    capital: 'Avarua',
    population: 18100,
  },
  {
    name: 'Costa Rica',
    slug: 'costa-rica',
    alpha2Code: 'CR',
    capital: 'San José',
    population: 4890379,
  },
  {
    name: 'Croatia',
    slug: 'croatia',
    alpha2Code: 'HR',
    capital: 'Zagreb',
    population: 4190669,
  },
  {
    name: 'Cuba',
    slug: 'cuba',
    alpha2Code: 'CU',
    capital: 'Havana',
    population: 11239004,
  },
  {
    name: 'Curaçao',
    slug: '',
    alpha2Code: 'CW',
    capital: 'Willemstad',
    population: 154843,
  },
  {
    name: 'Cyprus',
    slug: 'cyprus',
    alpha2Code: 'CY',
    capital: 'Nicosia',
    population: 847000,
  },
  {
    name: 'Czech Republic',
    slug: 'czech-republic',
    alpha2Code: 'CZ',
    capital: 'Prague',
    population: 10558524,
  },
  {
    name: 'Denmark',
    slug: 'denmark',
    alpha2Code: 'DK',
    capital: 'Copenhagen',
    population: 5717014,
  },
  {
    name: 'Djibouti',
    slug: 'djibouti',
    alpha2Code: 'DJ',
    capital: 'Djibouti',
    population: 900000,
  },
  {
    name: 'Dominica',
    slug: 'dominica',
    alpha2Code: 'DM',
    capital: 'Roseau',
    population: 71293,
  },
  {
    name: 'Dominican Republic',
    slug: 'dominican-republic',
    alpha2Code: 'DO',
    capital: 'Santo Domingo',
    population: 10075045,
  },
  {
    name: 'Ecuador',
    slug: 'ecuador',
    alpha2Code: 'EC',
    capital: 'Quito',
    population: 16545799,
  },
  {
    name: 'Egypt',
    slug: 'egypt',
    alpha2Code: 'EG',
    capital: 'Cairo',
    population: 91290000,
  },
  {
    name: 'El Salvador',
    slug: 'el-salvador',
    alpha2Code: 'SV',
    capital: 'San Salvador',
    population: 6520675,
  },
  {
    name: 'Equatorial Guinea',
    slug: 'equatorial-guinea',
    alpha2Code: 'GQ',
    capital: 'Malabo',
    population: 1222442,
  },
  {
    name: 'Eritrea',
    slug: 'eritrea',
    alpha2Code: 'ER',
    capital: 'Asmara',
    population: 5352000,
  },
  {
    name: 'Estonia',
    slug: 'estonia',
    alpha2Code: 'EE',
    capital: 'Tallinn',
    population: 1315944,
  },
  {
    name: 'Ethiopia',
    slug: 'ethiopia',
    alpha2Code: 'ET',
    capital: 'Addis Ababa',
    population: 92206005,
  },
  {
    name: 'Falkland Islands (Malvinas)',
    slug: 'falkland-islands-malvinas',
    alpha2Code: 'FK',
    capital: 'Stanley',
    population: 2563,
  },
  {
    name: 'Faroe Islands',
    slug: 'faroe-islands',
    alpha2Code: 'FO',
    capital: 'Tórshavn',
    population: 49376,
  },
  {
    name: 'Fiji',
    slug: 'fiji',
    alpha2Code: 'FJ',
    capital: 'Suva',
    population: 867000,
  },
  {
    name: 'Finland',
    slug: 'finland',
    alpha2Code: 'FI',
    capital: 'Helsinki',
    population: 5491817,
  },
  {
    name: 'France',
    slug: 'france',
    alpha2Code: 'FR',
    capital: 'Paris',
    population: 66710000,
  },
  {
    name: 'French Guiana',
    slug: 'french-guiana',
    alpha2Code: 'GF',
    capital: 'Cayenne',
    population: 254541,
  },
  {
    name: 'French Polynesia',
    slug: 'french-polynesia',
    alpha2Code: 'PF',
    capital: 'Papeetē',
    population: 271800,
  },
  {
    name: 'French Southern Territories',
    slug: 'french-southern-territories',
    alpha2Code: 'TF',
    capital: 'Port-aux-Français',
    population: 140,
  },
  {
    name: 'Gabon',
    slug: 'gabon',
    alpha2Code: 'GA',
    capital: 'Libreville',
    population: 1802278,
  },
  {
    name: 'Gambia',
    slug: 'gambia',
    alpha2Code: 'GM',
    capital: 'Banjul',
    population: 1882450,
  },
  {
    name: 'Georgia',
    slug: 'georgia',
    alpha2Code: 'GE',
    capital: 'Tbilisi',
    population: 3720400,
  },
  {
    name: 'Germany',
    slug: 'germany',
    alpha2Code: 'DE',
    capital: 'Berlin',
    population: 81770900,
  },
  {
    name: 'Ghana',
    slug: 'ghana',
    alpha2Code: 'GH',
    capital: 'Accra',
    population: 27670174,
  },
  {
    name: 'Gibraltar',
    slug: 'gibraltar',
    alpha2Code: 'GI',
    capital: 'Gibraltar',
    population: 33140,
  },
  {
    name: 'Greece',
    slug: 'greece',
    alpha2Code: 'GR',
    capital: 'Athens',
    population: 10858018,
  },
  {
    name: 'Greenland',
    slug: 'greenland',
    alpha2Code: 'GL',
    capital: 'Nuuk',
    population: 55847,
  },
  {
    name: 'Grenada',
    slug: 'grenada',
    alpha2Code: 'GD',
    capital: "St. George's",
    population: 103328,
  },
  {
    name: 'Guadeloupe',
    slug: 'guadeloupe',
    alpha2Code: 'GP',
    capital: 'Basse-Terre',
    population: 400132,
  },
  {
    name: 'Guam',
    slug: 'guam',
    alpha2Code: 'GU',
    capital: 'Hagåtña',
    population: 184200,
  },
  {
    name: 'Guatemala',
    slug: 'guatemala',
    alpha2Code: 'GT',
    capital: 'Guatemala City',
    population: 16176133,
  },
  {
    name: 'Guernsey',
    slug: 'guernsey',
    alpha2Code: 'GG',
    capital: 'St. Peter Port',
    population: 62999,
  },
  {
    name: 'Guinea',
    slug: 'guinea',
    alpha2Code: 'GN',
    capital: 'Conakry',
    population: 12947000,
  },
  {
    name: 'Guinea-Bissau',
    slug: 'guinea-bissau',
    alpha2Code: 'GW',
    capital: 'Bissau',
    population: 1547777,
  },
  {
    name: 'Guyana',
    slug: '',
    alpha2Code: 'GY',
    capital: 'Georgetown',
    population: 746900,
  },
  {
    name: 'Haiti',
    slug: '',
    alpha2Code: 'HT',
    capital: 'Port-au-Prince',
    population: 11078033,
  },
  {
    name: 'Heard Island and McDonald Islands',
    slug: '',
    alpha2Code: 'HM',
    capital: '',
    population: 0,
  },
  {
    name: 'Holy See',
    slug: '',
    alpha2Code: 'VA',
    capital: 'Rome',
    population: 451,
  },
  {
    name: 'Honduras',
    slug: '',
    alpha2Code: 'HN',
    capital: 'Tegucigalpa',
    population: 8576532,
  },
  {
    name: 'Hong Kong',
    slug: '',
    alpha2Code: 'HK',
    capital: 'City of Victoria',
    population: 7324300,
  },
  {
    name: 'Hungary',
    slug: '',
    alpha2Code: 'HU',
    capital: 'Budapest',
    population: 9823000,
  },
  {
    name: 'Iceland',
    slug: '',
    alpha2Code: 'IS',
    capital: 'Reykjavík',
    population: 334300,
  },
  {
    name: 'India',
    slug: '',
    alpha2Code: 'IN',
    capital: 'New Delhi',
    population: 1295210000,
  },
  {
    name: 'Indonesia',
    slug: '',
    alpha2Code: 'ID',
    capital: 'Jakarta',
    population: 258705000,
  },
  {
    name: "Côte d'Ivoire",
    slug: '',
    alpha2Code: 'CI',
    capital: 'Yamoussoukro',
    population: 22671331,
  },
  {
    name: 'Iran (Islamic Republic of)',
    slug: '',
    alpha2Code: 'IR',
    capital: 'Tehran',
    population: 79369900,
  },
  {
    name: 'Iraq',
    slug: '',
    alpha2Code: 'IQ',
    capital: 'Baghdad',
    population: 37883543,
  },
  {
    name: 'Ireland',
    slug: '',
    alpha2Code: 'IE',
    capital: 'Dublin',
    population: 6378000,
  },
  {
    name: 'Isle of Man',
    slug: '',
    alpha2Code: 'IM',
    capital: 'Douglas',
    population: 84497,
  },
  {
    name: 'Israel',
    slug: '',
    alpha2Code: 'IL',
    capital: 'Jerusalem',
    population: 8527400,
  },
  {
    name: 'Italy',
    slug: '',
    alpha2Code: 'IT',
    capital: 'Rome',
    population: 60665551,
  },
  {
    name: 'Jamaica',
    slug: '',
    alpha2Code: 'JM',
    capital: 'Kingston',
    population: 2723246,
  },
  {
    name: 'Japan',
    slug: '',
    alpha2Code: 'JP',
    capital: 'Tokyo',
    population: 126960000,
  },
  {
    name: 'Jersey',
    slug: '',
    alpha2Code: 'JE',
    capital: 'Saint Helier',
    population: 100800,
  },
  {
    name: 'Jordan',
    slug: '',
    alpha2Code: 'JO',
    capital: 'Amman',
    population: 9531712,
  },
  {
    name: 'Kazakhstan',
    slug: '',
    alpha2Code: 'KZ',
    capital: 'Astana',
    population: 17753200,
  },
  {
    name: 'Kenya',
    slug: '',
    alpha2Code: 'KE',
    capital: 'Nairobi',
    population: 47251000,
  },
  {
    name: 'Kiribati',
    slug: '',
    alpha2Code: 'KI',
    capital: 'South Tarawa',
    population: 113400,
  },
  {
    name: 'Kuwait',
    slug: '',
    alpha2Code: 'KW',
    capital: 'Kuwait City',
    population: 4183658,
  },
  {
    name: 'Kyrgyzstan',
    slug: '',
    alpha2Code: 'KG',
    capital: 'Bishkek',
    population: 6047800,
  },
  {
    name: "Lao People's Democratic Republic",
    slug: '',
    alpha2Code: 'LA',
    capital: 'Vientiane',
    population: 6492400,
  },
  {
    name: 'Latvia',
    slug: '',
    alpha2Code: 'LV',
    capital: 'Riga',
    population: 1961600,
  },
  {
    name: 'Lebanon',
    slug: '',
    alpha2Code: 'LB',
    capital: 'Beirut',
    population: 5988000,
  },
  {
    name: 'Lesotho',
    slug: '',
    alpha2Code: 'LS',
    capital: 'Maseru',
    population: 1894194,
  },
  {
    name: 'Liberia',
    slug: '',
    alpha2Code: 'LR',
    capital: 'Monrovia',
    population: 4615000,
  },
  {
    name: 'Libya',
    slug: '',
    alpha2Code: 'LY',
    capital: 'Tripoli',
    population: 6385000,
  },
  {
    name: 'Liechtenstein',
    slug: '',
    alpha2Code: 'LI',
    capital: 'Vaduz',
    population: 37623,
  },
  {
    name: 'Lithuania',
    slug: '',
    alpha2Code: 'LT',
    capital: 'Vilnius',
    population: 2872294,
  },
  {
    name: 'Luxembourg',
    slug: '',
    alpha2Code: 'LU',
    capital: 'Luxembourg',
    population: 576200,
  },
  {
    name: 'Macao',
    slug: '',
    alpha2Code: 'MO',
    capital: '',
    population: 649100,
  },
  {
    name: 'Macedonia (the former Yugoslav Republic of)',
    slug: '',
    alpha2Code: 'MK',
    capital: 'Skopje',
    population: 2058539,
  },
  {
    name: 'Madagascar',
    slug: '',
    alpha2Code: 'MG',
    capital: 'Antananarivo',
    population: 22434363,
  },
  {
    name: 'Malawi',
    slug: '',
    alpha2Code: 'MW',
    capital: 'Lilongwe',
    population: 16832910,
  },
  {
    name: 'Malaysia',
    slug: '',
    alpha2Code: 'MY',
    capital: 'Kuala Lumpur',
    population: 31405416,
  },
  {
    name: 'Maldives',
    slug: '',
    alpha2Code: 'MV',
    capital: 'Malé',
    population: 344023,
  },
  {
    name: 'Mali',
    slug: '',
    alpha2Code: 'ML',
    capital: 'Bamako',
    population: 18135000,
  },
  {
    name: 'Malta',
    slug: '',
    alpha2Code: 'MT',
    capital: 'Valletta',
    population: 425384,
  },
  {
    name: 'Marshall Islands',
    slug: '',
    alpha2Code: 'MH',
    capital: 'Majuro',
    population: 54880,
  },
  {
    name: 'Martinique',
    slug: '',
    alpha2Code: 'MQ',
    capital: 'Fort-de-France',
    population: 378243,
  },
  {
    name: 'Mauritania',
    slug: '',
    alpha2Code: 'MR',
    capital: 'Nouakchott',
    population: 3718678,
  },
  {
    name: 'Mauritius',
    slug: '',
    alpha2Code: 'MU',
    capital: 'Port Louis',
    population: 1262879,
  },
  {
    name: 'Mayotte',
    slug: '',
    alpha2Code: 'YT',
    capital: 'Mamoudzou',
    population: 226915,
  },
  {
    name: 'Mexico',
    slug: '',
    alpha2Code: 'MX',
    capital: 'Mexico City',
    population: 122273473,
  },
  {
    name: 'Micronesia (Federated States of)',
    slug: '',
    alpha2Code: 'FM',
    capital: 'Palikir',
    population: 102800,
  },
  {
    name: 'Moldova (Republic of)',
    slug: '',
    alpha2Code: 'MD',
    capital: 'Chișinău',
    population: 3553100,
  },
  {
    name: 'Monaco',
    slug: '',
    alpha2Code: 'MC',
    capital: 'Monaco',
    population: 38400,
  },
  {
    name: 'Mongolia',
    slug: '',
    alpha2Code: 'MN',
    capital: 'Ulan Bator',
    population: 3093100,
  },
  {
    name: 'Montenegro',
    slug: '',
    alpha2Code: 'ME',
    capital: 'Podgorica',
    population: 621810,
  },
  {
    name: 'Montserrat',
    slug: '',
    alpha2Code: 'MS',
    capital: 'Plymouth',
    population: 4922,
  },
  {
    name: 'Morocco',
    slug: '',
    alpha2Code: 'MA',
    capital: 'Rabat',
    population: 33337529,
  },
  {
    name: 'Mozambique',
    slug: '',
    alpha2Code: 'MZ',
    capital: 'Maputo',
    population: 26423700,
  },
  {
    name: 'Myanmar',
    slug: '',
    alpha2Code: 'MM',
    capital: 'Naypyidaw',
    population: 51419420,
  },
  {
    name: 'Namibia',
    slug: '',
    alpha2Code: 'NA',
    capital: 'Windhoek',
    population: 2324388,
  },
  {
    name: 'Nauru',
    slug: '',
    alpha2Code: 'NR',
    capital: 'Yaren',
    population: 10084,
  },
  {
    name: 'Nepal',
    slug: '',
    alpha2Code: 'NP',
    capital: 'Kathmandu',
    population: 28431500,
  },
  {
    name: 'Netherlands',
    slug: '',
    alpha2Code: 'NL',
    capital: 'Amsterdam',
    population: 17019800,
  },
  {
    name: 'New Caledonia',
    slug: '',
    alpha2Code: 'NC',
    capital: 'Nouméa',
    population: 268767,
  },
  {
    name: 'New Zealand',
    slug: '',
    alpha2Code: 'NZ',
    capital: 'Wellington',
    population: 4697854,
  },
  {
    name: 'Nicaragua',
    slug: '',
    alpha2Code: 'NI',
    capital: 'Managua',
    population: 6262703,
  },
  {
    name: 'Niger',
    slug: '',
    alpha2Code: 'NE',
    capital: 'Niamey',
    population: 20715000,
  },
  {
    name: 'Nigeria',
    slug: '',
    alpha2Code: 'NG',
    capital: 'Abuja',
    population: 186988000,
  },
  {
    name: 'Niue',
    slug: '',
    alpha2Code: 'NU',
    capital: 'Alofi',
    population: 1470,
  },
  {
    name: 'Norfolk Island',
    slug: '',
    alpha2Code: 'NF',
    capital: 'Kingston',
    population: 2302,
  },
  {
    name: "Korea (Democratic People's Republic of)",
    slug: '',
    alpha2Code: 'KP',
    capital: 'Pyongyang',
    population: 25281000,
  },
  {
    name: 'Northern Mariana Islands',
    slug: '',
    alpha2Code: 'MP',
    capital: 'Saipan',
    population: 56940,
  },
  {
    name: 'Norway',
    slug: '',
    alpha2Code: 'NO',
    capital: 'Oslo',
    population: 5223256,
  },
  {
    name: 'Oman',
    slug: '',
    alpha2Code: 'OM',
    capital: 'Muscat',
    population: 4420133,
  },
  {
    name: 'Pakistan',
    slug: '',
    alpha2Code: 'PK',
    capital: 'Islamabad',
    population: 194125062,
  },
  {
    name: 'Palau',
    slug: '',
    alpha2Code: 'PW',
    capital: 'Ngerulmud',
    population: 17950,
  },
  {
    name: 'Palestine, State of',
    slug: '',
    alpha2Code: 'PS',
    capital: 'Ramallah',
    population: 4682467,
  },
  {
    name: 'Panama',
    slug: '',
    alpha2Code: 'PA',
    capital: 'Panama City',
    population: 3814672,
  },
  {
    name: 'Papua New Guinea',
    slug: '',
    alpha2Code: 'PG',
    capital: 'Port Moresby',
    population: 8083700,
  },
  {
    name: 'Paraguay',
    slug: '',
    alpha2Code: 'PY',
    capital: 'Asunción',
    population: 6854536,
  },
  {
    name: 'Peru',
    slug: '',
    alpha2Code: 'PE',
    capital: 'Lima',
    population: 31488700,
  },
  {
    name: 'Philippines',
    slug: '',
    alpha2Code: 'PH',
    capital: 'Manila',
    population: 103279800,
  },
  {
    name: 'Pitcairn',
    slug: '',
    alpha2Code: 'PN',
    capital: 'Adamstown',
    population: 56,
  },
  {
    name: 'Poland',
    slug: '',
    alpha2Code: 'PL',
    capital: 'Warsaw',
    population: 38437239,
  },
  {
    name: 'Portugal',
    slug: '',
    alpha2Code: 'PT',
    capital: 'Lisbon',
    population: 10374822,
  },
  {
    name: 'Puerto Rico',
    slug: '',
    alpha2Code: 'PR',
    capital: 'San Juan',
    population: 3474182,
  },
  {
    name: 'Qatar',
    slug: '',
    alpha2Code: 'QA',
    capital: 'Doha',
    population: 2587564,
  },
  {
    name: 'Republic of Kosovo',
    slug: '',
    alpha2Code: 'XK',
    capital: 'Pristina',
    population: 1733842,
  },
  {
    name: 'Réunion',
    slug: '',
    alpha2Code: 'RE',
    capital: 'Saint-Denis',
    population: 840974,
  },
  {
    name: 'Romania',

    alpha2Code: 'RO',
    capital: 'Bucharest',
    population: 19861408,
  },
  {
    name: 'Russian Federation',
    alpha2Code: 'RU',
    capital: 'Moscow',
    population: 146599183,
  },
  { name: 'Rwanda', alpha2Code: 'RW', capital: 'Kigali', population: 11553188 },
  {
    name: 'Saint Barthélemy',
    alpha2Code: 'BL',
    capital: 'Gustavia',
    population: 9417,
  },
  {
    name: 'Saint Helena, Ascension and Tristan da Cunha',
    alpha2Code: 'SH',
    capital: 'Jamestown',
    population: 4255,
  },
  {
    name: 'Saint Kitts and Nevis',
    alpha2Code: 'KN',
    capital: 'Basseterre',
    population: 46204,
  },
  {
    name: 'Saint Lucia',
    alpha2Code: 'LC',
    capital: 'Castries',
    population: 186000,
  },
  {
    name: 'Saint Martin (French part)',
    slug: '',
    alpha2Code: 'MF',
    capital: 'Marigot',
    population: 36979,
  },
  {
    name: 'Saint Pierre and Miquelon',
    slug: '',
    alpha2Code: 'PM',
    capital: 'Saint-Pierre',
    population: 6069,
  },
  {
    name: 'Saint Vincent and the Grenadines',
    slug: '',
    alpha2Code: 'VC',
    capital: 'Kingstown',
    population: 109991,
  },
  {
    name: 'Samoa',
    slug: '',
    alpha2Code: 'WS',
    capital: 'Apia',
    population: 194899,
  },
  {
    name: 'San Marino',
    slug: '',
    alpha2Code: 'SM',
    capital: 'City of San Marino',
    population: 33005,
  },
  {
    name: 'Sao Tome and Principe',
    slug: '',
    alpha2Code: 'ST',
    capital: 'São Tomé',
    population: 187356,
  },
  {
    name: 'Saudi Arabia',
    slug: '',
    alpha2Code: 'SA',
    capital: 'Riyadh',
    population: 32248200,
  },
  {
    name: 'Senegal',
    slug: '',
    alpha2Code: 'SN',
    capital: 'Dakar',
    population: 14799859,
  },
  {
    name: 'Serbia',
    slug: '',
    alpha2Code: 'RS',
    capital: 'Belgrade',
    population: 7076372,
  },
  {
    name: 'Seychelles',
    slug: '',
    alpha2Code: 'SC',
    capital: 'Victoria',
    population: 91400,
  },
  {
    name: 'Sierra Leone',
    slug: '',
    alpha2Code: 'SL',
    capital: 'Freetown',
    population: 7075641,
  },
  {
    name: 'Singapore',
    slug: '',
    alpha2Code: 'SG',
    capital: 'Singapore',
    population: 5535000,
  },
  {
    name: 'Sint Maarten (Dutch part)',
    slug: '',
    alpha2Code: 'SX',
    capital: 'Philipsburg',
    population: 38247,
  },
  {
    name: 'Slovakia',
    slug: '',
    alpha2Code: 'SK',
    capital: 'Bratislava',
    population: 5426252,
  },
  {
    name: 'Slovenia',
    slug: '',
    alpha2Code: 'SI',
    capital: 'Ljubljana',
    population: 2064188,
  },
  {
    name: 'Solomon Islands',
    slug: '',
    alpha2Code: 'SB',
    capital: 'Honiara',
    population: 642000,
  },
  {
    name: 'Somalia',
    slug: '',
    alpha2Code: 'SO',
    capital: 'Mogadishu',
    population: 11079000,
  },
  {
    name: 'South Africa',
    slug: '',
    alpha2Code: 'ZA',
    capital: 'Pretoria',
    population: 55653654,
  },
  {
    name: 'South Georgia and the South Sandwich Islands',
    slug: '',
    alpha2Code: 'GS',
    capital: 'King Edward Point',
    population: 30,
  },
  {
    name: 'Korea (Republic of)',
    slug: '',
    alpha2Code: 'KR',
    capital: 'Seoul',
    population: 50801405,
  },
  {
    name: 'South Sudan',
    slug: '',
    alpha2Code: 'SS',
    capital: 'Juba',
    population: 12131000,
  },
  {
    name: 'Spain',
    slug: '',
    alpha2Code: 'ES',
    capital: 'Madrid',
    population: 46438422,
  },
  {
    name: 'Sri Lanka',
    slug: '',
    alpha2Code: 'LK',
    capital: 'Colombo',
    population: 20966000,
  },
  {
    name: 'Sudan',
    slug: '',
    alpha2Code: 'SD',
    capital: 'Khartoum',
    population: 39598700,
  },
  {
    name: 'Suriname',
    slug: '',
    alpha2Code: 'SR',
    capital: 'Paramaribo',
    population: 541638,
  },
  {
    name: 'Svalbard and Jan Mayen',
    slug: '',
    alpha2Code: 'SJ',
    capital: 'Longyearbyen',
    population: 2562,
  },
  {
    name: 'Swaziland',
    slug: '',
    alpha2Code: 'SZ',
    capital: 'Lobamba',
    population: 1132657,
  },
  {
    name: 'Sweden',
    slug: '',
    alpha2Code: 'SE',
    capital: 'Stockholm',
    population: 9894888,
  },
  {
    name: 'Switzerland',
    slug: '',
    alpha2Code: 'CH',
    capital: 'Bern',
    population: 8341600,
  },
  {
    name: 'Syrian Arab Republic',
    slug: '',
    alpha2Code: 'SY',
    capital: 'Damascus',
    population: 18564000,
  },
  {
    name: 'Taiwan',
    slug: '',
    alpha2Code: 'TW',
    capital: 'Taipei',
    population: 23503349,
  },
  {
    name: 'Tajikistan',
    slug: '',
    alpha2Code: 'TJ',
    capital: 'Dushanbe',
    population: 8593600,
  },
  {
    name: 'Tanzania, United Republic of',
    slug: '',
    alpha2Code: 'TZ',
    capital: 'Dodoma',
    population: 55155000,
  },
  {
    name: 'Thailand',
    slug: '',
    alpha2Code: 'TH',
    capital: 'Bangkok',
    population: 65327652,
  },
  {
    name: 'Timor-Leste',
    slug: '',
    alpha2Code: 'TL',
    capital: 'Dili',
    population: 1167242,
  },
  {
    name: 'Togo',
    slug: '',
    alpha2Code: 'TG',
    capital: 'Lomé',
    population: 7143000,
  },
  {
    name: 'Tokelau',
    slug: '',
    alpha2Code: 'TK',
    capital: 'Fakaofo',
    population: 1411,
  },
  {
    name: 'Tonga',
    slug: '',
    alpha2Code: 'TO',
    capital: "Nuku'alofa",
    population: 103252,
  },
  {
    name: 'Trinidad and Tobago',
    slug: '',
    alpha2Code: 'TT',
    capital: 'Port of Spain',
    population: 1349667,
  },
  {
    name: 'Tunisia',
    slug: '',
    alpha2Code: 'TN',
    capital: 'Tunis',
    population: 11154400,
  },
  {
    name: 'Turkey',
    slug: '',
    alpha2Code: 'TR',
    capital: 'Ankara',
    population: 78741053,
  },
  {
    name: 'Turkmenistan',
    slug: '',
    alpha2Code: 'TM',
    capital: 'Ashgabat',
    population: 4751120,
  },
  {
    name: 'Turks and Caicos Islands',
    slug: '',
    alpha2Code: 'TC',
    capital: 'Cockburn Town',
    population: 31458,
  },
  {
    name: 'Tuvalu',
    slug: '',
    alpha2Code: 'TV',
    capital: 'Funafuti',
    population: 10640,
  },
  {
    name: 'Uganda',
    slug: '',
    alpha2Code: 'UG',
    capital: 'Kampala',
    population: 33860700,
  },
  {
    name: 'Ukraine',
    slug: '',
    alpha2Code: 'UA',
    capital: 'Kiev',
    population: 42692393,
  },
  {
    name: 'United Arab Emirates',
    slug: '',
    alpha2Code: 'AE',
    capital: 'Abu Dhabi',
    population: 9856000,
  },
  {
    name: 'United Kingdom of Great Britain and Northern Ireland',
    slug: '',
    alpha2Code: 'GB',
    capital: 'London',
    population: 65110000,
  },
  {
    name: 'United States of America',
    slug: '',
    alpha2Code: 'US',
    capital: 'Washington, D.C.',
    population: 323947000,
  },
  {
    name: 'Uruguay',
    slug: '',
    alpha2Code: 'UY',
    capital: 'Montevideo',
    population: 3480222,
  },
  {
    name: 'Uzbekistan',
    slug: '',
    alpha2Code: 'UZ',
    capital: 'Tashkent',
    population: 31576400,
  },
  {
    name: 'Vanuatu',
    slug: '',
    alpha2Code: 'VU',
    capital: 'Port Vila',
    population: 277500,
  },
  {
    name: 'Venezuela (Bolivarian Republic of)',
    slug: '',
    alpha2Code: 'VE',
    capital: 'Caracas',
    population: 31028700,
  },
  {
    name: 'Viet Nam',
    slug: '',
    alpha2Code: 'VN',
    capital: 'Hanoi',
    population: 92700000,
  },
  {
    name: 'Wallis and Futuna',

    alpha2Code: 'WF',
    capital: 'Mata-Utu',
    population: 11750,
  },
  {
    name: 'Western Sahara',
    slug: '',
    alpha2Code: 'EH',
    capital: 'El Aaiún',
    population: 510713,
  },
  {
    name: 'Yemen',
    slug: '',
    alpha2Code: 'YE',
    capital: "Sana'a",
    population: 27478000,
  },
  {
    name: 'Zambia',
    slug: '',
    alpha2Code: 'ZM',
    capital: 'Lusaka',
    population: 15933883,
  },
  {
    name: 'Zimbabwe',
    slug: '',
    alpha2Code: 'ZW',
    capital: 'Harare',
    population: 14240168,
  },
]

export default countriesData
