export interface SkillIcon {
  name: string;
  src: string;
  experience: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  icons: SkillIcon[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Language",
    icons: [
      { 
        name: "HTML5", 
        src: "/icon/html5-plain.svg", 
        experience: "7 years (Edu: 5y / Pro: 2y)", 
        description: "高専時代からのセマンティックなマークアップに加え、実務ではアクセシビリティを考慮した実装を担当。" 
      },
      { 
        name: "CSS3", 
        src: "/icon/css3-plain.svg", 
        experience: "7 years (Edu: 5y / Pro: 2y)", 
        description: "BEM等の設計思想に基づいた保守性の高いコーディング。Tailwind CSSを用いたモダンなスタイリングにも精通。" 
      },
      { 
        name: "JS", 
        src: "/icon/javascript-plain.svg", 
        experience: "5 years (Edu: 3y / Pro: 2y)", 
        description: "非同期処理やDOM操作の基礎を網羅。実務ではCookieを用いた動的な表示制御ロジックの実装を経験。" 
      },
      { 
        name: "TS", 
        src: "/icon/typescript-original.svg", 
        experience: "3 years (Edu: 1y / Pro: 2y)", 
        description: "React/Next.js環境での型定義、Interface設計を担当。" 
      },
      { 
        name: "C#", 
        src: "/icon/csharp-plain.svg", 
        experience: "2 years (Edu: 0y / Pro: 2y)", 
        description: "ASP.NET Core (Razor) を用いた会員管理システムの開発。MVCモデルに基づいたバックエンド実装に従事。" 
      },
    ]
  },
  {
    title: "Framework / CMS",
    icons: [
      { 
        name: "React", 
        src: "/icon/react-original.svg", 
        experience: "2 years (Edu: 0y / Pro: 2y)", 
        description: "JSX/TSXを用いたコンポーネントベースの開発。再利用性の高いUIパーツの設計、Hooksを活用した状態管理を実践。" 
      },
      { 
        name: "Next.js", 
        src: "/icon/nextjs-plain.svg", 
        experience: "2 years (Edu: 0y / Pro: 2y)", 
        description: "App Router環境でのポートフォリオ構築や実務での選定調査。SSR/SSGの特性を活かしたパフォーマンス最適化を追求。" 
      },
      { 
        name: "Node.js", 
        src: "/icon/nodejs-plain.svg", 
        experience: "3 years (Edu: 1y / Pro: 2y)", 
        description: "高専でのネットワーク演習や、実務でのパッケージ管理・ビルド環境の構築（pnpm等）に活用。" 
      },
      { 
        name: "wordpress", 
        src: "/icon/wordpress-plain.svg", 
        experience: "1 year (Edu: 0y / Pro: 1y)", 
        description: "フルスクラッチでのテーマ作成。Gutenberg対応のカスタムブロック開発を行い、運用の利便性を大幅に向上。" 
      },
    ]
  },
  {
    title: "Development Tool",
    icons: [
      { 
        name: "VSCode", 
        src: "/icon/vscode-original.svg", 
        experience: "5 years (Edu: 3y / Pro: 2y)", 
        description: "日常的なフロントエンド・PHP開発のメインエディタ。拡張機能を駆使した静的解析・効率的な開発環境を構築。" 
      },
      { 
        name: "VisualStudio", 
        src: "/icon/visualstudio-plain.svg", 
        experience: "7 years (Edu: 5y / Pro: 2y)", 
        description: "C# (ASP.NET Core) 開発におけるデバッグ、ビルド、DB連携ツールとして活用。大規模なサーバーサイド開発に習熟。" 
      },
      { 
        name: "GitHub", 
        src: "/icon/github-original.svg", 
        experience: "4 years (Edu: 2y / Pro: 2y)", 
        description: "最大5名チームでのGitフロー運用。プルリクエストベースのコードレビューを通じた品質管理とチーム開発を実践。" 
      },
    ]
  }
];