import React, { useState } from 'react';
import { Code, Play, Copy, Check, Terminal, FileCode } from 'lucide-react';

function CodingCopilot() {
  const [problem, setProblem] = useState('');
  const [language, setLanguage] = useState('python');
  const [solution, setSolution] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  const [difficulty, setDifficulty] = useState('medium');

  const sampleProblems = [
    'Two Sum - Find two numbers that add up to target',
    'Reverse a linked list',
    'Implement binary search',
    'Merge k sorted lists',
    'Longest substring without repeating characters'
  ];

  const sampleSolutions = {
    python: `def two_sum(nums, target):
    """
    Time: O(n), Space: O(n)
    """
    seen = {}
    
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    
    return []

# Example usage:
# nums = [2, 7, 11, 15]
# target = 9
# print(two_sum(nums, target))  # [0, 1]`,
    
    javascript: `function twoSum(nums, target) {
    // Time: O(n), Space: O(n)
    const seen = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (seen.has(complement)) {
            return [seen.get(complement), i];
        }
        seen.set(nums[i], i);
    }
    
    return [];
}

// Example usage:
// const nums = [2, 7, 11, 15];
// const target = 9;
// console.log(twoSum(nums, target)); // [0, 1]`,
    
    java: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Time: O(n), Space: O(n)
        Map<Integer, Integer> seen = new HashMap<>();
        
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (seen.containsKey(complement)) {
                return new int[]{seen.get(complement), i};
            }
            seen.put(nums[i], i);
        }
        
        return new int[]{};
    }
}`
  };

  const generateSolution = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setSolution(sampleSolutions[language] || sampleSolutions.python);
      setIsGenerating(false);
    }, 2000);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(solution);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Coding Copilot</h1>
        <p className="text-gray-400">AI-powered assistance for technical coding interviews</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Problem Input */}
        <div className="bg-gray-800 rounded-xl p-6 lg:col-span-1">
          <h2 className="text-lg font-semibold mb-4">Problem Details</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-gray-400 text-sm mb-2">Language</label>
              <select 
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full bg-gray-700 rounded-lg p-3 border border-gray-600 focus:border-primary-500 outline-none"
              >
                <option value="python">Python</option>
                <option value="javascript">JavaScript</option>
                <option value="java">Java</option>
                <option value="cpp">C++</option>
                <option value="go">Go</option>
                <option value="rust">Rust</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-400 text-sm mb-2">Difficulty</label>
              <div className="flex gap-2">
                {['easy', 'medium', 'hard'].map((diff) => (
                  <button
                    key={diff}
                    onClick={() => setDifficulty(diff)}
                    className={`flex-1 py-2 rounded-lg font-medium transition-colors capitalize ${
                      difficulty === diff 
                        ? diff === 'easy' ? 'bg-green-600' 
                          : diff === 'medium' ? 'bg-yellow-600' 
                          : 'bg-red-600'
                        : 'bg-gray-700 hover:bg-gray-600'
                    }`}
                  >
                    {diff}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-gray-400 text-sm mb-2">Problem Description</label>
              <textarea
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
                placeholder="Paste the coding problem here..."
                rows={6}
                className="w-full bg-gray-700 rounded-lg p-3 border border-gray-600 focus:border-primary-500 outline-none resize-none"
              />
            </div>

            <div>
              <label className="block text-gray-400 text-sm mb-2">Quick Select</label>
              <div className="space-y-2">
                {sampleProblems.map((p, i) => (
                  <button
                    key={i}
                    onClick={() => setProblem(p)}
                    className="w-full text-left text-sm bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded-lg transition-colors truncate"
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={generateSolution}
              disabled={!problem || isGenerating}
              className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-gray-700 disabled:cursor-not-allowed py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
            >
              {isGenerating ? <Terminal className="w-5 h-5 animate-pulse" /> : <Code className="w-5 h-5" />}
              {isGenerating ? 'Generating...' : 'Generate Solution'}
            </button>
          </div>
        </div>

        {/* Solution Output */}
        <div className="bg-gray-800 rounded-xl p-6 lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <FileCode className="w-5 h-5" />
              Solution
            </h2>
            {solution && (
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-2 px-3 py-1.5 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors text-sm"
              >
                {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                {copied ? 'Copied!' : 'Copy'}
              </button>
            )}
          </div>

          {solution ? (
            <div className="bg-gray-900 rounded-lg p-4 overflow-auto max-h-[500px]">
              <pre className="text-sm font-mono text-gray-300 whitespace-pre-wrap">
                {solution}
              </pre>
            </div>
          ) : (
            <div className="bg-gray-900 rounded-lg p-8 h-[400px] flex items-center justify-center text-gray-500">
              <div className="text-center">
                <Code className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p>Enter a problem and click generate to see the solution</p>
              </div>
            </div>
          )}

          {solution && (
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-750 rounded-lg p-4">
                <h4 className="text-sm text-gray-400 mb-1">Time Complexity</h4>
                <p className="font-mono text-green-400">O(n)</p>
              </div>
              <div className="bg-gray-750 rounded-lg p-4">
                <h4 className="text-sm text-gray-400 mb-1">Space Complexity</h4>
                <p className="font-mono text-blue-400">O(n)</p>
              </div>
              <div className="bg-gray-750 rounded-lg p-4">
                <h4 className="text-sm text-gray-400 mb-1">Pattern</h4>
                <p className="text-purple-400">Hash Map</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* System Design Section */}
      <div className="mt-6 bg-gray-800 rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-4">System Design Support</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="bg-gray-700 hover:bg-gray-600 p-4 rounded-lg transition-colors text-left">
            <h3 className="font-medium mb-1">🏗️ Architecture Patterns</h3>
            <p className="text-sm text-gray-400">Microservices, Event-driven, etc.</p>
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 p-4 rounded-lg transition-colors text-left">
            <h3 className="font-medium mb-1">📊 Database Design</h3>
            <p className="text-sm text-gray-400">SQL vs NoSQL, sharding, indexing</p>
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 p-4 rounded-lg transition-colors text-left">
            <h3 className="font-medium mb-1">⚡ Scalability</h3>
            <p className="text-sm text-gray-400">Load balancing, caching, CDN</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CodingCopilot;
