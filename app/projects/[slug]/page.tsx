import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects, projectBySlug } from "@/lib/projects";
import { siteConfig } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projectBySlug(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  const title = `${project.shortTitle} — ${project.category} Project`;
  const description = project.seoDescription;
  const url = `/projects/${project.slug}`;

  return {
    title: { absolute: title },
    description,
    keywords: [...project.tags, ...project.keywords, siteConfig.name],
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      url: `${siteConfig.url}${url}`,
      siteName: siteConfig.name,
      title,
      description,
      locale: siteConfig.locale,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.imageAlt,
          type: "image/png",
          secureUrl: `${siteConfig.url}${project.image}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@Muzammil_wazir",
      creator: "@Muzammil_wazir",
      title,
      description,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.imageAlt,
          type: "image/png",
        },
      ],
    },
  };
}

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = projectBySlug(slug);

  if (!project) {
    notFound();
  }

  const url = `${siteConfig.url}/projects/${project.slug}`;
  const others = projects.filter((item) => item.slug !== project.slug);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: `${siteConfig.url}/#projects`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.shortTitle,
        item: url,
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${url}#article`,
    headline: project.title,
    name: project.title,
    description: project.description,
    url,
    mainEntityOfPage: url,
    image: `${siteConfig.url}${project.image}`,
    articleSection: project.category,
    keywords: [...project.tags, ...project.keywords].join(", "),
    inLanguage: "en-US",
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${url}#software`,
    name: project.shortTitle,
    description: project.description,
    url: project.link,
    applicationCategory: "WebApplication",
    operatingSystem: "Any",
    image: `${siteConfig.url}${project.image}`,
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    codeRepository: project.github,
    programmingLanguage: project.tags,
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={articleSchema} />
      <JsonLd data={softwareSchema} />

      <main className="pt-28 pb-20 max-w-4xl mx-auto px-4 sm:px-6">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-gray-500">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-gray-800 transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                href="/#projects"
                className="hover:text-gray-800 transition-colors"
              >
                Projects
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-gray-700 font-medium">{project.shortTitle}</li>
          </ol>
        </nav>

        <article>
          <header className="mb-10">
            <span className="inline-block text-xs font-medium uppercase tracking-wide bg-blue-50 text-blue-600 rounded-full px-3 py-1 mb-4">
              {project.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-gray-100 mb-10">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              priority
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover"
            />
          </div>

          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gray-800 text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-900 transition-colors"
            >
              View live project
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border border-gray-300 text-gray-800 px-6 py-3 rounded-xl font-medium hover:bg-gray-100 transition-colors"
            >
              View source code
            </a>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Project Overview
            </h2>
            {project.overview.map((paragraph) => (
              <p
                key={paragraph}
                className="text-gray-600 leading-relaxed mb-4"
              >
                {paragraph}
              </p>
            ))}
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              The Challenge
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {project.challenge}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              How I Solved It
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.solutions.map((solution) => (
                <div
                  key={solution.title}
                  className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm"
                >
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {solution.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Key Features
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-gray-600">
                  <svg
                    className="w-5 h-5 text-blue-600 shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Outcome &amp; Takeaways
            </h2>
            <p className="text-gray-600 leading-relaxed">{project.outcome}</p>
          </section>
        </article>

        <section className="border-t border-gray-200 pt-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            More Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {others.map((other) => (
              <Link
                key={other.slug}
                href={`/projects/${other.slug}`}
                className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-gray-900 mb-1">
                  {other.shortTitle}
                </h3>
                <p className="text-sm text-gray-600">{other.category}</p>
              </Link>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center bg-gray-800 text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-900 transition-colors"
            >
              Hire me for a project like this
            </Link>
            <Link
              href="/#projects"
              className="inline-flex items-center border border-gray-300 text-gray-800 px-6 py-3 rounded-xl font-medium hover:bg-gray-100 transition-colors"
            >
              Back to all projects
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
