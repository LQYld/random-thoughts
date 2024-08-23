---
title: rss 入门指北
lang: zh
description: rss，很少被众人熟知的技术。在如今的大数据时代，很多信息流都是通过算法机制安排传播，很容易被无用咨询消耗我们的精力。rss 也许可以帮你逃离咨询堆积问题。
date: 2024-06-05 18:01:00
---

[[toc]]

在如今互联网环境下，我们每天都在接受来自不同方向的资讯。它们总能带来「你可能感兴趣的内容」。这些或有用、或无用的资讯不仅消耗了我们大量的时间甚至于错过那些自己想要关注的。

为了解决这些问题，**rss** 重新进入了我们的视野。我们可以自由选择订阅的信息源，也可以及时地对信息源进行调整以避免信息过载。

由于 **rss** 具有一定的使用门槛，很多刚接触用户并不知道该如何利用它。避免不了产生许多疑问。

不妨阅读本片文章，让我们试图解答的你疑问，让 **rss** 帮你获取更多的有效资讯。

## 什么是 rss ?

RSS 的全称是 Really Simple Syndication（简易信息聚合），它是一种消息来源的格式规范，网站可以按照这种格式规范提供文章的标题、摘要、全文等信息给订阅用户，用户可以通过订阅不同网站 RSS 链接的方式将不同的信息源进行聚合，在一个工具里阅读这些内容。

## 什么是 rss 服务 ?

RSS 服务是基于 RSS 协议开发的聚合服务，目前比较知名的 RSS 服务有 **Feedly、NewsBlur、Inoreader** 等，这些服务大多提供了过滤筛选文章的功能。它们在能够自动抓取 RSS 订阅源中的更新内容的同时，还能按照你设置好的过滤条件，将符合条件的文章以文件夹或者标签的形式进行聚合并呈现给你，让你只看想看的内容，告别信息过载。

