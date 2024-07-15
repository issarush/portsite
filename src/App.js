import Spline from "@splinetool/react-spline";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";

import resume from "./Rushi_Patel_Resume.pdf";
import rushipic from "./images/rushipic3.jpg";
import { SocialLinks } from "./data";

function App() {
  const [isActive, setIsActive] = useState(false);
  return (
    <AnimatePresence initial={false}>
      <div className="flex w-screen min-h-screen flex-col items-center justify-center relative bg-primary">
        {/* Navigation Bar */}
        <nav className="w-full px-6 z-50 fixed inset-x-0 top-2 flex justify-center items-center">
          <div className="w-full md:w-880 bg-navBar p-4 rounded-2xl flex items-center">
            <p className="text-lg text-slate-200 font-medium">Rushi Patel</p>

            <div className="hidden md:flex items-center gap-6 ml-6 flex-1">
              <a
                href="#home"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
              >
                Home
              </a>

              <a
                href="#about"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
              >
                About
              </a>

              {/*<a
                href="#projects"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
              >
                Projects
               </a>*/}

              <a
                href="#contact"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
              >
                Contact
              </a>

              <a
                href={resume}
                target="_blank"
                rel="noreferrer"
                className="ml-auto text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in-out"
              >
                Resume
              </a>
            </div>

            <motion.div
              whileTap={{ scale: 0.5 }}
              className="block md:hidden ml-auto cursor-pointer"
              onClick={() => setIsActive(!isActive)}
            >
              <IoMenu className=" text-2xl text-textBase" />
            </motion.div>

            {isActive && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1.1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ delay: "0.1s", type: "spring" }}
                className="p-4 w-275 bg-navBar rounded-lg fixed top-24 right-16 flex flex-col items-center justify-evenly gap-6"
              >
                <a
                  href="#home"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                  onClick={() => setIsActive(false)}
                >
                  Home
                </a>

                <a
                  href="#about"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                  onClick={() => setIsActive(false)}
                >
                  About
                </a>

                {/*<a
                  href="#projects"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                  onClick={() => setIsActive(false)}
                >
                  Projects
                </a>*/}

                <a
                  href="#contact"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                  onClick={() => setIsActive(false)}
                >
                  Contact
                </a>

                <motion.a
                  whileTap={{ scale: 0.8 }}
                  href={resume}
                  target="_blank"
                  rel="noreferrer"
                  className=" text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in-out"
                  onClick={() => setIsActive(false)}
                >
                  Resume
                </motion.a>
              </motion.div>
            )}
          </div>
        </nav>

        {/* Spline section */}
        <section id="home">
          <div
            className="relative w-screen h-screen hidden sm:block"
            id="spline"
          >
            <Spline scene="https://draft.spline.design/w2qxC5LVnfRhu9ad/scene.splinecode" />
            <div className="absolute bottom-10 w-full justify-center items-center flex ">
              <div className="shadow-md p-4 flex items-center justify-center bg-zinc-900 rounded-3xl">
                <p className="text-textBase ">Click to interact</p>
              </div>
            </div>
          </div>
          <div className="relative w-screen h-screen sm:hidden" id="spline">
            <Spline scene="https://prod.spline.design/BAM4-3qugMZFaT2a/scene.splinecode" />
          </div>
        </section>
        {/* Main sections */}

        <main className="w-[80%] mt-5">
          {/* About section*/}
          <section
            className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-24"
            id="about"
          >
            {/* Image box */}
            <div className="w-full h-420  flex items-center justify-center ">
              <div className="w-275 h-340 bg-red-400 rounded-xl relative bottom-10 hover:bottom-9 hover:bg-red-300">
                <img
                  className="w-full h-full absolute -right-2 top-2 object-cover rounded-xl shadow-md"
                  src={rushipic}
                  alt="Rushi Patel"
                />
              </div>
            </div>
            {/* Content box */}
            <div className="w-full h-420 flex flex-col items-center justify-center">
              <p className="text-2xl text-gray-400 text-center ">
                <span className="text-cyan-500"> Hi</span>, My name is{" "}
                <span className="text-cyan-500"> Rushi. </span> I'm a recent
                graduate from
                <span className="text-cyan-600"> CUNY Queens College </span>
                with a Bachelor's degree in
                <span className="text-cyan-600"> Computer Science</span>, and
                I'm passionate about building{" "}
                <span className="text-[#ADD3D0]">
                  innovative, technical solutions
                </span>{" "}
                with my experience on{" "}
                <span className="text-[#ADD3D0]">Full-stack development</span>.
              </p>
              <motion.button
                whileTap={{ scale: 0.8 }}
                class="w-full md:w-auto relative mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-visible text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 hover:shadow-lg hover:shadow-teal-500/50 hover:dark:shadow-lg hover:dark:shadow-teal-800/80"
              >
                <span class="w-full md:w-auto relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  <a href={resume} target="_blank" rel="noreferrer">
                    Resume
                  </a>
                </span>
              </motion.button>
            </div>
          </section>

          {/* Contact section */}
          <section
            className="flex flex-col items-center justify-center w-full my-24"
            id="contact"
          >
            <p className="text-2xl text-cyan-500 capitalize">
              Let's get to know each other!
            </p>
            <div className="flex items-center justify-center w-full my-4 flex-wrap gap-4">
              {SocialLinks &&
                SocialLinks.map((n) => (
                  <motion.a
                    whileTap={{ scale: 0.8 }}
                    key={n.id}
                    href={n.link}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full md:w-auto px-3 md:px-8 py-5 border border-zinc-800 rounded-xl hover:border-zinc-600 duration-100 ease-in-out cursor-pointer flex items-center justify-center gap-3"
                  >
                    {n.iconSrc}
                    <p className="text-lg text-textBase">{n.name}</p>
                  </motion.a>
                ))}
            </div>
          </section>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
