"use client";

import { useState } from "react";

type ClipboardButtonProps = {
  className?: string;
  iconSrc?: string;
  label?: string;
  value: string;
};

export function ClipboardButton({
  className = "",
  iconSrc,
  label = "email",
  value,
}: ClipboardButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="clipboard-button-wrap">
      <button
        className={`micro-button ${className}`.trim()}
        type="button"
        onClick={handleCopy}
      >
        {iconSrc ? (
          <img
            className="micro-button__icon"
            src={iconSrc}
            alt=""
            aria-hidden="true"
          />
        ) : null}
        <span>{label}</span>
      </button>
      <span className={`clipboard-toast ${copied ? "is-visible" : ""}`}>
        copied!
      </span>
    </div>
  );
}
