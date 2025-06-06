import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
  id="hero"
  className="relative min-h-screen w-full flex items-center justify-center bg-transparent overflow-hidden px-2 sm:px-4"
>
  

  {/* Main content */}
<div className="flex flex-col items-center justify-center w-full z-20">
  {/* Name */}
  <h1
    className="text-[clamp(2.2rem,8vw,7rem)] font-extrabold tracking-tight text-center mb-4 leading-none"
    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
  >
    <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent drop-shadow-lg transition duration-300 hover:drop-shadow-glow">
      Preet Kotmire
    </span>
  </h1>
  {/* Animated underline */}
  <span className="block h-2 w-3/4 sm:w-2/3 mx-auto mb-6 sm:mb-8 bg-gradient-to-r from-primary to-purple-500 rounded-full animate-underline shadow-lg" />

  {/* Developer & Problem Solver tag - moved down */}
  <div className="mb-6 sm:mb-8">
    <span className="text-primary font-mono text-base sm:text-xl md:text-2xl px-4 sm:px-6 py-2 rounded-full bg-white/20 backdrop-blur border border-primary/20 shadow tracking-widest animate-fade-in-up">
      {"<Developer & Problem Solver />"}
    </span>
  </div>

  {/* Tagline */}
  <p className="text-lg xs:text-xl sm:text-2xl md:text-3xl text-muted-foreground max-w-xs xs:max-w-sm sm:max-w-xl md:max-w-2xl mx-auto font-mono text-center tracking-wide animate-fade-in-up delay-300 px-2">
    I build <span className="text-primary font-bold">modern</span>, <span className="text-purple-500 font-bold">interactive</span> web experiences that blend code and creativity.
  </p>

  {/* Call to Action */}
  <div className="pt-8 sm:pt-10 animate-fade-in-up delay-500">
    <a
      href="#projects"
      className="px-6 sm:px-10 py-3 sm:py-4 rounded-full bg-white/20 border border-primary/30 text-primary text-lg sm:text-xl font-bold backdrop-blur shadow-xl hover:bg-primary hover:text-white transition-all duration-300 flex items-center gap-3 mx-auto glassmorphism"
    >
      View My Work
      <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6" />
    </a>
  </div>
</div>

  {/* Subtle floating shapes */}
  <div className="absolute top-0 left-0 w-24 h-24 sm:w-48 sm:h-48 bg-primary/10 rounded-full blur-3xl animate-float" />
  <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-64 sm:h-64 bg-purple-500/10 rounded-full blur-3xl animate-float2" />

  <style>
    {`
      .animate-underline {
        animation: underlineGrow 1.2s cubic-bezier(0.23, 1, 0.32, 1) forwards;
      }
      @keyframes underlineGrow {
        0% { width: 0; opacity: 0; }
        60% { opacity: 1; }
        100% { width: 75%; opacity: 1; }
      }
      .animate-fade-in-up {
        opacity: 0;
        transform: translateY(24px);
        animation: fadeInUp 1s forwards;
      }
      .delay-300 { animation-delay: 0.3s; }
      .delay-500 { animation-delay: 0.5s; }
      @keyframes fadeInUp {
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      .animate-float {
        animation: float 6s ease-in-out infinite alternate;
      }
      .animate-float2 {
        animation: float2 7s ease-in-out infinite alternate;
      }
      @keyframes float {
        0% { transform: translateY(0px);}
        100% { transform: translateY(30px);}
      }
      @keyframes float2 {
        0% { transform: translateY(0px);}
        100% { transform: translateY(-40px);}
      }
      .hover\\:drop-shadow-glow:hover {
        filter: drop-shadow(0 0 32px #a855f7);
      }
      .glassmorphism {
        background: rgba(255,255,255,0.15);
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        border-radius: 16px;
        border: 1px solid rgba(168, 85, 247, 0.18);
      }
    `}
  </style>
</section>
  );
};