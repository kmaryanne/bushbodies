// app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import DynamicHeader from '../components/DynamicHeader';
import { Bebas_Neue, Outfit, Inter } from 'next/font/google';

const bebasNeue = Bebas_Neue({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas-neue',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata = {
  title: 'Bush Bodies | Clear the Brush',
  description: 'Turn the feeling of being frozen into kinetic energy.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${bebasNeue.variable} ${outfit.variable} ${inter.variable}`}>
      <body className="bg-granite text-slate-800 font-sans antialiased selection:bg-spruce selection:text-granite">
        
        {/* Insert the new Dynamic Header Component */}
        <DynamicHeader />

        <main className="min-h-screen">
          {children}
        </main>
        
      </body>
    </html>
  );
}