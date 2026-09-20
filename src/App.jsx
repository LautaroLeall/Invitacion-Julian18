import { useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import Landing from "./components/Landing";
import Misa from "./components/Misa";
import Fiesta from "./components/Fiesta";
import AudioController from "./components/AudioController";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [activeScreen, setActiveScreen] = useState("landing"); // 'landing', 'misa', 'fiesta'
  const [isMuted, setIsMuted] = useState(true); // Default muted to comply with autoplay policies

  const toggleMute = () => setIsMuted((prev) => !prev);

  return (
    <>
      <AudioController activeScreen={activeScreen} isMuted={isMuted} />
      <motion.button
        whileTap={{ scale: 0.85 }}
        onClick={toggleMute}
        className="fixed top-4 right-4 z-50 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-line bg-navy-950/60 text-gold-400 backdrop-blur-md transition-colors hover:bg-navy-900 focus-visible:outline-2 focus-visible:outline-gold-400 focus-visible:outline-offset-2"
        aria-label="Activar o silenciar la música"
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </motion.button>

      <div className="relative h-full w-full">
        <AnimatePresence mode="wait">
          {activeScreen === "landing" && (
            <Landing key="landing" onNavigate={setActiveScreen} />
          )}
          {activeScreen === "misa" && (
            <Misa key="misa" onNavigate={setActiveScreen} />
          )}
          {activeScreen === "fiesta" && (
            <Fiesta key="fiesta" onNavigate={setActiveScreen} />
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
