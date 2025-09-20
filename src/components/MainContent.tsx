import { Unbounded, Spectral } from "next/font/google";

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export default function MainContent() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start px-16 pt-50 mx-auto max-w-6xl">
      {/* Main heading */}
      <div className="text-center mb-8">
        <h1 className={`${unbounded.className} text-white font-black text-3xl md:text-5xl mb-6 uppercase tracking-wider drop-shadow-2xl transform hover:scale-105 transition-transform duration-300`}>
          PHOTOS THAT LOOKS ALIVE
        </h1>
        <h2 className={`${unbounded.className} text-white font-black text-4xl md:text-6xl uppercase tracking-wider drop-shadow-2xl transform hover:scale-105 transition-transform duration-300`}>
          AND MEMORIES THAT STAY FOREVER
        </h2>
      </div>
      
      {/* Sub-text */}
      <p className={`${spectral.className} text-white text-xl md:text-2xl font-medium italic mb-12 text-center`}>
        Point. Shoot. Save Permanently.
      </p>
      
      {/* Email subscription form */}
      <div className="flex flex-col sm:flex-row gap-4 items-center max-w-md w-full">
        <input
          type="email"
          placeholder="enter your email"
          className="flex-1 px-4 py-3 rounded-lg bg-gray-200 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
        />
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-lg transition-colors duration-200 uppercase tracking-wide">
          JOIN
        </button>
      </div>
    </div>
  );
}
