import React from "react";

const Skill = () => {
  return (
    <section
      className="pt-24 pb-12 md:pt-28 md:pb-16 lg:pt-32 lg:pb-20"
      id="skill"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-2">
        Skills
      </h2>
      <span className="text-base text-gray-600 text-center block mb-12">
        My technical level
      </span>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
};

const Frontend = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-8 lg:p-10">
      <h3 className="text-xl font-medium text-gray-800 text-center mb-6">
        Frontend Developer
      </h3>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
        <div className="space-y-5">
          <SkillItem name="HTML" level="Advanced" />
          <SkillItem name="CSS" level="Intermediate" />
          <SkillItem name="JavaScript" level="Advanced" />
        </div>

        <div className="space-y-5">
          <SkillItem name="Tailwind CSS" level="Advanced" />
          <SkillItem name="Next JS" level="Basic" />
          <SkillItem name="React JS" level="Advanced" />
        </div>
      </div>
    </div>
  );
};

const Backend = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-8 lg:p-10">
      <h3 className="text-xl font-medium text-gray-800 text-center mb-6">
        Backend Developer
      </h3>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
        <div className="space-y-5">
          <SkillItem name="Node JS" level="Advanced" />
          <SkillItem name="Express JS" level="Intermediate" />
          <SkillItem name="MongoDB" level="Advanced" />
        </div>

        <div className="space-y-5">
          <SkillItem name="SQL" level="Basic" />
          <SkillItem name="Git" level="Intermediate" />
          <SkillItem name="Supabase" level="Basic" />
        </div>
      </div>
    </div>
  );
};

const SkillItem = ({ name, level }) => {
  const getLevelColor = (level) => {
    switch (level.toLowerCase()) {
      case "basic":
        return "text-red-500";
      case "intermediate":
        return "text-yellow-500";
      case "advanced":
        return "text-green-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div className="flex items-center gap-3">
      <i className="bx bx-badge-check text-xl text-gray-700"></i>
      <div>
        <h4 className="text-base font-medium text-gray-700">
          {name}
        </h4>
        <span className={`text-xs ${getLevelColor(level)}`}>{level}</span>
      </div>
    </div>
  );
};

export default Skill;
