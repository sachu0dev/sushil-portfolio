import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="text-white/75 flex justify-between py-6">
      <div>
        <p>Copyright © 2024 Sushil Kumar.</p>
        <p>All rights reserved.</p>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <Link
          href="https://www.linkedin.com/in/sachu0dev/"
          target="_blank"
          className="hover:text-white/50"
        >
          Linkedin
        </Link>
        <Link
          href="https://github.com/sachu0dev"
          target="_blank"
          className="hover:text-white/50"
        >
          Github
        </Link>
        <Link
          href="mailto:sushil.dev.in@gmail.com"
          target="_blank"
          className="hover:text-white/50"
        >
          Email
        </Link>
        <Link
          href="https://x.com/sachu0dev"
          target="_blank"
          className="hover:text-white/50"
        >
          Twitter
        </Link>
        <Link
          href="https://drive.google.com/file/d/1yOwydSbpM2dZUPPyPnZ-ynlQaGN6DRpf"
          target="_blank"
          className="hover:text-white/50"
        >
          Resume
        </Link>
      </div>
    </div>
  );
};

export default Footer;
