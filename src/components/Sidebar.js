import React, { useState, useEffect } from "react";
import { Link } from "gatsby";

const Sidebar = ({ headings }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Calculate available width for TOC
      const tocWidth = parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue("--toc-width")
      );
      const windowWidth = window.innerWidth;

      // If TOC fits and it's a desktop view, open it by default
      if (windowWidth > 768 && windowWidth >= tocWidth) {
        setIsOpen(false);
      } else {
        setIsOpen(false);
      }
    };

    handleResize(); // Set initial state based on current screen size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button className="hamburger" onClick={toggleSidebar}>
        ☰
      </button>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div class="padding-sidebar"></div>
      <a href="/" className="root-link-sidebar">
        ETI Blog
      </a>
      <h4 className="toc-heading">Tartalomjegyzék</h4>
        <nav className="toc">
          {headings.map((heading) => (
            <li key={heading.id}>
              <a href={`#${heading.id}`} onClick={closeSidebar}>
                {heading.title}
              </a>
            </li>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
