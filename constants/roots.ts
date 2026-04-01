export interface RootItem {
  category: string;
  target: string;
  content: string;
  description: string;
}

export const rootItems: RootItem[] = [
  {
    category: "Inspiration",
    target: "尊敬する人 / 言葉",
    content: "「その答えは、高専にある」という導き",
    description: "物事の本質を知りたいが故に、公式の『本当の意味』を先生に問い続けた中学時代。納得いくまで追求したい私の性質を理解し、高専という道を示してくれた恩師の言葉が、エンジニアとしての今の私を形作る原点となる。"
  },
  {
    category: "Turning Point",
    target: "転機となった出来事",
    content: "「やりたいこと」も「得意なこと」も、両方やる選択",
    description: "物理の先生から誘われた共同研究と、自身が熱望した反響定位の研究。二つの道で葛藤した際、『どちらもやるべきだ』という教授の言葉に背中を押される。二兎を追う決断が、自分の専門性とスキルを飛躍的に広げる要因となった。"
  }
];