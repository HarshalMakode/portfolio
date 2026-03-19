function Skills() {
  const skillCategories = [
    {
      title: "PROGRAMMING",
      items: ["C", "C++", "JAVA", "PYTHON"],
    },
    {
      title: "WEB & BACKEND",
      items: [
        "J2EE",
        "SPRING BOOT",
        "REACT",
        "TYPESCRIPT",
        "PHP",
        "JAVASCRIPT",
        "REST APIs",
        "MERN STACK",
      ],
    },
    {
      title: "DATABASES",
      items: ["SQL", "POSTGRESQL", "MYSQL", "MONGODB"],
    },
    {
      title: "TOOLS & PLATFORMS",
      items: [
        "LINUX",
        "DOCKER",
        "GIT",
        "GITHUB",
        "POSTMAN",
        "SUPABASE",
        "VERCEL",
        "XAMPP",
      ],
    },
    {
      title: "CORE CS",
      items: [
        "DSA",
        "OOP",
        "OS",
        "DBMS",
        "COMPUTER NETWORKS",
        "SOFTWARE ENGINEERING",
      ],
    },
  ];

  return (
    <section id="skills" className="px-8 pt-16 pb-24 max-w-[1100px] mx-auto">
      <h2 className="text-center font-pokemon text-yellow-400 text-lg mb-12">
        SKILLS 
      </h2>

      <div className="flex flex-col gap-10">
        {skillCategories.map((category, index) => (
          <div key={index}>
            {/* Category Title */}
            <h3 className="font-pokemon text-[12px] text-yellow-400 mb-4 text-center md:text-left">
              {category.title}
            </h3>

            {/* Tags */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {category.items.map((item, i) => (
                <span
                  key={i}
                  className="px-4 py-2 text-[10px] font-pokemon bg-[#0f172a] text-white border border-white/20 rounded-md shadow-md hover:scale-105 hover:-translate-y-1 transition"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
