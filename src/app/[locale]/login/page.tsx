import GoogleLoginButton from "@/components/admin/GoogleLoginButton";

export default function LoginPage() {
 return (
  <main className="min-h-screen bg-slate-950 text-slate-50 flex items-center justify-center px-4 py-10">
   <section className="w-full max-w-md rounded-4xl border border-slate-800/80 bg-slate-900/90 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.55)] backdrop-blur-sm">
    <div className="mb-8 text-center">
     <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Bienvenue</p>
     <h1 className="mt-3 text-3xl font-semibold text-slate-100 sm:text-4xl">Connexion</h1>
     <p className="mt-3 text-sm leading-6 text-slate-400">Connectez-vous avec Google pour accéder à votre espace administrateur.</p>
    </div>

    <div className="space-y-4">
     <GoogleLoginButton />
    </div>
   </section>
  </main>
 );
}