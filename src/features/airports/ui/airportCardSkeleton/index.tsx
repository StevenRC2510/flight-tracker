export default function AirportCardSkeleton() {
  return (
    <div className="grid grid-cols-2 relative bg-gradient-to-r from-gray-800/80 via-gray-800/80 to-gray-900/80 rounded-lg shadow-lg overflow-hidden border border-white h-56 animate-pulse">
      <div className="flex flex-col justify-around p-4 flex-1 z-10 bg-gradient-to-r from-[#3F495F] to-[#0E1934]">
        <div>
          <div className="h-6 bg-gray-600 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-600 rounded w-1/2 mb-2"></div>
        </div>
        <div className="h-10 bg-gray-600 rounded w-1/3"></div>
      </div>

      <div className="relative flex justify-end p-4 bg-cover bg-center bg-[url('/assets/images/card-background.jpeg')]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#3F495F] via-[#1B253E] to-[#0E1934] opacity-95 z-0" />
        <div className="relative w-12 h-12 bg-gray-600 rounded-full z-10"></div>
      </div>
    </div>
  );
}
