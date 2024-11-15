import React from 'react';
import { Search, Heart, PlusSquare, Home, MessageCircle, Menu } from 'lucide-react';
import { InstagramLogo } from './InstagramLogo';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <InstagramLogo />
        
        <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-3 py-2 w-72">
          <Search className="w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent border-none focus:ring-0 focus:outline-none ml-2 w-full text-sm"
          />
        </div>
        
        <nav className="flex items-center space-x-6">
          <Home className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
          <MessageCircle className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
          <PlusSquare className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
          <Heart className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=32&h=32"
            alt="Profile"
            className="w-8 h-8 rounded-full cursor-pointer border border-gray-200"
          />
        </nav>
      </div>
    </header>
  );
}