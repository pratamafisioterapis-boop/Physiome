
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Activity } from 'lucide-react';

const PainTrackingCard = ({ score, lastLogged }) => {
  const getPainColor = (level) => {
    if (level <= 3) return 'text-success bg-success/10 border-success/20';
    if (level <= 6) return 'text-warning bg-warning/10 border-warning/20';
    return 'text-destructive bg-destructive/10 border-destructive/20';
  };

  return (
    <Card className="overflow-hidden border-none shadow-md">
      <CardContent className="p-5 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground mb-1 flex items-center gap-2">
            <Activity className="w-4 h-4" /> Current Pain Level
          </p>
          <p className="text-xs text-muted-foreground">
            Last logged: {lastLogged ? new Date(lastLogged).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) : 'Never'}
          </p>
        </div>
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${getPainColor(score)}`}>
          <span className="text-2xl font-bold">{score ?? '-'}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default PainTrackingCard;
