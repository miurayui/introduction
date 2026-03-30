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

const rootItems = [
  {
    category: "Inspiration",
    target: "尊敬する人 / 言葉",
    content: "「その答えは、高専にある」という導き",
    description: "物事の本質を知りたいが故に、公式の『本当の意味』を先生に問い続けた中学時代。納得いくまで追求したい私の性質を理解し、高専という道を示してくれた恩師の言葉が、エンジニアとしての今の私を形作る原点となる。"
  },
  {
    category: "Turning Point",
    target: "転機となった出来事",
    content: "「やりたいこと」も「得意なこと」も、両方やる選択",
    description: "物理の先生から誘われた共同研究と、自身が熱望した反響定位の研究。二つの道で葛藤した際、『どちらもやるべきだ』という教授の言葉に背中を押される。二兎を追う決断が、自分の専門性とスキルを飛躍的に広げる要因となった。"
  }
];

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
                <span className="font-mono text-xs tracking-[0.2em] text-[#166534] opacity-60 block uppercase">
                  {item.category}
                </span>
                <h4 className="text-3xl md:text-4xl font-bold leading-tight text-[#0F172A] border-l-4 border-[#166534] pl-6 py-2">
                  {item.content}
                </h4>
              </div>

              {/* 右側（または左側）：詳細なエピソード */}
              <div className="md:w-1/2 pt-2">
                <p className="text-[#475569] leading-[2] text-lg font-light italic border-b border-[#166534]/10 pb-8">
                  <span className="text-[#166534] font-bold block mb-4 not-italic text-sm">
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
