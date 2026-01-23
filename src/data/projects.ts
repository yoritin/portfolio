export interface Project {
  id: string
  title: string
  description: string
  thumbnail: string
  featured: boolean
  technologies: string[]
  links: {
    github?: string
    demo?: string
    website?: string
    marketplace?: string
  }
  period: string
  role: string
}

export const projects: Project[] = [
  {
    id: 'plants-log',
    title: 'Plants Log',
    description:
      '植物の成長を記録・管理できるWebアプリケーション。写真やメモと共に日々の変化を記録し、タイムライン形式で成長過程を可視化。科学的分類に基づいた植物データベースと多言語対応（日本語/英語）を実装。',
    thumbnail: '/images/projects/plants-log.jpg',
    featured: true,
    technologies: [
      'Next.js 15',
      'TypeScript',
      'Supabase',
      'Tailwind CSS',
      'shadcn/ui',
      'React Hook Form',
      'Zod',
    ],
    links: {
      website: 'https://plantslog.com/',
      github: 'https://github.com/yoritin/plantslog',
    },
    period: '2024 - Present',
    role: 'フルスタック開発（設計・実装・運用）',
  },
  {
    id: 'portfolio',
    title: 'Portfolio',
    description: 'Next.js App Routerで構築した個人ポートフォリオサイト',
    thumbnail: '/images/projects/portfolio.jpg',
    featured: true,
    technologies: ['Next.js', 'TypeScript', 'React', 'CSS Modules'],
    links: {
      github: 'https://github.com/yoritin/portfolio',
      website: 'https://portfolio.plantslog.com',
    },
    period: '2026',
    role: '個人開発',
  },
  {
    id: 'codeku',
    title: 'Codeku（コードク）',
    description:
      'VS Code拡張機能。コードの識別子にホバーすると日本語の読み（カタカナ）を表示。camelCase/PascalCase/snake_case/kebab-caseを自動認識し、プログラミング略語にも対応。',
    thumbnail: '/images/projects/codeku.jpg',
    featured: true,
    technologies: ['TypeScript', 'VS Code Extension API', 'Node.js', 'Webpack'],
    links: {
      github: 'https://github.com/yoritin/codeku',
      website: 'https://yoritin.github.io/codeku/',
      marketplace:
        'https://marketplace.visualstudio.com/items?itemName=yoritin.codeku',
    },
    period: '2026',
    role: '個人開発（設計・開発・公開）',
  },
  {
    id: 'otokogi',
    title: 'Otokogi（男気じゃんけん）',
    description:
      '旅行や飲み会の「男気じゃんけん」スコアを記録・共有できるWebアプリ。参加者をQRコードで招待し、勝利回数や支払金額をリアルタイム集計。SWRによる疑似リアルタイム同期で全員に自動反映。サーバーレス構成で完全無料運用を実現。',
    thumbnail: '/images/projects/otokogi.jpg',
    featured: true,
    technologies: [
      'Next.js 15',
      'TypeScript',
      'Neon Postgres',
      'Drizzle ORM',
      'Tailwind CSS',
      'SWR',
      'Vercel',
    ],
    links: {
      github: 'https://github.com/yoritin/otokogi',
      website: 'https://otokogi.vercel.app',
    },
    period: '2026',
    role: '個人開発（企画・設計・実装）',
  },
]

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured)
}

export function getAllProjects(): Project[] {
  return projects
}

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}
