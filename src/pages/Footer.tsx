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
    <footer className="text-white bg-slate-900">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Logo & text */}
        <div className="text-center">
          <div className="flex items-center justify-center">
            <img className="h-10 w-auto" src={Avatar} alt="avatar" />
            <p className="font-minecraft2 ml-2 rounded-lg px-2 py-1 text-sm font-medium text-white">
              Yusufnova
            </p>
          </div>
          <p className="leading-relaxed mt-3 text-[15px] text-gray-300">
            This site is a fan-made portfolio inspired by Minecraft. <br />
            Minecraft is a trademark of Mojang Synergies AB.
          </p>
        </div>

        {/* Bottom section */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-gray-700 pt-6">
          <div className="text-xs text-gray-400 text-center sm:text-left">
            &copy; 2025 Yusufnova. All rights reserved.
          </div>

          {/* Social links */}
          <ul className="flex items-center justify-center space-x-6">
            {footerNavs.map((item, idx) => (
              <li key={idx} className="relative group">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center"
                >
                  <FontAwesomeIcon
                    icon={item.icon}
                    className={`w-6 h-6 ${item.color}`}
                  />
                  {/* Tooltip */}
                  <span className="absolute -top-10 opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-200 delay-75 bg-slate-700 px-3 py-1 rounded-full text-sm text-white shadow-lg whitespace-nowrap">
                    {item.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
