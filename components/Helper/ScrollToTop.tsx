"use client"

import { useEffect, useState } from "react"
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    function toggleVisibility() {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    }
  }, [])
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
  return (
    <div className="fixed bottom-4 right-4 animate-pulse">
      {isVisible && (
        <button onClick={scrollToTop} className="bg-blue-900 text-white rounded-full w-12 h-12 flex items-center justify-center focus:outline-none cursor-pointer">
          <FaArrowUp />
        </button>
      )}
    </div>
  )
}

export default ScrollToTop