export interface SkillCategory {
  category: string
  icon: string
  skills: Skill[]
}

export interface Skill {
  name: string
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  years?: number
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'プログラミング言語',
    icon: '🔨',
    skills: [
      { name: 'JavaScript', level: 'expert', years: 6 },
      { name: 'TypeScript', level: 'expert', years: 5 },
      { name: 'PHP', level: 'intermediate', years: 2 },
    ],
  },
  {
    category: 'フロントエンド',
    icon: '🚀',
    skills: [
      { name: 'React.js', level: 'expert', years: 4 },
      { name: 'Next.js', level: 'expert', years: 4 },
      { name: 'Vue.js (2/3)', level: 'expert', years: 4 },
      { name: 'Nuxt.js', level: 'advanced', years: 3 },
    ],
  },
  {
    category: 'バックエンド・API',
    icon: '⚙️',
    skills: [
      { name: 'GraphQL', level: 'advanced', years: 2 },
      { name: 'Express.js', level: 'advanced', years: 2 },
      { name: 'Laravel', level: 'intermediate', years: 2 },
      { name: 'Node.js', level: 'advanced', years: 3 },
      { name: 'OpenAPI', level: 'advanced', years: 2 },
    ],
  },
  {
    category: 'UI・スタイリング',
    icon: '🎨',
    skills: [
      { name: 'MUI', level: 'advanced', years: 2 },
      { name: 'Chakra UI', level: 'advanced', years: 2 },
      { name: 'Vuetify', level: 'advanced', years: 2 },
      { name: 'Tailwind CSS', level: 'expert', years: 3 },
      { name: 'shadcn/ui', level: 'advanced', years: 1 },
      { name: 'CSS Modules', level: 'expert', years: 4 },
    ],
  },
  {
    category: 'テスト・品質管理',
    icon: '🧪',
    skills: [
      { name: 'Jest', level: 'expert', years: 4 },
      { name: 'Vitest', level: 'advanced', years: 2 },
      { name: 'react-testing-library', level: 'advanced', years: 3 },
      { name: 'Cypress', level: 'advanced', years: 2 },
      { name: 'Storybook', level: 'advanced', years: 3 },
    ],
  },
  {
    category: '状態管理・フォーム',
    icon: '📦',
    skills: [
      { name: 'react-hook-form', level: 'expert', years: 3 },
      { name: 'SWR', level: 'advanced', years: 2 },
      { name: 'Vuex', level: 'advanced', years: 3 },
      { name: 'Pinia', level: 'advanced', years: 2 },
    ],
  },
  {
    category: 'クラウド・インフラ',
    icon: '☁️',
    skills: [
      { name: 'AWS', level: 'advanced', years: 4 },
      { name: 'Firebase', level: 'advanced', years: 3 },
      { name: 'Vercel', level: 'expert', years: 3 },
      { name: 'Netlify', level: 'expert', years: 3 },
      { name: 'Supabase', level: 'advanced', years: 2 },
      { name: 'Neon Postgres', level: 'intermediate', years: 1 },
    ],
  },
  {
    category: 'ORM・データベース',
    icon: '💾',
    skills: [
      { name: 'PostgreSQL', level: 'advanced', years: 4 },
      { name: 'Drizzle ORM', level: 'advanced', years: 1 },
      { name: 'Prisma', level: 'intermediate', years: 1 },
    ],
  },
  {
    category: 'ツール・開発環境',
    icon: '🛠️',
    skills: [
      { name: 'Git / GitHub', level: 'expert', years: 6 },
      { name: 'GitHub Actions', level: 'advanced', years: 3 },
      { name: 'ESLint', level: 'expert', years: 5 },
      { name: 'Prettier', level: 'expert', years: 5 },
      { name: 'pnpm', level: 'advanced', years: 2 },
      { name: 'husky', level: 'advanced', years: 3 },
      { name: 'CI/CD', level: 'advanced', years: 4 },
      { name: 'monorepo', level: 'advanced', years: 2 },
    ],
  },
]

export function getAllSkills(): SkillCategory[] {
  return skillCategories
}

export function getSkillsByCategory(category: string): Skill[] {
  const found = skillCategories.find((cat) => cat.category === category)
  return found?.skills || []
}
