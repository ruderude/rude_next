---
title: 'Next.jsでmarkdownブログを構築'
date: '2022-07-13'
description: 'Next.jsでmarkdownファイルを利用したブログの構築手順を解説しています。'
image: img/neko1.jpg
categories: ['react']
---

## 目次

Next.js を使って Markdown のブログサイトの構築を一から行なっていきます。

## Next.js の準備1

### プロジェクトの作成

npx create-next-app コマンドを利用して Next.js プロジェクトの作成を行います。

## Next.js の準備2

### プロジェクトの作成

[記事一覧](/blog)

npx create-next-app コマンドを利用して Next.js プロジェクトの作成を行います。

## Next.js の準備3

### プロジェクトの作成

![猫画像](http://localhost:3000/img/neko3.jpg)

npx create-next-app コマンドを利用して Next.js プロジェクトの作成を行います。

## Next.js の準備4

### プロジェクトの作成

npx create-next-app コマンドを利用して Next.js プロジェクトの作成を行います。

## Next.js の準備5

### プロジェクトの作成

npx create-next-app コマンドを利用して Next.js プロジェクトの作成を行います。

### コード記述

```js[class="line-numbers"]
import Layout from '../components/layout';
import '../styles/globals.css';
import '../styles/prism.css';
import SEO from '../next-seo.config';
import { DefaultSeo } from 'next-seo';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
```

## Next.js の準備6

### プロジェクトの作成

npx create-next-app コマンドを利用して Next.js プロジェクトの作成を行います。

## Next.js の準備7

### プロジェクトの作成

npx create-next-app コマンドを利用して Next.js プロジェクトの作成を行います。