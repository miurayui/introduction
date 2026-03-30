"use client";

import { motion } from 'motion/react';
import { fadeInUp, viewportSettings } from '../collections/popup';

interface SectionTitleProps {
  subtitle: string;
  title: string;
  delay?: number;
  center?: boolean;
}

export default function SectionTitle({ 
  subtitle, 
  title, 
  delay = 0, 
  center = true 
}: SectionTitleProps) {
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      variants={fadeInUp}
      custom={delay}
      className={`mb-16 ${center ? 'text-center' : 'text-left'}`}
    >
      {/* 小見出し（About Me など） */}
      <h2 className="text-sm tracking-[0.3em] text-[var(--primary)] uppercase font-bold mb-4">
        {subtitle}
      </h2>
      
      {/* メインタイトル（Creative Journey など） */}
      <h3 className="text-4xl md:text-5xl font-bold font-mono tracking-tight text-[#0F172A]">
        {title}
      </h3>

      {/* オプション：タイトルの下に「一筆書き」のラインを入れるならここに追加 */}
      <div className={`mt-6 h-[1px] bg-[var(--primary)] opacity-20 w-12 ${center ? 'mx-auto' : 'mr-auto'}`} />
    </motion.div>
  );
}
