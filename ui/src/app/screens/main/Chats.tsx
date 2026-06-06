import { Search, Plus, PenSquare } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';

const CHATS = [
  { id: 1, name: 'Mission District Pickleball', msg: 'See you all at 5 PM!', time: '2m', unread: 3, group: true, emoji: '🎾', color: '#00C2A8' },
  { id: 2, name: 'Sarah Williams', msg: 'typing...', time: 'now', unread: 1, group: false, img: 'https://images.unsplash.com/photo-1691399055809-089c52671f84?q=80&w=400', online: true },
  { id: 3, name: 'Vegan Pop-up Event', msg: 'Are dogs allowed?', time: '3h', unread: 0, group: true, emoji: '🌱', color: '#6C63FF' },
  { id: 4, name: 'Marcus Chen', msg: 'Yeah, I live near there.', time: '1d', unread: 0, group: false, img: 'https://images.unsplash.com/photo-1624395213043-fa2e123b2656?q=80&w=400', online: false },
  { id: 5, name: 'Bangalore Techies', msg: 'Hackathon this Friday! 🚀', time: '5m', unread: 7, group: true, emoji: '💻', color: '#6C63FF' },
  { id: 6, name: 'Riya Sharma', msg: 'Are you coming to the meetup?', time: '30m', unread: 0, group: false, img: 'https://i.pravatar.cc/150?img=47', online: true }
];

const TABS = ['all', 'dms', 'groups'];

export function Chats() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');
  const [query, setQuery] = useState('');

  const filteredChats = CHATS.filter(chat => {
    if (!chat.name.toLowerCase().includes(query.toLowerCase())) return false;
    if (activeTab === 'all') return true;
    if (activeTab === 'dms') return !chat.group;
    if (activeTab === 'groups') return chat.group;
    return true;
  });

  return (
    <div className="flex flex-col h-full bg-white dark:bg-[#0F1115] relative">
      {/* Header */}
      <div className="px-4 pt-12 pb-4 bg-white/90 dark:bg-[#0F1115]/90 backdrop-blur-md sticky top-0 z-10 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Chats</h1>
        <button className="w-10 h-10 rounded-full bg-[#6C63FF]/10 text-[#6C63FF] flex items-center justify-center">
          <Plus size={20} />
        </button>
      </div>

      <div className="px-4 mb-4">
        <div className="relative">
          <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search messages..." 
            className="w-full bg-gray-100 dark:bg-[#1B1B24] rounded-xl pl-12 pr-4 py-3 text-sm text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-[#6C63FF]"
          />
        </div>
      </div>

      <div className="px-4 mb-4 flex gap-2">
        {TABS.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors ${
              activeTab === tab
                ? 'bg-[#6C63FF] text-white shadow-md'
                : 'bg-gray-100 dark:bg-[#1B1B24] text-gray-500'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-24">
        <div className="flex flex-col gap-4">
          {filteredChats.map((chat) => (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              key={chat.id} 
              onClick={() => navigate(`/app/chat/${chat.id}`)}
              className="flex items-center gap-4 p-2 rounded-xl active:bg-gray-50 dark:active:bg-gray-800 transition-colors cursor-pointer"
            >
              <div className="relative">
                <div 
                  className="w-14 h-14 rounded-full overflow-hidden flex items-center justify-center text-white text-2xl font-bold shadow-sm"
                  style={chat.group ? { backgroundColor: `${chat.color}20`, color: chat.color } : { backgroundColor: '#e5e7eb' }}
                >
                  {chat.img ? (
                    <ImageWithFallback src={chat.img} alt={chat.name} className="w-full h-full object-cover" />
                  ) : (
                    chat.emoji || chat.name.charAt(0)
                  )}
                </div>
                {chat.unread > 0 && (
                  <div className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full border-2 border-white dark:border-[#0F1115]"></div>
                )}
                {!chat.group && chat.online && (
                  <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-white dark:border-[#0F1115]"></div>
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className={`font-semibold text-sm line-clamp-1 ${chat.unread > 0 ? 'text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300'}`}>
                    {chat.name}
                  </h3>
                  <span className={`text-xs ${chat.unread > 0 ? 'text-[#6C63FF] font-bold' : 'text-gray-400'}`}>
                    {chat.time}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  {chat.msg === 'typing...' ? (
                    <p className="text-sm font-medium text-[#6C63FF] italic flex items-center gap-1">
                      typing<span className="animate-pulse">...</span>
                    </p>
                  ) : (
                    <p className={`text-sm line-clamp-1 ${chat.unread > 0 ? 'text-gray-900 dark:text-white font-medium' : 'text-gray-500'}`}>
                      {chat.msg}
                    </p>
                  )}
                  {chat.unread > 0 && (
                    <div className="w-5 h-5 rounded-full bg-[#6C63FF] flex items-center justify-center text-[10px] text-white font-bold shrink-0 ml-2">
                      {chat.unread}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <button className="absolute bottom-24 right-4 w-14 h-14 bg-[#6C63FF] text-white rounded-full flex items-center justify-center shadow-lg shadow-[#6C63FF]/40 active:scale-95 transition-transform z-20">
        <PenSquare size={24} />
      </button>
    </div>
  );
}