import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'
import Markdown from 'unplugin-vue-markdown/vite'
import MarkdownItShikiji from 'markdown-it-shikiji'
import TOC from 'markdown-it-table-of-contents'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'
import Pages from 'vite-plugin-pages'
import IconsResolver from 'unplugin-icons/resolver'
import anchor from 'markdown-it-anchor'
import LinkAttributes from 'markdown-it-link-attributes'
import AutoImport from 'unplugin-auto-import/vite'
import matter from 'gray-matter'
import { rendererRich, transformerTwoSlash } from 'shikiji-twoslash'
import { slugify } from './scripts/slugify'
import fs from 'fs-extra'
import Unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default  defineConfig({
  resolve: {
    alias: [
      { find: '~/', replacement: `${resolve(__dirname, 'src')}/` },
    ],
  },
  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
      '@vueuse/core',
      'dayjs',
      'dayjs/plugin/localizedFormat',
    ],
  },
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Unocss(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
        '@vueuse/head'
      ],
    }),
    Components({
      extensions: ['vue', 'md'],
      dts: true,
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        IconsResolver({
          componentPrefix: '',
        }),
      ],
    }),
    Pages({
      extensions: ['vue', 'md'],
    }),
    Icons({
      defaultClass: 'inline',
      defaultStyle: 'vertical-align: sub;',
    }),
    Markdown({
      wrapperComponent: 'WrapperPost',
      wrapperClasses: 'prose m-auto',
      headEnabled: true,
      exportFrontmatter: false,
      exposeFrontmatter: false,
      exposeExcerpt: false,
      markdownItSetup: async (md) => {
        md.use(await MarkdownItShikiji({
          themes: {
            light: 'vitesse-light',
            dark: 'vitesse-dark',
          },
          defaultColor: false,
          cssVariablePrefix: '--s-',
          transformers: [
            transformerTwoSlash({
              explicitTrigger: true,
              renderer: rendererRich(),
            }),
          ],
        }))
        md.use(anchor, {
          slugify,
        })
        md.use(LinkAttributes, {
          matcher: (link: string) => /^https?:\/\//.test(link),
          attrs: {
            target: '_blank',
            rel: 'noopener',
          },
        })
        md.use(TOC, {
          includeLevel: [1, 2, 3, 4],
          slugify,
          containerHeaderHtml: '<div class="table-of-contents-anchor"><div class="i-ri-menu-2-fill dark:text-white" /></div>',
        })
      },
     }),
  ],
})
