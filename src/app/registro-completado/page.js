"use client";

import { auth } from "../../../firebase";
import { signInWithEmailLink, isSignInWithEmailLink } from "firebase/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function CompleteSignIn() {
  const [message, setMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    const completeLogin = async () => {
      if (isSignInWithEmailLink(auth, window.location.href)) {
        let email = window.localStorage.getItem("emailForSignIn");

        if (!email) {
          email = window.prompt(
            "Por favor, ingresa tu correo para completar el inicio de sesión."
          );
        }

        try {
          const result = await signInWithEmailLink(
            auth,
            email,
            window.location.href
          );
          console.log("Usuario autenticado:", result.user);
          window.localStorage.removeItem("emailForSignIn"); // Limpiar almacenamiento
          router.push("/"); // Redirigir después del login
        } catch (error) {
          console.error(
            "Error al completar el inicio de sesión:",
            error.message
          );
          setMessage("Ocurrió un error al completar el inicio de sesión.");
        }
      }
    };

    completeLogin();
  }, [router]);

  return (
    <div>
      <h1>Completando inicio de sesión...</h1>
      {message && <p>{message}</p>}
    </div>
  );
}
