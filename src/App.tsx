import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./pages/Navbar";
import Hero from "./pages/Hero";
import AboutMe from "./pages/AboutMe";
import Footer from "./pages/Footer";
import ContactMe from "./pages/ContactMe";
import Certificate from "./pages/Certificate";
import LoadingPage from "./components/LoadingPage";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeInApp, setFadeInApp] = useState(false);
  const [loadingFinished, setLoadingFinished] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setFadeInApp(true);
      }, 50);

      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <>
      {isLoading ? (
        <LoadingPage
          onFinish={(status) => {
            if (status === "loading finished") {
              setIsLoading(false);
              setLoadingFinished(true);
            }
          }}
        />
      ) : (
        <div
          className={`transition-opacity duration-1000 ${fadeInApp ? "opacity-100" : "opacity-0"
            }`}
        >
          <Navbar loadingFinished={loadingFinished} />
          <main className="w-screen">
            {/* Hero Section */}
            <Hero />
            {/* About Me Section */}
            <AboutMe />
            {/* Certificate Section */}
            <Certificate />
            {/* Contact Me Section */}
            <ContactMe />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
