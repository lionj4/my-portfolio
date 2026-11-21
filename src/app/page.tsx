'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  Code,
  X,
  Mail,
  MessageCircle,
  Users,
  ExternalLink,
  Check,
  Copy,
  Terminal,
  Download,
  Shield,
  Cpu,
  Rocket,
  BriefcaseBusiness,
  PlayCircle,
} from 'lucide-react';

type SocialAccount = {
  name: string;
  icon: React.ElementType;
  url: string;
  username: string;
};

type Project = {
  title: string;
  status: string;
  desc: string;
  tags: string[];
  color: string;
  href: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

const cvPath = '/Lionel_Jores_Nyangon_Boyomo_Resume.pdf';

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [copiedQR, setCopiedQR] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialAccounts: SocialAccount[] = [
    { name: 'GitHub Portfolio', icon: Code, url: 'https://github.com/lionj4', username: 'lionj4' },
    { name: 'GitHub Projects', icon: Code, url: 'https://github.com/jores915', username: 'jores915' },
    { name: 'OpenMythos-Bot', icon: Cpu, url: 'https://github.com/jores915/OpenMythos-Bot', username: 'OpenMythos-Bot' },
    { name: 'LinkedIn', icon: BriefcaseBusiness, url: 'https://linkedin.com/in/lionel-jores-nyangon', username: 'lionel-jores-nyangon' },
    { name: 'X / Twitter', icon: X, url: 'https://x.com/Jores1301Jores', username: '@Jores1301Jores' },
    { name: 'Telegram', icon: MessageCircle, url: 'https://t.me/lioneljores', username: '@lioneljores' },
    { name: 'Discord', icon: Users, url: 'https://discord.com/users/lionj4_84235', username: 'lionj4_84235' },
    { name: 'YouTube', icon: PlayCircle, url: 'https://www.youtube.com/@Web3-developer-lion', username: '@Web3-developer-lion' },
    { name: 'Email', icon: Mail, url: 'mailto:lioneljores4@gmail.com', username: 'lioneljores4@gmail.com' },
  ];

  const projects: Project[] = [
    {
      title: 'OpenMythos-Bot',
      status: '● LIVE REPO',
      desc: 'LLM-powered crypto intelligence system: Solidity flash-arbitrage contracts, FastAPI dashboard, Telegram bot, RL agent loop, and OpenMythos RDT model implementation.',
      tags: ['Python', 'Solidity', 'FastAPI', 'Telegram', 'Foundry', 'RDT/AI'],
      color: 'from-amber-300 via-cyan-400 to-purple-500',
      href: 'https://github.com/jores915/OpenMythos-Bot',
      secondaryHref: 'https://github.com/jores915/OpenMythos-Bot/tree/main/dashboard-deploy',
      secondaryLabel: 'Dashboard Code',
    },
    {
      title: 'MultiFlashArb v2',
      status: '● BASE READY',
      desc: 'High-performance flash-loan arbitrage engine for Base / Uniswap V3 with smart-contract execution and MEV-aware routing logic.',
      tags: ['Solidity', 'Base', 'DeFi', 'Flash Loans'],
      color: 'from-cyan-400 to-blue-500',
      href: 'https://github.com/jores915/OpenMythos-Bot/tree/main/contracts',
    },
    {
      title: 'DropAgent-Hermes',
      status: '◐ BUILDING',
      desc: 'Shopify AI dropshipping agent with luxury storefront direction, catalog automation, Telegram alerts, and Hermes/OpenRouter content generation.',
      tags: ['Shopify', 'AI Agent', 'Python', 'Automation'],
      color: 'from-yellow-400 to-emerald-500',
      href: 'https://github.com/jores915',
    },
    {
      title: 'Birdeye Alert Bot',
      status: '● LIVE',
      desc: 'Real-time Solana token monitoring with Telegram alerts for price, volume, and wallet activity using Birdeye API pipelines.',
      tags: ['Python', 'Solana', 'Birdeye API', 'Telegram'],
      color: 'from-emerald-400 to-cyan-400',
      href: 'https://github.com/jores915',
    },
    {
      title: 'SS1 Platform',
      status: '◐ BUILDING',
      desc: 'Multi-service backend with JWT auth, affiliate system, admin dashboard, Node.js services, MongoDB, Docker, and Vercel deployment.',
      tags: ['Node.js', 'Express', 'MongoDB', 'Docker'],
      color: 'from-purple-400 to-pink-500',
      href: 'https://github.com/lionj4/ss1-platform',
    },
    {
      title: 'Solana Flash Loan Bot',
      status: '◐ BUILDING',
      desc: 'High-frequency Solana DeFi arbitrage prototype using Rust/Anchor patterns and sub-second opportunity detection.',
      tags: ['Rust', 'Anchor', 'Solana', 'DeFi'],
      color: 'from-fuchsia-400 to-orange-400',
      href: 'https://github.com/jores915',
    },
  ];

  const skillGroups = [
    ['Blockchain', 'Solidity', 'Foundry', 'Uniswap V3', 'Base', 'Solana', 'Rust / Anchor', 'MEV', 'Flash Loans'],
    ['Backend', 'Python', 'FastAPI', 'Node.js', 'Express', 'MongoDB', 'Docker', 'REST APIs'],
    ['AI / Agents', 'OpenRouter', 'Local LLMs', 'RDT', 'Agent Loops', 'Telegram Bots', 'Automation'],
    ['Frontend / Infra', 'Next.js', 'React', 'TypeScript', 'Tailwind', 'Vercel', 'GitHub'],
  ];

  const generateQRUrl = (url: string) => `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(url)}`;

  const copyToClipboard = async (text: string, id: number) => {
    await navigator.clipboard.writeText(text);
    setCopiedQR(id);
    setTimeout(() => setCopiedQR(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#05050a] text-white font-mono overflow-x-hidden">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.12),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.12),transparent_28%),radial-gradient(circle_at_50%_80%,rgba(251,191,36,0.09),transparent_30%)]" />
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#05050a]/95 backdrop-blur-lg border-b border-cyan-500/20' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <a href="#top" className="flex items-center gap-3">
            <Terminal className="w-8 h-8 text-cyan-400" />
            <span className="text-3xl font-black tracking-tighter bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">LJ</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-[0.2em]">
            <a href="#about" className="hover:text-cyan-400">About</a>
            <a href="#projects" className="hover:text-cyan-400">Projects</a>
            <a href="#skills" className="hover:text-cyan-400">Skills</a>
            <a href="#connect" className="hover:text-cyan-400">Connect</a>
          <a href={cvPath} download="Lionel_Jores_Nyangon_Boyomo_Resume.pdf" className="px-5 py-2 bg-cyan-400 hover:bg-cyan-300 text-black font-bold rounded-full">CV</a>
          </div>
        </div>
      </nav>

      <section id="top" className="pt-36 pb-24 px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 flex justify-center">
            <div className="relative h-36 w-36 overflow-hidden rounded-full border-2 border-cyan-300/70 bg-zinc-950 shadow-[0_0_60px_rgba(34,211,238,0.2)] ring-4 ring-cyan-400/10">
              <Image
                src="/lionel-portrait.jpeg"
                alt="Portrait of Lionel Jores Nyangon Boyomo"
                fill
                sizes="144px"
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 rounded-full border border-cyan-500/30 bg-cyan-950/40 shadow-[0_0_60px_rgba(34,211,238,0.12)]">
            <Shield className="w-4 h-4 text-cyan-300" />
            <span className="uppercase tracking-widest text-sm text-cyan-100">WEB3 SECURITY ENGINEER & DEFI BUILDER</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            Lionel Jores Nyangon<br />
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">I build • I break • I secure</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Solana & EVM developer building flash-loan bots, smart-contract systems, AI-powered trading agents, and security-first Web3 infrastructure.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#projects" className="px-7 py-4 rounded-2xl bg-white text-black font-bold hover:bg-cyan-200 transition">View Projects ↓</a>
            <a href={cvPath} download="Lionel_Jores_Nyangon_Boyomo_Resume.pdf" className="px-7 py-4 rounded-2xl border border-cyan-400/50 text-cyan-200 hover:bg-cyan-950/60 transition inline-flex items-center justify-center gap-2">
              <Download className="w-5 h-5" /> Download CV
            </a>
            <a href="#connect" className="px-7 py-4 rounded-2xl border border-purple-400/40 text-purple-200 hover:bg-purple-950/50 transition">Connect</a>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 border-y border-cyan-500/15 bg-black/35">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[0.8fr_1.2fr] gap-10 items-center">
          <div className="rounded-3xl border border-cyan-400/20 bg-zinc-950/80 p-8">
            <Rocket className="w-12 h-12 text-cyan-300 mb-6" />
            <p className="text-4xl font-black text-cyan-200">Base · Solana · AI</p>
            <p className="text-gray-400 mt-3">Live deployments, bots, dashboards, and DeFi automation.</p>
          </div>
          <div>
            <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm mb-3">About</p>
            <h2 className="text-4xl md:text-5xl font-black mb-6">Who I Am</h2>
            <p className="text-gray-300 leading-8 mb-4">
              I build protocol-level systems: Solidity contracts, flash-arbitrage scanners, Telegram control bots, dashboards, and AI agents that combine on-chain data with decision logic.
            </p>
            <p className="text-gray-300 leading-8">
              My flagship public project is <strong className="text-cyan-200">OpenMythos-Bot</strong>: a full crypto-intelligence stack with smart contracts, FastAPI, RL agent loop, Telegram integration, and OpenMythos model code — now published on GitHub for the portfolio.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-center uppercase tracking-[0.3em] text-cyan-400 text-sm mb-3">Work</p>
          <h2 className="text-5xl font-black text-center mb-16">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p) => (
              <article key={p.title} className="group bg-zinc-950/80 border border-cyan-500/20 hover:border-cyan-300 rounded-3xl p-8 transition-all hover:-translate-y-2 hover:shadow-[0_0_50px_rgba(34,211,238,0.12)]">
                <div className={`h-1.5 w-20 bg-gradient-to-r ${p.color} rounded-full mb-6`} />
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-2xl font-black">{p.title}</h3>
                  <span className="text-[10px] text-emerald-300 border border-emerald-400/30 rounded-full px-3 py-1 whitespace-nowrap">{p.status}</span>
                </div>
                <p className="text-gray-400 mb-6 leading-7">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-7">
                  {p.tags.map((tag) => <span key={tag} className="text-xs px-3 py-1 bg-cyan-900/40 text-cyan-300 rounded-full border border-cyan-400/10">{tag}</span>)}
                </div>
                <div className="flex gap-3">
                  <a href={p.href} target="_blank" rel="noreferrer" className="flex-1 py-3 rounded-xl bg-cyan-400 text-black text-center font-bold hover:bg-cyan-300 inline-flex justify-center items-center gap-2">
                    Open <ExternalLink className="w-4 h-4" />
                  </a>
                  {p.secondaryHref && (
                    <a href={p.secondaryHref} target="_blank" rel="noreferrer" className="flex-1 py-3 rounded-xl border border-cyan-400/30 text-cyan-200 text-center hover:bg-cyan-950/50">
                      {p.secondaryLabel}
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 px-6 bg-black/45 border-y border-cyan-500/15">
        <div className="max-w-6xl mx-auto">
          <p className="text-center uppercase tracking-[0.3em] text-cyan-400 text-sm mb-3">Stack</p>
          <h2 className="text-5xl font-black text-center mb-12">Skills & Tools</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillGroups.map(([title, ...skills]) => (
              <div key={title} className="rounded-3xl border border-purple-400/20 bg-zinc-950/70 p-6">
                <h3 className="text-xl font-bold text-purple-200 mb-5">{title}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((s) => <span key={s} className="text-xs px-3 py-2 rounded-full bg-white/5 border border-white/10 text-gray-200">{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="connect" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-center uppercase tracking-[0.3em] text-cyan-400 text-sm mb-3">Hub</p>
          <h2 className="text-5xl font-black text-center mb-3">Find Me Online</h2>
          <p className="text-center text-gray-400 mb-12">Click any link, or use the QR button to copy the URL.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {socialAccounts.map((account, i) => {
              const Icon = account.icon;
              const qrUrl = generateQRUrl(account.url);
              return (
                <div key={account.name} className="group bg-zinc-950/80 border border-cyan-500/20 hover:border-cyan-400 rounded-3xl p-8 text-center transition-all hover:-translate-y-1">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-white rounded-2xl">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={qrUrl} alt={`${account.name} QR code`} className="w-40 h-40 rounded-xl" />
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center">
                      <Icon size={26} />
                    </div>
                    <div className="text-left">
                      <p className="font-bold">{account.name}</p>
                      <p className="text-cyan-400 text-sm break-all">{account.username}</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <a href={account.url} target="_blank" rel="noreferrer" className="flex-1 py-4 bg-zinc-900 hover:bg-cyan-950 border border-cyan-500/30 rounded-2xl text-sm">Open</a>
                    <button type="button" onClick={() => copyToClipboard(account.url, i)} className="px-6 py-4 bg-zinc-900 hover:bg-zinc-800 border border-cyan-500/30 rounded-2xl" aria-label={`Copy ${account.name} URL`}>
                      {copiedQR === i ? <Check size={20} className="text-green-400" /> : <Copy size={20} />}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="cv" className="py-20 px-6 bg-black/50 border-y border-cyan-500/15">
        <div className="max-w-4xl mx-auto text-center rounded-3xl border border-cyan-400/20 bg-zinc-950/80 p-10">
          <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm mb-3">Resume</p>
          <h2 className="text-4xl font-black mb-4">Curriculum Vitae</h2>
          <div className="mb-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Image
              src="/lionel-portrait.jpeg"
              alt="Portrait of Lionel Jores Nyangon Boyomo"
              width={96}
              height={96}
              className="h-24 w-24 rounded-2xl border border-cyan-400/30 object-cover"
            />
            <p className="text-gray-400 sm:text-left">Download the latest resume with the updated portrait and experience details.</p>
          </div>
          <a href={cvPath} download="Lionel_Jores_Nyangon_Boyomo_Resume.pdf" className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-black hover:opacity-90 transition">
            <Download className="w-5 h-5" /> Download CV
          </a>
        </div>
      </section>

      <footer className="text-center py-12 text-gray-500 border-t border-cyan-500/20">
        © 2026 Lionel Jores Nyangon • Web3 Security Engineer • OpenMythos-Bot integrated
      </footer>
    </div>
  );
}
