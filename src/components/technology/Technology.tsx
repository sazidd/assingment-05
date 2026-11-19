import { use } from 'react';
import type { Itech } from '../../types/tech';
import WebTechs from './WebTechs';

interface TechsProps {
  techPromise: Promise<Itech[]>
}

const Technology = ({ techPromise }: TechsProps) => {
  console.log(techPromise)
  const tech = use(techPromise);
  console.log(tech, 'tech');



  return (
    <div className='max-w-7xl mx-auto px-6'>
      <div className='flex gap-2'>
        <h5 className='text-3xl font-bold'>Explore the</h5>
        <h5 className='text-3xl font-bold text-[#EC4899]'>Technologies</h5>
      </div>
      <p className='text-[#64748B] mb-8'>
        Pick one technology per category to build your ideal stack.
      </p>

      <WebTechs tech={tech} />
    </div>
  );

};

export default Technology;