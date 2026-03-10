import Head from 'next/head';
import Theme from '../styles/theme';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>PMD Nawaz Portfolio | Full Stack Developer</title>
        <meta name="description" content="Portfolio of PMD Nawaz, a Full Stack Developer specializing in Next.js, React, and Node.js." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="PMD Nawaz" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pmdnawaz-portfolio.vercel.app/" />
        <meta property="og:title" content="PMD Nawaz Portfolio | Full Stack Developer" />
        <meta property="og:description" content="Explore the projects and skills of PMD Nawaz, a passionate Full Stack Developer." />
        <meta property="og:image" content="/opengraph-image.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://pmdnawaz-portfolio.vercel.app/" />
        <meta property="twitter:title" content="PMD Nawaz Portfolio | Full Stack Developer" />
        <meta property="twitter:description" content="Check out my latest full stack development projects and skills." />
        <meta property="twitter:image" content="/twitter-image.png" />
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
