import { useState, useEffect } from 'react';

export default function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({ days: '--', label: 'días' });

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const update = () => {
      const now = new Date().getTime();
      const diff = target - now;
      if (diff <= 0) {
        setTimeLeft({ days: '0', label: 'días' });
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

      if (days > 0) {
        setTimeLeft({ days: days.toString(), label: days === 1 ? 'día' : 'días' });
      } else {
        setTimeLeft({ days: hours.toString(), label: hours === 1 ? 'hora' : 'horas' });
      }
    };

    update();
    const interval = setInterval(update, 1000 * 60 * 60); // Check every hour
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex items-baseline gap-2 font-baloo">
      <span className="text-[clamp(26px,6vmin,38px)] font-extrabold leading-none text-gold-400">
        {timeLeft.days}
      </span>
      <span className="font-manrope text-[clamp(10px,2vmin,12px)] font-bold uppercase tracking-[0.07em] text-[#c3cbe6]">
        {timeLeft.label}
      </span>
    </div>
  );
}
