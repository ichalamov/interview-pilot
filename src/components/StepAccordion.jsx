import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

function StepAccordion({ steps, currentStep, onStepChange }) {
  const [expanded, setExpanded] = useState(null);

  const toggleExpanded = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {steps.map((step, index) => {
        const isCompleted = index < currentStep;
        const isCurrent = index === currentStep;
        const isExpanded = expanded === index;

        return (
          <div 
            key={index}
            className={`step-connector rounded-xl border transition-all duration-200 ${
              isCurrent 
                ? 'bg-cyan-900/10 border-cyan-800/40' 
                : isCompleted 
                  ? 'bg-navy-800/50 border-cyan-900/20' 
                  : 'bg-navy-800/30 border-cyan-900/10'
            }`}
          >
            <button
              onClick={() => toggleExpanded(index)}
              className="w-full flex items-center gap-4 p-4"
            >
              {/* Step Number */}
              <div className={`relative flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm transition-all ${
                isCompleted 
                  ? 'bg-gradient-primary text-navy-900' 
                  : isCurrent 
                    ? 'bg-cyan-800/30 text-cyan-400 border-2 border-cyan-700/50' 
                    : 'bg-navy-750 text-gray-500 border-2 border-navy-700'
              }`}>
                {isCompleted ? '✓' : index + 1}
              </div>

              {/* Content */}
              <div className="flex-1 text-left">
                <h3 className={`font-medium ${
                  isCurrent ? 'text-cyan-400' : isCompleted ? 'text-white' : 'text-gray-500'
                }`}>
                  {step.title}
                </h3>
                {step.description && (
                  <p className="text-sm text-gray-500 mt-0.5">{step.description}</p>
                )}
              </div>

              {/* Expand Icon */}
              <ChevronDown 
                className={`w-5 h-5 text-gray-500 transition-transform ${
                  isExpanded ? 'rotate-180' : ''
                }`} 
              />
            </button>

            {/* Expandable Content */}
            {step.content && (
              <div className={`accordion-content ${isExpanded ? 'open' : ''}`}>
                <div className="px-4 pb-4 pl-16">
                  {step.content}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default StepAccordion;
