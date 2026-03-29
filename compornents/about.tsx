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
          <p>
            私は「自分の先入観を疑う」ことを大切にしています。
            当たり前だと思っているデザインやコードを一度壊し、その先に見つかる
            静かな感動や、手触り感のある表現を形にしたいと考えています。
          </p>

          <p>
            幼い頃から夢中になったマインクラフトでの大規模建築は、私の原点です。
            0から1を積み上げ、空間を構築する楽しさは、現在のプログラミングや
            UIデザインにおける「構造美」へのこだわりに繋がっています。
          </p>

          <p>
            また、iPadで描く一筆書きのアニメーションのように、
            限られた制約の中でいかに豊かな物語を伝えるか。
            デジタルの冷たさの中に、雫が滴るような一瞬の生命力を宿らせることが目標です。
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
