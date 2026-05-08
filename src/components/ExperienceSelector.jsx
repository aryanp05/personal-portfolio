import React, { useMemo, useRef, useState } from "react";
import { EXPERIENCES } from "../constants";
import { AnimatePresence, motion } from "framer-motion";

import bitgoLogo from "../assets/bitgo.webp";
import shopifyLogo from "../assets/shopify.png";
import leapAPLogo from "../assets/leapAP.jpeg";
import hypedocsLogo from "../assets/hypedocs.jpeg";
import incraftablesLogo from "../assets/incraftables.png";
import neonicwrapsLogo from "../assets/neonicwraps.jpeg";

import BitGoDetails from "./experience/BitGoDetails";
import { BITGO_BLOCKS } from "./experience/bitgoContent";
const ExperienceSelector = ({ experiences, selectedId, onSelect, compact = false }) => {
    return (
      <div
        className={[
          compact
            ? "grid w-full grid-cols-6 gap-1.5 rounded-2xl border border-neutral-800/70 bg-neutral-950/60 p-1.5"
            : "grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-6"
        ].join(" ")}
      >
        {experiences.map((experience) => {
          const isSelected = selectedId === experience.id;
  
          return (
            <button
              key={experience.id}
              type="button"
              onClick={() => onSelect(experience.id)}
              className={[
                "group relative min-w-0 text-left transition-all duration-300",
                compact
                  ? "flex flex-col items-center justify-center rounded-xl px-1.5 py-2 text-center"
                  : "rounded-2xl border p-4",
                isSelected
                  ? compact
                    ? "bg-white text-black shadow-md shadow-white/10"
                    : "border-purple-400/70 bg-gradient-to-br from-purple-500/20 via-neutral-950 to-yellow-500/10"
                  : compact
                    ? "bg-neutral-900/80 text-neutral-300 hover:bg-neutral-800"
                    : "border-neutral-800 bg-neutral-950/40 hover:border-neutral-600 hover:bg-neutral-900/50",
              ].join(" ")}
            >
              <div
                className={[
                  "flex min-w-0 items-center",
                  compact ? "flex-col gap-1.5" : "gap-3",
                ].join(" ")}
              >
                <img
                  src={experience.logo}
                  alt={`${experience.company} logo`}
                  className={[
                    "shrink-0 rounded-lg object-cover",
                    compact ? "h-7 w-7" : "h-11 w-11",
                  ].join(" ")}
                />
  
                <div className="min-w-0">
                  <div
                    className={[
                      "truncate font-semibold",
                      compact ? "max-w-[58px] text-[10px] leading-tight" : "text-sm text-neutral-100",
                      compact && isSelected ? "text-black" : "",
                    ].join(" ")}
                  >
                    {compact ? experience.compactLabel || experience.company : experience.company}
                  </div>
  
                  {!compact && (
                    <div className="mt-1 truncate text-xs text-neutral-400">
                      {experience.shortRole}
                    </div>
                  )}
                </div>
              </div>
  
              {!compact && (
                <div className="mt-3 text-xs text-neutral-500">
                  {experience.duration}
                </div>
              )}
  
              {isSelected && !compact && (
                <motion.div
                  layoutId="experience-selector-glow"
                  className="absolute inset-0 -z-10 rounded-2xl bg-purple-500/10 blur-xl"
                />
              )}
            </button>
          );
        })}
      </div>
    );
  };

  const ShopifyDetails = ({ blocks, expanded, onToggle }) => {
    return (
      <div className="mt-10 space-y-8">
        <motion.div
          layout
          className="relative overflow-hidden rounded-3xl border border-green-400/20 bg-gradient-to-br from-green-500/10 via-neutral-950 to-emerald-500/10 p-6 shadow-2xl shadow-green-950/20 backdrop-blur lg:p-8"
        >
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-green-500/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
  
          <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
            <div>
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-green-400/20 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-300">
                  Compliance
                </span>
                <span className="rounded-full border border-green-400/20 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-300">
                  Payments
                </span>
                <span className="rounded-full border border-green-400/20 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-300">
                  Fraud Detection
                </span>
                <span className="rounded-full border border-green-400/20 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-300">
                  Risk Systems
                </span>
              </div>
  
              <h3 className="text-3xl font-bold tracking-tight text-neutral-100 lg:text-4xl">
                Built compliance, fraud, and risk infrastructure for merchant
                verification at scale.
              </h3>
  
              <p className="mt-4 max-w-3xl leading-relaxed text-neutral-300/85">
                My work focused on improving identity verification quality,
                migrating sensitive verification data to deterministic encryption,
                enriching fraud workflows with vendor data, and reducing
                onboarding friction for high-trust merchants without weakening
                compliance controls.
              </p>
            </div>
  
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-green-400/15 bg-white/[0.03] p-4 shadow-lg shadow-black/20">
                <div className="bg-gradient-to-r from-green-300 via-emerald-400 to-teal-300 bg-clip-text text-2xl font-bold text-transparent">
                  +25%
                </div>
                <div className="mt-1 text-sm leading-relaxed text-neutral-400">
                  fraud detection accuracy
                </div>
              </div>
  
              <div className="rounded-2xl border border-green-400/15 bg-white/[0.03] p-4 shadow-lg shadow-black/20">
                <div className="bg-gradient-to-r from-green-300 via-emerald-400 to-teal-300 bg-clip-text text-2xl font-bold text-transparent">
                  -18%
                </div>
                <div className="mt-1 text-sm leading-relaxed text-neutral-400">
                  false positives
                </div>
              </div>
  
              <div className="rounded-2xl border border-green-400/15 bg-white/[0.03] p-4 shadow-lg shadow-black/20">
                <div className="bg-gradient-to-r from-green-300 via-emerald-400 to-teal-300 bg-clip-text text-2xl font-bold text-transparent">
                  0 downtime
                </div>
                <div className="mt-1 text-sm leading-relaxed text-neutral-400">
                  deterministic encryption migration
                </div>
              </div>
  
              <div className="rounded-2xl border border-green-400/15 bg-white/[0.03] p-4 shadow-lg shadow-black/20">
                <div className="bg-gradient-to-r from-green-300 via-emerald-400 to-teal-300 bg-clip-text text-2xl font-bold text-transparent">
                  -30%
                </div>
                <div className="mt-1 text-sm leading-relaxed text-neutral-400">
                  enterprise onboarding friction
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <DetailsToggle expanded={expanded} onToggle={onToggle} />

        {expanded &&
          blocks.map((block) => (
            <motion.div
              key={block.title}
              layout
              className="overflow-hidden rounded-2xl border border-neutral-800/60 bg-neutral-950/30 p-6 backdrop-blur lg:p-8"
            >
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.45fr_0.55fr]">
                <div>
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    {block.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-green-400/20 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl font-semibold tracking-tight text-neutral-100">
                    {block.title}
                  </h3>

                  <ul className="mt-4 list-disc space-y-3 pl-5 leading-relaxed text-neutral-300/85">
                    {block.description.map((item, idx) => (
                      <li key={`${block.title}-desc-${idx}`}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-neutral-800/60 bg-black/20 p-5">
                  <div className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
                    Impact
                  </div>

                  <div className="mt-4 space-y-4">
                    {block.metrics.map((metric) => (
                      <div key={`${block.title}-${metric.label}`}>
                        <div className="bg-gradient-to-r from-green-300 via-emerald-400 to-teal-300 bg-clip-text text-2xl font-bold text-transparent">
                          {metric.value}
                        </div>
                        <div className="mt-1 text-sm leading-relaxed text-neutral-400">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
      </div>
    );
  };

const experienceThemes = {
  leapap: {
    tag: "border-orange-400/20 bg-orange-500/10 text-orange-300",
    metricText: "from-orange-300 via-amber-400 to-red-400",
    hero: "from-orange-500/10 via-neutral-950 to-red-500/10",
    glow: "bg-orange-500/10",
  },
  hypedocs: {
    tag: "border-violet-400/20 bg-violet-500/10 text-violet-300",
    metricText: "from-violet-300 via-fuchsia-400 to-purple-400",
    hero: "from-violet-500/10 via-neutral-950 to-fuchsia-500/10",
    glow: "bg-violet-500/10",
  },
  incraftables: {
    tag: "border-rose-400/20 bg-rose-500/10 text-rose-300",
    metricText: "from-rose-300 via-red-400 to-orange-400",
    hero: "from-rose-500/10 via-neutral-950 to-red-500/10",
    glow: "bg-rose-500/10",
  },
  neonic: {
    tag: "border-cyan-400/20 bg-cyan-500/10 text-cyan-300",
    metricText: "from-cyan-300 via-teal-400 to-emerald-400",
    hero: "from-cyan-500/10 via-neutral-950 to-emerald-500/10",
    glow: "bg-cyan-500/10",
  },
  default: {
    tag: "border-purple-400/20 bg-purple-500/10 text-purple-300",
    metricText: "from-purple-300 via-pink-400 to-yellow-300",
    hero: "from-purple-500/10 via-neutral-950 to-yellow-500/10",
    glow: "bg-purple-500/10",
  },
};

const ThemedHighlightsDetails = ({ experience, expanded, onToggle }) => {
  const theme = experienceThemes[experience.theme] || experienceThemes.default;
  return (
    <div className="mt-10 space-y-8">
      <motion.div
        layout
        className={`relative overflow-hidden rounded-3xl border border-neutral-800/70 bg-gradient-to-br ${theme.hero} p-6 shadow-xl shadow-black/20 backdrop-blur lg:p-8`}
      >
        <div className={`absolute -right-24 -top-24 h-64 w-64 rounded-full blur-3xl ${theme.glow}`} />
        <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <div className="mb-4 flex flex-wrap gap-2">
              {(experience.tags || []).map((tag) => (
                <span
                  key={tag}
                  className={`rounded-full border px-3 py-1 text-xs font-medium ${theme.tag}`}
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="text-3xl font-bold tracking-tight text-neutral-100">
              {experience.headline || "Highlights"}
            </h3>
            {experience.summary && (
              <p className="mt-4 max-w-3xl leading-relaxed text-neutral-300/85">
                {experience.summary}
              </p>
            )}
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {(experience.metrics || []).map((metric) => (
              <div
                key={`${experience.id}-${metric.label}`}
                className="rounded-2xl border border-neutral-800/60 bg-black/20 p-4"
              >
                <div
                  className={`bg-gradient-to-r ${theme.metricText} bg-clip-text text-2xl font-bold text-transparent`}
                >
                  {metric.value}
                </div>
                <div className="mt-1 text-sm leading-relaxed text-neutral-400">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <DetailsToggle expanded={expanded} onToggle={onToggle} />

      {expanded && (
        <motion.div
          layout
          className="overflow-hidden rounded-3xl border border-neutral-800/70 bg-neutral-950/40 p-6 shadow-xl shadow-black/20 backdrop-blur lg:p-8"
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.45fr_0.55fr]">
            <div>
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
                Key Contributions
              </div>
              <ul className="list-disc space-y-3 pl-5 leading-relaxed text-neutral-300/85">
                {(experience.description || []).map((point, index) => (
                  <li key={`${experience.id}-point-${index}`}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-neutral-800/60 bg-black/20 p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
                Technologies
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {(experience.technologies || []).map((tech) => (
                  <span
                    key={tech}
                    className={`rounded-full border px-3 py-1.5 text-sm font-medium ${theme.tag}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

const StandardExperienceDetails = ({ experience, expanded, onToggle }) => {
  const matchedExperience = EXPERIENCES.find((item) =>
    experience.matchNames.some((name) =>
      item.company?.toLowerCase().includes(name.toLowerCase())
    )
  );

  const description = matchedExperience?.description || experience.description || [];
  const visible = expanded ? description : description.slice(0, 2);

  return (
    <div className="mt-10 rounded-2xl border border-neutral-800/60 bg-neutral-950/30 p-6 backdrop-blur lg:p-8">
      <h3 className="text-2xl font-semibold tracking-tight text-neutral-100">
        Highlights
      </h3>

      <ul className="mt-4 list-disc space-y-3 pl-5 leading-relaxed text-neutral-300/85">
        {visible.map((point, index) => (
          <li key={`${experience.id}-point-${index}`}>{point}</li>
        ))}
      </ul>

      {description.length > 2 && (
        <DetailsToggle expanded={expanded} onToggle={onToggle} />
      )}
    </div>
  );
};

const TechStackBar = ({ technologies = [] }) => {
    if (!technologies.length) return null;
  
    return (
      <motion.div
        key={technologies.join("-")}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="mt-8 rounded-2xl border border-neutral-800/60 bg-neutral-950/40 p-4 backdrop-blur"
      >
        <div className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
          Technologies & Tools
        </div>
  
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-purple-400/20 bg-purple-500/10 px-3 py-1.5 text-sm font-medium text-purple-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    );
  };

const Experience = () => {
  const [selectedId, setSelectedId] = useState("bitgo");
  const headerRef = useRef(null);
  const [detailsExpanded, setDetailsExpanded] = useState(false);

  const scrollToHeader = () => {
    const el = headerRef.current;
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 90;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const bitgoBlocks = useMemo(() => BITGO_BLOCKS, []);

  const shopifyBlocks = useMemo(
    () => [
      {
        title: "Distributed Compliance Orchestration Platform",
        tags: ["Compliance", "IDV", "Event-driven"],
        description: [
          "Developed a distributed compliance orchestration platform with event-driven pipelines that centralized policy rules and automated enforcement across merchant sites, ensuring consistent regulatory compliance and reliable execution at scale.",
          "Propagated phone number and email data through IDV endpoints connected to third-party verification APIs, improving assessment quality while safely handling nullable user data across merchant records.",
        ],
        metrics: [
          { value: "Centralized", label: "policy enforcement across merchant sites" },
          { value: "Safer IDV", label: "with phone and email enrichment" },
          { value: "At scale", label: "reliable execution across compliance flows" },
        ],
      },
      {
        title: "Deterministic Encryption Migration",
        tags: ["Database Migration", "Encryption", "Zero downtime"],
        description: [
          "Led a multi-stage database schema migration from a legacy non-deterministic encryption model to deterministic encryption, enabling queryable encrypted attributes across verification workflows.",
          "Coordinated a 3-phase deprecation across high-traffic payment systems by making legacy encrypted columns nullable, preventing new writes, updating distributed services, and safely removing deprecated database infrastructure.",
          "Refactored related models, accessors, maintenance tasks, and tests to guarantee seamless integration in high-throughput payment systems with zero-downtime operations.",
        ],
        metrics: [
          { value: "3-phase", label: "safe migration and deprecation plan" },
          { value: "0 downtime", label: "across high-traffic payment systems" },
          { value: "Queryable", label: "deterministic encrypted attributes" },
        ],
      },
      {
        title: "Fraud Detection Workflow Enhancements",
        tags: ["Fraud", "GraphQL", "Third-party APIs"],
        description: [
          "Architected enhanced fraud detection workflows by integrating additional vendor data across verification endpoints and third-party APIs while maintaining backward compatibility for existing consumers.",
          "Connected services through deterministic encrypted data and exposed additional vendor attributes across GraphQL endpoints, improving fraud decision quality across merchant verification flows.",
          "Improved fraud detection accuracy by 25% and reduced false positives by 18% through richer verification signals and safer data flow design.",
        ],
        metrics: [
          { value: "+25%", label: "fraud detection accuracy" },
          { value: "-18%", label: "false positives" },
          { value: "GraphQL", label: "vendor data exposed across endpoints" },
        ],
      },
      {
        title: "Risk-aware Merchant Segmentation",
        tags: ["Risk Systems", "Ruby", "Merchant Onboarding"],
        description: [
          "Designed an intelligent merchant segmentation system using risk-based classification algorithms to identify high-trust merchant categories and bypass unnecessary verification flows.",
          "Built segmentation pipelines in Ruby, SQL, and GraphQL using trust signals for Enterprise SRE support and Sales-Assisted Plus upgrades, reducing onboarding friction for trusted merchants.",
          "Reduced enterprise onboarding friction by 60% and support escalations by 40% while preserving consistent downstream verification outputs for existing systems.",
        ],
        metrics: [
          { value: "-60%", label: "enterprise onboarding friction" },
          { value: "-40%", label: "support escalations" },
          { value: "Risk-aware", label: "high-trust merchant classification" },
        ],
      },
      {
        title: "Legacy Feature Flag & Infrastructure Cleanup",
        tags: ["Tech Debt", "Testing", "Infrastructure"],
        description: [
          "Systematically retired legacy feature flags and deprecated infrastructure by removing stale Shopify Payments test-mode flag dependencies across application code, GraphQL, and test suites.",
          "Refactored flag-dependent logic to keep the behavior permanently enabled, eliminating redundant conditional paths and simplifying future maintenance.",
          "Reduced codebase complexity by 15% while ensuring comprehensive test coverage and preserving production-safe behavior during rollout.",
        ],
        metrics: [
          { value: "-15%", label: "codebase complexity" },
          { value: "Removed", label: "legacy feature flag paths" },
          { value: "Covered", label: "updated tests for regression safety" },
        ],
      },
    ],
    []
  );

  const experiences = useMemo(
    () => [
        {
            id: "bitgo",
            logo: bitgoLogo,
            company: "BitGo",
            compactLabel: "BitGo",
            role: "Trade Software Engineer Intern",
            shortRole: "Trade SWE",
            duration: "Jan 2026 – Apr 2026",
            matchNames: ["BitGo"],
            type: "bitgo",
            technologies: [
                "Go",
                "Market Data",
                "Order Books",
                "Trade Engine",
                "Data Producers",
                "Publishers",
                "Kafka",
                "Kubernetes",
                "TypeScript",
                "React",
                "GraphQL",
                "PostgreSQL",
                "Redis",
                "WebSockets",
                "OpenTelemetry",
                "Product Registry",
                "Trade Systems",
                "Distributed Systems",
                "Low-latency Systems",
              ],
          },
      {
        id: "shopify",
        logo: shopifyLogo,
        company: "Shopify",
        compactLabel: "Shopify",
        role: "Software Engineer Intern",
        shortRole: "SWE Intern",
        duration: "May 2025 – Aug 2025",
        matchNames: ["Shopify"],
        type: "shopify",
        technologies: [
          "Ruby",
          "Rails",
          "GraphQL",
          "SQL",
          "Kafka",
          "Third-party APIs",
          "Database Migrations",
          "Deterministic Encryption",
          "Fraud Detection",
          "Compliance",
          "Payments",
        ],
      },
      {
        id: "leapap",
        logo: leapAPLogo,
        company: "LeapAP",
        compactLabel: "LeapAP",
        role: "Software Engineer Intern",
        shortRole: "SWE Intern",
        duration: "Jan 2025 – Apr 2025",
        matchNames: ["Leap AP"],
        type: "themed",
        theme: "leapap",
        headline: "Built secure AP automation software and production-ready backend systems.",
        summary:
          "Worked on large-scale vendor payment and accounts payable automation software, helping support property management companies across Canada and the United States while maintaining strong production reliability.",
        tags: ["Fintech", "AP Automation", "Backend", "Production Systems"],
        metrics: [
          { value: "30+", label: "property management companies supported" },
          { value: "Secure", label: "vendor transaction and AP workflows" },
          { value: "Prod Ops", label: "active monitoring and issue resolution" },
        ],
        description: [
          "Developed secure software to facilitate large-scale vendor financial transactions and accounts payable automation within an Agile-based team using Node.js and Express for 30+ property management companies in Canada and the United States.",
          "Monitored and maintained system infrastructure and production software integrity using GitLab, Grafana, and Graylog, troubleshooting and resolving integration failures to ensure minimal downtime and maximum user efficiency.",
          "Individually designed, implemented, tested, and monitored new software across local, development, and production environments.",
        ],
        technologies: ["Node.js", "Express", "GitLab", "Grafana", "Graylog"],
      },
      {
        id: "hypedocs",
        logo: hypedocsLogo,
        company: "HypeDocs",
        compactLabel: "HypeDocs",
        role: "Software Engineer Intern",
        shortRole: "SWE Intern",
        duration: "May 2024 – Aug 2024",
        matchNames: ["Hype Docs"],
        type: "themed",
        theme: "hypedocs",
        headline: "Improved backend performance and shipped client-driven product features.",
        summary:
          "Focused on backend performance, async data access, and rapid feature delivery, helping improve API responsiveness and reduce time to production.",
        tags: ["Backend", "Performance", "Async Programming", "Serverless"],
        metrics: [
          { value: "+25%", label: "runtime efficiency improvement" },
          { value: "-48%", label: "query time reduction" },
          { value: "Faster", label: "ship-to-production cycle" },
        ],
        description: [
          "Refactored backend code to optimize runtime efficiency and implemented asynchronous programming with bulk data requests on Firebase for fast API calls, improving code runtime by 25% and reducing query times by 48%.",
          "Individually designed and implemented new product features based on client requests leveraging Node.js and the Slack API.",
          "Seamlessly developed and thoroughly tested new product functionality with serverless functions using Netlify, integrating new features into main branches and deploying code more efficiently.",
        ],
        technologies: ["Node.js", "Firebase", "Slack API", "Bubble", "Netlify"],
      },
      {
        id: "incraftables",
        logo: incraftablesLogo,
        company: "InCraftables",
        compactLabel: "InCraft",
        role: "Software & AI Engineer Intern",
        shortRole: "AI / SWE",
        duration: "May 2023 – Aug 2023",
        matchNames: ["Incraftables"],
        type: "themed",
        theme: "incraftables",
        headline: "Built AI-driven recommendation systems to improve e-commerce conversion.",
        summary:
          "Worked at the intersection of machine learning and product engineering, using browsing behavior, transaction data, and recommendation logic to increase revenue and engagement.",
        tags: ["AI", "TensorFlow", "E-commerce", "Recommendations"],
        metrics: [
          { value: "+18%", label: "average order value" },
          { value: "+54%", label: "products browsed per session" },
          { value: "DNN", label: "user behavior modeling pipeline" },
        ],
        description: [
          "Researched and implemented a DNN with TensorFlow to analyze user browsing behavior and transaction history to adjust products shown on the homepage and suggest add-ons at checkout, increasing average order value by 18%.",
          "Created JavaScript elements to collect user interaction data and vectorized products to encode attributes such as price, popularity, and ratings to train the AI model, increasing products browsed per session by 54%.",
          "Preprocessed data using Python and efficiently stored it in SQL databases to create a robust training dataset.",
        ],
        technologies: ["Python", "JavaScript", "TensorFlow", "HTML", "SQL"],
      },
      {
        id: "neonic",
        logo: neonicwrapsLogo,
        company: "Neonic Wraps",
        compactLabel: "Neonic",
        role: "Founder",
        shortRole: "Founder",
        duration: "Sep. 2020 – Nov. 2021",
        matchNames: ["Neonic Wraps"],
        type: "themed",
        theme: "neonic",
        headline: "Built and launched an e-commerce business from the ground up.",
        summary:
          "Created and operated a Shopify-based online business, handling the website, inventory, growth, and marketing while generating meaningful early sales traction.",
        tags: ["Founder", "E-commerce", "Shopify", "Marketing"],
        metrics: [
          { value: "$10k+", label: "sales generated" },
          { value: "End-to-end", label: "website, inventory, and operations" },
          { value: "Growth", label: "influencer and digital marketing campaigns" },
        ],
        description: [
          "Designed a full-stack website with HTML and managed online MongoDB inventory while performing database queries using SQL.",
          "Launched and operated a Shopify e-commerce business selling a diverse range of tech products, achieving $10k+ in sales.",
          "Managed advertising campaigns through digital marketing channels, including influencer partnership promotion, to drive sales.",
        ],
        technologies: ["Entrepreneurship", "HTML", "CSS", "JavaScript", "SQLite", "MongoDB", "Shopify"],
      },
    ],
    []
  );

  const selectedExperience =
    experiences.find((experience) => experience.id === selectedId) || experiences[0];

    const matchedExperience = EXPERIENCES.find((item) =>
        selectedExperience.matchNames?.some((name) =>
          item.company?.toLowerCase().includes(name.toLowerCase())
        )
      );
      
      const selectedTechnologies =
        selectedExperience.technologies?.length > 0
          ? selectedExperience.technologies
          : matchedExperience?.technologies || [];

  return (
    <div id="experience" className="mx-5 border-b border-neutral-900 pb-16 pt-2">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -75 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        className="my-20 text-center text-5xl font-bold"
      >
        Experience
      </motion.h2>

      <div className="mx-auto max-w-7xl">
        <div
          ref={headerRef}
          className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedExperience.id}-header`}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="flex items-start gap-5"
            >
              <div className="h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 shadow-lg shadow-black/30">
                <img
                  src={selectedExperience.logo}
                  alt={`${selectedExperience.company} logo`}
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <h3 className="text-4xl font-semibold tracking-tight text-neutral-100">
                    {selectedExperience.company}
                  </h3>
                  <span className="rounded-full border border-purple-400/30 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-300">
                    {selectedExperience.duration}
                  </span>
                </div>

                <p className="mt-2 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-lg font-medium tracking-tight text-transparent">
                  {selectedExperience.role}
                </p>
              </div>
            </motion.div>
            
          </AnimatePresence>
          

          <div className="w-full lg:max-w-[430px]">
            <ExperienceSelector
              experiences={experiences}
              selectedId={selectedId}
              onSelect={(id) => {
                setSelectedId(id);
                setDetailsExpanded(true);
              }}
              compact
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
            <TechStackBar
                key={`${selectedExperience.id}-tech-stack`}
                technologies={selectedTechnologies}
            />
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedExperience.id}
            initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -28, filter: "blur(6px)" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            {selectedExperience.type === "bitgo" ? (
              <BitGoDetails
                blocks={bitgoBlocks}
                expanded={detailsExpanded}
                onToggle={() => setDetailsExpanded((v) => !v)}
              />
            ) : selectedExperience.type === "shopify" ? (
              <ShopifyDetails
                blocks={shopifyBlocks}
                expanded={detailsExpanded}
                onToggle={() => setDetailsExpanded((v) => !v)}
              />
            ) : selectedExperience.type === "themed" ? (
              <ThemedHighlightsDetails
                experience={selectedExperience}
                expanded={detailsExpanded}
                onToggle={() => setDetailsExpanded((v) => !v)}
              />
            ) : (
              <StandardExperienceDetails
                experience={selectedExperience}
                expanded={detailsExpanded}
                onToggle={() => setDetailsExpanded((v) => !v)}
              />
            )}
          </motion.div>
        </AnimatePresence>

        <div className="mt-12">
          <div className="mb-4 text-center text-sm uppercase tracking-[0.35em] text-neutral-500">
            Select Experience
          </div>

          <ExperienceSelector
            experiences={experiences}
            selectedId={selectedId}
            onSelect={(id) => {
              setSelectedId(id);
              setDetailsExpanded(true);
              requestAnimationFrame(scrollToHeader);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;