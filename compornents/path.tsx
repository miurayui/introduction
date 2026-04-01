/**
 * Component: Path
 * Tech: Next.js + Tailwind CSS + Framer Motion
 * UI: Interactive Vertical Timeline
 * Description: Chronological history of key career/educational turning points.
 */

"use client";

import { motion } from 'motion/react';
import { fadeInUp, viewportSettings } from '../collections/popup';
import SectionTitle from './sectionTitle';
import { milestones } from '../constants/path';

export default function Path() {
  return (
    <section id="path" className="min-h-screen bg-[var(--light)] py-32 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto">

        {/* タイトルセクション */}
        <SectionTitle
          subtitle="path"
          title="History"
        />
        
        <div className="relative">
          {/* 中央の垂直線 */}
          <div className="absolute left-[18px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[1px] bg-[var(--primary)] opacity-20" />

          <div className="space-y-24">
            {milestones.map((item, index) => (
              <motion.div
                key={item.year}
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
                variants={fadeInUp}
                custom={index * 0.1}
                className={`relative flex items-center justify-between md:justify-normal w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
              >
                {/* 線上の点 */}
                <div className="absolute left-[18px] md:left-1/2 md:-translate-x-1/2 w-2 h-2 rounded-full bg-[var(--primary)] z-10 border-4 border-[#F8FAFC] box-content" />

                {/* コンテンツボックス */}
                <div className="w-[calc(100%-60px)] md:w-[45%] pl-10 md:pl-0">
                  <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm hover:border-[var(--primary)]/20 transition-colors md:text-left">
                    <span className="font-mono text-[var(--primary)] font-bold text-lg mb-2 block italic">
                      {item.year}
                    </span>
                    <h4 className="text-xl font-bold text-[#0F172A] mb-3">{item.title}</h4>
                    <p className="text-[var(--dark)] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
