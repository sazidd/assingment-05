import type { Dispatch, SetStateAction } from "react";
import type { Itech } from "../../types/tech";

interface IStackCardProps {
    addToStack: Itech[];
    setAddToStack: Dispatch<SetStateAction<Itech[]>>;
}

const StackCard = ({
    addToStack,
    setAddToStack

}: IStackCardProps) => {

    const handleAllRemove = () => {
        setAddToStack([]);

    }

    if (addToStack.length === 0) {

        return (

            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 w-full max-w-sm flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Your Stack</h3>
                <p className="text-gray-500 text-sm mb-6">No technologies selected yet.</p>

                <div className="border-2 border-dashed border-gray-200 rounded-2xl py-12 px-6 flex items-center justify-center text-center">
                    <span className="text-gray-400 text-sm font-medium">
                        Your stack is empty.
                    </span>
                </div>
            </div>
        );
    }

    return (
        <div
            style={{
                width: 260,
                minHeight: 297,
                padding: 10,
                border: "1px solid #94A3B8",
                borderRadius: 12,
                backgroundColor: "#FFFFFF",
                boxSizing: "border-box",
            }}>
            <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Your Stack</h3>
                <p className="text-gray-500 text-sm mb-6">{addToStack.length} technologies selected yet.</p>
            </div>
            <div>

                {addToStack.map((tech: Itech, ind: number) => {


                    const isInStack = addToStack.some(item => item.id === tech.id);

                    const handleTechStack = (tech: Itech) => {
                        if (isInStack) {
                            setAddToStack(addToStack.filter(item => item.id !== tech.id));
                        } else {
                            setAddToStack([...addToStack, tech]);
                        }
                    };




                    return <div

                        key={ind}

                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 4,
                            padding: 10,
                            marginBottom: 8,
                            width: 240,
                            height: 80,
                            boxSizing: "border-box",
                            background: "#fff",
                            border: "2px solid #e2e8f0",
                            borderRadius: 24,
                            fontFamily: "'Plus Jakarta Sans', Inter, system-ui, sans-serif",
                        }}
                    >

                        <img
                            src={tech.icon}
                            alt={tech.name}
                            style={{ width: 30, height: 35, objectFit: "contain" }}
                        />

                        <div style={{ flex: 1 }}>
                            <div style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.2, color: "#0f172a" }}>
                                {tech.name}
                            </div>
                            <div style={{ fontSize: 10, fontWeight: 600, lineHeight: 1.3, color: "#94a3b8" }}>
                                {tech.category}
                            </div>


                        </div>

                        <button
                            onClick={() => handleTechStack(tech)}
                            aria-label="Remove"
                            style={{ background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex" }}
                        >
                            <svg width="21" height="21" viewBox="0 0 44 44" fill="none">
                                <path d="M3 3L41 41M41 3L3 41" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />
                            </svg>
                        </button>

                    </div>

                })}
                <button
                    type="button"
                    onClick={handleAllRemove}
                    disabled={addToStack.length === 0}
                    className="w-full py-2.5 px-4 rounded-full border border-red-300 bg-white text-red-600 text-[15px] font-semibold text-center hover:bg-red-50 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Remove All
                </button>

            </div>

        </div>


    );

};

export default StackCard;

