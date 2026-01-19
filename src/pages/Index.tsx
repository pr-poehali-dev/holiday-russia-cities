import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import CityCard from '@/components/CityCard';
import CityPage from '@/components/CityPage';

interface City {
  id: number;
  name: string;
  nameEn: string;
  image: string;
  population: number;
  temp: number;
}

const cities: City[] = [
  { id: 1, name: 'Москва', nameEn: 'Moscow', image: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?w=800', population: 13010000, temp: -5 },
  { id: 2, name: 'Санкт-Петербург', nameEn: 'Saint Petersburg', image: 'https://images.unsplash.com/photo-1555991100-7f3e33b59759?w=800', population: 5600000, temp: -8 },
  { id: 3, name: 'Новосибирск', nameEn: 'Novosibirsk', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800', population: 1633000, temp: -15 },
  { id: 4, name: 'Екатеринбург', nameEn: 'Yekaterinburg', image: 'https://images.unsplash.com/photo-1562013798-24ed6bb0c8a0?w=800', population: 1544000, temp: -12 },
  { id: 5, name: 'Казань', nameEn: 'Kazan', image: 'https://images.unsplash.com/photo-1597075933405-c80fbd3c3f1b?w=800', population: 1308000, temp: -10 },
  { id: 6, name: 'Нижний Новгород', nameEn: 'Nizhny Novgorod', image: 'https://images.unsplash.com/photo-1564074893508-41dc50dd1c71?w=800', population: 1228000, temp: -9 },
  { id: 7, name: 'Челябинск', nameEn: 'Chelyabinsk', image: 'https://images.unsplash.com/photo-1564074893508-41dc50dd1c71?w=800', population: 1188000, temp: -14 },
  { id: 8, name: 'Самара', nameEn: 'Samara', image: 'https://images.unsplash.com/photo-1555992336-fb0d29498b13?w=800', population: 1145000, temp: -11 },
  { id: 9, name: 'Омск', nameEn: 'Omsk', image: 'https://images.unsplash.com/photo-1562013798-24ed6bb0c8a0?w=800', population: 1125000, temp: -16 },
  { id: 10, name: 'Ростов-на-Дону', nameEn: 'Rostov-on-Don', image: 'https://images.unsplash.com/photo-1597075933405-c80fbd3c3f1b?w=800', population: 1142000, temp: -3 },
  { id: 11, name: 'Уфа', nameEn: 'Ufa', image: 'https://images.unsplash.com/photo-1564074893508-41dc50dd1c71?w=800', population: 1145000, temp: -13 },
  { id: 12, name: 'Красноярск', nameEn: 'Krasnoyarsk', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800', population: 1093000, temp: -17 },
  { id: 13, name: 'Воронеж', nameEn: 'Voronezh', image: 'https://images.unsplash.com/photo-1555992336-fb0d29498b13?w=800', population: 1058000, temp: -7 },
  { id: 14, name: 'Пермь', nameEn: 'Perm', image: 'https://images.unsplash.com/photo-1562013798-24ed6bb0c8a0?w=800', population: 1055000, temp: -14 },
  { id: 15, name: 'Волгоград', nameEn: 'Volgograd', image: 'https://images.unsplash.com/photo-1597075933405-c80fbd3c3f1b?w=800', population: 1008000, temp: -8 },
];

const Index = () => {
  const [language, setLanguage] = useState<'ru' | 'en'>('ru');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [usdRate, setUsdRate] = useState(95.50);
  const [eurRate, setEurRate] = useState(103.20);
  const [visitorCount, setVisitorCount] = useState(12458);

  useEffect(() => {
    const interval = setInterval(() => {
      setUsdRate(prev => prev + (Math.random() - 0.5) * 0.1);
      setEurRate(prev => prev + (Math.random() - 0.5) * 0.1);
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const filteredCities = cities.filter(city => {
    const query = searchQuery.toLowerCase();
    return city.name.toLowerCase().includes(query) || 
           city.nameEn.toLowerCase().includes(query);
  });

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = language === 'ru' ? 'Отдых в России - города миллионщики' : 'Holidays in Russia - Million Cities';
    
    const urls: Record<string, string> = {
      vk: `https://vk.com/share.php?url=${encodeURIComponent(url)}`,
      telegram: `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`,
      copy: url
    };

    if (platform === 'copy') {
      navigator.clipboard.writeText(url);
      alert(language === 'ru' ? 'Ссылка скопирована!' : 'Link copied!');
    } else {
      window.open(urls[platform], '_blank');
    }
  };

  if (selectedCity) {
    return (
      <CityPage 
        city={selectedCity} 
        language={language}
        onBack={() => setSelectedCity(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-amber-50">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-2 leading-tight">
            {language === 'ru' ? 'ОТДЫХ В РОССИИ' : 'HOLIDAYS IN RUSSIA'}
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-6">
            {language === 'ru' ? 'Города миллионщики' : 'Cities of Millionaires'}
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <Card className="px-6 py-3 bg-white/80 backdrop-blur">
              <div className="flex items-center gap-2">
                <Icon name="DollarSign" className="text-green-600" size={20} />
                <span className="font-semibold">USD:</span>
                <span className="text-primary font-bold">{usdRate.toFixed(2)} ₽</span>
              </div>
            </Card>
            
            <Card className="px-6 py-3 bg-white/80 backdrop-blur">
              <div className="flex items-center gap-2">
                <Icon name="Euro" className="text-blue-600" size={20} />
                <span className="font-semibold">EUR:</span>
                <span className="text-primary font-bold">{eurRate.toFixed(2)} ₽</span>
              </div>
            </Card>

            <div className="flex gap-2">
              <Button
                variant={language === 'ru' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setLanguage('ru')}
              >
                🇷🇺 RU
              </Button>
              <Button
                variant={language === 'en' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setLanguage('en')}
              >
                🇬🇧 EN
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            <Button variant="outline" size="sm" onClick={() => handleShare('vk')}>
              <Icon name="Share2" size={16} className="mr-1" />
              VK
            </Button>
            <Button variant="outline" size="sm" onClick={() => handleShare('telegram')}>
              <Icon name="Send" size={16} className="mr-1" />
              Telegram
            </Button>
            <Button variant="outline" size="sm" onClick={() => handleShare('whatsapp')}>
              <Icon name="MessageCircle" size={16} className="mr-1" />
              WhatsApp
            </Button>
            <Button variant="outline" size="sm" onClick={() => handleShare('copy')}>
              <Icon name="Copy" size={16} className="mr-1" />
              {language === 'ru' ? 'Копировать' : 'Copy'}
            </Button>
          </div>

          <div className="max-w-xl mx-auto">
            <div className="relative">
              <Icon name="Search" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                type="text"
                placeholder={language === 'ru' ? 'Поиск по городам, достопримечательностям, отелям...' : 'Search cities, attractions, hotels...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-6 text-lg"
              />
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredCities.map((city, index) => (
            <CityCard
              key={city.id}
              city={city}
              language={language}
              onClick={() => setSelectedCity(city)}
              delay={index * 50}
            />
          ))}
        </div>

        {filteredCities.length === 0 && (
          <div className="text-center py-12">
            <Icon name="SearchX" size={48} className="mx-auto text-muted-foreground mb-4" />
            <p className="text-xl text-muted-foreground">
              {language === 'ru' ? 'Ничего не найдено' : 'Nothing found'}
            </p>
          </div>
        )}

        <footer className="text-center mt-16 pt-8 border-t">
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Icon name="Users" size={16} />
            <span>{language === 'ru' ? 'Посещений:' : 'Visits:'} {visitorCount.toLocaleString()}</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
