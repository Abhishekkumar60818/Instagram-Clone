import React from 'react';

interface StoryProps {
  username: string;
  imageUrl: string;
  isActive?: boolean;
}

export function Story({ username, imageUrl, isActive = false }: StoryProps) {
  return (
    <div className="flex flex-col items-center space-y-1">
      <div className={`p-[2px] rounded-full ${isActive ? 'bg-gradient-to-tr from-yellow-400 to-fuchsia-600' : 'bg-gray-200'}`}>
        <div className="bg-white p-[2px] rounded-full">
          <img
            src={imageUrl}
            alt={username}
            className="w-14 h-14 rounded-full object-cover"
          />
        </div>
      </div>
      <span className="text-xs truncate w-16 text-center">{username}</span>
    </div>
  );
}