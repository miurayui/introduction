/**
 * @component CareerAccordion
 * @description A smooth, accessible accordion component for displaying Work Experience.
 * @features
 * - Single-open logic (closes others when one is opened).
 * - Framer Motion's `AnimatePresence` for height transitions.
 * - Fully responsive and type-safe using TypeScript.
 */

"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface CareerItem {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
}

const careerData: CareerItem[] = [
  {
    id: "01",
    company: "Company Name A",
    role: "Full Stack Engineer",
    period: "2024.10 - 2025.03",
    description: [
      "MVCモデルを採用した大規模ユーザー基盤システムの刷新プロジェクトにおいて、詳細設計から実装・テストまでを一貫して担当。",
      "外注先から納品された静的UIのRazor（ASP.NET Core）化および、会員管理システムの基幹機能の設計・実装に従事。"
    ]
  },
  {
    id: "02",
    company: "Company Name C",
    role: "Full Stack Engineer",
    period: "2025.01 - Present",
    description: [
      "アパレルECサイトにおけるメディア機能（Article）の設計・開発を一貫して担当。記事コンテンツと商品情報の動的な連携を実現。",
      "データベース（C# / SQL）に共通の識別子（Article ID）を導入するスキーマ拡張を実施。これにより、同一記事内で紹介される色違いや型違いのバリエーション商品を効率的に一括管理・抽出するロジックを構築。"
    ]
  },
  {
    id: "03",
    company: "Company Name B",
    role: "Frontend Developer",
    period: "2025.11 - Present",
    description: [
      "WordPressを用いたWebサイトのフルスクラッチ開発プロジェクトに、立ち上げフェーズより参画し、現在も継続して開発に従事。",
      "Gutenberg（ブロックエディタ）に対応したカスタムブロックを独自開発。運用サイドの利便性とフロントエンドの自由度を両立した設計を実現。",
      "ブラウザのCookieを活用したフローティングバナーの表示制御ロジックを設計。ユーザー体験（UX）を損なわないセッション管理を実装。",
      "初期開発完了後の現在は、システム全体の品質担保を目的とした単体テストの実施、および発見された技術的課題の修正（デバッグ）を並行して担当中。",
    ]
  }
];

export default function CareerAccordion() {
  const [expanded, setExpanded] = useState<string | false>(false);

  return (
    <div className="w-full space-y-4">
      {careerData.map((item) => (
        <div 
          key={item.id} 
          className="border-b border-[#E2E8F0] last:border-none"
        >
          <button
            onClick={() => setExpanded(expanded === item.id ? false : item.id)}
            className="w-full py-6 flex items-center justify-between group text-left"
          >
            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6">
              <span className="font-mono text-sm text-[var(--primary)] font-bold opacity-60">
                {item.period}
              </span>
              <h5 className="text-lg font-bold text-[#0F172A] group-hover:text-[var(--primary)] transition-colors">
                {item.company} <span className="text-sm font-normal text-[#475569] ml-2">/ {item.role}</span>
              </h5>
            </div>
            
            {/* プラス/マイナスアイコン */}
            <div className="relative w-6 h-6 flex items-center justify-center">
              <div className="absolute w-4 h-[2px] bg-[var(--primary)]" />
              <motion.div 
                animate={{ rotate: expanded === item.id ? 0 : 90 }}
                className="absolute w-[2px] h-4 bg-[var(--primary)]" 
              />
            </div>
          </button>

          <AnimatePresence initial={false}>
            {expanded === item.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="overflow-hidden"
              >
                <div className="pb-8 pl-0 md:pl-32">
                  <ul className="space-y-3">
                    {item.description.map((desc, i) => (
                      <li key={i} className="text-sm text-[#475569] leading-relaxed flex gap-3">
                        <span className="text-[var(--primary)] opacity-40 mt-1.5 w-1 h-1 rounded-full bg-current shrink-0" />
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}