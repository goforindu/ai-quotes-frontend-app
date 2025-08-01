import React from "react";

const QuoteModal = ({ quote, onClose }) => {
  if (!quote) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-white/40 to-white/10 dark:from-gray-900/40 dark:to-gray-800/10 backdrop-blur-md px-4">
      <div className="relative bg-white/90 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 p-8 rounded-2xl w-full max-w-3xl h-[50vh] overflow-y-auto shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white text-lg"
        >
          ✖
        </button>
        <div className="flex justify-center items-center flex-col mt-10">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 text-indigo-800 dark:text-yellow-200 text-center">
            “{quote.text}”
          </h2>

          <p className="text-gray-800 dark:text-gray-300 mb-4 text-base sm:text-lg md:text-xl leading-relaxed">
            <span className="font-semibold">🧘 Description:</span>{" "}
            {quote.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuoteModal;
