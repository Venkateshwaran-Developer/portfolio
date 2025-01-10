
import { IoCallOutline, IoLocationOutline, IoMailOutline } from "react-icons/io5";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';
import navIcon5 from '../assets/img/nav-icon5.svg'; 

const Contact = () => {
  return (
    <div id="contact" className="h-auto w-full">
      <section
        className="grid sm:grid-cols-1 md:grid-cols-2 gap-5 lg:px-52 lg:py-16 sm:p-10  bg-black text-white"
        id="contact"
      >
        <div className=" sm:pb-10 flex flex-col justify-center items-center gap-8 ">
          <div className="flex gap-2 ">
           
            <div className="flex flex-col gap-6 ">
              <h2 className="text-[38px] font-bold">
                Please Drop a Message
              </h2>
              <p className="text-gray-400">
                Get in touch. Fill out the form
                and i’ll be in touch as soon as possible.
              </p>
            </div>
          </div>

          <ul className=" flex flex-col gap-4">
            <li className="flex gap-3">
              <div className="">
                <IoLocationOutline className="text-[28px]"/>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-[18px] font-bold">Address:</h3>

                <address className="text-gray-400">
                  Tiruppur,Tamilnadu-641666.
                </address>
              </div>
            </li>

            <li className="flex gap-3">
              <div className="">
                <IoCallOutline className="text-[28px]"/>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-[18px] font-bold">Phone:</h3>

                <a href="tel:+919944179753" className="text-gray-400">
                  +91 9944179753
                </a>

                
              </div>
            </li>

            <li className="flex gap-3">
              <div className="">
              <IoMailOutline className="text-[28px]"/>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-[18px] font-bold">Email:</h3>

                <a href="mailto:venkateshwaranstv@gmail.com" className="text-gray-400">
                  venkateshwaranstv@gmail.com
                </a>

               
              </div>
            </li>

            <li>
              <ul className=" flex flex-row gap-4">
                <li className="bg-rgba hover:bg-white rounded-full h-[40px] flex items-center justify-center w-[40px] text-black">
                  <a href="https://www.linkedin.com/in/venkat-fsd"><img src={navIcon1} alt="" /></a>
                </li>

                <li className="bg-rgba hover:bg-white rounded-full h-[40px] flex items-center justify-center w-[40px] text-black">
                  <a href="https://github.com/Venkateshwaran-Developer"><img src={navIcon2} alt="" /></a>
                </li>

                <li className=" border bg-rgba hover:bg-white rounded-full h-[40px] flex items-center justify-center w-[40px] text-black">
                  <a href="mailto:venkateshwaranstv@gmail.com"><img src={navIcon4} alt="" /></a>
                </li>

                <li className="bg-rgba hover:bg-white rounded-full h-[40px] flex items-center justify-center w-[40px] text-black">
                 <a href="https://wa.me/+919944179753"><img src={navIcon5} alt="" /></a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <form action="" className=" flex flex-col bg-white gap-3 h-auto w-auto lg:w-[400px]  px-[52px] py-[20px] rounded-xl">
          <div className="form-wrapper">
            <label htmlFor="name" className="text-black form-label">
              Name
            </label>

            <div className="input-wrapper">
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Your Name"
                className="w-[100%] rounded-lg h-[35px] px-[10px] bg-black"
              />

              <ion-icon name="person-circle"></ion-icon>
            </div>
          </div>

          <div className="form-wrapper">
            <label htmlFor="email" className="text-black form-label">
              Email
            </label>

            <div className="input-wrapper">
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="you@mail.com"
                className="w-[100%] rounded-lg h-[35px] px-[10px] bg-black"
              />

              <ion-icon name="mail"></ion-icon>
            </div>
          </div>

          <div className="form-wrapper">
            <label htmlFor="phone" className="text-black form-label">
              Phone
            </label>

            <div className="input-wrapper">
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                placeholder="Phone Number"
                className="w-[100%] rounded-lg h-[35px] px-[10px] bg-black"
              />

              <ion-icon name="call"></ion-icon>
            </div>
          </div>

          <div className="form-wrapper">
            <label htmlFor="message" className="text-black form-label">
              Message
            </label>

            <div className="input-wrapper">
              <textarea
                name="message"
                id="message"
                required
                placeholder="Write message..."
                className="w-[100%] rounded-lg h-[150px] px-[10px] py-[10px] bg-black"
              ></textarea>

              <ion-icon name="chatbubbles"></ion-icon>
            </div>
          </div>

          <button type="submit" className="text-white bg-black py-2 rounded-lg">
            Send
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
