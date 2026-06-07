
import React from 'react';
import { Helmet } from 'react-helmet';
import GenerationHistory from '@/components/soap/GenerationHistory.jsx';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function SOAPHistoryPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background py-8 px-4 sm:px-6">
      <Helmet><title>SOAP History | Physiome</title></Helmet>
      
      <div className="max-w-5xl mx-auto space-y-6">
        <header className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-2xl font-bold text-foreground">All Generated SOAP Notes</h1>
        </header>

        <div className="h-[calc(100vh-140px)]">
          <GenerationHistory onLoadHistory={(item) => console.log('Load item', item)} />
        </div>
      </div>
    </div>
  );
}
