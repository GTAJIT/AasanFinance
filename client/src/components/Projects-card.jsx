import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <div className="p-4 flex flex-col justify-between h-full isolate border-none rounded-xl bg-white/20 drop-shadow-lg shadow-lg ring-1 ring-black/5">
      <img src={project.imgUrl} alt={project.name} className="w-full h-fit object-contain mb-4 rounded-xl" />
      <div className="flex flex-col justify-between h-full">
        <div>
          <h2 className="text-xl font-bold">{project.name}</h2>
          <p className="text-gray-600 mb-2">{project.description}</p>
        </div>
        <div className="mt-4 flex gap-4 justify-between items-end">
          <div className="flex gap-2 flex-wrap text-sm text-white">
            {project.tags.map((tag, i) => (
              <span key={i} className="bg-blue-600 rounded px-2 py-1 hover:bg-blue-700 transition-colors">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-2">
            <a
              href={project.repoUrl}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              Repo
            </a>
            <a
              href={project.imgUrl}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
