"use client";
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'About', href: '#about' },
    { name: 'Path', href: '#path' },
    { name: 'Skills', href: '#skills' },
    { name: 'Roots', href: '#roots' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // 50px以上スクロールしたら背景を出す
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ease-in-out ${isScrolled
        ? 'py-4 bg-white/80 backdrop-blur-md shadow-sm border-b border-[#166534]/5'
        : 'py-8 bg-transparent border-b border-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">

        {/* 左側：ロゴ */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className={`w-1.5 h-1.5 rounded-full bg-[#166534] transition-transform duration-500 ${isScrolled ? 'scale-110' : 'scale-100'}`} />
          <span className="font-mono font-bold text-[#0F172A] tracking-tighter text-lg">
            Yui.
          </span>
        </div>

        {/* 右側：ナビゲーション（最初から表示） */}
        <nav className="hidden md:flex items-center gap-10">
          {['About', 'Path', 'Skills', 'Roots'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#64748B] hover:text-[#166534] transition-colors relative group"
            >
              {item}
              {/* ホバー時の下線：一筆書きのメタファー */}
              <span className="absolute -bottom-1 left-0 w-0 h-[px] bg-[#166534] opacity-40 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* モバイル用：ハンバーガーボタン */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 z-[140] p-2"
          aria-label="Toggle Menu"
        >
          <motion.div
            animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="w-6 h-[1px] bg-[#166534]"
          />
          <motion.div
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-4 h-[1px] bg-[#166534]"
          />
          <motion.div
            animate={isOpen ? { rotate: -45, y: -7, width: "24px" } : { rotate: 0, y: 0, width: "16px" }}
            className="h-[1px] bg-[#166534]"
          />
        </button>
      </div>

      {/* モバイル用フルスクリーンメニュー */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[120] flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-12">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={handleLinkClick}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="font-mono text-2xl tracking-[0.3em] uppercase text-[#0F172A] hover:text-[#166534]"
                >
                  {item.name}
                </motion.a>
              ))}
            </nav>
            {/* 装飾の5cmライン */}
            <div className="absolute bottom-20 w-24 h-[1px] bg-[#166534] opacity-20" />
          </motion.div>
        )}
      </AnimatePresence>
    </header>

  );
}

