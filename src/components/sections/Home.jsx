import React, { useRef } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Icon from '../icons/Icon';
import { useTheme } from '../../context/ThemeContext';
import { sampleData } from '../../data/homeData';

const Home = () => {
  const { isDark } = useTheme();

  // Create a ref for the Projects section
  const projectsRef = useRef(null);

  // Handle the scroll to the Projects section with an offset
  const scrollToProjects = () => {
    if (projectsRef.current) {
      // Adjust scroll with offset (50px for header height)
      window.scrollTo({
        top: projectsRef.current.offsetTop - 50,  // Adjust based on header height
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text and Image */}
          <div className="space-y-6">
            {/* Profile Image */}
            <div className="relative w-48 h-48 mx-auto md:mx-0">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full animate-pulse" />
              <img
                src="/portfolio/kk.jpg"
                className="relative rounded-full w-full h-full object-cover border-4 border-white dark:border-gray-800"
              />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-center md:text-left">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                Data Scientist
              </span>
              <br />
              <span className="text-gray-800 dark:text-white">
                Turning Data into Insights
              </span>
            </h1>

            <p className="text-gray-600 dark:text-gray-300 text-lg text-center md:text-left">
              Specializing in machine learning, deep learning, and data visualization.
              Passionate about solving complex problems and creating impactful solutions.
            </p>

            <div className="flex gap-4 justify-center md:justify-start">
              <button
                onClick={scrollToProjects} // Add the onClick to scroll
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                View Projects
              </button>
              <button className="border-2 border-gray-300 dark:border-gray-600 px-6 py-3 rounded-lg hover:border-purple-600 transition-colors dark:text-white"
              onClick={() => window.open('https://drive.google.com/file/d/1bbz1dN9IMjujsFC25vpDyHjT0oo68MSP/view?usp=sharing', '_blank')}>
                Download Resume
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center md:justify-start pt-4">
              {['github', 'linkedin', 'twitter'].map((platform, index) => (
                <a
                  key={platform}
                  href={
                    platform === 'github'
                      ? 'https://github.com/Ketan3102'
                      : platform === 'linkedin'
                      ? 'https://www.linkedin.com/in/ketan-kumar31/'
                      : 'https://x.com/Ketan_3101'
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Icon name={platform} className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Chart */}
          <div className="relative"> {/* Attach ref here */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg blur-xl" />
            <div className="relative bg-white dark:bg-gray-800 p-4 rounded-lg shadow-xl">
              <div className="h-[300px] md:h-[400px]"> {/* Responsive height */}
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={sampleData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis
                      dataKey="name"
                      stroke="#6B7280"
                      style={{
                        fontSize: '0.875rem',
                        fontFamily: 'sans-serif',
                      }}
                    />
                    <YAxis
                      stroke="#6B7280"
                      style={{
                        fontSize: '0.875rem',
                        fontFamily: 'sans-serif',
                      }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: isDark ? '#1F2937' : 'white',
                        border: 'none',
                        borderRadius: '0.5rem',
                        color: isDark ? 'white' : 'black',
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="url(#colorGradient)"
                      strokeWidth={2}
                      dot={{
                        fill: '#6366f1',
                        strokeWidth: 2,
                        r: 4,
                        strokeDasharray: '',
                      }}
                    />
                    <defs>
                      <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#2563eb" />
                        <stop offset="100%" stopColor="#7c3aed" />
                      </linearGradient>
                    </defs>
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div ref={projectsRef} /> {/* Attach ref here */}
    </div>
  );
};

export default Home;
