"use client";

import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="bg-bg-page flex flex-col items-center justify-center min-h-screen text-center">
      <div className="w-md h-md flex justify-center items-center">
        <Link href="https://www.vecteezy.com/free-vector/404">
          <Image
            src="/icons/svgs/vecteezy_404-error-concept-for-landing-page_8892188.svg"
            alt=""
            width={500}
            height={450}
            className="rounded-xl"
          />
        </Link>
      </div>
      <h2 className="text-3xl md:text-6xl font-bold mb-4 font-title">
        Page non trouvée
      </h2>
      <p className="text-text-main mb-6 text-base md:text-xl">
        Désolé, la page que vous cherchez n’existe pas.
      </p>
      <Link
        href="/"
        className="text-base px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition"
      >
        Retour à l’accueil
      </Link>
    </div>
  );
}
