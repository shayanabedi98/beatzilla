'use client'
import { useEffect, useState } from "react"
import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {

    const [windowY, setWindowY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            setWindowY(window.scrollY)
        }

        window.addEventListener('scroll', handleScroll)
    })

    return (
        <div className="z-40 fixed bottom-8 right-8 lg:bottom-16 lg:right-16">
            {windowY >= 300 && (
                <div className="bg-primary border-[2px] border-secondary cursor-pointer text-2xl shadow-lg md:text-3xl rounded-full p-1 md:p-2" onClick={() => {window.scrollTo(0, 0)}}>
                    <FaArrowUp />
                </div>
            )}
        </div>
    )
}