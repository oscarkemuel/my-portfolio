import { Inter, Montserrat, Courier_Prime } from 'next/font/google';
 
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});
 
export const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const courier_prime = Courier_Prime({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-courier',
})