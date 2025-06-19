import React, { useState } from 'react';
import { Play, Heart, Share2, Calendar, Eye } from 'lucide-react';

interface Moment {
  id: number;
  type: 'image' | 'video';
  title: string;
  category: string;
  date: string;
  description: string;
  thumbnail: string;
  likes: number;
  views: number;
}

const Moments: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedMedia, setSelectedMedia] = useState<Moment | null>(null);

  const categories = [
    { id: 'all', name: '全部', emoji: '🌟' },
    { id: 'study', name: '学习时光', emoji: '📚' },
    { id: 'play', name: '快乐游戏', emoji: '🎮' },
    { id: 'family', name: '家庭时光', emoji: '👨‍👩‍👧‍👦' },
    { id: 'achievement', name: '成就时刻', emoji: '🏆' },
    { id: 'daily', name: '日常生活', emoji: '🌈' }
  ];

  const moments = [
    {
      id: 1,
      type: 'image',
      title: '七岁生日纪念',
      category: 'milestone',
      date: '2024-03-21',
      description: '七岁生日的特别留影，从幼儿园小朋友成长为小学生，每一个微笑都见证着美好的蜕变',
      thumbnail: '/media/微信图片_20250321161230.jpg',
      likes: 24,
      views: 156
    },
    {
      id: 2,
      type: 'image',
      title: '幼儿园毕业典礼',
      category: 'milestone',
      date: '2024-06-27',
      description: '幼儿园毕业的重要时刻，穿着整齐的服装，脸上洋溢着对未来的憧憬和不舍的眷恋',
      thumbnail: '/media/e101dcdcf6f9375c16327e90c2e8df36_738.jpg',
      likes: 38,
      views: 203
    },
    {
      id: 3,
      type: 'image',
      title: '毕业典礼留念',
      category: 'milestone',
      date: '2024-06-28',
      description: '幼儿园毕业典礼上的珍贵合影，小小的身影即将踏入人生新的阶段，满怀期待与勇气',
      thumbnail: '/media/2x-86bc80b6991ea436a2e6d3b46d35a86b_556.png',
      likes: 31,
      views: 189
    },
    {
      id: 4,
      type: 'image',
      title: '告别幼儿园',
      category: 'milestone',
      date: '2024-06-29',
      description: '幼儿园生活的最后时光，与老师同学们的温馨告别，这份纯真的友谊将伴随一生',
      thumbnail: '/media/4x-7459933e5bc914a20bbec9bbe9cf6563_312.png',
      likes: 45,
      views: 267
    },
    {
      id: 5,
      type: 'image',
      title: '幼儿园快乐时光',
      category: 'daily',
      date: '2024-04-02',
      description: '在幼儿园里度过的美好日常，天真无邪的笑容和纯真的眼神是童年最美的写照',
      thumbnail: '/media/微信图片_20240402161113.jpg',
      likes: 52,
      views: 298
    },
    {
      id: 6,
      type: 'image',
      title: '吹气球的乐趣',
      category: 'play',
      date: '2024-06-12',
      description: '在幼儿园里专注地吹着彩色气球，小脸蛋鼓得圆圆的，这份专注和认真让人忍俊不禁',
      thumbnail: '/media/微信图片_20240612190930.jpg',
      likes: 41,
      views: 224
    },
    {
      id: 7,
      type: 'image',
      title: '夏至手工作品',
      category: 'study',
      date: '2024-06-27',
      description: '骄傲地展示自己亲手制作的夏至节气卡片，小小的创作蕴含着对传统文化的理解和热爱',
      thumbnail: '/media/微信图片_20240627085348.jpg',
      likes: 35,
      views: 187
    },
    {
      id: 8,
      type: 'image',
      title: '运动会小健将',
      category: 'achievement',
      date: '2024-11-29',
      description: '一年级运动会上投掷火箭弹的精彩瞬间，小小身躯展现出的专注和力量令人刮目相看',
      thumbnail: '/media/微信图片_20241129121116.jpg',
      likes: 48,
      views: 312
    }
  ];

  const filteredMoments = selectedCategory === 'all' 
    ? moments 
    : moments.filter(moment => moment.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">📸</div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
            成长瞬间
          </h1>
          <p className="text-gray-600 text-lg">
            记录每一个珍贵的成长时刻，见证宝贝的点滴进步
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(({ id, name, emoji }) => (
            <button
              key={id}
              onClick={() => setSelectedCategory(id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-200 hover:scale-105 ${
                selectedCategory === id
                  ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
              }`}
            >
              <span className="text-lg">{emoji}</span>
              {name}
            </button>
          ))}
        </div>

        {/* Moments Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMoments.map((moment) => (
            <div
              key={moment.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group cursor-pointer"
              onClick={() => setSelectedMedia(moment)}
            >
              <div className="relative">
                <img
                  src={moment.thumbnail}
                  alt={moment.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {moment.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/50 rounded-full p-4 group-hover:bg-black/70 transition-colors">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                  </div>
                )}
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-600">
                    {moment.type === 'video' ? '视频' : '照片'}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-green-600 transition-colors">
                    {moment.title}
                  </h3>
                  <div className="flex items-center gap-1 text-gray-500">
                    <Calendar size={14} />
                    <span className="text-xs">{moment.date}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {moment.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4 text-red-500" />
                      <span className="text-sm text-gray-600">{moment.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4 text-blue-500" />
                      <span className="text-sm text-gray-600">{moment.views}</span>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-green-500 transition-colors">
                    <Share2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-6 text-white text-center">
            <div className="text-3xl font-bold mb-2">{moments.length}</div>
            <div className="opacity-90">总回忆数</div>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl p-6 text-white text-center">
            <div className="text-3xl font-bold mb-2">{moments.filter(m => m.type === 'image').length}</div>
            <div className="opacity-90">照片数量</div>
          </div>
          <div className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl p-6 text-white text-center">
            <div className="text-3xl font-bold mb-2">{moments.filter(m => m.type === 'video').length}</div>
            <div className="opacity-90">视频数量</div>
          </div>
          <div className="bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl p-6 text-white text-center">
            <div className="text-3xl font-bold mb-2">{moments.reduce((sum, m) => sum + m.likes, 0)}</div>
            <div className="opacity-90">总点赞数</div>
          </div>
        </div>
      </div>

      {/* Modal for selected media */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={() => setSelectedMedia(null)}>
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden" onClick={e => e.stopPropagation()}>
            <div className="relative">
              {selectedMedia.type === 'video' ? (
                <div className="aspect-video bg-black flex items-center justify-center">
                  <div className="text-white text-center">
                    <Play className="w-16 h-16 mx-auto mb-4" />
                    <div>点击播放视频</div>
                  </div>
                </div>
              ) : (
                <img src={selectedMedia.thumbnail} alt={selectedMedia.title} className="w-full h-auto" />
              )}
              <button
                onClick={() => setSelectedMedia(null)}
                className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedMedia.title}</h3>
              <p className="text-gray-600 mb-4">{selectedMedia.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{selectedMedia.date}</span>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4 text-red-500" />
                    <span className="text-sm">{selectedMedia.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4 text-blue-500" />
                    <span className="text-sm">{selectedMedia.views}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Moments;