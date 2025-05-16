'use client';

import { useState } from 'react';
import { FaUsers, FaChalkboardTeacher, FaCode } from 'react-icons/fa';

const positions = [
  {
    title: 'Senior Web Developer',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Remote',
    icon: <FaCode className="w-8 h-8" />,
    description: 'Join our engineering team to build and maintain our learning platform.',
    requirements: [
      '5+ years of experience in web development',
      'Strong knowledge of React, Node.js, and TypeScript',
      'Experience with cloud platforms (AWS/Azure)',
      'Excellent problem-solving skills',
    ],
  },
  {
    title: 'Course Instructor',
    department: 'Education',
    type: 'Part-time/Full-time',
    location: 'Remote',
    icon: <FaChalkboardTeacher className="w-8 h-8" />,
    description: 'Share your expertise and help shape the next generation of tech professionals.',
    requirements: [
      'Industry experience in relevant field',
      'Strong communication and teaching skills',
      'Experience with online education platforms',
      'Passion for mentoring and education',
    ],
  },
  {
    title: 'Student Success Manager',
    department: 'Student Services',
    type: 'Full-time',
    location: 'Remote',
    icon: <FaUsers className="w-8 h-8" />,
    description: 'Help students achieve their learning goals and career aspirations.',
    requirements: [
      '3+ years in student support or customer success',
      'Strong interpersonal and communication skills',
      'Experience with CRM systems',
      'Ability to work in a fast-paced environment',
    ],
  },
];

export default function WorkWithUsPage() {
  const [selectedPosition, setSelectedPosition] = useState<number | null>(null);

  return (
    <main className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Work With Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our team of passionate educators and professionals dedicated to transforming education.
          </p>
        </div>

        {/* Why Work With Us */}
        <div className="bg-blue-600 rounded-2xl p-8 text-white mb-16">
          <h2 className="text-2xl font-bold mb-6">Why Work With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Flexible Work Environment</h3>
              <p>Work remotely and enjoy a healthy work-life balance with flexible hours.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Professional Growth</h3>
              <p>Continuous learning opportunities and career development support.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Impact Education</h3>
              <p>Make a difference in students&apos; lives and contribute to educational innovation.</p>
            </div>
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Open Positions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {positions.map((position, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg p-6 cursor-pointer transition-all ${
                  selectedPosition === index ? 'ring-2 ring-blue-600' : ''
                }`}
                onClick={() => setSelectedPosition(index)}
              >
                <div className="text-blue-600 mb-4">{position.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {position.title}
                </h3>
                <div className="space-y-2 mb-4">
                  <p className="text-gray-600">{position.department}</p>
                  <p className="text-gray-600">{position.type} • {position.location}</p>
                </div>
                <p className="text-gray-600 mb-4">{position.description}</p>
                {selectedPosition === index && (
                  <div className="mt-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex}>{req}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <button
                  className="mt-4 w-full bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Handle application process
                  }}
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Application Process */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Application Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Apply</h3>
              <p className="text-gray-600">Submit your application and resume</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Interview</h3>
              <p className="text-gray-600">Initial screening and team interviews</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Assessment</h3>
              <p className="text-gray-600">Skills assessment and team fit evaluation</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                4
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Offer</h3>
              <p className="text-gray-600">Job offer and onboarding process</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 