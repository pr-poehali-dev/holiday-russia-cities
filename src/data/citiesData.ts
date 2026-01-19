import type { Attraction, NewsItem, Hotel } from './cities';

export const allAttractions: Record<number, Attraction[]> = {
  1: [
    { id: 1, cityId: 1, nameRu: 'Красная площадь', nameEn: 'Red Square', descRu: 'Главная площадь Москвы, окружённая историческими зданиями, включая Кремль и собор Василия Блаженного.', descEn: 'The main square of Moscow, surrounded by historic buildings including the Kremlin and St. Basil\'s Cathedral.', image: 'https://cdn.poehali.dev/projects/2ce14516-e95f-4a3f-a5c2-96b9456e60a9/files/268b3e34-311b-42c8-adee-75a12f70e9bb.jpg' },
    { id: 2, cityId: 1, nameRu: 'Московский Кремль', nameEn: 'Moscow Kremlin', descRu: 'Историческая крепость в центре Москвы, резиденция Президента России.', descEn: 'Historic fortress in the center of Moscow, residence of the President of Russia.', image: 'https://images.unsplash.com/photo-1520106212299-d99c443e4568?w=800&q=80' },
    { id: 3, cityId: 1, nameRu: 'Собор Василия Блаженного', nameEn: 'St. Basil\'s Cathedral', descRu: 'Уникальный православный храм с разноцветными куполами, построенный в XVI веке.', descEn: 'Unique Orthodox church with colorful domes, built in the 16th century.', image: 'https://images.unsplash.com/photo-1547448415-e9f5b28e570d?w=800&q=80' },
    { id: 4, cityId: 1, nameRu: 'Большой театр', nameEn: 'Bolshoi Theatre', descRu: 'Один из крупнейших театров оперы и балета в мире, основан в 1776 году.', descEn: 'One of the world\'s largest opera and ballet theaters, founded in 1776.', image: 'https://images.unsplash.com/photo-1580913428706-c311e67898b3?w=800&q=80' },
    { id: 5, cityId: 1, nameRu: 'Парк Горького', nameEn: 'Gorky Park', descRu: 'Центральный парк культуры и отдыха с современными зонами отдыха.', descEn: 'Central Park of Culture and Leisure with modern recreation areas.', image: 'https://images.unsplash.com/photo-1560859251-d571d95f9d71?w=800&q=80' }
  ],
  2: [
    { id: 6, cityId: 2, nameRu: 'Эрмитаж', nameEn: 'Hermitage Museum', descRu: 'Один из крупнейших музеев мира, коллекция насчитывает около 3 миллионов экспонатов.', descEn: 'One of the largest museums in the world, collection includes about 3 million exhibits.', image: 'https://cdn.poehali.dev/projects/2ce14516-e95f-4a3f-a5c2-96b9456e60a9/files/32c39db3-8f95-4ecc-bb2d-50b6e1e821b9.jpg' },
    { id: 7, cityId: 2, nameRu: 'Петергоф', nameEn: 'Peterhof', descRu: 'Дворцово-парковый ансамбль с фонтанами, "Русский Версаль".', descEn: 'Palace and park ensemble with fountains, "Russian Versailles".', image: 'https://images.unsplash.com/photo-1582655299221-2ff79e0f66e2?w=800&q=80' },
    { id: 8, cityId: 2, nameRu: 'Исаакиевский собор', nameEn: 'St. Isaac\'s Cathedral', descRu: 'Крупнейший православный храм Санкт-Петербурга высотой 101,5 метра.', descEn: 'The largest Orthodox church in St. Petersburg, 101.5 meters high.', image: 'https://images.unsplash.com/photo-1562013798-24ed6bb0c8a0?w=800&q=80' },
    { id: 9, cityId: 2, nameRu: 'Невский проспект', nameEn: 'Nevsky Prospect', descRu: 'Главная улица Санкт-Петербурга протяженностью 4,5 км.', descEn: 'The main street of St. Petersburg, 4.5 km long.', image: 'https://images.unsplash.com/photo-1597075933405-c80fbd3c3f1b?w=800&q=80' },
    { id: 10, cityId: 2, nameRu: 'Дворцовая площадь', nameEn: 'Palace Square', descRu: 'Главная площадь с Зимним дворцом и Александровской колонной.', descEn: 'Main square with Winter Palace and Alexander Column.', image: 'https://images.unsplash.com/photo-1580913428706-c311e67898b3?w=800&q=80' }
  ],
  3: [
    { id: 11, cityId: 3, nameRu: 'Театр оперы и балета', nameEn: 'Opera and Ballet Theatre', descRu: 'Крупнейший театр России, известен своей акустикой и архитектурой.', descEn: 'Russia\'s largest theatre, known for its acoustics and architecture.', image: 'https://cdn.poehali.dev/projects/2ce14516-e95f-4a3f-a5c2-96b9456e60a9/files/e63c30bb-96c4-4e09-9ea3-df449fee4963.jpg' },
    { id: 12, cityId: 3, nameRu: 'Часовня Святого Николая', nameEn: 'St. Nicholas Chapel', descRu: 'Символ города в самом центре Новосибирска.', descEn: 'Symbol of the city in the very center of Novosibirsk.', image: 'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=800&q=80' },
    { id: 13, cityId: 3, nameRu: 'Краеведческий музей', nameEn: 'Local History Museum', descRu: 'Музей истории Сибири с богатой коллекцией артефактов.', descEn: 'Museum of Siberian history with rich artifact collection.', image: 'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=800&q=80' },
    { id: 14, cityId: 3, nameRu: 'Набережная Оби', nameEn: 'Ob Embankment', descRu: 'Живописная набережная вдоль реки Обь для прогулок.', descEn: 'Picturesque embankment along the Ob River for walks.', image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80' },
    { id: 15, cityId: 3, nameRu: 'Зоопарк', nameEn: 'Zoo', descRu: 'Один из крупнейших зоопарков России с редкими видами.', descEn: 'One of Russia\'s largest zoos with rare species.', image: 'https://images.unsplash.com/photo-1564074893508-41dc50dd1c71?w=800&q=80' }
  ],
  4: [
    { id: 16, cityId: 4, nameRu: 'Храм-на-Крови', nameEn: 'Church on Blood', descRu: 'Храм на месте расстрела царской семьи Романовых.', descEn: 'Church at the site of the execution of the Romanov royal family.', image: 'https://cdn.poehali.dev/projects/2ce14516-e95f-4a3f-a5c2-96b9456e60a9/files/780cc076-9133-4fa4-aa24-654313ca7ecc.jpg' },
    { id: 17, cityId: 4, nameRu: 'Граница Европа-Азия', nameEn: 'Europe-Asia Border', descRu: 'Обелиск на границе двух континентов.', descEn: 'Obelisk at the border of two continents.', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80' },
    { id: 18, cityId: 4, nameRu: 'Плотинка', nameEn: 'Plotinka', descRu: 'Историческая плотина и центр города.', descEn: 'Historic dam and city center.', image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80' },
    { id: 19, cityId: 4, nameRu: 'Музей истории камнерезного искусства', nameEn: 'Stone-Cutting Museum', descRu: 'Уникальный музей уральского камнерезного мастерства.', descEn: 'Unique museum of Ural stone-cutting craftsmanship.', image: 'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=800&q=80' },
    { id: 20, cityId: 4, nameRu: 'Парк Оленьи Ручьи', nameEn: 'Deer Streams Park', descRu: 'Природный парк с живописными скалами рядом с городом.', descEn: 'Nature park with picturesque rocks near the city.', image: 'https://images.unsplash.com/photo-1560859251-d571d95f9d71?w=800&q=80' }
  ],
  5: [
    { id: 21, cityId: 5, nameRu: 'Казанский Кремль', nameEn: 'Kazan Kremlin', descRu: 'Древняя крепость с мечетью Кул-Шариф и Благовещенским собором.', descEn: 'Ancient fortress with Kul Sharif Mosque and Annunciation Cathedral.', image: 'https://cdn.poehali.dev/projects/2ce14516-e95f-4a3f-a5c2-96b9456e60a9/files/bc6c45e2-e2db-48fe-9e7c-76efcb5458bd.jpg' },
    { id: 22, cityId: 5, nameRu: 'Мечеть Кул-Шариф', nameEn: 'Kul Sharif Mosque', descRu: 'Главная мечеть Татарстана с голубыми куполами.', descEn: 'Main mosque of Tatarstan with blue domes.', image: 'https://images.unsplash.com/photo-1597075933405-c80fbd3c3f1b?w=800&q=80' },
    { id: 23, cityId: 5, nameRu: 'Улица Баумана', nameEn: 'Bauman Street', descRu: 'Пешеходная улица - сердце города с кафе и магазинами.', descEn: 'Pedestrian street - heart of the city with cafes and shops.', image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80' },
    { id: 24, cityId: 5, nameRu: 'Храм всех религий', nameEn: 'Temple of All Religions', descRu: 'Уникальное архитектурное сооружение, объединяющее религии мира.', descEn: 'Unique architectural structure uniting world religions.', image: 'https://images.unsplash.com/photo-1580913428706-c311e67898b3?w=800&q=80' },
    { id: 25, cityId: 5, nameRu: 'Озеро Кабан', nameEn: 'Lake Kaban', descRu: 'Живописное озеро в центре города с набережной.', descEn: 'Picturesque lake in the city center with embankment.', image: 'https://images.unsplash.com/photo-1560859251-d571d95f9d71?w=800&q=80' }
  ]
};

export const allNews: Record<number, NewsItem[]> = {
  1: [
    { id: 1, cityId: 1, titleRu: 'Новый культурный центр открылся в Замоскворечье', titleEn: 'New cultural center opened in Zamoskvorechye', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&q=80', date: '2026-01-18' },
    { id: 2, cityId: 1, titleRu: 'Фестиваль "Путешествие в Рождество" продлён', titleEn: 'Journey to Christmas festival extended', image: 'https://images.unsplash.com/photo-1482263231623-6121096b0d3f?w=400&q=80', date: '2026-01-17' },
    { id: 3, cityId: 1, titleRu: 'Метро запустило новую станцию "Лефортово"', titleEn: 'Metro launched new Lefortovo station', image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&q=80', date: '2026-01-16' },
    { id: 4, cityId: 1, titleRu: 'Третьяковка представила выставку авангарда', titleEn: 'Tretyakov Gallery presented avant-garde exhibition', image: 'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=400&q=80', date: '2026-01-15' },
    { id: 5, cityId: 1, titleRu: 'В Парке Горького открылся каток 18000 кв.м', titleEn: 'New 18,000 sq.m ice rink in Gorky Park', image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&q=80', date: '2026-01-14' }
  ],
  2: [
    { id: 6, cityId: 2, titleRu: 'Эрмитаж открыл выставку Древнего Египта', titleEn: 'Hermitage opened Ancient Egypt exhibition', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&q=80', date: '2026-01-18' },
    { id: 7, cityId: 2, titleRu: 'Мариинский театр объявил весенний сезон', titleEn: 'Mariinsky Theatre announced spring season', image: 'https://images.unsplash.com/photo-1482263231623-6121096b0d3f?w=400&q=80', date: '2026-01-17' },
    { id: 8, cityId: 2, titleRu: 'Ремонт фасадов на Невском проспекте', titleEn: 'Facade renovation on Nevsky Prospect', image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&q=80', date: '2026-01-16' },
    { id: 9, cityId: 2, titleRu: 'Петропавловка открыла зимний маршрут', titleEn: 'Peter and Paul Fortress opened winter route', image: 'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=400&q=80', date: '2026-01-15' },
    { id: 10, cityId: 2, titleRu: 'Виртуальные туры по дворцам Петергофа', titleEn: 'Virtual tours of Peterhof palaces', image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&q=80', date: '2026-01-14' }
  ],
  3: [
    { id: 11, cityId: 3, titleRu: 'Новый технопарк открылся в Академгородке', titleEn: 'New technopark opened in Akademgorodok', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&q=80', date: '2026-01-18' },
    { id: 12, cityId: 3, titleRu: 'Оперный представил премьеру балета "Анна Каренина"', titleEn: 'Opera House premiered Anna Karenina ballet', image: 'https://images.unsplash.com/photo-1482263231623-6121096b0d3f?w=400&q=80', date: '2026-01-17' },
    { id: 13, cityId: 3, titleRu: 'Зоопарк пополнился редкими сибирскими тиграми', titleEn: 'Zoo received rare Siberian tigers', image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&q=80', date: '2026-01-16' },
    { id: 14, cityId: 3, titleRu: 'Фестиваль "Сибирь зажигает звезды" стартовал', titleEn: 'Siberia Lights Stars festival started', image: 'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=400&q=80', date: '2026-01-15' },
    { id: 15, cityId: 3, titleRu: 'Новая ветка метро соединила районы города', titleEn: 'New metro line connected city districts', image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&q=80', date: '2026-01-14' }
  ],
  4: [
    { id: 16, cityId: 4, titleRu: 'Ельцин Центр представил новую выставку', titleEn: 'Yeltsin Center presented new exhibition', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&q=80', date: '2026-01-18' },
    { id: 17, cityId: 4, titleRu: 'Открыт новый горнолыжный курорт в 50 км', titleEn: 'New ski resort opened 50 km away', image: 'https://images.unsplash.com/photo-1482263231623-6121096b0d3f?w=400&q=80', date: '2026-01-17' },
    { id: 18, cityId: 4, titleRu: 'Уральская индустриальная биеннале объявлена', titleEn: 'Ural Industrial Biennale announced', image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&q=80', date: '2026-01-16' },
    { id: 19, cityId: 4, titleRu: 'Реконструкция набережной Исети завершена', titleEn: 'Iset embankment reconstruction completed', image: 'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=400&q=80', date: '2026-01-15' },
    { id: 20, cityId: 4, titleRu: 'Фестиваль уличного искусства "Стенограффия"', titleEn: 'Street art festival "Stenograffia"', image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&q=80', date: '2026-01-14' }
  ],
  5: [
    { id: 21, cityId: 5, titleRu: 'Универсиада 2027: началась подготовка объектов', titleEn: 'Universiade 2027: venue preparation started', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&q=80', date: '2026-01-18' },
    { id: 22, cityId: 5, titleRu: 'Новый IT-парк открылся для стартапов', titleEn: 'New IT park opened for startups', image: 'https://images.unsplash.com/photo-1482263231623-6121096b0d3f?w=400&q=80', date: '2026-01-17' },
    { id: 23, cityId: 5, titleRu: 'Фестиваль татарской культуры пройдёт в марте', titleEn: 'Tatar culture festival to be held in March', image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&q=80', date: '2026-01-16' },
    { id: 24, cityId: 5, titleRu: 'Реставрация башни Сююмбике продолжается', titleEn: 'Suyumbike Tower restoration continues', image: 'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=400&q=80', date: '2026-01-15' },
    { id: 25, cityId: 5, titleRu: 'Улица Баумана стала пешеходной зоной', titleEn: 'Bauman Street became pedestrian zone', image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&q=80', date: '2026-01-14' }
  ],
  6: [
    { id: 26, cityId: 6, titleRu: 'Канатная дорога запущена через Волгу', titleEn: 'Cable car launched across Volga', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&q=80', date: '2026-01-18' },
    { id: 27, cityId: 6, titleRu: 'Фестиваль "Горький fest" объявлен', titleEn: 'Gorky fest festival announced', image: 'https://images.unsplash.com/photo-1482263231623-6121096b0d3f?w=400&q=80', date: '2026-01-17' },
    { id: 28, cityId: 6, titleRu: 'Кремль открывает ночные экскурсии', titleEn: 'Kremlin opens night tours', image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&q=80', date: '2026-01-16' },
    { id: 29, cityId: 6, titleRu: 'Чкаловская лестница отреставрирована', titleEn: 'Chkalov Staircase restored', image: 'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=400&q=80', date: '2026-01-15' },
    { id: 30, cityId: 6, titleRu: 'Новая набережная открыта для прогулок', titleEn: 'New embankment opened for walks', image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&q=80', date: '2026-01-14' }
  ],
  7: [
    { id: 31, cityId: 7, titleRu: 'Открытие крупнейшего ТРЦ Урала', titleEn: 'Largest Ural mall opens', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&q=80', date: '2026-01-18' },
    { id: 32, cityId: 7, titleRu: 'Метеорит Челябинска стал туробъектом', titleEn: 'Chelyabinsk meteorite became tourist site', image: 'https://images.unsplash.com/photo-1482263231623-6121096b0d3f?w=400&q=80', date: '2026-01-17' },
    { id: 33, cityId: 7, titleRu: 'Зимний фестиваль льда в парке Гагарина', titleEn: 'Winter ice festival in Gagarin Park', image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&q=80', date: '2026-01-16' },
    { id: 34, cityId: 7, titleRu: 'Новый ледовый дворец открылся', titleEn: 'New ice palace opened', image: 'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=400&q=80', date: '2026-01-15' },
    { id: 35, cityId: 7, titleRu: 'Экскурсии на метзавод для туристов', titleEn: 'Metal plant tours for tourists', image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&q=80', date: '2026-01-14' }
  ],
  8: [
    { id: 36, cityId: 8, titleRu: 'Фестиваль "Рок над Волгой" анонсирован', titleEn: 'Rock nad Volgoy festival announced', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&q=80', date: '2026-01-18' },
    { id: 37, cityId: 8, titleRu: 'Музей космонавтики Козлова расширяется', titleEn: 'Kozlov Cosmonautics Museum expands', image: 'https://images.unsplash.com/photo-1482263231623-6121096b0d3f?w=400&q=80', date: '2026-01-17' },
    { id: 38, cityId: 8, titleRu: 'Набережная Волги обновлена', titleEn: 'Volga embankment renewed', image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&q=80', date: '2026-01-16' },
    { id: 39, cityId: 8, titleRu: 'Бункер Сталина открыт для экскурсий', titleEn: 'Stalin Bunker opened for tours', image: 'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=400&q=80', date: '2026-01-15' },
    { id: 40, cityId: 8, titleRu: 'Фестиваль пива "Жигули" стартует летом', titleEn: 'Zhiguli beer festival starts in summer', image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&q=80', date: '2026-01-14' }
  ],
  9: [
    { id: 41, cityId: 9, titleRu: 'Реконструкция Любинского проспекта', titleEn: 'Lyubinsky Prospect reconstruction', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&q=80', date: '2026-01-18' },
    { id: 42, cityId: 9, titleRu: 'Успенский собор открыт после реставрации', titleEn: 'Assumption Cathedral opened after restoration', image: 'https://images.unsplash.com/photo-1482263231623-6121096b0d3f?w=400&q=80', date: '2026-01-17' },
    { id: 43, cityId: 9, titleRu: 'Новый музей Врубеля расширил коллекцию', titleEn: 'New Vrubel Museum expanded collection', image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&q=80', date: '2026-01-16' },
    { id: 44, cityId: 9, titleRu: 'Ледовый городок открылся в центре', titleEn: 'Ice town opened in center', image: 'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=400&q=80', date: '2026-01-15' },
    { id: 45, cityId: 9, titleRu: 'Фестиваль сибирской кухни пройдёт зимой', titleEn: 'Siberian cuisine festival to be held in winter', image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&q=80', date: '2026-01-14' }
  ],
  10: [
    { id: 46, cityId: 10, titleRu: 'Левый берег Дона станет парковой зоной', titleEn: 'Left bank of Don to become park zone', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&q=80', date: '2026-01-18' },
    { id: 47, cityId: 10, titleRu: 'Фестиваль джаза на Дону объявлен', titleEn: 'Jazz on Don festival announced', image: 'https://images.unsplash.com/photo-1482263231623-6121096b0d3f?w=400&q=80', date: '2026-01-17' },
    { id: 48, cityId: 10, titleRu: 'Казачья станица открыта как музей', titleEn: 'Cossack village opened as museum', image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&q=80', date: '2026-01-16' },
    { id: 49, cityId: 10, titleRu: 'Новый аквапарк открылся в центре', titleEn: 'New water park opened in center', image: 'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=400&q=80', date: '2026-01-15' },
    { id: 50, cityId: 10, titleRu: 'Стадион "Ростов Арена" принимает концерты', titleEn: 'Rostov Arena hosts concerts', image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&q=80', date: '2026-01-14' }
  ]
};

export const allHotels: Record<number, Hotel[]> = {
  1: [
    { id: 1, cityId: 1, nameRu: 'Метрополь', nameEn: 'Metropol Hotel', stars: 5, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80', website: 'https://www.metropol-moscow.ru' },
    { id: 2, cityId: 1, nameRu: 'Ритц-Карлтон Москва', nameEn: 'Ritz-Carlton Moscow', stars: 5, image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&q=80', website: 'https://www.ritzcarlton.com' },
    { id: 3, cityId: 1, nameRu: 'Арарат Парк Хаятт', nameEn: 'Ararat Park Hyatt', stars: 5, image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&q=80', website: 'https://www.hyatt.com' },
    { id: 4, cityId: 1, nameRu: 'Националь', nameEn: 'Hotel National', stars: 5, image: 'https://images.unsplash.com/photo-1455587734955-081b22074882?w=400&q=80', website: 'https://www.national.ru' },
    { id: 5, cityId: 1, nameRu: 'Марриотт Гранд', nameEn: 'Marriott Grand', stars: 4, image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&q=80', website: 'https://www.marriott.com' }
  ],
  2: [
    { id: 6, cityId: 2, nameRu: 'Гранд Отель Европа', nameEn: 'Grand Hotel Europe', stars: 5, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80', website: 'https://www.grandhoteleurope.com' },
    { id: 7, cityId: 2, nameRu: 'Четыре Сезона', nameEn: 'Four Seasons', stars: 5, image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&q=80', website: 'https://www.fourseasons.com' },
    { id: 8, cityId: 2, nameRu: 'Коринтия', nameEn: 'Corinthia', stars: 5, image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&q=80', website: 'https://www.corinthia.com' },
    { id: 9, cityId: 2, nameRu: 'Астория', nameEn: 'Astoria Hotel', stars: 5, image: 'https://images.unsplash.com/photo-1455587734955-081b22074882?w=400&q=80', website: 'https://www.astoriaspb.ru' },
    { id: 10, cityId: 2, nameRu: 'Рэдиссон Ройал', nameEn: 'Radisson Royal', stars: 4, image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&q=80', website: 'https://www.radissonhotels.com' }
  ],
  3: [
    { id: 11, cityId: 3, nameRu: 'Маринс Парк Отель', nameEn: 'Marins Park Hotel', stars: 4, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80', website: 'https://www.marinsgroup.ru' },
    { id: 12, cityId: 3, nameRu: 'Азимут', nameEn: 'Azimut Hotel', stars: 4, image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&q=80', website: 'https://azimuthotels.com' },
    { id: 13, cityId: 3, nameRu: 'Парк Инн Новосибирск', nameEn: 'Park Inn Novosibirsk', stars: 4, image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&q=80', website: 'https://www.radissonhotels.com' },
    { id: 14, cityId: 3, nameRu: 'Doubletree by Hilton', nameEn: 'Doubletree by Hilton', stars: 4, image: 'https://images.unsplash.com/photo-1455587734955-081b22074882?w=400&q=80', website: 'https://www.hilton.com' },
    { id: 15, cityId: 3, nameRu: 'Ривер Парк', nameEn: 'River Park Hotel', stars: 3, image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&q=80', website: 'https://riverpark-hotel.ru' }
  ],
  4: [
    { id: 16, cityId: 4, nameRu: 'Хаятт Ридженси', nameEn: 'Hyatt Regency', stars: 5, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80', website: 'https://www.hyatt.com' },
    { id: 17, cityId: 4, nameRu: 'Атриум Палас', nameEn: 'Atrium Palace', stars: 5, image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&q=80', website: 'https://www.atriumpalace.ru' },
    { id: 18, cityId: 4, nameRu: 'Рамада', nameEn: 'Ramada', stars: 4, image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&q=80', website: 'https://www.wyndhamhotels.com' },
    { id: 19, cityId: 4, nameRu: 'Анжело', nameEn: 'Angelo Hotel', stars: 4, image: 'https://images.unsplash.com/photo-1455587734955-081b22074882?w=400&q=80', website: 'https://www.vi-hotels.com' },
    { id: 20, cityId: 4, nameRu: 'Визит', nameEn: 'Vizit Hotel', stars: 3, image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&q=80', website: 'https://www.vizit-hotel.ru' }
  ],
  5: [
    { id: 21, cityId: 5, nameRu: 'Корстон', nameEn: 'Korston Hotel', stars: 5, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80', website: 'https://kazan.korston.ru' },
    { id: 22, cityId: 5, nameRu: 'Ривьера', nameEn: 'Riviera Hotel', stars: 4, image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&q=80', website: 'https://rivierahotel.ru' },
    { id: 23, cityId: 5, nameRu: 'Ногай', nameEn: 'Nogai Hotel', stars: 4, image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&q=80', website: 'https://hotelnogai.ru' },
    { id: 24, cityId: 5, nameRu: 'Сулейман Палас', nameEn: 'Suleiman Palace', stars: 4, image: 'https://images.unsplash.com/photo-1455587734955-081b22074882?w=400&q=80', website: 'https://www.hotel-sp.ru' },
    { id: 25, cityId: 5, nameRu: 'Биляр Палас', nameEn: 'Bilyar Palace', stars: 3, image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&q=80', website: 'https://www.bilyarpalace.ru' }
  ],
  6: [
    { id: 26, cityId: 6, nameRu: 'Азимут', nameEn: 'Azimut Hotel', stars: 4, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80', website: 'https://azimuthotels.com' },
    { id: 27, cityId: 6, nameRu: 'Маринс Парк', nameEn: 'Marins Park', stars: 4, image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&q=80', website: 'https://www.marinsgroup.ru' },
    { id: 28, cityId: 6, nameRu: 'Hampton by Hilton', nameEn: 'Hampton by Hilton', stars: 3, image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&q=80', website: 'https://www.hilton.com' },
    { id: 29, cityId: 6, nameRu: 'Ибис', nameEn: 'Ibis Hotel', stars: 3, image: 'https://images.unsplash.com/photo-1455587734955-081b22074882?w=400&q=80', website: 'https://www.accor.com' },
    { id: 30, cityId: 6, nameRu: 'Волна', nameEn: 'Volna Hotel', stars: 3, image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&q=80', website: 'https://volna-hotel.ru' }
  ],
  7: [
    { id: 31, cityId: 7, nameRu: 'Видгоф', nameEn: 'Vidgof Hotel', stars: 4, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80', website: 'https://vidgof.ru' },
    { id: 32, cityId: 7, nameRu: 'Малахит', nameEn: 'Malakhit Hotel', stars: 4, image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&q=80', website: 'https://malahit74.ru' },
    { id: 33, cityId: 7, nameRu: 'Радиус', nameEn: 'Radius Hotel', stars: 3, image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&q=80', website: 'https://radius-hotel.ru' },
    { id: 34, cityId: 7, nameRu: 'Славянская', nameEn: 'Slavyanskaya', stars: 3, image: 'https://images.unsplash.com/photo-1455587734955-081b22074882?w=400&q=80', website: 'https://slavhotel.ru' },
    { id: 35, cityId: 7, nameRu: 'Южный Урал', nameEn: 'Yuzhny Ural', stars: 3, image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&q=80', website: 'https://u-ural.ru' }
  ],
  8: [
    { id: 36, cityId: 8, nameRu: 'Холидей Инн', nameEn: 'Holiday Inn', stars: 4, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80', website: 'https://www.ihg.com' },
    { id: 37, cityId: 8, nameRu: 'Венец', nameEn: 'Venets Hotel', stars: 4, image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&q=80', website: 'https://venets-hotel.ru' },
    { id: 38, cityId: 8, nameRu: 'Бристоль-Жигули', nameEn: 'Bristol-Zhiguli', stars: 4, image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&q=80', website: 'https://bristol-hotel.ru' },
    { id: 39, cityId: 8, nameRu: 'Волга', nameEn: 'Volga Hotel', stars: 3, image: 'https://images.unsplash.com/photo-1455587734955-081b22074882?w=400&q=80', website: 'https://volga-hotel.com' },
    { id: 40, cityId: 8, nameRu: 'Русь', nameEn: 'Rus Hotel', stars: 3, image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&q=80', website: 'https://rus-hotel.ru' }
  ],
  9: [
    { id: 41, cityId: 9, nameRu: 'Турист', nameEn: 'Tourist Hotel', stars: 4, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80', website: 'https://hotel-tourist.ru' },
    { id: 42, cityId: 9, nameRu: 'Омск', nameEn: 'Omsk Hotel', stars: 4, image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&q=80', website: 'https://hotelomskcity.ru' },
    { id: 43, cityId: 9, nameRu: 'Маяк', nameEn: 'Mayak Hotel', stars: 3, image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&q=80', website: 'https://mayak-hotel.ru' },
    { id: 44, cityId: 9, nameRu: 'Иртыш', nameEn: 'Irtysh Hotel', stars: 3, image: 'https://images.unsplash.com/photo-1455587734955-081b22074882?w=400&q=80', website: 'https://irtysh-hotel.ru' },
    { id: 45, cityId: 9, nameRu: 'Сибирь', nameEn: 'Sibir Hotel', stars: 3, image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&q=80', website: 'https://sibir-hotel.ru' }
  ],
  10: [
    { id: 46, cityId: 10, nameRu: 'Дон Плаза', nameEn: 'Don Plaza', stars: 4, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80', website: 'https://donplaza.ru' },
    { id: 47, cityId: 10, nameRu: 'Мармелад', nameEn: 'Marmelad Hotel', stars: 4, image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&q=80', website: 'https://marmeladhotel.ru' },
    { id: 48, cityId: 10, nameRu: 'Рич', nameEn: 'Rich Hotel', stars: 4, image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&q=80', website: 'https://richhotel.ru' },
    { id: 49, cityId: 10, nameRu: 'Амакс Конгресс', nameEn: 'Amaks Congress', stars: 3, image: 'https://images.unsplash.com/photo-1455587734955-081b22074882?w=400&q=80', website: 'https://amaks-hotels.ru' },
    { id: 50, cityId: 10, nameRu: 'Ростов', nameEn: 'Rostov Hotel', stars: 3, image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&q=80', website: 'https://rostov-hotel.ru' }
  ]
};