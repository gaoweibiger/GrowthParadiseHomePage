import React, { useState, useEffect, useRef } from 'react';
import { Send, Heart, MessageCircle, User, Calendar } from 'lucide-react';
import { initialMessages, avatarOptions, colorOptions, Message } from '../data/messages';

const Messages: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState({
    author: '',
    content: ''
  });

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  // 自动滚动效果
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || messages.length === 0) return;

    let animationId: number;

    const scroll = () => {
      setScrollPosition(prev => {
        const newPosition = prev + 0.3; // 减慢滚动速度
        const maxScroll = container.scrollHeight - container.clientHeight;
        
        // 当滚动到底部时，重置到顶部
        if (newPosition >= maxScroll) {
          return 0;
        }
        return newPosition;
      });
      
      animationId = requestAnimationFrame(scroll);
    };

    // 延迟启动滚动，确保内容已渲染
    const timer = setTimeout(() => {
      scroll();
    }, 1000);

    return () => {
      clearTimeout(timer);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [messages.length]);

  // 更新滚动位置
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollTop = scrollPosition;
    }
  }, [scrollPosition]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.author.trim() || !newMessage.content.trim()) return;

    const message: Message = {
      id: Date.now(),
      author: newMessage.author,
      content: newMessage.content,
      date: new Date().toISOString().split('T')[0],
      avatar: avatarOptions[Math.floor(Math.random() * avatarOptions.length)],
      color: colorOptions[Math.floor(Math.random() * colorOptions.length)]
    };

    setMessages(prev => [...prev, message]);
    setNewMessage({ author: '', content: '' });
    
    // 重置滚动位置，让新消息能够被看到
    setScrollPosition(0);
  };

  // 创建重复的消息列表以实现无缝滚动
  const repeatedMessages = [...messages, ...messages, ...messages];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50 pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">💝</div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent mb-4">
            成长寄语
          </h1>
          <p className="text-gray-600 text-lg">
            来自家人朋友的温暖话语，陪伴宝贝一生的美好回忆
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* 滚动消息展示区 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <MessageCircle className="w-6 h-6 text-blue-500" />
              <h2 className="text-2xl font-bold text-gray-800">温暖寄语</h2>
            </div>
            
            <div 
              ref={scrollContainerRef}
              className="h-[500px] overflow-hidden rounded-2xl bg-gradient-to-b from-blue-50 to-green-50 p-4 relative"
            >
              {/* 渐变遮罩 - 顶部 */}
              <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-blue-50 to-transparent z-10 pointer-events-none" />
              
              {/* 渐变遮罩 - 底部 */}
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-green-50 to-transparent z-10 pointer-events-none" />
              
              <div className="space-y-4">
                {repeatedMessages.map((message, index) => (
                  <div
                    key={`${message.id}-${index}`}
                    className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-md hover:shadow-lg transition-all duration-300 flex-shrink-0"
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${message.color} flex items-center justify-center text-white text-xl flex-shrink-0`}>
                        {message.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-semibold text-gray-800">{message.author}</span>
                          <div className="flex items-center gap-1 text-gray-500">
                            <Calendar size={12} />
                            <span className="text-xs">{message.date}</span>
                          </div>
                        </div>
                        <p className="text-gray-700 leading-relaxed text-sm">
                          {message.content}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <Heart className="w-4 h-4 text-red-500" />
                          <span className="text-xs text-gray-500">充满爱意</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 留言表单 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <Send className="w-6 h-6 text-green-500" />
              <h2 className="text-2xl font-bold text-gray-800">留下寄语</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                  <User size={18} />
                  您的称呼
                </label>
                <input
                  type="text"
                  value={newMessage.author}
                  onChange={(e) => setNewMessage(prev => ({ ...prev, author: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200"
                  placeholder="请输入您的称呼（如：爸爸、妈妈、老师等）"
                  required
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                  <MessageCircle size={18} />
                  寄语内容
                </label>
                <textarea
                  value={newMessage.content}
                  onChange={(e) => setNewMessage(prev => ({ ...prev, content: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200 resize-none"
                  rows={6}
                  placeholder="写下您对宝贝的祝福和鼓励话语..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white font-medium py-4 rounded-xl hover:shadow-lg transition-all duration-200 hover:scale-105"
              >
                <div className="flex items-center justify-center gap-2">
                  <Heart className="w-5 h-5" />
                  发送温暖寄语
                </div>
              </button>
            </form>

            {/* 温馨提示 */}
            <div className="mt-6 bg-gradient-to-r from-yellow-100 to-blue-100 rounded-2xl p-4">
              <div className="text-center">
                <div className="text-2xl mb-2">🌟</div>
                <div className="text-sm text-gray-600">
                  您的每一句话都是宝贝成长路上的温暖阳光
                  <br />
                  留言将在左侧滚动展示，为其他访客传递正能量
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 统计信息 */}
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-6 text-white text-center">
            <div className="text-3xl font-bold mb-2">{messages.length}</div>
            <div className="opacity-90">总寄语数</div>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl p-6 text-white text-center">
            <div className="text-3xl font-bold mb-2">{new Set(messages.map(m => m.author)).size}</div>
            <div className="opacity-90">参与人数</div>
          </div>
          <div className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl p-6 text-white text-center">
            <div className="text-3xl font-bold mb-2">∞</div>
            <div className="opacity-90">满满的爱</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;