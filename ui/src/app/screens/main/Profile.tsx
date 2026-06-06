import { Settings, Edit3, Grid, List, Bookmark, Moon, Sun, Bell, MapPin, BadgeCheck, Users, MessageCircle } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { useTheme } from 'next-themes';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';

const IMAGES = [
  'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=400',
  'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=400',
  'https://images.unsplash.com/photo-1546519638405-a9f5f2f75aaa?q=80&w=400',
  'https://images.unsplash.com/photo-1524592094714-0f0654e359e0?q=80&w=400',
  'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=400',
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400',
  'https://images.unsplash.com/photo-1571008887538-b36bb32f4571?q=80&w=400',
  'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=400',
  'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=400'
];

export function Profile() {
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('posts');
  const [isConnected, setIsConnected] = useState(false); // Used if viewing someone else's profile

  return (
    <div className="flex flex-col h-full bg-white dark:bg-[#0F1115] relative overflow-hidden">
      {/* Header banner gradient */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#6C63FF]/20 to-transparent pointer-events-none"></div>

      {/* Header */}
      <div className="px-4 pt-12 pb-4 bg-transparent sticky top-0 z-10 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-1">
          Alex Rivera <BadgeCheck size={20} className="text-[#6C63FF]" />
        </h1>
        <div className="flex items-center gap-2">
          <button onClick={() => navigate('/app/notifications')} className="w-10 h-10 rounded-full bg-white/50 dark:bg-[#1B1B24]/50 backdrop-blur-md flex items-center justify-center text-gray-700 dark:text-gray-200">
            <Bell size={20} />
          </button>
          <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} 
            className="w-10 h-10 rounded-full bg-white/50 dark:bg-[#1B1B24]/50 backdrop-blur-md flex items-center justify-center text-gray-700 dark:text-gray-200"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="w-10 h-10 rounded-full bg-white/50 dark:bg-[#1B1B24]/50 backdrop-blur-md flex items-center justify-center text-gray-700 dark:text-gray-200">
            <Settings size={20} />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-24 z-10">
        <div className="flex items-center gap-6 mb-4 mt-2">
          <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200 border-4 border-white dark:border-[#0F1115] shadow-lg shrink-0">
            <ImageWithFallback src="https://images.unsplash.com/photo-1624395213043-fa2e123b2656?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFkc2hvdCUyMHBvcnRyYWl0JTIwbWFufGVufDF8fHx8MTc3OTM3MzMwNHww&ixlib=rb-4.1.0&q=80&w=1080" alt="Alex" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 flex justify-between gap-2 text-center pr-2">
            <div>
              <p className="font-bold text-lg text-gray-900 dark:text-white">42</p>
              <p className="text-[10px] uppercase font-bold tracking-wider text-gray-500">Posts</p>
            </div>
            <div>
              <p className="font-bold text-lg text-gray-900 dark:text-white">318</p>
              <p className="text-[10px] uppercase font-bold tracking-wider text-gray-500">Connections</p>
            </div>
            <div>
              <p className="font-bold text-lg text-gray-900 dark:text-white">12</p>
              <p className="text-[10px] uppercase font-bold tracking-wider text-gray-500">Communities</p>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">
            <span className="flex items-center gap-1"><MapPin size={14} className="text-[#6C63FF]" /> Bangalore, IN</span>
            <span>•</span>
            <span>🎓 BITS Pilani</span>
          </div>
          <p className="text-sm text-gray-800 dark:text-gray-200 mb-3 leading-relaxed">
            Photography, Coffee, and Code. Building stuff for the web and looking for running buddies around Indiranagar! 🏃‍♂️
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {['🏏 Sports', '💻 Tech', '☕ Cafes', '🎵 Music'].map(tag => (
              <span key={tag} className="px-2 py-1 bg-[#F0ECF9] dark:bg-[#1B1B24] border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 rounded text-[10px] font-bold">
                {tag}
              </span>
            ))}
          </div>

          {/* Action buttons - Self profile */}
          <button className="w-full py-2.5 bg-gray-100 dark:bg-[#1B1B24] text-gray-900 dark:text-white font-bold rounded-xl flex items-center justify-center gap-2 border border-gray-200 dark:border-gray-800 shadow-sm active:scale-95 transition-transform">
            <Edit3 size={16} /> Edit Profile
          </button>
          
          {/* Alternative: Action buttons for other users profile
          <div className="flex gap-2">
            <button 
              onClick={() => setIsConnected(!isConnected)}
              className={`flex-1 py-2.5 font-bold rounded-xl flex items-center justify-center gap-2 shadow-sm transition-colors ${isConnected ? 'bg-[#00C2A8]/10 text-[#00C2A8] border border-[#00C2A8]' : 'bg-[#6C63FF] text-white'}`}
            >
              <Users size={16} /> {isConnected ? 'Connected' : 'Connect'}
            </button>
            <button className="flex-1 py-2.5 bg-gray-100 dark:bg-[#1B1B24] text-gray-900 dark:text-white font-bold rounded-xl flex items-center justify-center gap-2 border border-gray-200 dark:border-gray-800 shadow-sm">
              <MessageCircle size={16} /> Message
            </button>
          </div>
          */}
        </div>

        {/* Tabs */}
        <div className="flex justify-around border-b border-gray-200 dark:border-gray-800 mb-4 sticky top-16 bg-white dark:bg-[#0F1115] z-10">
          <button 
            onClick={() => setActiveTab('posts')}
            className={`flex-1 py-3 flex justify-center border-b-2 transition-colors ${activeTab === 'posts' ? 'text-[#6C63FF] border-[#6C63FF]' : 'text-gray-400 border-transparent'}`}
          >
            <Grid size={24} />
          </button>
          <button 
            onClick={() => setActiveTab('communities')}
            className={`flex-1 py-3 flex justify-center border-b-2 transition-colors ${activeTab === 'communities' ? 'text-[#6C63FF] border-[#6C63FF]' : 'text-gray-400 border-transparent'}`}
          >
            <Users size={24} />
          </button>
          <button 
            onClick={() => setActiveTab('activities')}
            className={`flex-1 py-3 flex justify-center border-b-2 transition-colors ${activeTab === 'activities' ? 'text-[#6C63FF] border-[#6C63FF]' : 'text-gray-400 border-transparent'}`}
          >
            <List size={24} />
          </button>
          <button 
            onClick={() => setActiveTab('media')}
            className={`flex-1 py-3 flex justify-center border-b-2 transition-colors ${activeTab === 'media' ? 'text-[#6C63FF] border-[#6C63FF]' : 'text-gray-400 border-transparent'}`}
          >
            <Bookmark size={24} />
          </button>
        </div>

        {/* Tab Content */}
        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'posts' && (
            <div className="grid grid-cols-3 gap-1">
              {IMAGES.map((img, i) => (
                <div key={i} className="aspect-square bg-gray-200 dark:bg-[#1B1B24] overflow-hidden group cursor-pointer relative">
                  <ImageWithFallback src={img} alt="Post" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
              ))}
            </div>
          )}

          {activeTab === 'communities' && (
            <div className="flex flex-col gap-3">
              {[
                { name: 'Bangalore Techies', members: '4.2k', icon: '💻', color: '#6C63FF' },
                { name: 'Indiranagar Runners', members: '1.2k', icon: '🏃', color: '#00C2A8' },
                { name: 'Coffee Nomads', members: '850', icon: '☕', color: '#464555' }
              ].map((c, i) => (
                <div key={i} onClick={() => navigate('/app/community/1')} className="flex items-center gap-4 p-3 bg-white dark:bg-[#1B1B24] border border-gray-200 dark:border-gray-800 rounded-xl cursor-pointer shadow-sm">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center text-xl" style={{ backgroundColor: `${c.color}20` }}>
                    {c.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-gray-900 dark:text-white">{c.name}</h3>
                    <p className="text-xs text-gray-500">{c.members} members</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'activities' && (
            <div className="flex flex-col gap-3">
              {[
                { title: 'Evening Cricket Match', date: 'Today, 5 PM', loc: 'Cubbon Park' },
                { title: 'Morning Yoga Flow', date: 'Tomorrow, 7 AM', loc: 'Lalbagh' }
              ].map((a, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-white dark:bg-[#1B1B24] border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-[#6C63FF]/10 text-[#6C63FF] rounded-full flex items-center justify-center">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-gray-900 dark:text-white">{a.title}</h3>
                    <p className="text-xs text-gray-500 mt-1">{a.date} • {a.loc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'media' && (
            <div className="text-center py-10">
              <Bookmark size={40} className="mx-auto text-gray-300 dark:text-gray-700 mb-4" />
              <h3 className="font-bold text-gray-900 dark:text-white mb-1">No saved items yet</h3>
              <p className="text-sm text-gray-500">Posts and places you save will appear here.</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}