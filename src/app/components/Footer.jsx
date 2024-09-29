"use client"
import Link from "next/link"
function Footer() {
  return (
    <div className="flex flex-col md:justify-between md:flex-row p-6 justify-center items-center">
        <div>
        <ul className="flex gap-x-5 p-2 items-center text-xl">
        <Link  href={"/"}  >Home </Link>
        <Link  href={"/projects"} >My Projects</Link>
        <Link  href={"/about"} >About Me</Link>
        </ul>    
        </div>
        <div className="flex justify-center items-center">
            <p>Made With <span className="text-red-600 hover:text-red-800 cursor-pointer">❤</span></p>
        </div>
    </div>
  )  
}

export default Footer