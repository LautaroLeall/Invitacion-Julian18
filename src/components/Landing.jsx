import { Star, Church, PartyPopper, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Landing({ onNavigate }) {
  const letters = [
    { src: "/j-globo.png", alt: "J" },
    { src: "/u-globo.png", alt: "U" },
    { src: "/l-globo.png", alt: "L" },
    { src: "/i-globo.png", alt: "I" },
    { src: "/a-globo.png", alt: "A" },
    { src: "/n-globo.png", alt: "N" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.55, ease: [0.22, 0.9, 0.32, 1] }}
      className="absolute inset-0 h-full w-full overflow-hidden bg-cream"
    >
      {/* Background elements */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 85% 90%, rgba(0,0,0,0.05), transparent 60%), linear-gradient(150deg, var(--color-cream) 0%, var(--color-cream-2) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(150deg, #0f2a63 0%, var(--color-navy-900) 55%, var(--color-navy-950) 100%)",
          clipPath:
            "polygon(0 0,100% 0,100% 16%,86% 20%,90% 27%,74% 33%,79% 40%,60% 46%,66% 53%,46% 60%,52% 68%,30% 75%,36% 84%,14% 92%,18% 100%,0 100%)",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(150deg, transparent 60%, rgba(240,185,11,0.10) 100%)",
          }}
        />
      </div>

      {/* Stars Decoration */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        aria-hidden="true"
      >
        <motion.div
          animate={{ opacity: [0.55, 1, 0.55], scale: [1, 1.12, 1] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute text-gold-400 opacity-85"
          style={{
            top: "6%",
            left: "8%",
            width: "5.5vmin",
            height: "5.5vmin",
            transform: "rotate(-12deg)",
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
            delay: 0.5,
          }}
          className="absolute text-gold-400 opacity-85"
          style={{
            top: "16%",
            left: "30%",
            width: "3.2vmin",
            height: "3.2vmin",
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
            delay: 1,
          }}
          className="absolute text-gold-400 opacity-85"
          style={{
            top: "34%",
            left: "14%",
            width: "2.6vmin",
            height: "2.6vmin",
            transform: "rotate(-6deg)",
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
            top: "52%",
            left: "34%",
            width: "2.2vmin",
            height: "2.2vmin",
            transform: "rotate(14deg)",
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
            delay: 2,
          }}
          className="absolute text-gold-400 opacity-85"
          style={{
            top: "70%",
            left: "6%",
            width: "2.8vmin",
            height: "2.8vmin",
            transform: "rotate(-10deg)",
          }}
        >
          <Star className="h-full w-full fill-gold-400" />
        </motion.div>
      </div>

      <motion.img
        initial={{ opacity: 0, y: -14, scale: 0.85 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.2, 0.8, 0.3, 1] }}
        className="absolute top-[max(2.8vmin,20px)] right-[max(2.4vmin,32px)] z-30 w-[clamp(152px,32vmin,182px)] drop-shadow-[0_6px_14px_rgba(0,0,0,0.35)]"
        src="/escudo-boca.png"
        alt="Escudo Club Atlético Boca Juniors"
      />

      <div className="relative z-30 flex h-full flex-col justify-center gap-[clamp(6px,1.6vmin,16px)] p-[clamp(10px,4.4vmin,34px)_clamp(12px,5vmin,40px)_clamp(10px,3vmin,26px)_clamp(14px,6vmin,46px)]">
        <div>
          <div className="flex flex-wrap items-end gap-[clamp(6px,1.6vmin,14px)]">
            <motion.img
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: 0.1,
                duration: 0.6,
                ease: [0.2, 0.8, 0.3, 1],
              }}
              className="h-[clamp(88px,22vmin,158px)] w-auto drop-shadow-[0_6px_10px_rgba(0,0,0,0.35)]"
              src="/18-numero.png"
              alt="18"
            />
            <div
              className="flex items-end gap-[clamp(1px,0.4vmin,4px)] pb-[clamp(4px,1.2vmin,10px)]"
              aria-label="Julián"
            >
              {letters.map((letter, i) => (
                <motion.img
                  key={i}
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    delay: 0.18 + i * 0.06,
                    duration: 0.5,
                    ease: [0.2, 0.8, 0.3, 1],
                  }}
                  className="h-[clamp(48px,8.4vmin,78px)] w-auto drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]"
                  src={letter.src}
                  alt={letter.alt}
                />
              ))}
            </div>
          </div>
          <p className="m-0 font-baloo text-[clamp(13px,3.4vmin,22px)] font-bold tracking-[0.01em] text-cream-2">
            Te invito a mi cumpleaños
          </p>
        </div>

        <div className="mt-[clamp(2px,0.6vmin,6px)] flex flex-col items-center gap-4">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.55,
              ease: [0.2, 0.8, 0.3, 1],
            }}
            onClick={() => onNavigate("misa")}
            className="group relative flex w-full max-w-sm items-center gap-4 rounded-2xl bg-linear-to-r from-white/40 to-white/10 p-4 text-left shadow-lg backdrop-blur-md transition-all hover:-translate-y-1 hover:shadow-xl hover:from-white/50 hover:to-white/20"
          >
            <div className="flex flex-col items-center justify-center rounded-xl bg-navy-900/10 px-3 py-2 text-navy-900">
              <span className="font-baloo text-3xl font-extrabold leading-none">
                1
              </span>
              <span className="mt-1 text-[10px] font-bold uppercase tracking-widest">
                Oct
              </span>
            </div>

            <div className="flex-1">
              <span className="mb-1 flex items-center gap-2 font-baloo text-lg font-bold text-navy-900">
                <Church className="h-5 w-5 text-gold-500" />
                Ceremonia
              </span>
              <span className="flex items-center gap-2 text-xs font-semibold text-navy-800/70">
                <span>20:00 hs</span>
                <span className="h-1 w-1 rounded-full bg-navy-800/30"></span>
                <span>San Juan Bosco</span>
              </span>
            </div>

            <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-navy-900 text-gold-400 transition-transform group-hover:scale-110">
              <ArrowRight className="h-5 w-5" />
            </div>
          </motion.button>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.6,
              duration: 0.55,
              ease: [0.2, 0.8, 0.3, 1],
            }}
            onClick={() => onNavigate("fiesta")}
            className="group relative flex w-full max-w-sm items-center gap-4 rounded-2xl bg-linear-to-r from-white/40 to-white/10 p-4 text-left shadow-lg backdrop-blur-md transition-all hover:-translate-y-1 hover:shadow-xl hover:from-white/50 hover:to-white/20"
          >
            <div className="flex flex-col items-center justify-center rounded-xl bg-navy-900/10 px-3 py-2 text-navy-900">
              <span className="font-baloo text-3xl font-extrabold leading-none">
                3
              </span>
              <span className="mt-1 text-[10px] font-bold uppercase tracking-widest">
                Oct
              </span>
            </div>

            <div className="flex-1">
              <span className="mb-1 flex items-center gap-2 font-baloo text-lg font-bold text-navy-900">
                <PartyPopper className="h-5 w-5 text-gold-500" />
                Gran Fiesta
              </span>
              <span className="flex items-center gap-2 text-xs font-semibold text-navy-800/70">
                <span>22:00 hs</span>
                <span className="h-1 w-1 rounded-full bg-navy-800/30"></span>
                <span>Hadassah Eventos</span>
              </span>
            </div>

            <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-navy-900 text-gold-400 transition-transform group-hover:scale-110">
              <ArrowRight className="h-5 w-5" />
            </div>
          </motion.button>
        </div>
      </div>

      <motion.img
        animate={{ y: ["-4%", "4%", "-4%"] }}
        transition={{
          duration: 5.2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.3,
        }}
        className="absolute bottom-[clamp(6px,2vmin,18px)] right-[clamp(6px,2vmin,18px)] z-20 w-[clamp(152px,32vmin,182px)] rounded-[10px] drop-shadow-[0_8px_14px_rgba(0,0,0,0.35)]"
        src="/cancha-boca.png"
        alt="Bombonera"
      />
    </motion.section>
  );
}
