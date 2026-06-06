import { useNavigate } from 'react-router';
import { MapPin, Users, Flame } from 'lucide-react';
import { motion } from 'motion/react';

export function LocationPermission() {
  const navigate = useNavigate();

  return (
    <div className="flex-1 flex flex-col bg-gradient-to-b from-[#FCF8FF] to-white dark:from-[#0F1115] dark:to-[#1B1B24] px-6 pt-12 pb-6 relative h-full overflow-hidden">
      
      {/* Animated Map Pin Illustration */}
      <div className="flex-1 flex flex-col items-center justify-center relative mt-10">
        <div className="relative w-40 h-40 flex items-center justify-center">
          {/* Pulsing rings */}
          <div className="absolute inset-0 bg-[#6C63FF]/20 rounded-full animate-ping [animation-duration:3s]"></div>
          <div className="absolute inset-4 bg-[#00C2A8]/20 rounded-full animate-ping [animation-duration:2.5s] [animation-delay:0.5s]"></div>
          
          {/* Main Circle */}
          <div className="absolute inset-8 bg-gradient-to-br from-[#6C63FF] to-[#4D41DF] rounded-full shadow-xl shadow-[#6C63FF]/30 flex items-center justify-center z-10">
            <MapPin size={48} color="white" />
          </div>
        </div>
      </div>

      <div className="flex flex-col z-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">Enable Location</h1>
          <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
            Locly uses your location to show you what's happening nearby. Your exact location is never shared publicly.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="space-y-6 mb-10"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#6C63FF]/10 flex items-center justify-center shrink-0">
              <MapPin size={20} className="text-[#6C63FF]" />
            </div>
            <span className="font-medium text-gray-800 dark:text-gray-200">See events near you</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#00C2A8]/10 flex items-center justify-center shrink-0">
              <Users size={20} className="text-[#00C2A8]" />
            </div>
            <span className="font-medium text-gray-800 dark:text-gray-200">Discover local communities</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0">
              <Flame size={20} className="text-orange-500" />
            </div>
            <span className="font-medium text-gray-800 dark:text-gray-200">Find trending nearby</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-col gap-4 mt-auto"
        >
          <button 
            onClick={() => navigate('/setup')}
            className="w-full bg-[#6C63FF] text-white font-semibold py-4 rounded-full shadow-[0_10px_25px_-5px_rgba(108,99,255,0.4)] transition-transform active:scale-95"
          >
            Allow Location
          </button>

          <button 
            onClick={() => navigate('/setup')}
            className="w-full text-gray-500 dark:text-gray-400 font-semibold py-4 rounded-full transition-transform active:scale-95"
          >
            Maybe Later
          </button>

          <p className="text-center text-xs text-gray-400 mt-2">
            You can change this anytime in Settings
          </p>
        </motion.div>
      </div>
    </div>
  );
}
