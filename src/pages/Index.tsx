import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const seasons = [
    { number: 1, episodes: 12, year: '2005', status: 'Завершен' },
    { number: 2, episodes: 12, year: '2006', status: 'Завершен' },
    { number: 3, episodes: 12, year: '2007', status: 'Завершен' },
    { number: 4, episodes: 8, year: '2008', status: 'Завершен' },
    { number: 5, episodes: 16, year: '2009', status: 'Завершен' },
    { number: 6, episodes: 16, year: '2010', status: 'Завершен' },
    { number: 7, episodes: 24, year: '2011', status: 'Завершен' },
    { number: 8, episodes: 16, year: '2012', status: 'Завершен' },
    { number: 9, episodes: 16, year: '2013', status: 'Завершен' },
    { number: 10, episodes: 16, year: '2014', status: 'Завершен' },
    { number: 11, episodes: 16, year: '2015-2016', status: 'Завершен' },
  ];

  const mainCharacters = [
    { name: 'Александр Дедюшко', role: 'Майор Андрей Лесогоров', seasons: '1-5' },
    { name: 'Денис Рожков', role: 'Майор Сергей Глазов', seasons: '1-16' },
    { name: 'Андрей Панин', role: 'Полковник Артем Дрон', seasons: '1-16' },
    { name: 'Михаил Пореченков', role: 'Подполковник Игорь Плахов', seasons: '6-16' },
    { name: 'Александр Устюгов', role: 'Майор Роман Шилов', seasons: '10-16' },
  ];

  const actors = [
    'Александр Дедюшко', 'Денис Рожков', 'Андрей Панин', 'Михаил Пореченков', 
    'Александр Устюгов', 'Сергей Селин', 'Владимир Фекленко', 'Игорь Лифанов'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Wikipedia-style Header */}
      <div className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-normal text-black">Ментовские войны</h1>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-50">
                <Icon name="Edit" size={16} className="mr-1" />
                Править
              </Button>
              <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-50">
                <Icon name="History" size={16} className="mr-1" />
                История
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Hero Section */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <img 
                  src="/img/7ab5f4c7-d218-4968-8fe2-ffbf3b8d2421.jpg" 
                  alt="Ментовские войны постер"
                  className="w-full rounded border border-gray-300"
                />
              </div>
              <div className="md:w-2/3">
                <p className="text-base text-gray-700 leading-relaxed mb-4">
                  <strong>«Ментовские войны»</strong> — российский телевизионный художественный сериал, 
                  криминальная драма. Один из самых популярных и длительных проектов российского телевидения, 
                  выходивший с 2005 по 2016 год.
                </p>
                <p className="text-base text-gray-700 leading-relaxed mb-4">
                  Сериал рассказывает о работе оперативников петербургской милиции (позднее полиции), 
                  их борьбе с преступностью и коррупцией, а также о личных взаимоотношениях героев.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                    11 сезонов
                  </Badge>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    2005-2016
                  </Badge>
                  <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                    Криминальная драма
                  </Badge>
                </div>
              </div>
            </div>

            <Separator />

            {/* Navigation Tabs */}
            <Tabs defaultValue="seasons" className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-gray-100">
                <TabsTrigger value="seasons" className="data-[state=active]:bg-white">
                  <Icon name="Play" size={16} className="mr-2" />
                  Сезоны
                </TabsTrigger>
                <TabsTrigger value="characters" className="data-[state=active]:bg-white">
                  <Icon name="Users" size={16} className="mr-2" />
                  Персонажи
                </TabsTrigger>
                <TabsTrigger value="actors" className="data-[state=active]:bg-white">
                  <Icon name="Star" size={16} className="mr-2" />
                  Актеры
                </TabsTrigger>
                <TabsTrigger value="photos" className="data-[state=active]:bg-white">
                  <Icon name="Image" size={16} className="mr-2" />
                  Фото
                </TabsTrigger>
              </TabsList>

              <TabsContent value="seasons" className="mt-6">
                <h2 className="text-xl font-medium mb-4 border-b border-gray-200 pb-2">Сезоны</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {seasons.map((season) => (
                    <Card key={season.number} className="hover:shadow-md transition-shadow border border-gray-200">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg flex items-center justify-between">
                          <span>Сезон {season.number}</span>
                          <Badge variant="secondary" className="bg-gray-100">
                            {season.episodes} серий
                          </Badge>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">{season.year}</span>
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            {season.status}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="characters" className="mt-6">
                <h2 className="text-xl font-medium mb-4 border-b border-gray-200 pb-2">Главные персонажи</h2>
                <div className="space-y-4">
                  {mainCharacters.map((character, index) => (
                    <Card key={index} className="border border-gray-200">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                            <Icon name="User" size={24} className="text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium text-gray-900">{character.role}</h3>
                            <p className="text-gray-600">{character.name}</p>
                            <p className="text-sm text-gray-500">Сезоны: {character.seasons}</p>
                          </div>
                          <Button variant="outline" size="sm" className="text-blue-600 border-blue-200 hover:bg-blue-50">
                            Подробнее
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="actors" className="mt-6">
                <h2 className="text-xl font-medium mb-4 border-b border-gray-200 pb-2">Актеры</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {actors.map((actor, index) => (
                    <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow">
                      <CardContent className="p-4 text-center">
                        <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                          <Icon name="User" size={32} className="text-gray-500" />
                        </div>
                        <h3 className="font-medium text-gray-900 mb-2">{actor}</h3>
                        <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-50">
                          <Icon name="ExternalLink" size={14} className="mr-1" />
                          Подробнее
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="photos" className="mt-6">
                <h2 className="text-xl font-medium mb-4 border-b border-gray-200 pb-2">Галерея</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((index) => (
                    <Card key={index} className="border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                      <div className="aspect-video bg-gray-100 flex items-center justify-center">
                        <Icon name="Image" size={48} className="text-gray-400" />
                      </div>
                      <CardContent className="p-3">
                        <p className="text-sm text-gray-600">Кадр из сериала #{index}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="border border-gray-200 sticky top-24">
              <CardHeader>
                <CardTitle className="text-lg">Информация о сериале</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Жанр</h4>
                  <p className="text-gray-600 text-sm">Криминальная драма</p>
                </div>
                <Separator />
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Годы выхода</h4>
                  <p className="text-gray-600 text-sm">2005 — 2016</p>
                </div>
                <Separator />
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Страна</h4>
                  <p className="text-gray-600 text-sm">Россия</p>
                </div>
                <Separator />
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Канал</h4>
                  <p className="text-gray-600 text-sm">НТВ</p>
                </div>
                <Separator />
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Количество сезонов</h4>
                  <p className="text-gray-600 text-sm">11</p>
                </div>
                <Separator />
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Количество серий</h4>
                  <p className="text-gray-600 text-sm">164</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;