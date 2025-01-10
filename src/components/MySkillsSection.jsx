import { useRef } from "react";

const MySkillsSection = () => {
  const tooltipRef = useRef(null);
  // const containerRef = useRef(null);
  return (
    <section
    id="skills"
      className=" h-full w-full grid md:grid-cols-2 py-20 sm:grid-cols-1 place-content-center place-items-center  bg-black text-white "
      
    >
      <div className="flex flex-col p-10 items-center md:items-start  h-full justify-center">
        <h2 className=" md:text-5xl text-3xl font-bold text-center md:text-start">
          What My Programming <br /> Skills Included?
        </h2>

        <p className=" text-gray-500 text-center md:text-start">
          I develop simple, intuitive and responsive user interface that helps
          <br />
          users get things done with less effort and time with those
          <br />
          technologies.
        </p>

        {/* <div className=" flex bg-white text-black px-4 py-2 justify-between items-center rounded-full w-[200px]">
      <p className="px-4 py-2 rounded-3xl hover:bg-red-500">Tools</p>

      <p className="px-4 py-2 rounded-3xl hover:bg-red-500">Used</p>
    </div> */}
      </div>

      <div className="   w-full h-full ">
        <ul className="  grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 p-10 lg:p-20">
          <li className="">
            <div
              // ref={containerRef}
              // onMouseEnter={(clientX) => {
              //   if (!tooltipRef.current || !containerRef.current) return;
              //   const { left } =
              //     (containerRef.current.getBoundingClientRect().tooltipRef.current.style.left =
              //       clientX - left + "px");
              // }}
              className=" p-4 bg-gray-900 rounded-3xl group relative flex flex-col items-center justify-center"
            >
              <div className="hover:scale-125">
                <img src="/img/html5.png" alt="HTML5 logo" />
              </div>
              <div ref={tooltipRef} className=" ">
                HTML5
              </div>
            </div>
          </li>

          <li>
            <div
              // ref={containerRef}
              // onMouseEnter={(clientX) => {
              //   if (!tooltipRef.current || !containerRef.current) return;
              //   const { left } =
              //     (containerRef.current.getBoundingClientRect().tooltipRef.current.style.left =
              //       clientX - left + "px");
              // }}
              className=" p-4 bg-gray-900 rounded-3xl group relative flex flex-col items-center justify-center"
            >
              <div className="hover:scale-125">
                <img src="/img/css3.png" alt="CSS3 logo" />
              </div>
              <div ref={tooltipRef}>CSS3</div>
            </div>
          </li>

          <li>
            <div
              // ref={containerRef}
              // onMouseEnter={(clientX) => {
              //   if (!tooltipRef.current || !containerRef.current) return;
              //   const { left } =
              //     (containerRef.current.getBoundingClientRect().tooltipRef.current.style.left =
              //       clientX - left + "px");
              // }}
              className=" p-4 bg-gray-900 rounded-3xl group relative flex flex-col items-center justify-center"
            >
              <div className="hover:scale-125">
                <img src="/img/javascript.png" alt="JavaScript logo" />
              </div>
              <div ref={tooltipRef}>JavaScript</div>
            </div>
          </li>

          <li>
            <div
              // ref={containerRef}
              // onMouseEnter={(clientX) => {
              //   if (!tooltipRef.current || !containerRef.current) return;
              //   const { left } =
              //     (containerRef.current.getBoundingClientRect().tooltipRef.current.style.left =
              //       clientX - left + "px");
              // }}
              className=" p-4 bg-gray-900 rounded-3xl group relative flex flex-col items-center justify-center"
            >
              <div className="hover:scale-125">
                <img src="/img/typescript.png" alt="TypeScript logo" />
              </div>
              <div ref={tooltipRef}>TypeScript</div>
            </div>
          </li>

          {/* <li>
            <div
              // ref={containerRef}
              // onMouseEnter={(clientX) => {
              //   if (!tooltipRef.current || !containerRef.current) return;
              //   const { left } =
              //     (containerRef.current.getBoundingClientRect().tooltipRef.current.style.left =
              //       clientX - left + "px");
              // }}
              className=" p-4 bg-gray-900 rounded-3xl group relative flex flex-col items-center justify-center"
            >
              <div className="hover:scale-125">
                <img src="/img/jquery.png" alt="jQuery logo" />
              </div>
              <div ref={tooltipRef}>jQuery</div>
            </div>
          </li> */}

          <li>
            <div
              // ref={containerRef}
              // onMouseEnter={(clientX) => {
              //   if (!tooltipRef.current || !containerRef.current) return;
              //   const { left } =
              //     (containerRef.current.getBoundingClientRect().tooltipRef.current.style.left =
              //       clientX - left + "px");
              // }}
              className=" p-4 bg-gray-900 rounded-3xl group relative flex flex-col items-center justify-center"
            >
              <div className="hover:scale-125">
                <img src="/img/bootstrap.png" alt="Bootstrap logo" />
              </div>
              <div ref={tooltipRef}>Bootstrap</div>
            </div>
          </li>

          {/* <li>
            <div
              // ref={containerRef}
              // onMouseEnter={(clientX) => {
              //   if (!tooltipRef.current || !containerRef.current) return;
              //   const { left } =
              //     (containerRef.current.getBoundingClientRect().tooltipRef.current.style.left =
              //       clientX - left + "px");
              // }}
              className=" p-4 bg-gray-900 rounded-3xl group relative flex flex-col items-center justify-center"
            >
              <div className="hover:scale-125">
                <img src="/img/angular.png" alt="Angular logo" />
              </div>
              <div ref={tooltipRef}>Angular</div>
            </div>
          </li> */}

          <li>
            <div
              // ref={containerRef}
              // onMouseEnter={(clientX) => {
              //   if (!tooltipRef.current || !containerRef.current) return;
              //   const { left } =
              //     (containerRef.current.getBoundingClientRect().tooltipRef.current.style.left =
              //       clientX - left + "px");
              // }}
              className=" p-4 bg-gray-900 rounded-3xl group relative flex flex-col items-center justify-center"
            >
              <div className="hover:scale-125">
                <img src="/img/react.png" alt="React logo" />
              </div>
              <div ref={tooltipRef}>React</div>
            </div>
          </li>

          {/* <li>
            <div
              // ref={containerRef}
              // onMouseEnter={(clientX) => {
              //   if (!tooltipRef.current || !containerRef.current) return;
              //   const { left } =
              //     (containerRef.current.getBoundingClientRect().tooltipRef.current.style.left =
              //       clientX - left + "px");
              // }}
              className=" p-4 bg-gray-900 rounded-3xl group relative flex flex-col items-center justify-center"
            >
              <div className="hover:scale-125">
                <img src="/img/vue.png" alt="Vue logo" />
              </div>
              <div ref={tooltipRef}>Vue</div>
            </div>
          </li> */}

          {/* <li>
            <div
              // ref={containerRef}
              // onMouseEnter={(clientX) => {
              //   if (!tooltipRef.current || !containerRef.current) return;
              //   const { left } =
              //     (containerRef.current.getBoundingClientRect().tooltipRef.current.style.left =
              //       clientX - left + "px");
              // }}
              className=" p-4 bg-gray-900 rounded-3xl group relative flex flex-col items-center justify-center"
            >
              <div className="hover:scale-125">
                <img src="/img/firebase.png" alt="Firebase logo" />
              </div>
              <div>Firebase</div>
            </div>
          </li> */}

          {/* <li>
            <div
              // ref={containerRef}
              // onMouseEnter={(clientX) => {
              //   if (!tooltipRef.current || !containerRef.current) return;
              //   const { left } =
              //     (containerRef.current.getBoundingClientRect().tooltipRef.current.style.left =
              //       clientX - left + "px");
              // }}
              className=" p-4 bg-gray-900 rounded-3xl group relative flex flex-col items-center justify-center"
            >
              <div className="hover:scale-125">
                <img src="/img/pugjs.png" alt="PugJs logo" />
              </div>
              <div ref={tooltipRef}>PugJs</div>
            </div>
          </li> */}

          {/* <li>
            <div
              // ref={containerRef}
              // onMouseEnter={(clientX) => {
              //   if (!tooltipRef.current || !containerRef.current) return;
              //   const { left } =
              //     (containerRef.current.getBoundingClientRect().tooltipRef.current.style.left =
              //       clientX - left + "px");
              // }}
              className=" p-4 bg-gray-900 rounded-3xl group relative flex flex-col items-center justify-center"
            >
              <div className="hover:scale-125">
                <img src="/img/sass.png" alt="SASS logo" />
              </div>
              <div ref={tooltipRef}>SASS</div>
            </div>
          </li> */}

          {/* <li>
            <div
              // ref={containerRef}
              // onMouseEnter={(clientX) => {
              //   if (!tooltipRef.current || !containerRef.current) return;
              //   const { left } =
              //     (containerRef.current.getBoundingClientRect().tooltipRef.current.style.left =
              //       clientX - left + "px");
              // }}
              className=" p-4 bg-gray-900 rounded-3xl group relative flex flex-col items-center justify-center"
            >
              <div className="hover:scale-125">
                <img src="/img/ajax.png" alt="Ajax logo" />
              </div>
              <div ref={tooltipRef}>Ajax</div>
            </div>
          </li> */}

          {/* <li>
            <div
              // ref={containerRef}
              // onMouseEnter={(clientX) => {
              //   if (!tooltipRef.current || !containerRef.current) return;
              //   const { left } =
              //     (containerRef.current.getBoundingClientRect().tooltipRef.current.style.left =
              //       clientX - left + "px");
              // }}
              className=" p-4 bg-gray-900 rounded-3xl group relative flex flex-col items-center justify-center"
            >
              <div className="hover:scale-125">
                <img src="/img/gulp.png" alt="Gulp logo" />
              </div>
              <div ref={tooltipRef}>Gulp</div>
            </div>
          </li> */}

          <li>
            <div
              // ref={containerRef}
              // onMouseEnter={(clientX) => {
              //   if (!tooltipRef.current || !containerRef.current) return;
              //   const { left } =
              //     (containerRef.current.getBoundingClientRect().tooltipRef.current.style.left =
              //       clientX - left + "px");
              // }}
              className=" p-4 bg-gray-900 rounded-3xl group relative flex flex-col items-center justify-center"
            >
              <div className="hover:scale-125">
                <img src="/img/webpack.png" alt="Webpack logo" />
              </div>
              <div ref={tooltipRef}>Webpack</div>
            </div>
          </li>

          <li>
            <div
              // ref={containerRef}
              // onMouseEnter={(clientX) => {
              //   if (!tooltipRef.current || !containerRef.current) return;
              //   const { left } =
              //     (containerRef.current.getBoundingClientRect().tooltipRef.current.style.left =
              //       clientX - left + "px");
              // }}
              className=" p-4 bg-gray-900 rounded-3xl group relative flex flex-col items-center justify-center"
            >
              <div className="hover:scale-125">
                <img src="/img/git.png" alt="Git logo" />
              </div>
              <div ref={tooltipRef}>Git</div>
            </div>
          </li>

          <li>
            <div
              // ref={containerRef}
              // onMouseEnter={(clientX) => {
              //   if (!tooltipRef.current || !containerRef.current) return;
              //   const { left } =
              //     (containerRef.current.getBoundingClientRect().tooltipRef.current.style.left =
              //       clientX - left + "px");
              // }}
              className=" p-4 bg-gray-900 rounded-3xl group relative flex flex-col items-center justify-center"
            >
              <div className="hover:scale-125">
                <img src="/img/npm.png" alt="Npm logo" />
              </div>
              <div ref={tooltipRef}>Npm</div>
            </div>
          </li>

          {/* <li>
            <div
              // ref={containerRef}
              // onMouseEnter={(clientX) => {
              //   if (!tooltipRef.current || !containerRef.current) return;
              //   const { left } =
              //     (containerRef.current.getBoundingClientRect().tooltipRef.current.style.left =
              //       clientX - left + "px");
              // }}
              className=" p-4 bg-gray-900 rounded-3xl group relative flex flex-col items-center justify-center"
            >
              <div className="hover:scale-125">
                <img src="/img/command.png" alt="Command Line logo" />
              </div>
              <div ref={tooltipRef}>Cmd</div>
            </div>
          </li> */}

          <li>
            <div
              // ref={containerRef}
              // onMouseEnter={(clientX) => {
              //   if (!tooltipRef.current || !containerRef.current) return;
              //   const { left } =
              //     (containerRef.current.getBoundingClientRect().tooltipRef.current.style.left =
              //       clientX - left + "px");
              // }}
              className=" p-4 bg-gray-900 rounded-3xl group relative flex flex-col items-center justify-center"
            >
              <div className="hover:scale-125">
                <img src="/img/vs-code.png" alt="VS Code logo" />
              </div>
              <div ref={tooltipRef}>VSCode</div>
            </div>
          </li>

          {/* <li>
            <div
              // ref={containerRef}
              // onMouseEnter={(clientX) => {
              //   if (!tooltipRef.current || !containerRef.current) return;
              //   const { left } =
              //     (containerRef.current.getBoundingClientRect().tooltipRef.current.style.left =
              //       clientX - left + "px");
              // }}
              className=" p-4 bg-gray-900 rounded-3xl group relative flex flex-col items-center justify-center"
            >
              <div className="hover:scale-125">
                <img src="/img/trello.png" alt="Trello logo" />
              </div>
              <div ref={tooltipRef}>Trello</div>
            </div>
          </li> */}

          {/* <li>
            <div
              // ref={containerRef}
              // onMouseEnter={(clientX) => {
              //   if (!tooltipRef.current || !containerRef.current) return;
              //   const { left } =
              //     (containerRef.current.getBoundingClientRect().tooltipRef.current.style.left =
              //       clientX - left + "px");
              // }}
              className=" p-4 bg-gray-900 rounded-3xl group relative flex flex-col items-center justify-center"
            >
              <div className="hover:scale-125">
                <img src="/img/clickup.png" alt="ClickUp logo" />
              </div>
              <div ref={tooltipRef}>ClickUp</div>
            </div>
          </li> */}

          {/* <li>
            <div
              // ref={containerRef}
              // onMouseEnter={(clientX) => {
              //   if (!tooltipRef.current || !containerRef.current) return;
              //   const { left } =
              //     (containerRef.current.getBoundingClientRect().tooltipRef.current.style.left =
              //       clientX - left + "px");
              // }}
              className=" p-4 bg-gray-900 rounded-3xl group relative flex flex-col items-center justify-center"
            >
              <div className="hover:scale-125">
                <img src="/img/slack.png" alt="Slack logo" />
              </div>

              <div ref={tooltipRef}>Slack</div>
            </div>
          </li> */}
          <li>
            <div
              // ref={containerRef}
              // onMouseEnter={(clientX) => {
              //   if (!tooltipRef.current || !containerRef.current) return;
              //   const { left } =
              //     (containerRef.current.getBoundingClientRect().tooltipRef.current.style.left =
              //       clientX - left + "px");
              // }}
              className=" p-4 bg-gray-900 rounded-3xl group relative flex flex-col items-center justify-center"
            >
              <div className="hover:scale-125 w-16 h-16">
                <img src="/img/8.png" alt="Photoshop logo" />
              </div>
              <div ref={tooltipRef}>Cpanel</div>
            </div>
          </li>
          <li>
            <div
              // ref={containerRef}
              // onMouseEnter={(clientX) => {
              //   if (!tooltipRef.current || !containerRef.current) return;
              //   const { left } =
              //     (containerRef.current.getBoundingClientRect().tooltipRef.current.style.left =
              //       clientX - left + "px");
              // }}
              className=" p-4 bg-gray-900 rounded-3xl group relative flex flex-col items-center justify-center"
            >
              <div className="hover:scale-125 w-12 h-14">
                <img src="/img/9.png" alt="Photoshop logo" />
              </div>
              <div ref={tooltipRef}>Wordpress</div>
            </div>
          </li>


          <li>
            <div
              // ref={containerRef}
              // onMouseEnter={(clientX) => {
              //   if (!tooltipRef.current || !containerRef.current) return;
              //   const { left } =
              //     (containerRef.current.getBoundingClientRect().tooltipRef.current.style.left =
              //       clientX - left + "px");
              // }}
              className=" p-4 bg-gray-900 rounded-3xl group relative flex flex-col items-center justify-center"
            >
              <div className="hover:scale-125 w-16 h-16">
                <img src="/img/photoshop.png" alt="Photoshop logo" />
              </div>
              <div ref={tooltipRef}>Photoshop</div>
            </div>
          </li>
          <li>
            <div
              // ref={containerRef}
              // onMouseEnter={(clientX) => {
              //   if (!tooltipRef.current || !containerRef.current) return;
              //   const { left } =
              //     (containerRef.current.getBoundingClientRect().tooltipRef.current.style.left =
              //       clientX - left + "px");
              // }}
              className=" p-4 bg-gray-900 rounded-3xl group relative flex flex-col items-center justify-center"
            >
              <div className="hover:scale-125 w-12 h-14">
                <img src="/img/1.png" alt="Photoshop logo" />
              </div>
              <div ref={tooltipRef}>GSAP</div>
            </div>
          </li>
          <li>
            <div
              // ref={containerRef}
              // onMouseEnter={(clientX) => {
              //   if (!tooltipRef.current || !containerRef.current) return;
              //   const { left } =
              //     (containerRef.current.getBoundingClientRect().tooltipRef.current.style.left =
              //       clientX - left + "px");
              // }}
              className=" p-4 bg-gray-900 rounded-3xl group relative flex flex-col items-center justify-center"
            >
              <div className="hover:scale-125 w-12 h-12">
                <img src="/img/2.png" alt="Photoshop logo" />
              </div>
              <div ref={tooltipRef}>Express</div>
            </div>
          </li>
          <li>
            <div
              // ref={containerRef}
              // onMouseEnter={(clientX) => {
              //   if (!tooltipRef.current || !containerRef.current) return;
              //   const { left } =
              //     (containerRef.current.getBoundingClientRect().tooltipRef.current.style.left =
              //       clientX - left + "px");
              // }}
              className=" p-4 bg-gray-900 rounded-3xl group relative flex flex-col items-center justify-center"
            >
              <div className="hover:scale-125">
                <img src="/img/3.png" alt="Photoshop logo" />
              </div>
              <div ref={tooltipRef}>MongoDB</div>
            </div>
          </li>
          <li>
            <div
              // ref={containerRef}
              // onMouseEnter={(clientX) => {
              //   if (!tooltipRef.current || !containerRef.current) return;
              //   const { left } =
              //     (containerRef.current.getBoundingClientRect().tooltipRef.current.style.left =
              //       clientX - left + "px");
              // }}
              className=" p-4 bg-gray-900 rounded-3xl group relative flex flex-col items-center justify-center"
            >
              <div className="hover:scale-125">
                <img src="/img/4.png" alt="Photoshop logo" />
              </div>
              <div ref={tooltipRef}>TailwindCss</div>
            </div>
          </li>
          <li>
            <div
              // ref={containerRef}
              // onMouseEnter={(clientX) => {
              //   if (!tooltipRef.current || !containerRef.current) return;
              //   const { left } =
              //     (containerRef.current.getBoundingClientRect().tooltipRef.current.style.left =
              //       clientX - left + "px");
              // }}
              className=" p-4 bg-gray-900 rounded-3xl group relative flex flex-col items-center justify-center"
            >
              <div className="hover:scale-125 w-10 h-12">
                <img src="/img/5.png" alt="Photoshop logo" />
              </div>
              <div ref={tooltipRef}>Node.js</div>
            </div>
          </li>
          <li>
            <div
              // ref={containerRef}
              // onMouseEnter={(clientX) => {
              //   if (!tooltipRef.current || !containerRef.current) return;
              //   const { left } =
              //     (containerRef.current.getBoundingClientRect().tooltipRef.current.style.left =
              //       clientX - left + "px");
              // }}
              className=" p-4 bg-gray-900 rounded-3xl group relative flex flex-col items-center justify-center"
            >
              <div className="hover:scale-125 w-20 h-12">
                <img src="/img/6.png" alt="Photoshop logo" />
              </div>
              <div ref={tooltipRef}>Framer</div>
            </div>
          </li>
          <li>
            <div
              // ref={containerRef}
              // onMouseEnter={(clientX) => {
              //   if (!tooltipRef.current || !containerRef.current) return;
              //   const { left } =
              //     (containerRef.current.getBoundingClientRect().tooltipRef.current.style.left =
              //       clientX - left + "px");
              // }}
              className=" p-4 bg-gray-900 rounded-3xl group relative flex flex-col items-center justify-center"
            >
              <div className="hover:scale-125 w-28 h-12">
                <img src="/img/7.png" alt="Photoshop logo" />
              </div>
              <div ref={tooltipRef}>Figma</div>
            </div>
          </li>
         
          {/* <li>
            <div
              // ref={containerRef}
              // onMouseEnter={(clientX) => {
              //   if (!tooltipRef.current || !containerRef.current) return;
              //   const { left } =
              //     (containerRef.current.getBoundingClientRect().tooltipRef.current.style.left =
              //       clientX - left + "px");
              // }}
              className=" p-4 bg-gray-900 rounded-3xl group relative flex flex-col items-center justify-center"
            >
              <div className="hover:scale-125">
                <img src="/img/adobe-xd.png" alt="Adobe XD logo" />
              </div>
              <div>AdobeXD</div>
            </div>
          </li> */}
        </ul>
      </div>
    </section>
  );
};

export default MySkillsSection;
