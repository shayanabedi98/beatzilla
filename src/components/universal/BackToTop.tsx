"use client";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {
  const [windowY, setWindowY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setWindowY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
  });

  return (
    <div className="fixed max-lg:hidden bottom-16 right-8 z-40 lg:bottom-32 lg:right-16">
      {windowY >= 300 && (
        <div
          className="cursor-pointer rounded-full border-[2px] border-secondary bg-primary p-1 text-2xl shadow-lg md:p-2 md:text-3xl"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <FaArrowUp />
        </div>
      )}
    </div>
  );
}
