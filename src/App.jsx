import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import ProblemSection from './components/ProblemSection';
import ServiceSection from './components/ServiceSection';
import ProjectSection from './components/ProjectSection';
import ProcessSection from './components/ProcessSection';
import ProofSection from './components/ProofSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import AllProjectsPage from './components/AllProjectsPage';
import ProjectModal from './components/ProjectModal';

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [activeVideo, setActiveVideo] = useState(null);

  const handleGoToAllProjects = () => {
    setCurrentView('all-projects');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Navigasi untuk klik menu Navbar
  const handleNavigate = (sectionId) => {
    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else if (sectionId === 'top') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    } else {
      if (sectionId === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <>
      {/* prop onNavigate ke Navbar */}
      <Navbar onNavigate={handleNavigate} />
      
      <main>
        {currentView === 'home' ? (
          <>
            <Hero />
            <Ticker />
            <ProblemSection />
            <ServiceSection />
            <ProjectSection 
              onViewAllClick={handleGoToAllProjects} 
              onOpenDemo={(project) => setActiveVideo(project)}
            />
            <ProcessSection />
            <ProofSection />
            <FAQSection />
            <CTASection />
          </>
        ) : (
          <AllProjectsPage 
            onBack={handleBackToHome} 
            onOpenDemo={(project) => setActiveVideo(project)}
          />
        )}
      </main>
      <Footer />

      {/* Pop-up Modal */}
      <ProjectModal 
        activeVideo={activeVideo} 
        onClose={() => setActiveVideo(null)} 
      />
    </>
  );
}