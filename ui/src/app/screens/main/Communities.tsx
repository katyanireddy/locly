import { Search, MapPin, Plus } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';

const TABS = ['Trending', 'Nearby', 'My Communities'];

export function Communities() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Trending');
  const [joined, setJoined] = useState<Set<string>>(new Set(['c1']));
  const [query, setQuery] = useState('');

  const toggleJoin = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setJoined(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="flex flex-col bg-[#FCF8FF] dark:bg-[#0F1115] min-h-full font-sans text-[#1B1B24] dark:text-white relative">
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-12 pb-2">
        <div className="flex items-center gap-2 text-[#6C63FF]">
          <MapPin size={24} />
          <span className="font-bold text-xl tracking-tight">Communities</span>
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
            placeholder="Search communities..."
          />
        </div>
      </div>

      <div className="px-4 mb-4">
        <h1 className="text-2xl font-bold mb-1">Find your tribe</h1>
        <p className="text-[#464555] dark:text-gray-400 text-sm">Curated communities in your neighborhood</p>
      </div>

      {/* Tabs */}
      <div className="px-4 mb-6 overflow-x-auto no-scrollbar">
        <div className="flex gap-2">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors shrink-0 ${
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

      <div className="flex-1 overflow-y-auto no-scrollbar px-4 space-y-8 pb-24">
        
        {activeTab === 'My Communities' ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-3">
            {[
              { id: 'c1', name: 'Bangalore Techies', members: '4.2k', icon: '💻', color: '#6C63FF' },
              { id: 'c2', name: 'Weekend Trekkers', members: '850', icon: '⛰️', color: '#00C2A8' }
            ].map(comm => (
              <div 
                key={comm.id}
                onClick={() => navigate('/app/community/1')}
                className="bg-white dark:bg-[#1B1B24] border border-[#C7C4D8] dark:border-gray-800 rounded-[12px] p-4 flex items-center gap-4 cursor-pointer"
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl" style={{ backgroundColor: `${comm.color}20` }}>
                  {comm.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 dark:text-white text-base">{comm.name}</h3>
                  <p className="text-gray-500 text-xs">{comm.members} members • 2 new posts</p>
                </div>
                <button 
                  onClick={(e) => toggleJoin(e, comm.id)}
                  className="px-4 py-1.5 text-[#00C2A8] bg-[#00C2A8]/10 rounded-full text-xs font-bold"
                >
                  Joined ✓
                </button>
              </div>
            ))}
          </motion.div>
        ) : (
          <>
            {/* SPORTS */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-[#00C2A8] text-xs font-bold tracking-widest uppercase">SPORTS</h2>
                <button className="text-[#464555] dark:text-gray-400 text-xs font-semibold">See All</button>
              </div>
              <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
                <div 
                  onClick={() => navigate('/app/community/1')}
                  className="min-w-[240px] w-[240px] bg-white dark:bg-[#1B1B24] rounded-[16px] p-4 border border-[#C7C4D8] dark:border-gray-800 shadow-sm shrink-0 flex flex-col justify-end min-h-[180px] relative overflow-hidden cursor-pointer group"
                >
                  <ImageWithFallback src="https://images.unsplash.com/photo-1546519638405-a9f5f2f75aaa?q=80&w=600" alt="Basketball" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10"></div>
                  
                  <div className="relative z-10 mt-auto">
                    <h3 className="font-bold text-white text-lg mb-1">Concrete Dunkers</h3>
                    <p className="text-gray-300 text-xs mb-4">3.2k members • Daily matches</p>
                    <div className="flex items-center justify-between">
                      <div className="flex -space-x-2">
                        <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-black overflow-hidden"><ImageWithFallback src="https://i.pravatar.cc/150?img=11" alt="" className="w-full h-full" /></div>
                        <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-black overflow-hidden"><ImageWithFallback src="https://i.pravatar.cc/150?img=12" alt="" className="w-full h-full" /></div>
                        <div className="w-8 h-8 rounded-full bg-[#6C63FF] border-2 border-black flex items-center justify-center text-[10px] text-white font-bold">+12</div>
                      </div>
                      <button 
                        onClick={(e) => toggleJoin(e, 'sports1')}
                        className={`px-6 py-2 rounded-full text-sm font-bold shadow-lg transition-all ${
                          joined.has('sports1') ? 'bg-[#00C2A8] text-white' : 'bg-[#6C63FF] text-white'
                        }`}
                      >
                        {joined.has('sports1') ? 'Joined ✓' : 'Join'}
                      </button>
                    </div>
                  </div>
                </div>

                <div 
                  onClick={() => navigate('/app/community/1')}
                  className="min-w-[240px] w-[240px] bg-white dark:bg-[#1B1B24] rounded-[16px] p-4 border border-[#C7C4D8] dark:border-gray-800 shadow-sm shrink-0 flex flex-col justify-end min-h-[180px] relative overflow-hidden cursor-pointer group"
                >
                  <ImageWithFallback src="https://images.unsplash.com/photo-1571008887538-b36bb32f4571?q=80&w=600" alt="Running" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10"></div>
                  
                  <div className="relative z-10 mt-auto">
                    <h3 className="font-bold text-white text-lg mb-1">Sunset Runners</h3>
                    <p className="text-gray-300 text-xs mb-4">1.8k members • Tue & Thu</p>
                    <div className="flex items-center justify-between">
                      <div className="flex -space-x-2">
                        <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-black overflow-hidden"><ImageWithFallback src="https://i.pravatar.cc/150?img=5" alt="" className="w-full h-full" /></div>
                        <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-black overflow-hidden"><ImageWithFallback src="https://i.pravatar.cc/150?img=6" alt="" className="w-full h-full" /></div>
                      </div>
                      <button 
                        onClick={(e) => toggleJoin(e, 'sports2')}
                        className={`px-6 py-2 rounded-full text-sm font-bold shadow-lg transition-all ${
                          joined.has('sports2') ? 'bg-[#00C2A8] text-white' : 'bg-[#6C63FF] text-white'
                        }`}
                      >
                        {joined.has('sports2') ? 'Joined ✓' : 'Join'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* TECH */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-[#00C2A8] text-xs font-bold tracking-widest uppercase">TECH</h2>
                <button className="text-[#464555] dark:text-gray-400 text-xs font-semibold">See All</button>
              </div>
              <div className="flex flex-col gap-3">
                <div onClick={() => navigate('/app/community/1')} className="bg-white dark:bg-[#1B1B24] rounded-[16px] p-4 border border-[#C7C4D8] dark:border-gray-800 shadow-sm flex items-center justify-between cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-[#6C63FF]/20 flex items-center justify-center text-[#6C63FF] text-xl">👩‍💻</div>
                    <div>
                      <h3 className="font-bold text-[#6C63FF] text-base mb-1">Locly Devs</h3>
                      <p className="text-[#464555] dark:text-gray-400 text-xs">420 coding ninjas</p>
                    </div>
                  </div>
                  <button onClick={(e) => toggleJoin(e, 'tech1')} className={`px-5 py-2 rounded-full text-sm font-bold border ${joined.has('tech1') ? 'bg-[#00C2A8]/10 text-[#00C2A8] border-[#00C2A8]' : 'border-[#6C63FF] text-[#6C63FF]'}`}>
                    {joined.has('tech1') ? 'Joined' : 'Join'}
                  </button>
                </div>
                <div onClick={() => navigate('/app/community/1')} className="bg-white dark:bg-[#1B1B24] rounded-[16px] p-4 border border-[#C7C4D8] dark:border-gray-800 shadow-sm flex items-center justify-between cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-[#00C2A8]/20 flex items-center justify-center text-[#00C2A8] text-xl">🚀</div>
                    <div>
                      <h3 className="font-bold text-[#6C63FF] text-base mb-1">Startup Hub</h3>
                      <p className="text-[#464555] dark:text-gray-400 text-xs">89 founders nearby</p>
                    </div>
                  </div>
                  <button onClick={(e) => toggleJoin(e, 'tech2')} className={`px-5 py-2 rounded-full text-sm font-bold border ${joined.has('tech2') ? 'bg-[#00C2A8]/10 text-[#00C2A8] border-[#00C2A8]' : 'border-[#6C63FF] text-[#6C63FF]'}`}>
                    {joined.has('tech2') ? 'Joined' : 'Join'}
                  </button>
                </div>
              </div>
            </section>
          </>
        )}
      </div>

      {/* Floating Action Button */}
      <button 
        onClick={() => navigate('/app/create/community')}
        className="absolute bottom-6 right-4 w-14 h-14 bg-[#6C63FF] text-white rounded-full flex items-center justify-center shadow-lg shadow-[#6C63FF]/40 active:scale-95 transition-transform z-20"
      >
        <Plus size={28} />
      </button>
    </div>
  );
}