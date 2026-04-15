import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import NewsMedia from './components/NewsMedia';
import Engagement from './components/Engagement';
import Expertise from './components/Expertise';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';

function Layout({ children }: { children: React.ReactNode }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-pure-white selection:bg-bordeaux selection:text-pure-white font-sans overflow-x-hidden">
      <CustomCursor />
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-bordeaux z-[60] origin-left"
        style={{ scaleX }}
      />
      <Navbar />
      <main className="pt-16">
        {children}
      </main>
      <BackToTop />
      <Footer />
    </div>
  );
}

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
    >
      {children}
    </motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname} className="w-full">
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/expertise" element={<PageWrapper><Expertise /></PageWrapper>} />
          <Route path="/engagement" element={<PageWrapper><Engagement /></PageWrapper>} />
          <Route path="/medias" element={<PageWrapper><NewsMedia /></PageWrapper>} />
          <Route path="/temoignages" element={<PageWrapper><Testimonials /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function HomePage() {
  return (
    <PageWrapper>
      <Hero />
      <Expertise />
      <Engagement />
      <NewsMedia />
      <Testimonials />
      <Contact />
    </PageWrapper>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </Router>
  );
}
