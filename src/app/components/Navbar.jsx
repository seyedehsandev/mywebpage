"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import MenuBar from "./MenuBar"
// import Themeswitch from "./ThemeSwitch"

function Navbar() {
  let path = usePathname()
  console.log(path)
  return (
    <nav className={`flex justify-between p-5 md:px-10 w-dvw items-center`}>
            {/* Logo  */}
              <Link href={"/"}  className="p-3">
              <Image src={"/2.jpg"} width={30} height={60} alt="Logo"/>
              </Link>
              {/* Navbar in Laptop Screen  */}
        <ul className="hidden md:flex gap-x-5 p-2 items-center text-xl">
          <li>
            <Link className={path == "/" ? "text-black bg-white rounded-lg p-2 hover:bg-slate-100" : "hover:text-black hover:bg-white p-2 rounded-lg transition-colors"} href={"/"}>Home</Link>
          </li>
          <li>
            <Link className={path == "/projects" ? "text-black bg-white rounded-lg p-2 hover:bg-slate-100" : "hover:text-black hover:bg-white p-2 rounded-lg"} href={"/projects"}>My Projects</Link>
          </li>
          <li>
            <Link className={path == "/about" ? "text-black bg-white rounded-lg p-2 hover:bg-slate-100" : "hover:text-black hover:bg-white p-2 rounded-lg"} href={"/about"}>About Me</Link>
          </li>
        </ul>

              {/* Navbar in Mobile Screen  */}
            <MenuBar />
        
    </nav>
  )
}

export default Navbar 
