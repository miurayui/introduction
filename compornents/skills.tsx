/**
 * @component Skills
 * @description Renders a categorized grid of technical skills and tools.
 * @features
 * - Centered, wide-grid layout for maximum visibility.
 * - Categorized sections with horizontal decorative lines.
 * - Consistent animation timing across all skill icons.
 */

"use client";

import { motion } from 'motion/react';
import Image from 'next/image';
import { fadeInUp, viewportSettings } from '../collections/popup';
import SectionTitle from './sectionTitle';
import Accordion from './accordion';

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
    <section id="skills" className="min-h-screen bg-[#F8FAFC] py-32 px-6 flex flex-col items-center">
      <div className="max-w-5xl w-full">

        <SectionTitle
          subtitle="Skills"
          title="Tools & Experience"
        />

        {/* メインコンテンツ */}
        <div className="space-y-24">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              variants={fadeInUp}
              custom={catIndex * 0.1}
              className="space-y-10"
            >
              {/* カテゴリ名 */}
              <div className="flex items-center justify-center gap-4">
                <span className="h-[1px] w-12 bg-[var(--primary)] opacity-20"></span>
                <h4 className="text-sm font-mono text-[var(--primary)] tracking-widest font-bold uppercase">
                  {category.title}
                </h4>
                <span className="h-[1px] w-12 bg-[var(--primary)] opacity-20"></span>
              </div>

              {/* アイコンリスト */}
              <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-6 justify-items-center">
                {category.icons.map((icon) => (
                  <div 
                    key={icon.name} 
                    className="flex flex-col items-center gap-3 group"
                  >
                    <div className="relative w-16 h-16 md:w-20 md:h-20 bg-white border border-[#E2E8F0] rounded-2xl flex items-center justify-center p-4 transition-all duration-300 group-hover:border-[var(--primary)]/30 group-hover:shadow-md">
                      <Image
                        src={icon.src}
                        alt={`${icon.name} icon`}
                        fill
                        className="object-contain p-4"
                        sizes="80px"
                      />
                    </div>
                    <span className="text-[10px] font-mono text-[#475569] opacity-0 group-hover:opacity-100 transition-opacity">
                      {icon.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* 職務経歴 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={fadeInUp}
            custom={0.4}
            className="pt-24 border-t border-[#E2E8F0]"
          >
             <div className="flex items-center justify-center gap-4 mb-12">
                <span className="h-[1px] w-12 bg-[var(--primary)] opacity-20"></span>
                <h4 className="text-sm font-mono text-[var(--primary)] tracking-widest font-bold uppercase">
                  Work Experience
                </h4>
                <span className="h-[1px] w-12 bg-[var(--primary)] opacity-20"></span>
              </div>
            
            <div className="max-w-3xl mx-auto">
              <Accordion />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
