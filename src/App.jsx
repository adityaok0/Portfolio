import React from 'react';

const highlights = [
  { value: "6+", label: "Years building enterprise software" },
  { value: "1,500+", label: "Engineers supported by governance systems" },
  { value: "70%", label: "Incident triage time reduced with AI" },
  { value: "60%", label: "Transactional DB load reduced" },
];

const strengths = [
  "Enterprise platform engineering",
  "AI assistants and workflow automation",
  "Distributed backend systems",
  "React frontends for internal products",
];

const skillGroups = [
  {
    title: "Languages",
    items: ["Java", "Python", "TypeScript", "JavaScript", "SQL", "PL/SQL"],
  },
  {
    title: "Backend",
    items: [
      "Spring Boot",
      "Microservices",
      "REST APIs",
      "Distributed Systems",
      "Hibernate",
      "API Design",
    ],
  },
  {
    title: "Frontend",
    items: ["React.js", "Redux", "TypeScript", "Responsive UI"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS", "OCI", "Docker", "Kubernetes", "Jenkins", "Rancher"],
  },
  {
    title: "AI & Observability",
    items: [
      "OpenAI",
      "Claude",
      "RAG Systems",
      "Conversational Agents",
      "Elasticsearch",
      "Kibana",
      "Grafana",
    ],
  },
];

const experience = [
  {
    company: "Oracle",
    role: "Senior Software Engineer",
    period: "Sep 2021 - Present",
    location: "Trivandrum, India",
    impact: [
      "Designed AI-powered conversational agents in Oracle ERP Payables so finance teams can query failed payments, pending invoices, and supplier discount opportunities in natural language.",
      "Delivered a modernized dynamic discounting solution for suppliers, improving latency by 15% in a high-availability multi-tenant environment.",
      "Spearheaded a Read-Only Datastore solution across ERP applications, cutting transactional database load by 60% and improving data extraction performance by 20%.",
      "Led governance and automation systems used by 1,500+ engineers globally, reducing manual code review effort by 40% and improving compliance.",
      "Built automated compliance pipelines that prevent 200+ production-impacting issues per quarter across 10,000+ artifacts.",
      "Created an AI-powered failure resolution assistant with Python and Elasticsearch, reducing incident triage time by 70%.",
    ],
  },
  {
    company: "Nissan Digital",
    role: "Software Engineer",
    period: "Aug 2019 - Sep 2021",
    location: "Trivandrum, India",
    impact: [
      "Developed a global audit automation platform used across manufacturing plants, reducing audit time by 50% and manual errors by 25%.",
      "Built full-stack products with React and Spring Boot, improving operational efficiency and reducing costs by 30%.",
      "Designed a financial workflow system for vendor invoice tracking, reducing processing time by 30%.",
      "Worked directly with global stakeholders to drive adoption of internal enterprise tools across regions.",
    ],
  },
];

const education = {
  degree: "B.Tech in Computer Science",
  years: "2015 - 2019",
  school: "College of Engineering Trivandrum (CET)",
  detail:
    "One of Kerala's premier public engineering institutions. Coursework included data structures, algorithms, operating systems, DBMS, computer networks, and software engineering.",
  project:
    "Final-year project: Malayalam Morphological Analyzer, an experimental system for splitting Malayalam words into morphemes.",
};

function SectionHeading({ eyebrow, title, copy }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy ? <p className="section-copy">{copy}</p> : null}
    </div>
  );
}

function App() {
  return (
    <div className="page-shell">
      <div className="backdrop backdrop-one" />
      <div className="backdrop backdrop-two" />

      <header className="hero">
        <nav className="topbar">
          <span className="brand">AJ</span>
          <div className="nav-links">
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#education">Education</a>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Senior Software Engineer</p>
            <h1>Building enterprise systems that scale, govern, and think.</h1>
            <p className="lede">
              I’m Aditya Jayarajan, a software engineer focused on developer
              platforms, resilient backend systems, and GenAI products that
              remove operational friction inside large organizations.
            </p>

            <div className="hero-actions">
              <a className="button primary" href="mailto:adityajayarajan97@gmail.com">
                Email Me
              </a>
              <a
                className="button secondary"
                href="https://linkedin.com/in/aditya-jayarajan"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>

            <ul className="strength-list" aria-label="Core strengths">
              {strengths.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <aside className="hero-card">
            <p className="card-kicker">At a glance</p>
            <dl className="contact-list">
              <div>
                <dt>Location</dt>
                <dd>India</dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>
                  <a href="mailto:adityajayarajan97@gmail.com">
                    adityajayarajan97@gmail.com
                  </a>
                </dd>
              </div>
              <div>
                <dt>Phone</dt>
                <dd>
                  <a href="tel:+917034346703">+91-7034346703</a>
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </header>

      <main>
        <section className="metrics" aria-label="Key metrics">
          {highlights.map((item) => (
            <article key={item.label} className="metric-card">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </section>

        <section className="section" id="about">
          <SectionHeading
            eyebrow="Profile"
            title="Enterprise engineering with measurable operational impact"
            copy="Over the last 6+ years, I’ve worked across ERP systems, governance platforms, developer tooling, and AI-driven support workflows. My focus is straightforward: reduce complexity, improve system performance, and make internal teams faster."
          />
        </section>

        <section className="section" id="experience">
          <SectionHeading
            eyebrow="Experience"
            title="Work that improved reliability, throughput, and engineering leverage"
          />

          <div className="timeline">
            {experience.map((job) => (
              <article key={`${job.company}-${job.role}`} className="timeline-card">
                <div className="timeline-header">
                  <div>
                    <p className="timeline-company">{job.company}</p>
                    <h3>{job.role}</h3>
                  </div>
                  <div className="timeline-meta">
                    <span>{job.period}</span>
                    <span>{job.location}</span>
                  </div>
                </div>

                <ul className="impact-list">
                  {job.impact.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="skills">
          <SectionHeading
            eyebrow="Toolkit"
            title="Technologies I use to ship production systems"
          />

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article key={group.title} className="skill-card">
                <h3>{group.title}</h3>
                <div className="chip-row">
                  {group.items.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="education">
          <SectionHeading
            eyebrow="Education"
            title={education.degree}
            copy={education.detail}
          />

          <article className="education-card">
            <div className="education-topline">
              <h3>{education.school}</h3>
              <span>{education.years}</span>
            </div>
            <p>{education.project}</p>
          </article>
        </section>
      </main>
    </div>
  );
}

export default App;
