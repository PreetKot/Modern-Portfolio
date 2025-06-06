import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative py-24 px-4 bg-gradient-to-br from-secondary/40 to-white dark:from-secondary/60 dark:to-background overflow-hidden"
    >
      {/* Decorative background blob */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl z-0 animate-pulse" />
      <div className="container mx-auto max-w-5xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
          {/* Profile & Intro */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left max-w-lg">
            {/* Profile image with animated gradient ring */}
            <div className="relative mb-6 self-center">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-purple-400 blur-md animate-spin-slow" />
              <img
                src="/projects/profile.jpg"
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover relative z-10"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-2">
              Passionate Developer & Tech Creator
            </h3>
            <p className="text-muted-foreground mb-3 max-w-md mx-auto lg:mx-0">
              With over 2 years of experience in web development, I specialize in creating responsive, accessible, and performant websites using modern technologies.
            </p>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto lg:mx-0">
              I'm passionate about crafting elegant solutions to complex problems, and I'm constantly learning new technologies to stay at the forefront of the ever-evolving tech landscape.
            </p>
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="cosmic-button px-6 py-2 text-base font-semibold rounded-full shadow transition-transform hover:scale-110 hover:shadow-xl"
              >
                Get In Touch
              </a>
              <a
                href="/resume.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-all duration-300 font-semibold shadow hover:scale-105"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Highlights - responsive grid */}
          <div className="flex-1 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: <Code className="h-10 w-10 text-primary drop-shadow" />,
                  title: "Web Development",
                  desc: "Building responsive and modern UI/UX websites with the latest frameworks.",
                },
                {
                  icon: <User className="h-10 w-10 text-primary drop-shadow" />,
                  title: "UI/UX Design",
                  desc: "Designing intuitive user interfaces and seamless user experiences.",
                },
                {
                  icon: <Briefcase className="h-10 w-10 text-primary drop-shadow" />,
                  title: "Project Management",
                  desc: "Leading projects from conception to completion with agile methodologies.",
                },
                {
                  icon: <Briefcase className="h-10 w-10 text-primary drop-shadow" />,
                  title: "Problem Solving",
                  desc: "Crafting elegant solutions to complex challenges with a focus on performance and scalability.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="h-full flex flex-col items-center justify-center backdrop-blur-lg bg-white/70 dark:bg-card/70 border border-primary/10 rounded-2xl p-6 shadow-md hover:shadow-2xl transition-shadow duration-300 group hover:ring-2 hover:ring-primary/40 hover:scale-105"
                >
                  <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors mb-2">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-lg mb-1 text-center">{item.title}</h4>
                  <p className="text-muted-foreground text-sm text-center">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Custom animation for slow spin */}
      <style>
        {`
          .animate-spin-slow {
            animation: spin 6s linear infinite;
          }
          @keyframes spin {
            0% { transform: rotate(0deg);}
            100% { transform: rotate(360deg);}
          }
        `}
      </style>
    </section>
  );
};