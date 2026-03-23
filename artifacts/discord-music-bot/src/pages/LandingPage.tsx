import { motion } from "framer-motion";
import { ParticleBackground } from "@/components/ParticleBackground";
import { Navbar } from "@/components/Navbar";
import { Visualizer } from "@/components/Visualizer";
import { TiltCard } from "@/components/TiltCard";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { TerminalShowcase } from "@/components/TerminalShowcase";
import { 
  Headphones, 
  ListMusic, 
  AudioWaveform, 
  FolderSync, 
  FileText, 
  Zap,
  ArrowRight,
  Bot,
  Mic2,
  Music,
  Disc
} from "lucide-react";

export default function LandingPage() {
  const BASE_URL = import.meta.env.BASE_URL;

  const features = [
    {
      title: "High Quality Audio",
      desc: "Crystal clear 320kbps streaming with zero buffering or lag. Your ears will thank you.",
      icon: <Headphones className="w-8 h-8 text-primary" />,
      delay: 0.1
    },
    {
      title: "Smart Queue",
      desc: "Manage unlimited songs, shuffle, loop, and save your queues for later sessions.",
      icon: <ListMusic className="w-8 h-8 text-accent" />,
      delay: 0.2
    },
    {
      title: "Effects & Filters",
      desc: "Apply real-time effects like Bassboost, Nightcore, Vaporwave, and Reverb.",
      icon: <AudioWaveform className="w-8 h-8 text-primary" />,
      delay: 0.3
    },
    {
      title: "Import Playlists",
      desc: "Seamlessly import from Spotify, YouTube, SoundCloud, and Apple Music.",
      icon: <FolderSync className="w-8 h-8 text-accent" />,
      delay: 0.4
    },
    {
      title: "Synchronized Lyrics",
      desc: "Sing along with real-time lyrics that sync perfectly with the current playing track.",
      icon: <FileText className="w-8 h-8 text-primary" />,
      delay: 0.5
    },
    {
      title: "24/7 Uptime",
      desc: "Always online, always ready. Premium servers ensure Harmony never misses a beat.",
      icon: <Zap className="w-8 h-8 text-accent" />,
      delay: 0.6
    }
  ];

  const steps = [
    { num: "01", title: "Add Bot", desc: "Invite Harmony to your Discord server with one click.", icon: <Bot className="w-6 h-6" /> },
    { num: "02", title: "Join Voice", desc: "Hop into any voice channel with your friends.", icon: <Mic2 className="w-6 h-6" /> },
    { num: "03", title: "Play Music", desc: "Type /play and let the music take over.", icon: <Music className="w-6 h-6" /> }
  ];

  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex flex-col justify-center">
        {/* Background Image Abstract */}
        <div className="absolute inset-0 z-[-1] opacity-30">
          <img 
            src={`${BASE_URL}images/hero-bg.png`} 
            alt="Deep space abstract background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
            <span className="text-sm font-medium text-white/80 tracking-wide uppercase">Harmony v3.0 is live</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 text-glow-primary mb-6"
          >
            HARMONY
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 font-medium"
          >
            The Ultimate Discord Music Experience. Elevate your server with crystal clear audio, endless filters, and immersive vibes.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-lg bg-gradient-to-r from-primary to-accent text-white shadow-[0_0_40px_hsl(var(--primary)/0.4)] hover:shadow-[0_0_60px_hsl(var(--primary)/0.6)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group">
              Add to Discord
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-lg bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300">
              View Commands
            </button>
          </motion.div>
        </div>

        {/* Decorative Visualizer at bottom of hero */}
        <div className="absolute bottom-0 left-0 w-full h-48 md:h-64 opacity-40 pointer-events-none">
          <Visualizer bars={typeof window !== 'undefined' && window.innerWidth > 768 ? 64 : 32} className="h-full w-full" />
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-20 border-y border-white/5 bg-black/20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Servers", value: 500000, suffix: "+" },
              { label: "Songs Played", value: 10000000, suffix: "+" },
              { label: "Users", value: 1500000, suffix: "+" },
              { label: "Uptime", value: 99.9, suffix: "%" },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-2 text-glow-accent">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </h3>
                <p className="text-muted-foreground uppercase tracking-wider text-sm font-bold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-white">Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Perfection</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Everything you need to turn your Discord server into a virtual concert hall.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <TiltCard key={i} delay={feature.delay}>
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 box-glow-primary">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Commands Showcase */}
      <section id="commands" className="py-32 relative z-10 bg-black/40 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white">
                Command with <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Absolute Power</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Harmony uses modern Discord slash commands for a seamless, interactive experience. Autocomplete, buttons, and detailed menus make controlling the music effortless.
              </p>
              <ul className="space-y-4 mb-8">
                {['Intuitive slash commands', 'Interactive player buttons', 'Rich embeds with album art'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="text-primary font-bold hover:text-accent transition-colors flex items-center gap-2">
                Explore all commands <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <TerminalShowcase />
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-16 text-white">Three Steps to <span className="text-primary">Harmony</span></h2>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-1/4 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 z-0" />
            
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative z-10 flex flex-col items-center"
              >
                <div className="w-20 h-20 rounded-full bg-card border-2 border-primary/50 flex items-center justify-center text-accent mb-6 box-glow-primary relative group">
                  {step.icon}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-xs font-bold text-white shadow-lg">
                    {step.num}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-20 border-y border-white/5 bg-black/20 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-bold tracking-widest uppercase text-muted-foreground mb-10">Trusted by top communities</p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {[1, 2, 3, 4].map((num) => (
              <img 
                key={num}
                src={`${BASE_URL}images/server-logo-${num}.png`} 
                alt={`Server Logo ${num}`} 
                className="h-16 md:h-20 object-contain hover:scale-110 transition-transform drop-shadow-[0_0_10px_hsl(var(--primary))]"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-32 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-panel p-12 md:p-20 rounded-3xl border border-primary/30 box-glow-primary relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10" />
            
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              Ready to Upgrade Your Server?
            </h2>
            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
              Join thousands of other servers enjoying the premium music experience. Free forever.
            </p>
            <button className="px-10 py-5 rounded-xl font-bold text-xl bg-white text-background hover:bg-primary hover:text-white hover:shadow-[0_0_50px_hsl(var(--primary))] hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto">
              Add Harmony to Discord
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0c11] py-12 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Disc className="w-6 h-6 text-primary" />
              <span className="font-display font-bold tracking-wider text-xl text-white">HARMONY</span>
            </div>
            
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-white transition-colors">Commands</a>
              <a href="#" className="text-muted-foreground hover:text-white transition-colors">Support</a>
              <a href="#" className="text-muted-foreground hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-muted-foreground hover:text-white transition-colors">Terms of Service</a>
            </div>
            
            <p className="text-muted-foreground text-sm">
              &copy; {new Date().getFullYear()} Harmony Bot. Not affiliated with Discord.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
