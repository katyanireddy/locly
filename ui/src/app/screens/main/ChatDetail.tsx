import { useState, useRef, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { ChevronLeft, Phone, Video, Paperclip, Image as ImageIcon, Send, Mic } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { motion } from 'motion/react';

const INITIAL_MESSAGES = [
  { id: 1, text: 'Hey! Are you going to the rooftop meetup tonight?', sent: false, time: '6:42 PM' },
  { id: 2, text: 'Yes! I was just about to message you about it 😄', sent: true, time: '6:43 PM' },
  { id: 3, text: 'Amazing! It starts at 8. Want to meet at the café first?', sent: false, time: '6:43 PM' },
  { id: 4, text: 'That sounds perfect. The one on 80ft road?', sent: true, time: '6:44 PM' },
  { id: 5, text: 'Exactly! The new one with the good oat lattes', sent: false, time: '6:44 PM' },
  { id: 6, text: 'Loved that cafe recommendation!', sent: false, time: '6:45 PM' },
];

export function ChatDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleSend = () => {
    if (!inputText.trim()) return;
    const newMsg = {
      id: Date.now(),
      text: inputText,
      sent: true,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages(prev => [...prev, newMsg]);
    setInputText('');
  };

  return (
    <div className="flex flex-col h-full bg-[#FCF8FF] dark:bg-[#0F1115] relative">
      {/* Header */}
      <div className="flex items-center justify-between px-4 h-16 shrink-0 bg-white/80 dark:bg-[#0F1115]/80 backdrop-blur-md sticky top-0 z-20 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-gray-900 dark:text-white">
            <ChevronLeft size={24} />
          </button>
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 border border-gray-200 dark:border-gray-800">
                <ImageWithFallback src="https://images.unsplash.com/photo-1691399055809-089c52671f84?q=80&w=400" alt="Sarah" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white dark:border-[#0F1115]"></div>
            </div>
            <div>
              <h2 className="font-bold text-sm text-gray-900 dark:text-white leading-tight">Sarah Williams</h2>
              <span className="text-[10px] text-green-500 font-bold">Online</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 text-[#6C63FF]">
          <button><Phone size={20} /></button>
          <button><Video size={22} /></button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4 pb-32">
        <div className="text-center mb-6">
          <span className="text-xs font-semibold bg-gray-200 dark:bg-gray-800 text-gray-500 px-3 py-1 rounded-full">Today</span>
        </div>

        {messages.map((msg, idx) => (
          <div key={msg.id} className={`flex ${msg.sent ? 'justify-end' : 'justify-start'} mb-4`}>
            {!msg.sent && (
              <div className="w-6 h-6 rounded-full overflow-hidden bg-gray-200 shrink-0 mr-2 self-end mb-4">
                <ImageWithFallback src="https://images.unsplash.com/photo-1691399055809-089c52671f84?q=80&w=400" alt="Sarah" className="w-full h-full object-cover" />
              </div>
            )}
            <div className={`max-w-[75%] ${msg.sent ? 'ml-12' : 'mr-12'}`}>
              <div className={`p-3 text-sm shadow-sm ${
                msg.sent 
                  ? 'bg-gradient-to-br from-[#6C63FF] to-[#4D41DF] text-white rounded-[18px_18px_4px_18px]' 
                  : 'bg-white dark:bg-[#1B1B24] text-gray-900 dark:text-white border border-[#C7C4D8] dark:border-gray-800 rounded-[18px_18px_18px_4px]'
              }`}>
                {msg.text}
              </div>
              <div className={`text-[10px] text-gray-400 mt-1 font-medium ${msg.sent ? 'text-right' : 'text-left'}`}>
                {msg.time}
              </div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start mb-4">
            <div className="w-6 h-6 rounded-full overflow-hidden bg-gray-200 shrink-0 mr-2 self-end mb-4">
              <ImageWithFallback src="https://images.unsplash.com/photo-1691399055809-089c52671f84?q=80&w=400" alt="Sarah" className="w-full h-full object-cover" />
            </div>
            <div className="bg-white dark:bg-[#1B1B24] border border-[#C7C4D8] dark:border-gray-800 rounded-[18px_18px_18px_4px] p-4 shadow-sm flex gap-1 items-center h-11">
              <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-1.5 h-1.5 bg-gray-400 rounded-full"></motion.div>
              <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1.5 h-1.5 bg-gray-400 rounded-full"></motion.div>
              <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1.5 h-1.5 bg-gray-400 rounded-full"></motion.div>
            </div>
          </div>
        )}
        <div ref={bottomRef}></div>
      </div>

      {/* Input Bar */}
      <div className="fixed bottom-[80px] left-0 right-0 px-4 py-3 bg-[#FCF8FF] dark:bg-[#0F1115] border-t border-[#C7C4D8] dark:border-gray-800">
        <div className="flex items-center gap-3">
          <div className="flex gap-3 text-gray-400 shrink-0">
            <button><Paperclip size={20} /></button>
            <button><ImageIcon size={20} /></button>
          </div>
          <div className="flex-1 bg-white dark:bg-[#1B1B24] border border-[#C7C4D8] dark:border-gray-800 rounded-full flex items-center pr-1 pl-4 h-12 shadow-sm focus-within:border-[#6C63FF] transition-colors">
            <input 
              type="text" 
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Message..."
              className="flex-1 bg-transparent text-sm text-gray-900 dark:text-white outline-none"
            />
            {inputText.trim() ? (
              <button 
                onClick={handleSend}
                className="w-10 h-10 bg-[#6C63FF] text-white rounded-full flex items-center justify-center shadow-md shadow-[#6C63FF]/30 active:scale-95 transition-transform"
              >
                <Send size={18} className="-ml-0.5" />
              </button>
            ) : (
              <button className="w-10 h-10 text-gray-400 flex items-center justify-center">
                <Mic size={20} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
