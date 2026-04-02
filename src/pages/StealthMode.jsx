import React, { useState } from 'react';
import { Eye, EyeOff, Move, Maximize, Minimize, Settings } from 'lucide-react';

function StealthMode() {
  const [isVisible, setIsVisible] = useState(true);
  const [opacity, setOpacity] = useState(80);
  const [size, setSize] = useState(100);
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [isDragging, setIsDragging] = useState(false);
  const [alwaysOnTop, setAlwaysOnTop] = useState(true);
  const [hideOnMouseLeave, setHideOnMouseLeave] = useState(false);

  const sampleResponse = `STAR Method Response:

Situation: Led migration of legacy system to microservices
Task: Reduce downtime and maintain data integrity
Action: Implemented blue-green deployment strategy
Result: 99.9% uptime, 40% faster deployments`;

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Stealth Mode</h1>
        <p className="text-gray-400">Discreet overlay for screen-sharing - stays hidden from interviewers</p>
      </div>

      {/* Warning Banner */}
      <div className="bg-yellow-900/50 border border-yellow-700 rounded-lg p-4 mb-6 flex items-start gap-3">
        <span className="text-2xl">⚠️</span>
        <div>
          <h3 className="font-semibold text-yellow-400">Important Notice</h3>
          <p className="text-sm text-yellow-200/80">
            Use this feature responsibly. Some companies may consider AI assistance during interviews as cheating. 
            Always check the company's interview policy first.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Preview Panel */}
        <div className="bg-gray-800 rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-4">Overlay Preview</h2>
          
          <div 
            className="relative bg-gray-900 rounded-lg h-64 overflow-hidden border-2 border-dashed border-gray-600"
            style={{ 
              opacity: isVisible ? opacity / 100 : 0.3,
              transform: `scale(${size / 100})`,
              transformOrigin: 'top left'
            }}
          >
            {/* Simulated overlay window */}
            <div 
              className="absolute bg-gray-800/95 rounded-lg p-4 shadow-2xl border border-gray-600"
              style={{ 
                left: `${position.x}%`, 
                top: `${position.y}%`,
                width: '280px'
              }}
            >
              <div className="flex items-center justify-between mb-2 pb-2 border-b border-gray-600">
                <span className="text-xs font-medium">AI Assistant</span>
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
              </div>
              <pre className="text-xs whitespace-pre-wrap text-gray-300">
                {sampleResponse}
              </pre>
            </div>
            
            {!isVisible && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900/80">
                <span className="text-gray-400">Overlay Hidden</span>
              </div>
            )}
          </div>

          <div className="flex gap-3 mt-4">
            <button
              onClick={() => setIsVisible(!isVisible)}
              className={`flex-1 py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 ${
                isVisible ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'
              }`}
            >
              {isVisible ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              {isVisible ? 'Hide Overlay' : 'Show Overlay'}
            </button>
          </div>
        </div>

        {/* Settings Panel */}
        <div className="bg-gray-800 rounded-xl p-6 space-y-6">
          <div>
            <h2 className="text-lg font-semibold mb-4">Display Settings</h2>
            
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm text-gray-400">Opacity</label>
                  <span className="text-sm font-medium">{opacity}%</span>
                </div>
                <input 
                  type="range" 
                  min="10" 
                  max="100" 
                  value={opacity}
                  onChange={(e) => setOpacity(Number(e.target.value))}
                  className="w-full"
                />
                <p className="text-xs text-gray-500 mt-1">Lower = more discreet</p>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm text-gray-400">Size</label>
                  <span className="text-sm font-medium">{size}%</span>
                </div>
                <input 
                  type="range" 
                  min="50" 
                  max="150" 
                  value={size}
                  onChange={(e) => setSize(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="text-sm">Always on Top</label>
                <button
                  onClick={() => setAlwaysOnTop(!alwaysOnTop)}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    alwaysOnTop ? 'bg-primary-600' : 'bg-gray-600'
                  }`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    alwaysOnTop ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <label className="text-sm">Hide on Mouse Leave</label>
                <button
                  onClick={() => setHideOnMouseLeave(!hideOnMouseLeave)}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    hideOnMouseLeave ? 'bg-primary-600' : 'bg-gray-600'
                  }`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    hideOnMouseLeave ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Quick Position</h3>
            <div className="grid grid-cols-3 gap-2">
              {[
                { x: 10, y: 10, label: 'Top Left' },
                { x: 50, y: 10, label: 'Top' },
                { x: 90, y: 10, label: 'Top Right' },
                { x: 10, y: 50, label: 'Left' },
                { x: 90, y: 50, label: 'Right' },
                { x: 10, y: 90, label: 'Bottom Left' },
                { x: 50, y: 90, label: 'Bottom' },
                { x: 90, y: 90, label: 'Bottom Right' },
              ].map((pos) => (
                <button
                  key={pos.label}
                  onClick={() => setPosition({ x: pos.x, y: pos.y })}
                  className="bg-gray-700 hover:bg-gray-600 text-xs py-2 rounded transition-colors"
                >
                  {pos.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tips */}
      <div className="mt-6 bg-gray-800 rounded-xl p-6">
        <h3 className="font-semibold mb-3">💡 Stealth Tips</h3>
        <ul className="space-y-2 text-sm text-gray-400">
          <li>• Position the overlay near your camera for natural eye contact</li>
          <li>• Use lower opacity (30-50%) during screen sharing</li>
          <li>• Keep responses as bullet points, not full sentences</li>
          <li>• Practice looking at the overlay naturally before real interviews</li>
          <li>• Use keyboard shortcuts to toggle visibility quickly</li>
        </ul>
      </div>
    </div>
  );
}

export default StealthMode;
