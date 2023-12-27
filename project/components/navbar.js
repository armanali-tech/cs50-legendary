import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();
  // Set initial state of menu
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    // Select DOM Items
    const menuBtn = document.querySelector(".menu-btn");
    const menu = document.querySelector(".menu");
    const menuNav = document.querySelector(".menu-nav");
    const menuBranding = document.querySelector(".menu-branding");
    const navItem = document.querySelectorAll(".nav-item");

    function hideMenu() {
      menuBtn.classList.remove("close");
      menu.classList.remove("show");
      menuNav.classList.remove("show");
      menuBranding.classList.remove("show");
      navItem.forEach((item) => item.classList.add("show"));

      // Set Menu Sate
      setShowMenu(false);
    }

    if (!showMenu) {
      menuBtn.classList.add("close");
      menu.classList.add("show");
      menuNav.classList.add("show");
      menuBranding.classList.add("show");
      navItem.forEach((item) => item.classList.add("show"));

      // Set Menu Sate
      setShowMenu(true);
    } else hideMenu();

    setTimeout(hideMenu, 10000);
  }

  return (
    <header>
      <div className="menu-btn" onClick={toggleMenu}>
        <div className="btn-line"></div>
        <div className="btn-line"></div>
        <div className="btn-line"></div>
      </div>
      <nav className="menu">
        <div className="menu-branding">
          <div className="portrait">
            <Image
              className="portrait-img"
              src={process.env.NEXT_PUBLIC_MEDIA_URL + "img/ARMAN_DSC_7793.png"}
              width={180}
              height={220}
            />
          </div>
        </div>
        <ul className="menu-nav">
          <li className="nav-item current" onClick={() => router.push("/")}>
            <span className="nav-link">Home</span>
          </li>
          <li className="nav-item" onClick={() => router.push("/about")}>
            <span className="nav-link">About</span>
          </li>
          <li className="nav-item" onClick={() => router.push("/projects")}>
            <span className="nav-link">Portfolio</span>
          </li>
          <li className="nav-item" onClick={() => router.push("/contact")}>
            <span className="nav-link">Contact</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
