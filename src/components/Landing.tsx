import clsx from "clsx"
import { useState } from "react"

export default function Landing() {
  const [isLanding, setIsLanding] = useState(true)

  return (
    <div
      className={clsx(
        // Added antialiased for crisper fonts, and a custom easing curve for the slide-out
        "fixed inset-0 z-[1002] flex isolate transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] antialiased selection:bg-white/20",
        !isLanding && "-translate-x-full"
      )}
      // Note: Ideally, set this font in your tailwind.config.js, but it's here to force the modern look!
      style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }} 
    >
      {/* Background Video */}
      <video
        src="/rain.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      {/* Overlay: Deep black vignette gradient with subtle blur for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black/95 backdrop-blur-xl pointer-events-none"></div>

      {/* Minimalist Top Branding */}
      <div className="absolute top-0 left-0 w-full p-6 md:p-10 flex justify-between items-center z-20 pointer-events-none">
        <h2 className="text-zinc-100 text-xl md:text-2xl font-bold tracking-widest lowercase">
          weather<span className="text-blue-400">zz</span>
        </h2>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-6">
        <div className="max-w-4xl flex flex-col items-center text-center">
          
          {/* Main Headlines - tighter tracking and tighter leading for a modern look */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-extrabold tracking-tighter leading-none mb-2 drop-shadow-2xl">
            Find the weather.
          </h1>
          
          {/* Modern Gradient Text - Frosty metallic vibe using zinc */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-500 pb-4">
            Anywhere in the world.
          </h1>

          {/* Subheadline - Zinc is cleaner than gray for dark themes */}
          <p className="mt-6 text-zinc-400 text-lg md:text-xl max-w-xl font-medium leading-relaxed tracking-wide">
            Experience real-time precipitation maps, detailed 48-hour forecasts, and live AQI tracking in one unified dashboard.
          </p>

          {/* Modernized Call to Action Button - High contrast white on black */}
          <button
            onClick={() => setIsLanding(false)}
            className="mt-12 group relative inline-flex items-center justify-center px-8 py-4 text-base md:text-lg font-semibold text-black transition-all duration-500 ease-out bg-white rounded-full hover:scale-[1.02] hover:bg-zinc-100 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.4)] active:scale-95 cursor-pointer border border-white/20"
          >
            <span className="relative flex items-center gap-3">
              Launch Dashboard
              {/* Arrow Icon that animates further on hover for better feel */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 group-hover:translate-x-1.5 transition-transform duration-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </button>

        </div>
      </div>
    </div>
  )
}