import * as React from "react"
import { FaBriefcase } from "react-icons/fa"

export const Biography = () => {
  return (
    <section className="flex flex-col justify-between text-lg min-h-full">
      <p>
        I am a final-year Ph.D. student at Peking University Shenzhen Graduate School, under the supervision of Professors
        <a href="https://jianzhang.tech" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mx-1">
          Jian Zhang
        </a>
        and
        <a href="https://www.ece.pku.edu.cn/info/1053/2231.htm" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mx-1">
          Jie Chen
        </a>
        .
      </p>

      <p>
        My research focuses on 3D Vision, Continual Learning and Transfer Learning,
        with strong interest and experience in AIGC and MultiModal Large Language Models.
      </p>

      <p>
        Prior to my doctoral studies, I had the opportunity to work as a full-stack software engineer for six years,
        where I was fortunate to lead a small team developing securities trading systems.
        This experience allowed me to gain valuable expertise in software development,
        as well as leadership and project management.
      </p>

      <p>
        🎯{" "}
        <span className="text-red-600">
          I am expected to graduate in July 2025, and I am currently seeking suitable job opportunities.
          If you are interested, feel free to contact me.
        </span>
      </p>
    </section>
  )
}