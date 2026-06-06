import { useNavigate } from 'react-router';
import { X, Image as ImageIcon, MapPin, Globe, Users, ChevronRight, Check } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function CreatePost() {
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const [visibility, setVisibility] = useState('public');
  const [allowComments, setAllowComments] = useState(true);
  const [crossPost, setCrossPost] = useState(false);
  const [isPosting, setIsPosting] = useState(false);

  const handlePost = () => {
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
              className="w-20 h-20 bg-[#00C2A8] rounded-full flex items-center justify-center text-white mb-4 shadow-xl shadow-[#00C2A8]/40"
            >
              <Check size={40} />
            </motion.div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Posted! 🎉</h2>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <div className="flex items-center justify-between px-4 h-16 shrink-0 bg-[#FCF8FF]/80 dark:bg-[#0F1115]/80 backdrop-blur-md sticky top-0 z-20">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-gray-900 dark:text-white">
            <X size={24} />
          </button>
          <h1 className="text-xl font-bold text-[#6C63FF]">Create</h1>
        </div>
        <button 
          onClick={handlePost}
          disabled={text.length === 0}
          className={`px-6 py-2 font-bold rounded-full shadow-sm transition-all ${
            text.length > 0 
              ? 'bg-[#6C63FF] text-white active:scale-95' 
              : 'bg-gray-200 dark:bg-gray-800 text-gray-400 cursor-not-allowed'
          }`}
        >
          Post
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-6">
        {/* User Context */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 shadow-sm">
            <ImageWithFallback src="https://i.pravatar.cc/150?img=11" alt="Alex" className="w-full h-full object-cover" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white">Alex Rivera</h3>
            <div className="flex items-center gap-1 text-xs text-gray-500 font-medium">
              <MapPin size={10} className="text-[#6C63FF]" />
              <span>Bangalore, IN</span>
            </div>
          </div>
        </div>

        {/* Post Type Selector */}
        <div className="flex gap-2 mb-6">
          {['📷 Photo', '✍️ Text', '📍 Check-in'].map((type, i) => (
            <button key={i} className={`px-4 py-1.5 rounded-full text-xs font-bold transition-colors ${i === 0 ? 'bg-[#6C63FF]/10 text-[#6C63FF] border border-[#6C63FF]/30' : 'bg-white dark:bg-[#1B1B24] border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-300'}`}>
              {type}
            </button>
          ))}
        </div>

        {/* Upload Area */}
        <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 hover:border-[#6C63FF] transition-colors cursor-pointer rounded-2xl p-8 flex flex-col items-center justify-center bg-gray-50 dark:bg-[#1B1B24] mb-6 group">
          <div className="w-16 h-16 rounded-full bg-[#6C63FF] flex items-center justify-center text-white shadow-lg shadow-[#6C63FF]/30 mb-4 group-hover:scale-110 transition-transform">
            <ImageIcon size={28} />
          </div>
          <h3 className="font-bold text-gray-900 dark:text-white mb-1">Add Photos or Video</h3>
          <p className="text-xs text-gray-500 text-center font-medium">Drag and drop or tap to browse</p>
        </div>

        {/* Caption */}
        <textarea 
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What's happening in your neighborhood?"
          className="w-full h-24 bg-transparent border-none outline-none resize-none text-lg text-gray-900 dark:text-white placeholder-gray-400 mb-2 font-medium"
        ></textarea>
        
        <div className="flex items-center justify-between mb-8 border-b border-gray-200 dark:border-gray-800 pb-4">
          <div className="flex gap-4 text-[#6C63FF]">
            <button className="font-bold text-lg">@</button>
            <button className="font-bold text-lg">#</button>
            <button className="font-bold text-lg">☺</button>
          </div>
          <span className={`text-xs font-bold ${text.length > 450 ? 'text-red-500' : 'text-gray-400'}`}>
            {text.length} / 500
          </span>
        </div>

        {/* Location Tagging */}
        <button className="w-full flex items-center justify-between p-4 bg-white dark:bg-[#1B1B24] border border-gray-200 dark:border-gray-800 rounded-2xl mb-8 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#6C63FF]/10 flex items-center justify-center text-[#6C63FF]">
              <MapPin size={20} />
            </div>
            <div className="text-left">
              <h4 className="font-bold text-gray-900 dark:text-white text-sm">Indiranagar</h4>
              <p className="text-xs text-gray-500">Bangalore, IN</p>
            </div>
          </div>
          <ChevronRight size={20} className="text-gray-400" />
        </button>

        {/* Visibility */}
        <div className="mb-8">
          <h4 className="font-bold text-gray-900 dark:text-white mb-3 px-1">Who can see this?</h4>
          <div className="grid grid-cols-2 gap-3">
            <button 
              onClick={() => setVisibility('public')}
              className={`flex flex-col items-center justify-center p-4 rounded-xl transition-all ${
                visibility === 'public' 
                  ? 'bg-[#6C63FF]/10 border-2 border-[#6C63FF] text-[#6C63FF]' 
                  : 'bg-white dark:bg-[#1B1B24] border-2 border-gray-200 dark:border-gray-800 text-gray-500'
              }`}
            >
              <Globe size={24} className="mb-2" />
              <span className="font-bold text-sm">Public</span>
              <span className="text-xs opacity-80 mt-1">Anyone nearby</span>
            </button>
            <button 
              onClick={() => setVisibility('community')}
              className={`flex flex-col items-center justify-center p-4 rounded-xl transition-all ${
                visibility === 'community' 
                  ? 'bg-[#00C2A8]/10 border-2 border-[#00C2A8] text-[#00C2A8]' 
                  : 'bg-white dark:bg-[#1B1B24] border-2 border-gray-200 dark:border-gray-800 text-gray-500'
              }`}
            >
              <Users size={24} className="mb-2" />
              <span className="font-bold text-sm">Community</span>
              <span className="text-xs opacity-80 mt-1">Locals only</span>
            </button>
          </div>
        </div>

        {/* Toggles */}
        <div className="space-y-4 pt-4 border-t border-gray-200 dark:border-gray-800 mb-8">
          <div className="flex items-center justify-between" onClick={() => setCrossPost(!crossPost)}>
            <span className="text-gray-900 dark:text-white font-medium">Cross-post to Instagram</span>
            <div className={`w-12 h-6 rounded-full relative transition-colors cursor-pointer ${crossPost ? 'bg-[#6C63FF]' : 'bg-gray-200 dark:bg-gray-700'}`}>
              <motion.div animate={{ x: crossPost ? 24 : 0 }} className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></motion.div>
            </div>
          </div>
          <div className="flex items-center justify-between" onClick={() => setAllowComments(!allowComments)}>
            <span className="text-gray-900 dark:text-white font-medium">Allow comments</span>
            <div className={`w-12 h-6 rounded-full relative transition-colors cursor-pointer ${allowComments ? 'bg-[#6C63FF]' : 'bg-gray-200 dark:bg-gray-700'}`}>
              <motion.div animate={{ x: allowComments ? 24 : 0 }} className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}