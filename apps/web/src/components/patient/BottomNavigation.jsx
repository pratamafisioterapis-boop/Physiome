
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Dumbbell, TrendingUp, Calendar, User } from 'lucide-react';

const BottomNavigation = () => {
  const navItems = [
    { path: '/patient/dashboard', icon: Home, label: 'Home' },
    { path: '/patient/exercises', icon: Dumbbell, label: 'Exercises' },
    { path: '/patient/progress', icon: TrendingUp, label: 'Progress' },
    { path: '/patient/appointments', icon: Calendar, label: 'Visits' },
    { path: '/patient/profile', icon: User, label: 'Profile' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border z-50 safe-bottom shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.1)]">
      <div className="flex justify-around items-center h-16 max-w-md mx-auto px-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors duration-200 ${
                isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <item.icon className={`w-5 h-5 ${isActive ? 'fill-primary/20' : ''}`} strokeWidth={isActive ? 2.5 : 2} />
                <span className={`text-[10px] font-medium ${isActive ? 'font-semibold' : ''}`}>
                  {item.label}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BottomNavigation;
