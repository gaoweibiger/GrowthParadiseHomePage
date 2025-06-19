export interface Message {
  id: number;
  author: string;
  content: string;
  date: string;
  avatar: string;
  color: string;
}

export const initialMessages: Message[] = [
  {
    id: 1,
    author: '爸爸',
    content: '看着你一天天长大，每一个进步都让我感到无比骄傲。愿你永远保持这份纯真和好奇心，勇敢地去探索这个美好的世界。',
    date: '爱你长长久久',
    avatar: '👨‍💼',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    author: '妈妈',
    content: '我的小宝贝，你就像夜空中最亮的星星，照亮了我们全家的生活。希望你健康快乐地成长，永远拥有爱的能力。',
    date: '爱你的妈妈',
    avatar: '👩‍❤️‍👨',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 3,
    author: '奶奶',
    content: '孙儿，奶奶虽然年纪大了，但看到你聪明伶俐的样子，心里比吃了蜜还甜。',
    date: '爱你的奶奶',
    avatar: '👴',
    color: 'from-amber-500 to-orange-500'
  },
  {
    id: 4,
    author: '外公',
    content: '我的小外孙，但看到你健康成长，心里特别欣慰。要听爸爸妈妈的话，好好学习。',
    date: '爱你的外公',
    avatar: '👨‍🦳',
    color: 'from-slate-500 to-gray-500'
  },
  {
    id: 5,
    author: '外婆',
    content: '浠浠，外婆最喜欢你天真无邪的笑容了。愿你永远保持这份纯真，在成长的路上勇敢前行。',
    date: '爱你的外婆',
    avatar: '👩‍🦳',
    color: 'from-violet-500 to-purple-500'
  }
];

// 预定义的头像和颜色选项
export const avatarOptions = [
  '👨‍💼', '👩‍💼', '👶', '👧', '👦', '👨‍🎓', '👩‍🎓', 
  '🧑‍🤝‍🧑', '👨‍🏫', '👩‍🏫', '👴', '👵', '👨‍🦱', 
  '👩‍🦰', '👨‍🦳', '👩‍🦳', '🧑‍💻', '👨‍⚕️', '👩‍⚕️'
];

export const colorOptions = [
  'from-blue-500 to-cyan-500',
  'from-green-500 to-emerald-500',
  'from-orange-500 to-amber-500',
  'from-purple-500 to-violet-500',
  'from-teal-500 to-cyan-500',
  'from-indigo-500 to-blue-500',
  'from-rose-500 to-pink-500',
  'from-yellow-500 to-orange-500',
  'from-emerald-500 to-teal-500',
  'from-slate-500 to-gray-500',
  'from-violet-500 to-purple-500',
  'from-cyan-500 to-blue-500'
];