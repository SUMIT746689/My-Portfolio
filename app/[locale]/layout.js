import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import ThemeProvider from '../../components/ThemeProvider';
import '../../styles/globals.css';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'bn' }];
}

export async function generateMetadata({ params }) {
  const { locale } = await params;

  const metadata = {
    en: {
      title: 'Mehedi Hasan - Senior Software Engineer | Full Stack Developer',
      description: 'Senior Software Engineer specializing in Full Stack Development with 10+ years of experience. Expert in React, Next.js, Node.js, Express, and scalable SaaS applications. Based in Dhaka, Bangladesh.',
      keywords: 'Mehedi Hasan, Senior Software Engineer, Full Stack Developer, React Developer, Next.js, Node.js, JavaScript, TypeScript, Bangladesh Developer, Web Developer Dhaka, MERN Stack Developer',
    },
    bn: {
      title: 'মেহেদী হাসান - সিনিয়র সফটওয়্যার ইঞ্জিনিয়ার | ফুল স্ট্যাক ডেভেলপার',
      description: '১০+ বছরের অভিজ্ঞতা সহ ফুল স্ট্যাক ডেভেলপমেন্টে বিশেষজ্ঞ অভিজ্ঞ সফটওয়্যার ইঞ্জিনিয়ার। React, Next.js, Node.js, Express এবং স্কেলেবল SaaS অ্যাপ্লিকেশনে দক্ষ। ঢাকা, বাংলাদেশে অবস্থিত।',
      keywords: 'মেহেদী হাসান, সফটওয়্যার ইঞ্জিনিয়ার, ফুল স্ট্যাক ডেভেলপার, React ডেভেলপার, Next.js, Node.js, JavaScript, TypeScript, বাংলাদেশ ডেভেলপার, ওয়েব ডেভেলপার ঢাকা',
    }
  };

  const content = metadata[locale] || metadata.en;

  return {
    title: content.title,
    description: content.description,
    keywords: content.keywords,
    authors: [{ name: 'Mehedi Hasan', url: 'https://mehedihasansumit.com' }],
    creator: 'Mehedi Hasan',
    publisher: 'Mehedi Hasan',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'bn' ? 'bn_BD' : 'en_US',
      url: `https://mehedihasansumit.com/${locale}`,
      siteName: 'Mehedi Hasan Portfolio',
      title: content.title,
      description: content.description,
      images: [
        {
          url: 'https://mehedihasansumit.com/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Mehedi Hasan - Senior Software Engineer Portfolio',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: content.title,
      description: content.description,
      images: ['https://mehedihasansumit.com/og-image.png'],
      creator: '@mehedi_hasan_sumit',
    },
    alternates: {
      canonical: `https://mehedihasansumit.com/${locale}`,
      languages: {
        en: 'https://mehedihasansumit.com/en',
        bn: 'https://mehedihasansumit.com/bn',
      },
    },
    verification: {
      google: 'your-google-site-verification-code',
    },
  };
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  // Validate locale
  if (!['en', 'bn'].includes(locale)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  // Structured Data (JSON-LD)
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Mehedi Hasan',
    jobTitle: 'Senior Software Engineer (Team Lead)',
    description: 'Senior Software Engineer specializing in Full Stack Development',
    url: 'https://mehedihasansumit.com',
    image: 'https://mehedihasansumit.com/profile.jpg',
    email: 'mehedihasansumit@gmail.com',
    telephone: '+8801776912033',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Trimohoni, Khilgaon',
      addressLocality: 'Dhaka',
      postalCode: '1214',
      addressCountry: 'BD',
    },
    worksFor: {
      '@type': 'Organization',
      name: 'V2 Technologies Limited',
    },
    sameAs: [
      'https://github.com/mehedihasansumit',
      'https://www.linkedin.com/in/mehedi-hasan-103621210',
      'https://www.facebook.com/mehedihasan.sumit.5',
      'https://www.instagram.com/mehedi_hasan_sumit/',
    ],
    knowsAbout: [
      'JavaScript',
      'TypeScript',
      'React.js',
      'Next.js',
      'Node.js',
      'Express.js',
      'NestJS',
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'Docker',
      'Full Stack Development',
      'Software Engineering',
    ],
  };

  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="theme-color" content="#0a192f" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-slate-50 dark:bg-slate-900 min-h-screen">
        <ThemeProvider>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
