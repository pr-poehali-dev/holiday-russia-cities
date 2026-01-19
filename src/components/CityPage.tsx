import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface City {
  id: number;
  name: string;
  nameEn: string;
  image: string;
  population: number;
  temp: number;
}

interface CityPageProps {
  city: City;
  language: 'ru' | 'en';
  onBack: () => void;
}

const attractions = [
  {
    id: 1,
    nameRu: 'Красная площадь',
    nameEn: 'Red Square',
    descRu: 'Главная площадь Москвы, окружённая историческими зданиями, включая Кремль и собор Василия Блаженного.',
    descEn: 'The main square of Moscow, surrounded by historic buildings including the Kremlin and St. Basil\'s Cathedral.',
    image: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?w=800'
  },
  {
    id: 2,
    nameRu: 'Кремль',
    nameEn: 'Kremlin',
    descRu: 'Историческая крепость в центре Москвы, резиденция Президента России.',
    descEn: 'A historic fortified complex in the center of Moscow, the official residence of the President of Russia.',
    image: 'https://images.unsplash.com/photo-1520106212299-d99c443e4568?w=800'
  },
  {
    id: 3,
    nameRu: 'Собор Василия Блаженного',
    nameEn: 'St. Basil\'s Cathedral',
    descRu: 'Уникальный православный храм с разноцветными куполами, символ России.',
    descEn: 'A unique Orthodox church with colorful domes, a symbol of Russia.',
    image: 'https://images.unsplash.com/photo-1547448415-e9f5b28e570d?w=800'
  },
  {
    id: 4,
    nameRu: 'Большой театр',
    nameEn: 'Bolshoi Theatre',
    descRu: 'Один из крупнейших в мире театров оперы и балета, основан в 1776 году.',
    descEn: 'One of the world\'s largest opera and ballet theaters, founded in 1776.',
    image: 'https://images.unsplash.com/photo-1580913428706-c311e67898b3?w=800'
  },
  {
    id: 5,
    nameRu: 'Парк Горького',
    nameEn: 'Gorky Park',
    descRu: 'Центральный парк культуры и отдыха с современными зонами отдыха и развлечений.',
    descEn: 'Central Park of Culture and Leisure with modern recreation and entertainment areas.',
    image: 'https://images.unsplash.com/photo-1560859251-d571d95f9d71?w=800'
  }
];

const news = [
  {
    id: 1,
    titleRu: 'Новый культурный центр открылся в центре города',
    titleEn: 'New cultural center opened in the city center',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400',
    date: '2026-01-18'
  },
  {
    id: 2,
    titleRu: 'Фестиваль зимних развлечений начнётся в эти выходные',
    titleEn: 'Winter entertainment festival starts this weekend',
    image: 'https://images.unsplash.com/photo-1482263231623-6121096b0d3f?w=400',
    date: '2026-01-17'
  },
  {
    id: 3,
    titleRu: 'Реконструкция исторического квартала завершена',
    titleEn: 'Reconstruction of historic quarter completed',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400',
    date: '2026-01-16'
  },
  {
    id: 4,
    titleRu: 'Открытие нового музея современного искусства',
    titleEn: 'Opening of new contemporary art museum',
    image: 'https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=400',
    date: '2026-01-15'
  },
  {
    id: 5,
    titleRu: 'Запуск нового туристического маршрута по городу',
    titleEn: 'Launch of new city tourist route',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400',
    date: '2026-01-14'
  }
];

const hotels = [
  {
    id: 1,
    nameRu: 'Гранд Отель',
    nameEn: 'Grand Hotel',
    stars: 5,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400',
    website: 'https://example.com/hotel1'
  },
  {
    id: 2,
    nameRu: 'Империал Палас',
    nameEn: 'Imperial Palace',
    stars: 5,
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400',
    website: 'https://example.com/hotel2'
  },
  {
    id: 3,
    nameRu: 'Центральный Отель',
    nameEn: 'Central Hotel',
    stars: 4,
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400',
    website: 'https://example.com/hotel3'
  },
  {
    id: 4,
    nameRu: 'Парк Резиденция',
    nameEn: 'Park Residence',
    stars: 4,
    image: 'https://images.unsplash.com/photo-1455587734955-081b22074882?w=400',
    website: 'https://example.com/hotel4'
  },
  {
    id: 5,
    nameRu: 'Комфорт Инн',
    nameEn: 'Comfort Inn',
    stars: 3,
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400',
    website: 'https://example.com/hotel5'
  }
];

