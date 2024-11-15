import React from 'react';

interface SuggestionProps {
  username: string;
  imageUrl: string;
  subtitle: string;
}

function SuggestionItem({ username, imageUrl, subtitle }: SuggestionProps) {
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center space-x-3">
        <img src={imageUrl} alt={username} className="w-8 h-8 rounded-full" />
        <div>
          <p className="font-semibold text-sm">{username}</p>
          <p className="text-xs text-gray-500">{subtitle}</p>
        </div>
      </div>
      <button className="text-xs font-semibold text-blue-500 hover:text-blue-700">
        Follow
      </button>
    </div>
  );
}

export function Suggestions() {
  return (
    <div className="mt-6">
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm font-semibold text-gray-500">
          Suggestions For You
        </span>
        <button className="text-xs font-semibold">See All</button>
      </div>
      
      <SuggestionItem
        username="photography_art"
        imageUrl="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=32&h=32"
        subtitle="Followed by design_daily"
      />
      <SuggestionItem
        username="travel_stories"
        imageUrl="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=32&h=32"
        subtitle="Followed by adventure_time"
      />
      <SuggestionItem
        username="food_lover"
        imageUrl="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=32&h=32"
        subtitle="New to Instagram"
      />
    </div>
  );
}