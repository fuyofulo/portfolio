import { useId } from "react";
import smileSrc from "../images/fuyosmile-removebg-preview.png";

export function WhiteFireSmiley() {
  const filterId = useId().replace(/:/g, "");

  return (
    <div className="smiley-container" aria-hidden="true">
      <svg
        viewBox="0 0 71 58"
        xmlns="http://www.w3.org/2000/svg"
        className="fire-svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <filter id={filterId} x="-35%" y="-50%" width="170%" height="230%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.55 0.07"
              numOctaves="2"
              result="noise"
            >
              <animate
                attributeName="baseFrequency"
                dur="7s"
                values="0.55 0.07; 0.55 0.1; 0.55 0.07"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="8"
              xChannelSelector="R"
              yChannelSelector="G"
              result="displaced"
            >
              <animate
                attributeName="scale"
                dur="6s"
                values="6; 8; 6"
                repeatCount="indefinite"
              />
            </feDisplacementMap>
            <feComponentTransfer in="displaced" result="alpha-mask">
              <feFuncR type="linear" slope="0" intercept="0" />
              <feFuncG type="linear" slope="0" intercept="0" />
              <feFuncB type="linear" slope="0" intercept="0" />
              <feFuncA type="linear" slope="1" intercept="0" />
            </feComponentTransfer>
            <feFlood
              result="flood"
              style={{ floodColor: "var(--smiley-color, #111827)" }}
            />
            <feComposite
              in="flood"
              in2="alpha-mask"
              operator="in"
              result="ink"
            />
            <feGaussianBlur in="ink" stdDeviation="0.7" result="blurred" />
            <feMerge>
              <feMergeNode in="blurred" />
              <feMergeNode in="ink" />
            </feMerge>
          </filter>
        </defs>

        <image
          href={smileSrc.src}
          width="71"
          height="58"
          x="0"
          y="0"
          preserveAspectRatio="xMidYMid meet"
          filter={`url(#${filterId})`}
          style={{ imageRendering: "pixelated" }}
        />
      </svg>
    </div>
  );
}
