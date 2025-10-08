export default function sitemap() {
  const baseUrl = 'https://mehedihasansumit.com';

  const locales = ['en', 'bn'];
  const routes = [''];

  const urls = locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    }))
  );

  return urls;
}
