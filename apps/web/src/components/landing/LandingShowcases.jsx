
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BrainCircuit, CheckCircle2, Activity, PlayCircle, MessageSquare, Video, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AICapabilityCard, StatCard } from './LandingCards.jsx';

const ShowcaseLayout = ({ title, description, imageSrc, reversed = false, children, badge }) => (
  <section className="py-24 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${reversed ? 'lg:flex-row-reverse' : ''}`}>
        <motion.div 
          initial={{ opacity: 0, x: reversed ? 30 : -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className={reversed ? 'lg:order-2' : ''}
        >
          {badge && (
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6">
              {badge}
            </div>
          )}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">{title}</h2>
          <p className="text-lg md:text-xl text-muted-foreground font-medium mb-8 leading-relaxed">{description}</p>
          {children}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`relative ${reversed ? 'lg:order-1' : ''}`}
        >
          <div className="absolute inset-0 bg-gradient-premium rounded-[3rem] transform rotate-3 scale-105 -z-10 opacity-50" />
          <img 
            src={imageSrc} 
            alt={title} 
            className="rounded-[3rem] shadow-soft-lg border border-border/50 object-cover w-full h-[500px] lg:h-[600px]"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export const HomeExerciseProgramSection = () => (
  <ShowcaseLayout
    badge={<><PlayCircle className="w-4 h-4" /> Exercise Prescription</>}
    title={<>Buat Program Latihan Profesional dalam <span className="text-primary">Hitungan Menit</span></>}
    description="Tinggalkan kertas cetak. Pilih dari ribuan video HD atau unggah milik Anda sendiri untuk menyusun program latihan yang jelas dan mudah diikuti oleh pasien di rumah."
    imageSrc="https://images.unsplash.com/photo-1694747674615-c381e6b9ce04?q=80&w=2070&auto=format&fit=crop"
  >
    <ul className="space-y-4 mb-8">
      {['Library Video Lengkap & Terorganisir', 'Custom Sets, Reps & Hold Time', 'Template Program Siap Pakai', 'Otomatis Kirim ke Aplikasi Pasien'].map((item, i) => (
        <li key={i} className="flex items-center gap-3 font-bold text-foreground">
          <div className="w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          {item}
        </li>
      ))}
    </ul>
    <Button className="rounded-full font-bold px-8 h-12 shadow-glow-primary">Coba Builder Sekarang</Button>
  </ShowcaseLayout>
);

export const ProgressMonitoringSection = () => (
  <ShowcaseLayout
    reversed
    badge={<><Activity className="w-4 h-4" /> Analytics Dashboard</>}
    title={<>Pantau Kemajuan Pasien Secara <span className="text-primary">Real-Time</span></>}
    description="Jangan tebak-tebakan. Dapatkan visibilitas penuh terhadap kepatuhan latihan pasien dan perkembangan nyeri mereka di antara sesi kunjungan klinik."
    imageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  >
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
      <StatCard label="Pain Score Trend" value="-4.2" trend="down" trendValue="Bulan ini" />
      <StatCard label="Exercise Adherence" value="92%" trend="up" trendValue="+5%" />
    </div>
  </ShowcaseLayout>
);

export const TelehealthSection = () => (
  <ShowcaseLayout
    badge={<><Video className="w-4 h-4" /> Virtual Care</>}
    title={<>Tetap Terhubung dengan Pasien <span className="text-primary">Dimanapun</span></>}
    description="Lakukan sesi follow-up, evaluasi form latihan, atau konsultasi awal melalui sistem telehealth terintegrasi yang aman dan mudah digunakan."
    imageSrc="https://images.unsplash.com/photo-1675270714610-11a5cadcc7b3?q=80&w=2070&auto=format&fit=crop"
  >
    <Button variant="outline" className="rounded-full font-bold px-8 h-12 border-primary text-primary hover:bg-primary/5 mt-4">
      Pelajari Telehealth <ArrowRight className="ml-2 w-4 h-4" />
    </Button>
  </ShowcaseLayout>
);

export const PatientMobileAppSection = () => (
  <ShowcaseLayout
    reversed
    badge={<><Smartphone className="w-4 h-4" /> Mobile App</>}
    title={<>Aplikasi Pasien yang Sederhana dan <span className="text-primary">Menyenangkan</span></>}
    description="Berikan pasien Anda 'fisioterapis digital' di saku mereka. Aplikasi yang dirancang untuk menjaga motivasi dan memastikan latihan dilakukan dengan benar."
    imageSrc="https://images.unsplash.com/photo-1593150543200-56e05bdb018e?q=80&w=2070&auto=format&fit=crop"
  >
    <ul className="space-y-4">
      {['Daftar Latihan Harian Interaktif', 'Pelaporan Nyeri 1-Klik', 'Pengingat Jadwal Terapi', 'Live Chat dengan Terapis'].map((item, i) => (
        <li key={i} className="flex items-center gap-3 font-bold text-foreground">
          <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          {item}
        </li>
      ))}
    </ul>
  </ShowcaseLayout>
);

export const AISection = () => {
  const aiFeatures = [
    { icon: BrainCircuit, title: 'AI Exercise Suggestions', desc: 'Rekomendasi latihan pintar berdasarkan diagnosa dan fase pemulihan pasien.' },
    { icon: Activity, title: 'AI Program Generator', desc: 'Buat kerangka program lengkap dalam hitungan detik untuk diedit lebih lanjut.' },
    { icon: MessageSquare, title: 'AI Clinical Insights', desc: 'Analisis otomatis dari laporan nyeri pasien untuk mendeteksi risiko penurunan klinis.' },
    { icon: CheckCircle2, title: 'AI Progress Analysis', desc: 'Rangkuman perkembangan bulanan pasien yang di-generate otomatis untuk laporan medis.' }
  ];

  return (
    <section className="py-32 bg-secondary text-secondary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2065&auto=format&fit=crop')] opacity-5 mix-blend-overlay bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-secondary via-secondary/95 to-secondary" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 text-accent font-bold text-sm mb-6 border border-accent/30">
            <BrainCircuit className="w-4 h-4" /> Next-Gen Technology
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">Asisten AI untuk Rehabilitasi yang <span className="text-accent">Lebih Cerdas</span></h2>
          <p className="text-xl text-secondary-foreground/80 font-medium">Hemat waktu administrasi dan dapatkan insight klinis mendalam dari asisten AI yang dilatih khusus untuk fisioterapi.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {aiFeatures.map((feat, i) => (
            <AICapabilityCard key={i} icon={feat.icon} title={feat.title} description={feat.desc} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};
