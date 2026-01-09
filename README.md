# AURA Pilates Studio - ウェブサイト

AURA Pilates Studioの公式ウェブサイトです。

## GitHubリポジトリ

- **リポジトリURL**: https://github.com/anthony1232123-create/AURA_pilates.git
- **GitHubページ**: https://github.com/anthony1232123-create/AURA_pilates

### Git操作コマンド

```bash
# 変更をコミットしてプッシュする場合
git add .
git commit -m "変更内容の説明"
git push origin main
```

## デプロイ情報

### Surge

- **本番URL**: https://aura-lp-20251211.surge.sh
- **ライブプレビュー**: デプロイ直後に発行される一時URL（キャッシュやDNS反映前の確認に使用）

### 本番とライブプレビューの違い

- **本番**: 指定ドメインに公開された安定版。リンク共有は基本こちらを利用。
- **ライブプレビュー**: デプロイ直後に発行される一時URL。キャッシュやDNS反映前の確認に使用。

### デプロイコマンド

```bash
surge . aura-lp-20251211.surge.sh
```

## 重要なリンク

### 予約・問い合わせ

- **Square予約URL**: https://app.squareup.com/appointments/book/skvct2yoshljhz/LBP5T56023ANP/start
- **LINE公式アカウント**: https://line.me/R/ti/p/@019gqesq

### ソーシャルメディア

- **Instagram**: @aura_pilates

## ファイル命名規則

### 画像ファイル

- **ロゴ**: `assets/logo-transparent.png`（ASCII名に統一）
- **QRコード**: `assets/AURA-QR-Code.png`（ASCII名に統一）

日本語を含むファイル名はデプロイ環境で問題が発生する可能性があるため、ASCII名を使用しています。

## プロジェクト構成

```
AURA pilates/
├── index.html          # ホームページ
├── about.html          # AURAについて
├── services.html       # サービス
├── faq.html           # FAQ
├── contact.html       # お問い合わせ
├── css/
│   └── style.css      # スタイルシート
├── js/
│   └── main.js        # メインスクリプト
└── assets/            # 画像・動画ファイル
```

## 更新履歴

- 2024年12月: QRコード実装、LINEリンク更新、問い合わせフォーム削除、Square予約システム統合
