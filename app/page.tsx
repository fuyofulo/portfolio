import Image from "next/image";
import type { StaticImageData } from "next/image";
import type { ReactNode } from "react";
import { ClipboardButton } from "../components/clipboard-button";
import { ProjectCarousel } from "../components/project-carousel";
import { TechPill } from "../components/tech-pill";
import { WhiteFireSmiley } from "../components/white-fire-smiley";
import devsLogo from "../images/100xdevs_logo.jpg";
import meteoraPreview from "../images/tui.png";
import substackLogo from "../images/substack.png";
import superteamLogo from "../images/superteam_logo.jpg";
import tksLogo from "../images/tks_logo_2.jpg";
import rektoffLogo from "../images/rektoff_logo.png";
import raftPreview from "../images/raft-kv-ss-2.png";

const socials = [
  {
    icon: "/assets/github2-142-svgrepo-com.svg",
    label: "GitHub",
    href: "https://github.com/fuyofulo",
  },
  {
    icon: "/assets/linkedin-svgrepo-com.svg",
    label: "LinkedIn",
    href: "https://linkedin.com/in/fuyofulo",
  },
  {
    icon: "/assets/icons8-x.svg",
    label: "X",
    href: "https://x.com/fuyofulo",
  },
] as const;

const highlights = [
  {
    title: "The Knowledge Society",
    detail: "Alumni, 2022-2024",
    href: "https://www.tks.world/",
    logo: tksLogo,
  },
  {
    title: "100xDevs",
    detail: "Student of Super 30 2.0",
    href: "https://x.com/100xSchool",
    logo: devsLogo,
  },
  {
    title: "Superteam",
    detail: "Member, Solana India Fellowship 2025",
    href: "https://x.com/superteam",
    logo: superteamLogo,
  },
  {
    title: "Rektoff",
    detail: "Solana and Rust Security bootcamp",
    href: "https://x.com/rektoff_xyz",
    logo: rektoffLogo,
  },
] as const;

const featuredProjects = [
  {
    label: "Solana Infra",
    title: "Meteora DLMM Indexer",
    description:
      "Real-time Meteora DLMM data platform with Yellowstone ingestion, IDL-driven decode and enrichment, ClickHouse storage, Redis flush signaling, and a Rust backend powering a live React dashboard.",
    code: "https://github.com/fuyofulo/meteora_dlmm_indexer",
    tags: ["Rust", "Solana", "gRPC"],
    preview: meteoraPreview,
  },
  {
    label: "Distributed Systems",
    title: "raft_kv",
    description:
      "Distributed key-value store in Rust using Raft consensus for replication, leader election, and fault-tolerant state synchronization.",
    code: "https://github.com/fuyofulo/raft_kv",
    article: "https://x.com/fuyofulo/status/2020674400404881615",
    tags: ["Rust", "gRPC"],
    preview: raftPreview,
  },
  {
    label: "Solana Anchor Program",
    title: "Hedge Fund Solana Program",
    description:
      "This program implements a hedge-fund style pool on Solana. Managers create funds, investors deposit SOL to receive shares based on NAV, and managers trade whitelisted tokens using an atomic borrow/settle pattern. The platform controls a global whitelist and executes limit/DCA orders and strategy rebalances via a trusted keeper.",
    code: "https://github.com/fuyofulo/hedgefund-as-a-service",
    tags: ["Solana", "Rust", "Anchor"],
    preview: null,
  },
] as const;

const otherProjects = [
  {
    title: "Pumpswap Indexer",
    description:
      "Yellowstone gRPC indexer that parses raw on-chain streams and decodes buy/sell trades against program IDL definitions.",
    code: "https://github.com/fuyofulo/pumpswap-trades-indexer",
    tags: ["Rust", "Solana", "gRPC"],
  },
  {
    title: "Wide Sandwich Attack Detection",
    description:
      "Rust script that parses raw RPC transaction streams for pumpfun tokens and detects wide sandwich patterns within n+3 slots.",
    code: "https://github.com/fuyofulo/astra-assignment",
    tags: ["Rust", "Solana", "gRPC"],
  },
  {
    title: "Telegram Hedgefund Bot",
    description:
      "Centralized Telegram bot where groups can pool capital, vote for traders, and track strategy outcomes.",
    code: "https://github.com/fuyofulo/blink_bot",
    tags: ["Solana", "TypeScript", "Node.js", "Prisma"],
  },
  {
    title: "Solana Token TSS",
    description:
      "Extended ZenGo's solana-tss library to support SPL token transfers from a MuSig2 aggregated wallet.",
    code: "https://github.com/fuyofulo/solana-token-tss",
    tags: ["Rust", "Solana"],
  },
  {
    title: "Orderbook",
    description:
      "Single-threaded orderbook engine in Rust with deterministic matching flow.",
    code: "https://github.com/fuyofulo/single-threaded-orderbook",
    tags: ["Rust"],
  },
  {
    title: "Axoria",
    description:
      "Solana token launchpad for devnet airdrops, token creation, and mint flows.",
    code: "https://github.com/fuyofulo/axoria",
    tags: ["Solana", "React"],
  },
  {
    title: "CFD Platform",
    description:
      "Exness clone focused on market and account workflow replication.",
    code: "https://github.com/fuyofulo/exness",
    tags: ["TypeScript", "Node.js", "React", "Prisma"],
  },
  {
    title: "Escrow Programs",
    description:
      "Collection of baseline Solana escrow program implementations.",
    code: "https://github.com/fuyofulo/escrow-programs",
    tags: ["Solana", "Anchor", "Rust", "Redis"],
  },
  {
    title: "AI Agency Website",
    description:
      "Agency site integrating a Vapi voice agent and chatbot workflows.",
    code: "https://github.com/fuyofulo/agency01",
    tags: ["React"],
  },
  {
    title: "Restaurant Management System",
    description:
      "Built an MCP server from scratch and integrated it with a chat interface for operations.",
    code: "https://github.com/fuyofulo/booking-system",
    tags: ["TypeScript", "Node.js", "Prisma", "React"],
  },
  {
    title: "Room Chat",
    description:
      "Realtime room-based chat application written in TypeScript.",
    code: "https://github.com/fuyofulo/chat-application",
    tags: ["TypeScript", "Node.js", "React"],
  },
] as const;

