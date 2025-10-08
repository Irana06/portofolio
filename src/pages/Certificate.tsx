import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bootcampCert from "../assets/certificates/BootcampFE.png";
import internship from "../assets/certificates/InternshipJavan.png";
import training from "../assets/certificates/TrainingLaravel.png"
import PublicSpeaking from "../assets/certificates/PublicSpeaking.png"
import WaveDown from "../components/WaveDown";

export default function Certificate() {
  const certificates = [
    {
      title:
        "Mini BootCamp - Optimalisasi Task Dengan Alurkerja Untuk Front End",
      description:
        "Honored with this certificate of completion for their role as a PARTICIPANT in the MINI BOOTCAMP - OPTIMALISASI TASK DENGAN ALURKERJA UNTUK FRONT END conducted on November 15, 2024.",
      category: "Bootcamp",
      institution: "Geek Academy",
      certIMG: bootcampCert,
    },
    {
      title: "Program Pemagangan di PT Javan Cipta Solusi",
      description:
        'Has participated in "Program Pemagangan di PT Javan Cipta Solusi" on July 17, 2024 to January 20, 2025 as a Programmer.',
      category: "Internship",
      institution: "PT. Javan Cipta Solusi",
      certIMG: internship,
    },
    {
      title:
        "Meningkatkan Kemampuan Dasar Pemrograman Web Dengan Pelatihan dan Pengembangan Framework",
      description:
        'In the Community Service activity with the theme "Meningkatkan Kemampuan Dasar Pemrograman Web Dengan Pelatihan dan Pengembangan Framework" organized by the Computer Engineering Student Association of Yogyakarta Technology University on May 22, 2024',
      category: "Training",
      institution:
        "Computer Engineering Student Association-Yogyakarta University of Technology",
      certIMG: training,
    },
    {
      title: "Let's Be A Great Master of Ceremony",
      description:
        'In the public speaking training event "let\'s be a great master of ceremony" organized by the Prodamat group of Islamic Religious Education Masters students at UAD, 3 November 2023.',
      category: "Public Speaking",
      institution: "Prodamat-MPAIUAD",
      certIMG: PublicSpeaking,
    },
  ];

  return (
    <section id="certificate" className="relative min-h-screen py-32">
      <WaveDown />

      <div className="py-12 md:py-16 lg:py-20">
        <h1 className="text-center text-3xl font-minecraft2 font-semibold capitalize text-gray-100 lg:text-4xl">
          My <span className="text-red-700">Certificate</span>
        </h1>
        <div className="mx-auto mt-6 flex justify-center">
          <span className="inline-block h-1 w-1 rounded-full bg-red-700"></span>
          <span className="mx-1 inline-block h-1 w-3 rounded-full bg-red-700"></span>
          <span className="inline-block h-1 w-40 rounded-full bg-red-700"></span>
          <span className="mx-1 inline-block h-1 w-3 rounded-full bg-red-700"></span>
          <span className="inline-block h-1 w-1 rounded-full bg-red-700"></span>
        </div>
        {/* <h1 className="text-center text-2xl font-base capitalize text-gray-500 lg:text-2xl mt-6">
          <span className="block xl:inline"></span>
        </h1> */}
      </div>
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 items-stretch">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="rounded overflow-hidden shadow-lg flex flex-col h-full"
            >
              <div className="relative">
                <div>
                  <img src={cert.certIMG} alt="Certificate" className="w-full" />
                  <div className="hover:bg-transparent transition duration-300 absolute cursor-pointer bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                </div>
                <span className="cursor-default">
                  <div className="text-xs absolute top-0 right-0 bg-gray-800 shadow-md shadow-white/50 px-4 py-2 text-white mt-3 mr-3 rounded-md hover:bg-white hover:text-gray-600 transition duration-500 ease-in-out">
                    {cert.category}
                  </div>
                </span>
              </div>
              <div className="px-6 py-4 mb-auto bg-gray-900 flex flex-col flex-grow">
                <span className="font-medium text-lg inline-block cursor-pointer text-gray-200 hover:text-gray-600 transition duration-500 ease-in-out mb-2">
                  {cert.title}
                </span>
                <p className="text-gray-500 text-sm text-justify">
                  {cert.description}
                </p>
              </div>
              <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
                <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center pointer-events-none">
                  <FontAwesomeIcon icon={faGraduationCap} className="h-4 w-4" />
                  <span className="ml-1">{cert.institution}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
