import { useState, useEffect } from "react";

const Experience = () => {
  const educationData = [
    {
      year: "2017 - 2021",
      title: "B.Tech Information Technology",
      description:
        "CPGA : 7.79",
    },

    {
      year: "2017",
      title: "HSC",
      description:
        "Marks : 80%",
    },

    {
      year: "2015",
      title: "SSLC",
      description:
        "Marks : 92%",
    },
  ];

  const experienceData = [
    {
      year: "SUPERLABS    ( Nov-2024 to Present )",
      title: "React Full Stack Developer (Internship)",
      description:
        " Collaborated with the development team to design and implement user interfaces using React.js. Assisted in integrating RESTful APIs to fetch and display data using Node.js.Optimized components for maximum performance across a vast array of web-capable devices and browsers.",
    },
    

    {
      year: "CORVID CONSULTING UK LTD ( Sep-2020 to Dec-2020 )",
      title: " JUNIOR DEVELOPER (Internship) ",
      description:
        "Have involved in various real-time projects under the guidance of Engineering team. Build reusable components using JavaScript frameworks (React.js) and CSS framework (Tailwind CSS) ",
    },

   
  ];

  const [activeEducationPoint, setActiveEducationPoint] = useState(0);
  const [activeExperiencePoint, setActiveExperiencePoint] = useState(0);

  useEffect(() => {
    const educationInterval = setInterval(() => {
      setActiveEducationPoint((prev) => (prev + 1) % educationData.length);
    }, 3000);

    const experienceInterval = setInterval(() => {
      setActiveExperiencePoint((prev) => (prev + 1) % experienceData.length);
    }, 3000);

    return () => {
      clearInterval(educationInterval);
      clearInterval(experienceInterval);
    };
  }, [educationData.length, experienceData.length]);

  const renderSection = (data, activePoint, setActivePoint, title) => (
    <div className="w-full md:w-1/2">
      <h2 className="text-2xl font-bold text-start text-black mb-5">
        {title}
      </h2>
      <div className="relative border-l-4 border-purple-400">
        <div
          className="absolute top-0 left-[-2px] w-1 text-black transition-all duration-1000 ease-in-out"
          style={{
            height: `${(activePoint / (data.length - 1)) * 100}%`,
          }}
        ></div>

        {data.map((item, index) => (
          <div
            key={index}
            className={`mb-8 pl-8 relative transition-all duration-500 ${
              index === activePoint
                ? "scale-105 text-black"
                : "text-gray-500"
            }`}
            style={{
              transformOrigin: "left center", 
            }}
          >
            <div
              className={`absolute -left-3 w-5 h-5 rounded-full ${
                index <= activePoint ? "bg-purple-500" : "bg-purple-200"
              }`}
            ></div>

            <div
              className={`absolute -left-1.5 top-1.5 w-2 h-2 bg-slate-100 ring-2 ${
                index <= activePoint
                  ? "ring-purple-500"
                  : "ring-purple-400"
              } rounded-full`}
            ></div>

            <h3 className="text-lg font-semibold">{item.year}</h3>
            <h4 className="text-md font-bold">{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div id="experience" className="flex flex-col  overflow-hidden pt-32 md:flex-row justify-center items-start gap-44 sm:px-16 md:px-28 py-36">
      {renderSection(
        experienceData,
        activeExperiencePoint,
        setActiveExperiencePoint,
        "Experience"
      )}
      {renderSection(
        educationData,
        activeEducationPoint,
        setActiveEducationPoint,
        "Education"
      )}
     
    </div>
  );
};

export default Experience;

