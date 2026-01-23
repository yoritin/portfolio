# Design System Guide

このポートフォリオサイトのデザインシステムガイドラインです。

## 目次

1. [デザイン原則](#デザイン原則)
2. [タイポグラフィ](#タイポグラフィ)
3. [スペーシングシステム](#スペーシングシステム)
4. [カラーシステム](#カラーシステム)
5. [レイアウト](#レイアウト)
6. [コンポーネント](#コンポーネント)
7. [レスポンシブデザイン](#レスポンシブデザイン)

---

## デザイン原則

### 統一性

- CSS変数を使用した一貫性のあるスタイリング
- 再利用可能なコンポーネント設計
- 予測可能なレイアウトパターン

### アクセシビリティ

- 適切なコントラスト比の確保
- セマンティックなHTML構造
- キーボードナビゲーション対応

### パフォーマンス

- CSS Modulesによるスコープ化
- 最小限のグローバルスタイル
- 効率的なレンダリング

---

## タイポグラフィ

### フォントスケール

すべてのフォントサイズはCSS変数で定義されています。

```css
--font-size-xs: 0.75rem; /* 12px - タグ、メタデータ */
--font-size-sm: 0.875rem; /* 14px - 日付、補足情報 */
--font-size-base: 1rem; /* 16px - 本文 */
--font-size-lg: 1.125rem; /* 18px - 説明文 */
--font-size-xl: 1.25rem; /* 20px - カードタイトル */
--font-size-2xl: 1.5rem; /* 24px - セクションタイトル */
--font-size-3xl: 2rem; /* 32px - ページタイトル（モバイル） */
--font-size-4xl: 2.5rem; /* 40px - ページタイトル */
--font-size-5xl: 3rem; /* 48px - ヒーローセクション */
```

### 使用例

```css
/* 推奨 */
.title {
  font-size: var(--font-size-4xl);
}

/* 非推奨 */
.title {
  font-size: 2.5rem;
}
```

### フォントウェイト

```css
--font-weight-normal: 400;
--font-weight-bold: 700;
```

### Line Height

- **見出し**: `1.2` - `1.3`
- **本文**: `1.5` - `1.6`

```css
.heading {
  line-height: 1.2;
}

.bodyText {
  line-height: 1.6;
}
```

### Letter Spacing

```css
/* 大きな見出し */
letter-spacing: -0.02em; /* ヒーロー */
letter-spacing: -0.015em; /* ページタイトル */
letter-spacing: -0.01em; /* セクションタイトル */

/* 小さなテキスト */
letter-spacing: 0.05em; /* タグ、ラベル */
```

---

## スペーシングシステム

### 8pt グリッドシステム

すべてのスペーシングは8の倍数を基準にしています。

```css
--spacing-xs: 8px; /* 最小間隔 */
--spacing-sm: 16px; /* 小 */
--spacing-md: 24px; /* 中 */
--spacing-lg: 32px; /* 大 */
--spacing-xl: 48px; /* 特大 */
--spacing-2xl: 64px; /* 2倍 */
--spacing-3xl: 96px; /* 3倍 */
```

### 使用ガイドライン

| 用途                 | 変数            | サイズ |
| -------------------- | --------------- | ------ |
| タグ間の間隔         | `--spacing-xs`  | 8px    |
| カード内の要素間     | `--spacing-sm`  | 16px   |
| セクション内の要素間 | `--spacing-md`  | 24px   |
| グリッドのgap        | `--spacing-lg`  | 32px   |
| セクション間         | `--spacing-3xl` | 96px   |

---

## カラーシステム

### テーマ対応

ライトモードとダークモードの両方に対応したカラーパレット。

#### ライトモード

```css
--color-bg: #ffffff;
--color-text: #1f2937;
--color-text-light: #4b5563;
--color-border: #d1d5db;
--color-link: #2563eb;
--color-link-hover: #1e40af;

--text-primary: #1f2937;
--text-secondary: #4b5563;
--card-bg: #ffffff;
--section-bg: #f9fafb;
--nav-bg: rgba(255, 255, 255, 0.9);
--border-color: #d1d5db;
```

#### ダークモード

```css
--color-bg: #111827;
--color-text: #f9fafb;
--color-text-light: #d1d5db;
--color-border: #374151;
--color-link: #60a5fa;
--color-link-hover: #3b82f6;

--text-primary: #f9fafb;
--text-secondary: #d1d5db;
--card-bg: rgba(31, 41, 55, 0.5);
--section-bg: rgba(31, 41, 55, 0.8);
--nav-bg: rgba(17, 24, 39, 0.9);
--border-color: rgba(75, 85, 99, 0.3);
```

### ブランドカラー

```css
--color-primary: #667eea;
--color-secondary: #764ba2;
--color-secondary-dark: #5e3c82;
```

### グラデーション

```css
--gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
--gradient-primary-hover: linear-gradient(135deg, #5568d3 0%, #64408a 100%);
```

---

## レイアウト

### ページ構造

すべてのページで統一されたレイアウトパターンを使用します。

#### 標準ページレイアウト

```tsx
import pageHeaderStyles from '@/styles/page-header.module.css'

export default function Page() {
  return (
    <div className={pageHeaderStyles.container}>
      <header className={pageHeaderStyles.header}>
        <h1 className={pageHeaderStyles.title}>
          <span className={pageHeaderStyles.titleGradient}>Page Title</span>
        </h1>
        <p className={pageHeaderStyles.description}>ページの説明文</p>
      </header>

      <section className={pageHeaderStyles.section}>
        <h2 className={pageHeaderStyles.sectionTitle}>Section Title</h2>
        {/* コンテンツ */}
      </section>
    </div>
  )
}
```

### コンテナ幅

```css
.container {
  max-width: 1200px; /* メインコンテンツ */
  max-width: 900px; /* 読みやすさ重視（About） */
  max-width: 800px; /* フォーム、狭いコンテンツ */
  margin: 0 auto;
  padding: var(--spacing-3xl) var(--spacing-lg);
}
```

### グリッドレイアウト

```css
/* カードグリッド */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-lg);
}

/* 高さ揃え */
.card {
  height: 100%;
  display: flex;
  flex-direction: column;
}
```

---

## コンポーネント

### Border Radius

```css
--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 16px;
--radius-full: 9999px;
```

### カードコンポーネント

```css
.card {
  background-color: var(--card-bg);
  border-radius: var(--radius-lg);
  padding: var(--spacing-md);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}
```

### バッジコンポーネント

バリエーション:

- `default`: デフォルトスタイル
- `primary`: プライマリカラー
- `success`: 成功状態
- `warning`: 警告状態
- `info`: 情報表示

サイズ:

- `small`: 小さいサイズ
- `medium`: 標準サイズ

### ボタンコンポーネント

バリエーション:

- `primary`: プライマリアクション
- `secondary`: セカンダリアクション
- `outline`: アウトライン

### Glassmorphism エフェクト

テーマトグルなど、特別なUI要素に使用。

```css
.glassmorphism {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow:
    0 8px 32px 0 rgba(102, 126, 234, 0.15),
    inset 0 1px 1px 0 rgba(255, 255, 255, 0.3);
}
```

---

## レスポンシブデザイン

### ブレークポイント

```css
/* モバイル */
@media (max-width: 480px) {
  /* 最小デバイス */
}

/* タブレット */
@media (max-width: 768px) {
  /* メインブレークポイント */
}

/* デスクトップ */
@media (min-width: 769px) {
  /* デフォルトデザイン */
}
```

### レスポンシブタイポグラフィ

```css
/* デスクトップ */
.title {
  font-size: var(--font-size-4xl); /* 40px */
}

/* タブレット */
@media (max-width: 768px) {
  .title {
    font-size: var(--font-size-3xl); /* 32px */
  }
}

/* モバイル */
@media (max-width: 480px) {
  .title {
    font-size: var(--font-size-2xl); /* 24px */
  }
}
```

### レスポンシブグリッド

```css
/* デスクトップ: 自動調整 */
.grid {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

/* タブレット・モバイル: 1カラム */
@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
```

---

## アニメーション

### トランジション

標準的なトランジション時間:

- 通常: `0.2s` - `0.3s`
- スムーズ: `0.4s` - `0.5s`

```css
/* ホバーエフェクト */
.element {
  transition: all 0.3s ease;
}

/* 複数プロパティ */
.element {
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}
```

### View Transitions API

ページ遷移にView Transitions APIを使用。

```css
@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideOutLeft {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-30px);
  }
}
```

### ホバーエフェクト

```css
/* 標準的なカードホバー */
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

/* リンクホバー */
.link:hover {
  transform: translateX(4px);
}

/* ボタンホバー */
.button:hover {
  transform: translateY(-2px) scale(1.02);
}
```

---

## ベストプラクティス

### CSS変数の使用

```css
/* ✅ 推奨 */
.title {
  font-size: var(--font-size-4xl);
  color: var(--text-primary);
  margin-bottom: var(--spacing-md);
}

/* ❌ 非推奨 */
.title {
  font-size: 40px;
  color: #1f2937;
  margin-bottom: 24px;
}
```

### CSS Modules

```tsx
// ✅ 推奨
import styles from './component.module.css'

export default function Component() {
  return <div className={styles.container}>...</div>
}

// ❌ 非推奨
export default function Component() {
  return <div className="container">...</div>
}
```

### 共通スタイルの再利用

```tsx
// ページヘッダーの再利用
import pageHeaderStyles from '@/styles/page-header.module.css'

// セクションの構造化
;<section className={pageHeaderStyles.section}>
  <h2 className={pageHeaderStyles.sectionTitle}>タイトル</h2>
  ...
</section>
```

### ダークモード対応

```css
/* 自動的にダークモードを適用 */
[data-theme='dark'] .element {
  background-color: var(--card-bg-dark);
  color: var(--text-primary);
}

/* システム設定に従う */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme]) .element {
    background-color: var(--card-bg-dark);
  }
}
```

---

## ファイル構成

```
src/
├── styles/
│   ├── global.css                    # グローバルスタイル・CSS変数
│   └── page-header.module.css        # 共通ページヘッダー
├── components/
│   ├── ui/
│   │   ├── card.module.css
│   │   ├── badge.module.css
│   │   └── button.module.css
│   ├── home/
│   │   ├── hero.module.css
│   │   ├── featured-projects.module.css
│   │   ├── skills-preview.module.css
│   │   └── latest-posts.module.css
│   └── theme-toggle.module.css
└── app/
    ├── about/
    │   └── about.module.css
    ├── projects/
    │   └── projects.module.css
    ├── skills/
    │   └── skills.module.css
    ├── blog/
    │   └── blog.module.css
    └── contact/
        └── contact.module.css
```

---

## 参考リンク

- [CSS Variables (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [View Transitions API (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API)
- [CSS Modules](https://github.com/css-modules/css-modules)

---

## 更新履歴

- **2026-01-24**: 初版作成
  - CSS変数ベースのタイポグラフィシステム導入
  - 統一されたページレイアウト実装
  - Glassmorphism エフェクト追加
  - View Transitions API 統合
