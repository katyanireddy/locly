import { Outlet } from 'react-router';

export function RootLayout() {
  return (
    <div className="w-full h-[100dvh] overflow-hidden bg-[#F7F8FA] dark:bg-[#0F1115] text-[#1b1b24] dark:text-[#F7F8FA] flex flex-col font-sans transition-colors duration-200">
      <Outlet />
    </div>
  );
}