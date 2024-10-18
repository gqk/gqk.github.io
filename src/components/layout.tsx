import React from "react"
import type { HeadFC, PageProps } from "gatsby"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow">{children}</main>
      <SiteFooter />
    </div>
  )
}