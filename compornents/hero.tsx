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

// 「ぽぽぽぽ」の速度（小さいほど速い。0.03〜0.05 がおすすめ）
const POP_SPEED = 0.04;

export default function ReorderHero() {
  const [status, setStatus] = useState<'typewriter' | 'underline' | 'highlight' | 'clean' | 'reorder'>('typewriter');

  // データ準備（ロジックはそのまま継承）
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
      scale: 0.5, // 小さい状態から
      y: 10       // 少し下から
    },
    visible: {
      opacity: 1,
      scale: 1,   // 元の大きさに
      y: 0,       // 元の高さに
      transition: {
        type: "spring", // バネのような動きで「ぽぽっ」感を出す
        damping: 12,    // 弾み具合
        stiffness: 200  // 硬さ
      }
    },
  } as const;

  return (
    // 中央寄せ用のコンテナ
    <div className="flex items-center justify-center h-screen w-screen p-4
               bg-cover bg-center bg-no-repeat antialiased"
      style={{
        backgroundImage: "linear-gradient(rgba(8, 8, 8, 0.53), rgba(36, 34, 34, 0.8)), url('/background.jpg')",
      }}
    >
      <div className="relative">

        {/* 文字全体を包む親要素（staggerChildrenを適用） */}
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

                // タイプライターフェーズ（出現）のアニメーション設定
                variants={letterVariants}

                // その後の並び替えフェーズ（色、不透明度、移動）の設定
                animate={{
                  opacity: (status === 'clean' && !item.keep) ? 0 : 1,
                  color: status === 'reorder' ? "#e6daf1" : "#50725d",
                }}
                transition={{
                  layout: { duration: 1.2, ease: [0.4, 0, 0.2, 1] },
                  color: { duration: 0.5 },
                  // opacity は letterVariants の visible で制御するため、ここでは指定しない
                }}

                style={{
                  order: status === 'reorder' ? item.targetPos : item.id,
                  // Hello I am Yui のスペース位置調整 (o, I, m の後)
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



      </div>
      {status === 'reorder' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1 }} // 並び替えが落ち着いた頃に出現
          // 位置調整：bottom-10 で画面最下部に固定
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
                y: [0, 25, 25], // 上から下へ落ちて、少し止まる
                opacity: [0, 1, 0, 0], // 現れて、落ちて、消える
                scaleY: [1, 1.5, 1, 1], // 落ちる瞬間に縦に伸びる
              }}
              transition={{
                duration: 2, // 1サイクルの時間
                repeat: Infinity, // 無限に繰り返す
                ease: [0.4, 0, 0.2, 1], // ニュートン力学的な自然な加速
                times: [0, 0.3, 0.6, 1], // 各アニメーションのタイミング
              }}
              className="w-1 h-3 bg-white rounded-full absolute top-0 left-1/2 -translate-x-1/2 origin-top"
            />
          </div>
        </motion.div>
      )}
    </div>
  );
}
