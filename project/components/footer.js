import React from "react";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  const year = new Date().getFullYear();
  return (
    <footer id="main-footer">
      <div>&copy; {year} ARMAN ALI</div>
      <div className="footer-menu">
        <span onClick={() => router.push("/about")}>About</span>
        <span onClick={() => router.push("/projects")}>Portfolio</span>
        <span onClick={() => router.push("/contact")}>Contact</span>
      </div>
    </footer>
  );
};

export default Footer;
