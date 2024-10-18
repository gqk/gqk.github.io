import React from "react"

export default function SiteFooter() {
  return (
    <footer className="text-center py-4 text-sm text-gray-600">
      Copyright © 2020~2024 by Qiankun Gao. All rights Reserved
      <span className="hidden sm:inline">
        {" "}| Powered by{" "}
        <a
          href="https://www.gatsbyjs.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Gatsby
        </a>
      </span>
      <div className="hidden sm:block mt-2">
        <a
          href="https://beian.miit.gov.cn"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:underline"
        >
          粤ICP备2023033375号
        </a>
      </div>
    </footer>
  )
}
