import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ChevronLeft, Share2, Bell, Users, MapPin, Search } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { motion } from 'motion/react';

export function CommunityDetail() {
  const navigate = useNavigate();
  const [joined, setJoined] = useState(false);
  const [activeTab, setActiveTab] = useState('posts');

  const tabs = ['Posts', 'Events', 'Members', 'About'];

  return (
    <div className="flex flex-col bg-[#FCF8FF] dark:bg-[#0F1115] min-h-full font-sans relative">
      {/* Hero */}
      <div className="h-52 relative w-full shrink-0">
        <ImageWithFallback src="https://images.unsplash.com/photo-1546519638405-a9f5f2f75aaa?q=80&w=800" alt="Community Cover" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/90"></div>
        
        <div className="absolute top-12 left-4 right-4 flex items-center justify-between z-10">
          <button onClick={() => navigate(-1)} className="p-2 bg-black/20 backdrop-blur-md rounded-full text-white">
            <ChevronLeft size={24} />
          </button>
          <button className="p-2 bg-black/20 backdrop-blur-md rounded-full text-white">
            <Share2 size={20} />
          </button>
        </div>

        <div className="absolute bottom-4 left-4 right-4 z-10">
          <h1 className="text-2xl font-bold text-white mb-2">Bangalore Techies</h1>
          <div className="flex items-center gap-3 text-xs font-semibold">
            <span className="flex items-center gap-1 text-white"><Users size={14} /> 4.2k members</span>
            <span className="bg-[#6C63FF]/80 backdrop-blur-sm text-white px-2 py-0.5 rounded-md">💻 Tech</span>
            <span className="flex items-center gap-1 text-gray-300"><MapPin size={14} className="text-[#00C2A8]" /> 0.8 km</span>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar pb-24">
        {/* Stats */}
        <div className="flex items-center justify-around py-4 bg-white dark:bg-[#1B1B24] border-b border-[#C7C4D8] dark:border-gray-800 shadow-sm mb-4">
          <div className="text-center">
            <p className="font-bold text-lg text-gray-900 dark:text-white">234</p>
            <p className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">Posts</p>
          </div>
          <div className="w-px h-8 bg-gray-200 dark:bg-gray-800"></div>
          <div className="text-center">
            <p className="font-bold text-lg text-gray-900 dark:text-white">18</p>
            <p className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">Events</p>
          </div>
          <div className="w-px h-8 bg-gray-200 dark:bg-gray-800"></div>
          <div className="text-center">
            <p className="font-bold text-lg text-gray-900 dark:text-white">4.2k</p>
            <p className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">Members</p>
          </div>
        </div>

        {/* Actions */}
        <div className="px-4 mb-6">
          {!joined ? (
            <button 
              onClick={() => setJoined(true)}
              className="w-full py-3.5 bg-gradient-to-r from-[#6C63FF] to-[#4D41DF] text-white rounded-xl font-bold shadow-lg shadow-[#6C63FF]/30 active:scale-95 transition-transform"
            >
              Join Community
            </button>
          ) : (
            <div className="flex gap-2">
              <button 
                onClick={() => setJoined(false)}
                className="flex-1 py-3.5 bg-[#00C2A8]/10 border border-[#00C2A8] text-[#00C2A8] rounded-xl font-bold transition-colors"
              >
                Joined ✓
              </button>
              <button className="flex-1 py-3.5 bg-[#6C63FF] text-white rounded-xl font-bold shadow-md shadow-[#6C63FF]/30 active:scale-95 transition-transform">
                Message
              </button>
            </div>
          )}
        </div>

        {/* About Preview */}
        <div className="px-4 mb-6">
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
            A community for tech enthusiasts, developers, and startup founders in Bangalore. Monthly hackathons, networking events, and knowledge sharing sessions.
            <span className="text-[#6C63FF] font-bold cursor-pointer ml-1">Read more</span>
          </p>
        </div>

        {/* Tabs */}
        <div className="px-4 mb-4 border-b border-gray-200 dark:border-gray-800 sticky top-0 bg-[#FCF8FF] dark:bg-[#0F1115] z-10 pt-2 flex justify-between">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab.toLowerCase())}
              className={`pb-3 text-sm font-bold transition-colors relative ${
                activeTab === tab.toLowerCase()
                  ? 'text-[#6C63FF]'
                  : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
              }`}
            >
              {tab}
              {activeTab === tab.toLowerCase() && (
                <motion.div layoutId="community-tab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#6C63FF] rounded-t-full" />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="px-4">
          {activeTab === 'posts' && (
            <div className="space-y-4">
              {[
                { user: '@ankit_dev', avatar: 'https://i.pravatar.cc/150?img=11', text: 'Amazing hackathon last weekend! Built a full AI app in 24 hours 🚀', time: '2h', likes: 34 },
                { user: '@priya_tech', avatar: 'https://i.pravatar.cc/150?img=5', text: 'Monthly meetup this Friday at Koramangala. Limited spots!', time: '5h', likes: 21 },
                { user: '@startup_raj', avatar: 'https://i.pravatar.cc/150?img=12', text: 'Looking for a co-founder for my fintech idea. Drop a comment if interested!', time: '1d', likes: 67 }
              ].map((post, i) => (
                <div key={i} className="bg-white dark:bg-[#1B1B24] p-4 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                        <ImageWithFallback src={post.avatar} alt={post.user} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <span className="font-bold text-sm text-gray-900 dark:text-white block">{post.user}</span>
                        <span className="text-[10px] text-gray-400 block">{post.time}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed mb-3">{post.text}</p>
                  <div className="flex items-center gap-2">
                    <button className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-xs font-bold text-gray-600 dark:text-gray-300">👍 {post.likes}</button>
                    <button className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-xs font-bold text-gray-600 dark:text-gray-300">💬 Reply</button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'events' && (
            <div className="space-y-4">
              {[
                { title: 'AI Hackathon', date: 'This Friday, 6 PM', loc: 'WeWork Koramangala', img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=400' },
                { title: 'Founders Mixer', date: 'Next Tue, 7 PM', loc: 'Indiranagar', img: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=400' }
              ].map((event, i) => (
                <div key={i} className="bg-white dark:bg-[#1B1B24] rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm flex">
                  <div className="w-24 h-24 bg-gray-200 shrink-0">
                    <ImageWithFallback src={event.img} alt={event.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-3 flex flex-col justify-center flex-1">
                    <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-1">{event.title}</h3>
                    <p className="text-xs text-[#6C63FF] font-semibold mb-1">{event.date}</p>
                    <p className="text-[10px] text-gray-500 font-medium">{event.loc}</p>
                  </div>
                  <div className="pr-4 flex items-center">
                    <button className="w-8 h-8 rounded-full bg-[#00C2A8]/10 text-[#00C2A8] flex items-center justify-center font-bold">+</button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'members' && (
            <div className="space-y-4">
              <div className="relative">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input type="text" placeholder="Search members" className="w-full bg-white dark:bg-[#1B1B24] border border-gray-200 dark:border-gray-800 rounded-lg pl-9 pr-3 py-2 text-sm focus:outline-none focus:border-[#6C63FF]" />
              </div>
              <div className="flex flex-col gap-3">
                {[
                  { name: 'Ankit Dev', role: 'Admin', avatar: 'https://i.pravatar.cc/150?img=11' },
                  { name: 'Priya Tech', role: 'Member', avatar: 'https://i.pravatar.cc/150?img=5' },
                  { name: 'Startup Raj', role: 'Member', avatar: 'https://i.pravatar.cc/150?img=12' },
                ].map((member, i) => (
                  <div key={i} className="flex items-center justify-between p-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                        <ImageWithFallback src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <span className="font-bold text-sm text-gray-900 dark:text-white block">{member.name}</span>
                        <span className="text-[10px] text-gray-500 font-medium">{member.role}</span>
                      </div>
                    </div>
                    <button className="px-4 py-1.5 border border-[#6C63FF] text-[#6C63FF] rounded-full text-xs font-bold">Connect</button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'about' && (
            <div className="bg-white dark:bg-[#1B1B24] p-4 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">About Us</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                A community for tech enthusiasts, developers, and startup founders in Bangalore. Monthly hackathons, networking events, and knowledge sharing sessions. Founded in 2023.
              </p>
              
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Rules</h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex gap-2">
                  <span className="font-bold text-[#6C63FF]">1.</span> Be respectful to all members.
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-[#6C63FF]">2.</span> No spam or self-promotion outside of dedicated threads.
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-[#6C63FF]">3.</span> Keep discussions relevant to tech and startups.
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
