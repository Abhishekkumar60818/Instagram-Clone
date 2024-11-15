import React from 'react';
import { Header } from './components/Header';
import { Story } from './components/Story';
import { Post } from './components/Post';
import { Suggestions } from './components/Suggestions';

function App() {
  const stories = [
    {
      username: "your_story",
      imageUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=32&h=32",
      isActive: true
    },
    {
      username: "travel_pics",
      imageUrl: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=32&h=32",
      isActive: true
    },
    {
      username: "foodie",
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=32&h=32",
      isActive: true
    },
    {
      username: "art_daily",
      imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=32&h=32",
      isActive: true
    }
  ];

  const posts = [
    {
      username: "travel_pics",
      userImage: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=32&h=32",
      image: "https://images.unsplash.com/photo-1682687982501-1e58ab814714?auto=format&fit=crop&w=1000&h=1000",
      caption: "Beautiful sunset at the beach 🌅 #travel #sunset #beach",
      likes: 1234
    },
    {
      username: "foodie",
      userImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=32&h=32",
      image: "https://images.unsplash.com/photo-1682687218147-9806132dc697?auto=format&fit=crop&w=1000&h=1000",
      caption: "Homemade pasta for dinner 🍝 #foodie #homemade #pasta",
      likes: 2345
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      <Header />
      
      <main className="max-w-6xl mx-auto pt-20 px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Stories */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
            <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
              {stories.map((story, index) => (
                <Story key={index} {...story} />
              ))}
            </div>
          </div>

          {/* Posts */}
          {posts.map((post, index) => (
            <Post key={index} {...post} />
          ))}
        </div>

        {/* Sidebar */}
        <div className="hidden lg:block">
          <div className="fixed w-[320px]">
            <div className="flex items-center space-x-4 mb-6">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=32&h=32"
                alt="Your profile"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-semibold">your_username</p>
                <p className="text-gray-500 text-sm">Your Name</p>
              </div>
            </div>
            <Suggestions />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;