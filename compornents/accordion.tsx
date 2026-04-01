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
import { careerData } from '../constants/accordion';


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
              <h5 className="text-lg font-bold text-[var(--dark)] group-hover:text-[var(--primary)] transition-colors">
                {item.company} <span className="text-sm font-normal text-[var(--dark)] ml-2">/ {item.role}</span>
              </h5>
            </div>
            
            {/* プラス/マイナスアイコン */}
            <div className="relative w-6 h-6 flex items-center justify-center">
              <div className="absolute w-4 h-[2px] bg-[var(--primary)]" />
              <motion.div 
                animate={{ rotate: expanded === item.id ? 90 : 0 }}
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
                <div className="pb-8 pl-0">
                  <ul className="space-y-3">
                    {item.description.map((desc, i) => (
                      <li key={i} className="text-[var(--dark)] leading-relaxed flex gap-3">
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