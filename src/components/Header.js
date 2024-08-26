import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import { teal } from "@mui/material/colors";

function Header() {
  function openSideBar() {
    const sidebar = document.querySelector(".mob-list");
    sidebar.style.display = "block";
    sidebar.style.opacity = "0";
    setTimeout(() => {
      sidebar.style.transition = "opacity 0.3s ease-in-out";
      sidebar.style.opacity = "1";
    }, 10);
  }

  function closeSideBar() {
    const sidebar = document.querySelector(".mob-list");
    sidebar.style.transition = "opacity 0.3s ease-in-out";
    sidebar.style.opacity = "0";
    setTimeout(() => {
      sidebar.style.display = "none";
    }, 300);
  }
  const handleAboutClick = (event) => {
    event.preventDefault();
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };
  const handleResumeClick = (event) => {
    event.preventDefault();
    document
      .getElementById("resume-div")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <header id="header">
        <nav className="navbar">
          <ul className="list">
            <Link href="/">
              {" "}
              <li>Home</li>
            </Link>
            <Link to="/about" id="about-link" onClick={handleAboutClick}>
              <li>About</li>
            </Link>
            <Link to="/Resume" onClick={handleResumeClick}>
              <li>Resume</li>
            </Link>
            <li>Services</li>
            <li>Portfolio</li>
            <li>
              Drop Down <KeyboardArrowDownIcon fontSize="small" />
              <ul className="drop-down">
                <li>drop 1</li>
                <li>drop 2</li>
                <li>drop 3</li>
                <li>drop 4</li>
              </ul>
            </li>
            <li>Contact</li>
          </ul>
        </nav>

        {/* MOBILE VIEW */}

        <nav className="mob-navbar">
          <MenuIcon onClick={openSideBar} sx={{ color: teal[50] }} />
          <ul className="mob-list" onClick={closeSideBar}>
            <Link href="/">
              {" "}
              <li>Home</li>
            </Link>
            <Link to="/about" id="about-link" onClick={handleAboutClick}>
              <li>About</li>
            </Link>
            <Link to="/Resume" onClick={handleResumeClick}>
              <li>Resume</li>
            </Link>
            <li>Services</li>
            <li>Portfolio</li>
            <li>
              Drop Down <KeyboardArrowDownIcon fontSize="small" />
              <ul className="mob-drop-down">
                <li>drop 1</li>
                <li>drop 2</li>
                <li>drop 3</li>
                <li>drop 4</li>
              </ul>
            </li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
