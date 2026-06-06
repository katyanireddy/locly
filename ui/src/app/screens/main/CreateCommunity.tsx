import { useNavigate } from 'react-router';
import { X, Image as ImageIcon, Globe, Lock, Check, MapPin } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const CATEGORIES = [
  { id: 'sports', icon: '⚽️', label: 'Sports' },
  { id: 'tech', icon: '💻', label: 'Tech' },
  { id: 'food', icon: '🍕', label: 'Food' },
  { id: 'art', icon: '🎨', label: 'Art' },
  { id: 'music', icon: '🎵', label: 'Music' },
  { id: 'pets', icon: '🐕', label: 'Pets' },
];

export function CreateCommunity() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [selectedCat, setSelectedCat] = useState('');
  const [isPublic, setIsPublic] = useState(true);
  const [isPosting, setIsPosting] = useState(false);

  const handleCreate = () => {
    setIsPosting(true);
    setTimeout(() => {
      navigate(-1);
    }, 500);
  };

  return (
    <div className="flex flex-col h-full bg-[#FCF8FF] dark:bg-[#0F1115] relative">
      <AnimatePresence>
        {isPosting && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 z-50 bg-white/80 dark:bg-[#0F1115]/80 backdrop-blur-md flex items-center justify-center"
          >
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", damping: 15 }}
              className="w-20 h-20 bg-[#00C2A8] rounded-full flex items-center justify-center text-white shadow-xl shadow-[#00C2A8]/40"
            >
              <Check size={40} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <div className="flex items-center justify-between px-4 h-16 shrink-0 bg-white dark:bg-[#1B1B24] border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-gray-900 dark:text-white">
            <X size={24} />
          </button>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">Create Community</h1>
        </div>
        <button 
          onClick={handleCreate}
          disabled={name.length === 0 || selectedCat === ''}
          className={`font-bold transition-colors ${name.length > 0 && selectedCat !== '' ? 'text-[#6C63FF]' : 'text-gray-400'}`}
        >
          Create
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-6">
        
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 rounded-2xl bg-[#00C2A8]/10 border-2 border-dashed border-[#00C2A8]/30 flex flex-col items-center justify-center text-[#00C2A8] cursor-pointer hover:bg-[#00C2A8]/20 transition-colors">
            <ImageIcon size={28} className="mb-1" />
            <span className="text-[10px] font-bold">Add Icon</span>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-bold text-gray-900 dark:text-white">Community Name</label>
              <span className="text-xs text-gray-400">{name.length}/40</span>
            </div>
            <input 
              type="text" 
              maxLength={40}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Indiranagar Book Club"
              className="w-full bg-white dark:bg-[#1B1B24] border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3.5 text-sm text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-[#6C63FF]"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-900 dark:text-white mb-2">Category</label>
            <div className="grid grid-cols-3 gap-3">
              {CATEGORIES.map(cat => (
                <button 
                  key={cat.id} 
                  onClick={() => setSelectedCat(cat.id)}
                  className={`flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all ${
                    selectedCat === cat.id 
                      ? 'bg-[#6C63FF]/10 border-[#6C63FF] text-[#6C63FF]' 
                      : 'bg-white dark:bg-[#1B1B24] border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-300'
                  }`}
                >
                  <span className="text-2xl mb-1">{cat.icon}</span>
                  <span className="text-xs font-bold">{cat.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-900 dark:text-white mb-2">Description</label>
            <textarea 
              placeholder="What is this community about?"
              className="w-full h-24 bg-white dark:bg-[#1B1B24] border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3.5 text-sm text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-[#6C63FF] resize-none"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-900 dark:text-white mb-2">Community Location</label>
            <div className="relative">
              <MapPin size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search neighborhood..."
                className="w-full bg-white dark:bg-[#1B1B24] border border-gray-200 dark:border-gray-800 rounded-xl pl-12 pr-4 py-3.5 text-sm text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-[#6C63FF]"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-900 dark:text-white mb-2">Privacy</label>
            <div className="bg-white dark:bg-[#1B1B24] border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
              <div 
                className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50"
                onClick={() => setIsPublic(!isPublic)}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#00C2A8]/10 text-[#00C2A8] flex items-center justify-center">
                    <Globe size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-900 dark:text-white">Public Community</h4>
                    <p className="text-xs text-gray-500">Anyone nearby can see and join</p>
                  </div>
                </div>
                <div className={`w-12 h-6 rounded-full relative transition-colors ${isPublic ? 'bg-[#6C63FF]' : 'bg-gray-200 dark:bg-gray-700'}`}>
                  <motion.div animate={{ x: isPublic ? 24 : 0 }} className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></motion.div>
                </div>
              </div>

              <div 
                className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50"
                onClick={() => setIsPublic(!isPublic)}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-500/10 text-orange-500 flex items-center justify-center">
                    <Lock size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-900 dark:text-white">Private Community</h4>
                    <p className="text-xs text-gray-500">Only members can see posts</p>
                  </div>
                </div>
                <div className={`w-12 h-6 rounded-full relative transition-colors ${!isPublic ? 'bg-[#6C63FF]' : 'bg-gray-200 dark:bg-gray-700'}`}>
                  <motion.div animate={{ x: !isPublic ? 24 : 0 }} className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}