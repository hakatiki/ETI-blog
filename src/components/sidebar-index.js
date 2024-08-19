import React, { useState, useEffect, useRef } from "react";
import { Link } from "gatsby";
import EmailCopyButton from "../components/emailcopy";
import { FaTwitter, FaEnvelope } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

const SidebarIndex = ({ }) => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);
  const hamburgerRef = useRef(null);

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
        !hamburgerRef.current.contains(event.target)
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
        <h4 className="toc-heading">Elérhetőségek</h4>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            paddingBottom: "1rem",
          }}
        >
          <div style={{
              marginLeft: "6px",
              display: "flex",
              flexDirection: "column", // Ensures items are aligned in a column
              gap: "1rem", // Adds space between the items
              paddingBottom: "1rem",
            }}>
            <a
              href={`https://x.com/hakatiki1`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                height: "40px",
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                backgroundColor: "#000000",
                color: "white",
                padding: "0.5rem 1rem",
                borderRadius: "4px",
                transition: "background-color 0.3s",
              }}
            >
              Bálint
              <RiTwitterXFill style={{ marginLeft: "0.5rem" }} />
            </a>
            
            <a
              href={`https://x.com/egrimate1`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                height: "40px",
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                backgroundColor: "#000000",
                color: "white",
                padding: "0.5rem 1rem",
                borderRadius: "4px",
                transition: "background-color 0.3s",
              }}
            >
              Máté
              <RiTwitterXFill style={{ marginLeft: "0.5rem" }} />
            </a>
            

            <EmailCopyButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarIndex;
