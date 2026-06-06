import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

export function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/welcome');
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex-1 flex flex-col items-center justify-center relative bg-gradient-to-b from-[#FCF8FF] to-white dark:from-[#0F1115] dark:to-[#1B1B24]">
      {/* Background blurs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#4D41DF]/5 dark:bg-[#4D41DF]/10 rounded-full blur-[50px] -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#00C2A8]/5 dark:bg-[#00C2A8]/10 rounded-full blur-[50px] translate-y-1/4 -translate-x-1/4"></div>

      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col items-center z-10"
      >
        <div className="w-24 h-24 bg-[#6C63FF] rounded-3xl flex items-center justify-center shadow-[0_10px_30px_-5px_rgba(108,99,255,0.3)] mb-6 relative">
          <MapPin size={40} color="white" />
          <div className="absolute inset-0 bg-white/20 rounded-3xl animate-ping opacity-20"></div>
        </div>
        
        <h1 className="text-5xl font-bold text-[#6C63FF] mb-2 tracking-tight">Locly</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">Your city, but social.</p>
      </motion.div>

      <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center z-10">
        <div className="flex items-center gap-4 mb-2">
          <div className="h-px w-12 bg-gray-300 dark:bg-gray-700"></div>
          <span className="text-xs font-medium tracking-widest text-gray-500 uppercase">CONNECT LOCALLY</span>
          <div className="h-px w-12 bg-gray-300 dark:bg-gray-700"></div>
        </div>
        <p className="text-xs text-gray-400">© 2026 Locly Inc. Built for humans.</p>
      </div>
    </div>
  );
}