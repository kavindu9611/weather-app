export default function Header() {
  return (
    <div className="flex justify-center mb-20">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="relative">
            <svg className="w-8 h-8 text-white sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2m0 16v2M4.22 4.22l1.42 1.42m11.32 11.32l1.42 1.42M2 12h2m16 0h2M4.22 19.78l1.42-1.42m11.32-11.32l1.42-1.42" />
            </svg>
            <svg className="absolute w-5 h-5 text-purple-400 sm:w-6 sm:h-6 -bottom-1 -right-1" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-white sm:text-3xl">Weather App</h1>
        </div>
    </div>
  );
}