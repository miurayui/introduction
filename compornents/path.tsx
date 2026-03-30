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

const milestones = [
  {
    year: "2019",
    title: "The First Line",
    description: "大分高専へ入学後、C++に触れる。低レイヤの迷宮で、プログラミングの圧倒的な難しさと、自分の書いたコードが動いた時の高揚感を知る。"
  },
  {
    year: "2022",
    title: "The Silent Error",
    description: "予期せぬエラーに立ちすくみ、動かないコードを「恐れ」として感じていた時期。しかし、この時の「なぜ動かないのか」という問いとの格闘が、後の自分を形成する要素としての眼を養う修行期間となる。"
  },
  {
    year: "2023",
    title: "Connection",
    description: "バックエンドからAzureを用いたインフラ構築までを経験。技術の複雑さ以上に、人の「イメージ」を共有し、理解し合うことの難しさと尊さを学ぶ。"
  },
  {
    year: "2024",
    title: "Into the Real World",
    description: "高専で培った思考の骨格を手に、エンジニアの卵として新卒で入社。現場のリアルな課題に対し、要件を実現するための大きな壁に立ちすくむ。"
  },
  {
    year: "2025",
    title: "Convergence",
    description: "バックエンドとフロントエンド、領域に縛られずシステム全体を俯瞰する。点と点が繋がり、一つのサービスを全方位から描き出す視点を考えるようになる。"
  },
  {
    year: "2026",
    title: "Manifestation",
    description: "曖昧な言葉から本質を汲み取り、コンポーネントへと落とし込めるようになる。AIという優秀な助手を相棒に、先入観を疑い、思考を最短距離で形にする表現者へ。"
  }
];

export default function Path() {
  return (
    <section id="path" className="min-h-screen bg-[#F8FAFC] py-32 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto">

        {/* タイトルセクション */}
        <SectionTitle
          subtitle="path"
          title="History"
        />
        
        <div className="relative">
          {/* 中央の垂直線 */}
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
                className={`relative flex items-center justify-between md:justify-normal w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
              >
                {/* 線上の点 */}
                <div className="absolute left-[18px] md:left-1/2 md:-translate-x-1/2 w-2 h-2 rounded-full bg-[#166534] z-10 border-4 border-[#F8FAFC] box-content" />

                {/* コンテンツボックス */}
                <div className="w-[calc(100%-60px)] md:w-[45%] pl-10 md:pl-0">
                  <div className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm hover:border-[#166534]/20 transition-colors md:text-left">
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
