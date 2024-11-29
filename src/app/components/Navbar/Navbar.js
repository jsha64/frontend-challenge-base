"use client";
import Image from "next/image";
import React, { useState } from "react";
import { auth } from "../../../../firebase";
import { sendSignInLinkToEmail } from "firebase/auth";
import { Buttons } from "../Buttons/Buttons";

export default function NavbarLoginRegister({ children }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const actionCodeSettings = {
    // La URL a la que se redirigirá después de que el usuario haga clic en el enlace
    url: "http://localhost:3000/registro-completado", // Cambia esto por la URL de tu proyecto
    handleCodeInApp: true,
  };
  const [activeButton, setActiveButton] = useState(null);
  const [isContentVisible, setIsContentVisible] = useState(true);
  const handleButtonClick = (button) => {
    setActiveButton(button);
  };
  const handleButtonLogo = (button) => {
    if (button === "logo") {
      console.log(isContentVisible);
      setIsContentVisible(false);
    } else {
      setActiveButton(button);
      setIsContentVisible(false);
    }
  };

  const handleSendLink = async () => {
    try {
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      // Guardar el correo en localStorage para completar el login
      window.localStorage.setItem("emailForSignIn", email);
      setMessage("El enlace ha sido enviado. Revisa tu correo.");
    } catch (error) {
      console.error("Error al enviar el enlace:", error.message);
      setMessage("Ocurrió un error al enviar el enlace.");
    }
  };
  return (
    <div className="w-h navbar">
      <ul className="logo-column">
        <img alt="logo" src="/Frame 1171276256.png" />
        <li>Popular</li>
        <li>Favoritos</li>
      </ul>
      <div onClick={() => handleButtonLogo("logo")} className="float-login">
        <Image alt="login" src={"/Login.png"} width={30} height={30} />
      </div>
      {!isContentVisible && (
        <div className="login-register">
          <div className="inputs-login">
            <div className="button-back">
              <Image alt="arrow" src={"/Arrow.png"} width={20} height={20} />
              <span className="span">Back</span>
            </div>
            <div className="div-buttons">
              <Buttons
                activeButton={activeButton}
                onButtonClick={handleButtonClick}
              />
            </div>

            {activeButton === "sign-up" && (
              <div className="input-register">
                <input
                  className="i-style"
                  type="email"
                  placeholder="Ingresa tu correo"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  onClick={handleSendLink}
                  type="button"
                  className="button-register"
                >
                  Register with your Email
                </button>
                {message && <p>{message}</p>}
                <p className="paragram">
                  For any questions, reach out to support@Quickbetdmovies.com
                </p>
              </div>
            )}
          </div>
          {children}
        </div>
      )}
    </div>
  );
}
