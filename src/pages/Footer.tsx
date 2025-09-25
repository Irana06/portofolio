import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Avatar from "../assets/avatarHead.png";
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const footerNavs = [
    {
      href: "https://t.me/Yusufnovaa",
      name: "Telegram",
      icon: faTelegram,
      color: "text-blue-500",
    },
    {
      href: "https://github.com/Yusufnova06",
      name: "Github",
      icon: faGithub,
      color: "text-gray-300",
    },
    {
      href: "https://www.instagram.com/yusuf.novandra/",
      name: "Instagram",
      icon: faInstagram,
      color: "text-pink-500",
    },
    {
      href: "https://www.linkedin.com/in/yusuf-novandra-74705731a",
      name: "LinkedIn",
      icon: faLinkedinIn,
      color: "text-blue-700",
    },
  ];

  return (
    <footer className="text-white bg-slate-900 px-4 py-5 mx-auto md:px-8">
      <div className="max-w-lg sm:mx-auto sm:text-center">
        <div className="flex items-center justify-center">
          <img className="h-10 w-auto" src={Avatar} alt="" />
          <p className="font-minecraft2 inline-block rounded-lg px-2 py-1 text-sm font-medium text-white pointer-events-none">
            Yusufnova
          </p>
        </div>

        <p className="leading-relaxed mt-2 text-[15px] text-center">
          This site is a fan-made portfolio inspired by Minecraft. Minecraft is
          a trademark of Mojang Synergies AB.
        </p>
      </div>

      <div className="mt-8 ml-64 mr-64 items-center justify-between sm:flex">
        <div className="mt-4 sm:mt-0 text-xs text-center">
          &copy; 2025 Yusufnova. All rights reserved.
        </div>
        <div className="mt-6 sm:mt-0">
          <ul className="flex items-center justify-center space-x-4">
            {footerNavs.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group flex flex-col items-center"
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  className={`svg-icon w-8 h-8 mx-auto ${item.color}`}
                />

                {/* Tooltip */}
                <span className="absolute -top-10 opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-200 delay-75 bg-slate-500 items-center rounded-full px-3 py-1 text-sm font-medium text-white whitespace-nowrap shadow-lg">
                  {item.name}
                </span>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
