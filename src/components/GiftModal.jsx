import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Gift,
  CreditCard,
  Landmark,
  User,
  Copy,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";

export default function GiftModal({ isOpen, onClose }) {
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-navy-950/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative z-10 w-full max-w-sm overflow-hidden rounded-3xl border border-white/10 bg-linear-to-b from-navy-900 to-navy-950 p-6 text-cream shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mb-6 flex flex-col items-center text-center">
              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br from-gold-300 to-gold-500 shadow-[0_0_20px_rgba(240,185,11,0.3)]">
                <Gift className="h-7 w-7 text-navy-950" />
              </div>
              <h2 className="m-0 font-baloo text-2xl font-bold text-gold-300">
                Opciones de Regalo
              </h2>
              <p className="mt-2 text-sm text-[#c3cbe6] leading-relaxed">
                El mejor regalo es tu presencia, pero si deseás tener un detalle
                conmigo, podés hacerlo a través de esta cuenta:
              </p>
            </div>

            <div className="flex flex-col gap-3 rounded-2xl bg-black/20 p-4">
              {/* Entidad */}
              <div className="flex flex-col">
                <span className="text-[11px] font-bold uppercase tracking-widest text-gold-300/80">
                  Entidad
                </span>
                <div className="flex items-center gap-2">
                  <Landmark className="h-4 w-4 text-gold-400" />
                  <span className="font-manrope text-sm font-semibold">
                    Naranja X
                  </span>
                </div>
              </div>

              {/* Titular */}
              <div className="flex flex-col">
                <span className="text-[11px] font-bold uppercase tracking-widest text-gold-300/80">
                  Titular
                </span>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-gold-400" />
                  <span className="font-manrope text-sm font-semibold">
                    Diego Julian Toledo
                  </span>
                </div>
                <span className="text-xs text-white/50 pl-6">
                  CUIL: 20490497863
                </span>
              </div>

              {/* CBU */}
              <div className="flex flex-col mt-1">
                <span className="text-[11px] font-bold uppercase tracking-widest text-gold-300/80">
                  CBU / CVU
                </span>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <CreditCard className="h-4 w-4 text-gold-400" />
                    <span className="text-sm font-semibold font-mono">
                      4530000800016672356291
                    </span>
                  </div>
                  <button
                    onClick={() => handleCopy("4530000800016672356291", "cbu")}
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold-400/10 text-gold-400 transition-colors hover:bg-gold-400/20"
                  >
                    {copiedField === "cbu" ? (
                      <CheckCircle2 className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Alias */}
              <div className="flex flex-col mt-1">
                <span className="text-[11px] font-bold uppercase tracking-widest text-gold-300/80">
                  Alias
                </span>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="h-4 w-4 flex items-center justify-center text-gold-400 text-lg">
                      @
                    </span>
                    <span className="font-manrope text-sm font-semibold">
                      juliantoledo49
                    </span>
                  </div>
                  <button
                    onClick={() => handleCopy("juliantoledo49", "alias")}
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold-400/10 text-gold-400 transition-colors hover:bg-gold-400/20"
                  >
                    {copiedField === "alias" ? (
                      <CheckCircle2 className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="mt-6 w-full rounded-xl bg-white/10 py-3.5 font-baloo text-lg font-bold text-white transition-colors hover:bg-white/20"
            >
              Cerrar
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
