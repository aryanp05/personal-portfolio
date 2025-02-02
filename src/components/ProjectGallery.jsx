import React from 'react';
import { PROJECTS } from "../constants/index"; // Adjust the path to match your directory structure

const ProjectGallery = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {PROJECTS.map((project) => (
        <div
          key={project.id}
          className="border rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300"
        >
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
      ))}
    </div>
  );
};

export default ProjectGallery;
