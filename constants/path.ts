export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export const milestones: Milestone[] = [
  {
    year: "2019",
    title: "The First Line",
    description: "大分高専へ入学後、C++に触れる。低レイヤの迷宮で、プログラミングの圧倒的な難しさと、自分の書いたコードが動いた時の高揚感を知る。"
  },
  {
    year: "2022",
    title: "The Silent Error",
    description: "予期せぬエラーに立ちすくみ、動かないコードを「恐れ」として感じていた時期。しかし、この時の「なぜ動かないのか」という問いとの格闘が、後の自分を形成する要素としての眼を養う修行期間となる。"
  },
  {
    year: "2023",
    title: "Connection",
    description: "バックエンドからAzureを用いたインフラ構築までを経験。技術の複雑さ以上に、人の「イメージ」を共有し、理解し合うことの難しさと尊さを学ぶ。"
  },
  {
    year: "2024",
    title: "Into the Real World",
    description: "高専で培った思考の骨格を手に、エンジニアの卵として新卒で入社。現場のリアルな課題に対し、要件を実現するための大きな壁に立ちすくむ。"
  },
  {
    year: "2025",
    title: "Convergence",
    description: "バックエンドとフロントエンド、領域に縛られずシステム全体を俯瞰する。点と点が繋がり、一つのサービスを全方位から描き出す視点を考えるようになる。"
  },
  {
    year: "2026",
    title: "Manifestation",
    description: "曖昧な言葉から本質を汲み取り、コンポーネントへと落とし込めるようになる。AIという優秀な助手を相棒に、先入観を疑い、思考を最短距離で形にする表現者へ。"
  }
];