import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Camera, MessageCircle, Star } from 'lucide-react';

const Navigation: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: '首页', icon: Star },
    { path: '/learning', label: '学习导航', icon: BookOpen },
    { path: '/moments', label: '成长瞬间', icon: Camera },
    { path: '/messages', label: '成长寄语', icon: MessageCircle },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/20 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            <div className="text-2xl">🌟</div>
            高睿浠的成长乐园
          </Link>
          
          <div className="flex gap-1">
            {navItems.map(({ path, label, icon: Icon }) => {
              const isActive = location.pathname === path;
              return (
                <Link
                  key={path}
                  to={path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-200 hover:scale-105 ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                      : 'text-gray-700 hover:bg-blue-100'
                  }`}
                >
                  <Icon size={18} />
                  <span className="hidden sm:inline">{label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;