"use client";

import { motion } from 'motion/react';
import { fadeInUp, viewportSettings } from '../collections/popup';

const milestones = [
  {
    year: "2021",
    title: "The Beginning: Minecraft",
    description: "マインクラフトでの大規模建築を通じて、構造物を作る楽しさと、0から1を生み出す根気を養う。これがクリエイティブの原点に。"
  },
  {
    year: "2022",
    title: "WordPress & Web Design",
    description: "自社メディアの立ち上げを機にWordPressに触れる。デザインが形になり、誰かに届く喜びを知る。"
  },
  {
    year: "2024",
    title: "React & Next.js Journey",
    description: "より自由で繊細な表現を求め、モダンなフロントエンド技術の世界へ。先入観を疑い、新しい技術への挑戦を開始。"
  },
  {
    year: "2026",
    title: "Present: UI & Animation",
    description: "「雫」のような静かな動きと、一筆書きの美しさを融合させたWeb表現を追求中。"
  }
];

export default function Path() {
  return (
    <section className="min-h-screen bg-[#F8FAFC] py-32 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        
        {/* タイトルセクション */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={fadeInUp}
          custom={0} // 遅延なし
          className="text-center mb-24"
        >
          <h2 className="text-sm tracking-[0.3em] text-[#166534] uppercase font-bold mb-4">
            path
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold font-mono tracking-tight text-[#0F172A]">
            History
          </h3>
        </motion.div>

        <div className="relative">
          {/* 中央の垂直線（一筆書きのメインライン） */}
          <div className="absolute left-[18px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[1px] bg-[#166534] opacity-20" />

          <div className="space-y-24">
            {milestones.map((item, index) => (
              <motion.div
                key={item.year}
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
                variants={fadeInUp}
                custom={index * 0.1}
                className={`relative flex items-center justify-between md:justify-normal w-full ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* 線上の点（雫の落ちる場所） */}
                <div className="absolute left-[18px] md:left-1/2 md:-translate-x-1/2 w-2 h-2 rounded-full bg-[#166534] z-10 border-4 border-[#F8FAFC] box-content" />

                {/* コンテンツボックス */}
                <div className="w-[calc(100%-60px)] md:w-[45%] pl-10 md:pl-0">
                  <div className={`p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm hover:border-[#166534]/20 transition-colors ${
                    index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                  }`}>
                    <span className="font-mono text-[#166534] font-bold text-lg mb-2 block italic">
                      {item.year}
                    </span>
                    <h4 className="text-xl font-bold text-[#0F172A] mb-3">{item.title}</h4>
                    <p className="text-[#475569] leading-relaxed text-sm">
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
