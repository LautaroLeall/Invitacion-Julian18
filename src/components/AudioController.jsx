import { useEffect, useRef } from "react";
import * as Tone from "tone";

export default function AudioController({ activeScreen, isMuted }) {
  const misaParts = useRef(null);
  const fiestaParts = useRef(null);
  const audioStarted = useRef(false);

  useEffect(() => {
    if (isMuted) {
      Tone.Transport.stop();
      Tone.Transport.cancel();
      if (misaParts.current) misaParts.current.loop.stop(0);
      if (fiestaParts.current) {
        fiestaParts.current.kickLoop.stop(0);
        fiestaParts.current.hatLoop.stop(0);
        fiestaParts.current.bassLoop.stop(0);
      }
      return;
    }

    const playAudio = async () => {
      if (!audioStarted.current) {
        await Tone.start();
        audioStarted.current = true;
      }

      // Stop current
      Tone.Transport.stop();
      Tone.Transport.cancel();
      if (misaParts.current) misaParts.current.loop.stop(0);
      if (fiestaParts.current) {
        fiestaParts.current.kickLoop.stop(0);
        fiestaParts.current.hatLoop.stop(0);
        fiestaParts.current.bassLoop.stop(0);
      }

      if (activeScreen === "misa") {
        if (!misaParts.current) {
          const reverb = new Tone.Reverb({
            decay: 6,
            wet: 0.45,
          }).toDestination();
          const pad = new Tone.PolySynth(Tone.Synth, {
            oscillator: { type: "sine" },
            envelope: { attack: 1.4, decay: 0.8, sustain: 0.6, release: 3 },
          }).connect(reverb);
          pad.volume.value = -16;

          const chords = [
            ["C4", "E4", "G4"],
            ["A3", "C4", "E4"],
            ["F3", "A3", "C4"],
            ["G3", "B3", "D4"],
          ];
          let idx = 0;
          const loop = new Tone.Loop((time) => {
            pad.triggerAttackRelease(chords[idx % chords.length], "3n", time);
            idx++;
          }, "3n");

          misaParts.current = { reverb, pad, loop };
        }
        Tone.Transport.bpm.value = 66;
        misaParts.current.loop.start(0);
        Tone.Transport.start();
      } else if (activeScreen === "fiesta") {
        if (!fiestaParts.current) {
          const filter = new Tone.Filter(1200, "lowpass").toDestination();

          const kick = new Tone.MembraneSynth({
            octaves: 4,
            pitchDecay: 0.05,
          }).connect(filter);
          kick.volume.value = -6;
          const kickLoop = new Tone.Loop((time) => {
            kick.triggerAttackRelease("C1", "8n", time);
          }, "4n");

          const hat = new Tone.NoiseSynth({
            noise: { type: "white" },
            envelope: { attack: 0.001, decay: 0.05, sustain: 0 },
          }).connect(filter);
          hat.volume.value = -20;
          const hatLoop = new Tone.Loop((time) => {
            hat.triggerAttackRelease("16n", time);
          }, "8n");

          const bassNotes = ["C2", "C2", "D#2", "F2", "C2", "C2", "G1", "A#1"];
          const bass = new Tone.MonoSynth({
            oscillator: { type: "sawtooth" },
            envelope: { attack: 0.01, decay: 0.15, sustain: 0.2, release: 0.2 },
            filterEnvelope: {
              attack: 0.01,
              decay: 0.1,
              sustain: 0.3,
              baseFrequency: 200,
              octaves: 2,
            },
          }).connect(filter);
          bass.volume.value = -12;
          let bi = 0;
          const bassLoop = new Tone.Loop((time) => {
            bass.triggerAttackRelease(
              bassNotes[bi % bassNotes.length],
              "16n",
              time,
            );
            bi++;
          }, "8n");

          fiestaParts.current = {
            filter,
            kick,
            kickLoop,
            hat,
            hatLoop,
            bass,
            bassLoop,
          };
        }
        Tone.Transport.bpm.value = 126;
        fiestaParts.current.kickLoop.start(0);
        fiestaParts.current.hatLoop.start("8n");
        fiestaParts.current.bassLoop.start(0);
        Tone.Transport.start();
      }
    };

    playAudio();

    return () => {
      // Cleanup is mostly done by stopping transport, but Tone instances stay alive.
    };
  }, [activeScreen, isMuted]);

  return null;
}