const CityPage = ({ city, language, onBack }: CityPageProps) => {
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(language === 'ru' ? city.name : city.nameEn)},Russia&zoom=12`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-amber-50">
      <div className="container mx-auto px-4 py-8">
        <Button onClick={onBack} variant="outline" className="mb-6 hover-scale">
          <Icon name="ArrowLeft" size={20} className="mr-2" />
          {language === 'ru' ? 'На главную' : 'Back to Home'}
        </Button>

        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4">{language === 'ru' ? city.name : city.nameEn}</h1>
          <div className="flex flex-wrap gap-4 text-lg text-muted-foreground">
            <div className="flex items-center gap-2">
              <Icon name="Users" size={20} />
              <span>{language === 'ru' ? 'Население:' : 'Population:'} {city.population.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Thermometer" size={20} />
              <span>{language === 'ru' ? 'Температура:' : 'Temperature:'} {city.temp > 0 ? '+' : ''}{city.temp}°C</span>
            </div>
          </div>
        </div>

        <Card className="mb-8 overflow-hidden animate-scale-in">
          <iframe
            src={mapUrl}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </Card>

        <Tabs defaultValue="attractions" className="mb-12">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="attractions">
              <Icon name="Camera" size={18} className="mr-2" />
              {language === 'ru' ? 'Достопримечательности' : 'Attractions'}
            </TabsTrigger>
            <TabsTrigger value="news">
              <Icon name="Newspaper" size={18} className="mr-2" />
              {language === 'ru' ? 'Новости' : 'News'}
            </TabsTrigger>
            <TabsTrigger value="hotels">
              <Icon name="Hotel" size={18} className="mr-2" />
              {language === 'ru' ? 'Отели' : 'Hotels'}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="attractions" className="space-y-6">
            {attractions.map((attraction, index) => (
              <Card key={attraction.id} className="overflow-hidden hover-scale animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="grid md:grid-cols-2 gap-6">
                  <img 
                    src={attraction.image} 
                    alt={language === 'ru' ? attraction.nameRu : attraction.nameEn}
                    className="w-full h-64 md:h-full object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3">
                      {language === 'ru' ? attraction.nameRu : attraction.nameEn}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {language === 'ru' ? attraction.descRu : attraction.descEn}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="news" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((item, index) => (
              <Card key={item.id} className="overflow-hidden hover-scale cursor-pointer animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <img 
                  src={item.image} 
                  alt={language === 'ru' ? item.titleRu : item.titleEn}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <p className="text-xs text-muted-foreground mb-2">{new Date(item.date).toLocaleDateString(language === 'ru' ? 'ru-RU' : 'en-US')}</p>
                  <h4 className="font-semibold text-lg">
                    {language === 'ru' ? item.titleRu : item.titleEn}
                  </h4>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="hotels" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotels.map((hotel, index) => (
              <Card 
                key={hotel.id} 
                className="overflow-hidden hover-scale cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => window.open(hotel.website, '_blank')}
              >
                <img 
                  src={hotel.image} 
                  alt={language === 'ru' ? hotel.nameRu : hotel.nameEn}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-lg">
                      {language === 'ru' ? hotel.nameRu : hotel.nameEn}
                    </h4>
                    <div className="flex gap-1">
                      {[...Array(hotel.stars)].map((_, i) => (
                        <Icon key={i} name="Star" size={14} className="fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    <Icon name="ExternalLink" size={14} className="mr-2" />
                    {language === 'ru' ? 'Перейти на сайт' : 'Visit Website'}
                  </Button>
                </div>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CityPage;
