/**
 * @component About
 * @description A comprehensive self-introduction section featuring a personal profile and a narrative about engineering philosophy.
 * @features
 * - Responsive grid layout (Image & Profile info on top, Narrative below).
 * - Type-safe implementation using TypeScript interfaces.
 * - Scroll animations with staggered reveals for a professional feel.
 * - Optimized image handling with Next.js <Image /> component.
 */

"use client";

import Image from 'next/image';
import { motion } from 'motion/react';
import { fadeInUp, viewportSettings } from '../collections/popup';
import SectionTitle from './sectionTitle';

// プロフィール項目の型定義
interface ProfileDetail {
  label: string;
  value: string;
}

const profileDetails: ProfileDetail[] = [
  { label: "Name", value: "Yui" },
  { label: "Birthday", value: "2003.05.03" },
  { label: "Hobby", value: "ゲーム作成 / 旅行 / 散歩" },
  { label: "Specialty", value: "ピアノ / バドミントン" },
  { label: "Base", value: "Fukuoka, Japan" },
];

export default function About() {
  return (
    <section id="about" className="min-h-screen bg-[var(--light)] flex flex-col items-center px-6 py-24 font-sans text-[#1E293B]">
      <div className="max-w-5xl w-full space-y-20">

        {/* タイトルセクション */}
        <SectionTitle
          subtitle="About Me"
          title="Creative Journey"
        />

        {/* 上段：画像と基本プロフィールのグリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* 左側：プロフィール画像 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={fadeInUp}
            className="relative aspect-square max-w-sm mx-auto md:ml-auto w-full group"
          >
            <div className="absolute inset-0 border-2 border-[var(--primary)] translate-x-4 translate-y-4 rounded-2xl opacity-20 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
            <div className="relative w-full h-full overflow-hidden rounded-2xl bg-white shadow-xl">
              <Image
                src="/profile.jpg"
                alt="Profile Image"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 400px"
                priority
              />
            </div>
          </motion.div>

          {/* 右側：基本プロフィール */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={fadeInUp}
            custom={0.2}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-[#0F172A] flex items-center gap-3">
              Personal Profile
              <span className="h-[1px] w-12 bg-[var(--primary)] opacity-30"></span>
            </h3>
            <dl className="space-y-4">
              {profileDetails.map((detail) => (
                <div key={detail.label} className="flex border-b border-[#E2E8F0] pb-2">
                  <dt className="w-32 font-mono text-sm text-[var(--primary)] font-bold uppercase tracking-wider">
                    {detail.label}
                  </dt>
                  <dd className="text-[#475569] font-medium">
                    {detail.value}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>

        {/* 下段：ストーリーセクション */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={fadeInUp}
          custom={0.4}
          className="mx-auto space-y-8 text-lg leading-relaxed text-[#475569] bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-[#E2E8F0]/50"
        >
          <h4 className="text-xl font-bold text-[#0F172A] border-l-4 border-[var(--primary)] pl-4">
            「動かない」という、最高の謎解き。
          </h4>
          
          <div className="space-y-6">
            <p>
              私のエンジニアとしての原点は、大分高専での5年間、動かないシステムの前で過ごした長い沈黙の時間にあります。
              画面に並ぶ無機質なエラーログは、私にとっては事件現場の「証拠品」のようなものでした。
              泥臭く原因を追い詰め、仮説と検証を繰り返す。
              その「うまくいかない」という謎に立ち向かった日々が、私の問題解決力の骨格を育ててくれました。
            </p>

            <p>
              現代のエンジニアリングにおいて、膨大な演算をこなすAIは、最も身近で優秀な「助手」であると考えています。<br />
              しかし、AIが導き出す「もっともらしい正解」が、常に真実とは限りません。
              大切なのは、提示された概念を疑い、論理の穴を突き、その先にある最適解を見出すことだと私は思います。
            </p>

            <p>
              完璧なコードをスマートに書くことよりも、エラーの向こう側に隠れた本質を見つけ出す瞬間が、自分が成長するタイミングだと思っています。<br />
              AIという心強い助手と共に戦いながらも、人間にしか到達できない「直感」と「問い」を忘れずにいたい。
              溢れ出す創造力を確かな形にするために、私は探偵のようにロジックのその先を疑い続ける人間でありたいです。
            </p>
          </div>
        </motion.div>

        {/* 装飾：控えめなライン */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 0.3 }}
          viewport={viewportSettings}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="h-[1px] w-16 bg-[var(--primary)] mx-auto"
        />
      </div>
    </section>
  );
}