import { useNavigate } from 'react-router';
import { ChevronLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useRef, useEffect } from 'react';

export function OTP() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return; // Prevent multiple chars
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      // Auto-focus previous on backspace if empty
      inputRefs.current[index - 1]?.focus();
    }
  };

  const isComplete = otp.every(digit => digit !== '');

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
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Verify your number</h1>
          <p className="text-gray-500 dark:text-gray-400 mb-8">Enter the 6-digit code sent to +91 98765 43210</p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex justify-between gap-2 mb-8"
        >
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={el => inputRefs.current[index] = el}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className={`w-12 h-14 text-center text-2xl font-bold rounded-xl focus:outline-none transition-colors ${
                digit 
                  ? 'border-2 border-[#6C63FF] bg-[#6C63FF]/5 text-gray-900 dark:text-white' 
                  : 'border-2 border-gray-200 dark:border-gray-800 bg-transparent text-gray-900 dark:text-white focus:border-[#6C63FF]'
              }`}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex justify-center mb-10"
        >
          <button 
            disabled={timer > 0}
            onClick={() => setTimer(30)}
            className={`text-sm font-semibold transition-colors ${timer > 0 ? 'text-gray-400' : 'text-[#6C63FF]'}`}
          >
            {timer > 0 ? `Resend code in ${timer}s` : 'Resend code'}
          </button>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-auto"
        >
          <button 
            disabled={!isComplete}
            onClick={() => navigate('/interests')}
            className={`w-full py-4 rounded-full font-semibold transition-all ${
              isComplete
                ? 'bg-[#6C63FF] text-white shadow-[0_10px_25px_-5px_rgba(108,99,255,0.4)] active:scale-95'
                : 'bg-gray-100 dark:bg-[#1B1B24] text-gray-400 dark:text-gray-500 cursor-not-allowed'
            }`}
          >
            Verify & Continue
          </button>
        </motion.div>
      </div>
    </div>
  );
}
