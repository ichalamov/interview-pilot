import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { 
  Mic, 
  Brain, 
  Shield, 
  Code, 
  FileText, 
  BarChart3, 
  Settings,
  Home,
  Menu,
  X
} from 'lucide-react';

// Components
import Dashboard from './pages/Dashboard';
import MockInterview from './pages/MockInterview';
import RealTimeCopilot from './pages/RealTimeCopilot';
import StealthMode from './pages/StealthMode';
import CodingCopilot from './pages/CodingCopilot';
import ResumeOptimizer from './pages/ResumeOptimizer';
import Analytics from './pages/Analytics';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const navItems = [
    { path: '/', label: 'Dashboard', icon: Home },
    { path: '/mock-interview', label: 'Mock Interview', icon: Mic },
    { path: '/realtime', label: 'Real-Time Copilot', icon: Brain },
    { path: '/stealth', label: 'Stealth Mode', icon: Shield },
    { path: '/coding', label: 'Coding Copilot', icon: Code },
    { path: '/resume', label: 'Resume Optimizer', icon: FileText },
    { path: '/analytics', label: 'Analytics', icon: BarChart3 },
  ];

  return (
    <Router>
      <div className="flex h-screen bg-gray-900 text-white">
        {/* Sidebar */}
        <aside 
          className={`${
            sidebarOpen ? 'w-64' : 'w-20'
          } bg-gray-800 transition-all duration-300 flex flex-col`}
        >
          <div className="p-4 border-b border-gray-700">
            <h1 className={`font-bold text-xl ${!sidebarOpen && 'text-center'}`}>
              {sidebarOpen ? 'InterviewPilot' : 'IP'}
            </h1>
          </div>
          
          <nav className="flex-1 p-2 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-700 transition-colors ${
                  window.location.pathname === item.path ? 'bg-primary-600' : ''
                }`}
              >
                <item.icon className="w-5 h-5" />
                {sidebarOpen && <span>{item.label}</span>}
              </Link>
            ))}
          </nav>

          <div className="p-4 border-t border-gray-700">
            <button className="flex items-center gap-3 px-4 py-2 w-full rounded-lg hover:bg-gray-700 transition-colors">
              <Settings className="w-5 h-5" />
              {sidebarOpen && <span>Settings</span>}
            </button>
          </div>

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="absolute -right-3 top-4 bg-gray-700 rounded-full p-1 hover:bg-gray-600 transition-colors"
          >
            {sidebarOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/mock-interview" element={<MockInterview />} />
            <Route path="/realtime" element={<RealTimeCopilot />} />
            <Route path="/stealth" element={<StealthMode />} />
            <Route path="/coding" element={<CodingCopilot />} />
            <Route path="/resume" element={<ResumeOptimizer />} />
            <Route path="/analytics" element={<Analytics />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
