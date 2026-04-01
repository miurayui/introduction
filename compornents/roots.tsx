/**
 * @component Roots
 * @description Renders a chronological or thematic list of career origins.
 * @features
 * - Data-driven rendering via `rootItems` array.
 * - Alternating layout for desktop view (`flex-row-reverse`).
 * - Scroll animations powered by Framer Motion (`motion/react`).
 */

"use client";

import { motion } from 'motion/react';
import { fadeInUp, viewportSettings } from '../collections/popup';
import SectionTitle from './sectionTitle';
import { rootItems } from '../constants/roots';

export default function Roots() {
  return (
    <section id="roots" className="min-h-screen bg-white py-32 px-6 flex flex-col items-center">
      <div className="max-w-5xl w-full">

        {/* タイトルセクション */}
        <SectionTitle
          subtitle="roots"
          title="Turning Point"
        />

        <div className="space-y-40">
          {rootItems.map((item, index) => (
            <motion.div
              key={item.target}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              variants={fadeInUp}
              custom={index * 0.2}
              className={`flex flex-col md:flex-row gap-12 items-start ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                }`}
            >
              {/* 左側（または右側）：大きな見出しと言葉 */}
              <div className="md:w-1/2 space-y-6">
                <span className="tracking-[0.2em] text-[var(--primary)] opacity-60 block uppercase">
                  {item.category}
                </span>
                <h4 className="text-3xl md:text-4xl font-bold leading-tight text-[var(--dark)] border-l-4 border-[var(--primary)] pl-6 py-2">
                  {item.content}
                </h4>
              </div>

              {/* 右側（または左側）：詳細なエピソード */}
              <div className="md:w-1/2 pt-2">
                <p className="text-[#475569] leading-[2] text-lg border-b border-[var(--primary)]/10 pb-8">
                  <span className="text-[var(--primary)] font-bold block mb-4 text-sm">
                    — {item.target}
                  </span>
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 装飾：一筆書きをイメージした非常に薄い曲線（SVG） */}
        <div className="mt-32 flex justify-center opacity-10">
          <svg width="200" height="100" viewBox="0 0 200 100" fill="none">
            <path d="M0 80C50 80 50 20 100 20C150 20 150 80 200 80" stroke="#166534" strokeWidth="1" />
          </svg>
        </div>
      </div>
    </section>
  );
}
