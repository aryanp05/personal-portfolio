import React, { useMemo, useRef, useState } from "react";
import { EXPERIENCES } from "../constants";
import { AnimatePresence, motion } from "framer-motion";

import bitgoLogo from "../assets/bitgo.webp";
import shopifyLogo from "../assets/shopify.png";
import leapAPLogo from "../assets/leapAP.jpeg";
import hypedocsLogo from "../assets/hypedocs.jpeg";
import incraftablesLogo from "../assets/incraftables.png";
import neonicwrapsLogo from "../assets/neonicwraps.jpeg";

import b1ws1 from "../assets/bitgo/b1ws1.png";
import b1ws2 from "../assets/bitgo/b1ws2.png";
import b1cpu1 from "../assets/bitgo/b1cpu1.png";
import b1cpu2 from "../assets/bitgo/b1cpu2.png";
import b1mem1 from "../assets/bitgo/b1mem1.png";
import b1mem2 from "../assets/bitgo/b1mem2.png";
import b2s1 from "../assets/bitgo/b2s1.png";
import b2s2 from "../assets/bitgo/b1s2.png";
import b3o1 from "../assets/bitgo/b3o1.png";
import b3o2 from "../assets/bitgo/b3o2.png";
import b3o3 from "../assets/bitgo/b3o3.png";
import b4e1 from "../assets/bitgo/b4e1.png";
import b4e2 from "../assets/bitgo/b4e2.png";
import b4e3 from "../assets/bitgo/b4e3.png";

