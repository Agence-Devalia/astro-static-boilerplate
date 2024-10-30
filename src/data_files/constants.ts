import ogImageSrc from "@images/social.webp";

export const SITE = {
  title: "Titre du site",
  tagline: "Complement",
  description: "",
  description_short: "",
  url: "https://site_url",
  author: "Devalia",
};


export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "fr-FR",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "fr_FR",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}`,
  description: "",
  image: ogImageSrc,
};