import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Sidebar, TopBar } from './components';

// Components
import Dashboard from './pages/Dashboard';
import MockInterview from './pages/MockInterview';
import RealTimeCopilot from './pages/RealTimeCopilot';
import StealthMode from './pages/StealthMode';
import CodingCopilot from './pages/CodingCopilot';
import ResumeOptimizer from './pages/ResumeOptimizer';
import Analytics from './pages/Analytics';

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const getPageTitle = (path) => {
    const titles = {
      '/': 'Dashboard',
      '/mock-interview': 'Mock Interview',
      '/realtime': 'Real-Time Copilot',
      '/stealth': 'Stealth Mode',
      '/coding': 'Coding Copilot',
      '/resume': 'Resume Optimizer',
      '/analytics': 'Analytics',
    };
    return titles[path] || 'Dashboard';
  };

  return (
    <Router>
      <div className="flex min-h-screen bg-navy-900">
        {/* Sidebar */}
        <Sidebar collapsed={sidebarCollapsed} setCollapsed={setSidebarCollapsed} />

        {/* Main Content */}
        <main 
          className={`flex-1 transition-all duration-300 ${
            sidebarCollapsed ? 'ml-20' : 'ml-72'
          }`}
        >
          <Routes>
            <Route path="/" element={
              <>
                <TopBar title="Dashboard" subtitle="Welcome back! Ready to ace your next interview?" />
                <Dashboard />
              </>
            } />
            <Route path="/mock-interview" element={
              <>
                <TopBar title="Mock Interview" subtitle="Practice with AI-powered interview simulation" />
                <MockInterview />
              </>
            } />
            <Route path="/realtime" element={
              <>
                <TopBar title="Real-Time Copilot" subtitle="Live interview assistance with AI" />
                <RealTimeCopilot />
              </>
            } />
            <Route path="/stealth" element={
              <>
                <TopBar title="Stealth Mode" subtitle="Discreet overlay for screen-sharing sessions" />
                <StealthMode />
              </>
            } />
            <Route path="/coding" element={
              <>
                <TopBar title="Coding Copilot" subtitle="Technical interview support" />
                <CodingCopilot />
              </>
            } />
            <Route path="/resume" element={
              <>
                <TopBar title="Resume Optimizer" subtitle="ATS-friendly resume building" />
                <ResumeOptimizer />
              </>
            } />
            <Route path="/analytics" element={
              <>
                <TopBar title="Analytics" subtitle="Track your progress over time" />
                <Analytics />
              </>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
