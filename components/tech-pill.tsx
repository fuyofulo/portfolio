const techIconMap: Record<string, string> = {
  Anchor: "/assets/anchor-filled-heavy-svgrepo-com.svg",
  Bun: "/assets/Bun.svg",
  "Node.js": "/assets/nodejs-icon-logo-svgrepo-com.svg",
  Prisma: "/assets/light-prisma-svgrepo-com.svg",
  React: "/assets/react.svg",
  Redis: "/assets/redis-svgrepo-com.svg",
  Rust: "/assets/rustacean-orig-noshadow.svg",
  ScyllaDB: "/assets/scylladb-icon.svg",
  Solana: "/assets/solanaLogoMark.svg",
  TypeScript: "/assets/typescript-official-svgrepo-com.svg",
  Vite: "/assets/vite-svgrepo-com.svg",
  gRPC: "/assets/Grpc--Streamline-Svg-Logos.svg",
  PostgreSQL: "/assets/postgresql-svgrepo-com.svg",
};

type TechPillProps = {
  label: string;
};

export function TechPill({ label }: TechPillProps) {
  const iconSrc = techIconMap[label];

  return (
    <span className="tech-pill">
      {iconSrc ? (
        <img
          className="tech-pill__icon"
          src={iconSrc}
          alt=""
          aria-hidden="true"
        />
      ) : null}
      <span>{label}</span>
    </span>
  );
}
