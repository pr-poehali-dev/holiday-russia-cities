import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import CityCard from '@/components/CityCard';
import CityPage from '@/components/CityPage';
import { cities, attractions, news, hotels } from '@/data/cities';
import type { City } from '@/data/cities';

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
        attractions={attractions[selectedCity.id] || []}
        news={news[selectedCity.id] || []}
        hotels={hotels[selectedCity.id] || []}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-amber-50">
      <div className="w-full relative mb-12">
        <div 
          className="w-full h-[500px] bg-cover bg-center relative"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/projects/2ce14516-e95f-4a3f-a5c2-96b9456e60a9/bucket/2c91064d-49cb-47c5-8c85-3428431f6628.png)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-8 md:px-12">
              <h1 className="text-4xl md:text-7xl font-bold text-white mb-3 leading-tight drop-shadow-2xl">
                {language === 'ru' ? 'Отдых в России — города миллионщики' : 'HOLIDAYS IN RUSSIA'}
              </h1>
              {language === 'en' && (
                <h2 className="text-2xl md:text-4xl font-semibold text-white/90 drop-shadow-xl">
                  in the cities of millionaires
                </h2>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12 animate-fade-in">

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