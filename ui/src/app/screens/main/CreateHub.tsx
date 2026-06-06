import { useNavigate } from 'react-router';
import { Edit3, MapPin, Users, X } from 'lucide-react';
import { motion } from 'motion/react';

export function CreateHub() {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-end bg-black/40 backdrop-blur-sm">
      <motion.div 
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="w-full max-w-lg bg-[#FCF8FF] dark:bg-[#1B1B24] rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.2)] flex flex-col p-6 pb-safe"
      >
        <div className="w-12 h-1.5 bg-gray-300 dark:bg-gray-700 rounded-full mx-auto mb-6"></div>
        
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-2 tracking-tight">Share with your city</h2>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-8">What would you like to build today?</p>

        <div className="flex flex-col gap-4 mb-8">
          <button 
            onClick={() => navigate('/app/create/post')}
            className="flex items-center gap-4 p-5 bg-[#F0ECF9] dark:bg-[#6C63FF]/10 rounded-2xl transition-transform active:scale-95 text-left group"
          >
            <div className="w-14 h-14 rounded-full bg-[#6C63FF] text-white flex items-center justify-center shrink-0 shadow-lg shadow-[#6C63FF]/30">
              <Edit3 size={24} />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 dark:text-white text-lg">Create Post</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Share updates, photos, or thoughts with locals.</p>
            </div>
            <div className="text-gray-400 group-hover:translate-x-1 transition-transform">&rarr;</div>
          </button>

          <button 
            onClick={() => navigate('/app/create/activity')}
            className="flex items-center gap-4 p-5 bg-[#F0ECF9] dark:bg-[#00C2A8]/10 rounded-2xl transition-transform active:scale-95 text-left group"
          >
            <div className="w-14 h-14 rounded-full bg-[#00C2A8] text-white flex items-center justify-center shrink-0 shadow-lg shadow-[#00C2A8]/30">
              <MapPin size={24} />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 dark:text-white text-lg">Create Activity</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Host a hangout, sport, or meetup nearby.</p>
            </div>
            <div className="text-gray-400 group-hover:translate-x-1 transition-transform">&rarr;</div>
          </button>

          <button 
            onClick={() => navigate('/app/create/community')}
            className="flex items-center gap-4 p-5 bg-[#F0ECF9] dark:bg-white/5 rounded-2xl transition-transform active:scale-95 text-left group"
          >
            <div className="w-14 h-14 rounded-full bg-gray-500 text-white flex items-center justify-center shrink-0 shadow-lg shadow-gray-500/30">
              <Users size={24} />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 dark:text-white text-lg">Create Community</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Build a new space for your neighborhood niche.</p>
            </div>
            <div className="text-gray-400 group-hover:translate-x-1 transition-transform">&rarr;</div>
          </button>
        </div>

        <button 
          onClick={() => navigate(-1)}
          className="w-full max-w-[200px] mx-auto py-4 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center gap-2 font-medium text-gray-800 dark:text-gray-200 transition-transform active:scale-95"
        >
          <X size={20} />
          Cancel
        </button>
      </motion.div>
    </div>
  );
}