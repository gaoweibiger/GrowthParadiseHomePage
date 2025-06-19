import React, { useState } from 'react';
import { Play, Heart, Share2, Calendar, Eye } from 'lucide-react';

const Moments: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedMedia, setSelectedMedia] = useState<any>(null);

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
      title: '第一次写字',
      category: 'study',
      date: '2024-01-15',
      description: '宝贝第一次认真写下自己的名字，虽然歪歪扭扭但充满了爱',
      thumbnail: 'https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=400',
      likes: 24,
      views: 156
    },
    {
      id: 2,
      type: 'video',
      title: '背诵古诗',
      category: 'study',
      date: '2024-01-20',
      description: '流利背诵《静夜思》，小小年纪就有诗人的范儿',
      thumbnail: 'https://images.pexels.com/photos/1094072/pexels-photo-1094072.jpeg?auto=compress&cs=tinysrgb&w=400',
      likes: 38,
      views: 203
    },
    {
      id: 3,
      type: 'image',
      title: '搭积木城堡',
      category: 'play',
      date: '2024-01-25',
      description: '用心搭建的彩色城堡，每一块积木都是创造力的体现',
      thumbnail: 'https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=400',
      likes: 31,
      views: 189
    },
    {
      id: 4,
      type: 'video',
      title: '家庭聚餐',
      category: 'family',
      date: '2024-02-01',
      description: '全家人一起包饺子，欢声笑语满屋子',
      thumbnail: 'https://images.pexels.com/photos/1128318/pexels-photo-1128318.jpeg?auto=compress&cs=tinysrgb&w=400',
      likes: 45,
      views: 267
    },
    {
      id: 5,
      type: 'image',
      title: '获得小红花',
      category: 'achievement',
      date: '2024-02-10',
      description: '因为帮助同学获得了老师的表扬，脸上的笑容比小红花还美',
      thumbnail: 'https://images.pexels.com/photos/1197095/pexels-photo-1197095.jpeg?auto=compress&cs=tinysrgb&w=400',
      likes: 52,
      views: 298
    },
    {
      id: 6,
      type: 'video',
      title: '学骑自行车',
      category: 'daily',
      date: '2024-02-15',
      description: '摔倒了爬起来，再摔倒再爬起来，最后终于学会了！',
      thumbnail: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=400',
      likes: 41,
      views: 224
    },
    {
      id: 7,
      type: 'image',
      title: '画画作品',
      category: 'study',
      date: '2024-02-20',
      description: '用彩色画笔描绘出心中的彩虹世界',
      thumbnail: 'https://images.pexels.com/photos/1322182/pexels-photo-1322182.jpeg?auto=compress&cs=tinysrgb&w=400',
      likes: 35,
      views: 187
    },
    {
      id: 8,
      type: 'video',
      title: '唱歌表演',
      category: 'achievement',
      date: '2024-02-25',
      description: '在幼儿园的才艺表演中，勇敢地站在舞台上唱歌',
      thumbnail: 'https://images.pexels.com/photos/1148999/pexels-photo-1148999.jpeg?auto=compress&cs=tinysrgb&w=400',
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