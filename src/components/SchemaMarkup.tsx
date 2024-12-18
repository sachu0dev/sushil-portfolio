// components/SchemaMarkup.tsx
export function WebsiteSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sushil Kumar",
    jobTitle: "Full Stack Web Developer",
    url: "https://devbysushil.com",
    sameAs: [
      "https://www.linkedin.com/in/sachu0dev/",
      "https://github.com/sachu0dev",
      "https://x.com/sachu0dev",
    ],
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Web Development",
      "Full Stack Development",
      "Front-end Development",
      "Back-end Development",
      "Responsive Design",
      "UI/UX Design",
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "Git",
      "GitHub",
      "MongoDB",
      "Node.js",
      "Postman",
      "Docker",
      "Cloudflare Worker",
      "SaaS",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaData),
      }}
    />
  );
}
