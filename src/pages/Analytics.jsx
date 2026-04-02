import React, { useState } from 'react';
import { TrendingUp, BarChart3, Target, Users, Calendar, Download } from 'lucide-react';

function Analytics() {
  const [timeRange, setTimeRange] = useState('30');

  const stats = [
    { label: 'Interviews Practiced', value: '24', change: '+3', icon: Users },
    { label: 'Average Score', value: '87%', change: '+5%', icon: TrendingUp },
    { label: 'Hours Spent', value: '18.5', change: '+2.5h', icon: Calendar },
    { label: 'Resume Score', value: '92/100', change: '+8', icon: Target },
  ];

  const scoreTrends = [
    { date: 'Jan', mock: 72, realtime: 68, coding: 65 },
    { date: 'Feb', mock: 78, realtime: 75, coding: 72 },
    { date: 'Mar', mock: 85, realtime: 82, coding: 80 },
    { date: 'Apr', mock: 87, realtime: 84, coding: 83 },
  ];

  const skillBreakdown = [
    { skill: 'Communication', score: 85 },
    { skill: 'Technical Knowledge', score: 78 },
    { skill: 'Problem Solving', score: 82 },
    { skill: 'Leadership', score: 75 },
    { skill: 'System Design', score: 70 },
  ];

  const recentSessions = [
    { type: 'Mock Interview', role: 'Software Engineer', date: 'Today', score: 88, duration: '25m' },
    { type: 'Real-Time', role: 'Product Manager', date: 'Yesterday', score: 82, duration: '30m' },
    { type: 'Coding', role: 'Data Structures', date: '2 days ago', score: 78, duration: '45m' },
    { type: 'Mock Interview', role: 'Senior Developer', date: '3 days ago', score: 90, duration: '35m' },
  ];

  const achievements = [
    { title: 'First Mock', description: 'Completed your first mock interview', unlocked: true },
    { title: 'Rising Star', description: 'Improved score by 10% in a week', unlocked: true },
    { title: 'Code Master', description: 'Solved 10 coding challenges', unlocked: true },
    { title: 'Consistent', description: 'Practice 5 days in a row', unlocked: false },
    { title: 'Expert', description: 'Achieve 90%+ on 5 interviews', unlocked: false },
  ];

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">Analytics</h1>
          <p className="text-gray-400">Track your interview preparation progress</p>
        </div>
        <div className="flex items-center gap-3">
          <select 
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="bg-gray-800 rounded-lg px-4 py-2 border border-gray-600 outline-none"
          >
            <option value="7">Last 7 days</option>
            <option value="30">Last 30 days</option>
            <option value="90">Last 90 days</option>
            <option value="all">All time</option>
          </select>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors">
            <Download className="w-4 h-4" />
            Export Report
          </button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-gray-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-3">
              <stat.icon className="w-5 h-5 text-primary-400" />
              <span className="text-green-400 text-sm font-medium">{stat.change}</span>
            </div>
            <div className="text-3xl font-bold mb-1">{stat.value}</div>
            <div className="text-sm text-gray-400">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Score Trends Chart */}
      <div className="bg-gray-800 rounded-xl p-6 mb-6">
        <h2 className="text-lg font-semibold mb-6">Score Trends</h2>
        
        <div className="h-64 flex items-end justify-between gap-4">
          {scoreTrends.map((trend, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-2">
              <div className="flex gap-1 h-48 items-end">
                <div 
                  className="w-4 bg-primary-500 rounded-t"
                  style={{ height: `${trend.mock}%` }}
                  title="Mock Interview"
                />
                <div 
                  className="w-4 bg-purple-500 rounded-t"
                  style={{ height: `${trend.realtime}%` }}
                  title="Real-Time"
                />
                <div 
                  className="w-4 bg-green-500 rounded-t"
                  style={{ height: `${trend.coding}%` }}
                  title="Coding"
                />
              </div>
              <div className="text-sm text-gray-400">{trend.date}</div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-6 mt-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-primary-500 rounded" />
            <span className="text-sm text-gray-400">Mock Interview</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-purple-500 rounded" />
            <span className="text-sm text-gray-400">Real-Time</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded" />
            <span className="text-sm text-gray-400">Coding</span>
          </div>
        </div>
      </div>

      {/* Skill Breakdown & Recent Sessions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Skill Breakdown */}
        <div className="bg-gray-800 rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-6">Skill Breakdown</h2>
          
          <div className="space-y-4">
            {skillBreakdown.map((skill, i) => (
              <div key={i}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm">{skill.skill}</span>
                  <span className="text-sm font-medium">{skill.score}%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary-500 to-primary-400 transition-all"
                    style={{ width: `${skill.score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Sessions */}
        <div className="bg-gray-800 rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-6">Recent Sessions</h2>
          
          <div className="space-y-3">
            {recentSessions.map((session, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-gray-750 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${
                    session.score >= 85 ? 'bg-green-500' :
                    session.score >= 70 ? 'bg-yellow-500' :
                    'bg-red-500'
                  }`} />
                  <div>
                    <div className="font-medium text-sm">{session.type}</div>
                    <div className="text-xs text-gray-400">{session.role}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-sm">{session.score}%</div>
                  <div className="text-xs text-gray-400">{session.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-gray-800 rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-6">Achievements</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((achievement, i) => (
            <div 
              key={i}
              className={`p-4 rounded-lg border-2 ${
                achievement.unlocked 
                  ? 'bg-gradient-to-br from-yellow-900/30 to-amber-900/30 border-yellow-600' 
                  : 'bg-gray-750 border-gray-700 opacity-60'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`text-2xl ${
                  achievement.unlocked ? '' : 'grayscale'
                }`}>
                  {achievement.unlocked ? '🏆' : '🔒'}
                </div>
                <div>
                  <h4 className="font-medium text-sm">{achievement.title}</h4>
                  <p className="text-xs text-gray-400 mt-1">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Insights */}
      <div className="mt-6 bg-gradient-to-r from-primary-900/50 to-purple-900/50 rounded-xl p-6 border border-primary-700">
        <h3 className="font-semibold mb-3 flex items-center gap-2">
          <BarChart3 className="w-5 h-5" />
          AI Insights
        </h3>
        <div className="space-y-2 text-sm text-gray-300">
          <p>• Your mock interview scores have improved by 15% over the last month</p>
          <p>• System Design is your weakest area - consider practicing more design questions</p>
          <p>• You tend to perform better in the morning sessions (9-11 AM)</p>
          <p>• Fillers decreased from 15 to 8 per interview on average</p>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
