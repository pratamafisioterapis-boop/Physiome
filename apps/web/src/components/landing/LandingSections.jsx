
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Activity, Calendar, MessageSquare, Video, Shield, BrainCircuit, Smartphone, BarChart as ChartBar, Users, FileText, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FeatureCard, PricingCard, TestimonialCard, StepCard, AICapabilityCard, StatCard } from './LandingCards.jsx';

export const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-premium">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] -z-10 -translate-x-1/3 translate-y-1/4" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-secondary/40 backdrop-blur-md border border-white/50 dark:border-white/10 text-primary font-bold text-sm mb-8 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
              </span>
              Platform Fisioterapi #1 di Indonesia
            </div>
            
            <h1 className="text-5xl lg:text-6xl xl:text-[4rem] font-extrabold text-foreground leading-[1.1] mb-6 tracking-tight text-balance">
              Tingkatkan Kepatuhan Latihan dan <span className="text-gradient">Hasil Terapi Pasien Anda</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed font-medium max-w-xl">
              Buat program latihan yang terstruktur, pantau progres pasien secara real-time, lakukan konsultasi jarak jauh, dan tetap terhubung dengan pasien dari mana saja.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={() => navigate('/register')} className="rounded-full text-base font-bold h-14 px-8 shadow-glow-primary hover:scale-105 transition-transform duration-300">
                Mulai Gratis <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full text-base font-bold h-14 px-8 bg-white/50 backdrop-blur-sm border-border hover:bg-white transition-colors duration-300">
                Jadwalkan Demo
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative lg:h-[600px] flex items-center justify-center mt-10 lg:mt-0"
          >
            <div className="relative w-full max-w-lg mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1630531210962-69e7d5a95255?q=80&w=2070&auto=format&fit=crop" 
                alt="Physiome Dashboard Mockup" 
                className="rounded-[2.5rem] shadow-2xl border-8 border-white/80 object-cover w-full h-[500px]"
              />
              
              {/* Floating Cards */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-6 md:-left-12 top-20 w-48"
              >
                <StatCard label="Adherence Rate" value="89%" trend="up" trendValue="+12%" />
              </motion.div>

              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-6 md:-right-12 bottom-32 w-52"
              >
                <StatCard label="Recovery Progress" value="A+" trend="up" trendValue="On Track" />
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export const TrustSection = () => (
  <section className="py-12 border-b border-border/50 bg-white dark:bg-background">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <p className="text-center text-sm font-bold text-muted-foreground mb-8 uppercase tracking-widest">
        Dirancang untuk Fisioterapis Modern
      </p>
      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 lg:gap-32 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
        <div className="flex items-center gap-3 font-extrabold text-xl text-secondary"><Activity className="w-8 h-8 text-primary"/> Klinik Fisioterapi</div>
        <div className="flex items-center gap-3 font-extrabold text-xl text-secondary"><Shield className="w-8 h-8 text-primary"/> Rumah Sakit</div>
        <div className="flex items-center gap-3 font-extrabold text-xl text-secondary"><Users className="w-8 h-8 text-primary"/> Sports Rehabilitation</div>
        <div className="flex items-center gap-3 font-extrabold text-xl text-secondary"><Calendar className="w-8 h-8 text-primary"/> Homecare Providers</div>
      </div>
    </div>
  </section>
);

export const HowItWorksSection = () => (
  <section id="how-it-works" className="py-24 bg-background relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-foreground">Rehabilitasi Digital dalam <span className="text-primary">3 Langkah</span></h2>
        <p className="text-xl text-muted-foreground font-medium">Platform intuitif kami membuat alur kerja Anda menjadi lebih mulus dan efektif.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
        {/* Connecting Line */}
        <div className="hidden md:block absolute top-24 left-[15%] right-[15%] h-1 bg-gradient-to-r from-primary-light via-primary/50 to-primary-light -z-10 rounded-full" />
        
        <StepCard 
          number="1" 
          title="Buat Program Latihan" 
          description="Pilih latihan dari library video HD kami dan susun program kustom sesuai dengan kebutuhan spesifik pasien Anda dalam hitungan menit." 
          delay={0.1}
        />
        <StepCard 
          number="2" 
          title="Kirim ke Pasien" 
          description="Pasien menerima program latihan langsung melalui aplikasi mobile mereka, lengkap dengan instruksi video dan jadwal pengingat." 
          delay={0.2}
        />
        <StepCard 
          number="3" 
          title="Pantau Progres" 
          description="Lihat tingkat kepatuhan latihan, perkembangan nyeri, dan hasil terapi secara real-time melalui dashboard analitik." 
          delay={0.3}
        />
      </div>
    </div>
  </section>
);

export const FeaturesSection = () => {
  const features = [
    { icon: FileText, title: 'Program Latihan Terstruktur', desc: 'Bangun rutinitas yang jelas dengan set, repetisi, dan durasi yang terukur.' },
    { icon: Video, title: 'Video Exercise Library', desc: 'Akses ribuan video instruksional berkualitas tinggi atau unggah milik Anda.' },
    { icon: ChartBar, title: 'Monitoring Progress Pasien', desc: 'Lacak kepatuhan dan pencapaian target terapi secara objektif.' },
    { icon: Activity, title: 'Pain Tracking', desc: 'Pasien dapat melaporkan tingkat nyeri sebelum dan sesudah latihan.' },
    { icon: CheckCircle2, title: 'Outcome Measurement', desc: 'Gunakan kuesioner standar untuk mengukur peningkatan fungsional.' },
    { icon: Smartphone, title: 'Telehealth Consultation', desc: 'Lakukan sesi konsultasi video aman langsung dari platform.' },
    { icon: MessageSquare, title: 'Live Chat Therapist & Patient', desc: 'Komunikasi asinkron untuk dukungan berkelanjutan di luar sesi.' },
    { icon: Users, title: 'Patient Engagement System', desc: 'Gamifikasi dan pengingat untuk menjaga motivasi pasien tetap tinggi.' },
    { icon: BrainCircuit, title: 'AI Exercise Recommendation', desc: 'Saran latihan cerdas berdasarkan diagnosa dan data pemulihan historis.' },
  ];

  return (
    <section id="features" className="py-24 bg-muted/50 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-foreground">Semua yang Dibutuhkan untuk Rehabilitasi Modern</h2>
          <p className="text-xl text-muted-foreground font-medium">Suite lengkap alat klinis untuk mengelola setiap aspek perawatan pasien.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, i) => (
            <FeatureCard key={i} icon={feat.icon} title={feat.title} description={feat.desc} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};
