import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { MapPin } from 'lucide-react';

export function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="flex-1 flex flex-col items-center justify-between p-6 relative bg-gradient-to-b from-[#FCF8FF] to-white dark:from-[#0F1115] dark:to-[#1B1B24]">
      {/* Background blurs */}
      <div className="absolute top-20 left-0 w-40 h-40 bg-[#4D41DF]/5 dark:bg-[#4D41DF]/10 rounded-full blur-[40px]"></div>
      <div className="absolute bottom-20 right-0 w-48 h-48 bg-[#00C2A8]/5 dark:bg-[#00C2A8]/10 rounded-full blur-[40px]"></div>

      <div className="flex flex-col items-center mt-12 z-10 w-full">
        <h1 className="text-4xl font-bold text-[#6C63FF] mb-2 tracking-tight">Locly</h1>
        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 text-center mb-8">
          Your neighborhood, reimagined.
        </p>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-full max-w-sm aspect-[4/3] rounded-[32px] overflow-hidden shadow-2xl mb-8 border border-gray-200/20 dark:border-white/10"
        >
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1758613171240-3951cdccf1cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm91cCUyMG9mJTIwZnJpZW5kcyUyMGhhbmdpbmclMjBvdXQlMjBvdXRkb29yc3xlbnwxfHx8fDE3NzkzNzMyMzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Group of friends"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 right-4 bg-white/80 dark:bg-black/60 backdrop-blur-md rounded-xl p-3 flex items-center gap-3 border border-white/40 dark:border-white/10 shadow-lg">
            <div className="w-10 h-10 rounded-full bg-[#6C63FF] flex items-center justify-center shrink-0">
              <MapPin size={20} color="white" />
            </div>
            <div>
              <p className="text-xs font-medium text-gray-800 dark:text-gray-200">Nearby Event</p>
              <p className="text-sm font-bold text-[#6C63FF]">Rooftop Meetup • 200m</p>
            </div>
          </div>
        </motion.div>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 text-center">Join the community</h2>
        <p className="text-base text-gray-500 dark:text-gray-400 text-center px-4">
          Connect with people, find local events, and discover the hidden gems in your city.
        </p>
      </div>

      <div className="w-full max-w-sm flex flex-col gap-4 z-10 mb-8">
        <button 
          onClick={() => navigate('/interests')}
          className="w-full bg-[#6C63FF] text-white font-semibold py-4 rounded-full shadow-[0_10px_25px_-5px_rgba(108,99,255,0.4)] transition-transform active:scale-95"
        >
          Sign Up for Free
        </button>
        <button 
          onClick={() => navigate('/login')}
          className="w-full bg-transparent border-2 border-[#6C63FF] text-[#6C63FF] font-semibold py-4 rounded-full transition-transform active:scale-95"
        >
          Already have an account? Log In
        </button>
        
        <p className="text-[10px] text-center text-gray-400 uppercase tracking-widest mt-6">
          By joining, you agree to our Terms and Privacy Policy.
        </p>
      </div>
    </div>
  );
}