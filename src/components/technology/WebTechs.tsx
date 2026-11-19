import React, { useState } from 'react';
import type { Itech } from '../../types/tech';
import TechCard from './TechCard';
import StackCard from './StackCard';
import Bottom from './Bottom';



const WebTechs = ({ tech }: { tech: Itech[] }) => {
  console.log(tech, 'Tech from webTechs')

  const [addToStack, setAddToStack] = useState<Itech[]>([]);

  return <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-7xl mx-auto p-6">

    {/* Card */}

    <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tech.map((tech: Itech) => (
        <TechCard
          key={tech.id}
          tech={tech}
          addToStack={addToStack}
          setAddToStack={setAddToStack}
        />
      ))}
    </div>

    {/* Stack Card*/}
    <div className='mb'>
      <StackCard addToStack={addToStack} setAddToStack={setAddToStack} />
    </div>

    {/* Bottom */}

    <Bottom></Bottom>

  </div>



};

export default WebTechs; 