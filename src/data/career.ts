export interface Career {
  id: string
  period: string
  duration: string
  project: string
  role: string
  responsibilities: string[]
  technologies: string[]
  description: string
}

export const careers: Career[] = [
  {
    id: 'red-frasco',
    period: '2024年8月 - 2026年1月',
    duration: '1年5ヶ月',
    project: '不動産関連Webサービス',
    role: 'フロントエンド・バックエンドエンジニア',
    responsibilities: [
      '仕様レビュー',
      'デザインレビュー',
      '実装',
      'テスト実装',
      'コードレビュー',
      '結合テスト',
    ],
    technologies: [
      'Next.js',
      'GraphQL',
      'Google Maps API',
      'ABテスト',
      'Cypress',
    ],
    description:
      'Next.js と GraphQL を扱ったモダンなプロジェクトのバックエンドからフロントエンドまでを一貫して対応。ABテストの基盤整備・運用・モニタリング、ログ監視、パフォーマンスチューニング、キャッシュ戦略、SEO最適化を実施。Google Maps API（クラスター表示、Geocoding API、Routes API）を活用した実装を担当。',
  },
  {
    id: 'gurunavi',
    period: '2021年11月 - 2024年8月',
    duration: '2年9ヶ月',
    project: '飲食店向けモバイルオーダーシステム',
    role: 'フロントエンドエンジニア',
    responsibilities: [
      '仕様レビュー',
      'デザインレビュー',
      '実装',
      'テスト実装',
      'コードレビュー',
      '結合テスト',
    ],
    technologies: [
      'Vue2',
      'Vue3',
      'Composition API',
      'Jest',
      'Vitest',
      'pnpm',
      'husky',
      'Storybook',
    ],
    description:
      '飲食店での注文をweb上で行えるサービス。ユーザー向け、ホールスタッフ向け、店舗管理者向け、社内管理画面など複数サービスのフロントエンド開発を担当。Vue2からVue3へのリプレイス（composition-api, script setup構文）、テスト基盤の移行（Jest→Vitest）、パッケージ管理ツールのpnpm化、husky・Storybook導入などモダン化を推進。',
  },
  {
    id: 'antipattern-saas',
    period: '2022年2月 - 2023年12月',
    duration: '1年10ヶ月',
    project: 'BtoB SaaSプラットフォーム',
    role: 'フロントエンドエンジニア',
    responsibilities: [
      'フロントエンド開発・レビュー',
      'コンポーネント設計',
      'UI構築',
      '状態管理・バリデーション実装',
      'API連携',
    ],
    technologies: [
      'Next.js',
      'TypeScript',
      'MUI',
      'OpenAPI',
      'react-hook-form',
      'Jest',
      'react-testing-library',
      'モノレポ',
    ],
    description:
      'Next.js + TypeScriptの新規開発。ユーザー向け・管理者向けなど複数サービスをモノレポで運用。MUIベースの社内UIパッケージを活用。OpenAPIでスキーマ定義を行いBEと型を共有。react-hook-formを使った状態管理とバリデーション、Jest・react-testing-libraryを使ったテスト設計・実装を担当。',
  },
  {
    id: 'antipattern-aws',
    period: '2021年8月 - 2022年2月',
    duration: '6ヶ月',
    project: '転職マッチングサービス',
    role: 'フロントエンドエンジニア',
    responsibilities: [
      'フロントエンド開発',
      '既存機能の改修',
      '新規機能の実装',
      'Jestテスト実装',
    ],
    technologies: ['Nuxt.js', 'TypeScript', 'Jest', 'OpenAPI'],
    description:
      'Nuxt.js + TypeScriptで構成されているフロントエンド開発を担当。Jestを導入しており、ユニットテスト、スナップショットテストの実装を実施。OpenAPIを使用した開発を経験。',
  },
  {
    id: 'upbond',
    period: '2020年6月 - 2021年8月',
    duration: '1年2ヶ月',
    project: 'CtoC レンタルプラットフォーム（Web管理画面）',
    role: 'フロントエンドエンジニア・インフラエンジニア',
    responsibilities: [
      'フロントエンド開発',
      'インフラ構築',
      'コンポーネント設計',
      'CI/CD構築',
    ],
    technologies: [
      'Nuxt.js',
      'TypeScript',
      'Atomic Design',
      'Storybook',
      'ESLint',
      'Prettier',
      'StyleLint',
      'GitHub Actions',
    ],
    description:
      'レンタル事業者向け管理画面開発。Laravel-mix + Vue.jsの既存サイトをNuxt.js + TypeScriptに置き換え。ESLint・Prettier・StyleLintの導入、GitHub ActionsでのPR時のlinter実行によりコードレビュー負担を軽減。Atomic Designをベースにしたコンポーネント設計やStorybookの導入などモダンフロントエンド技術を実践。',
  },
  {
    id: 'amatasu-app',
    period: '2020年8月 - 2021年6月',
    duration: '10ヶ月',
    project: 'CtoC レンタルプラットフォーム（アプリ）',
    role: 'フロントエンドエンジニア・インフラエンジニア',
    responsibilities: [
      'フロントエンド開発',
      'インフラ構築',
      'API改修',
      'リファクタリング',
    ],
    technologies: [
      'Vue.js',
      'OnsenUI',
      'webview',
      'axios',
      'ESLint',
      'Prettier',
    ],
    description:
      'ユーザー間でのレンタルを実現する C to C レンタルプラットフォームのアプリ開発。Vue.js + OnsenUI + webview構成で、axiosを使用したAPI連携、新規画面の追加・設計、webkitによるnative連携を担当。コンポーネント化による既存コードのリファクタリングやESLint・Prettierの導入を実施。',
  },
  {
    id: 'amatasu-crm',
    period: '2020年4月 - 2020年7月',
    duration: '3ヶ月',
    project: '顧客管理システム（新規開発）',
    role: 'フルスタックエンジニア',
    responsibilities: [
      'フロントエンド開発',
      'API開発',
      'インフラ構築',
      'デザイン・UI・UX',
      '外部連携',
    ],
    technologies: [
      'Vuetify',
      'AWS (VPC, RDS, EC2, S3)',
      'CodePipeline',
      'Salesforce API',
    ],
    description:
      '顧客情報を一元管理するCRMシステムの新規開発。ワイヤーからVuetifyを利用したフロントエンド実装、API作成、AWSの環境構築（VPC, RDS, EC2, S3）、CodePipelineを使用したCI/CD実装を担当。外部開発会社とのAPI連携における仕様共有も実施。',
  },
  {
    id: 'amatasu-truck',
    period: '2020年3月 - 2020年4月',
    duration: '1ヶ月',
    project: 'IoTデータ連携システム',
    role: 'フルスタックエンジニア・プロジェクトマネージャー',
    responsibilities: [
      'アジャイル開発・進捗管理',
      'フロントエンド開発',
      'API開発',
      'インフラ構築',
      'デザイン・UI・UX',
    ],
    technologies: ['Vue.js', 'Laravel', 'AWS', 'バッチ処理'],
    description:
      'IoTデバイスからの位置情報・走行データを記録し、社内システムにデータを登録するシステムの開発。外部サービスとのAPI連携、バッチ処理、管理画面の開発を担当。',
  },
]

export function getAllCareers(): Career[] {
  return careers
}

export function getCareerById(id: string): Career | undefined {
  return careers.find((career) => career.id === id)
}
