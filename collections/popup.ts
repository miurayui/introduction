// lib/animations.ts
import { Variants } from 'motion';

export const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 40 
  },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.0,
      delay: customDelay,
      // [0.22, 1, 0.36, 1] は、滑らかに加速して静かに止まる高級感のあるイージングです
      ease: [0.22, 1, 0.36, 1],
    }
  })
};

// スクロール検知の共通設定（再利用性を高めるため）
export const viewportSettings = {
  once: true,
  margin: "-100px"
};
