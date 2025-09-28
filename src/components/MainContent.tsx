import { Unbounded, Spectral } from "next/font/google";
import { useState } from "react";

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
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Successfully joined the waitlist!');
        setEmail('');
      } else {
        setMessage(data.message || 'Something went wrong');
      }
    } catch (error) {
      setMessage('Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

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
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 items-center max-w-md w-full">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="enter your email"
          required
          className="flex-1 px-4 py-3 rounded-lg bg-gray-200 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
        />
        <button 
          type="submit"
          disabled={isLoading}
          className="bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-bold px-8 py-3 rounded-lg transition-colors duration-200 uppercase tracking-wide"
        >
          {isLoading ? 'JOINING...' : 'JOIN'}
        </button>
      </form>
      
      {/* Message display */}
      {message && (
        <div className={`mt-4 text-center text-sm ${
          message.includes('Successfully') ? 'text-green-300' : 'text-red-300'
        }`}>
          {message}
        </div>
      )}
    </div>
  );
}
