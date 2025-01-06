import React, { useState } from 'react';
import Navigation from './components/layout/Navigation';
import About from './components/sections/About';
import ChatWidget from './components/widgets/ChatWidget';
import Blogs from './components/sections/Blogs';
import Contact from './components/sections/Contact';
import Home from './components/sections/Home';
import Projects from './components/sections/Projects';
import { ThemeProvider } from './context/ThemeContext';
import Footer from './components/sections/Footer';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch(activeSection) {
      case 'home':
        return (
          <div>
            <Home />
            <Projects />
          </div>
        );
      case 'about':
        return <About />;
      case 'blogs':
        return <Blogs />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <ThemeProvider>
      <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen transition-colors duration-300">
        <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
        <main className="pt-16">
          {renderSection()}
        </main>
        <ChatWidget />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;