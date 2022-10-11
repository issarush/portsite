import Spline from "@splinetool/react-spline";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";

import rushipic from "./images/rushipic3.jpg";
import { SocialLinks } from "./data";

function App() {
  const [isActive, setIsActive] = useState(false);
  return (
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

            <a
              href="#projects"
              className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
            >
              Contact
            </a>

            <a
              href="/src/RushiPatel_Resume.pdf"
              download
              className="ml-auto text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in-out"
            >
              Download
            </a>
          </div>

          <div
            className="block md:hidden ml-auto cursor-pointer"
            onClick={() => setIsActive(!isActive)}
          >
            <IoMenu className=" text-2xl text-textBase" />
          </div>

          {isActive && (
            <div className="p-4 w-275 bg-navBar rounded-lg fixed top-24 right-16 flex flex-col items-center justify-evenly gap-6">
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

              <a
                href="#projects"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                onClick={() => setIsActive(false)}
              >
                Projects
              </a>

              <a
                href="#contact"
                className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                onClick={() => setIsActive(false)}
              >
                Contact
              </a>

              <a
                href="/src/RushiPatel_Resume.pdf"
                download
                className=" text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in-out"
                onClick={() => setIsActive(false)}
              >
                Download
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Spline section */}
      <div className="relative w-screen h-screen" id="spline">
        <Spline scene="https://draft.spline.design/w2qxC5LVnfRhu9ad/scene.splinecode" />

        <div className="absolute bottom-10 w-full justify-center items-center flex ">
          <div className="shadow-md p-4 flex items-center justify-center bg-zinc-900 rounded-3xl">
            <p className="text-textBase ">Click to interact</p>
          </div>
        </div>
      </div>

      {/* Main sections */}

      <main className="w-[80%] mt-5">
        {/* About section*/}
        <section
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-24"
          id="about"
        >
          {/* Image box */}
          <div className="w-full h-420 flex items-center justify-center ">
            <div className="w-275 h-340 bg-red-400 rounded-xl relative hover:bottom-1 hover:bg-red-300">
              <img
                className="w-full h-full absolute -right-2 top-2 object-cover rounded-xl shadow-md"
                src={rushipic}
                alt="Rushi Patel"
              />
            </div>
          </div>
          {/* Content box */}
          <div className="w-full h-420 flex flex-col items-center justify-center">
            <p className="text-lg text-textBase text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod vero
              distinctio deserunt commodi enim tenetur illum, laborum fugit quos
              iste libero debitis possimus quisquam quas magnam facere
              assumenda, dolores sed. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Qui incidunt assumenda accusantium similique
              recusandae voluptate aperiam, dolorem omnis et nostrum commodi
              reprehenderit cumque sunt? Mollitia cupiditate officia laboriosam
              sunt consectetur.
            </p>
            <button class="w-full md:w-auto relative mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 hover:shadow-lg hover:shadow-teal-500/50 hover:dark:shadow-lg hover:dark:shadow-teal-800/80">
              <span class="w-full md:w-auto relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Download
              </span>
            </button>
          </div>
        </section>

        {/* Contact section */}
        <section className="flex flex-col items-center justify-center w-full my-24">
          <p className="text-2xl text-gray-100 capitalize">Follow me on</p>
          <div className="flex items-center justify-center w-full my-4 flex-wrap gap-4">
            {SocialLinks &&
              SocialLinks.map((n) => (
                <a
                  key={n.id}
                  href="#about"
                  className="w-full md:w-auto px-3 md:px-8 py-5 border border-zinc-800 rounded-xl hover:border-zinc-600 duration-100 ease-in-out cursor-pointer flex items-center justify-center gap-3"
                >
                  {n.iconSrc}
                  <p className="text-lg text-textBase">{n.name}</p>
                </a>
              ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
