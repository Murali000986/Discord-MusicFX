import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, Play, FastForward, SlidersHorizontal } from "lucide-react";

export function TerminalShowcase() {
  const [step, setStep] = useState(0);
  
  const commands = [
    { text: "/play url:https://spotify.com/playlist/synthwave", icon: <Play className="w-4 h-4 text-accent" /> },
    { text: "/filter apply:bassboost_extreme", icon: <SlidersHorizontal className="w-4 h-4 text-primary" /> },
    { text: "/skip", icon: <FastForward className="w-4 h-4 text-white" /> }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 4); // 3 commands + 1 pause state
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto rounded-xl overflow-hidden border border-white/10 bg-[#0f111a] shadow-2xl relative">
      {/* Terminal Header */}
      <div className="bg-[#1a1d27] px-4 py-3 flex items-center gap-2 border-b border-white/5">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="mx-auto flex items-center gap-2 text-xs font-mono text-muted-foreground">
          <Terminal className="w-3 h-3" />
          discord-app.exe
        </div>
      </div>
      
      {/* Terminal Body */}
      <div className="p-6 font-mono text-sm min-h-[250px] relative">
        <div className="space-y-4">
          {/* Previous commands fading out */}
          <div className="opacity-30 space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-primary font-bold">@User</span>
              <span className="text-gray-400">used</span>
              <span className="text-white bg-white/10 px-1.5 py-0.5 rounded">/join</span>
            </div>
            <div className="pl-4 border-l-2 border-primary/30 text-gray-300 flex items-center gap-2">
              🎧 Joined <span className="font-bold text-white">General Voice</span>
            </div>
          </div>

          {/* Active typing command */}
          {step < 3 && (
            <motion.div 
              key={step}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-3"
            >
              <div className="flex items-center gap-2 pt-2">
                <span className="text-primary font-bold">@User</span>
                <span className="text-gray-400">typing...</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 w-fit px-3 py-2 rounded-lg border border-white/10">
                {commands[step].icon}
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, ease: "linear" }}
                  className="overflow-hidden whitespace-nowrap block border-r-2 border-accent pr-1"
                >
                  {commands[step].text}
                </motion.span>
              </div>
              
              {/* Bot Response Mockup */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="pl-4 mt-4"
              >
                <div className="bg-[#1a1d27] border-l-4 border-primary rounded-r p-4 shadow-lg">
                  <div className="flex items-center gap-2 font-sans font-bold text-white mb-1">
                    <span className="bg-primary text-[10px] uppercase px-1 rounded text-primary-foreground">BOT</span>
                    Harmony
                  </div>
                  {step === 0 && <p className="text-gray-300 font-sans">Added 42 tracks to queue from <span className="text-accent">Synthwave Mix</span></p>}
                  {step === 1 && <p className="text-gray-300 font-sans">Audio filter <span className="text-primary font-bold">Bassboost Extreme</span> applied.</p>}
                  {step === 2 && <p className="text-gray-300 font-sans">Skipped track. Now playing: <span className="text-white font-bold">Resonance - HOME</span></p>}
                </div>
              </motion.div>
            </motion.div>
          )}

          {step === 3 && (
             <div className="flex items-center gap-2 pt-2 animate-pulse text-gray-500">
               Waiting for command...
             </div>
          )}
        </div>
      </div>
    </div>
  );
}
