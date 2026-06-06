import { useState } from 'react';
import { MapPin, PlusCircle, Bell, Heart, MessageCircle, Share2, Bookmark, Users, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router';

const FEED_ITEMS = [
  { id: 1, type: 'activity', title: 'Evening Cricket Match', category: '🏏 Sports', location: 'Cubbon Park', distance: '0.3 km', time: 'Today, 5 PM', participants: 8, maxParticipants: 15, img: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=800' },
  { id: 2, type: 'post', user: '@priya_b', avatar: 'https://i.pravatar.cc/150?img=5', location: 'Koramangala', time: '12m', text: 'The new rooftop cafe on 80ft road is 🔥 Views are insane. Definitely the spot this weekend.', img: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800', likes: 47, comments: 12, saved: false, liked: false },
  { id: 3, type: 'community', community: 'Bangalore Techies', emoji: '💻', color: '#6C63FF', time: '1h', text: 'Big announcement! Our monthly hackathon is back. 48 hours, Rs 1L prize pool. Register link in bio 🚀', members: 4200 },
  { id: 4, type: 'activity', title: 'Startup Networking Night', category: '💼 Tech', location: 'Indiranagar', distance: '1.2 km', time: 'Fri, 7 PM', participants: 24, maxParticipants: 40, img: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800' },
  { id: 5, type: 'post', user: '@rohan_dev', avatar: 'https://i.pravatar.cc/150?img=8', location: 'HSR Layout', time: '45m', text: 'Anyone else at the Bangalore Open Mic last night? That last performer was something else entirely 🎤', img: null, likes: 23, comments: 8, saved: false, liked: false },
  { id: 6, type: 'community', community: 'Koramangala Foodies', emoji: '🍜', color: '#00C2A8', time: '3h', text: 'Hidden gem alert: There is a tiny udupi place in the 6th block that has the best masala dosa you will ever try. Only 8 tables. Go early!', members: 2800 },
  { id: 7, type: 'post', user: '@meera_creates', avatar: 'https://i.pravatar.cc/150?img=9', location: 'Indiranagar', time: '2h', text: 'Golden hour walk through the neighborhood. These streets never disappoint 🌅', img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800', likes: 89, comments: 31, saved: false, liked: false }
];

const TABS = ['All Nearby', 'Activities', 'Posts', 'Communities'];

export function Home() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('All Nearby');
  const [feedItems, setFeedItems] = useState(FEED_ITEMS);
  const [joinedActivities, setJoinedActivities] = useState<Set<number>>(new Set());

  const handleLike = (id: number) => {
    setFeedItems(prev => prev.map(item => {
      if (item.id === id && item.type === 'post') {
        return {
          ...item,
          liked: !item.liked,
          likes: item.liked ? item.likes! - 1 : item.likes! + 1
        };
      }
      return item;
    }));
  };

  const handleSave = (id: number) => {
    setFeedItems(prev => prev.map(item => {
      if (item.id === id && item.type === 'post') {
        return { ...item, saved: !item.saved };
      }
      return item;
    }));
  };

  const handleJoin = (id: number) => {
    setJoinedActivities(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const filteredFeed = feedItems.filter(item => {
    if (activeTab === 'All Nearby') return true;
    if (activeTab === 'Activities') return item.type === 'activity';
    if (activeTab === 'Posts') return item.type === 'post';
    if (activeTab === 'Communities') return item.type === 'community';
    return true;
  });

  return (
    <div className="flex flex-col bg-[#FCF8FF] dark:bg-[#0F1115] min-h-full font-sans relative">
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-12 pb-2 sticky top-0 bg-[#FCF8FF]/90 dark:bg-[#0F1115]/90 backdrop-blur-md z-20">
        <div className="flex items-center gap-2 text-[#6C63FF]">
          <MapPin size={24} />
          <span className="font-bold text-xl tracking-tight">Bangalore, IN</span>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={() => navigate('/app/notifications')} className="relative text-gray-900 dark:text-white">
            <Bell size={24} />
            <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white dark:border-[#0F1115]"></span>
          </button>
          <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200">
            <ImageWithFallback src="https://images.unsplash.com/photo-1624395213043-fa2e123b2656?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFkc2hvdCUyMHBvcnRyYWl0JTIwbWFufGVufDF8fHx8MTc3OTM3MzMwNHww&ixlib=rb-4.1.0&q=80&w=1080" alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar pb-24">
        {/* Stories */}
        <div className="px-4 py-4 flex gap-4 overflow-x-auto no-scrollbar">
          <div className="flex flex-col items-center gap-1 shrink-0">
            <div className="w-16 h-16 rounded-full border-2 border-gray-200 dark:border-gray-800 flex items-center justify-center text-[#6C63FF]">
              <PlusCircle size={28} />
            </div>
            <span className="text-[10px] text-gray-500 font-medium">Add Story</span>
          </div>
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex flex-col items-center gap-1 shrink-0">
              <div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-[#00C2A8] to-[#6C63FF]">
                <div className="w-full h-full rounded-full border-2 border-white dark:border-[#0F1115] overflow-hidden bg-gray-200">
                  <ImageWithFallback src={`https://i.pravatar.cc/150?img=${i + 10}`} alt={`User ${i}`} className="w-full h-full object-cover" />
                </div>
              </div>
              <span className="text-[10px] text-gray-700 dark:text-gray-300 font-medium">user_{i}</span>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="px-4 mb-4 overflow-x-auto no-scrollbar">
          <div className="flex gap-2">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors shrink-0 ${
                  activeTab === tab
                    ? 'bg-[#6C63FF] text-white shadow-[0_4px_14px_rgba(108,99,255,0.4)]'
                    : 'bg-[#EAE6F3] dark:bg-[#1B1B24] text-[#464555] dark:text-gray-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Feed */}
        <div className="px-4 space-y-5">
          {filteredFeed.map((item, index) => {
            if (item.type === 'activity') {
              const isJoined = joinedActivities.has(item.id);
              const currentParticipants = item.participants! + (isJoined ? 1 : 0);
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="w-full rounded-[24px] overflow-hidden relative shadow-sm border border-gray-200 dark:border-gray-800"
                >
                  <div className="h-48 relative">
                    <ImageWithFallback src={item.img!} alt={item.title!} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-gray-900">
                      {item.category}
                    </div>
                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-white flex items-center gap-1">
                      <MapPin size={10} className="text-[#00C2A8]" />
                      {item.distance}
                    </div>
                  </div>
                  <div className="bg-white dark:bg-[#1B1B24] p-4">
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2 leading-tight">{item.title}</h3>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-xs text-gray-500 font-medium">{item.time} • {item.location}</div>
                      <div className="flex items-center gap-2">
                        <div className="flex -space-x-1.5">
                          <div className="w-5 h-5 rounded-full bg-gray-300 border border-white dark:border-[#1B1B24]" />
                          <div className="w-5 h-5 rounded-full bg-gray-400 border border-white dark:border-[#1B1B24]" />
                          <div className="w-5 h-5 rounded-full bg-gray-500 border border-white dark:border-[#1B1B24]" />
                        </div>
                        <span className="text-[10px] text-[#6C63FF] font-bold">{currentParticipants}/{item.maxParticipants} joined</span>
                      </div>
                    </div>
                    <button 
                      onClick={() => handleJoin(item.id)}
                      className={`w-full py-2.5 rounded-full text-sm font-bold shadow-md transition-all active:scale-95 ${
                        isJoined 
                          ? 'bg-[#00C2A8] text-white shadow-[#00C2A8]/30' 
                          : 'bg-gradient-to-r from-[#6C63FF] to-[#4D41DF] text-white shadow-[#6C63FF]/30'
                      }`}
                    >
                      {isJoined ? '✓ Joined' : 'Join Activity'}
                    </button>
                  </div>
                </motion.div>
              );
            }

            if (item.type === 'post') {
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="w-full bg-white dark:bg-[#1B1B24] rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 p-4"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200">
                        <ImageWithFallback src={item.avatar!} alt={item.user!} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-sm text-gray-900 dark:text-white">{item.user}</span>
                          <span className="text-[10px] bg-gray-100 dark:bg-white/5 text-gray-500 px-1.5 py-0.5 rounded-sm">{item.location}</span>
                        </div>
                        <span className="text-[10px] text-gray-400">{item.time}</span>
                      </div>
                    </div>
                    <button className="px-3 py-1 text-[10px] font-bold border border-[#6C63FF] text-[#6C63FF] rounded-full">Follow</button>
                  </div>
                  
                  <p className="text-sm text-gray-800 dark:text-gray-200 mb-3 leading-relaxed">{item.text}</p>
                  
                  {item.img && (
                    <div className="w-full max-h-64 rounded-xl overflow-hidden mb-3 border border-gray-100 dark:border-gray-800">
                      <ImageWithFallback src={item.img} alt="Post image" className="w-full h-full object-cover" />
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-800/50 text-gray-500">
                    <div className="flex items-center gap-6">
                      <motion.button 
                        whileTap={{ scale: 0.8 }}
                        onClick={() => handleLike(item.id)} 
                        className={`flex items-center gap-1.5 ${item.liked ? 'text-red-500' : ''}`}
                      >
                        <Heart size={18} className={item.liked ? 'fill-current' : ''} />
                        <span className="text-xs font-semibold">{item.likes}</span>
                      </motion.button>
                      <button className="flex items-center gap-1.5">
                        <MessageCircle size={18} />
                        <span className="text-xs font-semibold">{item.comments}</span>
                      </button>
                      <button className="flex items-center gap-1.5">
                        <Share2 size={18} />
                      </button>
                    </div>
                    <motion.button 
                      whileTap={{ scale: 0.8 }}
                      onClick={() => handleSave(item.id)}
                      className={item.saved ? 'text-[#6C63FF]' : ''}
                    >
                      <Bookmark size={18} className={item.saved ? 'fill-current' : ''} />
                    </motion.button>
                  </div>
                </motion.div>
              );
            }

            if (item.type === 'community') {
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="w-full bg-white dark:bg-[#1B1B24] rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 p-4 border-l-4"
                  style={{ borderLeftColor: item.color }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-lg shadow-sm" style={{ backgroundColor: `${item.color}20` }}>
                        {item.emoji}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-sm text-gray-900 dark:text-white">{item.community}</span>
                          <span className="text-[10px] bg-[#00C2A8]/10 text-[#00C2A8] font-bold px-1.5 py-0.5 rounded-sm">Joined</span>
                        </div>
                        <span className="text-[10px] text-gray-400">{item.time}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-800 dark:text-gray-200 mb-3 leading-relaxed italic border-l-2 border-gray-200 dark:border-gray-800 pl-3">
                    "{item.text}"
                  </p>
                  
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs font-semibold text-gray-500 flex items-center gap-1"><Users size={12} /> {item.members?.toLocaleString()} members</span>
                    <button className="text-xs font-bold text-[#6C63FF] flex items-center gap-1">
                      View Community <ChevronRight size={14} />
                    </button>
                  </div>
                </motion.div>
              );
            }
            return null;
          })}
        </div>
      </div>

      {/* Floating Action Button */}
      <button 
        onClick={() => navigate('/app/create')}
        className="absolute bottom-6 right-4 w-14 h-14 bg-[#6C63FF] text-white rounded-full flex items-center justify-center shadow-lg shadow-[#6C63FF]/40 active:scale-95 transition-transform z-30"
      >
        <PlusCircle size={28} />
      </button>
    </div>
  );
}