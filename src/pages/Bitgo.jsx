import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import bitgoLogo from "../assets/bitgo.webp";
import b1ws1 from "../assets/bitgo/b1ws1.png";
import b1ws2 from "../assets/bitgo/b1ws2.png"
import b1cpu1 from "../assets/bitgo/b1cpu1.png"
import b1cpu2 from "../assets/bitgo/b1cpu2.png"
import b1mem1 from "../assets/bitgo/b1mem1.png"
import b1mem2 from "../assets/bitgo/b1mem2.png"
import b2s1 from "../assets/bitgo/b2s1.png"
import b2s2 from "../assets/bitgo/b1s2.png"
import b3o1 from "../assets/bitgo/b3o1.png"
import b3o2 from "../assets/bitgo/b3o2.png"
import b3o3 from "../assets/bitgo/b3o3.png"
import b4e1 from "../assets/bitgo/b4e1.png"
import b4e2 from "../assets/bitgo/b4e2.png"
import b4e3 from "../assets/bitgo/b4e3.png"

const ImageCarousel = ({ title, label, images, aspectClass = "aspect-[24/9]" }) => {
  const [idx, setIdx] = useState(0);
  const count = images.length;

  const prev = () => setIdx((v) => (v - 1 + count) % count);
  const next = () => setIdx((v) => (v + 1) % count);

  return (
    <div className="space-y-2">
      {label ? (
        <div className="text-sm font-medium text-neutral-200/90">{label}</div>
      ) : null}

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
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-neutral-700/60 bg-black/60 px-3 py-2 text-sm hover:bg-black/80 transition-colors"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next image"
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-neutral-700/60 bg-black/60 px-3 py-2 text-sm hover:bg-black/80 transition-colors"
        >
          ›
        </button>

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
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
      {label ? (
        <div className="text-sm font-medium text-neutral-200/90">{label}</div>
      ) : null}

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

const Bitgo = () => {
  const blocks = useMemo(
    () => [
      {
        title: "Consolidated Market Data Architecutre Change",
        description:
          "Redesigned BitGo’s real-time market data pipeline into a consolidated, multiplexed WebSocket model, with low-latency producers & optimized publishers to reduce connections from 3.37K → 26, lowering CPU usage by 48% and pod memory by 60%+",
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
        title: "Deterministic Fanout System for Parallel Level 2 Order Book Processing",
        description:
          "Engineered a deterministic fanout system to parallelize Level 2 order book processing across dynamically sized worker pools that increased market data throughput from 9.5K to 13k updates/second while eliminating contention & race conditions",
        images: {
          row2: { label: "Market Data Updates Per Second", image: b2s1 },
          row3: { label: "Recieves & Publishes Per Second", image: b2s2 },
        },
      },
      {
        title: "Zero-downtime Dynamic Configuration",
        description: [
          "Eliminated pod restarts for trade engine configuration changes by building a zero-downtime dynamic configuration layer over the trade engine cache that propagates real-time updates across market data WebSocket feeds, product registries, trading venues, and order books",
          "Enabled real-time WebSocket subscription updates via live amend messages, allowing dynamic addition/removal of trading products and exchange feeds without disrupting active market data streams",
          "Implemented a lock-free ProductRegistry using atomic pointer swaps to maintain real-time product-to-exchange mappings and trading permissions with zero contention on the trade execution hot path",
          "Built dynamic order book lifecycle management supporting runtime exchange add/remove with immediate stale liquidity eviction, ensuring consistent Level 2 market depth across all trading venues",
        ],
      },
      {
        title: "Trade API Order Book Optimizations",
        description:
          "Optimized the trade API order book system powering real-time Level 2 market data & creation, updates, and lifecycle management of Level 2 order books, improving memory efficiency by 27% and stabilizing latency for high-frequency order book updates",
      },
      {
        title: "Transaction Cost Analysis Market Data Feed",
        description:
          "Developed a dedicated Transaction Cost Analysis market data feed service, introducing new producers & publishers, prime-org–based caching reducing storage by 75%, and batched Redis writes to support high-throughput, low-latency indicative pricing feeds",
      },
      {
        title: "Real-time LP Health Monitoring Strip",
        description:
          "Built a real-time LP health monitoring strip for BitGo's internal trading dashboard, implementing a full-stack GraphQL resolver that aggregates per-exchange product states from the LP Status Cache into tri-state health indicators (healthy/degraded/offline) with per-exchange product-level drill-down — reducing exchange failure detection from manual log triage to sub-second visual feedback",
        images: {
          row2: {
            label: "LP Health Strip",
            images: [b4e1, b4e2, b4e3],
            aspectClass: "aspect-[24/6]",
          },
        },
      },
      {
        title: "Order Book Squares Dashboard",
        description:
          "Built BitGo's internal Order Book Squares dashboard from scratch, featuring a reference-counted SubscriptionManager singleton that coalesces multiple UI panels watching the same product into a single WebSocket subscription (O(panels) → O(distinct products)), a BPS spread visualization replacing raw price display to correctly handle sub-0.0001 tick-size products like stablecoins, and a page-scoped Prime Org selector implemented full-stack from PostgreSQL through GraphQL to React state",
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
    ],
    []
  );

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="relative h-full w-full bg-black">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
          <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]" />
        </div>
      </div>

      <div className="container mx-auto lg:px-8 mr-2 ml-2 lg:ml-16 lg:mr-16">
        <Navbar />

        <div className="pt-10 pb-16">
          <div className="flex items-start justify-between gap-6">
            <div>
              <h1 className="text-5xl font-thin tracking-tight">BitGo</h1>
              <p className="mt-3 text-neutral-300/80">
                Jan 2026 – Apr 2026 · Software Engineer Intern (Trade)
              </p>
            </div>

            <Link
              to="/"
              className="mt-3 text-sm underline underline-offset-4 hover:text-yellow-400 transition-colors whitespace-nowrap"
            >
              Back to home
            </Link>
          </div>

          <div className="mt-10 space-y-8">
            {blocks.map((block) => (
              <div
                key={block.title}
                className="border border-neutral-800/60 bg-neutral-950/30 backdrop-blur rounded-2xl p-6 lg:p-8"
              >
                {/* Top row: text + optional row1 images */}
                <div
                  className={[
                    "grid gap-8",
                    block.images?.row1?.length ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1",
                  ].join(" ")}
                >
                  <div className="flex flex-col">
                    <h2 className="text-2xl font-semibold tracking-tight">
                      {block.title}
                    </h2>

                    {Array.isArray(block.description) ? (
                      <ul className="mt-3 text-neutral-300/85 leading-relaxed space-y-2">
                        {block.description.map((item, idx) => (
                          <li key={`${block.title}-desc-${idx}`}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <div className="mt-3 text-neutral-300/85 leading-relaxed">
                        {block.description}
                      </div>
                    )}
                  </div>

                  {block.images?.row1?.length ? (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {block.images.row1.slice(0, 2).map((img, idx) => (
                          <div
                            key={`${block.title}-row1-${idx}`}
                            className="space-y-2"
                          >
                            <div className="text-sm font-medium text-neutral-200/90">
                              {img.label || `Image ${idx + 1}`}
                            </div>

                            <div className="overflow-hidden rounded-xl border border-neutral-800/60 bg-black/30">
                              <img
                                src={img.src}
                                alt={`${block.title} row 1 visual ${idx + 1}`}
                                className="h-full w-full object-cover aspect-[16/9]"
                                loading="lazy"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>

                {/* Bottom row: optional row2/row3 media across the block */}
                {block.images?.row2 || block.images?.row3 ? (
                  <div
                    className={[
                      "mt-6 grid gap-4 items-start",
                      block.images?.row2 && block.images?.row3
                        ? "grid-cols-1 sm:grid-cols-2"
                        : "grid-cols-1",
                    ].join(" ")}
                  >
                    {block.images?.row2 ? (
                      "images" in block.images.row2 ? (
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
                      )
                    ) : null}

                    {block.images?.row3 ? (
                      "images" in block.images.row3 ? (
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
                      )
                    ) : null}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bitgo;

