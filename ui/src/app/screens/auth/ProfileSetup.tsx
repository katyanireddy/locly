import { useNavigate } from 'react-router';
import { Camera, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export function ProfileSetup() {
  const navigate = useNavigate();

  return (
    <div className="flex-1 flex flex-col bg-white dark:bg-[#0F1115] relative h-full">
      {/* Header */}
      <div className="flex items-center justify-between px-4 h-16 shrink-0 z-10 relative">
        <span className="text-[#6C63FF] font-bold text-lg tracking-tight">Locly</span>
        <button onClick={() => navigate('/app/home')} className="px-4 py-2 text-sm font-semibold text-gray-600 dark:text-gray-300">
          Skip
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-6 pb-6">
        {/* Progress indicator */}
        <div className="flex justify-center gap-2 mb-8">
          <div className="w-2 h-2 rounded-full bg-gray-200 dark:bg-gray-800"></div>
          <div className="w-2 h-2 rounded-full bg-gray-200 dark:bg-gray-800"></div>
          <div className="w-8 h-2 rounded-full bg-[#6C63FF]"></div>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Set up your profile</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">Tell your neighbors a bit about yourself.</p>
        </motion.div>

        {/* Avatar Upload */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-gray-100 dark:bg-[#1B1B24] border-2 border-dashed border-gray-300 dark:border-gray-700 flex items-center justify-center text-gray-400">
              <span className="text-3xl font-light">+</span>
            </div>
            <div className="absolute bottom-0 right-0 w-8 h-8 bg-[#6C63FF] rounded-full flex items-center justify-center border-2 border-white dark:border-[#0F1115] shadow-lg">
              <Camera size={14} color="white" />
            </div>
          </div>
        </motion.div>

        {/* Form Fields */}
        <div className="space-y-5 mb-8">
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 0.2 }}>
            <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5 uppercase tracking-wider">Full Name</label>
            <input 
              type="text" 
              placeholder="Alex Rivera"
              className="w-full bg-gray-50 dark:bg-[#1B1B24] border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3.5 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#6C63FF]"
            />
          </motion.div>

          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 0.3 }}>
            <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5 uppercase tracking-wider">Bio</label>
            <textarea 
              placeholder="Coffee addict. Loves hiking. 📍 Mission District"
              className="w-full h-24 bg-gray-50 dark:bg-[#1B1B24] border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3.5 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#6C63FF] resize-none"
            ></textarea>
          </motion.div>

          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 0.4 }}>
            <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5 uppercase tracking-wider">College / Company</label>
            <input 
              type="text" 
              placeholder="Stanford University"
              className="w-full bg-gray-50 dark:bg-[#1B1B24] border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3.5 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#6C63FF]"
            />
          </motion.div>

          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 0.5 }}>
            <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5 uppercase tracking-wider">Locality</label>
            <div className="relative">
              <MapPin size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Mission District, SF"
                className="w-full bg-gray-50 dark:bg-[#1B1B24] border border-gray-200 dark:border-gray-800 rounded-xl pl-11 pr-4 py-3.5 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#6C63FF]"
              />
            </div>
          </motion.div>
        </div>

        {/* Interests preview */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.4, delay: 0.6 }}
          className="mb-10"
        >
          <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wider">Your Interests</label>
          <div className="flex flex-wrap gap-2">
            {['⚽️ Sports', '💻 Tech', '🎵 Music'].map(tag => (
              <span key={tag} className="px-3 py-1.5 bg-[#6C63FF]/10 text-[#6C63FF] border border-[#6C63FF]/20 rounded-lg text-xs font-semibold">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 0.7 }}>
          <button 
            onClick={() => navigate('/app/home')}
            className="w-full bg-[#6C63FF] text-white font-semibold py-4 rounded-full shadow-[0_10px_25px_-5px_rgba(108,99,255,0.4)] transition-transform active:scale-95 mb-4"
          >
            Complete Profile
          </button>
        </motion.div>
      </div>
    </div>
  );
}
