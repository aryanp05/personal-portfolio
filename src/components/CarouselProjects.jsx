import React, { useState, useRef, useEffect, useCallback } from "react";
import { FaLocationArrow, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

import { projects } from "../constants";
import { projectsF } from "../constants";
import { PinContainer } from "./ui/3d-pin";

const CARD_WIDTH = 570;
const CARD_GAP = 32;
const STRIDE = CARD_WIDTH + CARD_GAP;
// Repeat the list this many times so the user never reaches the edge naturally
const REPEAT = 20;

const mod = (n, m) => ((n % m) + m) % m;

const ProjectCard = ({ item }) => (
  <PinContainer title={item.link} href={item.link}>
    <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden lg:h-[35vh] mb-10">
      <div className="relative w-full h-full overflow-hidden lg:rounded-3xl" style={{ backgroundColor: "#13162D" }}>
        <img src="/bg.png" alt="bgimg" />
      </div>
      <img src={item.img} alt="cover" className="z-10 absolute bottom-0" />
    </div>

    <h1 className="font-bold lg:text-2xl md:text-xl text-base">{item.title}</h1>

    <p className="lg:text-xl lg:font-normal font-light text-sm" style={{ color: "#BEC1DD", margin: "1vh 0" }}>
      {item.des}
    </p>

    <div className="mt-1" />
    <div className="flex flex-wrap">
      {item.technologies.map((tech, i) => (
        <span key={i} className="text-purple-500 mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium">
          {tech}
        </span>
      ))}
    </div>

    <br />

    <div className="flex items-center justify-between mt-5 mb-3">
      <div className="justify-start">
        {item.links.map((link, i) => (
          <span key={i} className="bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text font-bold tracking-tight text-transparent mr-2 rounded bg-neutral-900 px-2 py-1 text-sm">
            <a href={link[1]} onClick={(e) => e.stopPropagation()}>{link[0]}</a>
          </span>
        ))}
      </div>
      <a href={item.link} onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-center items-center">
          <p className="flex lg:text-xl md:text-xs text-sm text-purple">{item.linkName}</p>
          <FaLocationArrow className="ms-3" color="#CBACF9" />
        </div>
      </a>
    </div>
  </PinContainer>
);

const RecentProjects = () => {
  const [category, setCategory] = useState("Software");
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragStartScroll = useRef(0);
  const carouselRef = useRef(null);

  const filteredProjects = category === "Software" ? projects : projectsF;
  const count = filteredProjects.length;

  // Build a long repeated list
  const repeatedItems = Array.from({ length: REPEAT }, (_, rep) =>
    filteredProjects.map((item, i) => ({ ...item, _key: `${rep}-${i}`, _realIndex: i }))
  ).flat();

  // The "middle" repetition index we start at so user has plenty of room both ways
  const MID_REP = Math.floor(REPEAT / 2);

  // Scroll to a given flat index instantly (no animation)
  const scrollToFlat = useCallback((flatIndex, smooth = false) => {
    const el = carouselRef.current;
    if (!el) return;
    const target = flatIndex * STRIDE + 64; // 64 = px-16 padding offset
    el.scrollTo({ left: target, behavior: smooth ? "smooth" : "instant" });
  }, []);

  // On mount and category change: jump to middle of the repeated list
  useEffect(() => {
    const startFlat = MID_REP * count;
    scrollToFlat(startFlat);
    setActiveIndex(0);
  }, [category, count, MID_REP, scrollToFlat]);

  // Track active dot from scroll position
  const handleScroll = useCallback(() => {
    const el = carouselRef.current;
    if (!el) return;
    const flatIndex = Math.round((el.scrollLeft - 64) / STRIDE);
    setActiveIndex(mod(flatIndex, count));
  }, [count]);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Scroll by N cards
  const scrollBy = useCallback((delta) => {
    const el = carouselRef.current;
    if (!el) return;
    el.scrollBy({ left: delta * STRIDE, behavior: "smooth" });
  }, []);

  // Jump dot: scroll to nearest occurrence of realIndex relative to current scroll
  const jumpToReal = useCallback((realIndex) => {
    const el = carouselRef.current;
    if (!el) return;
    const currentFlat = Math.round((el.scrollLeft - 64) / STRIDE);
    const currentReal = mod(currentFlat, count);
    const diff = mod(realIndex - currentReal, count);
    const delta = diff <= count / 2 ? diff : diff - count;
    el.scrollBy({ left: delta * STRIDE, behavior: "smooth" });
  }, [count]);

  // Mouse drag
  const onMouseDown = (e) => {
    setIsDragging(true);
    dragStartX.current = e.pageX;
    dragStartScroll.current = carouselRef.current.scrollLeft;
  };
  const onMouseMove = (e) => {
    if (!isDragging) return;
    carouselRef.current.scrollLeft = dragStartScroll.current - (e.pageX - dragStartX.current);
  };
  const onMouseUp = () => setIsDragging(false);

  // Touch
  const touchStartX = useRef(0);
  const touchStartScroll = useRef(0);
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].pageX;
    touchStartScroll.current = carouselRef.current.scrollLeft;
  };
  const onTouchMove = (e) => {
    carouselRef.current.scrollLeft = touchStartScroll.current - (e.touches[0].pageX - touchStartX.current);
  };

  const handleCategoryChange = () => {
    setCategory((c) => (c === "Software" ? "Finance" : "Software"));
  };

  const toggleSwitch = (
    <div className="flex items-center">
      <span className={`mr-4 text-sm font-medium transition-colors duration-300 ${
        category === "Software"
          ? "bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text tracking-tight text-transparent"
          : "text-gray-500"
      }`}>Software</span>
      <div
        className={`relative inline-block w-24 h-8 transition duration-200 ease-linear ${
          category === "Software"
            ? "bg-gradient-to-r from-yellow-400 to-pink-500"
            : "bg-gradient-to-r from-pink-500 to-purple-500"
        } rounded-full cursor-pointer`}
        onClick={handleCategoryChange}
      >
        <span className={`absolute left-0 top-0 h-8 w-8 bg-white border-2 border-gray-300 rounded-full transition-transform duration-200 ${
          category === "Software" ? "translate-x-16 border-yellow-400" : "translate-x-0 border-purple-500"
        }`} />
      </div>
      <span className={`ml-4 text-sm font-medium transition-colors duration-300 ${
        category === "Finance"
          ? "bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text tracking-tight text-transparent"
          : "text-gray-500"
      }`}>Finance</span>
    </div>
  );

  return (
    <div id="recentProjects" className="py-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -75 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold text-center mb-12"
      >
        A Small Selection Of <br />
        <span className={
          category === "Software"
            ? "bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text tracking-tight text-transparent"
            : "bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text tracking-tight text-transparent"
        }>
          Recent {category} Projects
        </span>
      </motion.h1>

      <div className="flex justify-center mt-8 mb-10">{toggleSwitch}</div>

      {/* Carousel */}
      <div className="relative">
        <button
          onClick={() => scrollBy(-1)}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-black/60 border border-white/10 text-white hover:bg-white/10 transition-colors backdrop-blur-sm"
        >
          <FaChevronLeft size={16} />
        </button>
        <button
          onClick={() => scrollBy(1)}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-black/60 border border-white/10 text-white hover:bg-white/10 transition-colors backdrop-blur-sm"
        >
          <FaChevronRight size={16} />
        </button>

        <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-black to-transparent z-10" />

        <div
          ref={carouselRef}
          className="flex gap-x-8 overflow-x-auto px-16 py-4 scrollbar-hide select-none"
          style={{
            cursor: isDragging ? "grabbing" : "grab",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
        >
          {repeatedItems.map((item) => (
            <div
              key={item._key}
              className="flex-shrink-0 sm:h-[41rem] h-[32rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
            >
              <ProjectCard item={item} />
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {filteredProjects.map((_, i) => (
          <button
            key={i}
            onClick={() => jumpToReal(i)}
            className={`rounded-full transition-all duration-300 ${
              i === activeIndex
                ? `w-5 h-2 ${category === "Software" ? "bg-yellow-500" : "bg-purple-500"}`
                : "w-2 h-2 bg-white/20 hover:bg-white/40"
            }`}
            aria-label={`Go to project ${i + 1}`}
          />
        ))}
      </div>

      <AnchorLink className="anchor-link" offset={50} href="#recentProjects">
        <div className="flex justify-center mt-16 mb-16">{toggleSwitch}</div>
      </AnchorLink>
    </div>
  );
};

export default RecentProjects;