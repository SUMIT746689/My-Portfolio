export async function generateMetadata({ params }) {
  const { locale } = await params;

  const metadata = {
    en: {
      title: 'PostgreSQL Architecture - Complete Guide | Mehedi Hasan',
      description: 'Deep dive into PostgreSQL architecture: process model, memory management, WAL, MVCC, and storage layer. Learn how PostgreSQL handles concurrency and ensures durability.',
      keywords: 'PostgreSQL, PostgreSQL Architecture, Database Architecture, MVCC, WAL, Shared Buffers, Postmaster, Backend Process, Database Performance, PostgreSQL Internals',
    },
    bn: {
      title: 'পোস্টগ্রেএসকিউএল আর্কিটেকচার - সম্পূর্ণ গাইড | মেহেদী হাসান',
      description: 'পোস্টগ্রেএসকিউএল আর্কিটেকচারের গভীর বিশ্লেষণ: প্রসেস মডেল, মেমরি ম্যানেজমেন্ট, WAL, MVCC এবং স্টোরেজ লেয়ার। জানুন কিভাবে PostgreSQL কনকারেন্সি পরিচালনা করে এবং ডিউরেবিলিটি নিশ্চিত করে।',
      keywords: 'PostgreSQL, পোস্টগ্রেএসকিউএল আর্কিটেকচার, ডাটাবেস আর্কিটেকচার, MVCC, WAL, শেয়ার্ড বাফার, পোস্টমাস্টার, ব্যাকএন্ড প্রসেস, ডাটাবেস পারফরমেন্স',
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
      type: 'article',
      locale: locale === 'bn' ? 'bn_BD' : 'en_US',
      url: `https://mehedihasansumit.com/${locale}/articles/architectures/postgres`,
      siteName: 'Mehedi Hasan Portfolio',
      title: content.title,
      description: content.description,
      publishedTime: '2025-01-15T00:00:00Z',
      modifiedTime: '2025-01-15T00:00:00Z',
      authors: ['Mehedi Hasan'],
      tags: content.keywords.split(', '),
      images: [
        {
          url: 'https://mehedihasansumit.com/articles/postgres-architecture.png',
          width: 1200,
          height: 630,
          alt: 'PostgreSQL Architecture Diagram',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: content.title,
      description: content.description,
      images: ['https://mehedihasansumit.com/articles/postgres-architecture.png'],
      creator: '@mehedi_hasan_sumit',
    },
    alternates: {
      canonical: `https://mehedihasansumit.com/${locale}/articles/architectures/postgres`,
      languages: {
        en: 'https://mehedihasansumit.com/en/articles/architectures/postgres',
        bn: 'https://mehedihasansumit.com/bn/articles/architectures/postgres',
      },
    },
  };
}
