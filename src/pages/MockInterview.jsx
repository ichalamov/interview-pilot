import React, { useState, useRef } from 'react';
import { Mic, MicOff, Send, StopCircle, Play, Volume2, Settings, CheckCircle, Clock, Target } from 'lucide-react';
import { Card, GradientButton, StepAccordion } from '../components';

function MockInterview() {
  const [isRecording, setIsRecording] = useState(false);
  const [interviewStarted, setInterviewStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [selectedRole, setSelectedRole] = useState('Software Engineer');
  const [selectedLevel, setSelectedLevel] = useState('Mid-Level');
  const [currentStep, setCurrentStep] = useState(0);

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

  const steps = [
    {
      title: 'Choose Your Role',
      description: 'Select the position you\'re interviewing for',
      content: (
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block text-sm text-gray-400 mb-2">Role</label>
            <select 
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="input-dark w-full"
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
            <label className="block text-sm text-gray-400 mb-2">Experience Level</label>
            <select 
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="input-dark w-full"
            >
              <option>Entry-Level</option>
              <option>Mid-Level</option>
              <option>Senior</option>
              <option>Staff/Principal</option>
            </select>
          </div>
        </div>
      )
    },
    {
      title: 'Configure Interview',
      description: 'Customize question types and difficulty',
      content: (
        <div className="space-y-3 mt-4">
          <label className="flex items-center gap-3 p-3 rounded-lg bg-navy-800/50 border border-cyan-900/20 cursor-pointer hover:border-cyan-800/40 transition-colors">
            <input type="checkbox" className="w-4 h-4 rounded accent-cyan-500" defaultChecked />
            <div>
              <span className="text-sm font-medium text-white">Behavioral Questions</span>
              <p className="text-xs text-gray-500">Teamwork, leadership, conflict resolution</p>
            </div>
          </label>
          <label className="flex items-center gap-3 p-3 rounded-lg bg-navy-800/50 border border-cyan-900/20 cursor-pointer hover:border-cyan-800/40 transition-colors">
            <input type="checkbox" className="w-4 h-4 rounded accent-cyan-500" defaultChecked />
            <div>
              <span className="text-sm font-medium text-white">Technical Questions</span>
              <p className="text-xs text-gray-500">System design, coding, problem-solving</p>
            </div>
          </label>
          <label className="flex items-center gap-3 p-3 rounded-lg bg-navy-800/50 border border-cyan-900/20 cursor-pointer hover:border-cyan-800/40 transition-colors">
            <input type="checkbox" className="w-4 h-4 rounded accent-cyan-500" />
            <div>
              <span className="text-sm font-medium text-white">Case Questions</span>
              <p className="text-xs text-gray-500">Business scenarios, product thinking</p>
            </div>
          </label>
        </div>
      )
    },
    {
      title: 'Start Interview',
      description: 'Begin your AI-powered mock interview',
      content: (
        <div className="mt-4 text-center py-6">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center glow">
            <Mic className="w-10 h-10 text-navy-900" />
          </div>
          <p className="text-gray-400 mb-4">You'll answer 5 questions with real-time AI feedback</p>
          <GradientButton onClick={startInterview} size="lg" icon={Play}>
            Begin Interview
          </GradientButton>
        </div>
      )
    }
  ];

  const startInterview = () => {
    setInterviewStarted(true);
    setCurrentQuestion(mockQuestions[0]);
    setCurrentStep(3);
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

  if (feedback) {
    return (
      <div className="p-8 max-w-5xl mx-auto">
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <CheckCircle className="w-6 h-6 text-green-400" />
            <h1 className="text-2xl font-bold text-white">Interview Complete!</h1>
          </div>
          <p className="text-gray-500">Here's your detailed feedback</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-2">Clarity</p>
              <p className="text-4xl font-bold text-cyan-400">{feedback.clarity}%</p>
            </div>
          </Card>
          <Card>
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-2">Confidence</p>
              <p className="text-4xl font-bold text-purple-400">{feedback.confidence}%</p>
            </div>
          </Card>
          <Card>
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-2">Structure</p>
              <p className="text-4xl font-bold text-green-400">{feedback.structure}%</p>
            </div>
          </Card>
        </div>

        <Card className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-4">Suggestions for Improvement</h3>
          <ul className="space-y-3">
            {feedback.suggestions.map((suggestion, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-cyan-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs text-cyan-400">{index + 1}</span>
                </div>
                <span className="text-gray-300">{suggestion}</span>
              </li>
            ))}
          </ul>
        </Card>

        <div className="flex gap-4">
          <GradientButton onClick={() => setFeedback(null)} icon={Play}>
            Try Again
          </GradientButton>
          <GradientButton variant="secondary" onClick={endInterview}>
            Back to Dashboard
          </GradientButton>
        </div>
      </div>
    );
  }

  if (interviewStarted && currentQuestion) {
    return (
      <div className="p-8 max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-white">Question 1 of 5</h1>
            <p className="text-gray-500">Take your time to think and respond</p>
          </div>
          <div className="flex items-center gap-3">
            <div className={`px-4 py-2 rounded-full text-sm font-medium ${
              isRecording ? 'bg-red-900/30 text-red-400 border border-red-800/30' : 'bg-gray-800 text-gray-400'
            }`}>
              {isRecording ? '● Recording' : '○ Paused'}
            </div>
          </div>
        </div>

        <Card className="mb-6 bg-gradient-to-br from-cyan-900/10 to-purple-900/10 border-cyan-800/30">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
              <Mic className="w-6 h-6 text-navy-900" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">{currentQuestion}</h2>
              <p className="text-gray-500 text-sm">Take 30 seconds to prepare, then speak your answer</p>
            </div>
          </div>
        </Card>

        <div className="flex items-center justify-center gap-4 py-8">
          <button
            onClick={toggleRecording}
            className={`w-20 h-20 rounded-full flex items-center justify-center transition-all ${
              isRecording 
                ? 'bg-red-500 hover:bg-red-600 glow' 
                : 'bg-gradient-primary hover:shadow-glow'
            }`}
          >
            {isRecording ? (
              <StopCircle className="w-10 h-10 text-white" />
            ) : (
              <Mic className="w-10 h-10 text-navy-900" />
            )}
          </button>
        </div>

        <div className="flex justify-between">
          <GradientButton variant="ghost">
            Skip Question
          </GradientButton>
          <GradientButton onClick={endInterview}>
            Finish Interview
          </GradientButton>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-2">Mock Interview</h1>
        <p className="text-gray-500">Practice with AI-powered interview simulation</p>
      </div>

      <StepAccordion 
        steps={steps}
        currentStep={currentStep}
        onStepChange={setCurrentStep}
      />
    </div>
  );
}

export default MockInterview;