function Window({
  title,
  children,
  className = "",
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`window ${className}`.trim()}>
      <div className="window-title">
        <span>{title}</span>
        <div className="window-actions" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className="window-body">{children}</div>
    </section>
  );
}

function TagList({ tags }: { tags: readonly string[] }) {
  return (
    <ul className="tag-list" aria-label="technologies">
      {tags.map((tag) => (
        <li key={tag}>
          <TechPill label={tag} />
        </li>
      ))}
    </ul>
  );
}

function LogoStamp({
  src,
  alt,
}: {
  src: StaticImageData;
  alt: string;
}) {
  return (
    <div className="logo-stamp">
      <Image src={src} alt={alt} width={44} height={44} />
    </div>
  );
}

function FeaturedProjectCard({
  project,
}: {
  project: (typeof featuredProjects)[number];
}) {
  return (
    <article className="project-card">
      {project.preview ? (
        <div className="project-card__preview">
          <Image
            src={project.preview}
            alt={`${project.title} preview`}
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
        </div>
      ) : (
        <div className="project-card__preview project-card__preview--fallback">
          <span>vault contract</span>
          <span>flash-loan swap execution</span>
          <span>jupiter automation</span>
        </div>
      )}

      <div className="project-card__content">
        <div className="project-card__top">
          <span className="project-label">{project.label}</span>
          <span className="new-badge">featured</span>
        </div>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__description">{project.description}</p>
        <TagList tags={project.tags} />
        <div className="project-links">
          <a href={project.code} target="_blank" rel="noreferrer">
            code
          </a>
          {"article" in project && project.article ? (
            <a href={project.article} target="_blank" rel="noreferrer">
              article
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main className="site-shell">
      <div className="wallpaper" />
      <div className="page">
        <div className="top-strip">
          <div className="top-strip__badge">building and learning</div>
          <div className="marquee" aria-label="site ticker">
            <span>
              welcome to fuyo&apos;s corner of the internet // i reply fast on x
              and email //
            </span>
          </div>
          <div className="top-strip__badge blink">online now</div>
        </div>

        <header>
          <Window title="homepage.exe" className="hero-window">
            <div className="hero-layout">
              <div className="hero-copy-panel">
                <p className="eyebrow">yo! I am</p>
                <h1>fuyofulo</h1>
                <p className="hero-copy">
                  I’m a software engineer currently focused on indexing the Solana blockchain. 
                  My work spans Solana programs, distributed systems, and full-stack applications.
                </p>

                <div className="hero-actions">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      className="micro-button micro-button--lime"
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        className="micro-button__icon"
                        src={social.icon}
                        alt=""
                        aria-hidden="true"
                      />
                      {social.label}
                    </a>
                  ))}
                  <ClipboardButton
                    className="micro-button--lime"
                    iconSrc="/assets/gmail-svgrepo-com.svg"
                    label="email"
                    value="pheonixdiaz625@gmail.com"
                  />
                </div>

                <div className="status-row">
                  <div>
                    <span className="status-label">status</span>
                    <strong>open for work</strong>
                  </div>
                  <div>
                    <span className="status-label">location</span>
                    <strong>internet, mostly</strong>
                  </div>
                </div>
              </div>

              <div className="hero-smiley">
                <WhiteFireSmiley />
                <p className="hero-smiley__label">fuyosmile.gif</p>
              </div>
            </div>
          </Window>
        </header>

        <section className="content-grid">
          <Window title="highlights.webring">
            <div className="highlight-list">
              {highlights.map((item) => (
                <a
                  key={item.title}
                  className="highlight-card"
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <LogoStamp src={item.logo} alt={`${item.title} logo`} />
                  <div className="highlight-card__copy">
                    <strong className="highlight-card__title">{item.title}</strong>
                    <span>{item.detail}</span>
                  </div>
                </a>
              ))}
            </div>
          </Window>

          <Window title="newsletter_signup.htm">
            <div className="newsletter-box">
              <div className="newsletter-box__header">
                <LogoStamp src={substackLogo} alt="Substack logo" />
                <p className="newsletter-box__title">fuyo&apos;s public diary</p>
              </div>
              <p className="newsletter-box__description">
              notes on what I’m building, learning, and figuring out in public.
              </p>
              <a
                className="micro-button micro-button--lime"
                href="https://fuyofulo.substack.com"
                target="_blank"
                rel="noreferrer"
              >
                go to newsletter
              </a>
            </div>
          </Window>
        </section>

        <Window title="projects/featured" className="section-window">
          <div className="section-heading">
            <h2>featured projects</h2>
          </div>

          <div className="featured-grid">
            {featuredProjects.map((project) => (
              <FeaturedProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Window>

        <Window title="projects/archive" className="section-window">
          <ProjectCarousel projects={otherProjects} title="other projects" />
        </Window>
      </div>
    </main>
  );
}
