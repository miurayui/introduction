// components/About.tsx
"use client";

import { motion } from 'motion/react';
import { fadeInUp, viewportSettings } from '../collections/popup';
import SectionTitle from './sectionTitle';

export default function About() {
  return (
    <section id="about" className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center px-6 py-24 font-sans text-[#1E293B]">
      <div className="max-w-3xl w-full space-y-16">

        {/* タイトルセクション */}
        <SectionTitle
          subtitle="About Me"
          title="Creative Journey"
        />

        {/* 文章セクション */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={fadeInUp}
          custom={0.3} // タイトルから0.3秒遅れて出現
          className="space-y-8 text-lg leading-relaxed text-[#475569]"
        >
          <h4>「動かない」という、最高の謎解き。</h4>
          <p>
            私のエンジニアとしての原点は、大分高専での5年間、動かないシステムの前で過ごした長い沈黙の時間にあります。
            画面に並ぶ無機質なエラーログは、私にとっては事件現場の「証拠品」のようなものでした。
            泥臭く原因を追い詰め、仮説と検証を繰り返す。
            その「うまくいかない」という謎に立ち向かった日々が、私の問題解決力の骨格を育ててくれました。
          </p>

          <p>
            現代のエンジニアリングにおいて、膨大な演算をこなすAIは、最も身近で優秀な「助手」であると考えています。<br />
            しかし、彼らが導き出す「もっともらしい正解」が、常に真実とは限りません。
            大切なのは、提示された概念を疑い、論理の穴を突き、その先にある最適解を見出すこと。
          </p>

          <p>
            完璧なコードをスマートに書くことよりも、エラーの向こう側に隠れた本質を見つけ出す瞬間が、自分が成長するタイミングだと思っています。<br />
            AIという心強い助手と共に戦いながらも、人間にしか到達できない「直感」と「問い」を忘れずにいたい。
            溢れ出す創造力を確かな形にするために、私は探偵のようにロジックのその先を疑い続ける人間でありたいです。
          </p>
        </motion.div>

        {/* 装飾：控えめなライン */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 0.3 }}
          viewport={viewportSettings}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="h-[1px] w-16 bg-[#166534] mx-auto"
        />
      </div>
    </section>
  );
}
