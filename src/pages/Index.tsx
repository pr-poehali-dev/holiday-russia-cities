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
          
          <div className="absolute top-6 right-6 flex flex-col items-end gap-3">
            <div 
              className="relative p-4 rounded-2xl overflow-hidden"
              style={{
                backgroundImage: 'url(https://cdn.poehali.dev/projects/2ce14516-e95f-4a3f-a5c2-96b9456e60a9/bucket/e38be841-8943-45e3-95a4-8f45ef5cf70d.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-black/20 backdrop-blur-md"></div>
              
              <div className="relative flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="relative group">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="backdrop-blur-sm border border-white/30 text-white hover:bg-white/10"
                    >
                      <Icon name="Share2" size={18} />
                    </Button>
                    <div className="absolute right-0 top-full mt-2 hidden group-hover:block bg-white/95 backdrop-blur rounded-lg shadow-xl p-2 min-w-[160px] z-50">
                      <button onClick={() => handleShare('vk')} className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded flex items-center gap-2 text-sm">
                        <Icon name="Share2" size={14} /> VK
                      </button>
                      <button onClick={() => handleShare('telegram')} className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded flex items-center gap-2 text-sm">
                        <Icon name="Send" size={14} /> Telegram
                      </button>
                      <button onClick={() => handleShare('whatsapp')} className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded flex items-center gap-2 text-sm">
                        <Icon name="MessageCircle" size={14} /> WhatsApp
                      </button>
                      <button onClick={() => handleShare('copy')} className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded flex items-center gap-2 text-sm">
                        <Icon name="Copy" size={14} /> {language === 'ru' ? 'Копировать' : 'Copy'}
                      </button>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setLanguage('ru')}
                      className={`backdrop-blur-sm border ${language === 'ru' ? 'bg-white/20 border-white/50 text-white' : 'bg-transparent border-white/30 text-white/70 hover:bg-white/10 hover:text-white'}`}
                    >
                      🇷🇺 RU
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setLanguage('en')}
                      className={`backdrop-blur-sm border ${language === 'en' ? 'bg-white/20 border-white/50 text-white' : 'bg-transparent border-white/30 text-white/70 hover:bg-white/10 hover:text-white'}`}
                    >
                      🇬🇧 EN
                    </Button>
                  </div>
                </div>
                
                <div className="px-4 py-2 backdrop-blur-sm border border-white/30 rounded-lg">
                  <div className="flex items-center gap-2 text-sm text-white">
                    <Icon name="DollarSign" className="text-green-300" size={16} />
                    <span className="font-semibold">USD:</span>
                    <span className="font-bold">{usdRate.toFixed(2)} ₽</span>
                  </div>
                </div>
                
                <div className="px-4 py-2 backdrop-blur-sm border border-white/30 rounded-lg">
                  <div className="flex items-center gap-2 text-sm text-white">
                    <Icon name="Euro" className="text-blue-300" size={16} />
                    <span className="font-semibold">EUR:</span>
                    <span className="font-bold">{eurRate.toFixed(2)} ₽</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 flex items-start pt-16 md:pt-20">
            <div className="container mx-auto px-8 md:px-12">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight drop-shadow-2xl mb-2">
                Отдых в России — города миллионщики
              </h1>
              <h2 className="text-base md:text-2xl lg:text-3xl font-semibold text-white/90 drop-shadow-xl">
                Holidays in Russia in the cities of millionaires
              </h2>
            </div>
          </div>

          <div className="absolute bottom-8 left-0 right-0">
            <div className="container mx-auto px-8 md:px-12">
              <div className="max-w-2xl">
                <div className="relative">
                  <Icon name="Search" className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60" size={24} />
                  <Input
                    type="text"
                    placeholder={language === 'ru' ? 'Поиск' : 'Search'}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-14 py-6 text-lg bg-transparent backdrop-blur-sm border-2 border-white/50 text-white placeholder:text-white/50 focus:border-white focus:bg-white/10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">

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