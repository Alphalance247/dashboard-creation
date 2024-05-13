import '@/app/ui/global.css';
// import { inter } from '@/app/ui/fonts';
// import { Lusitana } from 'next/font/google';
// import { Titillium_Web } from 'next/font/google';

// const lusitana = Lusitana({
//   weight: ['400', '700'],
//   subsets: ['latin'],
//   variable: '--lusi',
//   adjustFontFallback: false,
//   display: 'swap',
// });

// const titillium = Titillium_Web({
//   weight: ['200', '300', '400', '600', '700', '900'],
//   subsets: ['latin'],
//   display: 'swap',
//   adjustFontFallback: false,
//   variable: '--titillium',
// });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
      // className={`${lusitana.variable} ${inter.className} ${titillium.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
