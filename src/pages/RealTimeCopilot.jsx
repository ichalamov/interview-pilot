import React, { useState } from 'react';
import { Mic, MicOff, Copy, RefreshCw, Settings, Zap, Brain, Clock, Check } from 'lucide-react';
import { Card, GradientButton } from '../components';

function RealTimeCopilot() {
  const [isListening, setIsListening] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [mode, setMode] = useState('behavioral');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

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

  const copyToClipboard = () => {
    navigator.clipboard.writeText(aiResponse);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white mb-2">Real-Time Copilot</h1>
            <p className="text-gray-500">Live interview assistance with AI-powered responses</p>
          </div>
          <div className={`flex items-center gap-2 px-4 py-2 rounded-full border ${
            isListening 
              ? 'bg-green-900/30 border-green-800/30 text-green-400' 
              : 'bg-navy-800 border-cyan-900/20 text-gray-400'
          }`}>
            <div className={`w-2 h-2 rounded-full ${isListening ? 'bg-green-400 animate-pulse' : 'bg-gray-500'}`} />
            <span className="text-sm font-medium">{isListening ? 'Listening' : 'Not Listening'}</span>
          </div>
        </div>
      </div>

      {/* Mode Selection */}
      <div className="flex gap-3 mb-6">
        <button
          onClick={() => setMode('behavioral')}
          className={`px-5 py-2.5 rounded-lg font-medium transition-all ${
            mode === 'behavioral' 
              ? 'bg-gradient-primary text-navy-900 glow-sm' 
              : 'bg-navy-800 text-gray-400 hover:text-white border border-cyan-900/20'
          }`}
        >
          <div className="flex items-center gap-2">
            <Brain className="w-4 h-4" />
            Behavioral
          </div>
        </button>
        <button
          onClick={() => setMode('technical')}
          className={`px-5 py-2.5 rounded-lg font-medium transition-all ${
            mode === 'technical' 
              ? 'bg-gradient-primary text-navy-900 glow-sm' 
              : 'bg-navy-800 text-gray-400 hover:text-white border border-cyan-900/20'
          }`}
        >
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4" />
            Technical
          </div>
        </button>
        <button
          onClick={() => setMode('coding')}
          className={`px-5 py-2.5 rounded-lg font-medium transition-all ${
            mode === 'coding' 
              ? 'bg-gradient-primary text-navy-900 glow-sm' 
              : 'bg-navy-800 text-gray-400 hover:text-white border border-cyan-900/20'
          }`}
        >
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4" />
            Coding
          </div>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Panel - Input */}
        <div className="space-y-6">
          <Card>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Live Transcription</h3>
              <button 
                onClick={() => setIsListening(!isListening)}
                className={`p-2 rounded-lg transition-colors ${
                  isListening 
                    ? 'bg-red-900/30 text-red-400 hover:bg-red-900/50' 
                    : 'bg-cyan-900/30 text-cyan-400 hover:bg-cyan-900/50'
                }`}
              >
                {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
              </button>
            </div>

            <div className="bg-navy-900/50 rounded-lg p-4 min-h-[200px] border border-cyan-900/20">
              {isListening ? (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-cyan-400 text-sm">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    Listening for questions...
                  </div>
                  <div className="text-gray-300">
                    <p className="animate-pulse">"Tell me about a time you had to deal with a difficult stakeholder..."</p>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <Mic className="w-12 h-12 text-gray-600 mx-auto mb-3" />
                  <p className="text-gray-500">Click the microphone to start listening</p>
                  <p className="text-gray-600 text-sm mt-1">AI will detect interview questions in real-time</p>
                </div>
              )}
            </div>

            <div className="mt-4">
              <label className="block text-sm text-gray-500 mb-2">Or type a question</label>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Paste interview question here..."
                  className="input-dark flex-1"
                  value={currentQuestion}
                  onChange={(e) => setCurrentQuestion(e.target.value)}
                />
                <GradientButton onClick={generateResponse} disabled={isGenerating}>
                  {isGenerating ? 'Generating...' : 'Generate'}
                </GradientButton>
              </div>
            </div>
          </Card>

          {/* Sample Questions */}
          <Card>
            <h3 className="text-lg font-semibold text-white mb-4">Sample Questions</h3>
            <div className="space-y-2">
              {sampleQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuestion(question)}
                  className="w-full text-left p-3 rounded-lg bg-navy-800/50 hover:bg-cyan-900/20 border border-cyan-900/10 hover:border-cyan-800/30 transition-all text-sm text-gray-400 hover:text-white"
                >
                  {question}
                </button>
              ))}
            </div>
          </Card>
        </div>

        {/* Right Panel - AI Response */}
        <div>
          <Card className="h-full min-h-[500px]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">AI Response</h3>
              <div className="flex gap-2">
                <button 
                  onClick={generateResponse}
                  className="p-2 text-gray-400 hover:text-white hover:bg-navy-750 rounded-lg transition-colors"
                  title="Regenerate"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
                <button 
                  onClick={copyToClipboard}
                  className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-navy-750 rounded-lg transition-colors"
                  title="Copy"
                >
                  {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {isGenerating ? (
              <div className="space-y-3">
                <div className="skeleton h-4 w-3/4" />
                <div className="skeleton h-4 w-full" />
                <div className="skeleton h-4 w-5/6" />
                <div className="skeleton h-4 w-full" />
                <div className="skeleton h-20 w-full mt-4" />
              </div>
            ) : aiResponse ? (
              <div className="prose prose-invert prose-sm max-w-none">
                <div className="whitespace-pre-wrap text-gray-300 leading-relaxed">
                  {aiResponse}
                </div>
              </div>
            ) : (
              <div className="text-center py-16">
                <Brain className="w-16 h-16 text-gray-700 mx-auto mb-4" />
                <p className="text-gray-500 mb-2">AI response will appear here</p>
                <p className="text-gray-600 text-sm">Start listening or type a question to generate</p>
              </div>
            )}

            {aiResponse && (
              <div className="mt-6 pt-4 border-t border-cyan-900/20">
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>~2 min read</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    <span>STAR method</span>
                  </div>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}

export default RealTimeCopilot;
