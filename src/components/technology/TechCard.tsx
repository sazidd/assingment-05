import type { Dispatch, SetStateAction } from 'react';
import type { Itech } from '../../types/tech';

interface ItechCardProps {
  tech: Itech;
  addToStack: Itech[];
  setAddToStack: Dispatch<SetStateAction<Itech[]>>;
}

const TechCard = ({
  tech,
  addToStack,
  setAddToStack,
}: ItechCardProps) => {

  const isInStack = addToStack.some(item => item.id === tech.id);


 const handleTechStack = (tech: Itech) => {
  if (isInStack) {
    setAddToStack(addToStack.filter(item => item.id !== tech.id));
  } else {
    setAddToStack([...addToStack, tech]);
  }
};


  return (
    <div
      key={tech.id}
      className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 flex flex-col justify-between w-full transition-all hover:shadow-md"
    >
      <div>
        <div className="flex items-center justify-between mb-6">
          <img
            src={tech.icon}
            alt={`${tech.name} logo`}
            className="w-12 h-12 object-contain"
          />
          <span className="px-3.5 py-1.5 text-xs font-medium text-sky-500 bg-sky-50 rounded-full border border-sky-100/60">
            {tech.badge}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2">{tech.name}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-6">
          {tech.description}
        </p>
      </div>

      <div>
        <div className="flex items-center justify-between text-xs mb-6 pt-4 border-t border-gray-100">
          <span className="px-3 py-1 bg-gray-50 text-gray-600 rounded-md font-medium border border-gray-100">
            {tech.category}
          </span>
          <span className="text-gray-500 font-medium">
            {tech.difficulty}
          </span>
          <div className="flex items-center gap-1 font-semibold text-gray-900">
            <span className="text-amber-400">★</span>
            <span>{tech.rating}</span>
          </div>
        </div>

        <button
          onClick={() => handleTechStack(tech)}
          className="w-full py-3.5 px-4 bg-gray-950 hover:bg-gray-800 text-white font-medium text-sm rounded-2xl transition-colors shadow-sm"
        >
          Add to Stack
        </button>
      </div>
    </div>
  );
};

export default TechCard;