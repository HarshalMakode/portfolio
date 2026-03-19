function Experience() {
  const evolution = [
    {
      icon: "🎓",
      name: "STUDENT @ GP ARVI",
      role: "Diploma in Computer Engineering",
      years: "2021 – 2024",
    },
    {
      icon: "⚙️",
      name: "TRAINEE @ Mountreach Solution",
      role: "Android Developer Trainee",
      years: "June 2023 – July 2023",
    },
    {
      icon: "🎓",
      name: "STUDENT @ RCOEM, Nagpur",
      role: "Btech in Computer Science Engineering",
      years: "2024 – 2027",
    },
    {
      icon: "💻",
      name: "FULL STACK DEV",
      role: "GenxDual Cyber Solutions",
      years: "Jan 2026 – Feb 2026",
    },
    {
      icon: "🚀",
      name: "FULL STACK DEV",
      role: "RESEARCH INTERNSHIP, IIT Bombay",
      years: "Jan 2026 – Present",
    },
  ];

  return (
    <section className="px-8 py-24 max-w-[1100px] mx-auto">
      {/* Title */}
      <h2 className="text-center font-pokemon text-yellow-400 text-lg mb-12">
        EVOLUTION PATH
      </h2>

      {/* Chain */}
      <div className="flex flex-col-reverse items-center gap-10">
        {evolution.map((stage, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Stage */}
            <div className="text-center group">
              {/* Icon */}
              <div className="w-[90px] h-[90px] mx-auto mb-4 flex items-center justify-center text-[2.8rem] rounded-full border-[3px] border-white/20 bg-gradient-to-br from-[#003A70] to-[#0D47A1] transition-all duration-300 group-hover:scale-110 group-hover:border-yellow-400">
                {stage.icon}
              </div>

              {/* Name */}
              <div className="font-pokemon text-[9px] text-white mb-1">
                {stage.name}
              </div>

              {/* Role */}
              <div className="text-[13px] text-yellow-400 font-bold">
                {stage.role}
              </div>

              {/* Years */}
              <div className="text-[12px] text-white/50 mt-1">
                {stage.years}
              </div>
            </div>

            {/* Arrow (UP ⬆️) */}
            {index !== evolution.length  && (
              <div className="text-yellow-400 text-2xl animate-pulse-arrow my-2">
                ↑
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
