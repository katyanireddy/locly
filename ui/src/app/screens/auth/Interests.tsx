import { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { Dribbble, Gamepad2, Coffee, Laptop, Dumbbell, Paintbrush, Music, Users } from 'lucide-react';
import cafe from "../../../assets/images/interestcafe.jpeg";

const INTERESTS = [
  {
    id: 'sports',
    icon: Dribbble,
    title: 'Sports',
    subtitle: 'Pick-up games & matches',
    colSpan: 1,
    color: '#F97316'
  },

  {
    id: 'gaming',
    icon: Gamepad2,
    title: 'Gaming',
    subtitle: 'E-sports & local LANs',
    colSpan: 1,
    color: '#8B5CF6'
  },

  {
    id: 'cafes',
    icon: Coffee,
    title: 'Cafes',
    subtitle: 'Remote work & hidden brews',
    colSpan: 2,
    color: '#F59E0B',
    bgImage: '...'
  },

  {
    id: 'tech',
    icon: Laptop,
    title: 'Tech',
    subtitle: 'Hackathons & meetups',
    colSpan: 1,
    color: '#2563EB'
  },

  {
    id: 'fitness',
    icon: Dumbbell,
    title: 'Fitness',
    subtitle: 'Gym buddies & classes',
    colSpan: 1,
    color: '#22C55E'
  },

  {
    id: 'creators',
    icon: Paintbrush,
    title: 'Creators',
    subtitle: 'Design, Art & Photography',
    colSpan: 1,
    color: '#EC4899'
  },

  {
    id: 'music',
    icon: Music,
    title: 'Music',
    subtitle: 'Concerts & vinyl digs',
    colSpan: 1,
    color: '#A855F7'
  },

  {
    id: 'study',
    icon: Users,
    title: 'Study Groups',
    subtitle: 'Connect with fellow learners in your area',
    colSpan: 2,
    color: '#06B6D4'
  }
];

export function Interests() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const toggleInterest = (id: string) => {
    const next = new Set(selected);
    if (next.has(id)) {
      next.delete(id);
    } else {
      if (next.size < 3) {
          next.add(id);
      }
    }
   
    setSelected(next);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#1B1B24]">
      {/* Header */}
      <div className="flex items-center justify-between px-4 h-16 shrink-0 bg-white/80 dark:bg-[#1B1B24]/80 backdrop-blur-md z-10 sticky top-0">
        <span className="text-[#2563EB] font-extrabold text-3xl tracking-tight">Locly</span>
        <button onClick={() => navigate('/app/home')} className="px-4 py-2 text-sm font-semibold text-gray-600 dark:text-gray-300">
          Skip
        </button>
      </div>
      <p className="text-xs font-semibold text-[#2563EB] mb-2 leading-4 px-4">
      Step 1 of 3
</p>

      <div className="flex-1 overflow-y-auto px-4 pb-40">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">What are you into?</h1>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
          Select at least 3 interests to help us find the perfect local spots and people for you.
        </p>


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
                  ${isSelected ? 'border-[#2563EB] bg-[#2563EB]/10' : 'border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-white/5'}
                  ${item.id === 'cafes' ? 'min-h-[140px]' : 'min-h-[120px]'}
                `}
              >
                {isSelected && (
  <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-xs font-bold z-20">
    ✓
  </div>
)}
                {item.bgImage && (
                  <>
                    <div className="absolute inset-0 z-0">
                      <ImageWithFallback src={cafe} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute inset-0 bg-black/60 z-0" />
                  </>
                )}

                <div
  className="relative z-10 w-10 h-10 rounded-lg flex items-center justify-center mb-3"
  style={{
    backgroundColor: `${item.color}20`,
    color: item.color
  }}
>
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
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-[#1B1B24] border-t border-gray-200 dark:border-gray-800 p-4">
  <p className="text-center text-xs font-semibold text-gray-500 mb-4">
    {selected.size} of 3 selected
  </p>

  <button
    onClick={() => navigate('/app/home')}
    disabled={selected.size !== 3}
    className={`w-full py-4 rounded-full font-semibold transition-all ${
      selected.size === 3
        ? 'bg-[#2563EB] text-white'
        : 'bg-gray-100 dark:bg-gray-800 text-gray-400'
    }`}
  >
    Continue
  </button>
</div>
    </div>
  );
}