const ImageCarousel = ({ title, label, images, aspectClass = "aspect-[24/9]" }) => {
  const [idx, setIdx] = useState(0);
  const count = images.length;

  const prev = () => setIdx((v) => (v - 1 + count) % count);
  const next = () => setIdx((v) => (v + 1) % count);

  return (
    <div className="space-y-2">
      {label && <div className="text-sm font-medium text-neutral-200/90">{label}</div>}

      <div className="overflow-hidden rounded-xl border border-neutral-800/60 bg-black/30">
        <div className="relative">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${idx * 100}%)` }}
          >
            {images.map((src, i) => (
              <img
                key={`${title}-${i}`}
                src={src}
                alt={`${title} visual ${i + 1}`}
                className={`w-full flex-shrink-0 object-cover ${aspectClass}`}
                loading="lazy"
              />
            ))}
          </div>

          <button
            type="button"
            onClick={prev}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-neutral-700/60 bg-black/60 px-3 py-2 text-sm transition-colors hover:bg-black/80"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Next image"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-neutral-700/60 bg-black/60 px-3 py-2 text-sm transition-colors hover:bg-black/80"
          >
            ›
          </button>

          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
            {images.map((_, i) => (
              <button
                key={`${title}-dot-${i}`}
                type="button"
                aria-label={`Go to image ${i + 1}`}
                onClick={() => setIdx(i)}
                className={[
                  "h-2 w-2 rounded-full border border-neutral-500/60 transition-colors",
                  i === idx ? "bg-neutral-200" : "bg-neutral-200/20",
                ].join(" ")}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const LabeledImage = ({ title, label, src, aspectClass = "aspect-[24/9]" }) => {
  return (
    <div className="space-y-2">
      {label && <div className="text-sm font-medium text-neutral-200/90">{label}</div>}

      <div className="overflow-hidden rounded-xl border border-neutral-800/60 bg-black/30">
        <img
          src={src}
          alt={title}
          className={`w-full object-cover ${aspectClass}`}
          loading="lazy"
        />
      </div>
    </div>
  );
};
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

  const BitGoMetricCard = ({ value, label }) => {
    return (
      <div className="rounded-2xl border border-purple-400/15 bg-white/[0.03] p-4 shadow-lg shadow-black/20">
        <div className="bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-400 bg-clip-text text-2xl font-bold text-transparent">
          {value}
        </div>
        <div className="mt-1 text-sm leading-relaxed text-neutral-400">{label}</div>
      </div>
    );
  };
  
  const BitGoTag = ({ children }) => {
    return (
      <span className="rounded-full border border-purple-400/20 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-300">
        {children}
      </span>
    );
  };
  
  const BitGoPrChip = ({ children }) => {
    return (
      <span className="rounded-full border border-neutral-700/70 bg-neutral-900/70 px-2.5 py-1 text-[11px] font-medium text-neutral-400">
        {children}
      </span>
    );
  };
  
  const BitGoVisuals = ({ block }) => {
    if (!block.images) return null;
  
    return (
      <div className="mt-7 space-y-5">
        {block.images?.row1?.length && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {block.images.row1.slice(0, 2).map((img, idx) => (
              <div key={`${block.title}-row1-${idx}`} className="space-y-2">
                <div className="text-sm font-medium text-neutral-200/90">
                  {img.label || `Image ${idx + 1}`}
                </div>
  
                <div className="overflow-hidden rounded-xl border border-neutral-800/70 bg-black/40 shadow-xl shadow-black/30">
                  <img
                    src={img.src}
                    alt={`${block.title} visual ${idx + 1}`}
                    className="aspect-[16/9] h-full w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        )}
  
        {(block.images?.row2 || block.images?.row3) && (
          <div
            className={[
              "grid items-start gap-4",
              block.images?.row2 && block.images?.row3
                ? "grid-cols-1 lg:grid-cols-2"
                : "grid-cols-1",
            ].join(" ")}
          >
            {block.images?.row2 &&
              ("images" in block.images.row2 ? (
                <ImageCarousel
                  title={`${block.title}-row2`}
                  label={block.images.row2.label}
                  images={block.images.row2.images}
                  aspectClass={block.images.row2.aspectClass}
                />
              ) : (
                <LabeledImage
                  title={`${block.title}-row2`}
                  label={block.images.row2.label}
                  src={block.images.row2.image}
                  aspectClass={block.images.row2.aspectClass}
                />
              ))}
  
            {block.images?.row3 &&
              ("images" in block.images.row3 ? (
                <ImageCarousel
                  title={`${block.title}-row3`}
                  label={block.images.row3.label}
                  images={block.images.row3.images}
                  aspectClass={block.images.row3.aspectClass}
                />
              ) : (
                <LabeledImage
                  title={`${block.title}-row3`}
                  label={block.images.row3.label}
                  src={block.images.row3.image}
                  aspectClass={block.images.row3.aspectClass}
                />
              ))}
          </div>
        )}
      </div>
    );
  };
  
  const BitGoRuntimeFlow = ({ block }) => {
    const legacySections = block.sections || [];
    const mainSections = block.mainSections?.length
      ? block.mainSections
      : legacySections.slice(0, 2);
    const downstreamSections = block.downstreamSections?.length
      ? block.downstreamSections
      : legacySections.slice(2);

    if (!downstreamSections.length) return null;

    const renderSection = (section, index, prefix = "") => (
      <div
        key={`${block.title}-${section.title}`}
        className="rounded-2xl border border-neutral-800/70 bg-neutral-950/70 p-4"
      >
        <div className="mb-3 flex items-center gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-purple-400/30 bg-purple-500/10 text-xs font-bold text-purple-300">
            {prefix || String(index + 1).padStart(2, "0")}
          </div>
          <h4 className="text-base font-semibold text-neutral-100">
            {section.title}
          </h4>
        </div>

        <p className="text-sm leading-relaxed text-neutral-400">
          {section.body}
        </p>

        {section.points?.length > 0 && (
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-neutral-300/85">
            {section.points.map((point, pointIdx) => (
              <li key={`${section.title}-${pointIdx}`}>{point}</li>
            ))}
          </ul>
        )}
      </div>
    );

    return (
      <div className="mt-7 rounded-2xl border border-purple-400/15 bg-black/20 p-4">
        <div className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
          Runtime Update Architecture
        </div>

        {downstreamSections.length > 0 && (
          <div className="mt-6 space-y-3">
            <div className="text-sm font-semibold text-neutral-200">
              Downstream Consumers
            </div>
            <div className="grid grid-cols-1 gap-4">
              {downstreamSections.map((section, sectionIdx) =>
                renderSection(section, sectionIdx)
              )}
            </div>
          </div>
        )}
      </div>
    );
  };
  
  const DetailsToggle = ({ expanded, onToggle }) => {
    return (
      <div className="mt-7 flex justify-center">
        <button
          type="button"
          onClick={onToggle}
          className="group inline-flex items-center justify-center gap-3 rounded-full bg-neutral-950/40 px-8 py-3 text-lg font-semibold tracking-tight text-white shadow-lg shadow-black/30 backdrop-blur transition duration-300 ease-in-out hover:bg-neutral-950/60 focus:outline-none focus:ring-0"
        >
          <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            {expanded ? "Show less" : "Show more"}
          </span>
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className={[
              "h-6 w-10 transition-transform duration-300",
              expanded ? "rotate-180" : "rotate-0",
            ].join(" ")}
          >
            <path
              d="M4 9l8 8 8-8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-neutral-200/90 group-hover:text-white"
            />
          </svg>
        </button>
      </div>
    );
  };

  const BitGoDetails = ({ blocks, expanded, onToggle }) => {
    return (
      <div className="mt-10 space-y-8">
        <motion.div
          layout
          className="relative overflow-hidden rounded-3xl border border-purple-400/20 bg-gradient-to-br from-purple-500/10 via-neutral-950 to-yellow-500/10 p-6 shadow-2xl shadow-purple-950/20 backdrop-blur lg:p-8"
        >
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl" />
  
          <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
            <div>
              <div className="mb-4 flex flex-wrap gap-2">
                <BitGoTag>Trading Systems</BitGoTag>
                <BitGoTag>Market Data</BitGoTag>
                <BitGoTag>Distributed Infrastructure</BitGoTag>
                <BitGoTag>Order Books</BitGoTag>
              </div>
  
              <h3 className="text-3xl font-bold tracking-tight text-neutral-100 lg:text-4xl">
                Built high-throughput, low-latency, and resilient trading infrastructure across market data and order books.
              </h3>
  
              <p className="mt-4 max-w-3xl leading-relaxed text-neutral-300/85">
              My work centered around the end-to-end ownership of BitGo’s market data services, including leading large-scale architectural changes, scaling high-throughput trading infrastructure, and handling production on-call incidents.
              <br />
              <br />
                From optimizing low-latency order books and consolidating WebSocket infrastructure to enabling dynamic runtime configurations and building distributed systems that improved throughput and reduced memory usage, I worked across both architecture and operations to scale BitGo’s market data platform.
                </p>
            </div>
  
            <div className="grid grid-cols-2 gap-3">
              <BitGoMetricCard value="3.37K → 26" label="market data WebSocket connections" />
              <BitGoMetricCard value="-48%" label="CPU usage on market data pods" />
              <BitGoMetricCard value="-60%+" label="pod memory usage" />
              <BitGoMetricCard value="9.5K → 13K" label="market data updates/sec" />
            </div>
          </div>
        </motion.div>
  
        <DetailsToggle expanded={expanded} onToggle={onToggle} />

        {expanded &&
          blocks.map((block, index) => (
            <motion.div
              key={block.title}
              layout
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: Math.min(index * 0.04, 0.2) }}
              className="group relative overflow-hidden rounded-3xl border border-neutral-800/70 bg-neutral-950/40 p-6 shadow-xl shadow-black/20 backdrop-blur transition-all duration-300 hover:border-purple-400/30 hover:bg-neutral-950/60 lg:p-8"
            >
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-yellow-300 via-pink-400 to-purple-500 opacity-80" />
              <div className="absolute -right-32 top-10 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                  <div className="min-w-0">
                    <div className="mb-3 flex flex-wrap gap-2">
                      {block.tags?.map((tag) => (
                        <BitGoTag key={`${block.title}-${tag}`}>{tag}</BitGoTag>
                      ))}
                    </div>

                    <h3 className="text-2xl font-semibold tracking-tight text-neutral-100 lg:text-3xl">
                      {block.title}
                    </h3>

                    {block.subtitle && (
                      <p className="mt-2 max-w-3xl text-sm leading-relaxed text-neutral-400">
                        {block.subtitle}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-7 lg:grid-cols-[1.35fr_0.65fr]">
                  <div>
                    {(() => {
                      const mergedDescription = [
                        ...(block.description || []),
                        ...(block.mainSections?.flatMap((s) => s.points || []) || []),
                      ];

                      return (
                        <ul className="list-disc space-y-3 pl-5 leading-relaxed text-neutral-300/85">
                          {mergedDescription.map((item, idx) => (
                            <li key={`${block.title}-desc-${idx}`}>{item}</li>
                          ))}
                        </ul>
                      );
                    })()}

                    <BitGoRuntimeFlow block={block} />

                    {block.architecture?.length > 0 && (
                      <div className="mt-6 rounded-2xl border border-neutral-800/70 bg-black/20 p-4">
                        <div className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
                          Architecture Notes
                        </div>

                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                          {block.architecture.map((item) => (
                            <div
                              key={`${block.title}-${item.label}`}
                              className="rounded-xl border border-neutral-800/60 bg-neutral-900/40 p-3"
                            >
                              <div className="text-sm font-semibold text-neutral-200">
                                {item.label}
                              </div>
                              <div className="mt-1 text-sm leading-relaxed text-neutral-400">
                                {item.value}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1">
                    {block.metrics?.map((metric) => (
                      <BitGoMetricCard
                        key={`${block.title}-${metric.label}`}
                        value={metric.value}
                        label={metric.label}
                      />
                    ))}
                  </div>
                </div>

                <BitGoVisuals block={block} />
              </div>
            </motion.div>
          ))}
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

  const bitgoBlocks = useMemo(
    () => [
      {
        title: "Consolidated Market Data Architecture",
        subtitle:
          "A foundational rewrite of BitGo’s trade market data pipeline from one WebSocket per trust/product/exchange into a consolidated per-exchange architecture.",
        tags: ["Go", "WebSockets", "Market Data", "Fanout"],
        description: [
          "Investigated and identified large websocket connection overhead, slow processing of messages, duplicate connections, and slow REDIS writing in BitGo’s market data.",
          "Redesigned the real-time market pipeline by consolidating websocket connections from one per trust-product-exchange into a consolidated, multiplexed WebSocket model.",
          "Introduced new, specialized low-latency exchange-producers to consolidate subscriptions per exchange and optimized the publishers to write faster and dedupe trust data.",
          "Refactored the MarketDataMessageParser to map a single Talos symbol to multiple Lumina product IDs, enabling one parsed update to fan out safely across related products.",
          "Rolled out the new architecture behind a feature flag with test-to-production staging, while fixing hello/ping fanout noise and consolidated path parsing bugs.",
          "Monitored the change through each environment and identified bugs and issues early on."
        ],
        metrics: [
          { value: "3.37K → 26", label: "active Talos WebSocket connections" },
          { value: "-48%", label: "CPU usage on market data server pods" },
          { value: "-60%+", label: "pod memory usage from fewer buffers/goroutines" },
        ],
        architecture: [
          { label: "Before", value: "One stream per trust × product × exchange triplet." },
          { label: "After", value: "One stream per exchange with per-product fanout." },
          { label: "Fanout", value: "Messages partitioned by request ID hash across worker pools." },
          { label: "Rollout", value: "Feature-flagged cutover with latency parity checks." },
        ],
        images: {
          row1: [
            { src: b1ws1, label: "# of WS Connections Before" },
            { src: b1ws2, label: "# of WS Connections After" },
          ],
          row2: {
            label: "CPU of Trade-Market-Data Server",
            images: [b1cpu1, b1cpu2],
          },
          row3: {
            label: "Memory of Trade-Market-Data Server",
            images: [b1mem1, b1mem2],
          },
        },
      },
      {
        title: "Deterministic Fanout for Parallel Level 2 Order Book Processing",
        subtitle:
          "A worker-pool based fanout system that increased throughput while keeping product-level market data ordering deterministic.",
        tags: ["Concurrency", "Order Books", "Worker Pools", "Low Latency"],
        description: [
          "Engineered a deterministic fanout system to handle the larger number of messages per consolidated websocket and parallelize Level 2 order book processing across worker pools that increased market data throughput from 9.5K to 13K updates/second.",
          "Used dynamically sized worker pools to balance parallelism and overhead across exchanges and used specialized request ID processing and hashing to ensure deterministic worker allocation to eliminate contention.",
          "Separated parsing, routing, and publishing responsibilities so each exchange feed could fan out messages to interested trusts without duplicating upstream WebSocket subscriptions.",
        ],
        metrics: [
          { value: "9.5K → 13K", label: "market data updates per second" },
          { value: "Hash-based", label: "deterministic product partitioning" },
          { value: "Zero contention", label: "parallel order book processing path" },
        ],
        architecture: [
          { label: "Partitioning", value: "Request IDs hash to stable fanout workers." },
          { label: "Publisher model", value: "Level2ExchangePublisher handles product-exchange publishing." },
          { label: "Safety", value: "Product-level ordering remains stable while throughput scales." },
          { label: "Latency", value: "Receive and publish histograms used to validate parity." },
        ],
        images: {
          row2: { label: "Market Data Updates Per Second", image: b2s1 },
          row3: { label: "Receives & Publishes Per Second", image: b2s2 },
        },
      },
      {
        title: "Dynamic TradeEngineConfigs Runtime Update Layer",
        subtitle:
          "A single runtime configuration architecture that turns TradeEngineConfigs cache changes into zero-downtime updates across WebSockets, ProductRegistry, and order book systems.",
        tags: ["Dynamic Config", "Caching", "WebSockets", "Order Books", "Atomic Pointers", "Reliability"],
        description: [
          "Created a dynamic layer over the TradeEngineConfigs cache so product, trust, exchange, and trade-disabled changes could be detected without relying on startup-only snapshots.",
          "Built a TradeEngineConfigsPoller that polls the live configuration source, diffs it against the cached snapshot, and emits granular strongly typed add, update, and delete events downstream.",
          "Converted product and exchange configuration changes from restart-driven operational workflows into event-driven runtime updates while services remain online.",
          "Designed the flow so the core config layer feeds three runtime consumers: WebSocket subscriptions, ProductRegistry mappings, and order book lifecycle management.",
        ],
        downstreamSections: [
          {
            title: "WebSocket subscription updates",
            body:
              "Wired config events into the consolidated Talos WebSocket pipeline so product and exchange updates can change active market data subscriptions at runtime.",
            points: [
              "Uses Talos amend messages to add or remove product subscriptions on existing exchange connections.",
              "Bootstraps only the required producer, fanout, and publisher pipeline when a new exchange needs to come online.",
              "Avoids full service restarts for normal product add/remove workflows and keeps reconnect behavior state-safe.",
            ],
          },
          {
            title: "ProductRegistry runtime refreshes",
            body:
              "Refactored ProductRegistryService into a dynamic consumer of TradeEngineConfigs events while keeping lookup-heavy trade paths lock-free.",
            points: [
              "Rebuilds product, exchange, Talos, CoinRoutes, Plutus, and institution mapping indexes as immutable registry snapshots.",
              "Swaps the active registry using atomic.Pointer so reads remain a single lock-free pointer load.",
              "Allows product catalog updates to reach trade execution without restart-driven cache refreshes.",
            ],
          },
          {
            title: "Order book lifecycle updates",
            body:
              "Extended the same runtime update stream into order book managers so liquidity provider changes are reflected without leaving stale market data behind.",
            points: [
              "Added AddExchange and RemoveExchange flows across CombinedOrderBook and OrderBookManager.",
              "Clears exchange-specific book state immediately when an LP is removed to prevent stale liquidity from remaining visible.",
              "Uses context-cancellation-based lifecycle management for market data managers, logging services, and Pushpin publisher updates.",
            ],
          },
        ],
        metrics: [
          { value: "3 consumers", label: "WebSockets, ProductRegistry, and order books" },
          { value: "60s", label: "config polling cadence" },
          { value: "0 restarts", label: "target for product/exchange config changes" },
          { value: "Lock-free", label: "ProductRegistry hot-path reads" },
        ],
        architecture: [
          { label: "Source", value: "TradeEngineConfigs cache becomes the refreshable runtime source of truth." },
          { label: "Detection", value: "Poller diffs live DB config against cached snapshots on a fixed cadence." },
          { label: "Distribution", value: "Typed config change events fan out through registered callbacks." },
          { label: "Consumers", value: "WebSockets update subscriptions, ProductRegistry swaps maps, and order books add/remove LPs." },
        ],
      },
      {
        title: "Transaction Cost Analysis Market Data Feed",
        subtitle:
          "A dedicated market data feed for TCA with prime-org scoped caching and configurable Talos subscription options.",
        tags: ["Redis", "TCA", "Prime Org", "Market Data"],
        description: [
          "Architected a new TCA market data feed separate from the trade feed, optimized for downstream Transaction Cost Analysis consumers.",
          "Changed Redis snapshot cache keys from trust-org scoped to prime-org scoped, collapsing duplicate snapshots across multiple trusts that share the same liquidity provider.",
          "Built a new PrimeOrgProductCompositeKey, Level2SnapshotClient namespace, optional Redis batch-write support, and TCAMarketDataMetricsRegistry.",
          "Refactored WebSocketFeedOptions so trade and TCA feeds can reuse infrastructure while subscribing with different fee modes and liquidity types.",
        ],
        metrics: [
          { value: "Prime-org", label: "cache strategy to reduce duplicate snapshots" },
          { value: "Batch Redis", label: "optional pipelined snapshot writes" },
          { value: "Reusable", label: "shared producer and fanout infrastructure" },
        ],
        architecture: [
          { label: "Trade feed", value: "Firm/taker liquidity for execution paths." },
          { label: "TCA feed", value: "Indicative/raw liquidity for analysis paths." },
          { label: "Cache key", value: "primeOrg + product instead of trustOrg + product." },
          { label: "Bug fix", value: "Prime org resolved from LP institution identifier." },
        ],
      },
      {
        title: "Trade API Order Book Memory Optimization",
        subtitle:
          "Reduced allocation pressure in high-frequency WebSocket workers by reusing market data objects across publish ticks.",
        tags: ["Performance", "Go GC", "Memory", "WebSocket API"],
        description: [
          "Optimized the trade API market data WebSocket worker, which previously allocated new OrderBookManager and Level2SnapshotMessage objects on every 300ms publish tick.",
          "Introduced Reset-based object reuse for Level2SnapshotMessage, preserving backing slice capacity for bids and asks across publish cycles.",
          "Added SetSpreadManager to reuse OrderBookManager instances and contributed a generic MapInto utility for zero-allocation slice mapping with capacity-safe semantics.",
        ],
        metrics: [
          { value: "-27%", label: "memory usage improvement in hot path" },
          { value: "300ms", label: "publish tick optimized for reuse" },
          { value: "Lower GC", label: "fewer per-tick heap allocations" },
        ],
        architecture: [
          { label: "Before", value: "New snapshot and manager objects every tick." },
          { label: "After", value: "Allocate once, then Reset and reuse." },
          { label: "Slices", value: "Backing arrays preserved for bids and asks." },
          { label: "Utility", value: "MapInto enables capacity-safe zero-allocation mapping." },
        ],
      },
      {
        title: "Order Book Squares Dashboard",
        subtitle:
          "A multi-liquidity-provider order book dashboard widget for internal trading operators.",
        tags: ["React", "GraphQL", "WebSockets", "Trading UI"],
        description: [
          "Built the internal Order Book Squares dashboard from scratch, enabling operators to monitor multiple product/liquidity-provider views in compact dashboard panels.",
          "Implemented a reference-counted SubscriptionManager singleton so multiple UI squares watching the same product coalesce into a single WebSocket subscription.",
          "Replaced raw price spread with BPS spread calculation, making very tight spreads readable for stablecoins and other small-spread products.",
          "Added a page-scoped Prime Org selector through PostgreSQL, GraphQL, and React state, allowing operators to scope the dashboard to a specific legal entity.",
        ],
        metrics: [
          { value: "1 sub", label: "per product regardless of open squares" },
          { value: "BPS", label: "spread visualization for tiny tick sizes" },
          { value: "Full-stack", label: "Prime Org selector from DB to React" },
        ],
        architecture: [
          { label: "SubscriptionManager", value: "Sends subscribe on 0→1 and unsubscribe on 1→0." },
          { label: "Only button", value: "Quickly isolates one liquidity provider in a square." },
          { label: "Spread mode", value: "Scales bars by spread instead of only size." },
          { label: "Prime org filter", value: "Scopes institutions and products page-wide." },
        ],
        images: {
          row2: {
            label: "Internal Order Book Before",
            image: b3o1,
            aspectClass: "aspect-[18/9]",
          },
          row3: {
            label: "Internal Order Book After",
            images: [b3o2, b3o3],
            aspectClass: "aspect-[18/9]",
          },
        },
      },
      {
        title: "Real-time LP Health Monitoring Strip",
        subtitle:
          "A full-stack health dashboard showing whether each exchange is healthy, degraded, or offline.",
        tags: ["GraphQL", "React", "Monitoring", "LP Health"],
        description: [
          "Built an end-to-end real-time LP health monitoring strip for the internal trading dashboard, giving operators immediate visibility into exchange market data health.",
          "Implemented a GraphQL resolver that reads from the LP Status Cache and aggregates product-level state into tri-state exchange health indicators.",
          "Added optional prime-org filtering and a React strip UI that expands into product-level detail when an operator clicks an exchange.",
          "Covered the resolver behavior with backend unit tests to protect health aggregation logic from regressions.",
        ],
        metrics: [
          { value: "3 states", label: "healthy, degraded, offline" },
          { value: "Sub-second", label: "visual detection instead of log triage" },
          { value: "Drill-down", label: "exchange to product-level status" },
        ],
        architecture: [
          { label: "Data source", value: "LP Status Cache snapshot freshness." },
          { label: "Resolver", value: "Aggregates product states by exchange." },
          { label: "UI", value: "Horizontal strip with expandable product details." },
          { label: "Filtering", value: "Optional primeOrgID scope." },
        ],
        images: {
          row2: {
            label: "LP Health Strip",
            images: [b4e1, b4e2, b4e3],
            aspectClass: "aspect-[24/6]",
          },
        },
      },
      {
        title: "Historical Order Book Filtering & UX Improvements",
        subtitle:
          "A set of full-stack improvements that made historical market data filtering faster, safer, and easier to use.",
        tags: ["PostgreSQL", "GraphQL", "TypeScript", "Historical Data"],
        description: [
          "Migrated historical order book filtering from fragile string-based exchange identifiers to stable UUID-based institution filtering with a new indexed institution_id column.",
          "Added dashboard support for institution UUID filtering and two-level prime-org to institution filtering, computing intersections client-side to avoid unnecessary backend roundtrips.",
          "Improved historical order book UX by changing the default depth from 5 levels to 1, extending the dropdown to 10 levels, and adding always-present filter chips with clear Any defaults.",
          "Added bid and ask price decimal filters over JSONB-backed order book data using precise decimal comparison semantics in Go.",
        ],
        metrics: [
          { value: "UUID", label: "stable institution-based filtering" },
          { value: "1 → 10", label: "default depth reduced, max depth expanded" },
          { value: "Faster UX", label: "less data fetched on initial page load" },
        ],
        architecture: [
          { label: "Migration", value: "Added nullable institution_id and index to partitioned table." },
          { label: "GraphQL", value: "Exposed institutionId as filterable/sortable field." },
          { label: "Client", value: "Builds UUID label maps from exchange product data." },
          { label: "Cleanup", value: "Removed old string filter after migration safety window." },
        ],
      },
      {
        title: "Cumulative Order Book Depth API",
        subtitle:
          "A backward-compatible API feature for cumulative Level 2 depth across REST and WebSocket transports.",
        tags: ["REST", "WebSockets", "OpenAPI", "Decimal Math"],
        description: [
          "Delivered cumulative size as an opt-in Level 2 order book snapshot feature across both REST and WebSocket APIs.",
          "Preserved the existing price/size response format by default while allowing clients to request cumulative depth through includeCumulative.",
          "Implemented cumulative depth with decimal.Decimal arithmetic as sorted levels are traversed, avoiding precision loss for financial data.",
          "Authored OpenAPI documentation with examples for both default and cumulative response formats.",
        ],
        metrics: [
          { value: "Opt-in", label: "backward-compatible API format" },
          { value: "REST + WS", label: "supported across both transports" },
          { value: "Decimal", label: "precision-safe cumulative depth" },
        ],
        architecture: [
          { label: "Default", value: "[price, size] remains unchanged." },
          { label: "Cumulative", value: "[price, size, cumulativeSize] when requested." },
          { label: "WebSocket safety", value: "Requires unsubscribe before changing cumulative mode." },
          { label: "Docs", value: "OpenAPI examples cover both formats." },
        ],
      },
      {
        title: "Internal Trading Tooling Quality Improvements",
        subtitle:
          "Smaller but high-impact fixes that improved operator workflows, navigation, and WebSocket error visibility.",
        tags: ["Internal Tools", "Routing", "Bug Fixes", "Developer Experience"],
        description: [
          "Restructured internal dashboard navigation to surface Market Data as a first-class section with dedicated routes for order books, historical order book, and historical reference price.",
          "Removed trust-org constraints from market data pages so operators could view cross-trust exchange product data without session switching.",
          "Added contextual Market Prices deep-links from client orders into historical order book views with pre-populated product and timestamp filters.",
          "Fixed a broken Client Fill to Exchange Fill navigation path by replacing fragile manual query strings with the app’s canonical createHashSearchParams helper.",
          "Restored WebSocket validation error visibility by correcting the LuminaWebsocketClient error emitter path and adding comprehensive tests around message handling.",
        ],
        metrics: [
          { value: "1 click", label: "from order to historical market context" },
          { value: "Cross-trust", label: "market data visibility for operators" },
          { value: "137 lines", label: "WebSocket client regression test coverage" },
        ],
        architecture: [
          { label: "Navigation", value: "Dedicated Market Data route group." },
          { label: "Deep links", value: "Pre-populated filters from order context." },
          { label: "Error propagation", value: "emitError restores downstream listener visibility." },
          { label: "Routing", value: "Canonical hash search params replace fragile string building." },
        ],
      },
    ],
    []
  );

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