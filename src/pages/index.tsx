import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import Layout from "@/components/layout"
import SEO from "@/components/seo"

import { ProfileCard } from "@/components/home/profile"
import { Biography } from "@/components/home/biography"
import { News } from "@/components/home/news"
import { Publications } from "@/components/home/publications"


const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8 font-sans max-w-screen-lg px-4 md:px-0"> 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start h-full">
          <aside className="space-y-2 h-full"> <ProfileCard /> </aside>
          <main className="md:col-span-2 space-y-8 h-full">
            <Biography />
          </main>
        </div>

        <div className="w-full space-y-8"> 
          <News />
          <Publications />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <SEO />
