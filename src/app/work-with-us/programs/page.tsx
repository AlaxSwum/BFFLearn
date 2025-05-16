import { FaLaptop, FaCode, FaDatabase, FaMobile, FaCloud, FaShieldAlt } from 'react-icons/fa';

const programs = [
  {
    title: 'Web Development',
    icon: <FaCode className="w-8 h-8" />,
    description: 'Learn modern web development with HTML, CSS, JavaScript, and popular frameworks.',
    duration: '6 months',
    level: 'Beginner to Advanced',
    features: ['Frontend Development', 'Backend Development', 'Database Management', 'API Development'],
  },
  {
    title: 'Mobile App Development',
    icon: <FaMobile className="w-8 h-8" />,
    description: 'Master mobile app development for iOS and Android platforms.',
    duration: '8 months',
    level: 'Intermediate',
    features: ['iOS Development', 'Android Development', 'Cross-platform Development', 'App Publishing'],
  },
  {
    title: 'Data Science',
    icon: <FaDatabase className="w-8 h-8" />,
    description: 'Explore data analysis, machine learning, and artificial intelligence.',
    duration: '12 months',
    level: 'Intermediate to Advanced',
    features: ['Data Analysis', 'Machine Learning', 'Deep Learning', 'Data Visualization'],
  },
  {
    title: 'Cloud Computing',
    icon: <FaCloud className="w-8 h-8" />,
    description: 'Learn cloud platforms and services for scalable applications.',
    duration: '6 months',
    level: 'Intermediate',
    features: ['AWS', 'Azure', 'Google Cloud', 'DevOps Practices'],
  },
  {
    title: 'Cybersecurity',
    icon: <FaShieldAlt className="w-8 h-8" />,
    description: 'Master the art of securing digital assets and systems.',
    duration: '9 months',
    level: 'Intermediate to Advanced',
    features: ['Network Security', 'Ethical Hacking', 'Security Analysis', 'Incident Response'],
  },
  {
    title: 'Software Engineering',
    icon: <FaLaptop className="w-8 h-8" />,
    description: 'Comprehensive software development and engineering practices.',
    duration: '12 months',
    level: 'Beginner to Advanced',
    features: ['Software Design', 'Testing', 'Deployment', 'Agile Methodologies'],
  },
];

export default function ProgramsPage() {
  return (
    <main className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Programs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive range of programs designed to help you succeed in the tech industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="text-blue-600 mb-4">{program.icon}</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {program.title}
                </h2>
                <p className="text-gray-600 mb-6">{program.description}</p>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Duration:</span>
                    <span className="font-medium">{program.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Level:</span>
                    <span className="font-medium">{program.level}</span>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Key Features:</h3>
                  <ul className="space-y-2">
                    {program.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8">
                  <a
                    href={`/programs/${program.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block w-full bg-blue-600 text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-blue-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Join our programs and take the first step towards a successful career in technology.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </main>
  );
} 