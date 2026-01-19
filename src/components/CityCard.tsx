import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import type { City } from '@/data/cities';

interface CityCardProps {
  city: City;
  language: 'ru' | 'en';
  onClick: () => void;
  delay?: number;
}

const CityCard = ({ city, language, onClick, delay = 0 }: CityCardProps) => {
  const currentTime = new Date().toLocaleTimeString('ru-RU', { 
    hour: '2-digit', 
    minute: '2-digit' 
  });

  return (
    <Card 
      className="group overflow-hidden cursor-pointer hover-scale transition-all duration-300 border-4 border-amber-400 hover:border-primary hover:shadow-2xl animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
      onClick={onClick}
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={city.image} 
          alt={language === 'ru' ? city.name : city.nameEn}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        
        <div className="absolute top-3 right-3 flex gap-2">
          <div className="bg-white/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1">
            <Icon name="Thermometer" size={16} className="text-primary" />
            <span className="font-semibold text-sm">{city.temp > 0 ? '+' : ''}{city.temp}°C</span>
          </div>
          <div className="bg-white/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1">
            <Icon name="Clock" size={16} className="text-primary" />
            <span className="font-semibold text-sm">{currentTime}</span>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-2xl font-bold text-white mb-1">
            {language === 'ru' ? city.name : city.nameEn}
          </h3>
          <div className="flex items-center gap-1 text-white/90 text-sm">
            <Icon name="Users" size={14} />
            <span>{(city.population / 1000000).toFixed(1)}M {language === 'ru' ? 'чел.' : 'people'}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CityCard;