"use client";

import { useRouter }
from "next/navigation";

import { GoogleLogin }
from "@react-oauth/google";

export default function GoogleLoginButton() {

 const router = useRouter();

 return (
  <GoogleLogin
   onSuccess={async credential => {

    await fetch(
      "/api/auth/google",
      {
       method: "POST",

       headers: {
        "Content-Type":
         "application/json",
       },

       body: JSON.stringify({
        token:
         credential.credential,
       }),
      }
    );

    router.push("/admin");
   }}
  />
 );
}