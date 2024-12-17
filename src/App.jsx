import React, { useState } from 'react';

import Portfolio from './portfolio';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="transition-all duration-300 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Portfolio/>
        
        {/* <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero />
        <About />
        <Skills />
        <Education />
        <Contact />
        <Footer /> */}
      </div>
    </div>
  );
}

export default App;
