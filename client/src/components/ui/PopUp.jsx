import React from 'react';

const PopUp = ({name, children}) => {
  return (
    <div className="">
      <div
        className="flex items-center justify-center p-2 cursor-pointer rounded-md text-neutral-500 hover:text-neutral-100font-medium relative z-[9999999999] 
        data-[tooltip]:after:content-[attr(data-tooltip)] 
        data-[tooltip]:after:mt-2 
        data-[tooltip]:after:text-sm 
        data-[tooltip]:after:invisible 
        data-[tooltip]:after:scale-50
        data-[tooltip]:after:origin-top 
        data-[tooltip]:after:opacity-0 
        hover:data-[tooltip]:after:visible 
        hover:data-[tooltip]:after:opacity-100 
        hover:data-[tooltip]:after:scale-75 
        data-[tooltip]:after:transition-all 
        data-[tooltip]:after:absolute 
        data-[tooltip]:after:bg-white 
        data-[tooltip]:after:top-[calc(100%+4px)] 
        data-[tooltip]:after:left-1/2 
        data-[tooltip]:after:-translate-x-1/2 
        data-[tooltip]:after:-z-[1] 
        data-[tooltip]:after:px-2.5 
        data-[tooltip]:after:py-1 
        data-[tooltip]:after:min-h-fit 
        data-[tooltip]:after:min-w-fit 
        data-[tooltip]:after:rounded-md 
        data-[tooltip]:after:drop-shadow 
        data-[tooltip]:before:mt-2 
        data-[tooltip]:before:drop-shadow 
        data-[tooltip]:after:text-center 
        data-[tooltip]:after:text-zinc-800 
        data-[tooltip]:after:whitespace-nowrap 
        data-[tooltip]:after:text-[10px] 
        data-[tooltip]:before:invisible 
        data-[tooltip]:before:opacity-0 
        hover:data-[tooltip]:before:visible 
        hover:data-[tooltip]:before:opacity-100 
        data-[tooltip]:before:transition-all 
        data-[tooltip]:before:bg-white 
        data-[tooltip]:before:[clip-path:polygon(50%_0,0_100%,100%_100%)] 
        data-[tooltip]:before:absolute 
        data-[tooltip]:before:top-full 
        data-[tooltip]:before:left-1/2 
        data-[tooltip]:before:-translate-x-1/2 
        data-[tooltip]:before:z-0 
        data-[tooltip]:before:w-3 
        data-[tooltip]:before:h-[4px]"
        data-tooltip={name}
      >
        {children}
      </div>
    </div>
  );
};

export default PopUp;