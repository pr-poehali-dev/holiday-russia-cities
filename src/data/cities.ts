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
  { id: 17, name: 'Саратов', nameEn: 'Saratov', image: 'https://cdn.poehali.dev/projects/2ce14516-e95f-4a3f-a5c2-96b9456e60a9/files/3889440d-7e9f-4503-bf4b-ccc108048f4c.jpg', population: 838000, temp: -9, lat: 51.5333, lng: 46.0342 },
  { id: 18, name: 'Тюмень', nameEn: 'Tyumen', image: 'https://cdn.poehali.dev/projects/2ce14516-e95f-4a3f-a5c2-96b9456e60a9/files/84dac765-716c-486f-9188-52cbc02c32c3.jpg', population: 816000, temp: -15, lat: 57.1522, lng: 65.5272 },
  { id: 19, name: 'Тольятти', nameEn: 'Tolyatti', image: 'https://cdn.poehali.dev/projects/2ce14516-e95f-4a3f-a5c2-96b9456e60a9/files/453c0b4f-1e11-443f-8da3-170bd23d7959.jpg', population: 684000, temp: -10, lat: 53.5303, lng: 49.3461 },
  { id: 20, name: 'Ижевск', nameEn: 'Izhevsk', image: 'https://cdn.poehali.dev/projects/2ce14516-e95f-4a3f-a5c2-96b9456e60a9/files/abbcc441-ada0-43b4-9783-7b75e6724890.jpg', population: 648000, temp: -12, lat: 56.8498, lng: 53.2045 },
  { id: 21, name: 'Барнаул', nameEn: 'Barnaul', image: 'https://cdn.poehali.dev/projects/2ce14516-e95f-4a3f-a5c2-96b9456e60a9/files/4972627c-56eb-49f6-8777-53e57514f82e.jpg', population: 631000, temp: -16, lat: 53.3648, lng: 83.7534 },
  { id: 22, name: 'Ульяновск', nameEn: 'Ulyanovsk', image: 'https://cdn.poehali.dev/projects/2ce14516-e95f-4a3f-a5c2-96b9456e60a9/files/0fd79f12-c93e-4777-964c-8e95662080fb.jpg', population: 625000, temp: -10, lat: 54.3142, lng: 48.4031 },
  { id: 23, name: 'Иркутск', nameEn: 'Irkutsk', image: 'https://cdn.poehali.dev/projects/2ce14516-e95f-4a3f-a5c2-96b9456e60a9/files/ef4bfb16-628d-46df-92bc-ff831b229827.jpg', population: 623000, temp: -18, lat: 52.2978, lng: 104.2964 },
  { id: 24, name: 'Хабаровск', nameEn: 'Khabarovsk', image: 'https://cdn.poehali.dev/projects/2ce14516-e95f-4a3f-a5c2-96b9456e60a9/files/aa24d002-f9bc-44c3-9e1c-49ac8382d33e.jpg', population: 617000, temp: -20, lat: 48.4827, lng: 135.0838 },
  { id: 25, name: 'Ярославль', nameEn: 'Yaroslavl', image: 'https://cdn.poehali.dev/projects/2ce14516-e95f-4a3f-a5c2-96b9456e60a9/files/787c08a1-0df5-46d3-8eee-39b8ad757b8f.jpg', population: 608000, temp: -8, lat: 57.6261, lng: 39.8845 },
  { id: 26, name: 'Владивосток', nameEn: 'Vladivostok', image: 'https://cdn.poehali.dev/projects/2ce14516-e95f-4a3f-a5c2-96b9456e60a9/files/4e28a5aa-0ae4-4b7f-a344-b54b795f2aa3.jpg', population: 606000, temp: -10, lat: 43.1056, lng: 131.8735 },
  { id: 27, name: 'Махачкала', nameEn: 'Makhachkala', image: 'https://cdn.poehali.dev/projects/2ce14516-e95f-4a3f-a5c2-96b9456e60a9/files/adcc91bf-59f8-443c-8c8c-7195795f69a4.jpg', population: 604000, temp: 0, lat: 42.9849, lng: 47.5047 },
  { id: 28, name: 'Томск', nameEn: 'Tomsk', image: 'https://cdn.poehali.dev/projects/2ce14516-e95f-4a3f-a5c2-96b9456e60a9/files/f1712d9b-a11c-420b-821e-bcffb04a0bfa.jpg', population: 575000, temp: -16, lat: 56.4977, lng: 84.9744 },
  { id: 29, name: 'Оренбург', nameEn: 'Orenburg', image: 'https://cdn.poehali.dev/projects/2ce14516-e95f-4a3f-a5c2-96b9456e60a9/files/e4c34821-1010-45ed-8119-aefe41a5c258.jpg', population: 572000, temp: -13, lat: 51.7727, lng: 55.0988 },
  { id: 30, name: 'Кемерово', nameEn: 'Kemerovo', image: 'https://cdn.poehali.dev/projects/2ce14516-e95f-4a3f-a5c2-96b9456e60a9/files/642d9e8e-6a10-468b-a3b1-1cbfe97da0db.jpg', population: 558000, temp: -17, lat: 55.3333, lng: 86.0833 },
  { id: 31, name: 'Новокузнецк', nameEn: 'Novokuznetsk', image: 'https://cdn.poehali.dev/projects/2ce14516-e95f-4a3f-a5c2-96b9456e60a9/files/76e215d1-6794-4e1d-8d5b-f4739689d5a7.jpg', population: 544000, temp: -17, lat: 53.7557, lng: 87.1099 },
  { id: 32, name: 'Рязань', nameEn: 'Ryazan', image: 'https://cdn.poehali.dev/projects/2ce14516-e95f-4a3f-a5c2-96b9456e60a9/files/a7d4b3db-0b0e-4269-9218-72175fc4d1eb.jpg', population: 539000, temp: -7, lat: 54.6269, lng: 39.6916 },
  { id: 33, name: 'Набережные Челны', nameEn: 'Naberezhnye Chelny', image: 'https://cdn.poehali.dev/projects/2ce14516-e95f-4a3f-a5c2-96b9456e60a9/files/af34ad94-410b-44e9-8f1e-9dfe0d41b557.jpg', population: 533000, temp: -12, lat: 55.7430, lng: 52.3954 },
  { id: 34, name: 'Астрахань', nameEn: 'Astrakhan', image: 'https://cdn.poehali.dev/projects/2ce14516-e95f-4a3f-a5c2-96b9456e60a9/files/e99a7712-e8eb-43a9-8f3e-8e4f550c3889.jpg', population: 528000, temp: -4, lat: 46.3497, lng: 48.0408 },
  { id: 35, name: 'Пенза', nameEn: 'Penza', image: 'https://cdn.poehali.dev/projects/2ce14516-e95f-4a3f-a5c2-96b9456e60a9/files/f4f71dc2-82ac-4df1-95c1-bef46ac8de5b.jpg', population: 520000, temp: -9, lat: 53.2001, lng: 45.0000 },
  { id: 36, name: 'Киров', nameEn: 'Kirov', image: 'https://cdn.poehali.dev/projects/2ce14516-e95f-4a3f-a5c2-96b9456e60a9/files/3e491359-b4c5-421e-9592-7c4396b97a95.jpg', population: 518000, temp: -11, lat: 58.6035, lng: 49.6680 },
  { id: 37, name: 'Липецк', nameEn: 'Lipetsk', image: 'https://cdn.poehali.dev/projects/2ce14516-e95f-4a3f-a5c2-96b9456e60a9/files/5cbaf51c-9534-4fb0-827f-75abea0de8b1.jpg', population: 508000, temp: -7, lat: 52.6103, lng: 39.5708 },
  { id: 38, name: 'Чебоксары', nameEn: 'Cheboksary', image: 'https://cdn.poehali.dev/projects/2ce14516-e95f-4a3f-a5c2-96b9456e60a9/files/8757e3e0-ebe4-4db7-bb1e-6a5f43eb1599.jpg', population: 497000, temp: -10, lat: 56.1439, lng: 47.2486 },
  { id: 39, name: 'Балашиха', nameEn: 'Balashikha', image: 'https://cdn.poehali.dev/projects/2ce14516-e95f-4a3f-a5c2-96b9456e60a9/files/f1fef277-9632-4c2b-94a2-c3fb13108fe8.jpg', population: 507000, temp: -5, lat: 55.7964, lng: 37.9378 },
  { id: 40, name: 'Калининград', nameEn: 'Kaliningrad', image: 'https://cdn.poehali.dev/projects/2ce14516-e95f-4a3f-a5c2-96b9456e60a9/files/f8ce0932-3f8b-4090-9565-431687091da1.jpg', population: 489000, temp: -2, lat: 54.7104, lng: 20.4522 },
];

import { allAttractions, allNews, allHotels } from './citiesData';

export const attractions = allAttractions;
export const news = allNews;
export const hotels = allHotels;