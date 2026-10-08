import type { Metadata } from 'next';
import './globals.css';
import { KaushalSetuProvider } from '../context/KaushalSetuContext';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';

export const metadata: Metadata = {
  title: 'KAUSHALSETU - National Skill Development & Employment Platform',
  description: 'AI-assisted Skill Gap Analysis, Personalized Roadmaps, Job Matching Engine, Resume Builder, and Free Industry Courses.',
  keywords: ['KaushalSetu', 'Skill Gap Analysis', 'Career Roadmap', 'Job Matching', 'Skill Assessment', 'Resume Builder', 'AI Career Assistant']
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                theme: {
                  extend: {
                    colors: {
                      forest: {
                        50: '#f0fdf4',
                        100: '#dcfce7',
                        600: '#16a34a',
                        700: '#15803d',
                        800: '#166534',
                        900: '#14532d',
                      },
                      charcoal: {
                        800: '#1e293b',
                        900: '#0f172a'
                      },
                      warm: {
                        50: '#fafaf7',
                        100: '#f4f4f0'
                      },
                      saffron: {
                        500: '#f59e0b',
                        700: '#b45309'
                      }
                    }
                  }
                }
              }
            `
          }}
        />
      </head>
      <body className="bg-[#FAFAF7] text-slate-800 min-h-screen flex flex-col font-sans selection:bg-green-800 selection:text-white">
        <KaushalSetuProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </KaushalSetuProvider>
      </body>
    </html>
  );
}
