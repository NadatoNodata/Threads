import Navbar from '@/components/Navbar/Navbar';
import Header from '@/components/Header';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Header />
        <main style={{ marginLeft: '80px', paddingTop: '60px' }} className="main-content">
  {children}
</main>
      </body>
    </html>
  );
}