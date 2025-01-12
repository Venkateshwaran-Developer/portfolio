import project1 from "../assets/img/project1.png";
import project2 from "../assets/img/project2.png";
import project3 from "../assets/img/project3.png";


function Projects() {
  return (
    <div id="projects" className="projects bg-white w-full h-auto py-16 px-10 ">
      <div className="text-center py-5 text-black">
        <h5>Browse My Recent</h5>
        <h1 className="font-bold">Projects</h1>
      </div>

      <div className="h-auto  bg-white w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center place-content-center">
        <div className=" bg-white sm:w-auto md:w-96 drop-shadow-2xl h-[485px] flex flex-col items-center justify-center  rounded-3xl">
          <div className="">
            <img
              src={project1}
              alt="Project 1"
              className="sm:w-60 drop-shadow-2xl sm:h-[150px] md:w-80 md:h-[200px] rounded-3xl"
            />
          </div>
          <h2 className="text-black pt-5">SGT Travels</h2>

          <p className="py-2 px-10">
            <b className="">Technologies Used :</b> Html, Css, Javascript,
            React.js, TailwindCss, Framer Motion, AOS, Lottie Files, EmailJs.
          </p>
          <div className="text-black flex gap-3 ">
            <a className="no-underline text-black font-bold" href="https://github.com/Venkateshwaran-Developer/SGT_TRAVELS.git"><button className=" border-2 w-[118px] text-sm flex justify-center items-center h-10 border-solid py-2 px-4 rounded-full border-gray-400 hover:bg-black hover:text-white">
              Github
            </button></a>
            <a className="no-underline text-black text-xs font-bold" href="https://sgt-travels.vercel.app/"><button className=" border-2 w-[122px] text-sm flex justify-center items-center h-10 border-solid py-2 px-4 rounded-full border-gray-400 hover:bg-black hover:text-white">
              Live Demo
            </button></a>
          </div>
        </div>{" "}
        <div className=" bg-white sm:w-auto md:w-96 drop-shadow-2xl h-[485px] flex flex-col items-center justify-center  rounded-3xl">
          <div className="">
            <img
              src={project2}
              alt="Project 1"
              className="sm:w-60 drop-shadow-2xl sm:h-[150px] md:w-80 md:h-[200px] rounded-3xl"
            />
          </div>
          <h2 className="text-black pt-5">Pushpa Crackers</h2>

          <p className="py-2 px-10">
            <b className="">Technologies Used :</b> Html, Css, Javascript,
            React.js, TailwindCss, EmailJs, Framer Motion, AOS, Lottie Files, iFrame.
          </p>
          <div className="text-black flex gap-3 ">
          <a href="https://github.com/Venkateshwaran-Developer/pushpa-crackers" className="no-underline text-black font-bold"> <button className=" border-2 w-[118px] text-sm flex justify-center items-center h-10 border-solid py-2 px-4 rounded-full border-gray-400 hover:bg-black hover:text-white">
              Github
            </button></a>
            <a href="https://pushpa-crackers.vercel.app/" className="no-underline text-black font-bold"><button className=" border-2 w-[122px] text-sm flex justify-center items-center h-10 border-solid py-2 px-4 rounded-full border-gray-400 hover:bg-black hover:text-white">
              Live Demo
            </button></a>
          </div>
        </div>{" "}
        <div className=" bg-white sm:w-auto md:w-96 drop-shadow-2xl h-[485px] flex flex-col items-center justify-center  rounded-3xl">
          <div className="">
            <img
              src={project3}
              alt="Project 1"
              className="sm:w-60 drop-shadow-2xl sm:h-[150px] md:w-80 md:h-[200px] rounded-3xl"
            />
          </div>
          <h2 className="text-black pt-5">Portfolio</h2>

          <p className="py-2 px-10">
            <b className="">Technologies Used :</b> Html, Css, Javascript,
            React,js, TailwindCss, Bootstrap, animate.css, EmailJs. 
          </p>
          <div className="text-black flex gap-3 ">
            <a href="https://github.com/Venkateshwaran-Developer/portfolio.git" className="no-underline text-black font-bold"><button className=" border-2 w-[118px] text-sm flex justify-center items-center h-10 border-solid py-2 px-4 rounded-full border-gray-400 hover:bg-black hover:text-white">
              Github
            </button></a>
           <a  href="https://venkat-portfolio-gamma.vercel.app/" className="no-underline text-black font-bold"> <button className=" border-2 w-[122px] text-sm flex justify-center items-center h-10 border-solid py-2 px-4 rounded-full border-gray-400 hover:bg-black hover:text-white">
              Live Demo
            </button></a>
          </div>
        </div>{" "}
        <div className=" bg-white sm:w-auto md:w-96 drop-shadow-2xl h-[485px] flex flex-col items-center justify-center  rounded-3xl">
          <div className="">
            <img
              src={project1}
              alt="Project 1"
              className="sm:w-60 drop-shadow-2xl sm:h-[150px] md:w-80 md:h-[200px] rounded-3xl"
            />
          </div>
          <h2 className="text-black pt-5">Ecommerce Project</h2>

          <p className="py-2 px-10">
            <b className="">Technologies Used :</b> Html, Css, Javascript,
            React,Node
          </p>
          <div className="text-black flex gap-3 ">
            <button className=" border-2 w-[118px] text-sm flex justify-center items-center h-10 border-solid py-2 px-4 rounded-full border-gray-400 hover:bg-black hover:text-white">
              Github
            </button>
            <button className=" border-2 w-[118px] text-sm flex justify-center items-center h-10 border-solid py-2 px-4 rounded-full border-gray-400 hover:bg-black hover:text-white">
              Live Demo
            </button>
          </div>
        </div>{" "}
        <div className=" bg-white sm:w-auto md:w-96 drop-shadow-2xl h-[485px] flex flex-col items-center justify-center  rounded-3xl">
          <div className="">
            <img
              src={project1}
              alt="Project 1"
              className="sm:w-60 drop-shadow-2xl sm:h-[150px] md:w-80 md:h-[200px] rounded-3xl"
            />
          </div>
          <h2 className="text-black pt-5">Ecommerce Project</h2>

          <p className="py-2 px-10">
            <b className="">Technologies Used :</b> Html, Css, Javascript,
            React,Node
          </p>
          <div className="text-black flex gap-3 ">
            <button className=" border-2 w-[118px] text-sm flex justify-center items-center h-10 border-solid py-2 px-4 rounded-full border-gray-400 hover:bg-black hover:text-white">
              Github
            </button>
            <button className=" border-2 w-[118px] text-sm flex justify-center items-center h-10 border-solid py-2 px-4 rounded-full border-gray-400 hover:bg-black hover:text-white">
              Live Demo
            </button>
          </div>
        </div>{" "}
        <div className=" bg-white sm:w-auto md:w-96 drop-shadow-2xl h-[485px] flex flex-col items-center justify-center  rounded-3xl">
          <div className="">
            <img
              src={project1}
              alt="Project 1"
              className="sm:w-60 drop-shadow-2xl sm:h-[150px] md:w-80 md:h-[200px] rounded-3xl"
            />
          </div>
          <h2 className="text-black pt-5">Ecommerce Project</h2>

          <p className="py-2 px-10">
            <b className="">Technologies Used :</b> Html, Css, Javascript,
            React,Node
          </p>
          <div className="text-black flex gap-3 ">
            <button className=" border-2 w-[118px] text-sm flex justify-center items-center h-10 border-solid py-2 px-4 rounded-full border-gray-400 hover:bg-black hover:text-white">
              Github
            </button>
            <button className=" border-2 w-[118px] text-sm flex justify-center items-center h-10 border-solid py-2 px-4 rounded-full border-gray-400 hover:bg-black hover:text-white">
              Live Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
