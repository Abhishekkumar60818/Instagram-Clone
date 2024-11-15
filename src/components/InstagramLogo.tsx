import React from 'react';
import { Camera } from 'lucide-react';

export function InstagramLogo() {
  return (
    <div className="flex items-center space-x-2">
      <Camera className="w-8 h-8" />
      <span className="text-xl font-semibold hidden md:block">Instagram</span>
    </div>
  );
}