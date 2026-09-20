import { motion } from "framer-motion";
import {
  PartyPopper,
  ArrowLeft,
  Star,
  CalendarDays,
  MapPin,
  Music,
} from "lucide-react";
import Countdown from "./Countdown";
import RSVPForm from "./RSVPForm";
import Confetti from "./Confetti";

export default function Fiesta({ onNavigate }) {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.55, ease: [0.22, 0.9, 0.32, 1] }}
      className="absolute inset-0 h-full w-full overflow-hidden text-cream"
      style={{
        background:
          "radial-gradient(ellipse at 50% -6%, #21308f, var(--color-navy-950) 62%)",
      }}
    >
      <Confetti />

      {/* Background elements */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
        <motion.img
          animate={{ rotate: [-7, -4, -7], scale: [1, 1.03, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="w-[clamp(280px,78vmin,680px)] opacity-15 saturate-110 blur-[1.5px]"
          src="./escudo-boca.png"
          alt=""
          aria-hidden="true"
        />
      </div>

      <motion.div
        animate={{ y: ["-4%", "4%", "-4%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-[clamp(-7vmin,-5vmin,-2.4vmin)] left-1/2 z-10 w-[min(130vw,760px)] -translate-x-1/2 opacity-95"
      >
        <img
          className="w-full drop-shadow-[0_10px_16px_rgba(0,0,0,0.4)]"
          src="./globos-arriba.png"
          alt=""
        />
      </motion.div>

      <motion.img
        animate={{ y: ["-50%", "-46%", "-50%"] }}
        transition={{
          duration: 5.4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.4,
        }}
        className="pointer-events-none absolute top-1/2 z-10 hidden w-[clamp(88px,21vmin,180px)] rounded-[14px] opacity-95 drop-shadow-[0_12px_20px_rgba(0,0,0,0.45)] sm:block right-[clamp(-24px,-3.4vmin,-8px)]"
        src="./cancha-boca.png"
        alt="Bombonera"
      />

      {/* Stars */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        aria-hidden="true"
      >
        <motion.div
          animate={{ opacity: [0.55, 1, 0.55], scale: [1, 1.12, 1] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute text-gold-400 opacity-85"
          style={{
            top: "10%",
            left: "8%",
            width: "3.4vmin",
            height: "3.4vmin",
            transform: "rotate(-10deg)",
          }}
        >
          <Star className="h-full w-full fill-gold-400" />
        </motion.div>
        <motion.div
          animate={{ opacity: [0.55, 1, 0.55], scale: [1, 1.12, 1] }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8,
          }}
          className="absolute text-gold-400 opacity-85"
          style={{
            top: "26%",
            left: "22%",
            width: "2.2vmin",
            height: "2.2vmin",
            transform: "rotate(8deg)",
          }}
        >
          <Star className="h-full w-full fill-gold-400" />
        </motion.div>
        <motion.div
          animate={{ opacity: [0.55, 1, 0.55], scale: [1, 1.12, 1] }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
          className="absolute text-gold-400 opacity-85"
          style={{
            bottom: "16%",
            left: "12%",
            width: "2.6vmin",
            height: "2.6vmin",
            transform: "rotate(-6deg)",
          }}
        >
          <Star className="h-full w-full fill-gold-400" />
        </motion.div>
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            "radial-gradient(ellipse at 50% 46%, rgba(8,21,54,0.35) 0%, rgba(8,21,54,0.72) 62%, rgba(8,21,54,0.88) 100%)",
        }}
      />

      <div className="relative z-20 flex h-full flex-col overflow-y-auto overflow-x-hidden p-[clamp(10px,3.6vmin,30px)_clamp(14px,5vmin,40px)]">
        <button
          onClick={() => onNavigate("landing")}
          className="sticky top-0 z-50 mb-4 flex flex-none cursor-pointer items-center gap-1.5 self-start rounded-full border border-gold-400/30 bg-navy-950/80 backdrop-blur-md p-[clamp(5px,1.3vmin,9px)_clamp(10px,2.4vmin,16px)] text-[clamp(10.5px,2.2vmin,13px)] font-bold text-gold-300 shadow-lg transition-transform hover:scale-105"
        >
          <ArrowLeft className="h-[clamp(11px,2.2vmin,15px)] w-[clamp(11px,2.2vmin,15px)]" />{" "}
          Volver
        </button>

        <div className="mx-auto flex w-full max-w-115 flex-1 flex-col items-center justify-center gap-8 pb-12 text-center">
          <div className="flex flex-col items-center gap-3">
            <span className="flex h-20 w-20 flex-none items-center justify-center rounded-full bg-linear-to-br from-gold-300 to-gold-500 text-navy-950 shadow-[0_0_30px_rgba(240,185,11,0.3)]">
              <PartyPopper className="h-10 w-10" />
            </span>
            <div>
              <h1 className="m-0 font-baloo text-5xl font-extrabold leading-none text-cream drop-shadow-md">
                Fiesta
              </h1>
              <p className="m-0 mt-2 max-w-xs text-sm font-medium text-[#c3cbe6]">
                ¡Llegó el momento! Bailamos y celebramos a lo grande hasta que
                salga el sol.
              </p>
            </div>
          </div>

          <div className="-mt-2.5">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-1.5 text-xs font-semibold text-[#c3cbe6] backdrop-blur-sm">
              <Music className="h-3.5 w-3.5 text-gold-400" />
              Música Sonando
            </span>
          </div>

          <div className="my-1">
            <Countdown targetDate="2026-10-03T22:00:00-03:00" />
          </div>

          <div className="flex w-full flex-col gap-6 rounded-2xl bg-linear-to-b from-white/5 to-transparent p-6 sm:flex-row sm:gap-4">
            <div className="flex flex-1 flex-col items-center gap-2">
              <div className="rounded-full bg-gold-400/10 p-3">
                <CalendarDays className="h-6 w-6 text-gold-400" />
              </div>
              <p className="m-0 font-baloo text-xl font-bold text-cream">
                Sábado 3 de Octubre
              </p>
              <p className="m-0 text-sm font-medium text-[#c3cbe6]">22:00 hs</p>
            </div>

            <a
              href="https://maps.app.goo.gl/wuuVrjucZSJ98BXV8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 cursor-pointer flex-col items-center gap-2 no-underline transition-transform hover:scale-105"
            >
              <div className="rounded-full bg-gold-400/10 p-3">
                <MapPin className="h-6 w-6 text-gold-400" />
              </div>
              <p className="m-0 font-baloo text-xl font-bold text-cream leading-tight">
                Hadassah Catering & Eventos
              </p>
              <p className="m-0 text-sm font-medium text-[#c3cbe6]">
                Crisóstomo Álvarez 2420
              </p>
              <p className="m-0 mt-0.5 text-xs font-medium text-[#9fabd1]">
                S.M de Tucumán
              </p>
              <span className="mt-2 rounded-full border border-gold-400/50 bg-gold-400/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-gold-300">
                Ver en mapa
              </span>
            </a>
          </div>

          <div className="w-full">
            <RSVPForm eventName="Fiesta" />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
