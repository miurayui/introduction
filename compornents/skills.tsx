/**
 * @component Skills
 * @description Renders a categorized grid of technical skills and tools.
 * @features
 * - Centered, wide-grid layout for maximum visibility.
 * - Categorized sections with horizontal decorative lines.
 * - Consistent animation timing across all skill icons.
 */

"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SKILL_CATEGORIES } from '../constants/skills';
import Image from 'next/image';
import { fadeInUp, viewportSettings } from '../collections/popup';
import SectionTitle from './sectionTitle';
import Accordion from './accordion';

export default function Skills() {
  // 現在選択されているスキルの名前をカテゴリごとに管理
  const [selectedSkill, setSelectedSkill] = useState<{ [key: string]: string | null }>({});

  const toggleSkill = (categoryTitle: string, skillName: string) => {
    setSelectedSkill(prev => ({
      ...prev,
      [categoryTitle]: prev[categoryTitle] === skillName ? null : skillName
    }));
  };

  return (
    <section id="skills" className="min-h-screen bg-white py-32 px-6 flex flex-col items-center">
      <div className="max-w-5xl w-full">

        <SectionTitle
          subtitle="Skills"
          title="Tools & Experience"
        />

        {/* メインコンテンツ */}
        <div className="space-y-24">
          {SKILL_CATEGORIES.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              variants={fadeInUp}
              custom={catIndex * 0.1}
              className=""
            >
              {/* カテゴリ名 */}
              <div className="flex items-center justify-center gap-4 mb-10">
                <span className="h-[1px] w-12 bg-[var(--primary)] opacity-20"></span>
                <h4 className="text-sm font-mono text-[var(--primary)] tracking-widest font-bold uppercase">
                  {category.title}
                </h4>
                <span className="h-[1px] w-12 bg-[var(--primary)] opacity-20"></span>
              </div>

              {/* アイコングリッド */}
              <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-6 justify-items-center mb-0">
                {category.icons.map((icon) => {
                  const isSelected = selectedSkill[category.title] === icon.name;
                  return (
                    <button
                      key={icon.name}
                      onClick={() => toggleSkill(category.title, icon.name)}
                      className="flex flex-col items-center gap-3 group outline-none"
                    >
                      <div className={`relative w-16 h-16 md:w-20 md:h-20 bg-white border rounded-2xl flex items-center justify-center transition-all duration-300 
                        ${isSelected ? 'border-[var(--primary)] shadow-md' : 'border-[#E2E8F0] group-hover:border-[var(--primary)]/30'}`}
                      >
                        <Image
                          src={icon.src}
                          alt={icon.name}
                          fill
                          className={`object-contain p-4 transition-transform duration-300 ${isSelected ? 'scale-110' : 'group-hover:scale-110'}`}
                          sizes="80px"
                        />
                      </div>
                      <span className={`text-[10px] font-mono transition-colors ${isSelected ? 'text-[var(--primary)] font-bold' : 'text-[#475569]'}`}>
                        {icon.name}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* 詳細パネル（カテゴリごとに1つ出現） */}
              <AnimatePresence mode="wait">
                {selectedSkill[category.title] && (
                  <motion.div
                    key={selectedSkill[category.title]}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                      transition: {
                        height: {
                          duration: 0.4,
                          ease: [0.4, 0, 0.2, 1]
                        },
                        opacity: {
                          duration: 0.2,
                          delay: 0.1
                        }
                      }
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: {
                        height: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
                        opacity: { duration: 0.1 }
                      }
                    }}
                    className="overflow-hidden"
                  >
                    <div className="pt-8 pb-8">
                      <div className="relative bg-white border border-[#E2E8F0] rounded-2xl p-6 md:p-8 shadow-sm">
                        {/* ... (スキル詳細の中身) ... */}
                        <div className="relative z-10">
                          <div className="flex items-baseline items-center gap-3 mb-2">
                            <h5 className="text-xl font-bold text-[#0F172A]">{selectedSkill[category.title]}</h5>
                            <span className="text-xs font-mono text-[var(--primary)] bg-[var(--primary)]/10 px-2 py-0.5 rounded">
                              {category.icons.find(i => i.name === selectedSkill[category.title])?.experience}
                            </span>
                          </div>
                          <p className="text-sm text-[#475569] leading-relaxed">
                            {category.icons.find(i => i.name === selectedSkill[category.title])?.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
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
