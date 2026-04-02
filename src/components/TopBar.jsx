import React from 'react';
import { Bell, User, ChevronDown, Zap } from 'lucide-react';

function TopBar({ title, subtitle }) {
  return (
    <header className="h-16 bg-navy-850/80 backdrop-blur-sm border-b border-cyan-900/20 flex items-center justify-between px-6 sticky top-0 z-40">
      <div>
        <h1 className="text-xl font-semibold text-white">{title}</h1>
        {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
      </div>

      <div className="flex items-center gap-4">
        {/* Status Badge */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-900/20 border border-cyan-800/30">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs font-medium text-cyan-400">AI Ready</span>
        </div>

        {/* Notifications */}
        <button className="relative p-2 text-gray-400 hover:text-white hover:bg-navy-750 rounded-lg transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-cyan-400 rounded-full border-2 border-navy-850" />
        </button>

        {/* User Menu */}
        <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-navy-750 transition-colors">
          <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
            <User className="w-4 h-4 text-navy-900" />
          </div>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </button>
      </div>
    </header>
  );
}

export default TopBar;
