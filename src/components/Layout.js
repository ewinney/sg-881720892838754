import Head from 'next/head';
import Navigation from './Navigation';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>SmallBizHub - Your Small Business Resource</title>
        <meta name="description" content="Comprehensive resources for small businesses including HR, payroll, financing, and more." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
}