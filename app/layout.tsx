import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { poppins } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased bg-gray-600 text-gray-400`}>{children}</body>
    </html>
  );
}
