export interface City {
  id: number;
  name: string;
  nameEn: string;
  image: string;
  population: number;
  temp: number;
  lat: number;
  lng: number;
}

export interface Attraction {
  id: number;
  cityId: number;
  nameRu: string;
  nameEn: string;
  descRu: string;
  descEn: string;
  image: string;
}

export interface NewsItem {
  id: number;
  cityId: number;
  titleRu: string;
  titleEn: string;
  image: string;
  date: string;
}

export interface Hotel {
  id: number;
  cityId: number;
  nameRu: string;
  nameEn: string;
  stars: number;
  image: string;
  website: string;
}

export const cities: City[] = [
  { id: 1, name: 'Москва', nameEn: 'Moscow', image: 'https://cdn.poehali.dev/projects/2ce14516-e95f-4a3f-a5c2-96b9456e60a9/files/268b3e34-311b-42c8-adee-75a12f70e9bb.jpg', population: 13010000, temp: -5, lat: 55.7558, lng: 37.6173 },
  { id: 2, name: 'Санкт-Петербург', nameEn: 'Saint Petersburg', image: 'https://cdn.poehali.dev/projects/2ce14516-e95f-4a3f-a5c2-96b9456e60a9/files/32c39db3-8f95-4ecc-bb2d-50b6e1e821b9.jpg', population: 5600000, temp: -8, lat: 59.9343, lng: 30.3351 },
  { id: 3, name: 'Новосибирск', nameEn: 'Novosibirsk', image: 'https://cdn.poehali.dev/projects/2ce14516-e95f-4a3f-a5c2-96b9456e60a9/files/e63c30bb-96c4-4e09-9ea3-df449fee4963.jpg', population: 1633000, temp: -15, lat: 55.0084, lng: 82.9357 },
  { id: 4, name: 'Екатеринбург', nameEn: 'Yekaterinburg', image: 'https://cdn.poehali.dev/projects/2ce14516-e95f-4a3f-a5c2-96b9456e60a9/files/780cc076-9133-4fa4-aa24-654313ca7ecc.jpg', population: 1544000, temp: -12, lat: 56.8389, lng: 60.6057 },
  { id: 5, name: 'Казань', nameEn: 'Kazan', image: 'https://cdn.poehali.dev/projects/2ce14516-e95f-4a3f-a5c2-96b9456e60a9/files/bc6c45e2-e2db-48fe-9e7c-76efcb5458bd.jpg', population: 1308000, temp: -10, lat: 55.8304, lng: 49.0661 },
  { id: 6, name: 'Нижний Новгород', nameEn: 'Nizhny Novgorod', image: 'https://cdn.poehali.dev/projects/2ce14516-e95f-4a3f-a5c2-96b9456e60a9/files/df6e0067-7635-49e7-9830-cdf75e048750.jpg', population: 1228000, temp: -9, lat: 56.2965, lng: 43.9361 },
  { id: 7, name: 'Челябинск', nameEn: 'Chelyabinsk', image: 'https://cdn.poehali.dev/projects/2ce14516-e95f-4a3f-a5c2-96b9456e60a9/files/69a1cc03-e40d-4fa9-b371-39ef73ca76fb.jpg', population: 1188000, temp: -14, lat: 55.1644, lng: 61.4368 },
  { id: 8, name: 'Самара', nameEn: 'Samara', image: 'https://cdn.poehali.dev/projects/2ce14516-e95f-4a3f-a5c2-96b9456e60a9/files/8f3e3329-612d-40d2-b809-6538134989c9.jpg', population: 1145000, temp: -11, lat: 53.1952, lng: 50.1069 },
  { id: 9, name: 'Омск', nameEn: 'Omsk', image: 'https://cdn.poehali.dev/projects/2ce14516-e95f-4a3f-a5c2-96b9456e60a9/files/5a5d7139-912f-4f73-9d52-2689b8a2e168.jpg', population: 1125000, temp: -16, lat: 54.9885, lng: 73.3242 },
  { id: 10, name: 'Ростов-на-Дону', nameEn: 'Rostov-on-Don', image: 'https://cdn.poehali.dev/projects/2ce14516-e95f-4a3f-a5c2-96b9456e60a9/files/7e5c555c-0cef-4bd0-81bd-d8582bf3bd63.jpg', population: 1142000, temp: -3, lat: 47.2357, lng: 39.7015 },
  { id: 11, name: 'Уфа', nameEn: 'Ufa', image: 'https://cdn.poehali.dev/projects/2ce14516-e95f-4a3f-a5c2-96b9456e60a9/files/1dfbc48c-4628-4158-bc6b-0bd4d00d70ae.jpg', population: 1145000, temp: -13, lat: 54.7388, lng: 55.9721 },
  { id: 12, name: 'Красноярск', nameEn: 'Krasnoyarsk', image: 'https://cdn.poehali.dev/projects/2ce14516-e95f-4a3f-a5c2-96b9456e60a9/files/3e9494c3-ff61-4cc6-bcd3-a9c42834efc5.jpg', population: 1093000, temp: -17, lat: 56.0153, lng: 92.8932 },
  { id: 13, name: 'Воронеж', nameEn: 'Voronezh', image: 'https://cdn.poehali.dev/projects/2ce14516-e95f-4a3f-a5c2-96b9456e60a9/files/dca4cf61-f530-4ee0-83f0-05f971ef7672.jpg', population: 1058000, temp: -7, lat: 51.6754, lng: 39.2088 },
  { id: 14, name: 'Пермь', nameEn: 'Perm', image: 'https://cdn.poehali.dev/projects/2ce14516-e95f-4a3f-a5c2-96b9456e60a9/files/6b1938f8-5b2e-4adf-aa88-345a1b27fa93.jpg', population: 1055000, temp: -14, lat: 58.0105, lng: 56.2502 },
  { id: 15, name: 'Волгоград', nameEn: 'Volgograd', image: 'https://cdn.poehali.dev/projects/2ce14516-e95f-4a3f-a5c2-96b9456e60a9/files/d1b0555d-857b-459d-aae7-4bc321c51bb4.jpg', population: 1008000, temp: -8, lat: 48.7080, lng: 44.5133 },
  { id: 16, name: 'Краснодар', nameEn: 'Krasnodar', image: 'https://cdn.poehali.dev/projects/2ce14516-e95f-4a3f-a5c2-96b9456e60a9/files/14b67663-08f3-4e02-b82a-c07191697b58.jpg', population: 1099000, temp: +2, lat: 45.0355, lng: 38.9753 },
  { id: 17, name: 'Саратов', nameEn: 'Saratov', image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80', population: 838000, temp: -9, lat: 51.5333, lng: 46.0342 },
  { id: 18, name: 'Тюмень', nameEn: 'Tyumen', image: 'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=800&q=80', population: 816000, temp: -15, lat: 57.1522, lng: 65.5272 },
  { id: 19, name: 'Тольятти', nameEn: 'Tolyatti', image: 'https://images.unsplash.com/photo-1560859251-d571d95f9d71?w=800&q=80', population: 684000, temp: -10, lat: 53.5303, lng: 49.3461 },
  { id: 20, name: 'Ижевск', nameEn: 'Izhevsk', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', population: 648000, temp: -12, lat: 56.8498, lng: 53.2045 },
  { id: 21, name: 'Барнаул', nameEn: 'Barnaul', image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80', population: 631000, temp: -16, lat: 53.3648, lng: 83.7534 },
  { id: 22, name: 'Ульяновск', nameEn: 'Ulyanovsk', image: 'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=800&q=80', population: 625000, temp: -10, lat: 54.3142, lng: 48.4031 },
  { id: 23, name: 'Иркутск', nameEn: 'Irkutsk', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', population: 623000, temp: -18, lat: 52.2978, lng: 104.2964 },
  { id: 24, name: 'Хабаровск', nameEn: 'Khabarovsk', image: 'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=800&q=80', population: 617000, temp: -20, lat: 48.4827, lng: 135.0838 },
  { id: 25, name: 'Ярославль', nameEn: 'Yaroslavl', image: 'https://images.unsplash.com/photo-1560859251-d571d95f9d71?w=800&q=80', population: 608000, temp: -8, lat: 57.6261, lng: 39.8845 },
  { id: 26, name: 'Владивосток', nameEn: 'Vladivostok', image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80', population: 606000, temp: -10, lat: 43.1056, lng: 131.8735 },
  { id: 27, name: 'Махачкала', nameEn: 'Makhachkala', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', population: 604000, temp: 0, lat: 42.9849, lng: 47.5047 },
  { id: 28, name: 'Томск', nameEn: 'Tomsk', image: 'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=800&q=80', population: 575000, temp: -16, lat: 56.4977, lng: 84.9744 },
  { id: 29, name: 'Оренбург', nameEn: 'Orenburg', image: 'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=800&q=80', population: 572000, temp: -13, lat: 51.7727, lng: 55.0988 },
  { id: 30, name: 'Кемерово', nameEn: 'Kemerovo', image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80', population: 558000, temp: -17, lat: 55.3333, lng: 86.0833 },
  { id: 31, name: 'Новокузнецк', nameEn: 'Novokuznetsk', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', population: 544000, temp: -17, lat: 53.7557, lng: 87.1099 },
  { id: 32, name: 'Рязань', nameEn: 'Ryazan', image: 'https://images.unsplash.com/photo-1560859251-d571d95f9d71?w=800&q=80', population: 539000, temp: -7, lat: 54.6269, lng: 39.6916 },
  { id: 33, name: 'Набережные Челны', nameEn: 'Naberezhnye Chelny', image: 'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=800&q=80', population: 533000, temp: -12, lat: 55.7430, lng: 52.3954 },
  { id: 34, name: 'Астрахань', nameEn: 'Astrakhan', image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80', population: 528000, temp: -4, lat: 46.3497, lng: 48.0408 },
  { id: 35, name: 'Пенза', nameEn: 'Penza', image: 'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=800&q=80', population: 520000, temp: -9, lat: 53.2001, lng: 45.0000 },
  { id: 36, name: 'Киров', nameEn: 'Kirov', image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80', population: 518000, temp: -11, lat: 58.6035, lng: 49.6680 },
  { id: 37, name: 'Липецк', nameEn: 'Lipetsk', image: 'https://images.unsplash.com/photo-1560859251-d571d95f9d71?w=800&q=80', population: 508000, temp: -7, lat: 52.6103, lng: 39.5708 },
  { id: 38, name: 'Чебоксары', nameEn: 'Cheboksary', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', population: 497000, temp: -10, lat: 56.1439, lng: 47.2486 },
  { id: 39, name: 'Балашиха', nameEn: 'Balashikha', image: 'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=800&q=80', population: 507000, temp: -5, lat: 55.7964, lng: 37.9378 },
  { id: 40, name: 'Калининград', nameEn: 'Kaliningrad', image: 'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=800&q=80', population: 489000, temp: -2, lat: 54.7104, lng: 20.4522 },
];

export const attractions: Record<number, Attraction[]> = {
  1: [
    { id: 1, cityId: 1, nameRu: 'Красная площадь', nameEn: 'Red Square', descRu: 'Главная площадь Москвы, окружённая историческими зданиями, включая Кремль и собор Василия Блаженного. Символ России и место проведения главных государственных мероприятий.', descEn: 'The main square of Moscow, surrounded by historic buildings including the Kremlin and St. Basil\'s Cathedral. Symbol of Russia and venue for major state events.', image: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?w=800&q=80' },
    { id: 2, cityId: 1, nameRu: 'Московский Кремль', nameEn: 'Moscow Kremlin', descRu: 'Историческая крепость в центре Москвы, резиденция Президента России. Включает соборы, дворцы и Оружейную палату с уникальными экспонатами.', descEn: 'A historic fortified complex in the center of Moscow, the official residence of the President of Russia. Includes cathedrals, palaces and the Armory with unique exhibits.', image: 'https://images.unsplash.com/photo-1520106212299-d99c443e4568?w=800&q=80' },
    { id: 3, cityId: 1, nameRu: 'Собор Василия Блаженного', nameEn: 'St. Basil\'s Cathedral', descRu: 'Уникальный православный храм с разноцветными куполами, построенный в XVI веке по приказу Ивана Грозного. Является визитной карточкой России.', descEn: 'A unique Orthodox church with colorful domes, built in the 16th century by order of Ivan the Terrible. It is the hallmark of Russia.', image: 'https://images.unsplash.com/photo-1547448415-e9f5b28e570d?w=800&q=80' },
    { id: 4, cityId: 1, nameRu: 'Большой театр', nameEn: 'Bolshoi Theatre', descRu: 'Один из крупнейших в мире театров оперы и балета, основан в 1776 году. Известен своей труппой и величественным зданием с колоннадой.', descEn: 'One of the world\'s largest opera and ballet theaters, founded in 1776. Known for its company and magnificent building with colonnade.', image: 'https://images.unsplash.com/photo-1580913428706-c311e67898b3?w=800&q=80' },
    { id: 5, cityId: 1, nameRu: 'Парк Горького', nameEn: 'Gorky Park', descRu: 'Центральный парк культуры и отдыха с современными зонами отдыха, спортивными площадками, кафе и культурными мероприятиями.', descEn: 'Central Park of Culture and Leisure with modern recreation areas, sports grounds, cafes and cultural events.', image: 'https://images.unsplash.com/photo-1560859251-d571d95f9d71?w=800&q=80' }
  ],
  2: [
    { id: 6, cityId: 2, nameRu: 'Эрмитаж', nameEn: 'Hermitage Museum', descRu: 'Один из крупнейших и самых значительных художественных и культурно-исторических музеев мира. Коллекция насчитывает около 3 миллионов произведений искусства.', descEn: 'One of the largest and most significant art and cultural-historical museums in the world. The collection includes about 3 million works of art.', image: 'https://images.unsplash.com/photo-1555991100-7f3e33b59759?w=800&q=80' },
    { id: 7, cityId: 2, nameRu: 'Петергоф', nameEn: 'Peterhof', descRu: 'Дворцово-парковый ансамбль на берегу Финского залива, известный своими фонтанами и парками. "Русский Версаль" был резиденцией российских императоров.', descEn: 'Palace and park ensemble on the shore of the Gulf of Finland, known for its fountains and parks. The "Russian Versailles" was the residence of Russian emperors.', image: 'https://images.unsplash.com/photo-1582655299221-2ff79e0f66e2?w=800&q=80' },
    { id: 8, cityId: 2, nameRu: 'Исаакиевский собор', nameEn: 'St. Isaac\'s Cathedral', descRu: 'Крупнейший православный храм Санкт-Петербурга. Высота собора 101,5 метра, с колоннады открывается панорама города.', descEn: 'The largest Orthodox church in St. Petersburg. The cathedral is 101.5 meters high, the colonnade offers a panorama of the city.', image: 'https://images.unsplash.com/photo-1562013798-24ed6bb0c8a0?w=800&q=80' },
    { id: 9, cityId: 2, nameRu: 'Невский проспект', nameEn: 'Nevsky Prospect', descRu: 'Главная улица Санкт-Петербурга протяженностью 4,5 км. Соединяет Адмиралтейство с Александро-Невской лаврой.', descEn: 'The main street of St. Petersburg with a length of 4.5 km. Connects the Admiralty with the Alexander Nevsky Lavra.', image: 'https://images.unsplash.com/photo-1597075933405-c80fbd3c3f1b?w=800&q=80' },
    { id: 10, cityId: 2, nameRu: 'Дворцовая площадь', nameEn: 'Palace Square', descRu: 'Главная площадь Санкт-Петербурга, архитектурный ансамбль с Зимним дворцом и Александровской колонной.', descEn: 'The main square of St. Petersburg, an architectural ensemble with the Winter Palace and the Alexander Column.', image: 'https://images.unsplash.com/photo-1580913428706-c311e67898b3?w=800&q=80' }
  ]
};

export const news: Record<number, NewsItem[]> = {
  1: [
    { id: 1, cityId: 1, titleRu: 'Новый культурный центр открылся в районе Замоскворечье', titleEn: 'New cultural center opened in Zamoskvorechye district', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&q=80', date: '2026-01-18' },
    { id: 2, cityId: 1, titleRu: 'Фестиваль "Путешествие в Рождество" продлён до конца января', titleEn: 'Journey to Christmas festival extended until end of January', image: 'https://images.unsplash.com/photo-1482263231623-6121096b0d3f?w=400&q=80', date: '2026-01-17' },
    { id: 3, cityId: 1, titleRu: 'Московское метро запустило новую станцию "Лефортово"', titleEn: 'Moscow Metro launched new Lefortovo station', image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&q=80', date: '2026-01-16' },
    { id: 4, cityId: 1, titleRu: 'Третьяковская галерея представила выставку русского авангарда', titleEn: 'Tretyakov Gallery presented Russian avant-garde exhibition', image: 'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=400&q=80', date: '2026-01-15' },
    { id: 5, cityId: 1, titleRu: 'В Парке Горького открылся новый каток площадью 18 000 кв.м', titleEn: 'New 18,000 sq.m ice rink opened in Gorky Park', image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&q=80', date: '2026-01-14' }
  ],
  2: [
    { id: 6, cityId: 2, titleRu: 'Эрмитаж представил выставку искусства Древнего Египта', titleEn: 'Hermitage presented Ancient Egyptian art exhibition', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&q=80', date: '2026-01-18' },
    { id: 7, cityId: 2, titleRu: 'Мариинский театр объявил программу весеннего сезона', titleEn: 'Mariinsky Theatre announced spring season program', image: 'https://images.unsplash.com/photo-1482263231623-6121096b0d3f?w=400&q=80', date: '2026-01-17' },
    { id: 8, cityId: 2, titleRu: 'Начался ремонт исторических фасадов на Невском проспекте', titleEn: 'Renovation of historic facades on Nevsky Prospect began', image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&q=80', date: '2026-01-16' },
    { id: 9, cityId: 2, titleRu: 'Петропавловская крепость открыла зимний туристический маршрут', titleEn: 'Peter and Paul Fortress opened winter tourist route', image: 'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=400&q=80', date: '2026-01-15' },
    { id: 10, cityId: 2, titleRu: 'В Петергофе запустили виртуальные туры по дворцам', titleEn: 'Peterhof launched virtual palace tours', image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&q=80', date: '2026-01-14' }
  ]
};

export const hotels: Record<number, Hotel[]> = {
  1: [
    { id: 1, cityId: 1, nameRu: 'Метрополь', nameEn: 'Metropol', stars: 5, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80', website: 'https://www.metropol-moscow.ru' },
    { id: 2, cityId: 1, nameRu: 'Ритц-Карлтон Москва', nameEn: 'Ritz-Carlton Moscow', stars: 5, image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&q=80', website: 'https://www.ritzcarlton.com/moscow' },
    { id: 3, cityId: 1, nameRu: 'Лотте Отель Москва', nameEn: 'Lotte Hotel Moscow', stars: 5, image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&q=80', website: 'https://www.lottehotel.com/moscow' },
    { id: 4, cityId: 1, nameRu: 'Арарат Парк Хаятт', nameEn: 'Ararat Park Hyatt', stars: 5, image: 'https://images.unsplash.com/photo-1455587734955-081b22074882?w=400&q=80', website: 'https://www.hyatt.com/moscow' },
    { id: 5, cityId: 1, nameRu: 'Marriott Москва Гранд', nameEn: 'Moscow Marriott Grand', stars: 4, image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&q=80', website: 'https://www.marriott.com' }
  ],
  2: [
    { id: 6, cityId: 2, nameRu: 'Гранд Отель Европа', nameEn: 'Grand Hotel Europe', stars: 5, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80', website: 'https://www.grandhoteleurope.com' },
    { id: 7, cityId: 2, nameRu: 'Четыре Сезона Санкт-Петербург', nameEn: 'Four Seasons St. Petersburg', stars: 5, image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&q=80', website: 'https://www.fourseasons.com/stpetersburg' },
    { id: 8, cityId: 2, nameRu: 'Коринтия Отель', nameEn: 'Corinthia Hotel', stars: 5, image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&q=80', website: 'https://www.corinthia.com/st-petersburg' },
    { id: 9, cityId: 2, nameRu: 'W Санкт-Петербург', nameEn: 'W St. Petersburg', stars: 5, image: 'https://images.unsplash.com/photo-1455587734955-081b22074882?w=400&q=80', website: 'https://www.marriott.com/w-hotels' },
    { id: 10, cityId: 2, nameRu: 'Radisson Royal', nameEn: 'Radisson Royal', stars: 4, image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&q=80', website: 'https://www.radissonhotels.com' }
  ]
};