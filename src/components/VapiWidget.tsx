"use client";

import { useEffect, useRef, useState } from "react";

export function VapiWidget() {
  const [status, setStatus] = useState<"idle" | "connecting" | "active" | "ended">("idle");
  const vapiRef = useRef<any>(null);

  async function startCall() {
    if (status === "active" || status === "connecting") {
      vapiRef.current?.stop();
      setStatus("ended");
      return;
    }

    setStatus("connecting");
    try {
      const { default: Vapi } = await import("@vapi-ai/web");
      const vapi = new Vapi("84b4856c-fb7a-429b-837c-44ee69c59753");
      vapiRef.current = vapi;

      vapi.on("call-start", () => setStatus("active"));
      vapi.on("call-end", () => setStatus("ended"));
      vapi.on("error", () => setStatus("idle"));

      await vapi.start("7e7f32d5-4a67-47cd-8fe4-b314e73139a8");
    } catch {
      setStatus("idle");
    }
  }

  useEffect(() => {
    return () => {
      vapiRef.current?.stop();
    };
  }, []);

  const label =
    status === "idle"
      ? "🔊 Call the AI Receptionist"
      : status === "connecting"
      ? "Connecting…"
      : status === "active"
      ? "🔴 End Call"
      : "🔊 Call Again";

  return (
    <div className="flex flex-col items-center gap-4">
      <button
        onClick={startCall}
        disabled={status === "connecting"}
        className={`rounded-full px-8 py-4 text-lg font-semibold transition ${
          status === "active"
            ? "bg-red-600 hover:bg-red-700 text-white"
            : "bg-[--color-accent] hover:bg-[--color-accent-hover] text-white"
        } disabled:opacity-50`}
      >
        {label}
      </button>
      {status === "active" && (
        <div className="flex items-center gap-2 text-sm text-[--color-muted]">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-red-500" />
          Call in progress — speak naturally
        </div>
      )}
      {status === "ended" && (
        <p className="text-sm text-[--color-muted]">
          Call ended.{" "}
          <a href="/book-demo" className="text-[--color-accent] underline">
            Book a demo to learn more →
          </a>
        </p>
      )}
    </div>
  );
}
