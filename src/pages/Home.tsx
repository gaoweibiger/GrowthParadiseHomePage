import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Camera, MessageCircle, Heart, Star } from 'lucide-react';
import { quotes } from '../data/quotes';

const Home: React.FC = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  // 每10秒轮换语录
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => 
        (prevIndex + 1) % quotes.length
      );
    }, 10000); // 10秒

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: BookOpen,
      title: '学习导航',
      description: '英语、数学、语文等学科的趣味学习',
      link: '/learning',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Camera,
      title: '成长瞬间',
      description: '记录宝贝每一个珍贵的成长时刻',
      link: '/moments',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MessageCircle,
      title: '成长寄语',
      description: '来自家人朋友的温暖祝福与鼓励',
      link: '/messages',
      color: 'from-orange-500 to-amber-500'
    }
  ];

  // 成长相片数据
  const photos = [
    {
      id: 1,
      title: '第一次上学',
      image: 'https://images.pexels.com/photos/1720186/pexels-photo-1720186.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: '背着小书包，迈出成长第一步'
    },
    {
      id: 2,
      title: '快乐游戏时光',
      image: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: '和小伙伴们一起搭积木'
    },
    {
      id: 3,
      title: '学习新技能',
      image: 'https://images.pexels.com/photos/1322182/pexels-photo-1322182.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: '认真画画的专注模样'
    },
    {
      id: 4,
      title: '户外探索',
      image: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: '在大自然中自由奔跑'
    },
    {
      id: 5,
      title: '温馨家庭时光',
      image: 'https://images.pexels.com/photos/1128318/pexels-photo-1128318.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: '和家人一起度过美好时光'
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* 迪士尼城堡背景 */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
        }}
      />
      
      {/* 遮罩层 */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/30 to-pink-900/40 backdrop-blur-[1px]" />

      {/* 内容区域 */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Hero Section */}
        <div className="flex-1 flex items-center justify-center pt-20 pb-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-12">
              <div className="text-8xl mb-6 animate-bounce drop-shadow-2xl">🏰</div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight drop-shadow-2xl">
                高睿浠的
                <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent drop-shadow-lg">
                  成长乐园
                </span>
              </h1>
              <p className="text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed drop-shadow-lg font-medium">
                记录每一个珍贵的成长瞬间，陪伴宝贝快乐学习成长
              </p>
            </div>

            {/* Feature Cards with Liquid Glass Effect */}
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
              {features.map(({ icon: Icon, title, description, link, color }) => (
                <Link
                  key={title}
                  to={link}
                  className="group relative overflow-hidden rounded-3xl transition-all duration-500 hover:scale-105 hover:rotate-1"
                >
                  {/* 液态玻璃背景 */}
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl" />
                  
                  {/* 悬浮时的光晕效果 */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                  
                  {/* 内容 */}
                  <div className="relative p-8 h-full">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl`}>
                      <Icon className="w-10 h-10 text-white drop-shadow-lg" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-lg">{title}</h3>
                    <p className="text-white/90 leading-relaxed text-lg drop-shadow-md">{description}</p>
                    <div className="mt-6 text-white/80 group-hover:text-white transition-colors duration-300 font-medium">
                      点击探索 →
                    </div>
                  </div>

                  {/* 边框光效 */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                </Link>
              ))}
            </div>

            {/* 成长相片展示区 */}
            <div className="mb-16">
              <div className="flex items-center justify-center gap-3 mb-8">
                <Camera className="w-8 h-8 text-white drop-shadow-lg" />
                <h2 className="text-3xl font-bold text-white drop-shadow-lg">成长足迹</h2>
                <Heart className="w-8 h-8 text-pink-300 drop-shadow-lg" />
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
                {photos.map((photo, index) => (
                  <div
                    key={photo.id}
                    className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105 hover:-rotate-2"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {/* 相片容器 */}
                    <div className="aspect-square relative">
                      <img
                        src={photo.image}
                        alt={photo.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      
                      {/* 相片边框效果 */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      
                      {/* 悬浮时的光晕 */}
                      <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* 相片信息 */}
                      <div className="absolute bottom-0 left-0 right-0 p-3 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h4 className="font-bold text-sm mb-1 drop-shadow-lg">{photo.title}</h4>
                        <p className="text-xs opacity-90 drop-shadow-md">{photo.description}</p>
                      </div>
                    </div>

                    {/* 装饰性星星 */}
                    <div className="absolute -top-2 -right-2 text-yellow-300 text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse">
                      ⭐
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 底部信息区域 - 仅轮换语录 */}
        <div className="bg-white/10 backdrop-blur-md border-t border-white/20 py-6">
          <div className="max-w-6xl mx-auto px-4 text-center">
            {/* 轮换语录 - 彩虹光照效果 */}
            <div className="relative flex items-center justify-center">
              <p 
                key={currentQuoteIndex}
                className="rainbow-text text-lg font-bold max-w-4xl mx-auto leading-relaxed animate-fade-in"
              >
                {quotes[currentQuoteIndex]}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 浮动装饰元素 */}
      <div className="absolute top-1/4 left-10 text-4xl animate-pulse opacity-70">⭐</div>
      <div className="absolute top-1/3 right-16 text-3xl animate-bounce opacity-60" style={{ animationDelay: '1s' }}>🌟</div>
      <div className="absolute bottom-1/3 left-20 text-5xl animate-pulse opacity-50" style={{ animationDelay: '2s' }}>✨</div>
      <div className="absolute bottom-1/4 right-10 text-4xl animate-bounce opacity-70" style={{ animationDelay: '0.5s' }}>💫</div>
    </div>
  );
};

export default Home;