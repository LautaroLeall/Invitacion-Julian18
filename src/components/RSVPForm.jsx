import { useState } from "react";
import {
  Check,
  X,
  User,
  Users,
  MessageCircle,
  Send,
  CheckCircle2,
} from "lucide-react";

export default function RSVPForm({ eventName }) {
  const [isAttending, setIsAttending] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    guests: 0,
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");

    let text = "";
    if (isAttending) {
      text = `¡Hola! Quiero confirmar asistencia para los 18 de Julián.\n Asistencia: Sí, voy\nNombre: ${formData.name}\nAcompañantes: ${formData.guests}`;
      if (formData.message) text += `\nMensaje: ${formData.message}`;
    } else {
      text = `¡Hola! Sobre los 18 de Julián:\nLamentablemente no podré asistir.\nNombre: ${formData.name}`;
      if (formData.message) text += `\nMensaje: ${formData.message}`;
    }

    const phone = "5493814159753";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");

    setStatus("success");
    setTimeout(() => setStatus(null), 3000);
  };

  return (
    <div className="mt-2 w-full rounded-3xl bg-navy-950/40 border border-white/10 p-6 shadow-2xl backdrop-blur-md">
      <div className="mb-6 text-center">
        <h2 className="m-0 font-baloo text-2xl font-bold text-gold-300 drop-shadow-sm">
          Confirmar asistencia
        </h2>
        <p className="m-0 mt-1.5 text-[13px] text-[#9fabd1]">
          Esperamos contar con tu presencia. Por favor, confírmanos tu
          asistencia.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => setIsAttending(true)}
            className={`flex flex-1 items-center justify-center gap-2 rounded-xl border-2 py-3 text-sm font-bold transition-all hover:scale-[1.02] active:scale-[0.98] ${
              isAttending
                ? "border-gold-400 bg-gold-400 text-navy-950 shadow-[0_0_15px_rgba(240,185,11,0.2)]"
                : "border-transparent bg-white/5 text-[#c3cbe6] hover:bg-white/10"
            }`}
          >
            <Check className="h-4 w-4" /> Sí, voy
          </button>
          <button
            type="button"
            onClick={() => setIsAttending(false)}
            className={`flex flex-1 items-center justify-center gap-2 rounded-xl border-2 py-3 text-sm font-bold transition-all hover:scale-[1.02] active:scale-[0.98] ${
              !isAttending
                ? "border-gold-400 bg-gold-400 text-navy-950 shadow-[0_0_15px_rgba(240,185,11,0.2)]"
                : "border-transparent bg-white/5 text-[#c3cbe6] hover:bg-white/10"
            }`}
          >
            <X className="h-4 w-4" /> No puedo
          </button>
        </div>

        <div className="flex gap-3">
          <div className="flex min-w-0 flex-1 flex-col gap-1.5">
            <label className="flex items-center gap-1.5 pl-1 text-[11px] font-bold uppercase tracking-widest text-gold-300/80">
              <User className="h-3.5 w-3.5" /> Nombre
            </label>
            <input
              type="text"
              required
              placeholder="Tu nombre completo"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full rounded-xl border border-white/10 bg-black/20 p-3.5 font-manrope text-sm text-cream placeholder-white/30 transition-colors focus:border-gold-400 focus:bg-black/30 focus:outline-none"
            />
          </div>

          {isAttending && (
            <div className="flex max-w-[35%] flex-col gap-1.5">
              <label className="flex items-center gap-1.5 pl-1 text-[11px] font-bold uppercase tracking-widest text-gold-300/80">
                <Users className="h-3.5 w-3.5" /> Acomp.
              </label>
              <input
                type="number"
                min="0"
                max="10"
                value={formData.guests}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    guests: parseInt(e.target.value) || 0,
                  })
                }
                className="w-full rounded-xl border border-white/10 bg-black/20 p-3.5 font-manrope text-sm text-cream transition-colors focus:border-gold-400 focus:bg-black/30 focus:outline-none"
              />
            </div>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="flex items-center gap-1.5 pl-1 text-[11px] font-bold uppercase tracking-widest text-gold-300/80">
            <MessageCircle className="h-3.5 w-3.5" /> Mensaje{" "}
            <span className="normal-case opacity-60">(opcional)</span>
          </label>
          <input
            type="text"
            placeholder="Un saludo para Julián..."
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="w-full rounded-xl border border-white/10 bg-black/20 p-3.5 font-manrope text-sm text-cream placeholder-white/30 transition-colors focus:border-gold-400 focus:bg-black/30 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="mt-2 flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-xl bg-linear-to-r from-gold-300 to-gold-500 py-4 font-baloo text-lg font-extrabold text-navy-950 transition-all hover:scale-[1.02] hover:shadow-[0_5px_20px_rgba(240,185,11,0.3)] active:scale-[0.98] disabled:opacity-60 disabled:hover:scale-100"
        >
          <Send className="h-5 w-5" />
          {status === "loading"
            ? "Abriendo WhatsApp..."
            : "Confirmar por WhatsApp"}
        </button>

        {status === "success" && (
          <div className="mt-1 flex items-center justify-center gap-2 rounded-xl bg-gold-400/10 p-3 text-sm font-semibold text-gold-300">
            <CheckCircle2 className="h-5 w-5 shrink-0" /> Te redirigimos a
            WhatsApp.
          </div>
        )}
      </form>
    </div>
  );
}
