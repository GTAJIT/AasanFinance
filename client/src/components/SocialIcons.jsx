import React from 'react'
import { getPics } from '../hooks/useSocials';
import { useState,useEffect } from 'react';
import {PopUp} from "./ui/ui"

export default function SocialIcons() {
    const [data, setData] = useState([])
        useEffect(()=>{
            const fetchProjects = async () => {
                const p = await getPics();
                setData(p);
            };
            fetchProjects();
        }, []);
    
  return (
    <>
      <div className='flex gap-1 items-center'>
        {data.map((item, index)=>(
          <div key={index} className='flex items-center my-2'>
            <a
              href={item.slug}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:fill-blue-600 scale-[1.5] hover:scale-[1.7]"
            >
              <PopUp name={item.name}>
                <img src={item.logo} alt={item.name} className="w-6 h-6" />
              </PopUp>
            </a>
          </div>
        ))}
      </div>
    </>
  )
}
