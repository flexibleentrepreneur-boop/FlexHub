import React from 'react';
import './globals.css';

export const metadata = {
  title: 'FlexHub | Flexible Entrepreneur',
  description: 'Multi-service marketplace and concierge for African entrepreneurs.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {/* Your Navbar code from App.tsx goes here */}
        <div className="min-h-screen flex flex-col">
          <main className="flex-grow">{children}</main>
        </div>
      </body>
    </html>
  );
}

