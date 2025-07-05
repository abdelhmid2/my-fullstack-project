import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import ProtectedRoute from './components/common/ProtectedRoute';
import PublicHome from './pages/PublicHome';
import Home from './pages/Home';
import WhatIsProgramming from './pages/WhatIsProgramming';
import Login from './pages/Login';
import Register from './pages/Register';

// Import existing pages
const Frontend = React.lazy(() => import('./pages/Frontend'));
const Backend = React.lazy(() => import('./pages/Backend'));
const PHP = React.lazy(() => import('./pages/PHP'));
const HowToStart = React.lazy(() => import('./pages/HowToStart'));
const Resources = React.lazy(() => import('./pages/Resources'));
const Tools = React.lazy(() => import('./pages/Tools'));
const Tips = React.lazy(() => import('./pages/Tips'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const Contact = React.lazy(() => import('./pages/Contact'));

// Import new pages
const LearningRoadmap = React.lazy(() => import('./pages/LearningRoadmap'));
const ProgrammingFields = React.lazy(() => import('./pages/ProgrammingFields'));
const SuccessStories = React.lazy(() => import('./pages/SuccessStories'));
const SmartQuestions = React.lazy(() => import('./pages/SmartQuestions'));
const AfterLearning = React.lazy(() => import('./pages/AfterLearning'));

// Scroll to top component
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AuthProvider>
          <Router>
            <ScrollToTop />
            <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-arabic">
              <Header />
              <main className="flex-grow">
                <React.Suspense fallback={
                  <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
                  </div>
                }>
                  <Routes>
                    {/* Public routes */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    
                    {/* Protected routes */}
                    <Route path="/" element={
                      <ProtectedRoute>
                        <Home />
                      </ProtectedRoute>
                    } />
                    <Route path="/what-is-programming" element={
                      <ProtectedRoute>
                        <WhatIsProgramming />
                      </ProtectedRoute>
                    } />
                    <Route path="/frontend" element={
                      <ProtectedRoute>
                        <Frontend />
                      </ProtectedRoute>
                    } />
                    <Route path="/backend" element={
                      <ProtectedRoute>
                        <Backend />
                      </ProtectedRoute>
                    } />
                    <Route path="/php" element={
                      <ProtectedRoute>
                        <PHP />
                      </ProtectedRoute>
                    } />
                    <Route path="/how-to-start" element={
                      <ProtectedRoute>
                        <HowToStart />
                      </ProtectedRoute>
                    } />
                    <Route path="/resources" element={
                      <ProtectedRoute>
                        <Resources />
                      </ProtectedRoute>
                    } />
                    <Route path="/tools" element={
                      <ProtectedRoute>
                        <Tools />
                      </ProtectedRoute>
                    } />
                    <Route path="/tips" element={
                      <ProtectedRoute>
                        <Tips />
                      </ProtectedRoute>
                    } />
                    <Route path="/faq" element={
                      <ProtectedRoute>
                        <FAQ />
                      </ProtectedRoute>
                    } />
                    <Route path="/contact" element={
                      <ProtectedRoute>
                        <Contact />
                      </ProtectedRoute>
                    } />
                    
                    {/* New protected routes */}
                    <Route path="/learning-roadmap" element={
                      <ProtectedRoute>
                        <LearningRoadmap />
                      </ProtectedRoute>
                    } />
                    <Route path="/programming-fields" element={
                      <ProtectedRoute>
                        <ProgrammingFields />
                      </ProtectedRoute>
                    } />
                    <Route path="/success-stories" element={
                      <ProtectedRoute>
                        <SuccessStories />
                      </ProtectedRoute>
                    } />
                    <Route path="/smart-questions" element={
                      <ProtectedRoute>
                        <SmartQuestions />
                      </ProtectedRoute>
                    } />
                    <Route path="/after-learning" element={
                      <ProtectedRoute>
                        <AfterLearning />
                      </ProtectedRoute>
                    } />
                    
                    {/* Fallback for non-authenticated users */}
                    <Route path="*" element={<PublicHome />} />
                  </Routes>
                </React.Suspense>
              </main>
              <Footer />
            </div>
          </Router>
        </AuthProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;