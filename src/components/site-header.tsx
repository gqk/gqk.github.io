import React from "react"
import { Link } from "gatsby"
import { FaHome } from "react-icons/fa"

import { MainNav } from "@/components/main-nav"
import { useSiteMetadata } from "@/hooks/use-site-metadata"

export default function SiteHeader() {
  const { title, navItems } = useSiteMetadata()

  return (
    <header className="sticky top-0 z-40 border-b bg-background md:w-full">
      <div className="container mx-auto h-16 px-4 max-w-screen-lg flex items-center justify-between md:px-0">
        <Link to="/" className="items-center flex">
          <span className="font-bold inline-block">
            <FaHome className="w-6 h-6 text-muted-foreground" /> 
          </span>
        </Link>

        <MainNav items={navItems} />
      </div>
    </header>
  )
}