import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import Landing from "./components/Landing";
import Misa from "./components/Misa";
import Fiesta from "./components/Fiesta";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [activeScreen, setActiveScreen] = useState("landing"); // 'landing', 'misa', 'fiesta'
  const [isMuted, setIsMuted] = useState(false);

  // Referencias a los audios reales
  const misaAudio = useRef(null);
  const fiestaAudio = useRef(null);

  // Inicializar los audios (se hace así para evitar problemas con Next/SSR si hubiera, aunque acá es Vite puro)
  useEffect(() => {
    misaAudio.current = new Audio("/misa-audio.mp3");
    misaAudio.current.loop = true;

    fiestaAudio.current = new Audio("/fiesta-audio.mp3");
    fiestaAudio.current.loop = true;

    return () => {
      // Limpiar al desmontar
      if (misaAudio.current) {
        misaAudio.current.pause();
        misaAudio.current = null;
      }
      if (fiestaAudio.current) {
        fiestaAudio.current.pause();
        fiestaAudio.current = null;
      }
    };
  }, []);

  // Mantener el mute sincronizado
  useEffect(() => {
    if (misaAudio.current) misaAudio.current.muted = isMuted;
    if (fiestaAudio.current) fiestaAudio.current.muted = isMuted;
  }, [isMuted]);

  // Función de navegación que asegura la reproducción en celulares (interacción del usuario)
  const navigateTo = (screen) => {
    setActiveScreen(screen);
    setIsMuted(false); // Siempre que entra a una sección, entra con volumen

    if (screen === "misa") {
      if (fiestaAudio.current) {
        fiestaAudio.current.pause();
        fiestaAudio.current.currentTime = 0;
      }
      if (misaAudio.current) {
        misaAudio.current
          .play()
          .catch((e) =>
            console.warn("Auto-play bloqueado por el navegador:", e),
          );
      }
    } else if (screen === "fiesta") {
      if (misaAudio.current) {
        misaAudio.current.pause();
        misaAudio.current.currentTime = 0;
      }
      if (fiestaAudio.current) {
        fiestaAudio.current
          .play()
          .catch((e) =>
            console.warn("Auto-play bloqueado por el navegador:", e),
          );
      }
    } else if (screen === "landing") {
      // Al volver a la landing se apaga todo
      if (misaAudio.current) {
        misaAudio.current.pause();
        misaAudio.current.currentTime = 0;
      }
      if (fiestaAudio.current) {
        fiestaAudio.current.pause();
        fiestaAudio.current.currentTime = 0;
      }
    }
  };

  const toggleMute = () => setIsMuted((prev) => !prev);

  return (
    <>
      {/* Botón de Música (Oculto en Landing) */}
      <AnimatePresence>
        {activeScreen !== "landing" && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileTap={{ scale: 0.85 }}
            onClick={toggleMute}
            className="fixed top-4 right-4 z-90 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-line bg-navy-950/60 text-gold-400 backdrop-blur-md transition-colors hover:bg-navy-900 focus-visible:outline-2 focus-visible:outline-gold-400 focus-visible:outline-offset-2 shadow-lg"
            aria-label="Activar o silenciar la música"
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </motion.button>
        )}
      </AnimatePresence>

      <div className="relative h-full w-full">
        <AnimatePresence mode="wait">
          {activeScreen === "landing" && (
            <Landing key="landing" onNavigate={navigateTo} />
          )}
          {activeScreen === "misa" && (
            <Misa key="misa" onNavigate={navigateTo} />
          )}
          {activeScreen === "fiesta" && (
            <Fiesta key="fiesta" onNavigate={navigateTo} />
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
