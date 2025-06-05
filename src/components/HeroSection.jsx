import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      {/* Subtle modern background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-white/80 to-purple-100 dark:from-primary/20 dark:via-neutral-900/80 dark:to-primary/10 pointer-events-none z-0" />

      <div className="container max-w-4xl mx-auto text-center z-10 relative">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in-up"> Hi, I'm</span>
            <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent opacity-0 animate-fade-in-up delay-150">
              {" "}
              Preet
            </span>
            <span className="bg-gradient-to-r from-purple-500 to-primary bg-clip-text text-transparent ml-2 opacity-0 animate-fade-in-up delay-300">
              {" "}
              Kotmire
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-up delay-500 animate-tracking-in">
            A Developer based in India. I turn designs, concepts and ideas into real world projects.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-up delay-700">
            <a
              href="#projects"
              className="cosmic-button transition-transform duration-200 hover:scale-105 hover:shadow-lg"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-10">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>

      {/* Modern fade-in-up and tracking-in animation */}
      <style>
        {`
          .animate-fade-in-up {
            opacity: 0;
            transform: translateY(24px);
            animation: fadeInUp 0.8s forwards;
          }
          .delay-150 { animation-delay: 0.15s; }
          .delay-300 { animation-delay: 0.3s; }
          .delay-500 { animation-delay: 0.5s; }
          .delay-700 { animation-delay: 0.7s; }
          @keyframes fadeInUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-tracking-in {
            animation: trackingIn 1.2s cubic-bezier(0.23, 1, 0.32, 1) both;
          }
          @keyframes trackingIn {
            0% {
              letter-spacing: 0.5em;
              opacity: 0;
            }
            40% {
              opacity: 0.6;
            }
            100% {
              letter-spacing: normal;
              opacity: 1;
            }
          }
        `}
      </style>
    </section>
  );
};