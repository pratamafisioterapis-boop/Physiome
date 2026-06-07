
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus, Trash2, TrendingUp } from 'lucide-react';

const AutoProgressionPlanner = ({ plans = [], onChange }) => {
  const addWeek = () => {
    const newWeek = {
      week_number: plans.length + 1,
      work_time: plans.length > 0 ? plans[plans.length - 1].work_time + 5 : 30,
      repetitions: plans.length > 0 ? plans[plans.length - 1].repetitions + 2 : 10,
      sets: plans.length > 0 ? plans[plans.length - 1].sets : 3,
      hold_duration: plans.length > 0 ? plans[plans.length - 1].hold_duration : 0,
    };
    onChange([...plans, newWeek]);
  };

  const removeWeek = (index) => {
    const updated = [...plans];
    updated.splice(index, 1);
    // Re-index weeks
    onChange(updated.map((w, i) => ({ ...w, week_number: i + 1 })));
  };

  const updatePlan = (index, field, value) => {
    const updated = [...plans];
    updated[index] = { ...updated[index], [field]: parseInt(value) || 0 };
    onChange(updated);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-primary" /> Auto-Progression Plan
        </h3>
        <Button size="sm" onClick={addWeek} className="gap-2">
          <Plus className="w-4 h-4" /> Add Week
        </Button>
      </div>

      {plans.length === 0 ? (
        <div className="p-6 text-center bg-muted/30 rounded-xl border border-border border-dashed">
          <p className="text-sm text-muted-foreground">No progression planned. Exercise will remain static.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {plans.map((plan, index) => (
            <Card key={index} className="border-border shadow-sm">
              <CardContent className="p-4 flex flex-col md:flex-row gap-4 items-end md:items-center">
                <div className="w-full md:w-24 font-bold text-foreground">
                  Week {plan.week_number}
                </div>
                <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs text-muted-foreground">Work (sec)</label>
                    <Input type="number" value={plan.work_time} onChange={e => updatePlan(index, 'work_time', e.target.value)} className="h-8 text-sm" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs text-muted-foreground">Reps</label>
                    <Input type="number" value={plan.repetitions} onChange={e => updatePlan(index, 'repetitions', e.target.value)} className="h-8 text-sm" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs text-muted-foreground">Sets</label>
                    <Input type="number" value={plan.sets} onChange={e => updatePlan(index, 'sets', e.target.value)} className="h-8 text-sm" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs text-muted-foreground">Hold (sec)</label>
                    <Input type="number" value={plan.hold_duration} onChange={e => updatePlan(index, 'hold_duration', e.target.value)} className="h-8 text-sm" />
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="text-destructive shrink-0" onClick={() => removeWeek(index)}>
                  <Trash2 className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default AutoProgressionPlanner;
