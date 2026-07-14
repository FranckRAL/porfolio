import React from "react";

export default function OceanBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="light-source" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="light light-1" />
        <div className="light light-2" />
        <div className="light light-3" />
        <div className="light light-4" />
        <div className="light light-5" />
      </div>

      {/* 1. Le Gradient Adaptatif de Fond */}
      {/* <div
        className="absolute inset-0 animate-ocean-fluid will-change-[background-position]"
        style={{
          backgroundImage:
            "linear-gradient(-45deg, var(--color-bg-page), var(--color-bg-card), var(--color-bg-page))",
          backgroundSize: "200% 200%",
        }}
      />

      {/* 2. Filtre d'assombrissement pour le contraste 
      <div className="absolute inset-0 bg-black/5 dark:bg-black/20 pointer-events-none" /> */}

      {/* 3. Les Petites Bulles d'Air en Position Fixe sur l'écran */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Bulle 1 */}
        <div
          className="absolute left-[12%] w-3 h-3 rounded-full border dark:border-white/30 border-primary/30 bg-bg-page/5 shadow-[inset_0_1px_3px_rgba(255,255,255,0.4)] animate-bubble"
          style={{ animationDelay: "0s", animationDuration: "14s" }}
        />

        <div
          className="absolute left-[20%] w-5 h-5 rounded-full border dark:border-white/30 border-primary/30 bg-bg-page/5 shadow-[inset_0_1px_3px_rgba(255,255,255,0.4)] animate-bubble"
          style={{ animationDelay: "0s", animationDuration: "14s" }}
        />

        {/* Bulle 2 */}
        <div
          className="absolute left-[38%] w-2 h-2 rounded-full border dark:border-white/30 border-primary/20 bg-bg-page/5 shadow-[inset_0_1px_2px_rgba(255,255,255,0.4)] animate-bubble"
          style={{ animationDelay: "-3s", animationDuration: "18s" }}
        />

        <div
          className="absolute left-[50%] w-5 h-5 rounded-full border dark:border-white/30 border-primary/20 bg-bg-page/5 shadow-[inset_0_1px_2px_rgba(255,255,255,0.4)] animate-bubble"
          style={{ animationDelay: "-3s", animationDuration: "18s" }}
        />

        {/* Bulle 3 */}
        <div
          className="absolute left-[65%] w-4 h-4 rounded-full border dark:border-white/30 border-primary/20 bg-bg-page/5 shadow-[inset_0_1px_3px_rgba(255,255,255,0.3)] animate-bubble"
          style={{ animationDelay: "-6s", animationDuration: "11s" }}
        />

        {/* Bulle 4 */}
        <div
          className="absolute left-[82%] w-10 h-10 rounded-full border dark:border-white/30 border-primary/40 bg-bg-page/10 shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] animate-bubble"
          style={{ animationDelay: "-9s", animationDuration: "15s" }}
        />

        {/* Bulle 5 */}
        <div
          className="absolute left-[52%] w-2.5 h-2.5 rounded-full border dark:border-white/30 border-primary/30 bg-bg-page/5 shadow-[inset_0_1px_2px_rgba(255,255,255,0.4)] animate-bubble"
          style={{ animationDelay: "-4s", animationDuration: "13s" }}
        />
      </div>
    </div>
  );
}
