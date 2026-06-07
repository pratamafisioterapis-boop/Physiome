
import React from 'react';
import { Helmet } from 'react-helmet';
import LandingHeader from '@/components/landing/LandingHeader.jsx';
import LandingFooter from '@/components/landing/LandingFooter.jsx';
import { HeroSection, TrustSection, HowItWorksSection, FeaturesSection } from '@/components/landing/LandingSections.jsx';
import { 
  HomeExerciseProgramSection, 
  ProgressMonitoringSection, 
  TelehealthSection, 
  PatientMobileAppSection, 
  AISection 
} from '@/components/landing/LandingShowcases.jsx';
import { TestimonialsSection, PricingSection, FinalCTASection } from '@/components/landing/LandingConversion.jsx';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/20">
      <Helmet>
        <title>Physiome | Software Manajemen Klinik Fisioterapi Modern</title>
        <meta name="description" content="Tingkatkan kepatuhan latihan dan hasil terapi pasien Anda dengan Physiome. Platform manajemen klinik fisioterapi pintar dengan AI, Telehealth, dan Aplikasi Pasien." />
      </Helmet>
      
      <LandingHeader />
      
      <main>
        <HeroSection />
        <TrustSection />
        <HowItWorksSection />
        <FeaturesSection />
        <HomeExerciseProgramSection />
        <ProgressMonitoringSection />
        <TelehealthSection />
        <PatientMobileAppSection />
        <AISection />
        <TestimonialsSection />
        <PricingSection />
        <FinalCTASection />
      </main>
      
      <LandingFooter />
    </div>
  );
};

export default LandingPage;
