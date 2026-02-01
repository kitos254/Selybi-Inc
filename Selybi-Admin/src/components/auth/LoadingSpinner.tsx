const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-navy-950">
      <div className="text-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-navy-700 border-t-cyan-500 rounded-full animate-spin mx-auto mb-4"></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-electric-blue rounded-full animate-spin mx-auto opacity-50" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
        </div>
        <h2 className="text-lg font-medium text-white mb-2">Loading...</h2>
        <p className="text-gray-400 text-sm">Please wait while we load your content</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
