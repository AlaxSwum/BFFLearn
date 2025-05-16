'use client';

import { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaSearch } from 'react-icons/fa';

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export default function FAQsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openQuestions, setOpenQuestions] = useState<string[]>([]);

  // Sample FAQ data (replace with actual data from your backend)
  const faqs: FAQ[] = [
    {
      id: '1',
      question: 'What courses do you offer?',
      answer: 'We offer a wide range of courses including Web Development, Data Science, Mobile App Development, Cloud Computing, and Cybersecurity. Each course is designed to provide practical skills and industry-relevant knowledge.',
      category: 'General'
    },
    {
      id: '2',
      question: 'How long are the programs?',
      answer: 'Program duration varies depending on the course and level. Most of our programs range from 8 to 16 weeks for basic courses, and up to 24 weeks for advanced programs. We also offer self-paced learning options.',
      category: 'Programs'
    },
    {
      id: '3',
      question: 'What are the payment options?',
      answer: 'We offer flexible payment options including one-time payment, monthly installments, and income share agreements. We also provide scholarships for eligible students.',
      category: 'Payment'
    },
    {
      id: '4',
      question: 'Do you provide job placement assistance?',
      answer: 'Yes, we provide comprehensive career support including resume building, interview preparation, and job placement assistance. We have partnerships with leading companies and maintain a strong alumni network.',
      category: 'Career'
    },
    {
      id: '5',
      question: 'What is the learning format?',
      answer: 'We offer both online and hybrid learning formats. Online courses include live sessions, recorded lectures, and interactive assignments. Hybrid programs combine online learning with in-person workshops.',
      category: 'Programs'
    },
  ];

  const categories = ['all', 'General', 'Programs', 'Payment', 'Career', 'Technical'];

  const toggleQuestion = (id: string) => {
    setOpenQuestions(prev =>
      prev.includes(id) ? prev.filter(q => q !== id) : [...prev, id]
    );
  };

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="container mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions</h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Find answers to common questions about our programs, payment options, and more.
      </p>

      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search FAQs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
        </div>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category === 'all' ? 'All Categories' : category}
            </option>
          ))}
        </select>
      </div>

      {/* FAQs Accordion */}
      <div className="max-w-3xl mx-auto space-y-4">
        {filteredFAQs.map(faq => (
          <div
            key={faq.id}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleQuestion(faq.id)}
              className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50"
            >
              <span className="font-medium">{faq.question}</span>
              {openQuestions.includes(faq.id) ? (
                <FaChevronUp className="text-gray-500" />
              ) : (
                <FaChevronDown className="text-gray-500" />
              )}
            </button>
            {openQuestions.includes(faq.id) && (
              <div className="p-4 bg-gray-50 border-t border-gray-200">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredFAQs.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600">No FAQs found matching your criteria.</p>
        </div>
      )}

      {/* Contact Section */}
      <div className="mt-12 text-center">
        <p className="text-gray-600 mb-4">
          Can&apos;t find what you&apos;re looking for?
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Contact Us
        </a>
      </div>
    </main>
  );
} 