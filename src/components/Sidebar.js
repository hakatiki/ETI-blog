import React, { useState, useEffect, useRef } from "react";
import { Link } from "gatsby";

const Sidebar = ({ headings }) => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);
  const hamburgerRef = useRef(null); // Add ref for the hamburger button

  useEffect(() => {
    const handleResize = () => {
      const tocWidth = parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue("--toc-width")
      );
      const windowWidth = window.innerWidth;

      if (windowWidth > 768 && windowWidth >= tocWidth) {
        setIsOpen(false);
      } else {
        setIsOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target) // Check if click is outside both sidebar and hamburger button
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
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
      <button ref={hamburgerRef} className="hamburger" onClick={toggleSidebar}>
        ☰
      </button>
      <div
        ref={sidebarRef}
        className={`sidebar ${isOpen ? "open" : ""}`}
      >
        <div className="padding-sidebar"></div>
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
