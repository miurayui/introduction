"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-[#E2E8F0] py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        
        {/* 左側：ブランド・スローガン */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[var(--primary)]" /> {/* 雫のドット */}
            <span className="font-mono font-bold text-[#0F172A] tracking-tighter text-xl">
              Yui.
            </span>
          </div>
          <p className="text-xs text-[#64748B] font-mono tracking-widest uppercase">
            Query the Preconception.
          </p>
        </div>

        {/* 中央：SNS・リンク */}
        <div className="flex gap-8 font-mono text-sm text-[#475569]">
          <a href="https://github.com" target="_blank" className="hover:text-[var(--primary)] transition-colors">GitHub</a>
        </div>

        {/* 右側：コピーライト */}
        <div className="text-right">
          <p className="font-mono text-[10px] text-[#94A3B8] tracking-widest">
            &copy; {currentYear} YUI PORTFOLIO<br />
            MADE WITH NEXT.JS
          </p>
          {/* 下に小さな 5cm ライン */}
          <div className="mt-4 flex justify-end">
             <div className="w-[100px] h-[1px] bg-[var(--primary)] opacity-20" />
          </div>
        </div>

      </div>
    </footer>
  );
}
