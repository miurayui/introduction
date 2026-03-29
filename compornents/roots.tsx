"use client";

import { motion } from 'motion/react';
import { fadeInUp, viewportSettings } from '../collections/popup';
import SectionTitle from './sectionTitle';

const rootItems = [
  {
    category: "Inspiration",
    target: "尊敬する人 / 言葉",
    content: "「完璧ではなく、血の通った不完全さを。」",
    description: "ある建築家のこの言葉が、私の制作の指針です。デジタルの正確さの中に、あえて手書きのような揺らぎや『雫』のような生命感を宿らせたいと願うようになりました。"
  },
  {
    category: "Turning Point",
    target: "転機となった出来事",
    content: "マイクラの「壊す」という肯定",
    description: "数ヶ月かけて作った建築を、より良い構造のために一度壊した瞬間。執着を捨てて『先入観を疑う』ことの快感を知りました。それが今の私のエンジニアとしての姿勢に繋がっています。"
  }
];

export default function Roots() {
  return (
    <section id="roots" className="min-h-screen bg-white py-32 px-6 flex flex-col items-center">
      <div className="max-w-5xl w-full">

        {/* タイトルセクション */}
        <SectionTitle
          subtitle="roots"
          title="Tarning Point"
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
