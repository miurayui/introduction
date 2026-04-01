export interface CareerItem {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
}

export const careerData: CareerItem[] = [
  {
    id: "01",
    company: "Company A",
    role: "Full Stack Engineer",
    period: "2024.10 - 2025.03",
    description: [
      "MVCモデルを採用した大規模ユーザー基盤システムの刷新プロジェクトにおいて、詳細設計から実装・テストまでを一貫して担当。",
      "外注先から納品された静的UIのRazor（ASP.NET Core）化および、会員管理システムの基幹機能の設計・実装に従事。"
    ]
  },
  {
    id: "02",
    company: "Company B",
    role: "Full Stack Engineer",
    period: "2025.01 - Present",
    description: [
      "アパレルECサイトにおけるメディア機能（Article）の設計・開発を一貫して担当。記事コンテンツと商品情報の動的な連携を実現。",
      "データベース（C# / SQL）に共通の識別子（Article ID）を導入するスキーマ拡張を実施。これにより、同一記事内で紹介される色違いや型違いのバリエーション商品を効率的に一括管理・抽出するロジックを構築。"
    ]
  },
  {
    id: "03",
    company: "Company C",
    role: "Frontend Developer",
    period: "2025.11 - Present",
    description: [
      "WordPressを用いたWebサイトのフルスクラッチ開発プロジェクトに、立ち上げフェーズより参画し、現在も継続して開発に従事。",
      "Gutenberg（ブロックエディタ）に対応したカスタムブロックを独自開発。運用サイドの利便性とフロントエンドの自由度を両立した設計を実現。",
      "ブラウザのCookieを活用したフローティングバナーの表示制御ロジックを設計。ユーザー体験（UX）を損なわないセッション管理を実装。",
      "初期開発完了後の現在は、システム全体の品質担保を目的とした単体テストの実施、および発見された技術的課題の修正（デバッグ）を並行して担当中。"
    ]
  }
];