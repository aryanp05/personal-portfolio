import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import bitgoLogo from "../assets/bitgo.webp";
import BitGoDetails from "../components/experience/BitGoDetails";
import { BITGO_BLOCKS } from "../components/experience/bitgoContent";

const Bitgo = () => {
  const [expanded, setExpanded] = useState(true);

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
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex items-start gap-5">
              <div className="h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 shadow-lg shadow-black/30">
                <img src={bitgoLogo} alt="BitGo logo" className="h-full w-full object-cover" />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <h1 className="text-4xl font-semibold tracking-tight text-neutral-100">BitGo</h1>
                  <span className="rounded-full border border-purple-400/30 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-300">
                    Jan 2026 – Apr 2026
                  </span>
                </div>

                <p className="mt-2 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-lg font-medium tracking-tight text-transparent">
                  Trade Software Engineer Intern
                </p>
              </div>
            </div>

            <Link
              to="/"
              className="text-sm underline underline-offset-4 hover:text-yellow-400 transition-colors whitespace-nowrap"
            >
              Back to home
            </Link>
          </div>

          <div className="mx-auto max-w-7xl">
            <BitGoDetails blocks={BITGO_BLOCKS} expanded={expanded} onToggle={() => setExpanded((v) => !v)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bitgo;

