"use client";

import { useEffect, useRef, useState, useCallback } from "react";

type Mode = "call" | "chat";
type CallStatus = "idle" | "connecting" | "active" | "ended";
interface ChatMsg {
  role: "user" | "assistant";
  text: string;
}

export function VapiWidget() {
  const [mode, setMode] = useState<Mode>("call");
  const [callStatus, setCallStatus] = useState<CallStatus>("idle");
  const [chatMessages, setChatMessages] = useState<ChatMsg[]>([]);
  const [chatInput, setChatInput] = useState("");
  const [chatLoading, setChatLoading] = useState(false);
  const vapiRef = useRef<any>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Scroll chat to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  // Voice call
  async function startCall() {
    if (callStatus === "active" || callStatus === "connecting") {
      vapiRef.current?.stop();
      setCallStatus("ended");
      return;
    }
    setCallStatus("connecting");
    try {
      const { default: Vapi } = await import("@vapi-ai/web");
      const vapi = new Vapi("84b4856c-fb7a-429b-837c-44ee69c59753");
      vapiRef.current = vapi;
      vapi.on("call-start", () => setCallStatus("active"));
      vapi.on("call-end", () => setCallStatus("ended"));
      vapi.on("error", () => setCallStatus("idle"));
      await vapi.start("7e7f32d5-4a67-47cd-8fe4-b314e73139a8");
    } catch {
      setCallStatus("idle");
    }
  }

  useEffect(() => {
    return () => { vapiRef.current?.stop(); };
  }, []);

  // Chat handler - simple AI chat simulation using Vapi send message or local
  const sendChat = useCallback(async () => {
    const text = chatInput.trim();
    if (!text || chatLoading) return;
    setChatInput("");
    setChatMessages((prev) => [...prev, { role: "user", text }]);
    setChatLoading(true);

    // If there's an active Vapi call, send via Vapi
    if (vapiRef.current && callStatus === "active") {
      try {
        vapiRef.current.send({ type: "add-message", message: { role: "user", content: text } });
      } catch { /* fallback below */ }
    }

    // Simulated assistant response (replace with real API when available)
    setTimeout(() => {
      const responses = [
        "Hi! I'm the Core AI receptionist. I can answer calls, qualify leads, and book appointments for your business 24/7. Would you like to hear how it works?",
        "Great question! Our AI answers in under 0.5 seconds, asks qualifying questions, and books leads straight into your calendar. Want to try a live voice demo?",
        "We work with plumbers, estate agents, and home service businesses across the UK. Pricing starts at £497/month. Shall I book you a 15-minute demo with Manny?",
        "Absolutely! The AI handles everything — emergency call-outs, appointment booking, lead qualification. You get a text with the details. Would you like to book a demo?",
      ];
      const resp = responses[chatMessages.length % responses.length];
      setChatMessages((prev) => [...prev, { role: "assistant", text: resp }]);
      setChatLoading(false);
    }, 1200);
  }, [chatInput, chatLoading, callStatus, chatMessages.length]);

  // Sound wave bars
  const SoundWave = ({ active, size = "sm" }: { active: boolean; size?: "sm" | "lg" }) => {
    const barClass = size === "lg" ? "sound-bar-lg" : "sound-bar";
    const heights = size === "lg" ? [16, 28, 40, 28, 36, 20, 32, 24] : [8, 16, 24, 16, 20, 12, 18, 14];
    return (
      <div className="flex items-center justify-center gap-[3px]">
        {heights.map((h, i) => (
          <div
            key={i}
            className={`${barClass} ${active ? "" : "!animate-none"}`}
            style={{
              animationDelay: `${i * 0.15}s`,
              height: active ? undefined : `${size === "lg" ? 6 : 4}px`,
              opacity: active ? 1 : 0.3,
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="mx-auto max-w-xl">
      {/* Mode toggle */}
      <div className="mb-8 flex justify-center">
        <div className="inline-flex rounded-full border border-white/10 bg-white/5 p-1">
          <button
            onClick={() => setMode("call")}
            className={`rounded-full px-5 py-2 text-sm font-medium transition ${
              mode === "call" ? "bg-[--color-accent] text-white shadow-lg" : "text-[--color-muted] hover:text-white"
            }`}
          >
            🎤 Call
          </button>
          <button
            onClick={() => setMode("chat")}
            className={`rounded-full px-5 py-2 text-sm font-medium transition ${
              mode === "chat" ? "bg-[--color-accent] text-white shadow-lg" : "text-[--color-muted] hover:text-white"
            }`}
          >
            💬 Chat
          </button>
        </div>
      </div>

      {mode === "call" ? (
        /* VOICE MODE */
        <div className="flex flex-col items-center gap-6">
          <SoundWave active={callStatus === "active"} size="lg" />

          <button
            onClick={startCall}
            disabled={callStatus === "connecting"}
            className={`relative flex h-20 w-20 items-center justify-center rounded-full transition-all ${
              callStatus === "active"
                ? "bg-red-600 hover:bg-red-700"
                : "bg-[--color-accent] hover:bg-[--color-accent-hover] mic-pulse"
            } disabled:opacity-50`}
          >
            {callStatus === "active" ? (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><rect x="6" y="6" width="12" height="12" rx="2"/></svg>
            ) : (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                <line x1="12" x2="12" y1="19" y2="22"/>
              </svg>
            )}
          </button>

          <p className="text-sm text-[--color-muted]">
            {callStatus === "idle" && "Tap to speak with the AI receptionist"}
            {callStatus === "connecting" && "Connecting…"}
            {callStatus === "active" && (
              <span className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-red-500" />
                Call in progress — speak naturally
              </span>
            )}
            {callStatus === "ended" && (
              <>
                Call ended.{" "}
                <a href="/book-demo" className="text-[--color-accent] underline">
                  Book a demo →
                </a>
              </>
            )}
          </p>
        </div>
      ) : (
        /* CHAT MODE */
        <div className="rounded-2xl border border-white/10 bg-[--color-surface] overflow-hidden">
          {/* Chat messages */}
          <div className="h-72 overflow-y-auto p-4 space-y-3">
            {chatMessages.length === 0 && (
              <div className="flex h-full items-center justify-center">
                <p className="text-sm text-[--color-muted]">
                  Send a message to chat with the AI receptionist
                </p>
              </div>
            )}
            {chatMessages.map((msg, i) => (
              <div
                key={i}
                className={`chat-msg flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${
                    msg.role === "user"
                      ? "bg-[--color-accent] text-white"
                      : "bg-white/5 text-gray-300 border border-white/5"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {chatLoading && (
              <div className="flex justify-start">
                <div className="rounded-2xl bg-white/5 border border-white/5 px-4 py-3">
                  <div className="flex gap-1">
                    <span className="h-2 w-2 rounded-full bg-[--color-muted] animate-bounce" style={{ animationDelay: "0s" }} />
                    <span className="h-2 w-2 rounded-full bg-[--color-muted] animate-bounce" style={{ animationDelay: "0.15s" }} />
                    <span className="h-2 w-2 rounded-full bg-[--color-muted] animate-bounce" style={{ animationDelay: "0.3s" }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-white/10 p-3">
            <div className="flex gap-2">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendChat()}
                placeholder="Type a message…"
                className="flex-1 rounded-xl bg-white/5 px-4 py-2.5 text-sm text-white placeholder-[--color-muted] outline-none border border-white/5 focus:border-[--color-accent]/50 transition"
              />
              <button
                onClick={sendChat}
                disabled={!chatInput.trim() || chatLoading}
                className="rounded-xl bg-[--color-accent] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[--color-accent-hover] disabled:opacity-50"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
