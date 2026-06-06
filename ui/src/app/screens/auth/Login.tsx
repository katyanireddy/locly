import { useNavigate } from 'react-router';
import { ChevronLeft } from 'lucide-react';
import { motion } from 'motion/react';

export function Login() {
  const navigate = useNavigate();

  return (
    <div className="flex-1 flex flex-col bg-white dark:bg-[#0F1115] px-6 pt-12 pb-6 relative h-full overflow-hidden">
      {/* Background blurs */}
      <div className="absolute top-20 left-0 w-40 h-40 bg-[#4D41DF]/5 dark:bg-[#4D41DF]/10 rounded-full blur-[40px] pointer-events-none"></div>
      <div className="absolute bottom-20 right-0 w-48 h-48 bg-[#00C2A8]/5 dark:bg-[#00C2A8]/10 rounded-full blur-[40px] pointer-events-none"></div>

      <button onClick={() => navigate(-1)} className="absolute top-12 left-4 p-2 z-10">
        <ChevronLeft size={24} className="text-gray-900 dark:text-white" />
      </button>

      <div className="mt-16 flex-1 flex flex-col z-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Enter your number</h1>
          <p className="text-gray-500 dark:text-gray-400 mb-8">We'll send a verification code to your phone.</p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="space-y-4 mb-8"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone Number</label>
            <div className="flex gap-2">
              <div className="bg-gray-50 dark:bg-[#1B1B24] border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3.5 flex items-center gap-2 cursor-pointer shrink-0">
                <span className="text-xl">🇮🇳</span>
                <span className="text-gray-900 dark:text-white font-medium">+91</span>
              </div>
              <input 
                type="tel" 
                placeholder="98765 43210"
                className="w-full bg-gray-50 dark:bg-[#1B1B24] border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3.5 text-gray-900 dark:text-white text-lg tracking-wider focus:outline-none focus:ring-2 focus:ring-[#6C63FF]"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <button 
            onClick={() => navigate('/otp')}
            className="w-full bg-[#6C63FF] text-white font-semibold py-4 rounded-full shadow-[0_10px_25px_-5px_rgba(108,99,255,0.4)] transition-transform active:scale-95 mb-4"
          >
            Send OTP
          </button>

          <button 
            onClick={() => navigate('/login')}
            className="w-full text-[#6C63FF] font-semibold py-4 rounded-full transition-transform active:scale-95"
          >
            Already have an account? Log In
          </button>
        </motion.div>
      </div>
    </div>
  );
}