import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Mic, 
  Brain, 
  Shield, 
  Code, 
  FileText, 
  BarChart3, 
  Settings,
  ChevronDown,
  ChevronRight,
  Zap
} from 'lucide-react';

function Sidebar({ collapsed, setCollapsed }) {
  const location = useLocation();
  
  const [expandedSections, setExpandedSections] = useState({
    interviews: true,
    tools: true,
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const navSections = [
    {
      id: 'main',
      items: [
        { path: '/', label: 'Dashboard', icon: Home },
      ]
    },
    {
      id: 'interviews',
      title: 'Interviews',
      items: [
        { path: '/mock-interview', label: 'Mock Interview', icon: Mic },
        { path: '/realtime', label: 'Real-Time Copilot', icon: Brain },
        { path: '/stealth', label: 'Stealth Mode', icon: Shield },
      ]
    },
    {
      id: 'tools',
      title: 'Tools',
      items: [
        { path: '/coding', label: 'Coding Copilot', icon: Code },
        { path: '/resume', label: 'Resume Optimizer', icon: FileText },
        { path: '/analytics', label: 'Analytics', icon: BarChart3 },
      ]
    },
  ];

  return (
    <aside 
      className={`${
        collapsed ? 'w-20' : 'w-72'
      } bg-navy-850 border-r border-cyan-900/20 transition-all duration-300 flex flex-col h-screen fixed left-0 top-0 z-50`}
    >
      {/* Logo */}
      <div className="p-5 border-b border-cyan-900/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center glow-sm">
              <Zap className="w-5 h-5 text-navy-900" />
            </div>
            {!collapsed && (
              <div>
                <h1 className="font-bold text-lg text-white">InterviewPilot</h1>
                <p className="text-xs text-cyan-400/70">AI-Powered Prep</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        {navSections.map((section) => (
          <div key={section.id} className="mb-4">
            {section.title && (
              <button
                onClick={() => toggleSection(section.id)}
                className={`flex items-center justify-between w-full px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider hover:text-cyan-400 transition-colors ${
                  collapsed ? 'justify-center' : ''
                }`}
              >
                {!collapsed && section.title}
                {!collapsed && (
                  section.expanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />
                )}
              </button>
            )}
            
            {(section.id === 'main' || expandedSections[section.id] || !section.title) && (
              <div className="space-y-1">
                {section.items.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 group ${
                        isActive 
                          ? 'bg-cyan-900/20 text-cyan-400 border border-cyan-800/30' 
                          : 'text-gray-400 hover:bg-navy-750 hover:text-white border border-transparent'
                      } ${collapsed ? 'justify-center' : ''}`}
                    >
                      <item.icon className={`w-5 h-5 ${isActive ? 'text-cyan-400' : 'text-gray-500 group-hover:text-white'}`} />
                      {!collapsed && (
                        <span className="text-sm font-medium">{item.label}</span>
                      )}
                      {isActive && !collapsed && (
                        <div className="ml-auto w-1.5 h-1.5 rounded-full bg-cyan-400 glow-sm" />
                      )}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Settings */}
      <div className="p-3 border-t border-cyan-900/20">
        <Link
          to="/settings"
          className={`flex items-center gap-3 px-3 py-3 rounded-lg text-gray-400 hover:bg-navy-750 hover:text-white transition-all ${
            collapsed ? 'justify-center' : ''
          }`}
        >
          <Settings className="w-5 h-5" />
          {!collapsed && <span className="text-sm font-medium">Settings</span>}
        </Link>
      </div>

      {/* Collapse Toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-20 bg-navy-750 border border-cyan-800/30 rounded-full p-1.5 hover:bg-navy-700 transition-colors z-50"
      >
        {collapsed ? (
          <ChevronRight className="w-4 h-4 text-gray-400" />
        ) : (
          <ChevronDown className="w-4 h-4 text-gray-400 rotate-90" />
        )}
      </button>
    </aside>
  );
}

export default Sidebar;
