import React, { useRef, useState, useEffect } from 'react';
import { PROJECTS } from "../constants/index";

const ProjectGallery = () => {
  const trackRef = useRef(null);
  const containerRef = useRef(null);
  const [isHoveringLeft, setIsHoveringLeft] = useState(false);
  const [isHoveringRight, setIsHoveringRight] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(null);
  const animationRef = useRef(null);
  const [itemWidth, setItemWidth] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  
  // Create duplicated projects for infinite loop
  const duplicatedProjects = [...PROJECTS, ...PROJECTS, ...PROJECTS];

  // Calculate responsive settings
  useEffect(() => {
    const updateResponsiveSettings = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setItemsPerView(1);
      } else if (width < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    updateResponsiveSettings();
    window.addEventListener('resize', updateResponsiveSettings);
    return () => window.removeEventListener('resize', updateResponsiveSettings);
  }, []);

  // Calculate item width based on container and items per view
  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const newItemWidth = containerWidth / itemsPerView;
      setItemWidth(newItemWidth);
      
      // Set initial position to the second set of projects for infinite loop
      const singleSetWidth = PROJECTS.length * newItemWidth;
      setScrollPosition(-singleSetWidth);
    }
  }, [itemsPerView]);

  // Smooth scrolling animation
  const smoothScroll = () => {
    if (!trackRef.current || !isScrolling || itemWidth === 0) return;

    const scrollSpeed = 5; // pixels per frame
    let newPosition = scrollPosition;

    if (scrollDirection === 'left') {
      newPosition += scrollSpeed;
    } else if (scrollDirection === 'right') {
      newPosition -= scrollSpeed;
    }

    // Handle infinite loop - reset position when we've scrolled past one set of projects
    const singleSetWidth = PROJECTS.length * itemWidth;
    
    // If we've scrolled past the first set, reset to the second set
    if (newPosition < -singleSetWidth) {
      newPosition += singleSetWidth;
    }
    // If we've scrolled before the first set, go to the end of the second set
    else if (newPosition > 0) {
      newPosition -= singleSetWidth;
    }

    setScrollPosition(newPosition);
    trackRef.current.style.transform = `translateX(${newPosition}px)`;
    
    if (isScrolling) {
      animationRef.current = requestAnimationFrame(smoothScroll);
    }
  };

  // Start smooth scrolling
  useEffect(() => {
    if (isScrolling) {
      animationRef.current = requestAnimationFrame(smoothScroll);
    } else {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isScrolling, scrollDirection, scrollPosition, itemWidth]);

  // Handle mouse enter/leave for left side
  const handleLeftMouseEnter = () => {
    setIsHoveringLeft(true);
    setScrollDirection('left');
    setIsScrolling(true);
  };

  const handleLeftMouseLeave = () => {
    setIsHoveringLeft(false);
    setIsScrolling(false);
    setScrollDirection(null);
  };

  // Handle mouse enter/leave for right side
  const handleRightMouseEnter = () => {
    setIsHoveringRight(true);
    setScrollDirection('right');
    setIsScrolling(true);
  };

  const handleRightMouseLeave = () => {
    setIsHoveringRight(false);
    setIsScrolling(false);
    setScrollDirection(null);
  };

  return (
    <div className="project-gallery-container relative overflow-hidden" ref={containerRef}>
      {/* Left hover zone */}
      <div 
        className="absolute left-0 top-0 w-1/3 h-full z-10 cursor-w-resize hover-zone left"
        onMouseEnter={handleLeftMouseEnter}
        onMouseLeave={handleLeftMouseLeave}
        style={{ 
          background: isHoveringLeft ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
          transition: 'background-color 0.3s ease'
        }}
      />
      
      {/* Right hover zone */}
      <div 
        className="absolute right-0 top-0 w-1/3 h-full z-10 cursor-e-resize hover-zone right"
        onMouseEnter={handleRightMouseEnter}
        onMouseLeave={handleRightMouseLeave}
        style={{ 
          background: isHoveringRight ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
          transition: 'background-color 0.3s ease'
        }}
      />
      
      {/* Custom horizontal track */}
      <div 
        ref={trackRef}
        className="flex transition-none"
        style={{
          transform: `translateX(${scrollPosition}px)`,
          width: `${duplicatedProjects.length * itemWidth}px`
        }}
      >
        {duplicatedProjects.map((project, index) => (
          <div 
            key={`${project.id}-${index}`} 
            className="flex-shrink-0 px-3"
            style={{ width: `${itemWidth}px` }}
          >
            <div className="border rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300 h-full">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="mt-4 text-lg font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{project.des}</p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-4 text-blue-500 underline"
                >
                  {project.linkName || 'Learn More'}
                </a>
              )}
              {project.technologies.length > 0 && (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <li
                      key={index}
                      className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;
