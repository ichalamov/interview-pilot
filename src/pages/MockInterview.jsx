import React, { useState, useRef } from 'react';
import { Mic, MicOff, Send, StopCircle, Play, Volume2, Settings } from 'lucide-react';

function MockInterview() {
  const [isRecording, setIsRecording] = useState(false);
  const [interviewStarted, setInterviewStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [selectedRole, setSelectedRole] = useState('Software Engineer');
  const [selectedLevel, setSelectedLevel] = useState('Mid-Level');
  const transcriptRef = useRef(null);

  const mockQuestions = [
    "Tell me about a challenging project you worked on and how you overcame obstacles.",
    "Describe a time when you had to work with a difficult team member.",
    "What's your approach to debugging a complex issue in production?",
    "How do you prioritize tasks when working on multiple projects?",
    "Explain a technical concept to someone without a technical background."
  ];

  const mockFeedback = {
    clarity: 85,
    confidence: 78,
    structure: 92,
    fillerWords: 12,
    pace: 'Good',
    suggestions: [
      'Great use of the STAR method!',
      'Try to reduce "um" and "like" filler words',
      'Excellent structure in your response',
      'Consider adding more specific metrics'
    ]
  };

  const startInterview = () => {
    setInterviewStarted(true);
    setCurrentQuestion(mockQuestions[0]);
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  const endInterview = () => {
    setIsRecording(false);
    setInterviewStarted(false);
    setCurrentQuestion(null);
    setFeedback(mockFeedback);
  };

  if (!interviewStarted) {
    return (
      <div className="p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Mock Interview</h1>
        
        <div className="bg-gray-800 rounded-xl p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Interview Settings</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-400 text-sm mb-2">Role</label>
              <select 
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="w-full bg-gray-700 rounded-lg p-3 border border-gray-600 focus:border-primary-500 outline-none"
              >
                <option>Software Engineer</option>
                <option>Product Manager</option>
                <option>Data Scientist</option>
                <option>UX Designer</option>
                <option>DevOps Engineer</option>
                <option>Frontend Developer</option>
                <option>Backend Developer</option>
              </select>
            </div>
            
            <div>
              <label className="block text-gray-400 text-sm mb-2">Experience Level</label>
              <select 
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full bg-gray-700 rounded-lg p-3 border border-gray-600 focus:border-primary-500 outline-none"
              >
                <option>Entry-Level</option>
                <option>Mid-Level</option>
                <option>Senior</option>
                <option>Staff/Principal</option>
              </select>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded" defaultChecked />
              <span className="text-sm">Include behavioral questions</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded" defaultChecked />
              <span className="text-sm">Include technical questions</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded" />
              <span className="text-sm">Timed responses</span>
            </label>
          </div>

          <button 
            onClick={startInterview}
            className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <Play className="w-5 h-5" />
            Start Mock Interview
          </button>
        </div>

        <div className="bg-gray-800 rounded-xl p-6">
          <h3 className="font-semibold mb-3">How it works</h3>
          <ol className="space-y-2 text-gray-400">
            <li>1. Select your role and experience level</li>
            <li>2. Answer AI-generated questions tailored to your profile</li>
            <li>3. Get instant feedback on clarity, confidence, and structure</li>
            <li>4. Track your improvement over time</li>
          </ol>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">Mock Interview in Progress</h1>
          <p className="text-gray-400">{selectedRole} • {selectedLevel}</p>
        </div>
        <button 
          onClick={endInterview}
          className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg font-medium transition-colors"
        >
          End Interview
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Question Panel */}
        <div className="bg-gray-800 rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Volume2 className="w-5 h-5" />
            Current Question
          </h2>
          <div className="bg-gray-750 rounded-lg p-6 mb-6">
            <p className="text-lg">{currentQuestion}</p>
          </div>

          <div className="flex items-center justify-center gap-4 mb-6">
            <button
              onClick={toggleRecording}
              className={`w-16 h-16 rounded-full flex items-center justify-center transition-colors ${
                isRecording 
                  ? 'bg-red-600 hover:bg-red-700 animate-pulse' 
                  : 'bg-primary-600 hover:bg-primary-700'
              }`}
            >
              {isRecording ? <MicOff className="w-8 h-8" /> : <Mic className="w-8 h-8" />}
            </button>
          </div>

          <p className="text-center text-gray-400 text-sm">
            {isRecording ? 'Recording... Click to stop' : 'Click microphone to start answering'}
          </p>
        </div>

        {/* Live Feedback Panel */}
        <div className="bg-gray-800 rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-4">Live Feedback</h2>
          
          {isRecording ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Speaking Time</span>
                <span className="font-mono">00:45</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Filler Words</span>
                <span className="text-yellow-400">3 detected</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Pace</span>
                <span className="text-green-400">Good</span>
              </div>
              <div className="h-32 bg-gray-750 rounded-lg flex items-center justify-center">
                <div className="flex gap-1">
                  {[...Array(20)].map((_, i) => (
                    <div 
                      key={i}
                      className="w-2 bg-primary-500 rounded-full animate-pulse"
                      style={{ 
                        height: `${Math.random() * 60 + 20}px`,
                        animationDelay: `${i * 0.1}s`
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          ) : feedback ? (
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-gray-400">Clarity</span>
                  <span className="font-semibold">{feedback.clarity}%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500" style={{ width: `${feedback.clarity}%` }} />
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-gray-400">Confidence</span>
                  <span className="font-semibold">{feedback.confidence}%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500" style={{ width: `${feedback.confidence}%` }} />
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-gray-400">Structure</span>
                  <span className="font-semibold">{feedback.structure}%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-500" style={{ width: `${feedback.structure}%` }} />
                </div>
              </div>

              <div className="pt-4 border-t border-gray-700">
                <h4 className="font-medium mb-2">Suggestions</h4>
                <ul className="space-y-2">
                  {feedback.suggestions.map((suggestion, i) => (
                    <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                      <span className="text-primary-400 mt-1">•</span>
                      {suggestion}
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                onClick={() => setCurrentQuestion(mockQuestions[1])}
                className="w-full bg-primary-600 hover:bg-primary-700 py-3 rounded-lg font-medium transition-colors mt-4"
              >
                Next Question
              </button>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center text-gray-400">
              Start speaking to see live feedback
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MockInterview;
