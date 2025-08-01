const QuoteSkeleton = () => {
  return (
    <div className="p-6 w-full bg-gradient-to-br from-blue-100/80 via-indigo-100/80 to-purple-100/80 rounded-xl shadow-xl border border-indigo-200 backdrop-blur-md animate-pulse space-y-3">
      {/* Simulate 2–3 lines of quote text */}

      <div className="h-5 bg-gray-300/60 rounded w-full"></div>
      <div className="h-5 bg-gray-300/60 rounded w-11/12"></div>
      <div className="h-5 bg-gray-300/60 rounded w-9/12"></div>

      {/* Simulate audio button and mood pill */}
      <div className="flex justify-between items-center pt-3">
        <div className="h-6 w-6 bg-gray-300/60 rounded-full"></div>
        <div className="h-6 w-20 bg-indigo-200/70 rounded-full"></div>
      </div>
    </div>
  );
};

export default QuoteSkeleton;
