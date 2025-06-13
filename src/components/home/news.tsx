import * as React from "react"

export const News = () => {
  return (
    <section id={`news`} className="mt-8 target-scroll">
      <h2 className="text-2xl font-bold mb-4"> Recent News </h2>
      <ul className="list-disc list-inside space-y-2 pl-4"> 
        <li>
          <strong>[2025/02]</strong>
          <span className="ml-2">🌟 1 paper accepted to CVPR 2025! </span>
        </li>
        <li>
          <strong>[2024/10]</strong>
          <span className="ml-2">🌟 1 paper accepted to TMM! </span>
        </li>
        <li>
          <strong>[2024/09]</strong>
          <span className="ml-2">🎉 1 paper accepted to VCIP 2024 ! </span>
        </li>
        <li>
          <strong>[2024/09]</strong>
          <span className="ml-2">🎊 1 paper accepted to NeurIPS 2024 ! </span>
        </li>
        <li>
          <strong>[2023/07]</strong>
          <span className="ml-2">✨ 1 paper accepted to ICCV 2023 !</span>
        </li>
        <li>
          <strong>[2022/06]</strong>
          <span className="ml-2">🤗 1 paper accepted to ECCV 2022 !</span>
        </li>
      </ul>
    </section>
  )
}