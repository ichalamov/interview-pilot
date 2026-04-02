import React from 'react';
import { Link } from 'react-router-dom';
import { Mic, Brain, Code, FileText, BarChart3, Shield, ArrowRight, Zap, TrendingUp, Clock, Award } from 'lucide-react';
import { Card, GradientButton } from '../components';

function Dashboard() {
  const features = [
    {
      title: 'Mock Interview',
      description: 'AI-powered mock interviews with instant feedback',
      icon: Mic,
      path: '/mock-interview',
      color: 'from-cyan-500 to-cyan-400',
      stats: '24 completed'
    },
    {
      title: 'Real-Time Copilot',
      description: 'Live assistance during actual interviews',
      icon: Brain,
      path: '/realtime',
      color: 'from-purple-500 to-purple-400',
      stats: 'Ready'
    },
    {
      title: 'Stealth Mode',
      description: 'Discreet overlay for screen-sharing',
      icon: Shield,
      path: '/stealth',
      color: 'from-green-500 to-green-400',
      stats: 'Hidden'
    },
    {
      title: 'Coding Copilot',
      description: 'Technical interview support with code gen',
      icon: Code,
      path: '/coding',
      color: 'from-orange-500 to-orange-400',
      stats: 'All languages'
    },
    {
      title: 'Resume Optimizer',
      description: 'ATS-friendly resume building',
      icon: FileText,
      path: '/resume',
      color: 'from-pink-500 to-pink-400',
      stats: 'Score: 92'
    },
    {
      title: 'Analytics',
      description: 'Track improvement over time',
      icon: BarChart3,
      path: '/analytics',
      color: 'from-cyan-500 to-blue-400',
      stats: 'View trends'
    }
  ];

  const recentActivity = [
    { type: 'Mock Interview', role: 'Software Engineer', date: '2 hours ago', score: 85 },
    { type: 'Resume Review', role: 'Senior Developer', date: 'Yesterday', score: 92 },
    { type: 'Coding Challenge', role: 'Data Structures', date: '2 days ago', score: 78 },
  ];

  return (
    <div className="p-8">
      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="relative overflow-hidden">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-sm text-gray-500 mb-1">Interviews Completed</p>
              <p className="text-3xl font-bold text-white">24</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 flex items-center justify-center border border-cyan-800/30">
              <Zap className="w-6 h-6 text-cyan-400" />
            </div>
          </div>
          <div className="flex items-center text-sm text-green-400">
            <TrendingUp className="w-4 h-4 mr-1" />
            <span>+3 this week</span>
          </div>
        </Card>

        <Card className="relative overflow-hidden">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-sm text-gray-500 mb-1">Average Score</p>
              <p className="text-3xl font-bold text-green-400">87%</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-900/30 to-green-800/20 flex items-center justify-center border border-green-800/30">
              <Award className="w-6 h-6 text-green-400" />
            </div>
          </div>
          <div className="flex items-center text-sm text-green-400">
            <TrendingUp className="w-4 h-4 mr-1" />
            <span>+5% from last month</span>
          </div>
        </Card>

        <Card className="relative overflow-hidden">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-sm text-gray-500 mb-1">Hours Practiced</p>
              <p className="text-3xl font-bold text-white">18.5</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-900/30 to-purple-800/20 flex items-center justify-center border border-purple-800/30">
              <Clock className="w-6 h-6 text-purple-400" />
            </div>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <span>2.3 hrs this week</span>
          </div>
        </Card>

        <Card className="relative overflow-hidden">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-sm text-gray-500 mb-1">Resume Score</p>
              <p className="text-3xl font-bold text-cyan-400">92/100</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 flex items-center justify-center border border-cyan-800/30">
              <FileText className="w-6 h-6 text-cyan-400" />
            </div>
          </div>
          <div className="flex items-center text-sm text-cyan-400">
            <TrendingUp className="w-4 h-4 mr-1" />
            <span>Optimized for ATS</span>
          </div>
        </Card>
      </div>

      {/* Features Grid */}
      <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
        <Zap className="w-5 h-5 text-cyan-400" />
        Features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {features.map((feature) => (
          <Link
            key={feature.path}
            to={feature.path}
            className="group"
          >
            <Card className="h-full hover:shadow-glow" gradient={true}>
              <div className="flex items-start justify-between mb-4">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center glow-sm`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <div className="px-3 py-1 rounded-full bg-cyan-900/20 border border-cyan-800/30">
                  <span className="text-xs font-medium text-cyan-400">{feature.stats}</span>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm mb-4">{feature.description}</p>
              
              <div className="flex items-center text-cyan-400 text-sm font-medium group-hover:gap-3 gap-2 transition-all">
                Get Started 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Card>
          </Link>
        ))}
      </div>

      {/* Recent Activity */}
      <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
        <Clock className="w-5 h-5 text-cyan-400" />
        Recent Activity
      </h2>
      <Card gradient={true} className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-cyan-900/20">
                <th className="text-left py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Type</th>
                <th className="text-left py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Role/Topic</th>
                <th className="text-left py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Date</th>
                <th className="text-left py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Score</th>
                <th className="text-left py-4 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-cyan-900/10">
              {recentActivity.map((activity, index) => (
                <tr key={index} className="group hover:bg-cyan-900/5 transition-colors">
                  <td className="py-4 px-4">
                    <span className="text-sm font-medium text-white">{activity.type}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm text-gray-400">{activity.role}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm text-gray-500">{activity.date}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      activity.score >= 85 ? 'bg-green-900/30 text-green-400 border border-green-800/30' :
                      activity.score >= 70 ? 'bg-yellow-900/30 text-yellow-400 border border-yellow-800/30' :
                      'bg-red-900/30 text-red-400 border border-red-800/30'
                    }`}>
                      {activity.score}%
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      View Details →
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Quick Start CTA */}
      <Card className="mt-8 bg-gradient-to-r from-cyan-900/20 to-purple-900/20 border-cyan-800/30" gradient={false}>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Ready to start practicing?</h3>
            <p className="text-gray-500">Jump into a mock interview and get instant AI feedback</p>
          </div>
          <GradientButton size="lg" icon={Mic}>
            Start Mock Interview
          </GradientButton>
        </div>
      </Card>
    </div>
  );
}

export default Dashboard;
