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
    title: 'Ethan Li\' Blog',
    description: 'Ethan Li\' Blog',
    id: 'https://random-thoughts.fe-ecosphere.com/',
    link: 'https://random-thoughts.fe-ecosphere.com/',
    copyright: 'CC BY-NC-SA 4.0 2024 © Ethan Li',
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
