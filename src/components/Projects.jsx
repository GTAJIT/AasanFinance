import React, { useEffect, useState } from 'react'
import {getProjects} from "../hooks/useProjects"
import ProjectCard from './Projects-card';
// import DropDown from './ui/ui';

export default function Project() {
    const [projects, setProjects] = useState([])
    useEffect(()=>{
        const fetchProjects = async () => {
            const p = await getProjects();
            setProjects(p);
        };
        fetchProjects();
    }, []);
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} index={index} />
      ))}
    </div>
    {/* <DropDown/> */}
    </>
  );
}
