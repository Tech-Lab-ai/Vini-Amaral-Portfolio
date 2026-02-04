
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Vini Amaral — Software Developer | Fullstack & AI',
  description: 'Senior Software Developer specializing in React, Next.js, Node.js, Go, and AI integration. Building practical and experimental software solutions.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground scroll-smooth">
        {children}
      </body>
    </html>
  );
}
