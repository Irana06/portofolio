export default function WaveTop() {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
      <div className="absolute bottom-0 w-[200%] h-20 animate-waveMedium opacity-80 flex">
        <svg
          className="w-1/2 h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,49 C150,89 350,9 600,49 C850,89 1050,9 1200,49 L1200,120 L0,120 Z"
            className="fill-[#afafaf]/30"
          />
        </svg>
        <svg
          className="w-1/2 h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,49 C150,89 350,9 600,49 C850,89 1050,9 1200,49 L1200,120 L0,120 Z"
            className="fill-[#afafaf]/30"
          />
        </svg>
      </div>

      <div className="absolute bottom-0 w-[200%] h-20 animate-waveSlow opacity-60 flex">
        <svg
          className="w-1/2 h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,49 C150,89 350,9 600,49 C850,89 1050,9 1200,49 L1200,120 L0,120 Z"
            className="fill-[#d8b0b0]/30"
          />
        </svg>
        <svg
          className="w-1/2 h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,49 C150,89 350,9 600,49 C850,89 1050,9 1200,49 L1200,120 L0,120 Z"
            className="fill-[#d8b0b0]/30"
          />
        </svg>
      </div>

      <div className="relative w-[200%] h-20 animate-waveFast flex">
        <svg
          className="w-1/2 h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,49 C150,89 350,9 600,49 C850,89 1050,9 1200,49 L1200,120 L0,120 Z"
            className="fill-[#090909]"
          />
        </svg>
        <svg
          className="w-1/2 h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,49 C150,89 350,9 600,49 C850,89 1050,9 1200,49 L1200,120 L0,120 Z"
            className="fill-[#090909]"
          />
        </svg>
      </div>
    </div>
  );
}
