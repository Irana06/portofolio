import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import book from "../assets/overlays/Dungeon_Enchanter's_Tome.png";
import bookBg from "../assets/overlays/Book_Page.png";
import {
  faEnvelope,
  faLocationDot,
  faPaperPlane,
  faSquareXmark,
} from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faInstagram,
  faTelegram,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import enderchest_opened from "../assets/sfx/enderchest_opened.mp3";
import enderchest_closed from "../assets/sfx/enderchest_closed.mp3";
import exp_orb from "../assets/sfx/exp_orb.mp3";

export default function ContactMe() {
  const [isOpen, setIsOpen] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const enderOpen = new Audio(enderchest_opened);
  const enderClose = new Audio(enderchest_closed);
  const expOrb = new Audio(exp_orb);

  const sosmedLinks = [
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
      color: "text-gray-800",
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
    <section id="contact" className="container mx-auto px-4 py-16 font-minecraft2">
      <div className="py-12 md:py-16 lg:py-20">
        <h1 className="text-center text-3xl font-minecraft2 font-semibold capitalize text-gray-100 lg:text-4xl">
          Get in <span className="text-green-600">Touch</span>
        </h1>
        <div className="mx-auto mt-6 flex justify-center">
          <span className="inline-block h-1 w-1 rounded-full bg-green-600"></span>
          <span className="mx-1 inline-block h-1 w-3 rounded-full bg-green-600"></span>
          <span className="inline-block h-1 w-40 rounded-full bg-green-600"></span>
          <span className="mx-1 inline-block h-1 w-3 rounded-full bg-green-600"></span>
          <span className="inline-block h-1 w-1 rounded-full bg-green-600"></span>
        </div>
      </div>

      {/* Book Button */}
      {!isOpen && (
        <div className="flex justify-center mb-8 animate-float">
          <img
            src={book}
            alt="Book Overlay"
            className="w-64 h-auto cursor-pointer transition-all duration-300 opacity-60 hover:opacity-100 hover:scale-110"
            onClick={() => {
              setIsOpen(true);
              setFadeOut(false);
              enderOpen.play();
            }}
          />
          <span
            className="absolute mt-32 -top-8 text-2xl font-semibold pointer-events-none text-gray-300"
            style={{ textShadow: "2px 2px 4px rgba(255, 255, 255, 1)" }}
          >
            Open the Book
          </span>
        </div>
      )}

      {isOpen && (
        <>
          {/* Desktop */}
          <div
            className={`hidden md:flex relative w-full max-w-5xl mx-auto bg-center bg-no-repeat bg-contain items-center justify-center 
              ${fadeOut ? "fade-out" : "fade-in"}`}
            style={{
              backgroundImage: `url(${bookBg})`,
            }}
            onAnimationEnd={() => {
              if (fadeOut) {
                setIsOpen(false);
                setFadeOut(false);
              }
            }}
          >
            <div className="grid grid-cols-2 w-full h-full px-12 py-10">
              {/* Contact Information */}
              <div className="flex flex-col text-gray-800 pr-8 pl-8 pt-6 pb-8">
                <h2 className="text-lg text-green-600 mb-8 relative pb-2">
                  Contact Information
                  <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-green-500"></span>
                </h2>

                {/* Location */}
                <div className="flex items-start gap-3 mb-6">
                  <div className="w-8 h-8 bg-green-500 flex items-center justify-center rounded-md text-white text-sm">
                    <FontAwesomeIcon icon={faLocationDot} />
                  </div>
                  <div>
                    <h3 className="text-md mb-1">My Location</h3>
                    <p className="text-gray-600">Sleman, Yogyakarta</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3 mb-6">
                  <div className="w-8 h-8 bg-green-500 flex items-center justify-center rounded-md text-white text-sm">
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </div>
                  <div>
                    <h3 className="text-md mb-1">WhatsApp</h3>
                    <a
                      href="https://wa.me/6285725841667"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-green-600"
                    >
                      +62 857 2584 1667
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3 mb-6">
                  <div className="w-8 h-8 bg-green-500 flex items-center justify-center rounded-md text-white text-sm">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div>
                    <h3 className="text-md mb-1">Email</h3>
                    <a
                      href="mailto:kirainova11@gmail.com"
                      className="text-gray-600 hover:text-green-600"
                    >
                      kirainova11@gmail.com
                    </a>
                  </div>
                </div>

                {/* Social Media */}
                <div className="flex gap-4 mt-auto justify-center">
                  {sosmedLinks.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-9 h-9 bg-gray-700 hover:bg-gray-700/40 flex items-center justify-center rounded-md text-white hover:${item.color} transition`}
                    >
                      <FontAwesomeIcon icon={item.icon} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <div className="pl-6 pr-6 pt-6">
                <h2 className="text-xl text-green-600 mb-8 relative pb-2">
                  Send Me a Message
                  <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-green-500"></span>
                </h2>

                <form
                  action="https://formspree.io/f/mpwyzgrn"
                  method="POST"
                  className="space-y-5 max-w-sm mx-auto"
                >
                  <div>
                    <label htmlFor="name" className="block mb-1 text-gray-700">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full p-2.5 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-1 text-gray-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full p-2.5 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block mb-1 text-gray-700">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full p-2.5 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-1 text-gray-700">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full p-2.5 border border-gray-400 rounded-md min-h-[100px] resize-y focus:outline-none focus:ring-2 focus:ring-green-400"
                      required
                    ></textarea>
                  </div>

                  <div className="flex justify-between">
                    <button
                      type="submit"
                      onClick={() => expOrb.play()}
                      className="flex items-center gap-2 bg-green-600 text-white font-bold py-2 px-5 rounded-md hover:scale-105 transition"
                    >
                      <FontAwesomeIcon icon={faPaperPlane} /> Send
                    </button>
                    <a
                      onClick={() => {
                        setFadeOut(true);
                        enderClose.play();
                      }}
                      className="flex items-center gap-2 bg-red-600 text-white font-bold py-2 px-5 rounded-md hover:text-white hover:scale-105 transition cursor-pointer"
                    >
                      <FontAwesomeIcon icon={faSquareXmark} /> Close
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Mobile */}
          <div
            className={`block md:hidden container mx-auto px-4 py-8 
              ${fadeOut ? "fade-out" : "fade-in"}`}
            onAnimationEnd={() => {
              if (fadeOut) {
                setIsOpen(false);
                setFadeOut(false);
              }
            }}
          >
            <div className="grid gap-8 bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Contact Information */}
              <div className="p-6 bg-gray-800 text-white">
                <h2 className="text-xl text-blue-400 mb-6 relative pb-2">
                  Contact Information
                  <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-500"></span>
                </h2>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 bg-blue-500 flex items-center justify-center rounded-full text-lg">
                    <FontAwesomeIcon icon={faLocationDot} />
                  </div>
                  <div>
                    <h3 className="text-md mb-1">My Location</h3>
                    <p className="text-gray-300">Sleman, Yogyakarta</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 bg-blue-500 flex items-center justify-center rounded-full text-lg">
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </div>
                  <div>
                    <h3 className="text-md mb-1">WhatsApp</h3>
                    <a
                      href="https://wa.me/6285725841667"
                      className="text-gray-300 hover:text-blue-400"
                    >
                      +62 857 2584 1667
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 bg-blue-500 flex items-center justify-center rounded-full text-lg">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div>
                    <h3 className="text-md mb-1">Email</h3>
                    <a
                      href="mailto:kirainova11@gmail.com"
                      className="text-gray-300 hover:text-blue-400"
                    >
                      kirainova11@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex gap-4 mt-6">
                  {sosmedLinks.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 bg-gray-700 flex items-center justify-center rounded-full text-white hover:scale-105 transition"
                    >
                      <FontAwesomeIcon icon={item.icon} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <div className="p-6">
                <h2 className="text-xl text-blue-500 mb-6 relative pb-2">
                  Send Me a Message
                  <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-500"></span>
                </h2>
                <form
                  action="https://formspree.io/f/mpwyzgrn"
                  method="POST"
                  className="space-y-4"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-1 font-medium text-gray-700"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-1 font-medium text-gray-700"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block mb-1 font-medium text-gray-700"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block mb-1 font-medium text-gray-700"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full p-2 border border-gray-300 rounded-md min-h-[100px] resize-y focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                      required
                    ></textarea>
                  </div>
                  <div className="flex justify-between">
                    <button
                      type="submit"
                      onClick={() => expOrb.play()}
                      className="flex items-center gap-2 bg-gradient-to-br from-blue-500 to-blue-400 text-white font-semibold py-2 px-4 rounded-full hover:scale-105 transition"
                    >
                      <FontAwesomeIcon icon={faPaperPlane} /> Send Message
                    </button>
                    <a
                      onClick={() => {
                        setFadeOut(true);
                        enderClose.play();
                      }}
                      className="flex items-center gap-2 bg-red-600 text-white font-bold py-2 px-5 rounded-md hover:text-white hover:scale-105 transition cursor-pointer"
                    >
                      <FontAwesomeIcon icon={faSquareXmark} /> Close
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
