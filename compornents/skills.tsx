"use client";

import { motion } from 'motion/react';
import Image from 'next/image';
import { fadeInUp, viewportSettings } from '../collections/popup';
import SectionTitle from './sectionTitle';

const skillCategories = [
  {
    title: "Programming Language",
    icons: [
      { name: "HTML5", src: "/icon/html5-plain.svg" },
      { name: "CSS3", src: "/icon/css3-plain.svg" },
      { name: "JS", src: "/icon/javascript-plain.svg" },
      { name: "TS", src: "/icon/typescript-original.svg" },
      { name: "C#", src: "/icon/csharp-plain.svg" },
    ]
  },
  {
    title: "Framework / CMS",
    icons: [
      { name: "React", src: "/icon/react-original.svg" },
      { name: "Next.js", src: "/icon/nextjs-plain.svg" },
      { name: "Node.js", src: "/icon/nodejs-plain.svg" },
      { name: "wordpress", src: "/icon/wordpress-plain.svg" },
    ]
  },
  {
    title: "Development Tool",
    icons: [
      { name: "VSCode", src: "/icon/vscode-original.svg" },
      { name: "VisualStudio", src: "/icon/visualstudio-plain.svg" },
      { name: "GitHub", src: "/icon/github-original.svg" },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen bg-[#F8FAFC] flex flex-col items-center py-32 px-6 font-sans text-[#1E293B]">
      <div className="max-w-6xl w-full">

        {/* セクションタイトル */}

        <SectionTitle
          subtitle="Capabilities"
          title="Tools & Technologies"
        />

        {/* コンテンツエリア */}
        <div className="max-w-6xl w-full flex flex-col md:flex-row gap-12">

          {/* 左側：サイド見出し（提示画像のスタイルを継承） */}
          <div className="md:w-1/4 border-l-2 border-[#166534] border-opacity-20 pl-6 flex flex-col gap-4 font-mono text-sm">
            <span className="text-[#166534] font-bold">Skills</span>
            <div className="flex flex-col gap-2 opacity-40">
              <span>All</span>
              <span>Active</span>
            </div>
          </div>

          {/* 右側：メイングリッド */}
          <div className="md:w-3/4 space-y-20">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
                variants={fadeInUp}
                custom={catIndex * 0.2}
                className="space-y-8"
              >
                {/* カテゴリ名 */}
                <h4 className="text-sm font-mono text-[#166534] tracking-widest font-bold flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-[#166534] opacity-30"></span>
                  {category.title}
                </h4>

                {/* アイコンリスト */}
                <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-4">
                  {category.icons.map((icon) => (
                    <motion.div
                      key={icon.name}
                      className="aspect-square bg-white border border-[#E2E8F0] rounded-2xl flex items-center justify-center p-3 transition-all duration-300 group"
                    >
                      <div className="relative w-full h-full flex items-center justify-center">
                        <Image
                          src={icon.src}
                          alt={`${icon.name} icon`}
                          fill
                          className="object-contain"
                        />
                        {/* <span className="text-[10px] font-mono opacity-40 group-hover:opacity-100 group-hover:text-[#166534] transition-all">
                          {icon.name}
                        </span> */}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
