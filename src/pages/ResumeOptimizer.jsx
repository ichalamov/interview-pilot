import React, { useState } from 'react';
import { FileText, Upload, Download, Check, AlertCircle, Target, Eye } from 'lucide-react';

function ResumeOptimizer() {
  const [resumeText, setResumeText] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [analysis, setAnalysis] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const sampleResume = `John Doe
Software Engineer | San Francisco, CA
john.doe@email.com | (555) 123-4567 | linkedin.com/in/johndoe

SUMMARY
Experienced software engineer with 5+ years in full-stack development.

EXPERIENCE
Senior Software Engineer | Tech Corp | 2022-Present
- Developed web applications
- Worked on team projects
- Used various technologies

Software Engineer | Startup Inc | 2020-2022
- Built features for products
- Collaborated with designers

EDUCATION
BS Computer Science | University | 2020`;

  const sampleAnalysis = {
    atsScore: 78,
    overallScore: 82,
    issues: [
      { type: 'warning', message: 'Missing quantifiable achievements' },
      { type: 'error', message: 'No keywords matching job description' },
      { type: 'success', message: 'Good formatting and structure' },
      { type: 'warning', message: 'Summary section is too generic' }
    ],
    keywords: {
      found: ['software', 'engineer', 'development', 'full-stack'],
      missing: ['AWS', 'Docker', 'Kubernetes', 'Agile', 'CI/CD']
    },
    suggestions: [
      'Add metrics to bullet points (e.g., "improved performance by 40%")',
      'Include specific technologies mentioned in the job description',
      'Expand the summary to highlight key achievements',
      'Add a skills section with relevant technologies'
    ]
  };

  const analyzeResume = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setAnalysis(sampleAnalysis);
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Resume Optimizer</h1>
        <p className="text-gray-400">ATS-friendly resume building and optimization</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Resume Input */}
        <div className="bg-gray-800 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Your Resume</h2>
            <button
              onClick={() => setResumeText(sampleResume)}
              className="text-sm text-primary-400 hover:text-primary-300"
            >
              Use Sample
            </button>
          </div>
          
          <textarea
            value={resumeText}
            onChange={(e) => setResumeText(e.target.value)}
            placeholder="Paste your resume text here or upload a file..."
            rows={12}
            className="w-full bg-gray-700 rounded-lg p-4 border border-gray-600 focus:border-primary-500 outline-none resize-none font-mono text-sm"
          />

          <div className="flex gap-3 mt-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
              <Upload className="w-4 h-4" />
              Upload File
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors">
              <Target className="w-4 h-4" />
              Analyze Resume
            </button>
          </div>
        </div>

        {/* Job Description */}
        <div className="bg-gray-800 rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-4">Job Description (Optional)</h2>
          <p className="text-sm text-gray-400 mb-3">
            Paste the job description to get tailored keyword suggestions
          </p>
          
          <textarea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            placeholder="Paste job description here..."
            rows={12}
            className="w-full bg-gray-700 rounded-lg p-4 border border-gray-600 focus:border-primary-500 outline-none resize-none font-mono text-sm"
          />
        </div>
      </div>

      {/* Analysis Results */}
      {analysis && (
        <div className="space-y-6">
          {/* Score Overview */}
          <div className="bg-gray-800 rounded-xl p-6">
            <h2 className="text-lg font-semibold mb-4">Analysis Results</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-sm text-gray-400 mb-2">ATS Score</div>
                <div className="text-4xl font-bold text-green-400">{analysis.atsScore}</div>
                <div className="text-sm text-gray-500 mt-1">out of 100</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-400 mb-2">Overall Score</div>
                <div className="text-4xl font-bold text-blue-400">{analysis.overallScore}</div>
                <div className="text-sm text-gray-500 mt-1">out of 100</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-400 mb-2">Keywords Match</div>
                <div className="text-4xl font-bold text-purple-400">
                  {analysis.keywords.found.length}/{analysis.keywords.found.length + analysis.keywords.missing.length}
                </div>
                <div className="text-sm text-gray-500 mt-1">keywords found</div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">ATS Optimization</span>
                <span className="text-sm font-medium">{analysis.atsScore}%</span>
              </div>
              <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-green-500 to-green-400 transition-all"
                  style={{ width: `${analysis.atsScore}%` }}
                />
              </div>
            </div>
          </div>

          {/* Issues Found */}
          <div className="bg-gray-800 rounded-xl p-6">
            <h2 className="text-lg font-semibold mb-4">Issues Found</h2>
            <div className="space-y-3">
              {analysis.issues.map((issue, i) => (
                <div 
                  key={i}
                  className={`flex items-start gap-3 p-3 rounded-lg ${
                    issue.type === 'error' ? 'bg-red-900/30 border border-red-700' :
                    issue.type === 'warning' ? 'bg-yellow-900/30 border border-yellow-700' :
                    'bg-green-900/30 border border-green-700'
                  }`}
                >
                  {issue.type === 'error' && <AlertCircle className="w-5 h-5 text-red-400 mt-0.5" />}
                  {issue.type === 'warning' && <AlertCircle className="w-5 h-5 text-yellow-400 mt-0.5" />}
                  {issue.type === 'success' && <Check className="w-5 h-5 text-green-400 mt-0.5" />}
                  <span className="text-sm">{issue.message}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Keyword Analysis */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="font-semibold mb-3">Keywords Found</h3>
              <div className="flex flex-wrap gap-2">
                {analysis.keywords.found.map((kw, i) => (
                  <span key={i} className="px-3 py-1 bg-green-900/50 text-green-400 rounded-full text-sm">
                    {kw}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="font-semibold mb-3">Missing Keywords</h3>
              <div className="flex flex-wrap gap-2">
                {analysis.keywords.missing.map((kw, i) => (
                  <span key={i} className="px-3 py-1 bg-red-900/50 text-red-400 rounded-full text-sm">
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Suggestions */}
          <div className="bg-gray-800 rounded-xl p-6">
            <h2 className="text-lg font-semibold mb-4">Suggestions</h2>
            <ul className="space-y-2">
              {analysis.suggestions.map((suggestion, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-300">
                  <span className="text-primary-400 mt-1">•</span>
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 rounded-lg font-medium transition-colors">
              <Download className="w-5 h-5" />
              Download Optimized Resume
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-medium transition-colors">
              <Eye className="w-5 h-5" />
              View Preview
            </button>
          </div>
        </div>
      )}

      {/* Features Section */}
      {!analysis && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 rounded-xl p-6 text-center">
            <FileText className="w-12 h-12 text-primary-400 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">ATS Optimization</h3>
            <p className="text-sm text-gray-400">Get scores from major ATS systems</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 text-center">
            <Target className="w-12 h-12 text-green-400 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Keyword Analysis</h3>
            <p className="text-sm text-gray-400">Match job descriptions perfectly</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 text-center">
            <Eye className="w-12 h-12 text-purple-400 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Formatting Check</h3>
            <p className="text-sm text-gray-400">Ensure professional presentation</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ResumeOptimizer;
