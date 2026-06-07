
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, Users, Calendar, Settings, LogOut, 
  Activity, Video, Dumbbell, ClipboardList, TrendingUp, BarChart3, Presentation, PlusSquare
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext.jsx';
import { cn } from '@/lib/utils.js';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { toast } from 'sonner';

export default function Sidebar() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const role = currentUser?.role || 'therapist';

  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully');
    navigate('/login');
  };

  const menuGroups = [
    {
      title: 'General',
      items: [
        { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard, roles: ['admin', 'therapist'] },
        { name: 'Patients', path: '/patients', icon: Users, roles: ['admin', 'therapist'] },
        { name: 'Appointments', path: '/appointments', icon: Calendar, roles: ['therapist'] },
      ]
    },
    {
      title: 'Exercise Ecosystem',
      items: [
        { name: 'Overview', path: '/exercise-dashboard', icon: Activity, roles: ['admin', 'therapist'] },
        { name: 'Library', path: '/exercise-library', icon: Dumbbell, roles: ['admin', 'therapist'] },
        { name: 'My Videos', path: '/my-videos', icon: Video, roles: ['admin', 'therapist'] },
        { name: 'Builder', path: '/program-builder', icon: PlusSquare, roles: ['admin', 'therapist'] },
        { name: 'Templates', path: '/program-templates', icon: Presentation, roles: ['admin', 'therapist'] },
        { name: 'Assigned', path: '/assigned-programs', icon: ClipboardList, roles: ['admin', 'therapist'] },
        { name: 'Patient Progress', path: '/patient-progress', icon: TrendingUp, roles: ['admin', 'therapist'] },
        { name: 'Analytics', path: '/exercise-analytics', icon: BarChart3, roles: ['admin', 'therapist'] },
      ]
    },
    {
      title: 'Settings',
      items: [
        { name: 'Settings', path: '/settings', icon: Settings, roles: ['admin', 'therapist'] },
      ]
    }
  ];

  return (
    <div className="w-64 bg-card border-r border-border h-screen flex flex-col fixed left-0 top-0 z-40">
      <div className="p-6 border-b border-border/50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
            P
          </div>
          <span className="font-bold text-xl tracking-tight text-foreground">Physiome</span>
        </div>
      </div>
      
      <ScrollArea className="flex-1 py-6 px-4">
        <div className="space-y-8">
          {menuGroups.map((group, idx) => {
            const visibleItems = group.items.filter(item => item.roles.includes(role));
            if (visibleItems.length === 0) return null;
            
            return (
              <div key={idx}>
                <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-3">
                  {group.title}
                </h4>
                <div className="space-y-1">
                  {visibleItems.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.path}
                      className={({ isActive }) => cn(
                        "flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200",
                        isActive 
                          ? "bg-primary/10 text-primary" 
                          : "text-muted-foreground hover:bg-secondary/5 hover:text-foreground"
                      )}
                    >
                      <item.icon className="w-4 h-4" />
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </ScrollArea>

      <div className="p-4 border-t border-border mt-auto">
        <div className="flex items-center gap-3 mb-4 px-2">
          <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-medium">
            {currentUser?.name?.charAt(0) || currentUser?.full_name?.charAt(0) || 'U'}
          </div>
          <div className="overflow-hidden">
            <p className="text-sm font-semibold truncate text-foreground">{currentUser?.name || currentUser?.full_name || 'User'}</p>
            <p className="text-xs text-muted-foreground truncate capitalize">{role}</p>
          </div>
        </div>
        <Button 
          variant="outline" 
          className="w-full justify-start text-muted-foreground hover:text-destructive hover:bg-destructive/10 border-transparent"
          onClick={handleLogout}
        >
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </Button>
      </div>
    </div>
  );
}
