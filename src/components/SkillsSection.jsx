import React, { useState } from "react";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: "Expert", category: "Frontend" },
  { name: "JavaScript", level: "Expert", category: "Frontend" },
  { name: "React", level: "Advanced", category: "Frontend" },
  { name: "TypeScript", level: "Advanced", category: "Frontend" },
  { name: "Tailwind CSS", level: "Advanced", category: "Frontend" },
  { name: "Next.js", level: "Intermediate", category: "Frontend" },
  // Backend
  { name: "Node.js", level: "Intermediate", category: "Backend" },
  { name: "Express", level: "Intermediate", category: "Backend" },
  { name: "MongoDB", level: "Intermediate", category: "Backend" },
  { name: "PostgreSQL", level: "Beginner", category: "Backend" },
  { name: "C++", level: "Advanced", category: "Backend" },
  { name: "DSA", level: "Advanced", category: "Backend" },
  // Tools
  { name: "Git/GitHub", level: "Advanced", category: "Tools" },
  { name: "Figma", level: "Advanced", category: "Tools" },
  { name: "VS Code", level: "Expert", category: "Tools" },
  // Data Analytics
  { name: "Excel", level: "Advanced", category: "Data Analytics" },
  { name: "Power BI", level: "Intermediate", category: "Data Analytics" },
  { name: "Python (Pandas)", level: "Intermediate", category: "Data Analytics" },
  { name: "Jupyter Notebook", level: "Advanced", category: "Data Analytics" },
  { name: "Matplotlib", level: "Intermediate", category: "Data Analytics" },
  { name: "Seaborn", level: "Intermediate", category: "Data Analytics" },
  { name: "Numpy", level: "Intermediate", category: "Data Analytics" },
  // DevOps
  { name: "CI/CD (basics)", level: "Beginner", category: "DevOps" },
  { name: "GitHub Actions", level: "Beginner", category: "DevOps" },
  { name: "Docker", level: "Intermediate", category: "DevOps" },
  { name: "Linux", level: "Beginner", category: "DevOps" },
  { name: "Jenkins", level: "Beginner", category: "DevOps" },
  { name: "Kubernetes", level: "Beginner", category: "DevOps" },
  { name: "Ansible", level: "Beginner", category: "DevOps" },
  { name: "Vercel", level: "Beginner", category: "DevOps" },
  { name: "Netlify", level: "Beginner", category: "DevOps" },
];

const levelMap = {
  Expert: 100,
  Advanced: 80,
  Intermediate: 60,
  Beginner: 40,
};

const levelColors = {
  Expert: "bg-green-500",
  Advanced: "bg-blue-500",
  Intermediate: "bg-yellow-500",
  Beginner: "bg-red-500",
};

const categoryColors = {
  Frontend: "bg-blue-100 text-blue-700",
  Backend: "bg-green-100 text-green-700",
  Tools: "bg-purple-100 text-purple-700",
  "Data Analytics": "bg-orange-100 text-orange-700",
  DevOps: "bg-teal-100 text-teal-700",
};

const categories = ["Frontend", "Backend", "Tools", "Data Analytics", "DevOps"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          My <span className="text-primary">Skills</span>
        </h2>
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full font-semibold border transition 
                ${activeCategory === category
                  ? "bg-primary text-white border-primary shadow"
                  : "bg-white dark:bg-card text-gray-700 dark:text-white border-gray-300 dark:border-neutral-700 hover:bg-primary/10"
                }`}
            >
              {category}
            </button>
          ))}
        </div>
        {/* Skills List */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2">
          {skills
            .filter((skill) => skill.category === activeCategory)
            .map((skill) => (
              <div
                key={skill.name}
                className="bg-white/80 dark:bg-card rounded-xl shadow-md p-4 flex flex-col gap-2 items-start w-full transition-transform hover:-translate-y-1 hover:shadow-lg"
              >
                <span className={`text-xs px-2 py-1 rounded-full font-semibold mb-1 ${categoryColors[skill.category]}`}>
                  {skill.level}
                </span>
                <span className="text-base font-medium text-gray-800 dark:text-white break-words">
                  {skill.name}
                </span>
                <div className="w-full">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`${levelColors[skill.level]} h-2 rounded-full transition-all`}
                      style={{ width: `${levelMap[skill.level]}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};