"use client";

import { useState, useMemo } from 'react';
import { motion } from 'motion/react';

type CharItem = {
  id: number;
  char: string;
  displayChar: string;
  keep: boolean;
  targetPos: number;
};

const sentence = "Challenge my initial assumptions.";
const targetText = "Hello I am Yui";

const POP_SPEED = 0.04;

export default function ReorderHero() {
  const [status, setStatus] = useState<'typewriter' | 'underline' | 'highlight' | 'clean' | 'reorder'>('typewriter');

  // データ準備
  const allChars = useMemo(() => {
    const chars: CharItem[] = sentence.split("").map((c, i) => ({
      id: i,
      char: c,
      displayChar: c,
      keep: false,
      targetPos: -1
    }));
    const usedIndices = new Set<number>();
    targetText.split("").forEach((tChar, tIdx) => {
      if (tChar === " ") return;
      const foundIdx = chars.findIndex((c, i) =>
        c.char.toLowerCase() === tChar.toLowerCase() && !usedIndices.has(i)
      );
      if (foundIdx !== -1) {
        chars[foundIdx].keep = true;
        chars[foundIdx].targetPos = tIdx;
        chars[foundIdx].displayChar = tChar;
        usedIndices.add(foundIdx);
      }
    });
    return chars;
  }, []);

  // 全文字が出終わった後のシーケンス
  const handlePopEnd = () => {
    const sequence = async () => {
      setStatus('underline');
      await new Promise(r => setTimeout(r, 800)); setStatus('highlight');
      await new Promise(r => setTimeout(r, 800)); setStatus('clean');
      await new Promise(r => setTimeout(r, 800)); setStatus('reorder');
    };
    sequence();
  };

  // 親要素のアニメーション設定
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        // 子要素（文字）を 0.04秒おきに順番に出現させる
        staggerChildren: POP_SPEED,
      },
    },
  };

  // 子要素（一文字ずつ）のアニメーション設定
  const letterVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      y: 10
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200
      }
    },
  } as const;

  return (
    <div className="flex items-center justify-center h-screen
               bg-cover bg-center bg-no-repeat antialiased"
      style={{
        backgroundImage: "linear-gradient(rgba(8, 8, 8, 0.53), rgba(36, 34, 34, 0.8)), url('/background.jpg')",
      }}
    >
      <div className="relative">

        {/* 文字全体を包む親要素 */}
        <motion.div
          className="flex flex-wrap justify-center items-center overflow-visible"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {allChars.map((item, index) => {
            if (status === 'reorder' && !item.keep) return null;
            const isSpace = item.char === " ";

            return (
              <motion.span
                key={item.id}
                layout // 並び替えの移動用

                variants={letterVariants}

                animate={{
                  opacity: (status === 'clean' && !item.keep) ? 0 : 1,
                  color: status === 'reorder' ? "#e6daf1" : "#50725d",
                }}
                transition={{
                  layout: { duration: 1.2, ease: [0.4, 0, 0.2, 1] },
                  color: { duration: 0.5 },
                }}

                style={{
                  order: status === 'reorder' ? item.targetPos : item.id,
                  marginRight: (status === 'reorder' && (item.targetPos === 4 || item.targetPos === 6 || item.targetPos === 9)) ? '0.8rem' : '0'
                }}
                className={`text-4xl md:text-6xl font-bold inline-block ${isSpace ? 'w-[0.3em]' : 'px-[1px]'}`}

                // 全文字が出終わったタイミングを検知
                onAnimationComplete={() => {
                  if (status === 'typewriter' && index === allChars.length - 1) {
                    handlePopEnd();
                  }
                }}
              >
                {status === 'reorder' ? item.displayChar : item.char}
              </motion.span>
            );
          })}
        </motion.div>

        {/* 下線アニメーション */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: (status !== 'typewriter' && status !== 'reorder') ? 1 : 0 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="absolute -bottom-4 left-0 w-full h-1 bg-white origin-left"
        />

      </div>
      {status === 'reorder' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          {/* スクロールを促すテキスト */}
          <span className="text-xs tracking-[0.2em] font-light text-white uppercase opacity-70 mb-2">
            Scroll Down
          </span>

          {/* 雫のアニメーション */}
          <div className="relative w-1 h-8"> {/* 雫が落ちる軌道を確保 */}
            <motion.div
              animate={{
                y: [0, 25, 25],
                opacity: [0, 1, 0, 0],
                scaleY: [1, 1.5, 1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: [0.4, 0, 0.2, 1],
                times: [0, 0.3, 0.6, 1],
              }}
              className="w-1 h-3 bg-white rounded-full absolute top-0 left-1/2 -translate-x-1/2 origin-top"
            />
          </div>
        </motion.div>
      )}
    </div>
  );
}
