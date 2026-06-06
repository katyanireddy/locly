import { useState } from 'react';
import { Search, MapPin, Users, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';

const CATEGORIES = ['🏈 Sports', '🎮 Gaming', '💪 Fitness', '💻 Tech', '🎵 Music', '🍕 Food', '📚 Study'];

const ACTIVITIES = [
  { id: 1, title: 'Sunset Rooftop Yoga', location: 'Mission District', dist: '300m', participants: 12, max: 20, img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600' },
  { id: 2, title: 'Local Foodie Meetup', location: 'Hayes Valley', dist: '800m', participants: 8, max: 15, img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=600' },
  { id: 3, title: 'Morning Yoga Flow', location: 'Lalbagh', dist: '200m', participants: 18, max: 25, img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600' }
];

const COMMUNITIES = [
  { id: 1, name: 'SF Creatives', icon: '🎨', color: '#00C2A8', tags: ['Art', 'Design'], members: '2.4k' },
  { id: 2, name: 'Park Run Club', icon: '🏃', color: '#6C63FF', tags: ['Sports', 'Fitness'], members: '1.1k' },
  { id: 3, name: 'Coffee Nomads', icon: '☕', color: '#464555', tags: ['Networking', 'Tech'], members: '850' },
  { id: 4, name: 'Green Living', icon: '🌱', color: '#00C2A8', tags: ['Eco', 'Gardening'], members: '3.2k' }
];

const SUGGESTED_USERS = [
  { id: 1, name: 'Alex Chen', role: 'Designer', dist: '150m away', avatar: 'https://i.pravatar.cc/150?img=11' },
  { id: 2, name: 'Sarah Jenkins', role: 'Photographer', dist: '500m away', avatar: 'https://i.pravatar.cc/150?img=5' },
  { id: 3, name: 'Liam Moore', role: 'Product Lead', dist: '1.2km away', avatar: 'https://i.pravatar.cc/150?img=12' },
];

const NEARBY_PEOPLE = [
  { id: 1, name: 'Priya K', role: 'UX Designer', dist: '0.2 km', tags: ['Yoga', 'Coffee'], avatar: 'https://i.pravatar.cc/150?img=20' },
  { id: 2, name: 'Rahul S', role: 'Engineer', dist: '0.5 km', tags: ['Gaming', 'Tech'], avatar: 'https://i.pravatar.cc/150?img=33' }
];

export function Discovery() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('All Nearby');
  const [activeCategory, setActiveCategory] = useState('');
  const [query, setQuery] = useState('');
  
  const [joinedActivities, setJoinedActivities] = useState<Set<number>>(new Set());
  const [joinedCommunities, setJoinedCommunities] = useState<Set<number>>(new Set());
  const [connectedUsers, setConnectedUsers] = useState<Set<number>>(new Set());

  const tabs = ['All Nearby', 'Activities', 'Communities', 'People'];

  const toggleActivity = (id: number) => {
    setJoinedActivities(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleCommunity = (id: number) => {
    setJoinedCommunities(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleConnect = (id: number) => {
    setConnectedUsers(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const filteredActivities = ACTIVITIES.filter(a => a.title.toLowerCase().includes(query.toLowerCase()));
  const filteredCommunities = COMMUNITIES.filter(c => c.name.toLowerCase().includes(query.toLowerCase()));
  const filteredUsers = SUGGESTED_USERS.filter(u => u.name.toLowerCase().includes(query.toLowerCase()));
  const filteredNearby = NEARBY_PEOPLE.filter(u => u.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="flex flex-col bg-[#FCF8FF] dark:bg-[#0F1115] min-h-full pb-6 font-sans">
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-12 pb-2">
        <div className="flex items-center gap-2">
          <MapPin size={24} className="text-[#6C63FF]" />
          <span className="text-[#6C63FF] font-bold text-2xl tracking-tight">Discovery</span>
        </div>
      </div>

      {/* Search Input */}
      <div className="px-4 mb-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-[#F0ECF9] dark:bg-[#1B1B24] text-gray-900 dark:text-white rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:ring-2 focus:ring-[#6C63FF] placeholder-gray-500 text-sm"
            placeholder="Search activities, communities..."
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="px-4 mb-4 overflow-x-auto no-scrollbar">
        <div className="flex gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors shrink-0 ${
                activeTab === tab
                  ? 'bg-[#6C63FF] text-white'
                  : 'bg-[#EAE6F3] dark:bg-[#1B1B24] text-[#464555] dark:text-gray-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 mb-6 overflow-x-auto no-scrollbar">
        <div className="flex gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat === activeCategory ? '' : cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors shrink-0 whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-[#6C63FF]/20 text-[#6C63FF] border border-[#6C63FF]/50'
                  : 'bg-white dark:bg-[#1B1B24] text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar space-y-8 pb-20">
        
        {/* Trending Activities */}
        {(activeTab === 'All Nearby' || activeTab === 'Activities') && filteredActivities.length > 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="flex items-center justify-between px-4 mb-4">
              <h2 className="text-[20px] font-semibold text-[#1B1B24] dark:text-white">Trending Activities</h2>
              <button className="text-[#6C63FF] text-sm font-semibold">See all</button>
            </div>
            <div className="flex gap-4 px-4 overflow-x-auto no-scrollbar pb-1">
              {filteredActivities.map((act) => {
                const joined = joinedActivities.has(act.id);
                return (
                  <div key={act.id} className="w-[260px] shrink-0 bg-white dark:bg-[#1B1B24] border border-[#C7C4D8] dark:border-gray-800 rounded-[12px] p-4 flex flex-col gap-3 shadow-sm">
                    <div className="h-[140px] rounded-lg overflow-hidden relative bg-gray-200">
                      <ImageWithFallback src={act.img} alt={act.title} className="w-full h-full object-cover" />
                      <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-medium text-[#1B1B24] flex items-center gap-1">
                        <MapPin size={10} className="text-[#6C63FF]" />
                        {act.dist} • {act.location}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1B1B24] dark:text-white text-sm">{act.title}</h3>
                      <p className="text-[#464555] dark:text-gray-400 text-xs mt-1">{act.participants + (joined ? 1 : 0)} participants joined</p>
                    </div>
                    <button 
                      onClick={() => toggleActivity(act.id)}
                      className={`w-full py-2 rounded-full text-sm font-semibold transition-transform active:scale-95 mt-1 shadow-md ${
                        joined 
                          ? 'bg-[#00C2A8] text-white shadow-[#00C2A8]/20' 
                          : 'bg-[#6C63FF] text-white shadow-[#6C63FF]/20'
                      }`}
                    >
                      {joined ? '✓ Joined' : 'Join Now'}
                    </button>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Popular Communities */}
        {(activeTab === 'All Nearby' || activeTab === 'Communities') && filteredCommunities.length > 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="px-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-[20px] font-semibold text-[#1B1B24] dark:text-white">Popular Communities</h2>
              <button className="text-[#6C63FF] text-sm font-semibold">Discover</button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {filteredCommunities.map((comm) => {
                const joined = joinedCommunities.has(comm.id);
                return (
                  <div 
                    key={comm.id} 
                    className="bg-white dark:bg-[#1B1B24] border border-[#C7C4D8] dark:border-gray-800 rounded-[12px] p-4 flex flex-col items-start gap-2 cursor-pointer"
                  >
                    <div 
                      onClick={() => navigate('/app/community/1')}
                      className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl mb-1" 
                      style={{ backgroundColor: `${comm.color}20` }}
                    >
                      {comm.icon}
                    </div>
                    <h3 onClick={() => navigate('/app/community/1')} className="font-semibold text-[#1B1B24] dark:text-white text-sm mt-1">{comm.name}</h3>
                    <div className="flex gap-1 flex-wrap">
                      {comm.tags.map(tag => (
                        <span key={tag} className="px-2 py-0.5 bg-[#F6F2FF] dark:bg-white/5 rounded-full text-[10px] text-[#1B1B24] dark:text-gray-300">{tag}</span>
                      ))}
                    </div>
                    <p className="text-[#464555] dark:text-gray-400 text-[10px] mt-1 mb-2">{comm.members} active locals</p>
                    <button 
                      onClick={(e) => { e.stopPropagation(); toggleCommunity(comm.id); }}
                      className={`w-full py-1.5 rounded-lg text-xs font-semibold mt-auto ${
                        joined 
                          ? 'bg-[#00C2A8]/10 text-[#00C2A8] border border-[#00C2A8]' 
                          : 'bg-[#6C63FF]/10 text-[#6C63FF] border border-transparent'
                      }`}
                    >
                      {joined ? 'Joined ✓' : 'Join'}
                    </button>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Suggested for You */}
        {(activeTab === 'All Nearby' || activeTab === 'People') && filteredUsers.length > 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="px-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-[20px] font-semibold text-[#1B1B24] dark:text-white">Suggested for You</h2>
              <button className="text-[#6C63FF] text-sm font-semibold">View all</button>
            </div>
            <div className="flex flex-col gap-3">
              {filteredUsers.map((person) => {
                const isConnected = connectedUsers.has(person.id);
                return (
                  <div key={person.id} className="bg-white dark:bg-[#1B1B24] border border-[#C7C4D8] dark:border-gray-800 rounded-full p-2 pr-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full border border-[#6C63FF] overflow-hidden bg-gray-200">
                        <ImageWithFallback src={person.avatar} alt={person.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#1B1B24] dark:text-white text-sm">{person.name}</h3>
                        <p className="text-[#464555] dark:text-gray-400 text-[10px]">{person.role} • {person.dist}</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => toggleConnect(person.id)}
                      className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                        isConnected 
                          ? 'bg-[#00C2A8]/10 text-[#00C2A8] border border-transparent' 
                          : 'border border-[#6C63FF] text-[#6C63FF]'
                      }`}
                    >
                      {isConnected ? 'Connected ✓' : 'Connect'}
                    </button>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Near Me Section (New) */}
        {(activeTab === 'All Nearby' || activeTab === 'People') && filteredNearby.length > 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="px-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-[20px] font-semibold text-[#1B1B24] dark:text-white">People Near You</h2>
              <button className="text-gray-500 dark:text-gray-400 text-xs font-medium flex items-center gap-1 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-md">
                &lt; 2 km <ChevronRight size={12} />
              </button>
            </div>
            <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
              {filteredNearby.map((person) => {
                const isConnected = connectedUsers.has(person.id + 100);
                return (
                  <div key={person.id} className="min-w-[160px] w-[160px] bg-white dark:bg-[#1B1B24] rounded-[16px] p-4 border border-[#C7C4D8] dark:border-gray-800 shadow-sm flex flex-col items-center shrink-0 text-center">
                    <div className="relative mb-3">
                      <div className="w-16 h-16 rounded-full border-2 border-white dark:border-[#1B1B24] shadow-md overflow-hidden bg-gray-200">
                        <ImageWithFallback src={person.avatar} alt={person.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white/90 dark:bg-[#0F1115]/90 backdrop-blur-sm border border-gray-200 dark:border-gray-800 text-[9px] font-bold px-2 py-0.5 rounded-full text-gray-900 dark:text-white whitespace-nowrap">
                        {person.dist}
                      </div>
                    </div>
                    <h3 className="font-bold text-sm mb-1">{person.name}</h3>
                    <p className="text-[10px] text-gray-500 mb-2">{person.role}</p>
                    <div className="flex gap-1 flex-wrap justify-center mb-4">
                      {person.tags.map(tag => (
                        <span key={tag} className="text-[9px] bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-1.5 py-0.5 rounded">{tag}</span>
                      ))}
                    </div>
                    <button 
                      onClick={() => toggleConnect(person.id + 100)}
                      className={`w-full py-1.5 rounded-full text-xs font-bold transition-all ${
                        isConnected 
                          ? 'bg-[#00C2A8]/10 text-[#00C2A8]' 
                          : 'border border-[#6C63FF] text-[#6C63FF]'
                      }`}
                    >
                      {isConnected ? 'Connected' : 'Connect'}
                    </button>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

      </div>
    </div>
  );
}