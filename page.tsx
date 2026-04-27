"use client";

import React from 'react';
import Dashboard from '../components/Dashboard'; // Ensure this path matches your upload
import AIChatBox from '../components/AIChatBox';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="px-6 py-12 text-center bg-gradient-to-b from-purple-900 to-black">
        <h1 className="text-4xl font-bold mb-4">FlexHub</h1>
        <p className="text-xl text-purple-200 italic">"We Assist, Connect, Guide, and Find Solutions"</p>
      </section>

      {/* Numbered Category Selector 1-5 */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 p-6">
        {['Real Estate', 'Products & Assets', 'Beauty', 'Wellness', 'Travel'].map((cat, i) => (
          <div key={i} className="border-2 border-purple-600 p-4 rounded-xl text-center hover:bg-purple-900 transition-all cursor-pointer">
            <span className="text-3xl font-black block text-purple-400">{i + 1}</span>
            <span className="font-semibold">{cat}</span>
          </div>
        ))}
      </div>

      {/* Main Feature Area */}
      <Dashboard />
      
      {/* Persistent AI Flex Guide */}
      <div className="fixed bottom-6 right-6">
        <AIChatBox />
      </div>
    </div>
  );
}

