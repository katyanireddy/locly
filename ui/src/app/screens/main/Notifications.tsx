import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ChevronLeft, Heart, MessageCircle, UserPlus, Users, MapPin, MessageSquare, Check } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { motion } from 'motion/react';

const INITIAL_NOTIFICATIONS = [
  { id: 1, type: 'like', read: false, user: '@meera_creates', action: 'liked your post', preview: 'Golden hour walk...', time: '2m', avatar: 'https://i.pravatar.cc/150?img=9', group: 'Today' },
  { id: 2, type: 'comment', read: false, user: '@rohan_dev', action: 'commented on your post', preview: '"This spot is incredible! 🔥"', time: '15m', avatar: 'https://i.pravatar.cc/150?img=8', group: 'Today' },
  { id: 3, type: 'follow', read: false, user: 'Karthik P', action: 'wants to connect', preview: '2 mutual communities', time: '1h', avatar: 'https://i.pravatar.cc/150?img=12', showActions: true, group: 'Today' },
  { id: 4, type: 'community', read: true, user: 'Bangalore Techies', action: 'posted an update', preview: 'Hackathon this Friday!', time: '2h', group: 'Today' },
  { id: 5, type: 'activity', read: true, user: 'Evening Cricket Match', action: 'starts in 2 hours', preview: 'Cubbon Park • 8 players joined', time: '3h', group: 'Today' },
  { id: 6, type: 'message', read: true, user: 'Sarah W', action: 'sent you a message', preview: 'Are you going to the meetup?', time: 'Yesterday', avatar: 'https://images.unsplash.com/photo-1691399055809-089c52671f84?q=80&w=400', group: 'Yesterday' },
  { id: 7, type: 'like', read: true, user: '@ankit_dev', action: 'liked your post', preview: 'Your rooftop cafe post', time: 'Yesterday', avatar: 'https://i.pravatar.cc/150?img=11', group: 'Yesterday' }
];

const TABS = ['All', 'Social', 'Communities', 'Activities', 'Messages'];

const ICONS: Record<string, any> = {
  like: { icon: Heart, color: 'text-pink-500', bg: 'bg-pink-500/10' },
  comment: { icon: MessageCircle, color: 'text-blue-500', bg: 'bg-blue-500/10' },
  follow: { icon: UserPlus, color: 'text-[#6C63FF]', bg: 'bg-[#6C63FF]/10' },
  community: { icon: Users, color: 'text-[#00C2A8]', bg: 'bg-[#00C2A8]/10' },
  activity: { icon: MapPin, color: 'text-orange-500', bg: 'bg-orange-500/10' },
  message: { icon: MessageSquare, color: 'text-[#6C63FF]', bg: 'bg-[#6C63FF]/10' }
};

export function Notifications() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('All');
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);

  const markAllRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const markRead = (id: number) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const handleFollowAction = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    markRead(id);
    // remove actions UI
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, showActions: false, preview: 'Request accepted' } : n));
  };

  const filtered = notifications.filter(n => {
    if (activeTab === 'All') return true;
    if (activeTab === 'Social') return n.type === 'like' || n.type === 'comment' || n.type === 'follow';
    if (activeTab === 'Communities') return n.type === 'community';
    if (activeTab === 'Activities') return n.type === 'activity';
    if (activeTab === 'Messages') return n.type === 'message';
    return true;
  });

  const today = filtered.filter(n => n.group === 'Today');
  const yesterday = filtered.filter(n => n.group === 'Yesterday');

  return (
    <div className="flex flex-col h-full bg-[#FCF8FF] dark:bg-[#0F1115]">
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-12 pb-4 bg-white/80 dark:bg-[#0F1115]/80 backdrop-blur-md sticky top-0 z-20">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-gray-900 dark:text-white">
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">Notifications</h1>
        </div>
        <button onClick={markAllRead} className="text-sm font-bold text-[#6C63FF]">
          Mark all read
        </button>
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
                  ? 'bg-[#6C63FF] text-white shadow-md'
                  : 'bg-[#EAE6F3] dark:bg-[#1B1B24] text-[#464555] dark:text-gray-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-24">
        {today.length > 0 && (
          <div className="mb-6">
            <h2 className="text-sm font-bold text-gray-900 dark:text-white mb-3 px-1">Today</h2>
            <div className="flex flex-col gap-2">
              {today.map(n => <NotificationItem key={n.id} n={n} onRead={() => markRead(n.id)} onAction={(e) => handleFollowAction(n.id, e)} />)}
            </div>
          </div>
        )}

        {yesterday.length > 0 && (
          <div className="mb-6">
            <h2 className="text-sm font-bold text-gray-900 dark:text-white mb-3 px-1">Yesterday</h2>
            <div className="flex flex-col gap-2">
              {yesterday.map(n => <NotificationItem key={n.id} n={n} onRead={() => markRead(n.id)} onAction={(e) => handleFollowAction(n.id, e)} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function NotificationItem({ n, onRead, onAction }: { n: any, onRead: () => void, onAction: (e: React.MouseEvent) => void }) {
  const IconProps = ICONS[n.type] || ICONS.like;
  const Icon = IconProps.icon;

  return (
    <div 
      onClick={onRead}
      className={`flex gap-3 p-3 rounded-xl transition-colors cursor-pointer relative ${
        n.read 
          ? 'bg-white dark:bg-[#1B1B24] border border-gray-100 dark:border-gray-800' 
          : 'bg-[#6C63FF]/5 dark:bg-[#6C63FF]/10 border border-[#6C63FF]/20'
      }`}
    >
      {!n.read && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-[#6C63FF] rounded-r-full"></div>
      )}
      
      <div className="relative shrink-0 ml-1">
        {n.avatar ? (
          <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
            <ImageWithFallback src={n.avatar} alt={n.user} className="w-full h-full object-cover" />
          </div>
        ) : (
          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${IconProps.bg}`}>
            <Icon size={20} className={IconProps.color} />
          </div>
        )}
        {n.avatar && (
          <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center border-2 border-white dark:border-[#1B1B24] ${IconProps.bg} ${!n.read ? 'bg-white dark:bg-[#0F1115]' : ''}`}>
            <Icon size={10} className={IconProps.color} />
          </div>
        )}
      </div>

      <div className="flex-1 pt-1">
        <p className="text-sm text-gray-900 dark:text-white leading-tight mb-1">
          <span className="font-bold mr-1">{n.user}</span>
          <span className="text-gray-600 dark:text-gray-300">{n.action}</span>
        </p>
        
        {n.showActions ? (
          <div className="flex gap-2 mt-2">
            <button onClick={onAction} className="px-4 py-1.5 bg-[#6C63FF] text-white text-xs font-bold rounded-full active:scale-95">Accept</button>
            <button onClick={onAction} className="px-4 py-1.5 border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 text-xs font-bold rounded-full">Decline</button>
          </div>
        ) : (
          <p className="text-xs text-gray-500 font-medium line-clamp-1">{n.preview}</p>
        )}
      </div>

      <div className="shrink-0 pt-1">
        <span className="text-[10px] text-gray-400 font-bold">{n.time}</span>
      </div>
    </div>
  );
}
