import { useState, useEffect } from "react";
import loading from "../assets/backgrounds/loading.webp";
import { ChevronsLeftRightEllipsis, Monitor } from "lucide-react";

interface LoadingPageProps {
  onFinish: (status: string) => void;
}

export default function LoadingPage({ onFinish }: LoadingPageProps) {
  const [stage, setStage] = useState<"start" | "loading">("start");
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (stage === "loading") {
      const fadeTimer = setTimeout(() => {
        setFadeOut(true);
      }, 6300);

      const finishTimer = setTimeout(() => {
        onFinish("loading finished");
      }, 6300 + 700);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(finishTimer);
      };
    }
  }, [stage, onFinish]);

  return (
    <div className="flex items-center justify-center flex-col gap-3 w-screen h-screen bg-[#090909] relative">
      {stage === "start" && (
        <div
          className="text-center text-white cursor-pointer"
          onClick={() => setStage("loading")}
        >
          <p className="text-lg font-minecraft2 animate-pulse" style={{ textShadow: "2px 2px 4px rgba(255, 255, 255, 1)" }}>Click to Start</p>
        </div>
      )}

      {stage === "loading" && (
        <div className="w-full h-full flex flex-col items-center justify-center">
          <div className="absolute inset-0 w-full h-full bg-[#090909]" />

          <img
            src={loading}
            alt="Loading..."
            className={`relative z-10 w-40 h-40 transition-opacity duration-700 ease-in-out ${fadeOut ? "opacity-0" : "opacity-100"
              }`}
          />

          <p className="relative z-10 mt-4 text-white font-minecraft2 text-lg">
            Loading...
          </p>
        </div>
      )}
      <div className="font-minecraft2 text-gray-500 text-sm">
        for better experience, please use desktop <Monitor className="inline w-4 h-4" />
      </div>
      <div className="absolute bottom-10 right-10 flex items-center text-white text-sm font-minecraft2">
        <ChevronsLeftRightEllipsis className="w-4 h-4 mr-2" />
        <span>Portfolio v1.0.0</span>
      </div>
    </div>
  );
}
