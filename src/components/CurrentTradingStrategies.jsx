import React from "react";
import { motion } from "framer-motion";

const strategies = [
  {
    number: "01",
    title: "Macro Volatility Futures",
    description:
      "Developing a strategy to capture sharp price movements around macro events like CPI and PCE by dynamically shorting or longing 1-month VIX futures.",
    tags: ["CPI/PCE", "VIX Futures", "Macro Vol"],
  },
  {
    number: "02",
    title: "Commodity Momentum",
    description:
      "Developing a commodity-futures momentum strategy to detect sector breakouts, abnormal growth regimes, and trend acceleration across different commodity markets.",
    tags: ["Momentum", "Commodities", "Breakouts"],
  },
  {
    number: "03",
    title: "Earnings ETF Arbitrage",
    description:
      "Developing an arbitrage strategy to identify and capture pricing dislocations caused by after-hours earnings reports and ETFs that track affected companies or sectors.",
    tags: ["Earnings", "ETFs", "After Hours"],
  },
  {
    number: "04",
    title: "Crypto ETF Arbitrage",
    description:
      "Developing an arbitrage strategy between crypto coin ETFs and their underlying crypto assets to capture pricing differences during market close while crypto remains tradable.",
    tags: ["Crypto", "ETFs", "Market Close"],
  },
];

const CurrentTradingStrategies = () => {
  return (
    <section id="current-trading-strategies" className="mx-5 border-b border-neutral-900 py-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
        className="mb-14 text-center text-5xl font-bold tracking-tight text-neutral-100"
      >
        Current Trading Strategies
      </motion.h2>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2">
        {strategies.map((strategy, index) => (
          <motion.article
            key={strategy.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.45,
              ease: "easeOut",
              delay: Math.min(index * 0.08, 0.24),
            }}
            viewport={{ once: true, amount: 0.25 }}
            className="group relative flex aspect-square overflow-hidden rounded-3xl border border-neutral-800/70 bg-neutral-950/50 p-6 shadow-xl shadow-black/20 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/40 hover:bg-neutral-950/70 sm:p-7 lg:p-8"
          >
            <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-purple-500/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-yellow-500/10 blur-3xl" />
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-yellow-300 via-pink-400 to-purple-500 opacity-80" />

            <div className="relative flex h-full w-full flex-col justify-between">
              <div>
                <div className="mb-5 flex items-center justify-between gap-4">
                  <span className="rounded-full border border-purple-400/20 bg-purple-500/10 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-purple-300">
                    {strategy.number}
                  </span>

                  <div className="h-2 w-2 rounded-full bg-purple-300/70 shadow-lg shadow-purple-500/40" />
                </div>

                <h3 className="text-2xl font-semibold tracking-tight text-neutral-100 lg:text-3xl">
                  {strategy.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-neutral-300/85 lg:text-base">
                  {strategy.description}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {strategy.tags.map((tag) => (
                  <span
                    key={`${strategy.title}-${tag}`}
                    className="rounded-full border border-neutral-700/70 bg-neutral-900/70 px-3 py-1.5 text-xs font-medium text-neutral-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default CurrentTradingStrategies;
