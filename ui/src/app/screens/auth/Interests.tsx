import { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { Dribbble, Gamepad2, Coffee, Laptop, Dumbbell, Paintbrush, Music, Users } from 'lucide-react';

const INTERESTS = [
  { id: 'sports', icon: Dribbble, title: 'Sports', subtitle: 'Pick-up games & matches', colSpan: 1 },
  { id: 'gaming', icon: Gamepad2, title: 'Gaming', subtitle: 'E-sports & local LANs', colSpan: 1 },
  { id: 'cafes', icon: Coffee, title: 'Cafes', subtitle: 'Remote work & hidden brews', colSpan: 2, bgImage: 'https://images.unsplash.com/photo-1739723745132-97df9db49db2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwY2FmZSUyMGludGVyaW9yfGVufDF8fHx8MTc3OTI2MDE2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
  { id: 'tech', icon: Laptop, title: 'Tech', subtitle: 'Hackathons & meetups', colSpan: 1 },
  { id: 'fitness', icon: Dumbbell, title: 'Fitness', subtitle: 'Gym buddies & classes', colSpan: 1 },
  { id: 'creators', icon: Paintbrush, title: 'Creators', subtitle: 'Design, Art & Photography', colSpan: 1 },
  { id: 'music', icon: Music, title: 'Music', subtitle: 'Concerts & vinyl digs', colSpan: 1 },
  { id: 'study', icon: Users, title: 'Study Groups', subtitle: 'Connect with fellow learners in your area', colSpan: 2 },
];

export function Interests() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const toggleInterest = (id: string) => {
    const next = new Set(selected);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setSelected(next);
  };

  return (
    <div className="flex-1 flex flex-col bg-white dark:bg-[#1B1B24] relative h-full">
      {/* Header */}
      <div className="flex items-center justify-between px-4 h-16 shrink-0 bg-white/80 dark:bg-[#1B1B24]/80 backdrop-blur-md z-10 sticky top-0">
        <span className="text-[#6C63FF] font-bold text-lg tracking-tight">Locly</span>
        <button onClick={() => navigate('/app/home')} className="px-4 py-2 text-sm font-semibold text-gray-600 dark:text-gray-300">
          Skip
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-32">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Tailor your vibe</h1>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
          Select at least 3 interests to help us find the perfect local spots and people for you.
        </p>

        {/* Filter chips */}
        <div className="flex gap-3 overflow-x-auto pb-4 mb-2 no-scrollbar">
          <button className="px-4 py-2 bg-[#6C63FF] text-white text-xs font-medium rounded-full whitespace-nowrap">All</button>
          <button className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full whitespace-nowrap">Social</button>
          <button className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full whitespace-nowrap">Sports</button>
          <button className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full whitespace-nowrap">Creative</button>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 gap-3">
          {INTERESTS.map((item) => {
            const isSelected = selected.has(item.id);
            return (
              <motion.button
                key={item.id}
                whileTap={{ scale: 0.95 }}
                onClick={() => toggleInterest(item.id)}
                className={`
                  relative overflow-hidden text-left p-4 rounded-xl border flex flex-col justify-between transition-colors
                  ${item.colSpan === 2 ? 'col-span-2' : 'col-span-1'}
                  ${isSelected ? 'border-[#6C63FF] bg-[#6C63FF]/10' : 'border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-white/5'}
                  ${item.id === 'cafes' ? 'min-h-[140px]' : 'min-h-[120px]'}
                `}
              >
                {item.bgImage && (
                  <>
                    <div className="absolute inset-0 z-0">
                      <ImageWithFallback src={item.bgImage} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute inset-0 bg-black/60 z-0" />
                  </>
                )}
                
                <div className={`relative z-10 w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${isSelected ? 'bg-[#6C63FF]/20 text-[#6C63FF]' : 'bg-[#6C63FF]/10 text-[#6C63FF] dark:text-[#C4C0FF]'}`}>
                  <item.icon size={20} />
                </div>
                
                <div className="relative z-10 mt-auto">
                  <h3 className={`font-semibold text-sm mb-1 ${item.bgImage ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                    {item.title}
                  </h3>
                  <p className={`text-xs ${item.bgImage ? 'text-gray-300' : 'text-gray-500 dark:text-gray-400'}`}>
                    {item.subtitle}
                  </p>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 p-4 pt-8 bg-gradient-to-t from-white dark:from-[#1B1B24] to-transparent pointer-events-none">
        <div className="pointer-events-auto flex flex-col gap-3">
          <p className="text-center text-xs font-medium text-gray-500">{selected.size} categories selected</p>
          <button 
            onClick={() => navigate('/app/home')}
            disabled={selected.size < 3}
            className={`w-full py-4 rounded-full font-semibold transition-all ${
              selected.size >= 3 
                ? 'bg-[#6C63FF] text-white shadow-[0_10px_25px_-5px_rgba(108,99,255,0.4)]' 
                : 'bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500'
            }`}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}