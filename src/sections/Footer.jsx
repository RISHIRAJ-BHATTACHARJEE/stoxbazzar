import { Instagram, Send, Youtube } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="h-full bg-black p-12 flex flex-col gap-7 border-b border-[#555BCE] lg:hidden">
        <img src="/logo.png" alt="" className="w-[60%]" />

        <h2 className="text-zinc-500">
          StoxBazaar is a finance app designed to help you manage your
          investments.
        </h2>

        <div className="flex items-center justify-start gap-5">
          <a href="https://www.youtube.com/@StoxBazaar">
            <Youtube />
          </a>
          <a href="https://www.instagram.com/StoxBazaar/">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://t.me/stoxbazaar">
            <Send size={16} />
          </a>
        </div>

        <ul className="text-zinc-400 flex flex-col gap-3">
          <a href="#about">About</a>
          <a href="#">Contact</a>
          <a href="#faq">FAQ</a>
        </ul>

        <p className="text-sm text-zinc-400">
          © 2025 STOXBAZAAR. All rights reserved.
        </p>
      </div>

      <div className="hidden lg:flex items-start justify-between h-full bg-black px-24 py-14 border-b border-b-blue-500">
        <div className="flex items-center justify-start gap-5">
          <a href="https://www.youtube.com/@StoxBazaar">
            <Youtube />
          </a>
          <a href="https://www.instagram.com/StoxBazaar/">
            <Instagram />
          </a>
          <a href="https://t.me/stoxbazaar">
            <Send />
          </a>
        </div>
        <div className="flex flex-col items-center justify-between gap-18 pl-24">
          <img src="/logo.png" alt="" className="w-2/6" />
          <h2 className="text-zinc-400 text-[20px] w-2/3 text-center">
            StoxBazaar is a finance app designed to help you manage your
            investments.
          </h2>
          <p className="text-lg text-zinc-400">
            © 2025{" "}
            <span className="font-semibold text-zinc-400 text-lg">
              STOXBAZAAR.
            </span>{" "}
            All rights reserved.
          </p>
        </div>
        <ul className="text-zinc-400 lg:text-sm flex gap-8 text-lg">
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#faq">FAQ</a>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
