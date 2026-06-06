import { useState } from 'react';
import { Search, MapPin, Users, ChevronRight, Plus, ChevronLeft } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';

const TABS = ['All', 'People', 'Communities', 'Activities'];

export function SearchResults() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('All');
  const [query, setQuery] = useState('Tennis');
  const [connected, setConnected] = useState<Set<number>>(new Set());

  const handleConnect = (id: number) => {
    setConnected(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const showPeople = activeTab === 'All' || activeTab === 'People';
  const showCommunities = activeTab === 'All' || activeTab === 'Communities';
  const showActivities = activeTab === 'All' || activeTab === 'Activities';

  return (
    <div className="flex flex-col bg-[#FCF8FF] dark:bg-[#0F1115] min-h-full font-sans text-[#1B1B24] dark:text-white">
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-12 pb-4">
        <div className="flex items-center gap-2">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-gray-900 dark:text-white">
            <ChevronLeft size={24} />
          </button>
          <div className="flex items-center gap-1 text-[#6C63FF]">
            <MapPin size={24} />
            <span className="font-bold text-xl tracking-tight">Locly</span>
          </div>
        </div>
      </div>

      {/* Search Input */}
      <div className="px-4 mb-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search size={18} className="text-[#6C63FF]" />
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-[#F0ECF9] dark:bg-[#1B1B24] border border-[#6C63FF] dark:border-[#6C63FF]/50 text-gray-900 dark:text-white rounded-xl py-3 pl-11 pr-4 focus:outline-none text-sm font-medium"
            placeholder="Search..."
          />
        </div>
      </div>

      <div className="px-4 mb-4 text-sm text-gray-500 font-medium">
        4 results for "{query}"
      </div>

      {/* Tabs */}
      <div className="px-4 mb-6 overflow-x-auto no-scrollbar">
        <div className="flex gap-2">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors shrink-0 ${
                activeTab === tab
                  ? 'bg-[#6C63FF] text-white shadow-[0_4px_14px_rgba(108,99,255,0.4)]'
                  : 'bg-[#EAE6F3] dark:bg-white/5 text-[#464555] dark:text-gray-400'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar px-4 space-y-8 pb-20">
        
        {/* Upcoming Activities */}
        {showActivities && (
          <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-[20px] font-bold mb-4">Upcoming Activities</h2>
            <div className="bg-white dark:bg-[#1B1B24] rounded-[16px] overflow-hidden border border-[#C7C4D8] dark:border-gray-800 shadow-sm relative p-4 flex flex-col justify-end min-h-[200px]">
              <ImageWithFallback src="https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=800" alt="Tennis" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10"></div>
              
              <div className="absolute top-4 right-4 bg-[#6C63FF] text-white px-3 py-1 rounded-full text-xs font-bold shadow-md shadow-[#6C63FF]/20">
                3 Slots Left
              </div>

              <div className="relative z-10 mt-auto text-white">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-bold text-xl">Tennis Doubles @ Park</h3>
                  <span className="text-[#00C2A8] font-bold text-lg">$15</span>
                </div>
                <div className="flex items-center gap-1 text-gray-300 text-xs mb-4">
                  <MapPin size={12} />
                  <span>Dolores Park • 0.8 mi</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full border-2 border-black overflow-hidden bg-gray-200"><ImageWithFallback src="https://i.pravatar.cc/150?img=1" alt="" className="w-full h-full" /></div>
                    <div className="w-8 h-8 rounded-full border-2 border-black overflow-hidden bg-gray-200"><ImageWithFallback src="https://i.pravatar.cc/150?img=2" alt="" className="w-full h-full" /></div>
                    <div className="w-8 h-8 rounded-full bg-gray-800 border-2 border-black flex items-center justify-center text-[10px] text-white font-bold">+5</div>
                  </div>
                  <button className="px-6 py-2.5 bg-[#6C63FF] text-white rounded-full text-sm font-bold shadow-lg shadow-[#6C63FF]/30 active:scale-95 transition-transform">
                    Join Game
                  </button>
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {/* Communities */}
        {showCommunities && (
          <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-[20px] font-bold mb-4">Communities</h2>
            <div onClick={() => navigate('/app/community/1')} className="bg-white dark:bg-[#1B1B24] rounded-[16px] p-4 border border-[#C7C4D8] dark:border-gray-800 shadow-sm flex items-center gap-4 cursor-pointer">
              <div className="w-16 h-16 rounded-xl bg-[#00C2A8]/20 flex items-center justify-center text-3xl shrink-0">🎾</div>
              <div className="flex-1">
                <h3 className="font-bold text-[#6C63FF] text-base mb-1">Bay Area Tennis</h3>
                <p className="text-[#464555] dark:text-gray-400 text-sm">1.2k members • 5 events today</p>
              </div>
              <ChevronRight size={20} className="text-[#6C63FF]" />
            </div>
          </motion.section>
        )}

        {/* People Nearby */}
        {showPeople && (
          <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-[20px] font-bold">People Nearby</h2>
            </div>
            <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
              {[
                { id: 1, name: 'Alex Rivera', role: 'Designer', dist: '150m', ints: ['Tennis', 'Yoga'], avatar: 'https://i.pravatar.cc/150?img=11' },
                { id: 2, name: 'Sarah Chen', role: 'Dev', dist: '400m', ints: ['Tennis', 'Code'], avatar: 'https://i.pravatar.cc/150?img=5' },
                { id: 3, name: 'Rahul S', role: 'PM', dist: '800m', ints: ['Tennis', 'Food'], avatar: 'https://i.pravatar.cc/150?img=33' }
              ].map((person) => {
                const isConn = connected.has(person.id);
                return (
                  <div key={person.id} className="min-w-[160px] w-[160px] bg-white dark:bg-[#1B1B24] rounded-[16px] p-4 border border-[#C7C4D8] dark:border-gray-800 shadow-sm flex flex-col items-center shrink-0 text-center relative">
                    <div className="absolute top-2 right-2 bg-gray-100 dark:bg-gray-800 text-gray-500 text-[9px] px-1.5 py-0.5 rounded font-bold">
                      {person.dist}
                    </div>
                    <div className="w-16 h-16 rounded-full border-2 border-[#6C63FF] bg-gray-200 mb-3 overflow-hidden shadow-sm">
                      <ImageWithFallback src={person.avatar} alt={person.name} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="font-bold text-sm mb-1">{person.name}</h3>
                    <p className="text-[10px] text-[#464555] dark:text-gray-400 mb-2">{person.role}</p>
                    <div className="flex gap-1 mb-4 flex-wrap justify-center">
                      {person.ints.map(i => (
                        <span key={i} className="text-[9px] bg-purple-50 dark:bg-purple-900/20 text-[#6C63FF] px-1.5 py-0.5 rounded">{i}</span>
                      ))}
                    </div>
                    <button 
                      onClick={() => handleConnect(person.id)}
                      className={`w-full py-2 rounded-full text-xs font-bold active:scale-95 transition-all ${
                        isConn ? 'bg-[#00C2A8]/10 text-[#00C2A8]' : 'border border-[#6C63FF] text-[#6C63FF]'
                      }`}
                    >
                      {isConn ? 'Connected ✓' : 'Connect'}
                    </button>
                  </div>
                )
              })}
            </div>
          </motion.section>
        )}

      </div>
    </div>
  );
}