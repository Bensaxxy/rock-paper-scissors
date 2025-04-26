import React from "react";

interface RulesProps {
  onClose: () => void; // Define the type for the onClose prop
}

const Rules: React.FC<RulesProps> = ({ onClose }) => {
  return (
    <>
      <div className=" hidden min-h-screen w-screen md:flex items-center justify-center bg-black/80 bg-opacity-50 fixed inset-0 z-50">
        <div className="bg-white rounded-lg p-6 max-w-xs mx-auto ">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-[var(--Dark-Text)] uppercase">
              rules
            </h1>
            <button onClick={onClose}>
              <img
                src="/images/icon-close.svg"
                alt="Close"
                className="w-4 h-4 cursor-pointer"
              />
            </button>
          </div>
          <div>
            <img
              src="/images/image-rules-bonus.svg"
              alt="Game Rules"
              className="w-full mt-8"
            />
          </div>
        </div>
      </div>

      {/* // mobile version */}

      <div className="md:hidden bg-white p-6 min-h-screen w-screen flex flex-col items-center justify-center gap-20">
        <h1 className="text-2xl font-bold text-[var(--Dark-Text)] uppercase text-center">
          rules
        </h1>
        <div>
          <img
            src="/images/image-rules.svg" // Fixed typo (was .cvg)
            alt="Game Rules"
            className="w-full mt-8"
          />
        </div>
        <button onClick={onClose}>
          <img
            src="/images/icon-close.svg"
            alt="Close"
            className="w-6 h-6 cursor-pointer"
          />
        </button>
      </div>
    </>
  );
};

export default Rules;
