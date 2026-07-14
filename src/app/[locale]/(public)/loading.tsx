"use client";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-linear-to-br from-[#02121f] via-[#04263d] to-[#010b14]">

      {/* Background Glow */}
      <div className="absolute h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl animate-pulse" />
      <div className="absolute h-72 w-72 rounded-full bg-blue-500/10 blur-3xl animate-ping" />

      {/* Floating bubbles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <span
            key={i}
            // className="absolute bottom-0 rounded-full bg-cyan-300/20 animate-[float_8s_linear_infinite]"
            className="absolute left-[52%] w-3 h-3 rounded-full border border-white/30 bg-bg-page/5 shadow-[inset_0_1px_2px_rgba(255,255,255,0.4)] animate-bubble"
          
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Loader */}
      <div className="relative flex flex-col items-center gap-8">

        {/* Outer Ring */}
        <div className="relative flex items-center justify-center">

          <div className="absolute h-36 w-36 rounded-full border border-cyan-500/20" />

          <div className="absolute h-28 w-28 rounded-full border-4 border-transparent border-t-cyan-400 border-r-sky-500 animate-spin" />

          <div className="absolute h-20 w-20 rounded-full border-4 border-transparent border-b-cyan-300 border-l-blue-400 animate-spin [animation-direction:reverse] [animation-duration:2s]" />

          {/* Center */}
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.8)]">
            <div className="h-4 w-4 rounded-full bg-white animate-pulse" />
          </div>
        </div>

        {/* Text */}
        <div className="text-center pt-7">

          <p className="mt-2 text-sm text-cyan-100/60">
            Exploring the Deep Sea
          </p>

          {/* Progress */}
          <div className="mt-6 h-1 w-64 overflow-hidden rounded-full bg-cyan-950">
            <div className="h-full w-1/2 animate-[loading_1.8s_ease-in-out_infinite] rounded-full bg-linear-to-r from-cyan-300 via-sky-400 to-blue-500" />
          </div>

        </div>

      </div>

      <style jsx>{`
        @keyframes loading {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(300%);
          }
        }

        @keyframes float {
          from {
            transform: translateY(0) scale(1);
            opacity: 0;
          }

          10% {
            opacity: 1;
          }

          90% {
            opacity: 1;
          }

          to {
            transform: translateY(-120vh) scale(1.5);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}