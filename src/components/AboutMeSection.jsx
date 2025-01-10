import exp from '../assets/img/experience.png';
import edu from '../assets/img/education.png';
import about from '../assets/img/about-pic.png';


const AboutMeSection = () => {
  return (
    <div id='about' className="md:px-20 sm:px-10 pt-10 h-auto w-full bg-white  flex flex-col items-center justify-center ">
      <div className="w-full h-full md:py-16  flex items-center justify-center flex-col ">
        <p className=" text-gray-500">Get to know more</p>
        <h1 className=" text-5xl font-bold">About Me</h1>
      </div>

      <div className="grid w-full    h-full sm:grid-cols-1 place-content-center place-items-center md:grid-cols-1 lg:grid-cols-3 ">
        <div className="py-10  ">
          <img
            src={about}
            alt="About Me"
            className="flex items-center justify-center h-[400px] w-full rounded-3xl"
          />
        </div>

        <div className="col-span-2 place-content-center  place-items-center ">
          <div className="grid md:grid-cols-2 sm:grid-cols-1 sm:gap-8  md:gap-16">
            <div className="grid grid-cols-1 place-content-center place-items-center h-[200px]  sm:px-10 w-full border-2 border-gray-400 rounded-3xl">
              <img src={exp} className=" h-[50px]" />
              <h1 className=" text-xl font-bold">Experience</h1>
              <p className="text-gray-500">3 Months Intern (React FullStack)</p>
              <p className="text-gray-500 text-center">4 Months Intern ( Junior Developer )</p>
            </div>
            <div className="grid grid-cols-1 place-content-center place-items-center h-[200px]  sm:px-16 w-full border-2 border-gray-400 rounded-3xl">
              <img src={edu} className=" h-[50px]" />
              <h1 className=" text-xl font-bold">Education</h1>
              <p className="text-gray-500">B.Tech IT (UG)</p>
              <p className="text-gray-500 ">Bio Maths (12th)</p>
            </div>
            
          </div>
          <p className=" text-center mt-10 text-sm px-10 text-gray-600">
          A dedicated professional with 4 months of experience as a Junior Developer at Corvid Consulting UK and doing 
an another internship based on React Developer at present. I&apos;ve acquired significant insights into web development. I am 
committed to learning and mastering various aspects of this field. I am dedicated to contributing to the company&apos;s 
growth and success through my continuous professional development. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
