import { Poppins } from 'next/font/google';

export const metadata = {
  title: 'Shamxeed',
  description:
    'Shamxeed is a Full-Stack JavaScript Developer (mobile + web), from Yola, Nigeria...',
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: '700',
});

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={poppins.className}>
      <body>{children}</body>
    </html>
  );
}
