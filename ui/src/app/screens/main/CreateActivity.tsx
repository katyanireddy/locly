import { useNavigate } from 'react-router';
import { X, MapPin, Calendar, Clock, Check } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const CATEGORIES = ['🏈 Sports', '🎮 Gaming', '💪 Fitness', '💻 Tech', '🎵 Music', '🍕 Food', '📚 Study'];

export function CreateActivity() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [limit, setLimit] = useState(12);
  const [isPosting, setIsPosting] = useState(false);

  const isValid = title.length > 0 && category !== '';

  const handleCreate = () => {
    if (!isValid) return;
    setIsPosting(true);
    setTimeout(() => {
      navigate(-1);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full bg-[#FCF8FF] dark:bg-[#0F1115] relative">
      <AnimatePresence>
        {isPosting && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 z-50 bg-white/80 dark:bg-[#0F1115]/80 backdrop-blur-md flex flex-col items-center justify-center"
          >
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", damping: 15 }}
              className="w-20 h-20 bg-[#6C63FF] rounded-full flex items-center justify-center text-white mb-4 shadow-xl shadow-[#6C63FF]/40"
            >
              <Check size={40} />
            </motion.div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Activity Created! 🚀</h2>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <div className="flex items-center justify-between px-4 h-16 shrink-0 bg-white dark:bg-[#1B1B24] border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-gray-900 dark:text-white">
            <X size={24} />
          </button>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">New Activity</h1>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-900 dark:text-white mb-2">Activity Title</label>
            <input 
              type="text" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Evening Cricket Match"
              className="w-full bg-white dark:bg-[#1B1B24] border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3.5 text-sm text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-[#6C63FF]"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-900 dark:text-white mb-2">Category</label>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map(cat => (
                <button 
                  key={cat} 
                  onClick={() => setCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    category === cat 
                      ? 'bg-[#6C63FF] text-white' 
                      : 'bg-white dark:bg-[#1B1B24] border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-300'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-900 dark:text-white mb-2">Location</label>
            <div className="relative">
              <MapPin size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search location..."
                className="w-full bg-white dark:bg-[#1B1B24] border border-gray-200 dark:border-gray-800 rounded-xl pl-12 pr-4 py-3.5 text-sm text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-[#6C63FF]"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-gray-900 dark:text-white mb-2">Date</label>
              <div className="relative">
                <Calendar size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6C63FF]" />
                <input 
                  type="date" 
                  className="w-full bg-white dark:bg-[#1B1B24] border border-gray-200 dark:border-gray-800 rounded-xl pl-12 pr-4 py-3.5 text-sm text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-[#6C63FF]"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-900 dark:text-white mb-2">Time</label>
              <div className="relative">
                <Clock size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6C63FF]" />
                <input 
                  type="time" 
                  className="w-full bg-white dark:bg-[#1B1B24] border border-gray-200 dark:border-gray-800 rounded-xl pl-12 pr-4 py-3.5 text-sm text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-[#6C63FF]"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-bold text-gray-900 dark:text-white">Participant Limit</label>
              <span className="text-[#6C63FF] font-bold">{limit} people</span>
            </div>
            <input 
              type="range" 
              min="2" 
              max="50" 
              value={limit}
              onChange={(e) => setLimit(parseInt(e.target.value))}
              className="w-full accent-[#6C63FF]"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-2 font-medium">
              <span>2</span>
              <span>50+</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-900 dark:text-white mb-2">Description</label>
            <textarea 
              placeholder="What's the plan? Any requirements?"
              className="w-full h-32 bg-white dark:bg-[#1B1B24] border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3.5 text-sm text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-[#6C63FF] resize-none"
            ></textarea>
          </div>

        </div>
      </div>

      <div className="p-4 bg-white dark:bg-[#1B1B24] border-t border-gray-200 dark:border-gray-800">
        <button 
          onClick={handleCreate}
          disabled={!isValid}
          className={`w-full py-4 rounded-xl font-bold text-lg shadow-sm transition-all active:scale-95 ${
            isValid 
              ? 'bg-[#6C63FF] text-white shadow-[#6C63FF]/30' 
              : 'bg-gray-200 dark:bg-gray-800 text-gray-400 cursor-not-allowed'
          }`}
        >
          Launch Activity
        </button>
      </div>
    </div>
  );
}