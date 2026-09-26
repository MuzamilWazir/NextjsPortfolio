import { siteConfig } from "@/lib/site";
import { projects } from "@/lib/projects";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteConfig.url}/#person`,
  name: siteConfig.name,
  alternateName: "Muzammil Wazir",
  jobTitle: siteConfig.role,
  description: siteConfig.description,
  url: siteConfig.url,
  image: `${siteConfig.url}${siteConfig.images.profile}`,
  email: `mailto:${siteConfig.email}`,
  address: {
    "@type": "PostalAddress",
    addressCountry: siteConfig.location.country,
    addressLocality: siteConfig.location.city,
  },
  knowsAbout: siteConfig.skills,
  knowsLanguage: ["en", "ur"],
  sameAs: [
    siteConfig.socials.linkedin,
    siteConfig.socials.github,
    siteConfig.socials.twitter,
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "email",
      email: siteConfig.email,
      availableLanguage: ["English", "Urdu"],
    },
  ],
  hasOccupation: {
    "@type": "Occupation",
    occupationLocation: {
      "@type": "Country",
      name: siteConfig.location.country,
    },
    skills: siteConfig.skills,
    title: siteConfig.role,
  },
  worksFor: {
    "@type": "Organization",
    name: "Freelance",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  url: siteConfig.url,
  name: siteConfig.name,
  alternateName: siteConfig.shortName,
  description: siteConfig.description,
  inLanguage: "en-US",
  image: `${siteConfig.url}${siteConfig.images.og.url}`,
  publisher: { "@id": `${siteConfig.url}/#person` },
};

const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${siteConfig.url}/#profilepage`,
  url: siteConfig.url,
  name: `${siteConfig.name} — ${siteConfig.role}`,
  description: siteConfig.description,
  dateModified: new Date().toISOString(),
  isPartOf: { "@id": `${siteConfig.url}/#website` },
  mainEntity: { "@id": `${siteConfig.url}/#person` },
  about: { "@id": `${siteConfig.url}/#person` },
};

const projectListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${siteConfig.url}/#projects`,
  name: "Projects by Wazir Muzammil",
  numberOfItems: projects.length,
  itemListOrder: "https://schema.org/ItemListOrderDescending",
  itemListElement: projects.map((project, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "CreativeWork",
      name: project.shortTitle,
      description: project.description,
      url: `${siteConfig.url}/projects/${project.slug}`,
      image: `${siteConfig.url}${project.image}`,
      keywords: [...project.tags, ...project.keywords].join(", "),
      genre: project.category,
      creator: { "@id": `${siteConfig.url}/#person` },
      subjectOf: {
        "@type": "SoftwareSourceCode",
        name: `${project.shortTitle} source code`,
        url: project.github,
        programmingLanguage: project.tags,
        author: { "@id": `${siteConfig.url}/#person` },
      },
    },
  })),
};

const schemas = [personSchema, websiteSchema, profilePageSchema, projectListSchema];

export default function StructuredData() {
  return (
    <>
      {schemas.map((schema) => (
        <script
          key={schema["@id"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
