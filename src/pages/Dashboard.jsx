import React from 'react';
import { Mic, Brain, Code, FileText, BarChart3, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function Dashboard() {
  const features = [
    {
      title: 'Mock Interview',
      description: 'Practice with AI-powered mock interviews and get instant feedback',
      icon: Mic,
      path: '/mock-interview',
      color: 'bg-blue-500'
    },
    {
      title: 'Real-Time Copilot',
      description: 'Get live assistance during actual interviews',
      icon: Brain,
      path: '/realtime',
      color: 'bg-purple-500'
    },
    {
      title: 'Stealth Mode',
      description: 'Discreet overlay for screen-sharing sessions',
      icon: Brain,
      path: '/stealth',
      color: 'bg-green-500'
    },
    {
      title: 'Coding Copilot',
      description: 'Technical interview support with code generation',
      icon: Code,
      path: '/coding',
      color: 'bg-orange-500'
    },
    {
      title: 'Resume Optimizer',
      description: 'ATS-friendly resume building and optimization',
      icon: FileText,
      path: '/resume',
      color: 'bg-pink-500'
    },
    {
      title: 'Analytics',
      description: 'Track your improvement over time',
      icon: BarChart3,
      path: '/analytics',
      color: 'bg-cyan-500'
    }
  ];

  const recentActivity = [
    { type: 'Mock Interview', role: 'Software Engineer', date: '2 hours ago', score: 85 },
    { type: 'Resume Review', role: 'Senior Developer', date: 'Yesterday', score: 92 },
    { type: 'Coding Challenge', role: 'Data Structures', date: '2 days ago', score: 78 },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome to InterviewPilot</h1>
        <p className="text-gray-400">Your AI-powered interview preparation assistant</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gray-800 rounded-xl p-6">
          <h3 className="text-gray-400 text-sm mb-2">Interviews Completed</h3>
          <p className="text-3xl font-bold">24</p>
        </div>
        <div className="bg-gray-800 rounded-xl p-6">
          <h3 className="text-gray-400 text-sm mb-2">Average Score</h3>
          <p className="text-3xl font-bold text-green-400">87%</p>
        </div>
        <div className="bg-gray-800 rounded-xl p-6">
          <h3 className="text-gray-400 text-sm mb-2">Hours Practiced</h3>
          <p className="text-3xl font-bold">18.5</p>
        </div>
        <div className="bg-gray-800 rounded-xl p-6">
          <h3 className="text-gray-400 text-sm mb-2">Resume Score</h3>
          <p className="text-3xl font-bold text-blue-400">92/100</p>
        </div>
      </div>

      {/* Features Grid */}
      <h2 className="text-xl font-semibold mb-4">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {features.map((feature) => (
          <Link
            key={feature.path}
            to={feature.path}
            className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-all hover:scale-105 cursor-pointer group"
          >
            <div className={`${feature.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
              <feature.icon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400 text-sm mb-4">{feature.description}</p>
            <div className="flex items-center text-primary-400 text-sm font-medium">
              Get Started <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>

      {/* Recent Activity */}
      <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
      <div className="bg-gray-800 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-750">
            <tr>
              <th className="text-left p-4 text-gray-400 font-medium">Type</th>
              <th className="text-left p-4 text-gray-400 font-medium">Role/Topic</th>
              <th className="text-left p-4 text-gray-400 font-medium">Date</th>
              <th className="text-left p-4 text-gray-400 font-medium">Score</th>
            </tr>
          </thead>
          <tbody>
            {recentActivity.map((activity, index) => (
              <tr key={index} className="border-t border-gray-700">
                <td className="p-4">{activity.type}</td>
                <td className="p-4">{activity.role}</td>
                <td className="p-4 text-gray-400">{activity.date}</td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    activity.score >= 85 ? 'bg-green-900 text-green-400' :
                    activity.score >= 70 ? 'bg-yellow-900 text-yellow-400' :
                    'bg-red-900 text-red-400'
                  }`}>
                    {activity.score}%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
