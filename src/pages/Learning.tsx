import React, { useState } from 'react';
import { BookOpen, Calculator, PenTool, ChevronRight, GraduationCap, Star, Microscope, Scale, Lock } from 'lucide-react';

const Learning: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<string>('');

  const subjects = [
    {
      id: 'english',
      name: '英语',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      description: '趣味英语学习，培养语言兴趣'
    },
    {
      id: 'math',
      name: '数学',
      icon: Calculator,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      description: '数学思维训练，逻辑推理能力'
    },
    {
      id: 'chinese',
      name: '语文',
      icon: PenTool,
      color: 'from-orange-500 to-amber-500',
      bgColor: 'bg-orange-50',
      description: '中文阅读写作，传统文化学习'
    },
    {
      id: 'science',
      name: '科学',
      icon: Microscope,
      color: 'from-purple-500 to-violet-500',
      bgColor: 'bg-purple-50',
      description: '探索自然奥秘，培养科学思维'
    },
    {
      id: 'ethics',
      name: '道德与法制',
      icon: Scale,
      color: 'from-teal-500 to-cyan-500',
      bgColor: 'bg-teal-50',
      description: '品德修养教育，法制意识培养'
    }
  ];

  // 年级数据
  const grades = [
    { id: 'grade1', name: '一年级', terms: ['上学期', '下学期'], available: true },
    { id: 'grade2', name: '二年级', terms: ['上学期', '下学期'], available: false },
    { id: 'grade3', name: '三年级', terms: ['上学期', '下学期'], available: false },
    { id: 'grade4', name: '四年级', terms: ['上学期', '下学期'], available: false },
    { id: 'grade5', name: '五年级', terms: ['上学期', '下学期'], available: false },
    { id: 'grade6', name: '六年级', terms: ['上学期', '下学期'], available: false }
  ];

  // 学科链接配置
  const subjectLinks: { [key: string]: { [key: string]: string } } = {
    'english': {
      '一年级下学期': 'https://pep2.ruixi.me/'
    },
    'math': {
      '一年级下学期': 'https://math2.ruixi.me/'
    }
  };

  const selectedSubjectData = subjects.find(s => s.id === selectedSubject);

  const handleGradeTermClick = (gradeName: string, term: string, available: boolean) => {
    if (!available) {
      alert(`我还没有到${gradeName}，${gradeName}的内容暂时无法学习哦！`);
      return;
    }

    const gradeTermKey = `${gradeName}${term}`;
    const link = subjectLinks[selectedSubject]?.[gradeTermKey];
    
    if (link) {
      // 在新窗口打开链接
      window.open(link, '_blank');
    } else {
      alert(`即将进入：${selectedSubjectData?.name} - ${gradeName}${term}的学习内容`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🎓</div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            学习导航
          </h1>
          <p className="text-gray-600 text-lg">
            选择学科和年级，开始你的学习之旅
          </p>
        </div>

        {!selectedSubject ? (
          // 学科选择界面
          <div>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
              {subjects.map(({ id, name, icon: Icon, color, bgColor, description }) => (
                <div
                  key={id}
                  onClick={() => setSelectedSubject(id)}
                  className={`${bgColor} rounded-3xl p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl group`}
                >
                  <div className="text-center">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{name}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4 text-sm">{description}</p>
                    <div className="flex items-center justify-center gap-2 text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                      <span>开始学习</span>
                      <ChevronRight size={16} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          // 年级选择界面
          <div>
            {/* 返回按钮和当前学科信息 */}
            <div className="mb-8">
              <button
                onClick={() => setSelectedSubject('')}
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-6 transition-colors"
              >
                <ChevronRight size={18} className="rotate-180" />
                返回学科选择
              </button>

              <div className={`${selectedSubjectData?.bgColor} rounded-3xl p-6`}>
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${selectedSubjectData?.color} flex items-center justify-center`}>
                    <selectedSubjectData.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800">{selectedSubjectData?.name}</h2>
                    <p className="text-gray-600">{selectedSubjectData?.description}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 年级选择 */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">选择年级</h3>
              <p className="text-gray-600">点击年级和学期开始学习</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {grades.map(({ id, name, terms, available }) => (
                <div key={id} className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${!available ? 'opacity-75' : ''}`}>
                  <div className="text-center mb-4">
                    <div className={`w-16 h-16 rounded-full ${available ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-gradient-to-r from-gray-400 to-gray-500'} flex items-center justify-center mx-auto mb-3 relative`}>
                      {available ? (
                        <GraduationCap className="w-8 h-8 text-white" />
                      ) : (
                        <Lock className="w-8 h-8 text-white" />
                      )}
                    </div>
                    <h4 className={`text-xl font-bold ${available ? 'text-gray-800' : 'text-gray-500'}`}>
                      {name}
                      {!available && <span className="text-sm block text-gray-400 font-normal">暂未开放</span>}
                    </h4>
                  </div>

                  <div className="space-y-3">
                    {terms.map((term) => {
                      const gradeTermKey = `${name}${term}`;
                      const hasLink = subjectLinks[selectedSubject]?.[gradeTermKey];
                      
                      return (
                        <button
                          key={term}
                          onClick={() => handleGradeTermClick(name, term, available)}
                          className={`w-full py-3 px-4 rounded-xl font-medium transition-all duration-200 flex items-center justify-between group relative ${
                            available 
                              ? `bg-gradient-to-r ${selectedSubjectData?.color} text-white hover:shadow-lg hover:scale-105` 
                              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          }`}
                          disabled={!available}
                        >
                          <span className="flex items-center gap-2">
                            {term}
                            {hasLink && available && (
                              <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                                可学习
                              </span>
                            )}
                          </span>
                          <div className="flex items-center gap-1">
                            {available ? (
                              <>
                                <Star size={16} className="opacity-70 group-hover:opacity-100" />
                                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                              </>
                            ) : (
                              <Lock size={16} className="opacity-70" />
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* 学习建议 */}
            <div className="mt-8 bg-gradient-to-r from-yellow-100 to-blue-100 rounded-2xl p-6">
              <div className="text-center">
                <div className="text-3xl mb-3">💡</div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">学习小贴士</h4>
                <p className="text-gray-600 text-sm">
                  建议按照年级顺序循序渐进学习，每天坚持30分钟，养成良好的学习习惯。
                  <br />
                  遇到困难不要气馁，可以重复学习巩固基础知识。
                  <br />
                  标有"可学习"的课程可以直接进入学习平台。
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Learning;