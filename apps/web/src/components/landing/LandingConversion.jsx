
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { TestimonialCard, PricingCard } from './LandingCards.jsx';
import { Button } from '@/components/ui/button';

export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Platform ini merevolusi cara klinik kami beroperasi. Kepatuhan latihan pasien di rumah meningkat drastis karena aplikasi mobile yang sangat mudah digunakan.",
      name: "Maya Sari, M.Fis",
      title: "Head Physiotherapist",
      clinic: "RehabPlus Clinic",
      photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=150&auto=format&fit=crop"
    },
    {
      quote: "Fitur AI exercise generator sangat menghemat waktu. Saya bisa merancang program komprehensif dalam 2 menit, sesuatu yang dulunya memakan waktu 15 menit per pasien.",
      name: "Dr. Budi Santoso",
      title: "Clinic Owner",
      clinic: "SportsMed Center",
      photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=150&auto=format&fit=crop"
    },
    {
      quote: "Telehealth dan pain tracking terintegrasi membuat pemantauan pasien pasca-operasi sangat transparan. Hasil klinis pasien kami jauh lebih terukur sekarang.",
      name: "Sarah Wijaya",
      title: "Senior Physiotherapist",
      clinic: "OrthoCare Hospital",
      photo: "https://images.unsplash.com/photo-1594824432258-2900a6315510?q=80&w=150&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-foreground">Dipercaya oleh Fisioterapis dan Klinik</h2>
          <p className="text-xl text-muted-foreground font-medium">Bergabunglah dengan praktisi terdepan yang telah meningkatkan standar perawatan mereka.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} delay={i * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
};

export const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "Rp 399k",
      description: "Untuk praktisi mandiri yang baru memulai digitalisasi.",
      features: [
        "1 Fisioterapis",
        "Hingga 50 Pasien Aktif",
        "Akses Video Library Dasar",
        "Aplikasi Pasien Standar",
        "Email Support"
      ]
    },
    {
      name: "Professional",
      price: "Rp 899k",
      description: "Solusi lengkap untuk klinik yang sedang berkembang pesat.",
      highlighted: true,
      features: [
        "Hingga 5 Fisioterapis",
        "Pasien Aktif Tidak Terbatas",
        "AI Program Generator & Analytics",
        "Telehealth Terintegrasi",
        "Custom Branding Aplikasi",
        "Priority Support 24/7"
      ]
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Sistem skala besar untuk jaringan rumah sakit dan klinik.",
      features: [
        "Terapis Tidak Terbatas",
        "Manajemen Multi-Cabang",
        "Integrasi EMR & API Access",
        "Dedicated Account Manager",
        "Custom Feature Development"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-foreground">Pilih Paket yang Sesuai</h2>
          <p className="text-xl text-muted-foreground font-medium">Investasi yang sepadan untuk efisiensi klinik dan kepuasan pasien Anda.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {plans.map((plan, i) => (
            <PricingCard key={i} {...plan} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export const FinalCTASection = () => {
  const navigate = useNavigate();
  return (
    <section className="py-24 relative overflow-hidden bg-primary text-white">
      <div className="absolute inset-0 bg-gradient-navy opacity-90 -z-10" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] -z-10 translate-x-1/3 -translate-y-1/3" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight">
          Bantu Pasien Pulih Lebih Cepat dengan Physiome
        </h2>
        <p className="text-xl text-white/80 font-medium mb-12 leading-relaxed max-w-3xl mx-auto">
          Program latihan yang lebih terstruktur, monitoring yang lebih baik, dan komunikasi yang lebih efektif dalam satu platform pintar.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-5">
          <Button size="lg" className="rounded-full text-lg font-bold h-16 px-10 bg-white text-secondary hover:bg-white/90 shadow-glow-primary hover:scale-105 transition-all duration-300" onClick={() => navigate('/register')}>
            Mulai Uji Coba Gratis
          </Button>
          <Button size="lg" variant="outline" className="rounded-full text-lg font-bold h-16 px-10 border-2 border-white/30 text-white hover:bg-white/10 transition-colors duration-300">
            Hubungi Tim Sales
          </Button>
        </div>
      </div>
    </section>
  );
};
