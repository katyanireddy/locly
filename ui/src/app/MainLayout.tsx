import { Outlet, useLocation, useNavigate } from 'react-router';
import { Home, Compass, PlusCircle, MessageCircle, User } from 'lucide-react';
import { useTheme } from './components/ThemeProvider';

export function MainLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: 'home', icon: Home, label: 'Home', path: '/app/home' },
    { id: 'discover', icon: Compass, label: 'Discover', path: '/app/discover' },
    { id: 'create', icon: PlusCircle, label: 'Create', path: '/app/create', highlight: true },
    { id: 'chats', icon: MessageCircle, label: 'Chats', path: '/app/chats' },
    { id: 'profile', icon: User, label: 'Me', path: '/app/profile' },
  ];

  return (
    <div className="flex-1 flex flex-col relative w-full h-full overflow-hidden">
      <div className="flex-1 overflow-y-auto w-full h-full relative">
        <Outlet />
      </div>

      {/* Bottom Navigation */}
      <div className="flex-shrink-0 h-[80px] bg-white/90 dark:bg-[#1B1B24]/90 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 flex items-center justify-around px-2 pb-safe">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center justify-center w-16 h-full space-y-1 transition-colors ${
                isActive ? 'text-[#6C63FF]' : 'text-gray-500 dark:text-gray-400'
              } ${item.highlight ? 'relative -top-3' : ''}`}
            >
              {item.highlight ? (
                <div className="bg-[#6C63FF] text-white p-3 rounded-full shadow-lg shadow-[#6C63FF]/30">
                  <item.icon size={24} />
                </div>
              ) : (
                <item.icon size={24} />
              )}
              <span className={`text-[10px] font-medium ${item.highlight ? 'mt-1' : ''}`}>{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}