如果想了解 **Feedly、NewsBlur、Inoreader** 的相关内容，可以阅读  [2018 年主流 RSS 服务选哪家？Feedly、Inoreader 和 NewsBlur 全面横评](https://sspai.com/post/44420)

## rss 订阅源该如何获取 ?

提到订阅一词，就会想到，我们必须获取到 **rss 订阅链接** 才可以和对方建立联系。但是在此之前，我们要确定的是对方是否支持 **rss 订阅**。

最直接的方法就是查看网站的底部或侧边栏是否有 **RSS 图标**。一般来说，网站都会暴露出它的 **rss 订阅渠道**，图标所指向的地址就是该网站的订阅链接。你可以直接点击  **RSS 订阅链接**跳转到 **RSS 客户端** 内进行订阅，也可以复制粘贴按钮中的地址到自己在用的 **RSS 服务中** 订阅这些网站中的内容。

如果上面的方法没有找到，我们可以尝试在网站域名后面加上 **/feed** 或 **/rss** 或许可以碰巧猜中。这是一种行为预判，因为绝大部分习惯都会设置如此。

当然，你也可以直接通过搜索引擎通过 网站名 + RSS 的关键字进行搜索，往往都能找到支持网站的 **RSS 链接**。

除了手动搜索订阅链接外，这里推荐一个 **Chrome浏览器扩展 - RSSHub Radar**。它是一个可以帮你一键发现并订阅当前网站 **RSS 链接** 的插件。如果当前你浏览的网页支持 **rss 订阅**，你可以通过这一插件直接复制 **RSS 订阅链接**、或者 **一键订阅 RSS 链接** 到 **Feedly、Inoreader 等 RSS 服务中**。

### RSSHub Radar

现存一个最大的问题，就是 **RSS** 从来都不是一个信息发布的主流方式，除了部分新闻类网站，绝大部分网站都是缺少官方的 **RSS来源**。

#### 什么是 RSSHub Radar ?

**RSSHub** 是一个用来制作 **RSS订阅源** 的工具。**RSSHub** 在大部分网站上也是通过抓取网页的方式获得订阅源，不同的是在 **RSSHub** 中，已经完成了对抓取规则的编写，只需要用户简单的编辑下地址即可。

#### 安装

你可以通过下述链接安装使用：[Chrome Web Store](https://chromewebstore.google.com/detail/rsshub-radar/kefjpfngnndepjbopdmoebkipbgkggaa) | [GitHub](https://github.com/DIYgod/RSSHub-Radar)

#### 如何使用 ?

使用很简单，我们在进入一个新页面时，**RSSHub Radar** 会自动检测当前页面有没有 **RSS** 和 **RSSHub** 支持，检测到则会在右下角显示一个角标。如果我们想订阅当前页面的 **RSS**，点击扩展图标，会弹出一个列表，如图所示，列表有三项内容：当前页面上的 **RSS**、适用于当前页面的 **RSSHub**、适用于当前网站的 **RSSHub**，你可以选择复制链接或一键订阅到 **Feedly、Inoreader 或者 TinyTinyRSS**。

#### 制作 RSSHub Radar 订阅源

比如我希望订阅 **YouTube** 上 **Linus Tech Tips** 的视频，我在网页上找到 **LTT** 的用户名是 **「LinusTechTips」**，根据 **RSSHub** 的 官方文档，我只需要在 **https://rsshub.app/youtube/user/之后加上这个用户名**，即 **https://rsshub.app/youtube/user/LinusTechTips**，一个订阅源就制作完成了。

<div align="center">
  <img src="https://cdnfile.sspai.com/2018/09/11/4489462b60207267d3ac5c35055c01fd.png?imageView2/2/format/webp"/>
</div>

**RSSHub** 上目前提供各类型的、总计超过 100 个网站的订阅源制作，而且随着参与者队伍的壮大，订阅源的数量还在快速上升中。从社交媒体到教务通知、从程序跟新到气象预警，只要你能想到的都会有不同的参与者开发完成。其中部分网站还提供多种订阅方式，比如 **YouTube** **可以订阅用户和频道、Telegram** 可以订阅频道和贴纸包等等。

## 前端如何自制一个 rss 订阅源 ?

自制背景以 markdown 文件为例。

### 前期准备

- **运行环境**：[nodejs](https://nodejs.org/en)

- **构建工具**：[esno](https://github.com/antfu/esno)

- **npm依赖**：[feed](https://www.npmjs.com/package/feed)，[markdown-it](https://www.npmjs.com/package/markdown-it)

### 代码实现

```ts
/**
 * @name 依赖导入
 */
import { dirname } from 'node:path'
import fg from 'fast-glob'
import fs from 'fs-extra'
import matter from 'gray-matter'
import MarkdownIt from 'markdown-it'
import type { FeedOptions, Item } from 'feed'
import { Feed } from 'feed'

/**
 * @name 公用base路径
 */
const DOMAIN = 'https://random-thoughts.fe-ecosphere.com/'

/**
 * @name 定义作者信息
 */
const AUTHOR = {
  name: 'Ethan Li',
  email: 'liqingyunld@gmail.com',
  link: DOMAIN,
}

/**
 * @name 创建markdownIt实例
 */
const markdown = MarkdownIt({
  html: true,
  breaks: true,
  linkify: true,
})

/**
 * @name 脚本运行函数
 */
async function run() {
  await buildBlogRSS()
}

/**
 * @name 构建markdown文档rss订阅源
 */
async function buildBlogRSS() {

  /**
   * @name 通过路径获取文档列表文件信息
   */
  const files = await fg('docs/notes/*.md')

  /**
   * @name 基础信息，用于feed生成rss订阅源使用
   */
  const options = {
    title: 'Qingyun199\' Blog',
    description: 'Qingyun199\' Blog',
    id: 'https://random-thoughts.fe-ecosphere.com/',
    link: 'https://random-thoughts.fe-ecosphere.com/',
    copyright: 'CC BY-NC-SA 4.0 2024 © Qingyun199',
    feedLinks: {
      json: 'https://random-thoughts.fe-ecosphere.com/feed.json',
      atom: 'https://random-thoughts.fe-ecosphere.com/feed.atom',
      rss: 'https://random-thoughts.fe-ecosphere.com/feed.xml',
    },
  }

  /**
   * @name 将文件列表信息进行处理
   */
  const notes: any[] = (
    await Promise.all(
      
      /**
       * @name 过滤掉名为index的文章
       * 因为index普遍用于文章列表的展示，可自行选择是否忽略
       */
      files.filter(i => !i.includes('index'))
        .map(async (i) => {

          /**
           * @name 以utf-8读取文件信息
           */
          const raw = await fs.readFile(i, 'utf-8')
          
          /**
           * @name 将文档信息进行处理，拆分为标题内容、文档内容
           */
          const { data, content } = matter(raw)

          /**
           * @name 见文档中的格式进行兼容处理转换为html
           */
          const html = markdown.render(content)
            .replace('src="/', `src="${DOMAIN}/`)

          /**
           * @name 如果存在相对路径图片，则转换为绝对路径
           */
          if (data.image?.startsWith('/'))
            data.image = DOMAIN + data.image

          return {
            ...data,
            date: new Date(data.date),
            content: html,
            author: [AUTHOR],
            link: DOMAIN + i.replace(/^docs(.+)\.md$/, '$1'),
          }
        }),
    ))
    .filter(Boolean)

  /**
   * @name 将文档根据时间进行降序排列
   */
  notes.sort((a, b) => +new Date(b.date) - +new Date(a.date))

  /**
   * @name 进行feed写入
   */
  await writeFeed('feed', options, notes)
}

/**
 * 写入rss订阅源信息
 */
async function writeFeed(name: string, options: FeedOptions, items: Item[]) {

  /**
   * @name 作者信息
   */
  options.author = AUTHOR

  /**
   * @name 展示图片
   */
  options.image = 'https://avatars.githubusercontent.com/u/54627537'

  /**
   * @name icon 图标
   */
  options.favicon = 'https://avatars.githubusercontent.com/u/54627537'

  /**
   * @name 创建feed实例
   */
  const feed = new Feed(options)

  /**
   * @name 循环将文件列表添加到feed中
   */
  items.forEach(item => feed.addItem(item))

  /**
   * @name 在构建好的dist目录中添加rss源
   */
  await fs.ensureDir(dirname(`./dist/${name}`))
  await fs.writeFile(`./dist/${name}.xml`, feed.rss2(), 'utf-8')
  await fs.writeFile(`./dist/${name}.atom`, feed.atom1(), 'utf-8')
  await fs.writeFile(`./dist/${name}.json`, feed.json1(), 'utf-8')
}

run()
```

## 最后

**rss** 并不是在生活中一定要使用，它只是一种信息订阅聚合的手段。它更原始，你只需要添加 **rss** ，之后就交给 **rss 阅读工具** 来帮你整理信息。但如果你希望使用它，我希望本篇文章可以帮助到你。
