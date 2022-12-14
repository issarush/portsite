import { IoLogoLinkedin, IoMail, IoLogoGithub } from "react-icons/io5";

export const SocialLinks = [
  {
    id: 1,
    iconSrc: (
      <IoLogoLinkedin className="text-blue-500 text-3xl cursor-pointer" />
    ),
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ruship18/",
  },
  {
    id: 2,
    iconSrc: (
      <IoLogoGithub className=" text-zinc-200 text-3xl cursor-pointer" />
    ),
    name: "Github",
    link: "https://github.com/issarush",
  },
  {
    id: 3,
    iconSrc: <IoMail className="text-slate-300 text-3xl cursor-pointer" />,
    name: "ruship2267@gmail",
    link: "mailto:ruship2267@gmail.com",
  },
];
