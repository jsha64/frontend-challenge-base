import React from "react";
import Image from "next/image";

export default function PosterLogin() {
  return (
    <div className="poster-login">
      <div className="login-register-poster">
        <h1 className="login-register-poster-h1">
          Welcome to Quickbet Movies!
        </h1>
        <span className="login-register-poster-span">
          Ready to unlock a universe of cinematic delights? Sign up now and
          start your journey with us!
        </span>
        <Image
          className="img"
          alt="img"
          src={"/02.png"}
          width={400}
          height={400}
        />
      </div>
    </div>
  );
}
