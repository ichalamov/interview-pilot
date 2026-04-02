import React, { useState } from 'react';
import { Mic, MicOff, Copy, RefreshCw, Settings, Zap } from 'lucide-react';

function RealTimeCopilot() {
  const [isListening, setIsListening] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [mode, setMode] = useState('behavioral'); // behavioral, technical, coding
  const [isGenerating, setIsGenerating] = useState(false);

  const sampleQuestions = [
    "Tell me about a time you had to deal with a difficult stakeholder.",
    "What's your greatest weakness?",
    "Describe a project you're proud of.",
    "How do you handle tight deadlines?"
  ];

  const generateResponse = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setAiResponse(`Here's a structured response using the STAR method:

**Situation:** In my previous role, we had a stakeholder who was resistant to our proposed technical solution.

**Task:** I needed to gain their buy-in while ensuring we maintained technical best practices.

**Action:** I scheduled a one-on-one meeting to understand their concerns, then created a detailed comparison document showing trade-offs. I also proposed a pilot approach to reduce perceived risk.

**Result:** The stakeholder became one of our strongest advocates, and the project was delivered 2 weeks ahead of schedule.

**Key Points to Emphasize:**
• Show empathy and active listening
• Demonstrate problem-solving approach
• Quantify results when possible
• Keep it under 2 minutes`);
      setIsGenerating(false);
    }, 1500);
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">Real-Time Copilot</h1>
          <p className="text-gray-400">Live interview assistance with AI-powered responses</p>
        </div>
        <div className="flex items-center gap-3">
          <span className={`px-3 py-1 rounded-full text-sm ${isListening ? 'bg-green-900 text-green-400' : 'bg-gray-700 text-gray-400'}`}>
            {isListening ? '🔴 Listening' : '⚪ Not Listening'}
          </span>
        </div>
      </div>

      {/* Mode Selection */}
      <div className="flex gap-3 mb-6">
        <button
          onClick={() => setMode('behavioral')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            mode === 'behavioral' ? 'bg-primary-600' : 'bg-gray-800 hover:bg-gray-700'
          }`}
        >
          Behavioral
        </button>
        <button
          onClick={() => setMode('technical')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            mode === 'technical' ? 'bg-primary-600' : 'bg-gray-800 hover:bg-gray-700'
          }`}
        >
          Technical
        </button>
        <button
          onClick={() => setMode('coding')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            mode === 'coding' ? 'bg-primary-600' : 'bg-gray-800 hover:bg-gray-700'
          }`}
        >
          Coding
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Control Panel */}
        <div className="bg-gray-800 rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-4">Controls</h2>
          
          <button
            onClick={() => setIsListening(!isListening)}
            className={`w-full py-4 rounded-lg font-semibold mb-4 flex items-center justify-center gap-2 transition-colors ${
              isListening 
                ? 'bg-red-600 hover:bg-red-700' 
                : 'bg-green-600 hover:bg-green-700'
            }`}
          >
            {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
            {isListening ? 'Stop Listening' : 'Start Listening'}
          </button>

          <div className="space-y-4">
            <div>
              <label className="block text-gray-400 text-sm mb-2">Response Length</label>
              <input type="range" className="w-full" min="1" max="3" defaultValue="2" />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Short</span>
                <span>Medium</span>
                <span>Long</span>
              </div>
            </div>

            <div>
              <label className="block text-gray-400 text-sm mb-2">Processing Speed</label>
              <select className="w-full bg-gray-700 rounded-lg p-2 border border-gray-600">
                <option>Fast (may be less accurate)</option>
                <option selected>Balanced</option>
                <option>Thorough (slower)</option>
              </select>
            </div>

            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded" defaultChecked />
              <span className="text-sm">Auto-generate responses</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded" />
              <span className="text-sm">Include filler words</span>
            </label>
          </div>
        </div>

        {/* Live Question */}
        <div className="bg-gray-800 rounded-xl p-6 lg:col-span-2">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-400" />
            Detected Question
          </h2>
          
          <div className="bg-gray-750 rounded-lg p-6 mb-4 min-h-[120px]">
            {currentQuestion || (
              <p className="text-gray-500 italic">
                {isListening ? 'Listening for interviewer questions...' : 'Start listening to detect questions'}
              </p>
            )}
          </div>

          <div className="flex gap-2 mb-4">
            {sampleQuestions.map((q, i) => (
              <button
                key={i}
                onClick={() => setCurrentQuestion(q)}
                className="text-xs bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded-full transition-colors"
              >
                {q.substring(0, 30)}...
              </button>
            ))}
          </div>

          <button
            onClick={generateResponse}
            disabled={!currentQuestion || isGenerating}
            className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-gray-700 disabled:cursor-not-allowed py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
          >
            {isGenerating ? <RefreshCw className="w-5 h-5 animate-spin" /> : <Zap className="w-5 h-5" />}
            {isGenerating ? 'Generating...' : 'Generate Response'}
          </button>
        </div>
      </div>

      {/* AI Response */}
      {aiResponse && (
        <div className="mt-6 bg-gradient-to-r from-primary-900/50 to-purple-900/50 rounded-xl p-6 border border-primary-700">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">AI Suggested Response</h2>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors" title="Copy">
                <Copy className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors" title="Regenerate">
                <RefreshCw className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-4 whitespace-pre-line">
            {aiResponse}
          </div>
          <p className="text-gray-400 text-sm mt-3">
            💡 Tip: Use this as a guide, not a script. Adapt to your natural speaking style.
          </p>
        </div>
      )}
    </div>
  );
}

export default RealTimeCopilot;
