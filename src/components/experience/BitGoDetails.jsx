import React, { useState } from "react";
import { motion } from "framer-motion";

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
        <img src={src} alt={title} className={`w-full object-cover ${aspectClass}`} loading="lazy" />
      </div>
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
            block.images?.row2 && block.images?.row3 ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1",
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
  const mainSections = block.mainSections?.length ? block.mainSections : legacySections.slice(0, 2);
  const downstreamSections = block.downstreamSections?.length ? block.downstreamSections : legacySections.slice(2);

  if (!downstreamSections.length) return null;

  const renderSection = (section, index, prefix = "") => (
    <div key={`${block.title}-${section.title}`} className="rounded-2xl border border-neutral-800/70 bg-neutral-950/70 p-4">
      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-purple-400/30 bg-purple-500/10 text-xs font-bold text-purple-300">
          {prefix || String(index + 1).padStart(2, "0")}
        </div>
        <h4 className="text-base font-semibold text-neutral-100">{section.title}</h4>
      </div>

      <p className="text-sm leading-relaxed text-neutral-400">{section.body}</p>

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

      {mainSections.length > 0 && (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {mainSections.map((section, sectionIdx) => renderSection(section, sectionIdx))}
        </div>
      )}

      {downstreamSections.length > 0 && (
        <div className="mt-6 space-y-3">
          <div className="text-sm font-semibold text-neutral-200">Downstream Consumers</div>
          <div className="grid grid-cols-1 gap-4">
            {downstreamSections.map((section, sectionIdx) => renderSection(section, sectionIdx))}
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
          className={["h-6 w-10 transition-transform duration-300", expanded ? "rotate-180" : "rotate-0"].join(" ")}
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
                    <p className="mt-2 max-w-3xl text-sm leading-relaxed text-neutral-400">{block.subtitle}</p>
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
                            <div className="text-sm font-semibold text-neutral-200">{item.label}</div>
                            <div className="mt-1 text-sm leading-relaxed text-neutral-400">{item.value}</div>
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

export default BitGoDetails;

